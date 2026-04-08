/**
 * Tests for the VPS index router (execute function).
 *
 * Verifies that the execute function properly routes to the correct
 * operation handler based on resource and operation parameters.
 *
 * Uses the new per-node architecture: nodes/OvhCloudVps/index.ts
 */

import type { IExecuteFunctions } from 'n8n-workflow';

// ─── Mock ApiClient (shared transport) ───────────────────────────────────────

const mockHttpGet = jest.fn().mockResolvedValue({ data: 'mocked' });
const mockHttpPost = jest.fn().mockResolvedValue({ data: 'mocked' });
const mockHttpPut = jest.fn().mockResolvedValue({ data: 'mocked' });
const mockHttpDelete = jest.fn().mockResolvedValue({ data: 'mocked' });

jest.mock('../shared/transport/ApiClientImpl', () => ({
	ApiClient: jest.fn().mockImplementation(() => ({
		httpGet: mockHttpGet,
		httpPost: mockHttpPost,
		httpPut: mockHttpPut,
		httpDelete: mockHttpDelete,
	})),
}));

import { execute } from '../nodes/OvhCloudVps';

function createMockExecuteFunctions(
	params: Record<string, unknown>,
): jest.Mocked<IExecuteFunctions> {
	return {
		getNodeParameter: jest.fn((paramName: string, _itemIndex: number, opts?: unknown) => {
			const value = params[paramName];
			if (
				typeof opts === 'object' &&
				opts !== null &&
				'extractValue' in opts &&
				(opts as { extractValue?: boolean }).extractValue &&
				typeof value === 'object' &&
				value !== null &&
				'value' in value
			) {
				return (value as { value: unknown }).value;
			}
			return value;
		}),
		getCredentials: jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		}),
		getNode: jest.fn().mockReturnValue({ name: 'OVH Cloud VPS', type: 'ovhCloudVps' }),
		helpers: {
			returnJsonArray: jest.fn((data) => [{ json: data }]),
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

describe('VPS Index - execute function routing', () => {
	beforeEach(() => {
		jest.clearAllMocks();
		mockHttpGet.mockResolvedValue({ data: 'mocked' });
		mockHttpPost.mockResolvedValue({ data: 'mocked' });
	});

	describe('VPS resource operations', () => {
		it('should route vps/get to httpGet /vps/{serviceName}', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'vps',
				vpsOperation: 'get',
				serviceName: { mode: 'str', value: 'vps123' },
			});

			await execute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/vps/vps123');
		});

		it('should route vps/list to httpGet /vps', async () => {
			mockHttpGet.mockResolvedValue(['vps1', 'vps2']);
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'vps',
				vpsOperation: 'list',
			});

			await execute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/vps');
		});
	});

	describe('Power resource operations', () => {
		it('should route power/start to httpPost /vps/{serviceName}/start', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'power',
				vpsPowerOperation: 'start',
				serviceName: { mode: 'str', value: 'vps123' },
			});

			await execute.call(mockCtx);

			expect(mockHttpPost).toHaveBeenCalledWith('/vps/vps123/start');
		});

		it('should route power/stop to httpPost /vps/{serviceName}/stop', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'power',
				vpsPowerOperation: 'stop',
				serviceName: { mode: 'str', value: 'vps123' },
			});

			await execute.call(mockCtx);

			expect(mockHttpPost).toHaveBeenCalledWith('/vps/vps123/stop');
		});

		it('should route power/reboot to httpPost /vps/{serviceName}/reboot', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'power',
				vpsPowerOperation: 'reboot',
				serviceName: { mode: 'str', value: 'vps123' },
			});

			await execute.call(mockCtx);

			expect(mockHttpPost).toHaveBeenCalledWith('/vps/vps123/reboot');
		});
	});

	describe('Disks resource operations', () => {
		it('should route disks/get to httpGet', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'disks',
				vpsDisksOperation: 'get',
				serviceName: { mode: 'str', value: 'vps123' },
				diskId: '1',
			});

			await execute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalled();
		});

		it('should route disks/list to httpGet', async () => {
			mockHttpGet.mockResolvedValue([1, 2]);
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'disks',
				vpsDisksOperation: 'list',
				serviceName: { mode: 'str', value: 'vps123' },
			});

			await execute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalled();
		});
	});

	describe('Snapshot resource operations', () => {
		it('should route snapshot/create to appropriate handler', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'snapshot',
				vpsSnapshotOperation: 'create',
				snapshotOperation: 'create',
				serviceName: { mode: 'str', value: 'vps123' },
				snapshotDescription: 'test snapshot',
			});

			await execute.call(mockCtx);

			expect(mockHttpPost).toHaveBeenCalled();
		});
	});

	describe('Error handling', () => {
		it('should throw error for unsupported resource', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'nonexistentResource',
			});

			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported resource "nonexistentResource" for VPS operations',
			);
		});

		it('should throw error for unsupported operation on vps resource', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'vps',
				vpsOperation: 'nonexistentOperation',
			});

			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "vps"',
			);
		});

		it('should throw error for unsupported operation on power resource', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'power',
				vpsPowerOperation: 'nonexistentOperation',
			});

			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "power"',
			);
		});

		it('should throw error for unsupported operation on disks resource', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'disks',
				vpsDisksOperation: 'nonexistentOperation',
			});

			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "disks"',
			);
		});

		it('should throw error for unsupported operation on snapshot resource', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'snapshot',
				vpsSnapshotOperation: 'nonexistentOperation',
			});

			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "snapshot"',
			);
		});

		it('should throw error for unsupported operation on ips resource', async () => {
			const mockCtx = createMockExecuteFunctions({
				vpsResource: 'ips',
				vpsIpsOperation: 'nonexistentOperation',
			});

			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "ips"',
			);
		});
	});
});

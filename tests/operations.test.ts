/**
 * Tests for representative operation executions across different resources.
 *
 * Verifies that individual operation handlers correctly:
 * - Build API endpoints with proper parameters
 * - Call the ApiClient with correct HTTP methods
 * - Return properly formatted n8n execution data
 *
 * Tests cover:
 * - Domain list (simple GET, no params)
 * - Domain get (GET with path parameter)
 * - VPS get (GET with resourceLocator parameter)
 * - VPS power start (POST operation)
 * - Me get (simple account info)
 */

import type { IExecuteFunctions, INodeExecutionData, IDataObject } from 'n8n-workflow';

// ─── Mock ApiClient ──────────────────────────────────────────────────────────

const mockHttpGet = jest.fn();
const mockHttpPost = jest.fn();
const mockHttpPut = jest.fn();
const mockHttpDelete = jest.fn();

jest.mock('../nodes/OvhCloud/transport/ApiClientImpl', () => ({
	ApiClient: jest.fn().mockImplementation(() => ({
		httpGet: mockHttpGet,
		httpPost: mockHttpPost,
		httpPut: mockHttpPut,
		httpDelete: mockHttpDelete,
	})),
}));

// ─── Import operations under test ────────────────────────────────────────────

import { execute as domainListExecute } from '../nodes/OvhCloud/actions/domain/list.operation';
import { execute as domainGetExecute } from '../nodes/OvhCloud/actions/domain/get.operation';
import { execute as vpsGetExecute } from '../nodes/OvhCloud/actions/vps/get.operation';
import { executePowerStart } from '../nodes/OvhCloud/actions/vps/resources/power/start.operation';
import { execute as meGetExecute } from '../nodes/OvhCloud/actions/me/get.operation';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function createMockExecuteFunctions(
	params: Record<string, unknown> = {},
): jest.Mocked<IExecuteFunctions> {
	const returnJsonArray = jest.fn((data: unknown): INodeExecutionData[] => {
		const arr = Array.isArray(data) ? data : [data];
		return arr.map((item) => ({ json: item as IDataObject }));
	});

	return {
		getNodeParameter: jest.fn(
			(param: string, _itemIndex: number, options?: { extractValue?: boolean }) => {
				const value = params[param];
				if (
					options?.extractValue &&
					typeof value === 'object' &&
					value !== null &&
					'value' in value
				) {
					return (value as { value: unknown }).value;
				}
				return value;
			},
		),
		getNode: jest.fn(() => ({ name: 'OVH Cloud', type: 'ovhCloud' })),
		helpers: {
			returnJsonArray,
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('Operation Executions', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('Domain — List operation', () => {
		it('should call httpGet with /domain endpoint', async () => {
			mockHttpGet.mockResolvedValue(['example.com', 'test.org']);
			const mockCtx = createMockExecuteFunctions();

			await domainListExecute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/domain');
			expect(mockHttpGet).toHaveBeenCalledTimes(1);
		});

		it('should return array of domain names wrapped in json objects', async () => {
			mockHttpGet.mockResolvedValue(['example.com', 'test.org']);
			const mockCtx = createMockExecuteFunctions();

			const result = await domainListExecute.call(mockCtx);

			expect(result).toHaveLength(2);
			expect(result[0]).toEqual({ json: 'example.com' });
			expect(result[1]).toEqual({ json: 'test.org' });
		});

		it('should handle empty domain list', async () => {
			mockHttpGet.mockResolvedValue([]);
			const mockCtx = createMockExecuteFunctions();

			const result = await domainListExecute.call(mockCtx);

			expect(result).toHaveLength(0);
		});
	});

	describe('Domain — Get operation', () => {
		it('should call httpGet with /domain/{domainName} endpoint', async () => {
			mockHttpGet.mockResolvedValue({ name: 'example.com', status: 'ok' });
			const mockCtx = createMockExecuteFunctions({ domainName: 'example.com' });

			await domainGetExecute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/domain/example.com');
		});

		it('should return single domain details wrapped in json object', async () => {
			const domainData = { name: 'example.com', status: 'ok', owner: 'user123' };
			mockHttpGet.mockResolvedValue(domainData);
			const mockCtx = createMockExecuteFunctions({ domainName: 'example.com' });

			const result = await domainGetExecute.call(mockCtx);

			expect(result).toHaveLength(1);
			expect(result[0]).toEqual({ json: domainData });
		});

		it('should handle domain names with subdomains', async () => {
			mockHttpGet.mockResolvedValue({ name: 'sub.example.com' });
			const mockCtx = createMockExecuteFunctions({ domainName: 'sub.example.com' });

			await domainGetExecute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/domain/sub.example.com');
		});
	});

	describe('VPS — Get operation', () => {
		it('should call httpGet with /vps/{serviceName} endpoint', async () => {
			const vpsData = {
				serviceName: 'vps1234567',
				state: 'started',
				plan: 'vps-ssd-1',
			};
			mockHttpGet.mockResolvedValue(vpsData);
			const mockCtx = createMockExecuteFunctions({
				serviceName: { mode: 'str', value: 'vps1234567' },
			});

			await vpsGetExecute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/vps/vps1234567');
		});

		it('should extract value from resourceLocator parameter', async () => {
			mockHttpGet.mockResolvedValue({ serviceName: 'my-vps' });
			const mockCtx = createMockExecuteFunctions({
				serviceName: { mode: 'list', value: 'my-vps' },
			});

			await vpsGetExecute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/vps/my-vps');
		});

		it('should return VPS details using returnJsonArray helper', async () => {
			const vpsData = { serviceName: 'vps123', state: 'stopped' };
			mockHttpGet.mockResolvedValue(vpsData);
			const mockCtx = createMockExecuteFunctions({
				serviceName: { mode: 'str', value: 'vps123' },
			});

			await vpsGetExecute.call(mockCtx);

			expect(mockCtx.helpers.returnJsonArray).toHaveBeenCalledWith(vpsData);
		});
	});

	describe('VPS — Power Start operation', () => {
		it('should call httpPost with /vps/{serviceName}/start endpoint', async () => {
			mockHttpPost.mockResolvedValue({ taskId: 12345, status: 'todo' });
			const mockCtx = createMockExecuteFunctions({
				serviceName: { mode: 'str', value: 'vps1234567' },
			});

			await executePowerStart.call(mockCtx);

			expect(mockHttpPost).toHaveBeenCalledWith('/vps/vps1234567/start');
		});

		it('should return task response using returnJsonArray helper', async () => {
			const taskData = { taskId: 12345, status: 'todo' };
			mockHttpPost.mockResolvedValue(taskData);
			const mockCtx = createMockExecuteFunctions({
				serviceName: { mode: 'str', value: 'vps123' },
			});

			await executePowerStart.call(mockCtx);

			expect(mockCtx.helpers.returnJsonArray).toHaveBeenCalledWith(taskData);
		});
	});

	describe('Me — Get operation', () => {
		it('should call httpGet with /me endpoint', async () => {
			const meData = {
				nichandle: 'abc123',
				email: 'user@example.com',
				firstname: 'John',
				lastname: 'Doe',
			};
			mockHttpGet.mockResolvedValue(meData);
			const mockCtx = createMockExecuteFunctions();

			await meGetExecute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/me');
		});

		it('should return account info wrapped in json object', async () => {
			const meData = { nichandle: 'abc123', email: 'user@example.com' };
			mockHttpGet.mockResolvedValue(meData);
			const mockCtx = createMockExecuteFunctions();

			const result = await meGetExecute.call(mockCtx);

			expect(result).toHaveLength(1);
			expect(result[0]).toEqual({ json: meData });
		});
	});

	describe('Error propagation', () => {
		it('should propagate ApiClient errors from domain list', async () => {
			mockHttpGet.mockRejectedValue(new Error('API connection failed'));
			const mockCtx = createMockExecuteFunctions();

			await expect(domainListExecute.call(mockCtx)).rejects.toThrow('API connection failed');
		});

		it('should propagate ApiClient errors from domain get', async () => {
			mockHttpGet.mockRejectedValue(new Error('Domain not found'));
			const mockCtx = createMockExecuteFunctions({ domainName: 'nonexistent.com' });

			await expect(domainGetExecute.call(mockCtx)).rejects.toThrow('Domain not found');
		});

		it('should propagate ApiClient errors from VPS get', async () => {
			mockHttpGet.mockRejectedValue(new Error('VPS not found'));
			const mockCtx = createMockExecuteFunctions({
				serviceName: { mode: 'str', value: 'nonexistent-vps' },
			});

			await expect(vpsGetExecute.call(mockCtx)).rejects.toThrow('VPS not found');
		});

		it('should propagate ApiClient errors from power start', async () => {
			mockHttpPost.mockRejectedValue(new Error('VPS is already started'));
			const mockCtx = createMockExecuteFunctions({
				serviceName: { mode: 'str', value: 'vps123' },
			});

			await expect(executePowerStart.call(mockCtx)).rejects.toThrow('VPS is already started');
		});
	});
});

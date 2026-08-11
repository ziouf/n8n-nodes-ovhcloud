/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for VPS List operation — returnFullObjects + maxItems parameters.
 *
 * Verifies that:
 * - description() exposes the returnFullObjects boolean and maxItems number parameters
 * - execute() with returnFullObjects=false calls httpGet (name list)
 * - execute() with returnFullObjects=true calls paginateResources (full objects)
 * - execute() with returnFullObjects undefined falls back to httpGet (default)
 */

jest.mock('../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		paginateResources: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../shared/transport/ApiClient';
import { description, execute } from '../nodes/OvhCloudVps/list.operation';

describe('VPS List operation', () => {
	let mockExecuteFunctions: any;
	let mockClient: any;

	beforeEach(() => {
		jest.clearAllMocks();
		// The mock constructor returns the shared mockHttpClient object
		mockClient = (ApiClient as any)();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	// ─── Test 1: description ───────────────────────────────────────────────

	it('description() should return 2 parameters: returnFullObjects and maxItems', () => {
		const displayOptions = { show: { vpsOperation: ['list'] } };
		const props = description(displayOptions);

		expect(props).toHaveLength(2);

		const toggleParam = props[0];
		expect(toggleParam.name).toBe('returnFullObjects');
		expect(toggleParam.type).toBe('boolean');
		expect(toggleParam.default).toBe(false);
		expect(toggleParam.displayName).toBe('Return Full Objects');
		expect(toggleParam.noDataExpression).toBe(true);

		const maxItemsParam = props[1];
		expect(maxItemsParam.name).toBe('maxItems');
		expect(maxItemsParam.type).toBe('number');
		expect(maxItemsParam.default).toBe(1000);
		expect(maxItemsParam.displayName).toBe('Max Items');
	});

	// ─── Test 2: execute with returnFullObjects = false ────────────────────

	it('execute with returnFullObjects=false should call httpGet and return name objects', async () => {
		const vpsNames = ['vps-1', 'vps-2'];
		mockClient.httpGet.mockResolvedValue(vpsNames);

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return false;
			if (key === 'maxItems') return 1000;
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps');
		expect(mockClient.paginateResources).not.toHaveBeenCalled();
		expect(result).toEqual([{ name: 'vps-1' }, { name: 'vps-2' }]);
	});

	// ─── Test 3: execute with returnFullObjects = true ─────────────────────

	it('execute with returnFullObjects=true should call paginateResources and return full objects', async () => {
		const fullObjects = [
			{ name: 'vps-1', state: 'running' },
			{ name: 'vps-2', state: 'stopped' },
		];
		mockClient.paginateResources.mockResolvedValue(fullObjects);

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return true;
			if (key === 'maxItems') return 1000;
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(mockClient.paginateResources).toHaveBeenCalledWith(
			'/vps',
			'/vps/{id}',
			expect.objectContaining({ maxItems: 1000, onSkipped: expect.any(Function) }),
		);
		expect(mockClient.httpGet).not.toHaveBeenCalled();
		expect(result).toEqual(fullObjects);
	});

	// ─── Test 4: execute with returnFullObjects undefined (default fallback) ─

	it('execute with returnFullObjects undefined should default to httpGet (backward compatible)', async () => {
		const vpsNames = ['vps-1', 'vps-2'];
		mockClient.httpGet.mockResolvedValue(vpsNames);

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return undefined;
			if (key === 'maxItems') return 1000;
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps');
		expect(mockClient.paginateResources).not.toHaveBeenCalled();
		expect(result).toEqual([{ name: 'vps-1' }, { name: 'vps-2' }]);
	});

	// ─── Test 5: warning item appended at end when resources are skipped ──

	it('execute with returnFullObjects=true should append warning as last item when onSkipped is called', async () => {
		const fullObjects = [{ name: 'vps-1', state: 'running' }];
		mockClient.paginateResources.mockImplementation(async (_listEndpoint, _itemEndpoint, opts) => {
			// Simulate a skip callback being invoked
			if (opts?.onSkipped) {
				opts.onSkipped('vps-2', new Error('Not found'));
			}
			return fullObjects;
		});

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return true;
			if (key === 'maxItems') return 1000;
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(result).toHaveLength(2);

		// First item should be the clean resource (no warning/skippedIds)
		expect(result[0]).toEqual({ name: 'vps-1', state: 'running' });
		expect(result[0]).not.toHaveProperty('warning');
		expect(result[0]).not.toHaveProperty('skippedIds');

		// Last item should be the warning item in INodeExecutionData format
		expect(result[1]).toHaveProperty('json');
		expect(result[1].json).toHaveProperty('warning');
		expect(result[1].json).toHaveProperty('skippedIds');
		expect(Array.isArray(result[1].json.skippedIds)).toBe(true);
		expect(result[1]).toHaveProperty('pairedItem');
		expect(result[1].pairedItem).toEqual({ item: 0 });
	});

	// ─── Test 6: no warning item when no resources are skipped ────────────

	it('execute with returnFullObjects=true should return only resources when nothing is skipped', async () => {
		const fullObjects = [
			{ name: 'vps-1', state: 'running' },
			{ name: 'vps-2', state: 'stopped' },
		];
		mockClient.paginateResources.mockResolvedValue(fullObjects);

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return true;
			if (key === 'maxItems') return 1000;
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(result).toHaveLength(2);
		expect(result).toEqual(fullObjects);

		// No warning items anywhere
		for (const item of result) {
			expect(item).not.toHaveProperty('warning');
			expect(item).not.toHaveProperty('skippedIds');
		}
	});
});

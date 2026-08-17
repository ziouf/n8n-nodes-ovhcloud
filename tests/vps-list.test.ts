/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for VPS List operation — returnFullObjects + maxItems parameters.
 *
 * Verifies that:
 * - description() exposes the returnFullObjects boolean and maxItems number parameters
 * - execute() with returnFullObjects=false calls httpGet (name list)
 * - execute() with returnFullObjects=true calls httpGet for list + details (full objects)
 * - execute() with returnFullObjects undefined falls back to httpGet (default)
 */

import { createMockApiClient } from './helpers/mockClient';

const mockClient = createMockApiClient();

jest.mock('../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

import { description, execute } from '../nodes/OvhCloudVps/list.operation';

describe('VPS List operation', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	// ─── Test 1: description ───────────────────────────────────────────────

	it('description() should return 3 parameters: returnFullObjects, maxItems, and filters', () => {
		const displayOptions = { show: { vpsOperation: ['list'] } };
		const props = description(displayOptions);

		expect(props).toHaveLength(3);

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

		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps', undefined);
		expect(mockClient.paginateResources).not.toHaveBeenCalled();
		expect(result).toEqual([{ name: 'vps-1' }, { name: 'vps-2' }]);
	});

	// ─── Test 3: execute with returnFullObjects = true ─────────────────────

	it('execute with returnFullObjects=true should call httpGet for list and details', async () => {
		const ids = ['vps-1', 'vps-2'];
		const fullObjects = [
			{ name: 'vps-1', state: 'running' },
			{ name: 'vps-2', state: 'stopped' },
		];
		mockClient.httpGet.mockResolvedValueOnce(ids);
		mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);
		mockClient.httpGet.mockResolvedValueOnce(fullObjects[1]);

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return true;
			if (key === 'maxItems') return 1000;
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps');
		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps/vps-1');
		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps/vps-2');
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

		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps', undefined);
		expect(mockClient.paginateResources).not.toHaveBeenCalled();
		expect(result).toEqual([{ name: 'vps-1' }, { name: 'vps-2' }]);
	});

	// ─── Test 5: warning item appended at end when resources are skipped ──

	it('execute with returnFullObjects=true should append warning as last item when fetch fails', async () => {
		const ids = ['vps-1', 'vps-2'];
		const fullObject = { name: 'vps-1', state: 'running' };
		mockClient.httpGet.mockResolvedValueOnce(ids);
		mockClient.httpGet.mockResolvedValueOnce(fullObject);
		mockClient.httpGet.mockRejectedValueOnce(new Error('Not found'));

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return true;
			if (key === 'maxItems') return 1000;
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(result).toHaveLength(2);

		// First item should be the clean resource
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
		const ids = ['vps-1', 'vps-2'];
		const fullObjects = [
			{ name: 'vps-1', state: 'running' },
			{ name: 'vps-2', state: 'stopped' },
		];
		mockClient.httpGet.mockResolvedValueOnce(ids);
		mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);
		mockClient.httpGet.mockResolvedValueOnce(fullObjects[1]);

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

	// ─── Test 7: maxItems cap applied client-side ─────────────────────────

	it('execute with returnFullObjects=true should cap results to maxItems', async () => {
		const ids = ['vps-1', 'vps-2', 'vps-3', 'vps-4', 'vps-5'];
		const fullObjects = [
			{ name: 'vps-1', state: 'running' },
			{ name: 'vps-2', state: 'stopped' },
		];
		mockClient.httpGet.mockResolvedValueOnce(ids);
		mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);
		mockClient.httpGet.mockResolvedValueOnce(fullObjects[1]);

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return true;
			if (key === 'maxItems') return 2;
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(result).toHaveLength(2);
		expect(result).toEqual(fullObjects);
		// Only first 2 IDs should have been fetched
		expect(mockClient.httpGet).not.toHaveBeenCalledWith('/vps/vps-3');
	});

	// ─── Test 8: filters passed to httpGet ────────────────────────────────

	it('execute with returnFullObjects=true should pass filter query to list httpGet', async () => {
		const ids = ['vps-1'];
		const fullObject = { name: 'vps-1', state: 'running' };
		const filterQuery = { iamTags: { environment: [{ operator: 'EQ', value: 'prod' }] } };
		mockClient.httpGet.mockResolvedValueOnce(ids);
		mockClient.httpGet.mockResolvedValueOnce(fullObject);

		mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
			if (key === 'returnFullObjects') return true;
			if (key === 'maxItems') return 1000;
			if (key === 'filters')
				return {
					iamTags: { value: JSON.stringify({ environment: [{ operator: 'EQ', value: 'prod' }] }) },
				};
			return '';
		});

		const result = await execute.call(mockExecuteFunctions);

		expect(mockClient.httpGet).toHaveBeenCalledWith('/vps', filterQuery);
		expect(result).toEqual([fullObject]);
	});
});

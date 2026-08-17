/**
 * Unit tests for createOperationDispatcher.
 *
 * Covers the shared operation-layer contract relied on by every migrated
 * node index: Operation dropdown description, per-entry `show` wiring,
 * default/`noDefault` resolution, and execute dispatch + unknown-op error.
 */
import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { createOperationDispatcher } from '../shared/nodes/createNodeDispatcher';

const makeEntry = (value: string, executeName: string) => ({
	name: `Op ${value}`,
	value,
	action: `Action ${value}`,
	execute: async function (
		this: IExecuteFunctions,
		_itemIndex: number,
	): Promise<INodeExecutionData[]> {
		return [{ json: { op: executeName } }];
	},
	description: (displayOptions) => [
		{
			displayName: `Field ${value}`,
			name: `field${value}`,
			type: 'string',
			default: '',
			displayOptions,
		},
	],
});

describe('createOperationDispatcher', () => {
	it('builds the Operation dropdown with entries in order, default from default entry', () => {
		const { description } = createOperationDispatcher('opParam', 'res', [
			makeEntry('a', 'execA'),
			{ ...makeEntry('b', 'execB'), default: true },
			makeEntry('c', 'execC'),
		]);

		const props = description({});
		const operation = props[0];

		expect(operation.name).toBe('opParam');
		expect(operation.type).toBe('options');
		expect(operation.default).toBe('b');
		expect(operation.options).toEqual([
			{ name: 'Op a', value: 'a', action: 'Action a' },
			{ name: 'Op b', value: 'b', action: 'Action b' },
			{ name: 'Op c', value: 'c', action: 'Action c' },
		]);
	});

	it('omits displayOptions when called with an empty object', () => {
		const { description } = createOperationDispatcher('opParam', 'res', [makeEntry('a', 'e')]);
		const operation = description({})[0];
		expect(operation).not.toHaveProperty('displayOptions');
	});

	it('wires each entry description with a show block scoped to the operation param', () => {
		const { description } = createOperationDispatcher('opParam', 'res', [
			makeEntry('a', 'e'),
			makeEntry('b', 'e'),
		]);

		const props = description({});
		expect(props).toHaveLength(3); // operation + 2 field props
		expect(props[1].name).toBe('fielda');
		expect(props[1].displayOptions).toEqual({ show: { opParam: ['a'] } });
		expect(props[2].name).toBe('fieldb');
		expect(props[2].displayOptions).toEqual({ show: { opParam: ['b'] } });
	});

	it('respects noDefault (no preselected operation)', () => {
		const { description } = createOperationDispatcher(
			'opParam',
			'res',
			[makeEntry('a', 'e')],
			{ noDefault: true },
		);
		expect(description({})[0].default).toBeUndefined();
	});

	it('honours defaultOperation overrides the default entry', () => {
		const { description } = createOperationDispatcher(
			'opParam',
			'res',
			[{ ...makeEntry('a', 'e'), default: true }, makeEntry('b', 'e2')],
			{ defaultOperation: 'b' },
		);
		expect(description({})[0].default).toBe('b');
	});

	it('dispatches the selected entry to its execute, at the given itemIndex', async () => {
		let calledWith: number | undefined;
		const { execute } = createOperationDispatcher('opParam', 'res', [
			{
				name: 'A',
				value: 'a',
				action: 'A',
				execute: async function (
					this: IExecuteFunctions,
					itemIndex: number,
				): Promise<INodeExecutionData[]> {
					calledWith = itemIndex;
					return [{ json: { ok: true } }];
				},
				description: () => [],
			},
		]);

		const ctx = {
			getNodeParameter: jest.fn().mockReturnValue('a'),
		} as unknown as IExecuteFunctions;

		const result = await execute.call(ctx, 5);
		expect(calledWith).toBe(5);
		expect(result).toEqual([{ json: { ok: true } }]);
	});

	it('throws a descriptive error for an unknown operation', async () => {
		const { execute } = createOperationDispatcher('opParam', 'res', [makeEntry('a', 'e')]);
		const ctx = {
			getNodeParameter: jest.fn().mockReturnValue('nope'),
		} as unknown as IExecuteFunctions;

		await expect(execute.call(ctx, 0)).rejects.toThrow('Unsupported operation "nope" for resource "res"');
	});
});

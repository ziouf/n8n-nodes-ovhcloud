import {
	IExecuteFunctions,
	type INodeExecutionData,
	type INodeTypeDescription,
	type JsonObject,
	NodeApiError,
} from 'n8n-workflow';

/**
 * Abstract base class for all OVH Cloud n8n nodes.
 *
 * Provides the common execute() template method that handles:
 * - Iterating over input items
 * - Try/catch error handling with continueOnFail support
 * - Consistent error response formatting
 *
 * Each concrete node must implement:
 * - `description`: the INodeTypeDescription
 * - `executeOperations()`: the operation-specific logic
 *
 * @example
 * ```typescript
 * export class OvhCloudVps extends BaseNode implements INodeType {
 *   description = { ... };
 *   methods = { listSearch: { getVpsServices } };
 *
 *   async executeOperations(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
 *     return execute.call(this);
 *   }
 * }
 * ```
 */
export abstract class BaseNode {
	abstract description: INodeTypeDescription;

	abstract executeOperations(this: IExecuteFunctions): Promise<INodeExecutionData[]>;

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const result = await (
					this as unknown as { executeOperations(): Promise<INodeExecutionData[]> }
				).executeOperations();
				returnData.push(...(Array.isArray(result) ? result : [result]));
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: error instanceof Error ? error.message : String(error) },
						pairedItem: { item: i },
					});
					continue;
				}
				throw new NodeApiError(this.getNode(), error as unknown as JsonObject, { itemIndex: i });
			}
		}

		return [returnData];
	}
}

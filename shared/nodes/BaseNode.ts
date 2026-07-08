import {
	IExecuteFunctions,
	type INodeExecutionData,
	type INodeTypeDescription,
	type JsonObject,
	NodeApiError,
} from 'n8n-workflow';

/**
 * Shared execute template for all OVH Cloud nodes.
 *
 * Must be called with `.call(this, fn)` where `this` is the n8n IExecuteFunctions context
 * (i.e. the value n8n passes when invoking `node.execute.call(executeFunctions)`).
 *
 * @param fn - The node-specific operations function to invoke for each input item.
 */
export async function executeTemplate(
	this: IExecuteFunctions,
	fn: (this: IExecuteFunctions, itemIndex: number) => Promise<INodeExecutionData[]>,
): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const returnData: INodeExecutionData[] = [];

	for (let i = 0; i < items.length; i++) {
		try {
			const result = await fn.call(this, i);
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

/**
 * Abstract base class for all OVH Cloud n8n nodes.
 *
 * Concrete classes must:
 * - Declare `description: INodeTypeDescription`
 * - Implement `execute(this: IExecuteFunctions)` by calling `executeTemplate.call(this, fn)`
 */
export abstract class BaseNode {
	abstract description: INodeTypeDescription;
}

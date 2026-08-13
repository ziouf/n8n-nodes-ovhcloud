import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Recall ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Unique identifier of the recall to delete',
			displayOptions,
		},
	];
}

/**
 * Delete a specific eligibility recall.
 *
 * HTTP method: DELETE
 * Endpoint: /connectivity/eligibility/recall/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;

	await client.httpDelete(`/connectivity/eligibility/recall/${encodeURIComponent(id)}`);

	return this.helpers.returnJsonArray([{ success: true }]);
}

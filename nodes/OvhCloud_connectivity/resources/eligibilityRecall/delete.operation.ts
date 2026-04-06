import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete an eligibility recall.
 *
 * HTTP method: DELETE
 * Endpoint: /connectivity/eligibility/recall/{id}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Recall ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the eligibility recall to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Eligibility Recall operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpDelete(`/connectivity/eligibility/recall/${id}`)) as IDataObject;
	return [{ json: data }];
}

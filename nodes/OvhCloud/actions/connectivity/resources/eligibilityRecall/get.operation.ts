import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get an eligibility recall by ID.
 *
 * HTTP method: GET
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
			description: 'The ID of the eligibility recall',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Eligibility Recall operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpGet(`/connectivity/eligibility/recall/${id}`)) as IDataObject;
	return [{ json: data }];
}

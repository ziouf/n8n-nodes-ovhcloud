import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Recall ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Unique identifier of the recall',
			displayOptions,
		},
	];
}

/**
 * Get the details of a specific eligibility recall.
 *
 * HTTP method: GET
 * Endpoint: /connectivity/eligibility/recall/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as number;

	const data = (await client.httpGet(`/connectivity/eligibility/recall/${encodeURIComponent(id)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

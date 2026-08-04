import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'History ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'The history ID identifier',
			displayOptions,
		}

	];
}

/**
 * Executes the Get ConsumptionHistory operation.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceName}/consumption/history/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as number;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/services/${encodeURIComponent(serviceName)}/consumption/history/${encodeURIComponent(id)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

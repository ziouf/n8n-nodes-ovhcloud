import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
		},

	];
}

/**
 * Executes the Get GetMSService operation.
 *
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/msServices/' + serviceName)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

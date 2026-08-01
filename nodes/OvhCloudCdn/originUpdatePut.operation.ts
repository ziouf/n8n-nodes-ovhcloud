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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
		},
		{
			displayName: 'Origin ID',
			name: 'originId',
			type: 'string',
			default: '',
			required: true,
			description: 'The originId identifier',
		},

	];
}

/**
 * Executes the Put UpdateOrigin operation.
 *
 * HTTP method: PUT
 * Endpoint: /cdn/{serviceName}/origin/{originId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const originId = this.getNodeParameter('originId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/cdn/' + serviceName + '/origin/' + originId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the trusted IP',
			displayOptions,
		},
	];
}

/**
 * Executes the Remove Two Factor Authentication Whitelisted Network operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicatedCloud/{serviceName}/twoFAWhitelist/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const data = (await client.httpDelete(`/dedicatedCloud/${serviceName}/twoFAWhitelist/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

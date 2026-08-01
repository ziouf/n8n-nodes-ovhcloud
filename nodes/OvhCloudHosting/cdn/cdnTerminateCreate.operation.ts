import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
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
			displayOptions,
		},
	];
}

/**
 * Terminate CDN service
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/cdn/{serviceName}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const data = (await client.httpPost(`/hosting/web/cdn/${serviceName}/terminate`)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

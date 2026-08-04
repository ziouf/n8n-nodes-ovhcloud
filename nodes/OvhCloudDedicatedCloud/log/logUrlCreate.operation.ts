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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			required: true,
			description: 'Log kinds for your dedicated cloud',
			displayOptions,
		},
	];
}

/**
 * Executes the Generate a Log URL operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/log/url
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	body.kind = this.getNodeParameter('kind', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/log/url`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties, IDataObject } from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific UPN suffix for an MS service.
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}/upnSuffix/{suffix}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the MS service',
			displayOptions,
		},
		{
			displayName: 'Suffix',
			name: 'suffix',
			type: 'string',
			default: '',
			required: true,
			description: 'The UPN suffix',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const suffix = this.getNodeParameter('suffix', 0) as string;
	const data = (await client.httpGet(`/msServices/${serviceName}/upnSuffix/${suffix}`)) as IDataObject;
	return [{ json: data }];
}

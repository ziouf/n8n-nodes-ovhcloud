import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your mxplan organization',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanGet'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * Get this object properties
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan/{service}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

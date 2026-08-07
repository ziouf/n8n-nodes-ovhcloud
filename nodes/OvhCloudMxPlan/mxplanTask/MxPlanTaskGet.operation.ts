import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Id',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'Task id',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanTaskGet'],
				},
				...displayOptions,
			},
		},
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your mxplan organization',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanTaskGet'],
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
 * Endpoint: /email/mxplan/{service}/task/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', 0) as any;
	const service = this.getNodeParameter('service', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan/' + encodeURIComponent(service) + '/task/' + encodeURIComponent(id))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

import type { IDataObject, IExecuteFunctions, INodeExecutionData, IDisplayOptions, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Iam Tags',
			name: 'iamTags',
			type: 'string',
			default: '',
			description: 'Filter resources on IAM tags',
			displayOptions: {
				show: {
					mxPlanOperation: ['MxPlanList'],
				},
				...displayOptions,
			},
		},
	];
}

/**
 * List available services
 *
 * HTTP method: GET
 * Endpoint: /email/mxplan
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const iamTags = this.getNodeParameter('iamTags', 0) as any;

	const qs: IDataObject = {
		iamTags: iamTags,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/mxplan', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
					emailDomainOperation: ['DomainList'],
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
 * Endpoint: /email/domain
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const iamTags = this.getNodeParameter('iamTags', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
		iamTags: iamTags,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/domain', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

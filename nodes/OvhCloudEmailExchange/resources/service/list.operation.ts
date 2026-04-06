import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List Email Exchange services.
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'IAM Tags',
			name: 'iamTags',
			type: 'string',
			default: '',
			description: 'Filter by IAM tags (comma-separated)',
			displayOptions,
		},
	];
}

/**
 * Executes the List Services operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const iamTags = this.getNodeParameter('iamTags', 0, '') as string;

	const qs: IDataObject = {};
	if (iamTags) {
		qs.iamTags = iamTags;
	}

	const data = (await client.httpGet(`/email/exchange/${organizationName}/service`, {
		qs,
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

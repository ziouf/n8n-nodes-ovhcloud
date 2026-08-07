import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Iam Tags',
			name: 'iamTags',
			type: 'string',
			default: '',
			description: 'Filter resources on IAM tags',
		},
	];
}

/**
 * List available services
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const iamTags = this.getNodeParameter('iamTags', 0) as any;

	const qs: IDataObject = {
    iamTags: iamTags
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

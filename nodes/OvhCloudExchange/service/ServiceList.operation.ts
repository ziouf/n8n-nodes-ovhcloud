import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const iamTags = this.getNodeParameter('iamTags', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
    iamTags: iamTags
	};

	const client = getClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

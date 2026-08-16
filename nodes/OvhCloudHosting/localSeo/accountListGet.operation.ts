import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Filter the Local SEO accounts on their email',
			displayOptions,
		},
	];
}

/**
 * List the Local SEO accounts of the hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/localSeo/account
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const email = this.getNodeParameter('email', _itemIndex ?? 0, '') as string;

	const qs: IDataObject = {};
	if (email) {
		qs.email = email;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/localSeo/account`,
		qs,
	)) as string[];
	return this.helpers.returnJsonArray(data.map((id) => ({ id })));
}

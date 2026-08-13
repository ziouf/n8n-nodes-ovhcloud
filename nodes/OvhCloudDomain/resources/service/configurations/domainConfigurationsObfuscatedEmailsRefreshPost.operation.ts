import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDomainNames',
				displayName: 'Service Name',
				description: 'The service name',
				placeholder: 'example.com',
			}),
			displayOptions,
		},
		{
			displayName: 'Contacts',
			name: 'contacts',
			type: 'json',
			default: '',
			required: true,
			description: 'Type of the contacts to refresh email obfuscation for',
			displayOptions,
		},
	];
}

/**
 * Executes the Refresh an obfuscated emails configuration with new values operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/configurations/obfuscatedEmails/refresh
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const contacts = this.getNodeParameter('contacts', _itemIndex, '') as string;
		if (contacts !== '') body['contacts'] = JSON.parse(contacts);

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/configurations/obfuscatedEmails/refresh`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

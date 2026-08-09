import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
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
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const contacts = this.getNodeParameter('contacts', _itemIndex, '') as string;
		if (contacts !== '') body['contacts'] = JSON.parse(contacts);

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/configurations/obfuscatedEmails/refresh`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

import {
	type IDisplayOptions,
	type INodeExecutionData,
	type INodeProperties,
	IExecuteFunctions
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

/** Initiates a contact change procedure for the dedicated server. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
				{
			...serviceNameLocator({
			searchListMethod: 'getDedicatedServerServices',
			displayName: 'Dedicated Server Service Name',
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			placeholder: 'ns123456.ip-123-45-678.eu',
			}),
			displayOptions,
		},
		{
			displayName: 'New Contact (Nichandle)',
			name: 'newContact',
			type: 'string',
			default: '',
			required: true,
			description: "The nichandle of the new contact (e.g. OVH1234-ovh)",
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const newContact = this.getNodeParameter('newContact', _itemIndex ?? 0, '') as string;

	await client.httpPost(`/dedicated/server/${serviceName}/changeContact`, {});
	return this.helpers.returnJsonArray([{ serviceName, newContact }]);
}

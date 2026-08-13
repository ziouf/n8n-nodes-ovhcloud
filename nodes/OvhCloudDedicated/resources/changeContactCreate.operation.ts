import {
	type IDisplayOptions,
	type INodeExecutionData,
	type INodeProperties,
	IExecuteFunctions
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

/** Initiates a contact change procedure for the dedicated server. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Dedicated Server Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{ displayName: 'From List', name: 'list', type: 'list', typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true } },
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'ns123456.ip-123-45-678.eu' },
			],
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

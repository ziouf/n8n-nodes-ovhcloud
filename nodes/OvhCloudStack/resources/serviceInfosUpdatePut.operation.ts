import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Stack Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your Stack MIS service (e.g. mis-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getStackServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'mis-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Admin Contact',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The contact to set as admin contact',
			displayOptions,
		},
		{
			displayName: 'Billing Contact',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The contact to set as billing contact',
			displayOptions,
		},
		{
			displayName: 'Technical Contact',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The contact to set as technical contact',
			displayOptions,
		},
	];
}

/**
 * Update service information of a specific Stack MIS service.
 *
 * HTTP method: PUT
 * Endpoint: /stack/mis/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = {};

	const contactAdmin = (this.getNodeParameter('contactAdmin', _itemIndex ?? 0, '') as string) || '';
	if (contactAdmin) body.contactAdmin = contactAdmin;

	const contactBilling = (this.getNodeParameter('contactBilling', _itemIndex ?? 0, '') as string) || '';
	if (contactBilling) body.contactBilling = contactBilling;

	const contactTech = (this.getNodeParameter('contactTech', _itemIndex ?? 0, '') as string) || '';
	if (contactTech) body.contactTech = contactTech;

	await client.httpPut(`/stack/mis/${encodeURIComponent(serviceName)}/serviceInfos`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}

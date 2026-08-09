import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OvhCloudConnect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The unique identifier of the service (e.g. 123e4567-e89b-12d3-a456-426614174000)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOvhCloudConnectServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: '123e4567-e89b-12d3-a456-426614174000',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Contact Admin',
			name: 'contactAdmin',
			type: 'string',
			default: '',
			description: 'The contact to set as admin contact',
			displayOptions,
		},
		{
			displayName: 'Contact Billing',
			name: 'contactBilling',
			type: 'string',
			default: '',
			description: 'The contact to set as billing contact',
			displayOptions,
		},
		{
			displayName: 'Contact Tech',
			name: 'contactTech',
			type: 'string',
			default: '',
			description: 'The contact to set as tech contact',
			displayOptions,
		},
	];
}

/**
 * Launch a contact change procedure for an OvhCloud Connect service.
 *
 * HTTP method: POST
 * Endpoint: /ovhCloudConnect/{serviceName}/changeContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const contactAdmin = (this.getNodeParameter('contactAdmin', _itemIndex ?? 0, '') as string) || '';
	const contactBilling = (this.getNodeParameter('contactBilling', _itemIndex ?? 0, '') as string) || '';
	const contactTech = (this.getNodeParameter('contactTech', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (contactAdmin) body.contactAdmin = contactAdmin;
	if (contactBilling) body.contactBilling = contactBilling;
	if (contactTech) body.contactTech = contactTech;

	const data = (await client.httpPost(`/ovhCloudConnect/${encodeURIComponent(serviceName)}/changeContact`, body)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { taskId: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}

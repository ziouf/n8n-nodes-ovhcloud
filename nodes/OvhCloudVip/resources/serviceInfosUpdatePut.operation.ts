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
			displayName: 'VIP Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your VIP service (e.g. vip1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVipServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'vip1',
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
 * Update service information of a specific VIP service.
 *
 * HTTP method: PUT
 * Endpoint: /vip/{serviceName}/serviceInfos
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

	await client.httpPut(`/vip/${encodeURIComponent(serviceName)}/serviceInfos`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}

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
			displayName: 'Metrics Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Metrics service name (e.g. metrics-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getMetricsServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'metrics-12345',
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
 * Launch a contact change procedure for a Metrics service.
 *
 * HTTP method: POST
 * Endpoint: /metrics/{serviceName}/changeContact
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

	const data = (await client.httpPost(
		`/metrics/${encodeURIComponent(serviceName)}/changeContact`,
		body,
	)) as unknown;
	const contacts = Array.isArray(data) ? data : [];
	return this.helpers.returnJsonArray(contacts.map((id) => ({ contactId: id })) as IDataObject[]);
}

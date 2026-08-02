import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Pack Xdsl Service Name',
			name: 'packName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your pack',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPackXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'packabcd-ovh',
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
 * Launch a contact change procedure.
 *
 * HTTP method: POST
 * Endpoint: /pack/xdsl/{packName}/changeContact
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const packName = this.getNodeParameter('packName', 0, '', { extractValue: true }) as string;
	const contactAdmin = (this.getNodeParameter('contactAdmin', 0, '') as string) || '';
	const contactBilling = (this.getNodeParameter('contactBilling', 0, '') as string) || '';
	const contactTech = (this.getNodeParameter('contactTech', 0, '') as string) || '';

	const body: IDataObject = {};
	if (contactAdmin) body.contactAdmin = contactAdmin;
	if (contactBilling) body.contactBilling = contactBilling;
	if (contactTech) body.contactTech = contactTech;
	const data = (await client.httpPost(
		`/pack/xdsl/${encodeURIComponent(packName)}/changeContact`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ contactIds: data }]);
}

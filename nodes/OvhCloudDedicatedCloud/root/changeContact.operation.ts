import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'The name/ID of the VMware on OVHcloud infrastructure',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
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
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions,
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
			displayOptions: {
				show: {
					returnAll: [false],
				},
			},
		},
	];
}

/**
 * Executes the Launch a contact change procedure operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/changeContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const contactAdmin = this.getNodeParameter('contactAdmin', _itemIndex, '') as string;
	if (contactAdmin !== '') { body.contactAdmin = contactAdmin; }
	const contactBilling = this.getNodeParameter('contactBilling', _itemIndex, '') as string;
	if (contactBilling !== '') { body.contactBilling = contactBilling; }
	const contactTech = this.getNodeParameter('contactTech', _itemIndex, '') as string;
	if (contactTech !== '') { body.contactTech = contactTech; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/changeContact`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

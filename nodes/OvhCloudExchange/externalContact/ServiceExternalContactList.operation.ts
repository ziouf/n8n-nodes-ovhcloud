import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Filter the value of displayName property (like)',
		},
		{
			displayName: 'External Email Address',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			description: 'Filter the value of externalEmailAddress property (like)',
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'Filter the value of firstName property (like)',
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'Filter the value of ID property (like)',
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Filter the value of lastName property (like)',
		},
	];
}

/**
 * External contacts for this service
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/externalContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex ?? 0) as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', _itemIndex ?? 0) as string;
	const firstName = this.getNodeParameter('firstName', _itemIndex ?? 0) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as string;
	const lastName = this.getNodeParameter('lastName', _itemIndex ?? 0) as string;

	const qs: IDataObject = {
    displayName: displayName,
    externalEmailAddress: externalEmailAddress,
    firstName: firstName,
    id: id,
    lastName: lastName
	};

	const client = getClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/externalContact", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

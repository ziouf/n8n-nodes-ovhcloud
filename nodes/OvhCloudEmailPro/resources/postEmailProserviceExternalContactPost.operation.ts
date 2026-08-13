import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';


export function description() {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The service identifier',
		},
		{
			displayName: 'DisplayName',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'The displayname value',
		},
		{
			displayName: 'ExternalEmailAddress',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			description: 'The externalemailaddress value',
		},
		{
			displayName: 'FirstName',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'The firstname value',
		},
		{
			displayName: 'HiddenFromGAL',
			name: 'hiddenFromGAL',
			type: 'string',
			default: '',
			description: 'The hiddenfromgal value',
		},
		{
			displayName: 'Initials',
			name: 'initials',
			type: 'string',
			default: '',
			description: 'The initials value',
		},
		{
			displayName: 'LastName',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'The lastname value',
		},
	];
}

/**
 * create new external contact
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/externalContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;



	const displayName = this.getNodeParameter('displayName', _itemIndex ?? 0) as string;
	const externalEmailAddress = this.getNodeParameter('externalEmailAddress', _itemIndex ?? 0) as string;
	const firstName = this.getNodeParameter('firstName', _itemIndex ?? 0) as string;
	const hiddenFromGAL = this.getNodeParameter('hiddenFromGAL', _itemIndex ?? 0) as string;
	const initials = this.getNodeParameter('initials', _itemIndex ?? 0) as string;
	const lastName = this.getNodeParameter('lastName', _itemIndex ?? 0) as string;


const body: IDataObject = {
    displayName: displayName,
    externalEmailAddress: externalEmailAddress,
    firstName: firstName,
    hiddenFromGAL: hiddenFromGAL,
    initials: initials,
    lastName: lastName
    };

	const client = getClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'externalContact', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


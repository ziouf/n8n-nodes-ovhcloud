import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';


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
			description: 'The displayname parameter',
		},
		{
			displayName: 'ExternalEmailAddress',
			name: 'externalEmailAddress',
			type: 'string',
			default: '',
			description: 'The externalemailaddress parameter',
		},
		{
			displayName: 'FirstName',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'The firstname parameter',
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'The ID parameter',
		},
		{
			displayName: 'LastName',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'The lastname parameter',
		},
	];
}

/**
 * External contacts for this service
 *
 * HTTP method: GET
 * Endpoint: /email/pro/{service}/externalContact
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', _itemIndex ?? 0) as string;

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



	const client = new ApiClient(this);
	const data = (await client.httpGet('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'externalContact', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


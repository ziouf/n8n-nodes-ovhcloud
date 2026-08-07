import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'The company parameter',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			description: 'The ID parameter',
			displayOptions,
		},
		{
			displayName: 'UserPrincipalName',
			name: 'userPrincipalName',
			type: 'string',
			default: '',
			description: 'The userprincipalname parameter',
			displayOptions,
		},
	];
}

/**
 * Accounts associated to this Active Directory service
 *
 * HTTP method: GET
 * Endpoint: /msServices/{serviceName}/account
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const company = this.getNodeParameter('company', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;
	const userPrincipalName = this.getNodeParameter('userPrincipalName', itemIndex) as string;


const qs: IDataObject = {
    company: company,
    id: id,
    userPrincipalName: userPrincipalName
  };



	const client = new ApiClient(this);
	const data = (await client.httpGet('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'account', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


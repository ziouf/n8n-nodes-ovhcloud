import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name',
			displayOptions,
		},
		{
			displayName: 'UserPrincipalName',
			name: 'userPrincipalName',
			type: 'string',
			default: '',
			required: true,
			description: 'The user principal name',
			displayOptions,
		},
	];
}

/**
 * Delete Multi Factor Authentication feature for this account
 *
 * HTTP method: DELETE
 * Endpoint: /msServices/{serviceName}/account/{userPrincipalName}/mfa
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userPrincipalName = this.getNodeParameter('userPrincipalName', _itemIndex) as string;





	const client = getClient(this);
	const data = (await client.httpDelete('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'account' + '/' + encodeURIComponent(userPrincipalName) + '/' + 'mfa')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


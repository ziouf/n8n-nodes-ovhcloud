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
			displayName: 'UserPrincipalName',
			name: 'userPrincipalName',
			type: 'string',
			default: '',
			required: true,
			description: 'The userprincipalname identifier',
			displayOptions,
		},
	];
}

/**
 * Delete sync account
 *
 * HTTP method: DELETE
 * Endpoint: /msServices/{serviceName}/account/{userPrincipalName}/sync
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userPrincipalName = this.getNodeParameter('userPrincipalName', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'account' + '/' + encodeURIComponent(userPrincipalName) + '/' + 'sync')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


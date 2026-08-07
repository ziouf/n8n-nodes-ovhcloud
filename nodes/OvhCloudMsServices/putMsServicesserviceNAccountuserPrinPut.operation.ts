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
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /msServices/{serviceName}/account/{userPrincipalName}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userPrincipalName = this.getNodeParameter('userPrincipalName', itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpPut('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'account' + '/' + encodeURIComponent(userPrincipalName), {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			description: 'New password for this VMware on OVHcloud user. It must fit your VMware on OVHcloud password policy. If this field is empty, a random password will be generated and sent by email.',
			displayOptions,
		},
	];
}

/**
 * Executes the Change user password operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/changePassword
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userId = this.getNodeParameter('userId', _itemIndex) as string;
	const body: IDataObject = {};
	const password = this.getNodeParameter('password', _itemIndex, '') as string;
	if (password !== '') { body.password = password; }
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/user/${userId}/changePassword`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

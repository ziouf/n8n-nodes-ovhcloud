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
			displayName: 'Token',
			name: 'token',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
			required: true,
			description: 'Token sent by SMS',
			displayOptions,
		},
	];
}

/**
 * Executes the Confirm user phone number operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/confirmPhoneNumber
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const userId = this.getNodeParameter('userId', _itemIndex) as string;
	const body: IDataObject = {};
	body.token = this.getNodeParameter('token', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/user/${userId}/confirmPhoneNumber`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

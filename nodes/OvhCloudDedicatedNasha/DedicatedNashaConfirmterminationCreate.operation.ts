import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Commentary',
			name: 'commentary',
			type: 'string',
			default: '',
			description: 'Commentary about your termination request',
		},
		{
			displayName: 'Futureuse',
			name: 'futureUse',
			type: 'string',
			default: '',
			description: 'What next after your termination request',
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			description: 'Reason of your termination request',
		},
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your storage',
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The termination token sent by email to the admin contact',
		},
	];
}

/**
 * Confirm service termination
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/confirmTermination
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const token = this.getNodeParameter('token', _itemIndex) as string;
	const client = new ApiClient(this);
	const body: IDataObject = {};
			body['token'] = token;
	const data = (await client.httpPost('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/confirmTermination', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

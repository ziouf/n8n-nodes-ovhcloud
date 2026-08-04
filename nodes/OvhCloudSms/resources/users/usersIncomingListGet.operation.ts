import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Login',
			name: 'login',
			type: 'string',
			default: '',
			required: true,
			description: 'The sms user login',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your SMS offer',
			displayOptions,
		},
		{
			displayName: 'Sender',
			name: 'sender',
			type: 'string',
			default: '',
			description: 'Filter the value of sender property (=)',
			displayOptions,
		},
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			description: 'Filter the value of tag property (=)',
			displayOptions,
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/users/{login}/incoming operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/users/{login}/incoming
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const sender = this.getNodeParameter('sender', 0) as string;
	const tag = this.getNodeParameter('tag', 0) as string;
	const qs: IDataObject = {};
	if (sender) qs['sender'] = sender;
	if (tag) qs['tag'] = tag;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}/incoming`, qs)) as number[];
	return this.helpers.returnJsonArray(data.map((v: number) => ({ id: v })));
}

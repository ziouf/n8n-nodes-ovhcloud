import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
			...SERVICE_NAME,
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
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/users/{login}/incoming operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/users/{login}/incoming
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', _itemIndex ?? 0) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const sender = this.getNodeParameter('sender', _itemIndex ?? 0) as string;
	const tag = this.getNodeParameter('tag', _itemIndex ?? 0) as string;
	const qs: IDataObject = {};
	if (sender) qs['sender'] = sender;
	if (tag) qs['tag'] = tag;
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}/incoming`,
		qs,
	)) as number[];
	return this.helpers.returnJsonArray(data.map((v: number) => ({ id: v })));
}

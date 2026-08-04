import type {
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
		}
	];
}

/**
 * Executes the Get /sms/{serviceName}/users/{login}/jobs operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/users/{login}/jobs
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await new ApiClient(this).httpGet(`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}/jobs`)) as number[];
	return this.helpers.returnJsonArray(data.map((v: number) => ({ id: v })));
}

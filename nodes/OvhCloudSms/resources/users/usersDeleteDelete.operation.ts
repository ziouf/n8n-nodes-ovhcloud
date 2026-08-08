import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

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
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
	];
}

/**
 * Executes the Delete /sms/{serviceName}/users/{login} operation.
 *
 * HTTP method: DELETE
 * Endpoint: /sms/{serviceName}/users/{login}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const data = (await new ApiClient(this).httpDelete(
		`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}

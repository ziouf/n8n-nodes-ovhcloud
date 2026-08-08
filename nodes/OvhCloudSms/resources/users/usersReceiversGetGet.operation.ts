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
		{
			displayName: 'Slot ID',
			name: 'slotId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Slot number ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/users/{login}/receivers/{slotId} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/users/{login}/receivers/{slotId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const login = this.getNodeParameter('login', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const slotId = this.getNodeParameter('slotId', 0) as number;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/users/${encodeURIComponent(login)}/receivers/${slotId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}

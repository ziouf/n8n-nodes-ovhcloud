import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get SMS Phonebook operation
 *
 * Retrieves details of a specific SMS phonebook.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/phonebooks/{phonebookId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the SMS service',
			displayOptions,
		},
		{
			displayName: 'Phonebook ID',
			name: 'phonebookId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the SMS phonebook',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const phonebookId = this.getNodeParameter('phonebookId', 0) as string;
	const data = (await client.httpGet(
		`/sms/${serviceName}/phonebooks/${phonebookId}`,
	)) as IDataObject;
	return [{ json: data }];
}

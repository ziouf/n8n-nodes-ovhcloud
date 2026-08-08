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
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the wanted phonebook',
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/phonebooks operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/phonebooks
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const body: IDataObject = {};
	body['name'] = name;
	const data = (await new ApiClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/phonebooks`,
		body,
	)) as string;
	return this.helpers.returnJsonArray([{ value: data }]);
}

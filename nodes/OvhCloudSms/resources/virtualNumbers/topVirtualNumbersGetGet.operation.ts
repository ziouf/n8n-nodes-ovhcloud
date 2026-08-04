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
			displayName: 'Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'Your virtual number',
			displayOptions,
		}
	];
}

/**
 * Executes the Get /sms/virtualNumbers/{number} operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/virtualNumbers/{number}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', 0) as string;
	const data = (await new ApiClient(this).httpGet(`/sms/virtualNumbers/${encodeURIComponent(number)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}

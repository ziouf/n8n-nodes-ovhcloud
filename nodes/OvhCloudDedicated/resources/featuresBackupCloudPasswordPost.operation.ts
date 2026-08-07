import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Change backup cloud password',
			displayOptions,
		},
		{
			displayName: 'New_password',
			name: 'new_password',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Change backup cloud password',
			displayOptions,
		},
	];
}

/**
 * Change backup cloud password
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/features/backupCloud/password
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const new_password = this.getNodeParameter('new_password', itemIndex, '') as string;

	const body: IDataObject = {};
		if (new_password) {
			body.new_password = new_password;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/features/backupCloud/password`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

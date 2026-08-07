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
			description: 'Reboot server',
			displayOptions,
		},
		{
			displayName: 'Mode',
			name: 'mode',
			type: 'string',
			default: '',
			required: true,
			description: 'Reboot server',
			displayOptions,
		},
	];
}

/**
 * Reboot server
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/reboot
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const mode = this.getNodeParameter('mode', itemIndex, '') as string;

	const body: IDataObject = {};
		if (mode) {
			body.mode = mode;
		}

	const data = (await client.httpPost(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/reboot`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

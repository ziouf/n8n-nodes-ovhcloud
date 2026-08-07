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
			description: 'Update FTP backup access',
			displayOptions,
		},
		{
			displayName: 'Access ID',
			name: 'accessId',
			type: 'string',
			default: '',
			required: true,
			description: 'Update FTP backup access',
			displayOptions,
		},
		{
			displayName: 'Protocol',
			name: 'protocol',
			type: 'string',
			default: '',
			required: true,
			description: 'Update FTP backup access',
			displayOptions,
		},
	];
}

/**
 * Update FTP backup access
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/server/{serviceName}/features/backupFTP/access/{accessId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const accessId = this.getNodeParameter('accessId', itemIndex) as string;
	const protocol = this.getNodeParameter('protocol', itemIndex, '') as string;

	const body: IDataObject = {};
		if (protocol) {
			body.protocol = protocol;
		}

	const data = (await client.httpPut(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/features/backupFTP/access/${encodeURIComponent(String(accessId))}`,
		body
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

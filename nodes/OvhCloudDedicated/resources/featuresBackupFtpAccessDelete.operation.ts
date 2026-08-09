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
			description: 'Delete FTP backup access',
			displayOptions,
		},
		{
			displayName: 'Access ID',
			name: 'accessId',
			type: 'string',
			default: '',
			required: true,
			description: 'Delete FTP backup access',
			displayOptions,
		},
	];
}

/**
 * Delete FTP backup access
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/server/{serviceName}/features/backupFTP/access/{accessId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const accessId = this.getNodeParameter('accessId', _itemIndex) as string;

	const data = (await client.httpDelete(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/features/backupFTP/access/${encodeURIComponent(String(accessId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

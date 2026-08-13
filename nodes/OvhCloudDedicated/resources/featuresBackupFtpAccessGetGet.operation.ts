import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'Get FTP backup access',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
		{
			displayName: 'Access ID',
			name: 'accessId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get FTP backup access',
			displayOptions,
		},
	];
}

/**
 * Get FTP backup access
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/features/backupFTP/access/{accessId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const accessId = this.getNodeParameter('accessId', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/features/backupFTP/access/${encodeURIComponent(String(accessId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

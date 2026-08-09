import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
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
			description: 'The internal name of your hosting',
			displayOptions,
		},
	];
}

/**
 * Get the private database creation capabilities of the hosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/privateDatabaseCreationCapabilities
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/privateDatabaseCreationCapabilities`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

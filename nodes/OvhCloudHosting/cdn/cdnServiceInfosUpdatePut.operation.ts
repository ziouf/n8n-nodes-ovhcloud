import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Suspend',
			name: 'suspend',
			type: 'boolean',
			default: false,
			description: 'Whether to suspend or unsuspend the CDN service',
			displayOptions,
		},
	];
}

/**
 * Update CDN service information
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/cdn/serviceInfos
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const suspend = this.getNodeParameter('suspend', _itemIndex) as boolean;
	const data = (await client.httpPut(`/hosting/web/${serviceName}/cdn/serviceInfos`, {
		suspend,
	})) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

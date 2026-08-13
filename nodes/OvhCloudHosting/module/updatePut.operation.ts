import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(
	displayOptions: IDisplayOptions,
): import('n8n-workflow').INodeProperties[] {
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
			displayName: 'Module Name',
			name: 'moduleName',
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
			description: 'Whether to suspend or unsuspend the module',
			displayOptions,
		},
	];
}

/**
 * Update module
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/module/{moduleName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const moduleName = this.getNodeParameter('moduleName', _itemIndex ?? 0) as string;
	const suspend = this.getNodeParameter('suspend', _itemIndex ?? 0) as boolean;
	const data = (await client.httpPut(`/hosting/web/${serviceName}/module/${moduleName}`, {
		suspend,
	})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

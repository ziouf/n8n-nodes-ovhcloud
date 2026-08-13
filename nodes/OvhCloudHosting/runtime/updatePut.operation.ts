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
			displayName: 'Runtime Name',
			name: 'runtimeName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Active',
			name: 'active',
			type: 'boolean',
			default: false,
			description: 'Whether to set as active runtime',
			displayOptions,
		},
	];
}

/**
 * Update runtime
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/{serviceName}/runtime/{runtimeName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const runtimeName = this.getNodeParameter('runtimeName', _itemIndex ?? 0) as string;
	const active = this.getNodeParameter('active', _itemIndex ?? 0) as boolean;
	const data = (await client.httpPut(`/hosting/web/${serviceName}/runtime/${runtimeName}`, {
		active,
	})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

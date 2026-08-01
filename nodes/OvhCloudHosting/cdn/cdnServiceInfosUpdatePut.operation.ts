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
 * Endpoint: /hosting/web/cdn/{serviceName}/serviceInfos
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const suspend = this.getNodeParameter('suspend', itemIndex) as boolean;
	const data = (await client.httpPut(`/hosting/web/cdn/${serviceName}/serviceInfos`, {
		suspend,
	})) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

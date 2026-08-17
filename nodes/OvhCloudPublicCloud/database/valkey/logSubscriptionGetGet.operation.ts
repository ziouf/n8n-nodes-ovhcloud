import { projectIdLocator } from '../../../../shared/nodes/locators';
import { SERVICE_NAME } from '../../serviceName';
import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	{
		...projectIdLocator(),
	},
	{
			...SERVICE_NAME,
			displayOptions,
		},
	{
		displayName: 'Subid',
		name: 'subId',
		type: 'string',
		default: '',
		required: true,
		description: 'Log subscription ID',
		displayOptions,
	}
	];
}

/**
 * Executes the Get Valkey log subscription operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/${projectId}/cloud/database/valkey/${serviceName}/log/subscription/${subId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const subId = this.getNodeParameter('subId', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(`/publicCloud/project/${projectId}/cloud/database/valkey/${serviceName}/log/subscription/${subId}`)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}

import { projectIdLocator } from '../../../../shared/nodes/locators';
import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
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
		displayName: 'Userid',
		name: 'userId',
		type: 'string',
		default: '',
		required: true,
		description: 'User ID',
		displayOptions,
	}
	];
}

/**
 * Executes the Update Valkey user operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/${projectId}/cloud/database/valkey/${serviceName}/user/${userId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
	const body = {} as IDataObject;

	const data = (await client.httpPut(`/publicCloud/project/${projectId}/cloud/database/valkey/${serviceName}/user/${userId}`, body)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}

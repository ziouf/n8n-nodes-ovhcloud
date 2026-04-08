import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * List Public Cloud Rancher services.
 *
 * HTTP method: GET
 * Endpoint: /v2/publicCloud/project/{projectId}/rancher
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Project ID',
			name: 'projectId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the Public Cloud project',
			displayOptions,
		},
	];
}

/**
 * Executes the List Public Cloud Ranchers operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('projectId', 0) as string;
	const data = (await client.httpGet(`/v2/publicCloud/project/${projectId}/rancher`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

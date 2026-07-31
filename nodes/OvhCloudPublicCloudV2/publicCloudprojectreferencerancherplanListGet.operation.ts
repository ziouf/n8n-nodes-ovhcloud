import type {

	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'project Id',
			name: 'projectId',
			type: 'string',
			default: '',
			required: true,
			description: 'The projectId identifier',
		},

	];
}

/**
 * Executes the Get List available plans for creating a managed Rancher service operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/reference/rancher/plan
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/publicCloud/project/' + projectId + '/reference/rancher/plan')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

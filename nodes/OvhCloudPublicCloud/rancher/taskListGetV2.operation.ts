import type {

	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Project ID',
			name: 'projectId',
			type: 'string',
			default: '',
			required: true,
			description: 'The projectId identifier',
			displayOptions,
		},
		{
			displayName: 'Rancher ID',
			name: 'rancherId',
			type: 'string',
			default: '',
			required: true,
			description: 'The rancherId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Get List all asynchronous operations related to the managed Rancher service operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/rancher/{rancherId}/task
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', _itemIndex) as string;
	const rancherId = this.getNodeParameter('rancherId', _itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/publicCloud/project/' + projectId + '/rancher/' + rancherId + '/task')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

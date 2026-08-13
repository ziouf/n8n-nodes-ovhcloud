import type {

	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Project ID',
			name: 'projectId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Rancher ID',
			name: 'rancherId',
			type: 'string',
			default: '',
			required: true,
			description: 'Rancher cluster ID',
			displayOptions,
		},

	];
}

/**
 * Executes the Get List all events related to the managed Rancher service operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/rancher/{rancherId}/event
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', _itemIndex) as string;
	const rancherId = this.getNodeParameter('rancherId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/publicCloud/project/' + projectId + '/rancher/' + rancherId + '/event')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

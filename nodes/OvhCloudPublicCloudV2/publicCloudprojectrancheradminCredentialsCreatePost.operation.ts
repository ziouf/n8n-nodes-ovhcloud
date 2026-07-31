import type {
	IDataObject,
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
		{
			displayName: 'rancher Id',
			name: 'rancherId',
			type: 'string',
			default: '',
			required: true,
			description: 'The rancherId identifier',
		},

	];
}

/**
 * Executes the Post Reset the admin password operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/rancher/{rancherId}/adminCredentials
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', itemIndex) as string;
	const rancherId = this.getNodeParameter('rancherId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpPost('/publicCloud/project/' + projectId + '/rancher/' + rancherId + '/adminCredentials')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

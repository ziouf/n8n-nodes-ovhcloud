import type {
	IDataObject,
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
 * Executes the Post Reset the admin password operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/rancher/{rancherId}/adminCredentials
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', _itemIndex) as string;
	const rancherId = this.getNodeParameter('rancherId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpPost('/publicCloud/project/' + projectId + '/rancher/' + rancherId + '/adminCredentials')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

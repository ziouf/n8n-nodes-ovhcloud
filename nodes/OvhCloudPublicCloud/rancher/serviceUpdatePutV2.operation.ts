import type {
	IDataObject,
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
 * Executes the Put Update an existing managed Rancher service operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/rancher/{rancherId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', itemIndex) as string;
	const rancherId = this.getNodeParameter('rancherId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/publicCloud/project/' + projectId + '/rancher/' + rancherId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

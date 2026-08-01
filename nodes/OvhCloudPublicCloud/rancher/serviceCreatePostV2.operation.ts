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
		},

	];
}

/**
 * Executes the Post Create a new managed Rancher service operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/rancher
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/publicCloud/project/' + projectId + '/rancher', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

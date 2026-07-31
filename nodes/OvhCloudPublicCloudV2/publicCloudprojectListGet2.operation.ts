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

	];
}

/**
 * Executes the Get Get details on a Public Cloud project operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const projectId = this.getNodeParameter('projectId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/publicCloud/project/' + projectId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

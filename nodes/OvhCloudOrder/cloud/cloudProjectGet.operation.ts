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
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('projectId', 0) as string;
	const data = (await client.httpGet(`/order/cloud/project/${projectId}`)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}

import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the dedicated server',
			displayOptions,
		},
		{
			displayName: 'Partition ID',
			name: 'partitionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the partition',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const partitionId = this.getNodeParameter('partitionId', 0) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${serviceName}/partition/${partitionId}`,
	)) as IDataObject;

	return [{ json: data }];
}

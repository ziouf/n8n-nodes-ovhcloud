import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The hosting web service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHostingWebServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'myservice.ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Runtime ID',
			name: 'runtimeId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The numeric ID of the runtime',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;
	const runtimeId = this.getNodeParameter('runtimeId', itemIndex) as number;
	const data = (await client.httpGet(
		`/hosting/web/${serviceName}/runtime/${runtimeId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

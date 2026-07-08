import type {
	IExecuteFunctions,
	INodeExecutionData,
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
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const inputData = this.getInputData()[itemIndex];
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;
	const envVars = (await client.httpGet(`/hosting/web/${serviceName}/envVar`)) as string[];
	const outputData = { ...inputData.json, envVars };
	return this.helpers.returnJsonArray(outputData);
}

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
			displayName: 'SSL Gateway Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getSslGatewayServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Terminate SSL Gateway service
 *
 * HTTP method: POST
 * Endpoint: /sslGateway/{serviceName}/terminate
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', {
		extractValue: true,
	}) as string;
	await client.httpPost(`/sslGateway/${serviceName}/terminate`, {});
	return this.helpers.returnJsonArray([{ message: 'Termination requested' }]);
}

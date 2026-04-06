import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update a token for a metrics service.
 *
 * HTTP method: PUT
 * Endpoint: /metrics/{serviceName}/token/{tokenId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the metrics service',
			displayOptions,
		},
		{
			displayName: 'Token ID',
			name: 'tokenId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The ID of the token to update',
			displayOptions,
		},
		{
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			displayOptions,
			options: [
				{
					displayName: 'Name',
					name: 'name',
					type: 'string',
					default: '',
					description: 'Token name',
				},
				{
					displayName: 'Description',
					name: 'description',
					type: 'string',
					default: '',
					description: 'Token description',
				},
				{
					displayName: 'Status',
					name: 'status',
					type: 'options',
					options: [
						{ name: 'Disabled', value: 'disabled' },
						{ name: 'Enabled', value: 'enabled' },
					],
					default: 'enabled',
					description: 'Token status',
				},
			],
		},
	];
}

/**
 * Executes the Update Token operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const tokenId = this.getNodeParameter('tokenId', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;
	const data = (await client.httpPut(`/metrics/${serviceName}/token/${tokenId}`, {
		body: updateFields,
	})) as IDataObject;
	return [{ json: data }];
}

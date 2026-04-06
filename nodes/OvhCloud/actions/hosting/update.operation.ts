/**
 * @brief Update Private Database Hosting Service operation
 *
 * Updates a private database hosting service.
 *
 * HTTP method: PUT
 * Endpoint: /hosting/privateDatabase/{serviceName}
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the private database hosting service',
			displayOptions,
		},
		{
			displayName: 'Update Fields',
			name: 'updateFields',
			type: 'collection',
			placeholder: 'Add Field',
			default: {},
			options: [
				{
					displayName: 'Display Name',
					name: 'displayName',
					type: 'string',
					default: '',
					description: 'New display name for the service',
				},
			],
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0, {}) as IDataObject;

	const data = (await client.httpPut(`/hosting/privateDatabase/${serviceName}`, {
		body: updateFields,
	})) as IDataObject;
	return [{ json: data }];
}

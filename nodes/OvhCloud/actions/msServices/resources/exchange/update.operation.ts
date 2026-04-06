import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update Exchange configuration for an MS service.
 *
 * HTTP method: PUT
 * Endpoint: /msServices/{serviceName}/exchange
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the MS service',
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
					displayName: 'Display Name',
					name: 'displayName',
					type: 'string',
					default: '',
				},
			],
		},
	];
}

/**
 * Executes the Update Exchange operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;
	const data = (await client.httpPut(`/msServices/${serviceName}/exchange`, {
		body: updateFields,
	})) as IDataObject;
	return [{ json: data }];
}

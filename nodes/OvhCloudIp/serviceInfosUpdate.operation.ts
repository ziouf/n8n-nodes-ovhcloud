import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Update Service Infos operation.
 *
 * Updates service information for an IP service.
 *
 * HTTP method: PUT
 * Endpoint: /ip/service/{serviceName}/serviceInfos
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP service name',
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
					displayName: 'Contact Admin',
					name: 'contactAdmin',
					type: 'string',
					default: '',
					description: 'Admin contact handle',
				},
				{
					displayName: 'Contact Billing',
					name: 'contactBilling',
					type: 'string',
					default: '',
					description: 'Billing contact handle',
				},
				{
					displayName: 'Contact Tech',
					name: 'contactTech',
					type: 'string',
					default: '',
					description: 'Tech contact handle',
				},
			],
		},
	];
}

/**
 * Executes the Update Service Infos operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;
	const data = (await client.httpPut(`/ip/service/${serviceName}/serviceInfos`, {
		body: updateFields,
	})) as IDataObject;
	return [{ json: data }];
}

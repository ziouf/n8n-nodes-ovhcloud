import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Change Contact operation for Dedicated Cluster
 *
 * Changes the contact for a specific Dedicated Cluster service:
 * - HTTP POST request to `/dedicated/cluster/{serviceName}/changeContact` endpoint
 * - Service name parameter is required
 * - Contact field is required
 * - Returns the result of the contact change operation
 */
export function descriptionDedicatedClusterChangeContact(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Cluster service. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a Dedicated Cluster service...',
					typeOptions: {
						searchListMethod: 'getDedicatedClusterServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Contact',
			name: 'contact',
			type: 'string',
			default: '',
			required: true,
			description: 'The new contact for the Dedicated Cluster service',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Contact operation for Dedicated Cluster.
 *
 * Changes the contact for a specific Dedicated Cluster service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/cluster/{serviceName}/changeContact
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the contact change result
 */
export async function executeDedicatedClusterChangeContact(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const contact = this.getNodeParameter('contact', 0) as string;

	const response = (await client.httpPost(`/dedicated/cluster/${serviceName}/changeContact`, {
		contact,
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}

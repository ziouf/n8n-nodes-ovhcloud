import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * @brief Change Contact operation for DedicatedNasha resource
 *
 * Changes the contact for a specific Dedicated Nasha service:
 * - HTTP POST request to `/dedicated/nasha/{serviceName}/changeContact` endpoint
 * - Service name parameter is required
 * - Returns the result of the contact change operation
 */
export function descriptionDedicatedNashaChangeContact(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Nasha service. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a service...',
					typeOptions: {
						searchListMethod: 'getDedicatedNashaServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Contact ID',
			name: 'contactId',
			description: 'The ID of the contact to assign to this service',
			type: 'number',
			required: true,
			default: 0,
			displayOptions,
		},
	];
}

/**
 * Executes the Change Contact operation.
 *
 * Changes the contact for a specific Dedicated Nasha service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/changeContact
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the operation result
 */
export async function executeDedicatedNashaChangeContact(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const contactId = this.getNodeParameter('contactId', 0) as number;

	const body: IDataObject = { contactId };

	const response = (await client.httpPost(
		`/dedicated/nasha/${serviceName}/changeContact`,
		body,
	)) as IDataObject;

	return [{ json: response }];
}

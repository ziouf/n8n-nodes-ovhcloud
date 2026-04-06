import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * @brief Change Contact operation for Dedicated Server
 *
 * Changes the contact for a specific dedicated server service.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/changeContact
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the dedicated server. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a dedicated server...',
					typeOptions: {
						searchListMethod: 'getDedicatedServerServices',
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
			description: 'The new contact for the dedicated server service',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Contact operation for Dedicated Server.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const contact = this.getNodeParameter('contact', 0) as string;

	const response = (await client.httpPost(`/dedicated/server/${serviceName}/changeContact`, {
		contact,
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}

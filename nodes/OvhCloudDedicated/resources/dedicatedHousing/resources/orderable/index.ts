import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * @brief Get Orderable APC operation for Dedicated Housing
 *
 * Checks if APC (Automatic Power Control) is orderable for a Dedicated Housing service.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/orderable/APC
 */
export function descriptionOrderableApc(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the Dedicated Housing service. This can be set manually or selected from the list of services.',
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
						searchListMethod: 'getDedicatedHousingServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get Orderable APC operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing orderable APC info
 */
export async function executeOrderableApc(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const orderable = (await client.httpGet(
		`/dedicated/housing/${serviceName}/orderable/APC`,
	)) as IDataObject;

	return [{ json: orderable }];
}

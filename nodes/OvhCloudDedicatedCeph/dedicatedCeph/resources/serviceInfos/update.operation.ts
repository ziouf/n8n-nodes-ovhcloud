/**
 * @brief Update service info for a Dedicated Ceph cluster
 *
 * Updates service information for the specified Dedicated Ceph cluster:
 * - HTTP PUT request to `/dedicated/ceph/{serviceName}/serviceInfos` endpoint
 * - Body contains the updated service info fields
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getDedicatedCephServices',
						searchable: true,
					},
				},
			],
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
					displayName: 'Billing',
					name: 'billing',
					type: 'string',
					default: '',
					description: 'Billing information',
				},
				{
					displayName: 'Contact Admin',
					name: 'contactAdmin',
					type: 'string',
					default: '',
					description: 'Admin contact handle',
				},
				{
					displayName: 'Contact Tech',
					name: 'contactTech',
					type: 'string',
					default: '',
					description: 'Tech contact handle',
				},
				{
					displayName: 'Description',
					name: 'description',
					type: 'string',
					default: '',
					description: 'Service description',
				},
				{
					displayName: 'Display Name',
					name: 'displayName',
					type: 'string',
					default: '',
					description: 'Display name for the service',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Update Service Info operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/ceph/{serviceName}/serviceInfos
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing updated service info
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const updateFields = this.getNodeParameter('updateFields', 0) as IDataObject;

	const data = (await client.httpPut(
		`/dedicated/ceph/${serviceName}/serviceInfos`,
		updateFields,
	)) as IDataObject;

	return [{ json: data }];
}

/**
 * @brief Update Dedicated Ceph Cluster operation for DedicatedCeph resource
 *
 * Updates a specific Dedicated Ceph cluster:
 * - HTTP PUT request to `/dedicated/ceph/{serviceName}` endpoint
 * - Body: crushTunables (enum, required), label (string, required)
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Crush Tunables',
			name: 'crushTunables',
			type: 'options',
			options: [
				{
					name: 'Default',
					value: 'default',
				},
				{
					name: 'Legacy',
					value: 'legacy',
				},
				{
					name: 'Optimal',
					value: 'optimal',
				},
				{
					name: 'Straw',
					value: 'straw',
				},
			],
			default: 'default',
			required: true,
			description: 'The CRUSH tunables setting',
			displayOptions,
		},
		{
			displayName: 'Label',
			name: 'label',
			type: 'string',
			default: '',
			required: true,
			description: 'The cluster label',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Dedicated Ceph Cluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/ceph/{serviceName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing updated cluster details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const crushTunables = this.getNodeParameter('crushTunables', 0) as string;
	const label = this.getNodeParameter('label', 0) as string;

	const data = await client.httpPut(`/dedicated/ceph/${serviceName}`, {
		crushTunables,
		label,
	});

	return [{ json: data as IDataObject }];
}

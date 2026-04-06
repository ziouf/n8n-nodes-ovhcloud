/**
 * @brief Purge a CephFS filesystem from a Dedicated Ceph cluster
 *
 * Purges (deletes) the specified CephFS filesystem:
 * - HTTP DELETE request to `/dedicated/ceph/{serviceName}/cephfs/{fsName}` endpoint
 */
import type {
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
			displayName: 'FS Name',
			name: 'fsName',
			type: 'string',
			default: '',
			required: true,
			description: 'The CephFS filesystem name to purge',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete CephFS operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/ceph/{serviceName}/cephfs/{fsName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const fsName = this.getNodeParameter('fsName', 0) as string;

	await client.httpDelete(`/dedicated/ceph/${serviceName}/cephfs/${fsName}`);

	return [{ json: { success: true } }];
}

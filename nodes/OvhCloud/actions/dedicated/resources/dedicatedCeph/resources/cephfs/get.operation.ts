/**
 * @brief Get CephFS filesystem info for a Dedicated Ceph cluster
 *
 * Retrieves details for a specific CephFS filesystem:
 * - HTTP GET request to `/dedicated/ceph/{serviceName}/cephfs/{fsName}` endpoint
 * - Returns CephFS details
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

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
			description: 'The CephFS filesystem name',
			displayOptions,
		},
	];
}

/**
 * Executes the Get CephFS operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/cephfs/{fsName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing CephFS details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const fsName = this.getNodeParameter('fsName', 0) as string;

	const data = (await client.httpGet(
		`/dedicated/ceph/${serviceName}/cephfs/${fsName}`,
	)) as IDataObject;

	return [{ json: data }];
}

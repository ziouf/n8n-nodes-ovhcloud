/**
 * @brief Clear user-pool permission for a Dedicated Ceph cluster
 *
 * Clears the specified user-pool permission:
 * - HTTP DELETE request to `/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}` endpoint
 */
import type {
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
			displayName: 'User Name',
			name: 'userName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Pool Name',
			name: 'poolName',
			type: 'string',
			default: '',
			required: true,
			description: 'The pool name to clear permission for',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete User Pool operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const userName = this.getNodeParameter('userName', 0) as string;
	const poolName = this.getNodeParameter('poolName', 0) as string;

	await client.httpDelete(
		`/dedicated/ceph/${serviceName}/user/${userName}/pool/${poolName}`,
	);

	return [{ json: { success: true } }];
}

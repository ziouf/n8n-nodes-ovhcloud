/**
 * @brief Delete an ACL for a Dedicated Ceph cluster
 *
 * Deletes a specific ACL:
 * - HTTP DELETE request to `/dedicated/ceph/{serviceName}/acl/{aclId}` endpoint
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
			displayName: 'ACL ID',
			name: 'aclId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ACL identifier to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete ACL operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/ceph/{serviceName}/acl/{aclId}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const aclId = this.getNodeParameter('aclId', 0) as number;

	await client.httpDelete(`/dedicated/ceph/${serviceName}/acl/${aclId}`);

	return [{ json: { success: true } }];
}

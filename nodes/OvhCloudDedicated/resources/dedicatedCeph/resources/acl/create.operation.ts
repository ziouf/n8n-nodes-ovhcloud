/**
 * @brief Create ACLs for a Dedicated Ceph cluster
 *
 * Creates new ACLs for the specified Dedicated Ceph cluster:
 * - HTTP POST request to `/dedicated/ceph/{serviceName}/acl` endpoint
 * - Body: aclList (string[]) required
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

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
			displayName: 'ACL List',
			name: 'aclList',
			type: 'string',
			default: '',
			required: true,
			description: 'List of ACLs to create (comma-separated)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create ACL operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/acl
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const { value: serviceName } = this.getNodeParameter('serviceName', 0, {
		extractValue: true,
	}) as { value: string };
	const aclListRaw = this.getNodeParameter('aclList', 0) as string;
	const aclList = aclListRaw.split(',').map((s) => s.trim());

	const data = await client.httpPost(`/dedicated/ceph/${serviceName}/acl`, {
		aclList,
	});

	return [{ json: data as IDataObject }];
}

/**
 * @brief Update user-pool permission for a Dedicated Ceph cluster
 *
 * Updates a user-pool permission:
 * - HTTP PUT request to `/dedicated/ceph/{serviceName}/user/{userName}/pool/{poolName}` endpoint
 * - Body: poolName required, classRead/classWrite/execute/read/write all required booleans
 */
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			displayOptions,
		},
		{
			displayName: 'Read',
			name: 'read',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether read access is granted',
			displayOptions,
		},
		{
			displayName: 'Write',
			name: 'write',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether write access is granted',
			displayOptions,
		},
		{
			displayName: 'Execute',
			name: 'execute',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether execute access is granted',
			displayOptions,
		},
		{
			displayName: 'Class Read',
			name: 'classRead',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether class read access is granted',
			displayOptions,
		},
		{
			displayName: 'Class Write',
			name: 'classWrite',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether class write access is granted',
			displayOptions,
		},
	];
}

/**
 * Executes the Update User Pool operation.
 *
 * HTTP method: PUT
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
	const read = this.getNodeParameter('read', 0) as boolean;
	const write = this.getNodeParameter('write', 0) as boolean;
	const execute = this.getNodeParameter('execute', 0) as boolean;
	const classRead = this.getNodeParameter('classRead', 0) as boolean;
	const classWrite = this.getNodeParameter('classWrite', 0) as boolean;

	const data = await client.httpPut(
		`/dedicated/ceph/${serviceName}/user/${userName}/pool/${poolName}`,
		{ poolName, read, write, execute, classRead, classWrite },
	);

	return [{ json: data as IDataObject }];
}

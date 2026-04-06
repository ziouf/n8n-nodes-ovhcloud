/**
 * @brief Create user-pool permissions for a Dedicated Ceph cluster
 *
 * Creates user-pool permissions:
 * - HTTP POST request to `/dedicated/ceph/{serviceName}/user/{userName}/pool` endpoint
 * - Body: permissions array with poolName, read, write, execute, classRead, classWrite
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
			displayName: 'User Name',
			name: 'userName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Permissions',
			name: 'permissions',
			type: 'fixedCollection',
			typeOptions: {
				multipleValues: true,
			},
			default: {},
			options: [
				{
					displayName: 'Permission',
					name: 'permissionValues',
					values: [
						{
							displayName: 'Class Read',
							name: 'classRead',
							type: 'boolean',
							default: false,
							description: 'Whether class read access is granted',
						},
						{
							displayName: 'Class Write',
							name: 'classWrite',
							type: 'boolean',
							default: false,
							description: 'Whether class write access is granted',
						},
						{
							displayName: 'Execute',
							name: 'execute',
							type: 'boolean',
							default: false,
							description: 'Whether execute access is granted',
						},
						{
							displayName: 'Pool Name',
							name: 'poolName',
							type: 'string',
							default: '',
						required:	true,
						},
						{
							displayName: 'Read',
							name: 'read',
							type: 'boolean',
							default: false,
							description: 'Whether read access is granted',
						},
						{
							displayName: 'Write',
							name: 'write',
							type: 'boolean',
							default: false,
							description: 'Whether write access is granted',
						},
					],
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Create User Pool operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/user/{userName}/pool
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
	const permissionsRaw = this.getNodeParameter('permissions', 0, {}) as {
		permissionValues?: IDataObject[];
	};

	const permissions = (permissionsRaw.permissionValues || []).map((p) => ({
		poolName: p.poolName,
		read: p.read,
		write: p.write,
		execute: p.execute,
		classRead: p.classRead,
		classWrite: p.classWrite,
	}));

	const data = await client.httpPost(
		`/dedicated/ceph/${serviceName}/user/${userName}/pool`,
		{ permissions },
	);

	return [{ json: data as IDataObject }];
}

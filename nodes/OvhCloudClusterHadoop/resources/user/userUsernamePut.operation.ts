import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Cluster Hadoop Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your Hadoop cluster',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getClusterHadoopServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'cluster-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Username',
			name: 'username',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'user1',
			description: 'The username of the user to update',
			displayOptions,
		},
		{
			displayName: 'Cloudera Manager Access',
			name: 'clouderaManager',
			type: 'boolean',
			default: false,
			description: 'Whether the user is allowed to access the Cloudera Manager interface',
			displayOptions,
		},
		{
			displayName: 'HTTP Frontend Access',
			name: 'httpFrontend',
			type: 'boolean',
			default: false,
			description: 'Whether the user is allowed to access the WebUI interfaces',
			displayOptions,
		},
		{
			displayName: 'Hue Access',
			name: 'hue',
			type: 'boolean',
			default: false,
			description: 'Whether the user is allowed to access the Hue interface',
			displayOptions,
		},
	];
}

/**
 * Update the properties of a Hadoop cluster user.
 *
 * HTTP method: PUT
 * Endpoint: /cluster/hadoop/{serviceName}/user/{username}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const username = this.getNodeParameter('username', _itemIndex ?? 0) as string;
	const clouderaManager = this.getNodeParameter('clouderaManager', _itemIndex ?? 0) as boolean | undefined;
	const httpFrontend = this.getNodeParameter('httpFrontend', _itemIndex ?? 0) as boolean | undefined;
	const hue = this.getNodeParameter('hue', _itemIndex ?? 0) as boolean | undefined;

	const body: IDataObject = {};
	if (clouderaManager !== undefined) body.clouderaManager = clouderaManager;
	if (httpFrontend !== undefined) body.httpFrontend = httpFrontend;
	if (hue !== undefined) body.hue = hue;

	await client.httpPut(
		`/cluster/hadoop/${encodeURIComponent(serviceName)}/user/${encodeURIComponent(username)}`,
		body,
	);

	return this.helpers.returnJsonArray([{ serviceName, username, success: true }]);
}

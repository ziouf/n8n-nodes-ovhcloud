import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OvhCloudConnect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description:
				'The unique identifier of the service (e.g. 123e4567-e89b-12d3-a456-426614174000)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOvhCloudConnectServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: '123e4567-e89b-12d3-a456-426614174000',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Function',
			name: 'function',
			type: 'options',
			default: 'capture',
			required: true,
			options: [
				{ name: 'Capture', value: 'capture' },
				{ name: 'Ping', value: 'ping' },
			],
			description: 'Type of diagnostic to run',
			displayOptions,
		},
		{
			displayName: 'Is SSH',
			name: 'isSsh',
			type: 'boolean',
			default: false,
			description: 'Whether to connect to the service by SSH',
			displayOptions,
		},
		{
			displayName: 'SSH Key',
			name: 'sshKey',
			type: 'string',
			default: '',
			description: 'SSH key used to connect to the service',
			displayOptions,
		},
		{
			displayName: 'SSH Port',
			name: 'sshPort',
			type: 'number',
			default: 0,
			description: 'SSH port used to connect to the service',
			displayOptions,
		},
	];
}

/**
 * Create a new diagnostic configuration for an OvhCloud Connect service.
 *
 * HTTP method: POST
 * Endpoint: /ovhCloudConnect/{serviceName}/diagnostic
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const functionValue = (this.getNodeParameter('function', _itemIndex ?? 0, '') as string) || '';
	const isSsh = this.getNodeParameter('isSsh', _itemIndex ?? 0, false) as boolean;
	const sshKey = (this.getNodeParameter('sshKey', _itemIndex ?? 0, '') as string) || '';
	const sshPort = (this.getNodeParameter('sshPort', _itemIndex ?? 0, 0) as number) ?? 0;

	const body: IDataObject = {};
	if (functionValue) body.function = functionValue;
	if (isSsh !== undefined) body.isSsh = isSsh;
	if (sshKey) body.sshKey = sshKey;
	if (sshPort) body.sshPort = sshPort;

	const data = (await client.httpPost(
		`/ovhCloudConnect/${encodeURIComponent(serviceName)}/diagnostic`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

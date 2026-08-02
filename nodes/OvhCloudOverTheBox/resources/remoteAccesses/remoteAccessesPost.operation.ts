import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OverTheBox Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your OverTheBox offer (e.g. overthebox-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOverTheBoxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'overthebox-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Allowed Ip',
			name: 'allowedIp',
			type: 'string',
			default: '',
			description: 'IP block from which the remote access will be allowed',
			displayOptions,
		},
		{
			displayName: 'Expiration Date',
			name: 'expirationDate',
			type: 'dateTime',
			default: '',
			description: 'The expirationDate of the remote access',
			displayOptions,
		},
		{
			displayName: 'Exposed Port',
			name: 'exposedPort',
			type: 'number',
			default: 0,
			required: true,
			description: 'The port that the device will expose',
			displayOptions,
		},
		{
			displayName: 'Public Key',
			name: 'publicKey',
			type: 'string',
			default: '',
			description: 'The remote user public key authorized on the device (for SSH purpose)',
			displayOptions,
		},
	];
}

/**
 * Create a new remote access for the service.
 *
 * HTTP method: POST
 * Endpoint: /overTheBox/{serviceName}/remoteAccesses
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const allowedIp = (this.getNodeParameter('allowedIp', 0, '') as string) || '';
	const expirationDate = (this.getNodeParameter('expirationDate', 0, '') as string) || '';
	const exposedPort = this.getNodeParameter('exposedPort', 0, 0) as number;
	const publicKey = (this.getNodeParameter('publicKey', 0, '') as string) || '';

	const body: IDataObject = {};
	if (allowedIp) body.allowedIp = allowedIp;
	if (expirationDate) body.expirationDate = expirationDate;
	if (exposedPort !== undefined) body.exposedPort = exposedPort;
	if (publicKey) body.publicKey = publicKey;
	const data = (await client.httpPost(
		`/overTheBox/${encodeURIComponent(serviceName)}/remoteAccesses`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

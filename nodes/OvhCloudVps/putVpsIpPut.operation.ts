import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'VPS Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The vps service name (e.g. vps1234567.ovh.net)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVpsServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'vps1234567.ovh.net',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Ip Address',
			name: 'ipAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The Ip Address parameter',
			displayOptions,
		},
	];
}

/**
 * Update an IP address attached to a VPS
 *
 * HTTP method: PUT
 * Endpoint: /vps/{serviceName}/ips/{ipAddress}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex!, '', { extractValue: true }) as string;
	const ipAddress = this.getNodeParameter('ipAddress', itemIndex!) as string;

	const data = (await client.httpPut(`/vps/${serviceName}/ips/${ipAddress}`, {})) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

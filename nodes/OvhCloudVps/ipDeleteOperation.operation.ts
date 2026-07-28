import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/** Release (delete) a failover IP attached to the VPS. The IP is permanently lost after this operation. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'VPS Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The VPS service name (e.g. vps1234567.ovh.net)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVpsServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'vps1234567.ovh.net' },
			],
			displayOptions,
		},
		{
			displayName: 'IP Address',
			name: 'ipAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address to release from the VPS (permanently lost)',
			placeholder: '123.456.789.0',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex!, '', {
		extractValue: true,
	}) as string;
	const ipAddress = this.getNodeParameter('ipAddress', itemIndex!) as string;

	await client.httpDelete(`/vps/${serviceName}/ips/${encodeURIComponent(ipAddress)}`);
	return this.helpers.returnJsonArray([{}]);
}

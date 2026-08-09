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
			displayName: 'OvhCloudConnect Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The unique identifier of the service (e.g. 123e4567-e89b-12d3-a456-426614174000)',
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
			displayName: 'POP ID',
			name: 'popId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Unique identifier of the POP configuration',
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			required: true,
			description: 'Unique identifier of the datacenter configuration',
			displayOptions,
		},
		{
			displayName: 'Next Hop',
			name: 'nexthop',
			type: 'string',
			default: '',
			required: true,
			description: 'Next hop of the extra configuration',
			displayOptions,
		},
		{
			displayName: 'Subnet',
			name: 'subnet',
			type: 'string',
			default: '',
			required: true,
			description: 'Subnet of the extra configuration',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Type of the extra configuration',
			displayOptions,
		},
	];
}

/**
 * Create a new extra configuration for a datacenter configuration.
 *
 * HTTP method: POST
 * Endpoint: /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}/extra
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const popId = this.getNodeParameter('popId', _itemIndex ?? 0) as number;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex ?? 0) as number;
	const nexthop = (this.getNodeParameter('nexthop', _itemIndex ?? 0, '') as string) || '';
	const subnet = (this.getNodeParameter('subnet', _itemIndex ?? 0, '') as string) || '';
	const type = (this.getNodeParameter('type', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (nexthop) body.nexthop = nexthop;
	if (subnet) body.subnet = subnet;
	if (type) body.type = type;

	const data = (await client.httpPost(`/ovhCloudConnect/${encodeURIComponent(serviceName)}/config/pop/${encodeURIComponent(popId)}/datacenter/${encodeURIComponent(datacenterId)}/extra`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
	];
}

/**
 * Get a specific datacenter configuration of a POP configuration.
 *
 * HTTP method: GET
 * Endpoint: /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter/{datacenterId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const popId = this.getNodeParameter('popId', _itemIndex ?? 0) as number;
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex ?? 0) as number;

	const data = (await client.httpGet(`/ovhCloudConnect/${encodeURIComponent(serviceName)}/config/pop/${encodeURIComponent(popId)}/datacenter/${encodeURIComponent(datacenterId)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

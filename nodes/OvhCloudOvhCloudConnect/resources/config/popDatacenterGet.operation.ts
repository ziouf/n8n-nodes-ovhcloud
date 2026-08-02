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
	];
}

/**
 * List the datacenter configurations linked to a POP configuration.
 *
 * HTTP method: GET
 * Endpoint: /ovhCloudConnect/{serviceName}/config/pop/{popId}/datacenter
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const popId = this.getNodeParameter('popId', 0) as number;

	const data = (await client.httpGet(`/ovhCloudConnect/${encodeURIComponent(serviceName)}/config/pop/${encodeURIComponent(popId)}/datacenter`)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'string' ? { datacenterId: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}

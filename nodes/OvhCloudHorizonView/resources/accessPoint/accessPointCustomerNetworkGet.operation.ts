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
			displayName: 'Horizon View Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Horizon View service (e.g. service1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHorizonViewServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'service1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Access Point ID',
			name: 'accessPointId',
			type: 'string',
			default: '',
			required: true,
			description: 'The access point ID (URN)',
			displayOptions,
		},
	];
}

/**
 * List customer networks for an access point.
 *
 * HTTP method: GET
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const accessPointId = this.getNodeParameter('accessPointId', 0) as string;
	const data = (await client.httpGet(
		`/horizonView/${encodeURIComponent(serviceName)}/accessPoint/${encodeURIComponent(accessPointId)}/customerNetwork`,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'number' ? { customerNetworkId: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}

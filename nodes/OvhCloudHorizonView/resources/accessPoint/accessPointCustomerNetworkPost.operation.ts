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
		{
			displayName: 'Network',
			name: 'network',
			type: 'string',
			default: '',
			required: true,
			placeholder: '10.0.0.0/24',
			description: 'Customer network (CIDR) to add',
			displayOptions,
		},
	];
}

/**
 * Add a customer network to an access point.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const accessPointId = this.getNodeParameter('accessPointId', _itemIndex ?? 0) as string;

	const body: IDataObject = { network: this.getNodeParameter('network', _itemIndex ?? 0) as string };

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/accessPoint/${encodeURIComponent(accessPointId)}/customerNetwork`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

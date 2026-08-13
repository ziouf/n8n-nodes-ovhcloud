import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Pool Type',
			name: 'poolType',
			type: 'options',
			default: 'hybridPool',
			required: true,
			noDataExpression: true,
			options: [
				{ name: 'Hybrid Pool', value: 'hybridPool' },
				{ name: 'Private Pool', value: 'privatePool' },
				{ name: 'Public Pool', value: 'publicPool' },
			],
			description: 'The type of the access point',
			displayOptions,
		},
		{
			displayName: 'Private Block',
			name: 'privateBlock',
			type: 'string',
			default: '',
			description: 'Private IP block (CIDR) used by the access point',
			displayOptions,
		},
		{
			displayName: 'Private VLAN',
			name: 'privateVlan',
			type: 'number',
			default: 0,
			description: 'Private VLAN used by the access point',
			displayOptions,
		},
		{
			displayName: 'vRouter Pool Public IP',
			name: 'vrouterPoolPublicIp',
			type: 'string',
			default: '',
			description: 'Public IP of the vRouter pool',
			displayOptions,
		},
	];
}

/**
 * Add an access point to a Horizon View service.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/accessPoint
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const body: IDataObject = { poolType: this.getNodeParameter('poolType', _itemIndex ?? 0) as string };

	const privateBlock = (this.getNodeParameter('privateBlock', _itemIndex ?? 0, '') as string) || '';
	if (privateBlock) body.privateBlock = privateBlock;

	const privateVlan = (this.getNodeParameter('privateVlan', _itemIndex ?? 0, 0) as number) || 0;
	if (privateVlan) body.privateVlan = privateVlan;

	const vrouterPoolPublicIp = (this.getNodeParameter('vrouterPoolPublicIp', _itemIndex ?? 0, '') as string) || '';
	if (vrouterPoolPublicIp) body.vrouterPoolPublicIp = vrouterPoolPublicIp;

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/accessPoint`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

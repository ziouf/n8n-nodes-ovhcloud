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
			displayName: 'Expiration',
			name: 'expiration',
			type: 'number',
			default: 0,
			required: true,
			description: 'Session timeout duration in minutes',
			displayOptions,
		},
		{
			displayName: 'On Single AP',
			name: 'onSingleAP',
			type: 'options',
			default: 'privateAccessPoint',
			noDataExpression: true,
			options: [
				{ name: 'Private Access Point', value: 'privateAccessPoint' },
				{ name: 'Public Access Point', value: 'publicAccessPoint' },
			],
			description: 'Whether to apply the session timeout only on a single access point type',
			displayOptions,
		},
	];
}

/**
 * Change session timeout for an access point.
 *
 * HTTP method: POST
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/changeSessionTimeout
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const accessPointId = this.getNodeParameter('accessPointId', _itemIndex ?? 0) as string;

	const body: IDataObject = { expiration: this.getNodeParameter('expiration', _itemIndex ?? 0) as number };

	const onSingleAP = (this.getNodeParameter('onSingleAP', _itemIndex ?? 0, '') as string) || '';
	if (onSingleAP) body.onSingleAP = onSingleAP;

	const data = (await client.httpPost(
		`/horizonView/${encodeURIComponent(serviceName)}/accessPoint/${encodeURIComponent(accessPointId)}/changeSessionTimeout`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

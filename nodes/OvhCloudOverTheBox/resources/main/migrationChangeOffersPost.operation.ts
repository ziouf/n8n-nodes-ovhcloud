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
			displayName: 'Hardware Name',
			name: 'hardwareName',
			type: 'string',
			default: '',
			description: 'Name of the hardware',
			displayOptions,
		},
		{
			displayName: 'Offer',
			name: 'offer',
			type: 'string',
			default: '',
			required: true,
			description: 'Offer name to migrate to',
			displayOptions,
		},
		{
			displayName: 'Shipping Contact ID',
			name: 'shippingContactID',
			type: 'string',
			default: '',
			description: 'In case of hardware and if a shipping custom address is desired',
			displayOptions,
		},
	];
}

/**
 * Migrate to the selected OverTheBox offer.
 *
 * HTTP method: POST
 * Endpoint: /overTheBox/{serviceName}/migration/changeOffers
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const hardwareName = (this.getNodeParameter('hardwareName', _itemIndex ?? 0, '') as string) || '';
	const offer = (this.getNodeParameter('offer', _itemIndex ?? 0, '') as string) || '';
	const shippingContactID = (this.getNodeParameter('shippingContactID', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (hardwareName) body.hardwareName = hardwareName;
	if (offer) body.offer = offer;
	if (shippingContactID) body.shippingContactID = shippingContactID;
	const data = (await client.httpPost(
		`/overTheBox/${encodeURIComponent(serviceName)}/migration/changeOffers`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

import type {
	IDisplayOptions,
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Pack Xdsl Service Name',
			name: 'packName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your pack',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPackXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'packabcd-ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Eligibility Reference',
			name: 'eligibilityReference',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Offer Name',
			name: 'offerName',
			type: 'string',
			default: '',
			required: true,
			description: 'Reference of the new offer',
			displayOptions,
		},
		{
			displayName: 'Options',
			name: 'options',
			type: 'string',
			default: '',
			description: 'Options wanted in the new offer (JSON array)',
			displayOptions,
		},
	];
}

/**
 * Calculate services to delete with unpack terms for new offer and options.
 *
 * HTTP method: POST
 * Endpoint: /pack/xdsl/{packName}/addressMove/servicesToDeleteUnpackTerms
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const packName = this.getNodeParameter('packName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const eligibilityReference = this.getNodeParameter('eligibilityReference', _itemIndex ?? 0) as string;
	const offerName = this.getNodeParameter('offerName', _itemIndex ?? 0) as string;

	const body: IDataObject = { eligibilityReference, offerName };
	const options = (this.getNodeParameter('options', _itemIndex ?? 0, '') as string) || '';
	if (options) body.options = JSON.parse(options);

	const data = (await client.httpPost(
		`/pack/xdsl/${encodeURIComponent(packName)}/addressMove/servicesToDeleteUnpackTerms`,
		body,
	)) as unknown[];
	const items = data.map((item) => item as IDataObject) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}

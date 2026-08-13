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
			displayName: 'Ovh Subsidiary',
			name: 'ovhSubsidiary',
			type: 'options',
			default: 'CZ',
			options: [
				{ name: 'CZ', value: 'CZ' },
				{ name: 'DE', value: 'DE' },
				{ name: 'ES', value: 'ES' },
				{ name: 'EU', value: 'EU' },
				{ name: 'FI', value: 'FI' },
				{ name: 'FR', value: 'FR' },
				{ name: 'GB', value: 'GB' },
				{ name: 'IE', value: 'IE' },
				{ name: 'IT', value: 'IT' },
				{ name: 'LT', value: 'LT' },
				{ name: 'MA', value: 'MA' },
				{ name: 'NL', value: 'NL' },
				{ name: 'PL', value: 'PL' },
				{ name: 'PT', value: 'PT' },
				{ name: 'SN', value: 'SN' },
				{ name: 'TN', value: 'TN' },
			],
			description: 'OVHcloud subsidiary targeted. Attributes may be different from one subsidiary to another. Default to FR.',
			displayOptions,
		},
	];
}

/**
 * Executes the List extensions with their pricing attributes operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/extensions/pricingAttributes
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	const qs: IDataObject = {};
		const ovhSubsidiary = this.getNodeParameter('ovhSubsidiary', _itemIndex, '') as string;
		if (ovhSubsidiary !== '' && ovhSubsidiary !== undefined) qs['ovhSubsidiary'] = ovhSubsidiary;

	const data = (await client.httpGet(`/domain/extensions/pricingAttributes`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

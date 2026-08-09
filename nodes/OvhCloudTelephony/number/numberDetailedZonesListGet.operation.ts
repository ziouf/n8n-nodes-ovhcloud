import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Axiom',
			name: 'axiom',
			type: 'string',
			default: '',
			description: 'Enter a part of a city name or a zip for specific zone returns',
			displayOptions,
		},
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			required: true,
			description: 'The country parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Number Detailed Zones List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/number/detailedZones
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const axiom = this.getNodeParameter('axiom', _itemIndex) as string;
	const country = this.getNodeParameter('country', _itemIndex) as string;

	const qs: IDataObject = {
		axiom: axiom,
		country: country,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/number/detailedZones', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
        {
          displayName: 'Country',
          name: 'country',
          type: 'string',
          default: '',
          required: true,
          description: 'The country parameter',
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
 * Executes the Get ListFaxOffers operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/fax/offers
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {

	const country = this.getNodeParameter('country', _itemIndex) as string;

	const qs: IDataObject = {
    country: country
  };


	const client = getClient(this);
	const data = (await client.httpGet('/telephony/fax/offers', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
          displayName: 'Country',
          name: 'country',
          type: 'string',
          default: '',
          required: true,
          description: 'The country parameter',
          displayOptions,
        },
        {
          displayName: 'Offer',
          name: 'offer',
          type: 'string',
          default: '',
          description: 'The offer parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get GetLineOfferDetails operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/line/offer/details
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {

	const country = this.getNodeParameter('country', itemIndex) as string;
	const offer = this.getNodeParameter('offer', itemIndex) as string;

	const qs: IDataObject = {
    country: country,
    offer: offer
  };


	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/line/offer/details', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

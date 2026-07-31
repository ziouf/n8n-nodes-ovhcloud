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
          displayName: 'country',
          name: 'country',
          type: 'string',
          default: '',
          required: true,
          description: 'The country parameter',
          displayOptions,
        },
        {
          displayName: 'offer',
          name: 'offer',
          type: 'string',
          default: '',
          required: false,
          description: 'The offer parameter',
          displayOptions,
        },
        {
          displayName: 'country',
          name: 'country',
          type: 'string',
          default: '',
          required: true,
          description: 'The country parameter',
          displayOptions,
        },
        {
          displayName: 'offer',
          name: 'offer',
          type: 'string',
          default: '',
          required: false,
          description: 'The offer parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get GetOfferPhones operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/line/offer/phones
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {

	const country = this.getNodeParameter('country', itemIndex) as string;
	const offer = this.getNodeParameter('offer', itemIndex) as string;

	const qs: IDataObject = {
    country: country,
    offer: offer
  };


	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/line/offer/phones', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

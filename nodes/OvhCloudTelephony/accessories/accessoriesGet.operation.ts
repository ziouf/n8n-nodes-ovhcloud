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
          displayName: 'Brand',
          name: 'brand',
          type: 'string',
          default: '',
          description: 'The brand parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get ListAccessories operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/accessories
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {

	const country = this.getNodeParameter('country', itemIndex) as string;
	const brand = this.getNodeParameter('brand', itemIndex) as string;

	const qs: IDataObject = {
    country: country,
    brand: brand
  };


	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/accessories', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

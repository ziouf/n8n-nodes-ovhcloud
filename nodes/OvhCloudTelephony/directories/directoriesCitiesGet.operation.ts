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
          displayName: 'Zip Code',
          name: 'zipCode',
          type: 'string',
          default: '',
          description: 'The zipCode parameter',
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
        {
          displayName: 'Zip Code',
          name: 'zipCode',
          type: 'string',
          default: '',
          description: 'The zipCode parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get ListCities operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/directories/cities
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {

	const country = this.getNodeParameter('country', _itemIndex) as string;
	const zipCode = this.getNodeParameter('zipCode', _itemIndex) as string;

	const qs: IDataObject = {
    country: country,
    zipCode: zipCode
  };


	const client = getClient(this);
	const data = (await client.httpGet('/telephony/directories/cities', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

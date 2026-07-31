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
          displayName: 'zip Code',
          name: 'zipCode',
          type: 'string',
          default: '',
          required: false,
          description: 'The zipCode parameter',
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
          displayName: 'zip Code',
          name: 'zipCode',
          type: 'string',
          default: '',
          required: false,
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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {

	const country = this.getNodeParameter('country', itemIndex) as string;
	const zipCode = this.getNodeParameter('zipCode', itemIndex) as string;

	const qs: IDataObject = {
    country: country,
    zipCode: zipCode
  };


	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/directories/cities', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

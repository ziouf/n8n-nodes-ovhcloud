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
          displayName: 'Number',
          name: 'number',
          type: 'string',
          default: '',
          required: true,
          description: 'The number parameter',
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
          displayName: 'Number',
          name: 'number',
          type: 'string',
          default: '',
          description: 'The number parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get ListZipCodes operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/directories/availableZipCodes
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {

	const country = this.getNodeParameter('country', _itemIndex) as string;
	const number = this.getNodeParameter('number', _itemIndex) as string;

	const qs: IDataObject = {
    country: country,
    number: number
  };


	const client = getClient(this);
	const data = (await client.httpGet('/telephony/directories/availableZipCodes', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

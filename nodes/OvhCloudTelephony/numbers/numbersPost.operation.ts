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
          displayName: 'Number',
          name: 'number',
          type: 'string',
          default: '',
          required: true,
          description: 'The number parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post CreateNumber operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/numbers
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {


	const country = this.getNodeParameter('country', _itemIndex) as string;
	const number = this.getNodeParameter('number', _itemIndex) as string;

	const body: IDataObject = {
    country: country,
    number: number
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/numbers', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

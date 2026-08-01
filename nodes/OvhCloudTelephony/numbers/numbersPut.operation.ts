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
          displayName: 'Number ID',
          name: 'numberId',
          type: 'string',
          default: '',
          required: true,
          description: 'The number identifier',
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
          required: true,
          description: 'The number parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put UpdateNumber operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/numbers/{numberId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const numberId = this.getNodeParameter('numberId', itemIndex) as string;


	const country = this.getNodeParameter('country', itemIndex) as string;
	const number = this.getNodeParameter('number', itemIndex) as string;

	const body: IDataObject = {
    country: country,
    number: number
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/numbers/' + numberId, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

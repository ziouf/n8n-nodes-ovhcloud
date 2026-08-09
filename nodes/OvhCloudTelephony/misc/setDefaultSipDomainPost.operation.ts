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
          displayName: 'Type',
          name: 'type',
          type: 'string',
          default: '',
          description: 'The type parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post SetDefaultSIPDomain operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/setDefaultSipDomain
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {


	const country = this.getNodeParameter('country', _itemIndex) as string;
	const type = this.getNodeParameter('type', _itemIndex) as string;

	const body: IDataObject = {
    country: country,
    type: type
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/setDefaultSipDomain', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

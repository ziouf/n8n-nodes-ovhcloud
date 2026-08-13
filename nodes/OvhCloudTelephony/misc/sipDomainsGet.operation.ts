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
          displayName: 'Type',
          name: 'type',
          type: 'string',
          default: '',
          description: 'The type parameter',
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
 * Executes the Get ListSIPDomains operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/availableDefaultSipDomains
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {

	const type = this.getNodeParameter('type', _itemIndex) as string;

	const qs: IDataObject = {
    type: type
  };


	const client = getClient(this);
	const data = (await client.httpGet('/telephony/availableDefaultSipDomains', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

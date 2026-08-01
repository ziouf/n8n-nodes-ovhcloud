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
          displayName: 'Domain',
          name: 'domain',
          type: 'string',
          default: '',
          description: 'The domain parameter',
          displayOptions,
        },
        {
          displayName: 'Domain',
          name: 'domain',
          type: 'string',
          default: '',
          description: 'The domain parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Get SearchServices operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/searchServices
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {

	const domain = this.getNodeParameter('domain', itemIndex) as string;

	const qs: IDataObject = {
    domain: domain
  };


	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/searchServices', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

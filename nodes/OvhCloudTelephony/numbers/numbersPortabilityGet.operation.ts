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
          displayName: 'Portability ID',
          name: 'portabilityId',
          type: 'string',
          default: '',
          required: true,
          description: 'The portability identifier',
          displayOptions,
        },
	];
}

/**
 * Executes the Get GetPortability operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/numbers/{numberId}/portability/{portabilityId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const numberId = this.getNodeParameter('numberId', itemIndex) as string;
	const portabilityId = this.getNodeParameter('portabilityId', itemIndex) as string;



	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/numbers/' + numberId + '/portability/' + portabilityId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

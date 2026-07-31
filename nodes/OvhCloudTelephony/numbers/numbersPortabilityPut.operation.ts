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
        {
          displayName: 'expire',
          name: 'expire',
          type: 'string',
          default: '',
          required: false,
          description: 'The expire parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put UpdatePortability operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/numbers/{numberId}/portability/{portabilityId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const numberId = this.getNodeParameter('numberId', itemIndex) as string;
	const portabilityId = this.getNodeParameter('portabilityId', itemIndex) as string;


	const expire = this.getNodeParameter('expire', itemIndex) as string;

	const body: IDataObject = {
    expire: expire
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/numbers/' + numberId + '/portability/' + portabilityId, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

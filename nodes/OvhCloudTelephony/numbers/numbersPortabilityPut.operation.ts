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
          displayName: 'Number ID',
          name: 'numberId',
          type: 'string',
          default: '',
          required: true,
          description: 'The phone number',
          displayOptions,
        },
        {
          displayName: 'Portability ID',
          name: 'portabilityId',
          type: 'string',
          default: '',
          required: true,
          description: 'The portability',
          displayOptions,
        },
        {
          displayName: 'Expire',
          name: 'expire',
          type: 'string',
          default: '',
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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const numberId = this.getNodeParameter('numberId', _itemIndex) as string;
	const portabilityId = this.getNodeParameter('portabilityId', _itemIndex) as string;


	const expire = this.getNodeParameter('expire', _itemIndex) as string;

	const body: IDataObject = {
    expire: expire
    };

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/numbers/' + numberId + '/portability/' + portabilityId, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

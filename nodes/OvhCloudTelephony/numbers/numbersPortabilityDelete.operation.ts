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
	];
}

/**
 * Executes the Delete DeletePortability operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/numbers/{numberId}/portability/{portabilityId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const numberId = this.getNodeParameter('numberId', _itemIndex) as string;
	const portabilityId = this.getNodeParameter('portabilityId', _itemIndex) as string;



	const client = getClient(this);
	const data = (await client.httpDelete('/telephony/numbers/' + numberId + '/portability/' + portabilityId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

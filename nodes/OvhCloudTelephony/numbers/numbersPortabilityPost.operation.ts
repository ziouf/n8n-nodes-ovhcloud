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
 * Executes the Post CreatePortability operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/numbers/{numberId}/portability
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const numberId = this.getNodeParameter('numberId', itemIndex) as string;


	const expire = this.getNodeParameter('expire', itemIndex) as string;

	const body: IDataObject = {
    expire: expire
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/numbers/' + numberId + '/portability', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

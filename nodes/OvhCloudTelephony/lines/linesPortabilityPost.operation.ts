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
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          description: 'The telephony service name (line number)',
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
 * Executes the Post CreatePortability operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/lines/{serviceName}/portability
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;


	const number = this.getNodeParameter('number', _itemIndex) as string;
	const expire = this.getNodeParameter('expire', _itemIndex) as string;

	const body: IDataObject = {
    number: number,
    expire: expire
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/lines/' + serviceName + '/portability', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

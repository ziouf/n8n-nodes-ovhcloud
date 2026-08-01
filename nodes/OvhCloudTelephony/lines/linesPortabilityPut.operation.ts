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
          displayName: 'Portability ID',
          name: 'portabilityId',
          type: 'string',
          default: '',
          required: true,
          description: 'The portability identifier',
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
 * Endpoint: /telephony/lines/{serviceName}/portability/{portabilityId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const portabilityId = this.getNodeParameter('portabilityId', itemIndex) as string;


	const expire = this.getNodeParameter('expire', itemIndex) as string;

	const body: IDataObject = {
    expire: expire
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/lines/' + serviceName + '/portability/' + portabilityId, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

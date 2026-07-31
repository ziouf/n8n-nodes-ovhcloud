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
          displayName: 'country',
          name: 'country',
          type: 'string',
          default: '',
          required: true,
          description: 'The country parameter',
          displayOptions,
        },
        {
          displayName: 'number',
          name: 'number',
          type: 'string',
          default: '',
          required: true,
          description: 'The number parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post CreateNumber operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/lines/{serviceName}/number
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;


	const country = this.getNodeParameter('country', itemIndex) as string;
	const number = this.getNodeParameter('number', itemIndex) as string;

	const body: IDataObject = {
    country: country,
    number: number
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/lines/' + serviceName + '/number', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

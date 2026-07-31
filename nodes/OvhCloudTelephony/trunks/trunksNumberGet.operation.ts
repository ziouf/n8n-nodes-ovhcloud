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
          displayName: 'Number ID',
          name: 'numberId',
          type: 'string',
          default: '',
          required: true,
          description: 'The number identifier',
          displayOptions,
        },
	];
}

/**
 * Executes the Get GetNumber operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/trunks/{serviceName}/number/{numberId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const numberId = this.getNodeParameter('numberId', itemIndex) as string;



	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/trunks/' + serviceName + '/number/' + numberId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

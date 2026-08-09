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
	];
}

/**
 * Executes the Get ListSIMs operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/lines/{serviceName}/sim
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/lines/' + serviceName + '/sim')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

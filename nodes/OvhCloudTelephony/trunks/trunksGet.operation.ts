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
 * Executes the Get GetTrunk operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/trunks/{serviceName}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/trunks/' + serviceName)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
 * Executes the Get ListNumbers operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/trunks/{serviceName}/number
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;



	const client = getClient(this);
	const data = (await client.httpGet('/telephony/trunks/' + serviceName + '/number')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

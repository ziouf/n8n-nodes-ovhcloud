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
        {
          displayName: 'SIM ID',
          name: 'simId',
          type: 'string',
          default: '',
          required: true,
          description: 'The SIM',
          displayOptions,
        },
	];
}

/**
 * Executes the Get GetSIM operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/lines/{serviceName}/sim/{simId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const simId = this.getNodeParameter('simId', _itemIndex) as string;



	const client = getClient(this);
	const data = (await client.httpGet('/telephony/lines/' + serviceName + '/sim/' + simId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

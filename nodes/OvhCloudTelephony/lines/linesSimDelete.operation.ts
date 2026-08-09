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
          displayName: 'SIM ID',
          name: 'simId',
          type: 'string',
          default: '',
          required: true,
          description: 'The SIM identifier',
          displayOptions,
        },
	];
}

/**
 * Executes the Delete DeleteSIM operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/lines/{serviceName}/sim/{simId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const simId = this.getNodeParameter('simId', _itemIndex) as string;



	const client = new ApiClient(this);
	const data = (await client.httpDelete('/telephony/lines/' + serviceName + '/sim/' + simId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

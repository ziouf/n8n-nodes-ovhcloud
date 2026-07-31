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
        {
          displayName: 'iccid',
          name: 'iccid',
          type: 'string',
          default: '',
          required: true,
          description: 'The iccid parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put UpdateSIM operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/lines/{serviceName}/sim/{simId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const simId = this.getNodeParameter('simId', itemIndex) as string;


	const iccid = this.getNodeParameter('iccid', itemIndex) as string;

	const body: IDataObject = {
    iccid: iccid
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/lines/' + serviceName + '/sim/' + simId, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

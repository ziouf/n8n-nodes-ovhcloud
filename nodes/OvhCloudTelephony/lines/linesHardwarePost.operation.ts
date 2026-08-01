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
          displayName: 'Mac Address',
          name: 'macAddress',
          type: 'string',
          default: '',
          required: true,
          description: 'The macAddress parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post CreateHardware operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/lines/{serviceName}/hardware
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;


	const macAddress = this.getNodeParameter('macAddress', itemIndex) as string;

	const body: IDataObject = {
    macAddress: macAddress
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/lines/' + serviceName + '/hardware', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

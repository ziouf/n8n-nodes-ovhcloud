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
          displayName: 'Billing Account',
          name: 'billingAccount',
          type: 'string',
          default: '',
          required: true,
          description: 'The name of your billingAccount',
          displayOptions,
        },
        {
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          displayOptions,
        },
        {
          displayName: 'Device ID',
          name: 'deviceId',
          type: 'string',
          default: '',
          required: true,
          description: 'The deviceId parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Delete Line Softphone Devices Delete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/softphone/devices/{deviceId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const deviceId = this.getNodeParameter('deviceId', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('/telephony/' + billingAccount + '/line/' + serviceName + '/softphone/devices/' + deviceId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

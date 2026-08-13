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
          displayName: 'Ip Address',
          name: 'ipAddress',
          type: 'string',
          default: '',
          description: 'The ipAddress parameter',
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
        {
          displayName: 'Slot',
          name: 'slot',
          type: 'string',
          default: '',
          description: 'The slot parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Associate Device Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/associateDevice
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const ipAddress = this.getNodeParameter('ipAddress', _itemIndex) as string;
	const macAddress = this.getNodeParameter('macAddress', _itemIndex) as string;
	const slot = this.getNodeParameter('slot', _itemIndex) as string;

	const body: IDataObject = {
    ipAddress: ipAddress,
    macAddress: macAddress,
    slot: slot
    };

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/associateDevice', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

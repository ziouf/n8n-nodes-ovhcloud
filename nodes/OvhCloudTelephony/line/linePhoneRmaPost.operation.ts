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
          displayName: 'Mondial Relay ID',
          name: 'mondialRelayId',
          type: 'string',
          default: '',
          description: 'The mondialRelayId parameter',
          displayOptions,
        },
        {
          displayName: 'New Merchandise',
          name: 'newMerchandise',
          type: 'string',
          default: '',
          description: 'The newMerchandise parameter',
          displayOptions,
        },
        {
          displayName: 'Shipping Contact ID',
          name: 'shippingContactId',
          type: 'string',
          default: '',
          description: 'The shippingContactId parameter',
          displayOptions,
        },
        {
          displayName: 'Type',
          name: 'type',
          type: 'string',
          default: '',
          required: true,
          description: 'The type parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Phone Rma Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/phone/rma
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const mondialRelayId = this.getNodeParameter('mondialRelayId', _itemIndex) as string;
	const newMerchandise = this.getNodeParameter('newMerchandise', _itemIndex) as string;
	const shippingContactId = this.getNodeParameter('shippingContactId', _itemIndex) as string;
	const typeParam = this.getNodeParameter('type', _itemIndex) as string;

	const body: IDataObject = {
    mondialRelayId: mondialRelayId,
    newMerchandise: newMerchandise,
    shippingContactId: shippingContactId,
    'type': typeParam
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/phone/rma', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

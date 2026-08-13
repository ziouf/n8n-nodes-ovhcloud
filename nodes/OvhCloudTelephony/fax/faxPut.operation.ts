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
          displayName: 'Description',
          name: 'description',
          type: 'string',
          default: '',
          description: 'The description parameter',
          displayOptions,
        },
        {
          displayName: 'Notifications',
          name: 'notifications',
          type: 'string',
          default: '',
          description: 'The notifications parameter',
          displayOptions,
        },
        {
          displayName: 'Offers',
          name: 'offers',
          type: 'string',
          default: '',
          description: 'The offers parameter',
          displayOptions,
        },
        {
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          displayOptions,
        },
        {
          displayName: 'Service Type',
          name: 'serviceType',
          type: 'string',
          default: '',
          description: 'The serviceType parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Fax Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/fax/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const notifications = this.getNodeParameter('notifications', _itemIndex) as string;
	const offers = this.getNodeParameter('offers', _itemIndex) as string;
	const serviceName1 = this.getNodeParameter('serviceName', _itemIndex) as string;
	const serviceType = this.getNodeParameter('serviceType', _itemIndex) as string;

	const body: IDataObject = {
    description: description,
    notifications: notifications,
    offers: offers,
    serviceName: serviceName1,
    serviceType: serviceType
    };

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/fax/' + serviceName, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

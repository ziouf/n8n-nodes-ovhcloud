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
          displayName: 'Can Change Password',
          name: 'canChangePassword',
          type: 'string',
										typeOptions: { password: true },
          default: '',
          description: 'The canChangePassword parameter',
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
          displayName: 'Device Slot',
          name: 'deviceSlot',
          type: 'string',
          default: '',
          description: 'The deviceSlot parameter',
          displayOptions,
        },
        {
          displayName: 'Get Public Offer',
          name: 'getPublicOffer',
          type: 'string',
          default: '',
          description: 'The getPublicOffer parameter',
          displayOptions,
        },
        {
          displayName: 'Infrastructure',
          name: 'infrastructure',
          type: 'string',
          default: '',
          description: 'The infrastructure parameter',
          displayOptions,
        },
        {
          displayName: 'Is Attached To Other Lines Phone',
          name: 'isAttachedToOtherLinesPhone',
          type: 'string',
          default: '',
          description: 'The isAttachedToOtherLinesPhone parameter',
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
        {
          displayName: 'Simultaneous Lines',
          name: 'simultaneousLines',
          type: 'string',
          default: '',
          description: 'The simultaneousLines parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const canChangePassword = this.getNodeParameter('canChangePassword', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const deviceSlot = this.getNodeParameter('deviceSlot', _itemIndex) as string;
	const getPublicOffer = this.getNodeParameter('getPublicOffer', _itemIndex) as string;
	const infrastructure = this.getNodeParameter('infrastructure', _itemIndex) as string;
	const isAttachedToOtherLinesPhone = this.getNodeParameter('isAttachedToOtherLinesPhone', _itemIndex) as string;
	const notifications = this.getNodeParameter('notifications', _itemIndex) as string;
	const offers = this.getNodeParameter('offers', _itemIndex) as string;
	const serviceName1 = this.getNodeParameter('serviceName', _itemIndex) as string;
	const serviceType = this.getNodeParameter('serviceType', _itemIndex) as string;
	const simultaneousLines = this.getNodeParameter('simultaneousLines', _itemIndex) as string;

	const body: IDataObject = {
    canChangePassword: canChangePassword,
    description: description,
    deviceSlot: deviceSlot,
    getPublicOffer: getPublicOffer,
    infrastructure: infrastructure,
    isAttachedToOtherLinesPhone: isAttachedToOtherLinesPhone,
    notifications: notifications,
    offers: offers,
    serviceName: serviceName1,
    serviceType: serviceType,
    simultaneousLines: simultaneousLines
    };

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

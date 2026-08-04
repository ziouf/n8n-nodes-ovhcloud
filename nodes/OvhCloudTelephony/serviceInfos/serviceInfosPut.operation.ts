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
          displayName: 'Can Delete At Expiration',
          name: 'canDeleteAtExpiration',
          type: 'string',
          default: '',
          description: 'The canDeleteAtExpiration parameter',
          displayOptions,
        },
        {
          displayName: 'Contact Admin',
          name: 'contactAdmin',
          type: 'string',
          default: '',
          description: 'The contactAdmin parameter',
          displayOptions,
        },
        {
          displayName: 'Contact Billing',
          name: 'contactBilling',
          type: 'string',
          default: '',
          description: 'The contactBilling parameter',
          displayOptions,
        },
        {
          displayName: 'Contact Tech',
          name: 'contactTech',
          type: 'string',
          default: '',
          description: 'The contactTech parameter',
          displayOptions,
        },
        {
          displayName: 'Creation',
          name: 'creation',
          type: 'string',
          default: '',
          description: 'The creation parameter',
          displayOptions,
        },
        {
          displayName: 'Domain',
          name: 'domain',
          type: 'string',
          default: '',
          description: 'The domain parameter',
          displayOptions,
        },
        {
          displayName: 'Engaged Up To',
          name: 'engagedUpTo',
          type: 'string',
          default: '',
          description: 'The engagedUpTo parameter',
          displayOptions,
        },
        {
          displayName: 'Expiration',
          name: 'expiration',
          type: 'string',
          default: '',
          description: 'The expiration parameter',
          displayOptions,
        },
        {
          displayName: 'Possible Renew Period',
          name: 'possibleRenewPeriod',
          type: 'string',
          default: '',
          description: 'The possibleRenewPeriod parameter',
          displayOptions,
        },
        {
          displayName: 'Renew',
          name: 'renew',
          type: 'string',
          default: '',
          description: 'The renew parameter',
          displayOptions,
        },
        {
          displayName: 'Renewal Type',
          name: 'renewalType',
          type: 'string',
          default: '',
          description: 'The renewalType parameter',
          displayOptions,
        },
        {
          displayName: 'Service ID',
          name: 'serviceId',
          type: 'string',
          default: '',
          description: 'The serviceId parameter',
          displayOptions,
        },
        {
          displayName: 'Status',
          name: 'status',
          type: 'string',
          default: '',
          description: 'The status parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Service Infos Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const canDeleteAtExpiration = this.getNodeParameter('canDeleteAtExpiration', itemIndex) as string;
	const contactAdmin = this.getNodeParameter('contactAdmin', itemIndex) as string;
	const contactBilling = this.getNodeParameter('contactBilling', itemIndex) as string;
	const contactTech = this.getNodeParameter('contactTech', itemIndex) as string;
	const creation = this.getNodeParameter('creation', itemIndex) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const engagedUpTo = this.getNodeParameter('engagedUpTo', itemIndex) as string;
	const expiration = this.getNodeParameter('expiration', itemIndex) as string;
	const possibleRenewPeriod = this.getNodeParameter('possibleRenewPeriod', itemIndex) as string;
	const renew = this.getNodeParameter('renew', itemIndex) as string;
	const renewalType = this.getNodeParameter('renewalType', itemIndex) as string;
	const serviceId = this.getNodeParameter('serviceId', itemIndex) as string;
	const status = this.getNodeParameter('status', itemIndex) as string;

	const body: IDataObject = {
    canDeleteAtExpiration: canDeleteAtExpiration,
    contactAdmin: contactAdmin,
    contactBilling: contactBilling,
    contactTech: contactTech,
    creation: creation,
    domain: domain,
    engagedUpTo: engagedUpTo,
    expiration: expiration,
    possibleRenewPeriod: possibleRenewPeriod,
    renew: renew,
    renewalType: renewalType,
    serviceId: serviceId,
    status: status
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/serviceInfos', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
          displayName: 'Brand',
          name: 'brand',
          type: 'string',
          default: '',
          description: 'The brand parameter',
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
          displayName: 'Mac Address',
          name: 'macAddress',
          type: 'string',
          default: '',
          description: 'The macAddress parameter',
          displayOptions,
        },
        {
          displayName: 'Max Simultaneous Calls',
          name: 'maxSimultaneousCalls',
          type: 'string',
          default: '',
          description: 'The maxSimultaneousCalls parameter',
          displayOptions,
        },
        {
          displayName: 'Maxline',
          name: 'maxline',
          type: 'string',
          default: '',
          description: 'The maxline parameter',
          displayOptions,
        },
        {
          displayName: 'Mgcp Ip Restriction',
          name: 'mgcpIpRestriction',
          type: 'string',
          default: '',
          description: 'The mgcpIpRestriction parameter',
          displayOptions,
        },
        {
          displayName: 'Phone Configuration',
          name: 'phoneConfiguration',
          type: 'string',
          default: '',
          description: 'The phoneConfiguration parameter',
          displayOptions,
        },
        {
          displayName: 'Protocol',
          name: 'protocol',
          type: 'string',
          default: '',
          description: 'The protocol parameter',
          displayOptions,
        },
        {
          displayName: 'User Password',
          name: 'userPassword',
          type: 'string',
										typeOptions: { password: true },
          default: '',
          description: 'The userPassword parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Phone Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/phone
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const brand = this.getNodeParameter('brand', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const macAddress = this.getNodeParameter('macAddress', _itemIndex) as string;
	const maxSimultaneousCalls = this.getNodeParameter('maxSimultaneousCalls', _itemIndex) as string;
	const maxline = this.getNodeParameter('maxline', _itemIndex) as string;
	const mgcpIpRestriction = this.getNodeParameter('mgcpIpRestriction', _itemIndex) as string;
	const phoneConfiguration = this.getNodeParameter('phoneConfiguration', _itemIndex) as string;
	const protocol = this.getNodeParameter('protocol', _itemIndex) as string;
	const userPassword = this.getNodeParameter('userPassword', _itemIndex) as string;

	const body: IDataObject = {
    brand: brand,
    description: description,
    macAddress: macAddress,
    maxSimultaneousCalls: maxSimultaneousCalls,
    maxline: maxline,
    mgcpIpRestriction: mgcpIpRestriction,
    phoneConfiguration: phoneConfiguration,
    protocol: protocol,
    userPassword: userPassword
    };

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName + '/phone', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
          displayName: 'Feature Type',
          name: 'featureType',
          type: 'string',
          default: '',
          description: 'The featureType parameter',
          displayOptions,
        },
        {
          displayName: 'Part Of Pool',
          name: 'partOfPool',
          type: 'string',
          default: '',
          description: 'The partOfPool parameter',
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
 * Executes the Put Number Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/number/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const featureType = this.getNodeParameter('featureType', _itemIndex) as string;
	const partOfPool = this.getNodeParameter('partOfPool', _itemIndex) as string;
	const serviceName1 = this.getNodeParameter('serviceName', _itemIndex) as string;
	const serviceType = this.getNodeParameter('serviceType', _itemIndex) as string;

	const body: IDataObject = {
    description: description,
    featureType: featureType,
    partOfPool: partOfPool,
    serviceName: serviceName1,
    serviceType: serviceType
    };

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/number/' + serviceName, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

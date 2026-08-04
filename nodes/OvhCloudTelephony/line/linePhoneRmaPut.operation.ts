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
          displayName: 'ID',
          name: 'id',
          type: 'string',
          default: '',
          required: true,
          description: 'The ID parameter',
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
          displayName: 'Cancellable',
          name: 'cancellable',
          type: 'string',
          default: '',
          description: 'The cancellable parameter',
          displayOptions,
        },
        {
          displayName: 'Creation Datetime',
          name: 'creationDatetime',
          type: 'string',
          default: '',
          description: 'The creationDatetime parameter',
          displayOptions,
        },
        {
          displayName: 'Equipment Reference',
          name: 'equipmentReference',
          type: 'string',
          default: '',
          description: 'The equipmentReference parameter',
          displayOptions,
        },
        {
          displayName: 'ID',
          name: 'id',
          type: 'string',
          default: '',
          description: 'The ID parameter',
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
          displayName: 'Offer Type New',
          name: 'offerTypeNew',
          type: 'string',
          default: '',
          description: 'The offerTypeNew parameter',
          displayOptions,
        },
        {
          displayName: 'Offer Type Old',
          name: 'offerTypeOld',
          type: 'string',
          default: '',
          description: 'The offerTypeOld parameter',
          displayOptions,
        },
        {
          displayName: 'Process',
          name: 'process',
          type: 'string',
          default: '',
          description: 'The process parameter',
          displayOptions,
        },
        {
          displayName: 'Reception Datetime',
          name: 'receptionDatetime',
          type: 'string',
          default: '',
          description: 'The receptionDatetime parameter',
          displayOptions,
        },
        {
          displayName: 'Shipping Contact',
          name: 'shippingContact',
          type: 'string',
          default: '',
          description: 'The shippingContact parameter',
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
        {
          displayName: 'Steps',
          name: 'steps',
          type: 'string',
          default: '',
          description: 'The steps parameter',
          displayOptions,
        },
        {
          displayName: 'Termination Datetime',
          name: 'terminationDatetime',
          type: 'string',
          default: '',
          description: 'The terminationDatetime parameter',
          displayOptions,
        },
        {
          displayName: 'Type',
          name: 'type',
          type: 'string',
          default: '',
          description: 'The type parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Phone Rma Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/phone/rma/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const cancellable = this.getNodeParameter('cancellable', itemIndex) as string;
	const creationDatetime = this.getNodeParameter('creationDatetime', itemIndex) as string;
	const equipmentReference = this.getNodeParameter('equipmentReference', itemIndex) as string;
	const id1 = this.getNodeParameter('id', itemIndex) as string;
	const newMerchandise = this.getNodeParameter('newMerchandise', itemIndex) as string;
	const offerTypeNew = this.getNodeParameter('offerTypeNew', itemIndex) as string;
	const offerTypeOld = this.getNodeParameter('offerTypeOld', itemIndex) as string;
	const process = this.getNodeParameter('process', itemIndex) as string;
	const receptionDatetime = this.getNodeParameter('receptionDatetime', itemIndex) as string;
	const shippingContact = this.getNodeParameter('shippingContact', itemIndex) as string;
	const status = this.getNodeParameter('status', itemIndex) as string;
	const steps = this.getNodeParameter('steps', itemIndex) as string;
	const terminationDatetime = this.getNodeParameter('terminationDatetime', itemIndex) as string;
	const typeParam = this.getNodeParameter('type', itemIndex) as string;

	const body: IDataObject = {
    cancellable: cancellable,
    creationDatetime: creationDatetime,
    equipmentReference: equipmentReference,
    id: id1,
    newMerchandise: newMerchandise,
    offerTypeNew: offerTypeNew,
    offerTypeOld: offerTypeOld,
    process: process,
    receptionDatetime: receptionDatetime,
    shippingContact: shippingContact,
    status: status,
    steps: steps,
    terminationDatetime: terminationDatetime,
    'type': typeParam
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName + '/phone/rma/' + id, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

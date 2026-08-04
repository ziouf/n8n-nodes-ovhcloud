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
          displayName: 'Book Key',
          name: 'bookKey',
          type: 'string',
          default: '',
          required: true,
          description: 'The bookKey parameter',
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
          displayName: 'Group',
          name: 'group',
          type: 'string',
          default: '',
          description: 'The group parameter',
          displayOptions,
        },
        {
          displayName: 'Home Mobile',
          name: 'homeMobile',
          type: 'string',
          default: '',
          description: 'The homeMobile parameter',
          displayOptions,
        },
        {
          displayName: 'Home Phone',
          name: 'homePhone',
          type: 'string',
          default: '',
          description: 'The homePhone parameter',
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
          displayName: 'Name',
          name: 'name',
          type: 'string',
          default: '',
          description: 'The name parameter',
          displayOptions,
        },
        {
          displayName: 'Surname',
          name: 'surname',
          type: 'string',
          default: '',
          description: 'The surname parameter',
          displayOptions,
        },
        {
          displayName: 'Work Mobile',
          name: 'workMobile',
          type: 'string',
          default: '',
          description: 'The workMobile parameter',
          displayOptions,
        },
        {
          displayName: 'Work Phone',
          name: 'workPhone',
          type: 'string',
          default: '',
          description: 'The workPhone parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Line Phone Phonebook Phonebook Contact Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/phone/phonebook/{bookKey}/phonebookContact/{id}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const bookKey = this.getNodeParameter('bookKey', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const group = this.getNodeParameter('group', itemIndex) as string;
	const homeMobile = this.getNodeParameter('homeMobile', itemIndex) as string;
	const homePhone = this.getNodeParameter('homePhone', itemIndex) as string;
	const id1 = this.getNodeParameter('id', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex) as string;
	const surname = this.getNodeParameter('surname', itemIndex) as string;
	const workMobile = this.getNodeParameter('workMobile', itemIndex) as string;
	const workPhone = this.getNodeParameter('workPhone', itemIndex) as string;

	const body: IDataObject = {
    group: group,
    homeMobile: homeMobile,
    homePhone: homePhone,
    id: id1,
    name: name,
    surname: surname,
    workMobile: workMobile,
    workPhone: workPhone
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/line/' + serviceName + '/phone/phonebook/' + bookKey + '/phonebookContact/' + id, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

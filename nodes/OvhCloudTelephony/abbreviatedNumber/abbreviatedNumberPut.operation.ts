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
          displayName: 'Abbreviated Number',
          name: 'abbreviatedNumber',
          type: 'string',
          default: '',
          required: true,
          description: 'The abbreviatedNumber parameter',
          displayOptions,
        },
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
          displayName: 'Abbreviated Number',
          name: 'abbreviatedNumber',
          type: 'string',
          default: '',
          description: 'The abbreviatedNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Destination Number',
          name: 'destinationNumber',
          type: 'string',
          default: '',
          description: 'The destinationNumber parameter',
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
	];
}

/**
 * Executes the Put Abbreviated Number Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/abbreviatedNumber/{abbreviatedNumber}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const abbreviatedNumber = this.getNodeParameter('abbreviatedNumber', itemIndex) as string;
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const abbreviatedNumber1 = this.getNodeParameter('abbreviatedNumber', itemIndex) as string;
	const destinationNumber = this.getNodeParameter('destinationNumber', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex) as string;
	const surname = this.getNodeParameter('surname', itemIndex) as string;

	const body: IDataObject = {
    abbreviatedNumber: abbreviatedNumber1,
    destinationNumber: destinationNumber,
    name: name,
    surname: surname
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/abbreviatedNumber/' + abbreviatedNumber, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

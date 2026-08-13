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
          displayName: 'Abbreviated Number',
          name: 'abbreviatedNumber',
          type: 'string',
          default: '',
          required: true,
          description: 'The abbreviatedNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Destination Number',
          name: 'destinationNumber',
          type: 'string',
          default: '',
          required: true,
          description: 'The destinationNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Name',
          name: 'name',
          type: 'string',
          default: '',
          required: true,
          description: 'The name parameter',
          displayOptions,
        },
        {
          displayName: 'Surname',
          name: 'surname',
          type: 'string',
          default: '',
          required: true,
          description: 'The surname parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Abbreviated Number Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/abbreviatedNumber
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const abbreviatedNumber = this.getNodeParameter('abbreviatedNumber', _itemIndex) as string;
	const destinationNumber = this.getNodeParameter('destinationNumber', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;
	const surname = this.getNodeParameter('surname', _itemIndex) as string;

	const body: IDataObject = {
    abbreviatedNumber: abbreviatedNumber,
    destinationNumber: destinationNumber,
    name: name,
    surname: surname
    };

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/abbreviatedNumber', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
          displayName: 'Date Schedule',
          name: 'dateSchedule',
          type: 'string',
          default: '',
          description: 'The dateSchedule parameter',
          displayOptions,
        },
        {
          displayName: 'Pdf Url',
          name: 'pdfUrl',
          type: 'string',
          default: '',
          required: true,
          description: 'The pdfUrl parameter',
          displayOptions,
        },
        {
          displayName: 'Recipients',
          name: 'recipients',
          type: 'string',
          default: '',
          required: true,
          description: 'The recipients parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Fax Settings Send Fax Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/fax/{serviceName}/settings/sendFax
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const dateSchedule = this.getNodeParameter('dateSchedule', itemIndex) as string;
	const pdfUrl = this.getNodeParameter('pdfUrl', itemIndex) as string;
	const recipients = this.getNodeParameter('recipients', itemIndex) as string;

	const body: IDataObject = {
    dateSchedule: dateSchedule,
    pdfUrl: pdfUrl,
    recipients: recipients
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/fax/' + serviceName + '/settings/sendFax', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
          displayName: 'Call Number',
          name: 'callNumber',
          type: 'string',
          default: '',
          description: 'The callNumber parameter',
          displayOptions,
        },
        {
          displayName: 'Country Code',
          name: 'countryCode',
          type: 'string',
          default: '',
          description: 'The countryCode parameter',
          displayOptions,
        },
        {
          displayName: 'Fax Max Call',
          name: 'faxMaxCall',
          type: 'string',
          default: '',
          description: 'The faxMaxCall parameter',
          displayOptions,
        },
        {
          displayName: 'Fax Quality',
          name: 'faxQuality',
          type: 'string',
          default: '',
          description: 'The faxQuality parameter',
          displayOptions,
        },
        {
          displayName: 'Fax Tag Line',
          name: 'faxTagLine',
          type: 'string',
          default: '',
          description: 'The faxTagLine parameter',
          displayOptions,
        },
        {
          displayName: 'From Email',
          name: 'fromEmail',
          type: 'string',
          default: '',
          description: 'The fromEmail parameter',
          displayOptions,
        },
        {
          displayName: 'From Name',
          name: 'fromName',
          type: 'string',
          default: '',
          description: 'The fromName parameter',
          displayOptions,
        },
        {
          displayName: 'Mail Format',
          name: 'mailFormat',
          type: 'string',
          default: '',
          description: 'The mailFormat parameter',
          displayOptions,
        },
        {
          displayName: 'Receiver',
          name: 'receiver',
          type: 'string',
          default: '',
          description: 'The receiver parameter',
          displayOptions,
        },
        {
          displayName: 'Redirection Email',
          name: 'redirectionEmail',
          type: 'string',
          default: '',
          description: 'The redirectionEmail parameter',
          displayOptions,
        },
        {
          displayName: 'Reject Anonymous',
          name: 'rejectAnonymous',
          type: 'string',
          default: '',
          description: 'The rejectAnonymous parameter',
          displayOptions,
        },
        {
          displayName: 'Sender',
          name: 'sender',
          type: 'string',
          default: '',
          description: 'The sender parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Put Fax Settings Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/fax/{serviceName}/settings
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const callNumber = this.getNodeParameter('callNumber', _itemIndex) as string;
	const countryCode = this.getNodeParameter('countryCode', _itemIndex) as string;
	const faxMaxCall = this.getNodeParameter('faxMaxCall', _itemIndex) as string;
	const faxQuality = this.getNodeParameter('faxQuality', _itemIndex) as string;
	const faxTagLine = this.getNodeParameter('faxTagLine', _itemIndex) as string;
	const fromEmail = this.getNodeParameter('fromEmail', _itemIndex) as string;
	const fromName = this.getNodeParameter('fromName', _itemIndex) as string;
	const mailFormat = this.getNodeParameter('mailFormat', _itemIndex) as string;
	const receiver = this.getNodeParameter('receiver', _itemIndex) as string;
	const redirectionEmail = this.getNodeParameter('redirectionEmail', _itemIndex) as string;
	const rejectAnonymous = this.getNodeParameter('rejectAnonymous', _itemIndex) as string;
	const sender = this.getNodeParameter('sender', _itemIndex) as string;

	const body: IDataObject = {
    callNumber: callNumber,
    countryCode: countryCode,
    faxMaxCall: faxMaxCall,
    faxQuality: faxQuality,
    faxTagLine: faxTagLine,
    fromEmail: fromEmail,
    fromName: fromName,
    mailFormat: mailFormat,
    receiver: receiver,
    redirectionEmail: redirectionEmail,
    rejectAnonymous: rejectAnonymous,
    sender: sender
    };

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + billingAccount + '/fax/' + serviceName + '/settings', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

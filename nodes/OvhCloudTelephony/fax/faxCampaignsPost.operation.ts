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
          displayName: 'Document ID',
          name: 'documentId',
          type: 'string',
          default: '',
          required: true,
          description: 'The documentId parameter',
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
          displayName: 'Name',
          name: 'name',
          type: 'string',
          default: '',
          required: true,
          description: 'The name parameter',
          displayOptions,
        },
        {
          displayName: 'Recipients Doc ID',
          name: 'recipientsDocId',
          type: 'string',
          default: '',
          description: 'The recipientsDocId parameter',
          displayOptions,
        },
        {
          displayName: 'Recipients List',
          name: 'recipientsList',
          type: 'string',
          default: '',
          description: 'The recipientsList parameter',
          displayOptions,
        },
        {
          displayName: 'Recipients Type',
          name: 'recipientsType',
          type: 'string',
          default: '',
          required: true,
          description: 'The recipientsType parameter',
          displayOptions,
        },
        {
          displayName: 'Send Date',
          name: 'sendDate',
          type: 'string',
          default: '',
          description: 'The sendDate parameter',
          displayOptions,
        },
        {
          displayName: 'Send Type',
          name: 'sendType',
          type: 'string',
          default: '',
          required: true,
          description: 'The sendType parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Fax Campaigns Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/fax/{serviceName}/campaigns
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const documentId = this.getNodeParameter('documentId', itemIndex) as string;
	const faxQuality = this.getNodeParameter('faxQuality', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex) as string;
	const recipientsDocId = this.getNodeParameter('recipientsDocId', itemIndex) as string;
	const recipientsList = this.getNodeParameter('recipientsList', itemIndex) as string;
	const recipientsType = this.getNodeParameter('recipientsType', itemIndex) as string;
	const sendDate = this.getNodeParameter('sendDate', itemIndex) as string;
	const sendType = this.getNodeParameter('sendType', itemIndex) as string;

	const body: IDataObject = {
    documentId: documentId,
    faxQuality: faxQuality,
    name: name,
    recipientsDocId: recipientsDocId,
    recipientsList: recipientsList,
    recipientsType: recipientsType,
    sendDate: sendDate,
    sendType: sendType
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/fax/' + serviceName + '/campaigns', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

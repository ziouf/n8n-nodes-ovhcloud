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
          displayName: 'Document ID',
          name: 'documentId',
          type: 'string',
          default: '',
          description: 'The documentId parameter',
          displayOptions,
        },
        {
          displayName: 'Type',
          name: 'type',
          type: 'string',
          default: '',
          required: true,
          description: 'The type parameter',
          displayOptions,
        },
        {
          displayName: 'Url',
          name: 'url',
          type: 'string',
          default: '',
          description: 'The URL parameter',
          displayOptions,
        },
	];
}

/**
 * Executes the Post Line Tones Tone Upload Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/line/{serviceName}/tones/toneUpload
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const documentId = this.getNodeParameter('documentId', _itemIndex) as string;
	const typeParam = this.getNodeParameter('type', _itemIndex) as string;
	const url = this.getNodeParameter('url', _itemIndex) as string;

	const body: IDataObject = {
    documentId: documentId,
    'type': typeParam,
    url: url
    };

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + billingAccount + '/line/' + serviceName + '/tones/toneUpload', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Dir',
			name: 'dir',
			type: 'string',
			default: '',
			required: true,
			description: 'Greeting voicemail directory',
			displayOptions,
		},
		{
			displayName: 'Document ID',
			name: 'documentId',
			type: 'string',
			default: '',
			required: true,
			description: 'Get the /me/document uuid generated',
			displayOptions,
		},
	];
}

/**
 * Executes the VoicemailGreetingsPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/voicemail/{serviceName}/greetings
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dir = this.getNodeParameter('dir', _itemIndex) as string;
	const documentId = this.getNodeParameter('documentId', _itemIndex) as string;

	const body: IDataObject = {
		dir: dir,
		documentId: documentId,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/voicemail' + '/' + encodeURIComponent(serviceName) + '/greetings', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

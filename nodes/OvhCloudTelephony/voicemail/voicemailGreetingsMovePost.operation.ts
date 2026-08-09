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
			description: 'ID of the object',
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
	];
}

/**
 * Executes the VoicemailGreetingsMovePost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/voicemail/{serviceName}/greetings/{id}/move
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const dir = this.getNodeParameter('dir', _itemIndex) as string;

	const body: IDataObject = {
		dir: dir,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/voicemail' + '/' + encodeURIComponent(serviceName) + '/greetings' + '/' + encodeURIComponent(id) + '/move', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

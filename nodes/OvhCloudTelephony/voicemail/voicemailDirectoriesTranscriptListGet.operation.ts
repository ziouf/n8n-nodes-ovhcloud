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
			displayName: 'Format',
			name: 'format',
			type: 'string',
			default: '',
			required: true,
			description: 'Format of the file to retrieve',
			displayOptions,
		},
	];
}

/**
 * Executes the VoicemailDirectoriesTranscript List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/voicemail/{serviceName}/directories/{id}/transcript
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const format = this.getNodeParameter('format', _itemIndex) as string;

	const qs: IDataObject = {
		format: format,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/voicemail' + '/' + encodeURIComponent(serviceName) + '/directories' + '/' + encodeURIComponent(id) + '/transcript', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

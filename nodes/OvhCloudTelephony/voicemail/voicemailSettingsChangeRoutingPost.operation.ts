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
			displayName: 'Routing',
			name: 'routing',
			type: 'string',
			default: '',
			required: true,
			description: 'Activate or Desactivate voicemail on the line',
			displayOptions,
		},
	];
}

/**
 * Executes the VoicemailSettingsChangeRoutingPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/voicemail/{serviceName}/settings/changeRouting
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const routing = this.getNodeParameter('routing', _itemIndex) as string;

	const body: IDataObject = {
		routing: routing,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/voicemail' + '/' + encodeURIComponent(serviceName) + '/settings' + '/changeRouting', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
			displayName: 'Incoming Screen List',
			name: 'incomingScreenList',
			type: 'string',
			default: '',
			description: 'The incomingScreenList parameter',
			displayOptions,
		},
		{
			displayName: 'Outgoing Screen List',
			name: 'outgoingScreenList',
			type: 'string',
			default: '',
			description: 'The outgoingScreenList parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the ScreenPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/screen/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const incomingScreenList = this.getNodeParameter('incomingScreenList', _itemIndex) as string;
	const outgoingScreenList = this.getNodeParameter('outgoingScreenList', _itemIndex) as string;

	const body: IDataObject = {
		incomingScreenList: incomingScreenList,
		outgoingScreenList: outgoingScreenList,
	};

	const client = getClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/screen' + '/' + encodeURIComponent(serviceName), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

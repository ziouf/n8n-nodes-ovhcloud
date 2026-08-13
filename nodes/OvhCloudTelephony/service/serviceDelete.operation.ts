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
			displayName: 'Details',
			name: 'details',
			type: 'string',
			default: '',
			description: 'Termination reason details',
			displayOptions,
		},
		{
			displayName: 'Reason',
			name: 'reason',
			type: 'string',
			default: '',
			required: true,
			description: 'Termination reason',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const details = this.getNodeParameter('details', _itemIndex) as string;
	const reason = this.getNodeParameter('reason', _itemIndex) as string;

	const qs: IDataObject = {
		details: details,
		reason: reason,
	};

	const client = getClient(this);
	const data = (await client.httpDelete('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName), qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

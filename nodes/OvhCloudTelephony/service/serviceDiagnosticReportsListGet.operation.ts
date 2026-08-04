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
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Day Interval',
			name: 'dayInterval',
			type: 'string',
			default: '',
			required: true,
			description: 'The date index interval',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceDiagnosticReports List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/diagnosticReports
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const dayInterval = this.getNodeParameter('dayInterval', itemIndex) as string;

	const qs: IDataObject = {
		dayInterval: dayInterval,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/diagnosticReports', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

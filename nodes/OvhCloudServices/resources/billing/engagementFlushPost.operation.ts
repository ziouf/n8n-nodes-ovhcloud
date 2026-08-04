import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Auto Pay With Preferred Payment Method',
			name: 'autoPayWithPreferredPaymentMethod',
			type: 'boolean',
			default: false,
			description: 'Whether the order, if needed, will be automatically paid with preferred payment method',
			displayOptions,
		},
		{
			displayName: 'Dry Run',
			name: 'dryRun',
			type: 'boolean',
			default: false,
			description: 'Whether to register the order or only return it without registering it (useful to compute prices)',
			displayOptions,
		},
		{
			displayName: 'Terminate Subscription',
			name: 'terminateSubscription',
			type: 'boolean',
			default: false,
			description: 'Whether to automatically start the service termination workflow once the order is paid',
			displayOptions,
		}

	];
}

/**
 * Executes the Post EngagementFlush operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/billing/engagement/flush
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const autoPayWithPreferredPaymentMethod = this.getNodeParameter('autoPayWithPreferredPaymentMethod', itemIndex, false) as boolean;
	const dryRun = this.getNodeParameter('dryRun', itemIndex, false) as boolean;
	const terminateSubscription = this.getNodeParameter('terminateSubscription', itemIndex, false) as boolean;
	const body: IDataObject = {};
	if (autoPayWithPreferredPaymentMethod) body.autoPayWithPreferredPaymentMethod = true;
	if (dryRun) body.dryRun = true;
	if (terminateSubscription) body.terminateSubscription = true;
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/billing/engagement/flush`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

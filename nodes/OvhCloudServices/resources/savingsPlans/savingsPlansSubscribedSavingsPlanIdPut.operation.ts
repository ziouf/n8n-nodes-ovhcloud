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
			displayName: 'Savings Plan ID',
			name: 'savingsPlanId',
			type: 'string',
			default: '',
			required: true,
			description: 'The savingsPlanId identifier',
			displayOptions,
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			required: true,
			description: 'Custom display name, used in invoices',
			displayOptions,
		}

	];
}

/**
 * Executes the Put SubscribedSavingsPlanUpdate operation.
 *
 * HTTP method: PUT
 * Endpoint: /services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const savingsPlanId = this.getNodeParameter('savingsPlanId', itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', itemIndex) as string;
	const body: IDataObject = { displayName };
	const client = new ApiClient(this);
	const data = (await client.httpPut(`/services/${encodeURIComponent(serviceName)}/savingsPlans/subscribed/${encodeURIComponent(savingsPlanId)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

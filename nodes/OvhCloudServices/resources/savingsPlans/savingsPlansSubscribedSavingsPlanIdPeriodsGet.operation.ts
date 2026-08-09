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
		}

	];
}

/**
 * Executes the Get SavingsPlanPeriods operation.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}/periods
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const savingsPlanId = this.getNodeParameter('savingsPlanId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/services/${encodeURIComponent(serviceName)}/savingsPlans/subscribed/${encodeURIComponent(savingsPlanId)}/periods`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Savings Plan ID',
			name: 'savingsPlanId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Period End Action',
			name: 'periodEndAction',
			type: 'options',
			default: 'TERMINATE',
			required: true,
			options: [
				{
					name: 'Reactivate',
					value: 'REACTIVATE'
				},
				{
					name: 'Terminate',
					value: 'TERMINATE'
				}
			],
			description: 'Action performed at the end of the period',
			displayOptions,
		}

	];
}

/**
 * Executes the Post SavingsPlanChangePeriodEndAction operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}/changePeriodEndAction
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const savingsPlanId = this.getNodeParameter('savingsPlanId', _itemIndex) as string;
	const periodEndAction = this.getNodeParameter('periodEndAction', _itemIndex) as string;
	const body: IDataObject = { periodEndAction };
	const client = getClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/savingsPlans/subscribed/${encodeURIComponent(savingsPlanId)}/changePeriodEndAction`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

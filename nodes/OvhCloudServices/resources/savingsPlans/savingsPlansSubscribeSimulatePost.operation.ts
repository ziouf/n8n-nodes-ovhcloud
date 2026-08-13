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
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			required: true,
			description: 'Custom display name, used in invoices',
			displayOptions,
		},
		{
			displayName: 'Offer ID',
			name: 'offerId',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the Savings Plan commercial offer',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'number',
			default: 0,
			required: true,
			description: 'Size of the Savings Plan',
			displayOptions,
		},
		{
			displayName: 'Start Date',
			name: 'startDate',
			type: 'string',
			default: '',
			placeholder: 'e.g. 2026-09-01',
			description: 'Start date of the savings plan',
			displayOptions,
		}

	];
}

/**
 * Executes the Post SavingsPlanSubscribeSimulate operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/savingsPlans/subscribe/simulate
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex) as string;
	const offerId = this.getNodeParameter('offerId', _itemIndex) as string;
	const size = this.getNodeParameter('size', _itemIndex) as number;
	const startDate = (this.getNodeParameter('startDate', _itemIndex, '') as string) || '';
	const body: IDataObject = { displayName, offerId, size };
	if (startDate) body.startDate = startDate;
	const client = getClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/savingsPlans/subscribe/simulate`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

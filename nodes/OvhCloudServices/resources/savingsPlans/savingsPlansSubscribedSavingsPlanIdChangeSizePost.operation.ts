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
			displayName: 'Size',
			name: 'size',
			type: 'number',
			default: 0,
			required: true,
			description: 'Size of the Savings Plan',
			displayOptions,
		}

	];
}

/**
 * Executes the Post SavingsPlanChangeSize operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}/changeSize
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const savingsPlanId = this.getNodeParameter('savingsPlanId', itemIndex) as string;
	const size = this.getNodeParameter('size', itemIndex) as number;
	const body: IDataObject = { size };
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/savingsPlans/subscribed/${encodeURIComponent(savingsPlanId)}/changeSize`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

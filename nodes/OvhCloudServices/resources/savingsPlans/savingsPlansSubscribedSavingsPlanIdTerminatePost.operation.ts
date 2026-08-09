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
			displayName: 'Termination Date',
			name: 'terminationDate',
			type: 'string',
			default: '',
			placeholder: 'e.g. 2026-12-31',
			description: 'Date of the Savings Plan\'s termination',
			displayOptions,
		}

	];
}

/**
 * Executes the Post SavingsPlanTerminate operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/savingsPlans/subscribed/{savingsPlanId}/terminate
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const savingsPlanId = this.getNodeParameter('savingsPlanId', _itemIndex) as string;
	const terminationDate = (this.getNodeParameter('terminationDate', _itemIndex, '') as string) || '';
	const body: IDataObject = {};
	if (terminationDate) body.terminationDate = terminationDate;
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/savingsPlans/subscribed/${encodeURIComponent(savingsPlanId)}/terminate`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

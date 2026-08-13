import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will terminate the savings Plans service. This action is irreversible.', displayOptions),
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
	const client = getClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/savingsPlans/subscribed/${encodeURIComponent(savingsPlanId)}/terminate`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

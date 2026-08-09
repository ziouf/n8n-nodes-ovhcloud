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
		}

	];
}

/**
 * Executes the Get SavingsPlanContracts operation.
 *
 * HTTP method: GET
 * Endpoint: /services/{serviceName}/savingsPlans/contracts
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/services/${encodeURIComponent(serviceName)}/savingsPlans/contracts`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

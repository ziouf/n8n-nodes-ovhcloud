import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get available contracts for account creation.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/contracts
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH company identifier',
			displayOptions,
		},
		{
			displayName: 'Subsidiary',
			name: 'subsidiary',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH subsidiary identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Contracts operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const company = this.getNodeParameter('company', 0) as string;
	const subsidiary = this.getNodeParameter('subsidiary', 0) as string;
	const data = (await client.httpGet('/newAccount/contracts', {
		qs: { company, subsidiary },
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

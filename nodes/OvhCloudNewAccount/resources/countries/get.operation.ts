import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get available countries for account creation.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/countries
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OVH Company',
			name: 'ovhCompany',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH company identifier',
			displayOptions,
		},
		{
			displayName: 'OVH Subsidiary',
			name: 'ovhSubsidiary',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH subsidiary identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Countries operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ovhCompany = this.getNodeParameter('ovhCompany', 0) as string;
	const ovhSubsidiary = this.getNodeParameter('ovhSubsidiary', 0) as string;
	const data = (await client.httpGet('/newAccount/countries', {
		qs: { ovhCompany, ovhSubsidiary },
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get account creation rules.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/creationRules
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			required: true,
			description: 'Country code (e.g., FR, US, GB)',
			displayOptions,
		},
		{
			displayName: 'Legal Form',
			name: 'legalform',
			type: 'string',
			default: '',
			required: true,
			description: 'Legal form identifier',
			displayOptions,
		},
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
 * Executes the Get Creation Rules operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const country = this.getNodeParameter('country', 0) as string;
	const legalform = this.getNodeParameter('legalform', 0) as string;
	const ovhCompany = this.getNodeParameter('ovhCompany', 0) as string;
	const ovhSubsidiary = this.getNodeParameter('ovhSubsidiary', 0) as string;
	const data = (await client.httpGet('/newAccount/creationRules', {
		qs: { country, legalform, ovhCompany, ovhSubsidiary },
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

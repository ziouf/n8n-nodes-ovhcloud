import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OVH Company',
			name: 'ovhCompany',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH company (e.g. ovh, kimsufi, soyoustart)',
			displayOptions,
		},
		{
			displayName: 'OVH Subsidiary',
			name: 'ovhSubsidiary',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH subsidiary (e.g. FR, GB, US)',
			displayOptions,
		},
	];
}

/**
 * Retrieve all available countries for an OVH company and subsidiary.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/countries
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const ovhCompany = this.getNodeParameter('ovhCompany', _itemIndex ?? 0) as string;
	const ovhSubsidiary = this.getNodeParameter('ovhSubsidiary', _itemIndex ?? 0) as string;

	const data = (await client.httpGet('/newAccount/countries', {
		ovhCompany,
		ovhSubsidiary,
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

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
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH company (e.g. ovh, kimsufi, soyoustart)',
			displayOptions,
		},
		{
			displayName: 'Subsidiary',
			name: 'subsidiary',
			type: 'string',
			default: '',
			required: true,
			description: 'OVH subsidiary (e.g. FR, GB, US)',
			displayOptions,
		},
	];
}

/**
 * Retrieve contracts governing identifier creation.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/contracts
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const company = this.getNodeParameter('company', _itemIndex ?? 0) as string;
	const subsidiary = this.getNodeParameter('subsidiary', _itemIndex ?? 0) as string;

	const data = (await client.httpGet('/newAccount/contracts', {
		company,
		subsidiary,
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

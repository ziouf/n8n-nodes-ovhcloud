import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Domain Name',
			name: 'domain',
			type: 'string',
			default: '',
			placeholder: 'example.com',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domain = this.getNodeParameter('domain', 0) as string;
	if (!domain) throw new Error('Domain name is required');

	const data = (await client.httpGet('/domain/data/claimNotice', { domain })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

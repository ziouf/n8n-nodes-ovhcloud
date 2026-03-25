import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getEmailDomains(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const results = (await client.httpGet('/email/domain')) as string[];
	return { results: results.map((domain: string) => ({ name: domain, value: domain })) };
}

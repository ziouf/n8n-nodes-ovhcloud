import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getVpsServices(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/vps`)) as string[];
	return { results: data.map((service: string) => ({ name: service, value: service })) };
}

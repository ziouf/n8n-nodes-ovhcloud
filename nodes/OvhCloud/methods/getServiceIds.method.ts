// import type { IDataObject } from 'n8n-workflow';
import { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getServiceIds(this: ILoadOptionsFunctions): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const type = this.getNodeParameter('svcType', 0, { extractValue: true }) as string;

	const serviceIds = (await client.httpGet(`/services`, { routes: type })) as string[];
	
	return {
		results: serviceIds.map((id: string) => ({ name: id, value: id })),
	};
}

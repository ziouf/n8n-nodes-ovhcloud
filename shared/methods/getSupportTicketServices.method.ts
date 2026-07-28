/**
 * @brief Dynamic list search for Support Tickets
 *
 * Retrieves available support ticket IDs from the OVH API for dynamic dropdown selection.
 * Used by n8n to populate support ticket lists when configuring support ticket-related operations.
 *
 * HTTP method: GET
 * Endpoint: /supportTicket
 *
 * @param this - n8n ILoadOptionsFunctions context
 * @returns INodeListSearchResult containing ticket IDs with name-value pairs for n8n dropdowns
 */
import type { ILoadOptionsFunctions, INodeListSearchResult } from 'n8n-workflow';
import { ApiClient } from '../transport/ApiClient';

export async function getSupportTicketServices(
	this: ILoadOptionsFunctions,
): Promise<INodeListSearchResult> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/supportTicket')) as number[];
	return { results: data.map((id: number) => ({ name: String(id), value: String(id) })) };
}

/**
 * ⚠️ IRREVERSIBLE OPERATION: Deleting an attached domain will detach it from the hosting service.
 * The domain will no longer be associated with this web hosting and any DNS records, email aliases,
 * or other configurations tied to that domain may stop working immediately.
 */

import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Delete (detach) an attached domain from a web hosting service. */
export function description(
	displayOptions: IDisplayOptions,
): import('n8n-workflow').INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The hosting web service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHostingWebServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'myservice.ovh' },
			],
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The attached domain name to detach/delete from this hosting service',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const domain = this.getNodeParameter('domain', _itemIndex ?? 0) as string;

	await client.httpDelete(`/hosting/web/${serviceName}/attachedDomain/${domain}`);
	return [{ json: {}, pairedItem: { item: 0 } }];
}

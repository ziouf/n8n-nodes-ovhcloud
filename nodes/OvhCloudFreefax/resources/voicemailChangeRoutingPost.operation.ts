import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Freefax Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Freefax line account service name (e.g. fr12345-ovh)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getFreefaxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'fr12345-ovh',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Routing',
			name: 'routing',
			type: 'options',
			default: 'voicemail',
			options: [
				{ name: 'Fax', value: 'fax' },
				{ name: 'Voicemail', value: 'voicemail' },
			],
			required: true,
			description: 'Voicemail routing status',
			displayOptions,
		},
	];
}

/**
 * Enable or disable voicemail routing for a specific Freefax line account.
 *
 * HTTP method: POST
 * Endpoint: /freefax/{serviceName}/voicemail/changeRouting
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const routing = this.getNodeParameter('routing', _itemIndex ?? 0) as string;

	await client.httpPost(`/freefax/${encodeURIComponent(serviceName)}/voicemail/changeRouting`, {
		routing,
	});

	return this.helpers.returnJsonArray([{ serviceName, routing, success: true }]);
}

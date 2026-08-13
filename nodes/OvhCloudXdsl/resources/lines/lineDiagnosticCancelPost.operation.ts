import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Xdsl Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The name of the xDSL service (e.g. xdsl-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getXdslServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'xdsl-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Line Number',
			name: 'number',
			type: 'string',
			default: '',
			required: true,
			description: 'Number of the line',
			displayOptions,
		},
	];
}

/**
 * Cancel a current line diagnostic of an xDSL service if possible.
 *
 * HTTP method: POST
 * Endpoint: /xdsl/{serviceName}/lines/{number}/diagnostic/cancel
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const number = this.getNodeParameter('number', _itemIndex ?? 0) as string;

	await client.httpPost(`/xdsl/${encodeURIComponent(serviceName)}/lines/${encodeURIComponent(number)}/diagnostic/cancel`);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}

import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Stack Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your Stack MIS service (e.g. mis-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getStackServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'mis-12345',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Get service information of a specific Stack MIS service.
 *
 * HTTP method: GET
 * Endpoint: /stack/mis/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const data = (await client.httpGet(
		`/stack/mis/${encodeURIComponent(serviceName)}/serviceInfos`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

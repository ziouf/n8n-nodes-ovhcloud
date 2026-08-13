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
			displayName: 'Office Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Office tenant service name (e.g. csp2-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getSaasCsp2Services', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'csp2-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'The identifier of the Office task',
			displayOptions,
		},
	];
}

/**
 * Get properties of a specific task of an Office tenant.
 *
 * HTTP method: GET
 * Endpoint: /saas/csp2/{serviceName}/task/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;
	const data = (await client.httpGet(
		`/saas/csp2/${encodeURIComponent(serviceName)}/task/${encodeURIComponent(id)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

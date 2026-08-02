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
			displayName: 'Subscription ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'The identifier of the Office subscription',
			displayOptions,
		},
	];
}

/**
 * Delete an Office subscription.
 *
 * HTTP method: DELETE
 * Endpoint: /saas/csp2/{serviceName}/subscription/{id}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', 0) as number;
	const data = (await client.httpDelete(
		`/saas/csp2/${encodeURIComponent(serviceName)}/subscription/${encodeURIComponent(id)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

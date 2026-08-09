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
			description: 'The identifier of the Office subscription to add the add-on to',
			displayOptions,
		},
		{
			displayName: 'License ID',
			name: 'licenseId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The identifier of the add-on license type to order',
			displayOptions,
		},
		{
			displayName: 'Quantity',
			name: 'quantity',
			type: 'number',
			default: 1,
			required: true,
			description: 'The number of licenses for the new add-on subscription',
			displayOptions,
		},
	];
}

/**
 * Create a new add-on subscription for an existing Office subscription.
 *
 * HTTP method: POST
 * Endpoint: /saas/csp2/{serviceName}/subscription/{id}/orderAddon
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;
	const licenseId = this.getNodeParameter('licenseId', _itemIndex ?? 0) as number;
	const quantity = this.getNodeParameter('quantity', _itemIndex ?? 0) as number;

	const body: IDataObject = { licenseId, quantity };
	const data = (await client.httpPost(
		`/saas/csp2/${encodeURIComponent(serviceName)}/subscription/${encodeURIComponent(id)}/orderAddon`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

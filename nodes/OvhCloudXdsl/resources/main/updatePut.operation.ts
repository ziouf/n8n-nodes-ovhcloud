import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the xDSL service',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Name of the xDSL service',
			displayOptions,
		},
	];
}

/**
 * Modify the properties of a specific xDSL service.
 *
 * HTTP method: PUT
 * Endpoint: /xdsl/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const description = (this.getNodeParameter('description', _itemIndex ?? 0, '') as string) || '';
	const name = (this.getNodeParameter('name', _itemIndex ?? 0, '') as string) || '';

	const body: IDataObject = {};
	if (description) body.description = description;
	if (name) body.name = name;

	await client.httpPut(`/xdsl/${encodeURIComponent(serviceName)}`, body);

	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}

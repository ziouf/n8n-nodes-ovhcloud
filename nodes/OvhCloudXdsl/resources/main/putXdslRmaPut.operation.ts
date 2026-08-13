import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
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
			description: 'The xdsl service name (e.g. xdsl-12345)',
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
			displayName: 'Rma ID',
			name: 'rmaId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Rma ID parameter',
			displayOptions,
		},
	];
}

/**
 * Update an RMA
 *
 * HTTP method: PUT
 * Endpoint: /xdsl/{serviceName}/rma/{rmaId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const rmaId = this.getNodeParameter('rmaId', _itemIndex ?? 0) as string;

	const data = (await client.httpPut(`/xdsl/${encodeURIComponent(serviceName)}/rma/${rmaId}`, {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

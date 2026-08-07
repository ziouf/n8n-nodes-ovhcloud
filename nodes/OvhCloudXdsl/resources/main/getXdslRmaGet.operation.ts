import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
 * Get an RMA
 *
 * HTTP method: GET
 * Endpoint: /xdsl/{serviceName}/rma/{rmaId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const rmaId = this.getNodeParameter('rmaId', 0) as string;

	const data = (await client.httpGet(`/xdsl/${encodeURIComponent(serviceName)}/rma/${rmaId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

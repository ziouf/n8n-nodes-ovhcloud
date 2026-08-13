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
			displayName: 'Incident ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the global incident',
			displayOptions,
		},
	];
}

/**
 * Get the properties of a specific global xDSL incident.
 *
 * HTTP method: GET
 * Endpoint: /xdsl/incidents/{id}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex ?? 0) as number;

	const data = (await client.httpGet(`/xdsl/incidents/${encodeURIComponent(id)}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

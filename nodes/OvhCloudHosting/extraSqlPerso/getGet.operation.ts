import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Identifier of the (additional) SQL slot',
			displayOptions,
		},
	];
}

/**
 * Get an extra SQL perso option by id
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/extraSqlPerso/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const id = this.getNodeParameter('id', _itemIndex as number) as number;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/extraSqlPerso/${encodeURIComponent(String(id))}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

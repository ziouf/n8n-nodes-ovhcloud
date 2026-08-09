import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
 * Terminate an extra SQL perso option
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/extraSqlPerso/{id}/terminate
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const id = this.getNodeParameter('id', _itemIndex as number) as number;
	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/extraSqlPerso/${encodeURIComponent(String(id))}/terminate`,
		{} as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

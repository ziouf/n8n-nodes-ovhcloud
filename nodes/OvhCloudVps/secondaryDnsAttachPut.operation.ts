import { SERVICE_NAME } from './serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Secondary DNS Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain for secondary DNS',
			displayOptions,
		},
	];
}

/**
 * Attach secondary DNS to VPS
 *
 * HTTP method: PUT
 * Endpoint: /vps/{serviceName}/secondaryDns/{domain}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, '', {
		extractValue: true,
	}) as string;
	const domain = this.getNodeParameter('domain', _itemIndex) as string;
	const data = (await client.httpPut(
		`/vps/${serviceName}/secondaryDns/${domain}`,
		{},
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

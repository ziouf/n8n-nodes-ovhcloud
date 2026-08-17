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
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The Domain parameter',
			displayOptions,
		},
	];
}

/**
 * Delete a secondary DNS domain
 *
 * HTTP method: DELETE
 * Endpoint: /vps/{serviceName}/secondaryDnsDomains/{domain}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const domain = this.getNodeParameter('domain', itemIndex ?? 0) as string;

	const data = (await client.httpDelete(
		`/vps/${serviceName}/secondaryDnsDomains/${domain}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

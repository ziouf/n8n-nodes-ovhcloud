import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'VPS Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The VPS service name (e.g. vps1234567.ovh.net)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVpsServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'vps1234567.ovh.net',
				},
			],
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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const data = (await client.httpPut(
		`/vps/${serviceName}/secondaryDns/${domain}`,
		{},
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

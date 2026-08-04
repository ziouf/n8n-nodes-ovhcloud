import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Zone Name',
			name: 'zoneName',
			type: 'string',
			default: '',
			required: true,
			description: 'The zoneName identifier',
			displayOptions,
		},
		{
			displayName: 'Dns Records',
			name: 'DnsRecords',
			type: 'json',
			default: '',
			description: 'Records that will be set after reset',
			displayOptions,
		},
		{
			displayName: 'Minimized',
			name: 'minimized',
			type: 'boolean',
			default: false,
			description: 'Whether create only mandatory records',
			displayOptions,
		},
	];
}

/**
 * Executes the Reset a DNS zone operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/zone/{zoneName}/reset
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const body: IDataObject = {};
		const DnsRecords = this.getNodeParameter('DnsRecords', itemIndex, '') as string;
		if (DnsRecords !== '') body['DnsRecords'] = JSON.parse(DnsRecords);
		const minimized = this.getNodeParameter('minimized', itemIndex, false) as boolean;
		if (minimized !== undefined) body['minimized'] = minimized;

	const data = (await client.httpPost(`/domain/zone/${encodeURIComponent(zoneName)}/reset`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

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
			displayName: 'Email',
			name: 'email',
			type: 'string',
			placeholder: 'name@email.com',
			default: '',
			description: 'Email address of the DNS Administrator',
			displayOptions,
		},
		{
			displayName: 'Expire',
			name: 'expire',
			type: 'number',
			default: 0,
			description: 'When a zone transfer fails, a countdown clock begins. When the number of seconds set in the expire field elapses, the nameserver stops answering for that zone file.',
			displayOptions,
		},
		{
			displayName: 'Nx Domain Ttl',
			name: 'nxDomainTtl',
			type: 'number',
			default: 0,
			description: 'Non-Existent Domain TTL, if the name server returns a negative response, the remote server should wait the number of seconds set in the nxDomainTtl field before trying again',
			displayOptions,
		},
		{
			displayName: 'Refresh',
			name: 'refresh',
			type: 'number',
			default: 0,
			description: 'The refresh value determines the interval in seconds between successful zone transfers of the entire zone file from a nameserver to another',
			displayOptions,
		},
		{
			displayName: 'Serial',
			name: 'serial',
			type: 'number',
			default: 0,
			description: 'The serial number is used to indicate which copy of the zone file is the most current. When editing zone files, you must increment the serial number.',
			displayOptions,
		},
		{
			displayName: 'Server',
			name: 'server',
			type: 'string',
			default: '',
			description: 'Primary authoritative server',
			displayOptions,
		},
		{
			displayName: 'TTL',
			name: 'ttl',
			type: 'number',
			default: 0,
			description: 'Time To Live in seconds',
			displayOptions,
		},
	];
}

/**
 * Executes the Update zone SOA operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/zone/{zoneName}/soa
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const zoneName = this.getNodeParameter('zoneName', itemIndex) as string;

	const body: IDataObject = {};
		const email = this.getNodeParameter('email', itemIndex, '') as string;
		if (email !== '') body['email'] = email;
		const expire = this.getNodeParameter('expire', itemIndex, 0) as number;
		if (expire !== 0) body['expire'] = expire;
		const nxDomainTtl = this.getNodeParameter('nxDomainTtl', itemIndex, 0) as number;
		if (nxDomainTtl !== 0) body['nxDomainTtl'] = nxDomainTtl;
		const refresh = this.getNodeParameter('refresh', itemIndex, 0) as number;
		if (refresh !== 0) body['refresh'] = refresh;
		const serial = this.getNodeParameter('serial', itemIndex, 0) as number;
		if (serial !== 0) body['serial'] = serial;
		const server = this.getNodeParameter('server', itemIndex, '') as string;
		if (server !== '') body['server'] = server;
		const ttl = this.getNodeParameter('ttl', itemIndex, 0) as number;
		if (ttl !== 0) body['ttl'] = ttl;

	const data = (await client.httpPut(`/domain/zone/${encodeURIComponent(zoneName)}/soa`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the listener',
			displayOptions,
		},
		{
			displayName: 'Protocol',
			name: 'protocol',
			type: 'string',
			default: '',
			required: true,
			description: 'Protocol (TCP, HTTP, HTTPS, TERMINATED_HTTPS)',
			displayOptions,
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 0,
			required: true,
			description: 'Port to listen on',
			displayOptions,
		},
		{
			displayName: 'Load Balancer ID',
			name: 'loadbalancerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The load balancer UUID',
			displayOptions,
		},
		{
			displayName: 'Default Pool ID',
			name: 'defaultPoolId',
			type: 'string',
			default: '',

			description: 'Default pool UUID',
			displayOptions,
		},
		{
			displayName: 'Certificate ID',
			name: 'certificateId',
			type: 'string',
			default: '',

			description: 'Certificate secret ID for HTTPS',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',

			description: 'Description of the listener',
			displayOptions,
		},
		{
			displayName: 'Client Timeout (Ms)',
			name: 'timeoutClientData',
			type: 'number',
			default: 0,

			description: 'Client data timeout in milliseconds',
			displayOptions,
		},
		{
			displayName: 'Member Timeout (Ms)',
			name: 'timeoutMemberData',
			type: 'number',
			default: 0,

			description: 'Member data timeout in milliseconds',
			displayOptions,
		},
		{
			displayName: 'TLS Versions',
			name: 'tlsVersions',
			type: 'string',
			default: '',

			description: 'TLS versions (e.g. TLSv1.2,TLSv1.3)',
			displayOptions,
		},
		{
			displayName: 'Allowed CIDRs',
			name: 'allowedCidrs',
			type: 'string',
			default: '',

			description: 'Allowed CIDRs (comma-separated)',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Listener Create Post operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/listener
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const nameVal = (this.getNodeParameter('name', 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const protocolVal = (this.getNodeParameter('protocol', 0) || '') as string;
	if (protocolVal !== '') {
		body.protocol = protocolVal;
	}
	const portNum = this.getNodeParameter('port', 0) as number;
	if (portNum !== undefined && portNum !== 0) {
		body.port = portNum;
	}
	const loadbalancerIdVal = (this.getNodeParameter('loadbalancerId', 0) || '') as string;
	if (loadbalancerIdVal !== '') {
		body.loadbalancerId = loadbalancerIdVal;
	}
	const defaultPoolIdVal = (this.getNodeParameter('defaultPoolId', 0) || '') as string;
	if (defaultPoolIdVal !== '') {
		body.defaultPoolId = defaultPoolIdVal;
	}
	const certificateIdVal = (this.getNodeParameter('certificateId', 0) || '') as string;
	if (certificateIdVal !== '') {
		body.certificateId = certificateIdVal;
	}
	const descriptionVal = (this.getNodeParameter('description', 0) || '') as string;
	if (descriptionVal !== '') {
		body.description = descriptionVal;
	}
	const timeoutClientDataNum = this.getNodeParameter('timeoutClientData', 0) as number;
	if (timeoutClientDataNum !== undefined && timeoutClientDataNum !== 0) {
		body.timeoutClientData = timeoutClientDataNum;
	}
	const timeoutMemberDataNum = this.getNodeParameter('timeoutMemberData', 0) as number;
	if (timeoutMemberDataNum !== undefined && timeoutMemberDataNum !== 0) {
		body.timeoutMemberData = timeoutMemberDataNum;
	}
	const tlsVersionsVal = (this.getNodeParameter('tlsVersions', 0) || '') as string;
	if (tlsVersionsVal !== '') {
		body.tlsVersions = tlsVersionsVal;
	}
	const allowedCidrsVal = (this.getNodeParameter('allowedCidrs', 0) || '') as string;
	if (allowedCidrsVal !== '') {
		body.allowedCidrs = allowedCidrsVal;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/listener`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

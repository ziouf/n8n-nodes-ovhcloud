import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
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
			description: 'The name of the health monitor',
			displayOptions,
		},
		{
			displayName: 'Monitor Type',
			name: 'monitorType',
			type: 'string',
			default: '',
			required: true,
			description: 'Type of monitor (ping, tcp, http, https)',
			displayOptions,
		},
		{
			displayName: 'Delay (Seconds)',
			name: 'delay',
			type: 'number',
			default: 0,
			required: true,
			description: 'Duration between probes in seconds',
			displayOptions,
		},
		{
			displayName: 'Timeout (Seconds)',
			name: 'timeout',
			type: 'number',
			default: 0,
			required: true,
			description: 'Maximum wait time for a probe in seconds',
			displayOptions,
		},
		{
			displayName: 'Max Retries',
			name: 'maxRetries',
			type: 'number',
			default: 0,
			required: true,
			description: 'Successful checks before healthy',
			displayOptions,
		},
		{
			displayName: 'Max Retries Down',
			name: 'maxRetriesDown',
			type: 'number',
			default: 0,
			required: true,
			description: 'Failed checks before unhealthy',
			displayOptions,
		},
		{
			displayName: 'HTTP Method',
			name: 'httpMethod',
			type: 'string',
			default: '',

			description: 'HTTP method for http/https monitors (GET, HEAD, POST)',
			displayOptions,
		},
		{
			displayName: 'HTTP Path',
			name: 'httpPath',
			type: 'string',
			default: '',

			description: 'HTTP path for http/https monitors',
			displayOptions,
		},
		{
			displayName: 'HTTP Status Code',
			name: 'httpStatusCode',
			type: 'number',
			default: 0,

			description: 'Expected HTTP status code',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Health Monitor Create Post operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/healthMonitor
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const nameVal = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const monitorTypeVal = (this.getNodeParameter('monitorType', _itemIndex ?? 0) || '') as string;
	if (monitorTypeVal !== '') {
		body.monitorType = monitorTypeVal;
	}
	const delayNum = this.getNodeParameter('delay', _itemIndex ?? 0) as number;
	if (delayNum !== undefined && delayNum !== 0) {
		body.delay = delayNum;
	}
	const timeoutNum = this.getNodeParameter('timeout', _itemIndex ?? 0) as number;
	if (timeoutNum !== undefined && timeoutNum !== 0) {
		body.timeout = timeoutNum;
	}
	const maxRetriesNum = this.getNodeParameter('maxRetries', _itemIndex ?? 0) as number;
	if (maxRetriesNum !== undefined && maxRetriesNum !== 0) {
		body.maxRetries = maxRetriesNum;
	}
	const maxRetriesDownNum = this.getNodeParameter('maxRetriesDown', _itemIndex ?? 0) as number;
	if (maxRetriesDownNum !== undefined && maxRetriesDownNum !== 0) {
		body.maxRetriesDown = maxRetriesDownNum;
	}
	const httpMethodVal = (this.getNodeParameter('httpMethod', _itemIndex ?? 0) || '') as string;
	if (httpMethodVal !== '') {
		body.httpMethod = httpMethodVal;
	}
	const httpPathVal = (this.getNodeParameter('httpPath', _itemIndex ?? 0) || '') as string;
	if (httpPathVal !== '') {
		body.httpPath = httpPathVal;
	}
	const httpStatusCodeNum = this.getNodeParameter('httpStatusCode', _itemIndex ?? 0) as number;
	if (httpStatusCodeNum !== undefined && httpStatusCodeNum !== 0) {
		body.httpStatusCode = httpStatusCodeNum;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/healthMonitor`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

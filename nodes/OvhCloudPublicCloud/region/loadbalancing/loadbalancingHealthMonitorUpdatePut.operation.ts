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
			displayName: 'Health Monitor ID',
			name: 'healthMonitorId',
			type: 'string',
			default: '',
			required: true,
			description: 'The health monitor UUID',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',

			description: 'New name',
			displayOptions,
		},
		{
			displayName: 'Delay (Seconds)',
			name: 'delay',
			type: 'number',
			default: 0,

			description: 'Duration between probes',
			displayOptions,
		},
		{
			displayName: 'Timeout (Seconds)',
			name: 'timeout',
			type: 'number',
			default: 0,

			description: 'Maximum wait time for a probe',
			displayOptions,
		},
		{
			displayName: 'Max Retries',
			name: 'maxRetries',
			type: 'number',
			default: 0,

			description: 'Successful checks before healthy',
			displayOptions,
		},
		{
			displayName: 'Max Retries Down',
			name: 'maxRetriesDown',
			type: 'number',
			default: 0,

			description: 'Failed checks before unhealthy',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Health Monitor Update Put operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/healthMonitor/${healthMonitorIdVal}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const healthMonitorIdVal = (this.getNodeParameter('healthMonitorId', 0) || '') as string;
	if (healthMonitorIdVal !== '') {
		body.healthMonitorId = healthMonitorIdVal;
	}
	const nameVal = (this.getNodeParameter('name', 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const delayNum = this.getNodeParameter('delay', 0) as number;
	if (delayNum !== undefined && delayNum !== 0) {
		body.delay = delayNum;
	}
	const timeoutNum = this.getNodeParameter('timeout', 0) as number;
	if (timeoutNum !== undefined && timeoutNum !== 0) {
		body.timeout = timeoutNum;
	}
	const maxRetriesNum = this.getNodeParameter('maxRetries', 0) as number;
	if (maxRetriesNum !== undefined && maxRetriesNum !== 0) {
		body.maxRetries = maxRetriesNum;
	}
	const maxRetriesDownNum = this.getNodeParameter('maxRetriesDown', 0) as number;
	if (maxRetriesDownNum !== undefined && maxRetriesDownNum !== 0) {
		body.maxRetriesDown = maxRetriesDownNum;
	}
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/healthMonitor/${healthMonitorIdVal}`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

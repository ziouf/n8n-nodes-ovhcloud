import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Apply a new configuration on this path operation for Web Hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration` endpoint.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'Configuration\'s ID',
			displayOptions,
		},
		{
			displayName: 'Container',
			name: 'container',
			type: 'string',
			default: '',
			description: 'Container to run this website',
			displayOptions,
		},
		{
			displayName: 'Engine Name',
			name: 'engineName',
			type: 'string',
			default: '',
			description: 'Version of engine you want',
			displayOptions,
		},
		{
			displayName: 'Engine Version',
			name: 'engineVersion',
			type: 'string',
			default: '',
			description: 'Name of engine you want',
			displayOptions,
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'string',
			default: '',
			description: 'Environment configuration you want',
			displayOptions,
		},
		{
			displayName: 'Http Firewall',
			name: 'httpFirewall',
			type: 'string',
			default: '',
			description: 'Configuration you want for http firewall',
			displayOptions,
		},
	];
}

/**
 * Executes the Apply a new configuration on this path operation.
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', 0) as string;
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const container = this.getNodeParameter('container', 0) as string;
	const engineName = this.getNodeParameter('engineName', 0) as string;
	const engineVersion = this.getNodeParameter('engineVersion', 0) as string;
	const environment = this.getNodeParameter('environment', 0) as string;
	const httpFirewall = this.getNodeParameter('httpFirewall', 0) as string;
	const data = (await client.httpPost(
		`/hosting/web/${serviceName}/ovhConfig/${id}/changeConfiguration`,
		{
			body: {
				container: container,
				engineName: engineName,
				engineVersion: engineVersion,
				environment: environment,
				httpFirewall: httpFirewall,
			},
		},
	)) as IDataObject;
	return [{ json: data }];
}

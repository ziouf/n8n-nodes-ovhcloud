import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Configuration ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: "Configuration's ID",
			displayOptions,
		},
		{
			displayName: 'Container',
			name: 'container',
			type: 'options',
			options: [
				{ name: 'Default', value: '' },
				{ name: 'jessie.i386', value: 'jessie.i386' },
				{ name: 'Legacy', value: 'legacy' },
				{ name: 'Stable', value: 'stable' },
				{ name: 'Stable64', value: 'stable64' },
				{ name: 'Testing', value: 'testing' },
			],
			default: '',
			description: 'Container to run this website',
			displayOptions,
		},
		{
			displayName: 'Engine Name',
			name: 'engineName',
			type: 'options',
			options: [
				{ name: 'Default', value: '' },
				{ name: 'Php', value: 'php' },
				{ name: 'Phpcgi', value: 'phpcgi' },
			],
			default: '',
			description: 'Name of engine you want',
			displayOptions,
		},
		{
			displayName: 'Engine Version',
			name: 'engineVersion',
			type: 'options',
			options: [
				{ name: '5.4', value: '5.4' },
				{ name: '5.5', value: '5.5' },
				{ name: '5.6', value: '5.6' },
				{ name: '7.0', value: '7.0' },
				{ name: '7.1', value: '7.1' },
				{ name: '7.2', value: '7.2' },
				{ name: '7.3', value: '7.3' },
				{ name: '7.4', value: '7.4' },
				{ name: '8.0', value: '8.0' },
				{ name: '8.1', value: '8.1' },
				{ name: '8.2', value: '8.2' },
				{ name: '8.3', value: '8.3' },
				{ name: '8.4', value: '8.4' },
				{ name: '8.5', value: '8.5' },
				{ name: 'Default', value: '' },
			],
			default: '',
			description: 'Version of engine you want',
			displayOptions,
		},
		{
			displayName: 'Environment',
			name: 'environment',
			type: 'options',
			options: [
				{ name: 'Default', value: '' },
				{ name: 'Development', value: 'development' },
				{ name: 'Production', value: 'production' },
			],
			default: '',
			description: 'Environment configuration you want',
			displayOptions,
		},
		{
			displayName: 'HTTP Firewall',
			name: 'httpFirewall',
			type: 'options',
			options: [
				{ name: 'Default', value: '' },
				{ name: 'None', value: 'none' },
				{ name: 'Security', value: 'security' },
			],
			default: '',
			description: 'Configuration you want for http firewall',
			displayOptions,
		},
	];
}

/**
 * Change the configuration of an ovhConfig
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/ovhConfig/{id}/changeConfiguration
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex as number) as string;
	const id = this.getNodeParameter('id', _itemIndex as number) as number;
	const container = this.getNodeParameter('container', _itemIndex as number, '') as string;
	const engineName = this.getNodeParameter('engineName', _itemIndex as number, '') as string;
	const engineVersion = this.getNodeParameter('engineVersion', _itemIndex as number, '') as string;
	const environment = this.getNodeParameter('environment', _itemIndex as number, '') as string;
	const httpFirewall = this.getNodeParameter('httpFirewall', _itemIndex as number, '') as string;

	const body: IDataObject = {};
	if (container) {
		body.container = container;
	}
	if (engineName) {
		body.engineName = engineName;
	}
	if (engineVersion) {
		body.engineVersion = engineVersion;
	}
	if (environment) {
		body.environment = environment;
	}
	if (httpFirewall) {
		body.httpFirewall = httpFirewall;
	}

	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/ovhConfig/${encodeURIComponent(String(id))}/changeConfiguration`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

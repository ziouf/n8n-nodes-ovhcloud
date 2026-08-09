import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'SSL Gateway Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getSslGatewayServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Custom name of your SSL Gateway',
			displayOptions,
		},
		{
			displayName: 'HSTS',
			name: 'hsts',
			type: 'boolean',
			default: false,
			description: 'Whether to enable Strict-Transport-Security HTTP header',
			displayOptions,
		},
		{
			displayName: 'HTTPS Redirect',
			name: 'httpsRedirect',
			type: 'boolean',
			default: false,
			description: 'Whether to enable https redirect',
			displayOptions,
		},
		{
			displayName: 'Server HTTPS',
			name: 'serverHttps',
			type: 'boolean',
			default: false,
			description: 'Whether to contact backend servers over HTTPS',
			displayOptions,
		},
		{
			displayName: 'Reverse',
			name: 'reverse',
			type: 'string',
			default: '',
			description: 'Custom reverse for your SSL Gateway',
			displayOptions,
		},
		{
			displayName: 'SSL Configuration',
			name: 'sslConfiguration',
			type: 'options',
			options: [
				{ name: 'Intermediate', value: 'intermediate' },
				{ name: 'Modern', value: 'modern' },
				{ name: 'Internal', value: 'internal' },
			],
			default: 'intermediate',
			description: 'SSL configuration type',
			displayOptions,
		},
		{
			displayName: 'Allowed Source',
			name: 'allowedSource',
			type: 'string',
			default: '',
			description:
				'Restrict SSL Gateway access to these IP blocks (comma-separated, e.g. 192.0.2.0/24,203.0.113.0/24). Leave empty for no restriction.',
			displayOptions,
		},
	];
}

/**
 * Update SSL Gateway service
 *
 * HTTP method: PUT
 * Endpoint: /sslGateway/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const body: IDataObject = {};

	const displayName = this.getNodeParameter('displayName', _itemIndex ?? 0, '') as string;
	if (displayName !== '') {
		body.displayName = displayName;
	}

	const hsts = this.getNodeParameter('hsts', _itemIndex ?? 0, false) as boolean;
	body.hsts = hsts;

	const httpsRedirect = this.getNodeParameter('httpsRedirect', _itemIndex ?? 0, false) as boolean;
	body.httpsRedirect = httpsRedirect;

	const serverHttps = this.getNodeParameter('serverHttps', _itemIndex ?? 0, false) as boolean;
	body.serverHttps = serverHttps;

	const reverse = this.getNodeParameter('reverse', _itemIndex ?? 0, '') as string;
	if (reverse !== '') {
		body.reverse = reverse;
	}

	const sslConfiguration = this.getNodeParameter('sslConfiguration', _itemIndex ?? 0, 'intermediate') as string;
	body.sslConfiguration = sslConfiguration;

	const allowedSource = this.getNodeParameter('allowedSource', _itemIndex ?? 0, '') as string;
	if (allowedSource !== '') {
		body.allowedSource = allowedSource.split(',').map((ip) => ip.trim());
	}

	await client.httpPut(`/sslGateway/${serviceName}`, body);
	return this.helpers.returnJsonArray([{ success: true }]);
}

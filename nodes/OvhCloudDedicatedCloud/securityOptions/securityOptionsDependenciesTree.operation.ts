import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'Option',
			name: 'option',
			type: 'options',
			options: [
				{ name: 'Access Network Filtered', value: 'accessNetworkFiltered' },
				{ name: 'Advanced Security', value: 'advancedSecurity' },
				{ name: 'Base', value: 'base' },
				{ name: 'Content Library', value: 'contentLibrary' },
				{ name: 'Grsec Kernel', value: 'grsecKernel' },
				{ name: 'Hds', value: 'hds' },
				{ name: 'Hids', value: 'hids' },
				{ name: 'Hipaa', value: 'hipaa' },
				{ name: 'Log Forwarder', value: 'logForwarder' },
				{ name: 'Nids', value: 'nids' },
				{ name: 'Pcidss', value: 'pcidss' },
				{ name: 'Private Customer vLAN', value: 'privateCustomerVlan' },
				{ name: 'Private Gw', value: 'privateGw' },
				{ name: 'Send Log To Customer', value: 'sendLogToCustomer' },
				{ name: 'Session Timeout', value: 'sessionTimeout' },
				{ name: 'Sftp', value: 'sftp' },
				{ name: 'Snc', value: 'snc' },
				{ name: 'Spla', value: 'spla' },
				{ name: 'SSL V3', value: 'sslV3' },
				{ name: 'Tls1 2', value: 'tls1.2' },
				{ name: 'Token Validation', value: 'tokenValidation' },
				{ name: 'Two FA', value: 'twoFa' },
				{ name: 'Two FA Fail2ban', value: 'twoFaFail2ban' },
				{ name: 'Vrli Forwarder', value: 'vrliForwarder' },
				{ name: 'Waf', value: 'waf' },
			],
			default: 'accessNetworkFiltered',
			required: true,
			description: 'Target security option',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Security Options Dependencies Tree operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/securityOptions/dependenciesTree
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const qs: IDataObject = {};
	qs.option = this.getNodeParameter('option', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/securityOptions/dependenciesTree`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

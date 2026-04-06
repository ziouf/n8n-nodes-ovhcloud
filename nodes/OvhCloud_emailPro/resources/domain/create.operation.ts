import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Create Domain operation.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'str', value: '' },
			required: true,
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getEmailProServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain name',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{
					name: 'Domain',
					value: 'Domain',
				},
				{
					name: 'Accepted Domain',
					value: 'AcceptedDomain',
				},
				{
					name: 'Relay Domain',
					value: 'RelayDomain',
				},
			],
			default: 'Domain',
			required: true,
			description: 'Type of domain',
			displayOptions,
		},
		{
			displayName: 'Auto Enable DKIM',
			name: 'autoEnableDKIM',
			type: 'boolean',
			default: false,
			description: 'Whether to automatically enable DKIM',
			displayOptions,
		},
		{
			displayName: 'Configure Autodiscover',
			name: 'configureAutodiscover',
			type: 'boolean',
			default: false,
			description: 'Whether to configure autodiscover',
			displayOptions,
		},
		{
			displayName: 'Configure DKIM',
			name: 'configureDKIM',
			type: 'boolean',
			default: false,
			description: 'Whether to configure DKIM',
			displayOptions,
		},
		{
			displayName: 'Configure MX',
			name: 'configureMx',
			type: 'boolean',
			default: false,
			description: 'Whether to configure MX records',
			displayOptions,
		},
		{
			displayName: 'Configure SPF',
			name: 'configureSPF',
			type: 'boolean',
			default: false,
			description: 'Whether to configure SPF',
			displayOptions,
		},
		{
			displayName: 'MX Relay',
			name: 'mxRelay',
			type: 'string',
			default: '',
			description: 'MX relay server',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Domain operation.
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/domain
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const body: IDataObject = {
		name: this.getNodeParameter('name', 0) as string,
		type: this.getNodeParameter('type', 0) as string,
	};

	const autoEnableDKIM = this.getNodeParameter('autoEnableDKIM', 0, false) as boolean;
	const configureAutodiscover = this.getNodeParameter('configureAutodiscover', 0, false) as boolean;
	const configureDKIM = this.getNodeParameter('configureDKIM', 0, false) as boolean;
	const configureMx = this.getNodeParameter('configureMx', 0, false) as boolean;
	const configureSPF = this.getNodeParameter('configureSPF', 0, false) as boolean;
	const mxRelay = this.getNodeParameter('mxRelay', 0, '') as string;

	if (autoEnableDKIM) body.autoEnableDKIM = autoEnableDKIM;
	if (configureAutodiscover) body.configureAutodiscover = configureAutodiscover;
	if (configureDKIM) body.configureDKIM = configureDKIM;
	if (configureMx) body.configureMx = configureMx;
	if (configureSPF) body.configureSPF = configureSPF;
	if (mxRelay) body.mxRelay = mxRelay;

	const data = (await client.httpPost(
		`/email/pro/${serviceName}/domain`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}

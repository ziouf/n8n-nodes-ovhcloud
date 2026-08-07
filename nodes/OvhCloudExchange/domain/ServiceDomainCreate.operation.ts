import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange organization',
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your exchange service',
		},
		{
			displayName: 'Auto Enable D K I M',
			name: 'autoEnableDKIM',
			type: 'string',
			default: '',
			description: 'Enable DKIM automatically after DKIM configuration',
		},
		{
			displayName: 'Configure Autodiscover',
			name: 'configureAutodiscover',
			type: 'string',
			default: '',
			description: 'If you host domain in OVH we can configure autodiscover record automatically',
		},
		{
			displayName: 'Configure D K I M',
			name: 'configureDKIM',
			type: 'string',
			default: '',
			description: 'Launch configuration of DKIM automatically for the domain',
		},
		{
			displayName: 'Configure Mx',
			name: 'configureMx',
			type: 'string',
			default: '',
			description: 'If you host domain in OVH we can configure mx record automatically',
		},
		{
			displayName: 'Configure S P F',
			name: 'configureSPF',
			type: 'string',
			default: '',
			description: 'Enable automatic SPF record (only for domains hosted by OVHcloud)',
		},
		{
			displayName: 'Main',
			name: 'main',
			type: 'string',
			default: '',
			description: 'This newly created domain will be an organization (Exchange 2010 only)',
		},
		{
			displayName: 'Mx Relay',
			name: 'mxRelay',
			type: 'string',
			default: '',
			description: 'If specified, emails to not existing address will be redirected to that domain',
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain to install on server',
		},
		{
			displayName: 'Organization2010',
			name: 'organization2010',
			type: 'string',
			default: '',
			description: 'If specified, indicates which organization this newly created domain will be part of (Exchange 2010 only)',
		},
		{
			displayName: 'Sbr Default',
			name: 'sbrDefault',
			type: 'string',
			default: '',
			description: 'Default Sender base routing destination domain applied on all new created accounts',
		},
		{
			displayName: 'Send Connector Id Default',
			name: 'sendConnectorIdDefault',
			type: 'string',
			default: '',
			description: 'Default Sender Connector id applied on all new created accounts',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'Type of domain that You want to install',
		},
	];
}

/**
 * Create new domain in exchange services
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/domain
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const autoEnableDKIM = this.getNodeParameter('autoEnableDKIM', 0) as any;
	const configureAutodiscover = this.getNodeParameter('configureAutodiscover', 0) as any;
	const configureDKIM = this.getNodeParameter('configureDKIM', 0) as any;
	const configureMx = this.getNodeParameter('configureMx', 0) as any;
	const configureSPF = this.getNodeParameter('configureSPF', 0) as any;
	const main = this.getNodeParameter('main', 0) as any;
	const mxRelay = this.getNodeParameter('mxRelay', 0) as any;
	const name = this.getNodeParameter('name', 0) as any;
	const organization2010 = this.getNodeParameter('organization2010', 0) as any;
	const sbrDefault = this.getNodeParameter('sbrDefault', 0) as any;
	const sendConnectorIdDefault = this.getNodeParameter('sendConnectorIdDefault', 0) as any;
	const type = this.getNodeParameter('type', 0) as any;

	const body: IDataObject = {
    autoEnableDKIM: autoEnableDKIM,
    configureAutodiscover: configureAutodiscover,
    configureDKIM: configureDKIM,
    configureMx: configureMx,
    configureSPF: configureSPF,
    main: main,
    mxRelay: mxRelay,
    name: name,
    organization2010: organization2010,
    sbrDefault: sbrDefault,
    sendConnectorIdDefault: sendConnectorIdDefault,
    type: type
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/domain", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

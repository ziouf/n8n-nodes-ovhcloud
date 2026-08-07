import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';


export function description() {
	return [
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			required: true,
			description: 'The service identifier',
		},
		{
			displayName: 'AutoEnableDKIM',
			name: 'autoEnableDKIM',
			type: 'string',
			default: '',
			description: 'The autoenabledkim value',
		},
		{
			displayName: 'ConfigureAutodiscover',
			name: 'configureAutodiscover',
			type: 'string',
			default: '',
			description: 'The configureautodiscover value',
		},
		{
			displayName: 'ConfigureDKIM',
			name: 'configureDKIM',
			type: 'string',
			default: '',
			description: 'The configuredkim value',
		},
		{
			displayName: 'ConfigureMx',
			name: 'configureMx',
			type: 'string',
			default: '',
			description: 'The configuremx value',
		},
		{
			displayName: 'ConfigureSPF',
			name: 'configureSPF',
			type: 'string',
			default: '',
			description: 'The configurespf value',
		},
		{
			displayName: 'MxRelay',
			name: 'mxRelay',
			type: 'string',
			default: '',
			description: 'The mxrelay value',
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The name value',
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'The type value',
		},
	];
}

/**
 * Create new domain in pro services
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/domain
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;



	const autoEnableDKIM = this.getNodeParameter('autoEnableDKIM', 0) as string;
	const configureAutodiscover = this.getNodeParameter('configureAutodiscover', 0) as string;
	const configureDKIM = this.getNodeParameter('configureDKIM', 0) as string;
	const configureMx = this.getNodeParameter('configureMx', 0) as string;
	const configureSPF = this.getNodeParameter('configureSPF', 0) as string;
	const mxRelay = this.getNodeParameter('mxRelay', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;


const body: IDataObject = {
    autoEnableDKIM: autoEnableDKIM,
    configureAutodiscover: configureAutodiscover,
    configureDKIM: configureDKIM,
    configureMx: configureMx,
    configureSPF: configureSPF,
    mxRelay: mxRelay,
    name: name,
    type: type
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'domain', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


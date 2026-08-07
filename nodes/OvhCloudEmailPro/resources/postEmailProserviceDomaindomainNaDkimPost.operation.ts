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
			displayName: 'DomainName',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainname identifier',
		},
		{
			displayName: 'AutoEnableDKIM',
			name: 'autoEnableDKIM',
			type: 'string',
			default: '',
			description: 'The autoenabledkim value',
		},
		{
			displayName: 'ConfigureDkim',
			name: 'configureDkim',
			type: 'string',
			default: '',
			description: 'The configuredkim value',
		},
		{
			displayName: 'SelectorName',
			name: 'selectorName',
			type: 'string',
			default: '',
			description: 'The selectorname value',
		},
	];
}

/**
 * Create DKIM selector on this domain
 *
 * HTTP method: POST
 * Endpoint: /email/pro/{service}/domain/{domainName}/dkim
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const service = this.getNodeParameter('service', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;



	const autoEnableDKIM = this.getNodeParameter('autoEnableDKIM', 0) as string;
	const configureDkim = this.getNodeParameter('configureDkim', 0) as string;
	const selectorName = this.getNodeParameter('selectorName', 0) as string;


const body: IDataObject = {
    autoEnableDKIM: autoEnableDKIM,
    configureDkim: configureDkim,
    selectorName: selectorName
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/email' + '/' + 'pro' + '/' + encodeURIComponent(service) + '/' + 'domain' + '/' + encodeURIComponent(domainName) + '/' + 'dkim', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


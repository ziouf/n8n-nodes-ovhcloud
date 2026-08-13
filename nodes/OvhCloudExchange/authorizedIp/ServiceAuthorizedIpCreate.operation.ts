import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'H T T P S',
			name: 'HTTPS',
			type: 'string',
			default: '',
			description: 'Webmail,outlook,web Service(EWS) and active sync access (port 443)',
		},
		{
			displayName: 'I M A P',
			name: 'IMAP',
			type: 'string',
			default: '',
			description: 'IMAP access (port 143)',
		},
		{
			displayName: 'I M A P S',
			name: 'IMAPS',
			type: 'string',
			default: '',
			description: 'IMAPS access (port 993)',
		},
		{
			displayName: 'I P',
			name: 'IP',
			type: 'string',
			default: '',
			required: true,
			description: 'Authorized IP',
		},
		{
			displayName: 'P O P',
			name: 'POP',
			type: 'string',
			default: '',
			description: 'POP access (port 110)',
		},
		{
			displayName: 'P O P S',
			name: 'POPS',
			type: 'string',
			default: '',
			description: 'POPS access (port 995)',
		},
		{
			displayName: 'S M T P',
			name: 'SMTP',
			type: 'string',
			default: '',
			description: 'SMTP access (port 25)',
		},
		{
			displayName: 'S M T P S',
			name: 'SMTPS',
			type: 'string',
			default: '',
			description: 'SMTPS access (port 587)',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Display name information',
		},
	];
}

/**
 * Authorize new IP to access the service
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/authorizedIp
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const HTTPS = this.getNodeParameter('HTTPS', _itemIndex ?? 0) as string;
	const IMAP = this.getNodeParameter('IMAP', _itemIndex ?? 0) as string;
	const IMAPS = this.getNodeParameter('IMAPS', _itemIndex ?? 0) as string;
	const IP = this.getNodeParameter('IP', _itemIndex ?? 0) as string;
	const POP = this.getNodeParameter('POP', _itemIndex ?? 0) as string;
	const POPS = this.getNodeParameter('POPS', _itemIndex ?? 0) as string;
	const SMTP = this.getNodeParameter('SMTP', _itemIndex ?? 0) as string;
	const SMTPS = this.getNodeParameter('SMTPS', _itemIndex ?? 0) as string;
	const displayName = this.getNodeParameter('displayName', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    HTTPS: HTTPS,
    IMAP: IMAP,
    IMAPS: IMAPS,
    IP: IP,
    POP: POP,
    POPS: POPS,
    SMTP: SMTP,
    SMTPS: SMTPS,
    displayName: displayName
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/authorizedIp", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

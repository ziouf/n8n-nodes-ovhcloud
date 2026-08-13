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
			displayName: 'Dcv',
			name: 'dcv',
			type: 'string',
			default: '',
			description: 'DCV email require for order ssl varification process, one of the options for ownership validation',
		},
		{
			displayName: 'Use Cname',
			name: 'useCname',
			type: 'string',
			default: '',
			description: 'Use CNAME for Domain Control Validation, one of the options for ownership validation',
		},
		{
			displayName: 'Use Dns Assist',
			name: 'useDnsAssist',
			type: 'string',
			default: '',
			description: 'Set required CNAME record automatically if the domain is managed by OVH',
		},
	];
}

/**
 * Renew SSL if it will expire in next 30 days
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/renewSSL
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const dcv = this.getNodeParameter('dcv', _itemIndex ?? 0) as string;
	const useCname = this.getNodeParameter('useCname', _itemIndex ?? 0) as string;
	const useDnsAssist = this.getNodeParameter('useDnsAssist', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    dcv: dcv,
    useCname: useCname,
    useDnsAssist: useDnsAssist
	};

	const client = getClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/renewSSL", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
			displayName: 'Dcv Email',
			name: 'dcvEmail',
			type: 'string',
			default: '',
			description: 'Email address used for Domain Control Validation, one of the options for ownership validation',
		},
		{
			displayName: 'Hostname',
			name: 'hostname',
			type: 'string',
			default: '',
			required: true,
			description: 'FQDN of SSL hostname',
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
			required: true,
			description: 'Set required Exchange DNS fields automatically if the hostname domain is managed by OVH',
		},
	];
}

/**
 * Setting SSL hostname for Exchange private offer
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/changeHostname
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', _itemIndex ?? 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', _itemIndex ?? 0) as string;
	const dcvEmail = this.getNodeParameter('dcvEmail', _itemIndex ?? 0) as string;
	const hostname = this.getNodeParameter('hostname', _itemIndex ?? 0) as string;
	const useCname = this.getNodeParameter('useCname', _itemIndex ?? 0) as string;
	const useDnsAssist = this.getNodeParameter('useDnsAssist', _itemIndex ?? 0) as string;

	const body: IDataObject = {
    dcvEmail: dcvEmail,
    hostname: hostname,
    useCname: useCname,
    useDnsAssist: useDnsAssist
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/changeHostname", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

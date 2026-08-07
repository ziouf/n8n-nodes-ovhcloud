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
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain name',
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
	];
}

/**
 * Change default values of SBR used for all new created account on this domain
 *
 * HTTP method: PUT
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const sbrDefault = this.getNodeParameter('sbrDefault', 0) as any;
	const sendConnectorIdDefault = this.getNodeParameter('sendConnectorIdDefault', 0) as any;

	const body: IDataObject = {
    sbrDefault: sbrDefault,
    sendConnectorIdDefault: sendConnectorIdDefault
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/domain/" + encodeURIComponent(domainName) + "/changeDefaultSBR", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

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
			displayName: 'Company',
			name: 'company',
			type: 'string',
			default: '',
			description: 'Company name',
		},
		{
			displayName: 'Depart Restriction',
			name: 'departRestriction',
			type: 'string',
			default: '',
			required: true,
			description: 'Depart restriction policy',
		},
		{
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Name displayed in Global Access List',
		},
		{
			displayName: 'Hidden From G A L',
			name: 'hiddenFromGAL',
			type: 'string',
			default: '',
			description: 'If true mailing list is hiddend in Global Address List',
		},
		{
			displayName: 'Join Restriction',
			name: 'joinRestriction',
			type: 'string',
			default: '',
			required: true,
			description: 'Join restriction policy',
		},
		{
			displayName: 'Mailing List Address',
			name: 'mailingListAddress',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Max Receive Size',
			name: 'maxReceiveSize',
			type: 'string',
			default: '',
			description: 'Maximum receive email size in MB',
		},
		{
			displayName: 'Max Send Size',
			name: 'maxSendSize',
			type: 'string',
			default: '',
			description: 'Maximum send email size in MB',
		},
		{
			displayName: 'Sender Authentification',
			name: 'senderAuthentification',
			type: 'string',
			default: '',
			description: 'If true sender has to authenticate',
		},
	];
}

/**
 * Add mailing list
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/mailingList
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const company = this.getNodeParameter('company', 0) as string;
	const departRestriction = this.getNodeParameter('departRestriction', 0) as string;
	const displayName = this.getNodeParameter('displayName', 0) as string;
	const hiddenFromGAL = this.getNodeParameter('hiddenFromGAL', 0) as string;
	const joinRestriction = this.getNodeParameter('joinRestriction', 0) as string;
	const mailingListAddress = this.getNodeParameter('mailingListAddress', 0) as string;
	const maxReceiveSize = this.getNodeParameter('maxReceiveSize', 0) as string;
	const maxSendSize = this.getNodeParameter('maxSendSize', 0) as string;
	const senderAuthentification = this.getNodeParameter('senderAuthentification', 0) as string;

	const body: IDataObject = {
    company: company,
    departRestriction: departRestriction,
    displayName: displayName,
    hiddenFromGAL: hiddenFromGAL,
    joinRestriction: joinRestriction,
    mailingListAddress: mailingListAddress,
    maxReceiveSize: maxReceiveSize,
    maxSendSize: maxSendSize,
    senderAuthentification: senderAuthentification
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/mailingList", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

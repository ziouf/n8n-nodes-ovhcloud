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
			displayName: 'Display Name',
			name: 'displayName',
			type: 'string',
			default: '',
			description: 'Shared account display name',
		},
		{
			displayName: 'First Name',
			name: 'firstName',
			type: 'string',
			default: '',
			description: 'Shared account first name',
		},
		{
			displayName: 'Hidden From G A L',
			name: 'hiddenFromGAL',
			type: 'string',
			default: '',
			description: 'Hide the shared account in Global Address List',
		},
		{
			displayName: 'Initials',
			name: 'initials',
			type: 'string',
			default: '',
			description: 'Shared account initials',
		},
		{
			displayName: 'Last Name',
			name: 'lastName',
			type: 'string',
			default: '',
			description: 'Shared account last name',
		},
		{
			displayName: 'Mailing Filter',
			name: 'mailingFilter',
			type: 'string',
			default: '',
			description: 'Enable mailing filtrering',
		},
		{
			displayName: 'Quota',
			name: 'quota',
			type: 'string',
			default: '',
			required: true,
			description: 'Shared account maximum size',
		},
		{
			displayName: 'Shared Email Address',
			name: 'sharedEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'Shared account email address',
		},
	];
}

/**
 * Create new shared mailbox in exchange server
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/sharedAccount
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const displayName = this.getNodeParameter('displayName', 0) as string;
	const firstName = this.getNodeParameter('firstName', 0) as string;
	const hiddenFromGAL = this.getNodeParameter('hiddenFromGAL', 0) as string;
	const initials = this.getNodeParameter('initials', 0) as string;
	const lastName = this.getNodeParameter('lastName', 0) as string;
	const mailingFilter = this.getNodeParameter('mailingFilter', 0) as string;
	const quota = this.getNodeParameter('quota', 0) as string;
	const sharedEmailAddress = this.getNodeParameter('sharedEmailAddress', 0) as string;

	const body: IDataObject = {
    displayName: displayName,
    firstName: firstName,
    hiddenFromGAL: hiddenFromGAL,
    initials: initials,
    lastName: lastName,
    mailingFilter: mailingFilter,
    quota: quota,
    sharedEmailAddress: sharedEmailAddress
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/sharedAccount", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

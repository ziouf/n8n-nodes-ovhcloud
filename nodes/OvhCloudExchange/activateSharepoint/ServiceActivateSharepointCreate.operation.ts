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
			displayName: 'Primary Email Address',
			name: 'primaryEmailAddress',
			type: 'string',
			default: '',
			required: true,
			description: 'primary email address of a user that will be admin of sharepoint (You will not be able to change it!)',
		},
		{
			displayName: 'Sub Domain',
			name: 'subDomain',
			type: 'string',
			default: '',
			required: true,
			description: 'sub domain that will be used for Your sharepoint infra (You will not be able to change it!)',
		},
	];
}

/**
 * Activate Sharepoint infra connected to this exchange service
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/activateSharepoint
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const primaryEmailAddress = this.getNodeParameter('primaryEmailAddress', 0) as any;
	const subDomain = this.getNodeParameter('subDomain', 0) as any;

	const body: IDataObject = {
    primaryEmailAddress: primaryEmailAddress,
    subDomain: subDomain
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/activateSharepoint", body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

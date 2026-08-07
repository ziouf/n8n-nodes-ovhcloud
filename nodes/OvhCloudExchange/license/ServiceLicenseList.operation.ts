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
			displayName: 'From Date',
			name: 'fromDate',
			type: 'string',
			default: '',
			description: 'Get active licenses since date ',
		},
		{
			displayName: 'License',
			name: 'license',
			type: 'string',
			default: '',
			description: 'License type',
		},
		{
			displayName: 'To Date',
			name: 'toDate',
			type: 'string',
			default: '',
			description: 'Get active licenses until date',
		},
	];
}

/**
 * Get active licenses for specific period of time
 *
 * HTTP method: GET
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/license
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const fromDate = this.getNodeParameter('fromDate', 0) as any;
	const license = this.getNodeParameter('license', 0) as any;
	const toDate = this.getNodeParameter('toDate', 0) as any;

	const qs: IDataObject = {
    fromDate: fromDate,
    license: license,
    toDate: toDate
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet("/email/exchange/" + encodeURIComponent(organizationName) + "/service/" + encodeURIComponent(exchangeService) + "/license", qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/** Get licenses. GET /email/exchange/{organizationName}/service/{exchangeService}/license */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Organization Name', name: 'organizationName', type: 'string', default: '', required: true, description: 'The name of the organization', displayOptions },
		{ displayName: 'Exchange Service', name: 'exchangeService', type: 'string', default: '', required: true, description: 'The name of the Exchange service', displayOptions },
		{ displayName: 'From Date', name: 'fromDate', type: 'dateTime', default: '', description: 'Filter by from date', displayOptions },
		{ displayName: 'License', name: 'license', type: 'string', default: '', description: 'Filter by license', displayOptions },
		{ displayName: 'To Date', name: 'toDate', type: 'dateTime', default: '', description: 'Filter by to date', displayOptions },
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const fromDate = this.getNodeParameter('fromDate', 0, '') as string;
	const license = this.getNodeParameter('license', 0, '') as string;
	const toDate = this.getNodeParameter('toDate', 0, '') as string;
	const qs: IDataObject = {};
	if (fromDate) qs.fromDate = fromDate;
	if (license) qs.license = license;
	if (toDate) qs.toDate = toDate;
	const data = (await client.httpGet(`/email/exchange/${organizationName}/service/${exchangeService}/license`, { qs })) as IDataObject;
	return [{ json: data }];
}

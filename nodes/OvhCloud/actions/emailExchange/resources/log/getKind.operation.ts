import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/** Get a log kind. GET /email/exchange/{organizationName}/service/{exchangeService}/log/kind/{name} */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Organization Name', name: 'organizationName', type: 'string', default: '', required: true, description: 'The name of the organization', displayOptions },
		{ displayName: 'Exchange Service', name: 'exchangeService', type: 'string', default: '', required: true, description: 'The name of the Exchange service', displayOptions },
		{ displayName: 'Name', name: 'name', type: 'string', default: '', required: true, description: 'The log kind name', displayOptions },
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const data = (await client.httpGet(`/email/exchange/${organizationName}/service/${exchangeService}/log/kind/${name}`)) as IDataObject;
	return [{ json: data }];
}

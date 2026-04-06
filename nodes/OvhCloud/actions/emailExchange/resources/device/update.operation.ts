import type { IExecuteFunctions, INodeExecutionData, IDataObject, INodeProperties, IDisplayOptions } from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/** Device operation. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Organization Name', name: 'organizationName', type: 'string', default: '', required: true, description: 'The name of the organization', displayOptions },
		{ displayName: 'Exchange Service', name: 'exchangeService', type: 'string', default: '', required: true, description: 'The name of the Exchange service', displayOptions },
		{ displayName: 'Identity', name: 'identity', type: 'string', default: '', required: true, description: 'The device identity', displayOptions },
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const identity = this.getNodeParameter('identity', 0) as string;
	const data = (await client.httpGet(`/email/exchange/${organizationName}/service/${exchangeService}/device/${identity}`)) as IDataObject;
	return [{ json: data }];
}

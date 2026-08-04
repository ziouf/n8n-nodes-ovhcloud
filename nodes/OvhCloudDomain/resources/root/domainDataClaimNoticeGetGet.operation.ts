import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain name',
			displayOptions,
		},
	];
}

/**
 * Executes the Retrieve claim notices associated to a domain operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/data/claimNotice
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const qs: IDataObject = {};
		const domain = this.getNodeParameter('domain', itemIndex, '') as string;
		if (domain !== '' && domain !== undefined) qs['domain'] = domain;

	const data = (await client.httpGet(`/domain/data/claimNotice`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

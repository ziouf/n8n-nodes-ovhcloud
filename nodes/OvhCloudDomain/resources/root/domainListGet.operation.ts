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
			displayName: 'Whois Owner',
			name: 'whoisOwner',
			type: 'string',
			default: '',
			description: 'Filter domain names by owner ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Get the list of managed domain names operation.
 *
 * HTTP method: GET
 * Endpoint: /domain
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);

	const qs: IDataObject = {};
		const whoisOwner = this.getNodeParameter('whoisOwner', _itemIndex, '') as string;
		if (whoisOwner !== '' && whoisOwner !== undefined) qs['whoisOwner'] = whoisOwner;

	const data = (await client.httpGet(`/domain`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

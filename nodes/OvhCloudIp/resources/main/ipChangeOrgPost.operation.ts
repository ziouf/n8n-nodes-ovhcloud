import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	{
		displayName: 'Ip',
		name: 'ip',
		type: 'string',
		default: '',
		required: true,
		description: 'The IP block identifier (e.g. 1.2.3.4/32)',
		displayOptions,
	},
	{
		displayName: 'Organisation',
		name: 'organisation',
		type: 'string',
		default: '',
		required: true,
		description: 'Your organisation ID (RIPE_XXXX) to add on block informations',
		displayOptions,
	},
	];
}

/**
 * Executes the Post Change IP Organisation operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/changeOrg
 */

export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const organisation = (this.getNodeParameter('organisation', _itemIndex) as string) || '';

	const body: IDataObject = {};
	body.organisation = organisation;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/ip/${encodeURIComponent(ip)}/changeOrg`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

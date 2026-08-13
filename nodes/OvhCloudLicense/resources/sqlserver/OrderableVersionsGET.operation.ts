import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Your license Ip',
			displayOptions,
		},
	];
}


/**
 * Get the orderable Sql Server versions.
 *
 * HTTP method: GET
 * Endpoint: /license/sqlserver/orderableVersions
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const ip = this.getNodeParameter('ip', _itemIndex, '') as string;

	const qs: IDataObject = {
    ip: ip
  };
	const data = (await client.httpGet('/license/sqlserver/orderableVersions', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}


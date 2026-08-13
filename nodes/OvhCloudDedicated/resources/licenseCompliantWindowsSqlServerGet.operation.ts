import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedServerServices',
				displayName: 'Service Name',
				description: 'List compliant Windows SQL Server licenses',
				placeholder: 'server-12345',
			}),
			displayOptions,
		},
	];
}

/**
 * List compliant Windows SQL Server licenses
 *
 * HTTP method: GET
 * Endpoint: /dedicated/server/{serviceName}/license/compliantWindowsSqlServer
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const data = (await client.httpGet(
		`/dedicated/server/${encodeURIComponent(String(serviceName))}/license/compliantWindowsSqlServer`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

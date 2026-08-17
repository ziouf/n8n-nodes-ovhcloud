import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
	];
}

/**
 * Executes the Get Plan Capability Details operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/reference/blockStorage/plan/getByRegionName?region={region}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);

	let url = `/publicCloud/reference/blockStorage/plan/getByRegionName`;

	const region = (this.getNodeParameter('region', _itemIndex ?? 0) || '') as string;
	if (region && region !== '') {
		url += `?region=${encodeURIComponent(region)}`;
	}

	const data = (await client.httpGet(url)) as IDataObject | IDataObject[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

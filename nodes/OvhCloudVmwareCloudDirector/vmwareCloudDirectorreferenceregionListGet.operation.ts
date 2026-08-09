import type {

	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	void _displayOptions;
	return [

	];
}

/**
 * Executes the Get Get region details operation.
 *
 * HTTP method: GET
 * Endpoint: /vmwareCloudDirector/reference/region
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/vmwareCloudDirector/reference/region')) as unknown[];


	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}

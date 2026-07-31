import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [

	];
}

/**
 * Executes the Post Create a new resource group operation.
 *
 * HTTP method: POST
 * Endpoint: /iam/resourceGroup
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/iam/resourceGroup', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

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
 * Executes the Post Create a permissions group operation.
 *
 * HTTP method: POST
 * Endpoint: /iam/permissionsGroup
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/iam/permissionsGroup', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

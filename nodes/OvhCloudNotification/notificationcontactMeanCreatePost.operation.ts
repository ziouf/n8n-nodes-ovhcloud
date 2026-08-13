import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	void _displayOptions;
	return [

	];
}

/**
 * Executes the Post Create a contact mean operation.
 *
 * HTTP method: POST
 * Endpoint: /notification/contactMean
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	void _itemIndex;

	const body: IDataObject = {};

	const client = getClient(this);
	const data = (await client.httpPost('/notification/contactMean', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

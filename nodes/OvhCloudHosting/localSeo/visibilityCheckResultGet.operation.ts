import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the check',
			displayOptions,
		},
		{
			displayName: 'Token',
			name: 'token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Token received when requesting the check',
			displayOptions,
		},
		{
			displayName: 'Directory',
			name: 'directory',
			type: 'string',
			default: '',
			description: 'Get the result only for one directory',
			displayOptions,
		},
	];
}

/**
 * Get the result of a visibility check
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/localSeo/visibilityCheckResult
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as number;
	const token = this.getNodeParameter('token', _itemIndex) as string;
	const directory = this.getNodeParameter('directory', _itemIndex, '') as string;
	const qs: IDataObject = { id, token };
	if (directory) qs.directory = directory;
	const data = (await client.httpGet(
		'/hosting/web/localSeo/visibilityCheckResult',
		qs,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

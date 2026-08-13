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
			displayName: 'Module ID',
			name: 'moduleId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the module',
			displayOptions,
		},
	];
}

/**
 * Get module list properties by id
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/moduleList/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const moduleId = this.getNodeParameter('moduleId', _itemIndex) as number;
	const data = (await client.httpGet(
		`/hosting/web/moduleList/${encodeURIComponent(String(moduleId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[_itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

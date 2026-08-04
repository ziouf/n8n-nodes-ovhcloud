import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const moduleId = this.getNodeParameter('moduleId', itemIndex) as number;
	const data = (await client.httpGet(
		`/hosting/web/moduleList/${encodeURIComponent(String(moduleId))}`,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}

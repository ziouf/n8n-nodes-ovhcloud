import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get Template Infos operation for Dedicated Installation Template
 *
 * Retrieves details about available distributions for installation templates.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/installationTemplate/templateInfos
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

/**
 * Executes the Get Template Infos operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet(
		'/dedicated/installationTemplate/templateInfos',
	)) as IDataObject;
	return [{ json: data }];
}

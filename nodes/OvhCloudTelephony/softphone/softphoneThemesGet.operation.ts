import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Theme ID',
			name: 'themeId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get Softphone Theme operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/softphone/themes/{themeId}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const themeId = this.getNodeParameter('themeId', itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet(
		'/telephony/softphone/themes/' + encodeURIComponent(themeId),
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

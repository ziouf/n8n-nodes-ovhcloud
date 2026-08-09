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
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Osd ID',
			name: 'osdId',
			type: 'string',
			default: '',
			required: true,
			description: 'The osdId identifier',
			displayOptions,
		},
		{
			displayName: 'Body',
			name: 'body',
			type: 'json',
			default: '',
			description: 'Request body (dbaas.logs.OsdUpdate)',
			displayOptions,
		},
	];
}

/**
 * Executes the PUT outputOpenSearchOsdUpdatePut operation.
 *
 * HTTP method: PUT
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const osdId = this.getNodeParameter('osdId', _itemIndex) as string;
	const bodyJson = (this.getNodeParameter('body', _itemIndex, '') as string) || '';
	const body: IDataObject = {};
	if (bodyJson) {
		Object.assign(body, JSON.parse(bodyJson));
	}
	const client = new ApiClient(this);
	const data = (await client.httpPut(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/opensearch/osd/${encodeURIComponent(osdId)}`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

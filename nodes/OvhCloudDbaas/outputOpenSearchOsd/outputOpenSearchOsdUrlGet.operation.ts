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
	];
}

/**
 * Executes the GET outputOpenSearchOsdUrlGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/opensearch/osd/{osdId}/url
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const osdId = this.getNodeParameter('osdId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/opensearch/osd/${encodeURIComponent(osdId)}/url`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

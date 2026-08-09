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
			displayName: 'Token ID',
			name: 'tokenId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The tokenId identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the DELETE tokenDeleteDelete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dbaas/logs/{serviceName}/token/{tokenId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const tokenId = this.getNodeParameter('tokenId', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete(`/dbaas/logs/${encodeURIComponent(serviceName)}/token/${encodeURIComponent(tokenId)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

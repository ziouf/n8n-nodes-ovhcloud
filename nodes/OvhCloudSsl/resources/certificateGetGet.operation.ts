import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Certificate ID',
			name: 'certificateId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Get SSL certificate details
 *
 * HTTP method: GET
 * Endpoint: /ssl/{serviceName}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const certificateId = this.getNodeParameter('certificateId', _itemIndex) as string;
	const data = (await client.httpGet(`/ssl/${certificateId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

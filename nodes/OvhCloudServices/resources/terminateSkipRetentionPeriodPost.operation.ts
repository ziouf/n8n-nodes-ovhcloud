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
		}

	];
}

/**
 * Executes the Post SkipRetentionPeriod operation.
 *
 * HTTP method: POST
 * Endpoint: /services/{serviceName}/terminate/skipRetentionPeriod
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const client = new ApiClient(this);
	const data = (await client.httpPost(`/services/${encodeURIComponent(serviceName)}/terminate/skipRetentionPeriod`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

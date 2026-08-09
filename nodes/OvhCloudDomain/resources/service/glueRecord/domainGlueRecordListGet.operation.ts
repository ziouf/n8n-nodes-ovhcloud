import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

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
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '',
			description: 'Filter the value of host property',
			displayOptions,
		},
	];
}

/**
 * Executes the List of glue records operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/glueRecord
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const qs: IDataObject = {};
		const host = this.getNodeParameter('host', _itemIndex, '') as string;
		if (host !== '' && host !== undefined) qs['host'] = host;

	const data = (await client.httpGet(`/domain/${encodeURIComponent(serviceName)}/glueRecord`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

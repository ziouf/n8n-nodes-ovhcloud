import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDomainNames',
				displayName: 'Service Name',
				description: 'The service name',
				placeholder: 'example.com',
			}),
			displayOptions,
		},
		{
			displayName: 'Keys',
			name: 'keys',
			type: 'json',
			default: '',
			required: true,
			description: 'New Keys',
			displayOptions,
		},
	];
}

/**
 * Executes the Update DS records operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/dsRecord
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const keys = this.getNodeParameter('keys', _itemIndex, '') as string;
		if (keys !== '') body['keys'] = JSON.parse(keys);

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/dsRecord`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

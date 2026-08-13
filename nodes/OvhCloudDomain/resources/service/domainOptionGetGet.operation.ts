import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Option',
			name: 'option',
			type: 'string',
			default: '',
			required: true,
			description: 'The option identifier',
			displayOptions,
		},
		{
			...serviceNameLocator({
				searchListMethod: 'getDomainNames',
				displayName: 'Service Name',
				description: 'The service name',
				placeholder: 'example.com',
			}),
			displayOptions,
		},
	];
}

/**
 * Executes the Get details on this domain option operation.
 *
 * HTTP method: GET
 * Endpoint: /domain/{serviceName}/option/{option}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const option = this.getNodeParameter('option', _itemIndex) as string;
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const data = (await client.httpGet(`/domain/${encodeURIComponent(serviceName)}/option/${encodeURIComponent(option)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

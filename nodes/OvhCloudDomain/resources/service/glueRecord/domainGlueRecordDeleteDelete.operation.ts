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
			displayName: 'Host',
			name: 'host',
			type: 'string',
			default: '',
			required: true,
			description: 'The host identifier',
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
 * Executes the Delete the glue record operation.
 *
 * HTTP method: DELETE
 * Endpoint: /domain/{serviceName}/glueRecord/{host}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const host = this.getNodeParameter('host', _itemIndex) as string;
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const data = (await client.httpDelete(`/domain/${encodeURIComponent(serviceName)}/glueRecord/${encodeURIComponent(host)}`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
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
 * Executes the Relaunch the task operation.
 *
 * HTTP method: POST
 * Endpoint: /domain/{serviceName}/task/{id}/relaunch
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const id = this.getNodeParameter('id', _itemIndex) as string;
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const data = (await client.httpPost(`/domain/${encodeURIComponent(serviceName)}/task/${encodeURIComponent(id)}/relaunch`)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

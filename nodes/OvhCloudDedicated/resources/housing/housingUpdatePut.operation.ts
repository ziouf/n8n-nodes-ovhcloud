import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions) {
	return [
				{
					...serviceNameLocator({
						searchListMethod: 'housingListGet',
						displayName: 'Housing Service Name',
						description: '',
						placeholder: 'h12345678.ovh.net',
					}),
					displayOptions,
				},
		{
			displayName: 'Housing Properties',
			name: 'housing',
			type: 'json',
			default: '{}',
			description: 'New housing properties to update',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Housing operation.
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/housing/{serviceName}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const housing = this.getNodeParameter('housing', _itemIndex ?? 0) as IDataObject;
	await client.httpPut(`/dedicated/housing/${serviceName}`, housing);
	return this.helpers.returnJsonArray([{ serviceName, success: true }]);
}

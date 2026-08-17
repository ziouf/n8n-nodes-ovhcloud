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
			displayName: 'Bandwidth',
			name: 'bandwidth',
			type: 'string',
			default: '',
			required: true,
			description: 'The bandwidth value (e.g. 100, 1000)',
			placeholder: 'e.g. 1000',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Housing Bandwidth operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/housing/{serviceName}/bandwidth
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const bandwidth = (this.getNodeParameter('bandwidth', _itemIndex ?? 0) as string) || '';

	const body: IDataObject = { bandwidth };
	const data = (await client.httpPost(
		`/dedicated/housing/${serviceName}/bandwidth`,
		body,
	)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions) {
	return [
				{
					...serviceNameLocator({
						searchListMethod: 'nashaListGet',
						displayName: 'Nasha Service Name',
						description: 'The Nasha (NAS) service name (e.g. ns12345678.ovh.net)',
						placeholder: 'ns12345678.ovh.net',
					}),
					displayOptions,
				},
		{
			displayName: 'Share ID',
			name: 'shareId',
			type: 'string',
			default: '',
			required: true,
			description: 'The share identifier',
			placeholder: 'e.g. 123456',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Share operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/share/{shareId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const shareId = (this.getNodeParameter('shareId', _itemIndex ?? 0) as string) || '';
	const data = (await client.httpGet(`/dedicated/nasha/${serviceName}/share/${shareId}`)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

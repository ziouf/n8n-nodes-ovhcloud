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
			...serviceNameLocator({
				searchListMethod: 'getDomainNames',
				displayName: 'Service Name',
				description: 'The service name',
				placeholder: 'example.com',
			}),
			displayOptions,
		},
		{
			displayName: 'Renew',
			name: 'renew',
			type: 'json',
			default: '',
			description: 'Way of handling the renew',
			displayOptions,
		},
	];
}

/**
 * Executes the Update service information operation.
 *
 * HTTP method: PUT
 * Endpoint: /domain/{serviceName}/serviceInfos
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
		const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const body: IDataObject = {};
		const renew = this.getNodeParameter('renew', _itemIndex, '') as string;
		if (renew !== '') body['renew'] = JSON.parse(renew);

	const data = (await client.httpPut(`/domain/${encodeURIComponent(serviceName)}/serviceInfos`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

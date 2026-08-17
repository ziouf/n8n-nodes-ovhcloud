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
			displayName: 'vRack',
			name: 'vrack',
			type: 'string',
			default: '',
			required: true,
			description: 'The vRack name to bind bandwidth to',
			placeholder: 'e.g. my-vrack',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Housing Bandwidth vRack operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/housing/{serviceName}/bandwidthvRack
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const vrack = (this.getNodeParameter('vrack', _itemIndex ?? 0) as string) || '';

	const body: IDataObject = { vrack };
	const data = (await client.httpPost(
		`/dedicated/housing/${serviceName}/bandwidthvRack`,
		body,
	)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

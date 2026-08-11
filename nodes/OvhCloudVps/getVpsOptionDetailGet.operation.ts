import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { serviceNameLocator } from '../../shared/nodes/locators';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getVpsServices',
				displayName: 'VPS Service Name',
				description: 'The VPS service name (e.g. vps1234567.ovh.net)',
				placeholder: 'vps1234567.ovh.net',
			}),
			displayOptions,
		},
		{
			displayName: 'Option',
			name: 'option',
			type: 'string',
			default: '',
			required: true,
			description: 'The Option parameter',
			displayOptions,
		},
	];
}

/**
 * Get option type details
 *
 * HTTP method: GET
 * Endpoint: /vps/{serviceName}/option/{option}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const option = this.getNodeParameter('option', itemIndex ?? 0) as string;

	const data = (await client.httpGet(`/vps/${serviceName}/option/${option}`)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID parameter',
			displayOptions,
		},
		{
			displayName: 'Software ID',
			name: 'softwareId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Software ID parameter',
			displayOptions,
		},
	];
}

/**
 * Get software details for a template
 *
 * HTTP method: GET
 * Endpoint: /vps/{serviceName}/templates/{id}/software/{softwareId}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex!, '', {
		extractValue: true,
	}) as string;
	const id = this.getNodeParameter('id', _itemIndex!) as string;
	const softwareId = this.getNodeParameter('softwareId', _itemIndex!) as string;

	const data = (await client.httpGet(
		`/vps/${serviceName}/templates/${id}/software/${softwareId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

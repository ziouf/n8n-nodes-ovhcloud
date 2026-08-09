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
			displayName: 'Ip Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The Ip Block parameter',
			displayOptions,
		},
	];
}

/**
 * Update an IP access rule for the VPS backup FTP
 *
 * HTTP method: PUT
 * Endpoint: /vps/{serviceName}/backupftp/access/{ipBlock}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex!, '', {
		extractValue: true,
	}) as string;
	const ipBlock = this.getNodeParameter('ipBlock', _itemIndex!) as string;

	const data = (await client.httpPut(
		`/vps/${serviceName}/backupftp/access/${ipBlock}`,
		{},
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

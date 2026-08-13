import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../shared/nodes/locators';

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
 * Delete an IP access rule for the VPS backup FTP
 *
 * HTTP method: DELETE
 * Endpoint: /vps/{serviceName}/backupftp/access/{ipBlock}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const ipBlock = this.getNodeParameter('ipBlock', itemIndex ?? 0) as string;

	const data = (await client.httpDelete(
		`/vps/${serviceName}/backupftp/access/${ipBlock}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

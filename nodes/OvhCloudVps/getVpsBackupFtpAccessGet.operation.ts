import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'VPS Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The vps service name (e.g. vps1234567.ovh.net)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getVpsServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'vps1234567.ovh.net',
				},
			],
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
 * Get an IP access rule for the VPS backup FTP
 *
 * HTTP method: GET
 * Endpoint: /vps/{serviceName}/backupftp/access/{ipBlock}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex!, '', { extractValue: true }) as string;
	const ipBlock = this.getNodeParameter('ipBlock', itemIndex!) as string;

	const data = (await client.httpGet(`/vps/${serviceName}/backupftp/access/${ipBlock}`)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}

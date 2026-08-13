import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'License Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The WorkLight license service name (e.g. license-1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getWorkLightLicenses', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'license-1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Destination IP',
			name: 'destinationIp',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP on which you want to move the license (e.g. 192.168.1.1)',
			displayOptions,
		},
	];
}

/**
 * Move a license to another IP.
 *
 * HTTP method: POST
 * Endpoint: /license/worklight/{serviceName}/changeIp
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const destinationIp = this.getNodeParameter('destinationIp', _itemIndex ?? 0) as string;
	const data = (await client.httpPost(
		`/license/worklight/${encodeURIComponent(serviceName)}/changeIp`,
		{ destinationIp },
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

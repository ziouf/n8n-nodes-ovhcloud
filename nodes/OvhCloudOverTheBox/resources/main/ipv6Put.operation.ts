import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OverTheBox Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The internal name of your OverTheBox offer (e.g. overthebox-12345)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getOverTheBoxServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'overthebox-12345',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Enabled',
			name: 'enabled',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether iPv6 is enabled',
			displayOptions,
		},
	];
}

/**
 * Change the status of IPv6 on this service.
 *
 * HTTP method: PUT
 * Endpoint: /overTheBox/{serviceName}/ipv6
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const enabled = this.getNodeParameter('enabled', 0, true) as boolean;

	const body: IDataObject = {};
	if (enabled !== undefined) body.enabled = enabled;
	const data = (await client.httpPut(
		`/overTheBox/${encodeURIComponent(serviceName)}/ipv6`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

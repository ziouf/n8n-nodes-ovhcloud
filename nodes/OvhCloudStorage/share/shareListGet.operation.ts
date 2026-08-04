import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'NetApp Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The NetApp service name (uuid), e.g. aaaa-bbbb-cccc-dddd',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getNetAppServices', searchable: true },
				},
				{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
			],
			displayOptions,
		},
		{
			displayName: 'Detail',
			name: 'detail',
			type: 'boolean',
			default: false,
			description: 'Whether get detailed information about each share',
			displayOptions,
		},
		{
			displayName: 'Mount Point Name',
			name: 'mountPointName',
			type: 'string',
			default: '',
			description: 'If specified, returns only shares with given mount point name',
			displayOptions,
		},
	];
}

/**
 * Executes the List available shares operation.
 *
 * HTTP method: GET
 * Endpoint: /storage/netapp/{serviceName}/share
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
				extractValue: true,
			}) as string;
	const detail = this.getNodeParameter('detail', itemIndex, '') as string;
	const mountPointName = this.getNodeParameter('mountPointName', itemIndex, '') as string;
	const qs: IDataObject = {};
	if (detail !== '') { qs.detail = detail; }
	if (mountPointName !== '') { qs.mountPointName = mountPointName; }
	const data = (await client.httpGet(`/storage/netapp/${encodeURIComponent(serviceName)}/share`, qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

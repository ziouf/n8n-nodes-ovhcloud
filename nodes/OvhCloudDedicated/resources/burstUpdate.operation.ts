import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Updates the burst (over-provisioning) configuration for a dedicated server. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Dedicated Server Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'ns123456.ip-123-45-678.eu',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Burst Type',
			name: 'burstType',
			type: 'options',
			options: [
				{ name: 'Off', value: 'off' },
				{ name: 'Low', value: 'low' },
				{ name: 'Medium', value: 'medium' },
				{ name: 'High', value: 'high' },
			],
			default: 'off',
			description:
				'The burst over-provisioning level for CPU and memory (optional). If not provided, current setting is preserved.',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const burstType = (this.getNodeParameter('burstType', _itemIndex ?? 0, '') as string) || undefined;
	const body: IDataObject = {};
	if (burstType !== undefined && burstType !== '') {
		body.burstType = burstType;
	}
	const data = (await client.httpPut(
		`/dedicated/server/${serviceName}/burst`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

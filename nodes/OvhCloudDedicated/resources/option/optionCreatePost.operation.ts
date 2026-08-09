import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
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
			displayName: 'Option',
			name: 'option',
			type: 'options',
			options: [
				{ name: 'AntiDDoS Basic', value: 'antiDDoSBasic' },
				{ name: 'Monitoring', value: 'monitoring' },
				{ name: 'Rescue Mode', value: 'rescueMode' },
			],
			default: 'antiDDoSBasic',
			required: true,
			description: 'The option to add (e.g. antiDDoSBasic, monitoring, rescueMode)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Option operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/option/{option}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const option = (this.getNodeParameter('option', _itemIndex ?? 0) as string) || '';
	const data = (await client.httpPost(
		`/dedicated/server/${serviceName}/option/${option}`,
		{},
	)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

/** @warning IRREVERSIBLE OPERATION: This releases a dedicated server option permanently. The service will no longer have access to this option and any associated data may be lost. */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			description:
				'The option to release from the dedicated server (e.g. antiDDoSBasic, monitoring)',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const option = this.getNodeParameter('option', 0, '') as string;
	await client.httpDelete(`/dedicated/server/${serviceName}/option/${option}`);
	return this.helpers.returnJsonArray([{ serviceName, option }]);
}

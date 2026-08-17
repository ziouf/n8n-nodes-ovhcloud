/** @warning IRREVERSIBLE OPERATION: This releases a dedicated server option permanently. The service will no longer have access to this option and any associated data may be lost. */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
				{
			...serviceNameLocator({
			searchListMethod: 'getDedicatedServerServices',
			displayName: 'Dedicated Server Service Name',
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			placeholder: 'ns123456.ip-123-45-678.eu',
			}),
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

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const option = this.getNodeParameter('option', _itemIndex ?? 0, '') as string;
	await client.httpDelete(`/dedicated/server/${serviceName}/option/${option}`);
	return this.helpers.returnJsonArray([{ serviceName, option }]);
}

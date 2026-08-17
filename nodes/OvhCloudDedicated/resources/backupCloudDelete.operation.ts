/** @warning IRREVERSIBLE OPERATION: This deactivates and removes cloud backup from the dedicated server. All backed-up data will be lost permanently. */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This action is destructive and cannot be undone.', displayOptions),
				{
					...serviceNameLocator({
						searchListMethod: 'getDedicatedServerServices',
						displayName: 'Dedicated Server Service Name',
						description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
						placeholder: 'ns123456.ip-123-45-678.eu',
					}),
					displayOptions,
				},
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	await client.httpDelete(`/dedicated/server/${serviceName}/features/backupCloud`);
	return this.helpers.returnJsonArray([{ message: 'Cloud backup deactivated' }]);
}

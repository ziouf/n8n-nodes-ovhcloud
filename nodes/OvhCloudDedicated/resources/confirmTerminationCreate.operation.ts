/** @warning IRREVERSIBLE OPERATION: This confirms termination of the dedicated server, resulting in permanent data loss that cannot be recovered. */
import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently confirm the termination of the confirm termination create.', displayOptions),
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
	await client.httpPost(`/dedicated/server/${serviceName}/confirmTermination`, {});
	return this.helpers.returnJsonArray([{ message: 'Server termination confirmed' }]);
}

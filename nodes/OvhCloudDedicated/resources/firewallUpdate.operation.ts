import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

/** Updates the firewall configuration for a dedicated server. */
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
		{ displayName: 'Rules', name: 'rules', type: 'multiOptions', options: [
			{ name: 'Allow All', value: 'allowAll' }, { name: 'Deny All', value: 'denyAll' }, { name: 'Default Rules', value: 'defaultRules' }, { name: 'Custom Rules', value: 'customRules' },
		], default: ['allowAll'], description: "Firewall rules to apply (select one or more)", displayOptions, },
	];
}

export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const rules = (this.getNodeParameter('rules', _itemIndex ?? 0, ['allowAll']) as string[]) || ['allowAll'];
	const data = (await client.httpPut(`/dedicated/server/${serviceName}/features/firewall`, { body: { rules } })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

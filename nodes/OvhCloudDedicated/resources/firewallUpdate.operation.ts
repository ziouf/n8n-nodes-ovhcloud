import type { IDataObject, IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

/** Updates the firewall configuration for a dedicated server. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{ displayName: 'Dedicated Server Service Name', name: 'serviceName', type: 'resourceLocator', default: { mode: 'list', value: '' }, required: true, description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)', modes: [
			{ displayName: 'From List', name: 'list', type: 'list', typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true } },
			{ displayName: 'By Name', name: 'name', type: 'string', placeholder: 'ns123456.ip-123-45-678.eu' },
		], displayOptions, },
		{ displayName: 'Rules', name: 'rules', type: 'multiOptions', options: [
			{ name: 'Allow All', value: 'allowAll' }, { name: 'Deny All', value: 'denyAll' }, { name: 'Default Rules', value: 'defaultRules' }, { name: 'Custom Rules', value: 'customRules' },
		], default: ['allowAll'], description: "Firewall rules to apply (select one or more)", displayOptions, },
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const rules = (this.getNodeParameter('rules', 0, ['allowAll']) as string[]) || ['allowAll'];
	const data = (await client.httpPut(`/dedicated/server/${serviceName}/features/firewall`, { body: { rules } })) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

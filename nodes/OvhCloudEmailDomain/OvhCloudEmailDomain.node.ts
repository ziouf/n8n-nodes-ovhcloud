import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode, executeTemplate } from '../../shared/nodes';

import { getEmailDomains } from '../../shared/methods';
export class OvhCloudEmailDomain extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Email Domain',
		name: 'ovhCloudEmailDomain',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["emailDomainOperation"]}}',
		description: 'Manage your OVHcloud Email Domain services via the /email/domain API v1',
		defaults: { name: 'OVH Cloud Email Domain' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})] };
	methods = { listSearch: { getEmailDomains } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'emailDomain', operationParam: 'emailDomainOperation' } });
	}
}

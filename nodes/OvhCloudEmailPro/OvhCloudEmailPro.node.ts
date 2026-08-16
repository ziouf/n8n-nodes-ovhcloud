import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

export class OvhCloudEmailPro extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Email Pro',
		name: 'ovhCloudEmailPro',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["emailProOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage your OVHcloud Email Pro services via the /email/pro API v1',
		defaults: { name: 'OVH Cloud Email Pro' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'emailPro', operationParam: 'emailProOperation' } });
	}
}

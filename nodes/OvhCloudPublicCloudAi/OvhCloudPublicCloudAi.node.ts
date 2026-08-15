import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getPublicCloudProjects } from '../../shared/methods';
import { BaseNode } from '../../shared/nodes';

export class OvhCloudPublicCloudAi extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Public Cloud AI',
		name: 'ovhCloudPublicCloudAi',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["publicCloudAiOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description:
			'Manage OVHcloud Public Cloud AI services (apps, jobs, notebooks) via /publicCloud API v2',
		defaults: { name: 'OVH Cloud Public Cloud AI' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})] };

	methods = { listSearch: { getPublicCloudProjects } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return super.runTemplate.call(this, execute, { resource: 'publicCloudAi', operationParam: 'publicCloudAiOperation' });
	}
}

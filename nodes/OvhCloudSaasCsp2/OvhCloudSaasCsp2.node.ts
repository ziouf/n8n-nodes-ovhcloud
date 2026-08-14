import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode } from '../../shared/nodes';
import { getSaasCsp2Services } from '../../shared/methods';
import { description, execute } from './index';

export class OvhCloudSaasCsp2 extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud SaaS CSP2',
		name: 'ovhCloudSaasCsp2',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["saasCsp2Operation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud Office 365 CSP2 tenants via the /saas/csp2 API v1',
		defaults: { name: 'OVH Cloud SaaS CSP2' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	methods = { listSearch: { getSaasCsp2Services } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return super.runTemplate.call(this, execute, { resource: 'saasCsp2', operationParam: 'saasCsp2Operation' });
	}
}

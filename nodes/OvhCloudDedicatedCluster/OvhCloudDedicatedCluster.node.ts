import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

import { getDedicatedClusterServices } from '../../shared/methods';
export class OvhCloudDedicatedCluster implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Cluster',
		name: 'ovhCloudDedicatedCluster',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["dedicatedClusterOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description:
			'Manage your OVHcloud Dedicated Cluster services via the /dedicated/cluster API v1',
		defaults: { name: 'OVH Cloud Dedicated Cluster' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})] };
	methods = { listSearch: { getDedicatedClusterServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'dedicatedCluster', operationParam: 'dedicatedClusterOperation' } });
	}
}

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

import { getDedicatedCephServices } from '../../shared/methods';
export class OvhCloudDedicatedCeph extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Ceph',
		name: 'ovhCloudDedicatedCeph',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["dedicatedCephOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage your OVHcloud Dedicated Ceph services via the /dedicated/ceph API v1',
		defaults: { name: 'OVH Cloud Dedicated Ceph' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})] };
	methods = { listSearch: { getDedicatedCephServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'dedicatedCeph', operationParam: 'dedicatedCephOperation' } });
	}
}

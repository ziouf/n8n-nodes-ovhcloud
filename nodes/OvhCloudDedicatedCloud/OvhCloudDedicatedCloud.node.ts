import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode } from '../../shared/nodes';

import { getDedicatedCloudServices } from '../../shared/methods';
export class OvhCloudDedicatedCloud extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Dedicated Cloud',
		name: 'ovhCloudDedicatedCloud',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["dedicatedCloudOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage VMware on OVHcloud Dedicated Cloud infrastructure',
		defaults: {
			name: 'OVH Dedicated Cloud' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: OvhCloudApiSecretName,
				required: true },
		],
		properties: [...description({})] };
	methods = { listSearch: { getDedicatedCloudServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return super.runTemplate.call(this, execute, { resource: 'dedicatedCloud', operationParam: 'dedicatedCloudOperation' });
	}
}

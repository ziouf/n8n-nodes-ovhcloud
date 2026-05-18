import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getDedicatedNashaServices } from '../../shared/methods/getDedicatedNashaServices.method';
import { BaseNode } from '../../shared/nodes/BaseNode';

export class OvhCloudDedicatedNasha extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Nasha',
		name: 'ovhCloudDedicatedNasha',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["dedicatedNashaOperation"]}}',
		description: 'Manage OVH Dedicated Nasha services',
		defaults: {
			name: 'OVH Cloud Dedicated Nasha',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: OvhCloudApiSecretName,
				required: true,
			},
		],
		properties: [
			...description({}),
		],
	}
	methods = {
		listSearch: {
			getDedicatedNashaServices,
		},
	}

	async executeOperations(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
		return execute.call(this);
	}
}

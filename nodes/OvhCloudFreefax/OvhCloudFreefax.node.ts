import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getServiceIds } from '../../shared/methods/getServiceIds.method';
import { BaseNode } from '../../shared/nodes/BaseNode';

export class OvhCloudFreefax extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Freefax',
		name: 'ovhCloudFreefax',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["freefaxOperation"]}}',
		description: 'Manage OVH Freefax services',
		defaults: {
			name: 'OVH Cloud Freefax',
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
			getServiceIds,
		},
	}

	async executeOperations(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
		return execute.call(this);
	}
}

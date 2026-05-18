import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getVpsServices } from '../../shared/methods/getVpsServices.method';
import { BaseNode } from '../../shared/nodes/BaseNode';

export class OvhCloudVps extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud VPS',
		name: 'ovhCloudVps',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["vpsOperation"]}}',
		description: 'Manage OVH VPS services',
		defaults: {
			name: 'OVH Cloud VPS',
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
			getVpsServices,
		},
	}

	async executeOperations(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
		return execute.call(this);
	}
}

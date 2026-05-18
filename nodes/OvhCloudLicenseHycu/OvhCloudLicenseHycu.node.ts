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

export class OvhCloudLicenseHycu extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud License Hycu',
		name: 'ovhCloudLicenseHycu',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["licenseHycuOperation"]}}',
		description: 'Manage OVH License Hycu services',
		defaults: {
			name: 'OVH Cloud License Hycu',
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

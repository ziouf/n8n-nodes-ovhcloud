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

export class OvhCloudLicenseDirectadmin extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud License Directadmin',
		name: 'ovhCloudLicenseDirectadmin',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["licenseDirectadminOperation"]}}',
		description: 'Manage OVH License Directadmin services',
		defaults: {
			name: 'OVH Cloud License Directadmin',
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

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode } from '../../shared/nodes';

export class OvhCloudVrackServices extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud vRack Services',
		name: 'ovhCloudVrackServices',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["vrackServicesOperation"]}}',
		description: 'Manage OVHcloud vRack Services via /vrackServices API v2',
		defaults: {
			name: 'OVH Cloud vRack Services',
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
		properties: [...description({})],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return super.runTemplate.call(this, execute, {
			resource: 'vrackservices',
			operationParam: 'vrackServicesOperation',
		});
	}
}

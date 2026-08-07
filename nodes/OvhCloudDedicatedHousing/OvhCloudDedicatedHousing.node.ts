import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate } from '../../shared/nodes/BaseNode';
import { description, execute } from './index';

export class OvhCloudDedicatedHousing extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Housing',
		name: 'ovhCloudDedicatedHousing',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={$parameter["dedicatedHousingOperation"]}',
		description: 'Manage your OVHcloud Dedicated Housing services via the /dedicated/housing API v1',
		defaults: { name: 'OVH Cloud Dedicated Housing' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute);
	}
}

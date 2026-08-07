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

export class OvhCloudDedicatedCeph extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Ceph',
		name: 'ovhCloudDedicatedCeph',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={$parameter["dedicatedCephOperation"]}',
		description: 'Manage your OVHcloud Dedicated Ceph services via the /dedicated/ceph API v1',
		defaults: { name: 'OVH Cloud Dedicated Ceph' },
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

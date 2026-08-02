import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate } from '../../shared/nodes/BaseNode';
import { getOverTheBoxServices } from '../../shared/methods/getOverTheBoxServices.method';
import { description, execute } from './index';

export class OvhCloudOverTheBox extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud OverTheBox',
		name: 'ovhCloudOverTheBox',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["overTheBoxOperation"]}}',
		description: 'Manage OVHcloud OverTheBox services via the /overTheBox API v1',
		defaults: { name: 'OVH Cloud OverTheBox' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()],
	};

	methods = { listSearch: { getOverTheBoxServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute);
	}
}

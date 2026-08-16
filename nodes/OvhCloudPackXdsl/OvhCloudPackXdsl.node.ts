import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { getPackXdslServices } from '../../shared/methods';
import { executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

export class OvhCloudPackXdsl implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Pack Xdsl',
		name: 'ovhCloudPackXdsl',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["packXdslOperation"]}}',
		description: 'Manage OVHcloud Pack Xdsl services via the /pack/xdsl API v1',
		defaults: { name: 'OVH Cloud Pack Xdsl' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	methods = { listSearch: { getPackXdslServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'packXdsl', operationParam: 'packXdslOperation' } });
	}
}

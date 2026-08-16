import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { executeTemplate } from '../../shared/nodes';

export class OvhCloudNetworkDefense implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Network Defense',
		name: 'ovhCloudNetworkDefense',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["networkDefenseOperation"]}}',
		description: 'Manage OVHcloud Network Defense via /networkDefense API v2',
		defaults: {
			name: 'OVH Cloud Network Defense' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: OvhCloudApiSecretName,
				required: true },
		],
		properties: [...description({})] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'networkdefense', operationParam: 'networkDefenseOperation' } });
	}
}

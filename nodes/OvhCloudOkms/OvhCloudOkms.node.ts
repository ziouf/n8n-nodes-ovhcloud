import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { executeTemplate } from '../../shared/nodes';

export class OvhCloudOkms implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud OKMS',
		name: 'ovhCloudOkms',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["okmsOperation"]}}',
		description: 'Manage OVHcloud OKMS services via /okms API v2',
		defaults: {
			name: 'OVH Cloud OKMS' },
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
		return executeTemplate.call(this, execute, { errorContext: { resource: 'okms', operationParam: 'okmsOperation' } });
	}
}

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

export class OvhCloudSecret extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Secret',
		name: 'ovhCloudSecret',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["secretOperation"]}}',
		description: 'Retrieve OVHcloud secrets sent by email via the /secret API v1',
		defaults: { name: 'OVH Cloud Secret' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'secret', operationParam: 'secretOperation' } });
	}
}

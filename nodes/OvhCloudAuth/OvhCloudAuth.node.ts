import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

export class OvhCloudAuth implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Auth',
		name: 'ovhCloudAuth',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["authOperation"]}}',
		description:
			'Manage OVHcloud API credentials, authentication and server time via the /auth API v1',
		defaults: { name: 'OVH Cloud Auth' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'auth', operationParam: 'authOperation' } });
	}
}

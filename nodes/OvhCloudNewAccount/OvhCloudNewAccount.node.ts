import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

export class OvhCloudNewAccount implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud New Account',
		name: 'ovhCloudNewAccount',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["newAccountOperation"]}}',
		description: 'Create and inspect OVHcloud identifiers via the /newAccount API v1',
		defaults: { name: 'OVH Cloud New Account' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'newaccount', operationParam: 'newAccountOperation' } });
	}
}

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

export class OvhCloudStartup implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Startup',
		name: 'ovhCloudStartup',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["startupOperation"]}}',
		description: 'Manage OVHcloud startup registration and status via the /startup API v1',
		defaults: { name: 'OVH Cloud Startup' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'startup', operationParam: 'startupOperation' } });
	}
}

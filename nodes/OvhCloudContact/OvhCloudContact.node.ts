import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { executeTemplate } from '../../shared/nodes';
import { description, execute } from './index';

export class OvhCloudContact implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Contact',
		name: 'ovhCloudContact',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["contactOperation"]}}',
		description: 'Retrieve and send OVHcloud contact forms via the /contact API v1',
		defaults: { name: 'OVH Cloud Contact' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'contact', operationParam: 'contactOperation' } });
	}
}

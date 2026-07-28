import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';

import { description, execute } from './index';
import { BaseNode, executeTemplate } from '../../shared/nodes/BaseNode';
export class OvhCloudHostingWebResource extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Hosting Web Resource',
		name: 'ovhCloudHostingWebResource',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["webResourceOperation"]}}',
		description:
			'Manage OVHcloud v2 Web Hosting resources (websites, attached domains, SSL certificates, users)',
		defaults: { name: 'OVH Cloud Hosting Web Resource' },
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

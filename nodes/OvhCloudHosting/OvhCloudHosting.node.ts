import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getHostingWebServices } from '../../shared/methods/getHostingWebServices.method';
import { BaseNode, executeTemplate } from '../../shared/nodes/BaseNode';

export class OvhCloudHosting extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Hosting Web',
		name: 'ovhCloudHosting',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["hostingOperation"]}}',
		description: 'Manage OVH Cloud Web Hosting services via /hosting/web API',
		defaults: {
			name: 'OVH Cloud Hosting Web',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: OvhCloudApiSecretName,
				required: true,
			},
		],
		properties: [...description({})],
	};

	methods = {
		listSearch: {
			getHostingWebServices,
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute);
	}
}

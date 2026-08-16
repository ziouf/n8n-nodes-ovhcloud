import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { executeTemplate } from '../../shared/nodes';

export class OvhCloudVmwareCloudDirector implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud VMware Cloud Director',
		name: 'ovhCloudVmwareCloudDirector',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["vcdOperation"]}}',
		description: 'Manage OVHcloud VMware Cloud Director via /vmwareCloudDirector API v2',
		defaults: {
			name: 'OVH Cloud VMware Cloud Director' },
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
		return executeTemplate.call(this, execute, { errorContext: { resource: 'vmwareclouddirector', operationParam: 'vcdOperation' } });
	}
}

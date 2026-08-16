import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate } from '../../shared/nodes';
import { getStackServices } from '../../shared/methods';
import { description, execute } from './index';

export class OvhCloudStack extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Stack',
		name: 'ovhCloudStack',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["stackOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud Stack MIS services via the /stack/mis API v1',
		defaults: { name: 'OVH Cloud Stack' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	methods = { listSearch: { getStackServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'stackMis', operationParam: 'stackOperation' } });
	}
}

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { executeTemplate } from '../../shared/nodes';
import { getAllDomServices } from '../../shared/methods';
import { description, execute } from './index';

export class OvhCloudAllDom implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud AllDom',
		name: 'ovhCloudAllDom',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["allDomOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud AllDom services via the /allDom API v1',
		defaults: { name: 'OVH Cloud AllDom' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	methods = { listSearch: { getAllDomServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'alldom', operationParam: 'allDomOperation' } });
	}
}

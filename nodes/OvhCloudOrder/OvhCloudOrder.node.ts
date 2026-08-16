import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode, executeTemplate } from '../../shared/nodes';

export class OvhCloudOrder extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Order',
		name: 'ovhCloudOrder',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["orderOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud orders via /order API v1',
		defaults: { name: 'OVH Cloud Order' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'order', operationParam: 'orderOperation' } });
	}
}

import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode } from '../../shared/nodes';
import { getXdslServices } from '../../shared/methods';
import { description, execute } from './index';

export class OvhCloudXdsl extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Xdsl',
		name: 'ovhCloudXdsl',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["xdslOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud xDSL services via the /xdsl API v1',
		defaults: { name: 'OVH Cloud Xdsl' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	methods = { listSearch: { getXdslServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return super.runTemplate.call(this, execute, { resource: 'xdsl', operationParam: 'xdslOperation' });
	}
}

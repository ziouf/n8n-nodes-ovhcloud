import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode } from '../../shared/nodes';

export class OvhCloudSsl extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud SSL Certificates',
		name: 'ovhCloudSsl',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["sslOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVH Cloud SSL certificates via /ssl API v1 and v2',
		defaults: { name: 'OVH Cloud SSL Certificates' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})] };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return super.runTemplate.call(this, execute, { resource: 'ssl', operationParam: 'sslOperation' });
	}
}

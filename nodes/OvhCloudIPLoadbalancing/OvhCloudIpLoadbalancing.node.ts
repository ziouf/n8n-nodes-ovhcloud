import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode } from '../../shared/nodes';

export class OvhCloudIpLoadbalancing extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH IP Load Balancing',
		name: 'ovhCloudIpLoadbalancing',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["ipLoadbalancingOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage IP Load Balancing services via /ipLoadbalancing API',
		defaults: {
			name: 'OVH IP Load Balancing' },
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
		return super.runTemplate.call(this, execute, { resource: 'iploadbalancing', operationParam: 'ipLoadbalancingOperation' });
	}
}

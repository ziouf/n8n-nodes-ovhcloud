import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate } from '../../shared/nodes';
import { getOvhCloudConnectServices } from '../../shared/methods';
import { description, execute } from './index';

export class OvhCloudOvhCloudConnect extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud OvhCloudConnect',
		name: 'ovhCloudOvhCloudConnect',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["ovhCloudConnectOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud OvhCloud Connect services via the /ovhCloudConnect API v1',
		defaults: { name: 'OVH Cloud OvhCloudConnect' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	methods = { listSearch: { getOvhCloudConnectServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'ovhcloudconnect', operationParam: 'ovhCloudConnectOperation' } });
	}
}

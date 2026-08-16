import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode, executeTemplate } from '../../shared/nodes';
import { getSmsServices } from '../../shared/methods';

export class OvhCloudSms extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud SMS',
		name: 'ovhCloudSms',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["smsOperation"]}}',
		description: 'Manage OVHcloud SMS services via /sms API v1',
		defaults: { name: 'OVH Cloud SMS' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()] };

	methods = { listSearch: { getSmsServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'sms', operationParam: 'smsOperation' } });
	}
}

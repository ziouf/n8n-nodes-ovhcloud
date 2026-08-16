import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { executeTemplate } from '../../shared/nodes';

import { getSupportTicketServices } from '../../shared/methods';
export class OvhCloudSupport implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Support',
		name: 'ovhCloudSupport',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["ovhCloudSupportTicketOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVH Cloud support tickets via /support/tickets API',
		defaults: { name: 'OVH Cloud Support' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})] };
	methods = { listSearch: { getSupportTicketServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, { errorContext: { resource: 'supportTickets', operationParam: 'ovhCloudSupportTicketOperation' } });
	}
}

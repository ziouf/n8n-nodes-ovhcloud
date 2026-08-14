import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { BaseNode, executeTemplate, classifyOperation } from '../../shared/nodes';

import { getDedicatedServerServices } from '../../shared/methods';
export class OvhCloudDedicated extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Server',
		name: 'ovhCloudDedicated',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["dedicatedServerOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description:
			'Manage OVH Cloud Dedicated Server services via /dedicated/server API (GET operations only)',
		defaults: { name: 'OVH Cloud Dedicated Server' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})],
	};
	methods = { listSearch: { getDedicatedServerServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(
							ctx.getNodeParameter('dedicatedServerOperation', itemIndex, { extractValue: true }),
						),
					),
			},
			errorContext: {
				resource: 'dedicated',
				operationParam: 'dedicatedServerOperation',
			},
		});
	}
}

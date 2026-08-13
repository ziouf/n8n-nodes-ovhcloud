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

export class OvhCloudCdn extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud CDN',
		name: 'ovhCloudCdn',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["cdnOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud CDN services via /cdn API v1',
		defaults: {
			name: 'OVH Cloud CDN',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: OvhCloudApiSecretName,
				required: true,
			},
		],
		properties: [...description({})],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(ctx.getNodeParameter('cdnOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'cdn', operationParam: 'cdnOperation' },
		});
	}
}

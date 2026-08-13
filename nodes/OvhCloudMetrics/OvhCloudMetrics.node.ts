import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate, classifyOperation } from '../../shared/nodes';
import { getMetricsServices } from '../../shared/methods/getMetricsServices.method';
import { description, execute } from './index';

export class OvhCloudMetrics extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Metrics',
		name: 'ovhCloudMetrics',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["metricsOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud Metrics services via the /metrics API v1',
		defaults: { name: 'OVH Cloud Metrics' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()],
	};

	methods = { listSearch: { getMetricsServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(ctx.getNodeParameter('metricsOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'metrics', operationParam: 'metricsOperation' },
		});
	}
}

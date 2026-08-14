import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate, classifyOperation } from '../../shared/nodes';
import { getVeeamCloudConnectServices } from '../../shared/methods';
import { description, execute } from './index';

export class OvhCloudVeeamCloudConnect extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Veeam Cloud Connect',
		name: 'ovhCloudVeeamCloudConnect',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["veeamCloudConnectOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud Veeam Cloud Connect services via the /veeamCloudConnect API v1',
		defaults: { name: 'OVH Cloud Veeam Cloud Connect' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()],
	};

	methods = { listSearch: { getVeeamCloudConnectServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(ctx.getNodeParameter('veeamCloudConnectOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'veeamcloudconnect', operationParam: 'veeamCloudConnectOperation' },
		});
	}
}

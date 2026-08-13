import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate, classifyOperation } from '../../shared/nodes';
import { getFreefaxServices } from '../../shared/methods/getFreefaxServices.method';
import { description, execute } from './index';

export class OvhCloudFreefax extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Freefax',
		name: 'ovhCloudFreefax',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["freefaxOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage your OVHcloud Freefax line accounts via the /freefax API v1',
		defaults: { name: 'OVH Cloud Freefax' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()],
	};

	methods = { listSearch: { getFreefaxServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(ctx.getNodeParameter('freefaxOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'freefax', operationParam: 'freefaxOperation' },
		});
	}
}

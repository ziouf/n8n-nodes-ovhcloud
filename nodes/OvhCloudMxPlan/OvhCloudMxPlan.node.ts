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

export class OvhCloudMxPlan extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Mx Plan',
		name: 'ovhCloudMxPlan',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["mxPlanOperation"]}}',
		description: 'Manage your OVHcloud MX Plan (MSS) services via the /email/mxplan API v1',
		defaults: { name: 'OVH Cloud Mx Plan' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(ctx.getNodeParameter('mxPlanOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'emailMxplan', operationParam: 'mxPlanOperation' },
		});
	}
}

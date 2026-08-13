import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode, executeTemplate, classifyOperation } from '../../shared/nodes';
import { description, execute } from './index';

export class OvhCloudDedicatedInstallationTemplate extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Installation Template',
		name: 'ovhCloudDedicatedInstallationTemplate',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={$parameter["dedicatedInstallationTemplateOperation"]}',
		description: 'Manage your OVHcloud Dedicated Installation Templates via the /dedicated/installationTemplate API v1',
		defaults: { name: 'OVH Cloud Dedicated Installation Template' },
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
						String(ctx.getNodeParameter('dedicatedInstallationTemplateOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'dedicatedInstallationtemplate', operationParam: 'dedicatedInstallationTemplateOperation' },
		});
	}
}

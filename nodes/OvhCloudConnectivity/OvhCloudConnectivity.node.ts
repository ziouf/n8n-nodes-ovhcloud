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

export class OvhCloudConnectivity extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Connectivity',
		name: 'ovhCloudConnectivity',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["connectivityOperation"]}}',
		description:
			'Manage OVHcloud connectivity eligibility, search and monitoring via the /connectivity API v1',
		defaults: { name: 'OVH Cloud Connectivity' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(ctx.getNodeParameter('connectivityOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'connectivity', operationParam: 'connectivityOperation' },
		});
	}
}

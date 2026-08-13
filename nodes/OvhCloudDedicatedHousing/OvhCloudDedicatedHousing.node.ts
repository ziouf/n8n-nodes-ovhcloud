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

import { getDedicatedHousingServices } from '../../shared/methods/getDedicatedHousingServices.method';
export class OvhCloudDedicatedHousing extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Housing',
		name: 'ovhCloudDedicatedHousing',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["dedicatedHousingOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description:
			'Manage your OVHcloud Dedicated Housing services via the /dedicated/housing API v1',
		defaults: { name: 'OVH Cloud Dedicated Housing' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})],
	};
	methods = { listSearch: { getDedicatedHousingServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(ctx.getNodeParameter('dedicatedHousingOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'dedicatedHousing', operationParam: 'dedicatedHousingOperation' },
		});
	}
}

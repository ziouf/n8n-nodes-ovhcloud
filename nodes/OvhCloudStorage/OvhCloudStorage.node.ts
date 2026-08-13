import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getNetAppServices } from '../../shared/methods/getNetAppServices.method';
import { BaseNode, executeTemplate, classifyOperation } from '../../shared/nodes';

export class OvhCloudStorage extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Storage',
		name: 'ovhCloudStorage',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["storageOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud NetApp Storage services via /storage/netapp API v1',
		defaults: {
			name: 'OVH Cloud Storage',
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

	methods = { listSearch: { getNetAppServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute, {
			perItemConcurrency: {
				classify: (ctx, itemIndex) =>
					classifyOperation(
						String(ctx.getNodeParameter('storageOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'storageNetapp', operationParam: 'storageOperation' },
		});
	}
}

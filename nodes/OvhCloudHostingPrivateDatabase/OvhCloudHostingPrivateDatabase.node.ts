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

export class OvhCloudHostingPrivateDatabase extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Hosting Private Database',
		name: 'ovhCloudHostingPrivateDatabase',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["hostingPrivateDatabaseOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description:
			'Manage OVHcloud Web Cloud Database (private database) services via /hosting/privateDatabase API v1',
		defaults: { name: 'OVH Cloud Hosting Private Database' },
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
						String(ctx.getNodeParameter('hostingPrivateDatabaseOperation', itemIndex, { extractValue: true })),
					),
			},
			errorContext: { resource: 'hostingPrivatedatabase', operationParam: 'hostingPrivateDatabaseOperation' },
		});
	}
}

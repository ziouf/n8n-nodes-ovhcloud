import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getHostingWebServices } from '../../shared/methods';
import { BaseNode } from '../../shared/nodes';

export class OvhCloudHosting extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Hosting',
		name: 'ovhCloudHosting',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 2,
		subtitle:
			'={{$parameter["apiVersion"] === "v2" ? "v2 API: " + $parameter["hostingOperationV2"] + ($parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "") : "v1 API: " + $parameter["hostingOperation"] + ($parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "")}}',
		description:
			'Manage OVH Cloud Web Hosting services via /hosting/web API v1 and /webhosting API v2',
		defaults: {
			name: 'OVH Cloud Hosting',
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

	methods = {
		listSearch: {
			getHostingWebServices,
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return super.runTemplate.call(this, execute, {
			resource: 'hosting',
			operationParam: 'hostingOperation',
		});
	}
}

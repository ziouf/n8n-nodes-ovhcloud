import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { BaseNode } from '../../shared/nodes';
import { description, execute } from './index';

import { getDedicatedNashaServices } from '../../shared/methods';
export class OvhCloudDedicatedNasha extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Nasha',
		name: 'ovhCloudDedicatedNasha',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["dedicatedNashaOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description:
			'Manage your OVHcloud Dedicated Nasha (NAS) services via the /dedicated/nasha API v1',
		defaults: { name: 'OVH Cloud Dedicated Nasha' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description({})],
	};
	methods = { listSearch: { getDedicatedNashaServices } };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return super.runTemplate.call(this, execute, {
			resource: 'dedicatedNasha',
			operationParam: 'dedicatedNashaOperation',
		});
	}
}

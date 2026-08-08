import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { getClusterHadoopServices } from '../../shared/methods/getClusterHadoopServices.method';
import { BaseNode, executeTemplate } from '../../shared/nodes/BaseNode';
import { description, execute } from './index';

export class OvhCloudClusterHadoop extends BaseNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Cluster Hadoop',
		name: 'ovhCloudClusterHadoop',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle:
			'={{$parameter["clusterHadoopOperation"]}}{{ $parameter["serviceName"] ? ": " + ($parameter["serviceName"].value ?? $parameter["serviceName"]) : "" }}',
		description: 'Manage OVHcloud Cluster Hadoop services via the /cluster/hadoop API v1',
		defaults: { name: 'OVH Cloud Cluster Hadoop' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: OvhCloudApiSecretName, required: true }],
		properties: [...description()],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return executeTemplate.call(this, execute);
	}
	methods = { listSearch: { getClusterHadoopServices } };
}

import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getDedicatedClusterServices } from '../../shared/methods/getDedicatedClusterServices.method';

export class OvhCloudDedicatedCluster implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Cluster',
		name: 'ovhClouddedicatedCluster',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["dedicatedClusterOperation"]}}',
		description: 'Manage OVH Dedicated Cluster services',
		defaults: {
			name: 'OVH Cloud Dedicated Cluster',
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
		properties: [
			...description({}),
		],
	};

	methods = {
		listSearch: {
			getDedicatedClusterServices,
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const result = await execute.call(this);
			returnData.push(...Array.isArray(result) ? result : [result]);
		}

		return [returnData];
	}
}

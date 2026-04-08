import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getDedicatedCephServices } from '../../shared/methods/getDedicatedCephServices.method';

export class OvhCloudDedicatedCeph implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Ceph',
		name: 'ovhCloudDedicatedCeph',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["dedicatedCephOperation"]}}',
		description: 'Manage OVH Dedicated Ceph services',
		defaults: {
			name: 'OVH Cloud Dedicated Ceph',
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
			getDedicatedCephServices,
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

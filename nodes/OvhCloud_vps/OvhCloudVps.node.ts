import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getVpsServices } from '../../shared/methods/getVpsServices.method';

export class OvhCloudVps implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud VPS',
		name: 'ovhCloudvps',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["vpsOperation"]}}',
		description: 'Manage OVH VPS services',
		defaults: {
			name: 'OVH Cloud VPS',
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
			getVpsServices,
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

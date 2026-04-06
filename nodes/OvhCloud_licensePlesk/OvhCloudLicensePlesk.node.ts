import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getServiceIds } from '../../shared/methods/getServiceIds.method';

export class OvhCloudLicensePlesk implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud License Plesk',
		name: 'ovhCloudlicensePlesk',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["licensePleskOperation"]}}',
		description: 'Manage OVH License Plesk services',
		defaults: {
			name: 'OVH Cloud License Plesk',
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
			getServiceIds,
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

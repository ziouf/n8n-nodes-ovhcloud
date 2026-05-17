import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { NodeOperationError } from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { getDedicatedHousingServices } from '../../shared/methods/getDedicatedHousingServices.method';

export class OvhCloudDedicatedHousing implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud Dedicated Housing',
		name: 'ovhCloudDedicatedHousing',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["dedicatedHousingOperation"]}}',
		description: 'Manage OVH Dedicated Housing services',
		defaults: {
			name: 'OVH Cloud Dedicated Housing',
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
			getDedicatedHousingServices,
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			try {
				const result = await execute.call(this);
				returnData.push(...Array.isArray(result) ? result : [result]);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: error instanceof Error ? error.message : String(error) },
						pairedItem: { item: i },
					});
					continue;
				}
				throw new NodeOperationError(this.getNode(), error as Error, { itemIndex: i });
			}
		}

		return [returnData];
	}
}

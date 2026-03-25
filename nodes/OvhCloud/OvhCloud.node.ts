import {
	IExecuteFunctions,
	NodeApiError,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName } from '../../credentials/OvhCloudApi.credentials';
import { getServiceIds, getEmailDomains, getVpsServices } from './methods/index';
import { description as meDescription, execute as meExecute } from './actions/me/index';
import {
	description as servicesDescription,
	execute as servicesExecute,
} from './actions/services/index';
import { description as emailDescription, execute as emailExecute } from './actions/email/index';
import { description as vpsDescription, execute as vpsExecute } from './actions/vps/index';

export class OvhCloud implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud',
		name: 'ovhCloud',
		icon: 'file:../../icons/ovh_vertical.svg',
		group: ['input'],
		version: 2,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Manage OVH Cloud services',
		defaults: {
			name: 'OVH Cloud',
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
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Service',
						value: 'services',
						action: 'Manage OVH Cloud services',
					},
					{
						name: 'Me',
						value: 'me',
						action: 'Manage your OVH account',
					},
					{
						name: 'Email',
						value: 'email',
						action: 'Manage OVH email services',
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'VPS',
						value: 'vps',
						action: 'Manage OVH VPS instances',
					},
				], 
				default: 'services',
			},
			...meDescription({ show: { resource: ['me'] } }),
			...servicesDescription({ show: { resource: ['services'] } }),
			...emailDescription({ show: { resource: ['email'] } }),
			...vpsDescription({ show: { resource: ['vps'] } }),
		],
	};

	methods = {
		listSearch: {
			getServiceIds,
			getEmailDomains,
			getVpsServices,
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0);

		let responseData: INodeExecutionData[];

		switch (resource) {
			case 'me':
				responseData = await meExecute.call(this);
				break;
			case 'services':
				responseData = await servicesExecute.call(this);
				break;
			case 'email':
				responseData = await emailExecute.call(this);
				break;
			case 'vps':
				responseData = await vpsExecute.call(this);
				break;
			default:
				throw new NodeApiError(this.getNode(), {
					message: `The resource "${resource}" cannot be executed directly. Please select an operation to execute.`,
				});
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeGetOptions, description as descriptionGetOptions } from './getOptions.operation';
import { execute as executeGetForms, description as descriptionGetForms } from './getForms.operation';
import { execute as executeGetUpgrades } from './getUpgrades.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'svcOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Forms',
					value: 'getForms',
					action: 'Get forms for service configuration',
				},
				{
					name: 'Get Options',
					value: 'getOptions',
					action: 'Get available options for a service',
				},
				{
					name: 'Get Service',
					value: 'get',
					action: 'Get details of a specific service',
				},
				{
					name: 'Get Upgrades',
					value: 'getUpgrades',
					action: 'Get available upgrades for a service',
				},
				{
					name: 'List Services',
					value: 'list',
					action: 'List all OVH services',
				},
			],
			default: 'list',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'svcType',
			type: 'options',
			options: [
				{
					name: 'Dedicated Ceph',
					value: '/dedicated/ceph',
				},
				{
					name: 'Dedicated Cluster',
					value: '/dedicated/cluster',
				},
				{
					name: 'Dedicated Housing',
					value: '/dedicated/housing',
				},
				{
					name: 'Dedicated Server',
					value: '/dedicated/server',
				},
				{
					name: 'Domain',
					value: '/domain',
				},
				{
					name: 'Email',
					value: '/email/domain',
				},
				{
					name: 'Email Pro',
					value: '/email/pro',
				},
				{
					name: 'Hosting',
					value: '/hosting/web',
				},
			],
			default: '/hosting/web',
			description: 'The type of service to retrieve',
			displayOptions: {
				show: {
					svcOperation: ['get', 'getOptions', 'getForms', 'getUpgrades'],
				},
			},
		},
		{
			displayName: 'Service ID',
			name: 'svcID',
			type: 'resourceLocator',
			default: {
				mode: 'list',
				value: '',
			},
			required: true,
			modes: [
				{
					displayName: 'By ID',
					name: 'id',
					type: 'string',
					placeholder: 'Enter the service ID',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a service ID...',
					typeOptions: {
						searchListMethod: 'getServiceIds',
						searchable: false,
					},
				},
			],
			displayOptions: {
				show: {
					svcOperation: ['get', 'getOptions', 'getForms', 'getUpgrades'],
				},
			},
		},
	];

	return [
		...operationProperties,
		...descriptionList({ ...displayOptions, show: { ...displayOptions?.show, svcOperation: ['list'] } }),
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, svcOperation: ['get'] } }),
		...descriptionGetOptions({ ...displayOptions, show: { ...displayOptions?.show, svcOperation: ['getOptions'] } }),
		...descriptionGetForms({ ...displayOptions, show: { ...displayOptions?.show, svcOperation: ['getForms'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('svcOperation', 0, { extractValue: true });

	this.logger.debug(`Selected operation: ${operation}`);

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getOptions':
			return await executeGetOptions.call(this);
		case 'getForms':
			return await executeGetForms.call(this);
		case 'getUpgrades':
			return await executeGetUpgrades.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "services"`);
}

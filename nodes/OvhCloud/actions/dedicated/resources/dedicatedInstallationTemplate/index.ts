/**
 * @brief DedicatedInstallationTemplate resource operations for n8n node
 *
 * Provides operations for managing OVH Dedicated Installation Templates including:
 * - List all Dedicated Installation Templates for the authenticated account
 * - Get detailed information about a specific Dedicated Installation Template
 * - Get details about available distributions (templateInfos)
 * - Manage partition schemes, hardware RAIDs, and partitions
 *
 * Available operations:
 * - `list`: List all Dedicated Installation Templates
 * - `get`: Get details of a specific Dedicated Installation Template
 * - `getTemplateInfos`: Get details about available distributions
 * - `listPartitionSchemes`: List partition schemes for a template
 * - `getPartitionScheme`: Get details of a specific partition scheme
 * - `listHardwareRaids`: List hardware RAIDs for a partition scheme
 * - `getHardwareRaid`: Get details of a specific hardware RAID
 * - `listPartitions`: List partitions for a partition scheme
 * - `getPartition`: Get details of a specific partition
 *
 * @remarks
 * Dedicated Installation Templates are managed under `/dedicated/installationTemplate` route.
 * Template name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import * as templateInfos from './resources/templateInfos/index';
import * as partitionScheme from './resources/partitionScheme/index';
import * as hardwareRaid from './resources/hardwareRaid/index';
import * as partition from './resources/partition/index';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Dedicated Installation Template Operation',
			name: 'dedicatedInstallationTemplateOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Installation Template',
				},
				{
					name: 'Get Hardware RAID',
					value: 'getHardwareRaid',
					action: 'Get details of a specific hardware RAID',
				},
				{
					name: 'Get Partition',
					value: 'getPartition',
					action: 'Get details of a specific partition',
				},
				{
					name: 'Get Partition Scheme',
					value: 'getPartitionScheme',
					action: 'Get details of a specific partition scheme',
				},
				{
					name: 'Get Template Infos',
					value: 'getTemplateInfos',
					action: 'Get details about available distributions',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Installation Templates',
				},
				{
					name: 'List Hardware RAIDs',
					value: 'listHardwareRaids',
					action: 'List hardware RAIDs for a partition scheme',
				},
				{
					name: 'List Partition Schemes',
					value: 'listPartitionSchemes',
					action: 'List partition schemes for a template',
				},
				{
					name: 'List Partitions',
					value: 'listPartitions',
					action: 'List partitions for a partition scheme',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedInstallationTemplateOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedInstallationTemplateOperation: ['get'] },
		}),
		...templateInfos.descriptionGetTemplateInfos({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedInstallationTemplateOperation: ['getTemplateInfos'],
			},
		}),
		...partitionScheme.descriptionListPartitionSchemes({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedInstallationTemplateOperation: ['listPartitionSchemes'],
			},
		}),
		...partitionScheme.descriptionGetPartitionScheme({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedInstallationTemplateOperation: ['getPartitionScheme'],
			},
		}),
		...hardwareRaid.descriptionListHardwareRaids({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedInstallationTemplateOperation: ['listHardwareRaids'],
			},
		}),
		...hardwareRaid.descriptionGetHardwareRaid({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedInstallationTemplateOperation: ['getHardwareRaid'],
			},
		}),
		...partition.descriptionListPartitions({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedInstallationTemplateOperation: ['listPartitions'],
			},
		}),
		...partition.descriptionGetPartition({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedInstallationTemplateOperation: ['getPartition'],
			},
		}),
	];
}

/**
 * Executes the selected Dedicated Installation Template operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedInstallationTemplateOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getTemplateInfos':
			return await templateInfos.executeGetTemplateInfos.call(this);
		case 'listPartitionSchemes':
			return await partitionScheme.executeListPartitionSchemes.call(this);
		case 'getPartitionScheme':
			return await partitionScheme.executeGetPartitionScheme.call(this);
		case 'listHardwareRaids':
			return await hardwareRaid.executeListHardwareRaids.call(this);
		case 'getHardwareRaid':
			return await hardwareRaid.executeGetHardwareRaid.call(this);
		case 'listPartitions':
			return await partition.executeListPartitions.call(this);
		case 'getPartition':
			return await partition.executeGetPartition.call(this);
	}

	throw new Error(
		`Unsupported operation "${operation}" for resource "dedicatedInstallationTemplate"`,
	);
}

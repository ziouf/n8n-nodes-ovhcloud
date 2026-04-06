/**
 * @brief Nutanix resource operations for n8n node
 *
 * Provides operations for managing OVHcloud Nutanix services including:
 * - List all Nutanix services for the authenticated account
 * - Get detailed information about a specific Nutanix service
 * - Manage cluster availabilities, versions, requirements, nodes, and more
 *
 * Available operations:
 * - `list`: ListNutanix - List all Nutanix services
 * - `get`: GetNutanix - Get details of a specific Nutanix service
 * - `getAvailabilities`: GetAvailabilities - Get cluster availabilities
 * - `getRawAvailabilities`: GetRawAvailabilities - Get raw availabilities
 * - `getAvailableVersions`: GetAvailableVersions - Get available versions
 * - `getRequirements`: GetRequirements - Get requirements
 * - `updateCluster`: UpdateCluster - Update a Nutanix cluster
 * - `changeContact`: ChangeContact - Change contact
 * - `confirmTermination`: ConfirmTermination - Confirm termination
 * - `listNodes`: ListNodes - List nodes
 * - `getNode`: GetNode - Get node details
 * - `reinstallNode`: ReinstallNode - Reinstall a node
 * - `deployNode`: DeployNode - Deploy a node
 * - `terminateNode`: TerminateNode - Terminate a node
 * - `getServiceInfos`: GetServiceInfos - Get service information
 * - `updateServiceInfos`: UpdateServiceInfos - Update service information
 * - `terminate`: Terminate - Terminate cluster
 *
 * @remarks
 * Nutanix services are managed under `/nutanix` route.
 * Service name can be entered manually.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { executeGetAvailabilities, descriptionGetAvailabilities,
	executeGetRawAvailabilities,
	descriptionGetRawAvailabilities } from './resources/availabilities';
import {
	executeGetAvailableVersions,
	descriptionGetAvailableVersions,
} from './resources/availableVersions';
import { executeGetRequirements, descriptionGetRequirements } from './resources/requirements';
import { executeUpdateCluster, descriptionUpdateCluster } from './resources/update';
import { executeChangeContact, descriptionChangeContact } from './resources/changeContact';
import {
	executeConfirmTermination,
	descriptionConfirmTermination,
} from './resources/confirmTermination';
import { executeListNode, descriptionListNode, executeGetNode, descriptionGetNode , executeReinstallNode, descriptionReinstallNode , executeDeployNode, descriptionDeployNode , executeTerminateNode, descriptionTerminateNode  } from './resources/nodes';
import { executeGetServiceInfos, descriptionGetServiceInfos, executeUpdateServiceInfos, descriptionUpdateServiceInfos  } from './resources/serviceInfos';
import { executeTerminate, descriptionTerminate } from './resources/terminate';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Nutanix Operation',
			name: 'nutanixOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Nutanix services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Nutanix service',
				},
				{
					name: 'Get Availabilities',
					value: 'getAvailabilities',
					action: 'Get cluster availabilities',
				},
				{
					name: 'Get Raw Availabilities',
					value: 'getRawAvailabilities',
					action: 'Get raw availabilities',
				},
				{
					name: 'Get Available Versions',
					value: 'getAvailableVersions',
					action: 'Get available versions',
				},
				{
					name: 'Get Requirements',
					value: 'getRequirements',
					action: 'Get requirements',
				},
				{
					name: 'Update Cluster',
					value: 'updateCluster',
					action: 'Update a Nutanix cluster',
				},
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change contact',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination',
				},
				{
					name: 'List Nodes',
					value: 'listNodes',
					action: 'List nodes',
				},
				{
					name: 'Get Node',
					value: 'getNode',
					action: 'Get node details',
				},
				{
					name: 'Reinstall Node',
					value: 'reinstallNode',
					action: 'Reinstall a node',
				},
				{
					name: 'Deploy Node',
					value: 'deployNode',
					action: 'Deploy a node',
				},
				{
					name: 'Terminate Node',
					value: 'terminateNode',
					action: 'Terminate a node',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate cluster',
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
			show: { ...displayOptions?.show, nutanixOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['get'] },
		}),
		...descriptionGetAvailabilities({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['getAvailabilities'] },
		}),
		...descriptionGetRawAvailabilities({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['getRawAvailabilities'] },
		}),
		...descriptionGetAvailableVersions({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['getAvailableVersions'] },
		}),
		...descriptionGetRequirements({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['getRequirements'] },
		}),
		...descriptionUpdateCluster({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['updateCluster'] },
		}),
		...descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['changeContact'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['confirmTermination'] },
		}),
		...descriptionListNode({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['listNodes'] },
		}),
		...descriptionGetNode({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['getNode'] },
		}),
		...descriptionReinstallNode({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['reinstallNode'] },
		}),
		...descriptionDeployNode({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['deployNode'] },
		}),
		...descriptionTerminateNode({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['terminateNode'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['updateServiceInfos'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, nutanixOperation: ['terminate'] },
		}),
	];
}

/**
 * Executes the selected Nutanix operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('nutanixOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getAvailabilities':
			return await executeGetAvailabilities.call(this);
		case 'getRawAvailabilities':
			return await executeGetRawAvailabilities.call(this);
		case 'getAvailableVersions':
			return await executeGetAvailableVersions.call(this);
		case 'getRequirements':
			return await executeGetRequirements.call(this);
		case 'updateCluster':
			return await executeUpdateCluster.call(this);
		case 'changeContact':
			return await executeChangeContact.call(this);
		case 'confirmTermination':
			return await executeConfirmTermination.call(this);
		case 'listNodes':
			return await executeListNode.call(this);
		case 'getNode':
			return await executeGetNode.call(this);
		case 'reinstallNode':
			return await executeReinstallNode.call(this);
		case 'deployNode':
			return await executeDeployNode.call(this);
		case 'terminateNode':
			return await executeTerminateNode.call(this);
		case 'getServiceInfos':
			return await executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await executeUpdateServiceInfos.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "nutanix"`);
}

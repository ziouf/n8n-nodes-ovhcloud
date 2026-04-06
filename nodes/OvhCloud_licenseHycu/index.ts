/**
 * @brief Hycu resource operations for n8n node
 *
 * Provides operations for managing OVH Hycu License services.
 *
 * @remarks
 * Hycu License services are managed under `/license/hycu` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { description as descriptionList, execute as executeList } from './list.operation';
import { description as descriptionGet, execute as executeGet } from './get.operation';
import { descriptionGetServiceInfos as descriptionGetServiceInfos, executeGetServiceInfos as executeGetServiceInfos, descriptionUpdateServiceInfos as descriptionUpdateServiceInfos, executeUpdateServiceInfos as executeUpdateServiceInfos  } from './resources/serviceInfos';
import { descriptionTerminate as descriptionTerminate, executeTerminate as executeTerminate } from './resources/terminate';
import { descriptionConfirmTermination as descriptionConfirmTermination, executeConfirmTermination as executeConfirmTermination } from './resources/confirmTermination';
import { descriptionUpdateService as descriptionUpdateService, executeUpdateService as executeUpdateService } from './resources/update';
import { descriptionActivate as descriptionActivate, executeActivate as executeActivate } from './resources/activate';
import { descriptionGetLicense as descriptionGetLicense, executeGetLicense as executeGetLicense } from './resources/license';
import { descriptionRefresh as descriptionRefresh, executeRefresh as executeRefresh } from './resources/refresh';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'License Hycu Operation',
			name: 'licenseHycuOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Hycu License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Hycu License service',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for a Hycu License',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for a Hycu License',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate a Hycu License service',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a Hycu License service',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update a Hycu License service',
				},
				{
					name: 'Activate',
					value: 'activate',
					action: 'Activate a Hycu License',
				},
				{
					name: 'Get License',
					value: 'getLicense',
					action: 'Get license information for a Hycu License',
				},
				{
					name: 'Refresh',
					value: 'refresh',
					action: 'Refresh a Hycu License',
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
			show: { ...displayOptions?.show, licenseHycuOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['updateServiceInfos'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['terminate'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['confirmTermination'] },
		}),
		...descriptionUpdateService({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['update'] },
		}),
		...descriptionActivate({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['activate'] },
		}),
		...descriptionGetLicense({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['getLicense'] },
		}),
		...descriptionRefresh({
			...displayOptions,
			show: { ...displayOptions?.show, licenseHycuOperation: ['refresh'] },
		}),
	];
}

/**
 * Executes the selected License Hycu operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseHycuOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getServiceInfos':
			return await executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await executeUpdateServiceInfos.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
		case 'confirmTermination':
			return await executeConfirmTermination.call(this);
		case 'update':
			return await executeUpdateService.call(this);
		case 'activate':
			return await executeActivate.call(this);
		case 'getLicense':
			return await executeGetLicense.call(this);
		case 'refresh':
			return await executeRefresh.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseHycu"`);
}

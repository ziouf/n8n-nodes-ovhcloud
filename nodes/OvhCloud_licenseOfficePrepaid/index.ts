/**
 * @brief Office Prepaid resource operations for n8n node
 *
 * Provides operations for managing OVH Office Prepaid License services.
 *
 * @remarks
 * Office Prepaid License services are managed under `/license/officeprepaid` route.
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
import { descriptionChangePassword as descriptionChangePassword, executeChangePassword as executeChangePassword } from './resources/changePassword';
import { descriptionGetParentTenant as descriptionGetParentTenant, executeGetParentTenant as executeGetParentTenant, descriptionUpdateParentTenant as descriptionUpdateParentTenant, executeUpdateParentTenant as executeUpdateParentTenant , descriptionAcceptAgreement as descriptionAcceptAgreement, executeAcceptAgreement as executeAcceptAgreement , descriptionCreateAttestation as descriptionCreateAttestation, executeCreateAttestation as executeCreateAttestation  } from './resources/parentTenant';
import { descriptionListTenantPendingTasks as descriptionListTenantPendingTasks, executeListTenantPendingTasks as executeListTenantPendingTasks, descriptionGetTenantPendingTask as descriptionGetTenantPendingTask, executeGetTenantPendingTask as executeGetTenantPendingTask  } from './resources/tenantPendingTask';
import { descriptionGetTenantUsageStatistics as descriptionGetTenantUsageStatistics, executeGetTenantUsageStatistics as executeGetTenantUsageStatistics } from './resources/tenantUsageStatistics';
import { descriptionUnconfigure as descriptionUnconfigure, executeUnconfigure as executeUnconfigure } from './resources/unconfigure';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'License Office Prepaid Operation',
			name: 'licenseOfficePrepaidOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Office Prepaid License services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an Office Prepaid License service',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for an Office Prepaid License',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for an Office Prepaid License',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate an Office Prepaid License service',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of an Office Prepaid License service',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update an Office Prepaid License service',
				},
				{
					name: 'Change Password',
					value: 'changePassword',
					action: 'Change password for an Office Prepaid License',
				},
				{
					name: 'Get Parent Tenant',
					value: 'getParentTenant',
					action: 'Get parent tenant for an Office Prepaid License',
				},
				{
					name: 'Update Parent Tenant',
					value: 'updateParentTenant',
					action: 'Update parent tenant for an Office Prepaid License',
				},
				{
					name: 'Accept Agreement',
					value: 'acceptAgreement',
					action: 'Accept agreement for parent tenant of an Office Prepaid License',
				},
				{
					name: 'Create Attestation',
					value: 'createAttestation',
					action: 'Create attestation for parent tenant of an Office Prepaid License',
				},
				{
					name: 'List Tenant Pending Tasks',
					value: 'listTenantPendingTasks',
					action: 'List tenant pending tasks for an Office Prepaid License',
				},
				{
					name: 'Get Tenant Pending Task',
					value: 'getTenantPendingTask',
					action: 'Get a specific tenant pending task for an Office Prepaid License',
				},
				{
					name: 'Get Tenant Usage Statistics',
					value: 'getTenantUsageStatistics',
					action: 'Get tenant usage statistics for an Office Prepaid License',
				},
				{
					name: 'Unconfigure',
					value: 'unconfigure',
					action: 'Unconfigure an Office Prepaid License',
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
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['updateServiceInfos'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['terminate'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['confirmTermination'] },
		}),
		...descriptionUpdateService({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['update'] },
		}),
		...descriptionChangePassword({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['changePassword'] },
		}),
		...descriptionGetParentTenant({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['getParentTenant'] },
		}),
		...descriptionUpdateParentTenant({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['updateParentTenant'] },
		}),
		...descriptionAcceptAgreement({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['acceptAgreement'] },
		}),
		...descriptionCreateAttestation({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['createAttestation'] },
		}),
		...descriptionListTenantPendingTasks({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['listTenantPendingTasks'] },
		}),
		...descriptionGetTenantPendingTask({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['getTenantPendingTask'] },
		}),
		...descriptionGetTenantUsageStatistics({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['getTenantUsageStatistics'] },
		}),
		...descriptionUnconfigure({
			...displayOptions,
			show: { ...displayOptions?.show, licenseOfficePrepaidOperation: ['unconfigure'] },
		}),
	];
}

/**
 * Executes the selected License Office Prepaid operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseOfficePrepaidOperation', 0, {
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
		case 'changePassword':
			return await executeChangePassword.call(this);
		case 'getParentTenant':
			return await executeGetParentTenant.call(this);
		case 'updateParentTenant':
			return await executeUpdateParentTenant.call(this);
		case 'acceptAgreement':
			return await executeAcceptAgreement.call(this);
		case 'createAttestation':
			return await executeCreateAttestation.call(this);
		case 'listTenantPendingTasks':
			return await executeListTenantPendingTasks.call(this);
		case 'getTenantPendingTask':
			return await executeGetTenantPendingTask.call(this);
		case 'getTenantUsageStatistics':
			return await executeGetTenantUsageStatistics.call(this);
		case 'unconfigure':
			return await executeUnconfigure.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "licenseOfficePrepaid"`);
}

/**
 * @brief DNS Zone Management resource operations
 *
 * Provides operations for managing DNS zones:
 * - Refresh: Refresh a zone
 * - Reset: Reset a zone
 * - Export: Export a zone
 * - Import: Import a zone
 * - Get SOA: Get SOA record
 * - Update SOA: Update SOA record
 * - Get Status: Get zone status
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeRefresh, description as descriptionRefresh } from './refresh.operation';
import { execute as executeReset, description as descriptionReset } from './reset.operation';
import { execute as executeExport, description as descriptionExport } from './export.operation';
import { execute as executeImport, description as descriptionImport } from './import.operation';
import { execute as executeGetSoa, description as descriptionGetSoa } from './getSoa.operation';
import {
	execute as executeUpdateSoa,
	description as descriptionUpdateSoa,
} from './updateSoa.operation';
import {
	execute as executeGetStatus,
	description as descriptionGetStatus,
} from './getStatus.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DNS Zone Management Operation',
			name: 'dnsZoneManagementOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Export', value: 'export', action: 'Export a zone' },
				{ name: 'Get SOA', value: 'getSoa', action: 'Get SOA record' },
				{ name: 'Get Status', value: 'getStatus', action: 'Get zone status' },
				{ name: 'Import', value: 'import', action: 'Import a zone' },
				{ name: 'Refresh', value: 'refresh', action: 'Refresh a zone' },
				{ name: 'Reset', value: 'reset', action: 'Reset a zone' },
				{ name: 'Update SOA', value: 'updateSoa', action: 'Update SOA record' },
			],
			default: 'refresh',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionRefresh({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneManagementOperation: ['refresh'] },
		}),
		...descriptionReset({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneManagementOperation: ['reset'] },
		}),
		...descriptionExport({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneManagementOperation: ['export'] },
		}),
		...descriptionImport({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneManagementOperation: ['import'] },
		}),
		...descriptionGetSoa({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneManagementOperation: ['getSoa'] },
		}),
		...descriptionUpdateSoa({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneManagementOperation: ['updateSoa'] },
		}),
		...descriptionGetStatus({
			...displayOptions,
			show: { ...displayOptions?.show, dnsZoneManagementOperation: ['getStatus'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dnsZoneManagementOperation', 0, { extractValue: true });

	switch (operation) {
		case 'refresh':
			return await executeRefresh.call(this);
		case 'reset':
			return await executeReset.call(this);
		case 'export':
			return await executeExport.call(this);
		case 'import':
			return await executeImport.call(this);
		case 'getSoa':
			return await executeGetSoa.call(this);
		case 'updateSoa':
			return await executeUpdateSoa.call(this);
		case 'getStatus':
			return await executeGetStatus.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dnsZoneManagement"`);
}

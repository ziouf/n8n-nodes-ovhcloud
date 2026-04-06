/**
 * @brief Domain Service resource operations
 *
 * Provides operations for managing domain service configuration:
 * - Update: Update domain settings
 * - Get Auth Info: Retrieve domain authentication info
 * - Change Contact: Change domain contact
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import {
	execute as executeGetAuthInfo,
	description as descriptionGetAuthInfo,
} from './getAuthInfo.operation';
import {
	execute as executeChangeContact,
	description as descriptionChangeContact,
} from './changeContact.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Domain Service Operation',
			name: 'domainServiceOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Update',
					value: 'update',
					action: 'Update domain settings',
				},
				{
					name: 'Get Auth Info',
					value: 'getAuthInfo',
					action: 'Get domain authentication info',
				},
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change domain contact',
				},
			],
			default: 'update',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, domainServiceOperation: ['update'] },
		}),
		...descriptionGetAuthInfo({
			...displayOptions,
			show: { ...displayOptions?.show, domainServiceOperation: ['getAuthInfo'] },
		}),
		...descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, domainServiceOperation: ['changeContact'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('domainServiceOperation', 0, { extractValue: true });

	switch (operation) {
		case 'update':
			return await executeUpdate.call(this);
		case 'getAuthInfo':
			return await executeGetAuthInfo.call(this);
		case 'changeContact':
			return await executeChangeContact.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "domainService"`);
}

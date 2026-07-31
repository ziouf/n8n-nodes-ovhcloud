import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeManagedCMSreferenceavailableCMSListGet,
	description as descriptionManagedCMSreferenceavailableCMSListGet,
} from './managedCMSreferenceavailableCMSListGet.operation';
import {
	execute as executeManagedCMSreferenceavailableLanguagesListGet,
	description as descriptionManagedCMSreferenceavailableLanguagesListGet,
} from './managedCMSreferenceavailableLanguagesListGet.operation';
import {
	execute as executeManagedCMSreferencesupportedPHPVersionsListGet,
	description as descriptionManagedCMSreferencesupportedPHPVersionsListGet,
} from './managedCMSreferencesupportedPHPVersionsListGet.operation';
import {
	execute as executeManagedCMSresourceListGet,
	description as descriptionManagedCMSresourceListGet,
} from './managedCMSresourceListGet.operation';
import {
	execute as executeManagedCMSresourceListGet2,
	description as descriptionManagedCMSresourceListGet2,
} from './managedCMSresourceListGet2.operation';
import {
	execute as executeManagedCMSresourceUpdatePut,
	description as descriptionManagedCMSresourceUpdatePut,
} from './managedCMSresourceUpdatePut.operation';
import {
	execute as executeManagedCMSresourceflushCDNCreatePost,
	description as descriptionManagedCMSresourceflushCDNCreatePost,
} from './managedCMSresourceflushCDNCreatePost.operation';
import {
	execute as executeManagedCMSresourcetaskListGet,
	description as descriptionManagedCMSresourcetaskListGet,
} from './managedCMSresourcetaskListGet.operation';
import {
	execute as executeManagedCMSresourcetaskListGet2,
	description as descriptionManagedCMSresourcetaskListGet2,
} from './managedCMSresourcetaskListGet2.operation';
import {
	execute as executeManagedCMSresourcetaskUpdatePut,
	description as descriptionManagedCMSresourcetaskUpdatePut,
} from './managedCMSresourcetaskUpdatePut.operation';
import {
	execute as executeManagedCMSresourcewebsiteListGet,
	description as descriptionManagedCMSresourcewebsiteListGet,
} from './managedCMSresourcewebsiteListGet.operation';
import {
	execute as executeManagedCMSresourcewebsiteCreatePost,
	description as descriptionManagedCMSresourcewebsiteCreatePost,
} from './managedCMSresourcewebsiteCreatePost.operation';
import {
	execute as executeManagedCMSresourcewebsiteDeleteDelete,
	description as descriptionManagedCMSresourcewebsiteDeleteDelete,
} from './managedCMSresourcewebsiteDeleteDelete.operation';
import {
	execute as executeManagedCMSresourcewebsiteListGet2,
	description as descriptionManagedCMSresourcewebsiteListGet2,
} from './managedCMSresourcewebsiteListGet2.operation';
import {
	execute as executeManagedCMSresourcewebsiteUpdatePut,
	description as descriptionManagedCMSresourcewebsiteUpdatePut,
} from './managedCMSresourcewebsiteUpdatePut.operation';
import {
	execute as executeManagedCMSresourcewebsiteflushCDNCreatePost,
	description as descriptionManagedCMSresourcewebsiteflushCDNCreatePost,
} from './managedCMSresourcewebsiteflushCDNCreatePost.operation';
import {
	execute as executeManagedCMSresourcewebsiteresetDatabasePasswordCreatePost,
	description as descriptionManagedCMSresourcewebsiteresetDatabasePasswordCreatePost,
} from './managedCMSresourcewebsiteresetDatabasePasswordCreatePost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'managedCmsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List the available content management systems',
				value: 'managedCMSreferenceavailableCMSListGet',
				action: 'List the available content management systems',
			},
			{
				name: 'List the available languages when creating a new website',
				value: 'managedCMSreferenceavailableLanguagesListGet',
				action: 'List the available languages when creating a new website',
			},
			{
				name: 'List supported PHP versions',
				value: 'managedCMSreferencesupportedPHPVersionsListGet',
				action: 'List supported PHP versions',
			},
			{
				name: 'Get all services of your account',
				value: 'managedCMSresourceListGet',
				action: 'Get all services of your account',
			},
			{
				name: 'Get a service',
				value: 'managedCMSresourceListGet2',
				action: 'Get a service',
			},
			{
				name: 'Edit a service',
				value: 'managedCMSresourceUpdatePut',
				action: 'Edit a service',
			},
			{
				name: 'Flush CDN for all websites of the service',
				value: 'managedCMSresourceflushCDNCreatePost',
				action: 'Flush CDN for all websites of the service',
			},
			{
				name: 'Get current and recent tasks on the service',
				value: 'managedCMSresourcetaskListGet',
				action: 'Get current and recent tasks on the service',
			},
			{
				name: 'GET /managedCMS/resource/{serviceId}/task/{taskId}',
				value: 'managedCMSresourcetaskListGet2',
				action: 'GET /managedCMS/resource/{serviceId}/task/{taskId}',
			},
			{
				name: 'Edit a task to provide user input',
				value: 'managedCMSresourcetaskUpdatePut',
				action: 'Edit a task to provide user input',
			},
			{
				name: 'Get all websites of a service',
				value: 'managedCMSresourcewebsiteListGet',
				action: 'Get all websites of a service',
			},
			{
				name: 'Create or import a website',
				value: 'managedCMSresourcewebsiteCreatePost',
				action: 'Create or import a website',
			},
			{
				name: 'Delete a website',
				value: 'managedCMSresourcewebsiteDeleteDelete',
				action: 'Delete a website',
			},
			{
				name: 'Get a website',
				value: 'managedCMSresourcewebsiteListGet2',
				action: 'Get a website',
			},
			{
				name: 'Edit a website',
				value: 'managedCMSresourcewebsiteUpdatePut',
				action: 'Edit a website',
			},
			{
				name: 'Flush CDN for the website',
				value: 'managedCMSresourcewebsiteflushCDNCreatePost',
				action: 'Flush CDN for the website',
			},
			{
				name: 'Reset password of the website\'s database',
				value: 'managedCMSresourcewebsiteresetDatabasePasswordCreatePost',
				action: 'Reset password of the website\'s database',
			},

			],
			default: 'managedCMSreferenceavailableCMSListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionManagedCMSreferenceavailableCMSListGet({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSreferenceavailableCMSListGet'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSreferenceavailableLanguagesListGet({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSreferenceavailableLanguagesListGet'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSreferencesupportedPHPVersionsListGet({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSreferencesupportedPHPVersionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourceListGet({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourceListGet'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourceListGet2({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourceListGet2'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourceUpdatePut({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourceUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourceflushCDNCreatePost({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourceflushCDNCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcetaskListGet({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcetaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcetaskListGet2({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcetaskListGet2'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcetaskUpdatePut({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcetaskUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcewebsiteListGet({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcewebsiteListGet'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcewebsiteCreatePost({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcewebsiteCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcewebsiteDeleteDelete({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcewebsiteDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcewebsiteListGet2({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcewebsiteListGet2'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcewebsiteUpdatePut({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcewebsiteUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcewebsiteflushCDNCreatePost({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcewebsiteflushCDNCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionManagedCMSresourcewebsiteresetDatabasePasswordCreatePost({
			...displayOptions,
			show: { managedCmsOperation: ['managedCMSresourcewebsiteresetDatabasePasswordCreatePost'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('managedCmsOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'managedCMSreferenceavailableCMSListGet':
			return executeManagedCMSreferenceavailableCMSListGet.call(this, itemIndex);
		case 'managedCMSreferenceavailableLanguagesListGet':
			return executeManagedCMSreferenceavailableLanguagesListGet.call(this, itemIndex);
		case 'managedCMSreferencesupportedPHPVersionsListGet':
			return executeManagedCMSreferencesupportedPHPVersionsListGet.call(this, itemIndex);
		case 'managedCMSresourceListGet':
			return executeManagedCMSresourceListGet.call(this, itemIndex);
		case 'managedCMSresourceListGet2':
			return executeManagedCMSresourceListGet2.call(this, itemIndex);
		case 'managedCMSresourceUpdatePut':
			return executeManagedCMSresourceUpdatePut.call(this, itemIndex);
		case 'managedCMSresourceflushCDNCreatePost':
			return executeManagedCMSresourceflushCDNCreatePost.call(this, itemIndex);
		case 'managedCMSresourcetaskListGet':
			return executeManagedCMSresourcetaskListGet.call(this, itemIndex);
		case 'managedCMSresourcetaskListGet2':
			return executeManagedCMSresourcetaskListGet2.call(this, itemIndex);
		case 'managedCMSresourcetaskUpdatePut':
			return executeManagedCMSresourcetaskUpdatePut.call(this, itemIndex);
		case 'managedCMSresourcewebsiteListGet':
			return executeManagedCMSresourcewebsiteListGet.call(this, itemIndex);
		case 'managedCMSresourcewebsiteCreatePost':
			return executeManagedCMSresourcewebsiteCreatePost.call(this, itemIndex);
		case 'managedCMSresourcewebsiteDeleteDelete':
			return executeManagedCMSresourcewebsiteDeleteDelete.call(this, itemIndex);
		case 'managedCMSresourcewebsiteListGet2':
			return executeManagedCMSresourcewebsiteListGet2.call(this, itemIndex);
		case 'managedCMSresourcewebsiteUpdatePut':
			return executeManagedCMSresourcewebsiteUpdatePut.call(this, itemIndex);
		case 'managedCMSresourcewebsiteflushCDNCreatePost':
			return executeManagedCMSresourcewebsiteflushCDNCreatePost.call(this, itemIndex);
		case 'managedCMSresourcewebsiteresetDatabasePasswordCreatePost':
			return executeManagedCMSresourcewebsiteresetDatabasePasswordCreatePost.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudManagedCMS"`);
}

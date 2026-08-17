import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionManagedCMSreferenceavailableCMSListGet,
	execute as executeManagedCMSreferenceavailableCMSListGet,
} from './managedCMSreferenceavailableCMSListGet.operation';
import {
	description as descriptionManagedCMSreferenceavailableLanguagesListGet,
	execute as executeManagedCMSreferenceavailableLanguagesListGet,
} from './managedCMSreferenceavailableLanguagesListGet.operation';
import {
	description as descriptionManagedCMSreferencesupportedPHPVersionsListGet,
	execute as executeManagedCMSreferencesupportedPHPVersionsListGet,
} from './managedCMSreferencesupportedPHPVersionsListGet.operation';
import {
	description as descriptionManagedCMSresourceListGet,
	execute as executeManagedCMSresourceListGet,
} from './managedCMSresourceListGet.operation';
import {
	description as descriptionManagedCMSresourceListGet2,
	execute as executeManagedCMSresourceListGet2,
} from './managedCMSresourceListGet2.operation';
import {
	description as descriptionManagedCMSresourceUpdatePut,
	execute as executeManagedCMSresourceUpdatePut,
} from './managedCMSresourceUpdatePut.operation';
import {
	description as descriptionManagedCMSresourceflushCDNCreatePost,
	execute as executeManagedCMSresourceflushCDNCreatePost,
} from './managedCMSresourceflushCDNCreatePost.operation';
import {
	description as descriptionManagedCMSresourcetaskListGet,
	execute as executeManagedCMSresourcetaskListGet,
} from './managedCMSresourcetaskListGet.operation';
import {
	description as descriptionManagedCMSresourcetaskListGet2,
	execute as executeManagedCMSresourcetaskListGet2,
} from './managedCMSresourcetaskListGet2.operation';
import {
	description as descriptionManagedCMSresourcetaskUpdatePut,
	execute as executeManagedCMSresourcetaskUpdatePut,
} from './managedCMSresourcetaskUpdatePut.operation';
import {
	description as descriptionManagedCMSresourcewebsiteCreatePost,
	execute as executeManagedCMSresourcewebsiteCreatePost,
} from './managedCMSresourcewebsiteCreatePost.operation';
import {
	description as descriptionManagedCMSresourcewebsiteDeleteDelete,
	execute as executeManagedCMSresourcewebsiteDeleteDelete,
} from './managedCMSresourcewebsiteDeleteDelete.operation';
import {
	description as descriptionManagedCMSresourcewebsiteListGet,
	execute as executeManagedCMSresourcewebsiteListGet,
} from './managedCMSresourcewebsiteListGet.operation';
import {
	description as descriptionManagedCMSresourcewebsiteListGet2,
	execute as executeManagedCMSresourcewebsiteListGet2,
} from './managedCMSresourcewebsiteListGet2.operation';
import {
	description as descriptionManagedCMSresourcewebsiteUpdatePut,
	execute as executeManagedCMSresourcewebsiteUpdatePut,
} from './managedCMSresourcewebsiteUpdatePut.operation';
import {
	description as descriptionManagedCMSresourcewebsiteflushCDNCreatePost,
	execute as executeManagedCMSresourcewebsiteflushCDNCreatePost,
} from './managedCMSresourcewebsiteflushCDNCreatePost.operation';

const { description, execute } = createOperationDispatcher(
	'managedCmsOperation',
	'ovhCloudManagedCMS',
	[
	{
		name: 'Create or Import a Website',
		value: 'managedCMSresourcewebsiteCreatePost',
		action: 'Create or import a website',
		execute: executeManagedCMSresourcewebsiteCreatePost,
		description: descriptionManagedCMSresourcewebsiteCreatePost,
	},
	{
		name: 'Delete a Website',
		value: 'managedCMSresourcewebsiteDeleteDelete',
		action: 'Delete a website',
		execute: executeManagedCMSresourcewebsiteDeleteDelete,
		description: descriptionManagedCMSresourcewebsiteDeleteDelete,
	},
	{
		name: 'Edit a Service',
		value: 'managedCMSresourceUpdatePut',
		action: 'Edit a service',
		execute: executeManagedCMSresourceUpdatePut,
		description: descriptionManagedCMSresourceUpdatePut,
	},
	{
		name: 'Edit a Task to Provide User Input',
		value: 'managedCMSresourcetaskUpdatePut',
		action: 'Edit a task to provide user input',
		execute: executeManagedCMSresourcetaskUpdatePut,
		description: descriptionManagedCMSresourcetaskUpdatePut,
	},
	{
		name: 'Edit a Website',
		value: 'managedCMSresourcewebsiteUpdatePut',
		action: 'Edit a website',
		execute: executeManagedCMSresourcewebsiteUpdatePut,
		description: descriptionManagedCMSresourcewebsiteUpdatePut,
	},
	{
		name: 'Flush CDN for All Websites of the Service',
		value: 'managedCMSresourceflushCDNCreatePost',
		action: 'Flush CDN for all websites of the service',
		execute: executeManagedCMSresourceflushCDNCreatePost,
		description: descriptionManagedCMSresourceflushCDNCreatePost,
	},
	{
		name: 'Flush CDN for the Website',
		value: 'managedCMSresourcewebsiteflushCDNCreatePost',
		action: 'Flush CDN for the website',
		execute: executeManagedCMSresourcewebsiteflushCDNCreatePost,
		description: descriptionManagedCMSresourcewebsiteflushCDNCreatePost,
	},
	{
		name: 'GET /managedCMS/resource/{serviceId}/task/{taskId}',
		value: 'managedCMSresourcetaskListGet2',
		action: 'GET /managedCMS/resource/{serviceId}/task/{taskId}',
		execute: executeManagedCMSresourcetaskListGet2,
		description: descriptionManagedCMSresourcetaskListGet2,
	},
	{
		name: 'Get a Service',
		value: 'managedCMSresourceListGet2',
		action: 'Get a service',
		execute: executeManagedCMSresourceListGet2,
		description: descriptionManagedCMSresourceListGet2,
	},
	{
		name: 'Get a Website',
		value: 'managedCMSresourcewebsiteListGet2',
		action: 'Get a website',
		execute: executeManagedCMSresourcewebsiteListGet2,
		description: descriptionManagedCMSresourcewebsiteListGet2,
	},
	{
		name: 'Get All Services of Your Account',
		value: 'managedCMSresourceListGet',
		action: 'Get all services of your account',
		execute: executeManagedCMSresourceListGet,
		description: descriptionManagedCMSresourceListGet,
	},
	{
		name: 'Get All Websites of a Service',
		value: 'managedCMSresourcewebsiteListGet',
		action: 'Get all websites of a service',
		execute: executeManagedCMSresourcewebsiteListGet,
		description: descriptionManagedCMSresourcewebsiteListGet,
	},
	{
		name: 'Get Current and Recent Tasks on the Service',
		value: 'managedCMSresourcetaskListGet',
		action: 'Get current and recent tasks on the service',
		execute: executeManagedCMSresourcetaskListGet,
		description: descriptionManagedCMSresourcetaskListGet,
	},
	{
		name: 'List Supported PHP Versions',
		value: 'managedCMSreferencesupportedPHPVersionsListGet',
		action: 'List supported PHP versions',
		execute: executeManagedCMSreferencesupportedPHPVersionsListGet,
		description: descriptionManagedCMSreferencesupportedPHPVersionsListGet,
	},
	{
		name: 'List the Available Content Management Systems',
		value: 'managedCMSreferenceavailableCMSListGet',
		action: 'List the available content management systems',
		execute: executeManagedCMSreferenceavailableCMSListGet,
		description: descriptionManagedCMSreferenceavailableCMSListGet,
		default: true,
	},
	{
		name: 'List the Available Languages when Creating a New Website',
		value: 'managedCMSreferenceavailableLanguagesListGet',
		action: 'List the available languages when creating a new website',
		execute: executeManagedCMSreferenceavailableLanguagesListGet,
		description: descriptionManagedCMSreferenceavailableLanguagesListGet,
	},
	],
);

export { description, execute };

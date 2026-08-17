import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionIamauthorizationcheckCreatePost,
	execute as executeIamauthorizationcheckCreatePost,
} from './iamauthorizationcheckCreatePost.operation';
import {
	description as descriptionIamlogkindListGet,
	execute as executeIamlogkindListGet,
} from './iamlogkindListGet.operation';
import {
	description as descriptionIamlogkindListGet2,
	execute as executeIamlogkindListGet2,
} from './iamlogkindListGet2.operation';
import {
	description as descriptionIamlogsubscriptionCreatePost,
	execute as executeIamlogsubscriptionCreatePost,
} from './iamlogsubscriptionCreatePost.operation';
import {
	description as descriptionIamlogsubscriptionDeleteDelete,
	execute as executeIamlogsubscriptionDeleteDelete,
} from './iamlogsubscriptionDeleteDelete.operation';
import {
	description as descriptionIamlogsubscriptionListGet,
	execute as executeIamlogsubscriptionListGet,
} from './iamlogsubscriptionListGet.operation';
import {
	description as descriptionIamlogsubscriptionListGet2,
	execute as executeIamlogsubscriptionListGet2,
} from './iamlogsubscriptionListGet2.operation';
import {
	description as descriptionIamlogurlCreatePost,
	execute as executeIamlogurlCreatePost,
} from './iamlogurlCreatePost.operation';
import {
	description as descriptionIampermissionsGroupCreatePost,
	execute as executeIampermissionsGroupCreatePost,
} from './iampermissionsGroupCreatePost.operation';
import {
	description as descriptionIampermissionsGroupDeleteDelete,
	execute as executeIampermissionsGroupDeleteDelete,
} from './iampermissionsGroupDeleteDelete.operation';
import {
	description as descriptionIampermissionsGroupListGet,
	execute as executeIampermissionsGroupListGet,
} from './iampermissionsGroupListGet.operation';
import {
	description as descriptionIampermissionsGroupListGet2,
	execute as executeIampermissionsGroupListGet2,
} from './iampermissionsGroupListGet2.operation';
import {
	description as descriptionIampermissionsGroupUpdatePut,
	execute as executeIampermissionsGroupUpdatePut,
} from './iampermissionsGroupUpdatePut.operation';
import {
	description as descriptionIampolicyCreatePost,
	execute as executeIampolicyCreatePost,
} from './iampolicyCreatePost.operation';
import {
	description as descriptionIampolicyDeleteDelete,
	execute as executeIampolicyDeleteDelete,
} from './iampolicyDeleteDelete.operation';
import {
	description as descriptionIampolicyListGet,
	execute as executeIampolicyListGet,
} from './iampolicyListGet.operation';
import {
	description as descriptionIampolicyListGet2,
	execute as executeIampolicyListGet2,
} from './iampolicyListGet2.operation';
import {
	description as descriptionIampolicyUpdatePut,
	execute as executeIampolicyUpdatePut,
} from './iampolicyUpdatePut.operation';
import {
	description as descriptionIamreferenceactionListGet,
	execute as executeIamreferenceactionListGet,
} from './iamreferenceactionListGet.operation';
import {
	description as descriptionIamreferenceresourcetypeListGet,
	execute as executeIamreferenceresourcetypeListGet,
} from './iamreferenceresourcetypeListGet.operation';
import {
	description as descriptionIamresourceGroupCreatePost,
	execute as executeIamresourceGroupCreatePost,
} from './iamresourceGroupCreatePost.operation';
import {
	description as descriptionIamresourceGroupDeleteDelete,
	execute as executeIamresourceGroupDeleteDelete,
} from './iamresourceGroupDeleteDelete.operation';
import {
	description as descriptionIamresourceGroupListGet,
	execute as executeIamresourceGroupListGet,
} from './iamresourceGroupListGet.operation';
import {
	description as descriptionIamresourceGroupListGet2,
	execute as executeIamresourceGroupListGet2,
} from './iamresourceGroupListGet2.operation';
import {
	description as descriptionIamresourceGroupUpdatePut,
	execute as executeIamresourceGroupUpdatePut,
} from './iamresourceGroupUpdatePut.operation';
import {
	description as descriptionIamresourceListGet,
	execute as executeIamresourceListGet,
} from './iamresourceListGet.operation';
import {
	description as descriptionIamresourceListGet2,
	execute as executeIamresourceListGet2,
} from './iamresourceListGet2.operation';
import {
	description as descriptionIamresourceUpdatePut,
	execute as executeIamresourceUpdatePut,
} from './iamresourceUpdatePut.operation';
import {
	description as descriptionIamresourceauthorizationcheckCreatePost,
	execute as executeIamresourceauthorizationcheckCreatePost,
} from './iamresourceauthorizationcheckCreatePost.operation';
import {
	description as descriptionIamresourcetagCreatePost,
	execute as executeIamresourcetagCreatePost,
} from './iamresourcetagCreatePost.operation';
import {
	description as descriptionIamresourcetagDeleteDelete,
	execute as executeIamresourcetagDeleteDelete,
} from './iamresourcetagDeleteDelete.operation';

const { description, execute } = createOperationDispatcher(
	'iamOperation',
	'ovhCloudIam',
	[
	{
		name: 'Add a Tag to a Resource',
		value: 'iamresourcetagCreatePost',
		action: 'Add a tag to a resource',
		execute: executeIamresourcetagCreatePost,
		description: descriptionIamresourcetagCreatePost,
	},
	{
		name: 'Create a New Policy',
		value: 'iampolicyCreatePost',
		action: 'Create a new policy',
		execute: executeIampolicyCreatePost,
		description: descriptionIampolicyCreatePost,
	},
	{
		name: 'Create a New Resource Group',
		value: 'iamresourceGroupCreatePost',
		action: 'Create a new resource group',
		execute: executeIamresourceGroupCreatePost,
		description: descriptionIamresourceGroupCreatePost,
	},
	{
		name: 'Create a Permissions Group',
		value: 'iampermissionsGroupCreatePost',
		action: 'Create a permissions group',
		execute: executeIampermissionsGroupCreatePost,
		description: descriptionIampermissionsGroupCreatePost,
	},
	{
		name: 'Create a Subscription From Logs to a Pre-Existing LDP Stream',
		value: 'iamlogsubscriptionCreatePost',
		action: 'Create a subscription from logs to a pre-existing LDP stream',
		execute: executeIamlogsubscriptionCreatePost,
		description: descriptionIamlogsubscriptionCreatePost,
	},
	{
		name: 'Delete a Subscription',
		value: 'iamlogsubscriptionDeleteDelete',
		action: 'Delete a subscription',
		execute: executeIamlogsubscriptionDeleteDelete,
		description: descriptionIamlogsubscriptionDeleteDelete,
	},
	{
		name: 'Delete the Given Permissions Group',
		value: 'iampermissionsGroupDeleteDelete',
		action: 'Delete the given permissions group',
		execute: executeIampermissionsGroupDeleteDelete,
		description: descriptionIampermissionsGroupDeleteDelete,
	},
	{
		name: 'Delete the Given Policy',
		value: 'iampolicyDeleteDelete',
		action: 'Delete the given policy',
		execute: executeIampolicyDeleteDelete,
		description: descriptionIampolicyDeleteDelete,
	},
	{
		name: 'Delete the Given Resource Group',
		value: 'iamresourceGroupDeleteDelete',
		action: 'Delete the given resource group',
		execute: executeIamresourceGroupDeleteDelete,
		description: descriptionIamresourceGroupDeleteDelete,
	},
	{
		name: 'Generate a Temporary URL to Retrieve Logs',
		value: 'iamlogurlCreatePost',
		action: 'Generate a temporary URL to retrieve logs',
		execute: executeIamlogurlCreatePost,
		description: descriptionIamlogurlCreatePost,
	},
	{
		name: 'Get a Log Kind',
		value: 'iamlogkindListGet2',
		action: 'Get a log kind',
		execute: executeIamlogkindListGet2,
		description: descriptionIamlogkindListGet2,
	},
	{
		name: 'Get Subscription Details',
		value: 'iamlogsubscriptionListGet2',
		action: 'Get subscription details',
		execute: executeIamlogsubscriptionListGet2,
		description: descriptionIamlogsubscriptionListGet2,
	},
	{
		name: 'List All Resources',
		value: 'iamresourceListGet',
		action: 'List all resources',
		execute: executeIamresourceListGet,
		description: descriptionIamresourceListGet,
	},
	{
		name: 'List Available Log Kinds',
		value: 'iamlogkindListGet',
		action: 'List available log kinds',
		execute: executeIamlogkindListGet,
		description: descriptionIamlogkindListGet,
	},
	{
		name: 'List Subscription IDs for a Cluster',
		value: 'iamlogsubscriptionListGet',
		action: 'List subscription IDs for a cluster',
		execute: executeIamlogsubscriptionListGet,
		description: descriptionIamlogsubscriptionListGet,
	},
	{
		name: 'Remove a Tag From a Resource',
		value: 'iamresourcetagDeleteDelete',
		action: 'Remove a tag from a resource',
		execute: executeIamresourcetagDeleteDelete,
		description: descriptionIamresourcetagDeleteDelete,
	},
	{
		name: 'Retrieve a Resource',
		value: 'iamresourceListGet2',
		action: 'Retrieve a resource',
		execute: executeIamresourceListGet2,
		description: descriptionIamresourceListGet2,
	},
	{
		name: 'Retrieve All Actions',
		value: 'iamreferenceactionListGet',
		action: 'Retrieve all actions',
		execute: executeIamreferenceactionListGet,
		description: descriptionIamreferenceactionListGet,
	},
	{
		name: 'Retrieve All Permissions Groups',
		value: 'iampermissionsGroupListGet',
		action: 'Retrieve all permissions groups',
		execute: executeIampermissionsGroupListGet,
		description: descriptionIampermissionsGroupListGet,
	},
	{
		name: 'Retrieve All Policies',
		value: 'iampolicyListGet',
		action: 'Retrieve all policies',
		execute: executeIampolicyListGet,
		description: descriptionIampolicyListGet,
	},
	{
		name: 'Retrieve All Resource Groups',
		value: 'iamresourceGroupListGet',
		action: 'Retrieve all resource groups',
		execute: executeIamresourceGroupListGet,
		description: descriptionIamresourceGroupListGet,
	},
	{
		name: 'Retrieve All Resource Types',
		value: 'iamreferenceresourcetypeListGet',
		action: 'Retrieve all resource types',
		execute: executeIamreferenceresourcetypeListGet,
		description: descriptionIamreferenceresourcetypeListGet,
	},
	{
		name: 'Retrieve the Given Permissions Group',
		value: 'iampermissionsGroupListGet2',
		action: 'Retrieve the given permissions group',
		execute: executeIampermissionsGroupListGet2,
		description: descriptionIampermissionsGroupListGet2,
	},
	{
		name: 'Retrieve the Given Policy',
		value: 'iampolicyListGet2',
		action: 'Retrieve the given policy',
		execute: executeIampolicyListGet2,
		description: descriptionIampolicyListGet2,
	},
	{
		name: 'Retrieve the Given Resource Group',
		value: 'iamresourceGroupListGet2',
		action: 'Retrieve the given resource group',
		execute: executeIamresourceGroupListGet2,
		description: descriptionIamresourceGroupListGet2,
	},
	{
		name: 'Update a Permissions Group',
		value: 'iampermissionsGroupUpdatePut',
		action: 'Update a permissions group',
		execute: executeIampermissionsGroupUpdatePut,
		description: descriptionIampermissionsGroupUpdatePut,
	},
	{
		name: 'Update an Existing Policy',
		value: 'iampolicyUpdatePut',
		action: 'Update an existing policy',
		execute: executeIampolicyUpdatePut,
		description: descriptionIampolicyUpdatePut,
	},
	{
		name: 'Update an Existing Resource',
		value: 'iamresourceUpdatePut',
		action: 'Update an existing resource',
		execute: executeIamresourceUpdatePut,
		description: descriptionIamresourceUpdatePut,
	},
	{
		name: 'Update an Existing Resource Group',
		value: 'iamresourceGroupUpdatePut',
		action: 'Update an existing resource group',
		execute: executeIamresourceGroupUpdatePut,
		description: descriptionIamresourceGroupUpdatePut,
	},
	{
		name: 'Validate Authorizations on a Given Resource',
		value: 'iamresourceauthorizationcheckCreatePost',
		action: 'Validate authorizations on a given resource',
		execute: executeIamresourceauthorizationcheckCreatePost,
		description: descriptionIamresourceauthorizationcheckCreatePost,
	},
	{
		name: 'Validate Your Authorizations on Given Resources',
		value: 'iamauthorizationcheckCreatePost',
		action: 'Validate your authorizations on given resources',
		execute: executeIamauthorizationcheckCreatePost,
		description: descriptionIamauthorizationcheckCreatePost,
		default: true,
	},
	],
);

export { description, execute };

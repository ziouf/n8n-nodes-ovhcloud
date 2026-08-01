import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeIamauthorizationcheckCreatePost,
	description as descriptionIamauthorizationcheckCreatePost,
} from './iamauthorizationcheckCreatePost.operation';
import {
	execute as executeIamlogkindListGet,
	description as descriptionIamlogkindListGet,
} from './iamlogkindListGet.operation';
import {
	execute as executeIamlogkindListGet2,
	description as descriptionIamlogkindListGet2,
} from './iamlogkindListGet2.operation';
import {
	execute as executeIamlogsubscriptionListGet,
	description as descriptionIamlogsubscriptionListGet,
} from './iamlogsubscriptionListGet.operation';
import {
	execute as executeIamlogsubscriptionCreatePost,
	description as descriptionIamlogsubscriptionCreatePost,
} from './iamlogsubscriptionCreatePost.operation';
import {
	execute as executeIamlogsubscriptionDeleteDelete,
	description as descriptionIamlogsubscriptionDeleteDelete,
} from './iamlogsubscriptionDeleteDelete.operation';
import {
	execute as executeIamlogsubscriptionListGet2,
	description as descriptionIamlogsubscriptionListGet2,
} from './iamlogsubscriptionListGet2.operation';
import {
	execute as executeIamlogurlCreatePost,
	description as descriptionIamlogurlCreatePost,
} from './iamlogurlCreatePost.operation';
import {
	execute as executeIampermissionsGroupListGet,
	description as descriptionIampermissionsGroupListGet,
} from './iampermissionsGroupListGet.operation';
import {
	execute as executeIampermissionsGroupCreatePost,
	description as descriptionIampermissionsGroupCreatePost,
} from './iampermissionsGroupCreatePost.operation';
import {
	execute as executeIampermissionsGroupDeleteDelete,
	description as descriptionIampermissionsGroupDeleteDelete,
} from './iampermissionsGroupDeleteDelete.operation';
import {
	execute as executeIampermissionsGroupListGet2,
	description as descriptionIampermissionsGroupListGet2,
} from './iampermissionsGroupListGet2.operation';
import {
	execute as executeIampermissionsGroupUpdatePut,
	description as descriptionIampermissionsGroupUpdatePut,
} from './iampermissionsGroupUpdatePut.operation';
import {
	execute as executeIampolicyListGet,
	description as descriptionIampolicyListGet,
} from './iampolicyListGet.operation';
import {
	execute as executeIampolicyCreatePost,
	description as descriptionIampolicyCreatePost,
} from './iampolicyCreatePost.operation';
import {
	execute as executeIampolicyDeleteDelete,
	description as descriptionIampolicyDeleteDelete,
} from './iampolicyDeleteDelete.operation';
import {
	execute as executeIampolicyListGet2,
	description as descriptionIampolicyListGet2,
} from './iampolicyListGet2.operation';
import {
	execute as executeIampolicyUpdatePut,
	description as descriptionIampolicyUpdatePut,
} from './iampolicyUpdatePut.operation';
import {
	execute as executeIamreferenceactionListGet,
	description as descriptionIamreferenceactionListGet,
} from './iamreferenceactionListGet.operation';
import {
	execute as executeIamreferenceresourcetypeListGet,
	description as descriptionIamreferenceresourcetypeListGet,
} from './iamreferenceresourcetypeListGet.operation';
import {
	execute as executeIamresourceListGet,
	description as descriptionIamresourceListGet,
} from './iamresourceListGet.operation';
import {
	execute as executeIamresourceListGet2,
	description as descriptionIamresourceListGet2,
} from './iamresourceListGet2.operation';
import {
	execute as executeIamresourceUpdatePut,
	description as descriptionIamresourceUpdatePut,
} from './iamresourceUpdatePut.operation';
import {
	execute as executeIamresourceauthorizationcheckCreatePost,
	description as descriptionIamresourceauthorizationcheckCreatePost,
} from './iamresourceauthorizationcheckCreatePost.operation';
import {
	execute as executeIamresourcetagDeleteDelete,
	description as descriptionIamresourcetagDeleteDelete,
} from './iamresourcetagDeleteDelete.operation';
import {
	execute as executeIamresourcetagCreatePost,
	description as descriptionIamresourcetagCreatePost,
} from './iamresourcetagCreatePost.operation';
import {
	execute as executeIamresourceGroupListGet,
	description as descriptionIamresourceGroupListGet,
} from './iamresourceGroupListGet.operation';
import {
	execute as executeIamresourceGroupCreatePost,
	description as descriptionIamresourceGroupCreatePost,
} from './iamresourceGroupCreatePost.operation';
import {
	execute as executeIamresourceGroupDeleteDelete,
	description as descriptionIamresourceGroupDeleteDelete,
} from './iamresourceGroupDeleteDelete.operation';
import {
	execute as executeIamresourceGroupListGet2,
	description as descriptionIamresourceGroupListGet2,
} from './iamresourceGroupListGet2.operation';
import {
	execute as executeIamresourceGroupUpdatePut,
	description as descriptionIamresourceGroupUpdatePut,
} from './iamresourceGroupUpdatePut.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'iamOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Validate Your Authorizations on Given Resources',
				value: 'iamauthorizationcheckCreatePost',
				action: 'Validate your authorizations on given resources',
			},
			{
				name: 'List Available Log Kinds',
				value: 'iamlogkindListGet',
				action: 'List available log kinds',
			},
			{
				name: 'Get a Log Kind',
				value: 'iamlogkindListGet2',
				action: 'Get a log kind',
			},
			{
				name: 'List Subscription IDs for a Cluster',
				value: 'iamlogsubscriptionListGet',
				action: 'List subscription IDs for a cluster',
			},
			{
				name: 'Create a Subscription From Logs to a Pre-Existing LDP Stream',
				value: 'iamlogsubscriptionCreatePost',
				action: 'Create a subscription from logs to a pre-existing LDP stream',
			},
			{
				name: 'Delete a Subscription',
				value: 'iamlogsubscriptionDeleteDelete',
				action: 'Delete a subscription',
			},
			{
				name: 'Get Subscription Details',
				value: 'iamlogsubscriptionListGet2',
				action: 'Get subscription details',
			},
			{
				name: 'Generate a Temporary URL to Retrieve Logs',
				value: 'iamlogurlCreatePost',
				action: 'Generate a temporary URL to retrieve logs',
			},
			{
				name: 'Retrieve All Permissions Groups',
				value: 'iampermissionsGroupListGet',
				action: 'Retrieve all permissions groups',
			},
			{
				name: 'Create a Permissions Group',
				value: 'iampermissionsGroupCreatePost',
				action: 'Create a permissions group',
			},
			{
				name: 'Delete the Given Permissions Group',
				value: 'iampermissionsGroupDeleteDelete',
				action: 'Delete the given permissions group',
			},
			{
				name: 'Retrieve the Given Permissions Group',
				value: 'iampermissionsGroupListGet2',
				action: 'Retrieve the given permissions group',
			},
			{
				name: 'Update a Permissions Group',
				value: 'iampermissionsGroupUpdatePut',
				action: 'Update a permissions group',
			},
			{
				name: 'Retrieve All Policies',
				value: 'iampolicyListGet',
				action: 'Retrieve all policies',
			},
			{
				name: 'Create a New Policy',
				value: 'iampolicyCreatePost',
				action: 'Create a new policy',
			},
			{
				name: 'Delete the Given Policy',
				value: 'iampolicyDeleteDelete',
				action: 'Delete the given policy',
			},
			{
				name: 'Retrieve the Given Policy',
				value: 'iampolicyListGet2',
				action: 'Retrieve the given policy',
			},
			{
				name: 'Update an Existing Policy',
				value: 'iampolicyUpdatePut',
				action: 'Update an existing policy',
			},
			{
				name: 'Retrieve All Actions',
				value: 'iamreferenceactionListGet',
				action: 'Retrieve all actions',
			},
			{
				name: 'Retrieve All Resource Types',
				value: 'iamreferenceresourcetypeListGet',
				action: 'Retrieve all resource types',
			},
			{
				name: 'List All Resources',
				value: 'iamresourceListGet',
				action: 'List all resources',
			},
			{
				name: 'Retrieve a Resource',
				value: 'iamresourceListGet2',
				action: 'Retrieve a resource',
			},
			{
				name: 'Update an Existing Resource',
				value: 'iamresourceUpdatePut',
				action: 'Update an existing resource',
			},
			{
				name: 'Validate Authorizations on a Given Resource',
				value: 'iamresourceauthorizationcheckCreatePost',
				action: 'Validate authorizations on a given resource',
			},
			{
				name: 'Remove a Tag From a Resource',
				value: 'iamresourcetagDeleteDelete',
				action: 'Remove a tag from a resource',
			},
			{
				name: 'Add a Tag to a Resource',
				value: 'iamresourcetagCreatePost',
				action: 'Add a tag to a resource',
			},
			{
				name: 'Retrieve All Resource Groups',
				value: 'iamresourceGroupListGet',
				action: 'Retrieve all resource groups',
			},
			{
				name: 'Create a New Resource Group',
				value: 'iamresourceGroupCreatePost',
				action: 'Create a new resource group',
			},
			{
				name: 'Delete the Given Resource Group',
				value: 'iamresourceGroupDeleteDelete',
				action: 'Delete the given resource group',
			},
			{
				name: 'Retrieve the Given Resource Group',
				value: 'iamresourceGroupListGet2',
				action: 'Retrieve the given resource group',
			},
			{
				name: 'Update an Existing Resource Group',
				value: 'iamresourceGroupUpdatePut',
				action: 'Update an existing resource group',
			},

			],
			default: 'iamauthorizationcheckCreatePost',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionIamauthorizationcheckCreatePost({
			...displayOptions,
			show: { iamOperation: ['iamauthorizationcheckCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIamlogkindListGet({
			...displayOptions,
			show: { iamOperation: ['iamlogkindListGet'] },
		}) as INodeProperties[]),
		...(descriptionIamlogkindListGet2({
			...displayOptions,
			show: { iamOperation: ['iamlogkindListGet2'] },
		}) as INodeProperties[]),
		...(descriptionIamlogsubscriptionListGet({
			...displayOptions,
			show: { iamOperation: ['iamlogsubscriptionListGet'] },
		}) as INodeProperties[]),
		...(descriptionIamlogsubscriptionCreatePost({
			...displayOptions,
			show: { iamOperation: ['iamlogsubscriptionCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIamlogsubscriptionDeleteDelete({
			...displayOptions,
			show: { iamOperation: ['iamlogsubscriptionDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIamlogsubscriptionListGet2({
			...displayOptions,
			show: { iamOperation: ['iamlogsubscriptionListGet2'] },
		}) as INodeProperties[]),
		...(descriptionIamlogurlCreatePost({
			...displayOptions,
			show: { iamOperation: ['iamlogurlCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIampermissionsGroupListGet({
			...displayOptions,
			show: { iamOperation: ['iampermissionsGroupListGet'] },
		}) as INodeProperties[]),
		...(descriptionIampermissionsGroupCreatePost({
			...displayOptions,
			show: { iamOperation: ['iampermissionsGroupCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIampermissionsGroupDeleteDelete({
			...displayOptions,
			show: { iamOperation: ['iampermissionsGroupDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIampermissionsGroupListGet2({
			...displayOptions,
			show: { iamOperation: ['iampermissionsGroupListGet2'] },
		}) as INodeProperties[]),
		...(descriptionIampermissionsGroupUpdatePut({
			...displayOptions,
			show: { iamOperation: ['iampermissionsGroupUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIampolicyListGet({
			...displayOptions,
			show: { iamOperation: ['iampolicyListGet'] },
		}) as INodeProperties[]),
		...(descriptionIampolicyCreatePost({
			...displayOptions,
			show: { iamOperation: ['iampolicyCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIampolicyDeleteDelete({
			...displayOptions,
			show: { iamOperation: ['iampolicyDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIampolicyListGet2({
			...displayOptions,
			show: { iamOperation: ['iampolicyListGet2'] },
		}) as INodeProperties[]),
		...(descriptionIampolicyUpdatePut({
			...displayOptions,
			show: { iamOperation: ['iampolicyUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIamreferenceactionListGet({
			...displayOptions,
			show: { iamOperation: ['iamreferenceactionListGet'] },
		}) as INodeProperties[]),
		...(descriptionIamreferenceresourcetypeListGet({
			...displayOptions,
			show: { iamOperation: ['iamreferenceresourcetypeListGet'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceListGet({
			...displayOptions,
			show: { iamOperation: ['iamresourceListGet'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceListGet2({
			...displayOptions,
			show: { iamOperation: ['iamresourceListGet2'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceUpdatePut({
			...displayOptions,
			show: { iamOperation: ['iamresourceUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceauthorizationcheckCreatePost({
			...displayOptions,
			show: { iamOperation: ['iamresourceauthorizationcheckCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIamresourcetagDeleteDelete({
			...displayOptions,
			show: { iamOperation: ['iamresourcetagDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIamresourcetagCreatePost({
			...displayOptions,
			show: { iamOperation: ['iamresourcetagCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceGroupListGet({
			...displayOptions,
			show: { iamOperation: ['iamresourceGroupListGet'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceGroupCreatePost({
			...displayOptions,
			show: { iamOperation: ['iamresourceGroupCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceGroupDeleteDelete({
			...displayOptions,
			show: { iamOperation: ['iamresourceGroupDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceGroupListGet2({
			...displayOptions,
			show: { iamOperation: ['iamresourceGroupListGet2'] },
		}) as INodeProperties[]),
		...(descriptionIamresourceGroupUpdatePut({
			...displayOptions,
			show: { iamOperation: ['iamresourceGroupUpdatePut'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('iamOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'iamauthorizationcheckCreatePost':
			return executeIamauthorizationcheckCreatePost.call(this, itemIndex);
		case 'iamlogkindListGet':
			return executeIamlogkindListGet.call(this, itemIndex);
		case 'iamlogkindListGet2':
			return executeIamlogkindListGet2.call(this, itemIndex);
		case 'iamlogsubscriptionListGet':
			return executeIamlogsubscriptionListGet.call(this, itemIndex);
		case 'iamlogsubscriptionCreatePost':
			return executeIamlogsubscriptionCreatePost.call(this, itemIndex);
		case 'iamlogsubscriptionDeleteDelete':
			return executeIamlogsubscriptionDeleteDelete.call(this, itemIndex);
		case 'iamlogsubscriptionListGet2':
			return executeIamlogsubscriptionListGet2.call(this, itemIndex);
		case 'iamlogurlCreatePost':
			return executeIamlogurlCreatePost.call(this, itemIndex);
		case 'iampermissionsGroupListGet':
			return executeIampermissionsGroupListGet.call(this, itemIndex);
		case 'iampermissionsGroupCreatePost':
			return executeIampermissionsGroupCreatePost.call(this, itemIndex);
		case 'iampermissionsGroupDeleteDelete':
			return executeIampermissionsGroupDeleteDelete.call(this, itemIndex);
		case 'iampermissionsGroupListGet2':
			return executeIampermissionsGroupListGet2.call(this, itemIndex);
		case 'iampermissionsGroupUpdatePut':
			return executeIampermissionsGroupUpdatePut.call(this, itemIndex);
		case 'iampolicyListGet':
			return executeIampolicyListGet.call(this, itemIndex);
		case 'iampolicyCreatePost':
			return executeIampolicyCreatePost.call(this, itemIndex);
		case 'iampolicyDeleteDelete':
			return executeIampolicyDeleteDelete.call(this, itemIndex);
		case 'iampolicyListGet2':
			return executeIampolicyListGet2.call(this, itemIndex);
		case 'iampolicyUpdatePut':
			return executeIampolicyUpdatePut.call(this, itemIndex);
		case 'iamreferenceactionListGet':
			return executeIamreferenceactionListGet.call(this, itemIndex);
		case 'iamreferenceresourcetypeListGet':
			return executeIamreferenceresourcetypeListGet.call(this, itemIndex);
		case 'iamresourceListGet':
			return executeIamresourceListGet.call(this, itemIndex);
		case 'iamresourceListGet2':
			return executeIamresourceListGet2.call(this, itemIndex);
		case 'iamresourceUpdatePut':
			return executeIamresourceUpdatePut.call(this, itemIndex);
		case 'iamresourceauthorizationcheckCreatePost':
			return executeIamresourceauthorizationcheckCreatePost.call(this, itemIndex);
		case 'iamresourcetagDeleteDelete':
			return executeIamresourcetagDeleteDelete.call(this, itemIndex);
		case 'iamresourcetagCreatePost':
			return executeIamresourcetagCreatePost.call(this, itemIndex);
		case 'iamresourceGroupListGet':
			return executeIamresourceGroupListGet.call(this, itemIndex);
		case 'iamresourceGroupCreatePost':
			return executeIamresourceGroupCreatePost.call(this, itemIndex);
		case 'iamresourceGroupDeleteDelete':
			return executeIamresourceGroupDeleteDelete.call(this, itemIndex);
		case 'iamresourceGroupListGet2':
			return executeIamresourceGroupListGet2.call(this, itemIndex);
		case 'iamresourceGroupUpdatePut':
			return executeIamresourceGroupUpdatePut.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudIam"`);
}

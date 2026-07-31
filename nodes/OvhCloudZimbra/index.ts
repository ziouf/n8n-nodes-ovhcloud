import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeZimbraplatformListGet,
	description as descriptionZimbraplatformListGet,
} from './zimbraplatformListGet.operation';
import {
	execute as executeZimbraplatformListGet2,
	description as descriptionZimbraplatformListGet2,
} from './zimbraplatformListGet2.operation';
import {
	execute as executeZimbraplatformUpdatePut,
	description as descriptionZimbraplatformUpdatePut,
} from './zimbraplatformUpdatePut.operation';
import {
	execute as executeZimbraplatformaccountListGet,
	description as descriptionZimbraplatformaccountListGet,
} from './zimbraplatformaccountListGet.operation';
import {
	execute as executeZimbraplatformaccountCreatePost,
	description as descriptionZimbraplatformaccountCreatePost,
} from './zimbraplatformaccountCreatePost.operation';
import {
	execute as executeZimbraplatformaccountDeleteDelete,
	description as descriptionZimbraplatformaccountDeleteDelete,
} from './zimbraplatformaccountDeleteDelete.operation';
import {
	execute as executeZimbraplatformaccountListGet2,
	description as descriptionZimbraplatformaccountListGet2,
} from './zimbraplatformaccountListGet2.operation';
import {
	execute as executeZimbraplatformaccountUpdatePut,
	description as descriptionZimbraplatformaccountUpdatePut,
} from './zimbraplatformaccountUpdatePut.operation';
import {
	execute as executeZimbraplatformaliasListGet,
	description as descriptionZimbraplatformaliasListGet,
} from './zimbraplatformaliasListGet.operation';
import {
	execute as executeZimbraplatformaliasCreatePost,
	description as descriptionZimbraplatformaliasCreatePost,
} from './zimbraplatformaliasCreatePost.operation';
import {
	execute as executeZimbraplatformaliasDeleteDelete,
	description as descriptionZimbraplatformaliasDeleteDelete,
} from './zimbraplatformaliasDeleteDelete.operation';
import {
	execute as executeZimbraplatformaliasListGet2,
	description as descriptionZimbraplatformaliasListGet2,
} from './zimbraplatformaliasListGet2.operation';
import {
	execute as executeZimbraplatformdiagnosticdomainCreatePost,
	description as descriptionZimbraplatformdiagnosticdomainCreatePost,
} from './zimbraplatformdiagnosticdomainCreatePost.operation';
import {
	execute as executeZimbraplatformdomainListGet,
	description as descriptionZimbraplatformdomainListGet,
} from './zimbraplatformdomainListGet.operation';
import {
	execute as executeZimbraplatformdomainCreatePost,
	description as descriptionZimbraplatformdomainCreatePost,
} from './zimbraplatformdomainCreatePost.operation';
import {
	execute as executeZimbraplatformdomainDeleteDelete,
	description as descriptionZimbraplatformdomainDeleteDelete,
} from './zimbraplatformdomainDeleteDelete.operation';
import {
	execute as executeZimbraplatformdomainListGet2,
	description as descriptionZimbraplatformdomainListGet2,
} from './zimbraplatformdomainListGet2.operation';
import {
	execute as executeZimbraplatformdomainUpdatePut,
	description as descriptionZimbraplatformdomainUpdatePut,
} from './zimbraplatformdomainUpdatePut.operation';
import {
	execute as executeZimbraplatformorganizationListGet,
	description as descriptionZimbraplatformorganizationListGet,
} from './zimbraplatformorganizationListGet.operation';
import {
	execute as executeZimbraplatformorganizationCreatePost,
	description as descriptionZimbraplatformorganizationCreatePost,
} from './zimbraplatformorganizationCreatePost.operation';
import {
	execute as executeZimbraplatformorganizationDeleteDelete,
	description as descriptionZimbraplatformorganizationDeleteDelete,
} from './zimbraplatformorganizationDeleteDelete.operation';
import {
	execute as executeZimbraplatformorganizationListGet2,
	description as descriptionZimbraplatformorganizationListGet2,
} from './zimbraplatformorganizationListGet2.operation';
import {
	execute as executeZimbraplatformorganizationUpdatePut,
	description as descriptionZimbraplatformorganizationUpdatePut,
} from './zimbraplatformorganizationUpdatePut.operation';
import {
	execute as executeZimbraplatformredirectionListGet,
	description as descriptionZimbraplatformredirectionListGet,
} from './zimbraplatformredirectionListGet.operation';
import {
	execute as executeZimbraplatformredirectionCreatePost,
	description as descriptionZimbraplatformredirectionCreatePost,
} from './zimbraplatformredirectionCreatePost.operation';
import {
	execute as executeZimbraplatformredirectionDeleteDelete,
	description as descriptionZimbraplatformredirectionDeleteDelete,
} from './zimbraplatformredirectionDeleteDelete.operation';
import {
	execute as executeZimbraplatformredirectionListGet2,
	description as descriptionZimbraplatformredirectionListGet2,
} from './zimbraplatformredirectionListGet2.operation';
import {
	execute as executeZimbraplatformslotListGet,
	description as descriptionZimbraplatformslotListGet,
} from './zimbraplatformslotListGet.operation';
import {
	execute as executeZimbraplatformslotListGet2,
	description as descriptionZimbraplatformslotListGet2,
} from './zimbraplatformslotListGet2.operation';
import {
	execute as executeZimbraplatformtaskListGet,
	description as descriptionZimbraplatformtaskListGet,
} from './zimbraplatformtaskListGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'zimbraOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Get a list of Zimbra Platforms',
				value: 'zimbraplatformListGet',
				action: 'Get a list of Zimbra Platforms',
			},
			{
				name: 'Get a Zimbra Platform',
				value: 'zimbraplatformListGet2',
				action: 'Get a Zimbra Platform',
			},
			{
				name: 'Modify a platform',
				value: 'zimbraplatformUpdatePut',
				action: 'Modify a platform',
			},
			{
				name: 'Get list of accounts',
				value: 'zimbraplatformaccountListGet',
				action: 'Get list of accounts',
			},
			{
				name: 'Create an account',
				value: 'zimbraplatformaccountCreatePost',
				action: 'Create an account',
			},
			{
				name: 'Delete an account',
				value: 'zimbraplatformaccountDeleteDelete',
				action: 'Delete an account',
			},
			{
				name: 'Get an account',
				value: 'zimbraplatformaccountListGet2',
				action: 'Get an account',
			},
			{
				name: 'Modify an account',
				value: 'zimbraplatformaccountUpdatePut',
				action: 'Modify an account',
			},
			{
				name: 'Retrieve the list of platform aliases',
				value: 'zimbraplatformaliasListGet',
				action: 'Retrieve the list of platform aliases',
			},
			{
				name: 'Create an alias',
				value: 'zimbraplatformaliasCreatePost',
				action: 'Create an alias',
			},
			{
				name: 'Delete an alias',
				value: 'zimbraplatformaliasDeleteDelete',
				action: 'Delete an alias',
			},
			{
				name: 'Retrieve a platform alias',
				value: 'zimbraplatformaliasListGet2',
				action: 'Retrieve a platform alias',
			},
			{
				name: 'POST /zimbra/platform/{platformId}/diagnostic/domain',
				value: 'zimbraplatformdiagnosticdomainCreatePost',
				action: 'POST /zimbra/platform/{platformId}/diagnostic/domain',
			},
			{
				name: 'Get list of domains',
				value: 'zimbraplatformdomainListGet',
				action: 'Get list of domains',
			},
			{
				name: 'Create a domain',
				value: 'zimbraplatformdomainCreatePost',
				action: 'Create a domain',
			},
			{
				name: 'Delete a domain',
				value: 'zimbraplatformdomainDeleteDelete',
				action: 'Delete a domain',
			},
			{
				name: 'Get a domain',
				value: 'zimbraplatformdomainListGet2',
				action: 'Get a domain',
			},
			{
				name: 'Modify a domain',
				value: 'zimbraplatformdomainUpdatePut',
				action: 'Modify a domain',
			},
			{
				name: 'Get list of organizations',
				value: 'zimbraplatformorganizationListGet',
				action: 'Get list of organizations',
			},
			{
				name: 'Create an organization',
				value: 'zimbraplatformorganizationCreatePost',
				action: 'Create an organization',
			},
			{
				name: 'Delete an organization',
				value: 'zimbraplatformorganizationDeleteDelete',
				action: 'Delete an organization',
			},
			{
				name: 'Get an organization',
				value: 'zimbraplatformorganizationListGet2',
				action: 'Get an organization',
			},
			{
				name: 'Modify an organization',
				value: 'zimbraplatformorganizationUpdatePut',
				action: 'Modify an organization',
			},
			{
				name: 'Get a platform redirection list',
				value: 'zimbraplatformredirectionListGet',
				action: 'Get a platform redirection list',
			},
			{
				name: 'Create an redirection',
				value: 'zimbraplatformredirectionCreatePost',
				action: 'Create an redirection',
			},
			{
				name: 'Delete an redirection',
				value: 'zimbraplatformredirectionDeleteDelete',
				action: 'Delete an redirection',
			},
			{
				name: 'Get a platform redirection',
				value: 'zimbraplatformredirectionListGet2',
				action: 'Get a platform redirection',
			},
			{
				name: 'Get a platform slot list',
				value: 'zimbraplatformslotListGet',
				action: 'Get a platform slot list',
			},
			{
				name: 'Get a platform slot',
				value: 'zimbraplatformslotListGet2',
				action: 'Get a platform slot',
			},
			{
				name: 'Get a list of platform tasks',
				value: 'zimbraplatformtaskListGet',
				action: 'Get a list of platform tasks',
			},

			],
			default: 'zimbraplatformListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionZimbraplatformListGet({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformListGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformListGet2({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformListGet2'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformUpdatePut({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaccountListGet({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaccountListGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaccountCreatePost({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaccountCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaccountDeleteDelete({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaccountDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaccountListGet2({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaccountListGet2'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaccountUpdatePut({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaccountUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaliasListGet({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaliasListGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaliasCreatePost({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaliasCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaliasDeleteDelete({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaliasDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformaliasListGet2({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformaliasListGet2'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformdiagnosticdomainCreatePost({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformdiagnosticdomainCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformdomainListGet({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformdomainListGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformdomainCreatePost({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformdomainCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformdomainDeleteDelete({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformdomainDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformdomainListGet2({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformdomainListGet2'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformdomainUpdatePut({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformdomainUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformorganizationListGet({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformorganizationListGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformorganizationCreatePost({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformorganizationCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformorganizationDeleteDelete({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformorganizationDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformorganizationListGet2({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformorganizationListGet2'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformorganizationUpdatePut({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformorganizationUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformredirectionListGet({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformredirectionListGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformredirectionCreatePost({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformredirectionCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformredirectionDeleteDelete({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformredirectionDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformredirectionListGet2({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformredirectionListGet2'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformslotListGet({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformslotListGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformslotListGet2({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformslotListGet2'] },
		}) as INodeProperties[]),
		...(descriptionZimbraplatformtaskListGet({
			...displayOptions,
			show: { zimbraOperation: ['zimbraplatformtaskListGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('zimbraOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'zimbraplatformListGet':
			return executeZimbraplatformListGet.call(this, itemIndex);
		case 'zimbraplatformListGet2':
			return executeZimbraplatformListGet2.call(this, itemIndex);
		case 'zimbraplatformUpdatePut':
			return executeZimbraplatformUpdatePut.call(this, itemIndex);
		case 'zimbraplatformaccountListGet':
			return executeZimbraplatformaccountListGet.call(this, itemIndex);
		case 'zimbraplatformaccountCreatePost':
			return executeZimbraplatformaccountCreatePost.call(this, itemIndex);
		case 'zimbraplatformaccountDeleteDelete':
			return executeZimbraplatformaccountDeleteDelete.call(this, itemIndex);
		case 'zimbraplatformaccountListGet2':
			return executeZimbraplatformaccountListGet2.call(this, itemIndex);
		case 'zimbraplatformaccountUpdatePut':
			return executeZimbraplatformaccountUpdatePut.call(this, itemIndex);
		case 'zimbraplatformaliasListGet':
			return executeZimbraplatformaliasListGet.call(this, itemIndex);
		case 'zimbraplatformaliasCreatePost':
			return executeZimbraplatformaliasCreatePost.call(this, itemIndex);
		case 'zimbraplatformaliasDeleteDelete':
			return executeZimbraplatformaliasDeleteDelete.call(this, itemIndex);
		case 'zimbraplatformaliasListGet2':
			return executeZimbraplatformaliasListGet2.call(this, itemIndex);
		case 'zimbraplatformdiagnosticdomainCreatePost':
			return executeZimbraplatformdiagnosticdomainCreatePost.call(this, itemIndex);
		case 'zimbraplatformdomainListGet':
			return executeZimbraplatformdomainListGet.call(this, itemIndex);
		case 'zimbraplatformdomainCreatePost':
			return executeZimbraplatformdomainCreatePost.call(this, itemIndex);
		case 'zimbraplatformdomainDeleteDelete':
			return executeZimbraplatformdomainDeleteDelete.call(this, itemIndex);
		case 'zimbraplatformdomainListGet2':
			return executeZimbraplatformdomainListGet2.call(this, itemIndex);
		case 'zimbraplatformdomainUpdatePut':
			return executeZimbraplatformdomainUpdatePut.call(this, itemIndex);
		case 'zimbraplatformorganizationListGet':
			return executeZimbraplatformorganizationListGet.call(this, itemIndex);
		case 'zimbraplatformorganizationCreatePost':
			return executeZimbraplatformorganizationCreatePost.call(this, itemIndex);
		case 'zimbraplatformorganizationDeleteDelete':
			return executeZimbraplatformorganizationDeleteDelete.call(this, itemIndex);
		case 'zimbraplatformorganizationListGet2':
			return executeZimbraplatformorganizationListGet2.call(this, itemIndex);
		case 'zimbraplatformorganizationUpdatePut':
			return executeZimbraplatformorganizationUpdatePut.call(this, itemIndex);
		case 'zimbraplatformredirectionListGet':
			return executeZimbraplatformredirectionListGet.call(this, itemIndex);
		case 'zimbraplatformredirectionCreatePost':
			return executeZimbraplatformredirectionCreatePost.call(this, itemIndex);
		case 'zimbraplatformredirectionDeleteDelete':
			return executeZimbraplatformredirectionDeleteDelete.call(this, itemIndex);
		case 'zimbraplatformredirectionListGet2':
			return executeZimbraplatformredirectionListGet2.call(this, itemIndex);
		case 'zimbraplatformslotListGet':
			return executeZimbraplatformslotListGet.call(this, itemIndex);
		case 'zimbraplatformslotListGet2':
			return executeZimbraplatformslotListGet2.call(this, itemIndex);
		case 'zimbraplatformtaskListGet':
			return executeZimbraplatformtaskListGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudZimbra"`);
}

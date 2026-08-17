import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionZimbraplatformListGet,
	execute as executeZimbraplatformListGet,
} from './zimbraplatformListGet.operation';
import {
	description as descriptionZimbraplatformListGet2,
	execute as executeZimbraplatformListGet2,
} from './zimbraplatformListGet2.operation';
import {
	description as descriptionZimbraplatformUpdatePut,
	execute as executeZimbraplatformUpdatePut,
} from './zimbraplatformUpdatePut.operation';
import {
	description as descriptionZimbraplatformaccountCreatePost,
	execute as executeZimbraplatformaccountCreatePost,
} from './zimbraplatformaccountCreatePost.operation';
import {
	description as descriptionZimbraplatformaccountDeleteDelete,
	execute as executeZimbraplatformaccountDeleteDelete,
} from './zimbraplatformaccountDeleteDelete.operation';
import {
	description as descriptionZimbraplatformaccountListGet,
	execute as executeZimbraplatformaccountListGet,
} from './zimbraplatformaccountListGet.operation';
import {
	description as descriptionZimbraplatformaccountListGet2,
	execute as executeZimbraplatformaccountListGet2,
} from './zimbraplatformaccountListGet2.operation';
import {
	description as descriptionZimbraplatformaccountUpdatePut,
	execute as executeZimbraplatformaccountUpdatePut,
} from './zimbraplatformaccountUpdatePut.operation';
import {
	description as descriptionZimbraplatformaliasCreatePost,
	execute as executeZimbraplatformaliasCreatePost,
} from './zimbraplatformaliasCreatePost.operation';
import {
	description as descriptionZimbraplatformaliasDeleteDelete,
	execute as executeZimbraplatformaliasDeleteDelete,
} from './zimbraplatformaliasDeleteDelete.operation';
import {
	description as descriptionZimbraplatformaliasListGet,
	execute as executeZimbraplatformaliasListGet,
} from './zimbraplatformaliasListGet.operation';
import {
	description as descriptionZimbraplatformaliasListGet2,
	execute as executeZimbraplatformaliasListGet2,
} from './zimbraplatformaliasListGet2.operation';
import {
	description as descriptionZimbraplatformdiagnosticdomainCreatePost,
	execute as executeZimbraplatformdiagnosticdomainCreatePost,
} from './zimbraplatformdiagnosticdomainCreatePost.operation';
import {
	description as descriptionZimbraplatformdomainCreatePost,
	execute as executeZimbraplatformdomainCreatePost,
} from './zimbraplatformdomainCreatePost.operation';
import {
	description as descriptionZimbraplatformdomainDeleteDelete,
	execute as executeZimbraplatformdomainDeleteDelete,
} from './zimbraplatformdomainDeleteDelete.operation';
import {
	description as descriptionZimbraplatformdomainListGet,
	execute as executeZimbraplatformdomainListGet,
} from './zimbraplatformdomainListGet.operation';
import {
	description as descriptionZimbraplatformdomainListGet2,
	execute as executeZimbraplatformdomainListGet2,
} from './zimbraplatformdomainListGet2.operation';
import {
	description as descriptionZimbraplatformdomainUpdatePut,
	execute as executeZimbraplatformdomainUpdatePut,
} from './zimbraplatformdomainUpdatePut.operation';
import {
	description as descriptionZimbraplatformorganizationCreatePost,
	execute as executeZimbraplatformorganizationCreatePost,
} from './zimbraplatformorganizationCreatePost.operation';
import {
	description as descriptionZimbraplatformorganizationDeleteDelete,
	execute as executeZimbraplatformorganizationDeleteDelete,
} from './zimbraplatformorganizationDeleteDelete.operation';
import {
	description as descriptionZimbraplatformorganizationListGet,
	execute as executeZimbraplatformorganizationListGet,
} from './zimbraplatformorganizationListGet.operation';
import {
	description as descriptionZimbraplatformorganizationListGet2,
	execute as executeZimbraplatformorganizationListGet2,
} from './zimbraplatformorganizationListGet2.operation';
import {
	description as descriptionZimbraplatformorganizationUpdatePut,
	execute as executeZimbraplatformorganizationUpdatePut,
} from './zimbraplatformorganizationUpdatePut.operation';
import {
	description as descriptionZimbraplatformredirectionCreatePost,
	execute as executeZimbraplatformredirectionCreatePost,
} from './zimbraplatformredirectionCreatePost.operation';
import {
	description as descriptionZimbraplatformredirectionDeleteDelete,
	execute as executeZimbraplatformredirectionDeleteDelete,
} from './zimbraplatformredirectionDeleteDelete.operation';
import {
	description as descriptionZimbraplatformredirectionListGet,
	execute as executeZimbraplatformredirectionListGet,
} from './zimbraplatformredirectionListGet.operation';
import {
	description as descriptionZimbraplatformredirectionListGet2,
	execute as executeZimbraplatformredirectionListGet2,
} from './zimbraplatformredirectionListGet2.operation';
import {
	description as descriptionZimbraplatformslotListGet,
	execute as executeZimbraplatformslotListGet,
} from './zimbraplatformslotListGet.operation';
import {
	description as descriptionZimbraplatformslotListGet2,
	execute as executeZimbraplatformslotListGet2,
} from './zimbraplatformslotListGet2.operation';
import {
	description as descriptionZimbraplatformtaskListGet,
	execute as executeZimbraplatformtaskListGet,
} from './zimbraplatformtaskListGet.operation';

const { description, execute } = createOperationDispatcher(
	'zimbraOperation',
	'ovhCloudZimbra',
	[
	{
		name: 'Create a Domain',
		value: 'zimbraplatformdomainCreatePost',
		action: 'Create a domain',
		execute: executeZimbraplatformdomainCreatePost,
		description: descriptionZimbraplatformdomainCreatePost,
	},
	{
		name: 'Create an Account',
		value: 'zimbraplatformaccountCreatePost',
		action: 'Create an account',
		execute: executeZimbraplatformaccountCreatePost,
		description: descriptionZimbraplatformaccountCreatePost,
	},
	{
		name: 'Create an Alias',
		value: 'zimbraplatformaliasCreatePost',
		action: 'Create an alias',
		execute: executeZimbraplatformaliasCreatePost,
		description: descriptionZimbraplatformaliasCreatePost,
	},
	{
		name: 'Create an Organization',
		value: 'zimbraplatformorganizationCreatePost',
		action: 'Create an organization',
		execute: executeZimbraplatformorganizationCreatePost,
		description: descriptionZimbraplatformorganizationCreatePost,
	},
	{
		name: 'Create an Redirection',
		value: 'zimbraplatformredirectionCreatePost',
		action: 'Create an redirection',
		execute: executeZimbraplatformredirectionCreatePost,
		description: descriptionZimbraplatformredirectionCreatePost,
	},
	{
		name: 'Delete a Domain',
		value: 'zimbraplatformdomainDeleteDelete',
		action: 'Delete a domain',
		execute: executeZimbraplatformdomainDeleteDelete,
		description: descriptionZimbraplatformdomainDeleteDelete,
	},
	{
		name: 'Delete an Account',
		value: 'zimbraplatformaccountDeleteDelete',
		action: 'Delete an account',
		execute: executeZimbraplatformaccountDeleteDelete,
		description: descriptionZimbraplatformaccountDeleteDelete,
	},
	{
		name: 'Delete an Alias',
		value: 'zimbraplatformaliasDeleteDelete',
		action: 'Delete an alias',
		execute: executeZimbraplatformaliasDeleteDelete,
		description: descriptionZimbraplatformaliasDeleteDelete,
	},
	{
		name: 'Delete an Organization',
		value: 'zimbraplatformorganizationDeleteDelete',
		action: 'Delete an organization',
		execute: executeZimbraplatformorganizationDeleteDelete,
		description: descriptionZimbraplatformorganizationDeleteDelete,
	},
	{
		name: 'Delete an Redirection',
		value: 'zimbraplatformredirectionDeleteDelete',
		action: 'Delete an redirection',
		execute: executeZimbraplatformredirectionDeleteDelete,
		description: descriptionZimbraplatformredirectionDeleteDelete,
	},
	{
		name: 'Get a Domain',
		value: 'zimbraplatformdomainListGet2',
		action: 'Get a domain',
		execute: executeZimbraplatformdomainListGet2,
		description: descriptionZimbraplatformdomainListGet2,
	},
	{
		name: 'Get a List of Platform Tasks',
		value: 'zimbraplatformtaskListGet',
		action: 'Get a list of platform tasks',
		execute: executeZimbraplatformtaskListGet,
		description: descriptionZimbraplatformtaskListGet,
	},
	{
		name: 'Get a List of Zimbra Platforms',
		value: 'zimbraplatformListGet',
		action: 'Get a list of Zimbra Platforms',
		execute: executeZimbraplatformListGet,
		description: descriptionZimbraplatformListGet,
		default: true,
	},
	{
		name: 'Get a Platform Redirection',
		value: 'zimbraplatformredirectionListGet2',
		action: 'Get a platform redirection',
		execute: executeZimbraplatformredirectionListGet2,
		description: descriptionZimbraplatformredirectionListGet2,
	},
	{
		name: 'Get a Platform Redirection List',
		value: 'zimbraplatformredirectionListGet',
		action: 'Get a platform redirection list',
		execute: executeZimbraplatformredirectionListGet,
		description: descriptionZimbraplatformredirectionListGet,
	},
	{
		name: 'Get a Platform Slot',
		value: 'zimbraplatformslotListGet2',
		action: 'Get a platform slot',
		execute: executeZimbraplatformslotListGet2,
		description: descriptionZimbraplatformslotListGet2,
	},
	{
		name: 'Get a Platform Slot List',
		value: 'zimbraplatformslotListGet',
		action: 'Get a platform slot list',
		execute: executeZimbraplatformslotListGet,
		description: descriptionZimbraplatformslotListGet,
	},
	{
		name: 'Get a Zimbra Platform',
		value: 'zimbraplatformListGet2',
		action: 'Get a Zimbra Platform',
		execute: executeZimbraplatformListGet2,
		description: descriptionZimbraplatformListGet2,
	},
	{
		name: 'Get an Account',
		value: 'zimbraplatformaccountListGet2',
		action: 'Get an account',
		execute: executeZimbraplatformaccountListGet2,
		description: descriptionZimbraplatformaccountListGet2,
	},
	{
		name: 'Get an Organization',
		value: 'zimbraplatformorganizationListGet2',
		action: 'Get an organization',
		execute: executeZimbraplatformorganizationListGet2,
		description: descriptionZimbraplatformorganizationListGet2,
	},
	{
		name: 'Get List of Accounts',
		value: 'zimbraplatformaccountListGet',
		action: 'Get list of accounts',
		execute: executeZimbraplatformaccountListGet,
		description: descriptionZimbraplatformaccountListGet,
	},
	{
		name: 'Get List of Domains',
		value: 'zimbraplatformdomainListGet',
		action: 'Get list of domains',
		execute: executeZimbraplatformdomainListGet,
		description: descriptionZimbraplatformdomainListGet,
	},
	{
		name: 'Get List of Organizations',
		value: 'zimbraplatformorganizationListGet',
		action: 'Get list of organizations',
		execute: executeZimbraplatformorganizationListGet,
		description: descriptionZimbraplatformorganizationListGet,
	},
	{
		name: 'Modify a Domain',
		value: 'zimbraplatformdomainUpdatePut',
		action: 'Modify a domain',
		execute: executeZimbraplatformdomainUpdatePut,
		description: descriptionZimbraplatformdomainUpdatePut,
	},
	{
		name: 'Modify a Platform',
		value: 'zimbraplatformUpdatePut',
		action: 'Modify a platform',
		execute: executeZimbraplatformUpdatePut,
		description: descriptionZimbraplatformUpdatePut,
	},
	{
		name: 'Modify an Account',
		value: 'zimbraplatformaccountUpdatePut',
		action: 'Modify an account',
		execute: executeZimbraplatformaccountUpdatePut,
		description: descriptionZimbraplatformaccountUpdatePut,
	},
	{
		name: 'Modify an Organization',
		value: 'zimbraplatformorganizationUpdatePut',
		action: 'Modify an organization',
		execute: executeZimbraplatformorganizationUpdatePut,
		description: descriptionZimbraplatformorganizationUpdatePut,
	},
	{
		name: 'POST /zimbra/platform/{platformId}/diagnostic/domain',
		value: 'zimbraplatformdiagnosticdomainCreatePost',
		action: 'POST /zimbra/platform/{platformId}/diagnostic/domain',
		execute: executeZimbraplatformdiagnosticdomainCreatePost,
		description: descriptionZimbraplatformdiagnosticdomainCreatePost,
	},
	{
		name: 'Retrieve a Platform Alias',
		value: 'zimbraplatformaliasListGet2',
		action: 'Retrieve a platform alias',
		execute: executeZimbraplatformaliasListGet2,
		description: descriptionZimbraplatformaliasListGet2,
	},
	{
		name: 'Retrieve the List of Platform Aliases',
		value: 'zimbraplatformaliasListGet',
		action: 'Retrieve the list of platform aliases',
		execute: executeZimbraplatformaliasListGet,
		description: descriptionZimbraplatformaliasListGet,
	},
	],
);

export { description, execute };

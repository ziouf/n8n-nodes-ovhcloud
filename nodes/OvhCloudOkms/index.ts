import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionOkmsreferenceregionsListGet,
	execute as executeOkmsreferenceregionsListGet,
} from './okmsreferenceregionsListGet.operation';
import {
	description as descriptionOkmsreferencesecretConfigListGet,
	execute as executeOkmsreferencesecretConfigListGet,
} from './okmsreferencesecretConfigListGet.operation';
import {
	description as descriptionOkmsreferenceserviceKeyListGet,
	execute as executeOkmsreferenceserviceKeyListGet,
} from './okmsreferenceserviceKeyListGet.operation';
import {
	description as descriptionOkmsresourceListGet,
	execute as executeOkmsresourceListGet,
} from './okmsresourceListGet.operation';
import {
	description as descriptionOkmsresourceListGet2,
	execute as executeOkmsresourceListGet2,
} from './okmsresourceListGet2.operation';
import {
	description as descriptionOkmsresourcecredentialCreatePost,
	execute as executeOkmsresourcecredentialCreatePost,
} from './okmsresourcecredentialCreatePost.operation';
import {
	description as descriptionOkmsresourcecredentialDeleteDelete,
	execute as executeOkmsresourcecredentialDeleteDelete,
} from './okmsresourcecredentialDeleteDelete.operation';
import {
	description as descriptionOkmsresourcecredentialListGet,
	execute as executeOkmsresourcecredentialListGet,
} from './okmsresourcecredentialListGet.operation';
import {
	description as descriptionOkmsresourcecredentialListGet2,
	execute as executeOkmsresourcecredentialListGet2,
} from './okmsresourcecredentialListGet2.operation';
import {
	description as descriptionOkmsresourcelogkindListGet,
	execute as executeOkmsresourcelogkindListGet,
} from './okmsresourcelogkindListGet.operation';
import {
	description as descriptionOkmsresourcelogkindListGet2,
	execute as executeOkmsresourcelogkindListGet2,
} from './okmsresourcelogkindListGet2.operation';
import {
	description as descriptionOkmsresourcelogsubscriptionCreatePost,
	execute as executeOkmsresourcelogsubscriptionCreatePost,
} from './okmsresourcelogsubscriptionCreatePost.operation';
import {
	description as descriptionOkmsresourcelogsubscriptionDeleteDelete,
	execute as executeOkmsresourcelogsubscriptionDeleteDelete,
} from './okmsresourcelogsubscriptionDeleteDelete.operation';
import {
	description as descriptionOkmsresourcelogsubscriptionListGet,
	execute as executeOkmsresourcelogsubscriptionListGet,
} from './okmsresourcelogsubscriptionListGet.operation';
import {
	description as descriptionOkmsresourcelogsubscriptionListGet2,
	execute as executeOkmsresourcelogsubscriptionListGet2,
} from './okmsresourcelogsubscriptionListGet2.operation';
import {
	description as descriptionOkmsresourcelogurlCreatePost,
	execute as executeOkmsresourcelogurlCreatePost,
} from './okmsresourcelogurlCreatePost.operation';
import {
	description as descriptionOkmsresourcesecretConfigListGet,
	execute as executeOkmsresourcesecretConfigListGet,
} from './okmsresourcesecretConfigListGet.operation';
import {
	description as descriptionOkmsresourcesecretConfigUpdatePut,
	execute as executeOkmsresourcesecretConfigUpdatePut,
} from './okmsresourcesecretConfigUpdatePut.operation';
import {
	description as descriptionOkmsresourcesecretCreatePost,
	execute as executeOkmsresourcesecretCreatePost,
} from './okmsresourcesecretCreatePost.operation';
import {
	description as descriptionOkmsresourcesecretDeleteDelete,
	execute as executeOkmsresourcesecretDeleteDelete,
} from './okmsresourcesecretDeleteDelete.operation';
import {
	description as descriptionOkmsresourcesecretListGet,
	execute as executeOkmsresourcesecretListGet,
} from './okmsresourcesecretListGet.operation';
import {
	description as descriptionOkmsresourcesecretListGet2,
	execute as executeOkmsresourcesecretListGet2,
} from './okmsresourcesecretListGet2.operation';
import {
	description as descriptionOkmsresourcesecretUpdatePut,
	execute as executeOkmsresourcesecretUpdatePut,
} from './okmsresourcesecretUpdatePut.operation';
import {
	description as descriptionOkmsresourcesecretversionCreatePost,
	execute as executeOkmsresourcesecretversionCreatePost,
} from './okmsresourcesecretversionCreatePost.operation';
import {
	description as descriptionOkmsresourcesecretversionListGet,
	execute as executeOkmsresourcesecretversionListGet,
} from './okmsresourcesecretversionListGet.operation';
import {
	description as descriptionOkmsresourcesecretversionListGet2,
	execute as executeOkmsresourcesecretversionListGet2,
} from './okmsresourcesecretversionListGet2.operation';
import {
	description as descriptionOkmsresourcesecretversionUpdatePut,
	execute as executeOkmsresourcesecretversionUpdatePut,
} from './okmsresourcesecretversionUpdatePut.operation';
import {
	description as descriptionOkmsresourceserviceKeyCreatePost,
	execute as executeOkmsresourceserviceKeyCreatePost,
} from './okmsresourceserviceKeyCreatePost.operation';
import {
	description as descriptionOkmsresourceserviceKeyDeleteDelete,
	execute as executeOkmsresourceserviceKeyDeleteDelete,
} from './okmsresourceserviceKeyDeleteDelete.operation';
import {
	description as descriptionOkmsresourceserviceKeyListGet,
	execute as executeOkmsresourceserviceKeyListGet,
} from './okmsresourceserviceKeyListGet.operation';
import {
	description as descriptionOkmsresourceserviceKeyListGet2,
	execute as executeOkmsresourceserviceKeyListGet2,
} from './okmsresourceserviceKeyListGet2.operation';
import {
	description as descriptionOkmsresourceserviceKeyUpdatePut,
	execute as executeOkmsresourceserviceKeyUpdatePut,
} from './okmsresourceserviceKeyUpdatePut.operation';

const { description, execute } = createOperationDispatcher(
	'okmsOperation',
	'ovhCloudOkms',
	[
	{
		name: 'Create a Secret',
		value: 'okmsresourcesecretCreatePost',
		action: 'Create a secret',
		execute: executeOkmsresourcesecretCreatePost,
		description: descriptionOkmsresourcesecretCreatePost,
	},
	{
		name: 'Create a Secret Version',
		value: 'okmsresourcesecretversionCreatePost',
		action: 'Create a secret version',
		execute: executeOkmsresourcesecretversionCreatePost,
		description: descriptionOkmsresourcesecretversionCreatePost,
	},
	{
		name: 'Create a Subscription From Logs to a Pre-Existing LDP Stream',
		value: 'okmsresourcelogsubscriptionCreatePost',
		action: 'Create a subscription from logs to a pre-existing LDP stream',
		execute: executeOkmsresourcelogsubscriptionCreatePost,
		description: descriptionOkmsresourcelogsubscriptionCreatePost,
	},
	{
		name: 'Create or Import a Service Key',
		value: 'okmsresourceserviceKeyCreatePost',
		action: 'Create or import a service key',
		execute: executeOkmsresourceserviceKeyCreatePost,
		description: descriptionOkmsresourceserviceKeyCreatePost,
	},
	{
		name: 'Delete a Secret and All Its Versions',
		value: 'okmsresourcesecretDeleteDelete',
		action: 'Delete a secret and all its versions',
		execute: executeOkmsresourcesecretDeleteDelete,
		description: descriptionOkmsresourcesecretDeleteDelete,
	},
	{
		name: 'Delete a Subscription',
		value: 'okmsresourcelogsubscriptionDeleteDelete',
		action: 'Delete a subscription',
		execute: executeOkmsresourcelogsubscriptionDeleteDelete,
		description: descriptionOkmsresourcelogsubscriptionDeleteDelete,
	},
	{
		name: 'Delete the Given Service Key',
		value: 'okmsresourceserviceKeyDeleteDelete',
		action: 'Delete the given service key',
		execute: executeOkmsresourceserviceKeyDeleteDelete,
		description: descriptionOkmsresourceserviceKeyDeleteDelete,
	},
	{
		name: 'Generate a Temporary URL to Retrieve Logs',
		value: 'okmsresourcelogurlCreatePost',
		action: 'Generate a temporary URL to retrieve logs',
		execute: executeOkmsresourcelogurlCreatePost,
		description: descriptionOkmsresourcelogurlCreatePost,
	},
	{
		name: 'Get a Log Kind',
		value: 'okmsresourcelogkindListGet2',
		action: 'Get a log kind',
		execute: executeOkmsresourcelogkindListGet2,
		description: descriptionOkmsresourcelogkindListGet2,
	},
	{
		name: 'Get an Access Credential',
		value: 'okmsresourcecredentialListGet2',
		action: 'Get an access credential',
		execute: executeOkmsresourcecredentialListGet2,
		description: descriptionOkmsresourcecredentialListGet2,
	},
	{
		name: 'Get an OVHcloud KMS Service',
		value: 'okmsresourceListGet2',
		action: 'Get an OVHcloud KMS service',
		execute: executeOkmsresourceListGet2,
		description: descriptionOkmsresourceListGet2,
	},
	{
		name: 'Get Secret Engine Default Configuration',
		value: 'okmsreferencesecretConfigListGet',
		action: 'Get secret engine default configuration',
		execute: executeOkmsreferencesecretConfigListGet,
		description: descriptionOkmsreferencesecretConfigListGet,
	},
	{
		name: 'Get Service Key Type, Size, Curve and Operations Combination',
		value: 'okmsreferenceserviceKeyListGet',
		action: 'Get service key type, size, curve and operations combination',
		execute: executeOkmsreferenceserviceKeyListGet,
		description: descriptionOkmsreferenceserviceKeyListGet,
	},
	{
		name: 'Get Subscription Details',
		value: 'okmsresourcelogsubscriptionListGet2',
		action: 'Get subscription details',
		execute: executeOkmsresourcelogsubscriptionListGet2,
		description: descriptionOkmsresourcelogsubscriptionListGet2,
	},
	{
		name: 'List All Access Credentials',
		value: 'okmsresourcecredentialListGet',
		action: 'List all access credentials',
		execute: executeOkmsresourcecredentialListGet,
		description: descriptionOkmsresourcecredentialListGet,
	},
	{
		name: 'List All Keys',
		value: 'okmsresourceserviceKeyListGet',
		action: 'List all keys',
		execute: executeOkmsresourceserviceKeyListGet,
		description: descriptionOkmsresourceserviceKeyListGet,
	},
	{
		name: 'List All Secrets',
		value: 'okmsresourcesecretListGet',
		action: 'List all secrets',
		execute: executeOkmsresourcesecretListGet,
		description: descriptionOkmsresourcesecretListGet,
	},
	{
		name: 'List Available Log Kinds',
		value: 'okmsresourcelogkindListGet',
		action: 'List available log kinds',
		execute: executeOkmsresourcelogkindListGet,
		description: descriptionOkmsresourcelogkindListGet,
	},
	{
		name: 'List Available Regions',
		value: 'okmsreferenceregionsListGet',
		action: 'List available regions',
		execute: executeOkmsreferenceregionsListGet,
		description: descriptionOkmsreferenceregionsListGet,
		default: true,
	},
	{
		name: 'List OVHcloud KMS Services',
		value: 'okmsresourceListGet',
		action: 'List OVHcloud KMS services',
		execute: executeOkmsresourceListGet,
		description: descriptionOkmsresourceListGet,
	},
	{
		name: 'List Subscription IDs for a Cluster',
		value: 'okmsresourcelogsubscriptionListGet',
		action: 'List subscription IDs for a cluster',
		execute: executeOkmsresourcelogsubscriptionListGet,
		description: descriptionOkmsresourcelogsubscriptionListGet,
	},
	{
		name: 'List the Versions of a Secret',
		value: 'okmsresourcesecretversionListGet',
		action: 'List the versions of a secret',
		execute: executeOkmsresourcesecretversionListGet,
		description: descriptionOkmsresourcesecretversionListGet,
	},
	{
		name: 'Request a New Access Credential',
		value: 'okmsresourcecredentialCreatePost',
		action: 'Request a new access credential',
		execute: executeOkmsresourcecredentialCreatePost,
		description: descriptionOkmsresourcecredentialCreatePost,
	},
	{
		name: 'Retrieve a Key',
		value: 'okmsresourceserviceKeyListGet2',
		action: 'Retrieve a key',
		execute: executeOkmsresourceserviceKeyListGet2,
		description: descriptionOkmsresourceserviceKeyListGet2,
	},
	{
		name: 'Retrieve a Secret',
		value: 'okmsresourcesecretListGet2',
		action: 'Retrieve a secret',
		execute: executeOkmsresourcesecretListGet2,
		description: descriptionOkmsresourcesecretListGet2,
	},
	{
		name: 'Retrieve a Secret Version',
		value: 'okmsresourcesecretversionListGet2',
		action: 'Retrieve a secret version',
		execute: executeOkmsresourcesecretversionListGet2,
		description: descriptionOkmsresourcesecretversionListGet2,
	},
	{
		name: 'Retrieve Secrets Configuration',
		value: 'okmsresourcesecretConfigListGet',
		action: 'Retrieve secrets configuration',
		execute: executeOkmsresourcesecretConfigListGet,
		description: descriptionOkmsresourcesecretConfigListGet,
	},
	{
		name: 'Revoke and Delete an Access Credential',
		value: 'okmsresourcecredentialDeleteDelete',
		action: 'Revoke and delete an access credential',
		execute: executeOkmsresourcecredentialDeleteDelete,
		description: descriptionOkmsresourcecredentialDeleteDelete,
	},
	{
		name: 'Update a Secret',
		value: 'okmsresourcesecretUpdatePut',
		action: 'Update a secret',
		execute: executeOkmsresourcesecretUpdatePut,
		description: descriptionOkmsresourcesecretUpdatePut,
	},
	{
		name: 'Update a Service Key',
		value: 'okmsresourceserviceKeyUpdatePut',
		action: 'Update a service key',
		execute: executeOkmsresourceserviceKeyUpdatePut,
		description: descriptionOkmsresourceserviceKeyUpdatePut,
	},
	{
		name: 'Update Secrets Configuration',
		value: 'okmsresourcesecretConfigUpdatePut',
		action: 'Update secrets configuration',
		execute: executeOkmsresourcesecretConfigUpdatePut,
		description: descriptionOkmsresourcesecretConfigUpdatePut,
	},
	{
		name: 'Update the State of a Secret Version',
		value: 'okmsresourcesecretversionUpdatePut',
		action: 'Update the state of a secret version',
		execute: executeOkmsresourcesecretversionUpdatePut,
		description: descriptionOkmsresourcesecretversionUpdatePut,
	},
	],
);

export { description, execute };

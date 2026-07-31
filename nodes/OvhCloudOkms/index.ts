import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeOkmsreferenceregionsListGet,
	description as descriptionOkmsreferenceregionsListGet,
} from './okmsreferenceregionsListGet.operation';
import {
	execute as executeOkmsreferencesecretConfigListGet,
	description as descriptionOkmsreferencesecretConfigListGet,
} from './okmsreferencesecretConfigListGet.operation';
import {
	execute as executeOkmsreferenceserviceKeyListGet,
	description as descriptionOkmsreferenceserviceKeyListGet,
} from './okmsreferenceserviceKeyListGet.operation';
import {
	execute as executeOkmsresourceListGet,
	description as descriptionOkmsresourceListGet,
} from './okmsresourceListGet.operation';
import {
	execute as executeOkmsresourceListGet2,
	description as descriptionOkmsresourceListGet2,
} from './okmsresourceListGet2.operation';
import {
	execute as executeOkmsresourcecredentialListGet,
	description as descriptionOkmsresourcecredentialListGet,
} from './okmsresourcecredentialListGet.operation';
import {
	execute as executeOkmsresourcecredentialCreatePost,
	description as descriptionOkmsresourcecredentialCreatePost,
} from './okmsresourcecredentialCreatePost.operation';
import {
	execute as executeOkmsresourcecredentialDeleteDelete,
	description as descriptionOkmsresourcecredentialDeleteDelete,
} from './okmsresourcecredentialDeleteDelete.operation';
import {
	execute as executeOkmsresourcecredentialListGet2,
	description as descriptionOkmsresourcecredentialListGet2,
} from './okmsresourcecredentialListGet2.operation';
import {
	execute as executeOkmsresourcelogkindListGet,
	description as descriptionOkmsresourcelogkindListGet,
} from './okmsresourcelogkindListGet.operation';
import {
	execute as executeOkmsresourcelogkindListGet2,
	description as descriptionOkmsresourcelogkindListGet2,
} from './okmsresourcelogkindListGet2.operation';
import {
	execute as executeOkmsresourcelogsubscriptionListGet,
	description as descriptionOkmsresourcelogsubscriptionListGet,
} from './okmsresourcelogsubscriptionListGet.operation';
import {
	execute as executeOkmsresourcelogsubscriptionCreatePost,
	description as descriptionOkmsresourcelogsubscriptionCreatePost,
} from './okmsresourcelogsubscriptionCreatePost.operation';
import {
	execute as executeOkmsresourcelogsubscriptionDeleteDelete,
	description as descriptionOkmsresourcelogsubscriptionDeleteDelete,
} from './okmsresourcelogsubscriptionDeleteDelete.operation';
import {
	execute as executeOkmsresourcelogsubscriptionListGet2,
	description as descriptionOkmsresourcelogsubscriptionListGet2,
} from './okmsresourcelogsubscriptionListGet2.operation';
import {
	execute as executeOkmsresourcelogurlCreatePost,
	description as descriptionOkmsresourcelogurlCreatePost,
} from './okmsresourcelogurlCreatePost.operation';
import {
	execute as executeOkmsresourcesecretListGet,
	description as descriptionOkmsresourcesecretListGet,
} from './okmsresourcesecretListGet.operation';
import {
	execute as executeOkmsresourcesecretCreatePost,
	description as descriptionOkmsresourcesecretCreatePost,
} from './okmsresourcesecretCreatePost.operation';
import {
	execute as executeOkmsresourcesecretDeleteDelete,
	description as descriptionOkmsresourcesecretDeleteDelete,
} from './okmsresourcesecretDeleteDelete.operation';
import {
	execute as executeOkmsresourcesecretListGet2,
	description as descriptionOkmsresourcesecretListGet2,
} from './okmsresourcesecretListGet2.operation';
import {
	execute as executeOkmsresourcesecretUpdatePut,
	description as descriptionOkmsresourcesecretUpdatePut,
} from './okmsresourcesecretUpdatePut.operation';
import {
	execute as executeOkmsresourcesecretversionListGet,
	description as descriptionOkmsresourcesecretversionListGet,
} from './okmsresourcesecretversionListGet.operation';
import {
	execute as executeOkmsresourcesecretversionCreatePost,
	description as descriptionOkmsresourcesecretversionCreatePost,
} from './okmsresourcesecretversionCreatePost.operation';
import {
	execute as executeOkmsresourcesecretversionListGet2,
	description as descriptionOkmsresourcesecretversionListGet2,
} from './okmsresourcesecretversionListGet2.operation';
import {
	execute as executeOkmsresourcesecretversionUpdatePut,
	description as descriptionOkmsresourcesecretversionUpdatePut,
} from './okmsresourcesecretversionUpdatePut.operation';
import {
	execute as executeOkmsresourcesecretConfigListGet,
	description as descriptionOkmsresourcesecretConfigListGet,
} from './okmsresourcesecretConfigListGet.operation';
import {
	execute as executeOkmsresourcesecretConfigUpdatePut,
	description as descriptionOkmsresourcesecretConfigUpdatePut,
} from './okmsresourcesecretConfigUpdatePut.operation';
import {
	execute as executeOkmsresourceserviceKeyListGet,
	description as descriptionOkmsresourceserviceKeyListGet,
} from './okmsresourceserviceKeyListGet.operation';
import {
	execute as executeOkmsresourceserviceKeyCreatePost,
	description as descriptionOkmsresourceserviceKeyCreatePost,
} from './okmsresourceserviceKeyCreatePost.operation';
import {
	execute as executeOkmsresourceserviceKeyDeleteDelete,
	description as descriptionOkmsresourceserviceKeyDeleteDelete,
} from './okmsresourceserviceKeyDeleteDelete.operation';
import {
	execute as executeOkmsresourceserviceKeyListGet2,
	description as descriptionOkmsresourceserviceKeyListGet2,
} from './okmsresourceserviceKeyListGet2.operation';
import {
	execute as executeOkmsresourceserviceKeyUpdatePut,
	description as descriptionOkmsresourceserviceKeyUpdatePut,
} from './okmsresourceserviceKeyUpdatePut.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'okmsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List available regions',
				value: 'okmsreferenceregionsListGet',
				action: 'List available regions',
			},
			{
				name: 'Get secret engine default configuration',
				value: 'okmsreferencesecretConfigListGet',
				action: 'Get secret engine default configuration',
			},
			{
				name: 'Get service key type, size, curve and operations combination',
				value: 'okmsreferenceserviceKeyListGet',
				action: 'Get service key type, size, curve and operations combination',
			},
			{
				name: 'List OVHcloud KMS services',
				value: 'okmsresourceListGet',
				action: 'List OVHcloud KMS services',
			},
			{
				name: 'Get an OVHcloud KMS service',
				value: 'okmsresourceListGet2',
				action: 'Get an OVHcloud KMS service',
			},
			{
				name: 'List all access credentials',
				value: 'okmsresourcecredentialListGet',
				action: 'List all access credentials',
			},
			{
				name: 'Request a new access credential',
				value: 'okmsresourcecredentialCreatePost',
				action: 'Request a new access credential',
			},
			{
				name: 'Revoke and delete an access credential',
				value: 'okmsresourcecredentialDeleteDelete',
				action: 'Revoke and delete an access credential',
			},
			{
				name: 'Get an access credential',
				value: 'okmsresourcecredentialListGet2',
				action: 'Get an access credential',
			},
			{
				name: 'List available log kinds',
				value: 'okmsresourcelogkindListGet',
				action: 'List available log kinds',
			},
			{
				name: 'Get a log kind',
				value: 'okmsresourcelogkindListGet2',
				action: 'Get a log kind',
			},
			{
				name: 'List subscription IDs for a cluster',
				value: 'okmsresourcelogsubscriptionListGet',
				action: 'List subscription IDs for a cluster',
			},
			{
				name: 'Create a subscription from logs to a pre-existing LDP stream',
				value: 'okmsresourcelogsubscriptionCreatePost',
				action: 'Create a subscription from logs to a pre-existing LDP stream',
			},
			{
				name: 'Delete a subscription',
				value: 'okmsresourcelogsubscriptionDeleteDelete',
				action: 'Delete a subscription',
			},
			{
				name: 'Get subscription details',
				value: 'okmsresourcelogsubscriptionListGet2',
				action: 'Get subscription details',
			},
			{
				name: 'Generate a temporary URL to retrieve logs',
				value: 'okmsresourcelogurlCreatePost',
				action: 'Generate a temporary URL to retrieve logs',
			},
			{
				name: 'List all secrets',
				value: 'okmsresourcesecretListGet',
				action: 'List all secrets',
			},
			{
				name: 'Create a secret',
				value: 'okmsresourcesecretCreatePost',
				action: 'Create a secret',
			},
			{
				name: 'Delete a secret and all its versions',
				value: 'okmsresourcesecretDeleteDelete',
				action: 'Delete a secret and all its versions',
			},
			{
				name: 'Retrieve a secret',
				value: 'okmsresourcesecretListGet2',
				action: 'Retrieve a secret',
			},
			{
				name: 'Update a secret',
				value: 'okmsresourcesecretUpdatePut',
				action: 'Update a secret',
			},
			{
				name: 'List the versions of a secret',
				value: 'okmsresourcesecretversionListGet',
				action: 'List the versions of a secret',
			},
			{
				name: 'Create a secret version',
				value: 'okmsresourcesecretversionCreatePost',
				action: 'Create a secret version',
			},
			{
				name: 'Retrieve a secret version',
				value: 'okmsresourcesecretversionListGet2',
				action: 'Retrieve a secret version',
			},
			{
				name: 'Update the state of a secret version',
				value: 'okmsresourcesecretversionUpdatePut',
				action: 'Update the state of a secret version',
			},
			{
				name: 'Retrieve secrets configuration',
				value: 'okmsresourcesecretConfigListGet',
				action: 'Retrieve secrets configuration',
			},
			{
				name: 'Update secrets configuration',
				value: 'okmsresourcesecretConfigUpdatePut',
				action: 'Update secrets configuration',
			},
			{
				name: 'List all keys',
				value: 'okmsresourceserviceKeyListGet',
				action: 'List all keys',
			},
			{
				name: 'Create or import a service key',
				value: 'okmsresourceserviceKeyCreatePost',
				action: 'Create or import a service key',
			},
			{
				name: 'Delete the given service key',
				value: 'okmsresourceserviceKeyDeleteDelete',
				action: 'Delete the given service key',
			},
			{
				name: 'Retrieve a key',
				value: 'okmsresourceserviceKeyListGet2',
				action: 'Retrieve a key',
			},
			{
				name: 'Update a service key',
				value: 'okmsresourceserviceKeyUpdatePut',
				action: 'Update a service key',
			},

			],
			default: 'okmsreferenceregionsListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionOkmsreferenceregionsListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsreferenceregionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsreferencesecretConfigListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsreferencesecretConfigListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsreferenceserviceKeyListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsreferenceserviceKeyListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourceListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsresourceListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourceListGet2({
			...displayOptions,
			show: { okmsOperation: ['okmsresourceListGet2'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcecredentialListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcecredentialListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcecredentialCreatePost({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcecredentialCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcecredentialDeleteDelete({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcecredentialDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcecredentialListGet2({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcecredentialListGet2'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcelogkindListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcelogkindListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcelogkindListGet2({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcelogkindListGet2'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcelogsubscriptionListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcelogsubscriptionListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcelogsubscriptionCreatePost({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcelogsubscriptionCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcelogsubscriptionDeleteDelete({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcelogsubscriptionDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcelogsubscriptionListGet2({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcelogsubscriptionListGet2'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcelogurlCreatePost({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcelogurlCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretCreatePost({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretDeleteDelete({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretListGet2({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretListGet2'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretUpdatePut({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretversionListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretversionListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretversionCreatePost({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretversionCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretversionListGet2({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretversionListGet2'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretversionUpdatePut({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretversionUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretConfigListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretConfigListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourcesecretConfigUpdatePut({
			...displayOptions,
			show: { okmsOperation: ['okmsresourcesecretConfigUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourceserviceKeyListGet({
			...displayOptions,
			show: { okmsOperation: ['okmsresourceserviceKeyListGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourceserviceKeyCreatePost({
			...displayOptions,
			show: { okmsOperation: ['okmsresourceserviceKeyCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourceserviceKeyDeleteDelete({
			...displayOptions,
			show: { okmsOperation: ['okmsresourceserviceKeyDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourceserviceKeyListGet2({
			...displayOptions,
			show: { okmsOperation: ['okmsresourceserviceKeyListGet2'] },
		}) as INodeProperties[]),
		...(descriptionOkmsresourceserviceKeyUpdatePut({
			...displayOptions,
			show: { okmsOperation: ['okmsresourceserviceKeyUpdatePut'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('okmsOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'okmsreferenceregionsListGet':
			return executeOkmsreferenceregionsListGet.call(this, itemIndex);
		case 'okmsreferencesecretConfigListGet':
			return executeOkmsreferencesecretConfigListGet.call(this, itemIndex);
		case 'okmsreferenceserviceKeyListGet':
			return executeOkmsreferenceserviceKeyListGet.call(this, itemIndex);
		case 'okmsresourceListGet':
			return executeOkmsresourceListGet.call(this, itemIndex);
		case 'okmsresourceListGet2':
			return executeOkmsresourceListGet2.call(this, itemIndex);
		case 'okmsresourcecredentialListGet':
			return executeOkmsresourcecredentialListGet.call(this, itemIndex);
		case 'okmsresourcecredentialCreatePost':
			return executeOkmsresourcecredentialCreatePost.call(this, itemIndex);
		case 'okmsresourcecredentialDeleteDelete':
			return executeOkmsresourcecredentialDeleteDelete.call(this, itemIndex);
		case 'okmsresourcecredentialListGet2':
			return executeOkmsresourcecredentialListGet2.call(this, itemIndex);
		case 'okmsresourcelogkindListGet':
			return executeOkmsresourcelogkindListGet.call(this, itemIndex);
		case 'okmsresourcelogkindListGet2':
			return executeOkmsresourcelogkindListGet2.call(this, itemIndex);
		case 'okmsresourcelogsubscriptionListGet':
			return executeOkmsresourcelogsubscriptionListGet.call(this, itemIndex);
		case 'okmsresourcelogsubscriptionCreatePost':
			return executeOkmsresourcelogsubscriptionCreatePost.call(this, itemIndex);
		case 'okmsresourcelogsubscriptionDeleteDelete':
			return executeOkmsresourcelogsubscriptionDeleteDelete.call(this, itemIndex);
		case 'okmsresourcelogsubscriptionListGet2':
			return executeOkmsresourcelogsubscriptionListGet2.call(this, itemIndex);
		case 'okmsresourcelogurlCreatePost':
			return executeOkmsresourcelogurlCreatePost.call(this, itemIndex);
		case 'okmsresourcesecretListGet':
			return executeOkmsresourcesecretListGet.call(this, itemIndex);
		case 'okmsresourcesecretCreatePost':
			return executeOkmsresourcesecretCreatePost.call(this, itemIndex);
		case 'okmsresourcesecretDeleteDelete':
			return executeOkmsresourcesecretDeleteDelete.call(this, itemIndex);
		case 'okmsresourcesecretListGet2':
			return executeOkmsresourcesecretListGet2.call(this, itemIndex);
		case 'okmsresourcesecretUpdatePut':
			return executeOkmsresourcesecretUpdatePut.call(this, itemIndex);
		case 'okmsresourcesecretversionListGet':
			return executeOkmsresourcesecretversionListGet.call(this, itemIndex);
		case 'okmsresourcesecretversionCreatePost':
			return executeOkmsresourcesecretversionCreatePost.call(this, itemIndex);
		case 'okmsresourcesecretversionListGet2':
			return executeOkmsresourcesecretversionListGet2.call(this, itemIndex);
		case 'okmsresourcesecretversionUpdatePut':
			return executeOkmsresourcesecretversionUpdatePut.call(this, itemIndex);
		case 'okmsresourcesecretConfigListGet':
			return executeOkmsresourcesecretConfigListGet.call(this, itemIndex);
		case 'okmsresourcesecretConfigUpdatePut':
			return executeOkmsresourcesecretConfigUpdatePut.call(this, itemIndex);
		case 'okmsresourceserviceKeyListGet':
			return executeOkmsresourceserviceKeyListGet.call(this, itemIndex);
		case 'okmsresourceserviceKeyCreatePost':
			return executeOkmsresourceserviceKeyCreatePost.call(this, itemIndex);
		case 'okmsresourceserviceKeyDeleteDelete':
			return executeOkmsresourceserviceKeyDeleteDelete.call(this, itemIndex);
		case 'okmsresourceserviceKeyListGet2':
			return executeOkmsresourceserviceKeyListGet2.call(this, itemIndex);
		case 'okmsresourceserviceKeyUpdatePut':
			return executeOkmsresourceserviceKeyUpdatePut.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudOkms"`);
}

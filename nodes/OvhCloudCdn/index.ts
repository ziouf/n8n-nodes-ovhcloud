import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeCdnListGet,
	description as descriptionCdnListGet,
} from './cdnListGet.operation';
import {
	execute as executeCdnGetGet,
	description as descriptionCdnGetGet,
} from './cdnGetGet.operation';
import {
	execute as executeCdnUpdatePut,
	description as descriptionCdnUpdatePut,
} from './cdnUpdatePut.operation';
import {
	execute as executeCdnDeleteDelete,
	description as descriptionCdnDeleteDelete,
} from './cdnDeleteDelete.operation';
import {
	execute as executeOriginListGet,
	description as descriptionOriginListGet,
} from './originListGet.operation';
import {
	execute as executeOriginCreatePost,
	description as descriptionOriginCreatePost,
} from './originCreatePost.operation';
import {
	execute as executeOriginGetGet,
	description as descriptionOriginGetGet,
} from './originGetGet.operation';
import {
	execute as executeOriginUpdatePut,
	description as descriptionOriginUpdatePut,
} from './originUpdatePut.operation';
import {
	execute as executeOriginDeleteDelete,
	description as descriptionOriginDeleteDelete,
} from './originDeleteDelete.operation';
import {
	execute as executeUserListGet,
	description as descriptionUserListGet,
} from './userListGet.operation';
import {
	execute as executeUserCreatePost,
	description as descriptionUserCreatePost,
} from './userCreatePost.operation';
import {
	execute as executeUserGetGet,
	description as descriptionUserGetGet,
} from './userGetGet.operation';
import {
	execute as executeUserUpdatePut,
	description as descriptionUserUpdatePut,
} from './userUpdatePut.operation';
import {
	execute as executeUserDeleteDelete,
	description as descriptionUserDeleteDelete,
} from './userDeleteDelete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'cdnOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List CDNs',
				value: 'cdnListGet',
				action: 'List all CDN services',
			},
			{
				name: 'Get CDN',
				value: 'cdnGetGet',
				action: 'Get CDN service details',
			},
			{
				name: 'Update CDN',
				value: 'cdnUpdatePut',
				action: 'Update CDN service details',
			},
			{
				name: 'Delete CDN',
				value: 'cdnDeleteDelete',
				action: 'Delete a CDN service',
			},
			{
				name: 'List Origins',
				value: 'originListGet',
				action: 'List origins for a CDN service',
			},
			{
				name: 'Create Origin',
				value: 'originCreatePost',
				action: 'Create a new origin for a CDN',
			},
			{
				name: 'Get Origin',
				value: 'originGetGet',
				action: 'Get origin details',
			},
			{
				name: 'Update Origin',
				value: 'originUpdatePut',
				action: 'Update an origin',
			},
			{
				name: 'Delete Origin',
				value: 'originDeleteDelete',
				action: 'Delete an origin',
			},
			{
				name: 'List Users',
				value: 'userListGet',
				action: 'List CDN users',
			},
			{
				name: 'Create User',
				value: 'userCreatePost',
				action: 'Create a CDN user',
			},
			{
				name: 'Get User',
				value: 'userGetGet',
				action: 'Get CDN user details',
			},
			{
				name: 'Update User',
				value: 'userUpdatePut',
				action: 'Update a CDN user',
			},
			{
				name: 'Delete User',
				value: 'userDeleteDelete',
				action: 'Delete a CDN user',
			},

			],
			default: 'cdnListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionCdnListGet({
			...displayOptions,
			show: { cdnOperation: ['cdnListGet'] },
		}) as INodeProperties[]),
		...(descriptionCdnGetGet({
			...displayOptions,
			show: { cdnOperation: ['cdnGetGet'] },
		}) as INodeProperties[]),
		...(descriptionCdnUpdatePut({
			...displayOptions,
			show: { cdnOperation: ['cdnUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionCdnDeleteDelete({
			...displayOptions,
			show: { cdnOperation: ['cdnDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionOriginListGet({
			...displayOptions,
			show: { cdnOperation: ['originListGet'] },
		}) as INodeProperties[]),
		...(descriptionOriginCreatePost({
			...displayOptions,
			show: { cdnOperation: ['originCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOriginGetGet({
			...displayOptions,
			show: { cdnOperation: ['originGetGet'] },
		}) as INodeProperties[]),
		...(descriptionOriginUpdatePut({
			...displayOptions,
			show: { cdnOperation: ['originUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionOriginDeleteDelete({
			...displayOptions,
			show: { cdnOperation: ['originDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionUserListGet({
			...displayOptions,
			show: { cdnOperation: ['userListGet'] },
		}) as INodeProperties[]),
		...(descriptionUserCreatePost({
			...displayOptions,
			show: { cdnOperation: ['userCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionUserGetGet({
			...displayOptions,
			show: { cdnOperation: ['userGetGet'] },
		}) as INodeProperties[]),
		...(descriptionUserUpdatePut({
			...displayOptions,
			show: { cdnOperation: ['userUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionUserDeleteDelete({
			...displayOptions,
			show: { cdnOperation: ['userDeleteDelete'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('cdnOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'cdnListGet':
			return executeCdnListGet.call(this, itemIndex);
		case 'cdnGetGet':
			return executeCdnGetGet.call(this, itemIndex);
		case 'cdnUpdatePut':
			return executeCdnUpdatePut.call(this, itemIndex);
		case 'cdnDeleteDelete':
			return executeCdnDeleteDelete.call(this, itemIndex);
		case 'originListGet':
			return executeOriginListGet.call(this, itemIndex);
		case 'originCreatePost':
			return executeOriginCreatePost.call(this, itemIndex);
		case 'originGetGet':
			return executeOriginGetGet.call(this, itemIndex);
		case 'originUpdatePut':
			return executeOriginUpdatePut.call(this, itemIndex);
		case 'originDeleteDelete':
			return executeOriginDeleteDelete.call(this, itemIndex);
		case 'userListGet':
			return executeUserListGet.call(this, itemIndex);
		case 'userCreatePost':
			return executeUserCreatePost.call(this, itemIndex);
		case 'userGetGet':
			return executeUserGetGet.call(this, itemIndex);
		case 'userUpdatePut':
			return executeUserUpdatePut.call(this, itemIndex);
		case 'userDeleteDelete':
			return executeUserDeleteDelete.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudCdn"`);
}

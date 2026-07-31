import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeWebhostingattachedDomainListGet,
	description as descriptionWebhostingattachedDomainListGet,
} from './webhostingattachedDomainListGet.operation';
import {
	execute as executeWebhostingresourceListGet,
	description as descriptionWebhostingresourceListGet,
} from './webhostingresourceListGet.operation';
import {
	execute as executeWebhostingresourceListGet2,
	description as descriptionWebhostingresourceListGet2,
} from './webhostingresourceListGet2.operation';
import {
	execute as executeWebhostingresourceattachedDomainListGet,
	description as descriptionWebhostingresourceattachedDomainListGet,
} from './webhostingresourceattachedDomainListGet.operation';
import {
	execute as executeWebhostingresourcecertificateListGet,
	description as descriptionWebhostingresourcecertificateListGet,
} from './webhostingresourcecertificateListGet.operation';
import {
	execute as executeWebhostingresourcewebsiteListGet,
	description as descriptionWebhostingresourcewebsiteListGet,
} from './webhostingresourcewebsiteListGet.operation';
import {
	execute as executeWebhostingresourcewebsiteCreatePost,
	description as descriptionWebhostingresourcewebsiteCreatePost,
} from './webhostingresourcewebsiteCreatePost.operation';
import {
	execute as executeWebhostingresourcewebsiteListGet2,
	description as descriptionWebhostingresourcewebsiteListGet2,
} from './webhostingresourcewebsiteListGet2.operation';
import {
	execute as executeWebhostingresourcewebsiteUpdatePut,
	description as descriptionWebhostingresourcewebsiteUpdatePut,
} from './webhostingresourcewebsiteUpdatePut.operation';
import {
	execute as executeWebhostingresourcewebsitedomainListGet,
	description as descriptionWebhostingresourcewebsitedomainListGet,
} from './webhostingresourcewebsitedomainListGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'webhostingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'GET /webhosting/attachedDomain',
				value: 'webhostingattachedDomainListGet',
				action: 'GET /webhosting/attachedDomain',
			},
			{
				name: 'GET /webhosting/resource',
				value: 'webhostingresourceListGet',
				action: 'GET /webhosting/resource',
			},
			{
				name: 'GET /webhosting/resource/{name}',
				value: 'webhostingresourceListGet2',
				action: 'GET /webhosting/resource/{name}',
			},
			{
				name: 'GET /webhosting/resource/{name}/attachedDomain',
				value: 'webhostingresourceattachedDomainListGet',
				action: 'GET /webhosting/resource/{name}/attachedDomain',
			},
			{
				name: 'GET /webhosting/resource/{name}/certificate',
				value: 'webhostingresourcecertificateListGet',
				action: 'GET /webhosting/resource/{name}/certificate',
			},
			{
				name: 'GET /webhosting/resource/{name}/website',
				value: 'webhostingresourcewebsiteListGet',
				action: 'GET /webhosting/resource/{name}/website',
			},
			{
				name: 'Create a website',
				value: 'webhostingresourcewebsiteCreatePost',
				action: 'Create a website',
			},
			{
				name: 'GET /webhosting/resource/{name}/website/{websiteId}',
				value: 'webhostingresourcewebsiteListGet2',
				action: 'GET /webhosting/resource/{name}/website/{websiteId}',
			},
			{
				name: 'Update an existing website',
				value: 'webhostingresourcewebsiteUpdatePut',
				action: 'Update an existing website',
			},
			{
				name: 'GET /webhosting/resource/{name}/website/{websiteId}/domain',
				value: 'webhostingresourcewebsitedomainListGet',
				action: 'GET /webhosting/resource/{name}/website/{websiteId}/domain',
			},

			],
			default: 'webhostingattachedDomainListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionWebhostingattachedDomainListGet({
			...displayOptions,
			show: { webhostingOperation: ['webhostingattachedDomainListGet'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourceListGet({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourceListGet'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourceListGet2({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourceListGet2'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourceattachedDomainListGet({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourceattachedDomainListGet'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourcecertificateListGet({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourcecertificateListGet'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourcewebsiteListGet({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourcewebsiteListGet'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourcewebsiteCreatePost({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourcewebsiteCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourcewebsiteListGet2({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourcewebsiteListGet2'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourcewebsiteUpdatePut({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourcewebsiteUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionWebhostingresourcewebsitedomainListGet({
			...displayOptions,
			show: { webhostingOperation: ['webhostingresourcewebsitedomainListGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('webhostingOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'webhostingattachedDomainListGet':
			return executeWebhostingattachedDomainListGet.call(this, itemIndex);
		case 'webhostingresourceListGet':
			return executeWebhostingresourceListGet.call(this, itemIndex);
		case 'webhostingresourceListGet2':
			return executeWebhostingresourceListGet2.call(this, itemIndex);
		case 'webhostingresourceattachedDomainListGet':
			return executeWebhostingresourceattachedDomainListGet.call(this, itemIndex);
		case 'webhostingresourcecertificateListGet':
			return executeWebhostingresourcecertificateListGet.call(this, itemIndex);
		case 'webhostingresourcewebsiteListGet':
			return executeWebhostingresourcewebsiteListGet.call(this, itemIndex);
		case 'webhostingresourcewebsiteCreatePost':
			return executeWebhostingresourcewebsiteCreatePost.call(this, itemIndex);
		case 'webhostingresourcewebsiteListGet2':
			return executeWebhostingresourcewebsiteListGet2.call(this, itemIndex);
		case 'webhostingresourcewebsiteUpdatePut':
			return executeWebhostingresourcewebsiteUpdatePut.call(this, itemIndex);
		case 'webhostingresourcewebsitedomainListGet':
			return executeWebhostingresourcewebsitedomainListGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudWebhostingV2"`);
}

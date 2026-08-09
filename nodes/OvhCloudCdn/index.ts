import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeServicesListGet,
	description as descriptionServicesListGet,
} from './resources/service/servicesListGet.operation';
import {
	execute as executeServiceGetGet,
	description as descriptionServiceGetGet,
} from './resources/service/serviceGetGet.operation';
import {
	execute as executeLogKindListGet,
	description as descriptionLogKindListGet,
} from './resources/service/logKindListGet.operation';
import {
	execute as executeLogKindGetGet,
	description as descriptionLogKindGetGet,
} from './resources/service/logKindGetGet.operation';
import {
	execute as executePopsListGet,
	description as descriptionPopsListGet,
} from './resources/service/popsListGet.operation';
import {
	execute as executePopsGetGet,
	description as descriptionPopsGetGet,
} from './resources/service/popsGetGet.operation';
import {
	execute as executeChangeContactPost,
	description as descriptionChangeContactPost,
} from './resources/service/changeContactPost.operation';
import {
	execute as executeQuotaGet,
	description as descriptionQuotaGet,
} from './resources/service/quotaGet.operation';
import {
	execute as executeServiceInfosGet,
	description as descriptionServiceInfosGet,
} from './resources/service/serviceInfosGet.operation';
import {
	execute as executeServiceInfosPut,
	description as descriptionServiceInfosPut,
} from './resources/service/serviceInfosPut.operation';
import {
	execute as executeLogsPost,
	description as descriptionLogsPost,
} from './resources/service/logsPost.operation';
import {
	execute as executeDomainsListGet,
	description as descriptionDomainsListGet,
} from './resources/domains/domainsListGet.operation';
import {
	execute as executeDomainsCreatePost,
	description as descriptionDomainsCreatePost,
} from './resources/domains/domainsCreatePost.operation';
import {
	execute as executeDomainDeleteDelete,
	description as descriptionDomainDeleteDelete,
} from './resources/domains/domainDeleteDelete.operation';
import {
	execute as executeDomainGetGet,
	description as descriptionDomainGetGet,
} from './resources/domains/domainGetGet.operation';
import {
	execute as executeDomainUpdatePut,
	description as descriptionDomainUpdatePut,
} from './resources/domains/domainUpdatePut.operation';
import {
	execute as executeBackendsListGet,
	description as descriptionBackendsListGet,
} from './resources/domains/backendsListGet.operation';
import {
	execute as executeBackendsCreatePost,
	description as descriptionBackendsCreatePost,
} from './resources/domains/backendsCreatePost.operation';
import {
	execute as executeBackendDeleteDelete,
	description as descriptionBackendDeleteDelete,
} from './resources/domains/backendDeleteDelete.operation';
import {
	execute as executeBackendGetGet,
	description as descriptionBackendGetGet,
} from './resources/domains/backendGetGet.operation';
import {
	execute as executeCacheRulesListGet,
	description as descriptionCacheRulesListGet,
} from './resources/domains/cacheRulesListGet.operation';
import {
	execute as executeCacheRulesCreatePost,
	description as descriptionCacheRulesCreatePost,
} from './resources/domains/cacheRulesCreatePost.operation';
import {
	execute as executeCacheRuleDeleteDelete,
	description as descriptionCacheRuleDeleteDelete,
} from './resources/domains/cacheRuleDeleteDelete.operation';
import {
	execute as executeCacheRuleGetGet,
	description as descriptionCacheRuleGetGet,
} from './resources/domains/cacheRuleGetGet.operation';
import {
	execute as executeCacheRuleUpdatePut,
	description as descriptionCacheRuleUpdatePut,
} from './resources/domains/cacheRuleUpdatePut.operation';
import {
	execute as executeCacheRuleFlushPost,
	description as descriptionCacheRuleFlushPost,
} from './resources/domains/cacheRuleFlushPost.operation';
import {
	execute as executeCacheRuleTasksListGet,
	description as descriptionCacheRuleTasksListGet,
} from './resources/domains/cacheRuleTasksListGet.operation';
import {
	execute as executeCacheRuleTaskGetGet,
	description as descriptionCacheRuleTaskGetGet,
} from './resources/domains/cacheRuleTaskGetGet.operation';
import {
	execute as executeDomainFlushPost,
	description as descriptionDomainFlushPost,
} from './resources/domains/domainFlushPost.operation';
import {
	execute as executeDomainLogsPost,
	description as descriptionDomainLogsPost,
} from './resources/domains/domainLogsPost.operation';
import {
	execute as executeDomainStatisticsGet,
	description as descriptionDomainStatisticsGet,
} from './resources/domains/domainStatisticsGet.operation';
import {
	execute as executeDomainTasksListGet,
	description as descriptionDomainTasksListGet,
} from './resources/domains/domainTasksListGet.operation';
import {
	execute as executeDomainTaskGetGet,
	description as descriptionDomainTaskGetGet,
} from './resources/domains/domainTaskGetGet.operation';
import {
	execute as executeSubscriptionsListGet,
	description as descriptionSubscriptionsListGet,
} from './resources/log/subscriptionsListGet.operation';
import {
	execute as executeSubscriptionsCreatePost,
	description as descriptionSubscriptionsCreatePost,
} from './resources/log/subscriptionsCreatePost.operation';
import {
	execute as executeSubscriptionDeleteDelete,
	description as descriptionSubscriptionDeleteDelete,
} from './resources/log/subscriptionDeleteDelete.operation';
import {
	execute as executeSubscriptionGetGet,
	description as descriptionSubscriptionGetGet,
} from './resources/log/subscriptionGetGet.operation';
import {
	execute as executeLogUrlPost,
	description as descriptionLogUrlPost,
} from './resources/log/logUrlPost.operation';
import {
	execute as executeSslDeleteDelete,
	description as descriptionSslDeleteDelete,
} from './resources/ssl/sslDeleteDelete.operation';
import {
	execute as executeSslGetGet,
	description as descriptionSslGetGet,
} from './resources/ssl/sslGetGet.operation';
import {
	execute as executeSslCreatePost,
	description as descriptionSslCreatePost,
} from './resources/ssl/sslCreatePost.operation';
import {
	execute as executeSslTasksListGet,
	description as descriptionSslTasksListGet,
} from './resources/ssl/sslTasksListGet.operation';
import {
	execute as executeSslTaskGetGet,
	description as descriptionSslTaskGetGet,
} from './resources/ssl/sslTaskGetGet.operation';
import {
	execute as executeSslUpdatePost,
	description as descriptionSslUpdatePost,
} from './resources/ssl/sslUpdatePost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'cdnOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Add Backend',
				value: 'backendsCreatePost',
				action: 'Add a backend IP',
			},
			{
				name: 'Add Cache Rule',
				value: 'cacheRulesCreatePost',
				action: 'Add a cache rule to a domain',
			},
			{
				name: 'Add Domain',
				value: 'domainsCreatePost',
				action: 'Add a domain on CDN',
			},
			{
				name: 'Add SSL',
				value: 'sslCreatePost',
				action: 'Add a SSL on CDN or generate a Lets Encrypt certificate',
			},
			{
				name: 'Change Contact',
				value: 'changeContactPost',
				action: 'Launch a contact change procedure',
			},
			{
				name: 'Create Log Subscription',
				value: 'subscriptionsCreatePost',
				action: 'Create a subscription from logs to a pre-existing LDP stream',
			},
			{
				name: 'Delete Backend',
				value: 'backendDeleteDelete',
				action: 'Remove a backend IP',
			},
			{
				name: 'Delete Cache Rule',
				value: 'cacheRuleDeleteDelete',
				action: 'Remove a cache rule',
			},
			{
				name: 'Delete Domain',
				value: 'domainDeleteDelete',
				action: 'Remove a domain from the CDN',
			},
			{
				name: 'Delete Log Subscription',
				value: 'subscriptionDeleteDelete',
				action: 'Delete a subscription',
			},
			{
				name: 'Delete SSL',
				value: 'sslDeleteDelete',
				action: 'Remove SSL of the CDN',
			},
			{
				name: 'Flush Cache Rule',
				value: 'cacheRuleFlushPost',
				action: 'Flush the cache',
			},
			{
				name: 'Flush Domain',
				value: 'domainFlushPost',
				action: 'Flush all cache',
			},
			{
				name: 'Generate Log URL',
				value: 'logUrlPost',
				action: 'Generate a temporary URL to retrieve logs',
			},
			{
				name: 'Generate Logs URL',
				value: 'logsPost',
				action: 'Generate URL to real time logs',
			},
			{
				name: 'Get Backend',
				value: 'backendGetGet',
				action: 'Get backend properties',
			},
			{
				name: 'Get Cache Rule',
				value: 'cacheRuleGetGet',
				action: 'Get cache rule properties',
			},
			{
				name: 'Get Cache Rule Task',
				value: 'cacheRuleTaskGetGet',
				action: 'Get a cache rule task',
			},
			{
				name: 'Get CDN Pop',
				value: 'popsGetGet',
				action: 'Get a CDN pop',
			},
			{
				name: 'Get CDN Service',
				value: 'serviceGetGet',
				action: 'Get CDN service details',
			},
			{
				name: 'Get Domain',
				value: 'domainGetGet',
				action: 'Get domain properties',
			},
			{
				name: 'Get Domain Logs URL',
				value: 'domainLogsPost',
				action: 'Generate URL to real time logs',
			},
			{
				name: 'Get Domain Statistics',
				value: 'domainStatisticsGet',
				action: 'Return stats about a domain',
			},
			{
				name: 'Get Domain Task',
				value: 'domainTaskGetGet',
				action: 'Get a domain task',
			},
			{
				name: 'Get Log Kind',
				value: 'logKindGetGet',
				action: 'Get a log kind',
			},
			{
				name: 'Get Log Subscription',
				value: 'subscriptionGetGet',
				action: 'Get subscription details',
			},
			{
				name: 'Get Quota',
				value: 'quotaGet',
				action: 'Return quota history',
			},
			{
				name: 'Get Service Info',
				value: 'serviceInfosGet',
				action: 'Get service information',
			},
			{
				name: 'Get SSL',
				value: 'sslGetGet',
				action: 'Get SSL properties',
			},
			{
				name: 'Get SSL Task',
				value: 'sslTaskGetGet',
				action: 'Get an SSL task',
			},
			{
				name: 'List Backends',
				value: 'backendsListGet',
				action: 'List backends associated to the domain',
			},
			{
				name: 'List Cache Rule Tasks',
				value: 'cacheRuleTasksListGet',
				action: 'List tasks associated to the cache rule',
			},
			{
				name: 'List Cache Rules',
				value: 'cacheRulesListGet',
				action: 'List cache rules associated to the domain',
			},
			{
				name: 'List CDN Pops',
				value: 'popsListGet',
				action: 'List of CDN Pops',
			},
			{
				name: 'List CDN Services',
				value: 'servicesListGet',
				action: 'List available CDN services',
			},
			{
				name: 'List Domain Tasks',
				value: 'domainTasksListGet',
				action: 'List tasks associated to the domain',
			},
			{
				name: 'List Domains',
				value: 'domainsListGet',
				action: 'List domains associated to this anycast',
			},
			{
				name: 'List Log Kinds',
				value: 'logKindListGet',
				action: 'List available log kinds',
			},
			{
				name: 'List Log Subscriptions',
				value: 'subscriptionsListGet',
				action: 'List subscription IDs for a cluster',
			},
			{
				name: 'List SSL Tasks',
				value: 'sslTasksListGet',
				action: 'List tasks associated to the SSL',
			},
			{
				name: 'Update Cache Rule',
				value: 'cacheRuleUpdatePut',
				action: 'Alter cache rule properties',
			},
			{
				name: 'Update Domain',
				value: 'domainUpdatePut',
				action: 'Alter domain properties',
			},
			{
				name: 'Update Service Info',
				value: 'serviceInfosPut',
				action: 'Update service information',
			},
			{
				name: 'Update SSL',
				value: 'sslUpdatePost',
				action: 'Update an existing SSL with a custom certificate',
			},
			],
			default: 'servicesListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionServicesListGet({
			...displayOptions,
			show: { cdnOperation: ['servicesListGet'] },
		}) as INodeProperties[]),
		...(descriptionServiceGetGet({
			...displayOptions,
			show: { cdnOperation: ['serviceGetGet'] },
		}) as INodeProperties[]),
		...(descriptionLogKindListGet({
			...displayOptions,
			show: { cdnOperation: ['logKindListGet'] },
		}) as INodeProperties[]),
		...(descriptionLogKindGetGet({
			...displayOptions,
			show: { cdnOperation: ['logKindGetGet'] },
		}) as INodeProperties[]),
		...(descriptionPopsListGet({
			...displayOptions,
			show: { cdnOperation: ['popsListGet'] },
		}) as INodeProperties[]),
		...(descriptionPopsGetGet({
			...displayOptions,
			show: { cdnOperation: ['popsGetGet'] },
		}) as INodeProperties[]),
		...(descriptionChangeContactPost({
			...displayOptions,
			show: { cdnOperation: ['changeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionQuotaGet({
			...displayOptions,
			show: { cdnOperation: ['quotaGet'] },
		}) as INodeProperties[]),
		...(descriptionServiceInfosGet({
			...displayOptions,
			show: { cdnOperation: ['serviceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionServiceInfosPut({
			...displayOptions,
			show: { cdnOperation: ['serviceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptionLogsPost({
			...displayOptions,
			show: { cdnOperation: ['logsPost'] },
		}) as INodeProperties[]),
		...(descriptionDomainsListGet({
			...displayOptions,
			show: { cdnOperation: ['domainsListGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainsCreatePost({
			...displayOptions,
			show: { cdnOperation: ['domainsCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionDomainDeleteDelete({
			...displayOptions,
			show: { cdnOperation: ['domainDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionDomainGetGet({
			...displayOptions,
			show: { cdnOperation: ['domainGetGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainUpdatePut({
			...displayOptions,
			show: { cdnOperation: ['domainUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionBackendsListGet({
			...displayOptions,
			show: { cdnOperation: ['backendsListGet'] },
		}) as INodeProperties[]),
		...(descriptionBackendsCreatePost({
			...displayOptions,
			show: { cdnOperation: ['backendsCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionBackendDeleteDelete({
			...displayOptions,
			show: { cdnOperation: ['backendDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionBackendGetGet({
			...displayOptions,
			show: { cdnOperation: ['backendGetGet'] },
		}) as INodeProperties[]),
		...(descriptionCacheRulesListGet({
			...displayOptions,
			show: { cdnOperation: ['cacheRulesListGet'] },
		}) as INodeProperties[]),
		...(descriptionCacheRulesCreatePost({
			...displayOptions,
			show: { cdnOperation: ['cacheRulesCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionCacheRuleDeleteDelete({
			...displayOptions,
			show: { cdnOperation: ['cacheRuleDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionCacheRuleGetGet({
			...displayOptions,
			show: { cdnOperation: ['cacheRuleGetGet'] },
		}) as INodeProperties[]),
		...(descriptionCacheRuleUpdatePut({
			...displayOptions,
			show: { cdnOperation: ['cacheRuleUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionCacheRuleFlushPost({
			...displayOptions,
			show: { cdnOperation: ['cacheRuleFlushPost'] },
		}) as INodeProperties[]),
		...(descriptionCacheRuleTasksListGet({
			...displayOptions,
			show: { cdnOperation: ['cacheRuleTasksListGet'] },
		}) as INodeProperties[]),
		...(descriptionCacheRuleTaskGetGet({
			...displayOptions,
			show: { cdnOperation: ['cacheRuleTaskGetGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainFlushPost({
			...displayOptions,
			show: { cdnOperation: ['domainFlushPost'] },
		}) as INodeProperties[]),
		...(descriptionDomainLogsPost({
			...displayOptions,
			show: { cdnOperation: ['domainLogsPost'] },
		}) as INodeProperties[]),
		...(descriptionDomainStatisticsGet({
			...displayOptions,
			show: { cdnOperation: ['domainStatisticsGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainTasksListGet({
			...displayOptions,
			show: { cdnOperation: ['domainTasksListGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainTaskGetGet({
			...displayOptions,
			show: { cdnOperation: ['domainTaskGetGet'] },
		}) as INodeProperties[]),
		...(descriptionSubscriptionsListGet({
			...displayOptions,
			show: { cdnOperation: ['subscriptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionSubscriptionsCreatePost({
			...displayOptions,
			show: { cdnOperation: ['subscriptionsCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionSubscriptionDeleteDelete({
			...displayOptions,
			show: { cdnOperation: ['subscriptionDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionSubscriptionGetGet({
			...displayOptions,
			show: { cdnOperation: ['subscriptionGetGet'] },
		}) as INodeProperties[]),
		...(descriptionLogUrlPost({
			...displayOptions,
			show: { cdnOperation: ['logUrlPost'] },
		}) as INodeProperties[]),
		...(descriptionSslDeleteDelete({
			...displayOptions,
			show: { cdnOperation: ['sslDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionSslGetGet({
			...displayOptions,
			show: { cdnOperation: ['sslGetGet'] },
		}) as INodeProperties[]),
		...(descriptionSslCreatePost({
			...displayOptions,
			show: { cdnOperation: ['sslCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionSslTasksListGet({
			...displayOptions,
			show: { cdnOperation: ['sslTasksListGet'] },
		}) as INodeProperties[]),
		...(descriptionSslTaskGetGet({
			...displayOptions,
			show: { cdnOperation: ['sslTaskGetGet'] },
		}) as INodeProperties[]),
		...(descriptionSslUpdatePost({
			...displayOptions,
			show: { cdnOperation: ['sslUpdatePost'] },
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
		case 'servicesListGet':
			return executeServicesListGet.call(this, itemIndex ?? 0);
		case 'serviceGetGet':
			return executeServiceGetGet.call(this, itemIndex ?? 0);
		case 'logKindListGet':
			return executeLogKindListGet.call(this, itemIndex ?? 0);
		case 'logKindGetGet':
			return executeLogKindGetGet.call(this, itemIndex ?? 0);
		case 'popsListGet':
			return executePopsListGet.call(this, itemIndex ?? 0);
		case 'popsGetGet':
			return executePopsGetGet.call(this, itemIndex ?? 0);
		case 'changeContactPost':
			return executeChangeContactPost.call(this, itemIndex ?? 0);
		case 'quotaGet':
			return executeQuotaGet.call(this, itemIndex ?? 0);
		case 'serviceInfosGet':
			return executeServiceInfosGet.call(this, itemIndex ?? 0);
		case 'serviceInfosPut':
			return executeServiceInfosPut.call(this, itemIndex ?? 0);
		case 'logsPost':
			return executeLogsPost.call(this, itemIndex ?? 0);
		case 'domainsListGet':
			return executeDomainsListGet.call(this, itemIndex ?? 0);
		case 'domainsCreatePost':
			return executeDomainsCreatePost.call(this, itemIndex ?? 0);
		case 'domainDeleteDelete':
			return executeDomainDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainGetGet':
			return executeDomainGetGet.call(this, itemIndex ?? 0);
		case 'domainUpdatePut':
			return executeDomainUpdatePut.call(this, itemIndex ?? 0);
		case 'backendsListGet':
			return executeBackendsListGet.call(this, itemIndex ?? 0);
		case 'backendsCreatePost':
			return executeBackendsCreatePost.call(this, itemIndex ?? 0);
		case 'backendDeleteDelete':
			return executeBackendDeleteDelete.call(this, itemIndex ?? 0);
		case 'backendGetGet':
			return executeBackendGetGet.call(this, itemIndex ?? 0);
		case 'cacheRulesListGet':
			return executeCacheRulesListGet.call(this, itemIndex ?? 0);
		case 'cacheRulesCreatePost':
			return executeCacheRulesCreatePost.call(this, itemIndex ?? 0);
		case 'cacheRuleDeleteDelete':
			return executeCacheRuleDeleteDelete.call(this, itemIndex ?? 0);
		case 'cacheRuleGetGet':
			return executeCacheRuleGetGet.call(this, itemIndex ?? 0);
		case 'cacheRuleUpdatePut':
			return executeCacheRuleUpdatePut.call(this, itemIndex ?? 0);
		case 'cacheRuleFlushPost':
			return executeCacheRuleFlushPost.call(this, itemIndex ?? 0);
		case 'cacheRuleTasksListGet':
			return executeCacheRuleTasksListGet.call(this, itemIndex ?? 0);
		case 'cacheRuleTaskGetGet':
			return executeCacheRuleTaskGetGet.call(this, itemIndex ?? 0);
		case 'domainFlushPost':
			return executeDomainFlushPost.call(this, itemIndex ?? 0);
		case 'domainLogsPost':
			return executeDomainLogsPost.call(this, itemIndex ?? 0);
		case 'domainStatisticsGet':
			return executeDomainStatisticsGet.call(this, itemIndex ?? 0);
		case 'domainTasksListGet':
			return executeDomainTasksListGet.call(this, itemIndex ?? 0);
		case 'domainTaskGetGet':
			return executeDomainTaskGetGet.call(this, itemIndex ?? 0);
		case 'subscriptionsListGet':
			return executeSubscriptionsListGet.call(this, itemIndex ?? 0);
		case 'subscriptionsCreatePost':
			return executeSubscriptionsCreatePost.call(this, itemIndex ?? 0);
		case 'subscriptionDeleteDelete':
			return executeSubscriptionDeleteDelete.call(this, itemIndex ?? 0);
		case 'subscriptionGetGet':
			return executeSubscriptionGetGet.call(this, itemIndex ?? 0);
		case 'logUrlPost':
			return executeLogUrlPost.call(this, itemIndex ?? 0);
		case 'sslDeleteDelete':
			return executeSslDeleteDelete.call(this, itemIndex ?? 0);
		case 'sslGetGet':
			return executeSslGetGet.call(this, itemIndex ?? 0);
		case 'sslCreatePost':
			return executeSslCreatePost.call(this, itemIndex ?? 0);
		case 'sslTasksListGet':
			return executeSslTasksListGet.call(this, itemIndex ?? 0);
		case 'sslTaskGetGet':
			return executeSslTaskGetGet.call(this, itemIndex ?? 0);
		case 'sslUpdatePost':
			return executeSslUpdatePost.call(this, itemIndex ?? 0);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudCdn"`);
}

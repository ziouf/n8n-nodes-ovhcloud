import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionBackendDeleteDelete,
	execute as executeBackendDeleteDelete,
} from './resources/domains/backendDeleteDelete.operation';
import {
	description as descriptionBackendGetGet,
	execute as executeBackendGetGet,
} from './resources/domains/backendGetGet.operation';
import {
	description as descriptionBackendsCreatePost,
	execute as executeBackendsCreatePost,
} from './resources/domains/backendsCreatePost.operation';
import {
	description as descriptionBackendsListGet,
	execute as executeBackendsListGet,
} from './resources/domains/backendsListGet.operation';
import {
	description as descriptionCacheRuleDeleteDelete,
	execute as executeCacheRuleDeleteDelete,
} from './resources/domains/cacheRuleDeleteDelete.operation';
import {
	description as descriptionCacheRuleFlushPost,
	execute as executeCacheRuleFlushPost,
} from './resources/domains/cacheRuleFlushPost.operation';
import {
	description as descriptionCacheRuleGetGet,
	execute as executeCacheRuleGetGet,
} from './resources/domains/cacheRuleGetGet.operation';
import {
	description as descriptionCacheRuleTaskGetGet,
	execute as executeCacheRuleTaskGetGet,
} from './resources/domains/cacheRuleTaskGetGet.operation';
import {
	description as descriptionCacheRuleTasksListGet,
	execute as executeCacheRuleTasksListGet,
} from './resources/domains/cacheRuleTasksListGet.operation';
import {
	description as descriptionCacheRuleUpdatePut,
	execute as executeCacheRuleUpdatePut,
} from './resources/domains/cacheRuleUpdatePut.operation';
import {
	description as descriptionCacheRulesCreatePost,
	execute as executeCacheRulesCreatePost,
} from './resources/domains/cacheRulesCreatePost.operation';
import {
	description as descriptionCacheRulesListGet,
	execute as executeCacheRulesListGet,
} from './resources/domains/cacheRulesListGet.operation';
import {
	description as descriptionDomainDeleteDelete,
	execute as executeDomainDeleteDelete,
} from './resources/domains/domainDeleteDelete.operation';
import {
	description as descriptionDomainFlushPost,
	execute as executeDomainFlushPost,
} from './resources/domains/domainFlushPost.operation';
import {
	description as descriptionDomainGetGet,
	execute as executeDomainGetGet,
} from './resources/domains/domainGetGet.operation';
import {
	description as descriptionDomainLogsPost,
	execute as executeDomainLogsPost,
} from './resources/domains/domainLogsPost.operation';
import {
	description as descriptionDomainStatisticsGet,
	execute as executeDomainStatisticsGet,
} from './resources/domains/domainStatisticsGet.operation';
import {
	description as descriptionDomainTaskGetGet,
	execute as executeDomainTaskGetGet,
} from './resources/domains/domainTaskGetGet.operation';
import {
	description as descriptionDomainTasksListGet,
	execute as executeDomainTasksListGet,
} from './resources/domains/domainTasksListGet.operation';
import {
	description as descriptionDomainUpdatePut,
	execute as executeDomainUpdatePut,
} from './resources/domains/domainUpdatePut.operation';
import {
	description as descriptionDomainsCreatePost,
	execute as executeDomainsCreatePost,
} from './resources/domains/domainsCreatePost.operation';
import {
	description as descriptionDomainsListGet,
	execute as executeDomainsListGet,
} from './resources/domains/domainsListGet.operation';
import {
	description as descriptionLogUrlPost,
	execute as executeLogUrlPost,
} from './resources/log/logUrlPost.operation';
import {
	description as descriptionSubscriptionDeleteDelete,
	execute as executeSubscriptionDeleteDelete,
} from './resources/log/subscriptionDeleteDelete.operation';
import {
	description as descriptionSubscriptionGetGet,
	execute as executeSubscriptionGetGet,
} from './resources/log/subscriptionGetGet.operation';
import {
	description as descriptionSubscriptionsCreatePost,
	execute as executeSubscriptionsCreatePost,
} from './resources/log/subscriptionsCreatePost.operation';
import {
	description as descriptionSubscriptionsListGet,
	execute as executeSubscriptionsListGet,
} from './resources/log/subscriptionsListGet.operation';
import {
	description as descriptionChangeContactPost,
	execute as executeChangeContactPost,
} from './resources/service/changeContactPost.operation';
import {
	description as descriptionLogKindGetGet,
	execute as executeLogKindGetGet,
} from './resources/service/logKindGetGet.operation';
import {
	description as descriptionLogKindListGet,
	execute as executeLogKindListGet,
} from './resources/service/logKindListGet.operation';
import {
	description as descriptionLogsPost,
	execute as executeLogsPost,
} from './resources/service/logsPost.operation';
import {
	description as descriptionPopsGetGet,
	execute as executePopsGetGet,
} from './resources/service/popsGetGet.operation';
import {
	description as descriptionPopsListGet,
	execute as executePopsListGet,
} from './resources/service/popsListGet.operation';
import {
	description as descriptionQuotaGet,
	execute as executeQuotaGet,
} from './resources/service/quotaGet.operation';
import {
	description as descriptionServiceGetGet,
	execute as executeServiceGetGet,
} from './resources/service/serviceGetGet.operation';
import {
	description as descriptionServiceInfosGet,
	execute as executeServiceInfosGet,
} from './resources/service/serviceInfosGet.operation';
import {
	description as descriptionServiceInfosPut,
	execute as executeServiceInfosPut,
} from './resources/service/serviceInfosPut.operation';
import {
	description as descriptionServicesListGet,
	execute as executeServicesListGet,
} from './resources/service/servicesListGet.operation';
import {
	description as descriptionSslCreatePost,
	execute as executeSslCreatePost,
} from './resources/ssl/sslCreatePost.operation';
import {
	description as descriptionSslDeleteDelete,
	execute as executeSslDeleteDelete,
} from './resources/ssl/sslDeleteDelete.operation';
import {
	description as descriptionSslGetGet,
	execute as executeSslGetGet,
} from './resources/ssl/sslGetGet.operation';
import {
	description as descriptionSslTaskGetGet,
	execute as executeSslTaskGetGet,
} from './resources/ssl/sslTaskGetGet.operation';
import {
	description as descriptionSslTasksListGet,
	execute as executeSslTasksListGet,
} from './resources/ssl/sslTasksListGet.operation';
import {
	description as descriptionSslUpdatePost,
	execute as executeSslUpdatePost,
} from './resources/ssl/sslUpdatePost.operation';

const { description, execute } = createOperationDispatcher(
	'cdnOperation',
	'ovhCloudCdn',
	[
	{
		name: 'Add Backend',
		value: 'backendsCreatePost',
		action: 'Add a backend IP',
		execute: executeBackendsCreatePost,
		description: descriptionBackendsCreatePost,
	},
	{
		name: 'Add Cache Rule',
		value: 'cacheRulesCreatePost',
		action: 'Add a cache rule to a domain',
		execute: executeCacheRulesCreatePost,
		description: descriptionCacheRulesCreatePost,
	},
	{
		name: 'Add Domain',
		value: 'domainsCreatePost',
		action: 'Add a domain on CDN',
		execute: executeDomainsCreatePost,
		description: descriptionDomainsCreatePost,
	},
	{
		name: 'Add SSL',
		value: 'sslCreatePost',
		action: 'Add a SSL on CDN or generate a Lets Encrypt certificate',
		execute: executeSslCreatePost,
		description: descriptionSslCreatePost,
	},
	{
		name: 'Change Contact',
		value: 'changeContactPost',
		action: 'Launch a contact change procedure',
		execute: executeChangeContactPost,
		description: descriptionChangeContactPost,
	},
	{
		name: 'Create Log Subscription',
		value: 'subscriptionsCreatePost',
		action: 'Create a subscription from logs to a pre-existing LDP stream',
		execute: executeSubscriptionsCreatePost,
		description: descriptionSubscriptionsCreatePost,
	},
	{
		name: 'Delete Backend',
		value: 'backendDeleteDelete',
		action: 'Remove a backend IP',
		execute: executeBackendDeleteDelete,
		description: descriptionBackendDeleteDelete,
	},
	{
		name: 'Delete Cache Rule',
		value: 'cacheRuleDeleteDelete',
		action: 'Remove a cache rule',
		execute: executeCacheRuleDeleteDelete,
		description: descriptionCacheRuleDeleteDelete,
	},
	{
		name: 'Delete Domain',
		value: 'domainDeleteDelete',
		action: 'Remove a domain from the CDN',
		execute: executeDomainDeleteDelete,
		description: descriptionDomainDeleteDelete,
	},
	{
		name: 'Delete Log Subscription',
		value: 'subscriptionDeleteDelete',
		action: 'Delete a subscription',
		execute: executeSubscriptionDeleteDelete,
		description: descriptionSubscriptionDeleteDelete,
	},
	{
		name: 'Delete SSL',
		value: 'sslDeleteDelete',
		action: 'Remove SSL of the CDN',
		execute: executeSslDeleteDelete,
		description: descriptionSslDeleteDelete,
	},
	{
		name: 'Flush Cache Rule',
		value: 'cacheRuleFlushPost',
		action: 'Flush the cache',
		execute: executeCacheRuleFlushPost,
		description: descriptionCacheRuleFlushPost,
	},
	{
		name: 'Flush Domain',
		value: 'domainFlushPost',
		action: 'Flush all cache',
		execute: executeDomainFlushPost,
		description: descriptionDomainFlushPost,
	},
	{
		name: 'Generate Log URL',
		value: 'logUrlPost',
		action: 'Generate a temporary URL to retrieve logs',
		execute: executeLogUrlPost,
		description: descriptionLogUrlPost,
	},
	{
		name: 'Generate Logs URL',
		value: 'logsPost',
		action: 'Generate URL to real time logs',
		execute: executeLogsPost,
		description: descriptionLogsPost,
	},
	{
		name: 'Get Backend',
		value: 'backendGetGet',
		action: 'Get backend properties',
		execute: executeBackendGetGet,
		description: descriptionBackendGetGet,
	},
	{
		name: 'Get Cache Rule',
		value: 'cacheRuleGetGet',
		action: 'Get cache rule properties',
		execute: executeCacheRuleGetGet,
		description: descriptionCacheRuleGetGet,
	},
	{
		name: 'Get Cache Rule Task',
		value: 'cacheRuleTaskGetGet',
		action: 'Get a cache rule task',
		execute: executeCacheRuleTaskGetGet,
		description: descriptionCacheRuleTaskGetGet,
	},
	{
		name: 'Get CDN Pop',
		value: 'popsGetGet',
		action: 'Get a CDN pop',
		execute: executePopsGetGet,
		description: descriptionPopsGetGet,
	},
	{
		name: 'Get CDN Service',
		value: 'serviceGetGet',
		action: 'Get CDN service details',
		execute: executeServiceGetGet,
		description: descriptionServiceGetGet,
	},
	{
		name: 'Get Domain',
		value: 'domainGetGet',
		action: 'Get domain properties',
		execute: executeDomainGetGet,
		description: descriptionDomainGetGet,
	},
	{
		name: 'Get Domain Logs URL',
		value: 'domainLogsPost',
		action: 'Generate URL to real time logs',
		execute: executeDomainLogsPost,
		description: descriptionDomainLogsPost,
	},
	{
		name: 'Get Domain Statistics',
		value: 'domainStatisticsGet',
		action: 'Return stats about a domain',
		execute: executeDomainStatisticsGet,
		description: descriptionDomainStatisticsGet,
	},
	{
		name: 'Get Domain Task',
		value: 'domainTaskGetGet',
		action: 'Get a domain task',
		execute: executeDomainTaskGetGet,
		description: descriptionDomainTaskGetGet,
	},
	{
		name: 'Get Log Kind',
		value: 'logKindGetGet',
		action: 'Get a log kind',
		execute: executeLogKindGetGet,
		description: descriptionLogKindGetGet,
	},
	{
		name: 'Get Log Subscription',
		value: 'subscriptionGetGet',
		action: 'Get subscription details',
		execute: executeSubscriptionGetGet,
		description: descriptionSubscriptionGetGet,
	},
	{
		name: 'Get Quota',
		value: 'quotaGet',
		action: 'Return quota history',
		execute: executeQuotaGet,
		description: descriptionQuotaGet,
	},
	{
		name: 'Get Service Info',
		value: 'serviceInfosGet',
		action: 'Get service information',
		execute: executeServiceInfosGet,
		description: descriptionServiceInfosGet,
	},
	{
		name: 'Get SSL',
		value: 'sslGetGet',
		action: 'Get SSL properties',
		execute: executeSslGetGet,
		description: descriptionSslGetGet,
	},
	{
		name: 'Get SSL Task',
		value: 'sslTaskGetGet',
		action: 'Get an SSL task',
		execute: executeSslTaskGetGet,
		description: descriptionSslTaskGetGet,
	},
	{
		name: 'List Backends',
		value: 'backendsListGet',
		action: 'List backends associated to the domain',
		execute: executeBackendsListGet,
		description: descriptionBackendsListGet,
	},
	{
		name: 'List Cache Rule Tasks',
		value: 'cacheRuleTasksListGet',
		action: 'List tasks associated to the cache rule',
		execute: executeCacheRuleTasksListGet,
		description: descriptionCacheRuleTasksListGet,
	},
	{
		name: 'List Cache Rules',
		value: 'cacheRulesListGet',
		action: 'List cache rules associated to the domain',
		execute: executeCacheRulesListGet,
		description: descriptionCacheRulesListGet,
	},
	{
		name: 'List CDN Pops',
		value: 'popsListGet',
		action: 'List of CDN Pops',
		execute: executePopsListGet,
		description: descriptionPopsListGet,
	},
	{
		name: 'List CDN Services',
		value: 'servicesListGet',
		action: 'List available CDN services',
		execute: executeServicesListGet,
		description: descriptionServicesListGet,
		default: true,
	},
	{
		name: 'List Domain Tasks',
		value: 'domainTasksListGet',
		action: 'List tasks associated to the domain',
		execute: executeDomainTasksListGet,
		description: descriptionDomainTasksListGet,
	},
	{
		name: 'List Domains',
		value: 'domainsListGet',
		action: 'List domains associated to this anycast',
		execute: executeDomainsListGet,
		description: descriptionDomainsListGet,
	},
	{
		name: 'List Log Kinds',
		value: 'logKindListGet',
		action: 'List available log kinds',
		execute: executeLogKindListGet,
		description: descriptionLogKindListGet,
	},
	{
		name: 'List Log Subscriptions',
		value: 'subscriptionsListGet',
		action: 'List subscription IDs for a cluster',
		execute: executeSubscriptionsListGet,
		description: descriptionSubscriptionsListGet,
	},
	{
		name: 'List SSL Tasks',
		value: 'sslTasksListGet',
		action: 'List tasks associated to the SSL',
		execute: executeSslTasksListGet,
		description: descriptionSslTasksListGet,
	},
	{
		name: 'Update Cache Rule',
		value: 'cacheRuleUpdatePut',
		action: 'Alter cache rule properties',
		execute: executeCacheRuleUpdatePut,
		description: descriptionCacheRuleUpdatePut,
	},
	{
		name: 'Update Domain',
		value: 'domainUpdatePut',
		action: 'Alter domain properties',
		execute: executeDomainUpdatePut,
		description: descriptionDomainUpdatePut,
	},
	{
		name: 'Update Service Info',
		value: 'serviceInfosPut',
		action: 'Update service information',
		execute: executeServiceInfosPut,
		description: descriptionServiceInfosPut,
	},
	{
		name: 'Update SSL',
		value: 'sslUpdatePost',
		action: 'Update an existing SSL with a custom certificate',
		execute: executeSslUpdatePost,
		description: descriptionSslUpdatePost,
	},
	],
);

export { description, execute };

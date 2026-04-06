/**
 * @brief CDN sub-resource operations for n8n node
 *
 * Aggregates all CDN Dedicated sub-resource operation modules including:
 * - serviceInfos: Get and update service information
 * - domains: Manage domains (list, get, create, update, delete)
 * - backends: Manage domain backends (list, get, create, delete)
 * - cacheRules: Manage cache rules (list, get, create, update, delete, flush)
 * - ssl: Manage SSL certificates (get, create, delete, update)
 * - tasks: Manage domain tasks (list, get)
 * - statistics: Get domain statistics and quota
 * - pops: List and get Points of Presence
 * - changeContact: Change service contacts
 * - logSubscriptions: Manage log subscriptions
 * - logUrl: Generate log URLs
 *
 * @remarks
 * Each sub-resource exports description and execute functions for UI configuration
 * and API execution.
 */
export * as serviceInfos from './serviceInfos';
export * as domains from './domains';
export * as backends from './backends';
export * as cacheRules from './cacheRules';
export * as ssl from './ssl';
export * as tasks from './tasks';
export * as statistics from './statistics';
export * as pops from './pops';
export * as changeContact from './changeContact';
export * as logSubscriptions from './logSubscriptions';
export * as logUrl from './logUrl';

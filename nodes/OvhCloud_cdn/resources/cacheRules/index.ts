/**
 * @brief Cache Rules resource operations for CDN Dedicated
 *
 * Provides operations for managing CDN Dedicated domain cache rules:
 * - List: List all cache rules for a domain
 * - Get: Get cache rule details
 * - Create: Add a new cache rule
 * - Update: Update cache rule properties
 * - Delete: Remove a cache rule
 * - Flush: Flush cache for a rule
 */
export { descriptionCacheRulesList, executeCacheRulesList } from './list.operation';
export { descriptionCacheRulesGet, executeCacheRulesGet } from './get.operation';
export { descriptionCacheRulesCreate, executeCacheRulesCreate } from './create.operation';
export { descriptionCacheRulesUpdate, executeCacheRulesUpdate } from './update.operation';
export { descriptionCacheRulesDelete, executeCacheRulesDelete } from './delete.operation';
export { descriptionCacheRulesFlush, executeCacheRulesFlush } from './flush.operation';

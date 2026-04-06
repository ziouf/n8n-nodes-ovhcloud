/**
 * @brief Domains resource operations for CDN Dedicated
 *
 * Provides operations for managing CDN Dedicated domains:
 * - List: List all domains
 * - Get: Get domain details
 * - Create: Add a new domain
 * - Update: Update domain properties
 * - Delete: Remove a domain
 */
export { descriptionDomainsList, executeDomainsList } from './list.operation';
export { descriptionDomainsGet, executeDomainsGet } from './get.operation';
export { descriptionDomainsCreate, executeDomainsCreate } from './create.operation';
export { descriptionDomainsUpdate, executeDomainsUpdate } from './update.operation';
export { descriptionDomainsDelete, executeDomainsDelete } from './delete.operation';

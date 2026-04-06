/**
 * @brief Backends resource operations for CDN Dedicated
 *
 * Provides operations for managing CDN Dedicated domain backends:
 * - List: List all backends for a domain
 * - Get: Get backend details
 * - Create: Add a new backend
 * - Delete: Remove a backend
 */
export { descriptionBackendsList, executeBackendsList } from './list.operation';
export { descriptionBackendsGet, executeBackendsGet } from './get.operation';
export { descriptionBackendsCreate, executeBackendsCreate } from './create.operation';
export { descriptionBackendsDelete, executeBackendsDelete } from './delete.operation';

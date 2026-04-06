/**
 * @brief Tasks resource operations for CDN Dedicated
 *
 * Provides operations for managing CDN Dedicated domain tasks:
 * - List: List all tasks for a domain
 * - Get: Get task details
 */
export { descriptionTasksList, executeTasksList } from './list.operation';
export { descriptionTasksGet, executeTasksGet } from './get.operation';

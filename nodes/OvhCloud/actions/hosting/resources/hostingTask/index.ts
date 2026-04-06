/**
 * @brief Hosting Task resource operations for Hosting
 *
 * Provides operations for managing private database tasks:
 * - List: List all tasks (with optional filters)
 * - Get: Get details of a specific task
 */
export { description as listDescription, execute as listExecute } from './list.operation';
export { description as getDescription, execute as getExecute } from './get.operation';

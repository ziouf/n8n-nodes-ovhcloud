/**
 * @brief Hosting Database resource operations for Hosting
 *
 * Provides operations for managing private database databases:
 * - List: List all databases
 * - Get: Get details of a specific database
 * - Create: Create a new database
 * - Delete: Delete a database
 */
export { description as listDescription, execute as listExecute } from './list.operation';
export { description as getDescription, execute as getExecute } from './get.operation';
export { description as createDescription, execute as createExecute } from './create.operation';
export { description as deleteDescription, execute as deleteExecute } from './delete.operation';

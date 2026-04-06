/**
 * @brief Hosting Whitelist resource operations for Hosting
 *
 * Provides operations for managing private database IP whitelists:
 * - List: List all whitelisted IPs
 * - Get: Get details of a specific whitelisted IP
 * - Create: Create a new whitelist entry
 * - Delete: Delete a whitelist entry
 */
export { description as listDescription, execute as listExecute } from './list.operation';
export { description as getDescription, execute as getExecute } from './get.operation';
export { description as createDescription, execute as createExecute } from './create.operation';
export { description as deleteDescription, execute as deleteExecute } from './delete.operation';

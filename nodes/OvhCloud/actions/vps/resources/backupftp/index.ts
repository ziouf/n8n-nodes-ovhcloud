/**
 * @brief Backup FTP resource operations for VPS
 *
 * Provides operations for querying backup FTP configuration for OVH VPS instances.
 *
 * @remarks
 * Backup FTP configuration includes connection details for VPS backups storage.
 * This resource only supports the get operation to retrieve current configuration.
 *
 * @example
 * // Resource: VPS -> Backup FTP
 * // serviceName = "vps1234567"
 * // Output: Backup FTP configuration with host, port, path, etc.
 */
export { description, execute } from './get.operation';

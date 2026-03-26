/**
 * @brief Automated Backup resource operations for VPS
 *
 * Provides operations for querying automated backup configuration for OVH VPS instances.
 *
 * @remarks
 * The automated backup feature allows automatic snapshot creation according to a schedule.
 * This resource only supports the get operation to retrieve current configuration.
 *
 * @example
 * // Resource: VPS -> Automated Backup
 * // serviceName = "vps1234567"
 * // Output: Automated backup configuration with enabled status, schedule, etc.
 */
export { description, execute } from './get.operation';

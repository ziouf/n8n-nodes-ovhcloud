/**
 * @brief Available Upgrade resource operations for VPS
 *
 * Provides operations for querying available VPS upgrade paths and options.
 *
 * @remarks
 * Upgrade paths show potential upgrades to more powerful VPS plans with corresponding pricing.
 * This resource only supports the get operation.
 *
 * @example
 * // Resource: VPS -> Available Upgrade
 * // serviceName = "vps1234567"
 * // Output: List of upgrade options with plan details and pricing
 */
export { description, execute } from './get.operation';

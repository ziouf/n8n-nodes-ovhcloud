/**
 * @brief IPs resource operations for VPS
 *
 * Provides operations for managing IP addresses assigned to OVH VPS instances.
 *
 * @remarks
 * IP operations include listing, getting, releasing, and updating IP addresses.
 *
 * @example
 * // Resource: VPS -> IPs
 * // Operation: List
 * // serviceName = "vps1234567"
 * // Output: List of IP addresses assigned to the VPS
 */
export { description, execute } from './list.operation';
export { descriptionIpsGet, executeIpsGet } from './get.operation';
export { descriptionIpsRelease, executeIpsRelease } from './release.operation';
export { descriptionIpsUpdate, executeIpsUpdate } from './update.operation';

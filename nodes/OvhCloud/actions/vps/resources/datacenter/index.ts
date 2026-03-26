/**
 * @brief Datacenter resource operations for VPS
 *
 * Provides operations for querying OVH VPS datacenter information:
 * - Get: Get datacenter details by service name
 * - List: List datacenters by country code
 *
 * @example
 * // Resource: VPS -> Datacenter
 * // Operation: Get
 * // serviceName = "vps1234567"
 * // Output: Datacenter details with location, IP addresses, etc.
 *
 * @example
 * // Resource: VPS -> Datacenter
 * // Operation: List
 * // vpsCountry = "FR" (France)
 * // Output: List of available datacenters in France
 */
export { description, execute } from './get.operation';
export { descriptionDatacenterList, executeDatacenterList } from './list.operation';

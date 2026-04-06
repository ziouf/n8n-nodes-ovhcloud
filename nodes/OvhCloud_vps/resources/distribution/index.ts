/**
 * @brief Distribution resource operations for VPS
 *
 * Provides operations for querying available OS distributions for OVH VPS instances.
 *
 * @remarks
 * Distribution information helps determine which operating systems can be deployed.
 * This resource supports get, listSoftware, and getSoftware operations.
 *
 * @example
 * // Resource: VPS -> Distribution
 * // serviceName = "vps1234567"
 * // Output: List of available distributions with name, version, architecture, etc.
 */
export { description, execute } from './get.operation';
export {
	descriptionDistributionListSoftware,
	executeDistributionListSoftware,
} from './listSoftware.operation';
export {
	descriptionDistributionGetSoftware,
	executeDistributionGetSoftware,
} from './getSoftware.operation';

/**
 * @brief Disks resource operations for VPS
 *
 * Provides operations for managing OVH VPS disk resources:
 * - Get: Get details of a specific disk
 * - List: List all disks attached to a VPS
 * - Update: Update disk properties
 * - Get Monitoring: Get disk monitoring metrics
 * - Get Usage: Get disk usage metrics
 *
 * @example
 * // Resource: VPS -> Disks
 * // Operation: List
 * // serviceName = "vps1234567"
 * // Output: Array of disk details with size, id, type, status, etc.
 *
 * @example
 * // Resource: VPS -> Disks
 * // Operation: Get
 * // serviceName = "vps1234567", diskId = "disk-123456"
 * // Output: Disk details with size, id, type, status, etc.
 */
export { description, execute } from './get.operation';
export { descriptionDisksList, executeDisksList } from './list.operation';
export { descriptionDisksUpdate, executeDisksUpdate } from './update.operation';
export {
	descriptionDisksGetMonitoring,
	executeDisksGetMonitoring,
} from './getMonitoring.operation';
export { descriptionDisksGetUsage, executeDisksGetUsage } from './getUsage.operation';

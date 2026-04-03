/**
 * @brief Automated Backup resource operations for VPS
 *
 * Provides operations for managing automated backup configuration for OVH VPS instances.
 *
 * @remarks
 * The automated backup feature allows automatic snapshot creation according to a schedule.
 * This resource supports get, list attached backups, detach, reschedule, restore, and list restore points.
 *
 * @example
 * // Resource: VPS -> Automated Backup
 * // serviceName = "vps1234567"
 * // Output: Automated backup configuration with enabled status, schedule, etc.
 */
export { description, execute } from './get.operation';
export {
	descriptionAutomatedBackupListAttached,
	executeAutomatedBackupListAttached,
} from './listAttached.operation';
export { descriptionAutomatedBackupDetach, executeAutomatedBackupDetach } from './detach.operation';
export {
	descriptionAutomatedBackupReschedule,
	executeAutomatedBackupReschedule,
} from './reschedule.operation';
export {
	descriptionAutomatedBackupRestore,
	executeAutomatedBackupRestore,
} from './restore.operation';
export {
	descriptionAutomatedBackupListRestorePoints,
	executeAutomatedBackupListRestorePoints,
} from './listRestorePoints.operation';

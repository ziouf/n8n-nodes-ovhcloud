/**
 * @brief Backup FTP resource operations for VPS
 *
 * Provides operations for managing backup FTP configuration for OVH VPS instances.
 *
 * @remarks
 * Backup FTP configuration includes connection details for VPS backups storage.
 * This resource supports get, ACL management, and password operations.
 *
 * @example
 * // Resource: VPS -> Backup FTP
 * // serviceName = "vps1234567"
 * // Output: Backup FTP configuration with host, port, path, etc.
 */
export { description, execute } from './get.operation';
export { descriptionBackupFtpListAcls, executeBackupFtpListAcls } from './listAcls.operation';
export { descriptionBackupFtpCreateAcl, executeBackupFtpCreateAcl } from './createAcl.operation';
export { descriptionBackupFtpDeleteAcl, executeBackupFtpDeleteAcl } from './deleteAcl.operation';
export {
	descriptionBackupFtpListAuthorizableBlocks,
	executeBackupFtpListAuthorizableBlocks,
} from './listAuthorizableBlocks.operation';
export {
	descriptionBackupFtpSetPassword,
	executeBackupFtpSetPassword,
} from './setPassword.operation';
export { descriptionBackupFtpGetAcl, executeBackupFtpGetAcl } from './getAcl.operation';
export { descriptionBackupFtpUpdateAcl, executeBackupFtpUpdateAcl } from './updateAcl.operation';

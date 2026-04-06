/**
 * @brief MS Services sub-resource operations for n8n node
 *
 * Aggregates all MS Services sub-resource operation modules including:
 * - serviceInfos: Get and update service information
 * - changeContact: Change admin, billing, or tech contact
 * - tasks: List and get tasks
 * - exchange: Manage Exchange configuration
 * - sharepoint: Manage SharePoint configuration
 * - sync: Manage Sync configuration
 * - upnSuffix: Manage UPN suffixes
 * - account: Manage accounts
 * - createMfaOnAllUsers: Create MFA on all users
 * - removeMfaOnAllUsers: Remove MFA on all users
 */
export * as serviceInfos from './serviceInfos';
export * as changeContact from './changeContact';
export * as tasks from './tasks';
export * as exchange from './exchange';
export * as sharepoint from './sharepoint';
export * as sync from './sync';
export * as upnSuffix from './upnSuffix';
export * as account from './account';
export * as createMfaOnAllUsers from './createMfaOnAllUsers';
export * as removeMfaOnAllUsers from './removeMfaOnAllUsers';
export * as accountChangePassword from './accountChangePassword';
export * as accountMfa from './accountMfa';
export * as accountMfaDisable from './accountMfaDisable';
export * as accountMfaEnable from './accountMfaEnable';
export * as accountMfaReset from './accountMfaReset';
export * as accountExchange from './accountExchange';
export * as accountExchangeConfigure from './accountExchangeConfigure';
export * as accountSharepoint from './accountSharepoint';
export * as accountSharepointClearSpace from './accountSharepointClearSpace';
export * as accountSharepointConfigure from './accountSharepointConfigure';
export * as accountSync from './accountSync';
export * as accountSyncConfigure from './accountSyncConfigure';
export * as sharepointDomain from './sharepointDomain';
export * as sharepointDomainServiceInfos from './sharepointDomainServiceInfos';
export * as sharepointRestoreAdminRights from './sharepointRestoreAdminRights';
export * as syncChangePassword from './syncChangePassword';

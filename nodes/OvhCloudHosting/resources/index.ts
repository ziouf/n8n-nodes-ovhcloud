/**
 * @brief Hosting sub-resource operations for n8n node
 *
 * Aggregates all hosting sub-resource operation modules including:
 * - availableVersions: List available DBMS versions
 * - config: Get and update database configuration
 * - hostingDatabase: Manage databases (list, get, create, delete)
 * - hostingTask: Manage tasks (list, get)
 * - hostingUser: Manage users (list, get, create, delete)
 * - hostingWhitelist: Manage IP whitelists (list, get, create, delete)
 * - serviceInfos: Get and update service information
 * - lifecycle: Manage private database lifecycle (changeContact, changeFtpPassword, changeVersion, confirmTermination, terminate)
 * - databaseCopy: Manage database copies (list, get, create, delete, restore)
 * - databaseDump: Manage database dumps (list, get, create, delete, restore)
 * - databaseExtension: Manage database extensions (list, get, enable, disable)
 * - databaseImport: Import databases (create)
 * - databaseWizard: Create databases via wizard (create)
 * - dump: Manage dumps (list, get, delete, restore)
 * - userGrant: Manage user grants (list, get, create, delete, update)
 * - userChangePassword: Change user password
 * - log: Manage logs (listKinds, getKind, listSubscriptions, getSubscription, createSubscription, deleteSubscription, generateUrl)
 * - metricsToken: Get metrics token
 * - cpuThrottle: Get CPU throttle status
 * - oom: List OOM events
 * - webhostingNetwork: Manage webhosting network (list, create, delete)
 * - webs: List webs
 * - quotaRefresh: Refresh quota
 * - generateTemporaryLogsLink: Generate temporary logs link
 * - availableOrderCapacities: List available order capacities
 * - tasks: Get task details
 * - whitelist: Update whitelist entries
 */
export * as availableVersions from './availableVersions';
export * as config from './config';
export * as hostingDatabase from './hostingDatabase';
export * as hostingTask from './hostingTask';
export * as hostingUser from './hostingUser';
export * as hostingWhitelist from './hostingWhitelist';
export * as serviceInfos from './serviceInfos';
export * as lifecycle from './lifecycle';
export * as databaseCopy from './databaseCopy';
export * as databaseDump from './databaseDump';
export * as databaseExtension from './databaseExtension';
export * as databaseImport from './databaseImport';
export * as databaseWizard from './databaseWizard';
export * as dump from './dump';
export * as userGrant from './userGrant';
export * as userChangePassword from './userChangePassword';
export * as log from './log';
export * as metricsToken from './metricsToken';
export * as cpuThrottle from './cpuThrottle';
export * as oom from './oom';
export * as webhostingNetwork from './webhostingNetwork';
export * as webs from './webs';
export * as quotaRefresh from './quotaRefresh';
export * as generateTemporaryLogsLink from './generateTemporaryLogsLink';
export * as availableOrderCapacities from './availableOrderCapacities';
export * as tasks from './tasks';
export * as whitelist from './whitelist';

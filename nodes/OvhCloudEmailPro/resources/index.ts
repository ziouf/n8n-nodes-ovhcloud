/**
 * @brief Email Pro sub-resource operations for n8n node
 *
 * Aggregates all Email Pro sub-resource operation modules including:
 * - serviceInfos: Get and update service information
 * - server: Get server information
 * - changeContact: Change admin, billing, or tech contact
 * - billing: Get billing plan and migration status
 * - updateFlags: Update flags on all accounts
 * - account: Manage accounts (list, get, update, delete, changePassword, terminate)
 * - accountAlias: Manage account aliases
 * - accountFullAccess: Manage full access permissions
 * - accountSendAs: Manage send-as permissions
 * - accountSendOnBehalfTo: Manage send-on-behalf-to permissions
 * - accountDiagnostics: Get and create account diagnostics
 * - accountTask: List and get account tasks
 * - domain: Manage domains
 * - domainDkim: Manage DKIM for domains
 * - domainDisclaimer: Manage disclaimers for domains
 * - externalContact: Manage external contacts
 * - task: List and get tasks
 */
export * as serviceInfos from './serviceInfos';
export * as server from './server';
export * as changeContact from './changeContact';
export * as billing from './billing';
export * as updateFlags from './updateFlags';
export * as account from './account';
export * as accountAlias from './accountAlias';
export * as accountFullAccess from './accountFullAccess';
export * as accountSendAs from './accountSendAs';
export * as accountSendOnBehalfTo from './accountSendOnBehalfTo';
export * as accountDiagnostics from './accountDiagnostics';
export * as accountTask from './accountTask';
export * as domain from './domain';
export * as domainDkim from './domainDkim';
export * as domainDisclaimer from './domainDisclaimer';
export * as externalContact from './externalContact';
export * as task from './task';

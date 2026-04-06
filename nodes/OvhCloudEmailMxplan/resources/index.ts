/**
 * @brief Email Mxplan sub-resource operations for n8n node
 *
 * Aggregates all Email Mxplan sub-resource operation modules including:
 * - serviceInfos: Get and update service information
 * - server: Get server information
 * - updateFlags: Update flags on all accounts
 * - account: Account CRUD and password management
 * - accountAlias: Account alias management
 * - accountCapabilities: Get account capabilities
 * - accountDiagnostic: Account diagnostic operations
 * - accountFullAccess: Full access permission management
 * - accountSendAs: Send-as permission management
 * - accountSendOnBehalfToList: Send-on-behalf-to permission management
 * - accountTask: Account task management
 * - domain: Domain management
 * - domainDisclaimer: Domain disclaimer management
 * - externalContact: External contact management
 * - task: Task management
 */
export * as serviceInfos from './serviceInfos';
export * as server from './server';
export * as updateFlags from './updateFlags';
export * as account from './account';
export * as accountAlias from './accountAlias';
export * as accountCapabilities from './accountCapabilities';
export * as accountDiagnostic from './accountDiagnostic';
export * as accountFullAccess from './accountFullAccess';
export * as accountSendAs from './accountSendAs';
export * as accountSendOnBehalfToList from './accountSendOnBehalfToList';
export * as accountTask from './accountTask';
export * as domain from './domain';
export * as domainDisclaimer from './domainDisclaimer';
export * as externalContact from './externalContact';
export * as task from './task';

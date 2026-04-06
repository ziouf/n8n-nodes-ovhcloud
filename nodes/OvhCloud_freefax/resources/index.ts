/**
 * @brief Freefax sub-resource operations for n8n node
 *
 * Aggregates all Freefax sub-resource operation modules including:
 * - update: Update Freefax service settings
 * - credits: Get Freefax credits
 * - changePassword: Change Freefax password
 * - directory: Manage directory information
 * - mainService: Get main service information
 * - serviceInfos: Get and update service information
 * - voicemail: Manage voicemail settings
 */
export * as update from './update';
export * as credits from './credits';
export * as changePassword from './changePassword';
export * as directory from './directory';
export * as mainService from './mainService';
export * as serviceInfos from './serviceInfos';
export * as voicemail from './voicemail';

/**
 * @brief Nutanix sub-resource operations for n8n node
 *
 * Aggregates all Nutanix sub-resource operation modules including:
 * - availabilities: Get cluster availabilities
 * - availableVersions: Get available versions
 * - requirements: Get requirements
 * - update: Update cluster
 * - changeContact: Change contact
 * - confirmTermination: Confirm termination
 * - nodes: Manage nodes
 * - serviceInfos: Get and update service information
 * - terminate: Terminate cluster
 */
export * as availabilities from './availabilities';
export * as availableVersions from './availableVersions';
export * as requirements from './requirements';
export * as update from './update';
export * as changeContact from './changeContact';
export * as confirmTermination from './confirmTermination';
export * as nodes from './nodes';
export * as serviceInfos from './serviceInfos';
export * as terminate from './terminate';

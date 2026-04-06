/**
 * @brief Dedicated Housing sub-resource operations for n8n node
 *
 * Aggregates all Dedicated Housing sub-resource operation modules including:
 * - serviceInfos: Get and update service information
 * - backupFtp: Manage backup FTP configuration and ACLs
 * - task: List, get, and cancel tasks
 * - orderable: Check orderable options (APC)
 *
 * @remarks
 * Each sub-resource exports `description()` functions for UI configuration
 * and `execute()` functions for API execution.
 */
export * as serviceInfos from './serviceInfos';
export * as backupFtp from './backupFtp';
export * as task from './task';
export * as orderable from './orderable';

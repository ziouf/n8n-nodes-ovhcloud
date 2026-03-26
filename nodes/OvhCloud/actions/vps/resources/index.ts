/**
 * @brief VPS sub-resource operations for n8n node
 *
 * Aggregates all VPS sub-resource operation modules including:
 * - automatedBackup: Get automated backup configuration
 * - availableUpgrade: Get available VPS upgrade paths
 * - backupftp: Get backup FTP configuration
 * - datacenter: Get or list datacenters by country
 * - disks: List or get VPS disks
 * - distribution: Get available OS distributions
 * - ipCountryAvailable: Get available IP country options
 * - ips: List IP addresses assigned to VPS
 * - models: List available VPS models
 * - option: Get additional VPS options
 * - secondaryDnsDomains: List secondary DNS domains
 * - serviceInfos: Get VPS service information
 * - snapshot: Create and get VPS snapshots
 * - status: Get VPS service status
 *
 * @remarks
 * Each sub-resource exports a `description()` function for UI configuration
 * and an `execute()` function for API execution.
 */
export * as automatedBackup from './automatedBackup';
export * as availableUpgrade from './availableUpgrade';
export * as backupftp from './backupftp';
export * as datacenter from './datacenter';
export * as disks from './disks';
export * as distribution from './distribution';
export * as ipCountryAvailable from './ipCountryAvailable';
export * as ips from './ips';
export * as models from './models';
export * as option from './option';
export * as secondaryDnsDomains from './secondaryDnsDomains';
export * as serviceInfos from './serviceInfos';
export * as snapshot from './snapshot';
export * as status from './status';

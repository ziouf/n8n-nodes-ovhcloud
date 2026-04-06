/**
 * @brief VPS sub-resource operations for n8n node
 *
 * Aggregates all VPS sub-resource operation modules including:
 * - automatedBackup: Get automated backup configuration
 * - availableUpgrade: Get available VPS upgrade paths
 * - backupftp: Get backup FTP configuration
 * - console: Get console URL and open VNC access
 * - contactChange: Change admin, billing, or tech contact
 * - confirmTermination: Confirm VPS termination
 * - datacenter: Get or list datacenters by country
 * - disks: List or get VPS disks
 * - distribution: Get available OS distributions
 * - images: List and get VPS images (BETA)
 * - ipCountryAvailable: Get available IP country options
 * - ips: List IP addresses assigned to VPS
 * - migration2020: Manage VPS 2020 to 2025 migration
 * - models: List available VPS models
 * - option: Get additional VPS options
 * - password: Set root password
 * - power: Start, stop, and reboot VPS
 * - reinstall: Reinstall VPS
 * - secondaryDnsDomains: Manage secondary DNS domains
 * - serviceInfos: Get VPS service information
 * - snapshot: Manage VPS snapshots
 * - status: Get VPS service status
 * - tasks: List and get VPS tasks
 * - templates: List and get VPS templates
 * - veeam: Manage Veeam backups
 *
 * @remarks
 * Each sub-resource exports a `description()` function for UI configuration
 * and an `execute()` function for API execution.
 */
export * as automatedBackup from './automatedBackup';
export * as availableUpgrade from './availableUpgrade';
export * as backupftp from './backupftp';
export * as console from './console';
export * as contactChange from './contactChange';
export * as confirmTermination from './confirmTermination';
export * as datacenter from './datacenter';
export * as disks from './disks';
export * as distribution from './distribution';
export * as images from './images';
export * as ipCountryAvailable from './ipCountryAvailable';
export * as ips from './ips';
export * as migration2020 from './migration2020';
export * as models from './models';
export * as option from './option';
export * as password from './password';
export * as power from './power';
export * as reinstall from './reinstall';
export * as secondaryDnsDomains from './secondaryDnsDomains';
export * as serviceInfos from './serviceInfos';
export * as snapshot from './snapshot';
export * as status from './status';
export * as tasks from './tasks';
export * as templates from './templates';
export * as termination from './termination';
export * as veeam from './veeam';

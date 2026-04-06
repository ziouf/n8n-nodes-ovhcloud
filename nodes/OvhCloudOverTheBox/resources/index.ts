/**
 * @brief OverTheBox sub-resource operations for n8n node
 *
 * Aggregates all OverTheBox sub-resource operation modules including:
 * - availableOffers: Get available offers
 * - devices: List devices
 * - hardware: List hardware services
 * - serviceInfos: Get and update service information
 * - terminate: Terminate service
 * - changeContact: Change contact
 * - cancelResiliation: Cancel resiliation
 * - autoMTU: Update auto MTU
 * - ipv6: Update IPv6 status
 * - backups: Manage backups
 * - deviceActions: Manage device actions
 * - ips: Manage IPs
 * - tasks: Manage tasks
 * - linkDevice: Link device
 * - linkHardware: Link hardware
 * - logSubscription: Manage log subscriptions
 * - logUrl: Generate log URL
 * - logKind: Manage log kinds
 * - migration: Manage migration offers
 * - remoteAccesses: Manage remote accesses
 * - statistics: Get statistics
 */
export * as availableOffers from './availableOffers';
export * as devices from './devices';
export * as hardware from './hardware';
export * as serviceInfos from './serviceInfos';
export * as terminate from './terminate';
export * as changeContact from './changeContact';
export * as cancelResiliation from './cancelResiliation';
export * as autoMTU from './autoMTU';
export * as ipv6 from './ipv6';
export * as backups from './backups';
export * as deviceActions from './deviceActions';
export * as ips from './ips';
export * as tasks from './tasks';
export * as linkDevice from './linkDevice';
export * as linkHardware from './linkHardware';
export * as logSubscription from './logSubscription';
export * as logUrl from './logUrl';
export * as logKind from './logKind';
export * as migration from './migration';
export * as remoteAccesses from './remoteAccesses';
export * as statistics from './statistics';

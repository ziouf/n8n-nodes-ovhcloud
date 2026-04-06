/**
 * @brief Metrics sub-resource operations for n8n node
 *
 * Aggregates all Metrics sub-resource operation modules including:
 * - serviceInfos: Get and update service information
 * - tokens: Manage tokens (list, get, create, update, delete)
 * - changeContact: Change admin, billing, or tech contact
 * - confirmTermination: Confirm service termination
 * - consumption: Get consumption data
 * - terminate: Terminate service
 * - lookupToken: Lookup a token
 * - quota: Set quota
 */
export * as serviceInfos from './serviceInfos';
export * as tokens from './tokens';
export * as changeContact from './changeContact';
export * as confirmTermination from './confirmTermination';
export * as consumption from './consumption';
export * as terminate from './terminate';
export * as lookupToken from './lookupToken';
export * as quota from './quota';

/**
 * @brief AllDom sub-resource operations for n8n node
 *
 * Aggregates all AllDom sub-resource operation modules including:
 * - domains: List and get domains attached to an AllDom service
 * - serviceInfos: Get and update AllDom service information
 *
 * @remarks
 * Each sub-resource exports a `description()` function for UI configuration
 * and an `execute()` function for API execution.
 */
export * as domains from './domains';
export * as serviceInfos from './serviceInfos';

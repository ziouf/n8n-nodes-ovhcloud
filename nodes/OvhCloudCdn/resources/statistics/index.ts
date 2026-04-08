/**
 * @brief Statistics resource operations for CDN Dedicated
 *
 * Provides operations for retrieving CDN Dedicated statistics:
 * - Get Domain Stats: Get statistics for a specific domain
 * - Get Quota: Get quota information for the service
 */
export {
	descriptionStatisticsGetDomainStats,
	executeStatisticsGetDomainStats,
} from './getDomainStats.operation';
export { descriptionStatisticsGetQuota, executeStatisticsGetQuota } from './getQuota.operation';

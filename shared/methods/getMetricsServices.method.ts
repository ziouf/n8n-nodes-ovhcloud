import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Metrics services
 *
 * Retrieves available Metrics service names from the OVH API for dynamic dropdown selection.
 */
export const getMetricsServices: ListSearchLoader = createServiceListSearch('/metrics');

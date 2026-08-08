import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Dedicated Cluster services
 *
 * Retrieves available Dedicated Cluster service names from the OVH API for dynamic dropdown selection.
 */
export const getDedicatedClusterServices: ListSearchLoader =
	createServiceListSearch('/dedicated/cluster');

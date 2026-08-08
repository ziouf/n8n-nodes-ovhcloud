import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Cluster Hadoop services
 *
 * Retrieves available Cluster Hadoop service names from the OVH API for dynamic dropdown selection.
 */
export const getClusterHadoopServices: ListSearchLoader =
	createServiceListSearch('/cluster/hadoop');

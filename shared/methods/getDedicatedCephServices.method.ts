import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Dedicated Ceph services
 *
 * Retrieves available Dedicated Ceph service names from the OVH API for dynamic dropdown selection.
 */
export const getDedicatedCephServices: ListSearchLoader =
	createServiceListSearch('/dedicated/ceph');

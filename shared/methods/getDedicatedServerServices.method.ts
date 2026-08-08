import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Dedicated Server services
 *
 * Retrieves available dedicated server service names from the OVH API for dynamic dropdown selection.
 */
export const getDedicatedServerServices: ListSearchLoader =
	createServiceListSearch('/dedicated/server');

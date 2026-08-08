import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for NetApp storage services
 *
 * Retrieves available NetApp service names from the OVH API for dynamic dropdown selection.
 */
export const getNetAppServices: ListSearchLoader = createServiceListSearch('/storage/netapp');

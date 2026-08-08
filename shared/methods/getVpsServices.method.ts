import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for VPS services
 *
 * Retrieves available VPS service names from the OVH API for dynamic dropdown selection.
 */
export const getVpsServices: ListSearchLoader = createServiceListSearch('/vps');

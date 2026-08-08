import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Stack MIS services
 *
 * Retrieves available Stack MIS service names from the OVH API for dynamic dropdown selection.
 */
export const getStackServices: ListSearchLoader = createServiceListSearch('/stack/mis');

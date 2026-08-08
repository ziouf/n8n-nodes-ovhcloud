import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for AllDom services
 *
 * Retrieves available AllDom service names from the OVH API for dynamic dropdown selection.
 */
export const getAllDomServices: ListSearchLoader = createServiceListSearch('/allDom');

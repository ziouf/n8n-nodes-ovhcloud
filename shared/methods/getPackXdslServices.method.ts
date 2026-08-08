import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Pack Xdsl services
 *
 * Retrieves available Pack Xdsl service names from the OVH API for dynamic dropdown selection.
 */
export const getPackXdslServices: ListSearchLoader = createServiceListSearch('/pack/xdsl');

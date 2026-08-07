import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Xdsl services
 *
 * Retrieves available Xdsl service names from the OVH API for dynamic dropdown selection.
 */
export const getXdslServices: ListSearchLoader = createServiceListSearch('/xdsl');

export type { ListSearchLoader } from './listSearch';

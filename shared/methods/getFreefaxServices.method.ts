import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Freefax services
 *
 * Retrieves available Freefax service names from the OVH API for dynamic dropdown selection.
 */
export const getFreefaxServices: ListSearchLoader = createServiceListSearch('/freefax');

export type { ListSearchLoader } from './listSearch';

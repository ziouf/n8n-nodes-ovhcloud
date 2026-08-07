import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for OverTheBox services
 *
 * Retrieves available OverTheBox service names from the OVH API for dynamic dropdown selection.
 */
export const getOverTheBoxServices: ListSearchLoader = createServiceListSearch('/overTheBox');

export type { ListSearchLoader } from './listSearch';

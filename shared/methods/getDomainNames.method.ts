import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for domain names
 *
 * Retrieves available domain names from the OVH API for dynamic dropdown selection.
 */
export const getDomainNames: ListSearchLoader = createServiceListSearch('/domain');

export type { ListSearchLoader } from './listSearch';

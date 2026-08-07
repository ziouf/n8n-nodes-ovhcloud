import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Horizon View services
 *
 * Retrieves available Horizon View service names from the OVH API for dynamic dropdown selection.
 */
export const getHorizonViewServices: ListSearchLoader = createServiceListSearch('/horizonView');

export type { ListSearchLoader } from './listSearch';

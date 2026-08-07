import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Dedicated Nasha services
 *
 * Retrieves available Dedicated Nasha service names from the OVH API for dynamic dropdown selection.
 */
export const getDedicatedNashaServices: ListSearchLoader =
	createServiceListSearch('/dedicated/nasha');

export type { ListSearchLoader } from './listSearch';

import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Dedicated Housing services
 *
 * Retrieves available Dedicated Housing service names from the OVH API for dynamic dropdown selection.
 */
export const getDedicatedHousingServices: ListSearchLoader =
	createServiceListSearch('/dedicated/housing');

export type { ListSearchLoader } from './listSearch';

import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Dedicated Cloud services
 *
 * Retrieves available dedicated cloud service names from the OVH API for dynamic dropdown selection.
 */
export const getDedicatedCloudServices: ListSearchLoader =
	createServiceListSearch('/dedicatedCloud');

export type { ListSearchLoader } from './listSearch';

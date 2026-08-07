import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for OvhCloudConnect services
 *
 * Retrieves available OvhCloudConnect service names from the OVH API for dynamic dropdown selection.
 */
export const getOvhCloudConnectServices: ListSearchLoader =
	createServiceListSearch('/ovhCloudConnect');

export type { ListSearchLoader } from './listSearch';

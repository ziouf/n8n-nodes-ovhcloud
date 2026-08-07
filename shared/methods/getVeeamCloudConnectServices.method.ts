import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Veeam Cloud Connect services
 *
 * Retrieves available Veeam Cloud Connect service names from the OVH API for dynamic dropdown selection.
 */
export const getVeeamCloudConnectServices: ListSearchLoader =
	createServiceListSearch('/veeamCloudConnect');

export type { ListSearchLoader } from './listSearch';

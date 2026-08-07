import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Hosting Web services
 *
 * Retrieves available hosting web service names from the OVH API for dynamic dropdown selection.
 */
export const getHostingWebServices: ListSearchLoader = createServiceListSearch('/hosting/web');

export type { ListSearchLoader } from './listSearch';

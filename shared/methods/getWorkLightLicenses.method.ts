import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for WorkLight licenses
 *
 * Retrieves available WorkLight license service names from the OVH API for dynamic dropdown selection.
 */
export const getWorkLightLicenses: ListSearchLoader = createServiceListSearch('/license/worklight');

export type { ListSearchLoader } from './listSearch';

import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Nutanix services
 *
 * Retrieves available Nutanix service names from the OVH API for dynamic dropdown selection.
 */
export const getNutanixServices: ListSearchLoader = createServiceListSearch('/nutanix');

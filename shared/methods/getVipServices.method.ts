import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for VIP services
 *
 * Retrieves available VIP service names from the OVH API for dynamic dropdown selection.
 */
export const getVipServices: ListSearchLoader = createServiceListSearch('/vip');

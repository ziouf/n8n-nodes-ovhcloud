import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for SMS services
 *
 * Retrieves available SMS service names from the OVH API for dynamic dropdown selection.
 */
export const getSmsServices: ListSearchLoader = createServiceListSearch('/sms');

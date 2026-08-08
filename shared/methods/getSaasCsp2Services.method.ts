import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Office SaaS CSP2 services
 *
 * Retrieves available Office SaaS CSP2 service names from the OVH API for dynamic dropdown selection.
 */
export const getSaasCsp2Services: ListSearchLoader = createServiceListSearch('/saas/csp2');

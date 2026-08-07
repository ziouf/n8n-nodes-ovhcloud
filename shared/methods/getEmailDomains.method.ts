import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for email domains
 *
 * Retrieves available email domain names from the OVH API for dynamic dropdown selection.
 */
export const getEmailDomains: ListSearchLoader = createServiceListSearch('/email/domain');

export type { ListSearchLoader } from './listSearch';

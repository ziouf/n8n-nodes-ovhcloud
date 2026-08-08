import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Support Tickets
 *
 * Retrieves available support ticket IDs from the OVH API for dynamic dropdown selection.
 * Ticket IDs are normalized to strings for n8n dropdown compatibility.
 */
export const getSupportTicketServices: ListSearchLoader = createServiceListSearch(
	'/supportTicket',
	{ map: (id) => `Ticket #${id}` },
);

/**
 * @brief PoPs resource operations for CDN Dedicated
 *
 * Provides operations for retrieving CDN Points of Presence (PoPs):
 * - List: List all PoPs
 * - Get: Get details of a specific PoP
 */
export { descriptionPopsGet, executePopsGet } from './get.operation';
export { descriptionPopsList, executePopsList } from './list.operation';

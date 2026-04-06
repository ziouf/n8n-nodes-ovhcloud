/**
 * @brief Domains resource operations for AllDom
 *
 * Provides operations for managing domains attached to an AllDom service:
 * - List Domains: List all domains attached to this AllDom
 * - Get Domain: Get properties of a specific domain
 */
export { description, execute } from './listDomains.operation';
export {
	descriptionAllDomDomainsGetDomain,
	executeAllDomDomainsGetDomain,
} from './getDomain.operation';

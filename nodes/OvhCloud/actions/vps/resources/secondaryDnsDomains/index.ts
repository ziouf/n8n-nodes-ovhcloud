/**
 * @brief Secondary DNS Domains resource operations for VPS
 *
 * Provides operations for managing secondary DNS domains:
 * - List: List secondary DNS domains
 * - Create Domain: Add a secondary DNS domain
 * - Get Domain: Get details of a secondary DNS domain
 * - Delete Domain: Remove a secondary DNS domain
 * - Get Name Server: Get DNS server for a domain
 * - Get Available Name Server: Get available name servers
 */
export { description, execute } from './list.operation';
export {
	descriptionSecondaryDnsDomainsCreateDomain,
	executeSecondaryDnsDomainsCreateDomain,
} from './createDomain.operation';
export {
	descriptionSecondaryDnsDomainsGetDomain,
	executeSecondaryDnsDomainsGetDomain,
} from './getDomain.operation';
export {
	descriptionSecondaryDnsDomainsDeleteDomain,
	executeSecondaryDnsDomainsDeleteDomain,
} from './deleteDomain.operation';
export {
	descriptionSecondaryDnsDomainsGetNameServer,
	executeSecondaryDnsDomainsGetNameServer,
} from './getNameServer.operation';
export {
	descriptionSecondaryDnsDomainsGetAvailableNameServer,
	executeSecondaryDnsDomainsGetAvailableNameServer,
} from './getAvailableNameServer.operation';

/**
 * @brief Dynamic list search methods for OVH resources
 *
 * Provides dynamic list search functions used by n8n to populate dropdown options
 * in the node UI. These methods query the OVH API to retrieve available resources
 * for selection in other operations, including service IDs, email domains, and VPS services.
 *
 * @remarks
 * These methods are used by n8n's `resourceLocator` mode with `searchListMethod` configuration.
 * Each method returns a standardized format expected by n8n's dropdown components.
 *
 * @example
 * // Used in resourceLocator modes in n8n nodes:
 * // {
 * //   modes: [{
 * //     displayName: 'From List',
 * //     name: 'list',
 * //     type: 'list',
 * //     typeOptions: {
 * //       searchListMethod: 'getVpsServices',
 * //       searchable: true,
 * //     }
 * //   }]
 * // }
 *
 * @example
 * // Returns format for n8n UI dropdown:
 * // {
 * //   "results": [
 * //     { "name": "vps1234567", "value": "vps1234567" },
 * //     { "name": "vps7654321", "value": "vps7654321" }
 * //   ]
 * // }
 */
export { getServiceIds } from './getServiceIds.method';
export { getEmailDomains } from './getEmailDomains.method';
export { getVpsServices } from './getVpsServices.method';

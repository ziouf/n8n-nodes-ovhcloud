/**
 * @brief HorizonView sub-resource operations for n8n node
 *
 * Aggregates all HorizonView sub-resource operation modules including:
 * - serviceInfos: Get and update service information
 * - accessPoint: Manage access points (pools)
 * - accessPointCustomerNetwork: Manage customer networks on access points
 * - customerNetwork: Manage customer networks
 * - dedicatedHorizon: Manage dedicated Horizon properties
 * - dedicatedHorizonCustomerUser: Manage customer users
 * - dedicatedHorizonTask: Manage tasks
 * - dedicatedHorizonUser: Manage user properties
 * - domainTrust: Manage domain trusts and Active Directory
 * - confirmTermination: Confirm service termination
 * - terminate: Request service termination
 */
export * as serviceInfos from './serviceInfos';
export * as accessPoint from './accessPoint';
export * as accessPointCustomerNetwork from './accessPointCustomerNetwork';
export * as customerNetwork from './customerNetwork';
export * as dedicatedHorizon from './dedicatedHorizon';
export * as dedicatedHorizonCustomerUser from './dedicatedHorizonCustomerUser';
export * as dedicatedHorizonTask from './dedicatedHorizonTask';
export * as dedicatedHorizonUser from './dedicatedHorizonUser';
export * as domainTrust from './domainTrust';
export * as confirmTermination from './confirmTermination';
export * as terminate from './terminate';

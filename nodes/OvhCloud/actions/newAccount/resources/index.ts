/**
 * @brief New Account sub-resource operations for n8n node
 *
 * Aggregates all New Account sub-resource operation modules including:
 * - createAccount: Create a new OVH account
 * - area: Get available areas
 * - contracts: Get available contracts
 * - corporationType: Get corporation types
 * - countries: Get available countries
 * - creationRules: Get creation rules
 * - legalform: Get legal forms
 * - rules: Get rules by providing account details
 */
export * as createAccount from './createAccount';
export * as area from './area';
export * as contracts from './contracts';
export * as corporationType from './corporationType';
export * as countries from './countries';
export * as creationRules from './creationRules';
export * as legalform from './legalform';
export * as rules from './rules';

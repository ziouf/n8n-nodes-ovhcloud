/**
 * @brief Service Infos resource operations for VPS
 *
 * Provides operations for managing VPS service information:
 * - Get: Get service information
 * - Update: Update service information
 */
export { description, execute } from './get.operation';
export { descriptionServiceInfosUpdate, executeServiceInfosUpdate } from './update.operation';

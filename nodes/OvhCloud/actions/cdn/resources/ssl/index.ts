/**
 * @brief SSL resource operations for CDN Dedicated
 *
 * Provides operations for managing CDN Dedicated SSL certificates:
 * - Get: Get SSL configuration
 * - Create: Add an SSL certificate
 * - Delete: Remove the SSL certificate
 * - Update: Update the SSL certificate
 */
export { descriptionSslGet, executeSslGet } from './get.operation';
export { descriptionSslCreate, executeSslCreate } from './create.operation';
export { descriptionSslDelete, executeSslDelete } from './delete.operation';
export { descriptionSslUpdate, executeSslUpdate } from './update.operation';

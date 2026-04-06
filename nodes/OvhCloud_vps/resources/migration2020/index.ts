/**
 * @brief Migration 2020 resource operations for VPS
 *
 * Provides operations for managing VPS migration to the 2020 infrastructure:
 * - Get: Get migration status
 * - Cancel: Cancel a pending migration
 * - Request: Request a migration
 * - Update: Update migration settings
 */
export { description, execute } from './get.operation';
export { descriptionMigration2020Cancel, executeMigration2020Cancel } from './cancel.operation';
export { descriptionMigration2020Request, executeMigration2020Request } from './request.operation';
export { descriptionMigration2020Update, executeMigration2020Update } from './update.operation';

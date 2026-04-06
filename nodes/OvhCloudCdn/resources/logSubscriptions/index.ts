/**
 * @brief Log Subscriptions resource operations for CDN Dedicated
 *
 * Provides operations for managing CDN Dedicated log subscriptions:
 * - List: List all log subscriptions
 * - Get: Get subscription details
 * - Create: Add a new log subscription
 * - Delete: Remove a log subscription
 */
export { descriptionLogSubscriptionsList, executeLogSubscriptionsList } from './list.operation';
export { descriptionLogSubscriptionsGet, executeLogSubscriptionsGet } from './get.operation';
export {
	descriptionLogSubscriptionsCreate,
	executeLogSubscriptionsCreate,
} from './create.operation';
export {
	descriptionLogSubscriptionsDelete,
	executeLogSubscriptionsDelete,
} from './delete.operation';

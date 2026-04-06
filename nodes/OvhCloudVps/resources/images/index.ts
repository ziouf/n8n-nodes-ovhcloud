/**
 * @brief Images resource operations for VPS (BETA)
 *
 * Provides operations for managing VPS images:
 * - List Available: List available images for a VPS
 * - Get Current: Get the current image of a VPS
 * - Get Details: Get details of a specific available image
 *
 * @remarks
 * This is a BETA feature. API endpoints may change.
 */
export { description, execute } from './getCurrent.operation';
export {
	descriptionImagesListAvailable,
	executeImagesListAvailable,
} from './listAvailable.operation';
export { descriptionImagesGetDetails, executeImagesGetDetails } from './getDetails.operation';

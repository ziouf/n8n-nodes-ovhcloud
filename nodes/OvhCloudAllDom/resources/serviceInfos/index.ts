/**
 * @brief Service Infos resource operations for AllDom
 *
 * Provides operations for managing AllDom service information:
 * - Get: Get service information
 * - Update: Update service information
 */
export { description, execute } from './get.operation';
export {
	descriptionAllDomServiceInfosUpdate,
	executeAllDomServiceInfosUpdate,
} from './update.operation';

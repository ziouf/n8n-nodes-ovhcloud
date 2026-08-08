import type { ListSearchLoader } from './listSearch';
import { createServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Public Cloud Projects
 *
 * Retrieves available public cloud project IDs from the OVH API for dynamic dropdown selection.
 */
export const getPublicCloudProjects: ListSearchLoader =
	createServiceListSearch('/publicCloud/project');

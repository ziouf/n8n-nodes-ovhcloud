import type { ListSearchLoader } from './listSearch';
import { createProjectScopedServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Public Cloud Block Storage Volumes
 *
 * Retrieves available volume IDs from the OVH API for dynamic dropdown selection.
 * Project ID is resolved from the `publicCloudProjectId` node parameter.
 */
export const getPublicCloudBlockStorageVolumes: ListSearchLoader =
	createProjectScopedServiceListSearch(
		(projectId) => `/publicCloud/project/${projectId}/blockStorage/volume`,
	);

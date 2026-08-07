import { createProjectScopedServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Public Cloud Block Storage Backups
 *
 * Retrieves available block storage backup IDs from the OVH API for dynamic dropdown selection.
 * Project ID is resolved from the `publicCloudProjectId` node parameter.
 */
export const getPublicCloudBlockStorageBackups: ListSearchLoader =
	createProjectScopedServiceListSearch(
		(projectId) => `/publicCloud/project/${projectId}/blockStorage/backup`,
	);

export type { ListSearchLoader } from './listSearch';

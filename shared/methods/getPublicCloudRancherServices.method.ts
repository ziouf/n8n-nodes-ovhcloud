import { createProjectScopedServiceListSearch } from './listSearch';

/**
 * @brief Dynamic list search for Public Cloud Rancher Services
 *
 * Retrieves available Rancher service IDs from the OVH API for dynamic dropdown selection.
 * Project ID is resolved from the `publicCloudProjectId` node parameter.
 */
export const getPublicCloudRancherServices: ListSearchLoader = createProjectScopedServiceListSearch(
	(projectId) => `/publicCloud/project/${projectId}/rancher`,
);

export type { ListSearchLoader } from './listSearch';

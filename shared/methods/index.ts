// List-search loaders — consolidated barrel.
// Each export is verbatim from its source .method.ts file.
import {
	createProjectScopedServiceListSearch,
	createServiceListSearch,
	type ListSearchLoader,
} from './listSearch';

export const getAllDomServices: ListSearchLoader = createServiceListSearch('/allDom');
export const getClusterHadoopServices: ListSearchLoader =
	createServiceListSearch('/cluster/hadoop');
export const getDedicatedCephServices: ListSearchLoader =
	createServiceListSearch('/dedicated/ceph');
export const getDedicatedCloudServices: ListSearchLoader =
	createServiceListSearch('/dedicatedCloud');
export const getDedicatedClusterServices: ListSearchLoader =
	createServiceListSearch('/dedicated/cluster');
export const getDedicatedHousingServices: ListSearchLoader =
	createServiceListSearch('/dedicated/housing');
export const getDedicatedNashaServices: ListSearchLoader =
	createServiceListSearch('/dedicated/nasha');
export const getDedicatedServerServices: ListSearchLoader =
	createServiceListSearch('/dedicated/server');
export const getDomainNames: ListSearchLoader = createServiceListSearch('/domain');
export const getEmailDomains: ListSearchLoader = createServiceListSearch('/email/domain');
export const getFreefaxServices: ListSearchLoader = createServiceListSearch('/freefax');
export const getHorizonViewServices: ListSearchLoader = createServiceListSearch('/horizonView');
export const getHostingWebServices: ListSearchLoader = createServiceListSearch('/hosting/web');
export const getMetricsServices: ListSearchLoader = createServiceListSearch('/metrics');
export const getNetAppServices: ListSearchLoader = createServiceListSearch('/storage/netapp');
export const getNutanixServices: ListSearchLoader = createServiceListSearch('/nutanix');
export const getOverTheBoxServices: ListSearchLoader = createServiceListSearch('/overTheBox');
export const getOvhCloudConnectServices: ListSearchLoader =
	createServiceListSearch('/ovhCloudConnect');
export const getPackXdslServices: ListSearchLoader = createServiceListSearch('/pack/xdsl');
export const getPublicCloudBlockStorageBackups: ListSearchLoader =
	createProjectScopedServiceListSearch(
		(projectId) => `/publicCloud/project/${projectId}/blockStorage/backup`,
	);
export const getPublicCloudBlockStorageSnapshots: ListSearchLoader =
	createProjectScopedServiceListSearch(
		(projectId) => `/publicCloud/project/${projectId}/blockStorage/snapshot`,
	);
export const getPublicCloudBlockStorageVolumes: ListSearchLoader =
	createProjectScopedServiceListSearch(
		(projectId) => `/publicCloud/project/${projectId}/blockStorage/volume`,
	);
export const getPublicCloudProjects: ListSearchLoader =
	createServiceListSearch('/publicCloud/project');
export const getPublicCloudRancherServices: ListSearchLoader = createProjectScopedServiceListSearch(
	(projectId) => `/publicCloud/project/${projectId}/rancher`,
);
export const getSaasCsp2Services: ListSearchLoader = createServiceListSearch('/saas/csp2');
export const getSmsServices: ListSearchLoader = createServiceListSearch('/sms');
export const getStackServices: ListSearchLoader = createServiceListSearch('/stack/mis');
export const getSupportTicketServices: ListSearchLoader = createServiceListSearch(
	'/supportTicket',
	{ map: (id) => `Ticket #${id}` },
);
export const getVeeamCloudConnectServices: ListSearchLoader =
	createServiceListSearch('/veeamCloudConnect');
export const getVipServices: ListSearchLoader = createServiceListSearch('/vip');
export const getVpsServices: ListSearchLoader = createServiceListSearch('/vps');
export const getWorkLightLicenses: ListSearchLoader = createServiceListSearch('/license/worklight');
export const getXdslServices: ListSearchLoader = createServiceListSearch('/xdsl');

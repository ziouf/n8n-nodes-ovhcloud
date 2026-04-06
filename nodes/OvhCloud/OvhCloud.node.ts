import {
	IExecuteFunctions,
	NodeApiError,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName } from '../../credentials/OvhCloudApi.credentials';
import {
	getServiceIds,
	getEmailDomains,
	getVpsServices,
	getDedicatedCloudServices,
} from './methods/index';

// Existing resources
import { description as meDescription, execute as meExecute } from './actions/me/index';
import {
	description as servicesDescription,
	execute as servicesExecute,
} from './actions/services/index';
import { description as emailDescription, execute as emailExecute } from './actions/email/index';
import { description as vpsDescription, execute as vpsExecute } from './actions/vps/index';
import { description as domainDescription, execute as domainExecute } from './actions/domain/index';
import {
	description as ipLoadbalancingDescription,
	execute as ipLoadbalancingExecute,
} from './actions/ipLoadbalancing/index';
import { description as ipDescription, execute as ipExecute } from './actions/ip/index';
import { description as vrackDescription, execute as vrackExecute } from './actions/vrack/index';
import { description as smsDescription, execute as smsExecute } from './actions/sms/index';
import { description as sslDescription, execute as sslExecute } from './actions/ssl/index';
import {
	description as hostingDescription,
	execute as hostingExecute,
} from './actions/hosting/index';
import {
	description as dedicatedDescription,
	execute as dedicatedExecute,
} from './actions/dedicated/index';
import {
	description as dedicatedCloudDescription,
	execute as dedicatedCloudExecute,
} from './actions/dedicated/resources/dedicatedCloud/index';
import {
	description as dedicatedCephDescription,
	execute as dedicatedCephExecute,
} from './actions/dedicated/resources/dedicatedCeph/index';
import {
	description as dedicatedClusterDescription,
	execute as dedicatedClusterExecute,
} from './actions/dedicated/resources/dedicatedCluster/index';
import {
	description as dedicatedHousingDescription,
	execute as dedicatedHousingExecute,
} from './actions/dedicated/resources/dedicatedHousing/index';
import {
	description as dedicatedInstallationTemplateDescription,
	execute as dedicatedInstallationTemplateExecute,
} from './actions/dedicated/resources/dedicatedInstallationTemplate/index';
import {
	description as dedicatedNashaDescription,
	execute as dedicatedNashaExecute,
} from './actions/dedicated/resources/dedicatedNasha/index';
import {
	description as dedicatedServerDescription,
	execute as dedicatedServerExecute,
} from './actions/dedicated/resources/dedicatedServer/index';
import { description as dbaasDescription, execute as dbaasExecute } from './actions/dbaas/index';

// New V1 resources (batch 1-3)
import { description as allDomDescription, execute as allDomExecute } from './actions/allDom/index';
import { description as authDescription, execute as authExecute } from './actions/auth/index';
import { description as cdnDescription, execute as cdnExecute } from './actions/cdn/index';
import { description as cloudDescription, execute as cloudExecute } from './actions/cloud/index';
import {
	description as connectivityDescription,
	execute as connectivityExecute,
} from './actions/connectivity/index';
import {
	description as contactDescription,
	execute as contactExecute,
} from './actions/contact/index';
import {
	description as emailExchangeDescription,
	execute as emailExchangeExecute,
} from './actions/emailExchange/index';
import {
	description as emailMxplanDescription,
	execute as emailMxplanExecute,
} from './actions/emailMxplan/index';
import {
	description as emailProDescription,
	execute as emailProExecute,
} from './actions/emailPro/index';
import {
	description as freefaxDescription,
	execute as freefaxExecute,
} from './actions/freefax/index';
import {
	description as horizonViewDescription,
	execute as horizonViewExecute,
} from './actions/horizonView/index';
import {
	description as licenseCloudLinuxDescription,
	execute as licenseCloudLinuxExecute,
} from './actions/license/resources/licenseCloudLinux/index';
import {
	description as licenseCpanelDescription,
	execute as licenseCpanelExecute,
} from './actions/license/resources/licenseCpanel/index';
import {
	description as licenseDirectadminDescription,
	execute as licenseDirectadminExecute,
} from './actions/license/resources/licenseDirectadmin/index';
import {
	description as licenseHycuDescription,
	execute as licenseHycuExecute,
} from './actions/license/resources/licenseHycu/index';
import {
	description as licenseOfficeDescription,
	execute as licenseOfficeExecute,
} from './actions/license/resources/licenseOffice/index';
import {
	description as licenseOfficePrepaidDescription,
	execute as licenseOfficePrepaidExecute,
} from './actions/license/resources/licenseOfficePrepaid/index';
import {
	description as licensePleskDescription,
	execute as licensePleskExecute,
} from './actions/license/resources/licensePlesk/index';
import {
	description as licenseRedhatDescription,
	execute as licenseRedhatExecute,
} from './actions/license/resources/licenseRedhat/index';
import {
	description as licenseSqlserverDescription,
	execute as licenseSqlserverExecute,
} from './actions/license/resources/licenseSqlserver/index';
import {
	description as licenseVirtuozzoDescription,
	execute as licenseVirtuozzoExecute,
} from './actions/license/resources/licenseVirtuozzo/index';
import {
	description as licenseWindowsDescription,
	execute as licenseWindowsExecute,
} from './actions/license/resources/licenseWindows/index';
import {
	description as licenseWorklightDescription,
	execute as licenseWorklightExecute,
} from './actions/license/resources/licenseWorklight/index';
import {
	description as metricsDescription,
	execute as metricsExecute,
} from './actions/metrics/index';
import {
	description as msServicesDescription,
	execute as msServicesExecute,
} from './actions/msServices/index';
import {
	description as newAccountDescription,
	execute as newAccountExecute,
} from './actions/newAccount/index';
import {
	description as nutanixDescription,
	execute as nutanixExecute,
} from './actions/nutanix/index';
import { description as orderDescription, execute as orderExecute } from './actions/order/index';
import {
	description as overTheBoxDescription,
	execute as overTheBoxExecute,
} from './actions/overTheBox/index';
import {
	description as ovhCloudConnectDescription,
	execute as ovhCloudConnectExecute,
} from './actions/ovhCloudConnect/index';
import {
	description as packXdslDescription,
	execute as packXdslExecute,
} from './actions/packXdsl/index';
import {
	description as partnerDescription,
	execute as partnerExecute,
} from './actions/partner/index';
import { description as priceDescription, execute as priceExecute } from './actions/price/index';
import { description as secretDescription, execute as secretExecute } from './actions/secret/index';
import {
	description as serviceDescription,
	execute as serviceExecute,
} from './actions/service/index';
import {
	description as sslGatewayDescription,
	execute as sslGatewayExecute,
} from './actions/sslGateway/index';
import {
	description as startupDescription,
	execute as startupExecute,
} from './actions/startup/index';
import {
	description as storageDescription,
	execute as storageExecute,
} from './actions/storage/index';
import {
	description as supportDescription,
	execute as supportExecute,
} from './actions/support/index';
import {
	description as telephonyDescription,
	execute as telephonyExecute,
} from './actions/telephony/index';
import { description as vipDescription, execute as vipExecute } from './actions/vip/index';
import { description as xdslDescription, execute as xdslExecute } from './actions/xdsl/index';

// New V2 resources (batch 12)
import {
	description as backupServicesDescription,
	execute as backupServicesExecute,
} from './actionsV2/backupServices/index';
import {
	description as commercialCatalogDescription,
	execute as commercialCatalogExecute,
} from './actionsV2/commercialCatalog/index';
import { description as iamDescription, execute as iamExecute } from './actionsV2/iam/index';
import {
	description as locationDescription,
	execute as locationExecute,
} from './actionsV2/location/index';
import {
	description as managedCMSDescription,
	execute as managedCMSExecute,
} from './actionsV2/managedCMS/index';
import {
	description as networkDefenseDescription,
	execute as networkDefenseExecute,
} from './actionsV2/networkDefense/index';
import {
	description as notificationDescription,
	execute as notificationExecute,
} from './actionsV2/notification/index';
import { description as okmsDescription, execute as okmsExecute } from './actionsV2/okms/index';
import {
	description as publicCloudDescription,
	execute as publicCloudExecute,
} from './actionsV2/publicCloud/index';
import {
	description as vmwareCloudDirectorDescription,
	execute as vmwareCloudDirectorExecute,
} from './actionsV2/vmwareCloudDirector/index';
import {
	description as vrackServicesDescription,
	execute as vrackServicesExecute,
} from './actionsV2/vrackServices/index';
import {
	description as webhostingDescription,
	execute as webhostingExecute,
} from './actionsV2/webhosting/index';
import {
	description as zimbraDescription,
	execute as zimbraExecute,
} from './actionsV2/zimbra/index';

/**
 * Main OVH Cloud n8n node for interacting with the OVHcloud API.
 *
 * Provides integration with OVHcloud APIs for managing:
 * - Services (Dedicated servers, domains, hosting, etc.)
 * - Account information (Me resource)
 * - Email services (email domains)
 * - VPS instances (Virtual Private Servers)
 * - Domains, Dedicated servers, IP Load Balancers, IPs, vRacks
 * - SMS, SSL, Hosting, Dedicated Cloud, DBaaS
 * - And many more: AllDom, Auth, CDN, Cloud, Connectivity, Contact, Licenses, Metrics, etc.
 *
 * Supports multiple OVHcloud endpoints: Europe, Canada, USA, SoYouStart, and Kimsufi.
 * Uses SHA1-based signature authentication for all API requests.
 *
 * @see OvhCloudApi.credentials.ts for credential type definition
 * @see ApiClient for the API client implementation
 * @see https://api.ovh.com/console/ OVH API Documentation
 *
 * @example
 * ```typescript
 * // In an n8n workflow, the node can be configured as:
 * // Resource: VPS -> Operation: Get -> Service ID: my-vps
 * // Resource: Me -> Sub-resource: Bills -> Operation: List
 * // Resource: Services -> Operation: List -> Filter by route: /hosting/web
 * // Resource: Domain -> Operation: List
 * // Resource: Dedicated -> Operation: Get -> Server Name: ns1234567
 * ```
 */
export class OvhCloud implements INodeType {
	/** @inheritdoc */
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud',
		name: 'ovhCloud',
		icon: 'file:../../icons/ovh_vertical.svg',
		group: ['input'],
		version: 2,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description:
			'Manage OVH Cloud services. Supports 80+ resources including Services, Me, Email, VPS, Domain, Dedicated, IP Load Balancing, IP, vRack, SMS, SSL, Hosting, Dedicated Cloud, DBaaS, and many more.',
		defaults: {
			name: 'OVH Cloud',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: OvhCloudApiSecretName,
				required: true,
			},
		],
		/** @inheritdoc */
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'AllDom',
						value: 'allDom',
						action: 'Manage OVH AllDom services',
					},
					{
						name: 'Auth',
						value: 'auth',
						action: 'Manage OVH Auth services',
					},
					{
						name: 'CDN',
						value: 'cdn',
						action: 'Manage OVH CDN services',
					},
					{
						name: 'Cloud',
						value: 'cloud',
						action: 'Manage OVH Cloud services',
					},
					{
						name: 'Connectivity',
						value: 'connectivity',
						action: 'Manage OVH Connectivity services',
					},
					{
						name: 'Contact',
						value: 'contact',
						action: 'Manage OVH Contact services',
					},
					{
						// eslint-disable-next-line n8n-nodes-base/node-param-resource-with-plural-option
						name: 'DBaaS',
						value: 'dbaas',
						action: 'Manage OVH DBaaS log services',
					},
					{
						name: 'Dedicated',
						value: 'dedicated',
						action: 'Manage OVH dedicated servers',
					},
					{
						name: 'Dedicated Ceph',
						value: 'dedicatedCeph',
						action: 'Manage OVH Dedicated Ceph services',
					},
					{
						name: 'Dedicated Cloud',
						value: 'dedicatedCloud',
						action: 'Manage OVH Dedicated Cloud services',
					},
					{
						name: 'Dedicated Cluster',
						value: 'dedicatedCluster',
						action: 'Manage OVH Dedicated Cluster services',
					},
					{
						name: 'Dedicated Housing',
						value: 'dedicatedHousing',
						action: 'Manage OVH Dedicated Housing services',
					},
					{
						name: 'Dedicated Installation Template',
						value: 'dedicatedInstallationTemplate',
						action: 'Manage OVH Dedicated Installation Template services',
					},
					{
						name: 'Dedicated Nasha',
						value: 'dedicatedNasha',
						action: 'Manage OVH Dedicated Nasha services',
					},
					{
						name: 'Dedicated Server',
						value: 'dedicatedServer',
						action: 'Manage OVH Dedicated Server services',
					},
					{
						name: 'Domain',
						value: 'domain',
						action: 'Manage OVH domains',
					},
					{
						name: 'Email',
						value: 'email',
						action: 'Manage OVH email services',
					},
					{
						name: 'Email Exchange',
						value: 'emailExchange',
						action: 'Manage OVH Email Exchange services',
					},
					{
						name: 'Email Mxplan',
						value: 'emailMxplan',
						action: 'Manage OVH Email Mxplan services',
					},
					{
						name: 'Email Pro',
						value: 'emailPro',
						action: 'Manage OVH Email Pro services',
					},
					{
						name: 'Freefax',
						value: 'freefax',
						action: 'Manage OVH Freefax services',
					},
					{
						name: 'Horizon View',
						value: 'horizonView',
						action: 'Manage OVH Horizon View services',
					},
					{
						name: 'Hosting',
						value: 'hosting',
						action: 'Manage OVH private database hosting',
					},
					{
						name: 'IP',
						value: 'ip',
						action: 'Manage OVH IP blocks',
					},
					{
						name: 'IP Load Balancing',
						value: 'ipLoadbalancing',
						action: 'Manage OVH IP Load Balancers',
					},
					{
						name: 'License Cloud Linux',
						value: 'licenseCloudLinux',
						action: 'Manage OVH Cloud Linux licenses',
					},
					{
						name: 'License Cpanel',
						value: 'licenseCpanel',
						action: 'Manage OVH Cpanel licenses',
					},
					{
						name: 'License Directadmin',
						value: 'licenseDirectadmin',
						action: 'Manage OVH Directadmin licenses',
					},
					{
						name: 'License Hycu',
						value: 'licenseHycu',
						action: 'Manage OVH Hycu licenses',
					},
					{
						name: 'License Office',
						value: 'licenseOffice',
						action: 'Manage OVH Office licenses',
					},
					{
						name: 'License Office Prepaid',
						value: 'licenseOfficePrepaid',
						action: 'Manage OVH Office Prepaid licenses',
					},
					{
						name: 'License Plesk',
						value: 'licensePlesk',
						action: 'Manage OVH Plesk licenses',
					},
					{
						name: 'License Redhat',
						value: 'licenseRedhat',
						action: 'Manage OVH Redhat licenses',
					},
					{
						name: 'License Sqlserver',
						value: 'licenseSqlserver',
						action: 'Manage OVH Sqlserver licenses',
					},
					{
						name: 'License Virtuozzo',
						value: 'licenseVirtuozzo',
						action: 'Manage OVH Virtuozzo licenses',
					},
					{
						name: 'License Windows',
						value: 'licenseWindows',
						action: 'Manage OVH Windows licenses',
					},
					{
						name: 'License Worklight',
						value: 'licenseWorklight',
						action: 'Manage OVH Worklight licenses',
					},
					{
						name: 'Me',
						value: 'me',
						action: 'Manage your OVH account',
					},
					{
						name: 'Metrics',
						value: 'metrics',
						action: 'Manage OVH Metrics services',
					},
					{
						name: 'MS Services',
						value: 'msServices',
						action: 'Manage OVH MS Services',
					},
					{
						name: 'New Account',
						value: 'newAccount',
						action: 'Manage OVH New Account services',
					},
					{
						name: 'Nutanix',
						value: 'nutanix',
						action: 'Manage OVH Nutanix services',
					},
					{
						name: 'Order',
						value: 'order',
						action: 'Manage OVH Orders',
					},
					{
						name: 'OverTheBox',
						value: 'overTheBox',
						action: 'Manage OVH OverTheBox services',
					},
					{
						name: 'OVH Cloud Connect',
						value: 'ovhCloudConnect',
						action: 'Manage OVH Cloud Connect services',
					},
					{
						name: 'Pack Xdsl',
						value: 'packXdsl',
						action: 'Manage OVH Pack Xdsl services',
					},
					{
						name: 'Partner',
						value: 'partner',
						action: 'Manage OVH Partner services',
					},
					{
						name: 'Price',
						value: 'price',
						action: 'Manage OVH Price services',
					},
					{
						name: 'Secret',
						value: 'secret',
						action: 'Manage OVH Secret services',
					},
					{
						name: 'Service',
						value: 'service',
						action: 'Manage OVH Service details',
					},
					{
						name: 'Services',
						value: 'services',
						action: 'Manage OVH Cloud services',
					},
					{
						name: 'SMS',
						value: 'sms',
						action: 'Manage OVH SMS services',
					},
					{
						name: 'SSL',
						value: 'ssl',
						action: 'Manage OVH SSL services',
					},
					{
						name: 'SSL Gateway',
						value: 'sslGateway',
						action: 'Manage OVH SSL Gateway services',
					},
					{
						name: 'Startup',
						value: 'startup',
						action: 'Manage OVH Startup services',
					},
					{
						name: 'Storage',
						value: 'storage',
						action: 'Manage OVH Storage services',
					},
					{
						name: 'Support',
						value: 'support',
						action: 'Manage OVH Support services',
					},
					{
						name: 'Telephony',
						value: 'telephony',
						action: 'Manage OVH Telephony services',
					},
					{
						name: 'V2 Backup Services',
						value: 'backupServices',
						action: 'Manage OVH V2 Backup Services',
					},
					{
						name: 'V2 Commercial Catalog',
						value: 'commercialCatalog',
						action: 'Manage OVH V2 Commercial Catalog',
					},
					{
						name: 'V2 IAM',
						value: 'iam',
						action: 'Manage OVH V2 IAM resources',
					},
					{
						name: 'V2 Location',
						value: 'location',
						action: 'Manage OVH V2 Location services',
					},
					{
						name: 'V2 Managed CMS',
						value: 'managedCMS',
						action: 'Manage OVH V2 Managed CMS services',
					},
					{
						name: 'V2 Network Defense',
						value: 'networkDefense',
						action: 'Manage OVH V2 Network Defense services',
					},
					{
						name: 'V2 Notification',
						value: 'notification',
						action: 'Manage OVH V2 Notification services',
					},
					{
						name: 'V2 OKMS',
						value: 'okms',
						action: 'Manage OVH V2 OKMS services',
					},
					{
						name: 'V2 Public Cloud',
						value: 'publicCloud',
						action: 'Manage OVH V2 Public Cloud services',
					},
					{
						name: 'V2 VMware Cloud Director',
						value: 'vmwareCloudDirector',
						action: 'Manage OVH V2 VMware Cloud Director services',
					},
					{
						name: 'V2 vRack Services',
						value: 'vrackServices',
						action: 'Manage OVH V2 vRack Services',
					},
					{
						name: 'V2 Webhosting',
						value: 'webhosting',
						action: 'Manage OVH V2 Webhosting services',
					},
					{
						name: 'V2 Zimbra',
						value: 'zimbra',
						action: 'Manage OVH V2 Zimbra services',
					},
					{
						name: 'VIP',
						value: 'vip',
						action: 'Manage OVH VIP services',
					},
					{
						name: 'VPS',
						value: 'vps',
						action: 'Manage OVH VPS instances',
					},
					{
						name: 'vRack',
						value: 'vrack',
						action: 'Manage OVH vRack services',
					},
					{
						name: 'XDSL',
						value: 'xdsl',
						action: 'Manage OVH XDSL services',
					},
				],
				default: 'services',
			},
			// Spread descriptions for all resources (alphabetical order)
			...allDomDescription({ show: { resource: ['allDom'] } }),
			...authDescription({ show: { resource: ['auth'] } }),
			...cdnDescription({ show: { resource: ['cdn'] } }),
			...cloudDescription({ show: { resource: ['cloud'] } }),
			...connectivityDescription({ show: { resource: ['connectivity'] } }),
			...contactDescription({ show: { resource: ['contact'] } }),
			...dbaasDescription({ show: { resource: ['dbaas'] } }),
			...dedicatedDescription({ show: { resource: ['dedicated'] } }),
			...dedicatedCephDescription({ show: { resource: ['dedicatedCeph'] } }),
			...dedicatedCloudDescription({ show: { resource: ['dedicatedCloud'] } }),
			...dedicatedClusterDescription({ show: { resource: ['dedicatedCluster'] } }),
			...dedicatedHousingDescription({ show: { resource: ['dedicatedHousing'] } }),
			...dedicatedInstallationTemplateDescription({
				show: { resource: ['dedicatedInstallationTemplate'] },
			}),
			...dedicatedNashaDescription({ show: { resource: ['dedicatedNasha'] } }),
			...dedicatedServerDescription({ show: { resource: ['dedicatedServer'] } }),
			...domainDescription({ show: { resource: ['domain'] } }),
			...emailDescription({ show: { resource: ['email'] } }),
			...emailExchangeDescription({ show: { resource: ['emailExchange'] } }),
			...emailMxplanDescription({ show: { resource: ['emailMxplan'] } }),
			...emailProDescription({ show: { resource: ['emailPro'] } }),
			...freefaxDescription({ show: { resource: ['freefax'] } }),
			...horizonViewDescription({ show: { resource: ['horizonView'] } }),
			...hostingDescription({ show: { resource: ['hosting'] } }),
			...ipDescription({ show: { resource: ['ip'] } }),
			...ipLoadbalancingDescription({ show: { resource: ['ipLoadbalancing'] } }),
			...licenseCloudLinuxDescription({ show: { resource: ['licenseCloudLinux'] } }),
			...licenseCpanelDescription({ show: { resource: ['licenseCpanel'] } }),
			...licenseDirectadminDescription({ show: { resource: ['licenseDirectadmin'] } }),
			...licenseHycuDescription({ show: { resource: ['licenseHycu'] } }),
			...licenseOfficeDescription({ show: { resource: ['licenseOffice'] } }),
			...licenseOfficePrepaidDescription({ show: { resource: ['licenseOfficePrepaid'] } }),
			...licensePleskDescription({ show: { resource: ['licensePlesk'] } }),
			...licenseRedhatDescription({ show: { resource: ['licenseRedhat'] } }),
			...licenseSqlserverDescription({ show: { resource: ['licenseSqlserver'] } }),
			...licenseVirtuozzoDescription({ show: { resource: ['licenseVirtuozzo'] } }),
			...licenseWindowsDescription({ show: { resource: ['licenseWindows'] } }),
			...licenseWorklightDescription({ show: { resource: ['licenseWorklight'] } }),
			...meDescription({ show: { resource: ['me'] } }),
			...metricsDescription({ show: { resource: ['metrics'] } }),
			...msServicesDescription({ show: { resource: ['msServices'] } }),
			...newAccountDescription({ show: { resource: ['newAccount'] } }),
			...nutanixDescription({ show: { resource: ['nutanix'] } }),
			...orderDescription({ show: { resource: ['order'] } }),
			...overTheBoxDescription({ show: { resource: ['overTheBox'] } }),
			...ovhCloudConnectDescription({ show: { resource: ['ovhCloudConnect'] } }),
			...packXdslDescription({ show: { resource: ['packXdsl'] } }),
			...partnerDescription({ show: { resource: ['partner'] } }),
			...priceDescription({ show: { resource: ['price'] } }),
			...secretDescription({ show: { resource: ['secret'] } }),
			...serviceDescription({ show: { resource: ['service'] } }),
			...servicesDescription({ show: { resource: ['services'] } }),
			...smsDescription({ show: { resource: ['sms'] } }),
			...sslDescription({ show: { resource: ['ssl'] } }),
			...sslGatewayDescription({ show: { resource: ['sslGateway'] } }),
			...startupDescription({ show: { resource: ['startup'] } }),
			...storageDescription({ show: { resource: ['storage'] } }),
			...supportDescription({ show: { resource: ['support'] } }),
			...telephonyDescription({ show: { resource: ['telephony'] } }),
			...backupServicesDescription({ show: { resource: ['backupServices'] } }),
			...commercialCatalogDescription({ show: { resource: ['commercialCatalog'] } }),
			...iamDescription({ show: { resource: ['iam'] } }),
			...locationDescription({ show: { resource: ['location'] } }),
			...managedCMSDescription({ show: { resource: ['managedCMS'] } }),
			...networkDefenseDescription({ show: { resource: ['networkDefense'] } }),
			...notificationDescription({ show: { resource: ['notification'] } }),
			...okmsDescription({ show: { resource: ['okms'] } }),
			...publicCloudDescription({ show: { resource: ['publicCloud'] } }),
			...vmwareCloudDirectorDescription({ show: { resource: ['vmwareCloudDirector'] } }),
			...vrackServicesDescription({ show: { resource: ['vrackServices'] } }),
			...webhostingDescription({ show: { resource: ['webhosting'] } }),
			...zimbraDescription({ show: { resource: ['zimbra'] } }),
			...vipDescription({ show: { resource: ['vip'] } }),
			...vpsDescription({ show: { resource: ['vps'] } }),
			...vrackDescription({ show: { resource: ['vrack'] } }),
			...xdslDescription({ show: { resource: ['xdsl'] } }),
		],
	};

	/** @inheritdoc */
	methods = {
		/**
		 * Dynamic list search methods for n8n node UI operations.
		 *
		 * Provides dynamic dropdown options for service IDs, email domains, and VPS services.
		 */
		listSearch: {
			getServiceIds, // Dynamic list search for service IDs
			getEmailDomains, // Dynamic list search for email domains
			getVpsServices, // Dynamic list search for VPS service names
			getDedicatedCloudServices, // Dynamic list search for Dedicated Cloud services
		},
	};

	/**
	 * Executes the selected resource operation.
	 *
	 * Routes the execution to the appropriate handler based on the selected
	 * resource and operation.
	 *
	 * @param this - The n8n execute function context
	 * @returns Array of execution results
	 */
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const resource = this.getNodeParameter('resource', 0);

		let responseData: INodeExecutionData[];

		switch (resource) {
			// Existing resources
			case 'me':
				responseData = await meExecute.call(this);
				break;
			case 'services':
				responseData = await servicesExecute.call(this);
				break;
			case 'email':
				responseData = await emailExecute.call(this);
				break;
			case 'vps':
				responseData = await vpsExecute.call(this);
				break;
			case 'domain':
				responseData = await domainExecute.call(this);
				break;
			case 'dedicated':
				responseData = await dedicatedExecute.call(this);
				break;
			case 'ipLoadbalancing':
				responseData = await ipLoadbalancingExecute.call(this);
				break;
			case 'ip':
				responseData = await ipExecute.call(this);
				break;
			case 'vrack':
				responseData = await vrackExecute.call(this);
				break;
			case 'sms':
				responseData = await smsExecute.call(this);
				break;
			case 'ssl':
				responseData = await sslExecute.call(this);
				break;
			case 'hosting':
				responseData = await hostingExecute.call(this);
				break;
			case 'dedicatedCloud':
				responseData = await dedicatedCloudExecute.call(this);
				break;
			case 'dedicatedCeph':
				responseData = await dedicatedCephExecute.call(this);
				break;
			case 'dedicatedCluster':
				responseData = await dedicatedClusterExecute.call(this);
				break;
			case 'dedicatedHousing':
				responseData = await dedicatedHousingExecute.call(this);
				break;
			case 'dedicatedInstallationTemplate':
				responseData = await dedicatedInstallationTemplateExecute.call(this);
				break;
			case 'dedicatedNasha':
				responseData = await dedicatedNashaExecute.call(this);
				break;
			case 'dedicatedServer':
				responseData = await dedicatedServerExecute.call(this);
				break;
			case 'dbaas':
				responseData = await dbaasExecute.call(this);
				break;
			// New V1 resources
			case 'allDom':
				responseData = await allDomExecute.call(this);
				break;
			case 'auth':
				responseData = await authExecute.call(this);
				break;
			case 'cdn':
				responseData = await cdnExecute.call(this);
				break;
			case 'cloud':
				responseData = await cloudExecute.call(this);
				break;
			case 'connectivity':
				responseData = await connectivityExecute.call(this);
				break;
			case 'contact':
				responseData = await contactExecute.call(this);
				break;
			case 'emailExchange':
				responseData = await emailExchangeExecute.call(this);
				break;
			case 'emailMxplan':
				responseData = await emailMxplanExecute.call(this);
				break;
			case 'emailPro':
				responseData = await emailProExecute.call(this);
				break;
			case 'freefax':
				responseData = await freefaxExecute.call(this);
				break;
			case 'horizonView':
				responseData = await horizonViewExecute.call(this);
				break;
			case 'licenseCloudLinux':
				responseData = await licenseCloudLinuxExecute.call(this);
				break;
			case 'licenseCpanel':
				responseData = await licenseCpanelExecute.call(this);
				break;
			case 'licenseDirectadmin':
				responseData = await licenseDirectadminExecute.call(this);
				break;
			case 'licenseHycu':
				responseData = await licenseHycuExecute.call(this);
				break;
			case 'licenseOffice':
				responseData = await licenseOfficeExecute.call(this);
				break;
			case 'licenseOfficePrepaid':
				responseData = await licenseOfficePrepaidExecute.call(this);
				break;
			case 'licensePlesk':
				responseData = await licensePleskExecute.call(this);
				break;
			case 'licenseRedhat':
				responseData = await licenseRedhatExecute.call(this);
				break;
			case 'licenseSqlserver':
				responseData = await licenseSqlserverExecute.call(this);
				break;
			case 'licenseVirtuozzo':
				responseData = await licenseVirtuozzoExecute.call(this);
				break;
			case 'licenseWindows':
				responseData = await licenseWindowsExecute.call(this);
				break;
			case 'licenseWorklight':
				responseData = await licenseWorklightExecute.call(this);
				break;
			case 'metrics':
				responseData = await metricsExecute.call(this);
				break;
			case 'msServices':
				responseData = await msServicesExecute.call(this);
				break;
			case 'newAccount':
				responseData = await newAccountExecute.call(this);
				break;
			case 'nutanix':
				responseData = await nutanixExecute.call(this);
				break;
			case 'order':
				responseData = await orderExecute.call(this);
				break;
			case 'overTheBox':
				responseData = await overTheBoxExecute.call(this);
				break;
			case 'ovhCloudConnect':
				responseData = await ovhCloudConnectExecute.call(this);
				break;
			case 'packXdsl':
				responseData = await packXdslExecute.call(this);
				break;
			case 'partner':
				responseData = await partnerExecute.call(this);
				break;
			case 'price':
				responseData = await priceExecute.call(this);
				break;
			case 'secret':
				responseData = await secretExecute.call(this);
				break;
			case 'service':
				responseData = await serviceExecute.call(this);
				break;
			case 'sslGateway':
				responseData = await sslGatewayExecute.call(this);
				break;
			case 'startup':
				responseData = await startupExecute.call(this);
				break;
			case 'storage':
				responseData = await storageExecute.call(this);
				break;
			case 'support':
				responseData = await supportExecute.call(this);
				break;
			case 'telephony':
				responseData = await telephonyExecute.call(this);
				break;
			case 'vip':
				responseData = await vipExecute.call(this);
				break;
			case 'xdsl':
				responseData = await xdslExecute.call(this);
				break;
			// New V2 resources
			case 'backupServices':
				responseData = await backupServicesExecute.call(this);
				break;
			case 'commercialCatalog':
				responseData = await commercialCatalogExecute.call(this);
				break;
			case 'iam':
				responseData = await iamExecute.call(this);
				break;
			case 'location':
				responseData = await locationExecute.call(this);
				break;
			case 'managedCMS':
				responseData = await managedCMSExecute.call(this);
				break;
			case 'networkDefense':
				responseData = await networkDefenseExecute.call(this);
				break;
			case 'notification':
				responseData = await notificationExecute.call(this);
				break;
			case 'okms':
				responseData = await okmsExecute.call(this);
				break;
			case 'publicCloud':
				responseData = await publicCloudExecute.call(this);
				break;
			case 'vmwareCloudDirector':
				responseData = await vmwareCloudDirectorExecute.call(this);
				break;
			case 'vrackServices':
				responseData = await vrackServicesExecute.call(this);
				break;
			case 'webhosting':
				responseData = await webhostingExecute.call(this);
				break;
			case 'zimbra':
				responseData = await zimbraExecute.call(this);
				break;
			default:
				throw new NodeApiError(this.getNode(), {
					message: `The resource "${resource}" cannot be executed directly. Please select an operation to execute.`,
				});
		}

		return [this.helpers.returnJsonArray(responseData)];
	}
}

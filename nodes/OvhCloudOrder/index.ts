import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionCartAssignPost,
	execute as executeCartAssignPost,
} from './cart/cartAssignPost.operation';
import {
	description as descriptionCartCheckoutGet,
	execute as executeCartCheckoutGet,
} from './cart/cartCheckoutGet.operation';
import {
	description as descriptionCartCheckoutPost,
	execute as executeCartCheckoutPost,
} from './cart/cartCheckoutPost.operation';
import {
	description as descriptionCartCouponCreatePost,
	execute as executeCartCouponCreatePost,
} from './cart/cartCouponCreatePost.operation';
import {
	description as descriptionCartCouponDelete,
	execute as executeCartCouponDelete,
} from './cart/cartCouponDelete.operation';
import {
	description as descriptionCartCouponListGet,
	execute as executeCartCouponListGet,
} from './cart/cartCouponListGet.operation';
import {
	description as descriptionCartCreatePost,
	execute as executeCartCreatePost,
} from './cart/cartCreatePost.operation';
import {
	description as descriptionCartDeleteDelete,
	execute as executeCartDeleteDelete,
} from './cart/cartDeleteDelete.operation';
import {
	description as descriptionCartGetGet,
	execute as executeCartGetGet,
} from './cart/cartGetGet.operation';
import {
	description as descriptionCartItemConfigurationCreatePost,
	execute as executeCartItemConfigurationCreatePost,
} from './cart/cartItemConfigurationCreatePost.operation';
import {
	description as descriptionCartItemConfigurationDeleteDelete,
	execute as executeCartItemConfigurationDeleteDelete,
} from './cart/cartItemConfigurationDeleteDelete.operation';
import {
	description as descriptionCartItemConfigurationGetGet,
	execute as executeCartItemConfigurationGetGet,
} from './cart/cartItemConfigurationGetGet.operation';
import {
	description as descriptionCartItemConfigurationListGet,
	execute as executeCartItemConfigurationListGet,
} from './cart/cartItemConfigurationListGet.operation';
import {
	description as descriptionCartItemConfigurationUpdatePut,
	execute as executeCartItemConfigurationUpdatePut,
} from './cart/cartItemConfigurationUpdatePut.operation';
import {
	description as descriptionCartItemDeleteDelete,
	execute as executeCartItemDeleteDelete,
} from './cart/cartItemDeleteDelete.operation';
import {
	description as descriptionCartItemGetGet,
	execute as executeCartItemGetGet,
} from './cart/cartItemGetGet.operation';
import {
	description as descriptionCartItemListGet,
	execute as executeCartItemListGet,
} from './cart/cartItemListGet.operation';
import {
	description as descriptionCartItemRequiredConfigurationListGet,
	execute as executeCartItemRequiredConfigurationListGet,
} from './cart/cartItemRequiredConfigurationListGet.operation';
import {
	description as descriptionCartItemUpdatePut,
	execute as executeCartItemUpdatePut,
} from './cart/cartItemUpdatePut.operation';
import {
	description as descriptionCartListGet,
	execute as executeCartListGet,
} from './cart/cartListGet.operation';
import {
	description as descriptioncartServiceOptionBackupServicesListGET,
	execute as executecartServiceOptionBackupServicesListGET,
} from './cart/cartServiceOption/cartserviceoptionbackupserviceslistget.operation';
import {
	description as descriptioncartServiceOptionBackupServicesServiceGET,
	execute as executecartServiceOptionBackupServicesServiceGET,
} from './cart/cartServiceOption/cartserviceoptionbackupservicesserviceget.operation';
import {
	description as descriptioncartServiceOptionBaremetalServersListGET,
	execute as executecartServiceOptionBaremetalServersListGET,
} from './cart/cartServiceOption/cartserviceoptionbaremetalserverslistget.operation';
import {
	description as descriptioncartServiceOptionBaremetalServersServiceGET,
	execute as executecartServiceOptionBaremetalServersServiceGET,
} from './cart/cartServiceOption/cartserviceoptionbaremetalserversserviceget.operation';
import {
	description as descriptioncartServiceOptionBaremetalServersServicePOST,
	execute as executecartServiceOptionBaremetalServersServicePOST,
} from './cart/cartServiceOption/cartserviceoptionbaremetalserversservicepost.operation';
import {
	description as descriptioncartServiceOptionCloudListGET,
	execute as executecartServiceOptionCloudListGET,
} from './cart/cartServiceOption/cartserviceoptioncloudlistget.operation';
import {
	description as descriptioncartServiceOptionCloudServiceGET,
	execute as executecartServiceOptionCloudServiceGET,
} from './cart/cartServiceOption/cartserviceoptioncloudserviceget.operation';
import {
	description as descriptioncartServiceOptionCloudServicePOST,
	execute as executecartServiceOptionCloudServicePOST,
} from './cart/cartServiceOption/cartserviceoptioncloudservicepost.operation';
import {
	description as descriptioncartServiceOptionDedicatedListGET,
	execute as executecartServiceOptionDedicatedListGET,
} from './cart/cartServiceOption/cartserviceoptiondedicatedlistget.operation';
import {
	description as descriptioncartServiceOptionDedicatedServiceGET,
	execute as executecartServiceOptionDedicatedServiceGET,
} from './cart/cartServiceOption/cartserviceoptiondedicatedserviceget.operation';
import {
	description as descriptioncartServiceOptionDedicatedServicePOST,
	execute as executecartServiceOptionDedicatedServicePOST,
} from './cart/cartServiceOption/cartserviceoptiondedicatedservicepost.operation';
import {
	description as descriptioncartServiceOptionDNSListGET,
	execute as executecartServiceOptionDNSListGET,
} from './cart/cartServiceOption/cartserviceoptiondnslistget.operation';
import {
	description as descriptioncartServiceOptionDNSServiceGET,
	execute as executecartServiceOptionDNSServiceGET,
} from './cart/cartServiceOption/cartserviceoptiondnsserviceget.operation';
import {
	description as descriptioncartServiceOptionDNSServicePOST,
	execute as executecartServiceOptionDNSServicePOST,
} from './cart/cartServiceOption/cartserviceoptiondnsservicepost.operation';
import {
	description as descriptioncartServiceOptionDomainListGET,
	execute as executecartServiceOptionDomainListGET,
} from './cart/cartServiceOption/cartserviceoptiondomainlistget.operation';
import {
	description as descriptioncartServiceOptionDomainServiceGET,
	execute as executecartServiceOptionDomainServiceGET,
} from './cart/cartServiceOption/cartserviceoptiondomainserviceget.operation';
import {
	description as descriptioncartServiceOptionDomainServicePOST,
	execute as executecartServiceOptionDomainServicePOST,
} from './cart/cartServiceOption/cartserviceoptiondomainservicepost.operation';
import {
	description as descriptioncartServiceOptionEmailProListGET,
	execute as executecartServiceOptionEmailProListGET,
} from './cart/cartServiceOption/cartserviceoptionemailprolistget.operation';
import {
	description as descriptioncartServiceOptionEmailProServiceGET,
	execute as executecartServiceOptionEmailProServiceGET,
} from './cart/cartServiceOption/cartserviceoptionemailproserviceget.operation';
import {
	description as descriptioncartServiceOptionEmailProServicePOST,
	execute as executecartServiceOptionEmailProServicePOST,
} from './cart/cartServiceOption/cartserviceoptionemailproservicepost.operation';
import {
	description as descriptioncartServiceOptionIPLoadBalancingListGET,
	execute as executecartServiceOptionIPLoadBalancingListGET,
} from './cart/cartServiceOption/cartserviceoptioniploadbalancinglistget.operation';
import {
	description as descriptioncartServiceOptionIPLoadBalancingServiceGET,
	execute as executecartServiceOptionIPLoadBalancingServiceGET,
} from './cart/cartServiceOption/cartserviceoptioniploadbalancingserviceget.operation';
import {
	description as descriptioncartServiceOptionIPLoadBalancingServicePOST,
	execute as executecartServiceOptionIPLoadBalancingServicePOST,
} from './cart/cartServiceOption/cartserviceoptioniploadbalancingservicepost.operation';
import {
	description as descriptioncartServiceOptionLicenseHycuListGET,
	execute as executecartServiceOptionLicenseHycuListGET,
} from './cart/cartServiceOption/cartserviceoptionlicensehyculistget.operation';
import {
	description as descriptioncartServiceOptionLicenseHycuServiceGET,
	execute as executecartServiceOptionLicenseHycuServiceGET,
} from './cart/cartServiceOption/cartserviceoptionlicensehycuserviceget.operation';
import {
	description as descriptioncartServiceOptionLicenseHycuServicePOST,
	execute as executecartServiceOptionLicenseHycuServicePOST,
} from './cart/cartServiceOption/cartserviceoptionlicensehycuservicepost.operation';
import {
	description as descriptioncartServiceOptionLogsListGET,
	execute as executecartServiceOptionLogsListGET,
} from './cart/cartServiceOption/cartserviceoptionlogslistget.operation';
import {
	description as descriptioncartServiceOptionLogsServiceGET,
	execute as executecartServiceOptionLogsServiceGET,
} from './cart/cartServiceOption/cartserviceoptionlogsserviceget.operation';
import {
	description as descriptioncartServiceOptionLogsServicePOST,
	execute as executecartServiceOptionLogsServicePOST,
} from './cart/cartServiceOption/cartserviceoptionlogsservicepost.operation';
import {
	description as descriptioncartServiceOptionMicrosoftExchangeListGET,
	execute as executecartServiceOptionMicrosoftExchangeListGET,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftexchangelistget.operation';
import {
	description as descriptioncartServiceOptionMicrosoftExchangeServiceGET,
	execute as executecartServiceOptionMicrosoftExchangeServiceGET,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftexchangeserviceget.operation';
import {
	description as descriptioncartServiceOptionMicrosoftExchangeServicePOST,
	execute as executecartServiceOptionMicrosoftExchangeServicePOST,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftexchangeservicepost.operation';
import {
	description as descriptioncartServiceOptionMicrosoftListGET,
	execute as executecartServiceOptionMicrosoftListGET,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftlistget.operation';
import {
	description as descriptioncartServiceOptionMicrosoftServiceGET,
	execute as executecartServiceOptionMicrosoftServiceGET,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftserviceget.operation';
import {
	description as descriptioncartServiceOptionMicrosoftServicePOST,
	execute as executecartServiceOptionMicrosoftServicePOST,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftservicepost.operation';
import {
	description as descriptioncartServiceOptionNutanixListGET,
	execute as executecartServiceOptionNutanixListGET,
} from './cart/cartServiceOption/cartserviceoptionnutanixlistget.operation';
import {
	description as descriptioncartServiceOptionNutanixServiceGET,
	execute as executecartServiceOptionNutanixServiceGET,
} from './cart/cartServiceOption/cartserviceoptionnutanixserviceget.operation';
import {
	description as descriptioncartServiceOptionNutanixServicePOST,
	execute as executecartServiceOptionNutanixServicePOST,
} from './cart/cartServiceOption/cartserviceoptionnutanixservicepost.operation';
import {
	description as descriptioncartServiceOptionOffice365PrepaidListGET,
	execute as executecartServiceOptionOffice365PrepaidListGET,
} from './cart/cartServiceOption/cartserviceoptionoffice365prepaidlistget.operation';
import {
	description as descriptioncartServiceOptionOffice365PrepaidServiceGET,
	execute as executecartServiceOptionOffice365PrepaidServiceGET,
} from './cart/cartServiceOption/cartserviceoptionoffice365prepaidserviceget.operation';
import {
	description as descriptioncartServiceOptionOffice365PrepaidServicePOST,
	execute as executecartServiceOptionOffice365PrepaidServicePOST,
} from './cart/cartServiceOption/cartserviceoptionoffice365prepaidservicepost.operation';
import {
	description as descriptioncartServiceOptionOfficePrepaidListGET,
	execute as executecartServiceOptionOfficePrepaidListGET,
} from './cart/cartServiceOption/cartserviceoptionofficeprepaidlistget.operation';
import {
	description as descriptioncartServiceOptionOfficePrepaidServiceGET,
	execute as executecartServiceOptionOfficePrepaidServiceGET,
} from './cart/cartServiceOption/cartserviceoptionofficeprepaidserviceget.operation';
import {
	description as descriptioncartServiceOptionOfficePrepaidServicePOST,
	execute as executecartServiceOptionOfficePrepaidServicePOST,
} from './cart/cartServiceOption/cartserviceoptionofficeprepaidservicepost.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudEnterpriseListGET,
	execute as executecartServiceOptionPrivateCloudEnterpriseListGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudenterpriselistget.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudEnterpriseServiceGET,
	execute as executecartServiceOptionPrivateCloudEnterpriseServiceGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudenterpriseserviceget.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudEnterpriseServicePOST,
	execute as executecartServiceOptionPrivateCloudEnterpriseServicePOST,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudenterpriseservicepost.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudListGET,
	execute as executecartServiceOptionPrivateCloudListGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudlistget.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudResellerEnterpriseListGET,
	execute as executecartServiceOptionPrivateCloudResellerEnterpriseListGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerenterpriselistget.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudResellerEnterpriseServiceGET,
	execute as executecartServiceOptionPrivateCloudResellerEnterpriseServiceGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerenterpriseserviceget.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudResellerEnterpriseServicePOST,
	execute as executecartServiceOptionPrivateCloudResellerEnterpriseServicePOST,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerenterpriseservicepost.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudResellerListGET,
	execute as executecartServiceOptionPrivateCloudResellerListGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerlistget.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudResellerServiceGET,
	execute as executecartServiceOptionPrivateCloudResellerServiceGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerserviceget.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudResellerServicePOST,
	execute as executecartServiceOptionPrivateCloudResellerServicePOST,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerservicepost.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudServiceGET,
	execute as executecartServiceOptionPrivateCloudServiceGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudserviceget.operation';
import {
	description as descriptioncartServiceOptionPrivateCloudServicePOST,
	execute as executecartServiceOptionPrivateCloudServicePOST,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudservicepost.operation';
import {
	description as descriptioncartServiceOptionSharepointListGET,
	execute as executecartServiceOptionSharepointListGET,
} from './cart/cartServiceOption/cartserviceoptionsharepointlistget.operation';
import {
	description as descriptioncartServiceOptionSharepointServiceGET,
	execute as executecartServiceOptionSharepointServiceGET,
} from './cart/cartServiceOption/cartserviceoptionsharepointserviceget.operation';
import {
	description as descriptioncartServiceOptionSharepointServicePOST,
	execute as executecartServiceOptionSharepointServicePOST,
} from './cart/cartServiceOption/cartserviceoptionsharepointservicepost.operation';
import {
	description as descriptioncartServiceOptionSMSListGET,
	execute as executecartServiceOptionSMSListGET,
} from './cart/cartServiceOption/cartserviceoptionsmslistget.operation';
import {
	description as descriptioncartServiceOptionSMSServiceGET,
	execute as executecartServiceOptionSMSServiceGET,
} from './cart/cartServiceOption/cartserviceoptionsmsserviceget.operation';
import {
	description as descriptioncartServiceOptionSMSServicePOST,
	execute as executecartServiceOptionSMSServicePOST,
} from './cart/cartServiceOption/cartserviceoptionsmsservicepost.operation';
import {
	description as descriptioncartServiceOptionSncNetworkServicesListGET,
	execute as executecartServiceOptionSncNetworkServicesListGET,
} from './cart/cartServiceOption/cartserviceoptionsncnetworkserviceslistget.operation';
import {
	description as descriptioncartServiceOptionSncNetworkServicesServiceGET,
	execute as executecartServiceOptionSncNetworkServicesServiceGET,
} from './cart/cartServiceOption/cartserviceoptionsncnetworkservicesserviceget.operation';
import {
	description as descriptioncartServiceOptionSncNetworkServicesServicePOST,
	execute as executecartServiceOptionSncNetworkServicesServicePOST,
} from './cart/cartServiceOption/cartserviceoptionsncnetworkservicesservicepost.operation';
import {
	description as descriptioncartServiceOptionSSLGatewayListGET,
	execute as executecartServiceOptionSSLGatewayListGET,
} from './cart/cartServiceOption/cartserviceoptionsslgatewaylistget.operation';
import {
	description as descriptioncartServiceOptionSSLGatewayServiceGET,
	execute as executecartServiceOptionSSLGatewayServiceGET,
} from './cart/cartServiceOption/cartserviceoptionsslgatewayserviceget.operation';
import {
	description as descriptioncartServiceOptionSSLGatewayServicePOST,
	execute as executecartServiceOptionSSLGatewayServicePOST,
} from './cart/cartServiceOption/cartserviceoptionsslgatewayservicepost.operation';
import {
	description as descriptioncartServiceOptionVDIListGET,
	execute as executecartServiceOptionVDIListGET,
} from './cart/cartServiceOption/cartserviceoptionvdilistget.operation';
import {
	description as descriptioncartServiceOptionVDIServiceGET,
	execute as executecartServiceOptionVDIServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvdiserviceget.operation';
import {
	description as descriptioncartServiceOptionVDIServicePOST,
	execute as executecartServiceOptionVDIServicePOST,
} from './cart/cartServiceOption/cartserviceoptionvdiservicepost.operation';
import {
	description as descriptioncartServiceOptionVmwareCloudDirectorBackupListGET,
	execute as executecartServiceOptionVmwareCloudDirectorBackupListGET,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorbackuplistget.operation';
import {
	description as descriptioncartServiceOptionVmwareCloudDirectorBackupServiceGET,
	execute as executecartServiceOptionVmwareCloudDirectorBackupServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorbackupserviceget.operation';
import {
	description as descriptioncartServiceOptionVmwareCloudDirectorListGET,
	execute as executecartServiceOptionVmwareCloudDirectorListGET,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorlistget.operation';
import {
	description as descriptioncartServiceOptionVmwareCloudDirectorServiceGET,
	execute as executecartServiceOptionVmwareCloudDirectorServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorserviceget.operation';
import {
	description as descriptioncartServiceOptionVmwareCloudDirectorServicePOST,
	execute as executecartServiceOptionVmwareCloudDirectorServicePOST,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorservicepost.operation';
import {
	description as descriptioncartServiceOptionVPSListGET,
	execute as executecartServiceOptionVPSListGET,
} from './cart/cartServiceOption/cartserviceoptionvpslistget.operation';
import {
	description as descriptioncartServiceOptionVPSServiceGET,
	execute as executecartServiceOptionVPSServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvpsserviceget.operation';
import {
	description as descriptioncartServiceOptionVPSServicePOST,
	execute as executecartServiceOptionVPSServicePOST,
} from './cart/cartServiceOption/cartserviceoptionvpsservicepost.operation';
import {
	description as descriptioncartServiceOptionVrackListGET,
	execute as executecartServiceOptionVrackListGET,
} from './cart/cartServiceOption/cartserviceoptionvracklistget.operation';
import {
	description as descriptioncartServiceOptionVrackServiceGET,
	execute as executecartServiceOptionVrackServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvrackserviceget.operation';
import {
	description as descriptioncartServiceOptionVrackServicePOST,
	execute as executecartServiceOptionVrackServicePOST,
} from './cart/cartServiceOption/cartserviceoptionvrackservicepost.operation';
import {
	description as descriptioncartServiceOptionWebHostingListGET,
	execute as executecartServiceOptionWebHostingListGET,
} from './cart/cartServiceOption/cartserviceoptionwebhostinglistget.operation';
import {
	description as descriptioncartServiceOptionWebHostingServiceGET,
	execute as executecartServiceOptionWebHostingServiceGET,
} from './cart/cartServiceOption/cartserviceoptionwebhostingserviceget.operation';
import {
	description as descriptioncartServiceOptionWebHostingServicePOST,
	execute as executecartServiceOptionWebHostingServicePOST,
} from './cart/cartServiceOption/cartserviceoptionwebhostingservicepost.operation';
import {
	description as descriptionCartSummaryGet,
	execute as executeCartSummaryGet,
} from './cart/cartSummaryGet.operation';
import {
	description as descriptionCartSupportCreatePost,
	execute as executeCartSupportCreatePost,
} from './cart/cartSupportCreatePost.operation';
import {
	description as descriptionCartSupportListGet,
	execute as executeCartSupportListGet,
} from './cart/cartSupportListGet.operation';
import {
	description as descriptionCartUpdatePut,
	execute as executeCartUpdatePut,
} from './cart/cartUpdatePut.operation';
import {
	description as descriptionCartLicenseHycuGET,
	execute as executeCartLicenseHycuGET,
} from './cart/licenseHycu/cartLicenseHycuGET.operation';
import {
	description as descriptionCartLicenseHycuPOST,
	execute as executeCartLicenseHycuPOST,
} from './cart/licenseHycu/cartLicenseHycuPOST.operation';
import {
	description as descriptionCartLicensePleskGET,
	execute as executeCartLicensePleskGET,
} from './cart/licensePlesk/cartLicensePleskGET.operation';
import {
	description as descriptionCartLicensePleskOptionsGET,
	execute as executeCartLicensePleskOptionsGET,
} from './cart/licensePlesk/cartLicensePleskOptionsGET.operation';
import {
	description as descriptionCartLicensePleskOptionsPOST,
	execute as executeCartLicensePleskOptionsPOST,
} from './cart/licensePlesk/cartLicensePleskOptionsPOST.operation';
import {
	description as descriptionCartLicensePleskPOST,
	execute as executeCartLicensePleskPOST,
} from './cart/licensePlesk/cartLicensePleskPOST.operation';
import {
	description as descriptionCartLicenseSqlServerGET,
	execute as executeCartLicenseSqlServerGET,
} from './cart/licenseSqlServer/cartLicenseSqlServerGET.operation';
import {
	description as descriptionCartLicenseSqlServerPOST,
	execute as executeCartLicenseSqlServerPOST,
} from './cart/licenseSqlServer/cartLicenseSqlServerPOST.operation';
import {
	description as descriptionCartLicenseWindowsGET,
	execute as executeCartLicenseWindowsGET,
} from './cart/licenseWindows/cartLicenseWindowsGET.operation';
import {
	description as descriptionCartLicenseWindowsPOST,
	execute as executeCartLicenseWindowsPOST,
} from './cart/licenseWindows/cartLicenseWindowsPOST.operation';
import {
	description as descriptionCartLicensecPanelGET,
	execute as executeCartLicensecPanelGET,
} from './cart/licensecPanel/cartLicensecPanelGET.operation';
import {
	description as descriptionCartLicensecPanelPOST,
	execute as executeCartLicensecPanelPOST,
} from './cart/licensecPanel/cartLicensecPanelPOST.operation';
import {
	description as descriptionCartLogsGET,
	execute as executeCartLogsGET,
} from './cart/logs/cartLogsGET.operation';
import {
	description as descriptionCartLogsOptionsGET,
	execute as executeCartLogsOptionsGET,
} from './cart/logs/cartLogsOptionsGET.operation';
import {
	description as descriptionCartLogsOptionsPOST,
	execute as executeCartLogsOptionsPOST,
} from './cart/logs/cartLogsOptionsPOST.operation';
import {
	description as descriptionCartLogsPOST,
	execute as executeCartLogsPOST,
} from './cart/logs/cartLogsPOST.operation';
import {
	description as descriptionCartManagedCMSGET,
	execute as executeCartManagedCMSGET,
} from './cart/managedCMS/cartManagedCMSGET.operation';
import {
	description as descriptionCartManagedCMSOptionsGET,
	execute as executeCartManagedCMSOptionsGET,
} from './cart/managedCMS/cartManagedCMSOptionsGET.operation';
import {
	description as descriptionCartManagedCMSOptionsPOST,
	execute as executeCartManagedCMSOptionsPOST,
} from './cart/managedCMS/cartManagedCMSOptionsPOST.operation';
import {
	description as descriptionCartManagedCMSPOST,
	execute as executeCartManagedCMSPOST,
} from './cart/managedCMS/cartManagedCMSPOST.operation';
import {
	description as descriptionCartManagedServicesGET,
	execute as executeCartManagedServicesGET,
} from './cart/managedServices/cartManagedServicesGET.operation';
import {
	description as descriptionCartManagedServicesOptionsGET,
	execute as executeCartManagedServicesOptionsGET,
} from './cart/managedServices/cartManagedServicesOptionsGET.operation';
import {
	description as descriptionCartManagedServicesOptionsPOST,
	execute as executeCartManagedServicesOptionsPOST,
} from './cart/managedServices/cartManagedServicesOptionsPOST.operation';
import {
	description as descriptionCartManagedServicesPOST,
	execute as executeCartManagedServicesPOST,
} from './cart/managedServices/cartManagedServicesPOST.operation';
import {
	description as descriptionCartMetricsGET,
	execute as executeCartMetricsGET,
} from './cart/metrics/cartMetricsGET.operation';
import {
	description as descriptionCartMetricsOptionsGET,
	execute as executeCartMetricsOptionsGET,
} from './cart/metrics/cartMetricsOptionsGET.operation';
import {
	description as descriptionCartMetricsOptionsPOST,
	execute as executeCartMetricsOptionsPOST,
} from './cart/metrics/cartMetricsOptionsPOST.operation';
import {
	description as descriptionCartMetricsPOST,
	execute as executeCartMetricsPOST,
} from './cart/metrics/cartMetricsPOST.operation';
import {
	description as descriptionCartMicrosoftGET,
	execute as executeCartMicrosoftGET,
} from './cart/microsoft/cartMicrosoftGET.operation';
import {
	description as descriptionCartMicrosoftOptionsGET,
	execute as executeCartMicrosoftOptionsGET,
} from './cart/microsoft/cartMicrosoftOptionsGET.operation';
import {
	description as descriptionCartMicrosoftOptionsPOST,
	execute as executeCartMicrosoftOptionsPOST,
} from './cart/microsoft/cartMicrosoftOptionsPOST.operation';
import {
	description as descriptionCartMicrosoftPOST,
	execute as executeCartMicrosoftPOST,
} from './cart/microsoft/cartMicrosoftPOST.operation';
import {
	description as descriptionCartNashaGET,
	execute as executeCartNashaGET,
} from './cart/nasha/cartNashaGET.operation';
import {
	description as descriptionCartNashaOptionsGET,
	execute as executeCartNashaOptionsGET,
} from './cart/nasha/cartNashaOptionsGET.operation';
import {
	description as descriptionCartNashaOptionsPOST,
	execute as executeCartNashaOptionsPOST,
} from './cart/nasha/cartNashaOptionsPOST.operation';
import {
	description as descriptionCartNashaPOST,
	execute as executeCartNashaPOST,
} from './cart/nasha/cartNashaPOST.operation';
import {
	description as descriptionCartNetappGET,
	execute as executeCartNetappGET,
} from './cart/netapp/cartNetappGET.operation';
import {
	description as descriptionCartNetappOptionsGET,
	execute as executeCartNetappOptionsGET,
} from './cart/netapp/cartNetappOptionsGET.operation';
import {
	description as descriptionCartNetappOptionsPOST,
	execute as executeCartNetappOptionsPOST,
} from './cart/netapp/cartNetappOptionsPOST.operation';
import {
	description as descriptionCartNetappPOST,
	execute as executeCartNetappPOST,
} from './cart/netapp/cartNetappPOST.operation';
import {
	description as descriptionCartNutanixGET,
	execute as executeCartNutanixGET,
} from './cart/nutanix/cartNutanixGET.operation';
import {
	description as descriptionCartNutanixOptionsGET,
	execute as executeCartNutanixOptionsGET,
} from './cart/nutanix/cartNutanixOptionsGET.operation';
import {
	description as descriptionCartNutanixOptionsPOST,
	execute as executeCartNutanixOptionsPOST,
} from './cart/nutanix/cartNutanixOptionsPOST.operation';
import {
	description as descriptionCartNutanixPOST,
	execute as executeCartNutanixPOST,
} from './cart/nutanix/cartNutanixPOST.operation';
import {
	description as descriptionCartOffice365GET,
	execute as executeCartOffice365GET,
} from './cart/office365/cartOffice365GET.operation';
import {
	description as descriptionCartOffice365OptionsGET,
	execute as executeCartOffice365OptionsGET,
} from './cart/office365/cartOffice365OptionsGET.operation';
import {
	description as descriptionCartOffice365OptionsPOST,
	execute as executeCartOffice365OptionsPOST,
} from './cart/office365/cartOffice365OptionsPOST.operation';
import {
	description as descriptionCartOffice365POST,
	execute as executeCartOffice365POST,
} from './cart/office365/cartOffice365POST.operation';
import {
	description as descriptionCartOffice365PrepaidGET,
	execute as executeCartOffice365PrepaidGET,
} from './cart/office365Prepaid/cartOffice365PrepaidGET.operation';
import {
	description as descriptionCartOffice365PrepaidOptionsGET,
	execute as executeCartOffice365PrepaidOptionsGET,
} from './cart/office365Prepaid/cartOffice365PrepaidOptionsGET.operation';
import {
	description as descriptionCartOffice365PrepaidOptionsPOST,
	execute as executeCartOffice365PrepaidOptionsPOST,
} from './cart/office365Prepaid/cartOffice365PrepaidOptionsPOST.operation';
import {
	description as descriptionCartOffice365PrepaidPOST,
	execute as executeCartOffice365PrepaidPOST,
} from './cart/office365Prepaid/cartOffice365PrepaidPOST.operation';
import {
	description as descriptionCartOfficePrepaidGET,
	execute as executeCartOfficePrepaidGET,
} from './cart/officePrepaid/cartOfficePrepaidGET.operation';
import {
	description as descriptionCartOfficePrepaidOptionsGET,
	execute as executeCartOfficePrepaidOptionsGET,
} from './cart/officePrepaid/cartOfficePrepaidOptionsGET.operation';
import {
	description as descriptionCartOfficePrepaidOptionsPOST,
	execute as executeCartOfficePrepaidOptionsPOST,
} from './cart/officePrepaid/cartOfficePrepaidOptionsPOST.operation';
import {
	description as descriptionCartOfficePrepaidPOST,
	execute as executeCartOfficePrepaidPOST,
} from './cart/officePrepaid/cartOfficePrepaidPOST.operation';
import {
	description as descriptionCartOkmsGET,
	execute as executeCartOkmsGET,
} from './cart/okms/cartOkmsGET.operation';
import {
	description as descriptionCartOkmsPOST,
	execute as executeCartOkmsPOST,
} from './cart/okms/cartOkmsPOST.operation';
import {
	description as descriptionCartOtbGET,
	execute as executeCartOtbGET,
} from './cart/otb/cartOtbGET.operation';
import {
	description as descriptionCartOtbOptionsGET,
	execute as executeCartOtbOptionsGET,
} from './cart/otb/cartOtbOptionsGET.operation';
import {
	description as descriptionCartOtbOptionsPOST,
	execute as executeCartOtbOptionsPOST,
} from './cart/otb/cartOtbOptionsPOST.operation';
import {
	description as descriptionCartOtbPOST,
	execute as executeCartOtbPOST,
} from './cart/otb/cartOtbPOST.operation';
import {
	description as descriptionCartOtbResellerGET,
	execute as executeCartOtbResellerGET,
} from './cart/otbReseller/cartOtbResellerGET.operation';
import {
	description as descriptionCartOtbResellerOptionsGET,
	execute as executeCartOtbResellerOptionsGET,
} from './cart/otbReseller/cartOtbResellerOptionsGET.operation';
import {
	description as descriptionCartOtbResellerOptionsPOST,
	execute as executeCartOtbResellerOptionsPOST,
} from './cart/otbReseller/cartOtbResellerOptionsPOST.operation';
import {
	description as descriptionCartOtbResellerPOST,
	execute as executeCartOtbResellerPOST,
} from './cart/otbReseller/cartOtbResellerPOST.operation';
import {
	description as descriptionCartOvhCloudConnectGET,
	execute as executeCartOvhCloudConnectGET,
} from './cart/ovhCloudConnect/cartOvhCloudConnectGET.operation';
import {
	description as descriptionCartOvhCloudConnectPOST,
	execute as executeCartOvhCloudConnectPOST,
} from './cart/ovhCloudConnect/cartOvhCloudConnectPOST.operation';
import {
	description as descriptionCartPaasmonGET,
	execute as executeCartPaasmonGET,
} from './cart/paasmon/cartPaasmonGET.operation';
import {
	description as descriptionCartPaasmonPOST,
	execute as executeCartPaasmonPOST,
} from './cart/paasmon/cartPaasmonPOST.operation';
import {
	description as descriptionCartPacksProfessionalServicesGET,
	execute as executeCartPacksProfessionalServicesGET,
} from './cart/packsProfessionalServices/cartPacksProfessionalServicesGET.operation';
import {
	description as descriptionCartPacksProfessionalServicesOptionsGET,
	execute as executeCartPacksProfessionalServicesOptionsGET,
} from './cart/packsProfessionalServices/cartPacksProfessionalServicesOptionsGET.operation';
import {
	description as descriptionCartPacksProfessionalServicesOptionsPOST,
	execute as executeCartPacksProfessionalServicesOptionsPOST,
} from './cart/packsProfessionalServices/cartPacksProfessionalServicesOptionsPOST.operation';
import {
	description as descriptionCartPacksProfessionalServicesPOST,
	execute as executeCartPacksProfessionalServicesPOST,
} from './cart/packsProfessionalServices/cartPacksProfessionalServicesPOST.operation';
import {
	description as descriptionCartPowerHostingGET,
	execute as executeCartPowerHostingGET,
} from './cart/powerHosting/cartPowerHostingGET.operation';
import {
	description as descriptionCartPowerHostingPOST,
	execute as executeCartPowerHostingPOST,
} from './cart/powerHosting/cartPowerHostingPOST.operation';
import {
	description as descriptionCartPrivateCloudGET,
	execute as executeCartPrivateCloudGET,
} from './cart/privateCloud/cartPrivateCloudGET.operation';
import {
	description as descriptionCartPrivateCloudOptionsGET,
	execute as executeCartPrivateCloudOptionsGET,
} from './cart/privateCloud/cartPrivateCloudOptionsGET.operation';
import {
	description as descriptionCartPrivateCloudOptionsPOST,
	execute as executeCartPrivateCloudOptionsPOST,
} from './cart/privateCloud/cartPrivateCloudOptionsPOST.operation';
import {
	description as descriptionCartPrivateCloudPOST,
	execute as executeCartPrivateCloudPOST,
} from './cart/privateCloud/cartPrivateCloudPOST.operation';
import {
	description as descriptionCartPrivateCloudCDIGET,
	execute as executeCartPrivateCloudCDIGET,
} from './cart/privateCloudCDI/cartPrivateCloudCDIGET.operation';
import {
	description as descriptionCartPrivateCloudCDIOptionsGET,
	execute as executeCartPrivateCloudCDIOptionsGET,
} from './cart/privateCloudCDI/cartPrivateCloudCDIOptionsGET.operation';
import {
	description as descriptionCartPrivateCloudCDIOptionsPOST,
	execute as executeCartPrivateCloudCDIOptionsPOST,
} from './cart/privateCloudCDI/cartPrivateCloudCDIOptionsPOST.operation';
import {
	description as descriptionCartPrivateCloudCDIPOST,
	execute as executeCartPrivateCloudCDIPOST,
} from './cart/privateCloudCDI/cartPrivateCloudCDIPOST.operation';
import {
	description as descriptionCartPrivateCloudDCGET,
	execute as executeCartPrivateCloudDCGET,
} from './cart/privateCloudDC/cartPrivateCloudDCGET.operation';
import {
	description as descriptionCartPrivateCloudDCOptionsGET,
	execute as executeCartPrivateCloudDCOptionsGET,
} from './cart/privateCloudDC/cartPrivateCloudDCOptionsGET.operation';
import {
	description as descriptionCartPrivateCloudDCOptionsPOST,
	execute as executeCartPrivateCloudDCOptionsPOST,
} from './cart/privateCloudDC/cartPrivateCloudDCOptionsPOST.operation';
import {
	description as descriptionCartPrivateCloudDCPOST,
	execute as executeCartPrivateCloudDCPOST,
} from './cart/privateCloudDC/cartPrivateCloudDCPOST.operation';
import {
	description as descriptionCartPrivateCloudEnterpriseGET,
	execute as executeCartPrivateCloudEnterpriseGET,
} from './cart/privateCloudEnterprise/cartPrivateCloudEnterpriseGET.operation';
import {
	description as descriptionCartPrivateCloudEnterpriseOptionsGET,
	execute as executeCartPrivateCloudEnterpriseOptionsGET,
} from './cart/privateCloudEnterprise/cartPrivateCloudEnterpriseOptionsGET.operation';
import {
	description as descriptionCartPrivateCloudEnterpriseOptionsPOST,
	execute as executeCartPrivateCloudEnterpriseOptionsPOST,
} from './cart/privateCloudEnterprise/cartPrivateCloudEnterpriseOptionsPOST.operation';
import {
	description as descriptionCartPrivateCloudEnterprisePOST,
	execute as executeCartPrivateCloudEnterprisePOST,
} from './cart/privateCloudEnterprise/cartPrivateCloudEnterprisePOST.operation';
import {
	description as descriptionCartPrivateCloudResellerGET,
	execute as executeCartPrivateCloudResellerGET,
} from './cart/privateCloudReseller/cartPrivateCloudResellerGET.operation';
import {
	description as descriptionCartPrivateCloudResellerOptionsGET,
	execute as executeCartPrivateCloudResellerOptionsGET,
} from './cart/privateCloudReseller/cartPrivateCloudResellerOptionsGET.operation';
import {
	description as descriptionCartPrivateCloudResellerOptionsPOST,
	execute as executeCartPrivateCloudResellerOptionsPOST,
} from './cart/privateCloudReseller/cartPrivateCloudResellerOptionsPOST.operation';
import {
	description as descriptionCartPrivateCloudResellerPOST,
	execute as executeCartPrivateCloudResellerPOST,
} from './cart/privateCloudReseller/cartPrivateCloudResellerPOST.operation';
import {
	description as descriptionCartPrivateCloudResellerEnterpriseGET,
	execute as executeCartPrivateCloudResellerEnterpriseGET,
} from './cart/privateCloudResellerEnterprise/cartPrivateCloudResellerEnterpriseGET.operation';
import {
	description as descriptionCartPrivateCloudResellerEnterpriseOptionsGET,
	execute as executeCartPrivateCloudResellerEnterpriseOptionsGET,
} from './cart/privateCloudResellerEnterprise/cartPrivateCloudResellerEnterpriseOptionsGET.operation';
import {
	description as descriptionCartPrivateCloudResellerEnterpriseOptionsPOST,
	execute as executeCartPrivateCloudResellerEnterpriseOptionsPOST,
} from './cart/privateCloudResellerEnterprise/cartPrivateCloudResellerEnterpriseOptionsPOST.operation';
import {
	description as descriptionCartPrivateCloudResellerEnterprisePOST,
	execute as executeCartPrivateCloudResellerEnterprisePOST,
} from './cart/privateCloudResellerEnterprise/cartPrivateCloudResellerEnterprisePOST.operation';
import {
	description as descriptionCartPrivateCloudSDDCGET,
	execute as executeCartPrivateCloudSDDCGET,
} from './cart/privateCloudSDDC/cartPrivateCloudSDDCGET.operation';
import {
	description as descriptionCartPrivateCloudSDDCOptionsGET,
	execute as executeCartPrivateCloudSDDCOptionsGET,
} from './cart/privateCloudSDDC/cartPrivateCloudSDDCOptionsGET.operation';
import {
	description as descriptionCartPrivateCloudSDDCOptionsPOST,
	execute as executeCartPrivateCloudSDDCOptionsPOST,
} from './cart/privateCloudSDDC/cartPrivateCloudSDDCOptionsPOST.operation';
import {
	description as descriptionCartPrivateCloudSDDCPOST,
	execute as executeCartPrivateCloudSDDCPOST,
} from './cart/privateCloudSDDC/cartPrivateCloudSDDCPOST.operation';
import {
	description as descriptionCartPrivateSQLGET,
	execute as executeCartPrivateSQLGET,
} from './cart/privateSQL/cartPrivateSQLGET.operation';
import {
	description as descriptionCartPrivateSQLPOST,
	execute as executeCartPrivateSQLPOST,
} from './cart/privateSQL/cartPrivateSQLPOST.operation';
import {
	description as descriptionCartResellerGET,
	execute as executeCartResellerGET,
} from './cart/reseller/cartResellerGET.operation';
import {
	description as descriptionCartResellerPOST,
	execute as executeCartResellerPOST,
} from './cart/reseller/cartResellerPOST.operation';
import {
	description as descriptionCartSharepointGET,
	execute as executeCartSharepointGET,
} from './cart/sharepoint/cartSharepointGET.operation';
import {
	description as descriptionCartSharepointOptionsGET,
	execute as executeCartSharepointOptionsGET,
} from './cart/sharepoint/cartSharepointOptionsGET.operation';
import {
	description as descriptionCartSharepointOptionsPOST,
	execute as executeCartSharepointOptionsPOST,
} from './cart/sharepoint/cartSharepointOptionsPOST.operation';
import {
	description as descriptionCartSharepointPOST,
	execute as executeCartSharepointPOST,
} from './cart/sharepoint/cartSharepointPOST.operation';
import {
	description as descriptionCartSmsGET,
	execute as executeCartSmsGET,
} from './cart/sms/cartSmsGET.operation';
import {
	description as descriptionCartSmsPOST,
	execute as executeCartSmsPOST,
} from './cart/sms/cartSmsPOST.operation';
import {
	description as descriptionCartSncNetworkServicesGET,
	execute as executeCartSncNetworkServicesGET,
} from './cart/sncNetworkServices/cartSncNetworkServicesGET.operation';
import {
	description as descriptionCartSncNetworkServicesOptionsGET,
	execute as executeCartSncNetworkServicesOptionsGET,
} from './cart/sncNetworkServices/cartSncNetworkServicesOptionsGET.operation';
import {
	description as descriptionCartSncNetworkServicesOptionsPOST,
	execute as executeCartSncNetworkServicesOptionsPOST,
} from './cart/sncNetworkServices/cartSncNetworkServicesOptionsPOST.operation';
import {
	description as descriptionCartSncNetworkServicesPOST,
	execute as executeCartSncNetworkServicesPOST,
} from './cart/sncNetworkServices/cartSncNetworkServicesPOST.operation';
import {
	description as descriptionCartSslComodoGET,
	execute as executeCartSslComodoGET,
} from './cart/sslComodo/cartSslComodoGET.operation';
import {
	description as descriptionCartSslComodoOptionsGET,
	execute as executeCartSslComodoOptionsGET,
} from './cart/sslComodo/cartSslComodoOptionsGET.operation';
import {
	description as descriptionCartSslComodoOptionsPOST,
	execute as executeCartSslComodoOptionsPOST,
} from './cart/sslComodo/cartSslComodoOptionsPOST.operation';
import {
	description as descriptionCartSslComodoPOST,
	execute as executeCartSslComodoPOST,
} from './cart/sslComodo/cartSslComodoPOST.operation';
import {
	description as descriptionCartSslGatewayGET,
	execute as executeCartSslGatewayGET,
} from './cart/sslGateway/cartSslGatewayGET.operation';
import {
	description as descriptionCartSslGatewayOptionsGET,
	execute as executeCartSslGatewayOptionsGET,
} from './cart/sslGateway/cartSslGatewayOptionsGET.operation';
import {
	description as descriptionCartSslGatewayOptionsPOST,
	execute as executeCartSslGatewayOptionsPOST,
} from './cart/sslGateway/cartSslGatewayOptionsPOST.operation';
import {
	description as descriptionCartSslGatewayPOST,
	execute as executeCartSslGatewayPOST,
} from './cart/sslGateway/cartSslGatewayPOST.operation';
import {
	description as descriptionCartTelephonyGET,
	execute as executeCartTelephonyGET,
} from './cart/telephony/cartTelephonyGET.operation';
import {
	description as descriptionCartTelephonyOptionsGET,
	execute as executeCartTelephonyOptionsGET,
} from './cart/telephony/cartTelephonyOptionsGET.operation';
import {
	description as descriptionCartTelephonyOptionsPOST,
	execute as executeCartTelephonyOptionsPOST,
} from './cart/telephony/cartTelephonyOptionsPOST.operation';
import {
	description as descriptionCartTelephonyPOST,
	execute as executeCartTelephonyPOST,
} from './cart/telephony/cartTelephonyPOST.operation';
import {
	description as descriptionCartVdiGET,
	execute as executeCartVdiGET,
} from './cart/vdi/cartVdiGET.operation';
import {
	description as descriptionCartVdiOptionsGET,
	execute as executeCartVdiOptionsGET,
} from './cart/vdi/cartVdiOptionsGET.operation';
import {
	description as descriptionCartVdiOptionsPOST,
	execute as executeCartVdiOptionsPOST,
} from './cart/vdi/cartVdiOptionsPOST.operation';
import {
	description as descriptionCartVdiPOST,
	execute as executeCartVdiPOST,
} from './cart/vdi/cartVdiPOST.operation';
import {
	description as descriptionCartVeeamEnterpriseGET,
	execute as executeCartVeeamEnterpriseGET,
} from './cart/veeamEnterprise/cartVeeamEnterpriseGET.operation';
import {
	description as descriptionCartVeeamEnterpriseOptionsGET,
	execute as executeCartVeeamEnterpriseOptionsGET,
} from './cart/veeamEnterprise/cartVeeamEnterpriseOptionsGET.operation';
import {
	description as descriptionCartVeeamEnterpriseOptionsPOST,
	execute as executeCartVeeamEnterpriseOptionsPOST,
} from './cart/veeamEnterprise/cartVeeamEnterpriseOptionsPOST.operation';
import {
	description as descriptionCartVeeamEnterprisePOST,
	execute as executeCartVeeamEnterprisePOST,
} from './cart/veeamEnterprise/cartVeeamEnterprisePOST.operation';
import {
	description as descriptionCartVeeamccGET,
	execute as executeCartVeeamccGET,
} from './cart/veeamcc/cartVeeamccGET.operation';
import {
	description as descriptionCartVeeamccOptionsGET,
	execute as executeCartVeeamccOptionsGET,
} from './cart/veeamcc/cartVeeamccOptionsGET.operation';
import {
	description as descriptionCartVeeamccOptionsPOST,
	execute as executeCartVeeamccOptionsPOST,
} from './cart/veeamcc/cartVeeamccOptionsPOST.operation';
import {
	description as descriptionCartVeeamccPOST,
	execute as executeCartVeeamccPOST,
} from './cart/veeamcc/cartVeeamccPOST.operation';
import {
	description as descriptionCartVideocenterGET,
	execute as executeCartVideocenterGET,
} from './cart/videocenter/cartVideocenterGET.operation';
import {
	description as descriptionCartVideocenterOptionsGET,
	execute as executeCartVideocenterOptionsGET,
} from './cart/videocenter/cartVideocenterOptionsGET.operation';
import {
	description as descriptionCartVideocenterOptionsPOST,
	execute as executeCartVideocenterOptionsPOST,
} from './cart/videocenter/cartVideocenterOptionsPOST.operation';
import {
	description as descriptionCartVideocenterPOST,
	execute as executeCartVideocenterPOST,
} from './cart/videocenter/cartVideocenterPOST.operation';
import {
	description as descriptionCartVmwareCloudDirectorGET,
	execute as executeCartVmwareCloudDirectorGET,
} from './cart/vmwareCloudDirector/cartVmwareCloudDirectorGET.operation';
import {
	description as descriptionCartVmwareCloudDirectorOptionsGET,
	execute as executeCartVmwareCloudDirectorOptionsGET,
} from './cart/vmwareCloudDirector/cartVmwareCloudDirectorOptionsGET.operation';
import {
	description as descriptionCartVmwareCloudDirectorOptionsPOST,
	execute as executeCartVmwareCloudDirectorOptionsPOST,
} from './cart/vmwareCloudDirector/cartVmwareCloudDirectorOptionsPOST.operation';
import {
	description as descriptionCartVmwareCloudDirectorPOST,
	execute as executeCartVmwareCloudDirectorPOST,
} from './cart/vmwareCloudDirector/cartVmwareCloudDirectorPOST.operation';
import {
	description as descriptionCartVmwareCloudDirectorBackupGET,
	execute as executeCartVmwareCloudDirectorBackupGET,
} from './cart/vmwareCloudDirectorBackup/cartVmwareCloudDirectorBackupGET.operation';
import {
	description as descriptionCartVmwareCloudDirectorBackupOptionsGET,
	execute as executeCartVmwareCloudDirectorBackupOptionsGET,
} from './cart/vmwareCloudDirectorBackup/cartVmwareCloudDirectorBackupOptionsGET.operation';
import {
	description as descriptionCartVmwareCloudDirectorBackupOptionsPOST,
	execute as executeCartVmwareCloudDirectorBackupOptionsPOST,
} from './cart/vmwareCloudDirectorBackup/cartVmwareCloudDirectorBackupOptionsPOST.operation';
import {
	description as descriptionCartVmwareCloudDirectorBackupPOST,
	execute as executeCartVmwareCloudDirectorBackupPOST,
} from './cart/vmwareCloudDirectorBackup/cartVmwareCloudDirectorBackupPOST.operation';
import {
	description as descriptionCartVpsGET,
	execute as executeCartVpsGET,
} from './cart/vps/cartVpsGET.operation';
import {
	description as descriptionCartVpsOptionsGET,
	execute as executeCartVpsOptionsGET,
} from './cart/vps/cartVpsOptionsGET.operation';
import {
	description as descriptionCartVpsOptionsPOST,
	execute as executeCartVpsOptionsPOST,
} from './cart/vps/cartVpsOptionsPOST.operation';
import {
	description as descriptionCartVpsPOST,
	execute as executeCartVpsPOST,
} from './cart/vps/cartVpsPOST.operation';
import {
	description as descriptionCartVrackGET,
	execute as executeCartVrackGET,
} from './cart/vrack/cartVrackGET.operation';
import {
	description as descriptionCartVrackOptionsGET,
	execute as executeCartVrackOptionsGET,
} from './cart/vrack/cartVrackOptionsGET.operation';
import {
	description as descriptionCartVrackOptionsPOST,
	execute as executeCartVrackOptionsPOST,
} from './cart/vrack/cartVrackOptionsPOST.operation';
import {
	description as descriptionCartVrackPOST,
	execute as executeCartVrackPOST,
} from './cart/vrack/cartVrackPOST.operation';
import {
	description as descriptionCartVrackResellerGET,
	execute as executeCartVrackResellerGET,
} from './cart/vrackReseller/cartVrackResellerGET.operation';
import {
	description as descriptionCartVrackResellerPOST,
	execute as executeCartVrackResellerPOST,
} from './cart/vrackReseller/cartVrackResellerPOST.operation';
import {
	description as descriptionCartVrackServicesGET,
	execute as executeCartVrackServicesGET,
} from './cart/vrackServices/cartVrackServicesGET.operation';
import {
	description as descriptionCartVrackServicesPOST,
	execute as executeCartVrackServicesPOST,
} from './cart/vrackServices/cartVrackServicesPOST.operation';
import {
	description as descriptionCartWebHostingGET,
	execute as executeCartWebHostingGET,
} from './cart/webHosting/cartWebHostingGET.operation';
import {
	description as descriptionCartWebHostingOptionsGET,
	execute as executeCartWebHostingOptionsGET,
} from './cart/webHosting/cartWebHostingOptionsGET.operation';
import {
	description as descriptionCartWebHostingOptionsPOST,
	execute as executeCartWebHostingOptionsPOST,
} from './cart/webHosting/cartWebHostingOptionsPOST.operation';
import {
	description as descriptionCartWebHostingPOST,
	execute as executeCartWebHostingPOST,
} from './cart/webHosting/cartWebHostingPOST.operation';
import {
	description as descriptionCartXdslGET,
	execute as executeCartXdslGET,
} from './cart/xdsl/cartXdslGET.operation';
import {
	description as descriptionCartXdslOptionsGET,
	execute as executeCartXdslOptionsGET,
} from './cart/xdsl/cartXdslOptionsGET.operation';
import {
	description as descriptionCartXdslOptionsPOST,
	execute as executeCartXdslOptionsPOST,
} from './cart/xdsl/cartXdslOptionsPOST.operation';
import {
	description as descriptionCartXdslPOST,
	execute as executeCartXdslPOST,
} from './cart/xdsl/cartXdslPOST.operation';
import {
	description as descriptionCartZimbraGET,
	execute as executeCartZimbraGET,
} from './cart/zimbra/cartZimbraGET.operation';
import {
	description as descriptionCartZimbraOptionsGET,
	execute as executeCartZimbraOptionsGET,
} from './cart/zimbra/cartZimbraOptionsGET.operation';
import {
	description as descriptionCartZimbraOptionsPOST,
	execute as executeCartZimbraOptionsPOST,
} from './cart/zimbra/cartZimbraOptionsPOST.operation';
import {
	description as descriptionCartZimbraPOST,
	execute as executeCartZimbraPOST,
} from './cart/zimbra/cartZimbraPOST.operation';
import {
	description as descriptionCatalogPublicGet,
	execute as executeCatalogPublicGet,
} from './catalog/catalogPublicGet.operation';
import {
	description as descriptionCatalogPublicOptionsGet,
	execute as executeCatalogPublicOptionsGet,
} from './catalog/catalogPublicOptionsGet.operation';
import {
	description as descriptionDomainGet,
	execute as executeDomainGet,
} from './catalog/domainGet.operation';
import {
	description as descriptionDomainOptionsGet,
	execute as executeDomainOptionsGet,
} from './catalog/domainOptionsGet.operation';
import {
	description as descriptionEcoGet,
	execute as executeEcoGet,
} from './catalog/ecoGet.operation';
import {
	description as descriptionEcoOptionsGet,
	execute as executeEcoOptionsGet,
} from './catalog/ecoOptionsGet.operation';
import {
	description as descriptionEmailDomainGet,
	execute as executeEmailDomainGet,
} from './catalog/emailDomainGet.operation';
import {
	description as descriptionEmailDomainOptionsGet,
	execute as executeEmailDomainOptionsGet,
} from './catalog/emailDomainOptionsGet.operation';
import {
	description as descriptionEmailproGet,
	execute as executeEmailproGet,
} from './catalog/emailproGet.operation';
import {
	description as descriptionEmailproOptionsGet,
	execute as executeEmailproOptionsGet,
} from './catalog/emailproOptionsGet.operation';
import {
	description as descriptionExchangeGet,
	execute as executeExchangeGet,
} from './catalog/exchangeGet.operation';
import {
	description as descriptionExchangeOptionsGet,
	execute as executeExchangeOptionsGet,
} from './catalog/exchangeOptionsGet.operation';
import {
	description as descriptionIpLoadbalancingGet,
	execute as executeIpLoadbalancingGet,
} from './catalog/ipLoadbalancingGet.operation';
import {
	description as descriptionIpLoadbalancingOptionsGet,
	execute as executeIpLoadbalancingOptionsGet,
} from './catalog/ipLoadbalancingOptionsGet.operation';
import {
	description as descriptionLicenseHycuGet,
	execute as executeLicenseHycuGet,
} from './catalog/licenseHycuGet.operation';
import {
	description as descriptionLicenseHycuOptionsGet,
	execute as executeLicenseHycuOptionsGet,
} from './catalog/licenseHycuOptionsGet.operation';
import {
	description as descriptionLicensePleskGet,
	execute as executeLicensePleskGet,
} from './catalog/licensePleskGet.operation';
import {
	description as descriptionLicensePleskOptionsGet,
	execute as executeLicensePleskOptionsGet,
} from './catalog/licensePleskOptionsGet.operation';
import {
	description as descriptionLicenseSqlServerGet,
	execute as executeLicenseSqlServerGet,
} from './catalog/licenseSqlServerGet.operation';
import {
	description as descriptionLicenseSqlServerOptionsGet,
	execute as executeLicenseSqlServerOptionsGet,
} from './catalog/licenseSqlServerOptionsGet.operation';
import {
	description as descriptionLicenseWindowsGet,
	execute as executeLicenseWindowsGet,
} from './catalog/licenseWindowsGet.operation';
import {
	description as descriptionLicenseWindowsOptionsGet,
	execute as executeLicenseWindowsOptionsGet,
} from './catalog/licenseWindowsOptionsGet.operation';
import {
	description as descriptionLicensecPanelGet,
	execute as executeLicensecPanelGet,
} from './catalog/licensecPanelGet.operation';
import {
	description as descriptionLicensecPanelOptionsGet,
	execute as executeLicensecPanelOptionsGet,
} from './catalog/licensecPanelOptionsGet.operation';
import {
	description as descriptionLogsGet,
	execute as executeLogsGet,
} from './catalog/logsGet.operation';
import {
	description as descriptionLogsOptionsGet,
	execute as executeLogsOptionsGet,
} from './catalog/logsOptionsGet.operation';
import {
	description as descriptionNashaGet,
	execute as executeNashaGet,
} from './catalog/nashaGet.operation';
import {
	description as descriptionNashaOptionsGet,
	execute as executeNashaOptionsGet,
} from './catalog/nashaOptionsGet.operation';
import {
	description as descriptionNetappGet,
	execute as executeNetappGet,
} from './catalog/netappGet.operation';
import {
	description as descriptionNetappOptionsGet,
	execute as executeNetappOptionsGet,
} from './catalog/netappOptionsGet.operation';
import {
	description as descriptionNutanixGet,
	execute as executeNutanixGet,
} from './catalog/nutanixGet.operation';
import {
	description as descriptionNutanixOptionsGet,
	execute as executeNutanixOptionsGet,
} from './catalog/nutanixOptionsGet.operation';
import {
	description as descriptionOffice365PrepaidGet,
	execute as executeOffice365PrepaidGet,
} from './catalog/office365PrepaidGet.operation';
import {
	description as descriptionOffice365PrepaidOptionsGet,
	execute as executeOffice365PrepaidOptionsGet,
} from './catalog/office365PrepaidOptionsGet.operation';
import {
	description as descriptionOfficePrepaidGet,
	execute as executeOfficePrepaidGet,
} from './catalog/officePrepaidGet.operation';
import {
	description as descriptionOfficePrepaidOptionsGet,
	execute as executeOfficePrepaidOptionsGet,
} from './catalog/officePrepaidOptionsGet.operation';
import {
	description as descriptionOkmsGet,
	execute as executeOkmsGet,
} from './catalog/okmsGet.operation';
import {
	description as descriptionOkmsOptionsGet,
	execute as executeOkmsOptionsGet,
} from './catalog/okmsOptionsGet.operation';
import {
	description as descriptionOvhCloudConnectGet,
	execute as executeOvhCloudConnectGet,
} from './catalog/ovhCloudConnectGet.operation';
import {
	description as descriptionOvhCloudConnectOptionsGet,
	execute as executeOvhCloudConnectOptionsGet,
} from './catalog/ovhCloudConnectOptionsGet.operation';
import {
	description as descriptionPacksProfessionalServicesGet,
	execute as executePacksProfessionalServicesGet,
} from './catalog/packsProfessionalServicesGet.operation';
import {
	description as descriptionPacksProfessionalServicesOptionsGet,
	execute as executePacksProfessionalServicesOptionsGet,
} from './catalog/packsProfessionalServicesOptionsGet.operation';
import {
	description as descriptionPrivateCloudEnterpriseGet,
	execute as executePrivateCloudEnterpriseGet,
} from './catalog/privateCloudEnterpriseGet.operation';
import {
	description as descriptionPrivateCloudEnterpriseOptionsGet,
	execute as executePrivateCloudEnterpriseOptionsGet,
} from './catalog/privateCloudEnterpriseOptionsGet.operation';
import {
	description as descriptionPrivateCloudGet,
	execute as executePrivateCloudGet,
} from './catalog/privateCloudGet.operation';
import {
	description as descriptionPrivateCloudOptionsGet,
	execute as executePrivateCloudOptionsGet,
} from './catalog/privateCloudOptionsGet.operation';
import {
	description as descriptionPrivateSQLGet,
	execute as executePrivateSQLGet,
} from './catalog/privateSQLGet.operation';
import {
	description as descriptionPrivateSQLOptionsGet,
	execute as executePrivateSQLOptionsGet,
} from './catalog/privateSQLOptionsGet.operation';
import {
	description as descriptionSslGatewayGet,
	execute as executeSslGatewayGet,
} from './catalog/sslGatewayGet.operation';
import {
	description as descriptionSslGatewayOptionsGet,
	execute as executeSslGatewayOptionsGet,
} from './catalog/sslGatewayOptionsGet.operation';
import {
	description as descriptionTelephonyGet,
	execute as executeTelephonyGet,
} from './catalog/telephonyGet.operation';
import {
	description as descriptionTelephonyOptionsGet,
	execute as executeTelephonyOptionsGet,
} from './catalog/telephonyOptionsGet.operation';
import {
	description as descriptionVmwareCloudDirectorBackupGet,
	execute as executeVmwareCloudDirectorBackupGet,
} from './catalog/vmwareCloudDirectorBackupGet.operation';
import {
	description as descriptionVmwareCloudDirectorBackupOptionsGet,
	execute as executeVmwareCloudDirectorBackupOptionsGet,
} from './catalog/vmwareCloudDirectorBackupOptionsGet.operation';
import {
	description as descriptionVmwareCloudDirectorGet,
	execute as executeVmwareCloudDirectorGet,
} from './catalog/vmwareCloudDirectorGet.operation';
import {
	description as descriptionVmwareCloudDirectorOptionsGet,
	execute as executeVmwareCloudDirectorOptionsGet,
} from './catalog/vmwareCloudDirectorOptionsGet.operation';
import {
	description as descriptionVpsGet,
	execute as executeVpsGet,
} from './catalog/vpsGet.operation';
import {
	description as descriptionVpsOptionsGet,
	execute as executeVpsOptionsGet,
} from './catalog/vpsOptionsGet.operation';
import {
	description as descriptionWebHostingGet,
	execute as executeWebHostingGet,
} from './catalog/webHostingGet.operation';
import {
	description as descriptionWebHostingOptionsGet,
	execute as executeWebHostingOptionsGet,
} from './catalog/webHostingOptionsGet.operation';
import {
	description as descriptionWebPaaSGet,
	execute as executeWebPaaSGet,
} from './catalog/webPaaSGet.operation';
import {
	description as descriptionWebPaaSOptionsGet,
	execute as executeWebPaaSOptionsGet,
} from './catalog/webPaaSOptionsGet.operation';
import {
	description as descriptionZimbraGet,
	execute as executeZimbraGet,
} from './catalog/zimbraGet.operation';
import {
	description as descriptionZimbraOptionsGet,
	execute as executeZimbraOptionsGet,
} from './catalog/zimbraOptionsGet.operation';
import {
	description as descriptioncdnDedicatedBackendOptionsListGet,
	execute as executecdnDedicatedBackendOptionsListGet,
} from './cdn/cdnDedicatedBackendOptionsListGet.operation';
import {
	description as descriptioncdnDedicatedBackendOrderCreatePost,
	execute as executecdnDedicatedBackendOrderCreatePost,
} from './cdn/cdnDedicatedBackendOrderCreatePost.operation';
import {
	description as descriptioncdnDedicatedBackendOrderGet,
	execute as executecdnDedicatedBackendOrderGet,
} from './cdn/cdnDedicatedBackendOrderGet.operation';
import {
	description as descriptioncdnDedicatedCacheRuleOptionsListGet,
	execute as executecdnDedicatedCacheRuleOptionsListGet,
} from './cdn/cdnDedicatedCacheRuleOptionsListGet.operation';
import {
	description as descriptioncdnDedicatedCacheRuleOrderCreatePost,
	execute as executecdnDedicatedCacheRuleOrderCreatePost,
} from './cdn/cdnDedicatedCacheRuleOrderCreatePost.operation';
import {
	description as descriptioncdnDedicatedCacheRuleOrderGet,
	execute as executecdnDedicatedCacheRuleOrderGet,
} from './cdn/cdnDedicatedCacheRuleOrderGet.operation';
import {
	description as descriptioncdnDedicatedListGet,
	execute as executecdnDedicatedListGet,
} from './cdn/cdnDedicatedListGet.operation';
import {
	description as descriptioncdnDedicatedNewDurationGet,
	execute as executecdnDedicatedNewDurationGet,
} from './cdn/cdnDedicatedNewDurationGet.operation';
import {
	description as descriptioncdnDedicatedNewOrderCreatePost,
	execute as executecdnDedicatedNewOrderCreatePost,
} from './cdn/cdnDedicatedNewOrderCreatePost.operation';
import {
	description as descriptioncdnDedicatedNewOrderGet,
	execute as executecdnDedicatedNewOrderGet,
} from './cdn/cdnDedicatedNewOrderGet.operation';
import {
	description as descriptioncdnDedicatedQuotaOptionsListGet,
	execute as executecdnDedicatedQuotaOptionsListGet,
} from './cdn/cdnDedicatedQuotaOptionsListGet.operation';
import {
	description as descriptioncdnDedicatedQuotaOrderCreatePost,
	execute as executecdnDedicatedQuotaOrderCreatePost,
} from './cdn/cdnDedicatedQuotaOrderCreatePost.operation';
import {
	description as descriptioncdnDedicatedQuotaOrderGet,
	execute as executecdnDedicatedQuotaOrderGet,
} from './cdn/cdnDedicatedQuotaOrderGet.operation';
import {
	description as descriptioncdnDedicatedServiceOptionsListGet,
	execute as executecdnDedicatedServiceOptionsListGet,
} from './cdn/cdnDedicatedServiceOptionsListGet.operation';
import {
	description as descriptionCloudprojectCreatePost,
	execute as executeCloudprojectCreatePost,
} from './cloud/cloudProjectCreatePost.operation';
import {
	description as descriptionCloudprojectGet,
	execute as executeCloudprojectGet,
} from './cloud/cloudProjectGet.operation';
import {
	description as descriptionCloudprojectListGet,
	execute as executeCloudprojectListGet,
} from './cloud/cloudProjectListGet.operation';
import {
	description as descriptiondomainZoneDnsAnycastOptionsListGet,
	execute as executedomainZoneDnsAnycastOptionsListGet,
} from './domainZone/domainZoneDnsAnycastOptionsListGet.operation';
import {
	description as descriptiondomainZoneDnsAnycastOrderCreatePost,
	execute as executedomainZoneDnsAnycastOrderCreatePost,
} from './domainZone/domainZoneDnsAnycastOrderCreatePost.operation';
import {
	description as descriptiondomainZoneDnsAnycastOrderGet,
	execute as executedomainZoneDnsAnycastOrderGet,
} from './domainZone/domainZoneDnsAnycastOrderGet.operation';
import {
	description as descriptiondomainZoneListGet,
	execute as executedomainZoneListGet,
} from './domainZone/domainZoneListGet.operation';
import {
	description as descriptiondomainZoneNewOrderCreatePost,
	execute as executedomainZoneNewOrderCreatePost,
} from './domainZone/domainZoneNewOrderCreatePost.operation';
import {
	description as descriptiondomainZoneNewOrderGet,
	execute as executedomainZoneNewOrderGet,
} from './domainZone/domainZoneNewOrderGet.operation';
import {
	description as descriptiondomainZoneServiceOptionsListGet,
	execute as executedomainZoneServiceOptionsListGet,
} from './domainZone/domainZoneServiceOptionsListGet.operation';
import {
	description as descriptionEmailexchangeAccountGet,
	execute as executeEmailexchangeAccountGet,
} from './email/exchange/exchangeAccountGet.operation';
import {
	description as descriptionEmailexchangeAccountUpgradeCreatePost,
	execute as executeEmailexchangeAccountUpgradeCreatePost,
} from './email/exchange/exchangeAccountUpgradeCreatePost.operation';
import {
	description as descriptionEmailexchangeDiskSpaceCreatePost,
	execute as executeEmailexchangeDiskSpaceCreatePost,
} from './email/exchange/exchangeDiskSpaceCreatePost.operation';
import {
	description as descriptionEmailexchangeOrganizationListGet,
	execute as executeEmailexchangeOrganizationListGet,
} from './email/exchange/exchangeOrganizationListGet.operation';
import {
	description as descriptionEmailexchangeOutlookCreatePost,
	execute as executeEmailexchangeOutlookCreatePost,
} from './email/exchange/exchangeOutlookCreatePost.operation';
import {
	description as descriptionEmailexchangeServiceCreatePost,
	execute as executeEmailexchangeServiceCreatePost,
} from './email/exchange/exchangeServiceCreatePost.operation';
import {
	description as descriptionEmailexchangeServiceGet,
	execute as executeEmailexchangeServiceGet,
} from './email/exchange/exchangeServiceGet.operation';
import {
	description as descriptionEmailexchangeUpgradeCreatePost,
	execute as executeEmailexchangeUpgradeCreatePost,
} from './email/exchange/exchangeUpgradeCreatePost.operation';
import {
	description as descriptionEmailproOrganizationCreatePost,
	execute as executeEmailproOrganizationCreatePost,
} from './email/pro/proOrganizationCreatePost.operation';
import {
	description as descriptionEmailproOrganizationListGet,
	execute as executeEmailproOrganizationListGet,
} from './email/pro/proOrganizationListGet.operation';
import {
	description as descriptionemailDomainListGet,
	execute as executeemailDomainListGet,
} from './emailDomain/emailDomainListGet.operation';
import {
	description as descriptionemailDomainNewDurationGet,
	execute as executeemailDomainNewDurationGet,
} from './emailDomain/emailDomainNewDurationGet.operation';
import {
	description as descriptionemailDomainNewOrderCreatePost,
	execute as executeemailDomainNewOrderCreatePost,
} from './emailDomain/emailDomainNewOrderCreatePost.operation';
import {
	description as descriptionemailDomainNewOrderGet,
	execute as executeemailDomainNewOrderGet,
} from './emailDomain/emailDomainNewOrderGet.operation';
import {
	description as descriptionemailDomainServiceOptionsListGet,
	execute as executeemailDomainServiceOptionsListGet,
} from './emailDomain/emailDomainServiceOptionsListGet.operation';
import {
	description as descriptionFreefaxCreatePost,
	execute as executeFreefaxCreatePost,
} from './freefax/freefaxCreatePost.operation';
import {
	description as descriptionFreefaxnumberGet,
	execute as executeFreefaxnumberGet,
} from './freefax/freefaxNumberGet.operation';
import {
	description as descriptionFreefaxorganizationListGet,
	execute as executeFreefaxorganizationListGet,
} from './freefax/freefaxOrganizationListGet.operation';
import {
	description as descriptionhostingWebListGet,
	execute as executehostingWebListGet,
} from './hosting/hostingWebListGet.operation';
import {
	description as descriptionhostingWebServiceOptionsListGet,
	execute as executehostingWebServiceOptionsListGet,
} from './hosting/hostingWebServiceOptionsListGet.operation';
import {
	description as descriptionhostingWebServiceUpgradeOrderCreatePost,
	execute as executehostingWebServiceUpgradeOrderCreatePost,
} from './hosting/hostingWebServiceUpgradeOrderCreatePost.operation';
import {
	description as descriptionhostingWebServiceUpgradeOrderGet,
	execute as executehostingWebServiceUpgradeOrderGet,
} from './hosting/hostingWebServiceUpgradeOrderGet.operation';
import {
	description as descriptionLicensecPanelListGet,
	execute as executeLicensecPanelListGet,
} from './license/cPanel/cPanelListGet.operation';
import {
	description as descriptionLicensecPanelNewCreatePost,
	execute as executeLicensecPanelNewCreatePost,
} from './license/cPanel/cPanelNewCreatePost.operation';
import {
	description as descriptionLicensecPanelNewDurationGet,
	execute as executeLicensecPanelNewDurationGet,
} from './license/cPanel/cPanelNewDurationGet.operation';
import {
	description as descriptionLicensecPanelNewListGet,
	execute as executeLicensecPanelNewListGet,
} from './license/cPanel/cPanelNewListGet.operation';
import {
	description as descriptionLicensecPanelServiceGet,
	execute as executeLicensecPanelServiceGet,
} from './license/cPanel/cPanelServiceGet.operation';
import {
	description as descriptionLicensecPanelServiceUpgradeCreatePost,
	execute as executeLicensecPanelServiceUpgradeCreatePost,
} from './license/cPanel/cPanelServiceUpgradeCreatePost.operation';
import {
	description as descriptionLicensecPanelServiceUpgradeDurationGet,
	execute as executeLicensecPanelServiceUpgradeDurationGet,
} from './license/cPanel/cPanelServiceUpgradeDurationGet.operation';
import {
	description as descriptionLicensecPanelServiceUpgradeListGet,
	execute as executeLicensecPanelServiceUpgradeListGet,
} from './license/cPanel/cPanelServiceUpgradeListGet.operation';
import {
	description as descriptionLicenseofficeListGet,
	execute as executeLicenseofficeListGet,
} from './license/office/officeListGet.operation';
import {
	description as descriptionLicenseofficeNewCreatePost,
	execute as executeLicenseofficeNewCreatePost,
} from './license/office/officeNewCreatePost.operation';
import {
	description as descriptionLicenseofficeNewDurationGet,
	execute as executeLicenseofficeNewDurationGet,
} from './license/office/officeNewDurationGet.operation';
import {
	description as descriptionLicenseofficeNewListGet,
	execute as executeLicenseofficeNewListGet,
} from './license/office/officeNewListGet.operation';
import {
	description as descriptionLicenseofficeServiceGet,
	execute as executeLicenseofficeServiceGet,
} from './license/office/officeServiceGet.operation';
import {
	description as descriptionLicenseofficeServiceUpgradeCreatePost,
	execute as executeLicenseofficeServiceUpgradeCreatePost,
} from './license/office/officeServiceUpgradeCreatePost.operation';
import {
	description as descriptionLicenseofficeServiceUpgradeDurationGet,
	execute as executeLicenseofficeServiceUpgradeDurationGet,
} from './license/office/officeServiceUpgradeDurationGet.operation';
import {
	description as descriptionLicenseofficeServiceUpgradeListGet,
	execute as executeLicenseofficeServiceUpgradeListGet,
} from './license/office/officeServiceUpgradeListGet.operation';
import {
	description as descriptionLicensepleskListGet,
	execute as executeLicensepleskListGet,
} from './license/plesk/pleskListGet.operation';
import {
	description as descriptionLicensepleskNewCreatePost,
	execute as executeLicensepleskNewCreatePost,
} from './license/plesk/pleskNewCreatePost.operation';
import {
	description as descriptionLicensepleskNewDurationGet,
	execute as executeLicensepleskNewDurationGet,
} from './license/plesk/pleskNewDurationGet.operation';
import {
	description as descriptionLicensepleskNewListGet,
	execute as executeLicensepleskNewListGet,
} from './license/plesk/pleskNewListGet.operation';
import {
	description as descriptionLicensepleskServiceGet,
	execute as executeLicensepleskServiceGet,
} from './license/plesk/pleskServiceGet.operation';
import {
	description as descriptionLicensepleskServiceUpgradeCreatePost,
	execute as executeLicensepleskServiceUpgradeCreatePost,
} from './license/plesk/pleskServiceUpgradeCreatePost.operation';
import {
	description as descriptionLicensepleskServiceUpgradeDurationGet,
	execute as executeLicensepleskServiceUpgradeDurationGet,
} from './license/plesk/pleskServiceUpgradeDurationGet.operation';
import {
	description as descriptionLicensepleskServiceUpgradeListGet,
	execute as executeLicensepleskServiceUpgradeListGet,
} from './license/plesk/pleskServiceUpgradeListGet.operation';
import {
	description as descriptionLicensesqlserverListGet,
	execute as executeLicensesqlserverListGet,
} from './license/sqlserver/sqlserverListGet.operation';
import {
	description as descriptionLicensesqlserverNewCreatePost,
	execute as executeLicensesqlserverNewCreatePost,
} from './license/sqlserver/sqlserverNewCreatePost.operation';
import {
	description as descriptionLicensesqlserverNewDurationGet,
	execute as executeLicensesqlserverNewDurationGet,
} from './license/sqlserver/sqlserverNewDurationGet.operation';
import {
	description as descriptionLicensesqlserverNewListGet,
	execute as executeLicensesqlserverNewListGet,
} from './license/sqlserver/sqlserverNewListGet.operation';
import {
	description as descriptionLicensesqlserverServiceGet,
	execute as executeLicensesqlserverServiceGet,
} from './license/sqlserver/sqlserverServiceGet.operation';
import {
	description as descriptionLicensesqlserverServiceUpgradeCreatePost,
	execute as executeLicensesqlserverServiceUpgradeCreatePost,
} from './license/sqlserver/sqlserverServiceUpgradeCreatePost.operation';
import {
	description as descriptionLicensesqlserverServiceUpgradeDurationGet,
	execute as executeLicensesqlserverServiceUpgradeDurationGet,
} from './license/sqlserver/sqlserverServiceUpgradeDurationGet.operation';
import {
	description as descriptionLicensesqlserverServiceUpgradeListGet,
	execute as executeLicensesqlserverServiceUpgradeListGet,
} from './license/sqlserver/sqlserverServiceUpgradeListGet.operation';
import {
	description as descriptionLicensewindowsListGet,
	execute as executeLicensewindowsListGet,
} from './license/windows/windowsListGet.operation';
import {
	description as descriptionLicensewindowsNewCreatePost,
	execute as executeLicensewindowsNewCreatePost,
} from './license/windows/windowsNewCreatePost.operation';
import {
	description as descriptionLicensewindowsNewDurationGet,
	execute as executeLicensewindowsNewDurationGet,
} from './license/windows/windowsNewDurationGet.operation';
import {
	description as descriptionLicensewindowsNewListGet,
	execute as executeLicensewindowsNewListGet,
} from './license/windows/windowsNewListGet.operation';
import {
	description as descriptionLicensewindowsServiceGet,
	execute as executeLicensewindowsServiceGet,
} from './license/windows/windowsServiceGet.operation';
import {
	description as descriptionLicensewindowsServiceUpgradeCreatePost,
	execute as executeLicensewindowsServiceUpgradeCreatePost,
} from './license/windows/windowsServiceUpgradeCreatePost.operation';
import {
	description as descriptionLicensewindowsServiceUpgradeDurationGet,
	execute as executeLicensewindowsServiceUpgradeDurationGet,
} from './license/windows/windowsServiceUpgradeDurationGet.operation';
import {
	description as descriptionLicensewindowsServiceUpgradeListGet,
	execute as executeLicensewindowsServiceUpgradeListGet,
} from './license/windows/windowsServiceUpgradeListGet.operation';
import {
	description as descriptionOverTheBoxCreatePost,
	execute as executeOverTheBoxCreatePost,
} from './overTheBox/overTheBoxCreatePost.operation';
import {
	description as descriptionOverTheBoxDeviceGet,
	execute as executeOverTheBoxDeviceGet,
} from './overTheBox/overTheBoxDeviceGet.operation';
import {
	description as descriptionOverTheBoxGet,
	execute as executeOverTheBoxGet,
} from './overTheBox/overTheBoxGet.operation';
import {
	description as descriptionOverTheBoxListGet,
	execute as executeOverTheBoxListGet,
} from './overTheBox/overTheBoxListGet.operation';
import {
	description as descriptionOverTheBoxOrderCreatePost,
	execute as executeOverTheBoxOrderCreatePost,
} from './overTheBox/overTheBoxOrderCreatePost.operation';
import {
	description as descriptionSaascsp2CreatePost,
	execute as executeSaascsp2CreatePost,
} from './saas/saasCsp2CreatePost.operation';
import {
	description as descriptionSaascsp2ListGet,
	execute as executeSaascsp2ListGet,
} from './saas/saasCsp2ListGet.operation';
import {
	description as descriptionSaascsp2ProductGet,
	execute as executeSaascsp2ProductGet,
} from './saas/saasCsp2ProductGet.operation';
import {
	description as descriptionSmsCreatePost,
	execute as executeSmsCreatePost,
} from './sms/smsCreatePost.operation';
import {
	description as descriptionSmsListGet,
	execute as executeSmsListGet,
} from './sms/smsListGet.operation';
import {
	description as descriptionSmsProductCreatePost,
	execute as executeSmsProductCreatePost,
} from './sms/smsProductCreatePost.operation';
import {
	description as descriptionSmsProductDurationGet,
	execute as executeSmsProductDurationGet,
} from './sms/smsProductDurationGet.operation';
import {
	description as descriptionSmsProductGet,
	execute as executeSmsProductGet,
} from './sms/smsProductGet.operation';
import {
	description as descriptionupgradeBandwidthVrackListGET,
	execute as executeupgradeBandwidthVrackListGET,
} from './upgrade/upgradebandwidthvracklistget.operation';
import {
	description as descriptionupgradeBandwidthVrackPlanGET,
	execute as executeupgradeBandwidthVrackPlanGET,
} from './upgrade/upgradebandwidthvrackplanget.operation';
import {
	description as descriptionupgradeBandwidthVrackPlanPOST,
	execute as executeupgradeBandwidthVrackPlanPOST,
} from './upgrade/upgradebandwidthvrackplanpost.operation';
import {
	description as descriptionupgradeBandwidthVrackServiceGET,
	execute as executeupgradeBandwidthVrackServiceGET,
} from './upgrade/upgradebandwidthvrackserviceget.operation';
import {
	description as descriptionupgradeBaremetalPrivateBandwidthListGET,
	execute as executeupgradeBaremetalPrivateBandwidthListGET,
} from './upgrade/upgradebaremetalprivatebandwidthlistget.operation';
import {
	description as descriptionupgradeBaremetalPrivateBandwidthPlanGET,
	execute as executeupgradeBaremetalPrivateBandwidthPlanGET,
} from './upgrade/upgradebaremetalprivatebandwidthplanget.operation';
import {
	description as descriptionupgradeBaremetalPrivateBandwidthPlanPOST,
	execute as executeupgradeBaremetalPrivateBandwidthPlanPOST,
} from './upgrade/upgradebaremetalprivatebandwidthplanpost.operation';
import {
	description as descriptionupgradeBaremetalPrivateBandwidthServiceGET,
	execute as executeupgradeBaremetalPrivateBandwidthServiceGET,
} from './upgrade/upgradebaremetalprivatebandwidthserviceget.operation';
import {
	description as descriptionupgradeBaremetalPublicBandwidthListGET,
	execute as executeupgradeBaremetalPublicBandwidthListGET,
} from './upgrade/upgradebaremetalpublicbandwidthlistget.operation';
import {
	description as descriptionupgradeBaremetalPublicBandwidthPlanGET,
	execute as executeupgradeBaremetalPublicBandwidthPlanGET,
} from './upgrade/upgradebaremetalpublicbandwidthplanget.operation';
import {
	description as descriptionupgradeBaremetalPublicBandwidthPlanPOST,
	execute as executeupgradeBaremetalPublicBandwidthPlanPOST,
} from './upgrade/upgradebaremetalpublicbandwidthplanpost.operation';
import {
	description as descriptionupgradeBaremetalPublicBandwidthServiceGET,
	execute as executeupgradeBaremetalPublicBandwidthServiceGET,
} from './upgrade/upgradebaremetalpublicbandwidthserviceget.operation';
import {
	description as descriptionupgradeCephAASListGET,
	execute as executeupgradeCephAASListGET,
} from './upgrade/upgradecephaaslistget.operation';
import {
	description as descriptionupgradeCephAASPlanGET,
	execute as executeupgradeCephAASPlanGET,
} from './upgrade/upgradecephaasplanget.operation';
import {
	description as descriptionupgradeCephAASPlanPOST,
	execute as executeupgradeCephAASPlanPOST,
} from './upgrade/upgradecephaasplanpost.operation';
import {
	description as descriptionupgradeCephAASServiceGET,
	execute as executeupgradeCephAASServiceGET,
} from './upgrade/upgradecephaasserviceget.operation';
import {
	description as descriptionupgradeCloudDBListGET,
	execute as executeupgradeCloudDBListGET,
} from './upgrade/upgradeclouddblistget.operation';
import {
	description as descriptionupgradeCloudDBPlanGET,
	execute as executeupgradeCloudDBPlanGET,
} from './upgrade/upgradeclouddbplanget.operation';
import {
	description as descriptionupgradeCloudDBPlanPOST,
	execute as executeupgradeCloudDBPlanPOST,
} from './upgrade/upgradeclouddbplanpost.operation';
import {
	description as descriptionupgradeCloudDBServiceGET,
	execute as executeupgradeCloudDBServiceGET,
} from './upgrade/upgradeclouddbserviceget.operation';
import {
	description as descriptionupgradeEmailDomainListGET,
	execute as executeupgradeEmailDomainListGET,
} from './upgrade/upgradeemaildomainlistget.operation';
import {
	description as descriptionupgradeEmailDomainPlanGET,
	execute as executeupgradeEmailDomainPlanGET,
} from './upgrade/upgradeemaildomainplanget.operation';
import {
	description as descriptionupgradeEmailDomainPlanPOST,
	execute as executeupgradeEmailDomainPlanPOST,
} from './upgrade/upgradeemaildomainplanpost.operation';
import {
	description as descriptionupgradeEmailDomainServiceGET,
	execute as executeupgradeEmailDomainServiceGET,
} from './upgrade/upgradeemaildomainserviceget.operation';
import {
	description as descriptionupgradeIPLoadBalancingListGET,
	execute as executeupgradeIPLoadBalancingListGET,
} from './upgrade/upgradeiploadbalancinglistget.operation';
import {
	description as descriptionupgradeIPLoadBalancingPlanGET,
	execute as executeupgradeIPLoadBalancingPlanGET,
} from './upgrade/upgradeiploadbalancingplanget.operation';
import {
	description as descriptionupgradeIPLoadBalancingPlanPOST,
	execute as executeupgradeIPLoadBalancingPlanPOST,
} from './upgrade/upgradeiploadbalancingplanpost.operation';
import {
	description as descriptionupgradeIPLoadBalancingServiceGET,
	execute as executeupgradeIPLoadBalancingServiceGET,
} from './upgrade/upgradeiploadbalancingserviceget.operation';
import {
	description as descriptionupgradeLicensecPanelListGET,
	execute as executeupgradeLicensecPanelListGET,
} from './upgrade/upgradelicensecpanellistget.operation';
import {
	description as descriptionupgradeLicensecPanelPlanGET,
	execute as executeupgradeLicensecPanelPlanGET,
} from './upgrade/upgradelicensecpanelplanget.operation';
import {
	description as descriptionupgradeLicensecPanelPlanPOST,
	execute as executeupgradeLicensecPanelPlanPOST,
} from './upgrade/upgradelicensecpanelplanpost.operation';
import {
	description as descriptionupgradeLicensecPanelServiceGET,
	execute as executeupgradeLicensecPanelServiceGET,
} from './upgrade/upgradelicensecpanelserviceget.operation';
import {
	description as descriptionupgradeLicenseHycuListGET,
	execute as executeupgradeLicenseHycuListGET,
} from './upgrade/upgradelicensehyculistget.operation';
import {
	description as descriptionupgradeLicenseHycuPlanGET,
	execute as executeupgradeLicenseHycuPlanGET,
} from './upgrade/upgradelicensehycuplanget.operation';
import {
	description as descriptionupgradeLicenseHycuPlanPOST,
	execute as executeupgradeLicenseHycuPlanPOST,
} from './upgrade/upgradelicensehycuplanpost.operation';
import {
	description as descriptionupgradeLicenseHycuServiceGET,
	execute as executeupgradeLicenseHycuServiceGET,
} from './upgrade/upgradelicensehycuserviceget.operation';
import {
	description as descriptionupgradeLicensePleskListGET,
	execute as executeupgradeLicensePleskListGET,
} from './upgrade/upgradelicenseplesklistget.operation';
import {
	description as descriptionupgradeLicensePleskPlanGET,
	execute as executeupgradeLicensePleskPlanGET,
} from './upgrade/upgradelicensepleskplanget.operation';
import {
	description as descriptionupgradeLicensePleskPlanPOST,
	execute as executeupgradeLicensePleskPlanPOST,
} from './upgrade/upgradelicensepleskplanpost.operation';
import {
	description as descriptionupgradeLicensePleskServiceGET,
	execute as executeupgradeLicensePleskServiceGET,
} from './upgrade/upgradelicensepleskserviceget.operation';
import {
	description as descriptionupgradeLogsListGET,
	execute as executeupgradeLogsListGET,
} from './upgrade/upgradelogslistget.operation';
import {
	description as descriptionupgradeLogsPlanGET,
	execute as executeupgradeLogsPlanGET,
} from './upgrade/upgradelogsplanget.operation';
import {
	description as descriptionupgradeLogsPlanPOST,
	execute as executeupgradeLogsPlanPOST,
} from './upgrade/upgradelogsplanpost.operation';
import {
	description as descriptionupgradeLogsServiceGET,
	execute as executeupgradeLogsServiceGET,
} from './upgrade/upgradelogsserviceget.operation';
import {
	description as descriptionupgradeMetricsListGET,
	execute as executeupgradeMetricsListGET,
} from './upgrade/upgrademetricslistget.operation';
import {
	description as descriptionupgradeMetricsPlanGET,
	execute as executeupgradeMetricsPlanGET,
} from './upgrade/upgrademetricsplanget.operation';
import {
	description as descriptionupgradeMetricsPlanPOST,
	execute as executeupgradeMetricsPlanPOST,
} from './upgrade/upgrademetricsplanpost.operation';
import {
	description as descriptionupgradeMetricsServiceGET,
	execute as executeupgradeMetricsServiceGET,
} from './upgrade/upgrademetricsserviceget.operation';
import {
	description as descriptionupgradeMicrosoftExchangeListGET,
	execute as executeupgradeMicrosoftExchangeListGET,
} from './upgrade/upgrademicrosoftexchangelistget.operation';
import {
	description as descriptionupgradeMicrosoftExchangePlanGET,
	execute as executeupgradeMicrosoftExchangePlanGET,
} from './upgrade/upgrademicrosoftexchangeplanget.operation';
import {
	description as descriptionupgradeMicrosoftExchangePlanPOST,
	execute as executeupgradeMicrosoftExchangePlanPOST,
} from './upgrade/upgrademicrosoftexchangeplanpost.operation';
import {
	description as descriptionupgradeMicrosoftExchangeServiceGET,
	execute as executeupgradeMicrosoftExchangeServiceGET,
} from './upgrade/upgrademicrosoftexchangeserviceget.operation';
import {
	description as descriptionupgradePrivateCloudListGET,
	execute as executeupgradePrivateCloudListGET,
} from './upgrade/upgradeprivatecloudlistget.operation';
import {
	description as descriptionupgradePrivateCloudManagementFeeListGET,
	execute as executeupgradePrivateCloudManagementFeeListGET,
} from './upgrade/upgradeprivatecloudmanagementfeelistget.operation';
import {
	description as descriptionupgradePrivateCloudManagementFeePlanGET,
	execute as executeupgradePrivateCloudManagementFeePlanGET,
} from './upgrade/upgradeprivatecloudmanagementfeeplanget.operation';
import {
	description as descriptionupgradePrivateCloudManagementFeePlanPOST,
	execute as executeupgradePrivateCloudManagementFeePlanPOST,
} from './upgrade/upgradeprivatecloudmanagementfeeplanpost.operation';
import {
	description as descriptionupgradePrivateCloudManagementFeeServiceGET,
	execute as executeupgradePrivateCloudManagementFeeServiceGET,
} from './upgrade/upgradeprivatecloudmanagementfeeserviceget.operation';
import {
	description as descriptionupgradePrivateCloudPlanGET,
	execute as executeupgradePrivateCloudPlanGET,
} from './upgrade/upgradeprivatecloudplanget.operation';
import {
	description as descriptionupgradePrivateCloudPlanPOST,
	execute as executeupgradePrivateCloudPlanPOST,
} from './upgrade/upgradeprivatecloudplanpost.operation';
import {
	description as descriptionupgradePrivateCloudServiceGET,
	execute as executeupgradePrivateCloudServiceGET,
} from './upgrade/upgradeprivatecloudserviceget.operation';
import {
	description as descriptionupgradePrivateSQLListGET,
	execute as executeupgradePrivateSQLListGET,
} from './upgrade/upgradeprivatesqllistget.operation';
import {
	description as descriptionupgradePrivateSQLPlanGET,
	execute as executeupgradePrivateSQLPlanGET,
} from './upgrade/upgradeprivatesqlplanget.operation';
import {
	description as descriptionupgradePrivateSQLPlanPOST,
	execute as executeupgradePrivateSQLPlanPOST,
} from './upgrade/upgradeprivatesqlplanpost.operation';
import {
	description as descriptionupgradePrivateSQLServiceGET,
	execute as executeupgradePrivateSQLServiceGET,
} from './upgrade/upgradeprivatesqlserviceget.operation';
import {
	description as descriptionupgradeSSLGatewayListGET,
	execute as executeupgradeSSLGatewayListGET,
} from './upgrade/upgradesslgatewaylistget.operation';
import {
	description as descriptionupgradeSSLGatewayPlanGET,
	execute as executeupgradeSSLGatewayPlanGET,
} from './upgrade/upgradesslgatewayplanget.operation';
import {
	description as descriptionupgradeSSLGatewayPlanPOST,
	execute as executeupgradeSSLGatewayPlanPOST,
} from './upgrade/upgradesslgatewayplanpost.operation';
import {
	description as descriptionupgradeSSLGatewayServiceGET,
	execute as executeupgradeSSLGatewayServiceGET,
} from './upgrade/upgradesslgatewayserviceget.operation';
import {
	description as descriptionupgradeVPSAdditionalDiskListGET,
	execute as executeupgradeVPSAdditionalDiskListGET,
} from './upgrade/upgradevpsadditionaldisklistget.operation';
import {
	description as descriptionupgradeVPSAdditionalDiskPlanGET,
	execute as executeupgradeVPSAdditionalDiskPlanGET,
} from './upgrade/upgradevpsadditionaldiskplanget.operation';
import {
	description as descriptionupgradeVPSAdditionalDiskPlanPOST,
	execute as executeupgradeVPSAdditionalDiskPlanPOST,
} from './upgrade/upgradevpsadditionaldiskplanpost.operation';
import {
	description as descriptionupgradeVPSAdditionalDiskServiceGET,
	execute as executeupgradeVPSAdditionalDiskServiceGET,
} from './upgrade/upgradevpsadditionaldiskserviceget.operation';
import {
	description as descriptionupgradeVPSListGET,
	execute as executeupgradeVPSListGET,
} from './upgrade/upgradevpslistget.operation';
import {
	description as descriptionupgradeVPSPlanGET,
	execute as executeupgradeVPSPlanGET,
} from './upgrade/upgradevpsplanget.operation';
import {
	description as descriptionupgradeVPSPlanPOST,
	execute as executeupgradeVPSPlanPOST,
} from './upgrade/upgradevpsplanpost.operation';
import {
	description as descriptionupgradeVPSServiceGET,
	execute as executeupgradeVPSServiceGET,
} from './upgrade/upgradevpsserviceget.operation';
import {
	description as descriptionupgradeWebHostingListGET,
	execute as executeupgradeWebHostingListGET,
} from './upgrade/upgradewebhostinglistget.operation';
import {
	description as descriptionupgradeWebHostingPlanGET,
	execute as executeupgradeWebHostingPlanGET,
} from './upgrade/upgradewebhostingplanget.operation';
import {
	description as descriptionupgradeWebHostingPlanPOST,
	execute as executeupgradeWebHostingPlanPOST,
} from './upgrade/upgradewebhostingplanpost.operation';
import {
	description as descriptionupgradeWebHostingServiceGET,
	execute as executeupgradeWebHostingServiceGET,
} from './upgrade/upgradewebhostingserviceget.operation';
import {
	description as descriptionupgradeZimbraListGET,
	execute as executeupgradeZimbraListGET,
} from './upgrade/upgradezimbralistget.operation';
import {
	description as descriptionupgradeZimbraPlanGET,
	execute as executeupgradeZimbraPlanGET,
} from './upgrade/upgradezimbraplanget.operation';
import {
	description as descriptionupgradeZimbraPlanPOST,
	execute as executeupgradeZimbraPlanPOST,
} from './upgrade/upgradezimbraplanpost.operation';
import {
	description as descriptionupgradeZimbraServiceGET,
	execute as executeupgradeZimbraServiceGET,
} from './upgrade/upgradezimbraserviceget.operation';
import {
	description as descriptionVeeamCloudConnectConfigCreatePost,
	execute as executeVeeamCloudConnectConfigCreatePost,
} from './veeamCloudConnect/veeamCloudConnectConfigCreatePost.operation';
import {
	description as descriptionVeeamCloudConnectCreatePost,
	execute as executeVeeamCloudConnectCreatePost,
} from './veeamCloudConnect/veeamCloudConnectCreatePost.operation';
import {
	description as descriptionVeeamCloudConnectGet,
	execute as executeVeeamCloudConnectGet,
} from './veeamCloudConnect/veeamCloudConnectGet.operation';
import {
	description as descriptionVeeamCloudConnectListGet,
	execute as executeVeeamCloudConnectListGet,
} from './veeamCloudConnect/veeamCloudConnectListGet.operation';
import {
	description as descriptionVeeamCloudConnectOptionCreatePost,
	execute as executeVeeamCloudConnectOptionCreatePost,
} from './veeamCloudConnect/veeamCloudConnectOptionCreatePost.operation';
import {
	description as descriptionVpsadditionalDiskCreatePost,
	execute as executeVpsadditionalDiskCreatePost,
} from './vps/additionalDisk/additionalDiskCreatePost.operation';
import {
	description as descriptionVpsadditionalDiskDurationGet,
	execute as executeVpsadditionalDiskDurationGet,
} from './vps/additionalDisk/additionalDiskDurationGet.operation';
import {
	description as descriptionVpsadditionalDiskListGet,
	execute as executeVpsadditionalDiskListGet,
} from './vps/additionalDisk/additionalDiskListGet.operation';
import {
	description as descriptionVpsautomatedBackupCreatePost,
	execute as executeVpsautomatedBackupCreatePost,
} from './vps/automatedBackup/automatedBackupCreatePost.operation';
import {
	description as descriptionVpsautomatedBackupDurationGet,
	execute as executeVpsautomatedBackupDurationGet,
} from './vps/automatedBackup/automatedBackupDurationGet.operation';
import {
	description as descriptionVpsautomatedBackupListGet,
	execute as executeVpsautomatedBackupListGet,
} from './vps/automatedBackup/automatedBackupListGet.operation';
import {
	description as descriptionVpssnapshotCreatePost,
	execute as executeVpssnapshotCreatePost,
} from './vps/snapshot/snapshotCreatePost.operation';
import {
	description as descriptionVpssnapshotDurationGet,
	execute as executeVpssnapshotDurationGet,
} from './vps/snapshot/snapshotDurationGet.operation';
import {
	description as descriptionVpssnapshotListGet,
	execute as executeVpssnapshotListGet,
} from './vps/snapshot/snapshotListGet.operation';
import {
	description as descriptionXdslspareCreatePost,
	execute as executeXdslspareCreatePost,
} from './xdsl/xdslSpareCreatePost.operation';
import {
	description as descriptionXdslspareListGet,
	execute as executeXdslspareListGet,
} from './xdsl/xdslSpareListGet.operation';

const { description, execute } = createOperationDispatcher(
	'orderOperation',
	'order',
	[
	{
		name: 'Add License Plesk Option to Cart',
		value: 'cartLicensePleskOptionsPOST',
		action: 'add license plesk option to cart',
		execute: executeCartLicensePleskOptionsPOST,
		description: descriptionCartLicensePleskOptionsPOST,
	},
	{
		name: 'Add Logs Option to Cart',
		value: 'cartLogsOptionsPOST',
		action: 'add logs option to cart',
		execute: executeCartLogsOptionsPOST,
		description: descriptionCartLogsOptionsPOST,
	},
	{
		name: 'Add Managed C M S Option to Cart',
		value: 'cartManagedCMSOptionsPOST',
		action: 'add managed c m s option to cart',
		execute: executeCartManagedCMSOptionsPOST,
		description: descriptionCartManagedCMSOptionsPOST,
	},
	{
		name: 'Add Managed Services Option to Cart (Service)',
		value: 'cartManagedServicesOptionsPOST',
		action: 'add managed services option to cart (Service)',
		execute: executeCartManagedServicesOptionsPOST,
		description: descriptionCartManagedServicesOptionsPOST,
	},
	{
		name: 'Add Metrics Option to Cart',
		value: 'cartMetricsOptionsPOST',
		action: 'add metrics option to cart',
		execute: executeCartMetricsOptionsPOST,
		description: descriptionCartMetricsOptionsPOST,
	},
	{
		name: 'Add Microsoft Option to Cart',
		value: 'cartMicrosoftOptionsPOST',
		action: 'add microsoft option to cart',
		execute: executeCartMicrosoftOptionsPOST,
		description: descriptionCartMicrosoftOptionsPOST,
	},
	{
		name: 'Add Nasha Option to Cart',
		value: 'cartNashaOptionsPOST',
		action: 'add nasha option to cart',
		execute: executeCartNashaOptionsPOST,
		description: descriptionCartNashaOptionsPOST,
	},
	{
		name: 'Add Netapp Option to Cart',
		value: 'cartNetappOptionsPOST',
		action: 'add netapp option to cart',
		execute: executeCartNetappOptionsPOST,
		description: descriptionCartNetappOptionsPOST,
	},
	{
		name: 'Add Nutanix Option to Cart',
		value: 'cartNutanixOptionsPOST',
		action: 'add nutanix option to cart',
		execute: executeCartNutanixOptionsPOST,
		description: descriptionCartNutanixOptionsPOST,
	},
	{
		name: 'Add Office Prepaid Option to Cart',
		value: 'cartOfficePrepaidOptionsPOST',
		action: 'add office prepaid option to cart',
		execute: executeCartOfficePrepaidOptionsPOST,
		description: descriptionCartOfficePrepaidOptionsPOST,
	},
	{
		name: 'Add Office365 Option to Cart',
		value: 'cartOffice365OptionsPOST',
		action: 'add office365 option to cart',
		execute: executeCartOffice365OptionsPOST,
		description: descriptionCartOffice365OptionsPOST,
	},
	{
		name: 'Add Office365 Prepaid Option to Cart',
		value: 'cartOffice365PrepaidOptionsPOST',
		action: 'add office365 prepaid option to cart',
		execute: executeCartOffice365PrepaidOptionsPOST,
		description: descriptionCartOffice365PrepaidOptionsPOST,
	},
	{
		name: 'Add Otb Option to Cart',
		value: 'cartOtbOptionsPOST',
		action: 'add otb option to cart',
		execute: executeCartOtbOptionsPOST,
		description: descriptionCartOtbOptionsPOST,
	},
	{
		name: 'Add Otb Reseller Option to Cart',
		value: 'cartOtbResellerOptionsPOST',
		action: 'add otb reseller option to cart',
		execute: executeCartOtbResellerOptionsPOST,
		description: descriptionCartOtbResellerOptionsPOST,
	},
	{
		name: 'Add Packs Professional Services Option to Cart (Service)',
		value: 'cartPacksProfessionalServicesOptionsPOST',
		action: 'add packs professional services option to cart (Service)',
		execute: executeCartPacksProfessionalServicesOptionsPOST,
		description: descriptionCartPacksProfessionalServicesOptionsPOST,
	},
	{
		name: 'Add Private Cloud C D I Option to Cart',
		value: 'cartPrivateCloudCDIOptionsPOST',
		action: 'add private cloud c d i option to cart',
		execute: executeCartPrivateCloudCDIOptionsPOST,
		description: descriptionCartPrivateCloudCDIOptionsPOST,
	},
	{
		name: 'Add Private Cloud D C Option to Cart',
		value: 'cartPrivateCloudDCOptionsPOST',
		action: 'add private cloud d c option to cart',
		execute: executeCartPrivateCloudDCOptionsPOST,
		description: descriptionCartPrivateCloudDCOptionsPOST,
	},
	{
		name: 'Add Private Cloud Enterprise Option to Cart',
		value: 'cartPrivateCloudEnterpriseOptionsPOST',
		action: 'add private cloud enterprise option to cart',
		execute: executeCartPrivateCloudEnterpriseOptionsPOST,
		description: descriptionCartPrivateCloudEnterpriseOptionsPOST,
	},
	{
		name: 'Add Private Cloud Option to Cart',
		value: 'cartPrivateCloudOptionsPOST',
		action: 'add private cloud option to cart',
		execute: executeCartPrivateCloudOptionsPOST,
		description: descriptionCartPrivateCloudOptionsPOST,
	},
	{
		name: 'Add Private Cloud Reseller Enterprise Option to Cart',
		value: 'cartPrivateCloudResellerEnterpriseOptionsPOST',
		action: 'add private cloud reseller enterprise option to cart',
		execute: executeCartPrivateCloudResellerEnterpriseOptionsPOST,
		description: descriptionCartPrivateCloudResellerEnterpriseOptionsPOST,
	},
	{
		name: 'Add Private Cloud Reseller Option to Cart',
		value: 'cartPrivateCloudResellerOptionsPOST',
		action: 'add private cloud reseller option to cart',
		execute: executeCartPrivateCloudResellerOptionsPOST,
		description: descriptionCartPrivateCloudResellerOptionsPOST,
	},
	{
		name: 'Add Private Cloud S D D C Option to Cart',
		value: 'cartPrivateCloudSDDCOptionsPOST',
		action: 'add private cloud s d d c option to cart',
		execute: executeCartPrivateCloudSDDCOptionsPOST,
		description: descriptionCartPrivateCloudSDDCOptionsPOST,
	},
	{
		name: 'Add Sharepoint Option to Cart',
		value: 'cartSharepointOptionsPOST',
		action: 'add sharepoint option to cart',
		execute: executeCartSharepointOptionsPOST,
		description: descriptionCartSharepointOptionsPOST,
	},
	{
		name: 'Add Snc Network Services Option to Cart (Service)',
		value: 'cartSncNetworkServicesOptionsPOST',
		action: 'add snc network services option to cart (Service)',
		execute: executeCartSncNetworkServicesOptionsPOST,
		description: descriptionCartSncNetworkServicesOptionsPOST,
	},
	{
		name: 'Add Ssl Comodo Option to Cart',
		value: 'cartSslComodoOptionsPOST',
		action: 'add ssl comodo option to cart',
		execute: executeCartSslComodoOptionsPOST,
		description: descriptionCartSslComodoOptionsPOST,
	},
	{
		name: 'Add Ssl Gateway Option to Cart',
		value: 'cartSslGatewayOptionsPOST',
		action: 'add ssl gateway option to cart',
		execute: executeCartSslGatewayOptionsPOST,
		description: descriptionCartSslGatewayOptionsPOST,
	},
	{
		name: 'Add Telephony Option to Cart',
		value: 'cartTelephonyOptionsPOST',
		action: 'add telephony option to cart',
		execute: executeCartTelephonyOptionsPOST,
		description: descriptionCartTelephonyOptionsPOST,
	},
	{
		name: 'Add Vdi Option to Cart',
		value: 'cartVdiOptionsPOST',
		action: 'add vdi option to cart',
		execute: executeCartVdiOptionsPOST,
		description: descriptionCartVdiOptionsPOST,
	},
	{
		name: 'Add Veeam Enterprise Option to Cart',
		value: 'cartVeeamEnterpriseOptionsPOST',
		action: 'add veeam enterprise option to cart',
		execute: executeCartVeeamEnterpriseOptionsPOST,
		description: descriptionCartVeeamEnterpriseOptionsPOST,
	},
	{
		name: 'Add Veeamcc Option to Cart',
		value: 'cartVeeamccOptionsPOST',
		action: 'add veeamcc option to cart',
		execute: executeCartVeeamccOptionsPOST,
		description: descriptionCartVeeamccOptionsPOST,
	},
	{
		name: 'Add Videocenter Option to Cart',
		value: 'cartVideocenterOptionsPOST',
		action: 'add videocenter option to cart',
		execute: executeCartVideocenterOptionsPOST,
		description: descriptionCartVideocenterOptionsPOST,
	},
	{
		name: 'Add Vmware Cloud Director Backup Option to Cart',
		value: 'cartVmwareCloudDirectorBackupOptionsPOST',
		action: 'add vmware cloud director backup option to cart',
		execute: executeCartVmwareCloudDirectorBackupOptionsPOST,
		description: descriptionCartVmwareCloudDirectorBackupOptionsPOST,
	},
	{
		name: 'Add Vmware Cloud Director Option to Cart',
		value: 'cartVmwareCloudDirectorOptionsPOST',
		action: 'add vmware cloud director option to cart',
		execute: executeCartVmwareCloudDirectorOptionsPOST,
		description: descriptionCartVmwareCloudDirectorOptionsPOST,
	},
	{
		name: 'Add Vps Option to Cart',
		value: 'cartVpsOptionsPOST',
		action: 'add vps option to cart',
		execute: executeCartVpsOptionsPOST,
		description: descriptionCartVpsOptionsPOST,
	},
	{
		name: 'Add Vrack Option to Cart',
		value: 'cartVrackOptionsPOST',
		action: 'add vrack option to cart',
		execute: executeCartVrackOptionsPOST,
		description: descriptionCartVrackOptionsPOST,
	},
	{
		name: 'Add Web Hosting Option to Cart',
		value: 'cartWebHostingOptionsPOST',
		action: 'add web hosting option to cart',
		execute: executeCartWebHostingOptionsPOST,
		description: descriptionCartWebHostingOptionsPOST,
	},
	{
		name: 'Add Xdsl Option to Cart',
		value: 'cartXdslOptionsPOST',
		action: 'add xdsl option to cart',
		execute: executeCartXdslOptionsPOST,
		description: descriptionCartXdslOptionsPOST,
	},
	{
		name: 'Add Zimbra Option to Cart',
		value: 'cartZimbraOptionsPOST',
		action: 'add zimbra option to cart',
		execute: executeCartZimbraOptionsPOST,
		description: descriptionCartZimbraOptionsPOST,
	},
	{
		name: 'Cart Assign',
		value: 'cartAssignPost',
		action: 'Assign a cart to your account',
		execute: executeCartAssignPost,
		description: descriptionCartAssignPost,
	},
	{
		name: 'Cart Checkout Get',
		value: 'cartCheckoutGet',
		action: 'Simulate cart checkout',
		execute: executeCartCheckoutGet,
		description: descriptionCartCheckoutGet,
	},
	{
		name: 'Cart Checkout Post',
		value: 'cartCheckoutPost',
		action: 'Execute cart checkout',
		execute: executeCartCheckoutPost,
		description: descriptionCartCheckoutPost,
	},
	{
		name: 'Cart Coupon Create',
		value: 'cartCouponCreatePost',
		action: 'Create a coupon for a cart',
		execute: executeCartCouponCreatePost,
		description: descriptionCartCouponCreatePost,
	},
	{
		name: 'Cart Coupon Delete',
		value: 'cartCouponDelete',
		action: 'Delete a coupon from cart',
		execute: executeCartCouponDelete,
		description: descriptionCartCouponDelete,
	},
	{
		name: 'Cart Coupon List',
		value: 'cartCouponListGet',
		action: 'List coupons for a cart',
		execute: executeCartCouponListGet,
		description: descriptionCartCouponListGet,
	},
	{
		name: 'Cart Create',
		value: 'cartCreatePost',
		action: 'Create a new cart',
		execute: executeCartCreatePost,
		description: descriptionCartCreatePost,
	},
	{
		name: 'Cart Delete',
		value: 'cartDeleteDelete',
		action: 'Delete a cart',
		execute: executeCartDeleteDelete,
		description: descriptionCartDeleteDelete,
	},
	{
		name: 'Cart Get',
		value: 'cartGetGet',
		action: 'Get cart details',
		execute: executeCartGetGet,
		description: descriptionCartGetGet,
	},
	{
		name: 'Cart Item Configuration Create',
		value: 'cartItemConfigurationCreatePost',
		action: 'Create a configuration for a cart item',
		execute: executeCartItemConfigurationCreatePost,
		description: descriptionCartItemConfigurationCreatePost,
	},
	{
		name: 'Cart Item Configuration Delete',
		value: 'cartItemConfigurationDeleteDelete',
		action: 'Delete a cart item configuration',
		execute: executeCartItemConfigurationDeleteDelete,
		description: descriptionCartItemConfigurationDeleteDelete,
	},
	{
		name: 'Cart Item Configuration Get',
		value: 'cartItemConfigurationGetGet',
		action: 'Get a cart item configuration',
		execute: executeCartItemConfigurationGetGet,
		description: descriptionCartItemConfigurationGetGet,
	},
	{
		name: 'Cart Item Configuration List',
		value: 'cartItemConfigurationListGet',
		action: 'List configurations for a cart item',
		execute: executeCartItemConfigurationListGet,
		description: descriptionCartItemConfigurationListGet,
	},
	{
		name: 'Cart Item Configuration Update',
		value: 'cartItemConfigurationUpdatePut',
		action: 'Update a cart item configuration',
		execute: executeCartItemConfigurationUpdatePut,
		description: descriptionCartItemConfigurationUpdatePut,
	},
	{
		name: 'Cart Item Delete',
		value: 'cartItemDeleteDelete',
		action: 'Delete a cart item',
		execute: executeCartItemDeleteDelete,
		description: descriptionCartItemDeleteDelete,
	},
	{
		name: 'Cart Item Get',
		value: 'cartItemGetGet',
		action: 'Get a cart item',
		execute: executeCartItemGetGet,
		description: descriptionCartItemGetGet,
	},
	{
		name: 'Cart Item List',
		value: 'cartItemListGet',
		action: 'List items in a cart',
		execute: executeCartItemListGet,
		description: descriptionCartItemListGet,
	},
	{
		name: 'Cart Item Required Configuration List',
		value: 'cartItemRequiredConfigurationListGet',
		action: 'List required configurations for a cart item',
		execute: executeCartItemRequiredConfigurationListGet,
		description: descriptionCartItemRequiredConfigurationListGet,
	},
	{
		name: 'Cart Item Update',
		value: 'cartItemUpdatePut',
		action: 'Update a cart item',
		execute: executeCartItemUpdatePut,
		description: descriptionCartItemUpdatePut,
	},
	{
		name: 'Cart List',
		value: 'cartListGet',
		action: 'List all carts',
		execute: executeCartListGet,
		description: descriptionCartListGet,
		default: true,
	},
	{
		name: 'Cart Summary Get',
		value: 'cartSummaryGet',
		action: 'Get cart summary',
		execute: executeCartSummaryGet,
		description: descriptionCartSummaryGet,
	},
	{
		name: 'Cart Support Create',
		value: 'cartSupportCreatePost',
		action: 'Create support for a cart',
		execute: executeCartSupportCreatePost,
		description: descriptionCartSupportCreatePost,
	},
	{
		name: 'Cart Support List',
		value: 'cartSupportListGet',
		action: 'List supports for a cart',
		execute: executeCartSupportListGet,
		description: descriptionCartSupportListGet,
	},
	{
		name: 'Cart Update',
		value: 'cartUpdatePut',
		action: 'Update a cart',
		execute: executeCartUpdatePut,
		description: descriptionCartUpdatePut,
	},
	{
		name: 'Catalog Public Get',
		value: 'catalogPublicGet',
		action: 'Get catalog public products',
		execute: executeCatalogPublicGet,
		description: descriptionCatalogPublicGet,
	},
	{
		name: 'Catalog Public Options Get',
		value: 'catalogPublicOptionsGet',
		action: 'Get catalog public product options',
		execute: executeCatalogPublicOptionsGet,
		description: descriptionCatalogPublicOptionsGet,
	},
	{
		name: 'Cloud Project Create',
		value: 'cloudprojectCreatePost',
		action: 'Create cloud project',
		execute: executeCloudprojectCreatePost,
		description: descriptionCloudprojectCreatePost,
	},
	{
		name: 'Cloud Project Get',
		value: 'cloudprojectGet',
		action: 'Get cloud project',
		execute: executeCloudprojectGet,
		description: descriptionCloudprojectGet,
	},
	{
		name: 'Cloud Project List',
		value: 'cloudprojectListGet',
		action: 'List cloud projects',
		execute: executeCloudprojectListGet,
		description: descriptionCloudprojectListGet,
	},
	{
		name: 'Create License Hycu',
		value: 'cartLicenseHycuPOST',
		action: 'Create License Hycu',
		execute: executeCartLicenseHycuPOST,
		description: descriptionCartLicenseHycuPOST,
	},
	{
		name: 'Create License Plesk',
		value: 'cartLicensePleskPOST',
		action: 'Create License Plesk',
		execute: executeCartLicensePleskPOST,
		description: descriptionCartLicensePleskPOST,
	},
	{
		name: 'Create License Sql Server',
		value: 'cartLicenseSqlServerPOST',
		action: 'Create License Sql Server',
		execute: executeCartLicenseSqlServerPOST,
		description: descriptionCartLicenseSqlServerPOST,
	},
	{
		name: 'Create License Windows',
		value: 'cartLicenseWindowsPOST',
		action: 'Create License Windows',
		execute: executeCartLicenseWindowsPOST,
		description: descriptionCartLicenseWindowsPOST,
	},
	{
		name: 'Create Licensec Panel',
		value: 'cartLicensecPanelPOST',
		action: 'Create Licensec Panel',
		execute: executeCartLicensecPanelPOST,
		description: descriptionCartLicensecPanelPOST,
	},
	{
		name: 'Create Logs',
		value: 'cartLogsPOST',
		action: 'Create Logs',
		execute: executeCartLogsPOST,
		description: descriptionCartLogsPOST,
	},
	{
		name: 'Create Managed C M S',
		value: 'cartManagedCMSPOST',
		action: 'Create Managed C M S',
		execute: executeCartManagedCMSPOST,
		description: descriptionCartManagedCMSPOST,
	},
	{
		name: 'Create Managed Services',
		value: 'cartManagedServicesPOST',
		action: 'Create Managed Services',
		execute: executeCartManagedServicesPOST,
		description: descriptionCartManagedServicesPOST,
	},
	{
		name: 'Create Metrics',
		value: 'cartMetricsPOST',
		action: 'Create Metrics',
		execute: executeCartMetricsPOST,
		description: descriptionCartMetricsPOST,
	},
	{
		name: 'Create Microsoft',
		value: 'cartMicrosoftPOST',
		action: 'Create Microsoft',
		execute: executeCartMicrosoftPOST,
		description: descriptionCartMicrosoftPOST,
	},
	{
		name: 'Create Nasha',
		value: 'cartNashaPOST',
		action: 'Create Nasha',
		execute: executeCartNashaPOST,
		description: descriptionCartNashaPOST,
	},
	{
		name: 'Create Netapp',
		value: 'cartNetappPOST',
		action: 'Create Netapp',
		execute: executeCartNetappPOST,
		description: descriptionCartNetappPOST,
	},
	{
		name: 'Create Nutanix',
		value: 'cartNutanixPOST',
		action: 'Create Nutanix',
		execute: executeCartNutanixPOST,
		description: descriptionCartNutanixPOST,
	},
	{
		name: 'Create Office Prepaid',
		value: 'cartOfficePrepaidPOST',
		action: 'Create Office Prepaid',
		execute: executeCartOfficePrepaidPOST,
		description: descriptionCartOfficePrepaidPOST,
	},
	{
		name: 'Create Office365',
		value: 'cartOffice365POST',
		action: 'Create Office365',
		execute: executeCartOffice365POST,
		description: descriptionCartOffice365POST,
	},
	{
		name: 'Create Office365 Prepaid',
		value: 'cartOffice365PrepaidPOST',
		action: 'Create Office365 Prepaid',
		execute: executeCartOffice365PrepaidPOST,
		description: descriptionCartOffice365PrepaidPOST,
	},
	{
		name: 'Create Okms',
		value: 'cartOkmsPOST',
		action: 'Create Okms',
		execute: executeCartOkmsPOST,
		description: descriptionCartOkmsPOST,
	},
	{
		name: 'Create Otb',
		value: 'cartOtbPOST',
		action: 'Create Otb',
		execute: executeCartOtbPOST,
		description: descriptionCartOtbPOST,
	},
	{
		name: 'Create Otb Reseller',
		value: 'cartOtbResellerPOST',
		action: 'Create Otb Reseller',
		execute: executeCartOtbResellerPOST,
		description: descriptionCartOtbResellerPOST,
	},
	{
		name: 'Create Ovh Cloud Connect',
		value: 'cartOvhCloudConnectPOST',
		action: 'Create Ovh Cloud Connect',
		execute: executeCartOvhCloudConnectPOST,
		description: descriptionCartOvhCloudConnectPOST,
	},
	{
		name: 'Create Paasmon',
		value: 'cartPaasmonPOST',
		action: 'Create Paasmon',
		execute: executeCartPaasmonPOST,
		description: descriptionCartPaasmonPOST,
	},
	{
		name: 'Create Packs Professional Services',
		value: 'cartPacksProfessionalServicesPOST',
		action: 'Create Packs Professional Services',
		execute: executeCartPacksProfessionalServicesPOST,
		description: descriptionCartPacksProfessionalServicesPOST,
	},
	{
		name: 'Create Power Hosting',
		value: 'cartPowerHostingPOST',
		action: 'Create Power Hosting',
		execute: executeCartPowerHostingPOST,
		description: descriptionCartPowerHostingPOST,
	},
	{
		name: 'Create Private Cloud',
		value: 'cartPrivateCloudPOST',
		action: 'Create Private Cloud',
		execute: executeCartPrivateCloudPOST,
		description: descriptionCartPrivateCloudPOST,
	},
	{
		name: 'Create Private Cloud C D I',
		value: 'cartPrivateCloudCDIPOST',
		action: 'Create Private Cloud C D I',
		execute: executeCartPrivateCloudCDIPOST,
		description: descriptionCartPrivateCloudCDIPOST,
	},
	{
		name: 'Create Private Cloud D C',
		value: 'cartPrivateCloudDCPOST',
		action: 'Create Private Cloud D C',
		execute: executeCartPrivateCloudDCPOST,
		description: descriptionCartPrivateCloudDCPOST,
	},
	{
		name: 'Create Private Cloud Enterprise',
		value: 'cartPrivateCloudEnterprisePOST',
		action: 'Create Private Cloud Enterprise',
		execute: executeCartPrivateCloudEnterprisePOST,
		description: descriptionCartPrivateCloudEnterprisePOST,
	},
	{
		name: 'Create Private Cloud Reseller',
		value: 'cartPrivateCloudResellerPOST',
		action: 'Create Private Cloud Reseller',
		execute: executeCartPrivateCloudResellerPOST,
		description: descriptionCartPrivateCloudResellerPOST,
	},
	{
		name: 'Create Private Cloud Reseller Enterprise',
		value: 'cartPrivateCloudResellerEnterprisePOST',
		action: 'Create Private Cloud Reseller Enterprise',
		execute: executeCartPrivateCloudResellerEnterprisePOST,
		description: descriptionCartPrivateCloudResellerEnterprisePOST,
	},
	{
		name: 'Create Private Cloud S D D C',
		value: 'cartPrivateCloudSDDCPOST',
		action: 'Create Private Cloud S D D C',
		execute: executeCartPrivateCloudSDDCPOST,
		description: descriptionCartPrivateCloudSDDCPOST,
	},
	{
		name: 'Create Private S Q L',
		value: 'cartPrivateSQLPOST',
		action: 'Create Private S Q L',
		execute: executeCartPrivateSQLPOST,
		description: descriptionCartPrivateSQLPOST,
	},
	{
		name: 'Create Reseller',
		value: 'cartResellerPOST',
		action: 'Create Reseller',
		execute: executeCartResellerPOST,
		description: descriptionCartResellerPOST,
	},
	{
		name: 'Create Sharepoint',
		value: 'cartSharepointPOST',
		action: 'Create Sharepoint',
		execute: executeCartSharepointPOST,
		description: descriptionCartSharepointPOST,
	},
	{
		name: 'Create Sms',
		value: 'cartSmsPOST',
		action: 'Create Sms',
		execute: executeCartSmsPOST,
		description: descriptionCartSmsPOST,
	},
	{
		name: 'Create Snc Network Services',
		value: 'cartSncNetworkServicesPOST',
		action: 'Create Snc Network Services',
		execute: executeCartSncNetworkServicesPOST,
		description: descriptionCartSncNetworkServicesPOST,
	},
	{
		name: 'Create Ssl Comodo',
		value: 'cartSslComodoPOST',
		action: 'Create Ssl Comodo',
		execute: executeCartSslComodoPOST,
		description: descriptionCartSslComodoPOST,
	},
	{
		name: 'Create Ssl Gateway',
		value: 'cartSslGatewayPOST',
		action: 'Create Ssl Gateway',
		execute: executeCartSslGatewayPOST,
		description: descriptionCartSslGatewayPOST,
	},
	{
		name: 'Create Telephony',
		value: 'cartTelephonyPOST',
		action: 'Create Telephony',
		execute: executeCartTelephonyPOST,
		description: descriptionCartTelephonyPOST,
	},
	{
		name: 'Create Vdi',
		value: 'cartVdiPOST',
		action: 'Create Vdi',
		execute: executeCartVdiPOST,
		description: descriptionCartVdiPOST,
	},
	{
		name: 'Create Veeam Enterprise',
		value: 'cartVeeamEnterprisePOST',
		action: 'Create Veeam Enterprise',
		execute: executeCartVeeamEnterprisePOST,
		description: descriptionCartVeeamEnterprisePOST,
	},
	{
		name: 'Create Veeamcc',
		value: 'cartVeeamccPOST',
		action: 'Create Veeamcc',
		execute: executeCartVeeamccPOST,
		description: descriptionCartVeeamccPOST,
	},
	{
		name: 'Create Videocenter',
		value: 'cartVideocenterPOST',
		action: 'Create Videocenter',
		execute: executeCartVideocenterPOST,
		description: descriptionCartVideocenterPOST,
	},
	{
		name: 'Create Vmware Cloud Director',
		value: 'cartVmwareCloudDirectorPOST',
		action: 'Create Vmware Cloud Director',
		execute: executeCartVmwareCloudDirectorPOST,
		description: descriptionCartVmwareCloudDirectorPOST,
	},
	{
		name: 'Create Vmware Cloud Director Backup',
		value: 'cartVmwareCloudDirectorBackupPOST',
		action: 'Create Vmware Cloud Director Backup',
		execute: executeCartVmwareCloudDirectorBackupPOST,
		description: descriptionCartVmwareCloudDirectorBackupPOST,
	},
	{
		name: 'Create Vps',
		value: 'cartVpsPOST',
		action: 'Create Vps',
		execute: executeCartVpsPOST,
		description: descriptionCartVpsPOST,
	},
	{
		name: 'Create Vrack',
		value: 'cartVrackPOST',
		action: 'Create Vrack',
		execute: executeCartVrackPOST,
		description: descriptionCartVrackPOST,
	},
	{
		name: 'Create Vrack Reseller',
		value: 'cartVrackResellerPOST',
		action: 'Create Vrack Reseller',
		execute: executeCartVrackResellerPOST,
		description: descriptionCartVrackResellerPOST,
	},
	{
		name: 'Create Vrack Services',
		value: 'cartVrackServicesPOST',
		action: 'Create Vrack Services',
		execute: executeCartVrackServicesPOST,
		description: descriptionCartVrackServicesPOST,
	},
	{
		name: 'Create Web Hosting',
		value: 'cartWebHostingPOST',
		action: 'Create Web Hosting',
		execute: executeCartWebHostingPOST,
		description: descriptionCartWebHostingPOST,
	},
	{
		name: 'Create Xdsl',
		value: 'cartXdslPOST',
		action: 'Create Xdsl',
		execute: executeCartXdslPOST,
		description: descriptionCartXdslPOST,
	},
	{
		name: 'Create Zimbra',
		value: 'cartZimbraPOST',
		action: 'Create Zimbra',
		execute: executeCartZimbraPOST,
		description: descriptionCartZimbraPOST,
	},
	{
		name: 'Domain Get',
		value: 'domainGet',
		action: 'Get domain catalog',
		execute: executeDomainGet,
		description: descriptionDomainGet,
	},
	{
		name: 'Domain Options Get',
		value: 'domainOptionsGet',
		action: 'Get domain options',
		execute: executeDomainOptionsGet,
		description: descriptionDomainOptionsGet,
	},
	{
		name: 'Eco Get',
		value: 'ecoGet',
		action: 'Get eco catalog',
		execute: executeEcoGet,
		description: descriptionEcoGet,
	},
	{
		name: 'Eco Options Get',
		value: 'ecoOptionsGet',
		action: 'Get eco options',
		execute: executeEcoOptionsGet,
		description: descriptionEcoOptionsGet,
	},
	{
		name: 'Email Exchange Account Get',
		value: 'emailexchangeAccountGet',
		action: 'Get exchange account',
		execute: executeEmailexchangeAccountGet,
		description: descriptionEmailexchangeAccountGet,
	},
	{
		name: 'Email Exchange Account Upgrade',
		value: 'emailexchangeAccountUpgradeCreatePost',
		action: 'Upgrade exchange account',
		execute: executeEmailexchangeAccountUpgradeCreatePost,
		description: descriptionEmailexchangeAccountUpgradeCreatePost,
	},
	{
		name: 'Email Exchange Disk Space',
		value: 'emailexchangeDiskSpaceCreatePost',
		action: 'Configure disk space',
		execute: executeEmailexchangeDiskSpaceCreatePost,
		description: descriptionEmailexchangeDiskSpaceCreatePost,
	},
	{
		name: 'Email Exchange Organization List',
		value: 'emailexchangeOrganizationListGet',
		action: 'List exchange organizations',
		execute: executeEmailexchangeOrganizationListGet,
		description: descriptionEmailexchangeOrganizationListGet,
	},
	{
		name: 'Email Exchange Outlook',
		value: 'emailexchangeOutlookCreatePost',
		action: 'Configure outlook',
		execute: executeEmailexchangeOutlookCreatePost,
		description: descriptionEmailexchangeOutlookCreatePost,
	},
	{
		name: 'Email Exchange Service Create',
		value: 'emailexchangeServiceCreatePost',
		action: 'Create exchange service',
		execute: executeEmailexchangeServiceCreatePost,
		description: descriptionEmailexchangeServiceCreatePost,
	},
	{
		name: 'Email Exchange Service Get',
		value: 'emailexchangeServiceGet',
		action: 'Get exchange services',
		execute: executeEmailexchangeServiceGet,
		description: descriptionEmailexchangeServiceGet,
	},
	{
		name: 'Email Exchange Upgrade',
		value: 'emailexchangeUpgradeCreatePost',
		action: 'Upgrade exchange',
		execute: executeEmailexchangeUpgradeCreatePost,
		description: descriptionEmailexchangeUpgradeCreatePost,
	},
	{
		name: 'Email Pro Organization Create',
		value: 'emailproOrganizationCreatePost',
		action: 'Create pro organization',
		execute: executeEmailproOrganizationCreatePost,
		description: descriptionEmailproOrganizationCreatePost,
	},
	{
		name: 'Email Pro Organization List',
		value: 'emailproOrganizationListGet',
		action: 'List pro organizations',
		execute: executeEmailproOrganizationListGet,
		description: descriptionEmailproOrganizationListGet,
	},
	{
		name: 'EmailDomain Get',
		value: 'emailDomainGet',
		action: 'Get emailDomain catalog',
		execute: executeEmailDomainGet,
		description: descriptionEmailDomainGet,
	},
	{
		name: 'EmailDomain Options Get',
		value: 'emailDomainOptionsGet',
		action: 'Get emailDomain options',
		execute: executeEmailDomainOptionsGet,
		description: descriptionEmailDomainOptionsGet,
	},
	{
		name: 'Emailpro Get',
		value: 'emailproGet',
		action: 'Get emailpro catalog',
		execute: executeEmailproGet,
		description: descriptionEmailproGet,
	},
	{
		name: 'Emailpro Options Get',
		value: 'emailproOptionsGet',
		action: 'Get emailpro options',
		execute: executeEmailproOptionsGet,
		description: descriptionEmailproOptionsGet,
	},
	{
		name: 'Exchange Get',
		value: 'exchangeGet',
		action: 'Get exchange catalog',
		execute: executeExchangeGet,
		description: descriptionExchangeGet,
	},
	{
		name: 'Exchange Options Get',
		value: 'exchangeOptionsGet',
		action: 'Get exchange options',
		execute: executeExchangeOptionsGet,
		description: descriptionExchangeOptionsGet,
	},
	{
		name: 'Freefax Create',
		value: 'freefaxCreatePost',
		action: 'Create freefax order',
		execute: executeFreefaxCreatePost,
		description: descriptionFreefaxCreatePost,
	},
	{
		name: 'Freefax Number Get',
		value: 'freefaxnumberGet',
		action: 'Get freefax number',
		execute: executeFreefaxnumberGet,
		description: descriptionFreefaxnumberGet,
	},
	{
		name: 'Freefax Organization List',
		value: 'freefaxorganizationListGet',
		action: 'List freefax organizations',
		execute: executeFreefaxorganizationListGet,
		description: descriptionFreefaxorganizationListGet,
	},
	{
		name: 'Get License Plesk Options',
		value: 'cartLicensePleskOptionsGET',
		action: 'get license plesk options',
		execute: executeCartLicensePleskOptionsGET,
		description: descriptionCartLicensePleskOptionsGET,
	},
	{
		name: 'Get Logs Options',
		value: 'cartLogsOptionsGET',
		action: 'get logs options',
		execute: executeCartLogsOptionsGET,
		description: descriptionCartLogsOptionsGET,
	},
	{
		name: 'Get Managed C M S Options',
		value: 'cartManagedCMSOptionsGET',
		action: 'get managed c m s options',
		execute: executeCartManagedCMSOptionsGET,
		description: descriptionCartManagedCMSOptionsGET,
	},
	{
		name: 'Get Managed Services Options (Service)',
		value: 'cartManagedServicesOptionsGET',
		action: 'get managed services options (Service)',
		execute: executeCartManagedServicesOptionsGET,
		description: descriptionCartManagedServicesOptionsGET,
	},
	{
		name: 'Get Metrics Options',
		value: 'cartMetricsOptionsGET',
		action: 'get metrics options',
		execute: executeCartMetricsOptionsGET,
		description: descriptionCartMetricsOptionsGET,
	},
	{
		name: 'Get Microsoft Options',
		value: 'cartMicrosoftOptionsGET',
		action: 'get microsoft options',
		execute: executeCartMicrosoftOptionsGET,
		description: descriptionCartMicrosoftOptionsGET,
	},
	{
		name: 'Get Nasha Options',
		value: 'cartNashaOptionsGET',
		action: 'get nasha options',
		execute: executeCartNashaOptionsGET,
		description: descriptionCartNashaOptionsGET,
	},
	{
		name: 'Get Netapp Options',
		value: 'cartNetappOptionsGET',
		action: 'get netapp options',
		execute: executeCartNetappOptionsGET,
		description: descriptionCartNetappOptionsGET,
	},
	{
		name: 'Get Nutanix Options',
		value: 'cartNutanixOptionsGET',
		action: 'get nutanix options',
		execute: executeCartNutanixOptionsGET,
		description: descriptionCartNutanixOptionsGET,
	},
	{
		name: 'Get Office Prepaid Options',
		value: 'cartOfficePrepaidOptionsGET',
		action: 'get office prepaid options',
		execute: executeCartOfficePrepaidOptionsGET,
		description: descriptionCartOfficePrepaidOptionsGET,
	},
	{
		name: 'Get Office365 Options',
		value: 'cartOffice365OptionsGET',
		action: 'get office365 options',
		execute: executeCartOffice365OptionsGET,
		description: descriptionCartOffice365OptionsGET,
	},
	{
		name: 'Get Office365 Prepaid Options',
		value: 'cartOffice365PrepaidOptionsGET',
		action: 'get office365 prepaid options',
		execute: executeCartOffice365PrepaidOptionsGET,
		description: descriptionCartOffice365PrepaidOptionsGET,
	},
	{
		name: 'Get Otb Options',
		value: 'cartOtbOptionsGET',
		action: 'get otb options',
		execute: executeCartOtbOptionsGET,
		description: descriptionCartOtbOptionsGET,
	},
	{
		name: 'Get Otb Reseller Options',
		value: 'cartOtbResellerOptionsGET',
		action: 'get otb reseller options',
		execute: executeCartOtbResellerOptionsGET,
		description: descriptionCartOtbResellerOptionsGET,
	},
	{
		name: 'Get Packs Professional Services Options (Service)',
		value: 'cartPacksProfessionalServicesOptionsGET',
		action: 'get packs professional services options (Service)',
		execute: executeCartPacksProfessionalServicesOptionsGET,
		description: descriptionCartPacksProfessionalServicesOptionsGET,
	},
	{
		name: 'Get Private Cloud C D I Options',
		value: 'cartPrivateCloudCDIOptionsGET',
		action: 'get private cloud c d i options',
		execute: executeCartPrivateCloudCDIOptionsGET,
		description: descriptionCartPrivateCloudCDIOptionsGET,
	},
	{
		name: 'Get Private Cloud D C Options',
		value: 'cartPrivateCloudDCOptionsGET',
		action: 'get private cloud d c options',
		execute: executeCartPrivateCloudDCOptionsGET,
		description: descriptionCartPrivateCloudDCOptionsGET,
	},
	{
		name: 'Get Private Cloud Enterprise Options',
		value: 'cartPrivateCloudEnterpriseOptionsGET',
		action: 'get private cloud enterprise options',
		execute: executeCartPrivateCloudEnterpriseOptionsGET,
		description: descriptionCartPrivateCloudEnterpriseOptionsGET,
	},
	{
		name: 'Get Private Cloud Options',
		value: 'cartPrivateCloudOptionsGET',
		action: 'get private cloud options',
		execute: executeCartPrivateCloudOptionsGET,
		description: descriptionCartPrivateCloudOptionsGET,
	},
	{
		name: 'Get Private Cloud Reseller Enterprise Options',
		value: 'cartPrivateCloudResellerEnterpriseOptionsGET',
		action: 'get private cloud reseller enterprise options',
		execute: executeCartPrivateCloudResellerEnterpriseOptionsGET,
		description: descriptionCartPrivateCloudResellerEnterpriseOptionsGET,
	},
	{
		name: 'Get Private Cloud Reseller Options',
		value: 'cartPrivateCloudResellerOptionsGET',
		action: 'get private cloud reseller options',
		execute: executeCartPrivateCloudResellerOptionsGET,
		description: descriptionCartPrivateCloudResellerOptionsGET,
	},
	{
		name: 'Get Private Cloud S D D C Options',
		value: 'cartPrivateCloudSDDCOptionsGET',
		action: 'get private cloud s d d c options',
		execute: executeCartPrivateCloudSDDCOptionsGET,
		description: descriptionCartPrivateCloudSDDCOptionsGET,
	},
	{
		name: 'Get Sharepoint Options',
		value: 'cartSharepointOptionsGET',
		action: 'get sharepoint options',
		execute: executeCartSharepointOptionsGET,
		description: descriptionCartSharepointOptionsGET,
	},
	{
		name: 'Get Snc Network Services Options (Service)',
		value: 'cartSncNetworkServicesOptionsGET',
		action: 'get snc network services options (Service)',
		execute: executeCartSncNetworkServicesOptionsGET,
		description: descriptionCartSncNetworkServicesOptionsGET,
	},
	{
		name: 'Get Ssl Comodo Options',
		value: 'cartSslComodoOptionsGET',
		action: 'get ssl comodo options',
		execute: executeCartSslComodoOptionsGET,
		description: descriptionCartSslComodoOptionsGET,
	},
	{
		name: 'Get Ssl Gateway Options',
		value: 'cartSslGatewayOptionsGET',
		action: 'get ssl gateway options',
		execute: executeCartSslGatewayOptionsGET,
		description: descriptionCartSslGatewayOptionsGET,
	},
	{
		name: 'Get Telephony Options',
		value: 'cartTelephonyOptionsGET',
		action: 'get telephony options',
		execute: executeCartTelephonyOptionsGET,
		description: descriptionCartTelephonyOptionsGET,
	},
	{
		name: 'Get Vdi Options',
		value: 'cartVdiOptionsGET',
		action: 'get vdi options',
		execute: executeCartVdiOptionsGET,
		description: descriptionCartVdiOptionsGET,
	},
	{
		name: 'Get Veeam Enterprise Options',
		value: 'cartVeeamEnterpriseOptionsGET',
		action: 'get veeam enterprise options',
		execute: executeCartVeeamEnterpriseOptionsGET,
		description: descriptionCartVeeamEnterpriseOptionsGET,
	},
	{
		name: 'Get Veeamcc Options',
		value: 'cartVeeamccOptionsGET',
		action: 'get veeamcc options',
		execute: executeCartVeeamccOptionsGET,
		description: descriptionCartVeeamccOptionsGET,
	},
	{
		name: 'Get Videocenter Options',
		value: 'cartVideocenterOptionsGET',
		action: 'get videocenter options',
		execute: executeCartVideocenterOptionsGET,
		description: descriptionCartVideocenterOptionsGET,
	},
	{
		name: 'Get Vmware Cloud Director Backup Options',
		value: 'cartVmwareCloudDirectorBackupOptionsGET',
		action: 'get vmware cloud director backup options',
		execute: executeCartVmwareCloudDirectorBackupOptionsGET,
		description: descriptionCartVmwareCloudDirectorBackupOptionsGET,
	},
	{
		name: 'Get Vmware Cloud Director Options',
		value: 'cartVmwareCloudDirectorOptionsGET',
		action: 'get vmware cloud director options',
		execute: executeCartVmwareCloudDirectorOptionsGET,
		description: descriptionCartVmwareCloudDirectorOptionsGET,
	},
	{
		name: 'Get Vps Options',
		value: 'cartVpsOptionsGET',
		action: 'get vps options',
		execute: executeCartVpsOptionsGET,
		description: descriptionCartVpsOptionsGET,
	},
	{
		name: 'Get Vrack Options',
		value: 'cartVrackOptionsGET',
		action: 'get vrack options',
		execute: executeCartVrackOptionsGET,
		description: descriptionCartVrackOptionsGET,
	},
	{
		name: 'Get Web Hosting Options',
		value: 'cartWebHostingOptionsGET',
		action: 'get web hosting options',
		execute: executeCartWebHostingOptionsGET,
		description: descriptionCartWebHostingOptionsGET,
	},
	{
		name: 'Get Xdsl Options',
		value: 'cartXdslOptionsGET',
		action: 'get xdsl options',
		execute: executeCartXdslOptionsGET,
		description: descriptionCartXdslOptionsGET,
	},
	{
		name: 'Get Zimbra Options',
		value: 'cartZimbraOptionsGET',
		action: 'get zimbra options',
		execute: executeCartZimbraOptionsGET,
		description: descriptionCartZimbraOptionsGET,
	},
	{
		name: 'IpLoadbalancing Get',
		value: 'ipLoadbalancingGet',
		action: 'Get ipLoadbalancing catalog',
		execute: executeIpLoadbalancingGet,
		description: descriptionIpLoadbalancingGet,
	},
	{
		name: 'IpLoadbalancing Options Get',
		value: 'ipLoadbalancingOptionsGet',
		action: 'Get ipLoadbalancing options',
		execute: executeIpLoadbalancingOptionsGet,
		description: descriptionIpLoadbalancingOptionsGet,
	},
	{
		name: 'License Office List',
		value: 'licenseofficeListGet',
		action: 'List office license services',
		execute: executeLicenseofficeListGet,
		description: descriptionLicenseofficeListGet,
	},
	{
		name: 'License Office New Create',
		value: 'licenseofficeNewCreatePost',
		action: 'Create office new order',
		execute: executeLicenseofficeNewCreatePost,
		description: descriptionLicenseofficeNewCreatePost,
	},
	{
		name: 'License Office New Duration Get',
		value: 'licenseofficeNewDurationGet',
		action: 'Get office new prices',
		execute: executeLicenseofficeNewDurationGet,
		description: descriptionLicenseofficeNewDurationGet,
	},
	{
		name: 'License Office New List',
		value: 'licenseofficeNewListGet',
		action: 'Get office new durations',
		execute: executeLicenseofficeNewListGet,
		description: descriptionLicenseofficeNewListGet,
	},
	{
		name: 'License Office Service Get',
		value: 'licenseofficeServiceGet',
		action: 'Get office service options',
		execute: executeLicenseofficeServiceGet,
		description: descriptionLicenseofficeServiceGet,
	},
	{
		name: 'License Office Service Upgrade Create (Service)',
		value: 'licenseofficeServiceUpgradeCreatePost',
		action: 'license office service upgrade create (Service)',
		execute: executeLicenseofficeServiceUpgradeCreatePost,
		description: descriptionLicenseofficeServiceUpgradeCreatePost,
	},
	{
		name: 'License Office Service Upgrade Duration Get (Service)',
		value: 'licenseofficeServiceUpgradeDurationGet',
		action: 'license office service upgrade duration get (Service)',
		execute: executeLicenseofficeServiceUpgradeDurationGet,
		description: descriptionLicenseofficeServiceUpgradeDurationGet,
	},
	{
		name: 'License Office Service Upgrade List (List)',
		value: 'licenseofficeServiceUpgradeListGet',
		action: 'license office service upgrade list (List)',
		execute: executeLicenseofficeServiceUpgradeListGet,
		description: descriptionLicenseofficeServiceUpgradeListGet,
	},
	{
		name: 'License Plesk List',
		value: 'licensepleskListGet',
		action: 'List plesk license services',
		execute: executeLicensepleskListGet,
		description: descriptionLicensepleskListGet,
	},
	{
		name: 'License Plesk New Create',
		value: 'licensepleskNewCreatePost',
		action: 'Create plesk new order',
		execute: executeLicensepleskNewCreatePost,
		description: descriptionLicensepleskNewCreatePost,
	},
	{
		name: 'License Plesk New Duration Get',
		value: 'licensepleskNewDurationGet',
		action: 'Get plesk new prices',
		execute: executeLicensepleskNewDurationGet,
		description: descriptionLicensepleskNewDurationGet,
	},
	{
		name: 'License Plesk New List',
		value: 'licensepleskNewListGet',
		action: 'Get plesk new durations',
		execute: executeLicensepleskNewListGet,
		description: descriptionLicensepleskNewListGet,
	},
	{
		name: 'License Plesk Service Get',
		value: 'licensepleskServiceGet',
		action: 'Get plesk service options',
		execute: executeLicensepleskServiceGet,
		description: descriptionLicensepleskServiceGet,
	},
	{
		name: 'License Plesk Service Upgrade Create (Service)',
		value: 'licensepleskServiceUpgradeCreatePost',
		action: 'license plesk service upgrade create (Service)',
		execute: executeLicensepleskServiceUpgradeCreatePost,
		description: descriptionLicensepleskServiceUpgradeCreatePost,
	},
	{
		name: 'License Plesk Service Upgrade Duration Get (Service)',
		value: 'licensepleskServiceUpgradeDurationGet',
		action: 'license plesk service upgrade duration get (Service)',
		execute: executeLicensepleskServiceUpgradeDurationGet,
		description: descriptionLicensepleskServiceUpgradeDurationGet,
	},
	{
		name: 'License Plesk Service Upgrade List (List)',
		value: 'licensepleskServiceUpgradeListGet',
		action: 'license plesk service upgrade list (List)',
		execute: executeLicensepleskServiceUpgradeListGet,
		description: descriptionLicensepleskServiceUpgradeListGet,
	},
	{
		name: 'License Sqlserver List',
		value: 'licensesqlserverListGet',
		action: 'List sqlserver license services',
		execute: executeLicensesqlserverListGet,
		description: descriptionLicensesqlserverListGet,
	},
	{
		name: 'License Sqlserver New Create',
		value: 'licensesqlserverNewCreatePost',
		action: 'Create sqlserver new order',
		execute: executeLicensesqlserverNewCreatePost,
		description: descriptionLicensesqlserverNewCreatePost,
	},
	{
		name: 'License Sqlserver New Duration Get',
		value: 'licensesqlserverNewDurationGet',
		action: 'Get sqlserver new prices',
		execute: executeLicensesqlserverNewDurationGet,
		description: descriptionLicensesqlserverNewDurationGet,
	},
	{
		name: 'License Sqlserver New List',
		value: 'licensesqlserverNewListGet',
		action: 'Get sqlserver new durations',
		execute: executeLicensesqlserverNewListGet,
		description: descriptionLicensesqlserverNewListGet,
	},
	{
		name: 'License Sqlserver Service Get',
		value: 'licensesqlserverServiceGet',
		action: 'Get sqlserver service options',
		execute: executeLicensesqlserverServiceGet,
		description: descriptionLicensesqlserverServiceGet,
	},
	{
		name: 'License Sqlserver Service Upgrade Create (Service)',
		value: 'licensesqlserverServiceUpgradeCreatePost',
		action: 'license sqlserver service upgrade create (Service)',
		execute: executeLicensesqlserverServiceUpgradeCreatePost,
		description: descriptionLicensesqlserverServiceUpgradeCreatePost,
	},
	{
		name: 'License Sqlserver Service Upgrade Duration Get (Service)',
		value: 'licensesqlserverServiceUpgradeDurationGet',
		action: 'license sqlserver service upgrade duration get (Service)',
		execute: executeLicensesqlserverServiceUpgradeDurationGet,
		description: descriptionLicensesqlserverServiceUpgradeDurationGet,
	},
	{
		name: 'License Sqlserver Service Upgrade List (List)',
		value: 'licensesqlserverServiceUpgradeListGet',
		action: 'license sqlserver service upgrade list (List)',
		execute: executeLicensesqlserverServiceUpgradeListGet,
		description: descriptionLicensesqlserverServiceUpgradeListGet,
	},
	{
		name: 'License Windows List',
		value: 'licensewindowsListGet',
		action: 'List windows license services',
		execute: executeLicensewindowsListGet,
		description: descriptionLicensewindowsListGet,
	},
	{
		name: 'License Windows New Create',
		value: 'licensewindowsNewCreatePost',
		action: 'Create windows new order',
		execute: executeLicensewindowsNewCreatePost,
		description: descriptionLicensewindowsNewCreatePost,
	},
	{
		name: 'License Windows New Duration Get',
		value: 'licensewindowsNewDurationGet',
		action: 'Get windows new prices',
		execute: executeLicensewindowsNewDurationGet,
		description: descriptionLicensewindowsNewDurationGet,
	},
	{
		name: 'License Windows New List',
		value: 'licensewindowsNewListGet',
		action: 'Get windows new durations',
		execute: executeLicensewindowsNewListGet,
		description: descriptionLicensewindowsNewListGet,
	},
	{
		name: 'License Windows Service Get',
		value: 'licensewindowsServiceGet',
		action: 'Get windows service options',
		execute: executeLicensewindowsServiceGet,
		description: descriptionLicensewindowsServiceGet,
	},
	{
		name: 'License Windows Service Upgrade Create (Service)',
		value: 'licensewindowsServiceUpgradeCreatePost',
		action: 'license windows service upgrade create (Service)',
		execute: executeLicensewindowsServiceUpgradeCreatePost,
		description: descriptionLicensewindowsServiceUpgradeCreatePost,
	},
	{
		name: 'License Windows Service Upgrade Duration Get (Service)',
		value: 'licensewindowsServiceUpgradeDurationGet',
		action: 'license windows service upgrade duration get (Service)',
		execute: executeLicensewindowsServiceUpgradeDurationGet,
		description: descriptionLicensewindowsServiceUpgradeDurationGet,
	},
	{
		name: 'License Windows Service Upgrade List (List)',
		value: 'licensewindowsServiceUpgradeListGet',
		action: 'license windows service upgrade list (List)',
		execute: executeLicensewindowsServiceUpgradeListGet,
		description: descriptionLicensewindowsServiceUpgradeListGet,
	},
	{
		name: 'License cPanel List',
		value: 'licensecPanelListGet',
		action: 'List cPanel license services',
		execute: executeLicensecPanelListGet,
		description: descriptionLicensecPanelListGet,
	},
	{
		name: 'License cPanel New Create',
		value: 'licensecPanelNewCreatePost',
		action: 'Create cPanel new order',
		execute: executeLicensecPanelNewCreatePost,
		description: descriptionLicensecPanelNewCreatePost,
	},
	{
		name: 'License cPanel New Duration Get',
		value: 'licensecPanelNewDurationGet',
		action: 'Get cPanel new prices',
		execute: executeLicensecPanelNewDurationGet,
		description: descriptionLicensecPanelNewDurationGet,
	},
	{
		name: 'License cPanel New List',
		value: 'licensecPanelNewListGet',
		action: 'Get cPanel new durations',
		execute: executeLicensecPanelNewListGet,
		description: descriptionLicensecPanelNewListGet,
	},
	{
		name: 'License cPanel Service Get',
		value: 'licensecPanelServiceGet',
		action: 'Get cPanel service options',
		execute: executeLicensecPanelServiceGet,
		description: descriptionLicensecPanelServiceGet,
	},
	{
		name: 'License cPanel Service Upgrade Create (Service)',
		value: 'licensecPanelServiceUpgradeCreatePost',
		action: 'license cpanel service upgrade create (Service)',
		execute: executeLicensecPanelServiceUpgradeCreatePost,
		description: descriptionLicensecPanelServiceUpgradeCreatePost,
	},
	{
		name: 'License cPanel Service Upgrade Duration Get (Service)',
		value: 'licensecPanelServiceUpgradeDurationGet',
		action: 'license cpanel service upgrade duration get (Service)',
		execute: executeLicensecPanelServiceUpgradeDurationGet,
		description: descriptionLicensecPanelServiceUpgradeDurationGet,
	},
	{
		name: 'License cPanel Service Upgrade List (List)',
		value: 'licensecPanelServiceUpgradeListGet',
		action: 'license cpanel service upgrade list (List)',
		execute: executeLicensecPanelServiceUpgradeListGet,
		description: descriptionLicensecPanelServiceUpgradeListGet,
	},
	{
		name: 'LicenseHycu Get',
		value: 'licenseHycuGet',
		action: 'Get licenseHycu catalog',
		execute: executeLicenseHycuGet,
		description: descriptionLicenseHycuGet,
	},
	{
		name: 'LicenseHycu Options Get',
		value: 'licenseHycuOptionsGet',
		action: 'Get licenseHycu options',
		execute: executeLicenseHycuOptionsGet,
		description: descriptionLicenseHycuOptionsGet,
	},
	{
		name: 'LicensePlesk Get',
		value: 'licensePleskGet',
		action: 'Get licensePlesk catalog',
		execute: executeLicensePleskGet,
		description: descriptionLicensePleskGet,
	},
	{
		name: 'LicensePlesk Options Get',
		value: 'licensePleskOptionsGet',
		action: 'Get licensePlesk options',
		execute: executeLicensePleskOptionsGet,
		description: descriptionLicensePleskOptionsGet,
	},
	{
		name: 'LicenseSqlServer Get',
		value: 'licenseSqlServerGet',
		action: 'Get licenseSqlServer catalog',
		execute: executeLicenseSqlServerGet,
		description: descriptionLicenseSqlServerGet,
	},
	{
		name: 'LicenseSqlServer Options Get',
		value: 'licenseSqlServerOptionsGet',
		action: 'Get licenseSqlServer options',
		execute: executeLicenseSqlServerOptionsGet,
		description: descriptionLicenseSqlServerOptionsGet,
	},
	{
		name: 'LicenseWindows Get',
		value: 'licenseWindowsGet',
		action: 'Get licenseWindows catalog',
		execute: executeLicenseWindowsGet,
		description: descriptionLicenseWindowsGet,
	},
	{
		name: 'LicenseWindows Options Get',
		value: 'licenseWindowsOptionsGet',
		action: 'Get licenseWindows options',
		execute: executeLicenseWindowsOptionsGet,
		description: descriptionLicenseWindowsOptionsGet,
	},
	{
		name: 'LicensecPanel Get',
		value: 'licensecPanelGet',
		action: 'Get licensecPanel catalog',
		execute: executeLicensecPanelGet,
		description: descriptionLicensecPanelGet,
	},
	{
		name: 'LicensecPanel Options Get',
		value: 'licensecPanelOptionsGet',
		action: 'Get licensecPanel options',
		execute: executeLicensecPanelOptionsGet,
		description: descriptionLicensecPanelOptionsGet,
	},
	{
		name: 'List License Hycu Offers',
		value: 'cartLicenseHycuGET',
		action: 'List License Hycu offers',
		execute: executeCartLicenseHycuGET,
		description: descriptionCartLicenseHycuGET,
	},
	{
		name: 'List License Plesk Offers',
		value: 'cartLicensePleskGET',
		action: 'List License Plesk offers',
		execute: executeCartLicensePleskGET,
		description: descriptionCartLicensePleskGET,
	},
	{
		name: 'List License Sql Server Offers',
		value: 'cartLicenseSqlServerGET',
		action: 'List License Sql Server offers',
		execute: executeCartLicenseSqlServerGET,
		description: descriptionCartLicenseSqlServerGET,
	},
	{
		name: 'List License Windows Offers',
		value: 'cartLicenseWindowsGET',
		action: 'List License Windows offers',
		execute: executeCartLicenseWindowsGET,
		description: descriptionCartLicenseWindowsGET,
	},
	{
		name: 'List Licensec Panel Offers',
		value: 'cartLicensecPanelGET',
		action: 'List Licensec Panel offers',
		execute: executeCartLicensecPanelGET,
		description: descriptionCartLicensecPanelGET,
	},
	{
		name: 'List Logs Offers',
		value: 'cartLogsGET',
		action: 'List Logs offers',
		execute: executeCartLogsGET,
		description: descriptionCartLogsGET,
	},
	{
		name: 'List Managed C M S Offers',
		value: 'cartManagedCMSGET',
		action: 'List Managed C M S offers',
		execute: executeCartManagedCMSGET,
		description: descriptionCartManagedCMSGET,
	},
	{
		name: 'List Managed Services Offers',
		value: 'cartManagedServicesGET',
		action: 'List Managed Services offers',
		execute: executeCartManagedServicesGET,
		description: descriptionCartManagedServicesGET,
	},
	{
		name: 'List Metrics Offers',
		value: 'cartMetricsGET',
		action: 'List Metrics offers',
		execute: executeCartMetricsGET,
		description: descriptionCartMetricsGET,
	},
	{
		name: 'List Microsoft Offers',
		value: 'cartMicrosoftGET',
		action: 'List Microsoft offers',
		execute: executeCartMicrosoftGET,
		description: descriptionCartMicrosoftGET,
	},
	{
		name: 'List Nasha Offers',
		value: 'cartNashaGET',
		action: 'List Nasha offers',
		execute: executeCartNashaGET,
		description: descriptionCartNashaGET,
	},
	{
		name: 'List Netapp Offers',
		value: 'cartNetappGET',
		action: 'List Netapp offers',
		execute: executeCartNetappGET,
		description: descriptionCartNetappGET,
	},
	{
		name: 'List Nutanix Offers',
		value: 'cartNutanixGET',
		action: 'List Nutanix offers',
		execute: executeCartNutanixGET,
		description: descriptionCartNutanixGET,
	},
	{
		name: 'List Office Prepaid Offers',
		value: 'cartOfficePrepaidGET',
		action: 'List Office Prepaid offers',
		execute: executeCartOfficePrepaidGET,
		description: descriptionCartOfficePrepaidGET,
	},
	{
		name: 'List Office365 Offers',
		value: 'cartOffice365GET',
		action: 'List Office365 offers',
		execute: executeCartOffice365GET,
		description: descriptionCartOffice365GET,
	},
	{
		name: 'List Office365 Prepaid Offers',
		value: 'cartOffice365PrepaidGET',
		action: 'List Office365 Prepaid offers',
		execute: executeCartOffice365PrepaidGET,
		description: descriptionCartOffice365PrepaidGET,
	},
	{
		name: 'List Okms Offers',
		value: 'cartOkmsGET',
		action: 'List Okms offers',
		execute: executeCartOkmsGET,
		description: descriptionCartOkmsGET,
	},
	{
		name: 'List Otb Offers',
		value: 'cartOtbGET',
		action: 'List Otb offers',
		execute: executeCartOtbGET,
		description: descriptionCartOtbGET,
	},
	{
		name: 'List Otb Reseller Offers',
		value: 'cartOtbResellerGET',
		action: 'List Otb Reseller offers',
		execute: executeCartOtbResellerGET,
		description: descriptionCartOtbResellerGET,
	},
	{
		name: 'List Ovh Cloud Connect Offers',
		value: 'cartOvhCloudConnectGET',
		action: 'List Ovh Cloud Connect offers',
		execute: executeCartOvhCloudConnectGET,
		description: descriptionCartOvhCloudConnectGET,
	},
	{
		name: 'List Paasmon Offers',
		value: 'cartPaasmonGET',
		action: 'List Paasmon offers',
		execute: executeCartPaasmonGET,
		description: descriptionCartPaasmonGET,
	},
	{
		name: 'List Packs Professional Services Offers',
		value: 'cartPacksProfessionalServicesGET',
		action: 'List Packs Professional Services offers',
		execute: executeCartPacksProfessionalServicesGET,
		description: descriptionCartPacksProfessionalServicesGET,
	},
	{
		name: 'List Power Hosting Offers',
		value: 'cartPowerHostingGET',
		action: 'List Power Hosting offers',
		execute: executeCartPowerHostingGET,
		description: descriptionCartPowerHostingGET,
	},
	{
		name: 'List Private Cloud C D I Offers',
		value: 'cartPrivateCloudCDIGET',
		action: 'List Private Cloud C D I offers',
		execute: executeCartPrivateCloudCDIGET,
		description: descriptionCartPrivateCloudCDIGET,
	},
	{
		name: 'List Private Cloud D C Offers',
		value: 'cartPrivateCloudDCGET',
		action: 'List Private Cloud D C offers',
		execute: executeCartPrivateCloudDCGET,
		description: descriptionCartPrivateCloudDCGET,
	},
	{
		name: 'List Private Cloud Enterprise Offers',
		value: 'cartPrivateCloudEnterpriseGET',
		action: 'List Private Cloud Enterprise offers',
		execute: executeCartPrivateCloudEnterpriseGET,
		description: descriptionCartPrivateCloudEnterpriseGET,
	},
	{
		name: 'List Private Cloud Offers',
		value: 'cartPrivateCloudGET',
		action: 'List Private Cloud offers',
		execute: executeCartPrivateCloudGET,
		description: descriptionCartPrivateCloudGET,
	},
	{
		name: 'List Private Cloud Reseller Enterprise Offers',
		value: 'cartPrivateCloudResellerEnterpriseGET',
		action: 'List Private Cloud Reseller Enterprise offers',
		execute: executeCartPrivateCloudResellerEnterpriseGET,
		description: descriptionCartPrivateCloudResellerEnterpriseGET,
	},
	{
		name: 'List Private Cloud Reseller Offers',
		value: 'cartPrivateCloudResellerGET',
		action: 'List Private Cloud Reseller offers',
		execute: executeCartPrivateCloudResellerGET,
		description: descriptionCartPrivateCloudResellerGET,
	},
	{
		name: 'List Private Cloud S D D C Offers',
		value: 'cartPrivateCloudSDDCGET',
		action: 'List Private Cloud S D D C offers',
		execute: executeCartPrivateCloudSDDCGET,
		description: descriptionCartPrivateCloudSDDCGET,
	},
	{
		name: 'List Private S Q L Offers',
		value: 'cartPrivateSQLGET',
		action: 'List Private S Q L offers',
		execute: executeCartPrivateSQLGET,
		description: descriptionCartPrivateSQLGET,
	},
	{
		name: 'List Reseller Offers',
		value: 'cartResellerGET',
		action: 'List Reseller offers',
		execute: executeCartResellerGET,
		description: descriptionCartResellerGET,
	},
	{
		name: 'List Sharepoint Offers',
		value: 'cartSharepointGET',
		action: 'List Sharepoint offers',
		execute: executeCartSharepointGET,
		description: descriptionCartSharepointGET,
	},
	{
		name: 'List Sms Offers',
		value: 'cartSmsGET',
		action: 'List Sms offers',
		execute: executeCartSmsGET,
		description: descriptionCartSmsGET,
	},
	{
		name: 'List Snc Network Services Offers',
		value: 'cartSncNetworkServicesGET',
		action: 'List Snc Network Services offers',
		execute: executeCartSncNetworkServicesGET,
		description: descriptionCartSncNetworkServicesGET,
	},
	{
		name: 'List Ssl Comodo Offers',
		value: 'cartSslComodoGET',
		action: 'List Ssl Comodo offers',
		execute: executeCartSslComodoGET,
		description: descriptionCartSslComodoGET,
	},
	{
		name: 'List Ssl Gateway Offers',
		value: 'cartSslGatewayGET',
		action: 'List Ssl Gateway offers',
		execute: executeCartSslGatewayGET,
		description: descriptionCartSslGatewayGET,
	},
	{
		name: 'List Telephony Offers',
		value: 'cartTelephonyGET',
		action: 'List Telephony offers',
		execute: executeCartTelephonyGET,
		description: descriptionCartTelephonyGET,
	},
	{
		name: 'List Vdi Offers',
		value: 'cartVdiGET',
		action: 'List Vdi offers',
		execute: executeCartVdiGET,
		description: descriptionCartVdiGET,
	},
	{
		name: 'List Veeam Enterprise Offers',
		value: 'cartVeeamEnterpriseGET',
		action: 'List Veeam Enterprise offers',
		execute: executeCartVeeamEnterpriseGET,
		description: descriptionCartVeeamEnterpriseGET,
	},
	{
		name: 'List Veeamcc Offers',
		value: 'cartVeeamccGET',
		action: 'List Veeamcc offers',
		execute: executeCartVeeamccGET,
		description: descriptionCartVeeamccGET,
	},
	{
		name: 'List Videocenter Offers',
		value: 'cartVideocenterGET',
		action: 'List Videocenter offers',
		execute: executeCartVideocenterGET,
		description: descriptionCartVideocenterGET,
	},
	{
		name: 'List Vmware Cloud Director Backup Offers',
		value: 'cartVmwareCloudDirectorBackupGET',
		action: 'List Vmware Cloud Director Backup offers',
		execute: executeCartVmwareCloudDirectorBackupGET,
		description: descriptionCartVmwareCloudDirectorBackupGET,
	},
	{
		name: 'List Vmware Cloud Director Offers',
		value: 'cartVmwareCloudDirectorGET',
		action: 'List Vmware Cloud Director offers',
		execute: executeCartVmwareCloudDirectorGET,
		description: descriptionCartVmwareCloudDirectorGET,
	},
	{
		name: 'List Vps Offers',
		value: 'cartVpsGET',
		action: 'List Vps offers',
		execute: executeCartVpsGET,
		description: descriptionCartVpsGET,
	},
	{
		name: 'List Vrack Offers',
		value: 'cartVrackGET',
		action: 'List Vrack offers',
		execute: executeCartVrackGET,
		description: descriptionCartVrackGET,
	},
	{
		name: 'List Vrack Reseller Offers',
		value: 'cartVrackResellerGET',
		action: 'List Vrack Reseller offers',
		execute: executeCartVrackResellerGET,
		description: descriptionCartVrackResellerGET,
	},
	{
		name: 'List Vrack Services Offers',
		value: 'cartVrackServicesGET',
		action: 'List Vrack Services offers',
		execute: executeCartVrackServicesGET,
		description: descriptionCartVrackServicesGET,
	},
	{
		name: 'List Web Hosting Offers',
		value: 'cartWebHostingGET',
		action: 'List Web Hosting offers',
		execute: executeCartWebHostingGET,
		description: descriptionCartWebHostingGET,
	},
	{
		name: 'List Xdsl Offers',
		value: 'cartXdslGET',
		action: 'List Xdsl offers',
		execute: executeCartXdslGET,
		description: descriptionCartXdslGET,
	},
	{
		name: 'List Zimbra Offers',
		value: 'cartZimbraGET',
		action: 'List Zimbra offers',
		execute: executeCartZimbraGET,
		description: descriptionCartZimbraGET,
	},
	{
		name: 'Logs Get',
		value: 'logsGet',
		action: 'Get logs catalog',
		execute: executeLogsGet,
		description: descriptionLogsGet,
	},
	{
		name: 'Logs Options Get',
		value: 'logsOptionsGet',
		action: 'Get logs options',
		execute: executeLogsOptionsGet,
		description: descriptionLogsOptionsGet,
	},
	{
		name: 'Nasha Get',
		value: 'nashaGet',
		action: 'Get nasha catalog',
		execute: executeNashaGet,
		description: descriptionNashaGet,
	},
	{
		name: 'Nasha Options Get',
		value: 'nashaOptionsGet',
		action: 'Get nasha options',
		execute: executeNashaOptionsGet,
		description: descriptionNashaOptionsGet,
	},
	{
		name: 'Netapp Get',
		value: 'netappGet',
		action: 'Get netapp catalog',
		execute: executeNetappGet,
		description: descriptionNetappGet,
	},
	{
		name: 'Netapp Options Get',
		value: 'netappOptionsGet',
		action: 'Get netapp options',
		execute: executeNetappOptionsGet,
		description: descriptionNetappOptionsGet,
	},
	{
		name: 'Nutanix Get',
		value: 'nutanixGet',
		action: 'Get nutanix catalog',
		execute: executeNutanixGet,
		description: descriptionNutanixGet,
	},
	{
		name: 'Nutanix Options Get',
		value: 'nutanixOptionsGet',
		action: 'Get nutanix options',
		execute: executeNutanixOptionsGet,
		description: descriptionNutanixOptionsGet,
	},
	{
		name: 'Office365Prepaid Get',
		value: 'office365PrepaidGet',
		action: 'Get office365Prepaid catalog',
		execute: executeOffice365PrepaidGet,
		description: descriptionOffice365PrepaidGet,
	},
	{
		name: 'Office365Prepaid Options Get',
		value: 'office365PrepaidOptionsGet',
		action: 'Get office365Prepaid options',
		execute: executeOffice365PrepaidOptionsGet,
		description: descriptionOffice365PrepaidOptionsGet,
	},
	{
		name: 'OfficePrepaid Get',
		value: 'officePrepaidGet',
		action: 'Get officePrepaid catalog',
		execute: executeOfficePrepaidGet,
		description: descriptionOfficePrepaidGet,
	},
	{
		name: 'OfficePrepaid Options Get',
		value: 'officePrepaidOptionsGet',
		action: 'Get officePrepaid options',
		execute: executeOfficePrepaidOptionsGet,
		description: descriptionOfficePrepaidOptionsGet,
	},
	{
		name: 'Okms Get',
		value: 'okmsGet',
		action: 'Get okms catalog',
		execute: executeOkmsGet,
		description: descriptionOkmsGet,
	},
	{
		name: 'Okms Options Get',
		value: 'okmsOptionsGet',
		action: 'Get okms options',
		execute: executeOkmsOptionsGet,
		description: descriptionOkmsOptionsGet,
	},
	{
		name: 'OverTheBox Create',
		value: 'overTheBoxCreatePost',
		action: 'Create overTheBox order',
		execute: executeOverTheBoxCreatePost,
		description: descriptionOverTheBoxCreatePost,
	},
	{
		name: 'OverTheBox Device Get',
		value: 'overTheBoxDeviceGet',
		action: 'Get overTheBox device',
		execute: executeOverTheBoxDeviceGet,
		description: descriptionOverTheBoxDeviceGet,
	},
	{
		name: 'OverTheBox Get',
		value: 'overTheBoxGet',
		action: 'Get overTheBox order',
		execute: executeOverTheBoxGet,
		description: descriptionOverTheBoxGet,
	},
	{
		name: 'OverTheBox List',
		value: 'overTheBoxListGet',
		action: 'List overTheBox devices',
		execute: executeOverTheBoxListGet,
		description: descriptionOverTheBoxListGet,
	},
	{
		name: 'OverTheBox Order Create',
		value: 'overTheBoxOrderCreatePost',
		action: 'Create overTheBox order',
		execute: executeOverTheBoxOrderCreatePost,
		description: descriptionOverTheBoxOrderCreatePost,
	},
	{
		name: 'OvhCloudConnect Get',
		value: 'ovhCloudConnectGet',
		action: 'Get ovhCloudConnect catalog',
		execute: executeOvhCloudConnectGet,
		description: descriptionOvhCloudConnectGet,
	},
	{
		name: 'OvhCloudConnect Options Get',
		value: 'ovhCloudConnectOptionsGet',
		action: 'Get ovhCloudConnect options',
		execute: executeOvhCloudConnectOptionsGet,
		description: descriptionOvhCloudConnectOptionsGet,
	},
	{
		name: 'PacksProfessionalServices Get',
		value: 'packsProfessionalServicesGet',
		action: 'Get packsProfessionalServices catalog',
		execute: executePacksProfessionalServicesGet,
		description: descriptionPacksProfessionalServicesGet,
	},
	{
		name: 'PacksProfessionalServices Options Get',
		value: 'packsProfessionalServicesOptionsGet',
		action: 'Get packsProfessionalServices options',
		execute: executePacksProfessionalServicesOptionsGet,
		description: descriptionPacksProfessionalServicesOptionsGet,
	},
	{
		name: 'PrivateCloud Get',
		value: 'privateCloudGet',
		action: 'Get privateCloud catalog',
		execute: executePrivateCloudGet,
		description: descriptionPrivateCloudGet,
	},
	{
		name: 'PrivateCloud Options Get',
		value: 'privateCloudOptionsGet',
		action: 'Get privateCloud options',
		execute: executePrivateCloudOptionsGet,
		description: descriptionPrivateCloudOptionsGet,
	},
	{
		name: 'PrivateCloudEnterprise Get',
		value: 'privateCloudEnterpriseGet',
		action: 'Get privateCloudEnterprise catalog',
		execute: executePrivateCloudEnterpriseGet,
		description: descriptionPrivateCloudEnterpriseGet,
	},
	{
		name: 'PrivateCloudEnterprise Options Get',
		value: 'privateCloudEnterpriseOptionsGet',
		action: 'Get privateCloudEnterprise options',
		execute: executePrivateCloudEnterpriseOptionsGet,
		description: descriptionPrivateCloudEnterpriseOptionsGet,
	},
	{
		name: 'PrivateSQL Get',
		value: 'privateSQLGet',
		action: 'Get privateSQL catalog',
		execute: executePrivateSQLGet,
		description: descriptionPrivateSQLGet,
	},
	{
		name: 'PrivateSQL Options Get',
		value: 'privateSQLOptionsGet',
		action: 'Get privateSQL options',
		execute: executePrivateSQLOptionsGet,
		description: descriptionPrivateSQLOptionsGet,
	},
	{
		name: 'SMS Create',
		value: 'smsCreatePost',
		action: 'Create sms order',
		execute: executeSmsCreatePost,
		description: descriptionSmsCreatePost,
	},
	{
		name: 'SMS List',
		value: 'smsListGet',
		action: 'List sms products',
		execute: executeSmsListGet,
		description: descriptionSmsListGet,
	},
	{
		name: 'SMS Product Create',
		value: 'smsProductCreatePost',
		action: 'Create sms product order',
		execute: executeSmsProductCreatePost,
		description: descriptionSmsProductCreatePost,
	},
	{
		name: 'SMS Product Duration Get',
		value: 'smsProductDurationGet',
		action: 'Get sms product prices',
		execute: executeSmsProductDurationGet,
		description: descriptionSmsProductDurationGet,
	},
	{
		name: 'SMS Product Get',
		value: 'smsProductGet',
		action: 'Get sms product',
		execute: executeSmsProductGet,
		description: descriptionSmsProductGet,
	},
	{
		name: 'SaaS Csp2 Create',
		value: 'saascsp2CreatePost',
		action: 'Create saas csp2 order',
		execute: executeSaascsp2CreatePost,
		description: descriptionSaascsp2CreatePost,
	},
	{
		name: 'SaaS Csp2 List',
		value: 'saascsp2ListGet',
		action: 'List saas csp2 products',
		execute: executeSaascsp2ListGet,
		description: descriptionSaascsp2ListGet,
	},
	{
		name: 'SaaS Csp2 Product Get',
		value: 'saascsp2ProductGet',
		action: 'Get saas csp2 product',
		execute: executeSaascsp2ProductGet,
		description: descriptionSaascsp2ProductGet,
	},
	{
		name: 'SslGateway Get',
		value: 'sslGatewayGet',
		action: 'Get sslGateway catalog',
		execute: executeSslGatewayGet,
		description: descriptionSslGatewayGet,
	},
	{
		name: 'SslGateway Options Get',
		value: 'sslGatewayOptionsGet',
		action: 'Get sslGateway options',
		execute: executeSslGatewayOptionsGet,
		description: descriptionSslGatewayOptionsGet,
	},
	{
		name: 'Telephony Get',
		value: 'telephonyGet',
		action: 'Get telephony catalog',
		execute: executeTelephonyGet,
		description: descriptionTelephonyGet,
	},
	{
		name: 'Telephony Options Get',
		value: 'telephonyOptionsGet',
		action: 'Get telephony options',
		execute: executeTelephonyOptionsGet,
		description: descriptionTelephonyOptionsGet,
	},
	{
		name: 'VPS Snapshot Create',
		value: 'vpssnapshotCreatePost',
		action: 'Create snapshot order',
		execute: executeVpssnapshotCreatePost,
		description: descriptionVpssnapshotCreatePost,
	},
	{
		name: 'VPS Snapshot Duration Get',
		value: 'vpssnapshotDurationGet',
		action: 'Get snapshot prices',
		execute: executeVpssnapshotDurationGet,
		description: descriptionVpssnapshotDurationGet,
	},
	{
		name: 'VPS Snapshot List',
		value: 'vpssnapshotListGet',
		action: 'List snapshot options',
		execute: executeVpssnapshotListGet,
		description: descriptionVpssnapshotListGet,
	},
	{
		name: 'VPS additionalDisk Create',
		value: 'vpsadditionalDiskCreatePost',
		action: 'Create additionalDisk order',
		execute: executeVpsadditionalDiskCreatePost,
		description: descriptionVpsadditionalDiskCreatePost,
	},
	{
		name: 'VPS additionalDisk Duration Get',
		value: 'vpsadditionalDiskDurationGet',
		action: 'Get additionalDisk prices',
		execute: executeVpsadditionalDiskDurationGet,
		description: descriptionVpsadditionalDiskDurationGet,
	},
	{
		name: 'VPS additionalDisk List',
		value: 'vpsadditionalDiskListGet',
		action: 'List additionalDisk options',
		execute: executeVpsadditionalDiskListGet,
		description: descriptionVpsadditionalDiskListGet,
	},
	{
		name: 'VPS automatedBackup Create',
		value: 'vpsautomatedBackupCreatePost',
		action: 'Create automatedBackup order',
		execute: executeVpsautomatedBackupCreatePost,
		description: descriptionVpsautomatedBackupCreatePost,
	},
	{
		name: 'VPS automatedBackup Duration Get',
		value: 'vpsautomatedBackupDurationGet',
		action: 'Get automatedBackup prices',
		execute: executeVpsautomatedBackupDurationGet,
		description: descriptionVpsautomatedBackupDurationGet,
	},
	{
		name: 'VPS automatedBackup List',
		value: 'vpsautomatedBackupListGet',
		action: 'List automatedBackup options',
		execute: executeVpsautomatedBackupListGet,
		description: descriptionVpsautomatedBackupListGet,
	},
	{
		name: 'Veeam Cloud Connect Config Create',
		value: 'veeamCloudConnectConfigCreatePost',
		action: 'Create veeam config',
		execute: executeVeeamCloudConnectConfigCreatePost,
		description: descriptionVeeamCloudConnectConfigCreatePost,
	},
	{
		name: 'Veeam Cloud Connect Create',
		value: 'veeamCloudConnectCreatePost',
		action: 'Create veeam project',
		execute: executeVeeamCloudConnectCreatePost,
		description: descriptionVeeamCloudConnectCreatePost,
	},
	{
		name: 'Veeam Cloud Connect Get',
		value: 'veeamCloudConnectGet',
		action: 'Get veeam project',
		execute: executeVeeamCloudConnectGet,
		description: descriptionVeeamCloudConnectGet,
	},
	{
		name: 'Veeam Cloud Connect List',
		value: 'veeamCloudConnectListGet',
		action: 'List veeam projects',
		execute: executeVeeamCloudConnectListGet,
		description: descriptionVeeamCloudConnectListGet,
	},
	{
		name: 'Veeam Cloud Connect Option Create',
		value: 'veeamCloudConnectOptionCreatePost',
		action: 'Create veeam option',
		execute: executeVeeamCloudConnectOptionCreatePost,
		description: descriptionVeeamCloudConnectOptionCreatePost,
	},
	{
		name: 'VmwareCloudDirector Get',
		value: 'vmwareCloudDirectorGet',
		action: 'Get vmwareCloudDirector catalog',
		execute: executeVmwareCloudDirectorGet,
		description: descriptionVmwareCloudDirectorGet,
	},
	{
		name: 'VmwareCloudDirector Options Get',
		value: 'vmwareCloudDirectorOptionsGet',
		action: 'Get vmwareCloudDirector options',
		execute: executeVmwareCloudDirectorOptionsGet,
		description: descriptionVmwareCloudDirectorOptionsGet,
	},
	{
		name: 'VmwareCloudDirectorBackup Get',
		value: 'vmwareCloudDirectorBackupGet',
		action: 'Get vmwareCloudDirectorBackup catalog',
		execute: executeVmwareCloudDirectorBackupGet,
		description: descriptionVmwareCloudDirectorBackupGet,
	},
	{
		name: 'VmwareCloudDirectorBackup Options Get',
		value: 'vmwareCloudDirectorBackupOptionsGet',
		action: 'Get vmwareCloudDirectorBackup options',
		execute: executeVmwareCloudDirectorBackupOptionsGet,
		description: descriptionVmwareCloudDirectorBackupOptionsGet,
	},
	{
		name: 'Vps Get',
		value: 'vpsGet',
		action: 'Get vps catalog',
		execute: executeVpsGet,
		description: descriptionVpsGet,
	},
	{
		name: 'Vps Options Get',
		value: 'vpsOptionsGet',
		action: 'Get vps options',
		execute: executeVpsOptionsGet,
		description: descriptionVpsOptionsGet,
	},
	{
		name: 'WebHosting Get',
		value: 'webHostingGet',
		action: 'Get webHosting catalog',
		execute: executeWebHostingGet,
		description: descriptionWebHostingGet,
	},
	{
		name: 'WebHosting Options Get',
		value: 'webHostingOptionsGet',
		action: 'Get webHosting options',
		execute: executeWebHostingOptionsGet,
		description: descriptionWebHostingOptionsGet,
	},
	{
		name: 'WebPaaS Get',
		value: 'webPaaSGet',
		action: 'Get webPaaS catalog',
		execute: executeWebPaaSGet,
		description: descriptionWebPaaSGet,
	},
	{
		name: 'WebPaaS Options Get',
		value: 'webPaaSOptionsGet',
		action: 'Get webPaaS options',
		execute: executeWebPaaSOptionsGet,
		description: descriptionWebPaaSOptionsGet,
	},
	{
		name: 'Zimbra Get',
		value: 'zimbraGet',
		action: 'Get zimbra catalog',
		execute: executeZimbraGet,
		description: descriptionZimbraGet,
	},
	{
		name: 'Zimbra Options Get',
		value: 'zimbraOptionsGet',
		action: 'Get zimbra options',
		execute: executeZimbraOptionsGet,
		description: descriptionZimbraOptionsGet,
	},
	{
		name: 'xDSL Spare Create',
		value: 'xdslspareCreatePost',
		action: 'Create xDSL order',
		execute: executeXdslspareCreatePost,
		description: descriptionXdslspareCreatePost,
	},
	{
		name: 'xDSL Spare List',
		value: 'xdslspareListGet',
		action: 'List xDSL spare lines',
		execute: executeXdslspareListGet,
		description: descriptionXdslspareListGet,
	},
	{
		name: 'Get Upgrade Bandwidth Vrack (List)',
		value: 'upgradeBandwidthVrackListGET',
		action: 'get upgrade bandwidth vrack (List)',
		execute: executeupgradeBandwidthVrackListGET,
		description: descriptionupgradeBandwidthVrackListGET,
	},
	{
		name: 'Get Upgrade Bandwidth Vrack (Plan)',
		value: 'upgradeBandwidthVrackPlanGET',
		action: 'get upgrade bandwidth vrack (Plan)',
		execute: executeupgradeBandwidthVrackPlanGET,
		description: descriptionupgradeBandwidthVrackPlanGET,
	},
	{
		name: 'Upgrade Bandwidth Vrack (Plan)',
		value: 'upgradeBandwidthVrackPlanPOST',
		action: 'upgrade bandwidth vrack (Plan)',
		execute: executeupgradeBandwidthVrackPlanPOST,
		description: descriptionupgradeBandwidthVrackPlanPOST,
	},
	{
		name: 'Get Upgrade Bandwidth Vrack (Service)',
		value: 'upgradeBandwidthVrackServiceGET',
		action: 'get upgrade bandwidth vrack (Service)',
		execute: executeupgradeBandwidthVrackServiceGET,
		description: descriptionupgradeBandwidthVrackServiceGET,
	},
	{
		name: 'Get Upgrade Baremetal Private Bandwidth (List)',
		value: 'upgradeBaremetalPrivateBandwidthListGET',
		action: 'get upgrade baremetal private bandwidth (List)',
		execute: executeupgradeBaremetalPrivateBandwidthListGET,
		description: descriptionupgradeBaremetalPrivateBandwidthListGET,
	},
	{
		name: 'Get Upgrade Baremetal Private Bandwidth (Plan)',
		value: 'upgradeBaremetalPrivateBandwidthPlanGET',
		action: 'get upgrade baremetal private bandwidth (Plan)',
		execute: executeupgradeBaremetalPrivateBandwidthPlanGET,
		description: descriptionupgradeBaremetalPrivateBandwidthPlanGET,
	},
	{
		name: 'Upgrade Baremetal Private Bandwidth (Plan)',
		value: 'upgradeBaremetalPrivateBandwidthPlanPOST',
		action: 'upgrade baremetal private bandwidth (Plan)',
		execute: executeupgradeBaremetalPrivateBandwidthPlanPOST,
		description: descriptionupgradeBaremetalPrivateBandwidthPlanPOST,
	},
	{
		name: 'Get Upgrade Baremetal Private Bandwidth (Service)',
		value: 'upgradeBaremetalPrivateBandwidthServiceGET',
		action: 'get upgrade baremetal private bandwidth (Service)',
		execute: executeupgradeBaremetalPrivateBandwidthServiceGET,
		description: descriptionupgradeBaremetalPrivateBandwidthServiceGET,
	},
	{
		name: 'Get Upgrade Baremetal Public Bandwidth (List)',
		value: 'upgradeBaremetalPublicBandwidthListGET',
		action: 'get upgrade baremetal public bandwidth (List)',
		execute: executeupgradeBaremetalPublicBandwidthListGET,
		description: descriptionupgradeBaremetalPublicBandwidthListGET,
	},
	{
		name: 'Get Upgrade Baremetal Public Bandwidth (Plan)',
		value: 'upgradeBaremetalPublicBandwidthPlanGET',
		action: 'get upgrade baremetal public bandwidth (Plan)',
		execute: executeupgradeBaremetalPublicBandwidthPlanGET,
		description: descriptionupgradeBaremetalPublicBandwidthPlanGET,
	},
	{
		name: 'Upgrade Baremetal Public Bandwidth (Plan)',
		value: 'upgradeBaremetalPublicBandwidthPlanPOST',
		action: 'upgrade baremetal public bandwidth (Plan)',
		execute: executeupgradeBaremetalPublicBandwidthPlanPOST,
		description: descriptionupgradeBaremetalPublicBandwidthPlanPOST,
	},
	{
		name: 'Get Upgrade Baremetal Public Bandwidth (Service)',
		value: 'upgradeBaremetalPublicBandwidthServiceGET',
		action: 'get upgrade baremetal public bandwidth (Service)',
		execute: executeupgradeBaremetalPublicBandwidthServiceGET,
		description: descriptionupgradeBaremetalPublicBandwidthServiceGET,
	},
	{
		name: 'Get Upgrade Ceph AAS (List)',
		value: 'upgradeCephAASListGET',
		action: 'get upgrade ceph aas (List)',
		execute: executeupgradeCephAASListGET,
		description: descriptionupgradeCephAASListGET,
	},
	{
		name: 'Get Upgrade Ceph AAS (Plan)',
		value: 'upgradeCephAASPlanGET',
		action: 'get upgrade ceph aas (Plan)',
		execute: executeupgradeCephAASPlanGET,
		description: descriptionupgradeCephAASPlanGET,
	},
	{
		name: 'Upgrade Ceph AAS (Plan)',
		value: 'upgradeCephAASPlanPOST',
		action: 'upgrade ceph aas (Plan)',
		execute: executeupgradeCephAASPlanPOST,
		description: descriptionupgradeCephAASPlanPOST,
	},
	{
		name: 'Get Upgrade Ceph AAS (Service)',
		value: 'upgradeCephAASServiceGET',
		action: 'get upgrade ceph aas (Service)',
		execute: executeupgradeCephAASServiceGET,
		description: descriptionupgradeCephAASServiceGET,
	},
	{
		name: 'Get Upgrade Cloud DB (List)',
		value: 'upgradeCloudDBListGET',
		action: 'get upgrade cloud db (List)',
		execute: executeupgradeCloudDBListGET,
		description: descriptionupgradeCloudDBListGET,
	},
	{
		name: 'Get Upgrade Cloud DB (Plan)',
		value: 'upgradeCloudDBPlanGET',
		action: 'get upgrade cloud db (Plan)',
		execute: executeupgradeCloudDBPlanGET,
		description: descriptionupgradeCloudDBPlanGET,
	},
	{
		name: 'Upgrade Cloud DB (Plan)',
		value: 'upgradeCloudDBPlanPOST',
		action: 'upgrade cloud db (Plan)',
		execute: executeupgradeCloudDBPlanPOST,
		description: descriptionupgradeCloudDBPlanPOST,
	},
	{
		name: 'Get Upgrade Cloud DB (Service)',
		value: 'upgradeCloudDBServiceGET',
		action: 'get upgrade cloud db (Service)',
		execute: executeupgradeCloudDBServiceGET,
		description: descriptionupgradeCloudDBServiceGET,
	},
	{
		name: 'Get Upgrade Email Domain (List)',
		value: 'upgradeEmailDomainListGET',
		action: 'get upgrade email domain (List)',
		execute: executeupgradeEmailDomainListGET,
		description: descriptionupgradeEmailDomainListGET,
	},
	{
		name: 'Get Upgrade Email Domain (Plan)',
		value: 'upgradeEmailDomainPlanGET',
		action: 'get upgrade email domain (Plan)',
		execute: executeupgradeEmailDomainPlanGET,
		description: descriptionupgradeEmailDomainPlanGET,
	},
	{
		name: 'Upgrade Email Domain (Plan)',
		value: 'upgradeEmailDomainPlanPOST',
		action: 'upgrade email domain (Plan)',
		execute: executeupgradeEmailDomainPlanPOST,
		description: descriptionupgradeEmailDomainPlanPOST,
	},
	{
		name: 'Get Upgrade Email Domain (Service)',
		value: 'upgradeEmailDomainServiceGET',
		action: 'get upgrade email domain (Service)',
		execute: executeupgradeEmailDomainServiceGET,
		description: descriptionupgradeEmailDomainServiceGET,
	},
	{
		name: 'Get Upgrade IP Load Balancing (List)',
		value: 'upgradeIPLoadBalancingListGET',
		action: 'get upgrade ip load balancing (List)',
		execute: executeupgradeIPLoadBalancingListGET,
		description: descriptionupgradeIPLoadBalancingListGET,
	},
	{
		name: 'Get Upgrade IP Load Balancing (Plan)',
		value: 'upgradeIPLoadBalancingPlanGET',
		action: 'get upgrade ip load balancing (Plan)',
		execute: executeupgradeIPLoadBalancingPlanGET,
		description: descriptionupgradeIPLoadBalancingPlanGET,
	},
	{
		name: 'Upgrade IP Load Balancing (Plan)',
		value: 'upgradeIPLoadBalancingPlanPOST',
		action: 'upgrade ip load balancing (Plan)',
		execute: executeupgradeIPLoadBalancingPlanPOST,
		description: descriptionupgradeIPLoadBalancingPlanPOST,
	},
	{
		name: 'Get Upgrade IP Load Balancing (Service)',
		value: 'upgradeIPLoadBalancingServiceGET',
		action: 'get upgrade ip load balancing (Service)',
		execute: executeupgradeIPLoadBalancingServiceGET,
		description: descriptionupgradeIPLoadBalancingServiceGET,
	},
	{
		name: 'Get Upgrade License Hycu (List)',
		value: 'upgradeLicenseHycuListGET',
		action: 'get upgrade license hycu (List)',
		execute: executeupgradeLicenseHycuListGET,
		description: descriptionupgradeLicenseHycuListGET,
	},
	{
		name: 'Get Upgrade License Hycu (Plan)',
		value: 'upgradeLicenseHycuPlanGET',
		action: 'get upgrade license hycu (Plan)',
		execute: executeupgradeLicenseHycuPlanGET,
		description: descriptionupgradeLicenseHycuPlanGET,
	},
	{
		name: 'Upgrade License Hycu (Plan)',
		value: 'upgradeLicenseHycuPlanPOST',
		action: 'upgrade license hycu (Plan)',
		execute: executeupgradeLicenseHycuPlanPOST,
		description: descriptionupgradeLicenseHycuPlanPOST,
	},
	{
		name: 'Get Upgrade License Hycu (Service)',
		value: 'upgradeLicenseHycuServiceGET',
		action: 'get upgrade license hycu (Service)',
		execute: executeupgradeLicenseHycuServiceGET,
		description: descriptionupgradeLicenseHycuServiceGET,
	},
	{
		name: 'Get Upgrade License Plesk (List)',
		value: 'upgradeLicensePleskListGET',
		action: 'get upgrade license plesk (List)',
		execute: executeupgradeLicensePleskListGET,
		description: descriptionupgradeLicensePleskListGET,
	},
	{
		name: 'Get Upgrade License Plesk (Plan)',
		value: 'upgradeLicensePleskPlanGET',
		action: 'get upgrade license plesk (Plan)',
		execute: executeupgradeLicensePleskPlanGET,
		description: descriptionupgradeLicensePleskPlanGET,
	},
	{
		name: 'Upgrade License Plesk (Plan)',
		value: 'upgradeLicensePleskPlanPOST',
		action: 'upgrade license plesk (Plan)',
		execute: executeupgradeLicensePleskPlanPOST,
		description: descriptionupgradeLicensePleskPlanPOST,
	},
	{
		name: 'Get Upgrade License Plesk (Service)',
		value: 'upgradeLicensePleskServiceGET',
		action: 'get upgrade license plesk (Service)',
		execute: executeupgradeLicensePleskServiceGET,
		description: descriptionupgradeLicensePleskServiceGET,
	},
	{
		name: 'Get Upgrade License cPanel (List)',
		value: 'upgradeLicensecPanelListGET',
		action: 'get upgrade license cpanel (List)',
		execute: executeupgradeLicensecPanelListGET,
		description: descriptionupgradeLicensecPanelListGET,
	},
	{
		name: 'Get Upgrade License cPanel (Plan)',
		value: 'upgradeLicensecPanelPlanGET',
		action: 'get upgrade license cpanel (Plan)',
		execute: executeupgradeLicensecPanelPlanGET,
		description: descriptionupgradeLicensecPanelPlanGET,
	},
	{
		name: 'Upgrade License cPanel (Plan)',
		value: 'upgradeLicensecPanelPlanPOST',
		action: 'upgrade license cpanel (Plan)',
		execute: executeupgradeLicensecPanelPlanPOST,
		description: descriptionupgradeLicensecPanelPlanPOST,
	},
	{
		name: 'Get Upgrade License cPanel (Service)',
		value: 'upgradeLicensecPanelServiceGET',
		action: 'get upgrade license cpanel (Service)',
		execute: executeupgradeLicensecPanelServiceGET,
		description: descriptionupgradeLicensecPanelServiceGET,
	},
	{
		name: 'Get Upgrade Logs (List)',
		value: 'upgradeLogsListGET',
		action: 'get upgrade logs (List)',
		execute: executeupgradeLogsListGET,
		description: descriptionupgradeLogsListGET,
	},
	{
		name: 'Get Upgrade Logs (Plan)',
		value: 'upgradeLogsPlanGET',
		action: 'get upgrade logs (Plan)',
		execute: executeupgradeLogsPlanGET,
		description: descriptionupgradeLogsPlanGET,
	},
	{
		name: 'Upgrade Logs (Plan)',
		value: 'upgradeLogsPlanPOST',
		action: 'upgrade logs (Plan)',
		execute: executeupgradeLogsPlanPOST,
		description: descriptionupgradeLogsPlanPOST,
	},
	{
		name: 'Get Upgrade Logs (Service)',
		value: 'upgradeLogsServiceGET',
		action: 'get upgrade logs (Service)',
		execute: executeupgradeLogsServiceGET,
		description: descriptionupgradeLogsServiceGET,
	},
	{
		name: 'Get Upgrade Metrics (List)',
		value: 'upgradeMetricsListGET',
		action: 'get upgrade metrics (List)',
		execute: executeupgradeMetricsListGET,
		description: descriptionupgradeMetricsListGET,
	},
	{
		name: 'Get Upgrade Metrics (Plan)',
		value: 'upgradeMetricsPlanGET',
		action: 'get upgrade metrics (Plan)',
		execute: executeupgradeMetricsPlanGET,
		description: descriptionupgradeMetricsPlanGET,
	},
	{
		name: 'Upgrade Metrics (Plan)',
		value: 'upgradeMetricsPlanPOST',
		action: 'upgrade metrics (Plan)',
		execute: executeupgradeMetricsPlanPOST,
		description: descriptionupgradeMetricsPlanPOST,
	},
	{
		name: 'Get Upgrade Metrics (Service)',
		value: 'upgradeMetricsServiceGET',
		action: 'get upgrade metrics (Service)',
		execute: executeupgradeMetricsServiceGET,
		description: descriptionupgradeMetricsServiceGET,
	},
	{
		name: 'Get Upgrade Microsoft Exchange (List)',
		value: 'upgradeMicrosoftExchangeListGET',
		action: 'get upgrade microsoft exchange (List)',
		execute: executeupgradeMicrosoftExchangeListGET,
		description: descriptionupgradeMicrosoftExchangeListGET,
	},
	{
		name: 'Get Upgrade Microsoft Exchange (Plan)',
		value: 'upgradeMicrosoftExchangePlanGET',
		action: 'get upgrade microsoft exchange (Plan)',
		execute: executeupgradeMicrosoftExchangePlanGET,
		description: descriptionupgradeMicrosoftExchangePlanGET,
	},
	{
		name: 'Upgrade Microsoft Exchange (Plan)',
		value: 'upgradeMicrosoftExchangePlanPOST',
		action: 'upgrade microsoft exchange (Plan)',
		execute: executeupgradeMicrosoftExchangePlanPOST,
		description: descriptionupgradeMicrosoftExchangePlanPOST,
	},
	{
		name: 'Get Upgrade Microsoft Exchange (Service)',
		value: 'upgradeMicrosoftExchangeServiceGET',
		action: 'get upgrade microsoft exchange (Service)',
		execute: executeupgradeMicrosoftExchangeServiceGET,
		description: descriptionupgradeMicrosoftExchangeServiceGET,
	},
	{
		name: 'Get Upgrade Private Cloud (List)',
		value: 'upgradePrivateCloudListGET',
		action: 'get upgrade private cloud (List)',
		execute: executeupgradePrivateCloudListGET,
		description: descriptionupgradePrivateCloudListGET,
	},
	{
		name: 'Get Upgrade Private Cloud Management Fee (List)',
		value: 'upgradePrivateCloudManagementFeeListGET',
		action: 'get upgrade private cloud management fee (List)',
		execute: executeupgradePrivateCloudManagementFeeListGET,
		description: descriptionupgradePrivateCloudManagementFeeListGET,
	},
	{
		name: 'Get Upgrade Private Cloud Management Fee (Plan)',
		value: 'upgradePrivateCloudManagementFeePlanGET',
		action: 'get upgrade private cloud management fee (Plan)',
		execute: executeupgradePrivateCloudManagementFeePlanGET,
		description: descriptionupgradePrivateCloudManagementFeePlanGET,
	},
	{
		name: 'Upgrade Private Cloud Management Fee (Plan)',
		value: 'upgradePrivateCloudManagementFeePlanPOST',
		action: 'upgrade private cloud management fee (Plan)',
		execute: executeupgradePrivateCloudManagementFeePlanPOST,
		description: descriptionupgradePrivateCloudManagementFeePlanPOST,
	},
	{
		name: 'Get Upgrade Private Cloud Management Fee (Service)',
		value: 'upgradePrivateCloudManagementFeeServiceGET',
		action: 'get upgrade private cloud management fee (Service)',
		execute: executeupgradePrivateCloudManagementFeeServiceGET,
		description: descriptionupgradePrivateCloudManagementFeeServiceGET,
	},
	{
		name: 'Get Upgrade Private Cloud (Plan)',
		value: 'upgradePrivateCloudPlanGET',
		action: 'get upgrade private cloud (Plan)',
		execute: executeupgradePrivateCloudPlanGET,
		description: descriptionupgradePrivateCloudPlanGET,
	},
	{
		name: 'Upgrade Private Cloud (Plan)',
		value: 'upgradePrivateCloudPlanPOST',
		action: 'upgrade private cloud (Plan)',
		execute: executeupgradePrivateCloudPlanPOST,
		description: descriptionupgradePrivateCloudPlanPOST,
	},
	{
		name: 'Get Upgrade Private Cloud (Service)',
		value: 'upgradePrivateCloudServiceGET',
		action: 'get upgrade private cloud (Service)',
		execute: executeupgradePrivateCloudServiceGET,
		description: descriptionupgradePrivateCloudServiceGET,
	},
	{
		name: 'Get Upgrade Private SQL (List)',
		value: 'upgradePrivateSQLListGET',
		action: 'get upgrade private sql (List)',
		execute: executeupgradePrivateSQLListGET,
		description: descriptionupgradePrivateSQLListGET,
	},
	{
		name: 'Get Upgrade Private SQL (Plan)',
		value: 'upgradePrivateSQLPlanGET',
		action: 'get upgrade private sql (Plan)',
		execute: executeupgradePrivateSQLPlanGET,
		description: descriptionupgradePrivateSQLPlanGET,
	},
	{
		name: 'Upgrade Private SQL (Plan)',
		value: 'upgradePrivateSQLPlanPOST',
		action: 'upgrade private sql (Plan)',
		execute: executeupgradePrivateSQLPlanPOST,
		description: descriptionupgradePrivateSQLPlanPOST,
	},
	{
		name: 'Get Upgrade Private SQL (Service)',
		value: 'upgradePrivateSQLServiceGET',
		action: 'get upgrade private sql (Service)',
		execute: executeupgradePrivateSQLServiceGET,
		description: descriptionupgradePrivateSQLServiceGET,
	},
	{
		name: 'Get Upgrade SSL Gateway (List)',
		value: 'upgradeSSLGatewayListGET',
		action: 'get upgrade ssl gateway (List)',
		execute: executeupgradeSSLGatewayListGET,
		description: descriptionupgradeSSLGatewayListGET,
	},
	{
		name: 'Get Upgrade SSL Gateway (Plan)',
		value: 'upgradeSSLGatewayPlanGET',
		action: 'get upgrade ssl gateway (Plan)',
		execute: executeupgradeSSLGatewayPlanGET,
		description: descriptionupgradeSSLGatewayPlanGET,
	},
	{
		name: 'Upgrade SSL Gateway (Plan)',
		value: 'upgradeSSLGatewayPlanPOST',
		action: 'upgrade ssl gateway (Plan)',
		execute: executeupgradeSSLGatewayPlanPOST,
		description: descriptionupgradeSSLGatewayPlanPOST,
	},
	{
		name: 'Get Upgrade SSL Gateway (Service)',
		value: 'upgradeSSLGatewayServiceGET',
		action: 'get upgrade ssl gateway (Service)',
		execute: executeupgradeSSLGatewayServiceGET,
		description: descriptionupgradeSSLGatewayServiceGET,
	},
	{
		name: 'Get Upgrade VPS Additional Disk (List)',
		value: 'upgradeVPSAdditionalDiskListGET',
		action: 'get upgrade vps additional disk (List)',
		execute: executeupgradeVPSAdditionalDiskListGET,
		description: descriptionupgradeVPSAdditionalDiskListGET,
	},
	{
		name: 'Get Upgrade VPS Additional Disk (Plan)',
		value: 'upgradeVPSAdditionalDiskPlanGET',
		action: 'get upgrade vps additional disk (Plan)',
		execute: executeupgradeVPSAdditionalDiskPlanGET,
		description: descriptionupgradeVPSAdditionalDiskPlanGET,
	},
	{
		name: 'Upgrade VPS Additional Disk (Plan)',
		value: 'upgradeVPSAdditionalDiskPlanPOST',
		action: 'upgrade vps additional disk (Plan)',
		execute: executeupgradeVPSAdditionalDiskPlanPOST,
		description: descriptionupgradeVPSAdditionalDiskPlanPOST,
	},
	{
		name: 'Get Upgrade VPS Additional Disk (Service)',
		value: 'upgradeVPSAdditionalDiskServiceGET',
		action: 'get upgrade vps additional disk (Service)',
		execute: executeupgradeVPSAdditionalDiskServiceGET,
		description: descriptionupgradeVPSAdditionalDiskServiceGET,
	},
	{
		name: 'Get Upgrade VPS (List)',
		value: 'upgradeVPSListGET',
		action: 'get upgrade vps (List)',
		execute: executeupgradeVPSListGET,
		description: descriptionupgradeVPSListGET,
	},
	{
		name: 'Get Upgrade VPS (Plan)',
		value: 'upgradeVPSPlanGET',
		action: 'get upgrade vps (Plan)',
		execute: executeupgradeVPSPlanGET,
		description: descriptionupgradeVPSPlanGET,
	},
	{
		name: 'Upgrade VPS (Plan)',
		value: 'upgradeVPSPlanPOST',
		action: 'upgrade vps (Plan)',
		execute: executeupgradeVPSPlanPOST,
		description: descriptionupgradeVPSPlanPOST,
	},
	{
		name: 'Get Upgrade VPS (Service)',
		value: 'upgradeVPSServiceGET',
		action: 'get upgrade vps (Service)',
		execute: executeupgradeVPSServiceGET,
		description: descriptionupgradeVPSServiceGET,
	},
	{
		name: 'Get Upgrade Web Hosting (List)',
		value: 'upgradeWebHostingListGET',
		action: 'get upgrade web hosting (List)',
		execute: executeupgradeWebHostingListGET,
		description: descriptionupgradeWebHostingListGET,
	},
	{
		name: 'Get Upgrade Web Hosting (Plan)',
		value: 'upgradeWebHostingPlanGET',
		action: 'get upgrade web hosting (Plan)',
		execute: executeupgradeWebHostingPlanGET,
		description: descriptionupgradeWebHostingPlanGET,
	},
	{
		name: 'Upgrade Web Hosting (Plan)',
		value: 'upgradeWebHostingPlanPOST',
		action: 'upgrade web hosting (Plan)',
		execute: executeupgradeWebHostingPlanPOST,
		description: descriptionupgradeWebHostingPlanPOST,
	},
	{
		name: 'Get Upgrade Web Hosting (Service)',
		value: 'upgradeWebHostingServiceGET',
		action: 'get upgrade web hosting (Service)',
		execute: executeupgradeWebHostingServiceGET,
		description: descriptionupgradeWebHostingServiceGET,
	},
	{
		name: 'Get Upgrade Zimbra (List)',
		value: 'upgradeZimbraListGET',
		action: 'get upgrade zimbra (List)',
		execute: executeupgradeZimbraListGET,
		description: descriptionupgradeZimbraListGET,
	},
	{
		name: 'Get Upgrade Zimbra (Plan)',
		value: 'upgradeZimbraPlanGET',
		action: 'get upgrade zimbra (Plan)',
		execute: executeupgradeZimbraPlanGET,
		description: descriptionupgradeZimbraPlanGET,
	},
	{
		name: 'Upgrade Zimbra (Plan)',
		value: 'upgradeZimbraPlanPOST',
		action: 'upgrade zimbra (Plan)',
		execute: executeupgradeZimbraPlanPOST,
		description: descriptionupgradeZimbraPlanPOST,
	},
	{
		name: 'Get Upgrade Zimbra (Service)',
		value: 'upgradeZimbraServiceGET',
		action: 'get upgrade zimbra (Service)',
		execute: executeupgradeZimbraServiceGET,
		description: descriptionupgradeZimbraServiceGET,
	},
	{
		name: 'Get Backup Services Cart Service Option (List)',
		value: 'cartServiceOptionBackupServicesListGET',
		action: 'get backup services cart service option (List)',
		execute: executecartServiceOptionBackupServicesListGET,
		description: descriptioncartServiceOptionBackupServicesListGET,
	},
	{
		name: 'Get Backup Services Cart Service Option (Service)',
		value: 'cartServiceOptionBackupServicesServiceGET',
		action: 'get backup services cart service option (Service)',
		execute: executecartServiceOptionBackupServicesServiceGET,
		description: descriptioncartServiceOptionBackupServicesServiceGET,
	},
	{
		name: 'Get Baremetal Servers Cart Service Option (List)',
		value: 'cartServiceOptionBaremetalServersListGET',
		action: 'get baremetal servers cart service option (List)',
		execute: executecartServiceOptionBaremetalServersListGET,
		description: descriptioncartServiceOptionBaremetalServersListGET,
	},
	{
		name: 'Get Baremetal Servers Cart Service Option (Service)',
		value: 'cartServiceOptionBaremetalServersServiceGET',
		action: 'get baremetal servers cart service option (Service)',
		execute: executecartServiceOptionBaremetalServersServiceGET,
		description: descriptioncartServiceOptionBaremetalServersServiceGET,
	},
	{
		name: 'Add Baremetal Servers Cart Service Option (Service)',
		value: 'cartServiceOptionBaremetalServersServicePOST',
		action: 'add baremetal servers cart service option (Service)',
		execute: executecartServiceOptionBaremetalServersServicePOST,
		description: descriptioncartServiceOptionBaremetalServersServicePOST,
	},
	{
		name: 'Get Cloud Cart Service Option (List)',
		value: 'cartServiceOptionCloudListGET',
		action: 'get cloud cart service option (List)',
		execute: executecartServiceOptionCloudListGET,
		description: descriptioncartServiceOptionCloudListGET,
	},
	{
		name: 'Get Cloud Cart Service Option (Service)',
		value: 'cartServiceOptionCloudServiceGET',
		action: 'get cloud cart service option (Service)',
		execute: executecartServiceOptionCloudServiceGET,
		description: descriptioncartServiceOptionCloudServiceGET,
	},
	{
		name: 'Add Cloud Cart Service Option (Service)',
		value: 'cartServiceOptionCloudServicePOST',
		action: 'add cloud cart service option (Service)',
		execute: executecartServiceOptionCloudServicePOST,
		description: descriptioncartServiceOptionCloudServicePOST,
	},
	{
		name: 'Get DNS Cart Service Option (List)',
		value: 'cartServiceOptionDNSListGET',
		action: 'get dns cart service option (List)',
		execute: executecartServiceOptionDNSListGET,
		description: descriptioncartServiceOptionDNSListGET,
	},
	{
		name: 'Get DNS Cart Service Option (Service)',
		value: 'cartServiceOptionDNSServiceGET',
		action: 'get dns cart service option (Service)',
		execute: executecartServiceOptionDNSServiceGET,
		description: descriptioncartServiceOptionDNSServiceGET,
	},
	{
		name: 'Add DNS Cart Service Option (Service)',
		value: 'cartServiceOptionDNSServicePOST',
		action: 'add dns cart service option (Service)',
		execute: executecartServiceOptionDNSServicePOST,
		description: descriptioncartServiceOptionDNSServicePOST,
	},
	{
		name: 'Get Dedicated Cart Service Option (List)',
		value: 'cartServiceOptionDedicatedListGET',
		action: 'get dedicated cart service option (List)',
		execute: executecartServiceOptionDedicatedListGET,
		description: descriptioncartServiceOptionDedicatedListGET,
	},
	{
		name: 'Get Dedicated Cart Service Option (Service)',
		value: 'cartServiceOptionDedicatedServiceGET',
		action: 'get dedicated cart service option (Service)',
		execute: executecartServiceOptionDedicatedServiceGET,
		description: descriptioncartServiceOptionDedicatedServiceGET,
	},
	{
		name: 'Add Dedicated Cart Service Option (Service)',
		value: 'cartServiceOptionDedicatedServicePOST',
		action: 'add dedicated cart service option (Service)',
		execute: executecartServiceOptionDedicatedServicePOST,
		description: descriptioncartServiceOptionDedicatedServicePOST,
	},
	{
		name: 'Get Domain Cart Service Option (List)',
		value: 'cartServiceOptionDomainListGET',
		action: 'get domain cart service option (List)',
		execute: executecartServiceOptionDomainListGET,
		description: descriptioncartServiceOptionDomainListGET,
	},
	{
		name: 'Get Domain Cart Service Option (Service)',
		value: 'cartServiceOptionDomainServiceGET',
		action: 'get domain cart service option (Service)',
		execute: executecartServiceOptionDomainServiceGET,
		description: descriptioncartServiceOptionDomainServiceGET,
	},
	{
		name: 'Add Domain Cart Service Option (Service)',
		value: 'cartServiceOptionDomainServicePOST',
		action: 'add domain cart service option (Service)',
		execute: executecartServiceOptionDomainServicePOST,
		description: descriptioncartServiceOptionDomainServicePOST,
	},
	{
		name: 'Get Email Pro Cart Service Option (List)',
		value: 'cartServiceOptionEmailProListGET',
		action: 'get email pro cart service option (List)',
		execute: executecartServiceOptionEmailProListGET,
		description: descriptioncartServiceOptionEmailProListGET,
	},
	{
		name: 'Get Email Pro Cart Service Option (Service)',
		value: 'cartServiceOptionEmailProServiceGET',
		action: 'get email pro cart service option (Service)',
		execute: executecartServiceOptionEmailProServiceGET,
		description: descriptioncartServiceOptionEmailProServiceGET,
	},
	{
		name: 'Add Email Pro Cart Service Option (Service)',
		value: 'cartServiceOptionEmailProServicePOST',
		action: 'add email pro cart service option (Service)',
		execute: executecartServiceOptionEmailProServicePOST,
		description: descriptioncartServiceOptionEmailProServicePOST,
	},
	{
		name: 'Get IP Load Balancing Cart Service Option (List)',
		value: 'cartServiceOptionIPLoadBalancingListGET',
		action: 'get ip load balancing cart service option (List)',
		execute: executecartServiceOptionIPLoadBalancingListGET,
		description: descriptioncartServiceOptionIPLoadBalancingListGET,
	},
	{
		name: 'Get IP Load Balancing Cart Service Option (Service)',
		value: 'cartServiceOptionIPLoadBalancingServiceGET',
		action: 'get ip load balancing cart service option (Service)',
		execute: executecartServiceOptionIPLoadBalancingServiceGET,
		description: descriptioncartServiceOptionIPLoadBalancingServiceGET,
	},
	{
		name: 'Add IP Load Balancing Cart Service Option (Service)',
		value: 'cartServiceOptionIPLoadBalancingServicePOST',
		action: 'add ip load balancing cart service option (Service)',
		execute: executecartServiceOptionIPLoadBalancingServicePOST,
		description: descriptioncartServiceOptionIPLoadBalancingServicePOST,
	},
	{
		name: 'Get License Hycu Cart Service Option (List)',
		value: 'cartServiceOptionLicenseHycuListGET',
		action: 'get license hycu cart service option (List)',
		execute: executecartServiceOptionLicenseHycuListGET,
		description: descriptioncartServiceOptionLicenseHycuListGET,
	},
	{
		name: 'Get License Hycu Cart Service Option (Service)',
		value: 'cartServiceOptionLicenseHycuServiceGET',
		action: 'get license hycu cart service option (Service)',
		execute: executecartServiceOptionLicenseHycuServiceGET,
		description: descriptioncartServiceOptionLicenseHycuServiceGET,
	},
	{
		name: 'Add License Hycu Cart Service Option (Service)',
		value: 'cartServiceOptionLicenseHycuServicePOST',
		action: 'add license hycu cart service option (Service)',
		execute: executecartServiceOptionLicenseHycuServicePOST,
		description: descriptioncartServiceOptionLicenseHycuServicePOST,
	},
	{
		name: 'Get Logs Cart Service Option (List)',
		value: 'cartServiceOptionLogsListGET',
		action: 'get logs cart service option (List)',
		execute: executecartServiceOptionLogsListGET,
		description: descriptioncartServiceOptionLogsListGET,
	},
	{
		name: 'Get Logs Cart Service Option (Service)',
		value: 'cartServiceOptionLogsServiceGET',
		action: 'get logs cart service option (Service)',
		execute: executecartServiceOptionLogsServiceGET,
		description: descriptioncartServiceOptionLogsServiceGET,
	},
	{
		name: 'Add Logs Cart Service Option (Service)',
		value: 'cartServiceOptionLogsServicePOST',
		action: 'add logs cart service option (Service)',
		execute: executecartServiceOptionLogsServicePOST,
		description: descriptioncartServiceOptionLogsServicePOST,
	},
	{
		name: 'Get Microsoft Exchange Cart Service Option (List)',
		value: 'cartServiceOptionMicrosoftExchangeListGET',
		action: 'get microsoft exchange cart service option (List)',
		execute: executecartServiceOptionMicrosoftExchangeListGET,
		description: descriptioncartServiceOptionMicrosoftExchangeListGET,
	},
	{
		name: 'Get Microsoft Exchange Cart Service Option (Service)',
		value: 'cartServiceOptionMicrosoftExchangeServiceGET',
		action: 'get microsoft exchange cart service option (Service)',
		execute: executecartServiceOptionMicrosoftExchangeServiceGET,
		description: descriptioncartServiceOptionMicrosoftExchangeServiceGET,
	},
	{
		name: 'Add Microsoft Exchange Cart Service Option (Service)',
		value: 'cartServiceOptionMicrosoftExchangeServicePOST',
		action: 'add microsoft exchange cart service option (Service)',
		execute: executecartServiceOptionMicrosoftExchangeServicePOST,
		description: descriptioncartServiceOptionMicrosoftExchangeServicePOST,
	},
	{
		name: 'Get Microsoft Cart Service Option (List)',
		value: 'cartServiceOptionMicrosoftListGET',
		action: 'get microsoft cart service option (List)',
		execute: executecartServiceOptionMicrosoftListGET,
		description: descriptioncartServiceOptionMicrosoftListGET,
	},
	{
		name: 'Get Microsoft Cart Service Option (Service)',
		value: 'cartServiceOptionMicrosoftServiceGET',
		action: 'get microsoft cart service option (Service)',
		execute: executecartServiceOptionMicrosoftServiceGET,
		description: descriptioncartServiceOptionMicrosoftServiceGET,
	},
	{
		name: 'Add Microsoft Cart Service Option (Service)',
		value: 'cartServiceOptionMicrosoftServicePOST',
		action: 'add microsoft cart service option (Service)',
		execute: executecartServiceOptionMicrosoftServicePOST,
		description: descriptioncartServiceOptionMicrosoftServicePOST,
	},
	{
		name: 'Get Nutanix Cart Service Option (List)',
		value: 'cartServiceOptionNutanixListGET',
		action: 'get nutanix cart service option (List)',
		execute: executecartServiceOptionNutanixListGET,
		description: descriptioncartServiceOptionNutanixListGET,
	},
	{
		name: 'Get Nutanix Cart Service Option (Service)',
		value: 'cartServiceOptionNutanixServiceGET',
		action: 'get nutanix cart service option (Service)',
		execute: executecartServiceOptionNutanixServiceGET,
		description: descriptioncartServiceOptionNutanixServiceGET,
	},
	{
		name: 'Add Nutanix Cart Service Option (Service)',
		value: 'cartServiceOptionNutanixServicePOST',
		action: 'add nutanix cart service option (Service)',
		execute: executecartServiceOptionNutanixServicePOST,
		description: descriptioncartServiceOptionNutanixServicePOST,
	},
	{
		name: 'Get Office365 Prepaid Cart Service Option (List)',
		value: 'cartServiceOptionOffice365PrepaidListGET',
		action: 'get office365 prepaid cart service option (List)',
		execute: executecartServiceOptionOffice365PrepaidListGET,
		description: descriptioncartServiceOptionOffice365PrepaidListGET,
	},
	{
		name: 'Get Office365 Prepaid Cart Service Option (Service)',
		value: 'cartServiceOptionOffice365PrepaidServiceGET',
		action: 'get office365 prepaid cart service option (Service)',
		execute: executecartServiceOptionOffice365PrepaidServiceGET,
		description: descriptioncartServiceOptionOffice365PrepaidServiceGET,
	},
	{
		name: 'Add Office365 Prepaid Cart Service Option (Service)',
		value: 'cartServiceOptionOffice365PrepaidServicePOST',
		action: 'add office365 prepaid cart service option (Service)',
		execute: executecartServiceOptionOffice365PrepaidServicePOST,
		description: descriptioncartServiceOptionOffice365PrepaidServicePOST,
	},
	{
		name: 'Get Office Prepaid Cart Service Option (List)',
		value: 'cartServiceOptionOfficePrepaidListGET',
		action: 'get office prepaid cart service option (List)',
		execute: executecartServiceOptionOfficePrepaidListGET,
		description: descriptioncartServiceOptionOfficePrepaidListGET,
	},
	{
		name: 'Get Office Prepaid Cart Service Option (Service)',
		value: 'cartServiceOptionOfficePrepaidServiceGET',
		action: 'get office prepaid cart service option (Service)',
		execute: executecartServiceOptionOfficePrepaidServiceGET,
		description: descriptioncartServiceOptionOfficePrepaidServiceGET,
	},
	{
		name: 'Add Office Prepaid Cart Service Option (Service)',
		value: 'cartServiceOptionOfficePrepaidServicePOST',
		action: 'add office prepaid cart service option (Service)',
		execute: executecartServiceOptionOfficePrepaidServicePOST,
		description: descriptioncartServiceOptionOfficePrepaidServicePOST,
	},
	{
		name: 'Get Private Cloud Enterprise Cart Service Option (List)',
		value: 'cartServiceOptionPrivateCloudEnterpriseListGET',
		action: 'get private cloud enterprise cart service option (List)',
		execute: executecartServiceOptionPrivateCloudEnterpriseListGET,
		description: descriptioncartServiceOptionPrivateCloudEnterpriseListGET,
	},
	{
		name: 'Get Private Cloud Enterprise Cart Service Option (Service)',
		value: 'cartServiceOptionPrivateCloudEnterpriseServiceGET',
		action: 'get private cloud enterprise cart service option (Service)',
		execute: executecartServiceOptionPrivateCloudEnterpriseServiceGET,
		description: descriptioncartServiceOptionPrivateCloudEnterpriseServiceGET,
	},
	{
		name: 'Add Private Cloud Enterprise Cart Service Option (Service)',
		value: 'cartServiceOptionPrivateCloudEnterpriseServicePOST',
		action: 'add private cloud enterprise cart service option (Service)',
		execute: executecartServiceOptionPrivateCloudEnterpriseServicePOST,
		description: descriptioncartServiceOptionPrivateCloudEnterpriseServicePOST,
	},
	{
		name: 'Get Private Cloud Cart Service Option (List)',
		value: 'cartServiceOptionPrivateCloudListGET',
		action: 'get private cloud cart service option (List)',
		execute: executecartServiceOptionPrivateCloudListGET,
		description: descriptioncartServiceOptionPrivateCloudListGET,
	},
	{
		name: 'Get Private Cloud Reseller Enterprise Cart Service Option (List)',
		value: 'cartServiceOptionPrivateCloudResellerEnterpriseListGET',
		action: 'get private cloud reseller enterprise cart service option (List)',
		execute: executecartServiceOptionPrivateCloudResellerEnterpriseListGET,
		description: descriptioncartServiceOptionPrivateCloudResellerEnterpriseListGET,
	},
	{
		name: 'Get Private Cloud Reseller Enterprise Cart Service Option (Service)',
		value: 'cartServiceOptionPrivateCloudResellerEnterpriseServiceGET',
		action: 'get private cloud reseller enterprise cart service option (Service)',
		execute: executecartServiceOptionPrivateCloudResellerEnterpriseServiceGET,
		description: descriptioncartServiceOptionPrivateCloudResellerEnterpriseServiceGET,
	},
	{
		name: 'Add Private Cloud Reseller Enterprise Cart Service Option (Service)',
		value: 'cartServiceOptionPrivateCloudResellerEnterpriseServicePOST',
		action: 'add private cloud reseller enterprise cart service option (Service)',
		execute: executecartServiceOptionPrivateCloudResellerEnterpriseServicePOST,
		description: descriptioncartServiceOptionPrivateCloudResellerEnterpriseServicePOST,
	},
	{
		name: 'Get Private Cloud Reseller Cart Service Option (List)',
		value: 'cartServiceOptionPrivateCloudResellerListGET',
		action: 'get private cloud reseller cart service option (List)',
		execute: executecartServiceOptionPrivateCloudResellerListGET,
		description: descriptioncartServiceOptionPrivateCloudResellerListGET,
	},
	{
		name: 'Get Private Cloud Reseller Cart Service Option (Service)',
		value: 'cartServiceOptionPrivateCloudResellerServiceGET',
		action: 'get private cloud reseller cart service option (Service)',
		execute: executecartServiceOptionPrivateCloudResellerServiceGET,
		description: descriptioncartServiceOptionPrivateCloudResellerServiceGET,
	},
	{
		name: 'Add Private Cloud Reseller Cart Service Option (Service)',
		value: 'cartServiceOptionPrivateCloudResellerServicePOST',
		action: 'add private cloud reseller cart service option (Service)',
		execute: executecartServiceOptionPrivateCloudResellerServicePOST,
		description: descriptioncartServiceOptionPrivateCloudResellerServicePOST,
	},
	{
		name: 'Get Private Cloud Cart Service Option (Service)',
		value: 'cartServiceOptionPrivateCloudServiceGET',
		action: 'get private cloud cart service option (Service)',
		execute: executecartServiceOptionPrivateCloudServiceGET,
		description: descriptioncartServiceOptionPrivateCloudServiceGET,
	},
	{
		name: 'Add Private Cloud Cart Service Option (Service)',
		value: 'cartServiceOptionPrivateCloudServicePOST',
		action: 'add private cloud cart service option (Service)',
		execute: executecartServiceOptionPrivateCloudServicePOST,
		description: descriptioncartServiceOptionPrivateCloudServicePOST,
	},
	{
		name: 'Get SMS Cart Service Option (List)',
		value: 'cartServiceOptionSMSListGET',
		action: 'get sms cart service option (List)',
		execute: executecartServiceOptionSMSListGET,
		description: descriptioncartServiceOptionSMSListGET,
	},
	{
		name: 'Get SMS Cart Service Option (Service)',
		value: 'cartServiceOptionSMSServiceGET',
		action: 'get sms cart service option (Service)',
		execute: executecartServiceOptionSMSServiceGET,
		description: descriptioncartServiceOptionSMSServiceGET,
	},
	{
		name: 'Add SMS Cart Service Option (Service)',
		value: 'cartServiceOptionSMSServicePOST',
		action: 'add sms cart service option (Service)',
		execute: executecartServiceOptionSMSServicePOST,
		description: descriptioncartServiceOptionSMSServicePOST,
	},
	{
		name: 'Get SSL Gateway Cart Service Option (List)',
		value: 'cartServiceOptionSSLGatewayListGET',
		action: 'get ssl gateway cart service option (List)',
		execute: executecartServiceOptionSSLGatewayListGET,
		description: descriptioncartServiceOptionSSLGatewayListGET,
	},
	{
		name: 'Get SSL Gateway Cart Service Option (Service)',
		value: 'cartServiceOptionSSLGatewayServiceGET',
		action: 'get ssl gateway cart service option (Service)',
		execute: executecartServiceOptionSSLGatewayServiceGET,
		description: descriptioncartServiceOptionSSLGatewayServiceGET,
	},
	{
		name: 'Add SSL Gateway Cart Service Option (Service)',
		value: 'cartServiceOptionSSLGatewayServicePOST',
		action: 'add ssl gateway cart service option (Service)',
		execute: executecartServiceOptionSSLGatewayServicePOST,
		description: descriptioncartServiceOptionSSLGatewayServicePOST,
	},
	{
		name: 'Get Sharepoint Cart Service Option (List)',
		value: 'cartServiceOptionSharepointListGET',
		action: 'get sharepoint cart service option (List)',
		execute: executecartServiceOptionSharepointListGET,
		description: descriptioncartServiceOptionSharepointListGET,
	},
	{
		name: 'Get Sharepoint Cart Service Option (Service)',
		value: 'cartServiceOptionSharepointServiceGET',
		action: 'get sharepoint cart service option (Service)',
		execute: executecartServiceOptionSharepointServiceGET,
		description: descriptioncartServiceOptionSharepointServiceGET,
	},
	{
		name: 'Add Sharepoint Cart Service Option (Service)',
		value: 'cartServiceOptionSharepointServicePOST',
		action: 'add sharepoint cart service option (Service)',
		execute: executecartServiceOptionSharepointServicePOST,
		description: descriptioncartServiceOptionSharepointServicePOST,
	},
	{
		name: 'Get SNC Network Services Cart Service Option (List)',
		value: 'cartServiceOptionSncNetworkServicesListGET',
		action: 'get snc network services cart service option (List)',
		execute: executecartServiceOptionSncNetworkServicesListGET,
		description: descriptioncartServiceOptionSncNetworkServicesListGET,
	},
	{
		name: 'Get SNC Network Services Cart Service Option (Service)',
		value: 'cartServiceOptionSncNetworkServicesServiceGET',
		action: 'get snc network services cart service option (Service)',
		execute: executecartServiceOptionSncNetworkServicesServiceGET,
		description: descriptioncartServiceOptionSncNetworkServicesServiceGET,
	},
	{
		name: 'Add SNC Network Services Cart Service Option (Service)',
		value: 'cartServiceOptionSncNetworkServicesServicePOST',
		action: 'add snc network services cart service option (Service)',
		execute: executecartServiceOptionSncNetworkServicesServicePOST,
		description: descriptioncartServiceOptionSncNetworkServicesServicePOST,
	},
	{
		name: 'Get VDI Cart Service Option (List)',
		value: 'cartServiceOptionVDIListGET',
		action: 'get vdi cart service option (List)',
		execute: executecartServiceOptionVDIListGET,
		description: descriptioncartServiceOptionVDIListGET,
	},
	{
		name: 'Get VDI Cart Service Option (Service)',
		value: 'cartServiceOptionVDIServiceGET',
		action: 'get vdi cart service option (Service)',
		execute: executecartServiceOptionVDIServiceGET,
		description: descriptioncartServiceOptionVDIServiceGET,
	},
	{
		name: 'Add VDI Cart Service Option (Service)',
		value: 'cartServiceOptionVDIServicePOST',
		action: 'add vdi cart service option (Service)',
		execute: executecartServiceOptionVDIServicePOST,
		description: descriptioncartServiceOptionVDIServicePOST,
	},
	{
		name: 'Get VPS Cart Service Option (List)',
		value: 'cartServiceOptionVPSListGET',
		action: 'get vps cart service option (List)',
		execute: executecartServiceOptionVPSListGET,
		description: descriptioncartServiceOptionVPSListGET,
	},
	{
		name: 'Get VPS Cart Service Option (Service)',
		value: 'cartServiceOptionVPSServiceGET',
		action: 'get vps cart service option (Service)',
		execute: executecartServiceOptionVPSServiceGET,
		description: descriptioncartServiceOptionVPSServiceGET,
	},
	{
		name: 'Add VPS Cart Service Option (Service)',
		value: 'cartServiceOptionVPSServicePOST',
		action: 'add vps cart service option (Service)',
		execute: executecartServiceOptionVPSServicePOST,
		description: descriptioncartServiceOptionVPSServicePOST,
	},
	{
		name: 'Get VMware Cloud Director Backup Cart Service Option (List)',
		value: 'cartServiceOptionVmwareCloudDirectorBackupListGET',
		action: 'get vmware cloud director backup cart service option (List)',
		execute: executecartServiceOptionVmwareCloudDirectorBackupListGET,
		description: descriptioncartServiceOptionVmwareCloudDirectorBackupListGET,
	},
	{
		name: 'Get VMware Cloud Director Backup Cart Service Option (Service)',
		value: 'cartServiceOptionVmwareCloudDirectorBackupServiceGET',
		action: 'get vmware cloud director backup cart service option (Service)',
		execute: executecartServiceOptionVmwareCloudDirectorBackupServiceGET,
		description: descriptioncartServiceOptionVmwareCloudDirectorBackupServiceGET,
	},
	{
		name: 'Get VMware Cloud Director Cart Service Option (List)',
		value: 'cartServiceOptionVmwareCloudDirectorListGET',
		action: 'get vmware cloud director cart service option (List)',
		execute: executecartServiceOptionVmwareCloudDirectorListGET,
		description: descriptioncartServiceOptionVmwareCloudDirectorListGET,
	},
	{
		name: 'Get VMware Cloud Director Cart Service Option (Service)',
		value: 'cartServiceOptionVmwareCloudDirectorServiceGET',
		action: 'get vmware cloud director cart service option (Service)',
		execute: executecartServiceOptionVmwareCloudDirectorServiceGET,
		description: descriptioncartServiceOptionVmwareCloudDirectorServiceGET,
	},
	{
		name: 'Add VMware Cloud Director Cart Service Option (Service)',
		value: 'cartServiceOptionVmwareCloudDirectorServicePOST',
		action: 'add vmware cloud director cart service option (Service)',
		execute: executecartServiceOptionVmwareCloudDirectorServicePOST,
		description: descriptioncartServiceOptionVmwareCloudDirectorServicePOST,
	},
	{
		name: 'Get Vrack Cart Service Option (List)',
		value: 'cartServiceOptionVrackListGET',
		action: 'get vrack cart service option (List)',
		execute: executecartServiceOptionVrackListGET,
		description: descriptioncartServiceOptionVrackListGET,
	},
	{
		name: 'Get Vrack Cart Service Option (Service)',
		value: 'cartServiceOptionVrackServiceGET',
		action: 'get vrack cart service option (Service)',
		execute: executecartServiceOptionVrackServiceGET,
		description: descriptioncartServiceOptionVrackServiceGET,
	},
	{
		name: 'Add Vrack Cart Service Option (Service)',
		value: 'cartServiceOptionVrackServicePOST',
		action: 'add vrack cart service option (Service)',
		execute: executecartServiceOptionVrackServicePOST,
		description: descriptioncartServiceOptionVrackServicePOST,
	},
	{
		name: 'Get Web Hosting Cart Service Option (List)',
		value: 'cartServiceOptionWebHostingListGET',
		action: 'get web hosting cart service option (List)',
		execute: executecartServiceOptionWebHostingListGET,
		description: descriptioncartServiceOptionWebHostingListGET,
	},
	{
		name: 'Get Web Hosting Cart Service Option (Service)',
		value: 'cartServiceOptionWebHostingServiceGET',
		action: 'get web hosting cart service option (Service)',
		execute: executecartServiceOptionWebHostingServiceGET,
		description: descriptioncartServiceOptionWebHostingServiceGET,
	},
	{
		name: 'Add Web Hosting Cart Service Option (Service)',
		value: 'cartServiceOptionWebHostingServicePOST',
		action: 'add web hosting cart service option (Service)',
		execute: executecartServiceOptionWebHostingServicePOST,
		description: descriptioncartServiceOptionWebHostingServicePOST,
	},
	{
		name: 'Get Options CDN Dedicated Backend',
		value: 'cdnDedicatedBackendOptionsListGet',
		action: 'get options cdn dedicated backend',
		execute: executecdnDedicatedBackendOptionsListGet,
		description: descriptioncdnDedicatedBackendOptionsListGet,
	},
	{
		name: 'Create CDN Dedicated Backend',
		value: 'cdnDedicatedBackendOrderCreatePost',
		action: 'create cdn dedicated backend',
		execute: executecdnDedicatedBackendOrderCreatePost,
		description: descriptioncdnDedicatedBackendOrderCreatePost,
	},
	{
		name: 'Get CDN Dedicated Backend',
		value: 'cdnDedicatedBackendOrderGet',
		action: 'get cdn dedicated backend',
		execute: executecdnDedicatedBackendOrderGet,
		description: descriptioncdnDedicatedBackendOrderGet,
	},
	{
		name: 'Get Options CDN Dedicated CacheRule',
		value: 'cdnDedicatedCacheRuleOptionsListGet',
		action: 'get options cdn dedicated cacherule',
		execute: executecdnDedicatedCacheRuleOptionsListGet,
		description: descriptioncdnDedicatedCacheRuleOptionsListGet,
	},
	{
		name: 'Create CDN Dedicated CacheRule',
		value: 'cdnDedicatedCacheRuleOrderCreatePost',
		action: 'create cdn dedicated cacherule',
		execute: executecdnDedicatedCacheRuleOrderCreatePost,
		description: descriptioncdnDedicatedCacheRuleOrderCreatePost,
	},
	{
		name: 'Get CDN Dedicated CacheRule',
		value: 'cdnDedicatedCacheRuleOrderGet',
		action: 'get cdn dedicated cacherule',
		execute: executecdnDedicatedCacheRuleOrderGet,
		description: descriptioncdnDedicatedCacheRuleOrderGet,
	},
	{
		name: 'List CDN Dedicated Get',
		value: 'cdnDedicatedListGet',
		action: 'list cdn dedicated  get',
		execute: executecdnDedicatedListGet,
		description: descriptioncdnDedicatedListGet,
	},
	{
		name: 'Get Duration CDN Dedicated',
		value: 'cdnDedicatedNewDurationGet',
		action: 'get duration cdn dedicated',
		execute: executecdnDedicatedNewDurationGet,
		description: descriptioncdnDedicatedNewDurationGet,
	},
	{
		name: 'Create CDN Dedicated',
		value: 'cdnDedicatedNewOrderCreatePost',
		action: 'create cdn dedicated',
		execute: executecdnDedicatedNewOrderCreatePost,
		description: descriptioncdnDedicatedNewOrderCreatePost,
	},
	{
		name: 'Get CDN Dedicated',
		value: 'cdnDedicatedNewOrderGet',
		action: 'get cdn dedicated',
		execute: executecdnDedicatedNewOrderGet,
		description: descriptioncdnDedicatedNewOrderGet,
	},
	{
		name: 'Get Options CDN Dedicated Quota',
		value: 'cdnDedicatedQuotaOptionsListGet',
		action: 'get options cdn dedicated quota',
		execute: executecdnDedicatedQuotaOptionsListGet,
		description: descriptioncdnDedicatedQuotaOptionsListGet,
	},
	{
		name: 'Create CDN Dedicated Quota',
		value: 'cdnDedicatedQuotaOrderCreatePost',
		action: 'create cdn dedicated quota',
		execute: executecdnDedicatedQuotaOrderCreatePost,
		description: descriptioncdnDedicatedQuotaOrderCreatePost,
	},
	{
		name: 'Get CDN Dedicated Quota',
		value: 'cdnDedicatedQuotaOrderGet',
		action: 'get cdn dedicated quota',
		execute: executecdnDedicatedQuotaOrderGet,
		description: descriptioncdnDedicatedQuotaOrderGet,
	},
	{
		name: 'Get Options CDN Dedicated',
		value: 'cdnDedicatedServiceOptionsListGet',
		action: 'get options cdn dedicated',
		execute: executecdnDedicatedServiceOptionsListGet,
		description: descriptioncdnDedicatedServiceOptionsListGet,
	},
	{
		name: 'Get Options Domain Zone DNS Anycast',
		value: 'domainZoneDnsAnycastOptionsListGet',
		action: 'get options domain zone dns anycast',
		execute: executedomainZoneDnsAnycastOptionsListGet,
		description: descriptiondomainZoneDnsAnycastOptionsListGet,
	},
	{
		name: 'Create Domain Zone DNS Anycast',
		value: 'domainZoneDnsAnycastOrderCreatePost',
		action: 'create domain zone dns anycast',
		execute: executedomainZoneDnsAnycastOrderCreatePost,
		description: descriptiondomainZoneDnsAnycastOrderCreatePost,
	},
	{
		name: 'Get Domain Zone DNS Anycast',
		value: 'domainZoneDnsAnycastOrderGet',
		action: 'get domain zone dns anycast',
		execute: executedomainZoneDnsAnycastOrderGet,
		description: descriptiondomainZoneDnsAnycastOrderGet,
	},
	{
		name: 'List Domain Zone Get',
		value: 'domainZoneListGet',
		action: 'list domain zone  get',
		execute: executedomainZoneListGet,
		description: descriptiondomainZoneListGet,
	},
	{
		name: 'Create Domain Zone',
		value: 'domainZoneNewOrderCreatePost',
		action: 'create domain zone',
		execute: executedomainZoneNewOrderCreatePost,
		description: descriptiondomainZoneNewOrderCreatePost,
	},
	{
		name: 'Get Domain Zone',
		value: 'domainZoneNewOrderGet',
		action: 'get domain zone',
		execute: executedomainZoneNewOrderGet,
		description: descriptiondomainZoneNewOrderGet,
	},
	{
		name: 'Get Options Domain Zone',
		value: 'domainZoneServiceOptionsListGet',
		action: 'get options domain zone',
		execute: executedomainZoneServiceOptionsListGet,
		description: descriptiondomainZoneServiceOptionsListGet,
	},
	{
		name: 'List Email Domain Get',
		value: 'emailDomainListGet',
		action: 'list email domain  get',
		execute: executeemailDomainListGet,
		description: descriptionemailDomainListGet,
	},
	{
		name: 'Get Duration Email Domain',
		value: 'emailDomainNewDurationGet',
		action: 'get duration email domain',
		execute: executeemailDomainNewDurationGet,
		description: descriptionemailDomainNewDurationGet,
	},
	{
		name: 'Create Email Domain',
		value: 'emailDomainNewOrderCreatePost',
		action: 'create email domain',
		execute: executeemailDomainNewOrderCreatePost,
		description: descriptionemailDomainNewOrderCreatePost,
	},
	{
		name: 'Get Email Domain',
		value: 'emailDomainNewOrderGet',
		action: 'get email domain',
		execute: executeemailDomainNewOrderGet,
		description: descriptionemailDomainNewOrderGet,
	},
	{
		name: 'Get Options Email Domain',
		value: 'emailDomainServiceOptionsListGet',
		action: 'get options email domain',
		execute: executeemailDomainServiceOptionsListGet,
		description: descriptionemailDomainServiceOptionsListGet,
	},
	{
		name: 'List Hosting Web Get',
		value: 'hostingWebListGet',
		action: 'list hosting web  get',
		execute: executehostingWebListGet,
		description: descriptionhostingWebListGet,
	},
	{
		name: 'Get Options Hosting Web',
		value: 'hostingWebServiceOptionsListGet',
		action: 'get options hosting web',
		execute: executehostingWebServiceOptionsListGet,
		description: descriptionhostingWebServiceOptionsListGet,
	},
	{
		name: 'Create Hosting Web',
		value: 'hostingWebServiceUpgradeOrderCreatePost',
		action: 'create hosting web',
		execute: executehostingWebServiceUpgradeOrderCreatePost,
		description: descriptionhostingWebServiceUpgradeOrderCreatePost,
	},
	{
		name: 'Get Hosting Web',
		value: 'hostingWebServiceUpgradeOrderGet',
		action: 'get hosting web',
		execute: executehostingWebServiceUpgradeOrderGet,
		description: descriptionhostingWebServiceUpgradeOrderGet,
	},
	],
);

export { description, execute };

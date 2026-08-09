import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

// Cart operations
import {
	execute as executeCartListGet,
	description as descriptionCartListGet,
} from './cart/cartListGet.operation';
import {
	execute as executeCartCreatePost,
	description as descriptionCartCreatePost,
} from './cart/cartCreatePost.operation';
import {
	execute as executeCartDeleteDelete,
	description as descriptionCartDeleteDelete,
} from './cart/cartDeleteDelete.operation';
import {
	execute as executeCartGetGet,
	description as descriptionCartGetGet,
} from './cart/cartGetGet.operation';
import {
	execute as executeCartUpdatePut,
	description as descriptionCartUpdatePut,
} from './cart/cartUpdatePut.operation';
import {
	execute as executeCartSummaryGet,
	description as descriptionCartSummaryGet,
} from './cart/cartSummaryGet.operation';
import {
	execute as executeCartItemListGet,
	description as descriptionCartItemListGet,
} from './cart/cartItemListGet.operation';
import {
	execute as executeCartItemGetGet,
	description as descriptionCartItemGetGet,
} from './cart/cartItemGetGet.operation';
import {
	execute as executeCartItemUpdatePut,
	description as descriptionCartItemUpdatePut,
} from './cart/cartItemUpdatePut.operation';
import {
	execute as executeCartItemDeleteDelete,
	description as descriptionCartItemDeleteDelete,
} from './cart/cartItemDeleteDelete.operation';
import {
	execute as executeCartItemConfigurationListGet,
	description as descriptionCartItemConfigurationListGet,
} from './cart/cartItemConfigurationListGet.operation';
import {
	execute as executeCartItemConfigurationCreatePost,
	description as descriptionCartItemConfigurationCreatePost,
} from './cart/cartItemConfigurationCreatePost.operation';
import {
	execute as executeCartItemConfigurationGetGet,
	description as descriptionCartItemConfigurationGetGet,
} from './cart/cartItemConfigurationGetGet.operation';
import {
	execute as executeCartItemConfigurationDeleteDelete,
	description as descriptionCartItemConfigurationDeleteDelete,
} from './cart/cartItemConfigurationDeleteDelete.operation';
import {
	execute as executeCartItemRequiredConfigurationListGet,
	description as descriptionCartItemRequiredConfigurationListGet,
} from './cart/cartItemRequiredConfigurationListGet.operation';
import {
	execute as executeCartCouponListGet,
	description as descriptionCartCouponListGet,
} from './cart/cartCouponListGet.operation';
import {
	execute as executeCartCouponCreatePost,
	description as descriptionCartCouponCreatePost,
} from './cart/cartCouponCreatePost.operation';
import {
	execute as executeCartSupportListGet,
	description as descriptionCartSupportListGet,
} from './cart/cartSupportListGet.operation';
import {
	execute as executeCartSupportCreatePost,
	description as descriptionCartSupportCreatePost,
} from './cart/cartSupportCreatePost.operation';

// Cart checkout/assign/coupon/config operations
import {
	execute as executeCartCheckoutGet,
	description as descriptionCartCheckoutGet,
} from './cart/cartCheckoutGet.operation';
import {
	execute as executeCartCheckoutPost,
	description as descriptionCartCheckoutPost,
} from './cart/cartCheckoutPost.operation';
import {
	execute as executeCartAssignPost,
	description as descriptionCartAssignPost,
} from './cart/cartAssignPost.operation';
import {
	execute as executeCartCouponDelete,
	description as descriptionCartCouponDelete,
} from './cart/cartCouponDelete.operation';
import {
	execute as executeCartItemConfigurationUpdatePut,
	description as descriptionCartItemConfigurationUpdatePut,
} from './cart/cartItemConfigurationUpdatePut.operation';

// Cart product families (after kubernetes)

import {
	execute as executeCartLicenseHycuGET,
	description as descriptionCartLicenseHycuGET,
} from './cart/licenseHycu/cartLicenseHycuGET.operation';

import {
	execute as executeCartLicenseHycuPOST,
	description as descriptionCartLicenseHycuPOST,
} from './cart/licenseHycu/cartLicenseHycuPOST.operation';

import {
	execute as executeCartLicensePleskGET,
	description as descriptionCartLicensePleskGET,
} from './cart/licensePlesk/cartLicensePleskGET.operation';

import {
	execute as executeCartLicensePleskPOST,
	description as descriptionCartLicensePleskPOST,
} from './cart/licensePlesk/cartLicensePleskPOST.operation';

import {
	execute as executeCartLicensePleskOptionsGET,
	description as descriptionCartLicensePleskOptionsGET,
} from './cart/licensePlesk/cartLicensePleskOptionsGET.operation';

import {
	execute as executeCartLicensePleskOptionsPOST,
	description as descriptionCartLicensePleskOptionsPOST,
} from './cart/licensePlesk/cartLicensePleskOptionsPOST.operation';

import {
	execute as executeCartLicenseSqlServerGET,
	description as descriptionCartLicenseSqlServerGET,
} from './cart/licenseSqlServer/cartLicenseSqlServerGET.operation';

import {
	execute as executeCartLicenseSqlServerPOST,
	description as descriptionCartLicenseSqlServerPOST,
} from './cart/licenseSqlServer/cartLicenseSqlServerPOST.operation';

import {
	execute as executeCartLicenseWindowsGET,
	description as descriptionCartLicenseWindowsGET,
} from './cart/licenseWindows/cartLicenseWindowsGET.operation';

import {
	execute as executeCartLicenseWindowsPOST,
	description as descriptionCartLicenseWindowsPOST,
} from './cart/licenseWindows/cartLicenseWindowsPOST.operation';

import {
	execute as executeCartLicensecPanelGET,
	description as descriptionCartLicensecPanelGET,
} from './cart/licensecPanel/cartLicensecPanelGET.operation';

import {
	execute as executeCartLicensecPanelPOST,
	description as descriptionCartLicensecPanelPOST,
} from './cart/licensecPanel/cartLicensecPanelPOST.operation';

import {
	execute as executeCartLogsGET,
	description as descriptionCartLogsGET,
} from './cart/logs/cartLogsGET.operation';

import {
	execute as executeCartLogsPOST,
	description as descriptionCartLogsPOST,
} from './cart/logs/cartLogsPOST.operation';

import {
	execute as executeCartLogsOptionsGET,
	description as descriptionCartLogsOptionsGET,
} from './cart/logs/cartLogsOptionsGET.operation';

import {
	execute as executeCartLogsOptionsPOST,
	description as descriptionCartLogsOptionsPOST,
} from './cart/logs/cartLogsOptionsPOST.operation';

import {
	execute as executeCartManagedCMSGET,
	description as descriptionCartManagedCMSGET,
} from './cart/managedCMS/cartManagedCMSGET.operation';

import {
	execute as executeCartManagedCMSPOST,
	description as descriptionCartManagedCMSPOST,
} from './cart/managedCMS/cartManagedCMSPOST.operation';

import {
	execute as executeCartManagedCMSOptionsGET,
	description as descriptionCartManagedCMSOptionsGET,
} from './cart/managedCMS/cartManagedCMSOptionsGET.operation';

import {
	execute as executeCartManagedCMSOptionsPOST,
	description as descriptionCartManagedCMSOptionsPOST,
} from './cart/managedCMS/cartManagedCMSOptionsPOST.operation';

import {
	execute as executeCartManagedServicesGET,
	description as descriptionCartManagedServicesGET,
} from './cart/managedServices/cartManagedServicesGET.operation';

import {
	execute as executeCartManagedServicesPOST,
	description as descriptionCartManagedServicesPOST,
} from './cart/managedServices/cartManagedServicesPOST.operation';

import {
	execute as executeCartManagedServicesOptionsGET,
	description as descriptionCartManagedServicesOptionsGET,
} from './cart/managedServices/cartManagedServicesOptionsGET.operation';

import {
	execute as executeCartManagedServicesOptionsPOST,
	description as descriptionCartManagedServicesOptionsPOST,
} from './cart/managedServices/cartManagedServicesOptionsPOST.operation';

import {
	execute as executeCartMetricsGET,
	description as descriptionCartMetricsGET,
} from './cart/metrics/cartMetricsGET.operation';

import {
	execute as executeCartMetricsPOST,
	description as descriptionCartMetricsPOST,
} from './cart/metrics/cartMetricsPOST.operation';

import {
	execute as executeCartMetricsOptionsGET,
	description as descriptionCartMetricsOptionsGET,
} from './cart/metrics/cartMetricsOptionsGET.operation';

import {
	execute as executeCartMetricsOptionsPOST,
	description as descriptionCartMetricsOptionsPOST,
} from './cart/metrics/cartMetricsOptionsPOST.operation';

import {
	execute as executeCartMicrosoftGET,
	description as descriptionCartMicrosoftGET,
} from './cart/microsoft/cartMicrosoftGET.operation';

import {
	execute as executeCartMicrosoftPOST,
	description as descriptionCartMicrosoftPOST,
} from './cart/microsoft/cartMicrosoftPOST.operation';

import {
	execute as executeCartMicrosoftOptionsGET,
	description as descriptionCartMicrosoftOptionsGET,
} from './cart/microsoft/cartMicrosoftOptionsGET.operation';

import {
	execute as executeCartMicrosoftOptionsPOST,
	description as descriptionCartMicrosoftOptionsPOST,
} from './cart/microsoft/cartMicrosoftOptionsPOST.operation';

import {
	execute as executeCartNashaGET,
	description as descriptionCartNashaGET,
} from './cart/nasha/cartNashaGET.operation';

import {
	execute as executeCartNashaPOST,
	description as descriptionCartNashaPOST,
} from './cart/nasha/cartNashaPOST.operation';

import {
	execute as executeCartNashaOptionsGET,
	description as descriptionCartNashaOptionsGET,
} from './cart/nasha/cartNashaOptionsGET.operation';

import {
	execute as executeCartNashaOptionsPOST,
	description as descriptionCartNashaOptionsPOST,
} from './cart/nasha/cartNashaOptionsPOST.operation';

import {
	execute as executeCartNetappGET,
	description as descriptionCartNetappGET,
} from './cart/netapp/cartNetappGET.operation';

import {
	execute as executeCartNetappPOST,
	description as descriptionCartNetappPOST,
} from './cart/netapp/cartNetappPOST.operation';

import {
	execute as executeCartNetappOptionsGET,
	description as descriptionCartNetappOptionsGET,
} from './cart/netapp/cartNetappOptionsGET.operation';

import {
	execute as executeCartNetappOptionsPOST,
	description as descriptionCartNetappOptionsPOST,
} from './cart/netapp/cartNetappOptionsPOST.operation';

import {
	execute as executeCartNutanixGET,
	description as descriptionCartNutanixGET,
} from './cart/nutanix/cartNutanixGET.operation';

import {
	execute as executeCartNutanixPOST,
	description as descriptionCartNutanixPOST,
} from './cart/nutanix/cartNutanixPOST.operation';

import {
	execute as executeCartNutanixOptionsGET,
	description as descriptionCartNutanixOptionsGET,
} from './cart/nutanix/cartNutanixOptionsGET.operation';

import {
	execute as executeCartNutanixOptionsPOST,
	description as descriptionCartNutanixOptionsPOST,
} from './cart/nutanix/cartNutanixOptionsPOST.operation';

import {
	execute as executeCartOffice365GET,
	description as descriptionCartOffice365GET,
} from './cart/office365/cartOffice365GET.operation';

import {
	execute as executeCartOffice365POST,
	description as descriptionCartOffice365POST,
} from './cart/office365/cartOffice365POST.operation';

import {
	execute as executeCartOffice365OptionsGET,
	description as descriptionCartOffice365OptionsGET,
} from './cart/office365/cartOffice365OptionsGET.operation';

import {
	execute as executeCartOffice365OptionsPOST,
	description as descriptionCartOffice365OptionsPOST,
} from './cart/office365/cartOffice365OptionsPOST.operation';

import {
	execute as executeCartOffice365PrepaidGET,
	description as descriptionCartOffice365PrepaidGET,
} from './cart/office365Prepaid/cartOffice365PrepaidGET.operation';

import {
	execute as executeCartOffice365PrepaidPOST,
	description as descriptionCartOffice365PrepaidPOST,
} from './cart/office365Prepaid/cartOffice365PrepaidPOST.operation';

import {
	execute as executeCartOffice365PrepaidOptionsGET,
	description as descriptionCartOffice365PrepaidOptionsGET,
} from './cart/office365Prepaid/cartOffice365PrepaidOptionsGET.operation';

import {
	execute as executeCartOffice365PrepaidOptionsPOST,
	description as descriptionCartOffice365PrepaidOptionsPOST,
} from './cart/office365Prepaid/cartOffice365PrepaidOptionsPOST.operation';

import {
	execute as executeCartOfficePrepaidGET,
	description as descriptionCartOfficePrepaidGET,
} from './cart/officePrepaid/cartOfficePrepaidGET.operation';

import {
	execute as executeCartOfficePrepaidPOST,
	description as descriptionCartOfficePrepaidPOST,
} from './cart/officePrepaid/cartOfficePrepaidPOST.operation';

import {
	execute as executeCartOfficePrepaidOptionsGET,
	description as descriptionCartOfficePrepaidOptionsGET,
} from './cart/officePrepaid/cartOfficePrepaidOptionsGET.operation';

import {
	execute as executeCartOfficePrepaidOptionsPOST,
	description as descriptionCartOfficePrepaidOptionsPOST,
} from './cart/officePrepaid/cartOfficePrepaidOptionsPOST.operation';

import {
	execute as executeCartOkmsGET,
	description as descriptionCartOkmsGET,
} from './cart/okms/cartOkmsGET.operation';

import {
	execute as executeCartOkmsPOST,
	description as descriptionCartOkmsPOST,
} from './cart/okms/cartOkmsPOST.operation';

import {
	execute as executeCartOtbGET,
	description as descriptionCartOtbGET,
} from './cart/otb/cartOtbGET.operation';

import {
	execute as executeCartOtbPOST,
	description as descriptionCartOtbPOST,
} from './cart/otb/cartOtbPOST.operation';

import {
	execute as executeCartOtbOptionsGET,
	description as descriptionCartOtbOptionsGET,
} from './cart/otb/cartOtbOptionsGET.operation';

import {
	execute as executeCartOtbOptionsPOST,
	description as descriptionCartOtbOptionsPOST,
} from './cart/otb/cartOtbOptionsPOST.operation';

import {
	execute as executeCartOtbResellerGET,
	description as descriptionCartOtbResellerGET,
} from './cart/otbReseller/cartOtbResellerGET.operation';

import {
	execute as executeCartOtbResellerPOST,
	description as descriptionCartOtbResellerPOST,
} from './cart/otbReseller/cartOtbResellerPOST.operation';

import {
	execute as executeCartOtbResellerOptionsGET,
	description as descriptionCartOtbResellerOptionsGET,
} from './cart/otbReseller/cartOtbResellerOptionsGET.operation';

import {
	execute as executeCartOtbResellerOptionsPOST,
	description as descriptionCartOtbResellerOptionsPOST,
} from './cart/otbReseller/cartOtbResellerOptionsPOST.operation';

import {
	execute as executeCartOvhCloudConnectGET,
	description as descriptionCartOvhCloudConnectGET,
} from './cart/ovhCloudConnect/cartOvhCloudConnectGET.operation';

import {
	execute as executeCartOvhCloudConnectPOST,
	description as descriptionCartOvhCloudConnectPOST,
} from './cart/ovhCloudConnect/cartOvhCloudConnectPOST.operation';

import {
	execute as executeCartPaasmonGET,
	description as descriptionCartPaasmonGET,
} from './cart/paasmon/cartPaasmonGET.operation';

import {
	execute as executeCartPaasmonPOST,
	description as descriptionCartPaasmonPOST,
} from './cart/paasmon/cartPaasmonPOST.operation';

import {
	execute as executeCartPacksProfessionalServicesGET,
	description as descriptionCartPacksProfessionalServicesGET,
} from './cart/packsProfessionalServices/cartPacksProfessionalServicesGET.operation';

import {
	execute as executeCartPacksProfessionalServicesPOST,
	description as descriptionCartPacksProfessionalServicesPOST,
} from './cart/packsProfessionalServices/cartPacksProfessionalServicesPOST.operation';

import {
	execute as executeCartPacksProfessionalServicesOptionsGET,
	description as descriptionCartPacksProfessionalServicesOptionsGET,
} from './cart/packsProfessionalServices/cartPacksProfessionalServicesOptionsGET.operation';

import {
	execute as executeCartPacksProfessionalServicesOptionsPOST,
	description as descriptionCartPacksProfessionalServicesOptionsPOST,
} from './cart/packsProfessionalServices/cartPacksProfessionalServicesOptionsPOST.operation';

import {
	execute as executeCartPowerHostingGET,
	description as descriptionCartPowerHostingGET,
} from './cart/powerHosting/cartPowerHostingGET.operation';

import {
	execute as executeCartPowerHostingPOST,
	description as descriptionCartPowerHostingPOST,
} from './cart/powerHosting/cartPowerHostingPOST.operation';

import {
	execute as executeCartPrivateCloudGET,
	description as descriptionCartPrivateCloudGET,
} from './cart/privateCloud/cartPrivateCloudGET.operation';

import {
	execute as executeCartPrivateCloudPOST,
	description as descriptionCartPrivateCloudPOST,
} from './cart/privateCloud/cartPrivateCloudPOST.operation';

import {
	execute as executeCartPrivateCloudOptionsGET,
	description as descriptionCartPrivateCloudOptionsGET,
} from './cart/privateCloud/cartPrivateCloudOptionsGET.operation';

import {
	execute as executeCartPrivateCloudOptionsPOST,
	description as descriptionCartPrivateCloudOptionsPOST,
} from './cart/privateCloud/cartPrivateCloudOptionsPOST.operation';

import {
	execute as executeCartPrivateCloudCDIGET,
	description as descriptionCartPrivateCloudCDIGET,
} from './cart/privateCloudCDI/cartPrivateCloudCDIGET.operation';

import {
	execute as executeCartPrivateCloudCDIPOST,
	description as descriptionCartPrivateCloudCDIPOST,
} from './cart/privateCloudCDI/cartPrivateCloudCDIPOST.operation';

import {
	execute as executeCartPrivateCloudCDIOptionsGET,
	description as descriptionCartPrivateCloudCDIOptionsGET,
} from './cart/privateCloudCDI/cartPrivateCloudCDIOptionsGET.operation';

import {
	execute as executeCartPrivateCloudCDIOptionsPOST,
	description as descriptionCartPrivateCloudCDIOptionsPOST,
} from './cart/privateCloudCDI/cartPrivateCloudCDIOptionsPOST.operation';

import {
	execute as executeCartPrivateCloudDCGET,
	description as descriptionCartPrivateCloudDCGET,
} from './cart/privateCloudDC/cartPrivateCloudDCGET.operation';

import {
	execute as executeCartPrivateCloudDCPOST,
	description as descriptionCartPrivateCloudDCPOST,
} from './cart/privateCloudDC/cartPrivateCloudDCPOST.operation';

import {
	execute as executeCartPrivateCloudDCOptionsGET,
	description as descriptionCartPrivateCloudDCOptionsGET,
} from './cart/privateCloudDC/cartPrivateCloudDCOptionsGET.operation';

import {
	execute as executeCartPrivateCloudDCOptionsPOST,
	description as descriptionCartPrivateCloudDCOptionsPOST,
} from './cart/privateCloudDC/cartPrivateCloudDCOptionsPOST.operation';

import {
	execute as executeCartPrivateCloudEnterpriseGET,
	description as descriptionCartPrivateCloudEnterpriseGET,
} from './cart/privateCloudEnterprise/cartPrivateCloudEnterpriseGET.operation';

import {
	execute as executeCartPrivateCloudEnterprisePOST,
	description as descriptionCartPrivateCloudEnterprisePOST,
} from './cart/privateCloudEnterprise/cartPrivateCloudEnterprisePOST.operation';

import {
	execute as executeCartPrivateCloudEnterpriseOptionsGET,
	description as descriptionCartPrivateCloudEnterpriseOptionsGET,
} from './cart/privateCloudEnterprise/cartPrivateCloudEnterpriseOptionsGET.operation';

import {
	execute as executeCartPrivateCloudEnterpriseOptionsPOST,
	description as descriptionCartPrivateCloudEnterpriseOptionsPOST,
} from './cart/privateCloudEnterprise/cartPrivateCloudEnterpriseOptionsPOST.operation';

import {
	execute as executeCartPrivateCloudResellerGET,
	description as descriptionCartPrivateCloudResellerGET,
} from './cart/privateCloudReseller/cartPrivateCloudResellerGET.operation';

import {
	execute as executeCartPrivateCloudResellerPOST,
	description as descriptionCartPrivateCloudResellerPOST,
} from './cart/privateCloudReseller/cartPrivateCloudResellerPOST.operation';

import {
	execute as executeCartPrivateCloudResellerOptionsGET,
	description as descriptionCartPrivateCloudResellerOptionsGET,
} from './cart/privateCloudReseller/cartPrivateCloudResellerOptionsGET.operation';

import {
	execute as executeCartPrivateCloudResellerOptionsPOST,
	description as descriptionCartPrivateCloudResellerOptionsPOST,
} from './cart/privateCloudReseller/cartPrivateCloudResellerOptionsPOST.operation';

import {
	execute as executeCartPrivateCloudResellerEnterpriseGET,
	description as descriptionCartPrivateCloudResellerEnterpriseGET,
} from './cart/privateCloudResellerEnterprise/cartPrivateCloudResellerEnterpriseGET.operation';

import {
	execute as executeCartPrivateCloudResellerEnterprisePOST,
	description as descriptionCartPrivateCloudResellerEnterprisePOST,
} from './cart/privateCloudResellerEnterprise/cartPrivateCloudResellerEnterprisePOST.operation';

import {
	execute as executeCartPrivateCloudResellerEnterpriseOptionsGET,
	description as descriptionCartPrivateCloudResellerEnterpriseOptionsGET,
} from './cart/privateCloudResellerEnterprise/cartPrivateCloudResellerEnterpriseOptionsGET.operation';

import {
	execute as executeCartPrivateCloudResellerEnterpriseOptionsPOST,
	description as descriptionCartPrivateCloudResellerEnterpriseOptionsPOST,
} from './cart/privateCloudResellerEnterprise/cartPrivateCloudResellerEnterpriseOptionsPOST.operation';

import {
	execute as executeCartPrivateCloudSDDCGET,
	description as descriptionCartPrivateCloudSDDCGET,
} from './cart/privateCloudSDDC/cartPrivateCloudSDDCGET.operation';

import {
	execute as executeCartPrivateCloudSDDCPOST,
	description as descriptionCartPrivateCloudSDDCPOST,
} from './cart/privateCloudSDDC/cartPrivateCloudSDDCPOST.operation';

import {
	execute as executeCartPrivateCloudSDDCOptionsGET,
	description as descriptionCartPrivateCloudSDDCOptionsGET,
} from './cart/privateCloudSDDC/cartPrivateCloudSDDCOptionsGET.operation';

import {
	execute as executeCartPrivateCloudSDDCOptionsPOST,
	description as descriptionCartPrivateCloudSDDCOptionsPOST,
} from './cart/privateCloudSDDC/cartPrivateCloudSDDCOptionsPOST.operation';

import {
	execute as executeCartPrivateSQLGET,
	description as descriptionCartPrivateSQLGET,
} from './cart/privateSQL/cartPrivateSQLGET.operation';

import {
	execute as executeCartPrivateSQLPOST,
	description as descriptionCartPrivateSQLPOST,
} from './cart/privateSQL/cartPrivateSQLPOST.operation';

import {
	execute as executeCartResellerGET,
	description as descriptionCartResellerGET,
} from './cart/reseller/cartResellerGET.operation';

import {
	execute as executeCartResellerPOST,
	description as descriptionCartResellerPOST,
} from './cart/reseller/cartResellerPOST.operation';

import {
	execute as executeCartSharepointGET,
	description as descriptionCartSharepointGET,
} from './cart/sharepoint/cartSharepointGET.operation';

import {
	execute as executeCartSharepointPOST,
	description as descriptionCartSharepointPOST,
} from './cart/sharepoint/cartSharepointPOST.operation';

import {
	execute as executeCartSharepointOptionsGET,
	description as descriptionCartSharepointOptionsGET,
} from './cart/sharepoint/cartSharepointOptionsGET.operation';

import {
	execute as executeCartSharepointOptionsPOST,
	description as descriptionCartSharepointOptionsPOST,
} from './cart/sharepoint/cartSharepointOptionsPOST.operation';

import {
	execute as executeCartSmsGET,
	description as descriptionCartSmsGET,
} from './cart/sms/cartSmsGET.operation';

import {
	execute as executeCartSmsPOST,
	description as descriptionCartSmsPOST,
} from './cart/sms/cartSmsPOST.operation';

import {
	execute as executeCartSncNetworkServicesGET,
	description as descriptionCartSncNetworkServicesGET,
} from './cart/sncNetworkServices/cartSncNetworkServicesGET.operation';

import {
	execute as executeCartSncNetworkServicesPOST,
	description as descriptionCartSncNetworkServicesPOST,
} from './cart/sncNetworkServices/cartSncNetworkServicesPOST.operation';

import {
	execute as executeCartSncNetworkServicesOptionsGET,
	description as descriptionCartSncNetworkServicesOptionsGET,
} from './cart/sncNetworkServices/cartSncNetworkServicesOptionsGET.operation';

import {
	execute as executeCartSncNetworkServicesOptionsPOST,
	description as descriptionCartSncNetworkServicesOptionsPOST,
} from './cart/sncNetworkServices/cartSncNetworkServicesOptionsPOST.operation';

import {
	execute as executeCartSslComodoGET,
	description as descriptionCartSslComodoGET,
} from './cart/sslComodo/cartSslComodoGET.operation';

import {
	execute as executeCartSslComodoPOST,
	description as descriptionCartSslComodoPOST,
} from './cart/sslComodo/cartSslComodoPOST.operation';

import {
	execute as executeCartSslComodoOptionsGET,
	description as descriptionCartSslComodoOptionsGET,
} from './cart/sslComodo/cartSslComodoOptionsGET.operation';

import {
	execute as executeCartSslComodoOptionsPOST,
	description as descriptionCartSslComodoOptionsPOST,
} from './cart/sslComodo/cartSslComodoOptionsPOST.operation';

import {
	execute as executeCartSslGatewayGET,
	description as descriptionCartSslGatewayGET,
} from './cart/sslGateway/cartSslGatewayGET.operation';

import {
	execute as executeCartSslGatewayPOST,
	description as descriptionCartSslGatewayPOST,
} from './cart/sslGateway/cartSslGatewayPOST.operation';

import {
	execute as executeCartSslGatewayOptionsGET,
	description as descriptionCartSslGatewayOptionsGET,
} from './cart/sslGateway/cartSslGatewayOptionsGET.operation';

import {
	execute as executeCartSslGatewayOptionsPOST,
	description as descriptionCartSslGatewayOptionsPOST,
} from './cart/sslGateway/cartSslGatewayOptionsPOST.operation';

import {
	execute as executeCartTelephonyGET,
	description as descriptionCartTelephonyGET,
} from './cart/telephony/cartTelephonyGET.operation';

import {
	execute as executeCartTelephonyPOST,
	description as descriptionCartTelephonyPOST,
} from './cart/telephony/cartTelephonyPOST.operation';

import {
	execute as executeCartTelephonyOptionsGET,
	description as descriptionCartTelephonyOptionsGET,
} from './cart/telephony/cartTelephonyOptionsGET.operation';

import {
	execute as executeCartTelephonyOptionsPOST,
	description as descriptionCartTelephonyOptionsPOST,
} from './cart/telephony/cartTelephonyOptionsPOST.operation';

import {
	execute as executeCartVdiGET,
	description as descriptionCartVdiGET,
} from './cart/vdi/cartVdiGET.operation';

import {
	execute as executeCartVdiPOST,
	description as descriptionCartVdiPOST,
} from './cart/vdi/cartVdiPOST.operation';

import {
	execute as executeCartVdiOptionsGET,
	description as descriptionCartVdiOptionsGET,
} from './cart/vdi/cartVdiOptionsGET.operation';

import {
	execute as executeCartVdiOptionsPOST,
	description as descriptionCartVdiOptionsPOST,
} from './cart/vdi/cartVdiOptionsPOST.operation';

import {
	execute as executeCartVeeamEnterpriseGET,
	description as descriptionCartVeeamEnterpriseGET,
} from './cart/veeamEnterprise/cartVeeamEnterpriseGET.operation';

import {
	execute as executeCartVeeamEnterprisePOST,
	description as descriptionCartVeeamEnterprisePOST,
} from './cart/veeamEnterprise/cartVeeamEnterprisePOST.operation';

import {
	execute as executeCartVeeamEnterpriseOptionsGET,
	description as descriptionCartVeeamEnterpriseOptionsGET,
} from './cart/veeamEnterprise/cartVeeamEnterpriseOptionsGET.operation';

import {
	execute as executeCartVeeamEnterpriseOptionsPOST,
	description as descriptionCartVeeamEnterpriseOptionsPOST,
} from './cart/veeamEnterprise/cartVeeamEnterpriseOptionsPOST.operation';

import {
	execute as executeCartVeeamccGET,
	description as descriptionCartVeeamccGET,
} from './cart/veeamcc/cartVeeamccGET.operation';

import {
	execute as executeCartVeeamccPOST,
	description as descriptionCartVeeamccPOST,
} from './cart/veeamcc/cartVeeamccPOST.operation';

import {
	execute as executeCartVeeamccOptionsGET,
	description as descriptionCartVeeamccOptionsGET,
} from './cart/veeamcc/cartVeeamccOptionsGET.operation';

import {
	execute as executeCartVeeamccOptionsPOST,
	description as descriptionCartVeeamccOptionsPOST,
} from './cart/veeamcc/cartVeeamccOptionsPOST.operation';

import {
	execute as executeCartVideocenterGET,
	description as descriptionCartVideocenterGET,
} from './cart/videocenter/cartVideocenterGET.operation';

import {
	execute as executeCartVideocenterPOST,
	description as descriptionCartVideocenterPOST,
} from './cart/videocenter/cartVideocenterPOST.operation';

import {
	execute as executeCartVideocenterOptionsGET,
	description as descriptionCartVideocenterOptionsGET,
} from './cart/videocenter/cartVideocenterOptionsGET.operation';

import {
	execute as executeCartVideocenterOptionsPOST,
	description as descriptionCartVideocenterOptionsPOST,
} from './cart/videocenter/cartVideocenterOptionsPOST.operation';

import {
	execute as executeCartVmwareCloudDirectorGET,
	description as descriptionCartVmwareCloudDirectorGET,
} from './cart/vmwareCloudDirector/cartVmwareCloudDirectorGET.operation';

import {
	execute as executeCartVmwareCloudDirectorPOST,
	description as descriptionCartVmwareCloudDirectorPOST,
} from './cart/vmwareCloudDirector/cartVmwareCloudDirectorPOST.operation';

import {
	execute as executeCartVmwareCloudDirectorOptionsGET,
	description as descriptionCartVmwareCloudDirectorOptionsGET,
} from './cart/vmwareCloudDirector/cartVmwareCloudDirectorOptionsGET.operation';

import {
	execute as executeCartVmwareCloudDirectorOptionsPOST,
	description as descriptionCartVmwareCloudDirectorOptionsPOST,
} from './cart/vmwareCloudDirector/cartVmwareCloudDirectorOptionsPOST.operation';

import {
	execute as executeCartVmwareCloudDirectorBackupGET,
	description as descriptionCartVmwareCloudDirectorBackupGET,
} from './cart/vmwareCloudDirectorBackup/cartVmwareCloudDirectorBackupGET.operation';

import {
	execute as executeCartVmwareCloudDirectorBackupPOST,
	description as descriptionCartVmwareCloudDirectorBackupPOST,
} from './cart/vmwareCloudDirectorBackup/cartVmwareCloudDirectorBackupPOST.operation';

import {
	execute as executeCartVmwareCloudDirectorBackupOptionsGET,
	description as descriptionCartVmwareCloudDirectorBackupOptionsGET,
} from './cart/vmwareCloudDirectorBackup/cartVmwareCloudDirectorBackupOptionsGET.operation';

import {
	execute as executeCartVmwareCloudDirectorBackupOptionsPOST,
	description as descriptionCartVmwareCloudDirectorBackupOptionsPOST,
} from './cart/vmwareCloudDirectorBackup/cartVmwareCloudDirectorBackupOptionsPOST.operation';

import {
	execute as executeCartVpsGET,
	description as descriptionCartVpsGET,
} from './cart/vps/cartVpsGET.operation';

import {
	execute as executeCartVpsPOST,
	description as descriptionCartVpsPOST,
} from './cart/vps/cartVpsPOST.operation';

import {
	execute as executeCartVpsOptionsGET,
	description as descriptionCartVpsOptionsGET,
} from './cart/vps/cartVpsOptionsGET.operation';

import {
	execute as executeCartVpsOptionsPOST,
	description as descriptionCartVpsOptionsPOST,
} from './cart/vps/cartVpsOptionsPOST.operation';

import {
	execute as executeCartVrackGET,
	description as descriptionCartVrackGET,
} from './cart/vrack/cartVrackGET.operation';

import {
	execute as executeCartVrackPOST,
	description as descriptionCartVrackPOST,
} from './cart/vrack/cartVrackPOST.operation';

import {
	execute as executeCartVrackOptionsGET,
	description as descriptionCartVrackOptionsGET,
} from './cart/vrack/cartVrackOptionsGET.operation';

import {
	execute as executeCartVrackOptionsPOST,
	description as descriptionCartVrackOptionsPOST,
} from './cart/vrack/cartVrackOptionsPOST.operation';

import {
	execute as executeCartVrackResellerGET,
	description as descriptionCartVrackResellerGET,
} from './cart/vrackReseller/cartVrackResellerGET.operation';

import {
	execute as executeCartVrackResellerPOST,
	description as descriptionCartVrackResellerPOST,
} from './cart/vrackReseller/cartVrackResellerPOST.operation';

import {
	execute as executeCartVrackServicesGET,
	description as descriptionCartVrackServicesGET,
} from './cart/vrackServices/cartVrackServicesGET.operation';

import {
	execute as executeCartVrackServicesPOST,
	description as descriptionCartVrackServicesPOST,
} from './cart/vrackServices/cartVrackServicesPOST.operation';

import {
	execute as executeCartWebHostingGET,
	description as descriptionCartWebHostingGET,
} from './cart/webHosting/cartWebHostingGET.operation';

import {
	execute as executeCartWebHostingPOST,
	description as descriptionCartWebHostingPOST,
} from './cart/webHosting/cartWebHostingPOST.operation';

import {
	execute as executeCartWebHostingOptionsGET,
	description as descriptionCartWebHostingOptionsGET,
} from './cart/webHosting/cartWebHostingOptionsGET.operation';

import {
	execute as executeCartWebHostingOptionsPOST,
	description as descriptionCartWebHostingOptionsPOST,
} from './cart/webHosting/cartWebHostingOptionsPOST.operation';

import {
	execute as executeCartXdslGET,
	description as descriptionCartXdslGET,
} from './cart/xdsl/cartXdslGET.operation';

import {
	execute as executeCartXdslPOST,
	description as descriptionCartXdslPOST,
} from './cart/xdsl/cartXdslPOST.operation';

import {
	execute as executeCartXdslOptionsGET,
	description as descriptionCartXdslOptionsGET,
} from './cart/xdsl/cartXdslOptionsGET.operation';

import {
	execute as executeCartXdslOptionsPOST,
	description as descriptionCartXdslOptionsPOST,
} from './cart/xdsl/cartXdslOptionsPOST.operation';

import {
	execute as executeCartZimbraGET,
	description as descriptionCartZimbraGET,
} from './cart/zimbra/cartZimbraGET.operation';

import {
	execute as executeCartZimbraPOST,
	description as descriptionCartZimbraPOST,
} from './cart/zimbra/cartZimbraPOST.operation';

import {
	execute as executeCartZimbraOptionsGET,
	description as descriptionCartZimbraOptionsGET,
} from './cart/zimbra/cartZimbraOptionsGET.operation';

import {
	execute as executeCartZimbraOptionsPOST,
	description as descriptionCartZimbraOptionsPOST,
} from './cart/zimbra/cartZimbraOptionsPOST.operation';

// Catalog operations
import {
	execute as executeCatalogPublicGet,
	description as descriptionCatalogPublicGet,
} from './catalog/catalogPublicGet.operation';
import {
	execute as executeCatalogPublicOptionsGet,
	description as descriptionCatalogPublicOptionsGet,
} from './catalog/catalogPublicOptionsGet.operation';

import {
	execute as executeDomainGet,
	description as descriptionDomainGet,
} from './catalog/domainGet.operation';
import {
	execute as executeDomainOptionsGet,
	description as descriptionDomainOptionsGet,
} from './catalog/domainOptionsGet.operation';

import {
	execute as executeEcoGet,
	description as descriptionEcoGet,
} from './catalog/ecoGet.operation';
import {
	execute as executeEcoOptionsGet,
	description as descriptionEcoOptionsGet,
} from './catalog/ecoOptionsGet.operation';

import {
	execute as executeEmailDomainGet,
	description as descriptionEmailDomainGet,
} from './catalog/emailDomainGet.operation';
import {
	execute as executeEmailDomainOptionsGet,
	description as descriptionEmailDomainOptionsGet,
} from './catalog/emailDomainOptionsGet.operation';

import {
	execute as executeEmailproGet,
	description as descriptionEmailproGet,
} from './catalog/emailproGet.operation';
import {
	execute as executeEmailproOptionsGet,
	description as descriptionEmailproOptionsGet,
} from './catalog/emailproOptionsGet.operation';

import {
	execute as executeExchangeGet,
	description as descriptionExchangeGet,
} from './catalog/exchangeGet.operation';
import {
	execute as executeExchangeOptionsGet,
	description as descriptionExchangeOptionsGet,
} from './catalog/exchangeOptionsGet.operation';

import {
	execute as executeIpLoadbalancingGet,
	description as descriptionIpLoadbalancingGet,
} from './catalog/ipLoadbalancingGet.operation';
import {
	execute as executeIpLoadbalancingOptionsGet,
	description as descriptionIpLoadbalancingOptionsGet,
} from './catalog/ipLoadbalancingOptionsGet.operation';

import {
	execute as executeLicenseHycuGet,
	description as descriptionLicenseHycuGet,
} from './catalog/licenseHycuGet.operation';
import {
	execute as executeLicenseHycuOptionsGet,
	description as descriptionLicenseHycuOptionsGet,
} from './catalog/licenseHycuOptionsGet.operation';

import {
	execute as executeLicensePleskGet,
	description as descriptionLicensePleskGet,
} from './catalog/licensePleskGet.operation';
import {
	execute as executeLicensePleskOptionsGet,
	description as descriptionLicensePleskOptionsGet,
} from './catalog/licensePleskOptionsGet.operation';

import {
	execute as executeLicenseSqlServerGet,
	description as descriptionLicenseSqlServerGet,
} from './catalog/licenseSqlServerGet.operation';
import {
	execute as executeLicenseSqlServerOptionsGet,
	description as descriptionLicenseSqlServerOptionsGet,
} from './catalog/licenseSqlServerOptionsGet.operation';

import {
	execute as executeLicenseWindowsGet,
	description as descriptionLicenseWindowsGet,
} from './catalog/licenseWindowsGet.operation';
import {
	execute as executeLicenseWindowsOptionsGet,
	description as descriptionLicenseWindowsOptionsGet,
} from './catalog/licenseWindowsOptionsGet.operation';

import {
	execute as executeLicensecPanelGet,
	description as descriptionLicensecPanelGet,
} from './catalog/licensecPanelGet.operation';
import {
	execute as executeLicensecPanelOptionsGet,
	description as descriptionLicensecPanelOptionsGet,
} from './catalog/licensecPanelOptionsGet.operation';

import {
	execute as executeLogsGet,
	description as descriptionLogsGet,
} from './catalog/logsGet.operation';
import {
	execute as executeLogsOptionsGet,
	description as descriptionLogsOptionsGet,
} from './catalog/logsOptionsGet.operation';

import {
	execute as executeNashaGet,
	description as descriptionNashaGet,
} from './catalog/nashaGet.operation';
import {
	execute as executeNashaOptionsGet,
	description as descriptionNashaOptionsGet,
} from './catalog/nashaOptionsGet.operation';

import {
	execute as executeNetappGet,
	description as descriptionNetappGet,
} from './catalog/netappGet.operation';
import {
	execute as executeNetappOptionsGet,
	description as descriptionNetappOptionsGet,
} from './catalog/netappOptionsGet.operation';

import {
	execute as executeNutanixGet,
	description as descriptionNutanixGet,
} from './catalog/nutanixGet.operation';
import {
	execute as executeNutanixOptionsGet,
	description as descriptionNutanixOptionsGet,
} from './catalog/nutanixOptionsGet.operation';

import {
	execute as executeOffice365PrepaidGet,
	description as descriptionOffice365PrepaidGet,
} from './catalog/office365PrepaidGet.operation';
import {
	execute as executeOffice365PrepaidOptionsGet,
	description as descriptionOffice365PrepaidOptionsGet,
} from './catalog/office365PrepaidOptionsGet.operation';

import {
	execute as executeOfficePrepaidGet,
	description as descriptionOfficePrepaidGet,
} from './catalog/officePrepaidGet.operation';
import {
	execute as executeOfficePrepaidOptionsGet,
	description as descriptionOfficePrepaidOptionsGet,
} from './catalog/officePrepaidOptionsGet.operation';

import {
	execute as executeOkmsGet,
	description as descriptionOkmsGet,
} from './catalog/okmsGet.operation';
import {
	execute as executeOkmsOptionsGet,
	description as descriptionOkmsOptionsGet,
} from './catalog/okmsOptionsGet.operation';

import {
	execute as executeOvhCloudConnectGet,
	description as descriptionOvhCloudConnectGet,
} from './catalog/ovhCloudConnectGet.operation';
import {
	execute as executeOvhCloudConnectOptionsGet,
	description as descriptionOvhCloudConnectOptionsGet,
} from './catalog/ovhCloudConnectOptionsGet.operation';

import {
	execute as executePacksProfessionalServicesGet,
	description as descriptionPacksProfessionalServicesGet,
} from './catalog/packsProfessionalServicesGet.operation';
import {
	execute as executePacksProfessionalServicesOptionsGet,
	description as descriptionPacksProfessionalServicesOptionsGet,
} from './catalog/packsProfessionalServicesOptionsGet.operation';

import {
	execute as executePrivateCloudGet,
	description as descriptionPrivateCloudGet,
} from './catalog/privateCloudGet.operation';
import {
	execute as executePrivateCloudOptionsGet,
	description as descriptionPrivateCloudOptionsGet,
} from './catalog/privateCloudOptionsGet.operation';

import {
	execute as executePrivateCloudEnterpriseGet,
	description as descriptionPrivateCloudEnterpriseGet,
} from './catalog/privateCloudEnterpriseGet.operation';
import {
	execute as executePrivateCloudEnterpriseOptionsGet,
	description as descriptionPrivateCloudEnterpriseOptionsGet,
} from './catalog/privateCloudEnterpriseOptionsGet.operation';

import {
	execute as executePrivateSQLGet,
	description as descriptionPrivateSQLGet,
} from './catalog/privateSQLGet.operation';
import {
	execute as executePrivateSQLOptionsGet,
	description as descriptionPrivateSQLOptionsGet,
} from './catalog/privateSQLOptionsGet.operation';

import {
	execute as executeSslGatewayGet,
	description as descriptionSslGatewayGet,
} from './catalog/sslGatewayGet.operation';
import {
	execute as executeSslGatewayOptionsGet,
	description as descriptionSslGatewayOptionsGet,
} from './catalog/sslGatewayOptionsGet.operation';

import {
	execute as executeTelephonyGet,
	description as descriptionTelephonyGet,
} from './catalog/telephonyGet.operation';
import {
	execute as executeTelephonyOptionsGet,
	description as descriptionTelephonyOptionsGet,
} from './catalog/telephonyOptionsGet.operation';

import {
	execute as executeVmwareCloudDirectorGet,
	description as descriptionVmwareCloudDirectorGet,
} from './catalog/vmwareCloudDirectorGet.operation';
import {
	execute as executeVmwareCloudDirectorOptionsGet,
	description as descriptionVmwareCloudDirectorOptionsGet,
} from './catalog/vmwareCloudDirectorOptionsGet.operation';

import {
	execute as executeVmwareCloudDirectorBackupGet,
	description as descriptionVmwareCloudDirectorBackupGet,
} from './catalog/vmwareCloudDirectorBackupGet.operation';
import {
	execute as executeVmwareCloudDirectorBackupOptionsGet,
	description as descriptionVmwareCloudDirectorBackupOptionsGet,
} from './catalog/vmwareCloudDirectorBackupOptionsGet.operation';

import {
	execute as executeVpsGet,
	description as descriptionVpsGet,
} from './catalog/vpsGet.operation';
import {
	execute as executeVpsOptionsGet,
	description as descriptionVpsOptionsGet,
} from './catalog/vpsOptionsGet.operation';

import {
	execute as executeWebHostingGet,
	description as descriptionWebHostingGet,
} from './catalog/webHostingGet.operation';
import {
	execute as executeWebHostingOptionsGet,
	description as descriptionWebHostingOptionsGet,
} from './catalog/webHostingOptionsGet.operation';

import {
	execute as executeWebPaaSGet,
	description as descriptionWebPaaSGet,
} from './catalog/webPaaSGet.operation';
import {
	execute as executeWebPaaSOptionsGet,
	description as descriptionWebPaaSOptionsGet,
} from './catalog/webPaaSOptionsGet.operation';

import {
	execute as executeZimbraGet,
	description as descriptionZimbraGet,
} from './catalog/zimbraGet.operation';
import {
	execute as executeZimbraOptionsGet,
	description as descriptionZimbraOptionsGet,
} from './catalog/zimbraOptionsGet.operation';

// License operations
import {
	execute as executeLicensecPanelListGet,
	description as descriptionLicensecPanelListGet,
} from './license/cPanel/cPanelListGet.operation';
import {
	execute as executeLicensecPanelNewListGet,
	description as descriptionLicensecPanelNewListGet,
} from './license/cPanel/cPanelNewListGet.operation';
import {
	execute as executeLicensecPanelNewDurationGet,
	description as descriptionLicensecPanelNewDurationGet,
} from './license/cPanel/cPanelNewDurationGet.operation';
import {
	execute as executeLicensecPanelServiceGet,
	description as descriptionLicensecPanelServiceGet,
} from './license/cPanel/cPanelServiceGet.operation';
import {
	execute as executeLicensecPanelServiceUpgradeListGet,
	description as descriptionLicensecPanelServiceUpgradeListGet,
} from './license/cPanel/cPanelServiceUpgradeListGet.operation';
import {
	execute as executeLicensecPanelServiceUpgradeDurationGet,
	description as descriptionLicensecPanelServiceUpgradeDurationGet,
} from './license/cPanel/cPanelServiceUpgradeDurationGet.operation';
import {
	execute as executeLicensecPanelNewCreatePost,
	description as descriptionLicensecPanelNewCreatePost,
} from './license/cPanel/cPanelNewCreatePost.operation';
import {
	execute as executeLicensecPanelServiceUpgradeCreatePost,
	description as descriptionLicensecPanelServiceUpgradeCreatePost,
} from './license/cPanel/cPanelServiceUpgradeCreatePost.operation';
import {
	execute as executeLicenseofficeListGet,
	description as descriptionLicenseofficeListGet,
} from './license/office/officeListGet.operation';
import {
	execute as executeLicenseofficeNewListGet,
	description as descriptionLicenseofficeNewListGet,
} from './license/office/officeNewListGet.operation';
import {
	execute as executeLicenseofficeNewDurationGet,
	description as descriptionLicenseofficeNewDurationGet,
} from './license/office/officeNewDurationGet.operation';
import {
	execute as executeLicenseofficeServiceGet,
	description as descriptionLicenseofficeServiceGet,
} from './license/office/officeServiceGet.operation';
import {
	execute as executeLicenseofficeServiceUpgradeListGet,
	description as descriptionLicenseofficeServiceUpgradeListGet,
} from './license/office/officeServiceUpgradeListGet.operation';
import {
	execute as executeLicenseofficeServiceUpgradeDurationGet,
	description as descriptionLicenseofficeServiceUpgradeDurationGet,
} from './license/office/officeServiceUpgradeDurationGet.operation';
import {
	execute as executeLicenseofficeNewCreatePost,
	description as descriptionLicenseofficeNewCreatePost,
} from './license/office/officeNewCreatePost.operation';
import {
	execute as executeLicenseofficeServiceUpgradeCreatePost,
	description as descriptionLicenseofficeServiceUpgradeCreatePost,
} from './license/office/officeServiceUpgradeCreatePost.operation';
import {
	execute as executeLicensepleskListGet,
	description as descriptionLicensepleskListGet,
} from './license/plesk/pleskListGet.operation';
import {
	execute as executeLicensepleskNewListGet,
	description as descriptionLicensepleskNewListGet,
} from './license/plesk/pleskNewListGet.operation';
import {
	execute as executeLicensepleskNewDurationGet,
	description as descriptionLicensepleskNewDurationGet,
} from './license/plesk/pleskNewDurationGet.operation';
import {
	execute as executeLicensepleskServiceGet,
	description as descriptionLicensepleskServiceGet,
} from './license/plesk/pleskServiceGet.operation';
import {
	execute as executeLicensepleskServiceUpgradeListGet,
	description as descriptionLicensepleskServiceUpgradeListGet,
} from './license/plesk/pleskServiceUpgradeListGet.operation';
import {
	execute as executeLicensepleskServiceUpgradeDurationGet,
	description as descriptionLicensepleskServiceUpgradeDurationGet,
} from './license/plesk/pleskServiceUpgradeDurationGet.operation';
import {
	execute as executeLicensepleskNewCreatePost,
	description as descriptionLicensepleskNewCreatePost,
} from './license/plesk/pleskNewCreatePost.operation';
import {
	execute as executeLicensepleskServiceUpgradeCreatePost,
	description as descriptionLicensepleskServiceUpgradeCreatePost,
} from './license/plesk/pleskServiceUpgradeCreatePost.operation';
import {
	execute as executeLicensesqlserverListGet,
	description as descriptionLicensesqlserverListGet,
} from './license/sqlserver/sqlserverListGet.operation';
import {
	execute as executeLicensesqlserverNewListGet,
	description as descriptionLicensesqlserverNewListGet,
} from './license/sqlserver/sqlserverNewListGet.operation';
import {
	execute as executeLicensesqlserverNewDurationGet,
	description as descriptionLicensesqlserverNewDurationGet,
} from './license/sqlserver/sqlserverNewDurationGet.operation';
import {
	execute as executeLicensesqlserverServiceGet,
	description as descriptionLicensesqlserverServiceGet,
} from './license/sqlserver/sqlserverServiceGet.operation';
import {
	execute as executeLicensesqlserverServiceUpgradeListGet,
	description as descriptionLicensesqlserverServiceUpgradeListGet,
} from './license/sqlserver/sqlserverServiceUpgradeListGet.operation';
import {
	execute as executeLicensesqlserverServiceUpgradeDurationGet,
	description as descriptionLicensesqlserverServiceUpgradeDurationGet,
} from './license/sqlserver/sqlserverServiceUpgradeDurationGet.operation';
import {
	execute as executeLicensesqlserverNewCreatePost,
	description as descriptionLicensesqlserverNewCreatePost,
} from './license/sqlserver/sqlserverNewCreatePost.operation';
import {
	execute as executeLicensesqlserverServiceUpgradeCreatePost,
	description as descriptionLicensesqlserverServiceUpgradeCreatePost,
} from './license/sqlserver/sqlserverServiceUpgradeCreatePost.operation';
import {
	execute as executeLicensewindowsListGet,
	description as descriptionLicensewindowsListGet,
} from './license/windows/windowsListGet.operation';
import {
	execute as executeLicensewindowsNewListGet,
	description as descriptionLicensewindowsNewListGet,
} from './license/windows/windowsNewListGet.operation';
import {
	execute as executeLicensewindowsNewDurationGet,
	description as descriptionLicensewindowsNewDurationGet,
} from './license/windows/windowsNewDurationGet.operation';
import {
	execute as executeLicensewindowsServiceGet,
	description as descriptionLicensewindowsServiceGet,
} from './license/windows/windowsServiceGet.operation';
import {
	execute as executeLicensewindowsServiceUpgradeListGet,
	description as descriptionLicensewindowsServiceUpgradeListGet,
} from './license/windows/windowsServiceUpgradeListGet.operation';
import {
	execute as executeLicensewindowsServiceUpgradeDurationGet,
	description as descriptionLicensewindowsServiceUpgradeDurationGet,
} from './license/windows/windowsServiceUpgradeDurationGet.operation';
import {
	execute as executeLicensewindowsNewCreatePost,
	description as descriptionLicensewindowsNewCreatePost,
} from './license/windows/windowsNewCreatePost.operation';
import {
	execute as executeLicensewindowsServiceUpgradeCreatePost,
	description as descriptionLicensewindowsServiceUpgradeCreatePost,
} from './license/windows/windowsServiceUpgradeCreatePost.operation';
// Email operations
import {
	execute as executeEmailexchangeOrganizationListGet,
	description as descriptionEmailexchangeOrganizationListGet,
} from './email/exchange/exchangeOrganizationListGet.operation';
import {
	execute as executeEmailexchangeServiceGet,
	description as descriptionEmailexchangeServiceGet,
} from './email/exchange/exchangeServiceGet.operation';
import {
	execute as executeEmailexchangeServiceCreatePost,
	description as descriptionEmailexchangeServiceCreatePost,
} from './email/exchange/exchangeServiceCreatePost.operation';
import {
	execute as executeEmailexchangeAccountGet,
	description as descriptionEmailexchangeAccountGet,
} from './email/exchange/exchangeAccountGet.operation';
import {
	execute as executeEmailexchangeAccountUpgradeCreatePost,
	description as descriptionEmailexchangeAccountUpgradeCreatePost,
} from './email/exchange/exchangeAccountUpgradeCreatePost.operation';
import {
	execute as executeEmailexchangeDiskSpaceCreatePost,
	description as descriptionEmailexchangeDiskSpaceCreatePost,
} from './email/exchange/exchangeDiskSpaceCreatePost.operation';
import {
	execute as executeEmailexchangeOutlookCreatePost,
	description as descriptionEmailexchangeOutlookCreatePost,
} from './email/exchange/exchangeOutlookCreatePost.operation';
import {
	execute as executeEmailexchangeUpgradeCreatePost,
	description as descriptionEmailexchangeUpgradeCreatePost,
} from './email/exchange/exchangeUpgradeCreatePost.operation';
import {
	execute as executeEmailproOrganizationListGet,
	description as descriptionEmailproOrganizationListGet,
} from './email/pro/proOrganizationListGet.operation';
import {
	execute as executeEmailproOrganizationCreatePost,
	description as descriptionEmailproOrganizationCreatePost,
} from './email/pro/proOrganizationCreatePost.operation';
// VPS operations
import {
	execute as executeVpsadditionalDiskListGet,
	description as descriptionVpsadditionalDiskListGet,
} from './vps/additionalDisk/additionalDiskListGet.operation';
import {
	execute as executeVpsadditionalDiskDurationGet,
	description as descriptionVpsadditionalDiskDurationGet,
} from './vps/additionalDisk/additionalDiskDurationGet.operation';
import {
	execute as executeVpsadditionalDiskCreatePost,
	description as descriptionVpsadditionalDiskCreatePost,
} from './vps/additionalDisk/additionalDiskCreatePost.operation';
import {
	execute as executeVpsautomatedBackupListGet,
	description as descriptionVpsautomatedBackupListGet,
} from './vps/automatedBackup/automatedBackupListGet.operation';
import {
	execute as executeVpsautomatedBackupDurationGet,
	description as descriptionVpsautomatedBackupDurationGet,
} from './vps/automatedBackup/automatedBackupDurationGet.operation';
import {
	execute as executeVpsautomatedBackupCreatePost,
	description as descriptionVpsautomatedBackupCreatePost,
} from './vps/automatedBackup/automatedBackupCreatePost.operation';
import {
	execute as executeVpssnapshotListGet,
	description as descriptionVpssnapshotListGet,
} from './vps/snapshot/snapshotListGet.operation';
import {
	execute as executeVpssnapshotDurationGet,
	description as descriptionVpssnapshotDurationGet,
} from './vps/snapshot/snapshotDurationGet.operation';
import {
	execute as executeVpssnapshotCreatePost,
	description as descriptionVpssnapshotCreatePost,
} from './vps/snapshot/snapshotCreatePost.operation';
// Cloud operations
import {
	execute as executeCloudprojectListGet,
	description as descriptionCloudprojectListGet,
} from './cloud/cloudProjectListGet.operation';
import {
	execute as executeCloudprojectGet,
	description as descriptionCloudprojectGet,
} from './cloud/cloudProjectGet.operation';
import {
	execute as executeCloudprojectCreatePost,
	description as descriptionCloudprojectCreatePost,
} from './cloud/cloudProjectCreatePost.operation';
// Freefax operations
import {
	execute as executeFreefaxorganizationListGet,
	description as descriptionFreefaxorganizationListGet,
} from './freefax/freefaxOrganizationListGet.operation';
import {
	execute as executeFreefaxnumberGet,
	description as descriptionFreefaxnumberGet,
} from './freefax/freefaxNumberGet.operation';
import {
	execute as executeFreefaxCreatePost,
	description as descriptionFreefaxCreatePost,
} from './freefax/freefaxCreatePost.operation';
// OverTheBox operations
import {
	execute as executeOverTheBoxListGet,
	description as descriptionOverTheBoxListGet,
} from './overTheBox/overTheBoxListGet.operation';
import {
	execute as executeOverTheBoxGet,
	description as descriptionOverTheBoxGet,
} from './overTheBox/overTheBoxGet.operation';
import {
	execute as executeOverTheBoxCreatePost,
	description as descriptionOverTheBoxCreatePost,
} from './overTheBox/overTheBoxCreatePost.operation';
import {
	execute as executeOverTheBoxOrderCreatePost,
	description as descriptionOverTheBoxOrderCreatePost,
} from './overTheBox/overTheBoxOrderCreatePost.operation';
import {
	execute as executeOverTheBoxDeviceGet,
	description as descriptionOverTheBoxDeviceGet,
} from './overTheBox/overTheBoxDeviceGet.operation';
// SaaS operations
import {
	execute as executeSaascsp2ListGet,
	description as descriptionSaascsp2ListGet,
} from './saas/saasCsp2ListGet.operation';
import {
	execute as executeSaascsp2ProductGet,
	description as descriptionSaascsp2ProductGet,
} from './saas/saasCsp2ProductGet.operation';
import {
	execute as executeSaascsp2CreatePost,
	description as descriptionSaascsp2CreatePost,
} from './saas/saasCsp2CreatePost.operation';
// SMS operations
import {
	execute as executeSmsListGet,
	description as descriptionSmsListGet,
} from './sms/smsListGet.operation';
import {
	execute as executeSmsProductGet,
	description as descriptionSmsProductGet,
} from './sms/smsProductGet.operation';
import {
	execute as executeSmsProductDurationGet,
	description as descriptionSmsProductDurationGet,
} from './sms/smsProductDurationGet.operation';
import {
	execute as executeSmsCreatePost,
	description as descriptionSmsCreatePost,
} from './sms/smsCreatePost.operation';
import {
	execute as executeSmsProductCreatePost,
	description as descriptionSmsProductCreatePost,
} from './sms/smsProductCreatePost.operation';
// Veeam Cloud Connect operations
import {
	execute as executeVeeamCloudConnectListGet,
	description as descriptionVeeamCloudConnectListGet,
} from './veeamCloudConnect/veeamCloudConnectListGet.operation';
import {
	execute as executeVeeamCloudConnectGet,
	description as descriptionVeeamCloudConnectGet,
} from './veeamCloudConnect/veeamCloudConnectGet.operation';
import {
	execute as executeVeeamCloudConnectCreatePost,
	description as descriptionVeeamCloudConnectCreatePost,
} from './veeamCloudConnect/veeamCloudConnectCreatePost.operation';
import {
	execute as executeVeeamCloudConnectConfigCreatePost,
	description as descriptionVeeamCloudConnectConfigCreatePost,
} from './veeamCloudConnect/veeamCloudConnectConfigCreatePost.operation';
import {
	execute as executeVeeamCloudConnectOptionCreatePost,
	description as descriptionVeeamCloudConnectOptionCreatePost,
} from './veeamCloudConnect/veeamCloudConnectOptionCreatePost.operation';
// xDSL operations
import {
	execute as executeXdslspareListGet,
	description as descriptionXdslspareListGet,
} from './xdsl/xdslSpareListGet.operation';
import {
	execute as executeXdslspareCreatePost,
	description as descriptionXdslspareCreatePost,
} from './xdsl/xdslSpareCreatePost.operation';

// Upgrade operations
import {
	execute as executeupgradeBandwidthVrackListGET,
	description as descriptionupgradeBandwidthVrackListGET,
} from './upgrade/upgradebandwidthvracklistget.operation';
import {
	execute as executeupgradeBandwidthVrackPlanGET,
	description as descriptionupgradeBandwidthVrackPlanGET,
} from './upgrade/upgradebandwidthvrackplanget.operation';
import {
	execute as executeupgradeBandwidthVrackPlanPOST,
	description as descriptionupgradeBandwidthVrackPlanPOST,
} from './upgrade/upgradebandwidthvrackplanpost.operation';
import {
	execute as executeupgradeBandwidthVrackServiceGET,
	description as descriptionupgradeBandwidthVrackServiceGET,
} from './upgrade/upgradebandwidthvrackserviceget.operation';
import {
	execute as executeupgradeBaremetalPrivateBandwidthListGET,
	description as descriptionupgradeBaremetalPrivateBandwidthListGET,
} from './upgrade/upgradebaremetalprivatebandwidthlistget.operation';
import {
	execute as executeupgradeBaremetalPrivateBandwidthPlanGET,
	description as descriptionupgradeBaremetalPrivateBandwidthPlanGET,
} from './upgrade/upgradebaremetalprivatebandwidthplanget.operation';
import {
	execute as executeupgradeBaremetalPrivateBandwidthPlanPOST,
	description as descriptionupgradeBaremetalPrivateBandwidthPlanPOST,
} from './upgrade/upgradebaremetalprivatebandwidthplanpost.operation';
import {
	execute as executeupgradeBaremetalPrivateBandwidthServiceGET,
	description as descriptionupgradeBaremetalPrivateBandwidthServiceGET,
} from './upgrade/upgradebaremetalprivatebandwidthserviceget.operation';
import {
	execute as executeupgradeBaremetalPublicBandwidthListGET,
	description as descriptionupgradeBaremetalPublicBandwidthListGET,
} from './upgrade/upgradebaremetalpublicbandwidthlistget.operation';
import {
	execute as executeupgradeBaremetalPublicBandwidthPlanGET,
	description as descriptionupgradeBaremetalPublicBandwidthPlanGET,
} from './upgrade/upgradebaremetalpublicbandwidthplanget.operation';
import {
	execute as executeupgradeBaremetalPublicBandwidthPlanPOST,
	description as descriptionupgradeBaremetalPublicBandwidthPlanPOST,
} from './upgrade/upgradebaremetalpublicbandwidthplanpost.operation';
import {
	execute as executeupgradeBaremetalPublicBandwidthServiceGET,
	description as descriptionupgradeBaremetalPublicBandwidthServiceGET,
} from './upgrade/upgradebaremetalpublicbandwidthserviceget.operation';
import {
	execute as executeupgradeCephAASListGET,
	description as descriptionupgradeCephAASListGET,
} from './upgrade/upgradecephaaslistget.operation';
import {
	execute as executeupgradeCephAASPlanGET,
	description as descriptionupgradeCephAASPlanGET,
} from './upgrade/upgradecephaasplanget.operation';
import {
	execute as executeupgradeCephAASPlanPOST,
	description as descriptionupgradeCephAASPlanPOST,
} from './upgrade/upgradecephaasplanpost.operation';
import {
	execute as executeupgradeCephAASServiceGET,
	description as descriptionupgradeCephAASServiceGET,
} from './upgrade/upgradecephaasserviceget.operation';
import {
	execute as executeupgradeCloudDBListGET,
	description as descriptionupgradeCloudDBListGET,
} from './upgrade/upgradeclouddblistget.operation';
import {
	execute as executeupgradeCloudDBPlanGET,
	description as descriptionupgradeCloudDBPlanGET,
} from './upgrade/upgradeclouddbplanget.operation';
import {
	execute as executeupgradeCloudDBPlanPOST,
	description as descriptionupgradeCloudDBPlanPOST,
} from './upgrade/upgradeclouddbplanpost.operation';
import {
	execute as executeupgradeCloudDBServiceGET,
	description as descriptionupgradeCloudDBServiceGET,
} from './upgrade/upgradeclouddbserviceget.operation';
import {
	execute as executeupgradeEmailDomainListGET,
	description as descriptionupgradeEmailDomainListGET,
} from './upgrade/upgradeemaildomainlistget.operation';
import {
	execute as executeupgradeEmailDomainPlanGET,
	description as descriptionupgradeEmailDomainPlanGET,
} from './upgrade/upgradeemaildomainplanget.operation';
import {
	execute as executeupgradeEmailDomainPlanPOST,
	description as descriptionupgradeEmailDomainPlanPOST,
} from './upgrade/upgradeemaildomainplanpost.operation';
import {
	execute as executeupgradeEmailDomainServiceGET,
	description as descriptionupgradeEmailDomainServiceGET,
} from './upgrade/upgradeemaildomainserviceget.operation';
import {
	execute as executeupgradeIPLoadBalancingListGET,
	description as descriptionupgradeIPLoadBalancingListGET,
} from './upgrade/upgradeiploadbalancinglistget.operation';
import {
	execute as executeupgradeIPLoadBalancingPlanGET,
	description as descriptionupgradeIPLoadBalancingPlanGET,
} from './upgrade/upgradeiploadbalancingplanget.operation';
import {
	execute as executeupgradeIPLoadBalancingPlanPOST,
	description as descriptionupgradeIPLoadBalancingPlanPOST,
} from './upgrade/upgradeiploadbalancingplanpost.operation';
import {
	execute as executeupgradeIPLoadBalancingServiceGET,
	description as descriptionupgradeIPLoadBalancingServiceGET,
} from './upgrade/upgradeiploadbalancingserviceget.operation';
import {
	execute as executeupgradeLicenseHycuListGET,
	description as descriptionupgradeLicenseHycuListGET,
} from './upgrade/upgradelicensehyculistget.operation';
import {
	execute as executeupgradeLicenseHycuPlanGET,
	description as descriptionupgradeLicenseHycuPlanGET,
} from './upgrade/upgradelicensehycuplanget.operation';
import {
	execute as executeupgradeLicenseHycuPlanPOST,
	description as descriptionupgradeLicenseHycuPlanPOST,
} from './upgrade/upgradelicensehycuplanpost.operation';
import {
	execute as executeupgradeLicenseHycuServiceGET,
	description as descriptionupgradeLicenseHycuServiceGET,
} from './upgrade/upgradelicensehycuserviceget.operation';
import {
	execute as executeupgradeLicensePleskListGET,
	description as descriptionupgradeLicensePleskListGET,
} from './upgrade/upgradelicenseplesklistget.operation';
import {
	execute as executeupgradeLicensePleskPlanGET,
	description as descriptionupgradeLicensePleskPlanGET,
} from './upgrade/upgradelicensepleskplanget.operation';
import {
	execute as executeupgradeLicensePleskPlanPOST,
	description as descriptionupgradeLicensePleskPlanPOST,
} from './upgrade/upgradelicensepleskplanpost.operation';
import {
	execute as executeupgradeLicensePleskServiceGET,
	description as descriptionupgradeLicensePleskServiceGET,
} from './upgrade/upgradelicensepleskserviceget.operation';
import {
	execute as executeupgradeLicensecPanelListGET,
	description as descriptionupgradeLicensecPanelListGET,
} from './upgrade/upgradelicensecpanellistget.operation';
import {
	execute as executeupgradeLicensecPanelPlanGET,
	description as descriptionupgradeLicensecPanelPlanGET,
} from './upgrade/upgradelicensecpanelplanget.operation';
import {
	execute as executeupgradeLicensecPanelPlanPOST,
	description as descriptionupgradeLicensecPanelPlanPOST,
} from './upgrade/upgradelicensecpanelplanpost.operation';
import {
	execute as executeupgradeLicensecPanelServiceGET,
	description as descriptionupgradeLicensecPanelServiceGET,
} from './upgrade/upgradelicensecpanelserviceget.operation';
import {
	execute as executeupgradeLogsListGET,
	description as descriptionupgradeLogsListGET,
} from './upgrade/upgradelogslistget.operation';
import {
	execute as executeupgradeLogsPlanGET,
	description as descriptionupgradeLogsPlanGET,
} from './upgrade/upgradelogsplanget.operation';
import {
	execute as executeupgradeLogsPlanPOST,
	description as descriptionupgradeLogsPlanPOST,
} from './upgrade/upgradelogsplanpost.operation';
import {
	execute as executeupgradeLogsServiceGET,
	description as descriptionupgradeLogsServiceGET,
} from './upgrade/upgradelogsserviceget.operation';
import {
	execute as executeupgradeMetricsListGET,
	description as descriptionupgradeMetricsListGET,
} from './upgrade/upgrademetricslistget.operation';
import {
	execute as executeupgradeMetricsPlanGET,
	description as descriptionupgradeMetricsPlanGET,
} from './upgrade/upgrademetricsplanget.operation';
import {
	execute as executeupgradeMetricsPlanPOST,
	description as descriptionupgradeMetricsPlanPOST,
} from './upgrade/upgrademetricsplanpost.operation';
import {
	execute as executeupgradeMetricsServiceGET,
	description as descriptionupgradeMetricsServiceGET,
} from './upgrade/upgrademetricsserviceget.operation';
import {
	execute as executeupgradeMicrosoftExchangeListGET,
	description as descriptionupgradeMicrosoftExchangeListGET,
} from './upgrade/upgrademicrosoftexchangelistget.operation';
import {
	execute as executeupgradeMicrosoftExchangePlanGET,
	description as descriptionupgradeMicrosoftExchangePlanGET,
} from './upgrade/upgrademicrosoftexchangeplanget.operation';
import {
	execute as executeupgradeMicrosoftExchangePlanPOST,
	description as descriptionupgradeMicrosoftExchangePlanPOST,
} from './upgrade/upgrademicrosoftexchangeplanpost.operation';
import {
	execute as executeupgradeMicrosoftExchangeServiceGET,
	description as descriptionupgradeMicrosoftExchangeServiceGET,
} from './upgrade/upgrademicrosoftexchangeserviceget.operation';
import {
	execute as executeupgradePrivateCloudListGET,
	description as descriptionupgradePrivateCloudListGET,
} from './upgrade/upgradeprivatecloudlistget.operation';
import {
	execute as executeupgradePrivateCloudManagementFeeListGET,
	description as descriptionupgradePrivateCloudManagementFeeListGET,
} from './upgrade/upgradeprivatecloudmanagementfeelistget.operation';
import {
	execute as executeupgradePrivateCloudManagementFeePlanGET,
	description as descriptionupgradePrivateCloudManagementFeePlanGET,
} from './upgrade/upgradeprivatecloudmanagementfeeplanget.operation';
import {
	execute as executeupgradePrivateCloudManagementFeePlanPOST,
	description as descriptionupgradePrivateCloudManagementFeePlanPOST,
} from './upgrade/upgradeprivatecloudmanagementfeeplanpost.operation';
import {
	execute as executeupgradePrivateCloudManagementFeeServiceGET,
	description as descriptionupgradePrivateCloudManagementFeeServiceGET,
} from './upgrade/upgradeprivatecloudmanagementfeeserviceget.operation';
import {
	execute as executeupgradePrivateCloudPlanGET,
	description as descriptionupgradePrivateCloudPlanGET,
} from './upgrade/upgradeprivatecloudplanget.operation';
import {
	execute as executeupgradePrivateCloudPlanPOST,
	description as descriptionupgradePrivateCloudPlanPOST,
} from './upgrade/upgradeprivatecloudplanpost.operation';
import {
	execute as executeupgradePrivateCloudServiceGET,
	description as descriptionupgradePrivateCloudServiceGET,
} from './upgrade/upgradeprivatecloudserviceget.operation';
import {
	execute as executeupgradePrivateSQLListGET,
	description as descriptionupgradePrivateSQLListGET,
} from './upgrade/upgradeprivatesqllistget.operation';
import {
	execute as executeupgradePrivateSQLPlanGET,
	description as descriptionupgradePrivateSQLPlanGET,
} from './upgrade/upgradeprivatesqlplanget.operation';
import {
	execute as executeupgradePrivateSQLPlanPOST,
	description as descriptionupgradePrivateSQLPlanPOST,
} from './upgrade/upgradeprivatesqlplanpost.operation';
import {
	execute as executeupgradePrivateSQLServiceGET,
	description as descriptionupgradePrivateSQLServiceGET,
} from './upgrade/upgradeprivatesqlserviceget.operation';
import {
	execute as executeupgradeSSLGatewayListGET,
	description as descriptionupgradeSSLGatewayListGET,
} from './upgrade/upgradesslgatewaylistget.operation';
import {
	execute as executeupgradeSSLGatewayPlanGET,
	description as descriptionupgradeSSLGatewayPlanGET,
} from './upgrade/upgradesslgatewayplanget.operation';
import {
	execute as executeupgradeSSLGatewayPlanPOST,
	description as descriptionupgradeSSLGatewayPlanPOST,
} from './upgrade/upgradesslgatewayplanpost.operation';
import {
	execute as executeupgradeSSLGatewayServiceGET,
	description as descriptionupgradeSSLGatewayServiceGET,
} from './upgrade/upgradesslgatewayserviceget.operation';
import {
	execute as executeupgradeVPSAdditionalDiskListGET,
	description as descriptionupgradeVPSAdditionalDiskListGET,
} from './upgrade/upgradevpsadditionaldisklistget.operation';
import {
	execute as executeupgradeVPSAdditionalDiskPlanGET,
	description as descriptionupgradeVPSAdditionalDiskPlanGET,
} from './upgrade/upgradevpsadditionaldiskplanget.operation';
import {
	execute as executeupgradeVPSAdditionalDiskPlanPOST,
	description as descriptionupgradeVPSAdditionalDiskPlanPOST,
} from './upgrade/upgradevpsadditionaldiskplanpost.operation';
import {
	execute as executeupgradeVPSAdditionalDiskServiceGET,
	description as descriptionupgradeVPSAdditionalDiskServiceGET,
} from './upgrade/upgradevpsadditionaldiskserviceget.operation';
import {
	execute as executeupgradeVPSListGET,
	description as descriptionupgradeVPSListGET,
} from './upgrade/upgradevpslistget.operation';
import {
	execute as executeupgradeVPSPlanGET,
	description as descriptionupgradeVPSPlanGET,
} from './upgrade/upgradevpsplanget.operation';
import {
	execute as executeupgradeVPSPlanPOST,
	description as descriptionupgradeVPSPlanPOST,
} from './upgrade/upgradevpsplanpost.operation';
import {
	execute as executeupgradeVPSServiceGET,
	description as descriptionupgradeVPSServiceGET,
} from './upgrade/upgradevpsserviceget.operation';
import {
	execute as executeupgradeWebHostingListGET,
	description as descriptionupgradeWebHostingListGET,
} from './upgrade/upgradewebhostinglistget.operation';
import {
	execute as executeupgradeWebHostingPlanGET,
	description as descriptionupgradeWebHostingPlanGET,
} from './upgrade/upgradewebhostingplanget.operation';
import {
	execute as executeupgradeWebHostingPlanPOST,
	description as descriptionupgradeWebHostingPlanPOST,
} from './upgrade/upgradewebhostingplanpost.operation';
import {
	execute as executeupgradeWebHostingServiceGET,
	description as descriptionupgradeWebHostingServiceGET,
} from './upgrade/upgradewebhostingserviceget.operation';
import {
	execute as executeupgradeZimbraListGET,
	description as descriptionupgradeZimbraListGET,
} from './upgrade/upgradezimbralistget.operation';
import {
	execute as executeupgradeZimbraPlanGET,
	description as descriptionupgradeZimbraPlanGET,
} from './upgrade/upgradezimbraplanget.operation';
import {
	execute as executeupgradeZimbraPlanPOST,
	description as descriptionupgradeZimbraPlanPOST,
} from './upgrade/upgradezimbraplanpost.operation';
import {
	execute as executeupgradeZimbraServiceGET,
	description as descriptionupgradeZimbraServiceGET,
} from './upgrade/upgradezimbraserviceget.operation';

// CDN, hosting, emailDomain, domainZone operations
import {
	execute as executecdnDedicatedBackendOptionsListGet,
	description as descriptioncdnDedicatedBackendOptionsListGet,
} from './cdn/cdnDedicatedBackendOptionsListGet.operation';

import {
	execute as executecdnDedicatedBackendOrderCreatePost,
	description as descriptioncdnDedicatedBackendOrderCreatePost,
} from './cdn/cdnDedicatedBackendOrderCreatePost.operation';

import {
	execute as executecdnDedicatedBackendOrderGet,
	description as descriptioncdnDedicatedBackendOrderGet,
} from './cdn/cdnDedicatedBackendOrderGet.operation';

import {
	execute as executecdnDedicatedCacheRuleOptionsListGet,
	description as descriptioncdnDedicatedCacheRuleOptionsListGet,
} from './cdn/cdnDedicatedCacheRuleOptionsListGet.operation';

import {
	execute as executecdnDedicatedCacheRuleOrderCreatePost,
	description as descriptioncdnDedicatedCacheRuleOrderCreatePost,
} from './cdn/cdnDedicatedCacheRuleOrderCreatePost.operation';

import {
	execute as executecdnDedicatedCacheRuleOrderGet,
	description as descriptioncdnDedicatedCacheRuleOrderGet,
} from './cdn/cdnDedicatedCacheRuleOrderGet.operation';

import {
	execute as executecdnDedicatedListGet,
	description as descriptioncdnDedicatedListGet,
} from './cdn/cdnDedicatedListGet.operation';

import {
	execute as executecdnDedicatedNewDurationGet,
	description as descriptioncdnDedicatedNewDurationGet,
} from './cdn/cdnDedicatedNewDurationGet.operation';

import {
	execute as executecdnDedicatedNewOrderCreatePost,
	description as descriptioncdnDedicatedNewOrderCreatePost,
} from './cdn/cdnDedicatedNewOrderCreatePost.operation';

import {
	execute as executecdnDedicatedNewOrderGet,
	description as descriptioncdnDedicatedNewOrderGet,
} from './cdn/cdnDedicatedNewOrderGet.operation';

import {
	execute as executecdnDedicatedQuotaOptionsListGet,
	description as descriptioncdnDedicatedQuotaOptionsListGet,
} from './cdn/cdnDedicatedQuotaOptionsListGet.operation';

import {
	execute as executecdnDedicatedQuotaOrderCreatePost,
	description as descriptioncdnDedicatedQuotaOrderCreatePost,
} from './cdn/cdnDedicatedQuotaOrderCreatePost.operation';

import {
	execute as executecdnDedicatedQuotaOrderGet,
	description as descriptioncdnDedicatedQuotaOrderGet,
} from './cdn/cdnDedicatedQuotaOrderGet.operation';

import {
	execute as executecdnDedicatedServiceOptionsListGet,
	description as descriptioncdnDedicatedServiceOptionsListGet,
} from './cdn/cdnDedicatedServiceOptionsListGet.operation';

import {
	execute as executedomainZoneDnsAnycastOptionsListGet,
	description as descriptiondomainZoneDnsAnycastOptionsListGet,
} from './domainZone/domainZoneDnsAnycastOptionsListGet.operation';

import {
	execute as executedomainZoneDnsAnycastOrderCreatePost,
	description as descriptiondomainZoneDnsAnycastOrderCreatePost,
} from './domainZone/domainZoneDnsAnycastOrderCreatePost.operation';

import {
	execute as executedomainZoneDnsAnycastOrderGet,
	description as descriptiondomainZoneDnsAnycastOrderGet,
} from './domainZone/domainZoneDnsAnycastOrderGet.operation';

import {
	execute as executedomainZoneListGet,
	description as descriptiondomainZoneListGet,
} from './domainZone/domainZoneListGet.operation';

import {
	execute as executedomainZoneNewOrderCreatePost,
	description as descriptiondomainZoneNewOrderCreatePost,
} from './domainZone/domainZoneNewOrderCreatePost.operation';

import {
	execute as executedomainZoneNewOrderGet,
	description as descriptiondomainZoneNewOrderGet,
} from './domainZone/domainZoneNewOrderGet.operation';

import {
	execute as executedomainZoneServiceOptionsListGet,
	description as descriptiondomainZoneServiceOptionsListGet,
} from './domainZone/domainZoneServiceOptionsListGet.operation';

import {
	execute as executeemailDomainListGet,
	description as descriptionemailDomainListGet,
} from './emailDomain/emailDomainListGet.operation';

import {
	execute as executeemailDomainNewDurationGet,
	description as descriptionemailDomainNewDurationGet,
} from './emailDomain/emailDomainNewDurationGet.operation';

import {
	execute as executeemailDomainNewOrderCreatePost,
	description as descriptionemailDomainNewOrderCreatePost,
} from './emailDomain/emailDomainNewOrderCreatePost.operation';

import {
	execute as executeemailDomainNewOrderGet,
	description as descriptionemailDomainNewOrderGet,
} from './emailDomain/emailDomainNewOrderGet.operation';

import {
	execute as executeemailDomainServiceOptionsListGet,
	description as descriptionemailDomainServiceOptionsListGet,
} from './emailDomain/emailDomainServiceOptionsListGet.operation';

import {
	execute as executeemailDomainServiceUpgradeOptionsListGet,
	description as descriptionemailDomainServiceUpgradeOptionsListGet,
} from './emailDomain/emailDomainServiceUpgradeOptionsListGet.operation';

import {
	execute as executeemailDomainServiceUpgradeOrderCreatePost,
	description as descriptionemailDomainServiceUpgradeOrderCreatePost,
} from './emailDomain/emailDomainServiceUpgradeOrderCreatePost.operation';

import {
	execute as executeemailDomainServiceUpgradeOrderGet,
	description as descriptionemailDomainServiceUpgradeOrderGet,
} from './emailDomain/emailDomainServiceUpgradeOrderGet.operation';

import {
	execute as executehostingWebListGet,
	description as descriptionhostingWebListGet,
} from './hosting/hostingWebListGet.operation';

import {
	execute as executehostingWebServiceOptionsListGet,
	description as descriptionhostingWebServiceOptionsListGet,
} from './hosting/hostingWebServiceOptionsListGet.operation';

import {
	execute as executehostingWebServiceUpgradeOptionsListGet,
	description as descriptionhostingWebServiceUpgradeOptionsListGet,
} from './hosting/hostingWebServiceUpgradeOptionsListGet.operation';

import {
	execute as executehostingWebServiceUpgradeOrderCreatePost,
	description as descriptionhostingWebServiceUpgradeOrderCreatePost,
} from './hosting/hostingWebServiceUpgradeOrderCreatePost.operation';

import {
	execute as executehostingWebServiceUpgradeOrderGet,
	description as descriptionhostingWebServiceUpgradeOrderGet,
} from './hosting/hostingWebServiceUpgradeOrderGet.operation';


// CartServiceOption operations
import {
	execute as executecartServiceOptionBackupServicesListGET,
	description as descriptioncartServiceOptionBackupServicesListGET,
} from './cart/cartServiceOption/cartserviceoptionbackupserviceslistget.operation';
import {
	execute as executecartServiceOptionBackupServicesServiceGET,
	description as descriptioncartServiceOptionBackupServicesServiceGET,
} from './cart/cartServiceOption/cartserviceoptionbackupservicesserviceget.operation';
import {
	execute as executecartServiceOptionBaremetalServersListGET,
	description as descriptioncartServiceOptionBaremetalServersListGET,
} from './cart/cartServiceOption/cartserviceoptionbaremetalserverslistget.operation';
import {
	execute as executecartServiceOptionBaremetalServersServiceGET,
	description as descriptioncartServiceOptionBaremetalServersServiceGET,
} from './cart/cartServiceOption/cartserviceoptionbaremetalserversserviceget.operation';
import {
	execute as executecartServiceOptionBaremetalServersServicePOST,
	description as descriptioncartServiceOptionBaremetalServersServicePOST,
} from './cart/cartServiceOption/cartserviceoptionbaremetalserversservicepost.operation';
import {
	execute as executecartServiceOptionCloudListGET,
	description as descriptioncartServiceOptionCloudListGET,
} from './cart/cartServiceOption/cartserviceoptioncloudlistget.operation';
import {
	execute as executecartServiceOptionCloudServiceGET,
	description as descriptioncartServiceOptionCloudServiceGET,
} from './cart/cartServiceOption/cartserviceoptioncloudserviceget.operation';
import {
	execute as executecartServiceOptionCloudServicePOST,
	description as descriptioncartServiceOptionCloudServicePOST,
} from './cart/cartServiceOption/cartserviceoptioncloudservicepost.operation';
import {
	execute as executecartServiceOptionDNSListGET,
	description as descriptioncartServiceOptionDNSListGET,
} from './cart/cartServiceOption/cartserviceoptiondnslistget.operation';
import {
	execute as executecartServiceOptionDNSServiceGET,
	description as descriptioncartServiceOptionDNSServiceGET,
} from './cart/cartServiceOption/cartserviceoptiondnsserviceget.operation';
import {
	execute as executecartServiceOptionDNSServicePOST,
	description as descriptioncartServiceOptionDNSServicePOST,
} from './cart/cartServiceOption/cartserviceoptiondnsservicepost.operation';
import {
	execute as executecartServiceOptionDedicatedListGET,
	description as descriptioncartServiceOptionDedicatedListGET,
} from './cart/cartServiceOption/cartserviceoptiondedicatedlistget.operation';
import {
	execute as executecartServiceOptionDedicatedServiceGET,
	description as descriptioncartServiceOptionDedicatedServiceGET,
} from './cart/cartServiceOption/cartserviceoptiondedicatedserviceget.operation';
import {
	execute as executecartServiceOptionDedicatedServicePOST,
	description as descriptioncartServiceOptionDedicatedServicePOST,
} from './cart/cartServiceOption/cartserviceoptiondedicatedservicepost.operation';
import {
	execute as executecartServiceOptionDomainListGET,
	description as descriptioncartServiceOptionDomainListGET,
} from './cart/cartServiceOption/cartserviceoptiondomainlistget.operation';
import {
	execute as executecartServiceOptionDomainServiceGET,
	description as descriptioncartServiceOptionDomainServiceGET,
} from './cart/cartServiceOption/cartserviceoptiondomainserviceget.operation';
import {
	execute as executecartServiceOptionDomainServicePOST,
	description as descriptioncartServiceOptionDomainServicePOST,
} from './cart/cartServiceOption/cartserviceoptiondomainservicepost.operation';
import {
	execute as executecartServiceOptionEmailProListGET,
	description as descriptioncartServiceOptionEmailProListGET,
} from './cart/cartServiceOption/cartserviceoptionemailprolistget.operation';
import {
	execute as executecartServiceOptionEmailProServiceGET,
	description as descriptioncartServiceOptionEmailProServiceGET,
} from './cart/cartServiceOption/cartserviceoptionemailproserviceget.operation';
import {
	execute as executecartServiceOptionEmailProServicePOST,
	description as descriptioncartServiceOptionEmailProServicePOST,
} from './cart/cartServiceOption/cartserviceoptionemailproservicepost.operation';
import {
	execute as executecartServiceOptionIPLoadBalancingListGET,
	description as descriptioncartServiceOptionIPLoadBalancingListGET,
} from './cart/cartServiceOption/cartserviceoptioniploadbalancinglistget.operation';
import {
	execute as executecartServiceOptionIPLoadBalancingServiceGET,
	description as descriptioncartServiceOptionIPLoadBalancingServiceGET,
} from './cart/cartServiceOption/cartserviceoptioniploadbalancingserviceget.operation';
import {
	execute as executecartServiceOptionIPLoadBalancingServicePOST,
	description as descriptioncartServiceOptionIPLoadBalancingServicePOST,
} from './cart/cartServiceOption/cartserviceoptioniploadbalancingservicepost.operation';
import {
	execute as executecartServiceOptionLicenseHycuListGET,
	description as descriptioncartServiceOptionLicenseHycuListGET,
} from './cart/cartServiceOption/cartserviceoptionlicensehyculistget.operation';
import {
	execute as executecartServiceOptionLicenseHycuServiceGET,
	description as descriptioncartServiceOptionLicenseHycuServiceGET,
} from './cart/cartServiceOption/cartserviceoptionlicensehycuserviceget.operation';
import {
	execute as executecartServiceOptionLicenseHycuServicePOST,
	description as descriptioncartServiceOptionLicenseHycuServicePOST,
} from './cart/cartServiceOption/cartserviceoptionlicensehycuservicepost.operation';
import {
	execute as executecartServiceOptionLogsListGET,
	description as descriptioncartServiceOptionLogsListGET,
} from './cart/cartServiceOption/cartserviceoptionlogslistget.operation';
import {
	execute as executecartServiceOptionLogsServiceGET,
	description as descriptioncartServiceOptionLogsServiceGET,
} from './cart/cartServiceOption/cartserviceoptionlogsserviceget.operation';
import {
	execute as executecartServiceOptionLogsServicePOST,
	description as descriptioncartServiceOptionLogsServicePOST,
} from './cart/cartServiceOption/cartserviceoptionlogsservicepost.operation';
import {
	execute as executecartServiceOptionMicrosoftExchangeListGET,
	description as descriptioncartServiceOptionMicrosoftExchangeListGET,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftexchangelistget.operation';
import {
	execute as executecartServiceOptionMicrosoftExchangeServiceGET,
	description as descriptioncartServiceOptionMicrosoftExchangeServiceGET,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftexchangeserviceget.operation';
import {
	execute as executecartServiceOptionMicrosoftExchangeServicePOST,
	description as descriptioncartServiceOptionMicrosoftExchangeServicePOST,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftexchangeservicepost.operation';
import {
	execute as executecartServiceOptionMicrosoftListGET,
	description as descriptioncartServiceOptionMicrosoftListGET,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftlistget.operation';
import {
	execute as executecartServiceOptionMicrosoftServiceGET,
	description as descriptioncartServiceOptionMicrosoftServiceGET,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftserviceget.operation';
import {
	execute as executecartServiceOptionMicrosoftServicePOST,
	description as descriptioncartServiceOptionMicrosoftServicePOST,
} from './cart/cartServiceOption/cartserviceoptionmicrosoftservicepost.operation';
import {
	execute as executecartServiceOptionNutanixListGET,
	description as descriptioncartServiceOptionNutanixListGET,
} from './cart/cartServiceOption/cartserviceoptionnutanixlistget.operation';
import {
	execute as executecartServiceOptionNutanixServiceGET,
	description as descriptioncartServiceOptionNutanixServiceGET,
} from './cart/cartServiceOption/cartserviceoptionnutanixserviceget.operation';
import {
	execute as executecartServiceOptionNutanixServicePOST,
	description as descriptioncartServiceOptionNutanixServicePOST,
} from './cart/cartServiceOption/cartserviceoptionnutanixservicepost.operation';
import {
	execute as executecartServiceOptionOffice365PrepaidListGET,
	description as descriptioncartServiceOptionOffice365PrepaidListGET,
} from './cart/cartServiceOption/cartserviceoptionoffice365prepaidlistget.operation';
import {
	execute as executecartServiceOptionOffice365PrepaidServiceGET,
	description as descriptioncartServiceOptionOffice365PrepaidServiceGET,
} from './cart/cartServiceOption/cartserviceoptionoffice365prepaidserviceget.operation';
import {
	execute as executecartServiceOptionOffice365PrepaidServicePOST,
	description as descriptioncartServiceOptionOffice365PrepaidServicePOST,
} from './cart/cartServiceOption/cartserviceoptionoffice365prepaidservicepost.operation';
import {
	execute as executecartServiceOptionOfficePrepaidListGET,
	description as descriptioncartServiceOptionOfficePrepaidListGET,
} from './cart/cartServiceOption/cartserviceoptionofficeprepaidlistget.operation';
import {
	execute as executecartServiceOptionOfficePrepaidServiceGET,
	description as descriptioncartServiceOptionOfficePrepaidServiceGET,
} from './cart/cartServiceOption/cartserviceoptionofficeprepaidserviceget.operation';
import {
	execute as executecartServiceOptionOfficePrepaidServicePOST,
	description as descriptioncartServiceOptionOfficePrepaidServicePOST,
} from './cart/cartServiceOption/cartserviceoptionofficeprepaidservicepost.operation';
import {
	execute as executecartServiceOptionPrivateCloudEnterpriseListGET,
	description as descriptioncartServiceOptionPrivateCloudEnterpriseListGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudenterpriselistget.operation';
import {
	execute as executecartServiceOptionPrivateCloudEnterpriseServiceGET,
	description as descriptioncartServiceOptionPrivateCloudEnterpriseServiceGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudenterpriseserviceget.operation';
import {
	execute as executecartServiceOptionPrivateCloudEnterpriseServicePOST,
	description as descriptioncartServiceOptionPrivateCloudEnterpriseServicePOST,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudenterpriseservicepost.operation';
import {
	execute as executecartServiceOptionPrivateCloudListGET,
	description as descriptioncartServiceOptionPrivateCloudListGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudlistget.operation';
import {
	execute as executecartServiceOptionPrivateCloudResellerEnterpriseListGET,
	description as descriptioncartServiceOptionPrivateCloudResellerEnterpriseListGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerenterpriselistget.operation';
import {
	execute as executecartServiceOptionPrivateCloudResellerEnterpriseServiceGET,
	description as descriptioncartServiceOptionPrivateCloudResellerEnterpriseServiceGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerenterpriseserviceget.operation';
import {
	execute as executecartServiceOptionPrivateCloudResellerEnterpriseServicePOST,
	description as descriptioncartServiceOptionPrivateCloudResellerEnterpriseServicePOST,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerenterpriseservicepost.operation';
import {
	execute as executecartServiceOptionPrivateCloudResellerListGET,
	description as descriptioncartServiceOptionPrivateCloudResellerListGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerlistget.operation';
import {
	execute as executecartServiceOptionPrivateCloudResellerServiceGET,
	description as descriptioncartServiceOptionPrivateCloudResellerServiceGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerserviceget.operation';
import {
	execute as executecartServiceOptionPrivateCloudResellerServicePOST,
	description as descriptioncartServiceOptionPrivateCloudResellerServicePOST,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudresellerservicepost.operation';
import {
	execute as executecartServiceOptionPrivateCloudServiceGET,
	description as descriptioncartServiceOptionPrivateCloudServiceGET,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudserviceget.operation';
import {
	execute as executecartServiceOptionPrivateCloudServicePOST,
	description as descriptioncartServiceOptionPrivateCloudServicePOST,
} from './cart/cartServiceOption/cartserviceoptionprivatecloudservicepost.operation';
import {
	execute as executecartServiceOptionSMSListGET,
	description as descriptioncartServiceOptionSMSListGET,
} from './cart/cartServiceOption/cartserviceoptionsmslistget.operation';
import {
	execute as executecartServiceOptionSMSServiceGET,
	description as descriptioncartServiceOptionSMSServiceGET,
} from './cart/cartServiceOption/cartserviceoptionsmsserviceget.operation';
import {
	execute as executecartServiceOptionSMSServicePOST,
	description as descriptioncartServiceOptionSMSServicePOST,
} from './cart/cartServiceOption/cartserviceoptionsmsservicepost.operation';
import {
	execute as executecartServiceOptionSSLGatewayListGET,
	description as descriptioncartServiceOptionSSLGatewayListGET,
} from './cart/cartServiceOption/cartserviceoptionsslgatewaylistget.operation';
import {
	execute as executecartServiceOptionSSLGatewayServiceGET,
	description as descriptioncartServiceOptionSSLGatewayServiceGET,
} from './cart/cartServiceOption/cartserviceoptionsslgatewayserviceget.operation';
import {
	execute as executecartServiceOptionSSLGatewayServicePOST,
	description as descriptioncartServiceOptionSSLGatewayServicePOST,
} from './cart/cartServiceOption/cartserviceoptionsslgatewayservicepost.operation';
import {
	execute as executecartServiceOptionSharepointListGET,
	description as descriptioncartServiceOptionSharepointListGET,
} from './cart/cartServiceOption/cartserviceoptionsharepointlistget.operation';
import {
	execute as executecartServiceOptionSharepointServiceGET,
	description as descriptioncartServiceOptionSharepointServiceGET,
} from './cart/cartServiceOption/cartserviceoptionsharepointserviceget.operation';
import {
	execute as executecartServiceOptionSharepointServicePOST,
	description as descriptioncartServiceOptionSharepointServicePOST,
} from './cart/cartServiceOption/cartserviceoptionsharepointservicepost.operation';
import {
	execute as executecartServiceOptionSncNetworkServicesListGET,
	description as descriptioncartServiceOptionSncNetworkServicesListGET,
} from './cart/cartServiceOption/cartserviceoptionsncnetworkserviceslistget.operation';
import {
	execute as executecartServiceOptionSncNetworkServicesServiceGET,
	description as descriptioncartServiceOptionSncNetworkServicesServiceGET,
} from './cart/cartServiceOption/cartserviceoptionsncnetworkservicesserviceget.operation';
import {
	execute as executecartServiceOptionSncNetworkServicesServicePOST,
	description as descriptioncartServiceOptionSncNetworkServicesServicePOST,
} from './cart/cartServiceOption/cartserviceoptionsncnetworkservicesservicepost.operation';
import {
	execute as executecartServiceOptionVDIListGET,
	description as descriptioncartServiceOptionVDIListGET,
} from './cart/cartServiceOption/cartserviceoptionvdilistget.operation';
import {
	execute as executecartServiceOptionVDIServiceGET,
	description as descriptioncartServiceOptionVDIServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvdiserviceget.operation';
import {
	execute as executecartServiceOptionVDIServicePOST,
	description as descriptioncartServiceOptionVDIServicePOST,
} from './cart/cartServiceOption/cartserviceoptionvdiservicepost.operation';
import {
	execute as executecartServiceOptionVPSListGET,
	description as descriptioncartServiceOptionVPSListGET,
} from './cart/cartServiceOption/cartserviceoptionvpslistget.operation';
import {
	execute as executecartServiceOptionVPSServiceGET,
	description as descriptioncartServiceOptionVPSServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvpsserviceget.operation';
import {
	execute as executecartServiceOptionVPSServicePOST,
	description as descriptioncartServiceOptionVPSServicePOST,
} from './cart/cartServiceOption/cartserviceoptionvpsservicepost.operation';
import {
	execute as executecartServiceOptionVmwareCloudDirectorBackupListGET,
	description as descriptioncartServiceOptionVmwareCloudDirectorBackupListGET,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorbackuplistget.operation';
import {
	execute as executecartServiceOptionVmwareCloudDirectorBackupServiceGET,
	description as descriptioncartServiceOptionVmwareCloudDirectorBackupServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorbackupserviceget.operation';
import {
	execute as executecartServiceOptionVmwareCloudDirectorListGET,
	description as descriptioncartServiceOptionVmwareCloudDirectorListGET,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorlistget.operation';
import {
	execute as executecartServiceOptionVmwareCloudDirectorServiceGET,
	description as descriptioncartServiceOptionVmwareCloudDirectorServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorserviceget.operation';
import {
	execute as executecartServiceOptionVmwareCloudDirectorServicePOST,
	description as descriptioncartServiceOptionVmwareCloudDirectorServicePOST,
} from './cart/cartServiceOption/cartserviceoptionvmwareclouddirectorservicepost.operation';
import {
	execute as executecartServiceOptionVrackListGET,
	description as descriptioncartServiceOptionVrackListGET,
} from './cart/cartServiceOption/cartserviceoptionvracklistget.operation';
import {
	execute as executecartServiceOptionVrackServiceGET,
	description as descriptioncartServiceOptionVrackServiceGET,
} from './cart/cartServiceOption/cartserviceoptionvrackserviceget.operation';
import {
	execute as executecartServiceOptionVrackServicePOST,
	description as descriptioncartServiceOptionVrackServicePOST,
} from './cart/cartServiceOption/cartserviceoptionvrackservicepost.operation';
import {
	execute as executecartServiceOptionWebHostingListGET,
	description as descriptioncartServiceOptionWebHostingListGET,
} from './cart/cartServiceOption/cartserviceoptionwebhostinglistget.operation';
import {
	execute as executecartServiceOptionWebHostingServiceGET,
	description as descriptioncartServiceOptionWebHostingServiceGET,
} from './cart/cartServiceOption/cartserviceoptionwebhostingserviceget.operation';
import {
	execute as executecartServiceOptionWebHostingServicePOST,
	description as descriptioncartServiceOptionWebHostingServicePOST,
} from './cart/cartServiceOption/cartserviceoptionwebhostingservicepost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'orderOperation',
			type: 'options',
			noDataExpression: true,
			// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
			options: [
			{ name: 'Add License Plesk Option to Cart', value: 'cartLicensePleskOptionsPOST', action: 'add license plesk option to cart' },
			{ name: 'Add Logs Option to Cart', value: 'cartLogsOptionsPOST', action: 'add logs option to cart' },
			{ name: 'Add Managed C M S Option to Cart', value: 'cartManagedCMSOptionsPOST', action: 'add managed c m s option to cart' },
			{ name: 'Add Managed Services Option to Cart (Service)', value: 'cartManagedServicesOptionsPOST', action: 'add managed services option to cart (Service)' },
			{ name: 'Add Metrics Option to Cart', value: 'cartMetricsOptionsPOST', action: 'add metrics option to cart' },
			{ name: 'Add Microsoft Option to Cart', value: 'cartMicrosoftOptionsPOST', action: 'add microsoft option to cart' },
			{ name: 'Add Nasha Option to Cart', value: 'cartNashaOptionsPOST', action: 'add nasha option to cart' },
			{ name: 'Add Netapp Option to Cart', value: 'cartNetappOptionsPOST', action: 'add netapp option to cart' },
			{ name: 'Add Nutanix Option to Cart', value: 'cartNutanixOptionsPOST', action: 'add nutanix option to cart' },
			{ name: 'Add Office Prepaid Option to Cart', value: 'cartOfficePrepaidOptionsPOST', action: 'add office prepaid option to cart' },
			{ name: 'Add Office365 Option to Cart', value: 'cartOffice365OptionsPOST', action: 'add office365 option to cart' },
			{ name: 'Add Office365 Prepaid Option to Cart', value: 'cartOffice365PrepaidOptionsPOST', action: 'add office365 prepaid option to cart' },
			{ name: 'Add Otb Option to Cart', value: 'cartOtbOptionsPOST', action: 'add otb option to cart' },
			{ name: 'Add Otb Reseller Option to Cart', value: 'cartOtbResellerOptionsPOST', action: 'add otb reseller option to cart' },
			{ name: 'Add Packs Professional Services Option to Cart (Service)', value: 'cartPacksProfessionalServicesOptionsPOST', action: 'add packs professional services option to cart (Service)' },
			{ name: 'Add Private Cloud C D I Option to Cart', value: 'cartPrivateCloudCDIOptionsPOST', action: 'add private cloud c d i option to cart' },
			{ name: 'Add Private Cloud D C Option to Cart', value: 'cartPrivateCloudDCOptionsPOST', action: 'add private cloud d c option to cart' },
			{ name: 'Add Private Cloud Enterprise Option to Cart', value: 'cartPrivateCloudEnterpriseOptionsPOST', action: 'add private cloud enterprise option to cart' },
			{ name: 'Add Private Cloud Option to Cart', value: 'cartPrivateCloudOptionsPOST', action: 'add private cloud option to cart' },
			{ name: 'Add Private Cloud Reseller Enterprise Option to Cart', value: 'cartPrivateCloudResellerEnterpriseOptionsPOST', action: 'add private cloud reseller enterprise option to cart' },
			{ name: 'Add Private Cloud Reseller Option to Cart', value: 'cartPrivateCloudResellerOptionsPOST', action: 'add private cloud reseller option to cart' },
			{ name: 'Add Private Cloud S D D C Option to Cart', value: 'cartPrivateCloudSDDCOptionsPOST', action: 'add private cloud s d d c option to cart' },
			{ name: 'Add Sharepoint Option to Cart', value: 'cartSharepointOptionsPOST', action: 'add sharepoint option to cart' },
			{ name: 'Add Snc Network Services Option to Cart (Service)', value: 'cartSncNetworkServicesOptionsPOST', action: 'add snc network services option to cart (Service)' },
			{ name: 'Add Ssl Comodo Option to Cart', value: 'cartSslComodoOptionsPOST', action: 'add ssl comodo option to cart' },
			{ name: 'Add Ssl Gateway Option to Cart', value: 'cartSslGatewayOptionsPOST', action: 'add ssl gateway option to cart' },
			{ name: 'Add Telephony Option to Cart', value: 'cartTelephonyOptionsPOST', action: 'add telephony option to cart' },
			{ name: 'Add Vdi Option to Cart', value: 'cartVdiOptionsPOST', action: 'add vdi option to cart' },
			{ name: 'Add Veeam Enterprise Option to Cart', value: 'cartVeeamEnterpriseOptionsPOST', action: 'add veeam enterprise option to cart' },
			{ name: 'Add Veeamcc Option to Cart', value: 'cartVeeamccOptionsPOST', action: 'add veeamcc option to cart' },
			{ name: 'Add Videocenter Option to Cart', value: 'cartVideocenterOptionsPOST', action: 'add videocenter option to cart' },
			{ name: 'Add Vmware Cloud Director Backup Option to Cart', value: 'cartVmwareCloudDirectorBackupOptionsPOST', action: 'add vmware cloud director backup option to cart' },
			{ name: 'Add Vmware Cloud Director Option to Cart', value: 'cartVmwareCloudDirectorOptionsPOST', action: 'add vmware cloud director option to cart' },
			{ name: 'Add Vps Option to Cart', value: 'cartVpsOptionsPOST', action: 'add vps option to cart' },
			{ name: 'Add Vrack Option to Cart', value: 'cartVrackOptionsPOST', action: 'add vrack option to cart' },
			{ name: 'Add Web Hosting Option to Cart', value: 'cartWebHostingOptionsPOST', action: 'add web hosting option to cart' },
			{ name: 'Add Xdsl Option to Cart', value: 'cartXdslOptionsPOST', action: 'add xdsl option to cart' },
			{ name: 'Add Zimbra Option to Cart', value: 'cartZimbraOptionsPOST', action: 'add zimbra option to cart' },
			{ name: 'Cart Assign', value: 'cartAssignPost', action: 'Assign a cart to your account' },
			{ name: 'Cart Checkout Get', value: 'cartCheckoutGet', action: 'Simulate cart checkout' },
			{ name: 'Cart Checkout Post', value: 'cartCheckoutPost', action: 'Execute cart checkout' },
			{ name: 'Cart Coupon Create', value: 'cartCouponCreatePost', action: 'Create a coupon for a cart' },
			{ name: 'Cart Coupon Delete', value: 'cartCouponDelete', action: 'Delete a coupon from cart' },
			{ name: 'Cart Coupon List', value: 'cartCouponListGet', action: 'List coupons for a cart' },
			{ name: 'Cart Create', value: 'cartCreatePost', action: 'Create a new cart' },
			{ name: 'Cart Delete', value: 'cartDeleteDelete', action: 'Delete a cart' },
			{ name: 'Cart Get', value: 'cartGetGet', action: 'Get cart details' },
			{ name: 'Cart Item Configuration Create', value: 'cartItemConfigurationCreatePost', action: 'Create a configuration for a cart item' },
			{ name: 'Cart Item Configuration Delete', value: 'cartItemConfigurationDeleteDelete', action: 'Delete a cart item configuration' },
			{ name: 'Cart Item Configuration Get', value: 'cartItemConfigurationGetGet', action: 'Get a cart item configuration' },
			{ name: 'Cart Item Configuration List', value: 'cartItemConfigurationListGet', action: 'List configurations for a cart item' },
			{ name: 'Cart Item Configuration Update', value: 'cartItemConfigurationUpdatePut', action: 'Update a cart item configuration' },
			{ name: 'Cart Item Delete', value: 'cartItemDeleteDelete', action: 'Delete a cart item' },
			{ name: 'Cart Item Get', value: 'cartItemGetGet', action: 'Get a cart item' },
			{ name: 'Cart Item List', value: 'cartItemListGet', action: 'List items in a cart' },
			{ name: 'Cart Item Required Configuration List', value: 'cartItemRequiredConfigurationListGet', action: 'List required configurations for a cart item' },
			{ name: 'Cart Item Update', value: 'cartItemUpdatePut', action: 'Update a cart item' },
			{ name: 'Cart List', value: 'cartListGet', action: 'List all carts' },
			{ name: 'Cart Summary Get', value: 'cartSummaryGet', action: 'Get cart summary' },
			{ name: 'Cart Support Create', value: 'cartSupportCreatePost', action: 'Create support for a cart' },
			{ name: 'Cart Support List', value: 'cartSupportListGet', action: 'List supports for a cart' },
			{ name: 'Cart Update', value: 'cartUpdatePut', action: 'Update a cart' },
			{ name: 'Catalog Public Get', value: 'catalogPublicGet', action: 'Get catalog public products' },
			{ name: 'Catalog Public Options Get', value: 'catalogPublicOptionsGet', action: 'Get catalog public product options' },
			{ name: 'Cloud Project Create', value: 'cloudprojectCreatePost', action: 'Create cloud project' },
			{ name: 'Cloud Project Get', value: 'cloudprojectGet', action: 'Get cloud project' },
			{ name: 'Cloud Project List', value: 'cloudprojectListGet', action: 'List cloud projects' },
			{ name: 'Create License Hycu', value: 'cartLicenseHycuPOST', action: 'Create License Hycu' },
			{ name: 'Create License Plesk', value: 'cartLicensePleskPOST', action: 'Create License Plesk' },
			{ name: 'Create License Sql Server', value: 'cartLicenseSqlServerPOST', action: 'Create License Sql Server' },
			{ name: 'Create License Windows', value: 'cartLicenseWindowsPOST', action: 'Create License Windows' },
			{ name: 'Create Licensec Panel', value: 'cartLicensecPanelPOST', action: 'Create Licensec Panel' },
			{ name: 'Create Logs', value: 'cartLogsPOST', action: 'Create Logs' },
			{ name: 'Create Managed C M S', value: 'cartManagedCMSPOST', action: 'Create Managed C M S' },
			{ name: 'Create Managed Services', value: 'cartManagedServicesPOST', action: 'Create Managed Services' },
			{ name: 'Create Metrics', value: 'cartMetricsPOST', action: 'Create Metrics' },
			{ name: 'Create Microsoft', value: 'cartMicrosoftPOST', action: 'Create Microsoft' },
			{ name: 'Create Nasha', value: 'cartNashaPOST', action: 'Create Nasha' },
			{ name: 'Create Netapp', value: 'cartNetappPOST', action: 'Create Netapp' },
			{ name: 'Create Nutanix', value: 'cartNutanixPOST', action: 'Create Nutanix' },
			{ name: 'Create Office Prepaid', value: 'cartOfficePrepaidPOST', action: 'Create Office Prepaid' },
			{ name: 'Create Office365', value: 'cartOffice365POST', action: 'Create Office365' },
			{ name: 'Create Office365 Prepaid', value: 'cartOffice365PrepaidPOST', action: 'Create Office365 Prepaid' },
			{ name: 'Create Okms', value: 'cartOkmsPOST', action: 'Create Okms' },
			{ name: 'Create Otb', value: 'cartOtbPOST', action: 'Create Otb' },
			{ name: 'Create Otb Reseller', value: 'cartOtbResellerPOST', action: 'Create Otb Reseller' },
			{ name: 'Create Ovh Cloud Connect', value: 'cartOvhCloudConnectPOST', action: 'Create Ovh Cloud Connect' },
			{ name: 'Create Paasmon', value: 'cartPaasmonPOST', action: 'Create Paasmon' },
			{ name: 'Create Packs Professional Services', value: 'cartPacksProfessionalServicesPOST', action: 'Create Packs Professional Services' },
			{ name: 'Create Power Hosting', value: 'cartPowerHostingPOST', action: 'Create Power Hosting' },
			{ name: 'Create Private Cloud', value: 'cartPrivateCloudPOST', action: 'Create Private Cloud' },
			{ name: 'Create Private Cloud C D I', value: 'cartPrivateCloudCDIPOST', action: 'Create Private Cloud C D I' },
			{ name: 'Create Private Cloud D C', value: 'cartPrivateCloudDCPOST', action: 'Create Private Cloud D C' },
			{ name: 'Create Private Cloud Enterprise', value: 'cartPrivateCloudEnterprisePOST', action: 'Create Private Cloud Enterprise' },
			{ name: 'Create Private Cloud Reseller', value: 'cartPrivateCloudResellerPOST', action: 'Create Private Cloud Reseller' },
			{ name: 'Create Private Cloud Reseller Enterprise', value: 'cartPrivateCloudResellerEnterprisePOST', action: 'Create Private Cloud Reseller Enterprise' },
			{ name: 'Create Private Cloud S D D C', value: 'cartPrivateCloudSDDCPOST', action: 'Create Private Cloud S D D C' },
			{ name: 'Create Private S Q L', value: 'cartPrivateSQLPOST', action: 'Create Private S Q L' },
			{ name: 'Create Reseller', value: 'cartResellerPOST', action: 'Create Reseller' },
			{ name: 'Create Sharepoint', value: 'cartSharepointPOST', action: 'Create Sharepoint' },
			{ name: 'Create Sms', value: 'cartSmsPOST', action: 'Create Sms' },
			{ name: 'Create Snc Network Services', value: 'cartSncNetworkServicesPOST', action: 'Create Snc Network Services' },
			{ name: 'Create Ssl Comodo', value: 'cartSslComodoPOST', action: 'Create Ssl Comodo' },
			{ name: 'Create Ssl Gateway', value: 'cartSslGatewayPOST', action: 'Create Ssl Gateway' },
			{ name: 'Create Telephony', value: 'cartTelephonyPOST', action: 'Create Telephony' },
			{ name: 'Create Vdi', value: 'cartVdiPOST', action: 'Create Vdi' },
			{ name: 'Create Veeam Enterprise', value: 'cartVeeamEnterprisePOST', action: 'Create Veeam Enterprise' },
			{ name: 'Create Veeamcc', value: 'cartVeeamccPOST', action: 'Create Veeamcc' },
			{ name: 'Create Videocenter', value: 'cartVideocenterPOST', action: 'Create Videocenter' },
			{ name: 'Create Vmware Cloud Director', value: 'cartVmwareCloudDirectorPOST', action: 'Create Vmware Cloud Director' },
			{ name: 'Create Vmware Cloud Director Backup', value: 'cartVmwareCloudDirectorBackupPOST', action: 'Create Vmware Cloud Director Backup' },
			{ name: 'Create Vps', value: 'cartVpsPOST', action: 'Create Vps' },
			{ name: 'Create Vrack', value: 'cartVrackPOST', action: 'Create Vrack' },
			{ name: 'Create Vrack Reseller', value: 'cartVrackResellerPOST', action: 'Create Vrack Reseller' },
			{ name: 'Create Vrack Services', value: 'cartVrackServicesPOST', action: 'Create Vrack Services' },
			{ name: 'Create Web Hosting', value: 'cartWebHostingPOST', action: 'Create Web Hosting' },
			{ name: 'Create Xdsl', value: 'cartXdslPOST', action: 'Create Xdsl' },
			{ name: 'Create Zimbra', value: 'cartZimbraPOST', action: 'Create Zimbra' },
			{ name: 'Domain Get', value: 'domainGet', action: 'Get domain catalog' },
			{ name: 'Domain Options Get', value: 'domainOptionsGet', action: 'Get domain options' },
			{ name: 'Eco Get', value: 'ecoGet', action: 'Get eco catalog' },
			{ name: 'Eco Options Get', value: 'ecoOptionsGet', action: 'Get eco options' },
			{ name: 'Email Exchange Account Get', value: 'emailexchangeAccountGet', action: 'Get exchange account' },
			{ name: 'Email Exchange Account Upgrade', value: 'emailexchangeAccountUpgradeCreatePost', action: 'Upgrade exchange account' },
			{ name: 'Email Exchange Disk Space', value: 'emailexchangeDiskSpaceCreatePost', action: 'Configure disk space' },
			{ name: 'Email Exchange Organization List', value: 'emailexchangeOrganizationListGet', action: 'List exchange organizations' },
			{ name: 'Email Exchange Outlook', value: 'emailexchangeOutlookCreatePost', action: 'Configure outlook' },
			{ name: 'Email Exchange Service Create', value: 'emailexchangeServiceCreatePost', action: 'Create exchange service' },
			{ name: 'Email Exchange Service Get', value: 'emailexchangeServiceGet', action: 'Get exchange services' },
			{ name: 'Email Exchange Upgrade', value: 'emailexchangeUpgradeCreatePost', action: 'Upgrade exchange' },
			{ name: 'Email Pro Organization Create', value: 'emailproOrganizationCreatePost', action: 'Create pro organization' },
			{ name: 'Email Pro Organization List', value: 'emailproOrganizationListGet', action: 'List pro organizations' },
			{ name: 'EmailDomain Get', value: 'emailDomainGet', action: 'Get emailDomain catalog' },
			{ name: 'EmailDomain Options Get', value: 'emailDomainOptionsGet', action: 'Get emailDomain options' },
			{ name: 'Emailpro Get', value: 'emailproGet', action: 'Get emailpro catalog' },
			{ name: 'Emailpro Options Get', value: 'emailproOptionsGet', action: 'Get emailpro options' },
			{ name: 'Exchange Get', value: 'exchangeGet', action: 'Get exchange catalog' },
			{ name: 'Exchange Options Get', value: 'exchangeOptionsGet', action: 'Get exchange options' },
			{ name: 'Freefax Create', value: 'freefaxCreatePost', action: 'Create freefax order' },
			{ name: 'Freefax Number Get', value: 'freefaxnumberGet', action: 'Get freefax number' },
			{ name: 'Freefax Organization List', value: 'freefaxorganizationListGet', action: 'List freefax organizations' },
			{ name: 'Get License Plesk Options', value: 'cartLicensePleskOptionsGET', action: 'get license plesk options' },
			{ name: 'Get Logs Options', value: 'cartLogsOptionsGET', action: 'get logs options' },
			{ name: 'Get Managed C M S Options', value: 'cartManagedCMSOptionsGET', action: 'get managed c m s options' },
			{ name: 'Get Managed Services Options (Service)', value: 'cartManagedServicesOptionsGET', action: 'get managed services options (Service)' },
			{ name: 'Get Metrics Options', value: 'cartMetricsOptionsGET', action: 'get metrics options' },
			{ name: 'Get Microsoft Options', value: 'cartMicrosoftOptionsGET', action: 'get microsoft options' },
			{ name: 'Get Nasha Options', value: 'cartNashaOptionsGET', action: 'get nasha options' },
			{ name: 'Get Netapp Options', value: 'cartNetappOptionsGET', action: 'get netapp options' },
			{ name: 'Get Nutanix Options', value: 'cartNutanixOptionsGET', action: 'get nutanix options' },
			{ name: 'Get Office Prepaid Options', value: 'cartOfficePrepaidOptionsGET', action: 'get office prepaid options' },
			{ name: 'Get Office365 Options', value: 'cartOffice365OptionsGET', action: 'get office365 options' },
			{ name: 'Get Office365 Prepaid Options', value: 'cartOffice365PrepaidOptionsGET', action: 'get office365 prepaid options' },
			{ name: 'Get Otb Options', value: 'cartOtbOptionsGET', action: 'get otb options' },
			{ name: 'Get Otb Reseller Options', value: 'cartOtbResellerOptionsGET', action: 'get otb reseller options' },
			{ name: 'Get Packs Professional Services Options (Service)', value: 'cartPacksProfessionalServicesOptionsGET', action: 'get packs professional services options (Service)' },
			{ name: 'Get Private Cloud C D I Options', value: 'cartPrivateCloudCDIOptionsGET', action: 'get private cloud c d i options' },
			{ name: 'Get Private Cloud D C Options', value: 'cartPrivateCloudDCOptionsGET', action: 'get private cloud d c options' },
			{ name: 'Get Private Cloud Enterprise Options', value: 'cartPrivateCloudEnterpriseOptionsGET', action: 'get private cloud enterprise options' },
			{ name: 'Get Private Cloud Options', value: 'cartPrivateCloudOptionsGET', action: 'get private cloud options' },
			{ name: 'Get Private Cloud Reseller Enterprise Options', value: 'cartPrivateCloudResellerEnterpriseOptionsGET', action: 'get private cloud reseller enterprise options' },
			{ name: 'Get Private Cloud Reseller Options', value: 'cartPrivateCloudResellerOptionsGET', action: 'get private cloud reseller options' },
			{ name: 'Get Private Cloud S D D C Options', value: 'cartPrivateCloudSDDCOptionsGET', action: 'get private cloud s d d c options' },
			{ name: 'Get Sharepoint Options', value: 'cartSharepointOptionsGET', action: 'get sharepoint options' },
			{ name: 'Get Snc Network Services Options (Service)', value: 'cartSncNetworkServicesOptionsGET', action: 'get snc network services options (Service)' },
			{ name: 'Get Ssl Comodo Options', value: 'cartSslComodoOptionsGET', action: 'get ssl comodo options' },
			{ name: 'Get Ssl Gateway Options', value: 'cartSslGatewayOptionsGET', action: 'get ssl gateway options' },
			{ name: 'Get Telephony Options', value: 'cartTelephonyOptionsGET', action: 'get telephony options' },
			{ name: 'Get Vdi Options', value: 'cartVdiOptionsGET', action: 'get vdi options' },
			{ name: 'Get Veeam Enterprise Options', value: 'cartVeeamEnterpriseOptionsGET', action: 'get veeam enterprise options' },
			{ name: 'Get Veeamcc Options', value: 'cartVeeamccOptionsGET', action: 'get veeamcc options' },
			{ name: 'Get Videocenter Options', value: 'cartVideocenterOptionsGET', action: 'get videocenter options' },
			{ name: 'Get Vmware Cloud Director Backup Options', value: 'cartVmwareCloudDirectorBackupOptionsGET', action: 'get vmware cloud director backup options' },
			{ name: 'Get Vmware Cloud Director Options', value: 'cartVmwareCloudDirectorOptionsGET', action: 'get vmware cloud director options' },
			{ name: 'Get Vps Options', value: 'cartVpsOptionsGET', action: 'get vps options' },
			{ name: 'Get Vrack Options', value: 'cartVrackOptionsGET', action: 'get vrack options' },
			{ name: 'Get Web Hosting Options', value: 'cartWebHostingOptionsGET', action: 'get web hosting options' },
			{ name: 'Get Xdsl Options', value: 'cartXdslOptionsGET', action: 'get xdsl options' },
			{ name: 'Get Zimbra Options', value: 'cartZimbraOptionsGET', action: 'get zimbra options' },
			{ name: 'IpLoadbalancing Get', value: 'ipLoadbalancingGet', action: 'Get ipLoadbalancing catalog' },
			{ name: 'IpLoadbalancing Options Get', value: 'ipLoadbalancingOptionsGet', action: 'Get ipLoadbalancing options' },
			{ name: 'License Office List', value: 'licenseofficeListGet', action: 'List office license services' },
			{ name: 'License Office New Create', value: 'licenseofficeNewCreatePost', action: 'Create office new order' },
			{ name: 'License Office New Duration Get', value: 'licenseofficeNewDurationGet', action: 'Get office new prices' },
			{ name: 'License Office New List', value: 'licenseofficeNewListGet', action: 'Get office new durations' },
			{ name: 'License Office Service Get', value: 'licenseofficeServiceGet', action: 'Get office service options' },
			{ name: 'License Office Service Upgrade Create (Service)', value: 'licenseofficeServiceUpgradeCreatePost', action: 'license office service upgrade create (Service)' },
			{ name: 'License Office Service Upgrade Duration Get (Service)', value: 'licenseofficeServiceUpgradeDurationGet', action: 'license office service upgrade duration get (Service)' },
			{ name: 'License Office Service Upgrade List (List)', value: 'licenseofficeServiceUpgradeListGet', action: 'license office service upgrade list (List)' },
			{ name: 'License Plesk List', value: 'licensepleskListGet', action: 'List plesk license services' },
			{ name: 'License Plesk New Create', value: 'licensepleskNewCreatePost', action: 'Create plesk new order' },
			{ name: 'License Plesk New Duration Get', value: 'licensepleskNewDurationGet', action: 'Get plesk new prices' },
			{ name: 'License Plesk New List', value: 'licensepleskNewListGet', action: 'Get plesk new durations' },
			{ name: 'License Plesk Service Get', value: 'licensepleskServiceGet', action: 'Get plesk service options' },
			{ name: 'License Plesk Service Upgrade Create (Service)', value: 'licensepleskServiceUpgradeCreatePost', action: 'license plesk service upgrade create (Service)' },
			{ name: 'License Plesk Service Upgrade Duration Get (Service)', value: 'licensepleskServiceUpgradeDurationGet', action: 'license plesk service upgrade duration get (Service)' },
			{ name: 'License Plesk Service Upgrade List (List)', value: 'licensepleskServiceUpgradeListGet', action: 'license plesk service upgrade list (List)' },
			{ name: 'License Sqlserver List', value: 'licensesqlserverListGet', action: 'List sqlserver license services' },
			{ name: 'License Sqlserver New Create', value: 'licensesqlserverNewCreatePost', action: 'Create sqlserver new order' },
			{ name: 'License Sqlserver New Duration Get', value: 'licensesqlserverNewDurationGet', action: 'Get sqlserver new prices' },
			{ name: 'License Sqlserver New List', value: 'licensesqlserverNewListGet', action: 'Get sqlserver new durations' },
			{ name: 'License Sqlserver Service Get', value: 'licensesqlserverServiceGet', action: 'Get sqlserver service options' },
			{ name: 'License Sqlserver Service Upgrade Create (Service)', value: 'licensesqlserverServiceUpgradeCreatePost', action: 'license sqlserver service upgrade create (Service)' },
			{ name: 'License Sqlserver Service Upgrade Duration Get (Service)', value: 'licensesqlserverServiceUpgradeDurationGet', action: 'license sqlserver service upgrade duration get (Service)' },
			{ name: 'License Sqlserver Service Upgrade List (List)', value: 'licensesqlserverServiceUpgradeListGet', action: 'license sqlserver service upgrade list (List)' },
			{ name: 'License Windows List', value: 'licensewindowsListGet', action: 'List windows license services' },
			{ name: 'License Windows New Create', value: 'licensewindowsNewCreatePost', action: 'Create windows new order' },
			{ name: 'License Windows New Duration Get', value: 'licensewindowsNewDurationGet', action: 'Get windows new prices' },
			{ name: 'License Windows New List', value: 'licensewindowsNewListGet', action: 'Get windows new durations' },
			{ name: 'License Windows Service Get', value: 'licensewindowsServiceGet', action: 'Get windows service options' },
			{ name: 'License Windows Service Upgrade Create (Service)', value: 'licensewindowsServiceUpgradeCreatePost', action: 'license windows service upgrade create (Service)' },
			{ name: 'License Windows Service Upgrade Duration Get (Service)', value: 'licensewindowsServiceUpgradeDurationGet', action: 'license windows service upgrade duration get (Service)' },
			{ name: 'License Windows Service Upgrade List (List)', value: 'licensewindowsServiceUpgradeListGet', action: 'license windows service upgrade list (List)' },
			{ name: 'License cPanel List', value: 'licensecPanelListGet', action: 'List cPanel license services' },
			{ name: 'License cPanel New Create', value: 'licensecPanelNewCreatePost', action: 'Create cPanel new order' },
			{ name: 'License cPanel New Duration Get', value: 'licensecPanelNewDurationGet', action: 'Get cPanel new prices' },
			{ name: 'License cPanel New List', value: 'licensecPanelNewListGet', action: 'Get cPanel new durations' },
			{ name: 'License cPanel Service Get', value: 'licensecPanelServiceGet', action: 'Get cPanel service options' },
			{ name: 'License cPanel Service Upgrade Create (Service)', value: 'licensecPanelServiceUpgradeCreatePost', action: 'license cpanel service upgrade create (Service)' },
			{ name: 'License cPanel Service Upgrade Duration Get (Service)', value: 'licensecPanelServiceUpgradeDurationGet', action: 'license cpanel service upgrade duration get (Service)' },
			{ name: 'License cPanel Service Upgrade List (List)', value: 'licensecPanelServiceUpgradeListGet', action: 'license cpanel service upgrade list (List)' },
			{ name: 'LicenseHycu Get', value: 'licenseHycuGet', action: 'Get licenseHycu catalog' },
			{ name: 'LicenseHycu Options Get', value: 'licenseHycuOptionsGet', action: 'Get licenseHycu options' },
			{ name: 'LicensePlesk Get', value: 'licensePleskGet', action: 'Get licensePlesk catalog' },
			{ name: 'LicensePlesk Options Get', value: 'licensePleskOptionsGet', action: 'Get licensePlesk options' },
			{ name: 'LicenseSqlServer Get', value: 'licenseSqlServerGet', action: 'Get licenseSqlServer catalog' },
			{ name: 'LicenseSqlServer Options Get', value: 'licenseSqlServerOptionsGet', action: 'Get licenseSqlServer options' },
			{ name: 'LicenseWindows Get', value: 'licenseWindowsGet', action: 'Get licenseWindows catalog' },
			{ name: 'LicenseWindows Options Get', value: 'licenseWindowsOptionsGet', action: 'Get licenseWindows options' },
			{ name: 'LicensecPanel Get', value: 'licensecPanelGet', action: 'Get licensecPanel catalog' },
			{ name: 'LicensecPanel Options Get', value: 'licensecPanelOptionsGet', action: 'Get licensecPanel options' },
			{ name: 'List License Hycu Offers', value: 'cartLicenseHycuGET', action: 'List License Hycu offers' },
			{ name: 'List License Plesk Offers', value: 'cartLicensePleskGET', action: 'List License Plesk offers' },
			{ name: 'List License Sql Server Offers', value: 'cartLicenseSqlServerGET', action: 'List License Sql Server offers' },
			{ name: 'List License Windows Offers', value: 'cartLicenseWindowsGET', action: 'List License Windows offers' },
			{ name: 'List Licensec Panel Offers', value: 'cartLicensecPanelGET', action: 'List Licensec Panel offers' },
			{ name: 'List Logs Offers', value: 'cartLogsGET', action: 'List Logs offers' },
			{ name: 'List Managed C M S Offers', value: 'cartManagedCMSGET', action: 'List Managed C M S offers' },
			{ name: 'List Managed Services Offers', value: 'cartManagedServicesGET', action: 'List Managed Services offers' },
			{ name: 'List Metrics Offers', value: 'cartMetricsGET', action: 'List Metrics offers' },
			{ name: 'List Microsoft Offers', value: 'cartMicrosoftGET', action: 'List Microsoft offers' },
			{ name: 'List Nasha Offers', value: 'cartNashaGET', action: 'List Nasha offers' },
			{ name: 'List Netapp Offers', value: 'cartNetappGET', action: 'List Netapp offers' },
			{ name: 'List Nutanix Offers', value: 'cartNutanixGET', action: 'List Nutanix offers' },
			{ name: 'List Office Prepaid Offers', value: 'cartOfficePrepaidGET', action: 'List Office Prepaid offers' },
			{ name: 'List Office365 Offers', value: 'cartOffice365GET', action: 'List Office365 offers' },
			{ name: 'List Office365 Prepaid Offers', value: 'cartOffice365PrepaidGET', action: 'List Office365 Prepaid offers' },
			{ name: 'List Okms Offers', value: 'cartOkmsGET', action: 'List Okms offers' },
			{ name: 'List Otb Offers', value: 'cartOtbGET', action: 'List Otb offers' },
			{ name: 'List Otb Reseller Offers', value: 'cartOtbResellerGET', action: 'List Otb Reseller offers' },
			{ name: 'List Ovh Cloud Connect Offers', value: 'cartOvhCloudConnectGET', action: 'List Ovh Cloud Connect offers' },
			{ name: 'List Paasmon Offers', value: 'cartPaasmonGET', action: 'List Paasmon offers' },
			{ name: 'List Packs Professional Services Offers', value: 'cartPacksProfessionalServicesGET', action: 'List Packs Professional Services offers' },
			{ name: 'List Power Hosting Offers', value: 'cartPowerHostingGET', action: 'List Power Hosting offers' },
			{ name: 'List Private Cloud C D I Offers', value: 'cartPrivateCloudCDIGET', action: 'List Private Cloud C D I offers' },
			{ name: 'List Private Cloud D C Offers', value: 'cartPrivateCloudDCGET', action: 'List Private Cloud D C offers' },
			{ name: 'List Private Cloud Enterprise Offers', value: 'cartPrivateCloudEnterpriseGET', action: 'List Private Cloud Enterprise offers' },
			{ name: 'List Private Cloud Offers', value: 'cartPrivateCloudGET', action: 'List Private Cloud offers' },
			{ name: 'List Private Cloud Reseller Enterprise Offers', value: 'cartPrivateCloudResellerEnterpriseGET', action: 'List Private Cloud Reseller Enterprise offers' },
			{ name: 'List Private Cloud Reseller Offers', value: 'cartPrivateCloudResellerGET', action: 'List Private Cloud Reseller offers' },
			{ name: 'List Private Cloud S D D C Offers', value: 'cartPrivateCloudSDDCGET', action: 'List Private Cloud S D D C offers' },
			{ name: 'List Private S Q L Offers', value: 'cartPrivateSQLGET', action: 'List Private S Q L offers' },
			{ name: 'List Reseller Offers', value: 'cartResellerGET', action: 'List Reseller offers' },
			{ name: 'List Sharepoint Offers', value: 'cartSharepointGET', action: 'List Sharepoint offers' },
			{ name: 'List Sms Offers', value: 'cartSmsGET', action: 'List Sms offers' },
			{ name: 'List Snc Network Services Offers', value: 'cartSncNetworkServicesGET', action: 'List Snc Network Services offers' },
			{ name: 'List Ssl Comodo Offers', value: 'cartSslComodoGET', action: 'List Ssl Comodo offers' },
			{ name: 'List Ssl Gateway Offers', value: 'cartSslGatewayGET', action: 'List Ssl Gateway offers' },
			{ name: 'List Telephony Offers', value: 'cartTelephonyGET', action: 'List Telephony offers' },
			{ name: 'List Vdi Offers', value: 'cartVdiGET', action: 'List Vdi offers' },
			{ name: 'List Veeam Enterprise Offers', value: 'cartVeeamEnterpriseGET', action: 'List Veeam Enterprise offers' },
			{ name: 'List Veeamcc Offers', value: 'cartVeeamccGET', action: 'List Veeamcc offers' },
			{ name: 'List Videocenter Offers', value: 'cartVideocenterGET', action: 'List Videocenter offers' },
			{ name: 'List Vmware Cloud Director Backup Offers', value: 'cartVmwareCloudDirectorBackupGET', action: 'List Vmware Cloud Director Backup offers' },
			{ name: 'List Vmware Cloud Director Offers', value: 'cartVmwareCloudDirectorGET', action: 'List Vmware Cloud Director offers' },
			{ name: 'List Vps Offers', value: 'cartVpsGET', action: 'List Vps offers' },
			{ name: 'List Vrack Offers', value: 'cartVrackGET', action: 'List Vrack offers' },
			{ name: 'List Vrack Reseller Offers', value: 'cartVrackResellerGET', action: 'List Vrack Reseller offers' },
			{ name: 'List Vrack Services Offers', value: 'cartVrackServicesGET', action: 'List Vrack Services offers' },
			{ name: 'List Web Hosting Offers', value: 'cartWebHostingGET', action: 'List Web Hosting offers' },
			{ name: 'List Xdsl Offers', value: 'cartXdslGET', action: 'List Xdsl offers' },
			{ name: 'List Zimbra Offers', value: 'cartZimbraGET', action: 'List Zimbra offers' },
			{ name: 'Logs Get', value: 'logsGet', action: 'Get logs catalog' },
			{ name: 'Logs Options Get', value: 'logsOptionsGet', action: 'Get logs options' },
			{ name: 'Nasha Get', value: 'nashaGet', action: 'Get nasha catalog' },
			{ name: 'Nasha Options Get', value: 'nashaOptionsGet', action: 'Get nasha options' },
			{ name: 'Netapp Get', value: 'netappGet', action: 'Get netapp catalog' },
			{ name: 'Netapp Options Get', value: 'netappOptionsGet', action: 'Get netapp options' },
			{ name: 'Nutanix Get', value: 'nutanixGet', action: 'Get nutanix catalog' },
			{ name: 'Nutanix Options Get', value: 'nutanixOptionsGet', action: 'Get nutanix options' },
			{ name: 'Office365Prepaid Get', value: 'office365PrepaidGet', action: 'Get office365Prepaid catalog' },
			{ name: 'Office365Prepaid Options Get', value: 'office365PrepaidOptionsGet', action: 'Get office365Prepaid options' },
			{ name: 'OfficePrepaid Get', value: 'officePrepaidGet', action: 'Get officePrepaid catalog' },
			{ name: 'OfficePrepaid Options Get', value: 'officePrepaidOptionsGet', action: 'Get officePrepaid options' },
			{ name: 'Okms Get', value: 'okmsGet', action: 'Get okms catalog' },
			{ name: 'Okms Options Get', value: 'okmsOptionsGet', action: 'Get okms options' },
			{ name: 'OverTheBox Create', value: 'overTheBoxCreatePost', action: 'Create overTheBox order' },
			{ name: 'OverTheBox Device Get', value: 'overTheBoxDeviceGet', action: 'Get overTheBox device' },
			{ name: 'OverTheBox Get', value: 'overTheBoxGet', action: 'Get overTheBox order' },
			{ name: 'OverTheBox List', value: 'overTheBoxListGet', action: 'List overTheBox devices' },
			{ name: 'OverTheBox Order Create', value: 'overTheBoxOrderCreatePost', action: 'Create overTheBox order' },
			{ name: 'OvhCloudConnect Get', value: 'ovhCloudConnectGet', action: 'Get ovhCloudConnect catalog' },
			{ name: 'OvhCloudConnect Options Get', value: 'ovhCloudConnectOptionsGet', action: 'Get ovhCloudConnect options' },
			{ name: 'PacksProfessionalServices Get', value: 'packsProfessionalServicesGet', action: 'Get packsProfessionalServices catalog' },
			{ name: 'PacksProfessionalServices Options Get', value: 'packsProfessionalServicesOptionsGet', action: 'Get packsProfessionalServices options' },
			{ name: 'PrivateCloud Get', value: 'privateCloudGet', action: 'Get privateCloud catalog' },
			{ name: 'PrivateCloud Options Get', value: 'privateCloudOptionsGet', action: 'Get privateCloud options' },
			{ name: 'PrivateCloudEnterprise Get', value: 'privateCloudEnterpriseGet', action: 'Get privateCloudEnterprise catalog' },
			{ name: 'PrivateCloudEnterprise Options Get', value: 'privateCloudEnterpriseOptionsGet', action: 'Get privateCloudEnterprise options' },
			{ name: 'PrivateSQL Get', value: 'privateSQLGet', action: 'Get privateSQL catalog' },
			{ name: 'PrivateSQL Options Get', value: 'privateSQLOptionsGet', action: 'Get privateSQL options' },
			{ name: 'SMS Create', value: 'smsCreatePost', action: 'Create sms order' },
			{ name: 'SMS List', value: 'smsListGet', action: 'List sms products' },
			{ name: 'SMS Product Create', value: 'smsProductCreatePost', action: 'Create sms product order' },
			{ name: 'SMS Product Duration Get', value: 'smsProductDurationGet', action: 'Get sms product prices' },
			{ name: 'SMS Product Get', value: 'smsProductGet', action: 'Get sms product' },
			{ name: 'SaaS Csp2 Create', value: 'saascsp2CreatePost', action: 'Create saas csp2 order' },
			{ name: 'SaaS Csp2 List', value: 'saascsp2ListGet', action: 'List saas csp2 products' },
			{ name: 'SaaS Csp2 Product Get', value: 'saascsp2ProductGet', action: 'Get saas csp2 product' },
			{ name: 'SslGateway Get', value: 'sslGatewayGet', action: 'Get sslGateway catalog' },
			{ name: 'SslGateway Options Get', value: 'sslGatewayOptionsGet', action: 'Get sslGateway options' },
			{ name: 'Telephony Get', value: 'telephonyGet', action: 'Get telephony catalog' },
			{ name: 'Telephony Options Get', value: 'telephonyOptionsGet', action: 'Get telephony options' },
			{ name: 'VPS Snapshot Create', value: 'vpssnapshotCreatePost', action: 'Create snapshot order' },
			{ name: 'VPS Snapshot Duration Get', value: 'vpssnapshotDurationGet', action: 'Get snapshot prices' },
			{ name: 'VPS Snapshot List', value: 'vpssnapshotListGet', action: 'List snapshot options' },
			{ name: 'VPS additionalDisk Create', value: 'vpsadditionalDiskCreatePost', action: 'Create additionalDisk order' },
			{ name: 'VPS additionalDisk Duration Get', value: 'vpsadditionalDiskDurationGet', action: 'Get additionalDisk prices' },
			{ name: 'VPS additionalDisk List', value: 'vpsadditionalDiskListGet', action: 'List additionalDisk options' },
			{ name: 'VPS automatedBackup Create', value: 'vpsautomatedBackupCreatePost', action: 'Create automatedBackup order' },
			{ name: 'VPS automatedBackup Duration Get', value: 'vpsautomatedBackupDurationGet', action: 'Get automatedBackup prices' },
			{ name: 'VPS automatedBackup List', value: 'vpsautomatedBackupListGet', action: 'List automatedBackup options' },
			{ name: 'Veeam Cloud Connect Config Create', value: 'veeamCloudConnectConfigCreatePost', action: 'Create veeam config' },
			{ name: 'Veeam Cloud Connect Create', value: 'veeamCloudConnectCreatePost', action: 'Create veeam project' },
			{ name: 'Veeam Cloud Connect Get', value: 'veeamCloudConnectGet', action: 'Get veeam project' },
			{ name: 'Veeam Cloud Connect List', value: 'veeamCloudConnectListGet', action: 'List veeam projects' },
			{ name: 'Veeam Cloud Connect Option Create', value: 'veeamCloudConnectOptionCreatePost', action: 'Create veeam option' },
			{ name: 'VmwareCloudDirector Get', value: 'vmwareCloudDirectorGet', action: 'Get vmwareCloudDirector catalog' },
			{ name: 'VmwareCloudDirector Options Get', value: 'vmwareCloudDirectorOptionsGet', action: 'Get vmwareCloudDirector options' },
			{ name: 'VmwareCloudDirectorBackup Get', value: 'vmwareCloudDirectorBackupGet', action: 'Get vmwareCloudDirectorBackup catalog' },
			{ name: 'VmwareCloudDirectorBackup Options Get', value: 'vmwareCloudDirectorBackupOptionsGet', action: 'Get vmwareCloudDirectorBackup options' },
			{ name: 'Vps Get', value: 'vpsGet', action: 'Get vps catalog' },
			{ name: 'Vps Options Get', value: 'vpsOptionsGet', action: 'Get vps options' },
			{ name: 'WebHosting Get', value: 'webHostingGet', action: 'Get webHosting catalog' },
			{ name: 'WebHosting Options Get', value: 'webHostingOptionsGet', action: 'Get webHosting options' },
			{ name: 'WebPaaS Get', value: 'webPaaSGet', action: 'Get webPaaS catalog' },
			{ name: 'WebPaaS Options Get', value: 'webPaaSOptionsGet', action: 'Get webPaaS options' },
			{ name: 'Zimbra Get', value: 'zimbraGet', action: 'Get zimbra catalog' },
			{ name: 'Zimbra Options Get', value: 'zimbraOptionsGet', action: 'Get zimbra options' },
			{ name: 'xDSL Spare Create', value: 'xdslspareCreatePost', action: 'Create xDSL order' },
			{ name: 'xDSL Spare List', value: 'xdslspareListGet', action: 'List xDSL spare lines' },
			{ name: 'Get Upgrade Bandwidth Vrack (List)', value: 'upgradeBandwidthVrackListGET', action: 'get upgrade bandwidth vrack (List)' },
			{ name: 'Get Upgrade Bandwidth Vrack (Plan)', value: 'upgradeBandwidthVrackPlanGET', action: 'get upgrade bandwidth vrack (Plan)' },
			{ name: 'Upgrade Bandwidth Vrack (Plan)', value: 'upgradeBandwidthVrackPlanPOST', action: 'upgrade bandwidth vrack (Plan)' },
			{ name: 'Get Upgrade Bandwidth Vrack (Service)', value: 'upgradeBandwidthVrackServiceGET', action: 'get upgrade bandwidth vrack (Service)' },
			{ name: 'Get Upgrade Baremetal Private Bandwidth (List)', value: 'upgradeBaremetalPrivateBandwidthListGET', action: 'get upgrade baremetal private bandwidth (List)' },
			{ name: 'Get Upgrade Baremetal Private Bandwidth (Plan)', value: 'upgradeBaremetalPrivateBandwidthPlanGET', action: 'get upgrade baremetal private bandwidth (Plan)' },
			{ name: 'Upgrade Baremetal Private Bandwidth (Plan)', value: 'upgradeBaremetalPrivateBandwidthPlanPOST', action: 'upgrade baremetal private bandwidth (Plan)' },
			{ name: 'Get Upgrade Baremetal Private Bandwidth (Service)', value: 'upgradeBaremetalPrivateBandwidthServiceGET', action: 'get upgrade baremetal private bandwidth (Service)' },
			{ name: 'Get Upgrade Baremetal Public Bandwidth (List)', value: 'upgradeBaremetalPublicBandwidthListGET', action: 'get upgrade baremetal public bandwidth (List)' },
			{ name: 'Get Upgrade Baremetal Public Bandwidth (Plan)', value: 'upgradeBaremetalPublicBandwidthPlanGET', action: 'get upgrade baremetal public bandwidth (Plan)' },
			{ name: 'Upgrade Baremetal Public Bandwidth (Plan)', value: 'upgradeBaremetalPublicBandwidthPlanPOST', action: 'upgrade baremetal public bandwidth (Plan)' },
			{ name: 'Get Upgrade Baremetal Public Bandwidth (Service)', value: 'upgradeBaremetalPublicBandwidthServiceGET', action: 'get upgrade baremetal public bandwidth (Service)' },
			{ name: 'Get Upgrade Ceph AAS (List)', value: 'upgradeCephAASListGET', action: 'get upgrade ceph aas (List)' },
			{ name: 'Get Upgrade Ceph AAS (Plan)', value: 'upgradeCephAASPlanGET', action: 'get upgrade ceph aas (Plan)' },
			{ name: 'Upgrade Ceph AAS (Plan)', value: 'upgradeCephAASPlanPOST', action: 'upgrade ceph aas (Plan)' },
			{ name: 'Get Upgrade Ceph AAS (Service)', value: 'upgradeCephAASServiceGET', action: 'get upgrade ceph aas (Service)' },
			{ name: 'Get Upgrade Cloud DB (List)', value: 'upgradeCloudDBListGET', action: 'get upgrade cloud db (List)' },
			{ name: 'Get Upgrade Cloud DB (Plan)', value: 'upgradeCloudDBPlanGET', action: 'get upgrade cloud db (Plan)' },
			{ name: 'Upgrade Cloud DB (Plan)', value: 'upgradeCloudDBPlanPOST', action: 'upgrade cloud db (Plan)' },
			{ name: 'Get Upgrade Cloud DB (Service)', value: 'upgradeCloudDBServiceGET', action: 'get upgrade cloud db (Service)' },
			{ name: 'Get Upgrade Email Domain (List)', value: 'upgradeEmailDomainListGET', action: 'get upgrade email domain (List)' },
			{ name: 'Get Upgrade Email Domain (Plan)', value: 'upgradeEmailDomainPlanGET', action: 'get upgrade email domain (Plan)' },
			{ name: 'Upgrade Email Domain (Plan)', value: 'upgradeEmailDomainPlanPOST', action: 'upgrade email domain (Plan)' },
			{ name: 'Get Upgrade Email Domain (Service)', value: 'upgradeEmailDomainServiceGET', action: 'get upgrade email domain (Service)' },
			{ name: 'Get Upgrade IP Load Balancing (List)', value: 'upgradeIPLoadBalancingListGET', action: 'get upgrade ip load balancing (List)' },
			{ name: 'Get Upgrade IP Load Balancing (Plan)', value: 'upgradeIPLoadBalancingPlanGET', action: 'get upgrade ip load balancing (Plan)' },
			{ name: 'Upgrade IP Load Balancing (Plan)', value: 'upgradeIPLoadBalancingPlanPOST', action: 'upgrade ip load balancing (Plan)' },
			{ name: 'Get Upgrade IP Load Balancing (Service)', value: 'upgradeIPLoadBalancingServiceGET', action: 'get upgrade ip load balancing (Service)' },
			{ name: 'Get Upgrade License Hycu (List)', value: 'upgradeLicenseHycuListGET', action: 'get upgrade license hycu (List)' },
			{ name: 'Get Upgrade License Hycu (Plan)', value: 'upgradeLicenseHycuPlanGET', action: 'get upgrade license hycu (Plan)' },
			{ name: 'Upgrade License Hycu (Plan)', value: 'upgradeLicenseHycuPlanPOST', action: 'upgrade license hycu (Plan)' },
			{ name: 'Get Upgrade License Hycu (Service)', value: 'upgradeLicenseHycuServiceGET', action: 'get upgrade license hycu (Service)' },
			{ name: 'Get Upgrade License Plesk (List)', value: 'upgradeLicensePleskListGET', action: 'get upgrade license plesk (List)' },
			{ name: 'Get Upgrade License Plesk (Plan)', value: 'upgradeLicensePleskPlanGET', action: 'get upgrade license plesk (Plan)' },
			{ name: 'Upgrade License Plesk (Plan)', value: 'upgradeLicensePleskPlanPOST', action: 'upgrade license plesk (Plan)' },
			{ name: 'Get Upgrade License Plesk (Service)', value: 'upgradeLicensePleskServiceGET', action: 'get upgrade license plesk (Service)' },
			{ name: 'Get Upgrade License cPanel (List)', value: 'upgradeLicensecPanelListGET', action: 'get upgrade license cpanel (List)' },
			{ name: 'Get Upgrade License cPanel (Plan)', value: 'upgradeLicensecPanelPlanGET', action: 'get upgrade license cpanel (Plan)' },
			{ name: 'Upgrade License cPanel (Plan)', value: 'upgradeLicensecPanelPlanPOST', action: 'upgrade license cpanel (Plan)' },
			{ name: 'Get Upgrade License cPanel (Service)', value: 'upgradeLicensecPanelServiceGET', action: 'get upgrade license cpanel (Service)' },
			{ name: 'Get Upgrade Logs (List)', value: 'upgradeLogsListGET', action: 'get upgrade logs (List)' },
			{ name: 'Get Upgrade Logs (Plan)', value: 'upgradeLogsPlanGET', action: 'get upgrade logs (Plan)' },
			{ name: 'Upgrade Logs (Plan)', value: 'upgradeLogsPlanPOST', action: 'upgrade logs (Plan)' },
			{ name: 'Get Upgrade Logs (Service)', value: 'upgradeLogsServiceGET', action: 'get upgrade logs (Service)' },
			{ name: 'Get Upgrade Metrics (List)', value: 'upgradeMetricsListGET', action: 'get upgrade metrics (List)' },
			{ name: 'Get Upgrade Metrics (Plan)', value: 'upgradeMetricsPlanGET', action: 'get upgrade metrics (Plan)' },
			{ name: 'Upgrade Metrics (Plan)', value: 'upgradeMetricsPlanPOST', action: 'upgrade metrics (Plan)' },
			{ name: 'Get Upgrade Metrics (Service)', value: 'upgradeMetricsServiceGET', action: 'get upgrade metrics (Service)' },
			{ name: 'Get Upgrade Microsoft Exchange (List)', value: 'upgradeMicrosoftExchangeListGET', action: 'get upgrade microsoft exchange (List)' },
			{ name: 'Get Upgrade Microsoft Exchange (Plan)', value: 'upgradeMicrosoftExchangePlanGET', action: 'get upgrade microsoft exchange (Plan)' },
			{ name: 'Upgrade Microsoft Exchange (Plan)', value: 'upgradeMicrosoftExchangePlanPOST', action: 'upgrade microsoft exchange (Plan)' },
			{ name: 'Get Upgrade Microsoft Exchange (Service)', value: 'upgradeMicrosoftExchangeServiceGET', action: 'get upgrade microsoft exchange (Service)' },
			{ name: 'Get Upgrade Private Cloud (List)', value: 'upgradePrivateCloudListGET', action: 'get upgrade private cloud (List)' },
			{ name: 'Get Upgrade Private Cloud Management Fee (List)', value: 'upgradePrivateCloudManagementFeeListGET', action: 'get upgrade private cloud management fee (List)' },
			{ name: 'Get Upgrade Private Cloud Management Fee (Plan)', value: 'upgradePrivateCloudManagementFeePlanGET', action: 'get upgrade private cloud management fee (Plan)' },
			{ name: 'Upgrade Private Cloud Management Fee (Plan)', value: 'upgradePrivateCloudManagementFeePlanPOST', action: 'upgrade private cloud management fee (Plan)' },
			{ name: 'Get Upgrade Private Cloud Management Fee (Service)', value: 'upgradePrivateCloudManagementFeeServiceGET', action: 'get upgrade private cloud management fee (Service)' },
			{ name: 'Get Upgrade Private Cloud (Plan)', value: 'upgradePrivateCloudPlanGET', action: 'get upgrade private cloud (Plan)' },
			{ name: 'Upgrade Private Cloud (Plan)', value: 'upgradePrivateCloudPlanPOST', action: 'upgrade private cloud (Plan)' },
			{ name: 'Get Upgrade Private Cloud (Service)', value: 'upgradePrivateCloudServiceGET', action: 'get upgrade private cloud (Service)' },
			{ name: 'Get Upgrade Private SQL (List)', value: 'upgradePrivateSQLListGET', action: 'get upgrade private sql (List)' },
			{ name: 'Get Upgrade Private SQL (Plan)', value: 'upgradePrivateSQLPlanGET', action: 'get upgrade private sql (Plan)' },
			{ name: 'Upgrade Private SQL (Plan)', value: 'upgradePrivateSQLPlanPOST', action: 'upgrade private sql (Plan)' },
			{ name: 'Get Upgrade Private SQL (Service)', value: 'upgradePrivateSQLServiceGET', action: 'get upgrade private sql (Service)' },
			{ name: 'Get Upgrade SSL Gateway (List)', value: 'upgradeSSLGatewayListGET', action: 'get upgrade ssl gateway (List)' },
			{ name: 'Get Upgrade SSL Gateway (Plan)', value: 'upgradeSSLGatewayPlanGET', action: 'get upgrade ssl gateway (Plan)' },
			{ name: 'Upgrade SSL Gateway (Plan)', value: 'upgradeSSLGatewayPlanPOST', action: 'upgrade ssl gateway (Plan)' },
			{ name: 'Get Upgrade SSL Gateway (Service)', value: 'upgradeSSLGatewayServiceGET', action: 'get upgrade ssl gateway (Service)' },
			{ name: 'Get Upgrade VPS Additional Disk (List)', value: 'upgradeVPSAdditionalDiskListGET', action: 'get upgrade vps additional disk (List)' },
			{ name: 'Get Upgrade VPS Additional Disk (Plan)', value: 'upgradeVPSAdditionalDiskPlanGET', action: 'get upgrade vps additional disk (Plan)' },
			{ name: 'Upgrade VPS Additional Disk (Plan)', value: 'upgradeVPSAdditionalDiskPlanPOST', action: 'upgrade vps additional disk (Plan)' },
			{ name: 'Get Upgrade VPS Additional Disk (Service)', value: 'upgradeVPSAdditionalDiskServiceGET', action: 'get upgrade vps additional disk (Service)' },
			{ name: 'Get Upgrade VPS (List)', value: 'upgradeVPSListGET', action: 'get upgrade vps (List)' },
			{ name: 'Get Upgrade VPS (Plan)', value: 'upgradeVPSPlanGET', action: 'get upgrade vps (Plan)' },
			{ name: 'Upgrade VPS (Plan)', value: 'upgradeVPSPlanPOST', action: 'upgrade vps (Plan)' },
			{ name: 'Get Upgrade VPS (Service)', value: 'upgradeVPSServiceGET', action: 'get upgrade vps (Service)' },
			{ name: 'Get Upgrade Web Hosting (List)', value: 'upgradeWebHostingListGET', action: 'get upgrade web hosting (List)' },
			{ name: 'Get Upgrade Web Hosting (Plan)', value: 'upgradeWebHostingPlanGET', action: 'get upgrade web hosting (Plan)' },
			{ name: 'Upgrade Web Hosting (Plan)', value: 'upgradeWebHostingPlanPOST', action: 'upgrade web hosting (Plan)' },
			{ name: 'Get Upgrade Web Hosting (Service)', value: 'upgradeWebHostingServiceGET', action: 'get upgrade web hosting (Service)' },
			{ name: 'Get Upgrade Zimbra (List)', value: 'upgradeZimbraListGET', action: 'get upgrade zimbra (List)' },
			{ name: 'Get Upgrade Zimbra (Plan)', value: 'upgradeZimbraPlanGET', action: 'get upgrade zimbra (Plan)' },
			{ name: 'Upgrade Zimbra (Plan)', value: 'upgradeZimbraPlanPOST', action: 'upgrade zimbra (Plan)' },
			{ name: 'Get Upgrade Zimbra (Service)', value: 'upgradeZimbraServiceGET', action: 'get upgrade zimbra (Service)' },
			{ name: 'Get Backup Services Cart Service Option (List)', value: 'cartServiceOptionBackupServicesListGET', action: 'get backup services cart service option (List)' },
			{ name: 'Get Backup Services Cart Service Option (Service)', value: 'cartServiceOptionBackupServicesServiceGET', action: 'get backup services cart service option (Service)' },
			{ name: 'Get Baremetal Servers Cart Service Option (List)', value: 'cartServiceOptionBaremetalServersListGET', action: 'get baremetal servers cart service option (List)' },
			{ name: 'Get Baremetal Servers Cart Service Option (Service)', value: 'cartServiceOptionBaremetalServersServiceGET', action: 'get baremetal servers cart service option (Service)' },
			{ name: 'Add Baremetal Servers Cart Service Option (Service)', value: 'cartServiceOptionBaremetalServersServicePOST', action: 'add baremetal servers cart service option (Service)' },
			{ name: 'Get Cloud Cart Service Option (List)', value: 'cartServiceOptionCloudListGET', action: 'get cloud cart service option (List)' },
			{ name: 'Get Cloud Cart Service Option (Service)', value: 'cartServiceOptionCloudServiceGET', action: 'get cloud cart service option (Service)' },
			{ name: 'Add Cloud Cart Service Option (Service)', value: 'cartServiceOptionCloudServicePOST', action: 'add cloud cart service option (Service)' },
			{ name: 'Get DNS Cart Service Option (List)', value: 'cartServiceOptionDNSListGET', action: 'get dns cart service option (List)' },
			{ name: 'Get DNS Cart Service Option (Service)', value: 'cartServiceOptionDNSServiceGET', action: 'get dns cart service option (Service)' },
			{ name: 'Add DNS Cart Service Option (Service)', value: 'cartServiceOptionDNSServicePOST', action: 'add dns cart service option (Service)' },
			{ name: 'Get Dedicated Cart Service Option (List)', value: 'cartServiceOptionDedicatedListGET', action: 'get dedicated cart service option (List)' },
			{ name: 'Get Dedicated Cart Service Option (Service)', value: 'cartServiceOptionDedicatedServiceGET', action: 'get dedicated cart service option (Service)' },
			{ name: 'Add Dedicated Cart Service Option (Service)', value: 'cartServiceOptionDedicatedServicePOST', action: 'add dedicated cart service option (Service)' },
			{ name: 'Get Domain Cart Service Option (List)', value: 'cartServiceOptionDomainListGET', action: 'get domain cart service option (List)' },
			{ name: 'Get Domain Cart Service Option (Service)', value: 'cartServiceOptionDomainServiceGET', action: 'get domain cart service option (Service)' },
			{ name: 'Add Domain Cart Service Option (Service)', value: 'cartServiceOptionDomainServicePOST', action: 'add domain cart service option (Service)' },
			{ name: 'Get Email Pro Cart Service Option (List)', value: 'cartServiceOptionEmailProListGET', action: 'get email pro cart service option (List)' },
			{ name: 'Get Email Pro Cart Service Option (Service)', value: 'cartServiceOptionEmailProServiceGET', action: 'get email pro cart service option (Service)' },
			{ name: 'Add Email Pro Cart Service Option (Service)', value: 'cartServiceOptionEmailProServicePOST', action: 'add email pro cart service option (Service)' },
			{ name: 'Get IP Load Balancing Cart Service Option (List)', value: 'cartServiceOptionIPLoadBalancingListGET', action: 'get ip load balancing cart service option (List)' },
			{ name: 'Get IP Load Balancing Cart Service Option (Service)', value: 'cartServiceOptionIPLoadBalancingServiceGET', action: 'get ip load balancing cart service option (Service)' },
			{ name: 'Add IP Load Balancing Cart Service Option (Service)', value: 'cartServiceOptionIPLoadBalancingServicePOST', action: 'add ip load balancing cart service option (Service)' },
			{ name: 'Get License Hycu Cart Service Option (List)', value: 'cartServiceOptionLicenseHycuListGET', action: 'get license hycu cart service option (List)' },
			{ name: 'Get License Hycu Cart Service Option (Service)', value: 'cartServiceOptionLicenseHycuServiceGET', action: 'get license hycu cart service option (Service)' },
			{ name: 'Add License Hycu Cart Service Option (Service)', value: 'cartServiceOptionLicenseHycuServicePOST', action: 'add license hycu cart service option (Service)' },
			{ name: 'Get Logs Cart Service Option (List)', value: 'cartServiceOptionLogsListGET', action: 'get logs cart service option (List)' },
			{ name: 'Get Logs Cart Service Option (Service)', value: 'cartServiceOptionLogsServiceGET', action: 'get logs cart service option (Service)' },
			{ name: 'Add Logs Cart Service Option (Service)', value: 'cartServiceOptionLogsServicePOST', action: 'add logs cart service option (Service)' },
			{ name: 'Get Microsoft Exchange Cart Service Option (List)', value: 'cartServiceOptionMicrosoftExchangeListGET', action: 'get microsoft exchange cart service option (List)' },
			{ name: 'Get Microsoft Exchange Cart Service Option (Service)', value: 'cartServiceOptionMicrosoftExchangeServiceGET', action: 'get microsoft exchange cart service option (Service)' },
			{ name: 'Add Microsoft Exchange Cart Service Option (Service)', value: 'cartServiceOptionMicrosoftExchangeServicePOST', action: 'add microsoft exchange cart service option (Service)' },
			{ name: 'Get Microsoft Cart Service Option (List)', value: 'cartServiceOptionMicrosoftListGET', action: 'get microsoft cart service option (List)' },
			{ name: 'Get Microsoft Cart Service Option (Service)', value: 'cartServiceOptionMicrosoftServiceGET', action: 'get microsoft cart service option (Service)' },
			{ name: 'Add Microsoft Cart Service Option (Service)', value: 'cartServiceOptionMicrosoftServicePOST', action: 'add microsoft cart service option (Service)' },
			{ name: 'Get Nutanix Cart Service Option (List)', value: 'cartServiceOptionNutanixListGET', action: 'get nutanix cart service option (List)' },
			{ name: 'Get Nutanix Cart Service Option (Service)', value: 'cartServiceOptionNutanixServiceGET', action: 'get nutanix cart service option (Service)' },
			{ name: 'Add Nutanix Cart Service Option (Service)', value: 'cartServiceOptionNutanixServicePOST', action: 'add nutanix cart service option (Service)' },
			{ name: 'Get Office365 Prepaid Cart Service Option (List)', value: 'cartServiceOptionOffice365PrepaidListGET', action: 'get office365 prepaid cart service option (List)' },
			{ name: 'Get Office365 Prepaid Cart Service Option (Service)', value: 'cartServiceOptionOffice365PrepaidServiceGET', action: 'get office365 prepaid cart service option (Service)' },
			{ name: 'Add Office365 Prepaid Cart Service Option (Service)', value: 'cartServiceOptionOffice365PrepaidServicePOST', action: 'add office365 prepaid cart service option (Service)' },
			{ name: 'Get Office Prepaid Cart Service Option (List)', value: 'cartServiceOptionOfficePrepaidListGET', action: 'get office prepaid cart service option (List)' },
			{ name: 'Get Office Prepaid Cart Service Option (Service)', value: 'cartServiceOptionOfficePrepaidServiceGET', action: 'get office prepaid cart service option (Service)' },
			{ name: 'Add Office Prepaid Cart Service Option (Service)', value: 'cartServiceOptionOfficePrepaidServicePOST', action: 'add office prepaid cart service option (Service)' },
			{ name: 'Get Private Cloud Enterprise Cart Service Option (List)', value: 'cartServiceOptionPrivateCloudEnterpriseListGET', action: 'get private cloud enterprise cart service option (List)' },
			{ name: 'Get Private Cloud Enterprise Cart Service Option (Service)', value: 'cartServiceOptionPrivateCloudEnterpriseServiceGET', action: 'get private cloud enterprise cart service option (Service)' },
			{ name: 'Add Private Cloud Enterprise Cart Service Option (Service)', value: 'cartServiceOptionPrivateCloudEnterpriseServicePOST', action: 'add private cloud enterprise cart service option (Service)' },
			{ name: 'Get Private Cloud Cart Service Option (List)', value: 'cartServiceOptionPrivateCloudListGET', action: 'get private cloud cart service option (List)' },
			{ name: 'Get Private Cloud Reseller Enterprise Cart Service Option (List)', value: 'cartServiceOptionPrivateCloudResellerEnterpriseListGET', action: 'get private cloud reseller enterprise cart service option (List)' },
			{ name: 'Get Private Cloud Reseller Enterprise Cart Service Option (Service)', value: 'cartServiceOptionPrivateCloudResellerEnterpriseServiceGET', action: 'get private cloud reseller enterprise cart service option (Service)' },
			{ name: 'Add Private Cloud Reseller Enterprise Cart Service Option (Service)', value: 'cartServiceOptionPrivateCloudResellerEnterpriseServicePOST', action: 'add private cloud reseller enterprise cart service option (Service)' },
			{ name: 'Get Private Cloud Reseller Cart Service Option (List)', value: 'cartServiceOptionPrivateCloudResellerListGET', action: 'get private cloud reseller cart service option (List)' },
			{ name: 'Get Private Cloud Reseller Cart Service Option (Service)', value: 'cartServiceOptionPrivateCloudResellerServiceGET', action: 'get private cloud reseller cart service option (Service)' },
			{ name: 'Add Private Cloud Reseller Cart Service Option (Service)', value: 'cartServiceOptionPrivateCloudResellerServicePOST', action: 'add private cloud reseller cart service option (Service)' },
			{ name: 'Get Private Cloud Cart Service Option (Service)', value: 'cartServiceOptionPrivateCloudServiceGET', action: 'get private cloud cart service option (Service)' },
			{ name: 'Add Private Cloud Cart Service Option (Service)', value: 'cartServiceOptionPrivateCloudServicePOST', action: 'add private cloud cart service option (Service)' },
			{ name: 'Get SMS Cart Service Option (List)', value: 'cartServiceOptionSMSListGET', action: 'get sms cart service option (List)' },
			{ name: 'Get SMS Cart Service Option (Service)', value: 'cartServiceOptionSMSServiceGET', action: 'get sms cart service option (Service)' },
			{ name: 'Add SMS Cart Service Option (Service)', value: 'cartServiceOptionSMSServicePOST', action: 'add sms cart service option (Service)' },
			{ name: 'Get SSL Gateway Cart Service Option (List)', value: 'cartServiceOptionSSLGatewayListGET', action: 'get ssl gateway cart service option (List)' },
			{ name: 'Get SSL Gateway Cart Service Option (Service)', value: 'cartServiceOptionSSLGatewayServiceGET', action: 'get ssl gateway cart service option (Service)' },
			{ name: 'Add SSL Gateway Cart Service Option (Service)', value: 'cartServiceOptionSSLGatewayServicePOST', action: 'add ssl gateway cart service option (Service)' },
			{ name: 'Get Sharepoint Cart Service Option (List)', value: 'cartServiceOptionSharepointListGET', action: 'get sharepoint cart service option (List)' },
			{ name: 'Get Sharepoint Cart Service Option (Service)', value: 'cartServiceOptionSharepointServiceGET', action: 'get sharepoint cart service option (Service)' },
			{ name: 'Add Sharepoint Cart Service Option (Service)', value: 'cartServiceOptionSharepointServicePOST', action: 'add sharepoint cart service option (Service)' },
			{ name: 'Get SNC Network Services Cart Service Option (List)', value: 'cartServiceOptionSncNetworkServicesListGET', action: 'get snc network services cart service option (List)' },
			{ name: 'Get SNC Network Services Cart Service Option (Service)', value: 'cartServiceOptionSncNetworkServicesServiceGET', action: 'get snc network services cart service option (Service)' },
			{ name: 'Add SNC Network Services Cart Service Option (Service)', value: 'cartServiceOptionSncNetworkServicesServicePOST', action: 'add snc network services cart service option (Service)' },
			{ name: 'Get VDI Cart Service Option (List)', value: 'cartServiceOptionVDIListGET', action: 'get vdi cart service option (List)' },
			{ name: 'Get VDI Cart Service Option (Service)', value: 'cartServiceOptionVDIServiceGET', action: 'get vdi cart service option (Service)' },
			{ name: 'Add VDI Cart Service Option (Service)', value: 'cartServiceOptionVDIServicePOST', action: 'add vdi cart service option (Service)' },
			{ name: 'Get VPS Cart Service Option (List)', value: 'cartServiceOptionVPSListGET', action: 'get vps cart service option (List)' },
			{ name: 'Get VPS Cart Service Option (Service)', value: 'cartServiceOptionVPSServiceGET', action: 'get vps cart service option (Service)' },
			{ name: 'Add VPS Cart Service Option (Service)', value: 'cartServiceOptionVPSServicePOST', action: 'add vps cart service option (Service)' },
			{ name: 'Get VMware Cloud Director Backup Cart Service Option (List)', value: 'cartServiceOptionVmwareCloudDirectorBackupListGET', action: 'get vmware cloud director backup cart service option (List)' },
			{ name: 'Get VMware Cloud Director Backup Cart Service Option (Service)', value: 'cartServiceOptionVmwareCloudDirectorBackupServiceGET', action: 'get vmware cloud director backup cart service option (Service)' },
			{ name: 'Get VMware Cloud Director Cart Service Option (List)', value: 'cartServiceOptionVmwareCloudDirectorListGET', action: 'get vmware cloud director cart service option (List)' },
			{ name: 'Get VMware Cloud Director Cart Service Option (Service)', value: 'cartServiceOptionVmwareCloudDirectorServiceGET', action: 'get vmware cloud director cart service option (Service)' },
			{ name: 'Add VMware Cloud Director Cart Service Option (Service)', value: 'cartServiceOptionVmwareCloudDirectorServicePOST', action: 'add vmware cloud director cart service option (Service)' },
			{ name: 'Get Vrack Cart Service Option (List)', value: 'cartServiceOptionVrackListGET', action: 'get vrack cart service option (List)' },
			{ name: 'Get Vrack Cart Service Option (Service)', value: 'cartServiceOptionVrackServiceGET', action: 'get vrack cart service option (Service)' },
			{ name: 'Add Vrack Cart Service Option (Service)', value: 'cartServiceOptionVrackServicePOST', action: 'add vrack cart service option (Service)' },
			{ name: 'Get Web Hosting Cart Service Option (List)', value: 'cartServiceOptionWebHostingListGET', action: 'get web hosting cart service option (List)' },
			{ name: 'Get Web Hosting Cart Service Option (Service)', value: 'cartServiceOptionWebHostingServiceGET', action: 'get web hosting cart service option (Service)' },
			{ name: 'Add Web Hosting Cart Service Option (Service)', value: 'cartServiceOptionWebHostingServicePOST', action: 'add web hosting cart service option (Service)' },
			{ name: 'Get Options CDN Dedicated Backend', value: 'cdnDedicatedBackendOptionsListGet', action: 'get options cdn dedicated backend' },
			{ name: 'Create CDN Dedicated Backend', value: 'cdnDedicatedBackendOrderCreatePost', action: 'create cdn dedicated backend' },
			{ name: 'Get CDN Dedicated Backend', value: 'cdnDedicatedBackendOrderGet', action: 'get cdn dedicated backend' },
			{ name: 'Get Options CDN Dedicated CacheRule', value: 'cdnDedicatedCacheRuleOptionsListGet', action: 'get options cdn dedicated cacherule' },
			{ name: 'Create CDN Dedicated CacheRule', value: 'cdnDedicatedCacheRuleOrderCreatePost', action: 'create cdn dedicated cacherule' },
			{ name: 'Get CDN Dedicated CacheRule', value: 'cdnDedicatedCacheRuleOrderGet', action: 'get cdn dedicated cacherule' },
			{ name: 'List CDN Dedicated Get', value: 'cdnDedicatedListGet', action: 'list cdn dedicated  get' },
			{ name: 'Get Duration CDN Dedicated', value: 'cdnDedicatedNewDurationGet', action: 'get duration cdn dedicated' },
			{ name: 'Create CDN Dedicated', value: 'cdnDedicatedNewOrderCreatePost', action: 'create cdn dedicated' },
			{ name: 'Get CDN Dedicated', value: 'cdnDedicatedNewOrderGet', action: 'get cdn dedicated' },
			{ name: 'Get Options CDN Dedicated Quota', value: 'cdnDedicatedQuotaOptionsListGet', action: 'get options cdn dedicated quota' },
			{ name: 'Create CDN Dedicated Quota', value: 'cdnDedicatedQuotaOrderCreatePost', action: 'create cdn dedicated quota' },
			{ name: 'Get CDN Dedicated Quota', value: 'cdnDedicatedQuotaOrderGet', action: 'get cdn dedicated quota' },
			{ name: 'Get Options CDN Dedicated', value: 'cdnDedicatedServiceOptionsListGet', action: 'get options cdn dedicated' },
			{ name: 'Get Options Domain Zone DNS Anycast', value: 'domainZoneDnsAnycastOptionsListGet', action: 'get options domain zone dns anycast' },
			{ name: 'Create Domain Zone DNS Anycast', value: 'domainZoneDnsAnycastOrderCreatePost', action: 'create domain zone dns anycast' },
			{ name: 'Get Domain Zone DNS Anycast', value: 'domainZoneDnsAnycastOrderGet', action: 'get domain zone dns anycast' },
			{ name: 'List Domain Zone Get', value: 'domainZoneListGet', action: 'list domain zone  get' },
			{ name: 'Create Domain Zone', value: 'domainZoneNewOrderCreatePost', action: 'create domain zone' },
			{ name: 'Get Domain Zone', value: 'domainZoneNewOrderGet', action: 'get domain zone' },
			{ name: 'Get Options Domain Zone', value: 'domainZoneServiceOptionsListGet', action: 'get options domain zone' },
			{ name: 'List Email Domain Get', value: 'emailDomainListGet', action: 'list email domain  get' },
			{ name: 'Get Duration Email Domain', value: 'emailDomainNewDurationGet', action: 'get duration email domain' },
			{ name: 'Create Email Domain', value: 'emailDomainNewOrderCreatePost', action: 'create email domain' },
			{ name: 'Get Email Domain', value: 'emailDomainNewOrderGet', action: 'get email domain' },
			{ name: 'Get Options Email Domain', value: 'emailDomainServiceOptionsListGet', action: 'get options email domain' },
			{ name: 'List Hosting Web Get', value: 'hostingWebListGet', action: 'list hosting web  get' },
			{ name: 'Get Options Hosting Web', value: 'hostingWebServiceOptionsListGet', action: 'get options hosting web' },
			{ name: 'Create Hosting Web', value: 'hostingWebServiceUpgradeOrderCreatePost', action: 'create hosting web' },
			{ name: 'Get Hosting Web', value: 'hostingWebServiceUpgradeOrderGet', action: 'get hosting web' },
],
			default: 'cartListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionCartListGet({
			...displayOptions,
			show: { orderOperation: ['cartListGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedBackendOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedBackendOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedBackendOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedBackendOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedBackendOrderGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedBackendOrderGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedCacheRuleOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedCacheRuleOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedCacheRuleOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedCacheRuleOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedCacheRuleOrderGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedCacheRuleOrderGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedListGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedListGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedNewDurationGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedNewDurationGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedNewOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedNewOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedNewOrderGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedNewOrderGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedQuotaOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedQuotaOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedQuotaOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedQuotaOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedQuotaOrderGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedQuotaOrderGet'] },
		}) as INodeProperties[]),
		...(descriptioncdnDedicatedServiceOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['cdnDedicatedServiceOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptiondomainZoneDnsAnycastOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['domainZoneDnsAnycastOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptiondomainZoneDnsAnycastOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['domainZoneDnsAnycastOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptiondomainZoneDnsAnycastOrderGet({
			...displayOptions,
			show: { orderOperation: ['domainZoneDnsAnycastOrderGet'] },
		}) as INodeProperties[]),
		...(descriptiondomainZoneListGet({
			...displayOptions,
			show: { orderOperation: ['domainZoneListGet'] },
		}) as INodeProperties[]),
		...(descriptiondomainZoneNewOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['domainZoneNewOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptiondomainZoneNewOrderGet({
			...displayOptions,
			show: { orderOperation: ['domainZoneNewOrderGet'] },
		}) as INodeProperties[]),
		...(descriptiondomainZoneServiceOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['domainZoneServiceOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionemailDomainListGet({
			...displayOptions,
			show: { orderOperation: ['emailDomainListGet'] },
		}) as INodeProperties[]),
		...(descriptionemailDomainNewDurationGet({
			...displayOptions,
			show: { orderOperation: ['emailDomainNewDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionemailDomainNewOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['emailDomainNewOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionemailDomainNewOrderGet({
			...displayOptions,
			show: { orderOperation: ['emailDomainNewOrderGet'] },
		}) as INodeProperties[]),
		...(descriptionemailDomainServiceOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['emailDomainServiceOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionemailDomainServiceUpgradeOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['emailDomainServiceUpgradeOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionemailDomainServiceUpgradeOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['emailDomainServiceUpgradeOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionemailDomainServiceUpgradeOrderGet({
			...displayOptions,
			show: { orderOperation: ['emailDomainServiceUpgradeOrderGet'] },
		}) as INodeProperties[]),
		...(descriptionhostingWebListGet({
			...displayOptions,
			show: { orderOperation: ['hostingWebListGet'] },
		}) as INodeProperties[]),
		...(descriptionhostingWebServiceOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['hostingWebServiceOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionhostingWebServiceUpgradeOptionsListGet({
			...displayOptions,
			show: { orderOperation: ['hostingWebServiceUpgradeOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionhostingWebServiceUpgradeOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['hostingWebServiceUpgradeOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionhostingWebServiceUpgradeOrderGet({
			...displayOptions,
			show: { orderOperation: ['hostingWebServiceUpgradeOrderGet'] },
		}) as INodeProperties[]),
		...(descriptionCartCreatePost({
			...displayOptions,
			show: { orderOperation: ['cartCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionCartDeleteDelete({
			...displayOptions,
			show: { orderOperation: ['cartDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionCartGetGet({
			...displayOptions,
			show: { orderOperation: ['cartGetGet'] },
		}) as INodeProperties[]),
		...(descriptionCartUpdatePut({
			...displayOptions,
			show: { orderOperation: ['cartUpdatePut'] },
		}) as INodeProperties[]),
...(descriptionCartLicenseHycuGET({
			...displayOptions,
			show: { orderOperation: ['cartLicenseHycuGET'] },
		}) as INodeProperties[]),
...(descriptionCartLicenseHycuPOST({
			...displayOptions,
			show: { orderOperation: ['cartLicenseHycuPOST'] },
		}) as INodeProperties[]),
...(descriptionCartLicensePleskGET({
			...displayOptions,
			show: { orderOperation: ['cartLicensePleskGET'] },
		}) as INodeProperties[]),
...(descriptionCartLicensePleskPOST({
			...displayOptions,
			show: { orderOperation: ['cartLicensePleskPOST'] },
		}) as INodeProperties[]),
...(descriptionCartLicensePleskOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartLicensePleskOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartLicensePleskOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartLicensePleskOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartLicenseSqlServerGET({
			...displayOptions,
			show: { orderOperation: ['cartLicenseSqlServerGET'] },
		}) as INodeProperties[]),
...(descriptionCartLicenseSqlServerPOST({
			...displayOptions,
			show: { orderOperation: ['cartLicenseSqlServerPOST'] },
		}) as INodeProperties[]),
...(descriptionCartLicenseWindowsGET({
			...displayOptions,
			show: { orderOperation: ['cartLicenseWindowsGET'] },
		}) as INodeProperties[]),
...(descriptionCartLicenseWindowsPOST({
			...displayOptions,
			show: { orderOperation: ['cartLicenseWindowsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartLicensecPanelGET({
			...displayOptions,
			show: { orderOperation: ['cartLicensecPanelGET'] },
		}) as INodeProperties[]),
...(descriptionCartLicensecPanelPOST({
			...displayOptions,
			show: { orderOperation: ['cartLicensecPanelPOST'] },
		}) as INodeProperties[]),
...(descriptionCartLogsGET({
			...displayOptions,
			show: { orderOperation: ['cartLogsGET'] },
		}) as INodeProperties[]),
...(descriptionCartLogsPOST({
			...displayOptions,
			show: { orderOperation: ['cartLogsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartLogsOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartLogsOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartLogsOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartLogsOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartManagedCMSGET({
			...displayOptions,
			show: { orderOperation: ['cartManagedCMSGET'] },
		}) as INodeProperties[]),
...(descriptionCartManagedCMSPOST({
			...displayOptions,
			show: { orderOperation: ['cartManagedCMSPOST'] },
		}) as INodeProperties[]),
...(descriptionCartManagedCMSOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartManagedCMSOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartManagedCMSOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartManagedCMSOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartManagedServicesGET({
			...displayOptions,
			show: { orderOperation: ['cartManagedServicesGET'] },
		}) as INodeProperties[]),
...(descriptionCartManagedServicesPOST({
			...displayOptions,
			show: { orderOperation: ['cartManagedServicesPOST'] },
		}) as INodeProperties[]),
...(descriptionCartManagedServicesOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartManagedServicesOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartManagedServicesOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartManagedServicesOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartMetricsGET({
			...displayOptions,
			show: { orderOperation: ['cartMetricsGET'] },
		}) as INodeProperties[]),
...(descriptionCartMetricsPOST({
			...displayOptions,
			show: { orderOperation: ['cartMetricsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartMetricsOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartMetricsOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartMetricsOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartMetricsOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartMicrosoftGET({
			...displayOptions,
			show: { orderOperation: ['cartMicrosoftGET'] },
		}) as INodeProperties[]),
...(descriptionCartMicrosoftPOST({
			...displayOptions,
			show: { orderOperation: ['cartMicrosoftPOST'] },
		}) as INodeProperties[]),
...(descriptionCartMicrosoftOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartMicrosoftOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartMicrosoftOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartMicrosoftOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartNashaGET({
			...displayOptions,
			show: { orderOperation: ['cartNashaGET'] },
		}) as INodeProperties[]),
...(descriptionCartNashaPOST({
			...displayOptions,
			show: { orderOperation: ['cartNashaPOST'] },
		}) as INodeProperties[]),
...(descriptionCartNashaOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartNashaOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartNashaOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartNashaOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartNetappGET({
			...displayOptions,
			show: { orderOperation: ['cartNetappGET'] },
		}) as INodeProperties[]),
...(descriptionCartNetappPOST({
			...displayOptions,
			show: { orderOperation: ['cartNetappPOST'] },
		}) as INodeProperties[]),
...(descriptionCartNetappOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartNetappOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartNetappOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartNetappOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartNutanixGET({
			...displayOptions,
			show: { orderOperation: ['cartNutanixGET'] },
		}) as INodeProperties[]),
...(descriptionCartNutanixPOST({
			...displayOptions,
			show: { orderOperation: ['cartNutanixPOST'] },
		}) as INodeProperties[]),
...(descriptionCartNutanixOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartNutanixOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartNutanixOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartNutanixOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOffice365GET({
			...displayOptions,
			show: { orderOperation: ['cartOffice365GET'] },
		}) as INodeProperties[]),
...(descriptionCartOffice365POST({
			...displayOptions,
			show: { orderOperation: ['cartOffice365POST'] },
		}) as INodeProperties[]),
...(descriptionCartOffice365OptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartOffice365OptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartOffice365OptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartOffice365OptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOffice365PrepaidGET({
			...displayOptions,
			show: { orderOperation: ['cartOffice365PrepaidGET'] },
		}) as INodeProperties[]),
...(descriptionCartOffice365PrepaidPOST({
			...displayOptions,
			show: { orderOperation: ['cartOffice365PrepaidPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOffice365PrepaidOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartOffice365PrepaidOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartOffice365PrepaidOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartOffice365PrepaidOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOfficePrepaidGET({
			...displayOptions,
			show: { orderOperation: ['cartOfficePrepaidGET'] },
		}) as INodeProperties[]),
...(descriptionCartOfficePrepaidPOST({
			...displayOptions,
			show: { orderOperation: ['cartOfficePrepaidPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOfficePrepaidOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartOfficePrepaidOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartOfficePrepaidOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartOfficePrepaidOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOkmsGET({
			...displayOptions,
			show: { orderOperation: ['cartOkmsGET'] },
		}) as INodeProperties[]),
...(descriptionCartOkmsPOST({
			...displayOptions,
			show: { orderOperation: ['cartOkmsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOtbGET({
			...displayOptions,
			show: { orderOperation: ['cartOtbGET'] },
		}) as INodeProperties[]),
...(descriptionCartOtbPOST({
			...displayOptions,
			show: { orderOperation: ['cartOtbPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOtbOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartOtbOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartOtbOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartOtbOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOtbResellerGET({
			...displayOptions,
			show: { orderOperation: ['cartOtbResellerGET'] },
		}) as INodeProperties[]),
...(descriptionCartOtbResellerPOST({
			...displayOptions,
			show: { orderOperation: ['cartOtbResellerPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOtbResellerOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartOtbResellerOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartOtbResellerOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartOtbResellerOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartOvhCloudConnectGET({
			...displayOptions,
			show: { orderOperation: ['cartOvhCloudConnectGET'] },
		}) as INodeProperties[]),
...(descriptionCartOvhCloudConnectPOST({
			...displayOptions,
			show: { orderOperation: ['cartOvhCloudConnectPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPaasmonGET({
			...displayOptions,
			show: { orderOperation: ['cartPaasmonGET'] },
		}) as INodeProperties[]),
...(descriptionCartPaasmonPOST({
			...displayOptions,
			show: { orderOperation: ['cartPaasmonPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPacksProfessionalServicesGET({
			...displayOptions,
			show: { orderOperation: ['cartPacksProfessionalServicesGET'] },
		}) as INodeProperties[]),
...(descriptionCartPacksProfessionalServicesPOST({
			...displayOptions,
			show: { orderOperation: ['cartPacksProfessionalServicesPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPacksProfessionalServicesOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartPacksProfessionalServicesOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartPacksProfessionalServicesOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartPacksProfessionalServicesOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPowerHostingGET({
			...displayOptions,
			show: { orderOperation: ['cartPowerHostingGET'] },
		}) as INodeProperties[]),
...(descriptionCartPowerHostingPOST({
			...displayOptions,
			show: { orderOperation: ['cartPowerHostingPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudCDIGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudCDIGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudCDIPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudCDIPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudCDIOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudCDIOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudCDIOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudCDIOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudDCGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudDCGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudDCPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudDCPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudDCOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudDCOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudDCOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudDCOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudEnterpriseGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudEnterpriseGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudEnterprisePOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudEnterprisePOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudEnterpriseOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudEnterpriseOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudEnterpriseOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudEnterpriseOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudResellerGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudResellerGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudResellerPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudResellerPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudResellerOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudResellerOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudResellerOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudResellerOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudResellerEnterpriseGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudResellerEnterpriseGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudResellerEnterprisePOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudResellerEnterprisePOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudResellerEnterpriseOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudResellerEnterpriseOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudResellerEnterpriseOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudResellerEnterpriseOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudSDDCGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudSDDCGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudSDDCPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudSDDCPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudSDDCOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudSDDCOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateCloudSDDCOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateCloudSDDCOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateSQLGET({
			...displayOptions,
			show: { orderOperation: ['cartPrivateSQLGET'] },
		}) as INodeProperties[]),
...(descriptionCartPrivateSQLPOST({
			...displayOptions,
			show: { orderOperation: ['cartPrivateSQLPOST'] },
		}) as INodeProperties[]),
...(descriptionCartResellerGET({
			...displayOptions,
			show: { orderOperation: ['cartResellerGET'] },
		}) as INodeProperties[]),
...(descriptionCartResellerPOST({
			...displayOptions,
			show: { orderOperation: ['cartResellerPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSharepointGET({
			...displayOptions,
			show: { orderOperation: ['cartSharepointGET'] },
		}) as INodeProperties[]),
...(descriptionCartSharepointPOST({
			...displayOptions,
			show: { orderOperation: ['cartSharepointPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSharepointOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartSharepointOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartSharepointOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartSharepointOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSmsGET({
			...displayOptions,
			show: { orderOperation: ['cartSmsGET'] },
		}) as INodeProperties[]),
...(descriptionCartSmsPOST({
			...displayOptions,
			show: { orderOperation: ['cartSmsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSncNetworkServicesGET({
			...displayOptions,
			show: { orderOperation: ['cartSncNetworkServicesGET'] },
		}) as INodeProperties[]),
...(descriptionCartSncNetworkServicesPOST({
			...displayOptions,
			show: { orderOperation: ['cartSncNetworkServicesPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSncNetworkServicesOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartSncNetworkServicesOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartSncNetworkServicesOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartSncNetworkServicesOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSslComodoGET({
			...displayOptions,
			show: { orderOperation: ['cartSslComodoGET'] },
		}) as INodeProperties[]),
...(descriptionCartSslComodoPOST({
			...displayOptions,
			show: { orderOperation: ['cartSslComodoPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSslComodoOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartSslComodoOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartSslComodoOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartSslComodoOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSslGatewayGET({
			...displayOptions,
			show: { orderOperation: ['cartSslGatewayGET'] },
		}) as INodeProperties[]),
...(descriptionCartSslGatewayPOST({
			...displayOptions,
			show: { orderOperation: ['cartSslGatewayPOST'] },
		}) as INodeProperties[]),
...(descriptionCartSslGatewayOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartSslGatewayOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartSslGatewayOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartSslGatewayOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartTelephonyGET({
			...displayOptions,
			show: { orderOperation: ['cartTelephonyGET'] },
		}) as INodeProperties[]),
...(descriptionCartTelephonyPOST({
			...displayOptions,
			show: { orderOperation: ['cartTelephonyPOST'] },
		}) as INodeProperties[]),
...(descriptionCartTelephonyOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartTelephonyOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartTelephonyOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartTelephonyOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVdiGET({
			...displayOptions,
			show: { orderOperation: ['cartVdiGET'] },
		}) as INodeProperties[]),
...(descriptionCartVdiPOST({
			...displayOptions,
			show: { orderOperation: ['cartVdiPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVdiOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartVdiOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVdiOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVdiOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVeeamEnterpriseGET({
			...displayOptions,
			show: { orderOperation: ['cartVeeamEnterpriseGET'] },
		}) as INodeProperties[]),
...(descriptionCartVeeamEnterprisePOST({
			...displayOptions,
			show: { orderOperation: ['cartVeeamEnterprisePOST'] },
		}) as INodeProperties[]),
...(descriptionCartVeeamEnterpriseOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartVeeamEnterpriseOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVeeamEnterpriseOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVeeamEnterpriseOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVeeamccGET({
			...displayOptions,
			show: { orderOperation: ['cartVeeamccGET'] },
		}) as INodeProperties[]),
...(descriptionCartVeeamccPOST({
			...displayOptions,
			show: { orderOperation: ['cartVeeamccPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVeeamccOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartVeeamccOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVeeamccOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVeeamccOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVideocenterGET({
			...displayOptions,
			show: { orderOperation: ['cartVideocenterGET'] },
		}) as INodeProperties[]),
...(descriptionCartVideocenterPOST({
			...displayOptions,
			show: { orderOperation: ['cartVideocenterPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVideocenterOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartVideocenterOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVideocenterOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVideocenterOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVmwareCloudDirectorGET({
			...displayOptions,
			show: { orderOperation: ['cartVmwareCloudDirectorGET'] },
		}) as INodeProperties[]),
...(descriptionCartVmwareCloudDirectorPOST({
			...displayOptions,
			show: { orderOperation: ['cartVmwareCloudDirectorPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVmwareCloudDirectorOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartVmwareCloudDirectorOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVmwareCloudDirectorOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVmwareCloudDirectorOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVmwareCloudDirectorBackupGET({
			...displayOptions,
			show: { orderOperation: ['cartVmwareCloudDirectorBackupGET'] },
		}) as INodeProperties[]),
...(descriptionCartVmwareCloudDirectorBackupPOST({
			...displayOptions,
			show: { orderOperation: ['cartVmwareCloudDirectorBackupPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVmwareCloudDirectorBackupOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartVmwareCloudDirectorBackupOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVmwareCloudDirectorBackupOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVmwareCloudDirectorBackupOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVpsGET({
			...displayOptions,
			show: { orderOperation: ['cartVpsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVpsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVpsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVpsOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartVpsOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVpsOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVpsOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVrackGET({
			...displayOptions,
			show: { orderOperation: ['cartVrackGET'] },
		}) as INodeProperties[]),
...(descriptionCartVrackPOST({
			...displayOptions,
			show: { orderOperation: ['cartVrackPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVrackOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartVrackOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartVrackOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartVrackOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVrackResellerGET({
			...displayOptions,
			show: { orderOperation: ['cartVrackResellerGET'] },
		}) as INodeProperties[]),
...(descriptionCartVrackResellerPOST({
			...displayOptions,
			show: { orderOperation: ['cartVrackResellerPOST'] },
		}) as INodeProperties[]),
...(descriptionCartVrackServicesGET({
			...displayOptions,
			show: { orderOperation: ['cartVrackServicesGET'] },
		}) as INodeProperties[]),
...(descriptionCartVrackServicesPOST({
			...displayOptions,
			show: { orderOperation: ['cartVrackServicesPOST'] },
		}) as INodeProperties[]),
...(descriptionCartWebHostingGET({
			...displayOptions,
			show: { orderOperation: ['cartWebHostingGET'] },
		}) as INodeProperties[]),
...(descriptionCartWebHostingPOST({
			...displayOptions,
			show: { orderOperation: ['cartWebHostingPOST'] },
		}) as INodeProperties[]),
...(descriptionCartWebHostingOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartWebHostingOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartWebHostingOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartWebHostingOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartXdslGET({
			...displayOptions,
			show: { orderOperation: ['cartXdslGET'] },
		}) as INodeProperties[]),
...(descriptionCartXdslPOST({
			...displayOptions,
			show: { orderOperation: ['cartXdslPOST'] },
		}) as INodeProperties[]),
...(descriptionCartXdslOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartXdslOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartXdslOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartXdslOptionsPOST'] },
		}) as INodeProperties[]),
...(descriptionCartZimbraGET({
			...displayOptions,
			show: { orderOperation: ['cartZimbraGET'] },
		}) as INodeProperties[]),
...(descriptionCartZimbraPOST({
			...displayOptions,
			show: { orderOperation: ['cartZimbraPOST'] },
		}) as INodeProperties[]),
...(descriptionCartZimbraOptionsGET({
			...displayOptions,
			show: { orderOperation: ['cartZimbraOptionsGET'] },
		}) as INodeProperties[]),
...(descriptionCartZimbraOptionsPOST({
			...displayOptions,
			show: { orderOperation: ['cartZimbraOptionsPOST'] },
		}) as INodeProperties[]),
		...(descriptionCartSummaryGet({
			...displayOptions,
			show: { orderOperation: ['cartSummaryGet'] },
		}) as INodeProperties[]),
		...(descriptionCartItemListGet({
			...displayOptions,
			show: { orderOperation: ['cartItemListGet'] },
		}) as INodeProperties[]),
		...(descriptionCartItemGetGet({
			...displayOptions,
			show: { orderOperation: ['cartItemGetGet'] },
		}) as INodeProperties[]),
		...(descriptionCartItemUpdatePut({
			...displayOptions,
			show: { orderOperation: ['cartItemUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionCartItemDeleteDelete({
			...displayOptions,
			show: { orderOperation: ['cartItemDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionCartItemConfigurationListGet({
			...displayOptions,
			show: { orderOperation: ['cartItemConfigurationListGet'] },
		}) as INodeProperties[]),
		...(descriptionCartItemConfigurationCreatePost({
			...displayOptions,
			show: { orderOperation: ['cartItemConfigurationCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionCartItemConfigurationGetGet({
			...displayOptions,
			show: { orderOperation: ['cartItemConfigurationGetGet'] },
		}) as INodeProperties[]),
		...(descriptionCartItemConfigurationDeleteDelete({
			...displayOptions,
			show: { orderOperation: ['cartItemConfigurationDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionCartItemRequiredConfigurationListGet({
			...displayOptions,
			show: { orderOperation: ['cartItemRequiredConfigurationListGet'] },
		}) as INodeProperties[]),
		...(descriptionCartCouponListGet({
			...displayOptions,
			show: { orderOperation: ['cartCouponListGet'] },
		}) as INodeProperties[]),
		...(descriptionCartCouponCreatePost({
			...displayOptions,
			show: { orderOperation: ['cartCouponCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionCartSupportListGet({
			...displayOptions,
			show: { orderOperation: ['cartSupportListGet'] },
		}) as INodeProperties[]),
		...(descriptionCartCheckoutGet({
			...displayOptions,
			show: { orderOperation: ['cartCheckoutGet'] },
		}) as INodeProperties[]),
		...(descriptionCartCheckoutPost({
			...displayOptions,
			show: { orderOperation: ['cartCheckoutPost'] },
		}) as INodeProperties[]),
		...(descriptionCartAssignPost({
			...displayOptions,
			show: { orderOperation: ['cartAssignPost'] },
		}) as INodeProperties[]),
		...(descriptionCartCouponDelete({
			...displayOptions,
			show: { orderOperation: ['cartCouponDelete'] },
		}) as INodeProperties[]),
		...(descriptionCartItemConfigurationUpdatePut({
			...displayOptions,
			show: { orderOperation: ['cartItemConfigurationUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionCartSupportCreatePost({
			...displayOptions,
			show: { orderOperation: ['cartSupportCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionCatalogPublicGet({
			...displayOptions,
			show: { orderOperation: ['catalogPublicGet'] },
		}) as INodeProperties[]),
		...(descriptionCatalogPublicOptionsGet({
			...displayOptions,
			show: { orderOperation: ['catalogPublicOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainGet({
			...displayOptions,
			show: { orderOperation: ['domainGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainOptionsGet({
			...displayOptions,
			show: { orderOperation: ['domainOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionEcoGet({
			...displayOptions,
			show: { orderOperation: ['ecoGet'] },
		}) as INodeProperties[]),
		...(descriptionEcoOptionsGet({
			...displayOptions,
			show: { orderOperation: ['ecoOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionEmailDomainGet({
			...displayOptions,
			show: { orderOperation: ['emailDomainGet'] },
		}) as INodeProperties[]),
		...(descriptionEmailDomainOptionsGet({
			...displayOptions,
			show: { orderOperation: ['emailDomainOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionEmailproGet({
			...displayOptions,
			show: { orderOperation: ['emailproGet'] },
		}) as INodeProperties[]),
		...(descriptionEmailproOptionsGet({
			...displayOptions,
			show: { orderOperation: ['emailproOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionExchangeGet({
			...displayOptions,
			show: { orderOperation: ['exchangeGet'] },
		}) as INodeProperties[]),
		...(descriptionExchangeOptionsGet({
			...displayOptions,
			show: { orderOperation: ['exchangeOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLoadbalancingGet({
			...displayOptions,
			show: { orderOperation: ['ipLoadbalancingGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLoadbalancingOptionsGet({
			...displayOptions,
			show: { orderOperation: ['ipLoadbalancingOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseHycuGet({
			...displayOptions,
			show: { orderOperation: ['licenseHycuGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseHycuOptionsGet({
			...displayOptions,
			show: { orderOperation: ['licenseHycuOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensePleskGet({
			...displayOptions,
			show: { orderOperation: ['licensePleskGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensePleskOptionsGet({
			...displayOptions,
			show: { orderOperation: ['licensePleskOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseSqlServerGet({
			...displayOptions,
			show: { orderOperation: ['licenseSqlServerGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseSqlServerOptionsGet({
			...displayOptions,
			show: { orderOperation: ['licenseSqlServerOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseWindowsGet({
			...displayOptions,
			show: { orderOperation: ['licenseWindowsGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseWindowsOptionsGet({
			...displayOptions,
			show: { orderOperation: ['licenseWindowsOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelGet({
			...displayOptions,
			show: { orderOperation: ['licensecPanelGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelOptionsGet({
			...displayOptions,
			show: { orderOperation: ['licensecPanelOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionLogsGet({
			...displayOptions,
			show: { orderOperation: ['logsGet'] },
		}) as INodeProperties[]),
		...(descriptionLogsOptionsGet({
			...displayOptions,
			show: { orderOperation: ['logsOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionNashaGet({
			...displayOptions,
			show: { orderOperation: ['nashaGet'] },
		}) as INodeProperties[]),
		...(descriptionNashaOptionsGet({
			...displayOptions,
			show: { orderOperation: ['nashaOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionNetappGet({
			...displayOptions,
			show: { orderOperation: ['netappGet'] },
		}) as INodeProperties[]),
		...(descriptionNetappOptionsGet({
			...displayOptions,
			show: { orderOperation: ['netappOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionNutanixGet({
			...displayOptions,
			show: { orderOperation: ['nutanixGet'] },
		}) as INodeProperties[]),
		...(descriptionNutanixOptionsGet({
			...displayOptions,
			show: { orderOperation: ['nutanixOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionOffice365PrepaidGet({
			...displayOptions,
			show: { orderOperation: ['office365PrepaidGet'] },
		}) as INodeProperties[]),
		...(descriptionOffice365PrepaidOptionsGet({
			...displayOptions,
			show: { orderOperation: ['office365PrepaidOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionOfficePrepaidGet({
			...displayOptions,
			show: { orderOperation: ['officePrepaidGet'] },
		}) as INodeProperties[]),
		...(descriptionOfficePrepaidOptionsGet({
			...displayOptions,
			show: { orderOperation: ['officePrepaidOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsGet({
			...displayOptions,
			show: { orderOperation: ['okmsGet'] },
		}) as INodeProperties[]),
		...(descriptionOkmsOptionsGet({
			...displayOptions,
			show: { orderOperation: ['okmsOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionOvhCloudConnectGet({
			...displayOptions,
			show: { orderOperation: ['ovhCloudConnectGet'] },
		}) as INodeProperties[]),
		...(descriptionOvhCloudConnectOptionsGet({
			...displayOptions,
			show: { orderOperation: ['ovhCloudConnectOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionPacksProfessionalServicesGet({
			...displayOptions,
			show: { orderOperation: ['packsProfessionalServicesGet'] },
		}) as INodeProperties[]),
		...(descriptionPacksProfessionalServicesOptionsGet({
			...displayOptions,
			show: { orderOperation: ['packsProfessionalServicesOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionPrivateCloudGet({
			...displayOptions,
			show: { orderOperation: ['privateCloudGet'] },
		}) as INodeProperties[]),
		...(descriptionPrivateCloudOptionsGet({
			...displayOptions,
			show: { orderOperation: ['privateCloudOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionPrivateCloudEnterpriseGet({
			...displayOptions,
			show: { orderOperation: ['privateCloudEnterpriseGet'] },
		}) as INodeProperties[]),
		...(descriptionPrivateCloudEnterpriseOptionsGet({
			...displayOptions,
			show: { orderOperation: ['privateCloudEnterpriseOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionPrivateSQLGet({
			...displayOptions,
			show: { orderOperation: ['privateSQLGet'] },
		}) as INodeProperties[]),
		...(descriptionPrivateSQLOptionsGet({
			...displayOptions,
			show: { orderOperation: ['privateSQLOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionSslGatewayGet({
			...displayOptions,
			show: { orderOperation: ['sslGatewayGet'] },
		}) as INodeProperties[]),
		...(descriptionSslGatewayOptionsGet({
			...displayOptions,
			show: { orderOperation: ['sslGatewayOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionTelephonyGet({
			...displayOptions,
			show: { orderOperation: ['telephonyGet'] },
		}) as INodeProperties[]),
		...(descriptionTelephonyOptionsGet({
			...displayOptions,
			show: { orderOperation: ['telephonyOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorGet({
			...displayOptions,
			show: { orderOperation: ['vmwareCloudDirectorGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorOptionsGet({
			...displayOptions,
			show: { orderOperation: ['vmwareCloudDirectorOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorBackupGet({
			...displayOptions,
			show: { orderOperation: ['vmwareCloudDirectorBackupGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorBackupOptionsGet({
			...displayOptions,
			show: { orderOperation: ['vmwareCloudDirectorBackupOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionVpsGet({
			...displayOptions,
			show: { orderOperation: ['vpsGet'] },
		}) as INodeProperties[]),
		...(descriptionVpsOptionsGet({
			...displayOptions,
			show: { orderOperation: ['vpsOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionWebHostingGet({
			...displayOptions,
			show: { orderOperation: ['webHostingGet'] },
		}) as INodeProperties[]),
		...(descriptionWebHostingOptionsGet({
			...displayOptions,
			show: { orderOperation: ['webHostingOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionWebPaaSGet({
			...displayOptions,
			show: { orderOperation: ['webPaaSGet'] },
		}) as INodeProperties[]),
		...(descriptionWebPaaSOptionsGet({
			...displayOptions,
			show: { orderOperation: ['webPaaSOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraGet({
			...displayOptions,
			show: { orderOperation: ['zimbraGet'] },
		}) as INodeProperties[]),
		...(descriptionZimbraOptionsGet({
			...displayOptions,
			show: { orderOperation: ['zimbraOptionsGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelListGet({
			...displayOptions,
			show: { orderOperation: ['licensecPanelListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelNewListGet({
			...displayOptions,
			show: { orderOperation: ['licensecPanelNewListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelNewDurationGet({
			...displayOptions,
			show: { orderOperation: ['licensecPanelNewDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelServiceGet({
			...displayOptions,
			show: { orderOperation: ['licensecPanelServiceGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelServiceUpgradeListGet({
			...displayOptions,
			show: { orderOperation: ['licensecPanelServiceUpgradeListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelServiceUpgradeDurationGet({
			...displayOptions,
			show: { orderOperation: ['licensecPanelServiceUpgradeDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelNewCreatePost({
			...displayOptions,
			show: { orderOperation: ['licensecPanelNewCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicensecPanelServiceUpgradeCreatePost({
			...displayOptions,
			show: { orderOperation: ['licensecPanelServiceUpgradeCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicenseofficeListGet({
			...displayOptions,
			show: { orderOperation: ['licenseofficeListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseofficeNewListGet({
			...displayOptions,
			show: { orderOperation: ['licenseofficeNewListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseofficeNewDurationGet({
			...displayOptions,
			show: { orderOperation: ['licenseofficeNewDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseofficeServiceGet({
			...displayOptions,
			show: { orderOperation: ['licenseofficeServiceGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseofficeServiceUpgradeListGet({
			...displayOptions,
			show: { orderOperation: ['licenseofficeServiceUpgradeListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseofficeServiceUpgradeDurationGet({
			...displayOptions,
			show: { orderOperation: ['licenseofficeServiceUpgradeDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicenseofficeNewCreatePost({
			...displayOptions,
			show: { orderOperation: ['licenseofficeNewCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicenseofficeServiceUpgradeCreatePost({
			...displayOptions,
			show: { orderOperation: ['licenseofficeServiceUpgradeCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicensepleskListGet({
			...displayOptions,
			show: { orderOperation: ['licensepleskListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensepleskNewListGet({
			...displayOptions,
			show: { orderOperation: ['licensepleskNewListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensepleskNewDurationGet({
			...displayOptions,
			show: { orderOperation: ['licensepleskNewDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensepleskServiceGet({
			...displayOptions,
			show: { orderOperation: ['licensepleskServiceGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensepleskServiceUpgradeListGet({
			...displayOptions,
			show: { orderOperation: ['licensepleskServiceUpgradeListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensepleskServiceUpgradeDurationGet({
			...displayOptions,
			show: { orderOperation: ['licensepleskServiceUpgradeDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensepleskNewCreatePost({
			...displayOptions,
			show: { orderOperation: ['licensepleskNewCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicensepleskServiceUpgradeCreatePost({
			...displayOptions,
			show: { orderOperation: ['licensepleskServiceUpgradeCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicensesqlserverListGet({
			...displayOptions,
			show: { orderOperation: ['licensesqlserverListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensesqlserverNewListGet({
			...displayOptions,
			show: { orderOperation: ['licensesqlserverNewListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensesqlserverNewDurationGet({
			...displayOptions,
			show: { orderOperation: ['licensesqlserverNewDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensesqlserverServiceGet({
			...displayOptions,
			show: { orderOperation: ['licensesqlserverServiceGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensesqlserverServiceUpgradeListGet({
			...displayOptions,
			show: { orderOperation: ['licensesqlserverServiceUpgradeListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensesqlserverServiceUpgradeDurationGet({
			...displayOptions,
			show: { orderOperation: ['licensesqlserverServiceUpgradeDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensesqlserverNewCreatePost({
			...displayOptions,
			show: { orderOperation: ['licensesqlserverNewCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicensesqlserverServiceUpgradeCreatePost({
			...displayOptions,
			show: { orderOperation: ['licensesqlserverServiceUpgradeCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicensewindowsListGet({
			...displayOptions,
			show: { orderOperation: ['licensewindowsListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensewindowsNewListGet({
			...displayOptions,
			show: { orderOperation: ['licensewindowsNewListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensewindowsNewDurationGet({
			...displayOptions,
			show: { orderOperation: ['licensewindowsNewDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensewindowsServiceGet({
			...displayOptions,
			show: { orderOperation: ['licensewindowsServiceGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensewindowsServiceUpgradeListGet({
			...displayOptions,
			show: { orderOperation: ['licensewindowsServiceUpgradeListGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensewindowsServiceUpgradeDurationGet({
			...displayOptions,
			show: { orderOperation: ['licensewindowsServiceUpgradeDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionLicensewindowsNewCreatePost({
			...displayOptions,
			show: { orderOperation: ['licensewindowsNewCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionLicensewindowsServiceUpgradeCreatePost({
			...displayOptions,
			show: { orderOperation: ['licensewindowsServiceUpgradeCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionEmailexchangeOrganizationListGet({
			...displayOptions,
			show: { orderOperation: ['emailexchangeOrganizationListGet'] },
		}) as INodeProperties[]),
		...(descriptionEmailexchangeServiceGet({
			...displayOptions,
			show: { orderOperation: ['emailexchangeServiceGet'] },
		}) as INodeProperties[]),
		...(descriptionEmailexchangeServiceCreatePost({
			...displayOptions,
			show: { orderOperation: ['emailexchangeServiceCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionEmailexchangeAccountGet({
			...displayOptions,
			show: { orderOperation: ['emailexchangeAccountGet'] },
		}) as INodeProperties[]),
		...(descriptionEmailexchangeAccountUpgradeCreatePost({
			...displayOptions,
			show: { orderOperation: ['emailexchangeAccountUpgradeCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionEmailexchangeDiskSpaceCreatePost({
			...displayOptions,
			show: { orderOperation: ['emailexchangeDiskSpaceCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionEmailexchangeOutlookCreatePost({
			...displayOptions,
			show: { orderOperation: ['emailexchangeOutlookCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionEmailexchangeUpgradeCreatePost({
			...displayOptions,
			show: { orderOperation: ['emailexchangeUpgradeCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionEmailproOrganizationListGet({
			...displayOptions,
			show: { orderOperation: ['emailproOrganizationListGet'] },
		}) as INodeProperties[]),
		...(descriptionEmailproOrganizationCreatePost({
			...displayOptions,
			show: { orderOperation: ['emailproOrganizationCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionVpsadditionalDiskListGet({
			...displayOptions,
			show: { orderOperation: ['vpsadditionalDiskListGet'] },
		}) as INodeProperties[]),
		...(descriptionVpsadditionalDiskDurationGet({
			...displayOptions,
			show: { orderOperation: ['vpsadditionalDiskDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionVpsadditionalDiskCreatePost({
			...displayOptions,
			show: { orderOperation: ['vpsadditionalDiskCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionVpsautomatedBackupListGet({
			...displayOptions,
			show: { orderOperation: ['vpsautomatedBackupListGet'] },
		}) as INodeProperties[]),
		...(descriptionVpsautomatedBackupDurationGet({
			...displayOptions,
			show: { orderOperation: ['vpsautomatedBackupDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionVpsautomatedBackupCreatePost({
			...displayOptions,
			show: { orderOperation: ['vpsautomatedBackupCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionVpssnapshotListGet({
			...displayOptions,
			show: { orderOperation: ['vpssnapshotListGet'] },
		}) as INodeProperties[]),
		...(descriptionVpssnapshotDurationGet({
			...displayOptions,
			show: { orderOperation: ['vpssnapshotDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionVpssnapshotCreatePost({
			...displayOptions,
			show: { orderOperation: ['vpssnapshotCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionCloudprojectListGet({
			...displayOptions,
			show: { orderOperation: ['cloudprojectListGet'] },
		}) as INodeProperties[]),
		...(descriptionCloudprojectGet({
			...displayOptions,
			show: { orderOperation: ['cloudprojectGet'] },
		}) as INodeProperties[]),
		...(descriptionCloudprojectCreatePost({
			...displayOptions,
			show: { orderOperation: ['cloudprojectCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionFreefaxorganizationListGet({
			...displayOptions,
			show: { orderOperation: ['freefaxorganizationListGet'] },
		}) as INodeProperties[]),
		...(descriptionFreefaxnumberGet({
			...displayOptions,
			show: { orderOperation: ['freefaxnumberGet'] },
		}) as INodeProperties[]),
		...(descriptionFreefaxCreatePost({
			...displayOptions,
			show: { orderOperation: ['freefaxCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOverTheBoxListGet({
			...displayOptions,
			show: { orderOperation: ['overTheBoxListGet'] },
		}) as INodeProperties[]),
		...(descriptionOverTheBoxGet({
			...displayOptions,
			show: { orderOperation: ['overTheBoxGet'] },
		}) as INodeProperties[]),
		...(descriptionOverTheBoxCreatePost({
			...displayOptions,
			show: { orderOperation: ['overTheBoxCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOverTheBoxOrderCreatePost({
			...displayOptions,
			show: { orderOperation: ['overTheBoxOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionOverTheBoxDeviceGet({
			...displayOptions,
			show: { orderOperation: ['overTheBoxDeviceGet'] },
		}) as INodeProperties[]),
		...(descriptionSaascsp2ListGet({
			...displayOptions,
			show: { orderOperation: ['saascsp2ListGet'] },
		}) as INodeProperties[]),
		...(descriptionSaascsp2ProductGet({
			...displayOptions,
			show: { orderOperation: ['saascsp2ProductGet'] },
		}) as INodeProperties[]),
		...(descriptionSaascsp2CreatePost({
			...displayOptions,
			show: { orderOperation: ['saascsp2CreatePost'] },
		}) as INodeProperties[]),
		...(descriptionSmsListGet({
			...displayOptions,
			show: { orderOperation: ['smsListGet'] },
		}) as INodeProperties[]),
		...(descriptionSmsProductGet({
			...displayOptions,
			show: { orderOperation: ['smsProductGet'] },
		}) as INodeProperties[]),
		...(descriptionSmsProductDurationGet({
			...displayOptions,
			show: { orderOperation: ['smsProductDurationGet'] },
		}) as INodeProperties[]),
		...(descriptionSmsCreatePost({
			...displayOptions,
			show: { orderOperation: ['smsCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionSmsProductCreatePost({
			...displayOptions,
			show: { orderOperation: ['smsProductCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionVeeamCloudConnectListGet({
			...displayOptions,
			show: { orderOperation: ['veeamCloudConnectListGet'] },
		}) as INodeProperties[]),
		...(descriptionVeeamCloudConnectGet({
			...displayOptions,
			show: { orderOperation: ['veeamCloudConnectGet'] },
		}) as INodeProperties[]),
		...(descriptionVeeamCloudConnectCreatePost({
			...displayOptions,
			show: { orderOperation: ['veeamCloudConnectCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionVeeamCloudConnectConfigCreatePost({
			...displayOptions,
			show: { orderOperation: ['veeamCloudConnectConfigCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionVeeamCloudConnectOptionCreatePost({
			...displayOptions,
			show: { orderOperation: ['veeamCloudConnectOptionCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionXdslspareListGet({
			...displayOptions,
			show: { orderOperation: ['xdslspareListGet'] },
		}) as INodeProperties[]),
		...(descriptionXdslspareCreatePost({
			...displayOptions,
			show: { orderOperation: ['xdslspareCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBandwidthVrackListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBandwidthVrackListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBandwidthVrackPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBandwidthVrackPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBandwidthVrackPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeBandwidthVrackPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBandwidthVrackServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBandwidthVrackServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBaremetalPrivateBandwidthListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBaremetalPrivateBandwidthListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBaremetalPrivateBandwidthPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBaremetalPrivateBandwidthPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBaremetalPrivateBandwidthPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeBaremetalPrivateBandwidthPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBaremetalPrivateBandwidthServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBaremetalPrivateBandwidthServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBaremetalPublicBandwidthListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBaremetalPublicBandwidthListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBaremetalPublicBandwidthPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBaremetalPublicBandwidthPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBaremetalPublicBandwidthPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeBaremetalPublicBandwidthPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeBaremetalPublicBandwidthServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeBaremetalPublicBandwidthServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeCephAASListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeCephAASListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeCephAASPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeCephAASPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeCephAASPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeCephAASPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeCephAASServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeCephAASServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeCloudDBListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeCloudDBListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeCloudDBPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeCloudDBPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeCloudDBPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeCloudDBPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeCloudDBServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeCloudDBServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeEmailDomainListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeEmailDomainListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeEmailDomainPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeEmailDomainPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeEmailDomainPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeEmailDomainPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeEmailDomainServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeEmailDomainServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeIPLoadBalancingListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeIPLoadBalancingListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeIPLoadBalancingPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeIPLoadBalancingPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeIPLoadBalancingPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeIPLoadBalancingPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeIPLoadBalancingServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeIPLoadBalancingServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicenseHycuListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicenseHycuListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicenseHycuPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicenseHycuPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicenseHycuPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeLicenseHycuPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicenseHycuServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicenseHycuServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicensePleskListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicensePleskListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicensePleskPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicensePleskPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicensePleskPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeLicensePleskPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicensePleskServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicensePleskServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicensecPanelListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicensecPanelListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicensecPanelPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicensecPanelPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicensecPanelPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeLicensecPanelPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLicensecPanelServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLicensecPanelServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLogsListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLogsListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLogsPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLogsPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLogsPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeLogsPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeLogsServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeLogsServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeMetricsListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeMetricsListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeMetricsPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeMetricsPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeMetricsPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeMetricsPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeMetricsServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeMetricsServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeMicrosoftExchangeListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeMicrosoftExchangeListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeMicrosoftExchangePlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeMicrosoftExchangePlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeMicrosoftExchangePlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeMicrosoftExchangePlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeMicrosoftExchangeServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeMicrosoftExchangeServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateCloudListGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateCloudListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateCloudManagementFeeListGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateCloudManagementFeeListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateCloudManagementFeePlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateCloudManagementFeePlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateCloudManagementFeePlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateCloudManagementFeePlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateCloudManagementFeeServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateCloudManagementFeeServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateCloudPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateCloudPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateCloudPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateCloudPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateCloudServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateCloudServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateSQLListGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateSQLListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateSQLPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateSQLPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateSQLPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateSQLPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradePrivateSQLServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradePrivateSQLServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeSSLGatewayListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeSSLGatewayListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeSSLGatewayPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeSSLGatewayPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeSSLGatewayPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeSSLGatewayPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeSSLGatewayServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeSSLGatewayServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeVPSAdditionalDiskListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeVPSAdditionalDiskListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeVPSAdditionalDiskPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeVPSAdditionalDiskPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeVPSAdditionalDiskPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeVPSAdditionalDiskPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeVPSAdditionalDiskServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeVPSAdditionalDiskServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeVPSListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeVPSListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeVPSPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeVPSPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeVPSPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeVPSPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeVPSServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeVPSServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeWebHostingListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeWebHostingListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeWebHostingPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeWebHostingPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeWebHostingPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeWebHostingPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeWebHostingServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeWebHostingServiceGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeZimbraListGET({
			...displayOptions,
			show: { orderOperation: ['upgradeZimbraListGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeZimbraPlanGET({
			...displayOptions,
			show: { orderOperation: ['upgradeZimbraPlanGET'] },
		}) as INodeProperties[]),
		...(descriptionupgradeZimbraPlanPOST({
			...displayOptions,
			show: { orderOperation: ['upgradeZimbraPlanPOST'] },
		}) as INodeProperties[]),
		...(descriptionupgradeZimbraServiceGET({
			...displayOptions,
			show: { orderOperation: ['upgradeZimbraServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionBackupServicesListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionBackupServicesListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionBackupServicesServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionBackupServicesServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionBaremetalServersListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionBaremetalServersListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionBaremetalServersServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionBaremetalServersServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionBaremetalServersServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionBaremetalServersServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionCloudListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionCloudListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionCloudServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionCloudServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionCloudServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionCloudServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDNSListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDNSListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDNSServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDNSServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDNSServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDNSServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDedicatedListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDedicatedListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDedicatedServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDedicatedServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDedicatedServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDedicatedServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDomainListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDomainListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDomainServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDomainServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionDomainServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionDomainServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionEmailProListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionEmailProListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionEmailProServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionEmailProServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionEmailProServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionEmailProServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionIPLoadBalancingListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionIPLoadBalancingListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionIPLoadBalancingServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionIPLoadBalancingServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionIPLoadBalancingServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionIPLoadBalancingServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionLicenseHycuListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionLicenseHycuListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionLicenseHycuServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionLicenseHycuServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionLicenseHycuServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionLicenseHycuServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionLogsListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionLogsListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionLogsServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionLogsServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionLogsServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionLogsServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionMicrosoftExchangeListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionMicrosoftExchangeListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionMicrosoftExchangeServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionMicrosoftExchangeServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionMicrosoftExchangeServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionMicrosoftExchangeServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionMicrosoftListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionMicrosoftListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionMicrosoftServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionMicrosoftServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionMicrosoftServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionMicrosoftServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionNutanixListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionNutanixListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionNutanixServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionNutanixServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionNutanixServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionNutanixServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionOffice365PrepaidListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionOffice365PrepaidListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionOffice365PrepaidServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionOffice365PrepaidServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionOffice365PrepaidServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionOffice365PrepaidServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionOfficePrepaidListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionOfficePrepaidListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionOfficePrepaidServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionOfficePrepaidServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionOfficePrepaidServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionOfficePrepaidServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudEnterpriseListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudEnterpriseListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudEnterpriseServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudEnterpriseServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudEnterpriseServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudEnterpriseServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudResellerEnterpriseListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudResellerEnterpriseListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudResellerEnterpriseServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudResellerEnterpriseServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudResellerEnterpriseServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudResellerEnterpriseServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudResellerListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudResellerListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudResellerServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudResellerServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudResellerServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudResellerServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionPrivateCloudServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionPrivateCloudServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSMSListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSMSListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSMSServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSMSServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSMSServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSMSServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSSLGatewayListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSSLGatewayListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSSLGatewayServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSSLGatewayServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSSLGatewayServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSSLGatewayServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSharepointListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSharepointListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSharepointServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSharepointServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSharepointServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSharepointServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSncNetworkServicesListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSncNetworkServicesListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSncNetworkServicesServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSncNetworkServicesServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionSncNetworkServicesServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionSncNetworkServicesServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVDIListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVDIListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVDIServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVDIServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVDIServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVDIServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVPSListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVPSListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVPSServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVPSServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVPSServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVPSServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVmwareCloudDirectorBackupListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVmwareCloudDirectorBackupListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVmwareCloudDirectorBackupServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVmwareCloudDirectorBackupServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVmwareCloudDirectorListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVmwareCloudDirectorListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVmwareCloudDirectorServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVmwareCloudDirectorServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVmwareCloudDirectorServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVmwareCloudDirectorServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVrackListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVrackListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVrackServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVrackServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionVrackServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionVrackServicePOST'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionWebHostingListGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionWebHostingListGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionWebHostingServiceGET({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionWebHostingServiceGET'] },
		}) as INodeProperties[]),
		...(descriptioncartServiceOptionWebHostingServicePOST({
			...displayOptions,
			show: { orderOperation: ['cartServiceOptionWebHostingServicePOST'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('orderOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'cartListGet':
			return executeCartListGet.call(this, itemIndex ?? 0);
		case 'cartCreatePost':
			return executeCartCreatePost.call(this, itemIndex ?? 0);
		case 'cartDeleteDelete':
			return executeCartDeleteDelete.call(this, itemIndex ?? 0);
		case 'cartGetGet':
			return executeCartGetGet.call(this, itemIndex ?? 0);
		case 'cartUpdatePut':
			return executeCartUpdatePut.call(this, itemIndex ?? 0);
		case 'cartSummaryGet':
			return executeCartSummaryGet.call(this, itemIndex ?? 0);
		case 'cartItemListGet':
			return executeCartItemListGet.call(this, itemIndex ?? 0);
		case 'cartItemGetGet':
			return executeCartItemGetGet.call(this, itemIndex ?? 0);
		case 'cartItemUpdatePut':
			return executeCartItemUpdatePut.call(this, itemIndex ?? 0);
		case 'cartItemDeleteDelete':
			return executeCartItemDeleteDelete.call(this, itemIndex ?? 0);
		case 'cartItemConfigurationListGet':
			return executeCartItemConfigurationListGet.call(this, itemIndex ?? 0);
		case 'cartItemConfigurationCreatePost':
			return executeCartItemConfigurationCreatePost.call(this, itemIndex ?? 0);
		case 'cartItemConfigurationGetGet':
			return executeCartItemConfigurationGetGet.call(this, itemIndex ?? 0);
		case 'cartItemConfigurationDeleteDelete':
			return executeCartItemConfigurationDeleteDelete.call(this, itemIndex ?? 0);
		case 'cartItemRequiredConfigurationListGet':
			return executeCartItemRequiredConfigurationListGet.call(this, itemIndex ?? 0);
		case 'cartCouponListGet':
			return executeCartCouponListGet.call(this, itemIndex ?? 0);
		case 'cartCouponCreatePost':
			return executeCartCouponCreatePost.call(this, itemIndex ?? 0);
		case 'cartSupportListGet':
			return executeCartSupportListGet.call(this, itemIndex ?? 0);
		case 'cartSupportCreatePost':
			return executeCartSupportCreatePost.call(this, itemIndex ?? 0);
		case 'cartCheckoutGet':
			return executeCartCheckoutGet.call(this, itemIndex ?? 0);
		case 'cartCheckoutPost':
			return executeCartCheckoutPost.call(this, itemIndex ?? 0);
		case 'cartAssignPost':
			return executeCartAssignPost.call(this, itemIndex ?? 0);
		case 'cartCouponDelete':
			return executeCartCouponDelete.call(this, itemIndex ?? 0);
		case 'cartItemConfigurationUpdatePut':
			return executeCartItemConfigurationUpdatePut.call(this, itemIndex ?? 0);
		case 'cartLicenseHycuGET':
			return executeCartLicenseHycuGET.call(this, itemIndex ?? 0);
		case 'cartLicenseHycuPOST':
			return executeCartLicenseHycuPOST.call(this, itemIndex ?? 0);
		case 'cartLicensePleskGET':
			return executeCartLicensePleskGET.call(this, itemIndex ?? 0);
		case 'cartLicensePleskPOST':
			return executeCartLicensePleskPOST.call(this, itemIndex ?? 0);
		case 'cartLicensePleskOptionsGET':
			return executeCartLicensePleskOptionsGET.call(this, itemIndex ?? 0);
		case 'cartLicensePleskOptionsPOST':
			return executeCartLicensePleskOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartLicenseSqlServerGET':
			return executeCartLicenseSqlServerGET.call(this, itemIndex ?? 0);
		case 'cartLicenseSqlServerPOST':
			return executeCartLicenseSqlServerPOST.call(this, itemIndex ?? 0);
		case 'cartLicenseWindowsGET':
			return executeCartLicenseWindowsGET.call(this, itemIndex ?? 0);
		case 'cartLicenseWindowsPOST':
			return executeCartLicenseWindowsPOST.call(this, itemIndex ?? 0);
		case 'cartLicensecPanelGET':
			return executeCartLicensecPanelGET.call(this, itemIndex ?? 0);
		case 'cartLicensecPanelPOST':
			return executeCartLicensecPanelPOST.call(this, itemIndex ?? 0);
		case 'cartLogsGET':
			return executeCartLogsGET.call(this, itemIndex ?? 0);
		case 'cartLogsPOST':
			return executeCartLogsPOST.call(this, itemIndex ?? 0);
		case 'cartLogsOptionsGET':
			return executeCartLogsOptionsGET.call(this, itemIndex ?? 0);
		case 'cartLogsOptionsPOST':
			return executeCartLogsOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartManagedCMSGET':
			return executeCartManagedCMSGET.call(this, itemIndex ?? 0);
		case 'cartManagedCMSPOST':
			return executeCartManagedCMSPOST.call(this, itemIndex ?? 0);
		case 'cartManagedCMSOptionsGET':
			return executeCartManagedCMSOptionsGET.call(this, itemIndex ?? 0);
		case 'cartManagedCMSOptionsPOST':
			return executeCartManagedCMSOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartManagedServicesGET':
			return executeCartManagedServicesGET.call(this, itemIndex ?? 0);
		case 'cartManagedServicesPOST':
			return executeCartManagedServicesPOST.call(this, itemIndex ?? 0);
		case 'cartManagedServicesOptionsGET':
			return executeCartManagedServicesOptionsGET.call(this, itemIndex ?? 0);
		case 'cartManagedServicesOptionsPOST':
			return executeCartManagedServicesOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartMetricsGET':
			return executeCartMetricsGET.call(this, itemIndex ?? 0);
		case 'cartMetricsPOST':
			return executeCartMetricsPOST.call(this, itemIndex ?? 0);
		case 'cartMetricsOptionsGET':
			return executeCartMetricsOptionsGET.call(this, itemIndex ?? 0);
		case 'cartMetricsOptionsPOST':
			return executeCartMetricsOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartMicrosoftGET':
			return executeCartMicrosoftGET.call(this, itemIndex ?? 0);
		case 'cartMicrosoftPOST':
			return executeCartMicrosoftPOST.call(this, itemIndex ?? 0);
		case 'cartMicrosoftOptionsGET':
			return executeCartMicrosoftOptionsGET.call(this, itemIndex ?? 0);
		case 'cartMicrosoftOptionsPOST':
			return executeCartMicrosoftOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartNashaGET':
			return executeCartNashaGET.call(this, itemIndex ?? 0);
		case 'cartNashaPOST':
			return executeCartNashaPOST.call(this, itemIndex ?? 0);
		case 'cartNashaOptionsGET':
			return executeCartNashaOptionsGET.call(this, itemIndex ?? 0);
		case 'cartNashaOptionsPOST':
			return executeCartNashaOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartNetappGET':
			return executeCartNetappGET.call(this, itemIndex ?? 0);
		case 'cartNetappPOST':
			return executeCartNetappPOST.call(this, itemIndex ?? 0);
		case 'cartNetappOptionsGET':
			return executeCartNetappOptionsGET.call(this, itemIndex ?? 0);
		case 'cartNetappOptionsPOST':
			return executeCartNetappOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartNutanixGET':
			return executeCartNutanixGET.call(this, itemIndex ?? 0);
		case 'cartNutanixPOST':
			return executeCartNutanixPOST.call(this, itemIndex ?? 0);
		case 'cartNutanixOptionsGET':
			return executeCartNutanixOptionsGET.call(this, itemIndex ?? 0);
		case 'cartNutanixOptionsPOST':
			return executeCartNutanixOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartOffice365GET':
			return executeCartOffice365GET.call(this, itemIndex ?? 0);
		case 'cartOffice365POST':
			return executeCartOffice365POST.call(this, itemIndex ?? 0);
		case 'cartOffice365OptionsGET':
			return executeCartOffice365OptionsGET.call(this, itemIndex ?? 0);
		case 'cartOffice365OptionsPOST':
			return executeCartOffice365OptionsPOST.call(this, itemIndex ?? 0);
		case 'cartOffice365PrepaidGET':
			return executeCartOffice365PrepaidGET.call(this, itemIndex ?? 0);
		case 'cartOffice365PrepaidPOST':
			return executeCartOffice365PrepaidPOST.call(this, itemIndex ?? 0);
		case 'cartOffice365PrepaidOptionsGET':
			return executeCartOffice365PrepaidOptionsGET.call(this, itemIndex ?? 0);
		case 'cartOffice365PrepaidOptionsPOST':
			return executeCartOffice365PrepaidOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartOfficePrepaidGET':
			return executeCartOfficePrepaidGET.call(this, itemIndex ?? 0);
		case 'cartOfficePrepaidPOST':
			return executeCartOfficePrepaidPOST.call(this, itemIndex ?? 0);
		case 'cartOfficePrepaidOptionsGET':
			return executeCartOfficePrepaidOptionsGET.call(this, itemIndex ?? 0);
		case 'cartOfficePrepaidOptionsPOST':
			return executeCartOfficePrepaidOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartOkmsGET':
			return executeCartOkmsGET.call(this, itemIndex ?? 0);
		case 'cartOkmsPOST':
			return executeCartOkmsPOST.call(this, itemIndex ?? 0);
		case 'cartOtbGET':
			return executeCartOtbGET.call(this, itemIndex ?? 0);
		case 'cartOtbPOST':
			return executeCartOtbPOST.call(this, itemIndex ?? 0);
		case 'cartOtbOptionsGET':
			return executeCartOtbOptionsGET.call(this, itemIndex ?? 0);
		case 'cartOtbOptionsPOST':
			return executeCartOtbOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartOtbResellerGET':
			return executeCartOtbResellerGET.call(this, itemIndex ?? 0);
		case 'cartOtbResellerPOST':
			return executeCartOtbResellerPOST.call(this, itemIndex ?? 0);
		case 'cartOtbResellerOptionsGET':
			return executeCartOtbResellerOptionsGET.call(this, itemIndex ?? 0);
		case 'cartOtbResellerOptionsPOST':
			return executeCartOtbResellerOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartOvhCloudConnectGET':
			return executeCartOvhCloudConnectGET.call(this, itemIndex ?? 0);
		case 'cartOvhCloudConnectPOST':
			return executeCartOvhCloudConnectPOST.call(this, itemIndex ?? 0);
		case 'cartPaasmonGET':
			return executeCartPaasmonGET.call(this, itemIndex ?? 0);
		case 'cartPaasmonPOST':
			return executeCartPaasmonPOST.call(this, itemIndex ?? 0);
		case 'cartPacksProfessionalServicesGET':
			return executeCartPacksProfessionalServicesGET.call(this, itemIndex ?? 0);
		case 'cartPacksProfessionalServicesPOST':
			return executeCartPacksProfessionalServicesPOST.call(this, itemIndex ?? 0);
		case 'cartPacksProfessionalServicesOptionsGET':
			return executeCartPacksProfessionalServicesOptionsGET.call(this, itemIndex ?? 0);
		case 'cartPacksProfessionalServicesOptionsPOST':
			return executeCartPacksProfessionalServicesOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartPowerHostingGET':
			return executeCartPowerHostingGET.call(this, itemIndex ?? 0);
		case 'cartPowerHostingPOST':
			return executeCartPowerHostingPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudGET':
			return executeCartPrivateCloudGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudPOST':
			return executeCartPrivateCloudPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudOptionsGET':
			return executeCartPrivateCloudOptionsGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudOptionsPOST':
			return executeCartPrivateCloudOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudCDIGET':
			return executeCartPrivateCloudCDIGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudCDIPOST':
			return executeCartPrivateCloudCDIPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudCDIOptionsGET':
			return executeCartPrivateCloudCDIOptionsGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudCDIOptionsPOST':
			return executeCartPrivateCloudCDIOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudDCGET':
			return executeCartPrivateCloudDCGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudDCPOST':
			return executeCartPrivateCloudDCPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudDCOptionsGET':
			return executeCartPrivateCloudDCOptionsGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudDCOptionsPOST':
			return executeCartPrivateCloudDCOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudEnterpriseGET':
			return executeCartPrivateCloudEnterpriseGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudEnterprisePOST':
			return executeCartPrivateCloudEnterprisePOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudEnterpriseOptionsGET':
			return executeCartPrivateCloudEnterpriseOptionsGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudEnterpriseOptionsPOST':
			return executeCartPrivateCloudEnterpriseOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudResellerGET':
			return executeCartPrivateCloudResellerGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudResellerPOST':
			return executeCartPrivateCloudResellerPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudResellerOptionsGET':
			return executeCartPrivateCloudResellerOptionsGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudResellerOptionsPOST':
			return executeCartPrivateCloudResellerOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudResellerEnterpriseGET':
			return executeCartPrivateCloudResellerEnterpriseGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudResellerEnterprisePOST':
			return executeCartPrivateCloudResellerEnterprisePOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudResellerEnterpriseOptionsGET':
			return executeCartPrivateCloudResellerEnterpriseOptionsGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudResellerEnterpriseOptionsPOST':
			return executeCartPrivateCloudResellerEnterpriseOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudSDDCGET':
			return executeCartPrivateCloudSDDCGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudSDDCPOST':
			return executeCartPrivateCloudSDDCPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudSDDCOptionsGET':
			return executeCartPrivateCloudSDDCOptionsGET.call(this, itemIndex ?? 0);
		case 'cartPrivateCloudSDDCOptionsPOST':
			return executeCartPrivateCloudSDDCOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartPrivateSQLGET':
			return executeCartPrivateSQLGET.call(this, itemIndex ?? 0);
		case 'cartPrivateSQLPOST':
			return executeCartPrivateSQLPOST.call(this, itemIndex ?? 0);
		case 'cartResellerGET':
			return executeCartResellerGET.call(this, itemIndex ?? 0);
		case 'cartResellerPOST':
			return executeCartResellerPOST.call(this, itemIndex ?? 0);
		case 'cartSharepointGET':
			return executeCartSharepointGET.call(this, itemIndex ?? 0);
		case 'cartSharepointPOST':
			return executeCartSharepointPOST.call(this, itemIndex ?? 0);
		case 'cartSharepointOptionsGET':
			return executeCartSharepointOptionsGET.call(this, itemIndex ?? 0);
		case 'cartSharepointOptionsPOST':
			return executeCartSharepointOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartSmsGET':
			return executeCartSmsGET.call(this, itemIndex ?? 0);
		case 'cartSmsPOST':
			return executeCartSmsPOST.call(this, itemIndex ?? 0);
		case 'cartSncNetworkServicesGET':
			return executeCartSncNetworkServicesGET.call(this, itemIndex ?? 0);
		case 'cartSncNetworkServicesPOST':
			return executeCartSncNetworkServicesPOST.call(this, itemIndex ?? 0);
		case 'cartSncNetworkServicesOptionsGET':
			return executeCartSncNetworkServicesOptionsGET.call(this, itemIndex ?? 0);
		case 'cartSncNetworkServicesOptionsPOST':
			return executeCartSncNetworkServicesOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartSslComodoGET':
			return executeCartSslComodoGET.call(this, itemIndex ?? 0);
		case 'cartSslComodoPOST':
			return executeCartSslComodoPOST.call(this, itemIndex ?? 0);
		case 'cartSslComodoOptionsGET':
			return executeCartSslComodoOptionsGET.call(this, itemIndex ?? 0);
		case 'cartSslComodoOptionsPOST':
			return executeCartSslComodoOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartSslGatewayGET':
			return executeCartSslGatewayGET.call(this, itemIndex ?? 0);
		case 'cartSslGatewayPOST':
			return executeCartSslGatewayPOST.call(this, itemIndex ?? 0);
		case 'cartSslGatewayOptionsGET':
			return executeCartSslGatewayOptionsGET.call(this, itemIndex ?? 0);
		case 'cartSslGatewayOptionsPOST':
			return executeCartSslGatewayOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartTelephonyGET':
			return executeCartTelephonyGET.call(this, itemIndex ?? 0);
		case 'cartTelephonyPOST':
			return executeCartTelephonyPOST.call(this, itemIndex ?? 0);
		case 'cartTelephonyOptionsGET':
			return executeCartTelephonyOptionsGET.call(this, itemIndex ?? 0);
		case 'cartTelephonyOptionsPOST':
			return executeCartTelephonyOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVdiGET':
			return executeCartVdiGET.call(this, itemIndex ?? 0);
		case 'cartVdiPOST':
			return executeCartVdiPOST.call(this, itemIndex ?? 0);
		case 'cartVdiOptionsGET':
			return executeCartVdiOptionsGET.call(this, itemIndex ?? 0);
		case 'cartVdiOptionsPOST':
			return executeCartVdiOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVeeamEnterpriseGET':
			return executeCartVeeamEnterpriseGET.call(this, itemIndex ?? 0);
		case 'cartVeeamEnterprisePOST':
			return executeCartVeeamEnterprisePOST.call(this, itemIndex ?? 0);
		case 'cartVeeamEnterpriseOptionsGET':
			return executeCartVeeamEnterpriseOptionsGET.call(this, itemIndex ?? 0);
		case 'cartVeeamEnterpriseOptionsPOST':
			return executeCartVeeamEnterpriseOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVeeamccGET':
			return executeCartVeeamccGET.call(this, itemIndex ?? 0);
		case 'cartVeeamccPOST':
			return executeCartVeeamccPOST.call(this, itemIndex ?? 0);
		case 'cartVeeamccOptionsGET':
			return executeCartVeeamccOptionsGET.call(this, itemIndex ?? 0);
		case 'cartVeeamccOptionsPOST':
			return executeCartVeeamccOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVideocenterGET':
			return executeCartVideocenterGET.call(this, itemIndex ?? 0);
		case 'cartVideocenterPOST':
			return executeCartVideocenterPOST.call(this, itemIndex ?? 0);
		case 'cartVideocenterOptionsGET':
			return executeCartVideocenterOptionsGET.call(this, itemIndex ?? 0);
		case 'cartVideocenterOptionsPOST':
			return executeCartVideocenterOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVmwareCloudDirectorGET':
			return executeCartVmwareCloudDirectorGET.call(this, itemIndex ?? 0);
		case 'cartVmwareCloudDirectorPOST':
			return executeCartVmwareCloudDirectorPOST.call(this, itemIndex ?? 0);
		case 'cartVmwareCloudDirectorOptionsGET':
			return executeCartVmwareCloudDirectorOptionsGET.call(this, itemIndex ?? 0);
		case 'cartVmwareCloudDirectorOptionsPOST':
			return executeCartVmwareCloudDirectorOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVmwareCloudDirectorBackupGET':
			return executeCartVmwareCloudDirectorBackupGET.call(this, itemIndex ?? 0);
		case 'cartVmwareCloudDirectorBackupPOST':
			return executeCartVmwareCloudDirectorBackupPOST.call(this, itemIndex ?? 0);
		case 'cartVmwareCloudDirectorBackupOptionsGET':
			return executeCartVmwareCloudDirectorBackupOptionsGET.call(this, itemIndex ?? 0);
		case 'cartVmwareCloudDirectorBackupOptionsPOST':
			return executeCartVmwareCloudDirectorBackupOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVpsGET':
			return executeCartVpsGET.call(this, itemIndex ?? 0);
		case 'cartVpsPOST':
			return executeCartVpsPOST.call(this, itemIndex ?? 0);
		case 'cartVpsOptionsGET':
			return executeCartVpsOptionsGET.call(this, itemIndex ?? 0);
		case 'cartVpsOptionsPOST':
			return executeCartVpsOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVrackGET':
			return executeCartVrackGET.call(this, itemIndex ?? 0);
		case 'cartVrackPOST':
			return executeCartVrackPOST.call(this, itemIndex ?? 0);
		case 'cartVrackOptionsGET':
			return executeCartVrackOptionsGET.call(this, itemIndex ?? 0);
		case 'cartVrackOptionsPOST':
			return executeCartVrackOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartVrackResellerGET':
			return executeCartVrackResellerGET.call(this, itemIndex ?? 0);
		case 'cartVrackResellerPOST':
			return executeCartVrackResellerPOST.call(this, itemIndex ?? 0);
		case 'cartVrackServicesGET':
			return executeCartVrackServicesGET.call(this, itemIndex ?? 0);
		case 'cartVrackServicesPOST':
			return executeCartVrackServicesPOST.call(this, itemIndex ?? 0);
		case 'cartWebHostingGET':
			return executeCartWebHostingGET.call(this, itemIndex ?? 0);
		case 'cartWebHostingPOST':
			return executeCartWebHostingPOST.call(this, itemIndex ?? 0);
		case 'cartWebHostingOptionsGET':
			return executeCartWebHostingOptionsGET.call(this, itemIndex ?? 0);
		case 'cartWebHostingOptionsPOST':
			return executeCartWebHostingOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartXdslGET':
			return executeCartXdslGET.call(this, itemIndex ?? 0);
		case 'cartXdslPOST':
			return executeCartXdslPOST.call(this, itemIndex ?? 0);
		case 'cartXdslOptionsGET':
			return executeCartXdslOptionsGET.call(this, itemIndex ?? 0);
		case 'cartXdslOptionsPOST':
			return executeCartXdslOptionsPOST.call(this, itemIndex ?? 0);
		case 'cartZimbraGET':
			return executeCartZimbraGET.call(this, itemIndex ?? 0);
		case 'cartZimbraPOST':
			return executeCartZimbraPOST.call(this, itemIndex ?? 0);
		case 'cartZimbraOptionsGET':
			return executeCartZimbraOptionsGET.call(this, itemIndex ?? 0);
		case 'cartZimbraOptionsPOST':
			return executeCartZimbraOptionsPOST.call(this, itemIndex ?? 0);
		case 'cdnDedicatedBackendOptionsListGet':
			return executecdnDedicatedBackendOptionsListGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedBackendOrderCreatePost':
			return executecdnDedicatedBackendOrderCreatePost.call(this, itemIndex ?? 0);

		case 'cdnDedicatedBackendOrderGet':
			return executecdnDedicatedBackendOrderGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedCacheRuleOptionsListGet':
			return executecdnDedicatedCacheRuleOptionsListGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedCacheRuleOrderCreatePost':
			return executecdnDedicatedCacheRuleOrderCreatePost.call(this, itemIndex ?? 0);

		case 'cdnDedicatedCacheRuleOrderGet':
			return executecdnDedicatedCacheRuleOrderGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedListGet':
			return executecdnDedicatedListGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedNewDurationGet':
			return executecdnDedicatedNewDurationGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedNewOrderCreatePost':
			return executecdnDedicatedNewOrderCreatePost.call(this, itemIndex ?? 0);

		case 'cdnDedicatedNewOrderGet':
			return executecdnDedicatedNewOrderGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedQuotaOptionsListGet':
			return executecdnDedicatedQuotaOptionsListGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedQuotaOrderCreatePost':
			return executecdnDedicatedQuotaOrderCreatePost.call(this, itemIndex ?? 0);

		case 'cdnDedicatedQuotaOrderGet':
			return executecdnDedicatedQuotaOrderGet.call(this, itemIndex ?? 0);

		case 'cdnDedicatedServiceOptionsListGet':
			return executecdnDedicatedServiceOptionsListGet.call(this, itemIndex ?? 0);

		case 'domainZoneDnsAnycastOptionsListGet':
			return executedomainZoneDnsAnycastOptionsListGet.call(this, itemIndex ?? 0);

		case 'domainZoneDnsAnycastOrderCreatePost':
			return executedomainZoneDnsAnycastOrderCreatePost.call(this, itemIndex ?? 0);

		case 'domainZoneDnsAnycastOrderGet':
			return executedomainZoneDnsAnycastOrderGet.call(this, itemIndex ?? 0);

		case 'domainZoneListGet':
			return executedomainZoneListGet.call(this, itemIndex ?? 0);

		case 'domainZoneNewOrderCreatePost':
			return executedomainZoneNewOrderCreatePost.call(this, itemIndex ?? 0);

		case 'domainZoneNewOrderGet':
			return executedomainZoneNewOrderGet.call(this, itemIndex ?? 0);

		case 'domainZoneServiceOptionsListGet':
			return executedomainZoneServiceOptionsListGet.call(this, itemIndex ?? 0);

		case 'emailDomainListGet':
			return executeemailDomainListGet.call(this, itemIndex ?? 0);

		case 'emailDomainNewDurationGet':
			return executeemailDomainNewDurationGet.call(this, itemIndex ?? 0);

		case 'emailDomainNewOrderCreatePost':
			return executeemailDomainNewOrderCreatePost.call(this, itemIndex ?? 0);

		case 'emailDomainNewOrderGet':
			return executeemailDomainNewOrderGet.call(this, itemIndex ?? 0);

		case 'emailDomainServiceOptionsListGet':
			return executeemailDomainServiceOptionsListGet.call(this, itemIndex ?? 0);

		case 'emailDomainServiceUpgradeOptionsListGet':
			return executeemailDomainServiceUpgradeOptionsListGet.call(this, itemIndex ?? 0);

		case 'emailDomainServiceUpgradeOrderCreatePost':
			return executeemailDomainServiceUpgradeOrderCreatePost.call(this, itemIndex ?? 0);

		case 'emailDomainServiceUpgradeOrderGet':
			return executeemailDomainServiceUpgradeOrderGet.call(this, itemIndex ?? 0);

		case 'hostingWebListGet':
			return executehostingWebListGet.call(this, itemIndex ?? 0);

		case 'hostingWebServiceOptionsListGet':
			return executehostingWebServiceOptionsListGet.call(this, itemIndex ?? 0);

		case 'hostingWebServiceUpgradeOptionsListGet':
			return executehostingWebServiceUpgradeOptionsListGet.call(this, itemIndex ?? 0);

		case 'hostingWebServiceUpgradeOrderCreatePost':
			return executehostingWebServiceUpgradeOrderCreatePost.call(this, itemIndex ?? 0);

		case 'hostingWebServiceUpgradeOrderGet':
			return executehostingWebServiceUpgradeOrderGet.call(this, itemIndex ?? 0);


		case 'catalogPublicGet':
			return executeCatalogPublicGet.call(this, itemIndex ?? 0);
		case 'catalogPublicOptionsGet':
			return executeCatalogPublicOptionsGet.call(this, itemIndex ?? 0);
		case 'domainGet':
			return executeDomainGet.call(this, itemIndex ?? 0);
		case 'domainOptionsGet':
			return executeDomainOptionsGet.call(this, itemIndex ?? 0);
		case 'ecoGet':
			return executeEcoGet.call(this, itemIndex ?? 0);
		case 'ecoOptionsGet':
			return executeEcoOptionsGet.call(this, itemIndex ?? 0);
		case 'emailDomainGet':
			return executeEmailDomainGet.call(this, itemIndex ?? 0);
		case 'emailDomainOptionsGet':
			return executeEmailDomainOptionsGet.call(this, itemIndex ?? 0);
		case 'emailproGet':
			return executeEmailproGet.call(this, itemIndex ?? 0);
		case 'emailproOptionsGet':
			return executeEmailproOptionsGet.call(this, itemIndex ?? 0);
		case 'exchangeGet':
			return executeExchangeGet.call(this, itemIndex ?? 0);
		case 'exchangeOptionsGet':
			return executeExchangeOptionsGet.call(this, itemIndex ?? 0);
		case 'ipLoadbalancingGet':
			return executeIpLoadbalancingGet.call(this, itemIndex ?? 0);
		case 'ipLoadbalancingOptionsGet':
			return executeIpLoadbalancingOptionsGet.call(this, itemIndex ?? 0);
		case 'licenseHycuGet':
			return executeLicenseHycuGet.call(this, itemIndex ?? 0);
		case 'licenseHycuOptionsGet':
			return executeLicenseHycuOptionsGet.call(this, itemIndex ?? 0);
		case 'licensePleskGet':
			return executeLicensePleskGet.call(this, itemIndex ?? 0);
		case 'licensePleskOptionsGet':
			return executeLicensePleskOptionsGet.call(this, itemIndex ?? 0);
		case 'licenseSqlServerGet':
			return executeLicenseSqlServerGet.call(this, itemIndex ?? 0);
		case 'licenseSqlServerOptionsGet':
			return executeLicenseSqlServerOptionsGet.call(this, itemIndex ?? 0);
		case 'licenseWindowsGet':
			return executeLicenseWindowsGet.call(this, itemIndex ?? 0);
		case 'licenseWindowsOptionsGet':
			return executeLicenseWindowsOptionsGet.call(this, itemIndex ?? 0);
		case 'licensecPanelGet':
			return executeLicensecPanelGet.call(this, itemIndex ?? 0);
		case 'licensecPanelOptionsGet':
			return executeLicensecPanelOptionsGet.call(this, itemIndex ?? 0);
		case 'logsGet':
			return executeLogsGet.call(this, itemIndex ?? 0);
		case 'logsOptionsGet':
			return executeLogsOptionsGet.call(this, itemIndex ?? 0);
		case 'nashaGet':
			return executeNashaGet.call(this, itemIndex ?? 0);
		case 'nashaOptionsGet':
			return executeNashaOptionsGet.call(this, itemIndex ?? 0);
		case 'netappGet':
			return executeNetappGet.call(this, itemIndex ?? 0);
		case 'netappOptionsGet':
			return executeNetappOptionsGet.call(this, itemIndex ?? 0);
		case 'nutanixGet':
			return executeNutanixGet.call(this, itemIndex ?? 0);
		case 'nutanixOptionsGet':
			return executeNutanixOptionsGet.call(this, itemIndex ?? 0);
		case 'office365PrepaidGet':
			return executeOffice365PrepaidGet.call(this, itemIndex ?? 0);
		case 'office365PrepaidOptionsGet':
			return executeOffice365PrepaidOptionsGet.call(this, itemIndex ?? 0);
		case 'officePrepaidGet':
			return executeOfficePrepaidGet.call(this, itemIndex ?? 0);
		case 'officePrepaidOptionsGet':
			return executeOfficePrepaidOptionsGet.call(this, itemIndex ?? 0);
		case 'okmsGet':
			return executeOkmsGet.call(this, itemIndex ?? 0);
		case 'okmsOptionsGet':
			return executeOkmsOptionsGet.call(this, itemIndex ?? 0);
		case 'ovhCloudConnectGet':
			return executeOvhCloudConnectGet.call(this, itemIndex ?? 0);
		case 'ovhCloudConnectOptionsGet':
			return executeOvhCloudConnectOptionsGet.call(this, itemIndex ?? 0);
		case 'packsProfessionalServicesGet':
			return executePacksProfessionalServicesGet.call(this, itemIndex ?? 0);
		case 'packsProfessionalServicesOptionsGet':
			return executePacksProfessionalServicesOptionsGet.call(this, itemIndex ?? 0);
		case 'privateCloudGet':
			return executePrivateCloudGet.call(this, itemIndex ?? 0);
		case 'privateCloudOptionsGet':
			return executePrivateCloudOptionsGet.call(this, itemIndex ?? 0);
		case 'privateCloudEnterpriseGet':
			return executePrivateCloudEnterpriseGet.call(this, itemIndex ?? 0);
		case 'privateCloudEnterpriseOptionsGet':
			return executePrivateCloudEnterpriseOptionsGet.call(this, itemIndex ?? 0);
		case 'privateSQLGet':
			return executePrivateSQLGet.call(this, itemIndex ?? 0);
		case 'privateSQLOptionsGet':
			return executePrivateSQLOptionsGet.call(this, itemIndex ?? 0);
		case 'sslGatewayGet':
			return executeSslGatewayGet.call(this, itemIndex ?? 0);
		case 'sslGatewayOptionsGet':
			return executeSslGatewayOptionsGet.call(this, itemIndex ?? 0);
		case 'telephonyGet':
			return executeTelephonyGet.call(this, itemIndex ?? 0);
		case 'telephonyOptionsGet':
			return executeTelephonyOptionsGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorGet':
			return executeVmwareCloudDirectorGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorOptionsGet':
			return executeVmwareCloudDirectorOptionsGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorBackupGet':
			return executeVmwareCloudDirectorBackupGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorBackupOptionsGet':
			return executeVmwareCloudDirectorBackupOptionsGet.call(this, itemIndex ?? 0);
		case 'vpsGet':
			return executeVpsGet.call(this, itemIndex ?? 0);
		case 'vpsOptionsGet':
			return executeVpsOptionsGet.call(this, itemIndex ?? 0);
		case 'webHostingGet':
			return executeWebHostingGet.call(this, itemIndex ?? 0);
		case 'webHostingOptionsGet':
			return executeWebHostingOptionsGet.call(this, itemIndex ?? 0);
		case 'webPaaSGet':
			return executeWebPaaSGet.call(this, itemIndex ?? 0);
		case 'webPaaSOptionsGet':
			return executeWebPaaSOptionsGet.call(this, itemIndex ?? 0);
		case 'zimbraGet':
			return executeZimbraGet.call(this, itemIndex ?? 0);
		case 'zimbraOptionsGet':
			return executeZimbraOptionsGet.call(this, itemIndex ?? 0);
		case 'licensecPanelListGet':
			return executeLicensecPanelListGet.call(this, itemIndex ?? 0);
		case 'licensecPanelNewListGet':
			return executeLicensecPanelNewListGet.call(this, itemIndex ?? 0);
		case 'licensecPanelNewDurationGet':
			return executeLicensecPanelNewDurationGet.call(this, itemIndex ?? 0);
		case 'licensecPanelServiceGet':
			return executeLicensecPanelServiceGet.call(this, itemIndex ?? 0);
		case 'licensecPanelServiceUpgradeListGet':
			return executeLicensecPanelServiceUpgradeListGet.call(this, itemIndex ?? 0);
		case 'licensecPanelServiceUpgradeDurationGet':
			return executeLicensecPanelServiceUpgradeDurationGet.call(this, itemIndex ?? 0);
		case 'licensecPanelNewCreatePost':
			return executeLicensecPanelNewCreatePost.call(this, itemIndex ?? 0);
		case 'licensecPanelServiceUpgradeCreatePost':
			return executeLicensecPanelServiceUpgradeCreatePost.call(this, itemIndex ?? 0);
		case 'licenseofficeListGet':
			return executeLicenseofficeListGet.call(this, itemIndex ?? 0);
		case 'licenseofficeNewListGet':
			return executeLicenseofficeNewListGet.call(this, itemIndex ?? 0);
		case 'licenseofficeNewDurationGet':
			return executeLicenseofficeNewDurationGet.call(this, itemIndex ?? 0);
		case 'licenseofficeServiceGet':
			return executeLicenseofficeServiceGet.call(this, itemIndex ?? 0);
		case 'licenseofficeServiceUpgradeListGet':
			return executeLicenseofficeServiceUpgradeListGet.call(this, itemIndex ?? 0);
		case 'licenseofficeServiceUpgradeDurationGet':
			return executeLicenseofficeServiceUpgradeDurationGet.call(this, itemIndex ?? 0);
		case 'licenseofficeNewCreatePost':
			return executeLicenseofficeNewCreatePost.call(this, itemIndex ?? 0);
		case 'licenseofficeServiceUpgradeCreatePost':
			return executeLicenseofficeServiceUpgradeCreatePost.call(this, itemIndex ?? 0);
		case 'licensepleskListGet':
			return executeLicensepleskListGet.call(this, itemIndex ?? 0);
		case 'licensepleskNewListGet':
			return executeLicensepleskNewListGet.call(this, itemIndex ?? 0);
		case 'licensepleskNewDurationGet':
			return executeLicensepleskNewDurationGet.call(this, itemIndex ?? 0);
		case 'licensepleskServiceGet':
			return executeLicensepleskServiceGet.call(this, itemIndex ?? 0);
		case 'licensepleskServiceUpgradeListGet':
			return executeLicensepleskServiceUpgradeListGet.call(this, itemIndex ?? 0);
		case 'licensepleskServiceUpgradeDurationGet':
			return executeLicensepleskServiceUpgradeDurationGet.call(this, itemIndex ?? 0);
		case 'licensepleskNewCreatePost':
			return executeLicensepleskNewCreatePost.call(this, itemIndex ?? 0);
		case 'licensepleskServiceUpgradeCreatePost':
			return executeLicensepleskServiceUpgradeCreatePost.call(this, itemIndex ?? 0);
		case 'licensesqlserverListGet':
			return executeLicensesqlserverListGet.call(this, itemIndex ?? 0);
		case 'licensesqlserverNewListGet':
			return executeLicensesqlserverNewListGet.call(this, itemIndex ?? 0);
		case 'licensesqlserverNewDurationGet':
			return executeLicensesqlserverNewDurationGet.call(this, itemIndex ?? 0);
		case 'licensesqlserverServiceGet':
			return executeLicensesqlserverServiceGet.call(this, itemIndex ?? 0);
		case 'licensesqlserverServiceUpgradeListGet':
			return executeLicensesqlserverServiceUpgradeListGet.call(this, itemIndex ?? 0);
		case 'licensesqlserverServiceUpgradeDurationGet':
			return executeLicensesqlserverServiceUpgradeDurationGet.call(this, itemIndex ?? 0);
		case 'licensesqlserverNewCreatePost':
			return executeLicensesqlserverNewCreatePost.call(this, itemIndex ?? 0);
		case 'licensesqlserverServiceUpgradeCreatePost':
			return executeLicensesqlserverServiceUpgradeCreatePost.call(this, itemIndex ?? 0);
		case 'licensewindowsListGet':
			return executeLicensewindowsListGet.call(this, itemIndex ?? 0);
		case 'licensewindowsNewListGet':
			return executeLicensewindowsNewListGet.call(this, itemIndex ?? 0);
		case 'licensewindowsNewDurationGet':
			return executeLicensewindowsNewDurationGet.call(this, itemIndex ?? 0);
		case 'licensewindowsServiceGet':
			return executeLicensewindowsServiceGet.call(this, itemIndex ?? 0);
		case 'licensewindowsServiceUpgradeListGet':
			return executeLicensewindowsServiceUpgradeListGet.call(this, itemIndex ?? 0);
		case 'licensewindowsServiceUpgradeDurationGet':
			return executeLicensewindowsServiceUpgradeDurationGet.call(this, itemIndex ?? 0);
		case 'licensewindowsNewCreatePost':
			return executeLicensewindowsNewCreatePost.call(this, itemIndex ?? 0);
		case 'licensewindowsServiceUpgradeCreatePost':
			return executeLicensewindowsServiceUpgradeCreatePost.call(this, itemIndex ?? 0);
		case 'emailexchangeOrganizationListGet':
			return executeEmailexchangeOrganizationListGet.call(this, itemIndex ?? 0);
		case 'emailexchangeServiceGet':
			return executeEmailexchangeServiceGet.call(this, itemIndex ?? 0);
		case 'emailexchangeServiceCreatePost':
			return executeEmailexchangeServiceCreatePost.call(this, itemIndex ?? 0);
		case 'emailexchangeAccountGet':
			return executeEmailexchangeAccountGet.call(this, itemIndex ?? 0);
		case 'emailexchangeAccountUpgradeCreatePost':
			return executeEmailexchangeAccountUpgradeCreatePost.call(this, itemIndex ?? 0);
		case 'emailexchangeDiskSpaceCreatePost':
			return executeEmailexchangeDiskSpaceCreatePost.call(this, itemIndex ?? 0);
		case 'emailexchangeOutlookCreatePost':
			return executeEmailexchangeOutlookCreatePost.call(this, itemIndex ?? 0);
		case 'emailexchangeUpgradeCreatePost':
			return executeEmailexchangeUpgradeCreatePost.call(this, itemIndex ?? 0);
		case 'emailproOrganizationListGet':
			return executeEmailproOrganizationListGet.call(this, itemIndex ?? 0);
		case 'emailproOrganizationCreatePost':
			return executeEmailproOrganizationCreatePost.call(this, itemIndex ?? 0);
		case 'vpsadditionalDiskListGet':
			return executeVpsadditionalDiskListGet.call(this, itemIndex ?? 0);
		case 'vpsadditionalDiskDurationGet':
			return executeVpsadditionalDiskDurationGet.call(this, itemIndex ?? 0);
		case 'vpsadditionalDiskCreatePost':
			return executeVpsadditionalDiskCreatePost.call(this, itemIndex ?? 0);
		case 'vpsautomatedBackupListGet':
			return executeVpsautomatedBackupListGet.call(this, itemIndex ?? 0);
		case 'vpsautomatedBackupDurationGet':
			return executeVpsautomatedBackupDurationGet.call(this, itemIndex ?? 0);
		case 'vpsautomatedBackupCreatePost':
			return executeVpsautomatedBackupCreatePost.call(this, itemIndex ?? 0);
		case 'vpssnapshotListGet':
			return executeVpssnapshotListGet.call(this, itemIndex ?? 0);
		case 'vpssnapshotDurationGet':
			return executeVpssnapshotDurationGet.call(this, itemIndex ?? 0);
		case 'vpssnapshotCreatePost':
			return executeVpssnapshotCreatePost.call(this, itemIndex ?? 0);
		case 'cloudprojectListGet':
			return executeCloudprojectListGet.call(this, itemIndex ?? 0);
		case 'cloudprojectGet':
			return executeCloudprojectGet.call(this, itemIndex ?? 0);
		case 'cloudprojectCreatePost':
			return executeCloudprojectCreatePost.call(this, itemIndex ?? 0);
		case 'freefaxorganizationListGet':
			return executeFreefaxorganizationListGet.call(this, itemIndex ?? 0);
		case 'freefaxnumberGet':
			return executeFreefaxnumberGet.call(this, itemIndex ?? 0);
		case 'freefaxCreatePost':
			return executeFreefaxCreatePost.call(this, itemIndex ?? 0);
		case 'overTheBoxListGet':
			return executeOverTheBoxListGet.call(this, itemIndex ?? 0);
		case 'overTheBoxGet':
			return executeOverTheBoxGet.call(this, itemIndex ?? 0);
		case 'overTheBoxCreatePost':
			return executeOverTheBoxCreatePost.call(this, itemIndex ?? 0);
		case 'overTheBoxOrderCreatePost':
			return executeOverTheBoxOrderCreatePost.call(this, itemIndex ?? 0);
		case 'overTheBoxDeviceGet':
			return executeOverTheBoxDeviceGet.call(this, itemIndex ?? 0);
		case 'saascsp2ListGet':
			return executeSaascsp2ListGet.call(this, itemIndex ?? 0);
		case 'saascsp2ProductGet':
			return executeSaascsp2ProductGet.call(this, itemIndex ?? 0);
		case 'saascsp2CreatePost':
			return executeSaascsp2CreatePost.call(this, itemIndex ?? 0);
		case 'smsListGet':
			return executeSmsListGet.call(this, itemIndex ?? 0);
		case 'smsProductGet':
			return executeSmsProductGet.call(this, itemIndex ?? 0);
		case 'smsProductDurationGet':
			return executeSmsProductDurationGet.call(this, itemIndex ?? 0);
		case 'smsCreatePost':
			return executeSmsCreatePost.call(this, itemIndex ?? 0);
		case 'smsProductCreatePost':
			return executeSmsProductCreatePost.call(this, itemIndex ?? 0);
		case 'veeamCloudConnectListGet':
			return executeVeeamCloudConnectListGet.call(this, itemIndex ?? 0);
		case 'veeamCloudConnectGet':
			return executeVeeamCloudConnectGet.call(this, itemIndex ?? 0);
		case 'veeamCloudConnectCreatePost':
			return executeVeeamCloudConnectCreatePost.call(this, itemIndex ?? 0);
		case 'veeamCloudConnectConfigCreatePost':
			return executeVeeamCloudConnectConfigCreatePost.call(this, itemIndex ?? 0);
		case 'veeamCloudConnectOptionCreatePost':
			return executeVeeamCloudConnectOptionCreatePost.call(this, itemIndex ?? 0);
		case 'xdslspareListGet':
			return executeXdslspareListGet.call(this, itemIndex ?? 0);
		case 'xdslspareCreatePost':
			return executeXdslspareCreatePost.call(this, itemIndex ?? 0);
		case 'upgradeBandwidthVrackListGET':
			return executeupgradeBandwidthVrackListGET.call(this, itemIndex ?? 0);
		case 'upgradeBandwidthVrackPlanGET':
			return executeupgradeBandwidthVrackPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeBandwidthVrackPlanPOST':
			return executeupgradeBandwidthVrackPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeBandwidthVrackServiceGET':
			return executeupgradeBandwidthVrackServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeBaremetalPrivateBandwidthListGET':
			return executeupgradeBaremetalPrivateBandwidthListGET.call(this, itemIndex ?? 0);
		case 'upgradeBaremetalPrivateBandwidthPlanGET':
			return executeupgradeBaremetalPrivateBandwidthPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeBaremetalPrivateBandwidthPlanPOST':
			return executeupgradeBaremetalPrivateBandwidthPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeBaremetalPrivateBandwidthServiceGET':
			return executeupgradeBaremetalPrivateBandwidthServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeBaremetalPublicBandwidthListGET':
			return executeupgradeBaremetalPublicBandwidthListGET.call(this, itemIndex ?? 0);
		case 'upgradeBaremetalPublicBandwidthPlanGET':
			return executeupgradeBaremetalPublicBandwidthPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeBaremetalPublicBandwidthPlanPOST':
			return executeupgradeBaremetalPublicBandwidthPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeBaremetalPublicBandwidthServiceGET':
			return executeupgradeBaremetalPublicBandwidthServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeCephAASListGET':
			return executeupgradeCephAASListGET.call(this, itemIndex ?? 0);
		case 'upgradeCephAASPlanGET':
			return executeupgradeCephAASPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeCephAASPlanPOST':
			return executeupgradeCephAASPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeCephAASServiceGET':
			return executeupgradeCephAASServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeCloudDBListGET':
			return executeupgradeCloudDBListGET.call(this, itemIndex ?? 0);
		case 'upgradeCloudDBPlanGET':
			return executeupgradeCloudDBPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeCloudDBPlanPOST':
			return executeupgradeCloudDBPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeCloudDBServiceGET':
			return executeupgradeCloudDBServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeEmailDomainListGET':
			return executeupgradeEmailDomainListGET.call(this, itemIndex ?? 0);
		case 'upgradeEmailDomainPlanGET':
			return executeupgradeEmailDomainPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeEmailDomainPlanPOST':
			return executeupgradeEmailDomainPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeEmailDomainServiceGET':
			return executeupgradeEmailDomainServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeIPLoadBalancingListGET':
			return executeupgradeIPLoadBalancingListGET.call(this, itemIndex ?? 0);
		case 'upgradeIPLoadBalancingPlanGET':
			return executeupgradeIPLoadBalancingPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeIPLoadBalancingPlanPOST':
			return executeupgradeIPLoadBalancingPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeIPLoadBalancingServiceGET':
			return executeupgradeIPLoadBalancingServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeLicenseHycuListGET':
			return executeupgradeLicenseHycuListGET.call(this, itemIndex ?? 0);
		case 'upgradeLicenseHycuPlanGET':
			return executeupgradeLicenseHycuPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeLicenseHycuPlanPOST':
			return executeupgradeLicenseHycuPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeLicenseHycuServiceGET':
			return executeupgradeLicenseHycuServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeLicensePleskListGET':
			return executeupgradeLicensePleskListGET.call(this, itemIndex ?? 0);
		case 'upgradeLicensePleskPlanGET':
			return executeupgradeLicensePleskPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeLicensePleskPlanPOST':
			return executeupgradeLicensePleskPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeLicensePleskServiceGET':
			return executeupgradeLicensePleskServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeLicensecPanelListGET':
			return executeupgradeLicensecPanelListGET.call(this, itemIndex ?? 0);
		case 'upgradeLicensecPanelPlanGET':
			return executeupgradeLicensecPanelPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeLicensecPanelPlanPOST':
			return executeupgradeLicensecPanelPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeLicensecPanelServiceGET':
			return executeupgradeLicensecPanelServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeLogsListGET':
			return executeupgradeLogsListGET.call(this, itemIndex ?? 0);
		case 'upgradeLogsPlanGET':
			return executeupgradeLogsPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeLogsPlanPOST':
			return executeupgradeLogsPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeLogsServiceGET':
			return executeupgradeLogsServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeMetricsListGET':
			return executeupgradeMetricsListGET.call(this, itemIndex ?? 0);
		case 'upgradeMetricsPlanGET':
			return executeupgradeMetricsPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeMetricsPlanPOST':
			return executeupgradeMetricsPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeMetricsServiceGET':
			return executeupgradeMetricsServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeMicrosoftExchangeListGET':
			return executeupgradeMicrosoftExchangeListGET.call(this, itemIndex ?? 0);
		case 'upgradeMicrosoftExchangePlanGET':
			return executeupgradeMicrosoftExchangePlanGET.call(this, itemIndex ?? 0);
		case 'upgradeMicrosoftExchangePlanPOST':
			return executeupgradeMicrosoftExchangePlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeMicrosoftExchangeServiceGET':
			return executeupgradeMicrosoftExchangeServiceGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateCloudListGET':
			return executeupgradePrivateCloudListGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateCloudManagementFeeListGET':
			return executeupgradePrivateCloudManagementFeeListGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateCloudManagementFeePlanGET':
			return executeupgradePrivateCloudManagementFeePlanGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateCloudManagementFeePlanPOST':
			return executeupgradePrivateCloudManagementFeePlanPOST.call(this, itemIndex ?? 0);
		case 'upgradePrivateCloudManagementFeeServiceGET':
			return executeupgradePrivateCloudManagementFeeServiceGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateCloudPlanGET':
			return executeupgradePrivateCloudPlanGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateCloudPlanPOST':
			return executeupgradePrivateCloudPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradePrivateCloudServiceGET':
			return executeupgradePrivateCloudServiceGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateSQLListGET':
			return executeupgradePrivateSQLListGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateSQLPlanGET':
			return executeupgradePrivateSQLPlanGET.call(this, itemIndex ?? 0);
		case 'upgradePrivateSQLPlanPOST':
			return executeupgradePrivateSQLPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradePrivateSQLServiceGET':
			return executeupgradePrivateSQLServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeSSLGatewayListGET':
			return executeupgradeSSLGatewayListGET.call(this, itemIndex ?? 0);
		case 'upgradeSSLGatewayPlanGET':
			return executeupgradeSSLGatewayPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeSSLGatewayPlanPOST':
			return executeupgradeSSLGatewayPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeSSLGatewayServiceGET':
			return executeupgradeSSLGatewayServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeVPSAdditionalDiskListGET':
			return executeupgradeVPSAdditionalDiskListGET.call(this, itemIndex ?? 0);
		case 'upgradeVPSAdditionalDiskPlanGET':
			return executeupgradeVPSAdditionalDiskPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeVPSAdditionalDiskPlanPOST':
			return executeupgradeVPSAdditionalDiskPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeVPSAdditionalDiskServiceGET':
			return executeupgradeVPSAdditionalDiskServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeVPSListGET':
			return executeupgradeVPSListGET.call(this, itemIndex ?? 0);
		case 'upgradeVPSPlanGET':
			return executeupgradeVPSPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeVPSPlanPOST':
			return executeupgradeVPSPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeVPSServiceGET':
			return executeupgradeVPSServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeWebHostingListGET':
			return executeupgradeWebHostingListGET.call(this, itemIndex ?? 0);
		case 'upgradeWebHostingPlanGET':
			return executeupgradeWebHostingPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeWebHostingPlanPOST':
			return executeupgradeWebHostingPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeWebHostingServiceGET':
			return executeupgradeWebHostingServiceGET.call(this, itemIndex ?? 0);
		case 'upgradeZimbraListGET':
			return executeupgradeZimbraListGET.call(this, itemIndex ?? 0);
		case 'upgradeZimbraPlanGET':
			return executeupgradeZimbraPlanGET.call(this, itemIndex ?? 0);
		case 'upgradeZimbraPlanPOST':
			return executeupgradeZimbraPlanPOST.call(this, itemIndex ?? 0);
		case 'upgradeZimbraServiceGET':
			return executeupgradeZimbraServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionBackupServicesListGET':
			return executecartServiceOptionBackupServicesListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionBackupServicesServiceGET':
			return executecartServiceOptionBackupServicesServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionBaremetalServersListGET':
			return executecartServiceOptionBaremetalServersListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionBaremetalServersServiceGET':
			return executecartServiceOptionBaremetalServersServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionBaremetalServersServicePOST':
			return executecartServiceOptionBaremetalServersServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionCloudListGET':
			return executecartServiceOptionCloudListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionCloudServiceGET':
			return executecartServiceOptionCloudServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionCloudServicePOST':
			return executecartServiceOptionCloudServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDNSListGET':
			return executecartServiceOptionDNSListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDNSServiceGET':
			return executecartServiceOptionDNSServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDNSServicePOST':
			return executecartServiceOptionDNSServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDedicatedListGET':
			return executecartServiceOptionDedicatedListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDedicatedServiceGET':
			return executecartServiceOptionDedicatedServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDedicatedServicePOST':
			return executecartServiceOptionDedicatedServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDomainListGET':
			return executecartServiceOptionDomainListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDomainServiceGET':
			return executecartServiceOptionDomainServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionDomainServicePOST':
			return executecartServiceOptionDomainServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionEmailProListGET':
			return executecartServiceOptionEmailProListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionEmailProServiceGET':
			return executecartServiceOptionEmailProServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionEmailProServicePOST':
			return executecartServiceOptionEmailProServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionIPLoadBalancingListGET':
			return executecartServiceOptionIPLoadBalancingListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionIPLoadBalancingServiceGET':
			return executecartServiceOptionIPLoadBalancingServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionIPLoadBalancingServicePOST':
			return executecartServiceOptionIPLoadBalancingServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionLicenseHycuListGET':
			return executecartServiceOptionLicenseHycuListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionLicenseHycuServiceGET':
			return executecartServiceOptionLicenseHycuServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionLicenseHycuServicePOST':
			return executecartServiceOptionLicenseHycuServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionLogsListGET':
			return executecartServiceOptionLogsListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionLogsServiceGET':
			return executecartServiceOptionLogsServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionLogsServicePOST':
			return executecartServiceOptionLogsServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionMicrosoftExchangeListGET':
			return executecartServiceOptionMicrosoftExchangeListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionMicrosoftExchangeServiceGET':
			return executecartServiceOptionMicrosoftExchangeServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionMicrosoftExchangeServicePOST':
			return executecartServiceOptionMicrosoftExchangeServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionMicrosoftListGET':
			return executecartServiceOptionMicrosoftListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionMicrosoftServiceGET':
			return executecartServiceOptionMicrosoftServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionMicrosoftServicePOST':
			return executecartServiceOptionMicrosoftServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionNutanixListGET':
			return executecartServiceOptionNutanixListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionNutanixServiceGET':
			return executecartServiceOptionNutanixServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionNutanixServicePOST':
			return executecartServiceOptionNutanixServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionOffice365PrepaidListGET':
			return executecartServiceOptionOffice365PrepaidListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionOffice365PrepaidServiceGET':
			return executecartServiceOptionOffice365PrepaidServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionOffice365PrepaidServicePOST':
			return executecartServiceOptionOffice365PrepaidServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionOfficePrepaidListGET':
			return executecartServiceOptionOfficePrepaidListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionOfficePrepaidServiceGET':
			return executecartServiceOptionOfficePrepaidServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionOfficePrepaidServicePOST':
			return executecartServiceOptionOfficePrepaidServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudEnterpriseListGET':
			return executecartServiceOptionPrivateCloudEnterpriseListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudEnterpriseServiceGET':
			return executecartServiceOptionPrivateCloudEnterpriseServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudEnterpriseServicePOST':
			return executecartServiceOptionPrivateCloudEnterpriseServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudListGET':
			return executecartServiceOptionPrivateCloudListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudResellerEnterpriseListGET':
			return executecartServiceOptionPrivateCloudResellerEnterpriseListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudResellerEnterpriseServiceGET':
			return executecartServiceOptionPrivateCloudResellerEnterpriseServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudResellerEnterpriseServicePOST':
			return executecartServiceOptionPrivateCloudResellerEnterpriseServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudResellerListGET':
			return executecartServiceOptionPrivateCloudResellerListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudResellerServiceGET':
			return executecartServiceOptionPrivateCloudResellerServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudResellerServicePOST':
			return executecartServiceOptionPrivateCloudResellerServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudServiceGET':
			return executecartServiceOptionPrivateCloudServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionPrivateCloudServicePOST':
			return executecartServiceOptionPrivateCloudServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSMSListGET':
			return executecartServiceOptionSMSListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSMSServiceGET':
			return executecartServiceOptionSMSServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSMSServicePOST':
			return executecartServiceOptionSMSServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSSLGatewayListGET':
			return executecartServiceOptionSSLGatewayListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSSLGatewayServiceGET':
			return executecartServiceOptionSSLGatewayServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSSLGatewayServicePOST':
			return executecartServiceOptionSSLGatewayServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSharepointListGET':
			return executecartServiceOptionSharepointListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSharepointServiceGET':
			return executecartServiceOptionSharepointServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSharepointServicePOST':
			return executecartServiceOptionSharepointServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSncNetworkServicesListGET':
			return executecartServiceOptionSncNetworkServicesListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSncNetworkServicesServiceGET':
			return executecartServiceOptionSncNetworkServicesServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionSncNetworkServicesServicePOST':
			return executecartServiceOptionSncNetworkServicesServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVDIListGET':
			return executecartServiceOptionVDIListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVDIServiceGET':
			return executecartServiceOptionVDIServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVDIServicePOST':
			return executecartServiceOptionVDIServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVPSListGET':
			return executecartServiceOptionVPSListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVPSServiceGET':
			return executecartServiceOptionVPSServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVPSServicePOST':
			return executecartServiceOptionVPSServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVmwareCloudDirectorBackupListGET':
			return executecartServiceOptionVmwareCloudDirectorBackupListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVmwareCloudDirectorBackupServiceGET':
			return executecartServiceOptionVmwareCloudDirectorBackupServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVmwareCloudDirectorListGET':
			return executecartServiceOptionVmwareCloudDirectorListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVmwareCloudDirectorServiceGET':
			return executecartServiceOptionVmwareCloudDirectorServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVmwareCloudDirectorServicePOST':
			return executecartServiceOptionVmwareCloudDirectorServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVrackListGET':
			return executecartServiceOptionVrackListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVrackServiceGET':
			return executecartServiceOptionVrackServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionVrackServicePOST':
			return executecartServiceOptionVrackServicePOST.call(this, itemIndex ?? 0);
		case 'cartServiceOptionWebHostingListGET':
			return executecartServiceOptionWebHostingListGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionWebHostingServiceGET':
			return executecartServiceOptionWebHostingServiceGET.call(this, itemIndex ?? 0);
		case 'cartServiceOptionWebHostingServicePOST':
			return executecartServiceOptionWebHostingServicePOST.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "order"`);
}

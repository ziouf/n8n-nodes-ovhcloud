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

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'orderOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Cart Assign',
					value: 'cartAssignPost',
					action: 'Assign a cart to your account',
				},
				{
					name: 'Cart Checkout Get',
					value: 'cartCheckoutGet',
					action: 'Simulate cart checkout',
				},
				{
					name: 'Cart Checkout Post',
					value: 'cartCheckoutPost',
					action: 'Execute cart checkout',
				},
				{
					name: 'Cart Coupon Create',
					value: 'cartCouponCreatePost',
					action: 'Create a coupon for a cart',
				},
				{
					name: 'Cart Coupon Delete',
					value: 'cartCouponDelete',
					action: 'Delete a coupon from cart',
				},
				{ name: 'Cart Coupon List', value: 'cartCouponListGet', action: 'List coupons for a cart' },
				{ name: 'Cart Create', value: 'cartCreatePost', action: 'Create a new cart' },
				{ name: 'Cart Delete', value: 'cartDeleteDelete', action: 'Delete a cart' },
				{ name: 'Cart Get', value: 'cartGetGet', action: 'Get cart details' },
				{
					name: 'Cart Item Configuration Create',
					value: 'cartItemConfigurationCreatePost',
					action: 'Create a configuration for a cart item',
				},
				{
					name: 'Cart Item Configuration Delete',
					value: 'cartItemConfigurationDeleteDelete',
					action: 'Delete a cart item configuration',
				},
				{
					name: 'Cart Item Configuration Get',
					value: 'cartItemConfigurationGetGet',
					action: 'Get a cart item configuration',
				},
				{
					name: 'Cart Item Configuration List',
					value: 'cartItemConfigurationListGet',
					action: 'List configurations for a cart item',
				},
				{
					name: 'Cart Item Configuration Update',
					value: 'cartItemConfigurationUpdatePut',
					action: 'Update a cart item configuration',
				},
				{ name: 'Cart Item Delete', value: 'cartItemDeleteDelete', action: 'Delete a cart item' },
				{ name: 'Cart Item Get', value: 'cartItemGetGet', action: 'Get a cart item' },
				{ name: 'Cart Item List', value: 'cartItemListGet', action: 'List items in a cart' },
				{
					name: 'Cart Item Required Configuration List',
					value: 'cartItemRequiredConfigurationListGet',
					action: 'List required configurations for a cart item',
				},
				{ name: 'Cart Item Update', value: 'cartItemUpdatePut', action: 'Update a cart item' },
				{ name: 'Cart List', value: 'cartListGet', action: 'List all carts' },
				{ name: 'Cart Summary Get', value: 'cartSummaryGet', action: 'Get cart summary' },
				{
					name: 'Cart Support Create',
					value: 'cartSupportCreatePost',
					action: 'Create support for a cart',
				},
				{
					name: 'Cart Support List',
					value: 'cartSupportListGet',
					action: 'List supports for a cart',
				},
				{ name: 'Cart Update', value: 'cartUpdatePut', action: 'Update a cart' },
			{
				name: 'List License Hycu Offers',
				value: 'cartLicenseHycuGET',
				action: 'List License Hycu offers',
			},
			{
				name: 'Create License Hycu',
				value: 'cartLicenseHycuPOST',
				action: 'Create License Hycu',
			},
			{
				name: 'List License Plesk Offers',
				value: 'cartLicensePleskGET',
				action: 'List License Plesk offers',
			},
			{
				name: 'Create License Plesk',
				value: 'cartLicensePleskPOST',
				action: 'Create License Plesk',
			},
			{
				name: 'Get License Plesk Options',
				value: 'cartLicensePleskOptionsGET',
				action: 'Get License Plesk options',
			},
			{
				name: 'Add License Plesk Option to Cart',
				value: 'cartLicensePleskOptionsPOST',
				action: 'Add License Plesk option to cart',
			},
			{
				name: 'List License Sql Server Offers',
				value: 'cartLicenseSqlServerGET',
				action: 'List License Sql Server offers',
			},
			{
				name: 'Create License Sql Server',
				value: 'cartLicenseSqlServerPOST',
				action: 'Create License Sql Server',
			},
			{
				name: 'List License Windows Offers',
				value: 'cartLicenseWindowsGET',
				action: 'List License Windows offers',
			},
			{
				name: 'Create License Windows',
				value: 'cartLicenseWindowsPOST',
				action: 'Create License Windows',
			},
			{
				name: 'List Licensec Panel Offers',
				value: 'cartLicensecPanelGET',
				action: 'List Licensec Panel offers',
			},
			{
				name: 'Create Licensec Panel',
				value: 'cartLicensecPanelPOST',
				action: 'Create Licensec Panel',
			},
			{
				name: 'List Logs Offers',
				value: 'cartLogsGET',
				action: 'List Logs offers',
			},
			{
				name: 'Create Logs',
				value: 'cartLogsPOST',
				action: 'Create Logs',
			},
			{
				name: 'Get Logs Options',
				value: 'cartLogsOptionsGET',
				action: 'Get Logs options',
			},
			{
				name: 'Add Logs Option to Cart',
				value: 'cartLogsOptionsPOST',
				action: 'Add Logs option to cart',
			},
			{
				name: 'List Managed C M S Offers',
				value: 'cartManagedCMSGET',
				action: 'List Managed C M S offers',
			},
			{
				name: 'Create Managed C M S',
				value: 'cartManagedCMSPOST',
				action: 'Create Managed C M S',
			},
			{
				name: 'Get Managed C M S Options',
				value: 'cartManagedCMSOptionsGET',
				action: 'Get Managed C M S options',
			},
			{
				name: 'Add Managed C M S Option to Cart',
				value: 'cartManagedCMSOptionsPOST',
				action: 'Add Managed C M S option to cart',
			},
			{
				name: 'List Managed Services Offers',
				value: 'cartManagedServicesGET',
				action: 'List Managed Services offers',
			},
			{
				name: 'Create Managed Services',
				value: 'cartManagedServicesPOST',
				action: 'Create Managed Services',
			},
			{
				name: 'Get Managed Services Options',
				value: 'cartManagedServicesOptionsGET',
				action: 'Get Managed Services options',
			},
			{
				name: 'Add Managed Services Option to Cart',
				value: 'cartManagedServicesOptionsPOST',
				action: 'Add Managed Services option to cart',
			},
			{
				name: 'List Metrics Offers',
				value: 'cartMetricsGET',
				action: 'List Metrics offers',
			},
			{
				name: 'Create Metrics',
				value: 'cartMetricsPOST',
				action: 'Create Metrics',
			},
			{
				name: 'Get Metrics Options',
				value: 'cartMetricsOptionsGET',
				action: 'Get Metrics options',
			},
			{
				name: 'Add Metrics Option to Cart',
				value: 'cartMetricsOptionsPOST',
				action: 'Add Metrics option to cart',
			},
			{
				name: 'List Microsoft Offers',
				value: 'cartMicrosoftGET',
				action: 'List Microsoft offers',
			},
			{
				name: 'Create Microsoft',
				value: 'cartMicrosoftPOST',
				action: 'Create Microsoft',
			},
			{
				name: 'Get Microsoft Options',
				value: 'cartMicrosoftOptionsGET',
				action: 'Get Microsoft options',
			},
			{
				name: 'Add Microsoft Option to Cart',
				value: 'cartMicrosoftOptionsPOST',
				action: 'Add Microsoft option to cart',
			},
			{
				name: 'List Nasha Offers',
				value: 'cartNashaGET',
				action: 'List Nasha offers',
			},
			{
				name: 'Create Nasha',
				value: 'cartNashaPOST',
				action: 'Create Nasha',
			},
			{
				name: 'Get Nasha Options',
				value: 'cartNashaOptionsGET',
				action: 'Get Nasha options',
			},
			{
				name: 'Add Nasha Option to Cart',
				value: 'cartNashaOptionsPOST',
				action: 'Add Nasha option to cart',
			},
			{
				name: 'List Netapp Offers',
				value: 'cartNetappGET',
				action: 'List Netapp offers',
			},
			{
				name: 'Create Netapp',
				value: 'cartNetappPOST',
				action: 'Create Netapp',
			},
			{
				name: 'Get Netapp Options',
				value: 'cartNetappOptionsGET',
				action: 'Get Netapp options',
			},
			{
				name: 'Add Netapp Option to Cart',
				value: 'cartNetappOptionsPOST',
				action: 'Add Netapp option to cart',
			},
			{
				name: 'List Nutanix Offers',
				value: 'cartNutanixGET',
				action: 'List Nutanix offers',
			},
			{
				name: 'Create Nutanix',
				value: 'cartNutanixPOST',
				action: 'Create Nutanix',
			},
			{
				name: 'Get Nutanix Options',
				value: 'cartNutanixOptionsGET',
				action: 'Get Nutanix options',
			},
			{
				name: 'Add Nutanix Option to Cart',
				value: 'cartNutanixOptionsPOST',
				action: 'Add Nutanix option to cart',
			},
			{
				name: 'List Office365 Offers',
				value: 'cartOffice365GET',
				action: 'List Office365 offers',
			},
			{
				name: 'Create Office365',
				value: 'cartOffice365POST',
				action: 'Create Office365',
			},
			{
				name: 'Get Office365 Options',
				value: 'cartOffice365OptionsGET',
				action: 'Get Office365 options',
			},
			{
				name: 'Add Office365 Option to Cart',
				value: 'cartOffice365OptionsPOST',
				action: 'Add Office365 option to cart',
			},
			{
				name: 'List Office365 Prepaid Offers',
				value: 'cartOffice365PrepaidGET',
				action: 'List Office365 Prepaid offers',
			},
			{
				name: 'Create Office365 Prepaid',
				value: 'cartOffice365PrepaidPOST',
				action: 'Create Office365 Prepaid',
			},
			{
				name: 'Get Office365 Prepaid Options',
				value: 'cartOffice365PrepaidOptionsGET',
				action: 'Get Office365 Prepaid options',
			},
			{
				name: 'Add Office365 Prepaid Option to Cart',
				value: 'cartOffice365PrepaidOptionsPOST',
				action: 'Add Office365 Prepaid option to cart',
			},
			{
				name: 'List Office Prepaid Offers',
				value: 'cartOfficePrepaidGET',
				action: 'List Office Prepaid offers',
			},
			{
				name: 'Create Office Prepaid',
				value: 'cartOfficePrepaidPOST',
				action: 'Create Office Prepaid',
			},
			{
				name: 'Get Office Prepaid Options',
				value: 'cartOfficePrepaidOptionsGET',
				action: 'Get Office Prepaid options',
			},
			{
				name: 'Add Office Prepaid Option to Cart',
				value: 'cartOfficePrepaidOptionsPOST',
				action: 'Add Office Prepaid option to cart',
			},
			{
				name: 'List Okms Offers',
				value: 'cartOkmsGET',
				action: 'List Okms offers',
			},
			{
				name: 'Create Okms',
				value: 'cartOkmsPOST',
				action: 'Create Okms',
			},
			{
				name: 'List Otb Offers',
				value: 'cartOtbGET',
				action: 'List Otb offers',
			},
			{
				name: 'Create Otb',
				value: 'cartOtbPOST',
				action: 'Create Otb',
			},
			{
				name: 'Get Otb Options',
				value: 'cartOtbOptionsGET',
				action: 'Get Otb options',
			},
			{
				name: 'Add Otb Option to Cart',
				value: 'cartOtbOptionsPOST',
				action: 'Add Otb option to cart',
			},
			{
				name: 'List Otb Reseller Offers',
				value: 'cartOtbResellerGET',
				action: 'List Otb Reseller offers',
			},
			{
				name: 'Create Otb Reseller',
				value: 'cartOtbResellerPOST',
				action: 'Create Otb Reseller',
			},
			{
				name: 'Get Otb Reseller Options',
				value: 'cartOtbResellerOptionsGET',
				action: 'Get Otb Reseller options',
			},
			{
				name: 'Add Otb Reseller Option to Cart',
				value: 'cartOtbResellerOptionsPOST',
				action: 'Add Otb Reseller option to cart',
			},
			{
				name: 'List Ovh Cloud Connect Offers',
				value: 'cartOvhCloudConnectGET',
				action: 'List Ovh Cloud Connect offers',
			},
			{
				name: 'Create Ovh Cloud Connect',
				value: 'cartOvhCloudConnectPOST',
				action: 'Create Ovh Cloud Connect',
			},
			{
				name: 'List Paasmon Offers',
				value: 'cartPaasmonGET',
				action: 'List Paasmon offers',
			},
			{
				name: 'Create Paasmon',
				value: 'cartPaasmonPOST',
				action: 'Create Paasmon',
			},
			{
				name: 'List Packs Professional Services Offers',
				value: 'cartPacksProfessionalServicesGET',
				action: 'List Packs Professional Services offers',
			},
			{
				name: 'Create Packs Professional Services',
				value: 'cartPacksProfessionalServicesPOST',
				action: 'Create Packs Professional Services',
			},
			{
				name: 'Get Packs Professional Services Options',
				value: 'cartPacksProfessionalServicesOptionsGET',
				action: 'Get Packs Professional Services options',
			},
			{
				name: 'Add Packs Professional Services Option to Cart',
				value: 'cartPacksProfessionalServicesOptionsPOST',
				action: 'Add Packs Professional Services option to cart',
			},
			{
				name: 'List Power Hosting Offers',
				value: 'cartPowerHostingGET',
				action: 'List Power Hosting offers',
			},
			{
				name: 'Create Power Hosting',
				value: 'cartPowerHostingPOST',
				action: 'Create Power Hosting',
			},
			{
				name: 'List Private Cloud Offers',
				value: 'cartPrivateCloudGET',
				action: 'List Private Cloud offers',
			},
			{
				name: 'Create Private Cloud',
				value: 'cartPrivateCloudPOST',
				action: 'Create Private Cloud',
			},
			{
				name: 'Get Private Cloud Options',
				value: 'cartPrivateCloudOptionsGET',
				action: 'Get Private Cloud options',
			},
			{
				name: 'Add Private Cloud Option to Cart',
				value: 'cartPrivateCloudOptionsPOST',
				action: 'Add Private Cloud option to cart',
			},
			{
				name: 'List Private Cloud C D I Offers',
				value: 'cartPrivateCloudCDIGET',
				action: 'List Private Cloud C D I offers',
			},
			{
				name: 'Create Private Cloud C D I',
				value: 'cartPrivateCloudCDIPOST',
				action: 'Create Private Cloud C D I',
			},
			{
				name: 'Get Private Cloud C D I Options',
				value: 'cartPrivateCloudCDIOptionsGET',
				action: 'Get Private Cloud C D I options',
			},
			{
				name: 'Add Private Cloud C D I Option to Cart',
				value: 'cartPrivateCloudCDIOptionsPOST',
				action: 'Add Private Cloud C D I option to cart',
			},
			{
				name: 'List Private Cloud D C Offers',
				value: 'cartPrivateCloudDCGET',
				action: 'List Private Cloud D C offers',
			},
			{
				name: 'Create Private Cloud D C',
				value: 'cartPrivateCloudDCPOST',
				action: 'Create Private Cloud D C',
			},
			{
				name: 'Get Private Cloud D C Options',
				value: 'cartPrivateCloudDCOptionsGET',
				action: 'Get Private Cloud D C options',
			},
			{
				name: 'Add Private Cloud D C Option to Cart',
				value: 'cartPrivateCloudDCOptionsPOST',
				action: 'Add Private Cloud D C option to cart',
			},
			{
				name: 'List Private Cloud Enterprise Offers',
				value: 'cartPrivateCloudEnterpriseGET',
				action: 'List Private Cloud Enterprise offers',
			},
			{
				name: 'Create Private Cloud Enterprise',
				value: 'cartPrivateCloudEnterprisePOST',
				action: 'Create Private Cloud Enterprise',
			},
			{
				name: 'Get Private Cloud Enterprise Options',
				value: 'cartPrivateCloudEnterpriseOptionsGET',
				action: 'Get Private Cloud Enterprise options',
			},
			{
				name: 'Add Private Cloud Enterprise Option to Cart',
				value: 'cartPrivateCloudEnterpriseOptionsPOST',
				action: 'Add Private Cloud Enterprise option to cart',
			},
			{
				name: 'List Private Cloud Reseller Offers',
				value: 'cartPrivateCloudResellerGET',
				action: 'List Private Cloud Reseller offers',
			},
			{
				name: 'Create Private Cloud Reseller',
				value: 'cartPrivateCloudResellerPOST',
				action: 'Create Private Cloud Reseller',
			},
			{
				name: 'Get Private Cloud Reseller Options',
				value: 'cartPrivateCloudResellerOptionsGET',
				action: 'Get Private Cloud Reseller options',
			},
			{
				name: 'Add Private Cloud Reseller Option to Cart',
				value: 'cartPrivateCloudResellerOptionsPOST',
				action: 'Add Private Cloud Reseller option to cart',
			},
			{
				name: 'List Private Cloud Reseller Enterprise Offers',
				value: 'cartPrivateCloudResellerEnterpriseGET',
				action: 'List Private Cloud Reseller Enterprise offers',
			},
			{
				name: 'Create Private Cloud Reseller Enterprise',
				value: 'cartPrivateCloudResellerEnterprisePOST',
				action: 'Create Private Cloud Reseller Enterprise',
			},
			{
				name: 'Get Private Cloud Reseller Enterprise Options',
				value: 'cartPrivateCloudResellerEnterpriseOptionsGET',
				action: 'Get Private Cloud Reseller Enterprise options',
			},
			{
				name: 'Add Private Cloud Reseller Enterprise Option to Cart',
				value: 'cartPrivateCloudResellerEnterpriseOptionsPOST',
				action: 'Add Private Cloud Reseller Enterprise option to cart',
			},
			{
				name: 'List Private Cloud S D D C Offers',
				value: 'cartPrivateCloudSDDCGET',
				action: 'List Private Cloud S D D C offers',
			},
			{
				name: 'Create Private Cloud S D D C',
				value: 'cartPrivateCloudSDDCPOST',
				action: 'Create Private Cloud S D D C',
			},
			{
				name: 'Get Private Cloud S D D C Options',
				value: 'cartPrivateCloudSDDCOptionsGET',
				action: 'Get Private Cloud S D D C options',
			},
			{
				name: 'Add Private Cloud S D D C Option to Cart',
				value: 'cartPrivateCloudSDDCOptionsPOST',
				action: 'Add Private Cloud S D D C option to cart',
			},
			{
				name: 'List Private S Q L Offers',
				value: 'cartPrivateSQLGET',
				action: 'List Private S Q L offers',
			},
			{
				name: 'Create Private S Q L',
				value: 'cartPrivateSQLPOST',
				action: 'Create Private S Q L',
			},
			{
				name: 'List Reseller Offers',
				value: 'cartResellerGET',
				action: 'List Reseller offers',
			},
			{
				name: 'Create Reseller',
				value: 'cartResellerPOST',
				action: 'Create Reseller',
			},
			{
				name: 'List Sharepoint Offers',
				value: 'cartSharepointGET',
				action: 'List Sharepoint offers',
			},
			{
				name: 'Create Sharepoint',
				value: 'cartSharepointPOST',
				action: 'Create Sharepoint',
			},
			{
				name: 'Get Sharepoint Options',
				value: 'cartSharepointOptionsGET',
				action: 'Get Sharepoint options',
			},
			{
				name: 'Add Sharepoint Option to Cart',
				value: 'cartSharepointOptionsPOST',
				action: 'Add Sharepoint option to cart',
			},
			{
				name: 'List Sms Offers',
				value: 'cartSmsGET',
				action: 'List Sms offers',
			},
			{
				name: 'Create Sms',
				value: 'cartSmsPOST',
				action: 'Create Sms',
			},
			{
				name: 'List Snc Network Services Offers',
				value: 'cartSncNetworkServicesGET',
				action: 'List Snc Network Services offers',
			},
			{
				name: 'Create Snc Network Services',
				value: 'cartSncNetworkServicesPOST',
				action: 'Create Snc Network Services',
			},
			{
				name: 'Get Snc Network Services Options',
				value: 'cartSncNetworkServicesOptionsGET',
				action: 'Get Snc Network Services options',
			},
			{
				name: 'Add Snc Network Services Option to Cart',
				value: 'cartSncNetworkServicesOptionsPOST',
				action: 'Add Snc Network Services option to cart',
			},
			{
				name: 'List Ssl Comodo Offers',
				value: 'cartSslComodoGET',
				action: 'List Ssl Comodo offers',
			},
			{
				name: 'Create Ssl Comodo',
				value: 'cartSslComodoPOST',
				action: 'Create Ssl Comodo',
			},
			{
				name: 'Get Ssl Comodo Options',
				value: 'cartSslComodoOptionsGET',
				action: 'Get Ssl Comodo options',
			},
			{
				name: 'Add Ssl Comodo Option to Cart',
				value: 'cartSslComodoOptionsPOST',
				action: 'Add Ssl Comodo option to cart',
			},
			{
				name: 'List Ssl Gateway Offers',
				value: 'cartSslGatewayGET',
				action: 'List Ssl Gateway offers',
			},
			{
				name: 'Create Ssl Gateway',
				value: 'cartSslGatewayPOST',
				action: 'Create Ssl Gateway',
			},
			{
				name: 'Get Ssl Gateway Options',
				value: 'cartSslGatewayOptionsGET',
				action: 'Get Ssl Gateway options',
			},
			{
				name: 'Add Ssl Gateway Option to Cart',
				value: 'cartSslGatewayOptionsPOST',
				action: 'Add Ssl Gateway option to cart',
			},
			{
				name: 'List Telephony Offers',
				value: 'cartTelephonyGET',
				action: 'List Telephony offers',
			},
			{
				name: 'Create Telephony',
				value: 'cartTelephonyPOST',
				action: 'Create Telephony',
			},
			{
				name: 'Get Telephony Options',
				value: 'cartTelephonyOptionsGET',
				action: 'Get Telephony options',
			},
			{
				name: 'Add Telephony Option to Cart',
				value: 'cartTelephonyOptionsPOST',
				action: 'Add Telephony option to cart',
			},
			{
				name: 'List Vdi Offers',
				value: 'cartVdiGET',
				action: 'List Vdi offers',
			},
			{
				name: 'Create Vdi',
				value: 'cartVdiPOST',
				action: 'Create Vdi',
			},
			{
				name: 'Get Vdi Options',
				value: 'cartVdiOptionsGET',
				action: 'Get Vdi options',
			},
			{
				name: 'Add Vdi Option to Cart',
				value: 'cartVdiOptionsPOST',
				action: 'Add Vdi option to cart',
			},
			{
				name: 'List Veeam Enterprise Offers',
				value: 'cartVeeamEnterpriseGET',
				action: 'List Veeam Enterprise offers',
			},
			{
				name: 'Create Veeam Enterprise',
				value: 'cartVeeamEnterprisePOST',
				action: 'Create Veeam Enterprise',
			},
			{
				name: 'Get Veeam Enterprise Options',
				value: 'cartVeeamEnterpriseOptionsGET',
				action: 'Get Veeam Enterprise options',
			},
			{
				name: 'Add Veeam Enterprise Option to Cart',
				value: 'cartVeeamEnterpriseOptionsPOST',
				action: 'Add Veeam Enterprise option to cart',
			},
			{
				name: 'List Veeamcc Offers',
				value: 'cartVeeamccGET',
				action: 'List Veeamcc offers',
			},
			{
				name: 'Create Veeamcc',
				value: 'cartVeeamccPOST',
				action: 'Create Veeamcc',
			},
			{
				name: 'Get Veeamcc Options',
				value: 'cartVeeamccOptionsGET',
				action: 'Get Veeamcc options',
			},
			{
				name: 'Add Veeamcc Option to Cart',
				value: 'cartVeeamccOptionsPOST',
				action: 'Add Veeamcc option to cart',
			},
			{
				name: 'List Videocenter Offers',
				value: 'cartVideocenterGET',
				action: 'List Videocenter offers',
			},
			{
				name: 'Create Videocenter',
				value: 'cartVideocenterPOST',
				action: 'Create Videocenter',
			},
			{
				name: 'Get Videocenter Options',
				value: 'cartVideocenterOptionsGET',
				action: 'Get Videocenter options',
			},
			{
				name: 'Add Videocenter Option to Cart',
				value: 'cartVideocenterOptionsPOST',
				action: 'Add Videocenter option to cart',
			},
			{
				name: 'List Vmware Cloud Director Offers',
				value: 'cartVmwareCloudDirectorGET',
				action: 'List Vmware Cloud Director offers',
			},
			{
				name: 'Create Vmware Cloud Director',
				value: 'cartVmwareCloudDirectorPOST',
				action: 'Create Vmware Cloud Director',
			},
			{
				name: 'Get Vmware Cloud Director Options',
				value: 'cartVmwareCloudDirectorOptionsGET',
				action: 'Get Vmware Cloud Director options',
			},
			{
				name: 'Add Vmware Cloud Director Option to Cart',
				value: 'cartVmwareCloudDirectorOptionsPOST',
				action: 'Add Vmware Cloud Director option to cart',
			},
			{
				name: 'List Vmware Cloud Director Backup Offers',
				value: 'cartVmwareCloudDirectorBackupGET',
				action: 'List Vmware Cloud Director Backup offers',
			},
			{
				name: 'Create Vmware Cloud Director Backup',
				value: 'cartVmwareCloudDirectorBackupPOST',
				action: 'Create Vmware Cloud Director Backup',
			},
			{
				name: 'Get Vmware Cloud Director Backup Options',
				value: 'cartVmwareCloudDirectorBackupOptionsGET',
				action: 'Get Vmware Cloud Director Backup options',
			},
			{
				name: 'Add Vmware Cloud Director Backup Option to Cart',
				value: 'cartVmwareCloudDirectorBackupOptionsPOST',
				action: 'Add Vmware Cloud Director Backup option to cart',
			},
			{
				name: 'List Vps Offers',
				value: 'cartVpsGET',
				action: 'List Vps offers',
			},
			{
				name: 'Create Vps',
				value: 'cartVpsPOST',
				action: 'Create Vps',
			},
			{
				name: 'Get Vps Options',
				value: 'cartVpsOptionsGET',
				action: 'Get Vps options',
			},
			{
				name: 'Add Vps Option to Cart',
				value: 'cartVpsOptionsPOST',
				action: 'Add Vps option to cart',
			},
			{
				name: 'List Vrack Offers',
				value: 'cartVrackGET',
				action: 'List Vrack offers',
			},
			{
				name: 'Create Vrack',
				value: 'cartVrackPOST',
				action: 'Create Vrack',
			},
			{
				name: 'Get Vrack Options',
				value: 'cartVrackOptionsGET',
				action: 'Get Vrack options',
			},
			{
				name: 'Add Vrack Option to Cart',
				value: 'cartVrackOptionsPOST',
				action: 'Add Vrack option to cart',
			},
			{
				name: 'List Vrack Reseller Offers',
				value: 'cartVrackResellerGET',
				action: 'List Vrack Reseller offers',
			},
			{
				name: 'Create Vrack Reseller',
				value: 'cartVrackResellerPOST',
				action: 'Create Vrack Reseller',
			},
			{
				name: 'List Vrack Services Offers',
				value: 'cartVrackServicesGET',
				action: 'List Vrack Services offers',
			},
			{
				name: 'Create Vrack Services',
				value: 'cartVrackServicesPOST',
				action: 'Create Vrack Services',
			},
			{
				name: 'List Web Hosting Offers',
				value: 'cartWebHostingGET',
				action: 'List Web Hosting offers',
			},
			{
				name: 'Create Web Hosting',
				value: 'cartWebHostingPOST',
				action: 'Create Web Hosting',
			},
			{
				name: 'Get Web Hosting Options',
				value: 'cartWebHostingOptionsGET',
				action: 'Get Web Hosting options',
			},
			{
				name: 'Add Web Hosting Option to Cart',
				value: 'cartWebHostingOptionsPOST',
				action: 'Add Web Hosting option to cart',
			},
			{
				name: 'List Xdsl Offers',
				value: 'cartXdslGET',
				action: 'List Xdsl offers',
			},
			{
				name: 'Create Xdsl',
				value: 'cartXdslPOST',
				action: 'Create Xdsl',
			},
			{
				name: 'Get Xdsl Options',
				value: 'cartXdslOptionsGET',
				action: 'Get Xdsl options',
			},
			{
				name: 'Add Xdsl Option to Cart',
				value: 'cartXdslOptionsPOST',
				action: 'Add Xdsl option to cart',
			},
			{
				name: 'List Zimbra Offers',
				value: 'cartZimbraGET',
				action: 'List Zimbra offers',
			},
			{
				name: 'Create Zimbra',
				value: 'cartZimbraPOST',
				action: 'Create Zimbra',
			},
			{
				name: 'Get Zimbra Options',
				value: 'cartZimbraOptionsGET',
				action: 'Get Zimbra options',
			},
			{
				name: 'Add Zimbra Option to Cart',
				value: 'cartZimbraOptionsPOST',
				action: 'Add Zimbra option to cart',
			},
				{
					name: 'Catalog Public Get',
					value: 'catalogPublicGet',
					action: 'Get catalog public products',
				},
				{
					name: 'Catalog Public Options Get',
					value: 'catalogPublicOptionsGet',
					action: 'Get catalog public product options',
				},
				{
					name: 'Cloud Project Create',
					value: 'cloudprojectCreatePost',
					action: 'Create cloud project',
				},
				{ name: 'Cloud Project Get', value: 'cloudprojectGet', action: 'Get cloud project' },
				{ name: 'Cloud Project List', value: 'cloudprojectListGet', action: 'List cloud projects' },
				{ name: 'Domain Get', value: 'domainGet', action: 'Get domain catalog' },
				{ name: 'Domain Options Get', value: 'domainOptionsGet', action: 'Get domain options' },
				{ name: 'Eco Get', value: 'ecoGet', action: 'Get eco catalog' },
				{ name: 'Eco Options Get', value: 'ecoOptionsGet', action: 'Get eco options' },
				{
					name: 'Email Exchange Account Get',
					value: 'emailexchangeAccountGet',
					action: 'Get exchange account',
				},
				{
					name: 'Email Exchange Account Upgrade',
					value: 'emailexchangeAccountUpgradeCreatePost',
					action: 'Upgrade exchange account',
				},
				{
					name: 'Email Exchange Disk Space',
					value: 'emailexchangeDiskSpaceCreatePost',
					action: 'Configure disk space',
				},
				{
					name: 'Email Exchange Organization List',
					value: 'emailexchangeOrganizationListGet',
					action: 'List exchange organizations',
				},
				{
					name: 'Email Exchange Outlook',
					value: 'emailexchangeOutlookCreatePost',
					action: 'Configure outlook',
				},
				{
					name: 'Email Exchange Service Create',
					value: 'emailexchangeServiceCreatePost',
					action: 'Create exchange service',
				},
				{
					name: 'Email Exchange Service Get',
					value: 'emailexchangeServiceGet',
					action: 'Get exchange services',
				},
				{
					name: 'Email Exchange Upgrade',
					value: 'emailexchangeUpgradeCreatePost',
					action: 'Upgrade exchange',
				},
				{
					name: 'Email Pro Organization Create',
					value: 'emailproOrganizationCreatePost',
					action: 'Create pro organization',
				},
				{
					name: 'Email Pro Organization List',
					value: 'emailproOrganizationListGet',
					action: 'List pro organizations',
				},
				{ name: 'EmailDomain Get', value: 'emailDomainGet', action: 'Get emailDomain catalog' },
				{
					name: 'EmailDomain Options Get',
					value: 'emailDomainOptionsGet',
					action: 'Get emailDomain options',
				},
				{ name: 'Emailpro Get', value: 'emailproGet', action: 'Get emailpro catalog' },
				{
					name: 'Emailpro Options Get',
					value: 'emailproOptionsGet',
					action: 'Get emailpro options',
				},
				{ name: 'Exchange Get', value: 'exchangeGet', action: 'Get exchange catalog' },
				{
					name: 'Exchange Options Get',
					value: 'exchangeOptionsGet',
					action: 'Get exchange options',
				},
				{ name: 'Freefax Create', value: 'freefaxCreatePost', action: 'Create freefax order' },
				{ name: 'Freefax Number Get', value: 'freefaxnumberGet', action: 'Get freefax number' },
				{
					name: 'Freefax Organization List',
					value: 'freefaxorganizationListGet',
					action: 'List freefax organizations',
				},
				{
					name: 'IpLoadbalancing Get',
					value: 'ipLoadbalancingGet',
					action: 'Get ipLoadbalancing catalog',
				},
				{
					name: 'IpLoadbalancing Options Get',
					value: 'ipLoadbalancingOptionsGet',
					action: 'Get ipLoadbalancing options',
				},
				{
					name: 'License cPanel List',
					value: 'licensecPanelListGet',
					action: 'List cPanel license services',
				},
				{
					name: 'License cPanel New Create',
					value: 'licensecPanelNewCreatePost',
					action: 'Create cPanel new order',
				},
				{
					name: 'License cPanel New Duration Get',
					value: 'licensecPanelNewDurationGet',
					action: 'Get cPanel new prices',
				},
				{
					name: 'License cPanel New List',
					value: 'licensecPanelNewListGet',
					action: 'Get cPanel new durations',
				},
				{
					name: 'License cPanel Service Get',
					value: 'licensecPanelServiceGet',
					action: 'Get cPanel service options',
				},
				{
					name: 'License cPanel Service Upgrade Create',
					value: 'licensecPanelServiceUpgradeCreatePost',
					action: 'Upgrade cPanel order',
				},
				{
					name: 'License cPanel Service Upgrade Duration Get',
					value: 'licensecPanelServiceUpgradeDurationGet',
					action: 'Get cPanel upgrade prices',
				},
				{
					name: 'License cPanel Service Upgrade List',
					value: 'licensecPanelServiceUpgradeListGet',
					action: 'Get cPanel upgrade durations',
				},
				{
					name: 'License Office List',
					value: 'licenseofficeListGet',
					action: 'List office license services',
				},
				{
					name: 'License Office New Create',
					value: 'licenseofficeNewCreatePost',
					action: 'Create office new order',
				},
				{
					name: 'License Office New Duration Get',
					value: 'licenseofficeNewDurationGet',
					action: 'Get office new prices',
				},
				{
					name: 'License Office New List',
					value: 'licenseofficeNewListGet',
					action: 'Get office new durations',
				},
				{
					name: 'License Office Service Get',
					value: 'licenseofficeServiceGet',
					action: 'Get office service options',
				},
				{
					name: 'License Office Service Upgrade Create',
					value: 'licenseofficeServiceUpgradeCreatePost',
					action: 'Upgrade office order',
				},
				{
					name: 'License Office Service Upgrade Duration Get',
					value: 'licenseofficeServiceUpgradeDurationGet',
					action: 'Get office upgrade prices',
				},
				{
					name: 'License Office Service Upgrade List',
					value: 'licenseofficeServiceUpgradeListGet',
					action: 'Get office upgrade durations',
				},
				{
					name: 'License Plesk List',
					value: 'licensepleskListGet',
					action: 'List plesk license services',
				},
				{
					name: 'License Plesk New Create',
					value: 'licensepleskNewCreatePost',
					action: 'Create plesk new order',
				},
				{
					name: 'License Plesk New Duration Get',
					value: 'licensepleskNewDurationGet',
					action: 'Get plesk new prices',
				},
				{
					name: 'License Plesk New List',
					value: 'licensepleskNewListGet',
					action: 'Get plesk new durations',
				},
				{
					name: 'License Plesk Service Get',
					value: 'licensepleskServiceGet',
					action: 'Get plesk service options',
				},
				{
					name: 'License Plesk Service Upgrade Create',
					value: 'licensepleskServiceUpgradeCreatePost',
					action: 'Upgrade plesk order',
				},
				{
					name: 'License Plesk Service Upgrade Duration Get',
					value: 'licensepleskServiceUpgradeDurationGet',
					action: 'Get plesk upgrade prices',
				},
				{
					name: 'License Plesk Service Upgrade List',
					value: 'licensepleskServiceUpgradeListGet',
					action: 'Get plesk upgrade durations',
				},
				{
					name: 'License Sqlserver List',
					value: 'licensesqlserverListGet',
					action: 'List sqlserver license services',
				},
				{
					name: 'License Sqlserver New Create',
					value: 'licensesqlserverNewCreatePost',
					action: 'Create sqlserver new order',
				},
				{
					name: 'License Sqlserver New Duration Get',
					value: 'licensesqlserverNewDurationGet',
					action: 'Get sqlserver new prices',
				},
				{
					name: 'License Sqlserver New List',
					value: 'licensesqlserverNewListGet',
					action: 'Get sqlserver new durations',
				},
				{
					name: 'License Sqlserver Service Get',
					value: 'licensesqlserverServiceGet',
					action: 'Get sqlserver service options',
				},
				{
					name: 'License Sqlserver Service Upgrade Create',
					value: 'licensesqlserverServiceUpgradeCreatePost',
					action: 'Upgrade sqlserver order',
				},
				{
					name: 'License Sqlserver Service Upgrade Duration Get',
					value: 'licensesqlserverServiceUpgradeDurationGet',
					action: 'Get sqlserver upgrade prices',
				},
				{
					name: 'License Sqlserver Service Upgrade List',
					value: 'licensesqlserverServiceUpgradeListGet',
					action: 'Get sqlserver upgrade durations',
				},
				{
					name: 'License Windows List',
					value: 'licensewindowsListGet',
					action: 'List windows license services',
				},
				{
					name: 'License Windows New Create',
					value: 'licensewindowsNewCreatePost',
					action: 'Create windows new order',
				},
				{
					name: 'License Windows New Duration Get',
					value: 'licensewindowsNewDurationGet',
					action: 'Get windows new prices',
				},
				{
					name: 'License Windows New List',
					value: 'licensewindowsNewListGet',
					action: 'Get windows new durations',
				},
				{
					name: 'License Windows Service Get',
					value: 'licensewindowsServiceGet',
					action: 'Get windows service options',
				},
				{
					name: 'License Windows Service Upgrade Create',
					value: 'licensewindowsServiceUpgradeCreatePost',
					action: 'Upgrade windows order',
				},
				{
					name: 'License Windows Service Upgrade Duration Get',
					value: 'licensewindowsServiceUpgradeDurationGet',
					action: 'Get windows upgrade prices',
				},
				{
					name: 'License Windows Service Upgrade List',
					value: 'licensewindowsServiceUpgradeListGet',
					action: 'Get windows upgrade durations',
				},
				{
					name: 'LicensecPanel Get',
					value: 'licensecPanelGet',
					action: 'Get licensecPanel catalog',
				},
				{
					name: 'LicensecPanel Options Get',
					value: 'licensecPanelOptionsGet',
					action: 'Get licensecPanel options',
				},
				{ name: 'LicenseHycu Get', value: 'licenseHycuGet', action: 'Get licenseHycu catalog' },
				{
					name: 'LicenseHycu Options Get',
					value: 'licenseHycuOptionsGet',
					action: 'Get licenseHycu options',
				},
				{ name: 'LicensePlesk Get', value: 'licensePleskGet', action: 'Get licensePlesk catalog' },
				{
					name: 'LicensePlesk Options Get',
					value: 'licensePleskOptionsGet',
					action: 'Get licensePlesk options',
				},
				{
					name: 'LicenseSqlServer Get',
					value: 'licenseSqlServerGet',
					action: 'Get licenseSqlServer catalog',
				},
				{
					name: 'LicenseSqlServer Options Get',
					value: 'licenseSqlServerOptionsGet',
					action: 'Get licenseSqlServer options',
				},
				{
					name: 'LicenseWindows Get',
					value: 'licenseWindowsGet',
					action: 'Get licenseWindows catalog',
				},
				{
					name: 'LicenseWindows Options Get',
					value: 'licenseWindowsOptionsGet',
					action: 'Get licenseWindows options',
				},
				{ name: 'Logs Get', value: 'logsGet', action: 'Get logs catalog' },
				{ name: 'Logs Options Get', value: 'logsOptionsGet', action: 'Get logs options' },
				{ name: 'Nasha Get', value: 'nashaGet', action: 'Get nasha catalog' },
				{ name: 'Nasha Options Get', value: 'nashaOptionsGet', action: 'Get nasha options' },
				{ name: 'Netapp Get', value: 'netappGet', action: 'Get netapp catalog' },
				{ name: 'Netapp Options Get', value: 'netappOptionsGet', action: 'Get netapp options' },
				{ name: 'Nutanix Get', value: 'nutanixGet', action: 'Get nutanix catalog' },
				{ name: 'Nutanix Options Get', value: 'nutanixOptionsGet', action: 'Get nutanix options' },
				{
					name: 'Office365Prepaid Get',
					value: 'office365PrepaidGet',
					action: 'Get office365Prepaid catalog',
				},
				{
					name: 'Office365Prepaid Options Get',
					value: 'office365PrepaidOptionsGet',
					action: 'Get office365Prepaid options',
				},
				{
					name: 'OfficePrepaid Get',
					value: 'officePrepaidGet',
					action: 'Get officePrepaid catalog',
				},
				{
					name: 'OfficePrepaid Options Get',
					value: 'officePrepaidOptionsGet',
					action: 'Get officePrepaid options',
				},
				{ name: 'Okms Get', value: 'okmsGet', action: 'Get okms catalog' },
				{ name: 'Okms Options Get', value: 'okmsOptionsGet', action: 'Get okms options' },
				{
					name: 'OverTheBox Create',
					value: 'overTheBoxCreatePost',
					action: 'Create overTheBox order',
				},
				{
					name: 'OverTheBox Device Get',
					value: 'overTheBoxDeviceGet',
					action: 'Get overTheBox device',
				},
				{ name: 'OverTheBox Get', value: 'overTheBoxGet', action: 'Get overTheBox order' },
				{ name: 'OverTheBox List', value: 'overTheBoxListGet', action: 'List overTheBox devices' },
				{
					name: 'OverTheBox Order Create',
					value: 'overTheBoxOrderCreatePost',
					action: 'Create overTheBox order',
				},
				{
					name: 'OvhCloudConnect Get',
					value: 'ovhCloudConnectGet',
					action: 'Get ovhCloudConnect catalog',
				},
				{
					name: 'OvhCloudConnect Options Get',
					value: 'ovhCloudConnectOptionsGet',
					action: 'Get ovhCloudConnect options',
				},
				{
					name: 'PacksProfessionalServices Get',
					value: 'packsProfessionalServicesGet',
					action: 'Get packsProfessionalServices catalog',
				},
				{
					name: 'PacksProfessionalServices Options Get',
					value: 'packsProfessionalServicesOptionsGet',
					action: 'Get packsProfessionalServices options',
				},
				{ name: 'PrivateCloud Get', value: 'privateCloudGet', action: 'Get privateCloud catalog' },
				{
					name: 'PrivateCloud Options Get',
					value: 'privateCloudOptionsGet',
					action: 'Get privateCloud options',
				},
				{
					name: 'PrivateCloudEnterprise Get',
					value: 'privateCloudEnterpriseGet',
					action: 'Get privateCloudEnterprise catalog',
				},
				{
					name: 'PrivateCloudEnterprise Options Get',
					value: 'privateCloudEnterpriseOptionsGet',
					action: 'Get privateCloudEnterprise options',
				},
				{ name: 'PrivateSQL Get', value: 'privateSQLGet', action: 'Get privateSQL catalog' },
				{
					name: 'PrivateSQL Options Get',
					value: 'privateSQLOptionsGet',
					action: 'Get privateSQL options',
				},
				{ name: 'SaaS Csp2 Create', value: 'saascsp2CreatePost', action: 'Create saas csp2 order' },
				{ name: 'SaaS Csp2 List', value: 'saascsp2ListGet', action: 'List saas csp2 products' },
				{
					name: 'SaaS Csp2 Product Get',
					value: 'saascsp2ProductGet',
					action: 'Get saas csp2 product',
				},
				{ name: 'SMS Create', value: 'smsCreatePost', action: 'Create sms order' },
				{ name: 'SMS List', value: 'smsListGet', action: 'List sms products' },
				{
					name: 'SMS Product Create',
					value: 'smsProductCreatePost',
					action: 'Create sms product order',
				},
				{
					name: 'SMS Product Duration Get',
					value: 'smsProductDurationGet',
					action: 'Get sms product prices',
				},
				{ name: 'SMS Product Get', value: 'smsProductGet', action: 'Get sms product' },
				{ name: 'SslGateway Get', value: 'sslGatewayGet', action: 'Get sslGateway catalog' },
				{
					name: 'SslGateway Options Get',
					value: 'sslGatewayOptionsGet',
					action: 'Get sslGateway options',
				},
				{ name: 'Telephony Get', value: 'telephonyGet', action: 'Get telephony catalog' },
				{
					name: 'Telephony Options Get',
					value: 'telephonyOptionsGet',
					action: 'Get telephony options',
				},
				{
					name: 'Veeam Cloud Connect Config Create',
					value: 'veeamCloudConnectConfigCreatePost',
					action: 'Create veeam config',
				},
				{
					name: 'Veeam Cloud Connect Create',
					value: 'veeamCloudConnectCreatePost',
					action: 'Create veeam project',
				},
				{
					name: 'Veeam Cloud Connect Get',
					value: 'veeamCloudConnectGet',
					action: 'Get veeam project',
				},
				{
					name: 'Veeam Cloud Connect List',
					value: 'veeamCloudConnectListGet',
					action: 'List veeam projects',
				},
				{
					name: 'Veeam Cloud Connect Option Create',
					value: 'veeamCloudConnectOptionCreatePost',
					action: 'Create veeam option',
				},
				{
					name: 'VmwareCloudDirector Get',
					value: 'vmwareCloudDirectorGet',
					action: 'Get vmwareCloudDirector catalog',
				},
				{
					name: 'VmwareCloudDirector Options Get',
					value: 'vmwareCloudDirectorOptionsGet',
					action: 'Get vmwareCloudDirector options',
				},
				{
					name: 'VmwareCloudDirectorBackup Get',
					value: 'vmwareCloudDirectorBackupGet',
					action: 'Get vmwareCloudDirectorBackup catalog',
				},
				{
					name: 'VmwareCloudDirectorBackup Options Get',
					value: 'vmwareCloudDirectorBackupOptionsGet',
					action: 'Get vmwareCloudDirectorBackup options',
				},
				{
					name: 'VPS additionalDisk Create',
					value: 'vpsadditionalDiskCreatePost',
					action: 'Create additionalDisk order',
				},
				{
					name: 'VPS additionalDisk Duration Get',
					value: 'vpsadditionalDiskDurationGet',
					action: 'Get additionalDisk prices',
				},
				{
					name: 'VPS additionalDisk List',
					value: 'vpsadditionalDiskListGet',
					action: 'List additionalDisk options',
				},
				{
					name: 'VPS automatedBackup Create',
					value: 'vpsautomatedBackupCreatePost',
					action: 'Create automatedBackup order',
				},
				{
					name: 'VPS automatedBackup Duration Get',
					value: 'vpsautomatedBackupDurationGet',
					action: 'Get automatedBackup prices',
				},
				{
					name: 'VPS automatedBackup List',
					value: 'vpsautomatedBackupListGet',
					action: 'List automatedBackup options',
				},
				{ name: 'Vps Get', value: 'vpsGet', action: 'Get vps catalog' },
				{ name: 'Vps Options Get', value: 'vpsOptionsGet', action: 'Get vps options' },
				{
					name: 'VPS Snapshot Create',
					value: 'vpssnapshotCreatePost',
					action: 'Create snapshot order',
				},
				{
					name: 'VPS Snapshot Duration Get',
					value: 'vpssnapshotDurationGet',
					action: 'Get snapshot prices',
				},
				{ name: 'VPS Snapshot List', value: 'vpssnapshotListGet', action: 'List snapshot options' },
				{ name: 'WebHosting Get', value: 'webHostingGet', action: 'Get webHosting catalog' },
				{
					name: 'WebHosting Options Get',
					value: 'webHostingOptionsGet',
					action: 'Get webHosting options',
				},
				{ name: 'WebPaaS Get', value: 'webPaaSGet', action: 'Get webPaaS catalog' },
				{ name: 'WebPaaS Options Get', value: 'webPaaSOptionsGet', action: 'Get webPaaS options' },
				{ name: 'xDSL Spare Create', value: 'xdslspareCreatePost', action: 'Create xDSL order' },
				{ name: 'xDSL Spare List', value: 'xdslspareListGet', action: 'List xDSL spare lines' },
				{ name: 'Zimbra Get', value: 'zimbraGet', action: 'Get zimbra catalog' },
				{ name: 'Zimbra Options Get', value: 'zimbraOptionsGet', action: 'Get zimbra options' },
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
			return executeCartListGet.call(this);
		case 'cartCreatePost':
			return executeCartCreatePost.call(this);
		case 'cartDeleteDelete':
			return executeCartDeleteDelete.call(this);
		case 'cartGetGet':
			return executeCartGetGet.call(this);
		case 'cartUpdatePut':
			return executeCartUpdatePut.call(this);
		case 'cartSummaryGet':
			return executeCartSummaryGet.call(this);
		case 'cartItemListGet':
			return executeCartItemListGet.call(this);
		case 'cartItemGetGet':
			return executeCartItemGetGet.call(this);
		case 'cartItemUpdatePut':
			return executeCartItemUpdatePut.call(this);
		case 'cartItemDeleteDelete':
			return executeCartItemDeleteDelete.call(this);
		case 'cartItemConfigurationListGet':
			return executeCartItemConfigurationListGet.call(this);
		case 'cartItemConfigurationCreatePost':
			return executeCartItemConfigurationCreatePost.call(this);
		case 'cartItemConfigurationGetGet':
			return executeCartItemConfigurationGetGet.call(this);
		case 'cartItemConfigurationDeleteDelete':
			return executeCartItemConfigurationDeleteDelete.call(this);
		case 'cartItemRequiredConfigurationListGet':
			return executeCartItemRequiredConfigurationListGet.call(this);
		case 'cartCouponListGet':
			return executeCartCouponListGet.call(this);
		case 'cartCouponCreatePost':
			return executeCartCouponCreatePost.call(this);
		case 'cartSupportListGet':
			return executeCartSupportListGet.call(this);
		case 'cartSupportCreatePost':
			return executeCartSupportCreatePost.call(this);
		case 'cartCheckoutGet':
			return executeCartCheckoutGet.call(this);
		case 'cartCheckoutPost':
			return executeCartCheckoutPost.call(this);
		case 'cartAssignPost':
			return executeCartAssignPost.call(this);
		case 'cartCouponDelete':
			return executeCartCouponDelete.call(this);
		case 'cartItemConfigurationUpdatePut':
			return executeCartItemConfigurationUpdatePut.call(this);
		case 'cartLicenseHycuGET':
			return executeCartLicenseHycuGET.call(this);
		case 'cartLicenseHycuPOST':
			return executeCartLicenseHycuPOST.call(this);
		case 'cartLicensePleskGET':
			return executeCartLicensePleskGET.call(this);
		case 'cartLicensePleskPOST':
			return executeCartLicensePleskPOST.call(this);
		case 'cartLicensePleskOptionsGET':
			return executeCartLicensePleskOptionsGET.call(this);
		case 'cartLicensePleskOptionsPOST':
			return executeCartLicensePleskOptionsPOST.call(this);
		case 'cartLicenseSqlServerGET':
			return executeCartLicenseSqlServerGET.call(this);
		case 'cartLicenseSqlServerPOST':
			return executeCartLicenseSqlServerPOST.call(this);
		case 'cartLicenseWindowsGET':
			return executeCartLicenseWindowsGET.call(this);
		case 'cartLicenseWindowsPOST':
			return executeCartLicenseWindowsPOST.call(this);
		case 'cartLicensecPanelGET':
			return executeCartLicensecPanelGET.call(this);
		case 'cartLicensecPanelPOST':
			return executeCartLicensecPanelPOST.call(this);
		case 'cartLogsGET':
			return executeCartLogsGET.call(this);
		case 'cartLogsPOST':
			return executeCartLogsPOST.call(this);
		case 'cartLogsOptionsGET':
			return executeCartLogsOptionsGET.call(this);
		case 'cartLogsOptionsPOST':
			return executeCartLogsOptionsPOST.call(this);
		case 'cartManagedCMSGET':
			return executeCartManagedCMSGET.call(this);
		case 'cartManagedCMSPOST':
			return executeCartManagedCMSPOST.call(this);
		case 'cartManagedCMSOptionsGET':
			return executeCartManagedCMSOptionsGET.call(this);
		case 'cartManagedCMSOptionsPOST':
			return executeCartManagedCMSOptionsPOST.call(this);
		case 'cartManagedServicesGET':
			return executeCartManagedServicesGET.call(this);
		case 'cartManagedServicesPOST':
			return executeCartManagedServicesPOST.call(this);
		case 'cartManagedServicesOptionsGET':
			return executeCartManagedServicesOptionsGET.call(this);
		case 'cartManagedServicesOptionsPOST':
			return executeCartManagedServicesOptionsPOST.call(this);
		case 'cartMetricsGET':
			return executeCartMetricsGET.call(this);
		case 'cartMetricsPOST':
			return executeCartMetricsPOST.call(this);
		case 'cartMetricsOptionsGET':
			return executeCartMetricsOptionsGET.call(this);
		case 'cartMetricsOptionsPOST':
			return executeCartMetricsOptionsPOST.call(this);
		case 'cartMicrosoftGET':
			return executeCartMicrosoftGET.call(this);
		case 'cartMicrosoftPOST':
			return executeCartMicrosoftPOST.call(this);
		case 'cartMicrosoftOptionsGET':
			return executeCartMicrosoftOptionsGET.call(this);
		case 'cartMicrosoftOptionsPOST':
			return executeCartMicrosoftOptionsPOST.call(this);
		case 'cartNashaGET':
			return executeCartNashaGET.call(this);
		case 'cartNashaPOST':
			return executeCartNashaPOST.call(this);
		case 'cartNashaOptionsGET':
			return executeCartNashaOptionsGET.call(this);
		case 'cartNashaOptionsPOST':
			return executeCartNashaOptionsPOST.call(this);
		case 'cartNetappGET':
			return executeCartNetappGET.call(this);
		case 'cartNetappPOST':
			return executeCartNetappPOST.call(this);
		case 'cartNetappOptionsGET':
			return executeCartNetappOptionsGET.call(this);
		case 'cartNetappOptionsPOST':
			return executeCartNetappOptionsPOST.call(this);
		case 'cartNutanixGET':
			return executeCartNutanixGET.call(this);
		case 'cartNutanixPOST':
			return executeCartNutanixPOST.call(this);
		case 'cartNutanixOptionsGET':
			return executeCartNutanixOptionsGET.call(this);
		case 'cartNutanixOptionsPOST':
			return executeCartNutanixOptionsPOST.call(this);
		case 'cartOffice365GET':
			return executeCartOffice365GET.call(this);
		case 'cartOffice365POST':
			return executeCartOffice365POST.call(this);
		case 'cartOffice365OptionsGET':
			return executeCartOffice365OptionsGET.call(this);
		case 'cartOffice365OptionsPOST':
			return executeCartOffice365OptionsPOST.call(this);
		case 'cartOffice365PrepaidGET':
			return executeCartOffice365PrepaidGET.call(this);
		case 'cartOffice365PrepaidPOST':
			return executeCartOffice365PrepaidPOST.call(this);
		case 'cartOffice365PrepaidOptionsGET':
			return executeCartOffice365PrepaidOptionsGET.call(this);
		case 'cartOffice365PrepaidOptionsPOST':
			return executeCartOffice365PrepaidOptionsPOST.call(this);
		case 'cartOfficePrepaidGET':
			return executeCartOfficePrepaidGET.call(this);
		case 'cartOfficePrepaidPOST':
			return executeCartOfficePrepaidPOST.call(this);
		case 'cartOfficePrepaidOptionsGET':
			return executeCartOfficePrepaidOptionsGET.call(this);
		case 'cartOfficePrepaidOptionsPOST':
			return executeCartOfficePrepaidOptionsPOST.call(this);
		case 'cartOkmsGET':
			return executeCartOkmsGET.call(this);
		case 'cartOkmsPOST':
			return executeCartOkmsPOST.call(this);
		case 'cartOtbGET':
			return executeCartOtbGET.call(this);
		case 'cartOtbPOST':
			return executeCartOtbPOST.call(this);
		case 'cartOtbOptionsGET':
			return executeCartOtbOptionsGET.call(this);
		case 'cartOtbOptionsPOST':
			return executeCartOtbOptionsPOST.call(this);
		case 'cartOtbResellerGET':
			return executeCartOtbResellerGET.call(this);
		case 'cartOtbResellerPOST':
			return executeCartOtbResellerPOST.call(this);
		case 'cartOtbResellerOptionsGET':
			return executeCartOtbResellerOptionsGET.call(this);
		case 'cartOtbResellerOptionsPOST':
			return executeCartOtbResellerOptionsPOST.call(this);
		case 'cartOvhCloudConnectGET':
			return executeCartOvhCloudConnectGET.call(this);
		case 'cartOvhCloudConnectPOST':
			return executeCartOvhCloudConnectPOST.call(this);
		case 'cartPaasmonGET':
			return executeCartPaasmonGET.call(this);
		case 'cartPaasmonPOST':
			return executeCartPaasmonPOST.call(this);
		case 'cartPacksProfessionalServicesGET':
			return executeCartPacksProfessionalServicesGET.call(this);
		case 'cartPacksProfessionalServicesPOST':
			return executeCartPacksProfessionalServicesPOST.call(this);
		case 'cartPacksProfessionalServicesOptionsGET':
			return executeCartPacksProfessionalServicesOptionsGET.call(this);
		case 'cartPacksProfessionalServicesOptionsPOST':
			return executeCartPacksProfessionalServicesOptionsPOST.call(this);
		case 'cartPowerHostingGET':
			return executeCartPowerHostingGET.call(this);
		case 'cartPowerHostingPOST':
			return executeCartPowerHostingPOST.call(this);
		case 'cartPrivateCloudGET':
			return executeCartPrivateCloudGET.call(this);
		case 'cartPrivateCloudPOST':
			return executeCartPrivateCloudPOST.call(this);
		case 'cartPrivateCloudOptionsGET':
			return executeCartPrivateCloudOptionsGET.call(this);
		case 'cartPrivateCloudOptionsPOST':
			return executeCartPrivateCloudOptionsPOST.call(this);
		case 'cartPrivateCloudCDIGET':
			return executeCartPrivateCloudCDIGET.call(this);
		case 'cartPrivateCloudCDIPOST':
			return executeCartPrivateCloudCDIPOST.call(this);
		case 'cartPrivateCloudCDIOptionsGET':
			return executeCartPrivateCloudCDIOptionsGET.call(this);
		case 'cartPrivateCloudCDIOptionsPOST':
			return executeCartPrivateCloudCDIOptionsPOST.call(this);
		case 'cartPrivateCloudDCGET':
			return executeCartPrivateCloudDCGET.call(this);
		case 'cartPrivateCloudDCPOST':
			return executeCartPrivateCloudDCPOST.call(this);
		case 'cartPrivateCloudDCOptionsGET':
			return executeCartPrivateCloudDCOptionsGET.call(this);
		case 'cartPrivateCloudDCOptionsPOST':
			return executeCartPrivateCloudDCOptionsPOST.call(this);
		case 'cartPrivateCloudEnterpriseGET':
			return executeCartPrivateCloudEnterpriseGET.call(this);
		case 'cartPrivateCloudEnterprisePOST':
			return executeCartPrivateCloudEnterprisePOST.call(this);
		case 'cartPrivateCloudEnterpriseOptionsGET':
			return executeCartPrivateCloudEnterpriseOptionsGET.call(this);
		case 'cartPrivateCloudEnterpriseOptionsPOST':
			return executeCartPrivateCloudEnterpriseOptionsPOST.call(this);
		case 'cartPrivateCloudResellerGET':
			return executeCartPrivateCloudResellerGET.call(this);
		case 'cartPrivateCloudResellerPOST':
			return executeCartPrivateCloudResellerPOST.call(this);
		case 'cartPrivateCloudResellerOptionsGET':
			return executeCartPrivateCloudResellerOptionsGET.call(this);
		case 'cartPrivateCloudResellerOptionsPOST':
			return executeCartPrivateCloudResellerOptionsPOST.call(this);
		case 'cartPrivateCloudResellerEnterpriseGET':
			return executeCartPrivateCloudResellerEnterpriseGET.call(this);
		case 'cartPrivateCloudResellerEnterprisePOST':
			return executeCartPrivateCloudResellerEnterprisePOST.call(this);
		case 'cartPrivateCloudResellerEnterpriseOptionsGET':
			return executeCartPrivateCloudResellerEnterpriseOptionsGET.call(this);
		case 'cartPrivateCloudResellerEnterpriseOptionsPOST':
			return executeCartPrivateCloudResellerEnterpriseOptionsPOST.call(this);
		case 'cartPrivateCloudSDDCGET':
			return executeCartPrivateCloudSDDCGET.call(this);
		case 'cartPrivateCloudSDDCPOST':
			return executeCartPrivateCloudSDDCPOST.call(this);
		case 'cartPrivateCloudSDDCOptionsGET':
			return executeCartPrivateCloudSDDCOptionsGET.call(this);
		case 'cartPrivateCloudSDDCOptionsPOST':
			return executeCartPrivateCloudSDDCOptionsPOST.call(this);
		case 'cartPrivateSQLGET':
			return executeCartPrivateSQLGET.call(this);
		case 'cartPrivateSQLPOST':
			return executeCartPrivateSQLPOST.call(this);
		case 'cartResellerGET':
			return executeCartResellerGET.call(this);
		case 'cartResellerPOST':
			return executeCartResellerPOST.call(this);
		case 'cartSharepointGET':
			return executeCartSharepointGET.call(this);
		case 'cartSharepointPOST':
			return executeCartSharepointPOST.call(this);
		case 'cartSharepointOptionsGET':
			return executeCartSharepointOptionsGET.call(this);
		case 'cartSharepointOptionsPOST':
			return executeCartSharepointOptionsPOST.call(this);
		case 'cartSmsGET':
			return executeCartSmsGET.call(this);
		case 'cartSmsPOST':
			return executeCartSmsPOST.call(this);
		case 'cartSncNetworkServicesGET':
			return executeCartSncNetworkServicesGET.call(this);
		case 'cartSncNetworkServicesPOST':
			return executeCartSncNetworkServicesPOST.call(this);
		case 'cartSncNetworkServicesOptionsGET':
			return executeCartSncNetworkServicesOptionsGET.call(this);
		case 'cartSncNetworkServicesOptionsPOST':
			return executeCartSncNetworkServicesOptionsPOST.call(this);
		case 'cartSslComodoGET':
			return executeCartSslComodoGET.call(this);
		case 'cartSslComodoPOST':
			return executeCartSslComodoPOST.call(this);
		case 'cartSslComodoOptionsGET':
			return executeCartSslComodoOptionsGET.call(this);
		case 'cartSslComodoOptionsPOST':
			return executeCartSslComodoOptionsPOST.call(this);
		case 'cartSslGatewayGET':
			return executeCartSslGatewayGET.call(this);
		case 'cartSslGatewayPOST':
			return executeCartSslGatewayPOST.call(this);
		case 'cartSslGatewayOptionsGET':
			return executeCartSslGatewayOptionsGET.call(this);
		case 'cartSslGatewayOptionsPOST':
			return executeCartSslGatewayOptionsPOST.call(this);
		case 'cartTelephonyGET':
			return executeCartTelephonyGET.call(this);
		case 'cartTelephonyPOST':
			return executeCartTelephonyPOST.call(this);
		case 'cartTelephonyOptionsGET':
			return executeCartTelephonyOptionsGET.call(this);
		case 'cartTelephonyOptionsPOST':
			return executeCartTelephonyOptionsPOST.call(this);
		case 'cartVdiGET':
			return executeCartVdiGET.call(this);
		case 'cartVdiPOST':
			return executeCartVdiPOST.call(this);
		case 'cartVdiOptionsGET':
			return executeCartVdiOptionsGET.call(this);
		case 'cartVdiOptionsPOST':
			return executeCartVdiOptionsPOST.call(this);
		case 'cartVeeamEnterpriseGET':
			return executeCartVeeamEnterpriseGET.call(this);
		case 'cartVeeamEnterprisePOST':
			return executeCartVeeamEnterprisePOST.call(this);
		case 'cartVeeamEnterpriseOptionsGET':
			return executeCartVeeamEnterpriseOptionsGET.call(this);
		case 'cartVeeamEnterpriseOptionsPOST':
			return executeCartVeeamEnterpriseOptionsPOST.call(this);
		case 'cartVeeamccGET':
			return executeCartVeeamccGET.call(this);
		case 'cartVeeamccPOST':
			return executeCartVeeamccPOST.call(this);
		case 'cartVeeamccOptionsGET':
			return executeCartVeeamccOptionsGET.call(this);
		case 'cartVeeamccOptionsPOST':
			return executeCartVeeamccOptionsPOST.call(this);
		case 'cartVideocenterGET':
			return executeCartVideocenterGET.call(this);
		case 'cartVideocenterPOST':
			return executeCartVideocenterPOST.call(this);
		case 'cartVideocenterOptionsGET':
			return executeCartVideocenterOptionsGET.call(this);
		case 'cartVideocenterOptionsPOST':
			return executeCartVideocenterOptionsPOST.call(this);
		case 'cartVmwareCloudDirectorGET':
			return executeCartVmwareCloudDirectorGET.call(this);
		case 'cartVmwareCloudDirectorPOST':
			return executeCartVmwareCloudDirectorPOST.call(this);
		case 'cartVmwareCloudDirectorOptionsGET':
			return executeCartVmwareCloudDirectorOptionsGET.call(this);
		case 'cartVmwareCloudDirectorOptionsPOST':
			return executeCartVmwareCloudDirectorOptionsPOST.call(this);
		case 'cartVmwareCloudDirectorBackupGET':
			return executeCartVmwareCloudDirectorBackupGET.call(this);
		case 'cartVmwareCloudDirectorBackupPOST':
			return executeCartVmwareCloudDirectorBackupPOST.call(this);
		case 'cartVmwareCloudDirectorBackupOptionsGET':
			return executeCartVmwareCloudDirectorBackupOptionsGET.call(this);
		case 'cartVmwareCloudDirectorBackupOptionsPOST':
			return executeCartVmwareCloudDirectorBackupOptionsPOST.call(this);
		case 'cartVpsGET':
			return executeCartVpsGET.call(this);
		case 'cartVpsPOST':
			return executeCartVpsPOST.call(this);
		case 'cartVpsOptionsGET':
			return executeCartVpsOptionsGET.call(this);
		case 'cartVpsOptionsPOST':
			return executeCartVpsOptionsPOST.call(this);
		case 'cartVrackGET':
			return executeCartVrackGET.call(this);
		case 'cartVrackPOST':
			return executeCartVrackPOST.call(this);
		case 'cartVrackOptionsGET':
			return executeCartVrackOptionsGET.call(this);
		case 'cartVrackOptionsPOST':
			return executeCartVrackOptionsPOST.call(this);
		case 'cartVrackResellerGET':
			return executeCartVrackResellerGET.call(this);
		case 'cartVrackResellerPOST':
			return executeCartVrackResellerPOST.call(this);
		case 'cartVrackServicesGET':
			return executeCartVrackServicesGET.call(this);
		case 'cartVrackServicesPOST':
			return executeCartVrackServicesPOST.call(this);
		case 'cartWebHostingGET':
			return executeCartWebHostingGET.call(this);
		case 'cartWebHostingPOST':
			return executeCartWebHostingPOST.call(this);
		case 'cartWebHostingOptionsGET':
			return executeCartWebHostingOptionsGET.call(this);
		case 'cartWebHostingOptionsPOST':
			return executeCartWebHostingOptionsPOST.call(this);
		case 'cartXdslGET':
			return executeCartXdslGET.call(this);
		case 'cartXdslPOST':
			return executeCartXdslPOST.call(this);
		case 'cartXdslOptionsGET':
			return executeCartXdslOptionsGET.call(this);
		case 'cartXdslOptionsPOST':
			return executeCartXdslOptionsPOST.call(this);
		case 'cartZimbraGET':
			return executeCartZimbraGET.call(this);
		case 'cartZimbraPOST':
			return executeCartZimbraPOST.call(this);
		case 'cartZimbraOptionsGET':
			return executeCartZimbraOptionsGET.call(this);
		case 'cartZimbraOptionsPOST':
			return executeCartZimbraOptionsPOST.call(this);

		case 'catalogPublicGet':
			return executeCatalogPublicGet.call(this);
		case 'catalogPublicOptionsGet':
			return executeCatalogPublicOptionsGet.call(this);
		case 'domainGet':
			return executeDomainGet.call(this);
		case 'domainOptionsGet':
			return executeDomainOptionsGet.call(this);
		case 'ecoGet':
			return executeEcoGet.call(this);
		case 'ecoOptionsGet':
			return executeEcoOptionsGet.call(this);
		case 'emailDomainGet':
			return executeEmailDomainGet.call(this);
		case 'emailDomainOptionsGet':
			return executeEmailDomainOptionsGet.call(this);
		case 'emailproGet':
			return executeEmailproGet.call(this);
		case 'emailproOptionsGet':
			return executeEmailproOptionsGet.call(this);
		case 'exchangeGet':
			return executeExchangeGet.call(this);
		case 'exchangeOptionsGet':
			return executeExchangeOptionsGet.call(this);
		case 'ipLoadbalancingGet':
			return executeIpLoadbalancingGet.call(this);
		case 'ipLoadbalancingOptionsGet':
			return executeIpLoadbalancingOptionsGet.call(this);
		case 'licenseHycuGet':
			return executeLicenseHycuGet.call(this);
		case 'licenseHycuOptionsGet':
			return executeLicenseHycuOptionsGet.call(this);
		case 'licensePleskGet':
			return executeLicensePleskGet.call(this);
		case 'licensePleskOptionsGet':
			return executeLicensePleskOptionsGet.call(this);
		case 'licenseSqlServerGet':
			return executeLicenseSqlServerGet.call(this);
		case 'licenseSqlServerOptionsGet':
			return executeLicenseSqlServerOptionsGet.call(this);
		case 'licenseWindowsGet':
			return executeLicenseWindowsGet.call(this);
		case 'licenseWindowsOptionsGet':
			return executeLicenseWindowsOptionsGet.call(this);
		case 'licensecPanelGet':
			return executeLicensecPanelGet.call(this);
		case 'licensecPanelOptionsGet':
			return executeLicensecPanelOptionsGet.call(this);
		case 'logsGet':
			return executeLogsGet.call(this);
		case 'logsOptionsGet':
			return executeLogsOptionsGet.call(this);
		case 'nashaGet':
			return executeNashaGet.call(this);
		case 'nashaOptionsGet':
			return executeNashaOptionsGet.call(this);
		case 'netappGet':
			return executeNetappGet.call(this);
		case 'netappOptionsGet':
			return executeNetappOptionsGet.call(this);
		case 'nutanixGet':
			return executeNutanixGet.call(this);
		case 'nutanixOptionsGet':
			return executeNutanixOptionsGet.call(this);
		case 'office365PrepaidGet':
			return executeOffice365PrepaidGet.call(this);
		case 'office365PrepaidOptionsGet':
			return executeOffice365PrepaidOptionsGet.call(this);
		case 'officePrepaidGet':
			return executeOfficePrepaidGet.call(this);
		case 'officePrepaidOptionsGet':
			return executeOfficePrepaidOptionsGet.call(this);
		case 'okmsGet':
			return executeOkmsGet.call(this);
		case 'okmsOptionsGet':
			return executeOkmsOptionsGet.call(this);
		case 'ovhCloudConnectGet':
			return executeOvhCloudConnectGet.call(this);
		case 'ovhCloudConnectOptionsGet':
			return executeOvhCloudConnectOptionsGet.call(this);
		case 'packsProfessionalServicesGet':
			return executePacksProfessionalServicesGet.call(this);
		case 'packsProfessionalServicesOptionsGet':
			return executePacksProfessionalServicesOptionsGet.call(this);
		case 'privateCloudGet':
			return executePrivateCloudGet.call(this);
		case 'privateCloudOptionsGet':
			return executePrivateCloudOptionsGet.call(this);
		case 'privateCloudEnterpriseGet':
			return executePrivateCloudEnterpriseGet.call(this);
		case 'privateCloudEnterpriseOptionsGet':
			return executePrivateCloudEnterpriseOptionsGet.call(this);
		case 'privateSQLGet':
			return executePrivateSQLGet.call(this);
		case 'privateSQLOptionsGet':
			return executePrivateSQLOptionsGet.call(this);
		case 'sslGatewayGet':
			return executeSslGatewayGet.call(this);
		case 'sslGatewayOptionsGet':
			return executeSslGatewayOptionsGet.call(this);
		case 'telephonyGet':
			return executeTelephonyGet.call(this);
		case 'telephonyOptionsGet':
			return executeTelephonyOptionsGet.call(this);
		case 'vmwareCloudDirectorGet':
			return executeVmwareCloudDirectorGet.call(this);
		case 'vmwareCloudDirectorOptionsGet':
			return executeVmwareCloudDirectorOptionsGet.call(this);
		case 'vmwareCloudDirectorBackupGet':
			return executeVmwareCloudDirectorBackupGet.call(this);
		case 'vmwareCloudDirectorBackupOptionsGet':
			return executeVmwareCloudDirectorBackupOptionsGet.call(this);
		case 'vpsGet':
			return executeVpsGet.call(this);
		case 'vpsOptionsGet':
			return executeVpsOptionsGet.call(this);
		case 'webHostingGet':
			return executeWebHostingGet.call(this);
		case 'webHostingOptionsGet':
			return executeWebHostingOptionsGet.call(this);
		case 'webPaaSGet':
			return executeWebPaaSGet.call(this);
		case 'webPaaSOptionsGet':
			return executeWebPaaSOptionsGet.call(this);
		case 'zimbraGet':
			return executeZimbraGet.call(this);
		case 'zimbraOptionsGet':
			return executeZimbraOptionsGet.call(this);
		case 'licensecPanelListGet':
			return executeLicensecPanelListGet.call(this);
		case 'licensecPanelNewListGet':
			return executeLicensecPanelNewListGet.call(this);
		case 'licensecPanelNewDurationGet':
			return executeLicensecPanelNewDurationGet.call(this);
		case 'licensecPanelServiceGet':
			return executeLicensecPanelServiceGet.call(this);
		case 'licensecPanelServiceUpgradeListGet':
			return executeLicensecPanelServiceUpgradeListGet.call(this);
		case 'licensecPanelServiceUpgradeDurationGet':
			return executeLicensecPanelServiceUpgradeDurationGet.call(this);
		case 'licensecPanelNewCreatePost':
			return executeLicensecPanelNewCreatePost.call(this);
		case 'licensecPanelServiceUpgradeCreatePost':
			return executeLicensecPanelServiceUpgradeCreatePost.call(this);
		case 'licenseofficeListGet':
			return executeLicenseofficeListGet.call(this);
		case 'licenseofficeNewListGet':
			return executeLicenseofficeNewListGet.call(this);
		case 'licenseofficeNewDurationGet':
			return executeLicenseofficeNewDurationGet.call(this);
		case 'licenseofficeServiceGet':
			return executeLicenseofficeServiceGet.call(this);
		case 'licenseofficeServiceUpgradeListGet':
			return executeLicenseofficeServiceUpgradeListGet.call(this);
		case 'licenseofficeServiceUpgradeDurationGet':
			return executeLicenseofficeServiceUpgradeDurationGet.call(this);
		case 'licenseofficeNewCreatePost':
			return executeLicenseofficeNewCreatePost.call(this);
		case 'licenseofficeServiceUpgradeCreatePost':
			return executeLicenseofficeServiceUpgradeCreatePost.call(this);
		case 'licensepleskListGet':
			return executeLicensepleskListGet.call(this);
		case 'licensepleskNewListGet':
			return executeLicensepleskNewListGet.call(this);
		case 'licensepleskNewDurationGet':
			return executeLicensepleskNewDurationGet.call(this);
		case 'licensepleskServiceGet':
			return executeLicensepleskServiceGet.call(this);
		case 'licensepleskServiceUpgradeListGet':
			return executeLicensepleskServiceUpgradeListGet.call(this);
		case 'licensepleskServiceUpgradeDurationGet':
			return executeLicensepleskServiceUpgradeDurationGet.call(this);
		case 'licensepleskNewCreatePost':
			return executeLicensepleskNewCreatePost.call(this);
		case 'licensepleskServiceUpgradeCreatePost':
			return executeLicensepleskServiceUpgradeCreatePost.call(this);
		case 'licensesqlserverListGet':
			return executeLicensesqlserverListGet.call(this);
		case 'licensesqlserverNewListGet':
			return executeLicensesqlserverNewListGet.call(this);
		case 'licensesqlserverNewDurationGet':
			return executeLicensesqlserverNewDurationGet.call(this);
		case 'licensesqlserverServiceGet':
			return executeLicensesqlserverServiceGet.call(this);
		case 'licensesqlserverServiceUpgradeListGet':
			return executeLicensesqlserverServiceUpgradeListGet.call(this);
		case 'licensesqlserverServiceUpgradeDurationGet':
			return executeLicensesqlserverServiceUpgradeDurationGet.call(this);
		case 'licensesqlserverNewCreatePost':
			return executeLicensesqlserverNewCreatePost.call(this);
		case 'licensesqlserverServiceUpgradeCreatePost':
			return executeLicensesqlserverServiceUpgradeCreatePost.call(this);
		case 'licensewindowsListGet':
			return executeLicensewindowsListGet.call(this);
		case 'licensewindowsNewListGet':
			return executeLicensewindowsNewListGet.call(this);
		case 'licensewindowsNewDurationGet':
			return executeLicensewindowsNewDurationGet.call(this);
		case 'licensewindowsServiceGet':
			return executeLicensewindowsServiceGet.call(this);
		case 'licensewindowsServiceUpgradeListGet':
			return executeLicensewindowsServiceUpgradeListGet.call(this);
		case 'licensewindowsServiceUpgradeDurationGet':
			return executeLicensewindowsServiceUpgradeDurationGet.call(this);
		case 'licensewindowsNewCreatePost':
			return executeLicensewindowsNewCreatePost.call(this);
		case 'licensewindowsServiceUpgradeCreatePost':
			return executeLicensewindowsServiceUpgradeCreatePost.call(this);
		case 'emailexchangeOrganizationListGet':
			return executeEmailexchangeOrganizationListGet.call(this);
		case 'emailexchangeServiceGet':
			return executeEmailexchangeServiceGet.call(this);
		case 'emailexchangeServiceCreatePost':
			return executeEmailexchangeServiceCreatePost.call(this);
		case 'emailexchangeAccountGet':
			return executeEmailexchangeAccountGet.call(this);
		case 'emailexchangeAccountUpgradeCreatePost':
			return executeEmailexchangeAccountUpgradeCreatePost.call(this);
		case 'emailexchangeDiskSpaceCreatePost':
			return executeEmailexchangeDiskSpaceCreatePost.call(this);
		case 'emailexchangeOutlookCreatePost':
			return executeEmailexchangeOutlookCreatePost.call(this);
		case 'emailexchangeUpgradeCreatePost':
			return executeEmailexchangeUpgradeCreatePost.call(this);
		case 'emailproOrganizationListGet':
			return executeEmailproOrganizationListGet.call(this);
		case 'emailproOrganizationCreatePost':
			return executeEmailproOrganizationCreatePost.call(this);
		case 'vpsadditionalDiskListGet':
			return executeVpsadditionalDiskListGet.call(this);
		case 'vpsadditionalDiskDurationGet':
			return executeVpsadditionalDiskDurationGet.call(this);
		case 'vpsadditionalDiskCreatePost':
			return executeVpsadditionalDiskCreatePost.call(this);
		case 'vpsautomatedBackupListGet':
			return executeVpsautomatedBackupListGet.call(this);
		case 'vpsautomatedBackupDurationGet':
			return executeVpsautomatedBackupDurationGet.call(this);
		case 'vpsautomatedBackupCreatePost':
			return executeVpsautomatedBackupCreatePost.call(this);
		case 'vpssnapshotListGet':
			return executeVpssnapshotListGet.call(this);
		case 'vpssnapshotDurationGet':
			return executeVpssnapshotDurationGet.call(this);
		case 'vpssnapshotCreatePost':
			return executeVpssnapshotCreatePost.call(this);
		case 'cloudprojectListGet':
			return executeCloudprojectListGet.call(this);
		case 'cloudprojectGet':
			return executeCloudprojectGet.call(this);
		case 'cloudprojectCreatePost':
			return executeCloudprojectCreatePost.call(this);
		case 'freefaxorganizationListGet':
			return executeFreefaxorganizationListGet.call(this);
		case 'freefaxnumberGet':
			return executeFreefaxnumberGet.call(this);
		case 'freefaxCreatePost':
			return executeFreefaxCreatePost.call(this);
		case 'overTheBoxListGet':
			return executeOverTheBoxListGet.call(this);
		case 'overTheBoxGet':
			return executeOverTheBoxGet.call(this);
		case 'overTheBoxCreatePost':
			return executeOverTheBoxCreatePost.call(this);
		case 'overTheBoxOrderCreatePost':
			return executeOverTheBoxOrderCreatePost.call(this);
		case 'overTheBoxDeviceGet':
			return executeOverTheBoxDeviceGet.call(this);
		case 'saascsp2ListGet':
			return executeSaascsp2ListGet.call(this);
		case 'saascsp2ProductGet':
			return executeSaascsp2ProductGet.call(this);
		case 'saascsp2CreatePost':
			return executeSaascsp2CreatePost.call(this);
		case 'smsListGet':
			return executeSmsListGet.call(this);
		case 'smsProductGet':
			return executeSmsProductGet.call(this);
		case 'smsProductDurationGet':
			return executeSmsProductDurationGet.call(this);
		case 'smsCreatePost':
			return executeSmsCreatePost.call(this);
		case 'smsProductCreatePost':
			return executeSmsProductCreatePost.call(this);
		case 'veeamCloudConnectListGet':
			return executeVeeamCloudConnectListGet.call(this);
		case 'veeamCloudConnectGet':
			return executeVeeamCloudConnectGet.call(this);
		case 'veeamCloudConnectCreatePost':
			return executeVeeamCloudConnectCreatePost.call(this);
		case 'veeamCloudConnectConfigCreatePost':
			return executeVeeamCloudConnectConfigCreatePost.call(this);
		case 'veeamCloudConnectOptionCreatePost':
			return executeVeeamCloudConnectOptionCreatePost.call(this);
		case 'xdslspareListGet':
			return executeXdslspareListGet.call(this);
		case 'xdslspareCreatePost':
			return executeXdslspareCreatePost.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "order"`);
}

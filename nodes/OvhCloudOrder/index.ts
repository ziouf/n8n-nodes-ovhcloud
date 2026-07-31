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
				{ name: 'Cart List', value: 'cartListGet', action: 'List all carts' },
				{ name: 'Cart Create', value: 'cartCreatePost', action: 'Create a new cart' },
				{ name: 'Cart Delete', value: 'cartDeleteDelete', action: 'Delete a cart' },
				{ name: 'Cart Get', value: 'cartGetGet', action: 'Get cart details' },
				{ name: 'Cart Update', value: 'cartUpdatePut', action: 'Update a cart' },
				{ name: 'Cart Summary Get', value: 'cartSummaryGet', action: 'Get cart summary' },
				{ name: 'Cart Item List', value: 'cartItemListGet', action: 'List items in a cart' },
				{ name: 'Cart Item Get', value: 'cartItemGetGet', action: 'Get a cart item' },
				{ name: 'Cart Item Update', value: 'cartItemUpdatePut', action: 'Update a cart item' },
				{ name: 'Cart Item Delete', value: 'cartItemDeleteDelete', action: 'Delete a cart item' },
				{
					name: 'Cart Item Configuration List',
					value: 'cartItemConfigurationListGet',
					action: 'List configurations for a cart item',
				},
				{
					name: 'Cart Item Configuration Create',
					value: 'cartItemConfigurationCreatePost',
					action: 'Create a configuration for a cart item',
				},
				{
					name: 'Cart Item Configuration Get',
					value: 'cartItemConfigurationGetGet',
					action: 'Get a cart item configuration',
				},
				{
					name: 'Cart Item Configuration Delete',
					value: 'cartItemConfigurationDeleteDelete',
					action: 'Delete a cart item configuration',
				},
				{
					name: 'Cart Item Required Configuration List',
					value: 'cartItemRequiredConfigurationListGet',
					action: 'List required configurations for a cart item',
				},
				{ name: 'Cart Coupon List', value: 'cartCouponListGet', action: 'List coupons for a cart' },
				{
					name: 'Cart Coupon Create',
					value: 'cartCouponCreatePost',
					action: 'Create a coupon for a cart',
				},
				{
					name: 'Cart Support List',
					value: 'cartSupportListGet',
					action: 'List supports for a cart',
				},
				{
					name: 'Cart Support Create',
					value: 'cartSupportCreatePost',
					action: 'Create support for a cart',
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
				{ name: 'Domain Get', value: 'domainGet', action: 'Get domain catalog' },
				{ name: 'Domain Options Get', value: 'domainOptionsGet', action: 'Get domain options' },
				{ name: 'Eco Get', value: 'ecoGet', action: 'Get eco catalog' },
				{ name: 'Eco Options Get', value: 'ecoOptionsGet', action: 'Get eco options' },
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
				{ name: 'Vps Get', value: 'vpsGet', action: 'Get vps catalog' },
				{ name: 'Vps Options Get', value: 'vpsOptionsGet', action: 'Get vps options' },
				{ name: 'WebHosting Get', value: 'webHostingGet', action: 'Get webHosting catalog' },
				{
					name: 'WebHosting Options Get',
					value: 'webHostingOptionsGet',
					action: 'Get webHosting options',
				},
				{ name: 'WebPaaS Get', value: 'webPaaSGet', action: 'Get webPaaS catalog' },
				{ name: 'WebPaaS Options Get', value: 'webPaaSOptionsGet', action: 'Get webPaaS options' },
				{ name: 'Zimbra Get', value: 'zimbraGet', action: 'Get zimbra catalog' },
				{ name: 'Zimbra Options Get', value: 'zimbraOptionsGet', action: 'Get zimbra options' },
				{
					name: 'License cPanel List',
					value: 'licensecPanelListGet',
					action: 'List cPanel license services',
				},
				{
					name: 'License cPanel New List',
					value: 'licensecPanelNewListGet',
					action: 'Get cPanel new durations',
				},
				{
					name: 'License cPanel New Duration Get',
					value: 'licensecPanelNewDurationGet',
					action: 'Get cPanel new prices',
				},
				{
					name: 'License cPanel Service Get',
					value: 'licensecPanelServiceGet',
					action: 'Get cPanel service options',
				},
				{
					name: 'License cPanel Service Upgrade List',
					value: 'licensecPanelServiceUpgradeListGet',
					action: 'Get cPanel upgrade durations',
				},
				{
					name: 'License cPanel Service Upgrade Duration Get',
					value: 'licensecPanelServiceUpgradeDurationGet',
					action: 'Get cPanel upgrade prices',
				},
				{
					name: 'License cPanel New Create',
					value: 'licensecPanelNewCreatePost',
					action: 'Create cPanel new order',
				},
				{
					name: 'License cPanel Service Upgrade Create',
					value: 'licensecPanelServiceUpgradeCreatePost',
					action: 'Upgrade cPanel order',
				},
				{
					name: 'License office List',
					value: 'licenseofficeListGet',
					action: 'List office license services',
				},
				{
					name: 'License office New List',
					value: 'licenseofficeNewListGet',
					action: 'Get office new durations',
				},
				{
					name: 'License office New Duration Get',
					value: 'licenseofficeNewDurationGet',
					action: 'Get office new prices',
				},
				{
					name: 'License office Service Get',
					value: 'licenseofficeServiceGet',
					action: 'Get office service options',
				},
				{
					name: 'License office Service Upgrade List',
					value: 'licenseofficeServiceUpgradeListGet',
					action: 'Get office upgrade durations',
				},
				{
					name: 'License office Service Upgrade Duration Get',
					value: 'licenseofficeServiceUpgradeDurationGet',
					action: 'Get office upgrade prices',
				},
				{
					name: 'License office New Create',
					value: 'licenseofficeNewCreatePost',
					action: 'Create office new order',
				},
				{
					name: 'License office Service Upgrade Create',
					value: 'licenseofficeServiceUpgradeCreatePost',
					action: 'Upgrade office order',
				},
				{
					name: 'License plesk List',
					value: 'licensepleskListGet',
					action: 'List plesk license services',
				},
				{
					name: 'License plesk New List',
					value: 'licensepleskNewListGet',
					action: 'Get plesk new durations',
				},
				{
					name: 'License plesk New Duration Get',
					value: 'licensepleskNewDurationGet',
					action: 'Get plesk new prices',
				},
				{
					name: 'License plesk Service Get',
					value: 'licensepleskServiceGet',
					action: 'Get plesk service options',
				},
				{
					name: 'License plesk Service Upgrade List',
					value: 'licensepleskServiceUpgradeListGet',
					action: 'Get plesk upgrade durations',
				},
				{
					name: 'License plesk Service Upgrade Duration Get',
					value: 'licensepleskServiceUpgradeDurationGet',
					action: 'Get plesk upgrade prices',
				},
				{
					name: 'License plesk New Create',
					value: 'licensepleskNewCreatePost',
					action: 'Create plesk new order',
				},
				{
					name: 'License plesk Service Upgrade Create',
					value: 'licensepleskServiceUpgradeCreatePost',
					action: 'Upgrade plesk order',
				},
				{
					name: 'License sqlserver List',
					value: 'licensesqlserverListGet',
					action: 'List sqlserver license services',
				},
				{
					name: 'License sqlserver New List',
					value: 'licensesqlserverNewListGet',
					action: 'Get sqlserver new durations',
				},
				{
					name: 'License sqlserver New Duration Get',
					value: 'licensesqlserverNewDurationGet',
					action: 'Get sqlserver new prices',
				},
				{
					name: 'License sqlserver Service Get',
					value: 'licensesqlserverServiceGet',
					action: 'Get sqlserver service options',
				},
				{
					name: 'License sqlserver Service Upgrade List',
					value: 'licensesqlserverServiceUpgradeListGet',
					action: 'Get sqlserver upgrade durations',
				},
				{
					name: 'License sqlserver Service Upgrade Duration Get',
					value: 'licensesqlserverServiceUpgradeDurationGet',
					action: 'Get sqlserver upgrade prices',
				},
				{
					name: 'License sqlserver New Create',
					value: 'licensesqlserverNewCreatePost',
					action: 'Create sqlserver new order',
				},
				{
					name: 'License sqlserver Service Upgrade Create',
					value: 'licensesqlserverServiceUpgradeCreatePost',
					action: 'Upgrade sqlserver order',
				},
				{
					name: 'License windows List',
					value: 'licensewindowsListGet',
					action: 'List windows license services',
				},
				{
					name: 'License windows New List',
					value: 'licensewindowsNewListGet',
					action: 'Get windows new durations',
				},
				{
					name: 'License windows New Duration Get',
					value: 'licensewindowsNewDurationGet',
					action: 'Get windows new prices',
				},
				{
					name: 'License windows Service Get',
					value: 'licensewindowsServiceGet',
					action: 'Get windows service options',
				},
				{
					name: 'License windows Service Upgrade List',
					value: 'licensewindowsServiceUpgradeListGet',
					action: 'Get windows upgrade durations',
				},
				{
					name: 'License windows Service Upgrade Duration Get',
					value: 'licensewindowsServiceUpgradeDurationGet',
					action: 'Get windows upgrade prices',
				},
				{
					name: 'License windows New Create',
					value: 'licensewindowsNewCreatePost',
					action: 'Create windows new order',
				},
				{
					name: 'License windows Service Upgrade Create',
					value: 'licensewindowsServiceUpgradeCreatePost',
					action: 'Upgrade windows order',
				},
				{
					name: 'Email Exchange Organization List',
					value: 'emailexchangeOrganizationListGet',
					action: 'List exchange organizations',
				},
				{
					name: 'Email Exchange Service Get',
					value: 'emailexchangeServiceGet',
					action: 'Get exchange services',
				},
				{
					name: 'Email Exchange Service Create',
					value: 'emailexchangeServiceCreatePost',
					action: 'Create exchange service',
				},
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
					name: 'Email Exchange Outlook',
					value: 'emailexchangeOutlookCreatePost',
					action: 'Configure outlook',
				},
				{
					name: 'Email Exchange Upgrade',
					value: 'emailexchangeUpgradeCreatePost',
					action: 'Upgrade exchange',
				},
				{
					name: 'Email Pro Organization List',
					value: 'emailproOrganizationListGet',
					action: 'List pro organizations',
				},
				{
					name: 'Email Pro Organization Create',
					value: 'emailproOrganizationCreatePost',
					action: 'Create pro organization',
				},
				{
					name: 'VPS additionalDisk List',
					value: 'vpsadditionalDiskListGet',
					action: 'List additionalDisk options',
				},
				{
					name: 'VPS additionalDisk Duration Get',
					value: 'vpsadditionalDiskDurationGet',
					action: 'Get additionalDisk prices',
				},
				{
					name: 'VPS additionalDisk Create',
					value: 'vpsadditionalDiskCreatePost',
					action: 'Create additionalDisk order',
				},
				{
					name: 'VPS automatedBackup List',
					value: 'vpsautomatedBackupListGet',
					action: 'List automatedBackup options',
				},
				{
					name: 'VPS automatedBackup Duration Get',
					value: 'vpsautomatedBackupDurationGet',
					action: 'Get automatedBackup prices',
				},
				{
					name: 'VPS automatedBackup Create',
					value: 'vpsautomatedBackupCreatePost',
					action: 'Create automatedBackup order',
				},
				{ name: 'VPS snapshot List', value: 'vpssnapshotListGet', action: 'List snapshot options' },
				{
					name: 'VPS snapshot Duration Get',
					value: 'vpssnapshotDurationGet',
					action: 'Get snapshot prices',
				},
				{
					name: 'VPS snapshot Create',
					value: 'vpssnapshotCreatePost',
					action: 'Create snapshot order',
				},
				{ name: 'Cloud Project List', value: 'cloudprojectListGet', action: 'List cloud projects' },
				{ name: 'Cloud Project Get', value: 'cloudprojectGet', action: 'Get cloud project' },
				{
					name: 'Cloud Project Create',
					value: 'cloudprojectCreatePost',
					action: 'Create cloud project',
				},
				{
					name: 'Freefax Organization List',
					value: 'freefaxorganizationListGet',
					action: 'List freefax organizations',
				},
				{ name: 'Freefax Number Get', value: 'freefaxnumberGet', action: 'Get freefax number' },
				{ name: 'Freefax Create', value: 'freefaxCreatePost', action: 'Create freefax order' },
				{ name: 'OverTheBox List', value: 'overTheBoxListGet', action: 'List overTheBox devices' },
				{ name: 'OverTheBox Get', value: 'overTheBoxGet', action: 'Get overTheBox order' },
				{
					name: 'OverTheBox Create',
					value: 'overTheBoxCreatePost',
					action: 'Create overTheBox order',
				},
				{
					name: 'OverTheBox Order Create',
					value: 'overTheBoxOrderCreatePost',
					action: 'Create overTheBox order',
				},
				{
					name: 'OverTheBox Device Get',
					value: 'overTheBoxDeviceGet',
					action: 'Get overTheBox device',
				},
				{ name: 'SaaS csp2 List', value: 'saascsp2ListGet', action: 'List saas csp2 products' },
				{
					name: 'SaaS csp2 Product Get',
					value: 'saascsp2ProductGet',
					action: 'Get saas csp2 product',
				},
				{ name: 'SaaS csp2 Create', value: 'saascsp2CreatePost', action: 'Create saas csp2 order' },
				{ name: 'SMS List', value: 'smsListGet', action: 'List sms products' },
				{ name: 'SMS Product Get', value: 'smsProductGet', action: 'Get sms product' },
				{
					name: 'SMS Product Duration Get',
					value: 'smsProductDurationGet',
					action: 'Get sms product prices',
				},
				{ name: 'SMS Create', value: 'smsCreatePost', action: 'Create sms order' },
				{
					name: 'SMS Product Create',
					value: 'smsProductCreatePost',
					action: 'Create sms product order',
				},
				{
					name: 'Veeam Cloud Connect List',
					value: 'veeamCloudConnectListGet',
					action: 'List veeam projects',
				},
				{
					name: 'Veeam Cloud Connect Get',
					value: 'veeamCloudConnectGet',
					action: 'Get veeam project',
				},
				{
					name: 'Veeam Cloud Connect Create',
					value: 'veeamCloudConnectCreatePost',
					action: 'Create veeam project',
				},
				{
					name: 'Veeam Cloud Connect Config Create',
					value: 'veeamCloudConnectConfigCreatePost',
					action: 'Create veeam config',
				},
				{
					name: 'Veeam Cloud Connect Option Create',
					value: 'veeamCloudConnectOptionCreatePost',
					action: 'Create veeam option',
				},
				{ name: 'xDSL spare List', value: 'xdslspareListGet', action: 'List xDSL spare lines' },
				{ name: 'xDSL spare Create', value: 'xdslspareCreatePost', action: 'Create xDSL order' },
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

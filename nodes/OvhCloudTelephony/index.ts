import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeAliasListGet,
	description as descriptionAliasListGet,
} from './aliases/aliasListGet.operation';
import {
	execute as executeAliasGet,
	description as descriptionAliasGet,
} from './aliases/aliasGet.operation';
import {
	execute as executeAliasChangeContactPost,
	description as descriptionAliasChangeContactPost,
} from './aliases/aliasChangeContactPost.operation';
import {
	execute as executeAliasServiceInfosGet,
	description as descriptionAliasServiceInfosGet,
} from './aliases/aliasServiceInfosGet.operation';
import {
	execute as executeAliasServiceInfosPut,
	description as descriptionAliasServiceInfosPut,
} from './aliases/aliasServiceInfosPut.operation';
import {
	execute as executeLinesListGet,
	description as descriptionLinesListGet,
} from './lines/linesListGet.operation';
import {
	execute as executeLinesGet,
	description as descriptionLinesGet,
} from './lines/linesGet.operation';
import {
	execute as executeLinesChangeContactPost,
	description as descriptionLinesChangeContactPost,
} from './lines/linesChangeContactPost.operation';
import {
	execute as executeLinesServiceInfosGet,
	description as descriptionLinesServiceInfosGet,
} from './lines/linesServiceInfosGet.operation';
import {
	execute as executeLinesServiceInfosPut,
	description as descriptionLinesServiceInfosPut,
} from './lines/linesServiceInfosPut.operation';
import {
	execute as executeLinesHardwareListGet,
	description as descriptionLinesHardwareListGet,
} from './lines/linesHardwareListGet.operation';
import {
	execute as executeLinesHardwarePost,
	description as descriptionLinesHardwarePost,
} from './lines/linesHardwarePost.operation';
import {
	execute as executeLinesNumberListGet,
	description as descriptionLinesNumberListGet,
} from './lines/linesNumberListGet.operation';
import {
	execute as executeLinesNumberPost,
	description as descriptionLinesNumberPost,
} from './lines/linesNumberPost.operation';
import {
	execute as executeLinesNumberGet,
	description as descriptionLinesNumberGet,
} from './lines/linesNumberGet.operation';
import {
	execute as executeLinesNumberPut,
	description as descriptionLinesNumberPut,
} from './lines/linesNumberPut.operation';
import {
	execute as executeLinesNumberDelete,
	description as descriptionLinesNumberDelete,
} from './lines/linesNumberDelete.operation';
import {
	execute as executeLinesPortabilityListGet,
	description as descriptionLinesPortabilityListGet,
} from './lines/linesPortabilityListGet.operation';
import {
	execute as executeLinesPortabilityPost,
	description as descriptionLinesPortabilityPost,
} from './lines/linesPortabilityPost.operation';
import {
	execute as executeLinesPortabilityGet,
	description as descriptionLinesPortabilityGet,
} from './lines/linesPortabilityGet.operation';
import {
	execute as executeLinesPortabilityPut,
	description as descriptionLinesPortabilityPut,
} from './lines/linesPortabilityPut.operation';
import {
	execute as executeLinesPortabilityDelete,
	description as descriptionLinesPortabilityDelete,
} from './lines/linesPortabilityDelete.operation';
import {
	execute as executeLinesSimListGet,
	description as descriptionLinesSimListGet,
} from './lines/linesSimListGet.operation';
import {
	execute as executeLinesSimPost,
	description as descriptionLinesSimPost,
} from './lines/linesSimPost.operation';
import {
	execute as executeLinesSimGet,
	description as descriptionLinesSimGet,
} from './lines/linesSimGet.operation';
import {
	execute as executeLinesSimPut,
	description as descriptionLinesSimPut,
} from './lines/linesSimPut.operation';
import {
	execute as executeLinesSimDelete,
	description as descriptionLinesSimDelete,
} from './lines/linesSimDelete.operation';
import {
	execute as executeTrunksListGet,
	description as descriptionTrunksListGet,
} from './trunks/trunksListGet.operation';
import {
	execute as executeTrunksGet,
	description as descriptionTrunksGet,
} from './trunks/trunksGet.operation';
import {
	execute as executeTrunksChangeContactPost,
	description as descriptionTrunksChangeContactPost,
} from './trunks/trunksChangeContactPost.operation';
import {
	execute as executeTrunksServiceInfosGet,
	description as descriptionTrunksServiceInfosGet,
} from './trunks/trunksServiceInfosGet.operation';
import {
	execute as executeTrunksServiceInfosPut,
	description as descriptionTrunksServiceInfosPut,
} from './trunks/trunksServiceInfosPut.operation';
import {
	execute as executeTrunksHardwareListGet,
	description as descriptionTrunksHardwareListGet,
} from './trunks/trunksHardwareListGet.operation';
import {
	execute as executeTrunksHardwarePost,
	description as descriptionTrunksHardwarePost,
} from './trunks/trunksHardwarePost.operation';
import {
	execute as executeTrunksNumberListGet,
	description as descriptionTrunksNumberListGet,
} from './trunks/trunksNumberListGet.operation';
import {
	execute as executeTrunksNumberPost,
	description as descriptionTrunksNumberPost,
} from './trunks/trunksNumberPost.operation';
import {
	execute as executeTrunksNumberGet,
	description as descriptionTrunksNumberGet,
} from './trunks/trunksNumberGet.operation';
import {
	execute as executeTrunksNumberPut,
	description as descriptionTrunksNumberPut,
} from './trunks/trunksNumberPut.operation';
import {
	execute as executeTrunksNumberDelete,
	description as descriptionTrunksNumberDelete,
} from './trunks/trunksNumberDelete.operation';
import {
	execute as executeNumbersListGet,
	description as descriptionNumbersListGet,
} from './numbers/numbersListGet.operation';
import {
	execute as executeNumbersGet,
	description as descriptionNumbersGet,
} from './numbers/numbersGet.operation';
import {
	execute as executeNumbersPost,
	description as descriptionNumbersPost,
} from './numbers/numbersPost.operation';
import {
	execute as executeNumbersPut,
	description as descriptionNumbersPut,
} from './numbers/numbersPut.operation';
import {
	execute as executeNumbersDelete,
	description as descriptionNumbersDelete,
} from './numbers/numbersDelete.operation';
import {
	execute as executeNumbersPortabilityListGet,
	description as descriptionNumbersPortabilityListGet,
} from './numbers/numbersPortabilityListGet.operation';
import {
	execute as executeNumbersPortabilityPost,
	description as descriptionNumbersPortabilityPost,
} from './numbers/numbersPortabilityPost.operation';
import {
	execute as executeNumbersPortabilityGet,
	description as descriptionNumbersPortabilityGet,
} from './numbers/numbersPortabilityGet.operation';
import {
	execute as executeNumbersPortabilityPut,
	description as descriptionNumbersPortabilityPut,
} from './numbers/numbersPortabilityPut.operation';
import {
	execute as executeNumbersPortabilityDelete,
	description as descriptionNumbersPortabilityDelete,
} from './numbers/numbersPortabilityDelete.operation';
import {
	execute as executeAccessoriesGet,
	description as descriptionAccessoriesGet,
} from './accessories/accessoriesGet.operation';
import {
	execute as executeLineOffersGet,
	description as descriptionLineOffersGet,
} from './offers/lineOffersGet.operation';
import {
	execute as executeLineOfferPhonesGet,
	description as descriptionLineOfferPhonesGet,
} from './offers/lineOfferPhonesGet.operation';
import {
	execute as executeFaxOffersGet,
	description as descriptionFaxOffersGet,
} from './offers/faxOffersGet.operation';
import {
	execute as executeLineOfferDetailsGet,
	description as descriptionLineOfferDetailsGet,
} from './offers/lineOfferDetailsGet.operation';
import {
	execute as executeDirectoriesCitiesGet,
	description as descriptionDirectoriesCitiesGet,
} from './directories/directoriesCitiesGet.operation';
import {
	execute as executeDirectoriesAvailableZipCodesGet,
	description as descriptionDirectoriesAvailableZipCodesGet,
} from './directories/directoriesAvailableZipCodesGet.operation';
import {
	execute as executeDirectoriesServicesGet,
	description as descriptionDirectoriesServicesGet,
} from './directories/directoriesServicesGet.operation';
import {
	execute as executeDirectoriesCountriesGet,
	description as descriptionDirectoriesCountriesGet,
} from './directories/directoriesCountriesGet.operation';
import {
	execute as executeTelephonyListGet,
	description as descriptionTelephonyListGet,
} from './misc/telephonyListGet.operation';
import {
	execute as executeSipDomainsGet,
	description as descriptionSipDomainsGet,
} from './misc/sipDomainsGet.operation';
import {
	execute as executeCurrentOrderIdsGet,
	description as descriptionCurrentOrderIdsGet,
} from './misc/currentOrderIdsGet.operation';
import {
	execute as executeSearchServicesGet,
	description as descriptionSearchServicesGet,
} from './misc/searchServicesGet.operation';
import {
	execute as executeSetDefaultSipDomainPost,
	description as descriptionSetDefaultSipDomainPost,
} from './misc/setDefaultSipDomainPost.operation';

import {
	execute as executeabbreviatedNumberDelete,
	description as descriptionabbreviatedNumberDelete,
} from './abbreviatedNumber/abbreviatedNumberDelete.operation';
import {
	execute as executeabbreviatedNumberGet,
	description as descriptionabbreviatedNumberGet,
} from './abbreviatedNumber/abbreviatedNumberGet.operation';
import {
	execute as executeabbreviatedNumberListGet,
	description as descriptionabbreviatedNumberListGet,
} from './abbreviatedNumber/abbreviatedNumberListGet.operation';
import {
	execute as executeabbreviatedNumberPost,
	description as descriptionabbreviatedNumberPost,
} from './abbreviatedNumber/abbreviatedNumberPost.operation';
import {
	execute as executeabbreviatedNumberPut,
	description as descriptionabbreviatedNumberPut,
} from './abbreviatedNumber/abbreviatedNumberPut.operation';
import {
	execute as executeallowedCreditThresholdGet,
	description as descriptionallowedCreditThresholdGet,
} from './root/allowedCreditThresholdGet.operation';
import {
	execute as executeamountSecurityDepositGet,
	description as descriptionamountSecurityDepositGet,
} from './root/amountSecurityDepositGet.operation';
import {
	execute as executebillingAccountDelete,
	description as descriptionbillingAccountDelete,
} from './root/billingAccountDelete.operation';
import {
	execute as executebillingAccountGet,
	description as descriptionbillingAccountGet,
} from './root/billingAccountGet.operation';
import {
	execute as executebillingAccountPut,
	description as descriptionbillingAccountPut,
} from './root/billingAccountPut.operation';
import {
	execute as executebillingAccountSiteGet,
	description as descriptionbillingAccountSiteGet,
} from './root/billingAccountSiteGet.operation';
import {
	execute as executebillingAccountSitePost,
	description as descriptionbillingAccountSitePost,
} from './root/billingAccountSitePost.operation';
import {
	execute as executecanTransferSecurityDepositPost,
	description as descriptioncanTransferSecurityDepositPost,
} from './root/canTransferSecurityDepositPost.operation';
import {
	execute as executecancelTerminationPost,
	description as descriptioncancelTerminationPost,
} from './root/cancelTerminationPost.operation';
import {
	execute as executecarrierSipCdrsListGet,
	description as descriptioncarrierSipCdrsListGet,
} from './carrierSip/carrierSipCdrsListGet.operation';
import {
	execute as executecarrierSipClusterDetailsListGet,
	description as descriptioncarrierSipClusterDetailsListGet,
} from './carrierSip/carrierSipClusterDetailsListGet.operation';
import {
	execute as executecarrierSipEndpointsGet,
	description as descriptioncarrierSipEndpointsGet,
} from './carrierSip/carrierSipEndpointsGet.operation';
import {
	execute as executecarrierSipEndpointsListGet,
	description as descriptioncarrierSipEndpointsListGet,
} from './carrierSip/carrierSipEndpointsListGet.operation';
import {
	execute as executecarrierSipGet,
	description as descriptioncarrierSipGet,
} from './carrierSip/carrierSipGet.operation';
import {
	execute as executecarrierSipListGet,
	description as descriptioncarrierSipListGet,
} from './carrierSip/carrierSipListGet.operation';
import {
	execute as executecarrierSipSettingsListGet,
	description as descriptioncarrierSipSettingsListGet,
} from './carrierSip/carrierSipSettingsListGet.operation';
import {
	execute as executecarrierSipSettingsPut,
	description as descriptioncarrierSipSettingsPut,
} from './carrierSip/carrierSipSettingsPut.operation';
import {
	execute as executecarrierSipVnoGet,
	description as descriptioncarrierSipVnoGet,
} from './carrierSip/carrierSipVnoGet.operation';
import {
	execute as executecarrierSipVnoListGet,
	description as descriptioncarrierSipVnoListGet,
} from './carrierSip/carrierSipVnoListGet.operation';
import {
	execute as executecarrierSipVnoRangesGet,
	description as descriptioncarrierSipVnoRangesGet,
} from './carrierSip/carrierSipVnoRangesGet.operation';
import {
	execute as executecarrierSipVnoRangesListGet,
	description as descriptioncarrierSipVnoRangesListGet,
} from './carrierSip/carrierSipVnoRangesListGet.operation';
import {
	execute as executecarrierSipVnoRangesPut,
	description as descriptioncarrierSipVnoRangesPut,
} from './carrierSip/carrierSipVnoRangesPut.operation';
import {
	execute as executechangeContactPost,
	description as descriptionchangeContactPost,
} from './root/changeContactPost.operation';
import {
	execute as executefaxCampaignsDelete,
	description as descriptionfaxCampaignsDelete,
} from './fax/faxCampaignsDelete.operation';
import {
	execute as executefaxCampaignsDetailListGet,
	description as descriptionfaxCampaignsDetailListGet,
} from './fax/faxCampaignsDetailListGet.operation';
import {
	execute as executefaxCampaignsGet,
	description as descriptionfaxCampaignsGet,
} from './fax/faxCampaignsGet.operation';
import {
	execute as executefaxCampaignsListGet,
	description as descriptionfaxCampaignsListGet,
} from './fax/faxCampaignsListGet.operation';
import {
	execute as executefaxCampaignsPost,
	description as descriptionfaxCampaignsPost,
} from './fax/faxCampaignsPost.operation';
import {
	execute as executefaxCampaignsStartPost,
	description as descriptionfaxCampaignsStartPost,
} from './fax/faxCampaignsStartPost.operation';
import {
	execute as executefaxCampaignsStopPost,
	description as descriptionfaxCampaignsStopPost,
} from './fax/faxCampaignsStopPost.operation';
import { execute as executefaxGet, description as descriptionfaxGet } from './fax/faxGet.operation';
import {
	execute as executefaxListGet,
	description as descriptionfaxListGet,
} from './fax/faxListGet.operation';
import { execute as executefaxPut, description as descriptionfaxPut } from './fax/faxPut.operation';
import {
	execute as executefaxScreenListsDelete,
	description as descriptionfaxScreenListsDelete,
} from './fax/faxScreenListsDelete.operation';
import {
	execute as executefaxScreenListsListGet,
	description as descriptionfaxScreenListsListGet,
} from './fax/faxScreenListsListGet.operation';
import {
	execute as executefaxScreenListsPost,
	description as descriptionfaxScreenListsPost,
} from './fax/faxScreenListsPost.operation';
import {
	execute as executefaxScreenListsPut,
	description as descriptionfaxScreenListsPut,
} from './fax/faxScreenListsPut.operation';
import {
	execute as executefaxScreenListsResetPost,
	description as descriptionfaxScreenListsResetPost,
} from './fax/faxScreenListsResetPost.operation';
import {
	execute as executefaxSettingsChangePasswordPost,
	description as descriptionfaxSettingsChangePasswordPost,
} from './fax/faxSettingsChangePasswordPost.operation';
import {
	execute as executefaxSettingsListGet,
	description as descriptionfaxSettingsListGet,
} from './fax/faxSettingsListGet.operation';
import {
	execute as executefaxSettingsPut,
	description as descriptionfaxSettingsPut,
} from './fax/faxSettingsPut.operation';
import {
	execute as executefaxSettingsSendFaxPost,
	description as descriptionfaxSettingsSendFaxPost,
} from './fax/faxSettingsSendFaxPost.operation';
import {
	execute as executelineAbbreviatedNumberDelete,
	description as descriptionlineAbbreviatedNumberDelete,
} from './line/lineAbbreviatedNumberDelete.operation';
import {
	execute as executelineAbbreviatedNumberGet,
	description as descriptionlineAbbreviatedNumberGet,
} from './line/lineAbbreviatedNumberGet.operation';
import {
	execute as executelineAbbreviatedNumberListGet,
	description as descriptionlineAbbreviatedNumberListGet,
} from './line/lineAbbreviatedNumberListGet.operation';
import {
	execute as executelineAbbreviatedNumberPost,
	description as descriptionlineAbbreviatedNumberPost,
} from './line/lineAbbreviatedNumberPost.operation';
import {
	execute as executelineAbbreviatedNumberPut,
	description as descriptionlineAbbreviatedNumberPut,
} from './line/lineAbbreviatedNumberPut.operation';
import {
	execute as executelineActivateNewPhoneListGet,
	description as descriptionlineActivateNewPhoneListGet,
} from './line/lineActivateNewPhoneListGet.operation';
import {
	execute as executelineActivateNewPhonePost,
	description as descriptionlineActivateNewPhonePost,
} from './line/lineActivateNewPhonePost.operation';
import {
	execute as executelineAntihackListGet,
	description as descriptionlineAntihackListGet,
} from './line/lineAntihackListGet.operation';
import {
	execute as executelineAntihackPost,
	description as descriptionlineAntihackPost,
} from './line/lineAntihackPost.operation';
import {
	execute as executelineAssociateDevicePost,
	description as descriptionlineAssociateDevicePost,
} from './line/lineAssociateDevicePost.operation';
import {
	execute as executelineAutomaticCallGet,
	description as descriptionlineAutomaticCallGet,
} from './line/lineAutomaticCallGet.operation';
import {
	execute as executelineAutomaticCallListGet,
	description as descriptionlineAutomaticCallListGet,
} from './line/lineAutomaticCallListGet.operation';
import {
	execute as executelineAutomaticCallPost,
	description as descriptionlineAutomaticCallPost,
} from './line/lineAutomaticCallPost.operation';
import {
	execute as executelineAvailableSipDomainsListGet,
	description as descriptionlineAvailableSipDomainsListGet,
} from './line/lineAvailableSipDomainsListGet.operation';
import {
	execute as executelineBlockPost,
	description as descriptionlineBlockPost,
} from './line/lineBlockPost.operation';
import {
	execute as executelineCallsEavesdropPost,
	description as descriptionlineCallsEavesdropPost,
} from './line/lineCallsEavesdropPost.operation';
import {
	execute as executelineCallsGet,
	description as descriptionlineCallsGet,
} from './line/lineCallsGet.operation';
import {
	execute as executelineCallsHangupPost,
	description as descriptionlineCallsHangupPost,
} from './line/lineCallsHangupPost.operation';
import {
	execute as executelineCallsHoldPost,
	description as descriptionlineCallsHoldPost,
} from './line/lineCallsHoldPost.operation';
import {
	execute as executelineCallsInterceptPost,
	description as descriptionlineCallsInterceptPost,
} from './line/lineCallsInterceptPost.operation';
import {
	execute as executelineCallsListGet,
	description as descriptionlineCallsListGet,
} from './line/lineCallsListGet.operation';
import {
	execute as executelineCallsTransferPost,
	description as descriptionlineCallsTransferPost,
} from './line/lineCallsTransferPost.operation';
import {
	execute as executelineCallsWhisperPost,
	description as descriptionlineCallsWhisperPost,
} from './line/lineCallsWhisperPost.operation';
import {
	execute as executelineCanChangePasswordListGet,
	description as descriptionlineCanChangePasswordListGet,
} from './line/lineCanChangePasswordListGet.operation';
import {
	execute as executelineCancelConvertToNumberPost,
	description as descriptionlineCancelConvertToNumberPost,
} from './line/lineCancelConvertToNumberPost.operation';
import {
	execute as executelineChangePasswordPost,
	description as descriptionlineChangePasswordPost,
} from './line/lineChangePasswordPost.operation';
import {
	execute as executelineClick2CallPost,
	description as descriptionlineClick2CallPost,
} from './line/lineClick2CallPost.operation';
import {
	execute as executelineClick2CallUserChangePasswordPost,
	description as descriptionlineClick2CallUserChangePasswordPost,
} from './line/lineClick2CallUserChangePasswordPost.operation';
import {
	execute as executelineClick2CallUserClick2CallPost,
	description as descriptionlineClick2CallUserClick2CallPost,
} from './line/lineClick2CallUserClick2CallPost.operation';
import {
	execute as executelineClick2CallUserDelete,
	description as descriptionlineClick2CallUserDelete,
} from './line/lineClick2CallUserDelete.operation';
import {
	execute as executelineClick2CallUserGet,
	description as descriptionlineClick2CallUserGet,
} from './line/lineClick2CallUserGet.operation';
import {
	execute as executelineClick2CallUserListGet,
	description as descriptionlineClick2CallUserListGet,
} from './line/lineClick2CallUserListGet.operation';
import {
	execute as executelineClick2CallUserPost,
	description as descriptionlineClick2CallUserPost,
} from './line/lineClick2CallUserPost.operation';
import {
	execute as executelineConvertToNumberPost,
	description as descriptionlineConvertToNumberPost,
} from './line/lineConvertToNumberPost.operation';
import {
	execute as executelineDissociateDevicePost,
	description as descriptionlineDissociateDevicePost,
} from './line/lineDissociateDevicePost.operation';
import {
	execute as executelineGet,
	description as descriptionlineGet,
} from './line/lineGet.operation';
import {
	execute as executelineIpsListGet,
	description as descriptionlineIpsListGet,
} from './line/lineIpsListGet.operation';
import {
	execute as executelineLastRegistrationsListGet,
	description as descriptionlineLastRegistrationsListGet,
} from './line/lineLastRegistrationsListGet.operation';
import {
	execute as executelineListAssociablePhonesListGet,
	description as descriptionlineListAssociablePhonesListGet,
} from './line/lineListAssociablePhonesListGet.operation';
import {
	execute as executelineListGet,
	description as descriptionlineListGet,
} from './line/lineListGet.operation';
import {
	execute as executelineMaximumAvailableSimultaneousLinesListGet,
	description as descriptionlineMaximumAvailableSimultaneousLinesListGet,
} from './line/lineMaximumAvailableSimultaneousLinesListGet.operation';
import {
	execute as executelineOfferListGet,
	description as descriptionlineOfferListGet,
} from './line/lineOfferListGet.operation';
import {
	execute as executelineOptionsAvailableCodecsListGet,
	description as descriptionlineOptionsAvailableCodecsListGet,
} from './line/lineOptionsAvailableCodecsListGet.operation';
import {
	execute as executelineOptionsDefaultCodecsListGet,
	description as descriptionlineOptionsDefaultCodecsListGet,
} from './line/lineOptionsDefaultCodecsListGet.operation';
import {
	execute as executelineOptionsListGet,
	description as descriptionlineOptionsListGet,
} from './line/lineOptionsListGet.operation';
import {
	execute as executelineOptionsPut,
	description as descriptionlineOptionsPut,
} from './line/lineOptionsPut.operation';
import {
	execute as executelinePhoneAdminCredentialsListGet,
	description as descriptionlinePhoneAdminCredentialsListGet,
} from './line/linePhoneAdminCredentialsListGet.operation';
import {
	execute as executelinePhoneCanBeAssociableListGet,
	description as descriptionlinePhoneCanBeAssociableListGet,
} from './line/linePhoneCanBeAssociableListGet.operation';
import {
	execute as executelinePhoneChangePhoneConfigurationPost,
	description as descriptionlinePhoneChangePhoneConfigurationPost,
} from './line/linePhoneChangePhoneConfigurationPost.operation';
import {
	execute as executelinePhoneFunctionKeyAvailableFunctionListGet,
	description as descriptionlinePhoneFunctionKeyAvailableFunctionListGet,
} from './line/linePhoneFunctionKeyAvailableFunctionListGet.operation';
import {
	execute as executelinePhoneFunctionKeyGet,
	description as descriptionlinePhoneFunctionKeyGet,
} from './line/linePhoneFunctionKeyGet.operation';
import {
	execute as executelinePhoneFunctionKeyListGet,
	description as descriptionlinePhoneFunctionKeyListGet,
} from './line/linePhoneFunctionKeyListGet.operation';
import {
	execute as executelinePhoneFunctionKeyPut,
	description as descriptionlinePhoneFunctionKeyPut,
} from './line/linePhoneFunctionKeyPut.operation';
import {
	execute as executelinePhoneListGet,
	description as descriptionlinePhoneListGet,
} from './line/linePhoneListGet.operation';
import {
	execute as executelinePhoneMerchandiseAvailableListGet,
	description as descriptionlinePhoneMerchandiseAvailableListGet,
} from './line/linePhoneMerchandiseAvailableListGet.operation';
import {
	execute as executelinePhonePhonebookDelete,
	description as descriptionlinePhonePhonebookDelete,
} from './line/linePhonePhonebookDelete.operation';
import {
	execute as executelinePhonePhonebookExportListGet,
	description as descriptionlinePhonePhonebookExportListGet,
} from './line/linePhonePhonebookExportListGet.operation';
import {
	execute as executelinePhonePhonebookGet,
	description as descriptionlinePhonePhonebookGet,
} from './line/linePhonePhonebookGet.operation';
import {
	execute as executelinePhonePhonebookImportPost,
	description as descriptionlinePhonePhonebookImportPost,
} from './line/linePhonePhonebookImportPost.operation';
import {
	execute as executelinePhonePhonebookListGet,
	description as descriptionlinePhonePhonebookListGet,
} from './line/linePhonePhonebookListGet.operation';
import {
	execute as executelinePhonePhonebookPhonebookContactDelete,
	description as descriptionlinePhonePhonebookPhonebookContactDelete,
} from './line/linePhonePhonebookPhonebookContactDelete.operation';
import {
	execute as executelinePhonePhonebookPhonebookContactGet,
	description as descriptionlinePhonePhonebookPhonebookContactGet,
} from './line/linePhonePhonebookPhonebookContactGet.operation';
import {
	execute as executelinePhonePhonebookPhonebookContactListGet,
	description as descriptionlinePhonePhonebookPhonebookContactListGet,
} from './line/linePhonePhonebookPhonebookContactListGet.operation';
import {
	execute as executelinePhonePhonebookPhonebookContactPost,
	description as descriptionlinePhonePhonebookPhonebookContactPost,
} from './line/linePhonePhonebookPhonebookContactPost.operation';
import {
	execute as executelinePhonePhonebookPhonebookContactPut,
	description as descriptionlinePhonePhonebookPhonebookContactPut,
} from './line/linePhonePhonebookPhonebookContactPut.operation';
import {
	execute as executelinePhonePhonebookPost,
	description as descriptionlinePhonePhonebookPost,
} from './line/linePhonePhonebookPost.operation';
import {
	execute as executelinePhonePhonebookPut,
	description as descriptionlinePhonePhonebookPut,
} from './line/linePhonePhonebookPut.operation';
import {
	execute as executelinePhonePut,
	description as descriptionlinePhonePut,
} from './line/linePhonePut.operation';
import {
	execute as executelinePhoneRebootPost,
	description as descriptionlinePhoneRebootPost,
} from './line/linePhoneRebootPost.operation';
import {
	execute as executelinePhoneRefreshScreenPost,
	description as descriptionlinePhoneRefreshScreenPost,
} from './line/linePhoneRefreshScreenPost.operation';
import {
	execute as executelinePhoneResetConfigPost,
	description as descriptionlinePhoneResetConfigPost,
} from './line/linePhoneResetConfigPost.operation';
import {
	execute as executelinePhoneRmaChangeTypePost,
	description as descriptionlinePhoneRmaChangeTypePost,
} from './line/linePhoneRmaChangeTypePost.operation';
import {
	execute as executelinePhoneRmaDelete,
	description as descriptionlinePhoneRmaDelete,
} from './line/linePhoneRmaDelete.operation';
import {
	execute as executelinePhoneRmaGet,
	description as descriptionlinePhoneRmaGet,
} from './line/linePhoneRmaGet.operation';
import {
	execute as executelinePhoneRmaListGet,
	description as descriptionlinePhoneRmaListGet,
} from './line/linePhoneRmaListGet.operation';
import {
	execute as executelinePhoneRmaPost,
	description as descriptionlinePhoneRmaPost,
} from './line/linePhoneRmaPost.operation';
import {
	execute as executelinePhoneRmaPut,
	description as descriptionlinePhoneRmaPut,
} from './line/linePhoneRmaPut.operation';
import {
	execute as executelinePhoneSupportsPhonebookListGet,
	description as descriptionlinePhoneSupportsPhonebookListGet,
} from './line/linePhoneSupportsPhonebookListGet.operation';
import {
	execute as executelinePut,
	description as descriptionlinePut,
} from './line/linePut.operation';
import {
	execute as executelineRecordsDelete,
	description as descriptionlineRecordsDelete,
} from './line/lineRecordsDelete.operation';
import {
	execute as executelineRecordsGet,
	description as descriptionlineRecordsGet,
} from './line/lineRecordsGet.operation';
import {
	execute as executelineRecordsListGet,
	description as descriptionlineRecordsListGet,
} from './line/lineRecordsListGet.operation';
import {
	execute as executelineRemoveSimultaneousLinesPost,
	description as descriptionlineRemoveSimultaneousLinesPost,
} from './line/lineRemoveSimultaneousLinesPost.operation';
import {
	execute as executelineSimultaneousChannelsDetailsListGet,
	description as descriptionlineSimultaneousChannelsDetailsListGet,
} from './line/lineSimultaneousChannelsDetailsListGet.operation';
import {
	execute as executelineSoftphoneBetaListGet,
	description as descriptionlineSoftphoneBetaListGet,
} from './line/lineSoftphoneBetaListGet.operation';
import {
	execute as executelineSoftphoneBetaPut,
	description as descriptionlineSoftphoneBetaPut,
} from './line/lineSoftphoneBetaPut.operation';
import {
	execute as executelineSoftphoneDevicesDelete,
	description as descriptionlineSoftphoneDevicesDelete,
} from './line/lineSoftphoneDevicesDelete.operation';
import {
	execute as executelineSoftphoneDevicesDisconnectPost,
	description as descriptionlineSoftphoneDevicesDisconnectPost,
} from './line/lineSoftphoneDevicesDisconnectPost.operation';
import {
	execute as executelineSoftphoneDevicesListGet,
	description as descriptionlineSoftphoneDevicesListGet,
} from './line/lineSoftphoneDevicesListGet.operation';
import {
	execute as executelineSoftphoneLogoDelete,
	description as descriptionlineSoftphoneLogoDelete,
} from './line/lineSoftphoneLogoDelete.operation';
import {
	execute as executelineSoftphoneLogoListGet,
	description as descriptionlineSoftphoneLogoListGet,
} from './line/lineSoftphoneLogoListGet.operation';
import {
	execute as executelineSoftphoneLogoPut,
	description as descriptionlineSoftphoneLogoPut,
} from './line/lineSoftphoneLogoPut.operation';
import {
	execute as executelineSoftphoneStatusListGet,
	description as descriptionlineSoftphoneStatusListGet,
} from './line/lineSoftphoneStatusListGet.operation';
import {
	execute as executelineSoftphoneThemeDelete,
	description as descriptionlineSoftphoneThemeDelete,
} from './line/lineSoftphoneThemeDelete.operation';
import {
	execute as executelineSoftphoneThemeListGet,
	description as descriptionlineSoftphoneThemeListGet,
} from './line/lineSoftphoneThemeListGet.operation';
import {
	execute as executelineSoftphoneThemePut,
	description as descriptionlineSoftphoneThemePut,
} from './line/lineSoftphoneThemePut.operation';
import {
	execute as executelineSoftphoneTokenPost,
	description as descriptionlineSoftphoneTokenPost,
} from './line/lineSoftphoneTokenPost.operation';
import {
	execute as executelineStatisticsListGet,
	description as descriptionlineStatisticsListGet,
} from './line/lineStatisticsListGet.operation';
import {
	execute as executelineTonesListGet,
	description as descriptionlineTonesListGet,
} from './line/lineTonesListGet.operation';
import {
	execute as executelineTonesPut,
	description as descriptionlineTonesPut,
} from './line/lineTonesPut.operation';
import {
	execute as executelineTonesToneUploadPost,
	description as descriptionlineTonesToneUploadPost,
} from './line/lineTonesToneUploadPost.operation';
import {
	execute as executelineTrafficExtractsDelete,
	description as descriptionlineTrafficExtractsDelete,
} from './line/lineTrafficExtractsDelete.operation';
import {
	execute as executelineTrafficExtractsGet,
	description as descriptionlineTrafficExtractsGet,
} from './line/lineTrafficExtractsGet.operation';
import {
	execute as executelineTrafficExtractsListGet,
	description as descriptionlineTrafficExtractsListGet,
} from './line/lineTrafficExtractsListGet.operation';
import {
	execute as executelineTrafficExtractsPost,
	description as descriptionlineTrafficExtractsPost,
} from './line/lineTrafficExtractsPost.operation';
import {
	execute as executelineUnblockPost,
	description as descriptionlineUnblockPost,
} from './line/lineUnblockPost.operation';
import {
	execute as executenumberCancelConvertToLinePost,
	description as descriptionnumberCancelConvertToLinePost,
} from './number/numberCancelConvertToLinePost.operation';
import {
	execute as executenumberChangeFeatureTypePost,
	description as descriptionnumberChangeFeatureTypePost,
} from './number/numberChangeFeatureTypePost.operation';
import {
	execute as executenumberConvertToLineAvailableOffersListGet,
	description as descriptionnumberConvertToLineAvailableOffersListGet,
} from './number/numberConvertToLineAvailableOffersListGet.operation';
import {
	execute as executenumberConvertToLinePost,
	description as descriptionnumberConvertToLinePost,
} from './number/numberConvertToLinePost.operation';
import {
	execute as executenumberGet,
	description as descriptionnumberGet,
} from './number/numberGet.operation';
import {
	execute as executenumberListGet,
	description as descriptionnumberListGet,
} from './number/numberListGet.operation';
import {
	execute as executenumberPut,
	description as descriptionnumberPut,
} from './number/numberPut.operation';
import {
	execute as executeportabilityGet,
	description as descriptionportabilityGet,
} from './root/portabilityGet.operation';
import {
	execute as executeserviceInfosListGet,
	description as descriptionserviceInfosListGet,
} from './serviceInfos/serviceInfosListGet.operation';
import {
	execute as executeserviceInfosPut,
	description as descriptionserviceInfosPut,
} from './serviceInfos/serviceInfosPut.operation';
import {
	execute as executetaskGet,
	description as descriptiontaskGet,
} from './task/taskGet.operation';
import {
	execute as executetaskListGet,
	description as descriptiontaskListGet,
} from './task/taskListGet.operation';
import {
	execute as executetransferSecurityDepositPost,
	description as descriptiontransferSecurityDepositPost,
} from './root/transferSecurityDepositPost.operation';
import {
	execute as executevxmlGet,
	description as descriptionvxmlGet,
} from './vxml/vxmlGet.operation';
import {
	execute as executevxmlListGet,
	description as descriptionvxmlListGet,
} from './vxml/vxmlListGet.operation';
import {
	execute as executevxmlSettingsListGet,
	description as descriptionvxmlSettingsListGet,
} from './vxml/vxmlSettingsListGet.operation';
import {
	execute as executevxmlSettingsLogsPost,
	description as descriptionvxmlSettingsLogsPost,
} from './vxml/vxmlSettingsLogsPost.operation';
import {
	execute as executevxmlSettingsPut,
	description as descriptionvxmlSettingsPut,
} from './vxml/vxmlSettingsPut.operation';

import {
	execute as executeconferenceListGet,
	description as descriptionconferenceListGet,
} from './conference/conferenceListGet.operation';

import {
	execute as executeconferenceGet,
	description as descriptionconferenceGet,
} from './conference/conferenceGet.operation';

import {
	execute as executeconferenceAnnounceUploadPost,
	description as descriptionconferenceAnnounceUploadPost,
} from './conference/conferenceAnnounceUploadPost.operation';

import {
	execute as executeconferenceHistoriesListGet,
	description as descriptionconferenceHistoriesListGet,
} from './conference/conferenceHistoriesListGet.operation';

import {
	execute as executeconferenceHistoriesGet,
	description as descriptionconferenceHistoriesGet,
} from './conference/conferenceHistoriesGet.operation';

import {
	execute as executeconferenceInformationsListGet,
	description as descriptionconferenceInformationsListGet,
} from './conference/conferenceInformationsListGet.operation';

import {
	execute as executeconferenceLockPost,
	description as descriptionconferenceLockPost,
} from './conference/conferenceLockPost.operation';

import {
	execute as executeconferenceParticipantsListGet,
	description as descriptionconferenceParticipantsListGet,
} from './conference/conferenceParticipantsListGet.operation';

import {
	execute as executeconferenceParticipantsGet,
	description as descriptionconferenceParticipantsGet,
} from './conference/conferenceParticipantsGet.operation';

import {
	execute as executeconferenceParticipantsDeafPost,
	description as descriptionconferenceParticipantsDeafPost,
} from './conference/conferenceParticipantsDeafPost.operation';

import {
	execute as executeconferenceParticipantsEnergyPost,
	description as descriptionconferenceParticipantsEnergyPost,
} from './conference/conferenceParticipantsEnergyPost.operation';

import {
	execute as executeconferenceParticipantsKickPost,
	description as descriptionconferenceParticipantsKickPost,
} from './conference/conferenceParticipantsKickPost.operation';

import {
	execute as executeconferenceParticipantsMutePost,
	description as descriptionconferenceParticipantsMutePost,
} from './conference/conferenceParticipantsMutePost.operation';

import {
	execute as executeconferenceParticipantsUndeafPost,
	description as descriptionconferenceParticipantsUndeafPost,
} from './conference/conferenceParticipantsUndeafPost.operation';

import {
	execute as executeconferenceParticipantsUnmutePost,
	description as descriptionconferenceParticipantsUnmutePost,
} from './conference/conferenceParticipantsUnmutePost.operation';

import {
	execute as executeconferenceRoomsListGet,
	description as descriptionconferenceRoomsListGet,
} from './conference/conferenceRoomsListGet.operation';

import {
	execute as executeconferenceRoomsPost,
	description as descriptionconferenceRoomsPost,
} from './conference/conferenceRoomsPost.operation';

import {
	execute as executeconferenceRoomsGet,
	description as descriptionconferenceRoomsGet,
} from './conference/conferenceRoomsGet.operation';

import {
	execute as executeconferenceRoomsPut,
	description as descriptionconferenceRoomsPut,
} from './conference/conferenceRoomsPut.operation';

import {
	execute as executeconferenceRoomsHistoriesListGet,
	description as descriptionconferenceRoomsHistoriesListGet,
} from './conference/conferenceRoomsHistoriesListGet.operation';

import {
	execute as executeconferenceRoomsHistoriesGet,
	description as descriptionconferenceRoomsHistoriesGet,
} from './conference/conferenceRoomsHistoriesGet.operation';

import {
	execute as executeconferenceRoomsLockPost,
	description as descriptionconferenceRoomsLockPost,
} from './conference/conferenceRoomsLockPost.operation';

import {
	execute as executeconferenceRoomsParticipantsListGet,
	description as descriptionconferenceRoomsParticipantsListGet,
} from './conference/conferenceRoomsParticipantsListGet.operation';

import {
	execute as executeconferenceRoomsParticipantsGet,
	description as descriptionconferenceRoomsParticipantsGet,
} from './conference/conferenceRoomsParticipantsGet.operation';

import {
	execute as executeconferenceRoomsParticipantsDeafPost,
	description as descriptionconferenceRoomsParticipantsDeafPost,
} from './conference/conferenceRoomsParticipantsDeafPost.operation';

import {
	execute as executeconferenceRoomsParticipantsEnergyPost,
	description as descriptionconferenceRoomsParticipantsEnergyPost,
} from './conference/conferenceRoomsParticipantsEnergyPost.operation';

import {
	execute as executeconferenceRoomsParticipantsKickPost,
	description as descriptionconferenceRoomsParticipantsKickPost,
} from './conference/conferenceRoomsParticipantsKickPost.operation';

import {
	execute as executeconferenceRoomsParticipantsMutePost,
	description as descriptionconferenceRoomsParticipantsMutePost,
} from './conference/conferenceRoomsParticipantsMutePost.operation';

import {
	execute as executeconferenceRoomsParticipantsUndeafPost,
	description as descriptionconferenceRoomsParticipantsUndeafPost,
} from './conference/conferenceRoomsParticipantsUndeafPost.operation';

import {
	execute as executeconferenceRoomsParticipantsUnmutePost,
	description as descriptionconferenceRoomsParticipantsUnmutePost,
} from './conference/conferenceRoomsParticipantsUnmutePost.operation';

import {
	execute as executeconferenceRoomsUnlockPost,
	description as descriptionconferenceRoomsUnlockPost,
} from './conference/conferenceRoomsUnlockPost.operation';

import {
	execute as executeconferenceRoomsWebAccessListGet,
	description as descriptionconferenceRoomsWebAccessListGet,
} from './conference/conferenceRoomsWebAccessListGet.operation';

import {
	execute as executeconferenceRoomsWebAccessPost,
	description as descriptionconferenceRoomsWebAccessPost,
} from './conference/conferenceRoomsWebAccessPost.operation';

import {
	execute as executeconferenceRoomsWebAccessDelete,
	description as descriptionconferenceRoomsWebAccessDelete,
} from './conference/conferenceRoomsWebAccessDelete.operation';

import {
	execute as executeconferenceRoomsWebAccessGet,
	description as descriptionconferenceRoomsWebAccessGet,
} from './conference/conferenceRoomsWebAccessGet.operation';

import {
	execute as executeconferenceRoomsStatsListGet,
	description as descriptionconferenceRoomsStatsListGet,
} from './conference/conferenceRoomsStatsListGet.operation';

import {
	execute as executeconferenceSettingsListGet,
	description as descriptionconferenceSettingsListGet,
} from './conference/conferenceSettingsListGet.operation';

import {
	execute as executeconferenceSettingsPut,
	description as descriptionconferenceSettingsPut,
} from './conference/conferenceSettingsPut.operation';

import {
	execute as executeconferenceUnlockPost,
	description as descriptionconferenceUnlockPost,
} from './conference/conferenceUnlockPost.operation';

import {
	execute as executeconferenceWebAccessListGet,
	description as descriptionconferenceWebAccessListGet,
} from './conference/conferenceWebAccessListGet.operation';

import {
	execute as executeconferenceWebAccessPost,
	description as descriptionconferenceWebAccessPost,
} from './conference/conferenceWebAccessPost.operation';

import {
	execute as executeconferenceWebAccessDelete,
	description as descriptionconferenceWebAccessDelete,
} from './conference/conferenceWebAccessDelete.operation';

import {
	execute as executeconferenceWebAccessGet,
	description as descriptionconferenceWebAccessGet,
} from './conference/conferenceWebAccessGet.operation';

import {
	execute as executeddiListGet,
	description as descriptionddiListGet,
} from './ddi/ddiListGet.operation';

import { execute as executeddiGet, description as descriptionddiGet } from './ddi/ddiGet.operation';

import { execute as executeddiPut, description as descriptionddiPut } from './ddi/ddiPut.operation';

import {
	execute as executeddiChangeDestinationPost,
	description as descriptionddiChangeDestinationPost,
} from './ddi/ddiChangeDestinationPost.operation';

import {
	execute as executeeasyHuntingListGet,
	description as descriptioneasyHuntingListGet,
} from './easyHunting/easyHuntingListGet.operation';

import {
	execute as executeeasyHuntingGet,
	description as descriptioneasyHuntingGet,
} from './easyHunting/easyHuntingGet.operation';

import {
	execute as executeeasyHuntingPut,
	description as descriptioneasyHuntingPut,
} from './easyHunting/easyHuntingPut.operation';

import {
	execute as executeeasyHuntingHuntingListGet,
	description as descriptioneasyHuntingHuntingListGet,
} from './easyHunting/easyHuntingHuntingListGet.operation';

import {
	execute as executeeasyHuntingHuntingPut,
	description as descriptioneasyHuntingHuntingPut,
} from './easyHunting/easyHuntingHuntingPut.operation';

import {
	execute as executeeasyHuntingHuntingAgentListGet,
	description as descriptioneasyHuntingHuntingAgentListGet,
} from './easyHunting/easyHuntingHuntingAgentListGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentPost,
	description as descriptioneasyHuntingHuntingAgentPost,
} from './easyHunting/easyHuntingHuntingAgentPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentDelete,
	description as descriptioneasyHuntingHuntingAgentDelete,
} from './easyHunting/easyHuntingHuntingAgentDelete.operation';

import {
	execute as executeeasyHuntingHuntingAgentGet,
	description as descriptioneasyHuntingHuntingAgentGet,
} from './easyHunting/easyHuntingHuntingAgentGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentPut,
	description as descriptioneasyHuntingHuntingAgentPut,
} from './easyHunting/easyHuntingHuntingAgentPut.operation';

import {
	execute as executeeasyHuntingHuntingAgentBannerAccessDelete,
	description as descriptioneasyHuntingHuntingAgentBannerAccessDelete,
} from './easyHunting/easyHuntingHuntingAgentBannerAccessDelete.operation';

import {
	execute as executeeasyHuntingHuntingAgentBannerAccessListGet,
	description as descriptioneasyHuntingHuntingAgentBannerAccessListGet,
} from './easyHunting/easyHuntingHuntingAgentBannerAccessListGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentBannerAccessPost,
	description as descriptioneasyHuntingHuntingAgentBannerAccessPost,
} from './easyHunting/easyHuntingHuntingAgentBannerAccessPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentCallsListGet,
	description as descriptioneasyHuntingHuntingAgentCallsListGet,
} from './easyHunting/easyHuntingHuntingAgentCallsListGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentCallsGet,
	description as descriptioneasyHuntingHuntingAgentCallsGet,
} from './easyHunting/easyHuntingHuntingAgentCallsGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentCallsEavesdropPost,
	description as descriptioneasyHuntingHuntingAgentCallsEavesdropPost,
} from './easyHunting/easyHuntingHuntingAgentCallsEavesdropPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentCallsHangupPost,
	description as descriptioneasyHuntingHuntingAgentCallsHangupPost,
} from './easyHunting/easyHuntingHuntingAgentCallsHangupPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentCallsHoldPost,
	description as descriptioneasyHuntingHuntingAgentCallsHoldPost,
} from './easyHunting/easyHuntingHuntingAgentCallsHoldPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentCallsInterceptPost,
	description as descriptioneasyHuntingHuntingAgentCallsInterceptPost,
} from './easyHunting/easyHuntingHuntingAgentCallsInterceptPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentCallsTransferPost,
	description as descriptioneasyHuntingHuntingAgentCallsTransferPost,
} from './easyHunting/easyHuntingHuntingAgentCallsTransferPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentCallsWhisperPost,
	description as descriptioneasyHuntingHuntingAgentCallsWhisperPost,
} from './easyHunting/easyHuntingHuntingAgentCallsWhisperPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentEventTokenDelete,
	description as descriptioneasyHuntingHuntingAgentEventTokenDelete,
} from './easyHunting/easyHuntingHuntingAgentEventTokenDelete.operation';

import {
	execute as executeeasyHuntingHuntingAgentEventTokenListGet,
	description as descriptioneasyHuntingHuntingAgentEventTokenListGet,
} from './easyHunting/easyHuntingHuntingAgentEventTokenListGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentEventTokenPost,
	description as descriptioneasyHuntingHuntingAgentEventTokenPost,
} from './easyHunting/easyHuntingHuntingAgentEventTokenPost.operation';

import {
	execute as executeeasyHuntingHuntingAgentLiveStatusListGet,
	description as descriptioneasyHuntingHuntingAgentLiveStatusListGet,
} from './easyHunting/easyHuntingHuntingAgentLiveStatusListGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentQueueListGet,
	description as descriptioneasyHuntingHuntingAgentQueueListGet,
} from './easyHunting/easyHuntingHuntingAgentQueueListGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentQueuePost,
	description as descriptioneasyHuntingHuntingAgentQueuePost,
} from './easyHunting/easyHuntingHuntingAgentQueuePost.operation';

import {
	execute as executeeasyHuntingHuntingAgentQueueDelete,
	description as descriptioneasyHuntingHuntingAgentQueueDelete,
} from './easyHunting/easyHuntingHuntingAgentQueueDelete.operation';

import {
	execute as executeeasyHuntingHuntingAgentQueueGet,
	description as descriptioneasyHuntingHuntingAgentQueueGet,
} from './easyHunting/easyHuntingHuntingAgentQueueGet.operation';

import {
	execute as executeeasyHuntingHuntingAgentQueuePut,
	description as descriptioneasyHuntingHuntingAgentQueuePut,
} from './easyHunting/easyHuntingHuntingAgentQueuePut.operation';

import {
	execute as executeeasyHuntingHuntingAgentQueueLiveStatusListGet,
	description as descriptioneasyHuntingHuntingAgentQueueLiveStatusListGet,
} from './easyHunting/easyHuntingHuntingAgentQueueLiveStatusListGet.operation';

import {
	execute as executeeasyHuntingHuntingCustomStatusListGet,
	description as descriptioneasyHuntingHuntingCustomStatusListGet,
} from './easyHunting/easyHuntingHuntingCustomStatusListGet.operation';

import {
	execute as executeeasyHuntingHuntingCustomStatusPost,
	description as descriptioneasyHuntingHuntingCustomStatusPost,
} from './easyHunting/easyHuntingHuntingCustomStatusPost.operation';

import {
	execute as executeeasyHuntingHuntingCustomStatusDelete,
	description as descriptioneasyHuntingHuntingCustomStatusDelete,
} from './easyHunting/easyHuntingHuntingCustomStatusDelete.operation';

import {
	execute as executeeasyHuntingHuntingCustomStatusGet,
	description as descriptioneasyHuntingHuntingCustomStatusGet,
} from './easyHunting/easyHuntingHuntingCustomStatusGet.operation';

import {
	execute as executeeasyHuntingHuntingEventTokenDelete,
	description as descriptioneasyHuntingHuntingEventTokenDelete,
} from './easyHunting/easyHuntingHuntingEventTokenDelete.operation';

import {
	execute as executeeasyHuntingHuntingEventTokenListGet,
	description as descriptioneasyHuntingHuntingEventTokenListGet,
} from './easyHunting/easyHuntingHuntingEventTokenListGet.operation';

import {
	execute as executeeasyHuntingHuntingEventTokenPost,
	description as descriptioneasyHuntingHuntingEventTokenPost,
} from './easyHunting/easyHuntingHuntingEventTokenPost.operation';

import {
	execute as executeeasyHuntingHuntingQueueListGet,
	description as descriptioneasyHuntingHuntingQueueListGet,
} from './easyHunting/easyHuntingHuntingQueueListGet.operation';

import {
	execute as executeeasyHuntingHuntingQueuePost,
	description as descriptioneasyHuntingHuntingQueuePost,
} from './easyHunting/easyHuntingHuntingQueuePost.operation';

import {
	execute as executeeasyHuntingHuntingQueueDelete,
	description as descriptioneasyHuntingHuntingQueueDelete,
} from './easyHunting/easyHuntingHuntingQueueDelete.operation';

import {
	execute as executeeasyHuntingHuntingQueueGet,
	description as descriptioneasyHuntingHuntingQueueGet,
} from './easyHunting/easyHuntingHuntingQueueGet.operation';

import {
	execute as executeeasyHuntingHuntingQueuePut,
	description as descriptioneasyHuntingHuntingQueuePut,
} from './easyHunting/easyHuntingHuntingQueuePut.operation';

import {
	execute as executeeasyHuntingHuntingQueueAgentListGet,
	description as descriptioneasyHuntingHuntingQueueAgentListGet,
} from './easyHunting/easyHuntingHuntingQueueAgentListGet.operation';

import {
	execute as executeeasyHuntingHuntingQueueAgentPost,
	description as descriptioneasyHuntingHuntingQueueAgentPost,
} from './easyHunting/easyHuntingHuntingQueueAgentPost.operation';

import {
	execute as executeeasyHuntingHuntingQueueAgentDelete,
	description as descriptioneasyHuntingHuntingQueueAgentDelete,
} from './easyHunting/easyHuntingHuntingQueueAgentDelete.operation';

import {
	execute as executeeasyHuntingHuntingQueueAgentGet,
	description as descriptioneasyHuntingHuntingQueueAgentGet,
} from './easyHunting/easyHuntingHuntingQueueAgentGet.operation';

import {
	execute as executeeasyHuntingHuntingQueueAgentPut,
	description as descriptioneasyHuntingHuntingQueueAgentPut,
} from './easyHunting/easyHuntingHuntingQueueAgentPut.operation';

import {
	execute as executeeasyHuntingHuntingQueueAgentLiveStatusListGet,
	description as descriptioneasyHuntingHuntingQueueAgentLiveStatusListGet,
} from './easyHunting/easyHuntingHuntingQueueAgentLiveStatusListGet.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveCallsListGet,
	description as descriptioneasyHuntingHuntingQueueLiveCallsListGet,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsListGet.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveCallsGet,
	description as descriptioneasyHuntingHuntingQueueLiveCallsGet,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsGet.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveCallsEavesdropPost,
	description as descriptioneasyHuntingHuntingQueueLiveCallsEavesdropPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsEavesdropPost.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveCallsHangupPost,
	description as descriptioneasyHuntingHuntingQueueLiveCallsHangupPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsHangupPost.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveCallsHoldPost,
	description as descriptioneasyHuntingHuntingQueueLiveCallsHoldPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsHoldPost.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveCallsInterceptPost,
	description as descriptioneasyHuntingHuntingQueueLiveCallsInterceptPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsInterceptPost.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveCallsTransferPost,
	description as descriptioneasyHuntingHuntingQueueLiveCallsTransferPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsTransferPost.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveCallsWhisperPost,
	description as descriptioneasyHuntingHuntingQueueLiveCallsWhisperPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsWhisperPost.operation';

import {
	execute as executeeasyHuntingHuntingQueueLiveStatisticsListGet,
	description as descriptioneasyHuntingHuntingQueueLiveStatisticsListGet,
} from './easyHunting/easyHuntingHuntingQueueLiveStatisticsListGet.operation';

import {
	execute as executeeasyHuntingRecordsListGet,
	description as descriptioneasyHuntingRecordsListGet,
} from './easyHunting/easyHuntingRecordsListGet.operation';

import {
	execute as executeeasyHuntingRecordsDelete,
	description as descriptioneasyHuntingRecordsDelete,
} from './easyHunting/easyHuntingRecordsDelete.operation';

import {
	execute as executeeasyHuntingRecordsGet,
	description as descriptioneasyHuntingRecordsGet,
} from './easyHunting/easyHuntingRecordsGet.operation';

import {
	execute as executeeasyHuntingScreenListConditionsListGet,
	description as descriptioneasyHuntingScreenListConditionsListGet,
} from './easyHunting/easyHuntingScreenListConditionsListGet.operation';

import {
	execute as executeeasyHuntingScreenListConditionsPut,
	description as descriptioneasyHuntingScreenListConditionsPut,
} from './easyHunting/easyHuntingScreenListConditionsPut.operation';

import {
	execute as executeeasyHuntingScreenListConditionsConditionsListGet,
	description as descriptioneasyHuntingScreenListConditionsConditionsListGet,
} from './easyHunting/easyHuntingScreenListConditionsConditionsListGet.operation';

import {
	execute as executeeasyHuntingScreenListConditionsConditionsPost,
	description as descriptioneasyHuntingScreenListConditionsConditionsPost,
} from './easyHunting/easyHuntingScreenListConditionsConditionsPost.operation';

import {
	execute as executeeasyHuntingScreenListConditionsConditionsDelete,
	description as descriptioneasyHuntingScreenListConditionsConditionsDelete,
} from './easyHunting/easyHuntingScreenListConditionsConditionsDelete.operation';

import {
	execute as executeeasyHuntingScreenListConditionsConditionsGet,
	description as descriptioneasyHuntingScreenListConditionsConditionsGet,
} from './easyHunting/easyHuntingScreenListConditionsConditionsGet.operation';

import {
	execute as executeeasyHuntingScreenListConditionsConditionsPut,
	description as descriptioneasyHuntingScreenListConditionsConditionsPut,
} from './easyHunting/easyHuntingScreenListConditionsConditionsPut.operation';

import {
	execute as executeeasyHuntingSoundListGet,
	description as descriptioneasyHuntingSoundListGet,
} from './easyHunting/easyHuntingSoundListGet.operation';

import {
	execute as executeeasyHuntingSoundDelete,
	description as descriptioneasyHuntingSoundDelete,
} from './easyHunting/easyHuntingSoundDelete.operation';

import {
	execute as executeeasyHuntingSoundGet,
	description as descriptioneasyHuntingSoundGet,
} from './easyHunting/easyHuntingSoundGet.operation';

import {
	execute as executeeasyHuntingSoundUploadPost,
	description as descriptioneasyHuntingSoundUploadPost,
} from './easyHunting/easyHuntingSoundUploadPost.operation';

import {
	execute as executeeasyHuntingTimeConditionsListGet,
	description as descriptioneasyHuntingTimeConditionsListGet,
} from './easyHunting/easyHuntingTimeConditionsListGet.operation';

import {
	execute as executeeasyHuntingTimeConditionsPut,
	description as descriptioneasyHuntingTimeConditionsPut,
} from './easyHunting/easyHuntingTimeConditionsPut.operation';

import {
	execute as executeeasyHuntingTimeConditionsConditionsListGet,
	description as descriptioneasyHuntingTimeConditionsConditionsListGet,
} from './easyHunting/easyHuntingTimeConditionsConditionsListGet.operation';

import {
	execute as executeeasyHuntingTimeConditionsConditionsPost,
	description as descriptioneasyHuntingTimeConditionsConditionsPost,
} from './easyHunting/easyHuntingTimeConditionsConditionsPost.operation';

import {
	execute as executeeasyHuntingTimeConditionsConditionsDelete,
	description as descriptioneasyHuntingTimeConditionsConditionsDelete,
} from './easyHunting/easyHuntingTimeConditionsConditionsDelete.operation';

import {
	execute as executeeasyHuntingTimeConditionsConditionsGet,
	description as descriptioneasyHuntingTimeConditionsConditionsGet,
} from './easyHunting/easyHuntingTimeConditionsConditionsGet.operation';

import {
	execute as executeeasyHuntingTimeConditionsConditionsPut,
	description as descriptioneasyHuntingTimeConditionsConditionsPut,
} from './easyHunting/easyHuntingTimeConditionsConditionsPut.operation';

import {
	execute as executeeventTokenDelete,
	description as descriptioneventTokenDelete,
} from './eventToken/eventTokenDelete.operation';

import {
	execute as executeeventTokenListGet,
	description as descriptioneventTokenListGet,
} from './eventToken/eventTokenListGet.operation';

import {
	execute as executeeventTokenPost,
	description as descriptioneventTokenPost,
} from './eventToken/eventTokenPost.operation';

import {
	execute as executehasSpecialNumbersListGet,
	description as descriptionhasSpecialNumbersListGet,
} from './hasSpecialNumbers/hasSpecialNumbersListGet.operation';

import {
	execute as executehistoryConsumptionListGet,
	description as descriptionhistoryConsumptionListGet,
} from './historyConsumption/historyConsumptionListGet.operation';

import {
	execute as executehistoryConsumptionGet,
	description as descriptionhistoryConsumptionGet,
} from './historyConsumption/historyConsumptionGet.operation';

import {
	execute as executehistoryConsumptionFileListGet,
	description as descriptionhistoryConsumptionFileListGet,
} from './historyConsumption/historyConsumptionFileListGet.operation';

import {
	execute as executehistoryRepaymentConsumptionListGet,
	description as descriptionhistoryRepaymentConsumptionListGet,
} from './historyRepaymentConsumption/historyRepaymentConsumptionListGet.operation';

import {
	execute as executehistoryRepaymentConsumptionPost,
	description as descriptionhistoryRepaymentConsumptionPost,
} from './historyRepaymentConsumption/historyRepaymentConsumptionPost.operation';

import {
	execute as executehistoryRepaymentConsumptionGet,
	description as descriptionhistoryRepaymentConsumptionGet,
} from './historyRepaymentConsumption/historyRepaymentConsumptionGet.operation';

import {
	execute as executehistoryRepaymentConsumptionDocumentListGet,
	description as descriptionhistoryRepaymentConsumptionDocumentListGet,
} from './historyRepaymentConsumption/historyRepaymentConsumptionDocumentListGet.operation';

import {
	execute as executehistoryTollfreeConsumptionListGet,
	description as descriptionhistoryTollfreeConsumptionListGet,
} from './historyTollfreeConsumption/historyTollfreeConsumptionListGet.operation';

import {
	execute as executehistoryTollfreeConsumptionGet,
	description as descriptionhistoryTollfreeConsumptionGet,
} from './historyTollfreeConsumption/historyTollfreeConsumptionGet.operation';

import {
	execute as executehistoryTollfreeConsumptionDocumentListGet,
	description as descriptionhistoryTollfreeConsumptionDocumentListGet,
} from './historyTollfreeConsumption/historyTollfreeConsumptionDocumentListGet.operation';

import {
	execute as executeofferTaskListGet,
	description as descriptionofferTaskListGet,
} from './offerTask/offerTaskListGet.operation';

import {
	execute as executeofferTaskGet,
	description as descriptionofferTaskGet,
} from './offerTask/offerTaskGet.operation';

import {
	execute as executeofferTaskPut,
	description as descriptionofferTaskPut,
} from './offerTask/offerTaskPut.operation';

import {
	execute as executeoldPhoneListGet,
	description as descriptionoldPhoneListGet,
} from './oldPhone/oldPhoneListGet.operation';

import {
	execute as executeoutplanNotificationListGet,
	description as descriptionoutplanNotificationListGet,
} from './outplanNotification/outplanNotificationListGet.operation';

import {
	execute as executeoutplanNotificationPost,
	description as descriptionoutplanNotificationPost,
} from './outplanNotification/outplanNotificationPost.operation';

import {
	execute as executeoutplanNotificationDelete,
	description as descriptionoutplanNotificationDelete,
} from './outplanNotification/outplanNotificationDelete.operation';

import {
	execute as executeoutplanNotificationGet,
	description as descriptionoutplanNotificationGet,
} from './outplanNotification/outplanNotificationGet.operation';

import {
	execute as executeovhPabxListGet,
	description as descriptionovhPabxListGet,
} from './ovhPabx/ovhPabxListGet.operation';

import {
	execute as executeovhPabxGet,
	description as descriptionovhPabxGet,
} from './ovhPabx/ovhPabxGet.operation';

import {
	execute as executeovhPabxPut,
	description as descriptionovhPabxPut,
} from './ovhPabx/ovhPabxPut.operation';

import {
	execute as executeovhPabxDialplanListGet,
	description as descriptionovhPabxDialplanListGet,
} from './ovhPabx/ovhPabxDialplanListGet.operation';

import {
	execute as executeovhPabxDialplanPost,
	description as descriptionovhPabxDialplanPost,
} from './ovhPabx/ovhPabxDialplanPost.operation';

import {
	execute as executeovhPabxDialplanDelete,
	description as descriptionovhPabxDialplanDelete,
} from './ovhPabx/ovhPabxDialplanDelete.operation';

import {
	execute as executeovhPabxDialplanGet,
	description as descriptionovhPabxDialplanGet,
} from './ovhPabx/ovhPabxDialplanGet.operation';

import {
	execute as executeovhPabxDialplanPut,
	description as descriptionovhPabxDialplanPut,
} from './ovhPabx/ovhPabxDialplanPut.operation';

import {
	execute as executeovhPabxDialplanExtensionListGet,
	description as descriptionovhPabxDialplanExtensionListGet,
} from './ovhPabx/ovhPabxDialplanExtensionListGet.operation';

import {
	execute as executeovhPabxDialplanExtensionPost,
	description as descriptionovhPabxDialplanExtensionPost,
} from './ovhPabx/ovhPabxDialplanExtensionPost.operation';

import {
	execute as executeovhPabxDialplanExtensionDelete,
	description as descriptionovhPabxDialplanExtensionDelete,
} from './ovhPabx/ovhPabxDialplanExtensionDelete.operation';

import {
	execute as executeovhPabxDialplanExtensionGet,
	description as descriptionovhPabxDialplanExtensionGet,
} from './ovhPabx/ovhPabxDialplanExtensionGet.operation';

import {
	execute as executeovhPabxDialplanExtensionPut,
	description as descriptionovhPabxDialplanExtensionPut,
} from './ovhPabx/ovhPabxDialplanExtensionPut.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionScreenListListGet,
	description as descriptionovhPabxDialplanExtensionConditionScreenListListGet,
} from './ovhPabx/ovhPabxDialplanExtensionConditionScreenListListGet.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionScreenListPost,
	description as descriptionovhPabxDialplanExtensionConditionScreenListPost,
} from './ovhPabx/ovhPabxDialplanExtensionConditionScreenListPost.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionScreenListDelete,
	description as descriptionovhPabxDialplanExtensionConditionScreenListDelete,
} from './ovhPabx/ovhPabxDialplanExtensionConditionScreenListDelete.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionScreenListGet,
	description as descriptionovhPabxDialplanExtensionConditionScreenListGet,
} from './ovhPabx/ovhPabxDialplanExtensionConditionScreenListGet.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionTimeListGet,
	description as descriptionovhPabxDialplanExtensionConditionTimeListGet,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimeListGet.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionTimePost,
	description as descriptionovhPabxDialplanExtensionConditionTimePost,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimePost.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionTimeDelete,
	description as descriptionovhPabxDialplanExtensionConditionTimeDelete,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimeDelete.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionTimeGet,
	description as descriptionovhPabxDialplanExtensionConditionTimeGet,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimeGet.operation';

import {
	execute as executeovhPabxDialplanExtensionConditionTimePut,
	description as descriptionovhPabxDialplanExtensionConditionTimePut,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimePut.operation';

import {
	execute as executeovhPabxDialplanExtensionRuleListGet,
	description as descriptionovhPabxDialplanExtensionRuleListGet,
} from './ovhPabx/ovhPabxDialplanExtensionRuleListGet.operation';

import {
	execute as executeovhPabxDialplanExtensionRulePost,
	description as descriptionovhPabxDialplanExtensionRulePost,
} from './ovhPabx/ovhPabxDialplanExtensionRulePost.operation';

import {
	execute as executeovhPabxDialplanExtensionRuleDelete,
	description as descriptionovhPabxDialplanExtensionRuleDelete,
} from './ovhPabx/ovhPabxDialplanExtensionRuleDelete.operation';

import {
	execute as executeovhPabxDialplanExtensionRuleGet,
	description as descriptionovhPabxDialplanExtensionRuleGet,
} from './ovhPabx/ovhPabxDialplanExtensionRuleGet.operation';

import {
	execute as executeovhPabxDialplanExtensionRulePut,
	description as descriptionovhPabxDialplanExtensionRulePut,
} from './ovhPabx/ovhPabxDialplanExtensionRulePut.operation';

import {
	execute as executeovhPabxHuntingListGet,
	description as descriptionovhPabxHuntingListGet,
} from './ovhPabx/ovhPabxHuntingListGet.operation';

import {
	execute as executeovhPabxHuntingPut,
	description as descriptionovhPabxHuntingPut,
} from './ovhPabx/ovhPabxHuntingPut.operation';

import {
	execute as executeovhPabxHuntingAgentListGet,
	description as descriptionovhPabxHuntingAgentListGet,
} from './ovhPabx/ovhPabxHuntingAgentListGet.operation';

import {
	execute as executeovhPabxHuntingAgentPost,
	description as descriptionovhPabxHuntingAgentPost,
} from './ovhPabx/ovhPabxHuntingAgentPost.operation';

import {
	execute as executeovhPabxHuntingAgentDelete,
	description as descriptionovhPabxHuntingAgentDelete,
} from './ovhPabx/ovhPabxHuntingAgentDelete.operation';

import {
	execute as executeovhPabxHuntingAgentGet,
	description as descriptionovhPabxHuntingAgentGet,
} from './ovhPabx/ovhPabxHuntingAgentGet.operation';

import {
	execute as executeovhPabxHuntingAgentPut,
	description as descriptionovhPabxHuntingAgentPut,
} from './ovhPabx/ovhPabxHuntingAgentPut.operation';

import {
	execute as executeovhPabxHuntingAgentBannerAccessDelete,
	description as descriptionovhPabxHuntingAgentBannerAccessDelete,
} from './ovhPabx/ovhPabxHuntingAgentBannerAccessDelete.operation';

import {
	execute as executeovhPabxHuntingAgentBannerAccessListGet,
	description as descriptionovhPabxHuntingAgentBannerAccessListGet,
} from './ovhPabx/ovhPabxHuntingAgentBannerAccessListGet.operation';

import {
	execute as executeovhPabxHuntingAgentBannerAccessPost,
	description as descriptionovhPabxHuntingAgentBannerAccessPost,
} from './ovhPabx/ovhPabxHuntingAgentBannerAccessPost.operation';

import {
	execute as executeovhPabxHuntingAgentCallsListGet,
	description as descriptionovhPabxHuntingAgentCallsListGet,
} from './ovhPabx/ovhPabxHuntingAgentCallsListGet.operation';

import {
	execute as executeovhPabxHuntingAgentCallsGet,
	description as descriptionovhPabxHuntingAgentCallsGet,
} from './ovhPabx/ovhPabxHuntingAgentCallsGet.operation';

import {
	execute as executeovhPabxHuntingAgentCallsEavesdropPost,
	description as descriptionovhPabxHuntingAgentCallsEavesdropPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsEavesdropPost.operation';

import {
	execute as executeovhPabxHuntingAgentCallsHangupPost,
	description as descriptionovhPabxHuntingAgentCallsHangupPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsHangupPost.operation';

import {
	execute as executeovhPabxHuntingAgentCallsHoldPost,
	description as descriptionovhPabxHuntingAgentCallsHoldPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsHoldPost.operation';

import {
	execute as executeovhPabxHuntingAgentCallsInterceptPost,
	description as descriptionovhPabxHuntingAgentCallsInterceptPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsInterceptPost.operation';

import {
	execute as executeovhPabxHuntingAgentCallsTransferPost,
	description as descriptionovhPabxHuntingAgentCallsTransferPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsTransferPost.operation';

import {
	execute as executeovhPabxHuntingAgentCallsWhisperPost,
	description as descriptionovhPabxHuntingAgentCallsWhisperPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsWhisperPost.operation';

import {
	execute as executeovhPabxHuntingAgentEventTokenDelete,
	description as descriptionovhPabxHuntingAgentEventTokenDelete,
} from './ovhPabx/ovhPabxHuntingAgentEventTokenDelete.operation';

import {
	execute as executeovhPabxHuntingAgentEventTokenListGet,
	description as descriptionovhPabxHuntingAgentEventTokenListGet,
} from './ovhPabx/ovhPabxHuntingAgentEventTokenListGet.operation';

import {
	execute as executeovhPabxHuntingAgentEventTokenPost,
	description as descriptionovhPabxHuntingAgentEventTokenPost,
} from './ovhPabx/ovhPabxHuntingAgentEventTokenPost.operation';

import {
	execute as executeovhPabxHuntingAgentLiveStatusListGet,
	description as descriptionovhPabxHuntingAgentLiveStatusListGet,
} from './ovhPabx/ovhPabxHuntingAgentLiveStatusListGet.operation';

import {
	execute as executeovhPabxHuntingAgentQueueListGet,
	description as descriptionovhPabxHuntingAgentQueueListGet,
} from './ovhPabx/ovhPabxHuntingAgentQueueListGet.operation';

import {
	execute as executeovhPabxHuntingAgentQueuePost,
	description as descriptionovhPabxHuntingAgentQueuePost,
} from './ovhPabx/ovhPabxHuntingAgentQueuePost.operation';

import {
	execute as executeovhPabxHuntingAgentQueueDelete,
	description as descriptionovhPabxHuntingAgentQueueDelete,
} from './ovhPabx/ovhPabxHuntingAgentQueueDelete.operation';

import {
	execute as executeovhPabxHuntingAgentQueueGet,
	description as descriptionovhPabxHuntingAgentQueueGet,
} from './ovhPabx/ovhPabxHuntingAgentQueueGet.operation';

import {
	execute as executeovhPabxHuntingAgentQueuePut,
	description as descriptionovhPabxHuntingAgentQueuePut,
} from './ovhPabx/ovhPabxHuntingAgentQueuePut.operation';

import {
	execute as executeovhPabxHuntingAgentQueueLiveStatusListGet,
	description as descriptionovhPabxHuntingAgentQueueLiveStatusListGet,
} from './ovhPabx/ovhPabxHuntingAgentQueueLiveStatusListGet.operation';

import {
	execute as executeovhPabxHuntingCustomStatusListGet,
	description as descriptionovhPabxHuntingCustomStatusListGet,
} from './ovhPabx/ovhPabxHuntingCustomStatusListGet.operation';

import {
	execute as executeovhPabxHuntingCustomStatusPost,
	description as descriptionovhPabxHuntingCustomStatusPost,
} from './ovhPabx/ovhPabxHuntingCustomStatusPost.operation';

import {
	execute as executeovhPabxHuntingCustomStatusDelete,
	description as descriptionovhPabxHuntingCustomStatusDelete,
} from './ovhPabx/ovhPabxHuntingCustomStatusDelete.operation';

import {
	execute as executeovhPabxHuntingCustomStatusGet,
	description as descriptionovhPabxHuntingCustomStatusGet,
} from './ovhPabx/ovhPabxHuntingCustomStatusGet.operation';

import {
	execute as executeovhPabxHuntingEventTokenDelete,
	description as descriptionovhPabxHuntingEventTokenDelete,
} from './ovhPabx/ovhPabxHuntingEventTokenDelete.operation';

import {
	execute as executeovhPabxHuntingEventTokenListGet,
	description as descriptionovhPabxHuntingEventTokenListGet,
} from './ovhPabx/ovhPabxHuntingEventTokenListGet.operation';

import {
	execute as executeovhPabxHuntingEventTokenPost,
	description as descriptionovhPabxHuntingEventTokenPost,
} from './ovhPabx/ovhPabxHuntingEventTokenPost.operation';

import {
	execute as executeovhPabxHuntingQueueListGet,
	description as descriptionovhPabxHuntingQueueListGet,
} from './ovhPabx/ovhPabxHuntingQueueListGet.operation';

import {
	execute as executeovhPabxHuntingQueuePost,
	description as descriptionovhPabxHuntingQueuePost,
} from './ovhPabx/ovhPabxHuntingQueuePost.operation';

import {
	execute as executeovhPabxHuntingQueueDelete,
	description as descriptionovhPabxHuntingQueueDelete,
} from './ovhPabx/ovhPabxHuntingQueueDelete.operation';

import {
	execute as executeovhPabxHuntingQueueGet,
	description as descriptionovhPabxHuntingQueueGet,
} from './ovhPabx/ovhPabxHuntingQueueGet.operation';

import {
	execute as executeovhPabxHuntingQueuePut,
	description as descriptionovhPabxHuntingQueuePut,
} from './ovhPabx/ovhPabxHuntingQueuePut.operation';

import {
	execute as executeovhPabxHuntingQueueAgentListGet,
	description as descriptionovhPabxHuntingQueueAgentListGet,
} from './ovhPabx/ovhPabxHuntingQueueAgentListGet.operation';

import {
	execute as executeovhPabxHuntingQueueAgentPost,
	description as descriptionovhPabxHuntingQueueAgentPost,
} from './ovhPabx/ovhPabxHuntingQueueAgentPost.operation';

import {
	execute as executeovhPabxHuntingQueueAgentDelete,
	description as descriptionovhPabxHuntingQueueAgentDelete,
} from './ovhPabx/ovhPabxHuntingQueueAgentDelete.operation';

import {
	execute as executeovhPabxHuntingQueueAgentGet,
	description as descriptionovhPabxHuntingQueueAgentGet,
} from './ovhPabx/ovhPabxHuntingQueueAgentGet.operation';

import {
	execute as executeovhPabxHuntingQueueAgentPut,
	description as descriptionovhPabxHuntingQueueAgentPut,
} from './ovhPabx/ovhPabxHuntingQueueAgentPut.operation';

import {
	execute as executeovhPabxHuntingQueueAgentLiveStatusListGet,
	description as descriptionovhPabxHuntingQueueAgentLiveStatusListGet,
} from './ovhPabx/ovhPabxHuntingQueueAgentLiveStatusListGet.operation';

import {
	execute as executeovhPabxHuntingQueueLiveCallsListGet,
	description as descriptionovhPabxHuntingQueueLiveCallsListGet,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsListGet.operation';

import {
	execute as executeovhPabxHuntingQueueLiveCallsGet,
	description as descriptionovhPabxHuntingQueueLiveCallsGet,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsGet.operation';

import {
	execute as executeovhPabxHuntingQueueLiveCallsEavesdropPost,
	description as descriptionovhPabxHuntingQueueLiveCallsEavesdropPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsEavesdropPost.operation';

import {
	execute as executeovhPabxHuntingQueueLiveCallsHangupPost,
	description as descriptionovhPabxHuntingQueueLiveCallsHangupPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsHangupPost.operation';

import {
	execute as executeovhPabxHuntingQueueLiveCallsHoldPost,
	description as descriptionovhPabxHuntingQueueLiveCallsHoldPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsHoldPost.operation';

import {
	execute as executeovhPabxHuntingQueueLiveCallsInterceptPost,
	description as descriptionovhPabxHuntingQueueLiveCallsInterceptPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsInterceptPost.operation';

import {
	execute as executeovhPabxHuntingQueueLiveCallsTransferPost,
	description as descriptionovhPabxHuntingQueueLiveCallsTransferPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsTransferPost.operation';

import {
	execute as executeovhPabxHuntingQueueLiveCallsWhisperPost,
	description as descriptionovhPabxHuntingQueueLiveCallsWhisperPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsWhisperPost.operation';

import {
	execute as executeovhPabxHuntingQueueLiveStatisticsListGet,
	description as descriptionovhPabxHuntingQueueLiveStatisticsListGet,
} from './ovhPabx/ovhPabxHuntingQueueLiveStatisticsListGet.operation';

import {
	execute as executeovhPabxMenuListGet,
	description as descriptionovhPabxMenuListGet,
} from './ovhPabx/ovhPabxMenuListGet.operation';

import {
	execute as executeovhPabxMenuPost,
	description as descriptionovhPabxMenuPost,
} from './ovhPabx/ovhPabxMenuPost.operation';

import {
	execute as executeovhPabxMenuDelete,
	description as descriptionovhPabxMenuDelete,
} from './ovhPabx/ovhPabxMenuDelete.operation';

import {
	execute as executeovhPabxMenuGet,
	description as descriptionovhPabxMenuGet,
} from './ovhPabx/ovhPabxMenuGet.operation';

import {
	execute as executeovhPabxMenuPut,
	description as descriptionovhPabxMenuPut,
} from './ovhPabx/ovhPabxMenuPut.operation';

import {
	execute as executeovhPabxMenuEntryListGet,
	description as descriptionovhPabxMenuEntryListGet,
} from './ovhPabx/ovhPabxMenuEntryListGet.operation';

import {
	execute as executeovhPabxMenuEntryPost,
	description as descriptionovhPabxMenuEntryPost,
} from './ovhPabx/ovhPabxMenuEntryPost.operation';

import {
	execute as executeovhPabxMenuEntryDelete,
	description as descriptionovhPabxMenuEntryDelete,
} from './ovhPabx/ovhPabxMenuEntryDelete.operation';

import {
	execute as executeovhPabxMenuEntryGet,
	description as descriptionovhPabxMenuEntryGet,
} from './ovhPabx/ovhPabxMenuEntryGet.operation';

import {
	execute as executeovhPabxMenuEntryPut,
	description as descriptionovhPabxMenuEntryPut,
} from './ovhPabx/ovhPabxMenuEntryPut.operation';

import {
	execute as executeovhPabxRecordsListGet,
	description as descriptionovhPabxRecordsListGet,
} from './ovhPabx/ovhPabxRecordsListGet.operation';

import {
	execute as executeovhPabxRecordsDelete,
	description as descriptionovhPabxRecordsDelete,
} from './ovhPabx/ovhPabxRecordsDelete.operation';

import {
	execute as executeovhPabxRecordsGet,
	description as descriptionovhPabxRecordsGet,
} from './ovhPabx/ovhPabxRecordsGet.operation';

import {
	execute as executeovhPabxSoundListGet,
	description as descriptionovhPabxSoundListGet,
} from './ovhPabx/ovhPabxSoundListGet.operation';

import {
	execute as executeovhPabxSoundDelete,
	description as descriptionovhPabxSoundDelete,
} from './ovhPabx/ovhPabxSoundDelete.operation';

import {
	execute as executeovhPabxSoundGet,
	description as descriptionovhPabxSoundGet,
} from './ovhPabx/ovhPabxSoundGet.operation';

import {
	execute as executeovhPabxSoundUploadPost,
	description as descriptionovhPabxSoundUploadPost,
} from './ovhPabx/ovhPabxSoundUploadPost.operation';

import {
	execute as executeovhPabxTtsListGet,
	description as descriptionovhPabxTtsListGet,
} from './ovhPabx/ovhPabxTtsListGet.operation';

import {
	execute as executeovhPabxTtsPost,
	description as descriptionovhPabxTtsPost,
} from './ovhPabx/ovhPabxTtsPost.operation';

import {
	execute as executeovhPabxTtsDelete,
	description as descriptionovhPabxTtsDelete,
} from './ovhPabx/ovhPabxTtsDelete.operation';

import {
	execute as executeovhPabxTtsGet,
	description as descriptionovhPabxTtsGet,
} from './ovhPabx/ovhPabxTtsGet.operation';

import {
	execute as executeovhPabxTtsPut,
	description as descriptionovhPabxTtsPut,
} from './ovhPabx/ovhPabxTtsPut.operation';

import {
	execute as executephonebookListGet,
	description as descriptionphonebookListGet,
} from './phonebook/phonebookListGet.operation';

import {
	execute as executephonebookPost,
	description as descriptionphonebookPost,
} from './phonebook/phonebookPost.operation';

import {
	execute as executephonebookDelete,
	description as descriptionphonebookDelete,
} from './phonebook/phonebookDelete.operation';

import {
	execute as executephonebookGet,
	description as descriptionphonebookGet,
} from './phonebook/phonebookGet.operation';

import {
	execute as executephonebookPut,
	description as descriptionphonebookPut,
} from './phonebook/phonebookPut.operation';

import {
	execute as executephonebookExportListGet,
	description as descriptionphonebookExportListGet,
} from './phonebook/phonebookExportListGet.operation';

import {
	execute as executephonebookImportPost,
	description as descriptionphonebookImportPost,
} from './phonebook/phonebookImportPost.operation';

import {
	execute as executephonebookPhonebookContactListGet,
	description as descriptionphonebookPhonebookContactListGet,
} from './phonebook/phonebookPhonebookContactListGet.operation';

import {
	execute as executephonebookPhonebookContactPost,
	description as descriptionphonebookPhonebookContactPost,
} from './phonebook/phonebookPhonebookContactPost.operation';

import {
	execute as executephonebookPhonebookContactDelete,
	description as descriptionphonebookPhonebookContactDelete,
} from './phonebook/phonebookPhonebookContactDelete.operation';

import {
	execute as executephonebookPhonebookContactGet,
	description as descriptionphonebookPhonebookContactGet,
} from './phonebook/phonebookPhonebookContactGet.operation';

import {
	execute as executephonebookPhonebookContactPut,
	description as descriptionphonebookPhonebookContactPut,
} from './phonebook/phonebookPhonebookContactPut.operation';

import {
	execute as executeportabilityDetailGet,
	description as descriptionportabilityDetailGet,
} from './portability/portabilityDetailGet.operation';

import {
	execute as executeportabilityCanBeCancelledListGet,
	description as descriptionportabilityCanBeCancelledListGet,
} from './portability/portabilityCanBeCancelledListGet.operation';

import {
	execute as executeportabilityCanBeExecutedListGet,
	description as descriptionportabilityCanBeExecutedListGet,
} from './portability/portabilityCanBeExecutedListGet.operation';

import {
	execute as executeportabilityCancelPost,
	description as descriptionportabilityCancelPost,
} from './portability/portabilityCancelPost.operation';

import {
	execute as executeportabilityChangeDatePost,
	description as descriptionportabilityChangeDatePost,
} from './portability/portabilityChangeDatePost.operation';

import {
	execute as executeportabilityDateCanBeChangedListGet,
	description as descriptionportabilityDateCanBeChangedListGet,
} from './portability/portabilityDateCanBeChangedListGet.operation';

import {
	execute as executeportabilityDocumentListGet,
	description as descriptionportabilityDocumentListGet,
} from './portability/portabilityDocumentListGet.operation';

import {
	execute as executeportabilityDocumentPost,
	description as descriptionportabilityDocumentPost,
} from './portability/portabilityDocumentPost.operation';

import {
	execute as executeportabilityDocumentDelete,
	description as descriptionportabilityDocumentDelete,
} from './portability/portabilityDocumentDelete.operation';

import {
	execute as executeportabilityDocumentGet,
	description as descriptionportabilityDocumentGet,
} from './portability/portabilityDocumentGet.operation';

import {
	execute as executeportabilityDocumentPut,
	description as descriptionportabilityDocumentPut,
} from './portability/portabilityDocumentPut.operation';

import {
	execute as executeportabilityExecutePost,
	description as descriptionportabilityExecutePost,
} from './portability/portabilityExecutePost.operation';

import {
	execute as executeportabilityRelaunchListGet,
	description as descriptionportabilityRelaunchListGet,
} from './portability/portabilityRelaunchListGet.operation';

import {
	execute as executeportabilityRelaunchPost,
	description as descriptionportabilityRelaunchPost,
} from './portability/portabilityRelaunchPost.operation';

import {
	execute as executeportabilityStatusListGet,
	description as descriptionportabilityStatusListGet,
} from './portability/portabilityStatusListGet.operation';

import {
	execute as executeredirectListGet,
	description as descriptionredirectListGet,
} from './redirect/redirectListGet.operation';

import {
	execute as executeredirectGet,
	description as descriptionredirectGet,
} from './redirect/redirectGet.operation';

import {
	execute as executeredirectPut,
	description as descriptionredirectPut,
} from './redirect/redirectPut.operation';

import {
	execute as executeredirectChangeDestinationPost,
	description as descriptionredirectChangeDestinationPost,
} from './redirect/redirectChangeDestinationPost.operation';

import {
	execute as executersvaListGet,
	description as descriptionrsvaListGet,
} from './rsva/rsvaListGet.operation';

import {
	execute as executersvaGet,
	description as descriptionrsvaGet,
} from './rsva/rsvaGet.operation';

import {
	execute as executersvaPut,
	description as descriptionrsvaPut,
} from './rsva/rsvaPut.operation';

import {
	execute as executersvaAllowedRateCodesListGet,
	description as descriptionrsvaAllowedRateCodesListGet,
} from './rsva/rsvaAllowedRateCodesListGet.operation';

import {
	execute as executersvaCancelScheduledRateCodePost,
	description as descriptionrsvaCancelScheduledRateCodePost,
} from './rsva/rsvaCancelScheduledRateCodePost.operation';

import {
	execute as executersvaCurrentRateCodeListGet,
	description as descriptionrsvaCurrentRateCodeListGet,
} from './rsva/rsvaCurrentRateCodeListGet.operation';

import {
	execute as executersvaScheduledRateCodeListGet,
	description as descriptionrsvaScheduledRateCodeListGet,
} from './rsva/rsvaScheduledRateCodeListGet.operation';

import {
	execute as executersvaScheduleRateCodePost,
	description as descriptionrsvaScheduleRateCodePost,
} from './rsva/rsvaScheduleRateCodePost.operation';

import {
	execute as executeschedulerListGet,
	description as descriptionschedulerListGet,
} from './scheduler/schedulerListGet.operation';

import {
	execute as executeschedulerGet,
	description as descriptionschedulerGet,
} from './scheduler/schedulerGet.operation';

import {
	execute as executeschedulerPut,
	description as descriptionschedulerPut,
} from './scheduler/schedulerPut.operation';

import {
	execute as executeschedulerEventsListGet,
	description as descriptionschedulerEventsListGet,
} from './scheduler/schedulerEventsListGet.operation';

import {
	execute as executeschedulerEventsPost,
	description as descriptionschedulerEventsPost,
} from './scheduler/schedulerEventsPost.operation';

import {
	execute as executeschedulerEventsDelete,
	description as descriptionschedulerEventsDelete,
} from './scheduler/schedulerEventsDelete.operation';

import {
	execute as executeschedulerEventsGet,
	description as descriptionschedulerEventsGet,
} from './scheduler/schedulerEventsGet.operation';

import {
	execute as executeschedulerEventsPut,
	description as descriptionschedulerEventsPut,
} from './scheduler/schedulerEventsPut.operation';

import {
	execute as executeschedulerImportIcsCalendarPost,
	description as descriptionschedulerImportIcsCalendarPost,
} from './scheduler/schedulerImportIcsCalendarPost.operation';

import {
	execute as executescreenListGet,
	description as descriptionscreenListGet,
} from './screen/screenListGet.operation';

import {
	execute as executescreenGet,
	description as descriptionscreenGet,
} from './screen/screenGet.operation';

import {
	execute as executescreenPut,
	description as descriptionscreenPut,
} from './screen/screenPut.operation';

import {
	execute as executescreenScreenListsListGet,
	description as descriptionscreenScreenListsListGet,
} from './screen/screenScreenListsListGet.operation';

import {
	execute as executescreenScreenListsPost,
	description as descriptionscreenScreenListsPost,
} from './screen/screenScreenListsPost.operation';

import {
	execute as executescreenScreenListsDelete,
	description as descriptionscreenScreenListsDelete,
} from './screen/screenScreenListsDelete.operation';

import {
	execute as executescreenScreenListsGet,
	description as descriptionscreenScreenListsGet,
} from './screen/screenScreenListsGet.operation';

import {
	execute as executeserviceListGet,
	description as descriptionserviceListGet,
} from './service/serviceListGet.operation';

import {
	execute as executeserviceDelete,
	description as descriptionserviceDelete,
} from './service/serviceDelete.operation';

import {
	execute as executeserviceGet,
	description as descriptionserviceGet,
} from './service/serviceGet.operation';

import {
	execute as executeservicePut,
	description as descriptionservicePut,
} from './service/servicePut.operation';

import {
	execute as executeserviceCancelTerminationPost,
	description as descriptionserviceCancelTerminationPost,
} from './service/serviceCancelTerminationPost.operation';

import {
	execute as executeserviceChangeOfBillingAccountPost,
	description as descriptionserviceChangeOfBillingAccountPost,
} from './service/serviceChangeOfBillingAccountPost.operation';

import {
	execute as executeserviceDiagnosticReportsListGet,
	description as descriptionserviceDiagnosticReportsListGet,
} from './service/serviceDiagnosticReportsListGet.operation';

import {
	execute as executeserviceDirectoryListGet,
	description as descriptionserviceDirectoryListGet,
} from './service/serviceDirectoryListGet.operation';

import {
	execute as executeserviceDirectoryPut,
	description as descriptionserviceDirectoryPut,
} from './service/serviceDirectoryPut.operation';

import {
	execute as executeserviceDirectoryFetchEntrepriseInformationsPost,
	description as descriptionserviceDirectoryFetchEntrepriseInformationsPost,
} from './service/serviceDirectoryFetchEntrepriseInformationsPost.operation';

import {
	execute as executeserviceDirectoryGetDirectoryServiceCodeListGet,
	description as descriptionserviceDirectoryGetDirectoryServiceCodeListGet,
} from './service/serviceDirectoryGetDirectoryServiceCodeListGet.operation';

import {
	execute as executeserviceDirectoryGetWayTypesListGet,
	description as descriptionserviceDirectoryGetWayTypesListGet,
} from './service/serviceDirectoryGetWayTypesListGet.operation';

import {
	execute as executeserviceEventTokenDelete,
	description as descriptionserviceEventTokenDelete,
} from './service/serviceEventTokenDelete.operation';

import {
	execute as executeserviceEventTokenListGet,
	description as descriptionserviceEventTokenListGet,
} from './service/serviceEventTokenListGet.operation';

import {
	execute as executeserviceEventTokenPost,
	description as descriptionserviceEventTokenPost,
} from './service/serviceEventTokenPost.operation';

import {
	execute as executeserviceFaxConsumptionListGet,
	description as descriptionserviceFaxConsumptionListGet,
} from './service/serviceFaxConsumptionListGet.operation';

import {
	execute as executeserviceFaxConsumptionGet,
	description as descriptionserviceFaxConsumptionGet,
} from './service/serviceFaxConsumptionGet.operation';

import {
	execute as executeserviceOfferChangeDelete,
	description as descriptionserviceOfferChangeDelete,
} from './service/serviceOfferChangeDelete.operation';

import {
	execute as executeserviceOfferChangeListGet,
	description as descriptionserviceOfferChangeListGet,
} from './service/serviceOfferChangeListGet.operation';

import {
	execute as executeserviceOfferChangePost,
	description as descriptionserviceOfferChangePost,
} from './service/serviceOfferChangePost.operation';

import {
	execute as executeserviceOfferChangesListGet,
	description as descriptionserviceOfferChangesListGet,
} from './service/serviceOfferChangesListGet.operation';

import {
	execute as executeserviceOfferTaskListGet,
	description as descriptionserviceOfferTaskListGet,
} from './service/serviceOfferTaskListGet.operation';

import {
	execute as executeserviceOfferTaskGet,
	description as descriptionserviceOfferTaskGet,
} from './service/serviceOfferTaskGet.operation';

import {
	execute as executeserviceOfferTaskPut,
	description as descriptionserviceOfferTaskPut,
} from './service/serviceOfferTaskPut.operation';

import {
	execute as executeservicePreviousVoiceConsumptionListGet,
	description as descriptionservicePreviousVoiceConsumptionListGet,
} from './service/servicePreviousVoiceConsumptionListGet.operation';

import {
	execute as executeservicePreviousVoiceConsumptionGet,
	description as descriptionservicePreviousVoiceConsumptionGet,
} from './service/servicePreviousVoiceConsumptionGet.operation';

import {
	execute as executeserviceRepaymentConsumptionListGet,
	description as descriptionserviceRepaymentConsumptionListGet,
} from './service/serviceRepaymentConsumptionListGet.operation';

import {
	execute as executeserviceRepaymentConsumptionGet,
	description as descriptionserviceRepaymentConsumptionGet,
} from './service/serviceRepaymentConsumptionGet.operation';

import {
	execute as executeserviceTaskListGet,
	description as descriptionserviceTaskListGet,
} from './service/serviceTaskListGet.operation';

import {
	execute as executeserviceTaskGet,
	description as descriptionserviceTaskGet,
} from './service/serviceTaskGet.operation';

import {
	execute as executeserviceVoiceConsumptionListGet,
	description as descriptionserviceVoiceConsumptionListGet,
} from './service/serviceVoiceConsumptionListGet.operation';

import {
	execute as executeserviceVoiceConsumptionGet,
	description as descriptionserviceVoiceConsumptionGet,
} from './service/serviceVoiceConsumptionGet.operation';

import {
	execute as executesoftphoneLogoDelete,
	description as descriptionsoftphoneLogoDelete,
} from './softphone/softphoneLogoDelete.operation';

import {
	execute as executesoftphoneLogoListGet,
	description as descriptionsoftphoneLogoListGet,
} from './softphone/softphoneLogoListGet.operation';

import {
	execute as executesoftphoneLogoPut,
	description as descriptionsoftphoneLogoPut,
} from './softphone/softphoneLogoPut.operation';

import {
	execute as executesoftphoneThemeListGet,
	description as descriptionsoftphoneThemeListGet,
} from './softphone/softphoneThemeListGet.operation';

import {
	execute as executesoftphoneThemePut,
	description as descriptionsoftphoneThemePut,
} from './softphone/softphoneThemePut.operation';

import {
	execute as executetimeConditionListGet,
	description as descriptiontimeConditionListGet,
} from './timeCondition/timeConditionListGet.operation';

import {
	execute as executetimeConditionGet,
	description as descriptiontimeConditionGet,
} from './timeCondition/timeConditionGet.operation';

import {
	execute as executetimeConditionConditionListGet,
	description as descriptiontimeConditionConditionListGet,
} from './timeCondition/timeConditionConditionListGet.operation';

import {
	execute as executetimeConditionConditionPost,
	description as descriptiontimeConditionConditionPost,
} from './timeCondition/timeConditionConditionPost.operation';

import {
	execute as executetimeConditionConditionDelete,
	description as descriptiontimeConditionConditionDelete,
} from './timeCondition/timeConditionConditionDelete.operation';

import {
	execute as executetimeConditionConditionGet,
	description as descriptiontimeConditionConditionGet,
} from './timeCondition/timeConditionConditionGet.operation';

import {
	execute as executetimeConditionConditionPut,
	description as descriptiontimeConditionConditionPut,
} from './timeCondition/timeConditionConditionPut.operation';

import {
	execute as executetimeConditionOptionsListGet,
	description as descriptiontimeConditionOptionsListGet,
} from './timeCondition/timeConditionOptionsListGet.operation';

import {
	execute as executetimeConditionOptionsPut,
	description as descriptiontimeConditionOptionsPut,
} from './timeCondition/timeConditionOptionsPut.operation';

import {
	execute as executetrunkListGet,
	description as descriptiontrunkListGet,
} from './trunk/trunkListGet.operation';

import {
	execute as executetrunkGet,
	description as descriptiontrunkGet,
} from './trunk/trunkGet.operation';

import {
	execute as executetrunkChannelsPacksRepartitionListGet,
	description as descriptiontrunkChannelsPacksRepartitionListGet,
} from './trunk/trunkChannelsPacksRepartitionListGet.operation';

import {
	execute as executetrunkExternalDisplayedNumberListGet,
	description as descriptiontrunkExternalDisplayedNumberListGet,
} from './trunk/trunkExternalDisplayedNumberListGet.operation';

import {
	execute as executetrunkExternalDisplayedNumberPost,
	description as descriptiontrunkExternalDisplayedNumberPost,
} from './trunk/trunkExternalDisplayedNumberPost.operation';

import {
	execute as executetrunkExternalDisplayedNumberDelete,
	description as descriptiontrunkExternalDisplayedNumberDelete,
} from './trunk/trunkExternalDisplayedNumberDelete.operation';

import {
	execute as executetrunkExternalDisplayedNumberGet,
	description as descriptiontrunkExternalDisplayedNumberGet,
} from './trunk/trunkExternalDisplayedNumberGet.operation';

import {
	execute as executetrunkExternalDisplayedNumberValidatePost,
	description as descriptiontrunkExternalDisplayedNumberValidatePost,
} from './trunk/trunkExternalDisplayedNumberValidatePost.operation';

import {
	execute as executevoicemailListGet,
	description as descriptionvoicemailListGet,
} from './voicemail/voicemailListGet.operation';

import {
	execute as executevoicemailGet,
	description as descriptionvoicemailGet,
} from './voicemail/voicemailGet.operation';

import {
	execute as executevoicemailPut,
	description as descriptionvoicemailPut,
} from './voicemail/voicemailPut.operation';

import {
	execute as executevoicemailDirectoriesListGet,
	description as descriptionvoicemailDirectoriesListGet,
} from './voicemail/voicemailDirectoriesListGet.operation';

import {
	execute as executevoicemailDirectoriesDelete,
	description as descriptionvoicemailDirectoriesDelete,
} from './voicemail/voicemailDirectoriesDelete.operation';

import {
	execute as executevoicemailDirectoriesGet,
	description as descriptionvoicemailDirectoriesGet,
} from './voicemail/voicemailDirectoriesGet.operation';

import {
	execute as executevoicemailDirectoriesDownloadListGet,
	description as descriptionvoicemailDirectoriesDownloadListGet,
} from './voicemail/voicemailDirectoriesDownloadListGet.operation';

import {
	execute as executevoicemailDirectoriesMovePost,
	description as descriptionvoicemailDirectoriesMovePost,
} from './voicemail/voicemailDirectoriesMovePost.operation';

import {
	execute as executevoicemailDirectoriesTranscriptListGet,
	description as descriptionvoicemailDirectoriesTranscriptListGet,
} from './voicemail/voicemailDirectoriesTranscriptListGet.operation';

import {
	execute as executevoicemailGreetingsListGet,
	description as descriptionvoicemailGreetingsListGet,
} from './voicemail/voicemailGreetingsListGet.operation';

import {
	execute as executevoicemailGreetingsPost,
	description as descriptionvoicemailGreetingsPost,
} from './voicemail/voicemailGreetingsPost.operation';

import {
	execute as executevoicemailGreetingsDelete,
	description as descriptionvoicemailGreetingsDelete,
} from './voicemail/voicemailGreetingsDelete.operation';

import {
	execute as executevoicemailGreetingsGet,
	description as descriptionvoicemailGreetingsGet,
} from './voicemail/voicemailGreetingsGet.operation';

import {
	execute as executevoicemailGreetingsDownloadListGet,
	description as descriptionvoicemailGreetingsDownloadListGet,
} from './voicemail/voicemailGreetingsDownloadListGet.operation';

import {
	execute as executevoicemailGreetingsMovePost,
	description as descriptionvoicemailGreetingsMovePost,
} from './voicemail/voicemailGreetingsMovePost.operation';

import {
	execute as executevoicemailMigrateOnNewVersionPost,
	description as descriptionvoicemailMigrateOnNewVersionPost,
} from './voicemail/voicemailMigrateOnNewVersionPost.operation';

import {
	execute as executevoicemailSettingsListGet,
	description as descriptionvoicemailSettingsListGet,
} from './voicemail/voicemailSettingsListGet.operation';

import {
	execute as executevoicemailSettingsPut,
	description as descriptionvoicemailSettingsPut,
} from './voicemail/voicemailSettingsPut.operation';

import {
	execute as executevoicemailSettingsChangePasswordPost,
	description as descriptionvoicemailSettingsChangePasswordPost,
} from './voicemail/voicemailSettingsChangePasswordPost.operation';

import {
	execute as executevoicemailSettingsChangeRoutingPost,
	description as descriptionvoicemailSettingsChangeRoutingPost,
} from './voicemail/voicemailSettingsChangeRoutingPost.operation';

import {
	execute as executevoicemailSettingsRoutingListGet,
	description as descriptionvoicemailSettingsRoutingListGet,
} from './voicemail/voicemailSettingsRoutingListGet.operation';

import {
	execute as executevoicemailSettingsVoicemailNumbersListGet,
	description as descriptionvoicemailSettingsVoicemailNumbersListGet,
} from './voicemail/voicemailSettingsVoicemailNumbersListGet.operation';

import {
	execute as executenumberDetailedZonesListGet,
	description as descriptionnumberDetailedZonesListGet,
} from './number/numberDetailedZonesListGet.operation';
import {
	execute as executenumberRangesListGet,
	description as descriptionnumberRangesListGet,
} from './number/numberRangesListGet.operation';
import {
	execute as executenumberSpecificNumbersListGet,
	description as descriptionnumberSpecificNumbersListGet,
} from './number/numberSpecificNumbersListGet.operation';
import {
	execute as executenumberZonesListGet,
	description as descriptionnumberZonesListGet,
} from './number/numberZonesListGet.operation';
import {
	execute as executeprocedureListGet,
	description as descriptionprocedureListGet,
} from './procedure/procedureListGet.operation';
import {
	execute as executeprocedurePost,
	description as descriptionprocedurePost,
} from './procedure/procedurePost.operation';
import {
	execute as executeprocedureGet,
	description as descriptionprocedureGet,
} from './procedure/procedureGet.operation';
import {
	execute as executeprocedureCancelPost,
	description as descriptionprocedureCancelPost,
} from './procedure/procedureCancelPost.operation';
import {
	execute as executeprocedureRequiredListGet,
	description as descriptionprocedureRequiredListGet,
} from './procedure/procedureRequiredListGet.operation';
import {
	execute as executeresellerPanelGeneratePasswordPost,
	description as descriptionresellerPanelGeneratePasswordPost,
} from './resellerPanel/resellerPanelGeneratePasswordPost.operation';
import {
	execute as executeresellerPanelStatusListGet,
	description as descriptionresellerPanelStatusListGet,
} from './resellerPanel/resellerPanelStatusListGet.operation';
import {
	execute as executesoftphoneStoreLinksListGet,
	description as descriptionsoftphoneStoreLinksListGet,
} from './softphone/softphoneStoreLinksListGet.operation';
import {
	execute as executesoftphoneThemesListGet,
	description as descriptionsoftphoneThemesListGet,
} from './softphone/softphoneThemesListGet.operation';
import {
	execute as executesoftphoneThemesGet,
	description as descriptionsoftphoneThemesGet,
} from './softphone/softphoneThemesGet.operation';
import {
	execute as executesoundsListGet,
	description as descriptionsoundsListGet,
} from './sounds/soundsListGet.operation';
import {
	execute as executesoundsPost,
	description as descriptionsoundsPost,
} from './sounds/soundsPost.operation';
import {
	execute as executesoundsDelete,
	description as descriptionsoundsDelete,
} from './sounds/soundsDelete.operation';
import {
	execute as executesoundsGet,
	description as descriptionsoundsGet,
} from './sounds/soundsGet.operation';
import {
	execute as executesoundsPut,
	description as descriptionsoundsPut,
} from './sounds/soundsPut.operation';
import {
	execute as executespareListGet,
	description as descriptionspareListGet,
} from './spare/spareListGet.operation';
import {
	execute as executespareDelete,
	description as descriptionspareDelete,
} from './spare/spareDelete.operation';
import {
	execute as executespareGet,
	description as descriptionspareGet,
} from './spare/spareGet.operation';
import {
	execute as executespareCompatibleReplacementListGet,
	description as descriptionspareCompatibleReplacementListGet,
} from './spare/spareCompatibleReplacementListGet.operation';
import {
	execute as executespareReplacePost,
	description as descriptionspareReplacePost,
} from './spare/spareReplacePost.operation';
import {
	execute as executespareServiceInfosListGet,
	description as descriptionspareServiceInfosListGet,
} from './spare/spareServiceInfosListGet.operation';
import {
	execute as executespareServiceInfosPut,
	description as descriptionspareServiceInfosPut,
} from './spare/spareServiceInfosPut.operation';
import {
	execute as executespareBrandsListGet,
	description as descriptionspareBrandsListGet,
} from './spare/spareBrandsListGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'telephonyOperation',
			type: 'options',
			noDataExpression: true,
			options: [

{
					name: 'Abbreviated Number Create',
					value: 'abbreviatedNumberPost',
					action: 'Create a new abbreviated number for the billing account',
				},
{
					name: 'Abbreviated Number Delete',
					value: 'abbreviatedNumberDelete',
					action: 'Delete the given abbreviated number',
				},
{
					name: 'Abbreviated Number Get',
					value: 'abbreviatedNumberGet',
					action: 'Get this object properties',
				},
{
					name: 'Abbreviated Number List',
					value: 'abbreviatedNumberListGet',
					action: 'Abbreviated numbers for the billing account',
				},
{
					name: 'Abbreviated Number Update',
					value: 'abbreviatedNumberPut',
					action: 'Alter this object properties',
				},
{
					name: 'Billing Account Site',
					value: 'billingAccountSitePost',
					action: 'Used to overwrite current billing account feature by the billing account site',
				},
{
					name: 'Can Transfer Security Deposit',
					value: 'canTransferSecurityDepositPost',
					action: 'Check if security deposit transfer is possible between two billing accounts',
				},
{
					name: 'Cancel Termination',
					value: 'cancelTerminationPost',
					action: 'Cancel the billing account termination',
				},
{
					name: 'Carrier Sip Cdrs List',
					value: 'carrierSipCdrsListGet',
					action: 'Get the Call Detail Records of your Carrier SIP service',
				},
{
					name: 'Carrier Sip Cluster Details List',
					value: 'carrierSipClusterDetailsListGet',
					action: 'Get details about the carrier sip cluster of your stack',
				},
{
					name: 'Carrier Sip Endpoints Get',
					value: 'carrierSipEndpointsGet',
					action: 'Get this object properties',
				},
{
					name: 'Carrier Sip Endpoints List',
					value: 'carrierSipEndpointsListGet',
					action:
						'List of your remote sip endpoints (ips, ports, protocol) of your carrier sip trunk service',
				},
{
					name: 'Carrier Sip Get',
					value: 'carrierSipGet',
					action: 'Get this object properties',
				},
{
					name: 'Carrier Sip List',
					value: 'carrierSipListGet',
					action: 'Carrier SIP trunks associated with this billing account',
				},
{
					name: 'Carrier Sip Settings List',
					value: 'carrierSipSettingsListGet',
					action: 'Get this object properties',
				},
{
					name: 'Carrier Sip Settings Update',
					value: 'carrierSipSettingsPut',
					action: 'Alter this object properties',
				},
{
					name: 'Carrier Sip Vno Get',
					value: 'carrierSipVnoGet',
					action: 'Get this object properties',
				},
{
					name: 'Carrier Sip Vno List',
					value: 'carrierSipVnoListGet',
					action: 'List of your VNO mandates',
				},
{
					name: 'Carrier Sip Vno Ranges Get',
					value: 'carrierSipVnoRangesGet',
					action: 'Get this object properties',
				},
{
					name: 'Carrier Sip Vno Ranges List',
					value: 'carrierSipVnoRangesListGet',
					action: 'Number ranges associated with you mandate.',
				},
{
					name: 'Carrier Sip Vno Ranges Update',
					value: 'carrierSipVnoRangesPut',
					action: 'Alter this object properties',
				},
{
					name: 'Change Billing Contact',
					value: 'changeContactPost',
					action: 'Launch a contact change procedure',
				},
{
					name: 'Change Contact',
					value: 'aliasChangeContactPost',
					action: 'Launch a contact change procedure for an alias',
				},
{
					name: 'Conference',
					value: 'conferenceListGet',
					action: 'Execute the GET on conference',
				},
{
					name: 'Conference (2)',
					value: 'conferenceGet',
					action: 'Execute the GET on conference/{x}',
				},
{
					name: 'Conference Announce Upload',
					value: 'conferenceAnnounceUploadPost',
					action: 'Execute the POST on conference/{x}/announceUpload',
				},
{
					name: 'Conference Histories',
					value: 'conferenceHistoriesListGet',
					action: 'Execute the GET on conference/{x}/histories',
				},
{
					name: 'Conference Histories (2)',
					value: 'conferenceHistoriesGet',
					action: 'Execute the GET on conference/{x}/histories/{x}',
				},
{
					name: 'Conference Informations',
					value: 'conferenceInformationsListGet',
					action: 'Execute the GET on conference/{x}/informations',
				},
{
					name: 'Conference Lock',
					value: 'conferenceLockPost',
					action: 'Execute the POST on conference/{x}/lock',
				},
{
					name: 'Conference Participants',
					value: 'conferenceParticipantsListGet',
					action: 'Execute the GET on conference/{x}/participants',
				},
{
					name: 'Conference Participants (2)',
					value: 'conferenceParticipantsGet',
					action: 'Execute the GET on conference/{x}/participants/{x}',
				},
{
					name: 'Conference Participants Deaf',
					value: 'conferenceParticipantsDeafPost',
					action: 'Execute the POST on conference/{x}/participants/{x}/deaf',
				},
{
					name: 'Conference Participants Energy',
					value: 'conferenceParticipantsEnergyPost',
					action: 'Execute the POST on conference/{x}/participants/{x}/energy',
				},
{
					name: 'Conference Participants Kick',
					value: 'conferenceParticipantsKickPost',
					action: 'Execute the POST on conference/{x}/participants/{x}/kick',
				},
{
					name: 'Conference Participants Mute',
					value: 'conferenceParticipantsMutePost',
					action: 'Execute the POST on conference/{x}/participants/{x}/mute',
				},
{
					name: 'Conference Participants Undeaf',
					value: 'conferenceParticipantsUndeafPost',
					action: 'Execute the POST on conference/{x}/participants/{x}/undeaf',
				},
{
					name: 'Conference Participants Unmute',
					value: 'conferenceParticipantsUnmutePost',
					action: 'Execute the POST on conference/{x}/participants/{x}/unmute',
				},
{
					name: 'Conference Rooms',
					value: 'conferenceRoomsListGet',
					action: 'Execute the GET on conference/{x}/rooms',
				},
{
					name: 'Conference Rooms (2)',
					value: 'conferenceRoomsPost',
					action: 'Execute the POST on conference/{x}/rooms',
				},
{
					name: 'Conference Rooms (3)',
					value: 'conferenceRoomsGet',
					action: 'Execute the GET on conference/{x}/rooms/{x}',
				},
{
					name: 'Conference Rooms (4)',
					value: 'conferenceRoomsPut',
					action: 'Execute the PUT on conference/{x}/rooms/{x}',
				},
{
					name: 'Conference Rooms Histories',
					value: 'conferenceRoomsHistoriesListGet',
					action: 'Execute the GET on conference/{x}/rooms/{x}/histories',
				},
{
					name: 'Conference Rooms Histories (2)',
					value: 'conferenceRoomsHistoriesGet',
					action: 'Execute the GET on conference/{x}/rooms/{x}/histories/{x}',
				},
{
					name: 'Conference Rooms Lock',
					value: 'conferenceRoomsLockPost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/lock',
				},
{
					name: 'Conference Rooms Participants',
					value: 'conferenceRoomsParticipantsListGet',
					action: 'Execute the GET on conference/{x}/rooms/{x}/participants',
				},
{
					name: 'Conference Rooms Participants (2)',
					value: 'conferenceRoomsParticipantsGet',
					action: 'Execute the GET on conference/{x}/rooms/{x}/participants/{x}',
				},
{
					name: 'Conference Rooms Participants Deaf',
					value: 'conferenceRoomsParticipantsDeafPost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/deaf',
				},
{
					name: 'Conference Rooms Participants Energy',
					value: 'conferenceRoomsParticipantsEnergyPost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/energy',
				},
{
					name: 'Conference Rooms Participants Kick',
					value: 'conferenceRoomsParticipantsKickPost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/kick',
				},
{
					name: 'Conference Rooms Participants Mute',
					value: 'conferenceRoomsParticipantsMutePost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/mute',
				},
{
					name: 'Conference Rooms Participants Undeaf',
					value: 'conferenceRoomsParticipantsUndeafPost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/undeaf',
				},
{
					name: 'Conference Rooms Participants Unmute',
					value: 'conferenceRoomsParticipantsUnmutePost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/unmute',
				},
{
					name: 'Conference Rooms Stats',
					value: 'conferenceRoomsStatsListGet',
					action: 'Execute the GET on conference/{x}/roomsStats',
				},
{
					name: 'Conference Rooms Unlock',
					value: 'conferenceRoomsUnlockPost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/unlock',
				},
{
					name: 'Conference Rooms Web Access',
					value: 'conferenceRoomsWebAccessListGet',
					action: 'Execute the GET on conference/{x}/rooms/{x}/webAccess',
				},
{
					name: 'Conference Rooms Web Access (2)',
					value: 'conferenceRoomsWebAccessPost',
					action: 'Execute the POST on conference/{x}/rooms/{x}/webAccess',
				},
{
					name: 'Conference Rooms Web Access (3)',
					value: 'conferenceRoomsWebAccessDelete',
					action: 'Execute the DELETE on conference/{x}/rooms/{x}/webAccess/{x}',
				},
{
					name: 'Conference Rooms Web Access (4)',
					value: 'conferenceRoomsWebAccessGet',
					action: 'Execute the GET on conference/{x}/rooms/{x}/webAccess/{x}',
				},
{
					name: 'Conference Settings',
					value: 'conferenceSettingsListGet',
					action: 'Execute the GET on conference/{x}/settings',
				},
{
					name: 'Conference Settings (2)',
					value: 'conferenceSettingsPut',
					action: 'Execute the PUT on conference/{x}/settings',
				},
{
					name: 'Conference Unlock',
					value: 'conferenceUnlockPost',
					action: 'Execute the POST on conference/{x}/unlock',
				},
{
					name: 'Conference Web Access',
					value: 'conferenceWebAccessListGet',
					action: 'Execute the GET on conference/{x}/webAccess',
				},
{
					name: 'Conference Web Access (2)',
					value: 'conferenceWebAccessPost',
					action: 'Execute the POST on conference/{x}/webAccess',
				},
{
					name: 'Conference Web Access (3)',
					value: 'conferenceWebAccessDelete',
					action: 'Execute the DELETE on conference/{x}/webAccess/{x}',
				},
{
					name: 'Conference Web Access (4)',
					value: 'conferenceWebAccessGet',
					action: 'Execute the GET on conference/{x}/webAccess/{x}',
				},
{
					name: 'Create Hardware',
					value: 'linesHardwarePost',
					action: 'Add hardware to a line',
				},
{
					name: 'Create Number',
					value: 'linesNumberPost',
					action: 'Add a number to a line',
				},
{
					name: 'Create Portability',
					value: 'linesPortabilityPost',
					action: 'Create a portability request for a line',
				},
{
					name: 'Create SIM',
					value: 'linesSimPost',
					action: 'Add a SIM to a line',
				},
{
					name: 'Ddi',
					value: 'ddiListGet',
					action: 'Execute the GET on ddi',
				},
{
					name: 'Ddi (2)',
					value: 'ddiGet',
					action: 'Execute the GET on ddi/{x}',
				},
{
					name: 'Ddi (3)',
					value: 'ddiPut',
					action: 'Execute the PUT on ddi/{x}',
				},
{
					name: 'Ddi Change Destination',
					value: 'ddiChangeDestinationPost',
					action: 'Execute the POST on ddi/{x}/changeDestination',
				},
{
					name: 'Delete Number',
					value: 'linesNumberDelete',
					action: 'Delete a number from a line',
				},
{
					name: 'Delete Portability',
					value: 'linesPortabilityDelete',
					action: 'Delete a portability request',
				},
{
					name: 'Delete SIM',
					value: 'linesSimDelete',
					action: 'Delete a SIM from a line',
				},
{
					name: 'Easy Hunting',
					value: 'easyHuntingListGet',
					action: 'Execute the GET on easyHunting',
				},
{
					name: 'Easy Hunting (2)',
					value: 'easyHuntingGet',
					action: 'Execute the GET on easyHunting/{x}',
				},
{
					name: 'Easy Hunting (3)',
					value: 'easyHuntingPut',
					action: 'Execute the PUT on easyHunting/{x}',
				},
{
					name: 'Easy Hunting Hunting',
					value: 'easyHuntingHuntingListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting',
				},
{
					name: 'Easy Hunting Hunting (2)',
					value: 'easyHuntingHuntingPut',
					action: 'Execute the PUT on easyHunting/{x}/hunting',
				},
{
					name: 'Easy Hunting Hunting Agent',
					value: 'easyHuntingHuntingAgentListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent',
				},
{
					name: 'Easy Hunting Hunting Agent (2)',
					value: 'easyHuntingHuntingAgentPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent',
				},
{
					name: 'Easy Hunting Hunting Agent (3)',
					value: 'easyHuntingHuntingAgentDelete',
					action: 'Execute the DELETE on easyHunting/{x}/hunting/agent/{x}',
				},
{
					name: 'Easy Hunting Hunting Agent (4)',
					value: 'easyHuntingHuntingAgentGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}',
				},
{
					name: 'Easy Hunting Hunting Agent (5)',
					value: 'easyHuntingHuntingAgentPut',
					action: 'Execute the PUT on easyHunting/{x}/hunting/agent/{x}',
				},
{
					name: 'Easy Hunting Hunting Agent Banner Access',
					value: 'easyHuntingHuntingAgentBannerAccessDelete',
					action: 'Execute the DELETE on easyHunting/{x}/hunting/agent/{x}/bannerAccess',
				},
{
					name: 'Easy Hunting Hunting Agent Banner Access (2)',
					value: 'easyHuntingHuntingAgentBannerAccessListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/bannerAccess',
				},
{
					name: 'Easy Hunting Hunting Agent Banner Access (3)',
					value: 'easyHuntingHuntingAgentBannerAccessPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/bannerAccess',
				},
{
					name: 'Easy Hunting Hunting Agent Calls',
					value: 'easyHuntingHuntingAgentCallsListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/calls',
				},
{
					name: 'Easy Hunting Hunting Agent Calls (2)',
					value: 'easyHuntingHuntingAgentCallsGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/calls/{x}',
				},
{
					name: 'Easy Hunting Hunting Agent Calls Eavesdrop',
					value: 'easyHuntingHuntingAgentCallsEavesdropPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/eavesdrop',
				},
{
					name: 'Easy Hunting Hunting Agent Calls Hangup',
					value: 'easyHuntingHuntingAgentCallsHangupPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/hangup',
				},
{
					name: 'Easy Hunting Hunting Agent Calls Hold',
					value: 'easyHuntingHuntingAgentCallsHoldPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/hold',
				},
{
					name: 'Easy Hunting Hunting Agent Calls Intercept',
					value: 'easyHuntingHuntingAgentCallsInterceptPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/intercept',
				},
{
					name: 'Easy Hunting Hunting Agent Calls Transfer',
					value: 'easyHuntingHuntingAgentCallsTransferPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/transfer',
				},
{
					name: 'Easy Hunting Hunting Agent Calls Whisper',
					value: 'easyHuntingHuntingAgentCallsWhisperPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/whisper',
				},
{
					name: 'Easy Hunting Hunting Agent Event Token',
					value: 'easyHuntingHuntingAgentEventTokenDelete',
					action: 'Execute the DELETE on easyHunting/{x}/hunting/agent/{x}/eventToken',
				},
{
					name: 'Easy Hunting Hunting Agent Event Token (2)',
					value: 'easyHuntingHuntingAgentEventTokenListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/eventToken',
				},
{
					name: 'Easy Hunting Hunting Agent Event Token (3)',
					value: 'easyHuntingHuntingAgentEventTokenPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/eventToken',
				},
{
					name: 'Easy Hunting Hunting Agent Live Status',
					value: 'easyHuntingHuntingAgentLiveStatusListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/liveStatus',
				},
{
					name: 'Easy Hunting Hunting Agent Queue',
					value: 'easyHuntingHuntingAgentQueueListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/queue',
				},
{
					name: 'Easy Hunting Hunting Agent Queue (2)',
					value: 'easyHuntingHuntingAgentQueuePost',
					action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/queue',
				},
{
					name: 'Easy Hunting Hunting Agent Queue (3)',
					value: 'easyHuntingHuntingAgentQueueDelete',
					action: 'Execute the DELETE on easyHunting/{x}/hunting/agent/{x}/queue/{x}',
				},
{
					name: 'Easy Hunting Hunting Agent Queue (4)',
					value: 'easyHuntingHuntingAgentQueueGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/queue/{x}',
				},
{
					name: 'Easy Hunting Hunting Agent Queue (5)',
					value: 'easyHuntingHuntingAgentQueuePut',
					action: 'Execute the PUT on easyHunting/{x}/hunting/agent/{x}/queue/{x}',
				},
{
					name: 'Easy Hunting Hunting Agent Queue Live Status',
					value: 'easyHuntingHuntingAgentQueueLiveStatusListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/queue/{x}/liveStatus',
				},
{
					name: 'Easy Hunting Hunting Custom Status',
					value: 'easyHuntingHuntingCustomStatusListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/customStatus',
				},
{
					name: 'Easy Hunting Hunting Custom Status (2)',
					value: 'easyHuntingHuntingCustomStatusPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/customStatus',
				},
{
					name: 'Easy Hunting Hunting Custom Status (3)',
					value: 'easyHuntingHuntingCustomStatusDelete',
					action: 'Execute the DELETE on easyHunting/{x}/hunting/customStatus/{x}',
				},
{
					name: 'Easy Hunting Hunting Custom Status (4)',
					value: 'easyHuntingHuntingCustomStatusGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/customStatus/{x}',
				},
{
					name: 'Easy Hunting Hunting Event Token',
					value: 'easyHuntingHuntingEventTokenDelete',
					action: 'Execute the DELETE on easyHunting/{x}/hunting/eventToken',
				},
{
					name: 'Easy Hunting Hunting Event Token (2)',
					value: 'easyHuntingHuntingEventTokenListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/eventToken',
				},
{
					name: 'Easy Hunting Hunting Event Token (3)',
					value: 'easyHuntingHuntingEventTokenPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/eventToken',
				},
{
					name: 'Easy Hunting Hunting Queue',
					value: 'easyHuntingHuntingQueueListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/queue',
				},
{
					name: 'Easy Hunting Hunting Queue (2)',
					value: 'easyHuntingHuntingQueuePost',
					action: 'Execute the POST on easyHunting/{x}/hunting/queue',
				},
{
					name: 'Easy Hunting Hunting Queue (3)',
					value: 'easyHuntingHuntingQueueDelete',
					action: 'Execute the DELETE on easyHunting/{x}/hunting/queue/{x}',
				},
{
					name: 'Easy Hunting Hunting Queue (4)',
					value: 'easyHuntingHuntingQueueGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}',
				},
{
					name: 'Easy Hunting Hunting Queue (5)',
					value: 'easyHuntingHuntingQueuePut',
					action: 'Execute the PUT on easyHunting/{x}/hunting/queue/{x}',
				},
{
					name: 'Easy Hunting Hunting Queue Agent',
					value: 'easyHuntingHuntingQueueAgentListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/agent',
				},
{
					name: 'Easy Hunting Hunting Queue Agent (2)',
					value: 'easyHuntingHuntingQueueAgentPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/agent',
				},
{
					name: 'Easy Hunting Hunting Queue Agent (3)',
					value: 'easyHuntingHuntingQueueAgentDelete',
					action: 'Execute the DELETE on easyHunting/{x}/hunting/queue/{x}/agent/{x}',
				},
{
					name: 'Easy Hunting Hunting Queue Agent (4)',
					value: 'easyHuntingHuntingQueueAgentGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/agent/{x}',
				},
{
					name: 'Easy Hunting Hunting Queue Agent (5)',
					value: 'easyHuntingHuntingQueueAgentPut',
					action: 'Execute the PUT on easyHunting/{x}/hunting/queue/{x}/agent/{x}',
				},
{
					name: 'Easy Hunting Hunting Queue Agent Live Status',
					value: 'easyHuntingHuntingQueueAgentLiveStatusListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/agent/{x}/liveStatus',
				},
{
					name: 'Easy Hunting Hunting Queue Live Calls',
					value: 'easyHuntingHuntingQueueLiveCallsListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/liveCalls',
				},
{
					name: 'Easy Hunting Hunting Queue Live Calls (2)',
					value: 'easyHuntingHuntingQueueLiveCallsGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}',
				},
{
					name: 'Easy Hunting Hunting Queue Live Calls Eavesdrop',
					value: 'easyHuntingHuntingQueueLiveCallsEavesdropPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/eavesdrop',
				},
{
					name: 'Easy Hunting Hunting Queue Live Calls Hangup',
					value: 'easyHuntingHuntingQueueLiveCallsHangupPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/hangup',
				},
{
					name: 'Easy Hunting Hunting Queue Live Calls Hold',
					value: 'easyHuntingHuntingQueueLiveCallsHoldPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/hold',
				},
{
					name: 'Easy Hunting Hunting Queue Live Calls Intercept',
					value: 'easyHuntingHuntingQueueLiveCallsInterceptPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/intercept',
				},
{
					name: 'Easy Hunting Hunting Queue Live Calls Transfer',
					value: 'easyHuntingHuntingQueueLiveCallsTransferPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/transfer',
				},
{
					name: 'Easy Hunting Hunting Queue Live Calls Whisper',
					value: 'easyHuntingHuntingQueueLiveCallsWhisperPost',
					action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/whisper',
				},
{
					name: 'Easy Hunting Hunting Queue Live Statistics',
					value: 'easyHuntingHuntingQueueLiveStatisticsListGet',
					action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/liveStatistics',
				},
{
					name: 'Easy Hunting Records',
					value: 'easyHuntingRecordsListGet',
					action: 'Execute the GET on easyHunting/{x}/records',
				},
{
					name: 'Easy Hunting Records (2)',
					value: 'easyHuntingRecordsDelete',
					action: 'Execute the DELETE on easyHunting/{x}/records/{x}',
				},
{
					name: 'Easy Hunting Records (3)',
					value: 'easyHuntingRecordsGet',
					action: 'Execute the GET on easyHunting/{x}/records/{x}',
				},
{
					name: 'Easy Hunting Screen List Conditions',
					value: 'easyHuntingScreenListConditionsListGet',
					action: 'Execute the GET on easyHunting/{x}/screenListConditions',
				},
{
					name: 'Easy Hunting Screen List Conditions (2)',
					value: 'easyHuntingScreenListConditionsPut',
					action: 'Execute the PUT on easyHunting/{x}/screenListConditions',
				},
{
					name: 'Easy Hunting Screen List Conditions Conditions',
					value: 'easyHuntingScreenListConditionsConditionsListGet',
					action: 'Execute the GET on easyHunting/{x}/screenListConditions/conditions',
				},
{
					name: 'Easy Hunting Screen List Conditions Conditions (2)',
					value: 'easyHuntingScreenListConditionsConditionsPost',
					action: 'Execute the POST on easyHunting/{x}/screenListConditions/conditions',
				},
{
					name: 'Easy Hunting Screen List Conditions Conditions (3)',
					value: 'easyHuntingScreenListConditionsConditionsDelete',
					action: 'Execute the DELETE on easyHunting/{x}/screenListConditions/conditions/{x}',
				},
{
					name: 'Easy Hunting Screen List Conditions Conditions (4)',
					value: 'easyHuntingScreenListConditionsConditionsGet',
					action: 'Execute the GET on easyHunting/{x}/screenListConditions/conditions/{x}',
				},
{
					name: 'Easy Hunting Screen List Conditions Conditions (5)',
					value: 'easyHuntingScreenListConditionsConditionsPut',
					action: 'Execute the PUT on easyHunting/{x}/screenListConditions/conditions/{x}',
				},
{
					name: 'Easy Hunting Sound',
					value: 'easyHuntingSoundListGet',
					action: 'Execute the GET on easyHunting/{x}/sound',
				},
{
					name: 'Easy Hunting Sound (2)',
					value: 'easyHuntingSoundDelete',
					action: 'Execute the DELETE on easyHunting/{x}/sound/{x}',
				},
{
					name: 'Easy Hunting Sound (3)',
					value: 'easyHuntingSoundGet',
					action: 'Execute the GET on easyHunting/{x}/sound/{x}',
				},
{
					name: 'Easy Hunting Sound Upload',
					value: 'easyHuntingSoundUploadPost',
					action: 'Execute the POST on easyHunting/{x}/soundUpload',
				},
{
					name: 'Easy Hunting Time Conditions',
					value: 'easyHuntingTimeConditionsListGet',
					action: 'Execute the GET on easyHunting/{x}/timeConditions',
				},
{
					name: 'Easy Hunting Time Conditions (2)',
					value: 'easyHuntingTimeConditionsPut',
					action: 'Execute the PUT on easyHunting/{x}/timeConditions',
				},
{
					name: 'Easy Hunting Time Conditions Conditions',
					value: 'easyHuntingTimeConditionsConditionsListGet',
					action: 'Execute the GET on easyHunting/{x}/timeConditions/conditions',
				},
{
					name: 'Easy Hunting Time Conditions Conditions (2)',
					value: 'easyHuntingTimeConditionsConditionsPost',
					action: 'Execute the POST on easyHunting/{x}/timeConditions/conditions',
				},
{
					name: 'Easy Hunting Time Conditions Conditions (3)',
					value: 'easyHuntingTimeConditionsConditionsDelete',
					action: 'Execute the DELETE on easyHunting/{x}/timeConditions/conditions/{x}',
				},
{
					name: 'Easy Hunting Time Conditions Conditions (4)',
					value: 'easyHuntingTimeConditionsConditionsGet',
					action: 'Execute the GET on easyHunting/{x}/timeConditions/conditions/{x}',
				},
{
					name: 'Easy Hunting Time Conditions Conditions (5)',
					value: 'easyHuntingTimeConditionsConditionsPut',
					action: 'Execute the PUT on easyHunting/{x}/timeConditions/conditions/{x}',
				},
{
					name: 'Event Token',
					value: 'eventTokenDelete',
					action: 'Execute the DELETE on eventToken',
				},
{
					name: 'Event Token (2)',
					value: 'eventTokenListGet',
					action: 'Execute the GET on eventToken',
				},
{
					name: 'Event Token (3)',
					value: 'eventTokenPost',
					action: 'Execute the POST on eventToken',
				},
{
					name: 'Fax Campaigns Create',
					value: 'faxCampaignsPost',
					action: 'Create a new fax campaign',
				},
{
					name: 'Fax Campaigns Delete',
					value: 'faxCampaignsDelete',
					action: 'Delete a fax campaign',
				},
{
					name: 'Fax Campaigns Detail List',
					value: 'faxCampaignsDetailListGet',
					action: 'Detail of the fax recipients by status',
				},
{
					name: 'Fax Campaigns Get',
					value: 'faxCampaignsGet',
					action: 'Get this object properties',
				},
{
					name: 'Fax Campaigns List',
					value: 'faxCampaignsListGet',
					action: 'Fax campaigns of the associate fax',
				},
{
					name: 'Fax Campaigns Start Create',
					value: 'faxCampaignsStartPost',
					action: 'Start a fax campaign',
				},
{
					name: 'Fax Campaigns Stop Create',
					value: 'faxCampaignsStopPost',
					action: 'Stop a fax campaign',
				},
{
					name: 'Fax Get',
					value: 'faxGet',
					action: 'Get this object properties',
				},
{
					name: 'Fax List',
					value: 'faxListGet',
					action: 'Faxes associated with this billing account',
				},
{
					name: 'Fax Screen Lists Create',
					value: 'faxScreenListsPost',
					action: 'Create a new fax ScreenLists',
				},
{
					name: 'Fax Screen Lists Delete',
					value: 'faxScreenListsDelete',
					action: 'Delete all fax screenLists',
				},
{
					name: 'Fax Screen Lists List',
					value: 'faxScreenListsListGet',
					action: 'Get this object properties',
				},
{
					name: 'Fax Screen Lists Reset Create',
					value: 'faxScreenListsResetPost',
					action: 'Reset a specifical fax screenList',
				},
{
					name: 'Fax Screen Lists Update',
					value: 'faxScreenListsPut',
					action: 'Alter this object properties',
				},
{
					name: 'Fax Settings Change Password Create',
					value: 'faxSettingsChangePasswordPost',
					action: 'Generates a new password for your fax account',
				},
{
					name: 'Fax Settings List',
					value: 'faxSettingsListGet',
					action: 'Get this object properties',
				},
{
					name: 'Fax Settings Send Fax Create',
					value: 'faxSettingsSendFaxPost',
					action: 'Send a fax',
				},
{
					name: 'Fax Settings Update',
					value: 'faxSettingsPut',
					action: 'Alter this object properties',
				},
{
					name: 'Fax Update',
					value: 'faxPut',
					action: 'Alter this object properties',
				},
{
					name: 'Get Alias',
					value: 'aliasGet',
					action: 'Get alias properties',
				},
{
					name: 'Get Alias Service Info',
					value: 'aliasServiceInfosGet',
					action: 'Get service information for an alias',
				},
{
					name: 'Get Allowed Credit Threshold',
					value: 'allowedCreditThresholdGet',
					action: 'Get the allowed creditThreshold for this billing account',
				},
{
					name: 'Get Amount Security Deposit',
					value: 'amountSecurityDepositGet',
					action: 'Give all amounts availables for your billing account',
				},
{
					name: 'Get Billing Account',
					value: 'billingAccountGet',
					action: 'Get this object properties',
				},
{
					name: 'Get Billing Account Site',
					value: 'billingAccountSiteGet',
					action:
						'Current billing account site (billing account features are overwritten by the site)',
				},
{
					name: 'Get Line',
					value: 'linesGet',
					action: 'Get line properties',
				},
{
					name: 'Get Line Offer Details',
					value: 'lineOfferDetailsGet',
					action: 'Get detailed information about a line offer',
				},
{
					name: 'Get Line Service Info',
					value: 'linesServiceInfosGet',
					action: 'Get service information for a line',
				},
{
					name: 'Get Number',
					value: 'linesNumberGet',
					action: 'Get number properties',
				},
{
					name: 'Get Offer Phones',
					value: 'lineOfferPhonesGet',
					action: 'Get phones for a line offer',
				},
{
					name: 'Get Portability',
					value: 'linesPortabilityGet',
					action: 'Get portability details',
				},
{
					name: 'Get SIM',
					value: 'linesSimGet',
					action: 'Get SIM properties',
				},
{
					name: 'Get Trunk',
					value: 'trunksGet',
					action: 'Get trunk properties',
				},
{
					name: 'Get Trunk Service Info',
					value: 'trunksServiceInfosGet',
					action: 'Get service information for a trunk',
				},
{
					name: 'Has Special Numbers',
					value: 'hasSpecialNumbersListGet',
					action: 'Execute the GET on hasSpecialNumbers',
				},
{
					name: 'History Consumption',
					value: 'historyConsumptionListGet',
					action: 'Execute the GET on historyConsumption',
				},
{
					name: 'History Consumption (2)',
					value: 'historyConsumptionGet',
					action: 'Execute the GET on historyConsumption/{x}',
				},
{
					name: 'History Consumption File',
					value: 'historyConsumptionFileListGet',
					action: 'Execute the GET on historyConsumption/{x}/file',
				},
{
					name: 'History Repayment Consumption',
					value: 'historyRepaymentConsumptionListGet',
					action: 'Execute the GET on historyRepaymentConsumption',
				},
{
					name: 'History Repayment Consumption (2)',
					value: 'historyRepaymentConsumptionPost',
					action: 'Execute the POST on historyRepaymentConsumption',
				},
{
					name: 'History Repayment Consumption (3)',
					value: 'historyRepaymentConsumptionGet',
					action: 'Execute the GET on historyRepaymentConsumption/{x}',
				},
{
					name: 'History Repayment Consumption Document',
					value: 'historyRepaymentConsumptionDocumentListGet',
					action: 'Execute the GET on historyRepaymentConsumption/{x}/document',
				},
{
					name: 'History Tollfree Consumption',
					value: 'historyTollfreeConsumptionListGet',
					action: 'Execute the GET on historyTollfreeConsumption',
				},
{
					name: 'History Tollfree Consumption (2)',
					value: 'historyTollfreeConsumptionGet',
					action: 'Execute the GET on historyTollfreeConsumption/{x}',
				},
{
					name: 'History Tollfree Consumption Document',
					value: 'historyTollfreeConsumptionDocumentListGet',
					action: 'Execute the GET on historyTollfreeConsumption/{x}/document',
				},
{
					name: 'Line Abbreviated Number Create',
					value: 'lineAbbreviatedNumberPost',
					action: 'Create a new abbreviated number for the line',
				},
{
					name: 'Line Abbreviated Number Delete',
					value: 'lineAbbreviatedNumberDelete',
					action: 'Delete the given abbreviated number',
				},
{
					name: 'Line Abbreviated Number Get',
					value: 'lineAbbreviatedNumberGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Abbreviated Number List',
					value: 'lineAbbreviatedNumberListGet',
					action: 'Abbreviated numbers for the line',
				},
{
					name: 'Line Abbreviated Number Update',
					value: 'lineAbbreviatedNumberPut',
					action: 'Alter this object properties',
				},
{
					name: 'Line Activate New Phone Create',
					value: 'lineActivateNewPhonePost',
					action: 'Allow to activate new phone, in case of phone switch',
				},
{
					name: 'Line Activate New Phone List',
					value: 'lineActivateNewPhoneListGet',
					action: 'Allow to activate new phone, in case of phone switch',
				},
{
					name: 'Line Antihack Create',
					value: 'lineAntihackPost',
					action: 'Clean the antihack or add it on active filter screen list',
				},
{
					name: 'Line Antihack List',
					value: 'lineAntihackListGet',
					action: 'Current list of numbers or short code numbers restricted by an auto antihack',
				},
{
					name: 'Line Associate Device Create',
					value: 'lineAssociateDevicePost',
					action: 'Associate a device to the current line with the device mac address',
				},
{
					name: 'Line Automatic Call Create',
					value: 'lineAutomaticCallPost',
					action: 'Make an automatic phone call. Return generated call identifier',
				},
{
					name: 'Line Automatic Call Get',
					value: 'lineAutomaticCallGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Automatic Call List',
					value: 'lineAutomaticCallListGet',
					action: 'Automatic Calls made by Calls Generator on this line',
				},
{
					name: 'Line Available Sip Domains List',
					value: 'lineAvailableSipDomainsListGet',
					action: 'Listing of domains Sip availables',
				},
{
					name: 'Line Block Create',
					value: 'lineBlockPost',
					action:
						'Block the line. By default it will block incoming and outgoing calls (except for emergency numbers)',
				},
{
					name: 'Line Calls Eavesdrop Create',
					value: 'lineCallsEavesdropPost',
					action: 'Eavesdrop on a call',
				},
{
					name: 'Line Calls Get',
					value: 'lineCallsGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Calls Hangup Create',
					value: 'lineCallsHangupPost',
					action: 'Hangup a call',
				},
{
					name: 'Line Calls Hold Create',
					value: 'lineCallsHoldPost',
					action: 'Toogle hold on call',
				},
{
					name: 'Line Calls Intercept Create',
					value: 'lineCallsInterceptPost',
					action: 'Intercept a non answered call',
				},
{
					name: 'Line Calls List',
					value: 'lineCallsListGet',
					action: 'The active calls of your line as a call center agent',
				},
{
					name: 'Line Calls Transfer Create',
					value: 'lineCallsTransferPost',
					action: 'Transfer an answered call',
				},
{
					name: 'Line Calls Whisper Create',
					value: 'lineCallsWhisperPost',
					action: 'Whisper on a call',
				},
{
					name: 'Line Can Change Password List',
					value: 'lineCanChangePasswordListGet',
					action: 'Ability to manage SIP password on this service',
				},
{
					name: 'Line Cancel Convert To Number Create',
					value: 'lineCancelConvertToNumberPost',
					action: 'Cancel a scheduled conversion to number',
				},
{
					name: 'Line Change Password Create',
					value: 'lineChangePasswordPost',
					action: 'Change the SIP account password',
				},
{
					name: 'Line Click2 Call Create',
					value: 'lineClick2CallPost',
					action: 'Make a phone call from the current line',
				},
{
					name: 'Line Click2 Call User Change Password Create',
					value: 'lineClick2CallUserChangePasswordPost',
					action: 'Change the password of the click2call user',
				},
{
					name: 'Line Click2 Call User Click2 Call Create',
					value: 'lineClick2CallUserClick2CallPost',
					action: 'Make a phone call from the current line',
				},
{
					name: 'Line Click2 Call User Create',
					value: 'lineClick2CallUserPost',
					action: 'Create a new user for click 2 call',
				},
{
					name: 'Line Click2 Call User Delete',
					value: 'lineClick2CallUserDelete',
					action: 'Delete a click 2 call user',
				},
{
					name: 'Line Click2 Call User Get',
					value: 'lineClick2CallUserGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Click2 Call User List',
					value: 'lineClick2CallUserListGet',
					action: 'User which can use click 2 call on the line',
				},
{
					name: 'Line Convert To Number Create',
					value: 'lineConvertToNumberPost',
					action: 'Schedule a conversion to number',
				},
{
					name: 'Line Dissociate Device Create',
					value: 'lineDissociateDevicePost',
					action: 'Dissociate a device from the current line with the device mac address',
				},
{
					name: 'Line Get',
					value: 'lineGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Ips List',
					value: 'lineIpsListGet',
					action: 'Listing of last ips registry',
				},
{
					name: 'Line Last Registrations List',
					value: 'lineLastRegistrationsListGet',
					action:
						'List the informations about the last registrations (i.e. IP, port, User-Agent...)',
				},
{
					name: 'Line List',
					value: 'lineListGet',
					action: 'Lines associated with this billing account',
				},
{
					name: 'Line List Associable Phones List',
					value: 'lineListAssociablePhonesListGet',
					action: 'List phones with available slots where this line can be attached',
				},
{
					name: 'Line Maximum Available Simultaneous Lines List',
					value: 'lineMaximumAvailableSimultaneousLinesListGet',
					action: 'Get the maximum available simultaneous lines for this line',
				},
{
					name: 'Line Offer List',
					value: 'lineOfferListGet',
					action: 'Return public offer property',
				},
{
					name: 'Line Options Available Codecs List',
					value: 'lineOptionsAvailableCodecsListGet',
					action: 'List of codecs combinaisons available for this line',
				},
{
					name: 'Line Options Default Codecs List',
					value: 'lineOptionsDefaultCodecsListGet',
					action: 'Get the default codecs for this line if none are set',
				},
{
					name: 'Line Options List',
					value: 'lineOptionsListGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Options Update',
					value: 'lineOptionsPut',
					action: 'Alter this object properties',
				},
{
					name: 'Line Phone Admin Credentials List',
					value: 'linePhoneAdminCredentialsListGet',
					action: 'Returns the administration user and password of the phone if you are a VIP',
				},
{
					name: 'Line Phone Can Be Associable List',
					value: 'linePhoneCanBeAssociableListGet',
					action: 'List the phones with Sip slot available',
				},
{
					name: 'Line Phone Change Phone Configuration Create',
					value: 'linePhoneChangePhoneConfigurationPost',
					action: 'Edit configuration of the phone remotely by provisioning',
				},
{
					name: 'Line Phone Function Key Available Function List',
					value: 'linePhoneFunctionKeyAvailableFunctionListGet',
					action: 'List the available functions for the key',
				},
{
					name: 'Line Phone Function Key Get',
					value: 'linePhoneFunctionKeyGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Phone Function Key List',
					value: 'linePhoneFunctionKeyListGet',
					action: 'Plug & Phone function keys',
				},
{
					name: 'Line Phone Function Key Update',
					value: 'linePhoneFunctionKeyPut',
					action: 'Alter this object properties',
				},
{
					name: 'Line Phone List',
					value: 'linePhoneListGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Phone Merchandise Available List',
					value: 'linePhoneMerchandiseAvailableListGet',
					action: 'List of available exchange merchandise brand',
				},
{
					name: 'Line Phone Phonebook Create',
					value: 'linePhonePhonebookPost',
					action: 'Add a phonebook. Return the bookKey.',
				},
{
					name: 'Line Phone Phonebook Delete',
					value: 'linePhonePhonebookDelete',
					action: 'Delete a phonebook',
				},
{
					name: 'Line Phone Phonebook Export List',
					value: 'linePhonePhonebookExportListGet',
					action: 'Export the phonebook',
				},
{
					name: 'Line Phone Phonebook Get',
					value: 'linePhonePhonebookGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Phone Phonebook Import Create',
					value: 'linePhonePhonebookImportPost',
					action: 'Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV',
				},
{
					name: 'Line Phone Phonebook List',
					value: 'linePhonePhonebookListGet',
					action: 'Return phonebooks associated',
				},
{
					name: 'Line Phone Phonebook Phonebook Contact Create',
					value: 'linePhonePhonebookPhonebookContactPost',
					action: 'Create a phonebook contact. Return identifier of the phonebook contact.',
				},
{
					name: 'Line Phone Phonebook Phonebook Contact Delete',
					value: 'linePhonePhonebookPhonebookContactDelete',
					action: 'Delete a phonebook contact',
				},
{
					name: 'Line Phone Phonebook Phonebook Contact Get',
					value: 'linePhonePhonebookPhonebookContactGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Phone Phonebook Phonebook Contact List',
					value: 'linePhonePhonebookPhonebookContactListGet',
					action: 'Phonebook contacts',
				},
{
					name: 'Line Phone Phonebook Phonebook Contact Update',
					value: 'linePhonePhonebookPhonebookContactPut',
					action: 'Alter this object properties',
				},
{
					name: 'Line Phone Phonebook Update',
					value: 'linePhonePhonebookPut',
					action: 'Alter this object properties',
				},
{
					name: 'Line Phone Reboot Create',
					value: 'linePhoneRebootPost',
					action: 'Create a task to reboot the phone',
				},
{
					name: 'Line Phone Refresh Screen Create',
					value: 'linePhoneRefreshScreenPost',
					action: 'Create a task to refresh the screen of the MGCP phone',
				},
{
					name: 'Line Phone Reset Config Create',
					value: 'linePhoneResetConfigPost',
					action: 'Reinitialize the phone configuration',
				},
{
					name: 'Line Phone Rma Change Type Create',
					value: 'linePhoneRmaChangeTypePost',
					action: 'Change RMA type',
				},
{
					name: 'Line Phone Rma Create',
					value: 'linePhoneRmaPost',
					action: 'Create a specific rma',
				},
{
					name: 'Line Phone Rma Delete',
					value: 'linePhoneRmaDelete',
					action: 'Cancel the rma',
				},
{
					name: 'Line Phone Rma Get',
					value: 'linePhoneRmaGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Phone Rma List',
					value: 'linePhoneRmaListGet',
					action: 'Return Merchandise Authorisation associated',
				},
{
					name: 'Line Phone Rma Update',
					value: 'linePhoneRmaPut',
					action: 'Alter this object properties',
				},
{
					name: 'Line Phone Supports Phonebook List',
					value: 'linePhoneSupportsPhonebookListGet',
					action: 'Does the phone manages phonebooks?',
				},
{
					name: 'Line Phone Update',
					value: 'linePhonePut',
					action: 'Alter this object properties',
				},
{
					name: 'Line Records Delete',
					value: 'lineRecordsDelete',
					action: 'Delete the given record',
				},
{
					name: 'Line Records Get',
					value: 'lineRecordsGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Records List',
					value: 'lineRecordsListGet',
					action: 'The recordings of your line outgoing calls',
				},
{
					name: 'Line Remove Simultaneous Lines Create',
					value: 'lineRemoveSimultaneousLinesPost',
					action: 'Remove extra simultaneous lines',
				},
{
					name: 'Line Simultaneous Channels Details List',
					value: 'lineSimultaneousChannelsDetailsListGet',
					action: 'Details about simultaneous channels of this line.',
				},
{
					name: 'Line Softphone Beta List',
					value: 'lineSoftphoneBetaListGet',
					action: 'Get beta status for line softphone',
				},
{
					name: 'Line Softphone Beta Update',
					value: 'lineSoftphoneBetaPut',
					action: 'Enable or disable beta statuses for line softphone',
				},
{
					name: 'Line Softphone Devices Delete',
					value: 'lineSoftphoneDevicesDelete',
					action: 'Delete softphone device',
				},
{
					name: 'Line Softphone Devices Disconnect Create',
					value: 'lineSoftphoneDevicesDisconnectPost',
					action: 'Disconnect all devices',
				},
{
					name: 'Line Softphone Devices List',
					value: 'lineSoftphoneDevicesListGet',
					action: 'Get softphone devices list',
				},
{
					name: 'Line Softphone Logo Delete',
					value: 'lineSoftphoneLogoDelete',
					action: 'Delete line softphone logo',
				},
{
					name: 'Line Softphone Logo List',
					value: 'lineSoftphoneLogoListGet',
					action: 'Get line softphone logo',
				},
{
					name: 'Line Softphone Logo Update',
					value: 'lineSoftphoneLogoPut',
					action: 'Set line softphone logo',
				},
{
					name: 'Line Softphone Status List',
					value: 'lineSoftphoneStatusListGet',
					action: 'Get softphone line status',
				},
{
					name: 'Line Softphone Theme Delete',
					value: 'lineSoftphoneThemeDelete',
					action: 'Delete line softphone theme',
				},
{
					name: 'Line Softphone Theme List',
					value: 'lineSoftphoneThemeListGet',
					action: 'Get line softphone theme',
				},
{
					name: 'Line Softphone Theme Update',
					value: 'lineSoftphoneThemePut',
					action: 'Set line softphone theme',
				},
{
					name: 'Line Softphone Token Create',
					value: 'lineSoftphoneTokenPost',
					action: 'Generate provisioning token',
				},
{
					name: 'Line Statistics List',
					value: 'lineStatisticsListGet',
					action: 'Get statistics of the current line',
				},
{
					name: 'Line Tones List',
					value: 'lineTonesListGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Tones Tone Upload Create',
					value: 'lineTonesToneUploadPost',
					action: 'Upload new tone file',
				},
{
					name: 'Line Tones Update',
					value: 'lineTonesPut',
					action: 'Alter this object properties',
				},
{
					name: 'Line Traffic Extracts Create',
					value: 'lineTrafficExtractsPost',
					action: 'Launch a traffic extract on your line',
				},
{
					name: 'Line Traffic Extracts Delete',
					value: 'lineTrafficExtractsDelete',
					action: 'Delete a traffic extract',
				},
{
					name: 'Line Traffic Extracts Get',
					value: 'lineTrafficExtractsGet',
					action: 'Get this object properties',
				},
{
					name: 'Line Traffic Extracts List',
					value: 'lineTrafficExtractsListGet',
					action: 'The traffic extracts (SIP only) of your line',
				},
{
					name: 'Line Unblock Create',
					value: 'lineUnblockPost',
					action: 'Unblock the line. It will remove any incoming and outboing block made earlier',
				},
{
					name: 'Line Update',
					value: 'linePut',
					action: 'Alter this object properties',
				},
{
					name: 'List Accessories',
					value: 'accessoriesGet',
					action: 'Get available telephony accessories',
				},
{
					name: 'List Account Portabilities',
					value: 'portabilityGet',
					action: 'Current number portabilities for this billing account',
				},
{
					name: 'List Aliases',
					value: 'aliasListGet',
					action: 'List your telephony aliases',
				},
{
					name: 'List Billing Accounts',
					value: 'telephonyListGet',
					action: 'List your telephony billing accounts',
				},
{
					name: 'List Cities',
					value: 'directoriesCitiesGet',
					action: 'Get cities by country and zip code',
				},
{
					name: 'List Countries',
					value: 'directoriesCountriesGet',
					action: 'Get available countries for telephony',
				},
{
					name: 'List Current Orders',
					value: 'currentOrderIdsGet',
					action: 'Get current telephony order IDs',
				},
{
					name: 'List Fax Offers',
					value: 'faxOffersGet',
					action: 'Get available fax offers by country',
				},
{
					name: 'List Hardware',
					value: 'linesHardwareListGet',
					action: 'List hardware associated with a line',
				},
{
					name: 'List Line Offers',
					value: 'lineOffersGet',
					action: 'Get available line offers by country',
				},
{
					name: 'List Lines',
					value: 'linesListGet',
					action: 'List your telephony lines',
				},
{
					name: 'List Numbers',
					value: 'linesNumberListGet',
					action: 'List numbers associated with a line',
				},
{
					name: 'List Portabilities',
					value: 'linesPortabilityListGet',
					action: 'List portabilities for a line',
				},
{
					name: 'List Services',
					value: 'directoriesServicesGet',
					action: 'Get available telephony services by country',
				},
{
					name: 'List SIMs',
					value: 'linesSimListGet',
					action: 'List SIMs associated with a line',
				},
{
					name: 'List SIP Domains',
					value: 'sipDomainsGet',
					action: 'Get available default SIP domains',
				},
{
					name: 'List Trunks',
					value: 'trunksListGet',
					action: 'List your telephony trunks',
				},
{
					name: 'List Zip Codes',
					value: 'directoriesAvailableZipCodesGet',
					action: 'Get available zip codes by country and number',
				},
{
					name: 'Number Cancel Convert To Line Create',
					value: 'numberCancelConvertToLinePost',
					action: 'Cancel a scheduled conversion to line',
				},
{
					name: 'Number Change Feature Type Create',
					value: 'numberChangeFeatureTypePost',
					action: 'Change the feature type of the phone number',
				},
{
					name: 'Number Convert To Line Available Offers List',
					value: 'numberConvertToLineAvailableOffersListGet',
					action: 'Get the available line offers to schedule a conversion to line',
				},
{
					name: 'Number Convert To Line Create',
					value: 'numberConvertToLinePost',
					action: 'Schedule a conversion to line',
				},
{
					name: 'Number Detailed Zones List',
					value: 'numberDetailedZonesListGet',
					action: 'Get all available geographic zone with some details, from a country',
				},
{
					name: 'Number Get',
					value: 'numberGet',
					action: 'Get this object properties',
				},
{
					name: 'Number List',
					value: 'numberListGet',
					action: 'Additional numbers associated with this billing account',
				},
{
					name: 'Number Ranges List',
					value: 'numberRangesListGet',
					action: 'Get all available special range from a country',
				},
{
					name: 'Number Specific Numbers List',
					value: 'numberSpecificNumbersListGet',
					action: 'Get all available specific number from a country',
				},
{
					name: 'Number Update',
					value: 'numberPut',
					action: 'Alter this object properties',
				},
{
					name: 'Number Zones List',
					value: 'numberZonesListGet',
					action: 'Get all available geographic zone from a country',
				},
{
					name: 'Offer Task',
					value: 'offerTaskListGet',
					action: 'Execute the GET on offerTask',
				},
{
					name: 'Offer Task (2)',
					value: 'offerTaskGet',
					action: 'Execute the GET on offerTask/{x}',
				},
{
					name: 'Offer Task (3)',
					value: 'offerTaskPut',
					action: 'Execute the PUT on offerTask/{x}',
				},
{
					name: 'Old Phone',
					value: 'oldPhoneListGet',
					action: 'Execute the GET on oldPhone',
				},
{
					name: 'Outplan Notification',
					value: 'outplanNotificationListGet',
					action: 'Execute the GET on outplanNotification',
				},
{
					name: 'Outplan Notification (2)',
					value: 'outplanNotificationPost',
					action: 'Execute the POST on outplanNotification',
				},
{
					name: 'Outplan Notification (3)',
					value: 'outplanNotificationDelete',
					action: 'Execute the DELETE on outplanNotification/{x}',
				},
{
					name: 'Outplan Notification (4)',
					value: 'outplanNotificationGet',
					action: 'Execute the GET on outplanNotification/{x}',
				},
{
					name: 'Ovh Pabx',
					value: 'ovhPabxListGet',
					action: 'Execute the GET on ovhPabx',
				},
{
					name: 'Ovh Pabx (2)',
					value: 'ovhPabxGet',
					action: 'Execute the GET on ovhPabx/{x}',
				},
{
					name: 'Ovh Pabx (3)',
					value: 'ovhPabxPut',
					action: 'Execute the PUT on ovhPabx/{x}',
				},
{
					name: 'Ovh Pabx Dialplan',
					value: 'ovhPabxDialplanListGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan',
				},
{
					name: 'Ovh Pabx Dialplan (2)',
					value: 'ovhPabxDialplanPost',
					action: 'Execute the POST on ovhPabx/{x}/dialplan',
				},
{
					name: 'Ovh Pabx Dialplan (3)',
					value: 'ovhPabxDialplanDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}',
				},
{
					name: 'Ovh Pabx Dialplan (4)',
					value: 'ovhPabxDialplanGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}',
				},
{
					name: 'Ovh Pabx Dialplan (5)',
					value: 'ovhPabxDialplanPut',
					action: 'Execute the PUT on ovhPabx/{x}/dialplan/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension',
					value: 'ovhPabxDialplanExtensionListGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension',
				},
{
					name: 'Ovh Pabx Dialplan Extension (2)',
					value: 'ovhPabxDialplanExtensionPost',
					action: 'Execute the POST on ovhPabx/{x}/dialplan/{x}/extension',
				},
{
					name: 'Ovh Pabx Dialplan Extension (3)',
					value: 'ovhPabxDialplanExtensionDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}/extension/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension (4)',
					value: 'ovhPabxDialplanExtensionGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension (5)',
					value: 'ovhPabxDialplanExtensionPut',
					action: 'Execute the PUT on ovhPabx/{x}/dialplan/{x}/extension/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Screen List',
					value: 'ovhPabxDialplanExtensionConditionScreenListListGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionScreenList',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Screen List (2)',
					value: 'ovhPabxDialplanExtensionConditionScreenListPost',
					action: 'Execute the POST on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionScreenList',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Screen List (3)',
					value: 'ovhPabxDialplanExtensionConditionScreenListDelete',
					action:
						'Execute the DELETE on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionScreenList/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Screen List (4)',
					value: 'ovhPabxDialplanExtensionConditionScreenListGet',
					action:
						'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionScreenList/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Time',
					value: 'ovhPabxDialplanExtensionConditionTimeListGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Time (2)',
					value: 'ovhPabxDialplanExtensionConditionTimePost',
					action: 'Execute the POST on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Time (3)',
					value: 'ovhPabxDialplanExtensionConditionTimeDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Time (4)',
					value: 'ovhPabxDialplanExtensionConditionTimeGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension Condition Time (5)',
					value: 'ovhPabxDialplanExtensionConditionTimePut',
					action: 'Execute the PUT on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension Rule',
					value: 'ovhPabxDialplanExtensionRuleListGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule',
				},
{
					name: 'Ovh Pabx Dialplan Extension Rule (2)',
					value: 'ovhPabxDialplanExtensionRulePost',
					action: 'Execute the POST on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule',
				},
{
					name: 'Ovh Pabx Dialplan Extension Rule (3)',
					value: 'ovhPabxDialplanExtensionRuleDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension Rule (4)',
					value: 'ovhPabxDialplanExtensionRuleGet',
					action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule/{x}',
				},
{
					name: 'Ovh Pabx Dialplan Extension Rule (5)',
					value: 'ovhPabxDialplanExtensionRulePut',
					action: 'Execute the PUT on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule/{x}',
				},
{
					name: 'Ovh Pabx Hunting',
					value: 'ovhPabxHuntingListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting',
				},
{
					name: 'Ovh Pabx Hunting (2)',
					value: 'ovhPabxHuntingPut',
					action: 'Execute the PUT on ovhPabx/{x}/hunting',
				},
{
					name: 'Ovh Pabx Hunting Agent',
					value: 'ovhPabxHuntingAgentListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent',
				},
{
					name: 'Ovh Pabx Hunting Agent (2)',
					value: 'ovhPabxHuntingAgentPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent',
				},
{
					name: 'Ovh Pabx Hunting Agent (3)',
					value: 'ovhPabxHuntingAgentDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/hunting/agent/{x}',
				},
{
					name: 'Ovh Pabx Hunting Agent (4)',
					value: 'ovhPabxHuntingAgentGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}',
				},
{
					name: 'Ovh Pabx Hunting Agent (5)',
					value: 'ovhPabxHuntingAgentPut',
					action: 'Execute the PUT on ovhPabx/{x}/hunting/agent/{x}',
				},
{
					name: 'Ovh Pabx Hunting Agent Banner Access',
					value: 'ovhPabxHuntingAgentBannerAccessDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/hunting/agent/{x}/bannerAccess',
				},
{
					name: 'Ovh Pabx Hunting Agent Banner Access (2)',
					value: 'ovhPabxHuntingAgentBannerAccessListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/bannerAccess',
				},
{
					name: 'Ovh Pabx Hunting Agent Banner Access (3)',
					value: 'ovhPabxHuntingAgentBannerAccessPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/bannerAccess',
				},
{
					name: 'Ovh Pabx Hunting Agent Calls',
					value: 'ovhPabxHuntingAgentCallsListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/calls',
				},
{
					name: 'Ovh Pabx Hunting Agent Calls (2)',
					value: 'ovhPabxHuntingAgentCallsGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/calls/{x}',
				},
{
					name: 'Ovh Pabx Hunting Agent Calls Eavesdrop',
					value: 'ovhPabxHuntingAgentCallsEavesdropPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/eavesdrop',
				},
{
					name: 'Ovh Pabx Hunting Agent Calls Hangup',
					value: 'ovhPabxHuntingAgentCallsHangupPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/hangup',
				},
{
					name: 'Ovh Pabx Hunting Agent Calls Hold',
					value: 'ovhPabxHuntingAgentCallsHoldPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/hold',
				},
{
					name: 'Ovh Pabx Hunting Agent Calls Intercept',
					value: 'ovhPabxHuntingAgentCallsInterceptPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/intercept',
				},
{
					name: 'Ovh Pabx Hunting Agent Calls Transfer',
					value: 'ovhPabxHuntingAgentCallsTransferPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/transfer',
				},
{
					name: 'Ovh Pabx Hunting Agent Calls Whisper',
					value: 'ovhPabxHuntingAgentCallsWhisperPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/whisper',
				},
{
					name: 'Ovh Pabx Hunting Agent Event Token',
					value: 'ovhPabxHuntingAgentEventTokenDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/hunting/agent/{x}/eventToken',
				},
{
					name: 'Ovh Pabx Hunting Agent Event Token (2)',
					value: 'ovhPabxHuntingAgentEventTokenListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/eventToken',
				},
{
					name: 'Ovh Pabx Hunting Agent Event Token (3)',
					value: 'ovhPabxHuntingAgentEventTokenPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/eventToken',
				},
{
					name: 'Ovh Pabx Hunting Agent Live Status',
					value: 'ovhPabxHuntingAgentLiveStatusListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/liveStatus',
				},
{
					name: 'Ovh Pabx Hunting Agent Queue',
					value: 'ovhPabxHuntingAgentQueueListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/queue',
				},
{
					name: 'Ovh Pabx Hunting Agent Queue (2)',
					value: 'ovhPabxHuntingAgentQueuePost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/queue',
				},
{
					name: 'Ovh Pabx Hunting Agent Queue (3)',
					value: 'ovhPabxHuntingAgentQueueDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/hunting/agent/{x}/queue/{x}',
				},
{
					name: 'Ovh Pabx Hunting Agent Queue (4)',
					value: 'ovhPabxHuntingAgentQueueGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/queue/{x}',
				},
{
					name: 'Ovh Pabx Hunting Agent Queue (5)',
					value: 'ovhPabxHuntingAgentQueuePut',
					action: 'Execute the PUT on ovhPabx/{x}/hunting/agent/{x}/queue/{x}',
				},
{
					name: 'Ovh Pabx Hunting Agent Queue Live Status',
					value: 'ovhPabxHuntingAgentQueueLiveStatusListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/queue/{x}/liveStatus',
				},
{
					name: 'Ovh Pabx Hunting Custom Status',
					value: 'ovhPabxHuntingCustomStatusListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/customStatus',
				},
{
					name: 'Ovh Pabx Hunting Custom Status (2)',
					value: 'ovhPabxHuntingCustomStatusPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/customStatus',
				},
{
					name: 'Ovh Pabx Hunting Custom Status (3)',
					value: 'ovhPabxHuntingCustomStatusDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/hunting/customStatus/{x}',
				},
{
					name: 'Ovh Pabx Hunting Custom Status (4)',
					value: 'ovhPabxHuntingCustomStatusGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/customStatus/{x}',
				},
{
					name: 'Ovh Pabx Hunting Event Token',
					value: 'ovhPabxHuntingEventTokenDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/hunting/eventToken',
				},
{
					name: 'Ovh Pabx Hunting Event Token (2)',
					value: 'ovhPabxHuntingEventTokenListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/eventToken',
				},
{
					name: 'Ovh Pabx Hunting Event Token (3)',
					value: 'ovhPabxHuntingEventTokenPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/eventToken',
				},
{
					name: 'Ovh Pabx Hunting Queue',
					value: 'ovhPabxHuntingQueueListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/queue',
				},
{
					name: 'Ovh Pabx Hunting Queue (2)',
					value: 'ovhPabxHuntingQueuePost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/queue',
				},
{
					name: 'Ovh Pabx Hunting Queue (3)',
					value: 'ovhPabxHuntingQueueDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/hunting/queue/{x}',
				},
{
					name: 'Ovh Pabx Hunting Queue (4)',
					value: 'ovhPabxHuntingQueueGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}',
				},
{
					name: 'Ovh Pabx Hunting Queue (5)',
					value: 'ovhPabxHuntingQueuePut',
					action: 'Execute the PUT on ovhPabx/{x}/hunting/queue/{x}',
				},
{
					name: 'Ovh Pabx Hunting Queue Agent',
					value: 'ovhPabxHuntingQueueAgentListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/agent',
				},
{
					name: 'Ovh Pabx Hunting Queue Agent (2)',
					value: 'ovhPabxHuntingQueueAgentPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/agent',
				},
{
					name: 'Ovh Pabx Hunting Queue Agent (3)',
					value: 'ovhPabxHuntingQueueAgentDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/hunting/queue/{x}/agent/{x}',
				},
{
					name: 'Ovh Pabx Hunting Queue Agent (4)',
					value: 'ovhPabxHuntingQueueAgentGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/agent/{x}',
				},
{
					name: 'Ovh Pabx Hunting Queue Agent (5)',
					value: 'ovhPabxHuntingQueueAgentPut',
					action: 'Execute the PUT on ovhPabx/{x}/hunting/queue/{x}/agent/{x}',
				},
{
					name: 'Ovh Pabx Hunting Queue Agent Live Status',
					value: 'ovhPabxHuntingQueueAgentLiveStatusListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/agent/{x}/liveStatus',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Calls',
					value: 'ovhPabxHuntingQueueLiveCallsListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/liveCalls',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Calls (2)',
					value: 'ovhPabxHuntingQueueLiveCallsGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Calls Eavesdrop',
					value: 'ovhPabxHuntingQueueLiveCallsEavesdropPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/eavesdrop',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Calls Hangup',
					value: 'ovhPabxHuntingQueueLiveCallsHangupPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/hangup',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Calls Hold',
					value: 'ovhPabxHuntingQueueLiveCallsHoldPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/hold',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Calls Intercept',
					value: 'ovhPabxHuntingQueueLiveCallsInterceptPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/intercept',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Calls Transfer',
					value: 'ovhPabxHuntingQueueLiveCallsTransferPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/transfer',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Calls Whisper',
					value: 'ovhPabxHuntingQueueLiveCallsWhisperPost',
					action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/whisper',
				},
{
					name: 'Ovh Pabx Hunting Queue Live Statistics',
					value: 'ovhPabxHuntingQueueLiveStatisticsListGet',
					action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/liveStatistics',
				},
{
					name: 'Ovh Pabx Menu',
					value: 'ovhPabxMenuListGet',
					action: 'Execute the GET on ovhPabx/{x}/menu',
				},
{
					name: 'Ovh Pabx Menu (2)',
					value: 'ovhPabxMenuPost',
					action: 'Execute the POST on ovhPabx/{x}/menu',
				},
{
					name: 'Ovh Pabx Menu (3)',
					value: 'ovhPabxMenuDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/menu/{x}',
				},
{
					name: 'Ovh Pabx Menu (4)',
					value: 'ovhPabxMenuGet',
					action: 'Execute the GET on ovhPabx/{x}/menu/{x}',
				},
{
					name: 'Ovh Pabx Menu (5)',
					value: 'ovhPabxMenuPut',
					action: 'Execute the PUT on ovhPabx/{x}/menu/{x}',
				},
{
					name: 'Ovh Pabx Menu Entry',
					value: 'ovhPabxMenuEntryListGet',
					action: 'Execute the GET on ovhPabx/{x}/menu/{x}/entry',
				},
{
					name: 'Ovh Pabx Menu Entry (2)',
					value: 'ovhPabxMenuEntryPost',
					action: 'Execute the POST on ovhPabx/{x}/menu/{x}/entry',
				},
{
					name: 'Ovh Pabx Menu Entry (3)',
					value: 'ovhPabxMenuEntryDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/menu/{x}/entry/{x}',
				},
{
					name: 'Ovh Pabx Menu Entry (4)',
					value: 'ovhPabxMenuEntryGet',
					action: 'Execute the GET on ovhPabx/{x}/menu/{x}/entry/{x}',
				},
{
					name: 'Ovh Pabx Menu Entry (5)',
					value: 'ovhPabxMenuEntryPut',
					action: 'Execute the PUT on ovhPabx/{x}/menu/{x}/entry/{x}',
				},
{
					name: 'Ovh Pabx Records',
					value: 'ovhPabxRecordsListGet',
					action: 'Execute the GET on ovhPabx/{x}/records',
				},
{
					name: 'Ovh Pabx Records (2)',
					value: 'ovhPabxRecordsDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/records/{x}',
				},
{
					name: 'Ovh Pabx Records (3)',
					value: 'ovhPabxRecordsGet',
					action: 'Execute the GET on ovhPabx/{x}/records/{x}',
				},
{
					name: 'Ovh Pabx Sound',
					value: 'ovhPabxSoundListGet',
					action: 'Execute the GET on ovhPabx/{x}/sound',
				},
{
					name: 'Ovh Pabx Sound (2)',
					value: 'ovhPabxSoundDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/sound/{x}',
				},
{
					name: 'Ovh Pabx Sound (3)',
					value: 'ovhPabxSoundGet',
					action: 'Execute the GET on ovhPabx/{x}/sound/{x}',
				},
{
					name: 'Ovh Pabx Sound Upload',
					value: 'ovhPabxSoundUploadPost',
					action: 'Execute the POST on ovhPabx/{x}/soundUpload',
				},
{
					name: 'Ovh Pabx Tts',
					value: 'ovhPabxTtsListGet',
					action: 'Execute the GET on ovhPabx/{x}/tts',
				},
{
					name: 'Ovh Pabx Tts (2)',
					value: 'ovhPabxTtsPost',
					action: 'Execute the POST on ovhPabx/{x}/tts',
				},
{
					name: 'Ovh Pabx Tts (3)',
					value: 'ovhPabxTtsDelete',
					action: 'Execute the DELETE on ovhPabx/{x}/tts/{x}',
				},
{
					name: 'Ovh Pabx Tts (4)',
					value: 'ovhPabxTtsGet',
					action: 'Execute the GET on ovhPabx/{x}/tts/{x}',
				},
{
					name: 'Ovh Pabx Tts (5)',
					value: 'ovhPabxTtsPut',
					action: 'Execute the PUT on ovhPabx/{x}/tts/{x}',
				},
{
					name: 'Phonebook',
					value: 'phonebookListGet',
					action: 'Execute the GET on phonebook',
				},
{
					name: 'Phonebook (2)',
					value: 'phonebookPost',
					action: 'Execute the POST on phonebook',
				},
{
					name: 'Phonebook (3)',
					value: 'phonebookDelete',
					action: 'Execute the DELETE on phonebook/{x}',
				},
{
					name: 'Phonebook (4)',
					value: 'phonebookGet',
					action: 'Execute the GET on phonebook/{x}',
				},
{
					name: 'Phonebook (5)',
					value: 'phonebookPut',
					action: 'Execute the PUT on phonebook/{x}',
				},
{
					name: 'Phonebook Export',
					value: 'phonebookExportListGet',
					action: 'Execute the GET on phonebook/{x}/export',
				},
{
					name: 'Phonebook Import',
					value: 'phonebookImportPost',
					action: 'Execute the POST on phonebook/{x}/import',
				},
{
					name: 'Phonebook Phonebook Contact',
					value: 'phonebookPhonebookContactListGet',
					action: 'Execute the GET on phonebook/{x}/phonebookContact',
				},
{
					name: 'Phonebook Phonebook Contact (2)',
					value: 'phonebookPhonebookContactPost',
					action: 'Execute the POST on phonebook/{x}/phonebookContact',
				},
{
					name: 'Phonebook Phonebook Contact (3)',
					value: 'phonebookPhonebookContactDelete',
					action: 'Execute the DELETE on phonebook/{x}/phonebookContact/{x}',
				},
{
					name: 'Phonebook Phonebook Contact (4)',
					value: 'phonebookPhonebookContactGet',
					action: 'Execute the GET on phonebook/{x}/phonebookContact/{x}',
				},
{
					name: 'Phonebook Phonebook Contact (5)',
					value: 'phonebookPhonebookContactPut',
					action: 'Execute the PUT on phonebook/{x}/phonebookContact/{x}',
				},
{
					name: 'Portability',
					value: 'portabilityDetailGet',
					action: 'Execute the GET on portability/{x}',
				},
{
					name: 'Portability Can Be Cancelled',
					value: 'portabilityCanBeCancelledListGet',
					action: 'Execute the GET on portability/{x}/canBeCancelled',
				},
{
					name: 'Portability Can Be Executed',
					value: 'portabilityCanBeExecutedListGet',
					action: 'Execute the GET on portability/{x}/canBeExecuted',
				},
{
					name: 'Portability Cancel',
					value: 'portabilityCancelPost',
					action: 'Execute the POST on portability/{x}/cancel',
				},
{
					name: 'Portability Change Date',
					value: 'portabilityChangeDatePost',
					action: 'Execute the POST on portability/{x}/changeDate',
				},
{
					name: 'Portability Date Can Be Changed',
					value: 'portabilityDateCanBeChangedListGet',
					action: 'Execute the GET on portability/{x}/dateCanBeChanged',
				},
{
					name: 'Portability Document',
					value: 'portabilityDocumentListGet',
					action: 'Execute the GET on portability/{x}/document',
				},
{
					name: 'Portability Document (2)',
					value: 'portabilityDocumentPost',
					action: 'Execute the POST on portability/{x}/document',
				},
{
					name: 'Portability Document (3)',
					value: 'portabilityDocumentDelete',
					action: 'Execute the DELETE on portability/{x}/document/{x}',
				},
{
					name: 'Portability Document (4)',
					value: 'portabilityDocumentGet',
					action: 'Execute the GET on portability/{x}/document/{x}',
				},
{
					name: 'Portability Document (5)',
					value: 'portabilityDocumentPut',
					action: 'Execute the PUT on portability/{x}/document/{x}',
				},
{
					name: 'Portability Execute',
					value: 'portabilityExecutePost',
					action: 'Execute the POST on portability/{x}/execute',
				},
{
					name: 'Portability Relaunch',
					value: 'portabilityRelaunchListGet',
					action: 'Execute the GET on portability/{x}/relaunch',
				},
{
					name: 'Portability Relaunch (2)',
					value: 'portabilityRelaunchPost',
					action: 'Execute the POST on portability/{x}/relaunch',
				},
{
					name: 'Portability Status',
					value: 'portabilityStatusListGet',
					action: 'Execute the GET on portability/{x}/status',
				},
{
					name: 'Procedure Cancel',
					value: 'procedureCancelPost',
					action: 'Execute the POST on procedure/{id}/cancel',
				},
{
					name: 'Procedure Create',
					value: 'procedurePost',
					action: 'Create a telephony procedure',
				},
{
					name: 'Procedure Get',
					value: 'procedureGet',
					action: 'Get this object properties',
				},
{
					name: 'Procedure List',
					value: 'procedureListGet',
					action: 'Procedures linked to your nichandle',
				},
{
					name: 'Procedure Required List',
					value: 'procedureRequiredListGet',
					action: 'Tells whether the procedure is necessary to order telephony products or not',
				},
{
					name: 'Redirect',
					value: 'redirectListGet',
					action: 'Execute the GET on redirect',
				},
{
					name: 'Redirect (2)',
					value: 'redirectGet',
					action: 'Execute the GET on redirect/{x}',
				},
{
					name: 'Redirect (3)',
					value: 'redirectPut',
					action: 'Execute the PUT on redirect/{x}',
				},
{
					name: 'Redirect Change Destination',
					value: 'redirectChangeDestinationPost',
					action: 'Execute the POST on redirect/{x}/changeDestination',
				},
{
					name: 'Reseller Panel Generate Password',
					value: 'resellerPanelGeneratePasswordPost',
					action: 'Generate a new password for the reseller panel',
				},
{
					name: 'Reseller Panel Status List',
					value: 'resellerPanelStatusListGet',
					action: 'Status of customer reseller panel',
				},
{
					name: 'Rsva',
					value: 'rsvaListGet',
					action: 'Execute the GET on rsva',
				},
{
					name: 'Rsva (2)',
					value: 'rsvaGet',
					action: 'Execute the GET on rsva/{x}',
				},
{
					name: 'Rsva (3)',
					value: 'rsvaPut',
					action: 'Execute the PUT on rsva/{x}',
				},
{
					name: 'Rsva Allowed Rate Codes',
					value: 'rsvaAllowedRateCodesListGet',
					action: 'Execute the GET on rsva/{x}/allowedRateCodes',
				},
{
					name: 'Rsva Cancel Scheduled Rate Code',
					value: 'rsvaCancelScheduledRateCodePost',
					action: 'Execute the POST on rsva/{x}/cancelScheduledRateCode',
				},
{
					name: 'Rsva Current Rate Code',
					value: 'rsvaCurrentRateCodeListGet',
					action: 'Execute the GET on rsva/{x}/currentRateCode',
				},
{
					name: 'Rsva Schedule Rate Code',
					value: 'rsvaScheduleRateCodePost',
					action: 'Execute the POST on rsva/{x}/scheduleRateCode',
				},
{
					name: 'Rsva Scheduled Rate Code',
					value: 'rsvaScheduledRateCodeListGet',
					action: 'Execute the GET on rsva/{x}/scheduledRateCode',
				},
{
					name: 'Scheduler',
					value: 'schedulerListGet',
					action: 'Execute the GET on scheduler',
				},
{
					name: 'Scheduler (2)',
					value: 'schedulerGet',
					action: 'Execute the GET on scheduler/{x}',
				},
{
					name: 'Scheduler (3)',
					value: 'schedulerPut',
					action: 'Execute the PUT on scheduler/{x}',
				},
{
					name: 'Scheduler Events',
					value: 'schedulerEventsListGet',
					action: 'Execute the GET on scheduler/{x}/events',
				},
{
					name: 'Scheduler Events (2)',
					value: 'schedulerEventsPost',
					action: 'Execute the POST on scheduler/{x}/events',
				},
{
					name: 'Scheduler Events (3)',
					value: 'schedulerEventsDelete',
					action: 'Execute the DELETE on scheduler/{x}/events/{x}',
				},
{
					name: 'Scheduler Events (4)',
					value: 'schedulerEventsGet',
					action: 'Execute the GET on scheduler/{x}/events/{x}',
				},
{
					name: 'Scheduler Events (5)',
					value: 'schedulerEventsPut',
					action: 'Execute the PUT on scheduler/{x}/events/{x}',
				},
{
					name: 'Scheduler Import Ics Calendar',
					value: 'schedulerImportIcsCalendarPost',
					action: 'Execute the POST on scheduler/{x}/importIcsCalendar',
				},
{
					name: 'Screen',
					value: 'screenListGet',
					action: 'Execute the GET on screen',
				},
{
					name: 'Screen (2)',
					value: 'screenGet',
					action: 'Execute the GET on screen/{x}',
				},
{
					name: 'Screen (3)',
					value: 'screenPut',
					action: 'Execute the PUT on screen/{x}',
				},
{
					name: 'Screen Screen Lists',
					value: 'screenScreenListsListGet',
					action: 'Execute the GET on screen/{x}/screenLists',
				},
{
					name: 'Screen Screen Lists (2)',
					value: 'screenScreenListsPost',
					action: 'Execute the POST on screen/{x}/screenLists',
				},
{
					name: 'Screen Screen Lists (3)',
					value: 'screenScreenListsDelete',
					action: 'Execute the DELETE on screen/{x}/screenLists/{x}',
				},
{
					name: 'Screen Screen Lists (4)',
					value: 'screenScreenListsGet',
					action: 'Execute the GET on screen/{x}/screenLists/{x}',
				},
{
					name: 'Search Services',
					value: 'searchServicesGet',
					action: 'Search a service with its domain to get its billing account and type',
				},
{
					name: 'Service',
					value: 'serviceListGet',
					action: 'Execute the GET on service',
				},
{
					name: 'Service (2)',
					value: 'serviceDelete',
					action: 'Execute the DELETE on service/{x}',
				},
{
					name: 'Service (3)',
					value: 'serviceGet',
					action: 'Execute the GET on service/{x}',
				},
{
					name: 'Service (4)',
					value: 'servicePut',
					action: 'Execute the PUT on service/{x}',
				},
{
					name: 'Service Cancel Termination',
					value: 'serviceCancelTerminationPost',
					action: 'Execute the POST on service/{x}/cancelTermination',
				},
{
					name: 'Service Change Of Billing Account',
					value: 'serviceChangeOfBillingAccountPost',
					action: 'Execute the POST on service/{x}/changeOfBillingAccount',
				},
{
					name: 'Service Diagnostic Reports',
					value: 'serviceDiagnosticReportsListGet',
					action: 'Execute the GET on service/{x}/diagnosticReports',
				},
{
					name: 'Service Directory',
					value: 'serviceDirectoryListGet',
					action: 'Execute the GET on service/{x}/directory',
				},
{
					name: 'Service Directory (2)',
					value: 'serviceDirectoryPut',
					action: 'Execute the PUT on service/{x}/directory',
				},
{
					name: 'Service Directory Fetch Entreprise Informations',
					value: 'serviceDirectoryFetchEntrepriseInformationsPost',
					action: 'Execute the POST on service/{x}/directory/fetchEntrepriseInformations',
				},
{
					name: 'Service Directory Get Directory Service Code',
					value: 'serviceDirectoryGetDirectoryServiceCodeListGet',
					action: 'Execute the GET on service/{x}/directory/getDirectoryServiceCode',
				},
{
					name: 'Service Directory Get Way Types',
					value: 'serviceDirectoryGetWayTypesListGet',
					action: 'Execute the GET on service/{x}/directory/getWayTypes',
				},
{
					name: 'Service Event Token',
					value: 'serviceEventTokenDelete',
					action: 'Execute the DELETE on service/{x}/eventToken',
				},
{
					name: 'Service Event Token (2)',
					value: 'serviceEventTokenListGet',
					action: 'Execute the GET on service/{x}/eventToken',
				},
{
					name: 'Service Event Token (3)',
					value: 'serviceEventTokenPost',
					action: 'Execute the POST on service/{x}/eventToken',
				},
{
					name: 'Service Fax Consumption',
					value: 'serviceFaxConsumptionListGet',
					action: 'Execute the GET on service/{x}/faxConsumption',
				},
{
					name: 'Service Fax Consumption (2)',
					value: 'serviceFaxConsumptionGet',
					action: 'Execute the GET on service/{x}/faxConsumption/{x}',
				},
{
					name: 'Service Infos List',
					value: 'serviceInfosListGet',
					action: 'Get service information',
				},
{
					name: 'Service Infos Update',
					value: 'serviceInfosPut',
					action: 'Update service information',
				},
{
					name: 'Service Offer Change',
					value: 'serviceOfferChangeDelete',
					action: 'Execute the DELETE on service/{x}/offerChange',
				},
{
					name: 'Service Offer Change (2)',
					value: 'serviceOfferChangeListGet',
					action: 'Execute the GET on service/{x}/offerChange',
				},
{
					name: 'Service Offer Change (3)',
					value: 'serviceOfferChangePost',
					action: 'Execute the POST on service/{x}/offerChange',
				},
{
					name: 'Service Offer Changes',
					value: 'serviceOfferChangesListGet',
					action: 'Execute the GET on service/{x}/offerChanges',
				},
{
					name: 'Service Offer Task',
					value: 'serviceOfferTaskListGet',
					action: 'Execute the GET on service/{x}/offerTask',
				},
{
					name: 'Service Offer Task (2)',
					value: 'serviceOfferTaskGet',
					action: 'Execute the GET on service/{x}/offerTask/{x}',
				},
{
					name: 'Service Offer Task (3)',
					value: 'serviceOfferTaskPut',
					action: 'Execute the PUT on service/{x}/offerTask/{x}',
				},
{
					name: 'Service Previous Voice Consumption',
					value: 'servicePreviousVoiceConsumptionListGet',
					action: 'Execute the GET on service/{x}/previousVoiceConsumption',
				},
{
					name: 'Service Previous Voice Consumption (2)',
					value: 'servicePreviousVoiceConsumptionGet',
					action: 'Execute the GET on service/{x}/previousVoiceConsumption/{x}',
				},
{
					name: 'Service Repayment Consumption',
					value: 'serviceRepaymentConsumptionListGet',
					action: 'Execute the GET on service/{x}/repaymentConsumption',
				},
{
					name: 'Service Repayment Consumption (2)',
					value: 'serviceRepaymentConsumptionGet',
					action: 'Execute the GET on service/{x}/repaymentConsumption/{x}',
				},
{
					name: 'Service Task',
					value: 'serviceTaskListGet',
					action: 'Execute the GET on service/{x}/task',
				},
{
					name: 'Service Task (2)',
					value: 'serviceTaskGet',
					action: 'Execute the GET on service/{x}/task/{x}',
				},
{
					name: 'Service Voice Consumption',
					value: 'serviceVoiceConsumptionListGet',
					action: 'Execute the GET on service/{x}/voiceConsumption',
				},
{
					name: 'Service Voice Consumption (2)',
					value: 'serviceVoiceConsumptionGet',
					action: 'Execute the GET on service/{x}/voiceConsumption/{x}',
				},
{
					name: 'Set Default SIP Domain',
					value: 'setDefaultSipDomainPost',
					action: 'Set the default SIP domain for a country and type',
				},
{
					name: 'Softphone Logo',
					value: 'softphoneLogoDelete',
					action: 'Execute the DELETE on softphone/logo',
				},
{
					name: 'Softphone Logo (2)',
					value: 'softphoneLogoListGet',
					action: 'Execute the GET on softphone/logo',
				},
{
					name: 'Softphone Logo (3)',
					value: 'softphoneLogoPut',
					action: 'Execute the PUT on softphone/logo',
				},
{
					name: 'Softphone Store Links List',
					value: 'softphoneStoreLinksListGet',
					action: 'Get softphone application stores links',
				},
{
					name: 'Softphone Theme',
					value: 'softphoneThemeListGet',
					action: 'Execute the GET on softphone/theme',
				},
{
					name: 'Softphone Theme (2)',
					value: 'softphoneThemePut',
					action: 'Execute the PUT on softphone/theme',
				},
{
					name: 'Softphone Theme (3)',
					value: 'softphoneThemesGet',
					action: 'Get softphone theme information',
				},
{
					name: 'Softphone Themes List',
					value: 'softphoneThemesListGet',
					action: 'Get IDs of available softphone themes',
				},
{
					name: 'Sound Create',
					value: 'soundsPost',
					action: 'Create a new sound',
				},
{
					name: 'Sound Delete',
					value: 'soundsDelete',
					action: 'Delete the sound',
				},
{
					name: 'Sound Get',
					value: 'soundsGet',
					action: 'Get this object properties',
				},
{
					name: 'Sound Update',
					value: 'soundsPut',
					action: 'Alter this object properties',
				},
{
					name: 'Sounds List',
					value: 'soundsListGet',
					action: 'Sounds attached to this telephony account',
				},
{
					name: 'Spare Brands List',
					value: 'spareBrandsListGet',
					action: 'Get all available spare brands',
				},
{
					name: 'Spare Compatible Replacement List',
					value: 'spareCompatibleReplacementListGet',
					action: 'Return the list of phone domains compatible to be replaced',
				},
{
					name: 'Spare Delete',
					value: 'spareDelete',
					action: 'Delete the spare as if it was not belonging to OVH anymore',
				},
{
					name: 'Spare Get',
					value: 'spareGet',
					action: 'Get this object properties',
				},
{
					name: 'Spare List',
					value: 'spareListGet',
					action: 'List available services',
				},
{
					name: 'Spare Replace',
					value: 'spareReplacePost',
					action: 'Replace the phone by its spare',
				},
{
					name: 'Spare Service Infos List',
					value: 'spareServiceInfosListGet',
					action: 'Get service information',
				},
{
					name: 'Spare Service Infos Update',
					value: 'spareServiceInfosPut',
					action: 'Update service information',
				},
{
					name: 'Task Get',
					value: 'taskGet',
					action: 'Get this object properties',
				},
{
					name: 'Task List',
					value: 'taskListGet',
					action: 'Operations on a telephony billing account',
				},
{
					name: 'Terminate Billing Account',
					value: 'billingAccountDelete',
					action: 'Ask for a billing account termination.',
				},
{
					name: 'Time Condition',
					value: 'timeConditionListGet',
					action: 'Execute the GET on timeCondition',
				},
{
					name: 'Time Condition (2)',
					value: 'timeConditionGet',
					action: 'Execute the GET on timeCondition/{x}',
				},
{
					name: 'Time Condition Condition',
					value: 'timeConditionConditionListGet',
					action: 'Execute the GET on timeCondition/{x}/condition',
				},
{
					name: 'Time Condition Condition (2)',
					value: 'timeConditionConditionPost',
					action: 'Execute the POST on timeCondition/{x}/condition',
				},
{
					name: 'Time Condition Condition (3)',
					value: 'timeConditionConditionDelete',
					action: 'Execute the DELETE on timeCondition/{x}/condition/{x}',
				},
{
					name: 'Time Condition Condition (4)',
					value: 'timeConditionConditionGet',
					action: 'Execute the GET on timeCondition/{x}/condition/{x}',
				},
{
					name: 'Time Condition Condition (5)',
					value: 'timeConditionConditionPut',
					action: 'Execute the PUT on timeCondition/{x}/condition/{x}',
				},
{
					name: 'Time Condition Options',
					value: 'timeConditionOptionsListGet',
					action: 'Execute the GET on timeCondition/{x}/options',
				},
{
					name: 'Time Condition Options (2)',
					value: 'timeConditionOptionsPut',
					action: 'Execute the PUT on timeCondition/{x}/options',
				},
{
					name: 'Transfer Security Deposit',
					value: 'transferSecurityDepositPost',
					action: 'Transfer security deposit between two billing accounts',
				},
{
					name: 'Trunk',
					value: 'trunkListGet',
					action: 'Execute the GET on trunk',
				},
{
					name: 'Trunk (2)',
					value: 'trunkGet',
					action: 'Execute the GET on trunk/{x}',
				},
{
					name: 'Trunk Channels Packs Repartition',
					value: 'trunkChannelsPacksRepartitionListGet',
					action: 'Execute the GET on trunk/{x}/channelsPacksRepartition',
				},
{
					name: 'Trunk External Displayed Number',
					value: 'trunkExternalDisplayedNumberListGet',
					action: 'Execute the GET on trunk/{x}/externalDisplayedNumber',
				},
{
					name: 'Trunk External Displayed Number (2)',
					value: 'trunkExternalDisplayedNumberPost',
					action: 'Execute the POST on trunk/{x}/externalDisplayedNumber',
				},
{
					name: 'Trunk External Displayed Number (3)',
					value: 'trunkExternalDisplayedNumberDelete',
					action: 'Execute the DELETE on trunk/{x}/externalDisplayedNumber/{x}',
				},
{
					name: 'Trunk External Displayed Number (4)',
					value: 'trunkExternalDisplayedNumberGet',
					action: 'Execute the GET on trunk/{x}/externalDisplayedNumber/{x}',
				},
{
					name: 'Trunk External Displayed Number Validate',
					value: 'trunkExternalDisplayedNumberValidatePost',
					action: 'Execute the POST on trunk/{x}/externalDisplayedNumber/{x}/validate',
				},
{
					name: 'Update Alias Service Info',
					value: 'aliasServiceInfosPut',
					action: 'Update service information for an alias',
				},
{
					name: 'Update Billing Account',
					value: 'billingAccountPut',
					action: 'Alter this object properties',
				},
{
					name: 'Update Line Service Info',
					value: 'linesServiceInfosPut',
					action: 'Update service information for a line',
				},
{
					name: 'Update Number',
					value: 'linesNumberPut',
					action: 'Update number properties',
				},
{
					name: 'Update Portability',
					value: 'linesPortabilityPut',
					action: 'Update portability properties',
				},
{
					name: 'Update SIM',
					value: 'linesSimPut',
					action: 'Update SIM properties',
				},
{
					name: 'Update Trunk Service Info',
					value: 'trunksServiceInfosPut',
					action: 'Update service information for a trunk',
				},
{
					name: 'Voicemail',
					value: 'voicemailListGet',
					action: 'Execute the GET on voicemail',
				},
{
					name: 'Voicemail (2)',
					value: 'voicemailGet',
					action: 'Execute the GET on voicemail/{x}',
				},
{
					name: 'Voicemail (3)',
					value: 'voicemailPut',
					action: 'Execute the PUT on voicemail/{x}',
				},
{
					name: 'Voicemail Directories',
					value: 'voicemailDirectoriesListGet',
					action: 'Execute the GET on voicemail/{x}/directories',
				},
{
					name: 'Voicemail Directories (2)',
					value: 'voicemailDirectoriesDelete',
					action: 'Execute the DELETE on voicemail/{x}/directories/{x}',
				},
{
					name: 'Voicemail Directories (3)',
					value: 'voicemailDirectoriesGet',
					action: 'Execute the GET on voicemail/{x}/directories/{x}',
				},
{
					name: 'Voicemail Directories Download',
					value: 'voicemailDirectoriesDownloadListGet',
					action: 'Execute the GET on voicemail/{x}/directories/{x}/download',
				},
{
					name: 'Voicemail Directories Move',
					value: 'voicemailDirectoriesMovePost',
					action: 'Execute the POST on voicemail/{x}/directories/{x}/move',
				},
{
					name: 'Voicemail Directories Transcript',
					value: 'voicemailDirectoriesTranscriptListGet',
					action: 'Execute the GET on voicemail/{x}/directories/{x}/transcript',
				},
{
					name: 'Voicemail Greetings',
					value: 'voicemailGreetingsListGet',
					action: 'Execute the GET on voicemail/{x}/greetings',
				},
{
					name: 'Voicemail Greetings (2)',
					value: 'voicemailGreetingsPost',
					action: 'Execute the POST on voicemail/{x}/greetings',
				},
{
					name: 'Voicemail Greetings (3)',
					value: 'voicemailGreetingsDelete',
					action: 'Execute the DELETE on voicemail/{x}/greetings/{x}',
				},
{
					name: 'Voicemail Greetings (4)',
					value: 'voicemailGreetingsGet',
					action: 'Execute the GET on voicemail/{x}/greetings/{x}',
				},
{
					name: 'Voicemail Greetings Download',
					value: 'voicemailGreetingsDownloadListGet',
					action: 'Execute the GET on voicemail/{x}/greetings/{x}/download',
				},
{
					name: 'Voicemail Greetings Move',
					value: 'voicemailGreetingsMovePost',
					action: 'Execute the POST on voicemail/{x}/greetings/{x}/move',
				},
{
					name: 'Voicemail Migrate On New Version',
					value: 'voicemailMigrateOnNewVersionPost',
					action: 'Execute the POST on voicemail/{x}/migrateOnNewVersion',
				},
{
					name: 'Voicemail Settings',
					value: 'voicemailSettingsListGet',
					action: 'Execute the GET on voicemail/{x}/settings',
				},
{
					name: 'Voicemail Settings (2)',
					value: 'voicemailSettingsPut',
					action: 'Execute the PUT on voicemail/{x}/settings',
				},
{
					name: 'Voicemail Settings Change Password',
					value: 'voicemailSettingsChangePasswordPost',
					action: 'Execute the POST on voicemail/{x}/settings/changePassword',
				},
{
					name: 'Voicemail Settings Change Routing',
					value: 'voicemailSettingsChangeRoutingPost',
					action: 'Execute the POST on voicemail/{x}/settings/changeRouting',
				},
{
					name: 'Voicemail Settings Routing',
					value: 'voicemailSettingsRoutingListGet',
					action: 'Execute the GET on voicemail/{x}/settings/routing',
				},
{
					name: 'Voicemail Settings Voicemail Numbers',
					value: 'voicemailSettingsVoicemailNumbersListGet',
					action: 'Execute the GET on voicemail/{x}/settings/voicemailNumbers',
				},
{
					name: 'Vxml Get',
					value: 'vxmlGet',
					action: 'Get this object properties',
				},
{
					name: 'Vxml List',
					value: 'vxmlListGet',
					action: 'Vxml numbers associated with this billing account',
				},
{
					name: 'Vxml Settings List',
					value: 'vxmlSettingsListGet',
					action: 'Get this object properties',
				},
{
					name: 'Vxml Settings Logs Create',
					value: 'vxmlSettingsLogsPost',
					action: 'Generate a temporary url to retrieve device logs',
				},
{
					name: 'Vxml Settings Update',
					value: 'vxmlSettingsPut',
					action: 'Alter this object properties',
				}

			],
			default: 'telephonyListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionAliasListGet({
			...displayOptions,
			show: { telephonyOperation: ['aliasListGet'] },
		}) as INodeProperties[]),
		...(descriptionAliasGet({
			...displayOptions,
			show: { telephonyOperation: ['aliasGet'] },
		}) as INodeProperties[]),
		...(descriptionAliasChangeContactPost({
			...displayOptions,
			show: { telephonyOperation: ['aliasChangeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionAliasServiceInfosGet({
			...displayOptions,
			show: { telephonyOperation: ['aliasServiceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionAliasServiceInfosPut({
			...displayOptions,
			show: { telephonyOperation: ['aliasServiceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesGet({
			...displayOptions,
			show: { telephonyOperation: ['linesGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesChangeContactPost({
			...displayOptions,
			show: { telephonyOperation: ['linesChangeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionLinesServiceInfosGet({
			...displayOptions,
			show: { telephonyOperation: ['linesServiceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesServiceInfosPut({
			...displayOptions,
			show: { telephonyOperation: ['linesServiceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesHardwareListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesHardwareListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesHardwarePost({
			...displayOptions,
			show: { telephonyOperation: ['linesHardwarePost'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberPost'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberGet({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberPut({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesNumberDelete({
			...displayOptions,
			show: { telephonyOperation: ['linesNumberDelete'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityPost({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityPost'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityGet({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityPut({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesPortabilityDelete({
			...displayOptions,
			show: { telephonyOperation: ['linesPortabilityDelete'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimListGet({
			...displayOptions,
			show: { telephonyOperation: ['linesSimListGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimPost({
			...displayOptions,
			show: { telephonyOperation: ['linesSimPost'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimGet({
			...displayOptions,
			show: { telephonyOperation: ['linesSimGet'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimPut({
			...displayOptions,
			show: { telephonyOperation: ['linesSimPut'] },
		}) as INodeProperties[]),
		...(descriptionLinesSimDelete({
			...displayOptions,
			show: { telephonyOperation: ['linesSimDelete'] },
		}) as INodeProperties[]),
		...(descriptionTrunksListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksListGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksChangeContactPost({
			...displayOptions,
			show: { telephonyOperation: ['trunksChangeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionTrunksServiceInfosGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksServiceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksServiceInfosPut({
			...displayOptions,
			show: { telephonyOperation: ['trunksServiceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptionTrunksHardwareListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksHardwareListGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksHardwarePost({
			...displayOptions,
			show: { telephonyOperation: ['trunksHardwarePost'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberListGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberPost'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberGet({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberGet'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberPut({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberPut'] },
		}) as INodeProperties[]),
		...(descriptionTrunksNumberDelete({
			...displayOptions,
			show: { telephonyOperation: ['trunksNumberDelete'] },
		}) as INodeProperties[]),
		...(descriptionNumbersListGet({
			...displayOptions,
			show: { telephonyOperation: ['numbersListGet'] },
		}) as INodeProperties[]),
		...(descriptionNumbersGet({
			...displayOptions,
			show: { telephonyOperation: ['numbersGet'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPost({
			...displayOptions,
			show: { telephonyOperation: ['numbersPost'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPut({
			...displayOptions,
			show: { telephonyOperation: ['numbersPut'] },
		}) as INodeProperties[]),
		...(descriptionNumbersDelete({
			...displayOptions,
			show: { telephonyOperation: ['numbersDelete'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityListGet({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityListGet'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityPost({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityPost'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityGet({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityGet'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityPut({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityPut'] },
		}) as INodeProperties[]),
		...(descriptionNumbersPortabilityDelete({
			...displayOptions,
			show: { telephonyOperation: ['numbersPortabilityDelete'] },
		}) as INodeProperties[]),
		...(descriptionAccessoriesGet({
			...displayOptions,
			show: { telephonyOperation: ['accessoriesGet'] },
		}) as INodeProperties[]),
		...(descriptionLineOffersGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOffersGet'] },
		}) as INodeProperties[]),
		...(descriptionLineOfferPhonesGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOfferPhonesGet'] },
		}) as INodeProperties[]),
		...(descriptionFaxOffersGet({
			...displayOptions,
			show: { telephonyOperation: ['faxOffersGet'] },
		}) as INodeProperties[]),
		...(descriptionLineOfferDetailsGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOfferDetailsGet'] },
		}) as INodeProperties[]),
		...(descriptionDirectoriesCitiesGet({
			...displayOptions,
			show: { telephonyOperation: ['directoriesCitiesGet'] },
		}) as INodeProperties[]),
		...(descriptionDirectoriesAvailableZipCodesGet({
			...displayOptions,
			show: { telephonyOperation: ['directoriesAvailableZipCodesGet'] },
		}) as INodeProperties[]),
		...(descriptionDirectoriesServicesGet({
			...displayOptions,
			show: { telephonyOperation: ['directoriesServicesGet'] },
		}) as INodeProperties[]),
		...(descriptionDirectoriesCountriesGet({
			...displayOptions,
			show: { telephonyOperation: ['directoriesCountriesGet'] },
		}) as INodeProperties[]),
		...(descriptionTelephonyListGet({
			...displayOptions,
			show: { telephonyOperation: ['telephonyListGet'] },
		}) as INodeProperties[]),
		...(descriptionSipDomainsGet({
			...displayOptions,
			show: { telephonyOperation: ['sipDomainsGet'] },
		}) as INodeProperties[]),
		...(descriptionCurrentOrderIdsGet({
			...displayOptions,
			show: { telephonyOperation: ['currentOrderIdsGet'] },
		}) as INodeProperties[]),
		...(descriptionSearchServicesGet({
			...displayOptions,
			show: { telephonyOperation: ['searchServicesGet'] },
		}) as INodeProperties[]),
		...(descriptionSetDefaultSipDomainPost({
			...displayOptions,
			show: { telephonyOperation: ['setDefaultSipDomainPost'] },
		}) as INodeProperties[]),

		...(descriptionabbreviatedNumberDelete({
			...displayOptions,
			show: { telephonyOperation: ['abbreviatedNumberDelete'] },
		}) as INodeProperties[]),
		...(descriptionabbreviatedNumberGet({
			...displayOptions,
			show: { telephonyOperation: ['abbreviatedNumberGet'] },
		}) as INodeProperties[]),
		...(descriptionabbreviatedNumberListGet({
			...displayOptions,
			show: { telephonyOperation: ['abbreviatedNumberListGet'] },
		}) as INodeProperties[]),
		...(descriptionabbreviatedNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['abbreviatedNumberPost'] },
		}) as INodeProperties[]),
		...(descriptionabbreviatedNumberPut({
			...displayOptions,
			show: { telephonyOperation: ['abbreviatedNumberPut'] },
		}) as INodeProperties[]),
		...(descriptionallowedCreditThresholdGet({
			...displayOptions,
			show: { telephonyOperation: ['allowedCreditThresholdGet'] },
		}) as INodeProperties[]),
		...(descriptionamountSecurityDepositGet({
			...displayOptions,
			show: { telephonyOperation: ['amountSecurityDepositGet'] },
		}) as INodeProperties[]),
		...(descriptionbillingAccountDelete({
			...displayOptions,
			show: { telephonyOperation: ['billingAccountDelete'] },
		}) as INodeProperties[]),
		...(descriptionbillingAccountGet({
			...displayOptions,
			show: { telephonyOperation: ['billingAccountGet'] },
		}) as INodeProperties[]),
		...(descriptionbillingAccountPut({
			...displayOptions,
			show: { telephonyOperation: ['billingAccountPut'] },
		}) as INodeProperties[]),
		...(descriptionbillingAccountSiteGet({
			...displayOptions,
			show: { telephonyOperation: ['billingAccountSiteGet'] },
		}) as INodeProperties[]),
		...(descriptionbillingAccountSitePost({
			...displayOptions,
			show: { telephonyOperation: ['billingAccountSitePost'] },
		}) as INodeProperties[]),
		...(descriptioncanTransferSecurityDepositPost({
			...displayOptions,
			show: { telephonyOperation: ['canTransferSecurityDepositPost'] },
		}) as INodeProperties[]),
		...(descriptioncancelTerminationPost({
			...displayOptions,
			show: { telephonyOperation: ['cancelTerminationPost'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipCdrsListGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipCdrsListGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipClusterDetailsListGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipClusterDetailsListGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipEndpointsGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipEndpointsGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipEndpointsListGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipEndpointsListGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipListGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipListGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipSettingsListGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipSettingsListGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipSettingsPut({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipSettingsPut'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipVnoGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipVnoGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipVnoListGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipVnoListGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipVnoRangesGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipVnoRangesGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipVnoRangesListGet({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipVnoRangesListGet'] },
		}) as INodeProperties[]),
		...(descriptioncarrierSipVnoRangesPut({
			...displayOptions,
			show: { telephonyOperation: ['carrierSipVnoRangesPut'] },
		}) as INodeProperties[]),
		...(descriptionchangeContactPost({
			...displayOptions,
			show: { telephonyOperation: ['changeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionfaxCampaignsDelete({
			...displayOptions,
			show: { telephonyOperation: ['faxCampaignsDelete'] },
		}) as INodeProperties[]),
		...(descriptionfaxCampaignsDetailListGet({
			...displayOptions,
			show: { telephonyOperation: ['faxCampaignsDetailListGet'] },
		}) as INodeProperties[]),
		...(descriptionfaxCampaignsGet({
			...displayOptions,
			show: { telephonyOperation: ['faxCampaignsGet'] },
		}) as INodeProperties[]),
		...(descriptionfaxCampaignsListGet({
			...displayOptions,
			show: { telephonyOperation: ['faxCampaignsListGet'] },
		}) as INodeProperties[]),
		...(descriptionfaxCampaignsPost({
			...displayOptions,
			show: { telephonyOperation: ['faxCampaignsPost'] },
		}) as INodeProperties[]),
		...(descriptionfaxCampaignsStartPost({
			...displayOptions,
			show: { telephonyOperation: ['faxCampaignsStartPost'] },
		}) as INodeProperties[]),
		...(descriptionfaxCampaignsStopPost({
			...displayOptions,
			show: { telephonyOperation: ['faxCampaignsStopPost'] },
		}) as INodeProperties[]),
		...(descriptionfaxGet({
			...displayOptions,
			show: { telephonyOperation: ['faxGet'] },
		}) as INodeProperties[]),
		...(descriptionfaxListGet({
			...displayOptions,
			show: { telephonyOperation: ['faxListGet'] },
		}) as INodeProperties[]),
		...(descriptionfaxPut({
			...displayOptions,
			show: { telephonyOperation: ['faxPut'] },
		}) as INodeProperties[]),
		...(descriptionfaxScreenListsDelete({
			...displayOptions,
			show: { telephonyOperation: ['faxScreenListsDelete'] },
		}) as INodeProperties[]),
		...(descriptionfaxScreenListsListGet({
			...displayOptions,
			show: { telephonyOperation: ['faxScreenListsListGet'] },
		}) as INodeProperties[]),
		...(descriptionfaxScreenListsPost({
			...displayOptions,
			show: { telephonyOperation: ['faxScreenListsPost'] },
		}) as INodeProperties[]),
		...(descriptionfaxScreenListsPut({
			...displayOptions,
			show: { telephonyOperation: ['faxScreenListsPut'] },
		}) as INodeProperties[]),
		...(descriptionfaxScreenListsResetPost({
			...displayOptions,
			show: { telephonyOperation: ['faxScreenListsResetPost'] },
		}) as INodeProperties[]),
		...(descriptionfaxSettingsChangePasswordPost({
			...displayOptions,
			show: { telephonyOperation: ['faxSettingsChangePasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionfaxSettingsListGet({
			...displayOptions,
			show: { telephonyOperation: ['faxSettingsListGet'] },
		}) as INodeProperties[]),
		...(descriptionfaxSettingsPut({
			...displayOptions,
			show: { telephonyOperation: ['faxSettingsPut'] },
		}) as INodeProperties[]),
		...(descriptionfaxSettingsSendFaxPost({
			...displayOptions,
			show: { telephonyOperation: ['faxSettingsSendFaxPost'] },
		}) as INodeProperties[]),
		...(descriptionlineAbbreviatedNumberDelete({
			...displayOptions,
			show: { telephonyOperation: ['lineAbbreviatedNumberDelete'] },
		}) as INodeProperties[]),
		...(descriptionlineAbbreviatedNumberGet({
			...displayOptions,
			show: { telephonyOperation: ['lineAbbreviatedNumberGet'] },
		}) as INodeProperties[]),
		...(descriptionlineAbbreviatedNumberListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineAbbreviatedNumberListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineAbbreviatedNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['lineAbbreviatedNumberPost'] },
		}) as INodeProperties[]),
		...(descriptionlineAbbreviatedNumberPut({
			...displayOptions,
			show: { telephonyOperation: ['lineAbbreviatedNumberPut'] },
		}) as INodeProperties[]),
		...(descriptionlineActivateNewPhoneListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineActivateNewPhoneListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineActivateNewPhonePost({
			...displayOptions,
			show: { telephonyOperation: ['lineActivateNewPhonePost'] },
		}) as INodeProperties[]),
		...(descriptionlineAntihackListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineAntihackListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineAntihackPost({
			...displayOptions,
			show: { telephonyOperation: ['lineAntihackPost'] },
		}) as INodeProperties[]),
		...(descriptionlineAssociateDevicePost({
			...displayOptions,
			show: { telephonyOperation: ['lineAssociateDevicePost'] },
		}) as INodeProperties[]),
		...(descriptionlineAutomaticCallGet({
			...displayOptions,
			show: { telephonyOperation: ['lineAutomaticCallGet'] },
		}) as INodeProperties[]),
		...(descriptionlineAutomaticCallListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineAutomaticCallListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineAutomaticCallPost({
			...displayOptions,
			show: { telephonyOperation: ['lineAutomaticCallPost'] },
		}) as INodeProperties[]),
		...(descriptionlineAvailableSipDomainsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineAvailableSipDomainsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineBlockPost({
			...displayOptions,
			show: { telephonyOperation: ['lineBlockPost'] },
		}) as INodeProperties[]),
		...(descriptionlineCallsEavesdropPost({
			...displayOptions,
			show: { telephonyOperation: ['lineCallsEavesdropPost'] },
		}) as INodeProperties[]),
		...(descriptionlineCallsGet({
			...displayOptions,
			show: { telephonyOperation: ['lineCallsGet'] },
		}) as INodeProperties[]),
		...(descriptionlineCallsHangupPost({
			...displayOptions,
			show: { telephonyOperation: ['lineCallsHangupPost'] },
		}) as INodeProperties[]),
		...(descriptionlineCallsHoldPost({
			...displayOptions,
			show: { telephonyOperation: ['lineCallsHoldPost'] },
		}) as INodeProperties[]),
		...(descriptionlineCallsInterceptPost({
			...displayOptions,
			show: { telephonyOperation: ['lineCallsInterceptPost'] },
		}) as INodeProperties[]),
		...(descriptionlineCallsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineCallsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineCallsTransferPost({
			...displayOptions,
			show: { telephonyOperation: ['lineCallsTransferPost'] },
		}) as INodeProperties[]),
		...(descriptionlineCallsWhisperPost({
			...displayOptions,
			show: { telephonyOperation: ['lineCallsWhisperPost'] },
		}) as INodeProperties[]),
		...(descriptionlineCanChangePasswordListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineCanChangePasswordListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineCancelConvertToNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['lineCancelConvertToNumberPost'] },
		}) as INodeProperties[]),
		...(descriptionlineChangePasswordPost({
			...displayOptions,
			show: { telephonyOperation: ['lineChangePasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionlineClick2CallPost({
			...displayOptions,
			show: { telephonyOperation: ['lineClick2CallPost'] },
		}) as INodeProperties[]),
		...(descriptionlineClick2CallUserChangePasswordPost({
			...displayOptions,
			show: { telephonyOperation: ['lineClick2CallUserChangePasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionlineClick2CallUserClick2CallPost({
			...displayOptions,
			show: { telephonyOperation: ['lineClick2CallUserClick2CallPost'] },
		}) as INodeProperties[]),
		...(descriptionlineClick2CallUserDelete({
			...displayOptions,
			show: { telephonyOperation: ['lineClick2CallUserDelete'] },
		}) as INodeProperties[]),
		...(descriptionlineClick2CallUserGet({
			...displayOptions,
			show: { telephonyOperation: ['lineClick2CallUserGet'] },
		}) as INodeProperties[]),
		...(descriptionlineClick2CallUserListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineClick2CallUserListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineClick2CallUserPost({
			...displayOptions,
			show: { telephonyOperation: ['lineClick2CallUserPost'] },
		}) as INodeProperties[]),
		...(descriptionlineConvertToNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['lineConvertToNumberPost'] },
		}) as INodeProperties[]),
		...(descriptionlineDissociateDevicePost({
			...displayOptions,
			show: { telephonyOperation: ['lineDissociateDevicePost'] },
		}) as INodeProperties[]),
		...(descriptionlineGet({
			...displayOptions,
			show: { telephonyOperation: ['lineGet'] },
		}) as INodeProperties[]),
		...(descriptionlineIpsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineIpsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineLastRegistrationsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineLastRegistrationsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineListAssociablePhonesListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineListAssociablePhonesListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineMaximumAvailableSimultaneousLinesListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineMaximumAvailableSimultaneousLinesListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineOfferListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOfferListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineOptionsAvailableCodecsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOptionsAvailableCodecsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineOptionsDefaultCodecsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOptionsDefaultCodecsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineOptionsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineOptionsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineOptionsPut({
			...displayOptions,
			show: { telephonyOperation: ['lineOptionsPut'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneAdminCredentialsListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneAdminCredentialsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneCanBeAssociableListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneCanBeAssociableListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneChangePhoneConfigurationPost({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneChangePhoneConfigurationPost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneFunctionKeyAvailableFunctionListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneFunctionKeyAvailableFunctionListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneFunctionKeyGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneFunctionKeyGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneFunctionKeyListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneFunctionKeyListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneFunctionKeyPut({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneFunctionKeyPut'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneMerchandiseAvailableListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneMerchandiseAvailableListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookDelete({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookDelete'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookExportListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookExportListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookImportPost({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookImportPost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookPhonebookContactDelete({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookPhonebookContactDelete'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookPhonebookContactGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookPhonebookContactGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookPhonebookContactListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookPhonebookContactListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookPhonebookContactPost({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookPhonebookContactPost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookPhonebookContactPut({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookPhonebookContactPut'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookPost({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookPost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePhonebookPut({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePhonebookPut'] },
		}) as INodeProperties[]),
		...(descriptionlinePhonePut({
			...displayOptions,
			show: { telephonyOperation: ['linePhonePut'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneRebootPost({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneRebootPost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneRefreshScreenPost({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneRefreshScreenPost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneResetConfigPost({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneResetConfigPost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneRmaChangeTypePost({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneRmaChangeTypePost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneRmaDelete({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneRmaDelete'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneRmaGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneRmaGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneRmaListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneRmaListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneRmaPost({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneRmaPost'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneRmaPut({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneRmaPut'] },
		}) as INodeProperties[]),
		...(descriptionlinePhoneSupportsPhonebookListGet({
			...displayOptions,
			show: { telephonyOperation: ['linePhoneSupportsPhonebookListGet'] },
		}) as INodeProperties[]),
		...(descriptionlinePut({
			...displayOptions,
			show: { telephonyOperation: ['linePut'] },
		}) as INodeProperties[]),
		...(descriptionlineRecordsDelete({
			...displayOptions,
			show: { telephonyOperation: ['lineRecordsDelete'] },
		}) as INodeProperties[]),
		...(descriptionlineRecordsGet({
			...displayOptions,
			show: { telephonyOperation: ['lineRecordsGet'] },
		}) as INodeProperties[]),
		...(descriptionlineRecordsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineRecordsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineRemoveSimultaneousLinesPost({
			...displayOptions,
			show: { telephonyOperation: ['lineRemoveSimultaneousLinesPost'] },
		}) as INodeProperties[]),
		...(descriptionlineSimultaneousChannelsDetailsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineSimultaneousChannelsDetailsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneBetaListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneBetaListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneBetaPut({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneBetaPut'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneDevicesDelete({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneDevicesDelete'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneDevicesDisconnectPost({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneDevicesDisconnectPost'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneDevicesListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneDevicesListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneLogoDelete({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneLogoDelete'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneLogoListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneLogoListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneLogoPut({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneLogoPut'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneStatusListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneThemeDelete({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneThemeDelete'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneThemeListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneThemeListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneThemePut({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneThemePut'] },
		}) as INodeProperties[]),
		...(descriptionlineSoftphoneTokenPost({
			...displayOptions,
			show: { telephonyOperation: ['lineSoftphoneTokenPost'] },
		}) as INodeProperties[]),
		...(descriptionlineStatisticsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineStatisticsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineTonesListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineTonesListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineTonesPut({
			...displayOptions,
			show: { telephonyOperation: ['lineTonesPut'] },
		}) as INodeProperties[]),
		...(descriptionlineTonesToneUploadPost({
			...displayOptions,
			show: { telephonyOperation: ['lineTonesToneUploadPost'] },
		}) as INodeProperties[]),
		...(descriptionlineTrafficExtractsDelete({
			...displayOptions,
			show: { telephonyOperation: ['lineTrafficExtractsDelete'] },
		}) as INodeProperties[]),
		...(descriptionlineTrafficExtractsGet({
			...displayOptions,
			show: { telephonyOperation: ['lineTrafficExtractsGet'] },
		}) as INodeProperties[]),
		...(descriptionlineTrafficExtractsListGet({
			...displayOptions,
			show: { telephonyOperation: ['lineTrafficExtractsListGet'] },
		}) as INodeProperties[]),
		...(descriptionlineTrafficExtractsPost({
			...displayOptions,
			show: { telephonyOperation: ['lineTrafficExtractsPost'] },
		}) as INodeProperties[]),
		...(descriptionlineUnblockPost({
			...displayOptions,
			show: { telephonyOperation: ['lineUnblockPost'] },
		}) as INodeProperties[]),
		...(descriptionnumberCancelConvertToLinePost({
			...displayOptions,
			show: { telephonyOperation: ['numberCancelConvertToLinePost'] },
		}) as INodeProperties[]),
		...(descriptionnumberChangeFeatureTypePost({
			...displayOptions,
			show: { telephonyOperation: ['numberChangeFeatureTypePost'] },
		}) as INodeProperties[]),
		...(descriptionnumberConvertToLineAvailableOffersListGet({
			...displayOptions,
			show: { telephonyOperation: ['numberConvertToLineAvailableOffersListGet'] },
		}) as INodeProperties[]),
		...(descriptionnumberConvertToLinePost({
			...displayOptions,
			show: { telephonyOperation: ['numberConvertToLinePost'] },
		}) as INodeProperties[]),
		...(descriptionnumberGet({
			...displayOptions,
			show: { telephonyOperation: ['numberGet'] },
		}) as INodeProperties[]),
		...(descriptionnumberListGet({
			...displayOptions,
			show: { telephonyOperation: ['numberListGet'] },
		}) as INodeProperties[]),
		...(descriptionnumberPut({
			...displayOptions,
			show: { telephonyOperation: ['numberPut'] },
		}) as INodeProperties[]),
		...(descriptionportabilityGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityGet'] },
		}) as INodeProperties[]),
		...(descriptionserviceInfosListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceInfosListGet'] },
		}) as INodeProperties[]),
		...(descriptionserviceInfosPut({
			...displayOptions,
			show: { telephonyOperation: ['serviceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptiontaskGet({
			...displayOptions,
			show: { telephonyOperation: ['taskGet'] },
		}) as INodeProperties[]),
		...(descriptiontaskListGet({
			...displayOptions,
			show: { telephonyOperation: ['taskListGet'] },
		}) as INodeProperties[]),
		...(descriptiontransferSecurityDepositPost({
			...displayOptions,
			show: { telephonyOperation: ['transferSecurityDepositPost'] },
		}) as INodeProperties[]),
		...(descriptionvxmlGet({
			...displayOptions,
			show: { telephonyOperation: ['vxmlGet'] },
		}) as INodeProperties[]),
		...(descriptionvxmlListGet({
			...displayOptions,
			show: { telephonyOperation: ['vxmlListGet'] },
		}) as INodeProperties[]),
		...(descriptionvxmlSettingsListGet({
			...displayOptions,
			show: { telephonyOperation: ['vxmlSettingsListGet'] },
		}) as INodeProperties[]),
		...(descriptionvxmlSettingsLogsPost({
			...displayOptions,
			show: { telephonyOperation: ['vxmlSettingsLogsPost'] },
		}) as INodeProperties[]),
		...(descriptionvxmlSettingsPut({
			...displayOptions,
			show: { telephonyOperation: ['vxmlSettingsPut'] },
		}) as INodeProperties[]),

		...(descriptionconferenceListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceAnnounceUploadPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceAnnounceUploadPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceHistoriesListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceHistoriesListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceHistoriesGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceHistoriesGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceInformationsListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceInformationsListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceLockPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceLockPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceParticipantsListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceParticipantsListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceParticipantsGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceParticipantsGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceParticipantsDeafPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceParticipantsDeafPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceParticipantsEnergyPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceParticipantsEnergyPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceParticipantsKickPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceParticipantsKickPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceParticipantsMutePost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceParticipantsMutePost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceParticipantsUndeafPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceParticipantsUndeafPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceParticipantsUnmutePost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceParticipantsUnmutePost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsPut({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsPut'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsHistoriesListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsHistoriesListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsHistoriesGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsHistoriesGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsLockPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsLockPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsParticipantsListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsParticipantsListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsParticipantsGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsParticipantsGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsParticipantsDeafPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsParticipantsDeafPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsParticipantsEnergyPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsParticipantsEnergyPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsParticipantsKickPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsParticipantsKickPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsParticipantsMutePost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsParticipantsMutePost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsParticipantsUndeafPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsParticipantsUndeafPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsParticipantsUnmutePost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsParticipantsUnmutePost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsUnlockPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsUnlockPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsWebAccessListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsWebAccessListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsWebAccessPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsWebAccessPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsWebAccessDelete({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsWebAccessDelete'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsWebAccessGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsWebAccessGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceRoomsStatsListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceRoomsStatsListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceSettingsListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceSettingsListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceSettingsPut({
			...displayOptions,
			show: { telephonyOperation: ['conferenceSettingsPut'] },
		}) as INodeProperties[]),

		...(descriptionconferenceUnlockPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceUnlockPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceWebAccessListGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceWebAccessListGet'] },
		}) as INodeProperties[]),

		...(descriptionconferenceWebAccessPost({
			...displayOptions,
			show: { telephonyOperation: ['conferenceWebAccessPost'] },
		}) as INodeProperties[]),

		...(descriptionconferenceWebAccessDelete({
			...displayOptions,
			show: { telephonyOperation: ['conferenceWebAccessDelete'] },
		}) as INodeProperties[]),

		...(descriptionconferenceWebAccessGet({
			...displayOptions,
			show: { telephonyOperation: ['conferenceWebAccessGet'] },
		}) as INodeProperties[]),

		...(descriptionddiListGet({
			...displayOptions,
			show: { telephonyOperation: ['ddiListGet'] },
		}) as INodeProperties[]),

		...(descriptionddiGet({
			...displayOptions,
			show: { telephonyOperation: ['ddiGet'] },
		}) as INodeProperties[]),

		...(descriptionddiPut({
			...displayOptions,
			show: { telephonyOperation: ['ddiPut'] },
		}) as INodeProperties[]),

		...(descriptionddiChangeDestinationPost({
			...displayOptions,
			show: { telephonyOperation: ['ddiChangeDestinationPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingPut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingPut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingPut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingPut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentPut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentPut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentBannerAccessDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentBannerAccessDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentBannerAccessListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentBannerAccessListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentBannerAccessPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentBannerAccessPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentCallsListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentCallsListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentCallsGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentCallsGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentCallsEavesdropPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentCallsEavesdropPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentCallsHangupPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentCallsHangupPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentCallsHoldPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentCallsHoldPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentCallsInterceptPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentCallsInterceptPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentCallsTransferPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentCallsTransferPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentCallsWhisperPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentCallsWhisperPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentEventTokenDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentEventTokenDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentEventTokenListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentEventTokenListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentEventTokenPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentEventTokenPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentLiveStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentLiveStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentQueueListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentQueueListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentQueuePost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentQueuePost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentQueueDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentQueueDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentQueueGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentQueueGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentQueuePut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentQueuePut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingAgentQueueLiveStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingAgentQueueLiveStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingCustomStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingCustomStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingCustomStatusPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingCustomStatusPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingCustomStatusDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingCustomStatusDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingCustomStatusGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingCustomStatusGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingEventTokenDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingEventTokenDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingEventTokenListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingEventTokenListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingEventTokenPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingEventTokenPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueuePost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueuePost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueuePut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueuePut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueAgentListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueAgentListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueAgentPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueAgentPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueAgentDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueAgentDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueAgentGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueAgentGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueAgentPut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueAgentPut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueAgentLiveStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueAgentLiveStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveCallsListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveCallsListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveCallsGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveCallsGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveCallsEavesdropPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveCallsEavesdropPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveCallsHangupPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveCallsHangupPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveCallsHoldPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveCallsHoldPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveCallsInterceptPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveCallsInterceptPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveCallsTransferPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveCallsTransferPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveCallsWhisperPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveCallsWhisperPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingHuntingQueueLiveStatisticsListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingHuntingQueueLiveStatisticsListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingRecordsListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingRecordsListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingRecordsDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingRecordsDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingRecordsGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingRecordsGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingScreenListConditionsListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingScreenListConditionsListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingScreenListConditionsPut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingScreenListConditionsPut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingScreenListConditionsConditionsListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingScreenListConditionsConditionsListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingScreenListConditionsConditionsPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingScreenListConditionsConditionsPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingScreenListConditionsConditionsDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingScreenListConditionsConditionsDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingScreenListConditionsConditionsGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingScreenListConditionsConditionsGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingScreenListConditionsConditionsPut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingScreenListConditionsConditionsPut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingSoundListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingSoundListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingSoundDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingSoundDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingSoundGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingSoundGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingSoundUploadPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingSoundUploadPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingTimeConditionsListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingTimeConditionsListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingTimeConditionsPut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingTimeConditionsPut'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingTimeConditionsConditionsListGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingTimeConditionsConditionsListGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingTimeConditionsConditionsPost({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingTimeConditionsConditionsPost'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingTimeConditionsConditionsDelete({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingTimeConditionsConditionsDelete'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingTimeConditionsConditionsGet({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingTimeConditionsConditionsGet'] },
		}) as INodeProperties[]),

		...(descriptioneasyHuntingTimeConditionsConditionsPut({
			...displayOptions,
			show: { telephonyOperation: ['easyHuntingTimeConditionsConditionsPut'] },
		}) as INodeProperties[]),

		...(descriptioneventTokenDelete({
			...displayOptions,
			show: { telephonyOperation: ['eventTokenDelete'] },
		}) as INodeProperties[]),

		...(descriptioneventTokenListGet({
			...displayOptions,
			show: { telephonyOperation: ['eventTokenListGet'] },
		}) as INodeProperties[]),

		...(descriptioneventTokenPost({
			...displayOptions,
			show: { telephonyOperation: ['eventTokenPost'] },
		}) as INodeProperties[]),

		...(descriptionhasSpecialNumbersListGet({
			...displayOptions,
			show: { telephonyOperation: ['hasSpecialNumbersListGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryConsumptionListGet({
			...displayOptions,
			show: { telephonyOperation: ['historyConsumptionListGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryConsumptionGet({
			...displayOptions,
			show: { telephonyOperation: ['historyConsumptionGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryConsumptionFileListGet({
			...displayOptions,
			show: { telephonyOperation: ['historyConsumptionFileListGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryRepaymentConsumptionListGet({
			...displayOptions,
			show: { telephonyOperation: ['historyRepaymentConsumptionListGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryRepaymentConsumptionPost({
			...displayOptions,
			show: { telephonyOperation: ['historyRepaymentConsumptionPost'] },
		}) as INodeProperties[]),

		...(descriptionhistoryRepaymentConsumptionGet({
			...displayOptions,
			show: { telephonyOperation: ['historyRepaymentConsumptionGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryRepaymentConsumptionDocumentListGet({
			...displayOptions,
			show: { telephonyOperation: ['historyRepaymentConsumptionDocumentListGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryTollfreeConsumptionListGet({
			...displayOptions,
			show: { telephonyOperation: ['historyTollfreeConsumptionListGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryTollfreeConsumptionGet({
			...displayOptions,
			show: { telephonyOperation: ['historyTollfreeConsumptionGet'] },
		}) as INodeProperties[]),

		...(descriptionhistoryTollfreeConsumptionDocumentListGet({
			...displayOptions,
			show: { telephonyOperation: ['historyTollfreeConsumptionDocumentListGet'] },
		}) as INodeProperties[]),

		...(descriptionofferTaskListGet({
			...displayOptions,
			show: { telephonyOperation: ['offerTaskListGet'] },
		}) as INodeProperties[]),

		...(descriptionofferTaskGet({
			...displayOptions,
			show: { telephonyOperation: ['offerTaskGet'] },
		}) as INodeProperties[]),

		...(descriptionofferTaskPut({
			...displayOptions,
			show: { telephonyOperation: ['offerTaskPut'] },
		}) as INodeProperties[]),

		...(descriptionoldPhoneListGet({
			...displayOptions,
			show: { telephonyOperation: ['oldPhoneListGet'] },
		}) as INodeProperties[]),

		...(descriptionoutplanNotificationListGet({
			...displayOptions,
			show: { telephonyOperation: ['outplanNotificationListGet'] },
		}) as INodeProperties[]),

		...(descriptionoutplanNotificationPost({
			...displayOptions,
			show: { telephonyOperation: ['outplanNotificationPost'] },
		}) as INodeProperties[]),

		...(descriptionoutplanNotificationDelete({
			...displayOptions,
			show: { telephonyOperation: ['outplanNotificationDelete'] },
		}) as INodeProperties[]),

		...(descriptionoutplanNotificationGet({
			...displayOptions,
			show: { telephonyOperation: ['outplanNotificationGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxPut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanPut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionPut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionScreenListListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionScreenListListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionScreenListPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionScreenListPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionScreenListDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionScreenListDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionScreenListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionScreenListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionTimeListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionTimeListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionTimePost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionTimePost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionTimeDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionTimeDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionTimeGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionTimeGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionConditionTimePut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionConditionTimePut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionRuleListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionRuleListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionRulePost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionRulePost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionRuleDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionRuleDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionRuleGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionRuleGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxDialplanExtensionRulePut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxDialplanExtensionRulePut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingPut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentPut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentBannerAccessDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentBannerAccessDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentBannerAccessListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentBannerAccessListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentBannerAccessPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentBannerAccessPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentCallsListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentCallsListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentCallsGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentCallsGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentCallsEavesdropPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentCallsEavesdropPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentCallsHangupPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentCallsHangupPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentCallsHoldPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentCallsHoldPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentCallsInterceptPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentCallsInterceptPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentCallsTransferPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentCallsTransferPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentCallsWhisperPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentCallsWhisperPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentEventTokenDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentEventTokenDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentEventTokenListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentEventTokenListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentEventTokenPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentEventTokenPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentLiveStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentLiveStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentQueueListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentQueueListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentQueuePost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentQueuePost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentQueueDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentQueueDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentQueueGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentQueueGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentQueuePut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentQueuePut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingAgentQueueLiveStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingAgentQueueLiveStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingCustomStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingCustomStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingCustomStatusPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingCustomStatusPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingCustomStatusDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingCustomStatusDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingCustomStatusGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingCustomStatusGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingEventTokenDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingEventTokenDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingEventTokenListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingEventTokenListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingEventTokenPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingEventTokenPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueuePost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueuePost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueuePut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueuePut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueAgentListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueAgentListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueAgentPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueAgentPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueAgentDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueAgentDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueAgentGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueAgentGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueAgentPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueAgentPut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueAgentLiveStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueAgentLiveStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveCallsListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveCallsListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveCallsGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveCallsGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveCallsEavesdropPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveCallsEavesdropPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveCallsHangupPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveCallsHangupPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveCallsHoldPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveCallsHoldPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveCallsInterceptPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveCallsInterceptPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveCallsTransferPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveCallsTransferPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveCallsWhisperPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveCallsWhisperPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxHuntingQueueLiveStatisticsListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxHuntingQueueLiveStatisticsListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuPut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuEntryListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuEntryListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuEntryPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuEntryPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuEntryDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuEntryDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuEntryGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuEntryGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxMenuEntryPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxMenuEntryPut'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxRecordsListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxRecordsListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxRecordsDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxRecordsDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxRecordsGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxRecordsGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxSoundListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxSoundListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxSoundDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxSoundDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxSoundGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxSoundGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxSoundUploadPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxSoundUploadPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxTtsListGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxTtsListGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxTtsPost({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxTtsPost'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxTtsDelete({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxTtsDelete'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxTtsGet({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxTtsGet'] },
		}) as INodeProperties[]),

		...(descriptionovhPabxTtsPut({
			...displayOptions,
			show: { telephonyOperation: ['ovhPabxTtsPut'] },
		}) as INodeProperties[]),

		...(descriptionphonebookListGet({
			...displayOptions,
			show: { telephonyOperation: ['phonebookListGet'] },
		}) as INodeProperties[]),

		...(descriptionphonebookPost({
			...displayOptions,
			show: { telephonyOperation: ['phonebookPost'] },
		}) as INodeProperties[]),

		...(descriptionphonebookDelete({
			...displayOptions,
			show: { telephonyOperation: ['phonebookDelete'] },
		}) as INodeProperties[]),

		...(descriptionphonebookGet({
			...displayOptions,
			show: { telephonyOperation: ['phonebookGet'] },
		}) as INodeProperties[]),

		...(descriptionphonebookPut({
			...displayOptions,
			show: { telephonyOperation: ['phonebookPut'] },
		}) as INodeProperties[]),

		...(descriptionphonebookExportListGet({
			...displayOptions,
			show: { telephonyOperation: ['phonebookExportListGet'] },
		}) as INodeProperties[]),

		...(descriptionphonebookImportPost({
			...displayOptions,
			show: { telephonyOperation: ['phonebookImportPost'] },
		}) as INodeProperties[]),

		...(descriptionphonebookPhonebookContactListGet({
			...displayOptions,
			show: { telephonyOperation: ['phonebookPhonebookContactListGet'] },
		}) as INodeProperties[]),

		...(descriptionphonebookPhonebookContactPost({
			...displayOptions,
			show: { telephonyOperation: ['phonebookPhonebookContactPost'] },
		}) as INodeProperties[]),

		...(descriptionphonebookPhonebookContactDelete({
			...displayOptions,
			show: { telephonyOperation: ['phonebookPhonebookContactDelete'] },
		}) as INodeProperties[]),

		...(descriptionphonebookPhonebookContactGet({
			...displayOptions,
			show: { telephonyOperation: ['phonebookPhonebookContactGet'] },
		}) as INodeProperties[]),

		...(descriptionphonebookPhonebookContactPut({
			...displayOptions,
			show: { telephonyOperation: ['phonebookPhonebookContactPut'] },
		}) as INodeProperties[]),

		...(descriptionportabilityDetailGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityDetailGet'] },
		}) as INodeProperties[]),

		...(descriptionportabilityCanBeCancelledListGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityCanBeCancelledListGet'] },
		}) as INodeProperties[]),

		...(descriptionportabilityCanBeExecutedListGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityCanBeExecutedListGet'] },
		}) as INodeProperties[]),

		...(descriptionportabilityCancelPost({
			...displayOptions,
			show: { telephonyOperation: ['portabilityCancelPost'] },
		}) as INodeProperties[]),

		...(descriptionportabilityChangeDatePost({
			...displayOptions,
			show: { telephonyOperation: ['portabilityChangeDatePost'] },
		}) as INodeProperties[]),

		...(descriptionportabilityDateCanBeChangedListGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityDateCanBeChangedListGet'] },
		}) as INodeProperties[]),

		...(descriptionportabilityDocumentListGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityDocumentListGet'] },
		}) as INodeProperties[]),

		...(descriptionportabilityDocumentPost({
			...displayOptions,
			show: { telephonyOperation: ['portabilityDocumentPost'] },
		}) as INodeProperties[]),

		...(descriptionportabilityDocumentDelete({
			...displayOptions,
			show: { telephonyOperation: ['portabilityDocumentDelete'] },
		}) as INodeProperties[]),

		...(descriptionportabilityDocumentGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityDocumentGet'] },
		}) as INodeProperties[]),

		...(descriptionportabilityDocumentPut({
			...displayOptions,
			show: { telephonyOperation: ['portabilityDocumentPut'] },
		}) as INodeProperties[]),

		...(descriptionportabilityExecutePost({
			...displayOptions,
			show: { telephonyOperation: ['portabilityExecutePost'] },
		}) as INodeProperties[]),

		...(descriptionportabilityRelaunchListGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityRelaunchListGet'] },
		}) as INodeProperties[]),

		...(descriptionportabilityRelaunchPost({
			...displayOptions,
			show: { telephonyOperation: ['portabilityRelaunchPost'] },
		}) as INodeProperties[]),

		...(descriptionportabilityStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['portabilityStatusListGet'] },
		}) as INodeProperties[]),

		...(descriptionredirectListGet({
			...displayOptions,
			show: { telephonyOperation: ['redirectListGet'] },
		}) as INodeProperties[]),

		...(descriptionredirectGet({
			...displayOptions,
			show: { telephonyOperation: ['redirectGet'] },
		}) as INodeProperties[]),

		...(descriptionredirectPut({
			...displayOptions,
			show: { telephonyOperation: ['redirectPut'] },
		}) as INodeProperties[]),

		...(descriptionredirectChangeDestinationPost({
			...displayOptions,
			show: { telephonyOperation: ['redirectChangeDestinationPost'] },
		}) as INodeProperties[]),

		...(descriptionrsvaListGet({
			...displayOptions,
			show: { telephonyOperation: ['rsvaListGet'] },
		}) as INodeProperties[]),

		...(descriptionrsvaGet({
			...displayOptions,
			show: { telephonyOperation: ['rsvaGet'] },
		}) as INodeProperties[]),

		...(descriptionrsvaPut({
			...displayOptions,
			show: { telephonyOperation: ['rsvaPut'] },
		}) as INodeProperties[]),

		...(descriptionrsvaAllowedRateCodesListGet({
			...displayOptions,
			show: { telephonyOperation: ['rsvaAllowedRateCodesListGet'] },
		}) as INodeProperties[]),

		...(descriptionrsvaCancelScheduledRateCodePost({
			...displayOptions,
			show: { telephonyOperation: ['rsvaCancelScheduledRateCodePost'] },
		}) as INodeProperties[]),

		...(descriptionrsvaCurrentRateCodeListGet({
			...displayOptions,
			show: { telephonyOperation: ['rsvaCurrentRateCodeListGet'] },
		}) as INodeProperties[]),

		...(descriptionrsvaScheduledRateCodeListGet({
			...displayOptions,
			show: { telephonyOperation: ['rsvaScheduledRateCodeListGet'] },
		}) as INodeProperties[]),

		...(descriptionrsvaScheduleRateCodePost({
			...displayOptions,
			show: { telephonyOperation: ['rsvaScheduleRateCodePost'] },
		}) as INodeProperties[]),

		...(descriptionschedulerListGet({
			...displayOptions,
			show: { telephonyOperation: ['schedulerListGet'] },
		}) as INodeProperties[]),

		...(descriptionschedulerGet({
			...displayOptions,
			show: { telephonyOperation: ['schedulerGet'] },
		}) as INodeProperties[]),

		...(descriptionschedulerPut({
			...displayOptions,
			show: { telephonyOperation: ['schedulerPut'] },
		}) as INodeProperties[]),

		...(descriptionschedulerEventsListGet({
			...displayOptions,
			show: { telephonyOperation: ['schedulerEventsListGet'] },
		}) as INodeProperties[]),

		...(descriptionschedulerEventsPost({
			...displayOptions,
			show: { telephonyOperation: ['schedulerEventsPost'] },
		}) as INodeProperties[]),

		...(descriptionschedulerEventsDelete({
			...displayOptions,
			show: { telephonyOperation: ['schedulerEventsDelete'] },
		}) as INodeProperties[]),

		...(descriptionschedulerEventsGet({
			...displayOptions,
			show: { telephonyOperation: ['schedulerEventsGet'] },
		}) as INodeProperties[]),

		...(descriptionschedulerEventsPut({
			...displayOptions,
			show: { telephonyOperation: ['schedulerEventsPut'] },
		}) as INodeProperties[]),

		...(descriptionschedulerImportIcsCalendarPost({
			...displayOptions,
			show: { telephonyOperation: ['schedulerImportIcsCalendarPost'] },
		}) as INodeProperties[]),

		...(descriptionscreenListGet({
			...displayOptions,
			show: { telephonyOperation: ['screenListGet'] },
		}) as INodeProperties[]),

		...(descriptionscreenGet({
			...displayOptions,
			show: { telephonyOperation: ['screenGet'] },
		}) as INodeProperties[]),

		...(descriptionscreenPut({
			...displayOptions,
			show: { telephonyOperation: ['screenPut'] },
		}) as INodeProperties[]),

		...(descriptionscreenScreenListsListGet({
			...displayOptions,
			show: { telephonyOperation: ['screenScreenListsListGet'] },
		}) as INodeProperties[]),

		...(descriptionscreenScreenListsPost({
			...displayOptions,
			show: { telephonyOperation: ['screenScreenListsPost'] },
		}) as INodeProperties[]),

		...(descriptionscreenScreenListsDelete({
			...displayOptions,
			show: { telephonyOperation: ['screenScreenListsDelete'] },
		}) as INodeProperties[]),

		...(descriptionscreenScreenListsGet({
			...displayOptions,
			show: { telephonyOperation: ['screenScreenListsGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceDelete({
			...displayOptions,
			show: { telephonyOperation: ['serviceDelete'] },
		}) as INodeProperties[]),

		...(descriptionserviceGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceGet'] },
		}) as INodeProperties[]),

		...(descriptionservicePut({
			...displayOptions,
			show: { telephonyOperation: ['servicePut'] },
		}) as INodeProperties[]),

		...(descriptionserviceCancelTerminationPost({
			...displayOptions,
			show: { telephonyOperation: ['serviceCancelTerminationPost'] },
		}) as INodeProperties[]),

		...(descriptionserviceChangeOfBillingAccountPost({
			...displayOptions,
			show: { telephonyOperation: ['serviceChangeOfBillingAccountPost'] },
		}) as INodeProperties[]),

		...(descriptionserviceDiagnosticReportsListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceDiagnosticReportsListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceDirectoryListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceDirectoryListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceDirectoryPut({
			...displayOptions,
			show: { telephonyOperation: ['serviceDirectoryPut'] },
		}) as INodeProperties[]),

		...(descriptionserviceDirectoryFetchEntrepriseInformationsPost({
			...displayOptions,
			show: { telephonyOperation: ['serviceDirectoryFetchEntrepriseInformationsPost'] },
		}) as INodeProperties[]),

		...(descriptionserviceDirectoryGetDirectoryServiceCodeListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceDirectoryGetDirectoryServiceCodeListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceDirectoryGetWayTypesListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceDirectoryGetWayTypesListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceEventTokenDelete({
			...displayOptions,
			show: { telephonyOperation: ['serviceEventTokenDelete'] },
		}) as INodeProperties[]),

		...(descriptionserviceEventTokenListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceEventTokenListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceEventTokenPost({
			...displayOptions,
			show: { telephonyOperation: ['serviceEventTokenPost'] },
		}) as INodeProperties[]),

		...(descriptionserviceFaxConsumptionListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceFaxConsumptionListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceFaxConsumptionGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceFaxConsumptionGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceOfferChangeDelete({
			...displayOptions,
			show: { telephonyOperation: ['serviceOfferChangeDelete'] },
		}) as INodeProperties[]),

		...(descriptionserviceOfferChangeListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceOfferChangeListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceOfferChangePost({
			...displayOptions,
			show: { telephonyOperation: ['serviceOfferChangePost'] },
		}) as INodeProperties[]),

		...(descriptionserviceOfferChangesListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceOfferChangesListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceOfferTaskListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceOfferTaskListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceOfferTaskGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceOfferTaskGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceOfferTaskPut({
			...displayOptions,
			show: { telephonyOperation: ['serviceOfferTaskPut'] },
		}) as INodeProperties[]),

		...(descriptionservicePreviousVoiceConsumptionListGet({
			...displayOptions,
			show: { telephonyOperation: ['servicePreviousVoiceConsumptionListGet'] },
		}) as INodeProperties[]),

		...(descriptionservicePreviousVoiceConsumptionGet({
			...displayOptions,
			show: { telephonyOperation: ['servicePreviousVoiceConsumptionGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceRepaymentConsumptionListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceRepaymentConsumptionListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceRepaymentConsumptionGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceRepaymentConsumptionGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceTaskListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceTaskListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceTaskGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceTaskGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceVoiceConsumptionListGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceVoiceConsumptionListGet'] },
		}) as INodeProperties[]),

		...(descriptionserviceVoiceConsumptionGet({
			...displayOptions,
			show: { telephonyOperation: ['serviceVoiceConsumptionGet'] },
		}) as INodeProperties[]),

		...(descriptionsoftphoneLogoDelete({
			...displayOptions,
			show: { telephonyOperation: ['softphoneLogoDelete'] },
		}) as INodeProperties[]),

		...(descriptionsoftphoneLogoListGet({
			...displayOptions,
			show: { telephonyOperation: ['softphoneLogoListGet'] },
		}) as INodeProperties[]),

		...(descriptionsoftphoneLogoPut({
			...displayOptions,
			show: { telephonyOperation: ['softphoneLogoPut'] },
		}) as INodeProperties[]),

		...(descriptionsoftphoneThemeListGet({
			...displayOptions,
			show: { telephonyOperation: ['softphoneThemeListGet'] },
		}) as INodeProperties[]),

		...(descriptionsoftphoneThemePut({
			...displayOptions,
			show: { telephonyOperation: ['softphoneThemePut'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionListGet({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionListGet'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionGet({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionGet'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionConditionListGet({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionConditionListGet'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionConditionPost({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionConditionPost'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionConditionDelete({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionConditionDelete'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionConditionGet({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionConditionGet'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionConditionPut({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionConditionPut'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionOptionsListGet({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionOptionsListGet'] },
		}) as INodeProperties[]),

		...(descriptiontimeConditionOptionsPut({
			...displayOptions,
			show: { telephonyOperation: ['timeConditionOptionsPut'] },
		}) as INodeProperties[]),

		...(descriptiontrunkListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunkListGet'] },
		}) as INodeProperties[]),

		...(descriptiontrunkGet({
			...displayOptions,
			show: { telephonyOperation: ['trunkGet'] },
		}) as INodeProperties[]),

		...(descriptiontrunkChannelsPacksRepartitionListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunkChannelsPacksRepartitionListGet'] },
		}) as INodeProperties[]),

		...(descriptiontrunkExternalDisplayedNumberListGet({
			...displayOptions,
			show: { telephonyOperation: ['trunkExternalDisplayedNumberListGet'] },
		}) as INodeProperties[]),

		...(descriptiontrunkExternalDisplayedNumberPost({
			...displayOptions,
			show: { telephonyOperation: ['trunkExternalDisplayedNumberPost'] },
		}) as INodeProperties[]),

		...(descriptiontrunkExternalDisplayedNumberDelete({
			...displayOptions,
			show: { telephonyOperation: ['trunkExternalDisplayedNumberDelete'] },
		}) as INodeProperties[]),

		...(descriptiontrunkExternalDisplayedNumberGet({
			...displayOptions,
			show: { telephonyOperation: ['trunkExternalDisplayedNumberGet'] },
		}) as INodeProperties[]),

		...(descriptiontrunkExternalDisplayedNumberValidatePost({
			...displayOptions,
			show: { telephonyOperation: ['trunkExternalDisplayedNumberValidatePost'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailListGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailPut({
			...displayOptions,
			show: { telephonyOperation: ['voicemailPut'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailDirectoriesListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailDirectoriesListGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailDirectoriesDelete({
			...displayOptions,
			show: { telephonyOperation: ['voicemailDirectoriesDelete'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailDirectoriesGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailDirectoriesGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailDirectoriesDownloadListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailDirectoriesDownloadListGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailDirectoriesMovePost({
			...displayOptions,
			show: { telephonyOperation: ['voicemailDirectoriesMovePost'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailDirectoriesTranscriptListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailDirectoriesTranscriptListGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailGreetingsListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailGreetingsListGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailGreetingsPost({
			...displayOptions,
			show: { telephonyOperation: ['voicemailGreetingsPost'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailGreetingsDelete({
			...displayOptions,
			show: { telephonyOperation: ['voicemailGreetingsDelete'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailGreetingsGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailGreetingsGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailGreetingsDownloadListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailGreetingsDownloadListGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailGreetingsMovePost({
			...displayOptions,
			show: { telephonyOperation: ['voicemailGreetingsMovePost'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailMigrateOnNewVersionPost({
			...displayOptions,
			show: { telephonyOperation: ['voicemailMigrateOnNewVersionPost'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailSettingsListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailSettingsListGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailSettingsPut({
			...displayOptions,
			show: { telephonyOperation: ['voicemailSettingsPut'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailSettingsChangePasswordPost({
			...displayOptions,
			show: { telephonyOperation: ['voicemailSettingsChangePasswordPost'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailSettingsChangeRoutingPost({
			...displayOptions,
			show: { telephonyOperation: ['voicemailSettingsChangeRoutingPost'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailSettingsRoutingListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailSettingsRoutingListGet'] },
		}) as INodeProperties[]),

		...(descriptionvoicemailSettingsVoicemailNumbersListGet({
			...displayOptions,
			show: { telephonyOperation: ['voicemailSettingsVoicemailNumbersListGet'] },
		}) as INodeProperties[]),
		...(descriptionnumberDetailedZonesListGet({
			...displayOptions,
			show: { telephonyOperation: ['numberDetailedZonesListGet'] },
		}) as INodeProperties[]),
		...(descriptionnumberRangesListGet({
			...displayOptions,
			show: { telephonyOperation: ['numberRangesListGet'] },
		}) as INodeProperties[]),
		...(descriptionnumberSpecificNumbersListGet({
			...displayOptions,
			show: { telephonyOperation: ['numberSpecificNumbersListGet'] },
		}) as INodeProperties[]),
		...(descriptionnumberZonesListGet({
			...displayOptions,
			show: { telephonyOperation: ['numberZonesListGet'] },
		}) as INodeProperties[]),
		...(descriptionprocedureListGet({
			...displayOptions,
			show: { telephonyOperation: ['procedureListGet'] },
		}) as INodeProperties[]),
		...(descriptionprocedurePost({
			...displayOptions,
			show: { telephonyOperation: ['procedurePost'] },
		}) as INodeProperties[]),
		...(descriptionprocedureGet({
			...displayOptions,
			show: { telephonyOperation: ['procedureGet'] },
		}) as INodeProperties[]),
		...(descriptionprocedureCancelPost({
			...displayOptions,
			show: { telephonyOperation: ['procedureCancelPost'] },
		}) as INodeProperties[]),
		...(descriptionprocedureRequiredListGet({
			...displayOptions,
			show: { telephonyOperation: ['procedureRequiredListGet'] },
		}) as INodeProperties[]),
		...(descriptionresellerPanelGeneratePasswordPost({
			...displayOptions,
			show: { telephonyOperation: ['resellerPanelGeneratePasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionresellerPanelStatusListGet({
			...displayOptions,
			show: { telephonyOperation: ['resellerPanelStatusListGet'] },
		}) as INodeProperties[]),
		...(descriptionsoftphoneStoreLinksListGet({
			...displayOptions,
			show: { telephonyOperation: ['softphoneStoreLinksListGet'] },
		}) as INodeProperties[]),
		...(descriptionsoftphoneThemesListGet({
			...displayOptions,
			show: { telephonyOperation: ['softphoneThemesListGet'] },
		}) as INodeProperties[]),
		...(descriptionsoftphoneThemesGet({
			...displayOptions,
			show: { telephonyOperation: ['softphoneThemesGet'] },
		}) as INodeProperties[]),
		...(descriptionsoundsListGet({
			...displayOptions,
			show: { telephonyOperation: ['soundsListGet'] },
		}) as INodeProperties[]),
		...(descriptionsoundsPost({
			...displayOptions,
			show: { telephonyOperation: ['soundsPost'] },
		}) as INodeProperties[]),
		...(descriptionsoundsDelete({
			...displayOptions,
			show: { telephonyOperation: ['soundsDelete'] },
		}) as INodeProperties[]),
		...(descriptionsoundsGet({
			...displayOptions,
			show: { telephonyOperation: ['soundsGet'] },
		}) as INodeProperties[]),
		...(descriptionsoundsPut({
			...displayOptions,
			show: { telephonyOperation: ['soundsPut'] },
		}) as INodeProperties[]),
		...(descriptionspareListGet({
			...displayOptions,
			show: { telephonyOperation: ['spareListGet'] },
		}) as INodeProperties[]),
		...(descriptionspareDelete({
			...displayOptions,
			show: { telephonyOperation: ['spareDelete'] },
		}) as INodeProperties[]),
		...(descriptionspareGet({
			...displayOptions,
			show: { telephonyOperation: ['spareGet'] },
		}) as INodeProperties[]),
		...(descriptionspareCompatibleReplacementListGet({
			...displayOptions,
			show: { telephonyOperation: ['spareCompatibleReplacementListGet'] },
		}) as INodeProperties[]),
		...(descriptionspareReplacePost({
			...displayOptions,
			show: { telephonyOperation: ['spareReplacePost'] },
		}) as INodeProperties[]),
		...(descriptionspareServiceInfosListGet({
			...displayOptions,
			show: { telephonyOperation: ['spareServiceInfosListGet'] },
		}) as INodeProperties[]),
		...(descriptionspareServiceInfosPut({
			...displayOptions,
			show: { telephonyOperation: ['spareServiceInfosPut'] },
		}) as INodeProperties[]),
		...(descriptionspareBrandsListGet({
			...displayOptions,
			show: { telephonyOperation: ['spareBrandsListGet'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('telephonyOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'aliasListGet':
			return executeAliasListGet.call(this, itemIndex);
		case 'aliasGet':
			return executeAliasGet.call(this, itemIndex);
		case 'aliasChangeContactPost':
			return executeAliasChangeContactPost.call(this, itemIndex);
		case 'aliasServiceInfosGet':
			return executeAliasServiceInfosGet.call(this, itemIndex);
		case 'aliasServiceInfosPut':
			return executeAliasServiceInfosPut.call(this, itemIndex);
		case 'linesListGet':
			return executeLinesListGet.call(this, itemIndex);
		case 'linesGet':
			return executeLinesGet.call(this, itemIndex);
		case 'linesChangeContactPost':
			return executeLinesChangeContactPost.call(this, itemIndex);
		case 'linesServiceInfosGet':
			return executeLinesServiceInfosGet.call(this, itemIndex);
		case 'linesServiceInfosPut':
			return executeLinesServiceInfosPut.call(this, itemIndex);
		case 'linesHardwareListGet':
			return executeLinesHardwareListGet.call(this, itemIndex);
		case 'linesHardwarePost':
			return executeLinesHardwarePost.call(this, itemIndex);
		case 'linesNumberListGet':
			return executeLinesNumberListGet.call(this, itemIndex);
		case 'linesNumberPost':
			return executeLinesNumberPost.call(this, itemIndex);
		case 'linesNumberGet':
			return executeLinesNumberGet.call(this, itemIndex);
		case 'linesNumberPut':
			return executeLinesNumberPut.call(this, itemIndex);
		case 'linesNumberDelete':
			return executeLinesNumberDelete.call(this, itemIndex);
		case 'linesPortabilityListGet':
			return executeLinesPortabilityListGet.call(this, itemIndex);
		case 'linesPortabilityPost':
			return executeLinesPortabilityPost.call(this, itemIndex);
		case 'linesPortabilityGet':
			return executeLinesPortabilityGet.call(this, itemIndex);
		case 'linesPortabilityPut':
			return executeLinesPortabilityPut.call(this, itemIndex);
		case 'linesPortabilityDelete':
			return executeLinesPortabilityDelete.call(this, itemIndex);
		case 'linesSimListGet':
			return executeLinesSimListGet.call(this, itemIndex);
		case 'linesSimPost':
			return executeLinesSimPost.call(this, itemIndex);
		case 'linesSimGet':
			return executeLinesSimGet.call(this, itemIndex);
		case 'linesSimPut':
			return executeLinesSimPut.call(this, itemIndex);
		case 'linesSimDelete':
			return executeLinesSimDelete.call(this, itemIndex);
		case 'trunksListGet':
			return executeTrunksListGet.call(this, itemIndex);
		case 'trunksGet':
			return executeTrunksGet.call(this, itemIndex);
		case 'trunksChangeContactPost':
			return executeTrunksChangeContactPost.call(this, itemIndex);
		case 'trunksServiceInfosGet':
			return executeTrunksServiceInfosGet.call(this, itemIndex);
		case 'trunksServiceInfosPut':
			return executeTrunksServiceInfosPut.call(this, itemIndex);
		case 'trunksHardwareListGet':
			return executeTrunksHardwareListGet.call(this, itemIndex);
		case 'trunksHardwarePost':
			return executeTrunksHardwarePost.call(this, itemIndex);
		case 'trunksNumberListGet':
			return executeTrunksNumberListGet.call(this, itemIndex);
		case 'trunksNumberPost':
			return executeTrunksNumberPost.call(this, itemIndex);
		case 'trunksNumberGet':
			return executeTrunksNumberGet.call(this, itemIndex);
		case 'trunksNumberPut':
			return executeTrunksNumberPut.call(this, itemIndex);
		case 'trunksNumberDelete':
			return executeTrunksNumberDelete.call(this, itemIndex);
		case 'numbersListGet':
			return executeNumbersListGet.call(this, itemIndex);
		case 'numbersGet':
			return executeNumbersGet.call(this, itemIndex);
		case 'numbersPost':
			return executeNumbersPost.call(this, itemIndex);
		case 'numbersPut':
			return executeNumbersPut.call(this, itemIndex);
		case 'numbersDelete':
			return executeNumbersDelete.call(this, itemIndex);
		case 'numbersPortabilityListGet':
			return executeNumbersPortabilityListGet.call(this, itemIndex);
		case 'numbersPortabilityPost':
			return executeNumbersPortabilityPost.call(this, itemIndex);
		case 'numbersPortabilityGet':
			return executeNumbersPortabilityGet.call(this, itemIndex);
		case 'numbersPortabilityPut':
			return executeNumbersPortabilityPut.call(this, itemIndex);
		case 'numbersPortabilityDelete':
			return executeNumbersPortabilityDelete.call(this, itemIndex);
		case 'accessoriesGet':
			return executeAccessoriesGet.call(this, itemIndex);
		case 'lineOffersGet':
			return executeLineOffersGet.call(this, itemIndex);
		case 'lineOfferPhonesGet':
			return executeLineOfferPhonesGet.call(this, itemIndex);
		case 'faxOffersGet':
			return executeFaxOffersGet.call(this, itemIndex);
		case 'lineOfferDetailsGet':
			return executeLineOfferDetailsGet.call(this, itemIndex);
		case 'directoriesCitiesGet':
			return executeDirectoriesCitiesGet.call(this, itemIndex);
		case 'directoriesAvailableZipCodesGet':
			return executeDirectoriesAvailableZipCodesGet.call(this, itemIndex);
		case 'directoriesServicesGet':
			return executeDirectoriesServicesGet.call(this, itemIndex);
		case 'directoriesCountriesGet':
			return executeDirectoriesCountriesGet.call(this, itemIndex);
		case 'telephonyListGet':
			return executeTelephonyListGet.call(this, itemIndex);
		case 'sipDomainsGet':
			return executeSipDomainsGet.call(this, itemIndex);
		case 'currentOrderIdsGet':
			return executeCurrentOrderIdsGet.call(this, itemIndex);
		case 'searchServicesGet':
			return executeSearchServicesGet.call(this, itemIndex);
		case 'setDefaultSipDomainPost':
			return executeSetDefaultSipDomainPost.call(this, itemIndex);

		case 'abbreviatedNumberDelete':
			return executeabbreviatedNumberDelete.call(this, itemIndex);
		case 'abbreviatedNumberGet':
			return executeabbreviatedNumberGet.call(this, itemIndex);
		case 'abbreviatedNumberListGet':
			return executeabbreviatedNumberListGet.call(this, itemIndex);
		case 'abbreviatedNumberPost':
			return executeabbreviatedNumberPost.call(this, itemIndex);
		case 'abbreviatedNumberPut':
			return executeabbreviatedNumberPut.call(this, itemIndex);
		case 'allowedCreditThresholdGet':
			return executeallowedCreditThresholdGet.call(this, itemIndex);
		case 'amountSecurityDepositGet':
			return executeamountSecurityDepositGet.call(this, itemIndex);
		case 'billingAccountDelete':
			return executebillingAccountDelete.call(this, itemIndex);
		case 'billingAccountGet':
			return executebillingAccountGet.call(this, itemIndex);
		case 'billingAccountPut':
			return executebillingAccountPut.call(this, itemIndex);
		case 'billingAccountSiteGet':
			return executebillingAccountSiteGet.call(this, itemIndex);
		case 'billingAccountSitePost':
			return executebillingAccountSitePost.call(this, itemIndex);
		case 'canTransferSecurityDepositPost':
			return executecanTransferSecurityDepositPost.call(this, itemIndex);
		case 'cancelTerminationPost':
			return executecancelTerminationPost.call(this, itemIndex);
		case 'carrierSipCdrsListGet':
			return executecarrierSipCdrsListGet.call(this, itemIndex);
		case 'carrierSipClusterDetailsListGet':
			return executecarrierSipClusterDetailsListGet.call(this, itemIndex);
		case 'carrierSipEndpointsGet':
			return executecarrierSipEndpointsGet.call(this, itemIndex);
		case 'carrierSipEndpointsListGet':
			return executecarrierSipEndpointsListGet.call(this, itemIndex);
		case 'carrierSipGet':
			return executecarrierSipGet.call(this, itemIndex);
		case 'carrierSipListGet':
			return executecarrierSipListGet.call(this, itemIndex);
		case 'carrierSipSettingsListGet':
			return executecarrierSipSettingsListGet.call(this, itemIndex);
		case 'carrierSipSettingsPut':
			return executecarrierSipSettingsPut.call(this, itemIndex);
		case 'carrierSipVnoGet':
			return executecarrierSipVnoGet.call(this, itemIndex);
		case 'carrierSipVnoListGet':
			return executecarrierSipVnoListGet.call(this, itemIndex);
		case 'carrierSipVnoRangesGet':
			return executecarrierSipVnoRangesGet.call(this, itemIndex);
		case 'carrierSipVnoRangesListGet':
			return executecarrierSipVnoRangesListGet.call(this, itemIndex);
		case 'carrierSipVnoRangesPut':
			return executecarrierSipVnoRangesPut.call(this, itemIndex);
		case 'changeContactPost':
			return executechangeContactPost.call(this, itemIndex);
		case 'faxCampaignsDelete':
			return executefaxCampaignsDelete.call(this, itemIndex);
		case 'faxCampaignsDetailListGet':
			return executefaxCampaignsDetailListGet.call(this, itemIndex);
		case 'faxCampaignsGet':
			return executefaxCampaignsGet.call(this, itemIndex);
		case 'faxCampaignsListGet':
			return executefaxCampaignsListGet.call(this, itemIndex);
		case 'faxCampaignsPost':
			return executefaxCampaignsPost.call(this, itemIndex);
		case 'faxCampaignsStartPost':
			return executefaxCampaignsStartPost.call(this, itemIndex);
		case 'faxCampaignsStopPost':
			return executefaxCampaignsStopPost.call(this, itemIndex);
		case 'faxGet':
			return executefaxGet.call(this, itemIndex);
		case 'faxListGet':
			return executefaxListGet.call(this, itemIndex);
		case 'faxPut':
			return executefaxPut.call(this, itemIndex);
		case 'faxScreenListsDelete':
			return executefaxScreenListsDelete.call(this, itemIndex);
		case 'faxScreenListsListGet':
			return executefaxScreenListsListGet.call(this, itemIndex);
		case 'faxScreenListsPost':
			return executefaxScreenListsPost.call(this, itemIndex);
		case 'faxScreenListsPut':
			return executefaxScreenListsPut.call(this, itemIndex);
		case 'faxScreenListsResetPost':
			return executefaxScreenListsResetPost.call(this, itemIndex);
		case 'faxSettingsChangePasswordPost':
			return executefaxSettingsChangePasswordPost.call(this, itemIndex);
		case 'faxSettingsListGet':
			return executefaxSettingsListGet.call(this, itemIndex);
		case 'faxSettingsPut':
			return executefaxSettingsPut.call(this, itemIndex);
		case 'faxSettingsSendFaxPost':
			return executefaxSettingsSendFaxPost.call(this, itemIndex);
		case 'lineAbbreviatedNumberDelete':
			return executelineAbbreviatedNumberDelete.call(this, itemIndex);
		case 'lineAbbreviatedNumberGet':
			return executelineAbbreviatedNumberGet.call(this, itemIndex);
		case 'lineAbbreviatedNumberListGet':
			return executelineAbbreviatedNumberListGet.call(this, itemIndex);
		case 'lineAbbreviatedNumberPost':
			return executelineAbbreviatedNumberPost.call(this, itemIndex);
		case 'lineAbbreviatedNumberPut':
			return executelineAbbreviatedNumberPut.call(this, itemIndex);
		case 'lineActivateNewPhoneListGet':
			return executelineActivateNewPhoneListGet.call(this, itemIndex);
		case 'lineActivateNewPhonePost':
			return executelineActivateNewPhonePost.call(this, itemIndex);
		case 'lineAntihackListGet':
			return executelineAntihackListGet.call(this, itemIndex);
		case 'lineAntihackPost':
			return executelineAntihackPost.call(this, itemIndex);
		case 'lineAssociateDevicePost':
			return executelineAssociateDevicePost.call(this, itemIndex);
		case 'lineAutomaticCallGet':
			return executelineAutomaticCallGet.call(this, itemIndex);
		case 'lineAutomaticCallListGet':
			return executelineAutomaticCallListGet.call(this, itemIndex);
		case 'lineAutomaticCallPost':
			return executelineAutomaticCallPost.call(this, itemIndex);
		case 'lineAvailableSipDomainsListGet':
			return executelineAvailableSipDomainsListGet.call(this, itemIndex);
		case 'lineBlockPost':
			return executelineBlockPost.call(this, itemIndex);
		case 'lineCallsEavesdropPost':
			return executelineCallsEavesdropPost.call(this, itemIndex);
		case 'lineCallsGet':
			return executelineCallsGet.call(this, itemIndex);
		case 'lineCallsHangupPost':
			return executelineCallsHangupPost.call(this, itemIndex);
		case 'lineCallsHoldPost':
			return executelineCallsHoldPost.call(this, itemIndex);
		case 'lineCallsInterceptPost':
			return executelineCallsInterceptPost.call(this, itemIndex);
		case 'lineCallsListGet':
			return executelineCallsListGet.call(this, itemIndex);
		case 'lineCallsTransferPost':
			return executelineCallsTransferPost.call(this, itemIndex);
		case 'lineCallsWhisperPost':
			return executelineCallsWhisperPost.call(this, itemIndex);
		case 'lineCanChangePasswordListGet':
			return executelineCanChangePasswordListGet.call(this, itemIndex);
		case 'lineCancelConvertToNumberPost':
			return executelineCancelConvertToNumberPost.call(this, itemIndex);
		case 'lineChangePasswordPost':
			return executelineChangePasswordPost.call(this, itemIndex);
		case 'lineClick2CallPost':
			return executelineClick2CallPost.call(this, itemIndex);
		case 'lineClick2CallUserChangePasswordPost':
			return executelineClick2CallUserChangePasswordPost.call(this, itemIndex);
		case 'lineClick2CallUserClick2CallPost':
			return executelineClick2CallUserClick2CallPost.call(this, itemIndex);
		case 'lineClick2CallUserDelete':
			return executelineClick2CallUserDelete.call(this, itemIndex);
		case 'lineClick2CallUserGet':
			return executelineClick2CallUserGet.call(this, itemIndex);
		case 'lineClick2CallUserListGet':
			return executelineClick2CallUserListGet.call(this, itemIndex);
		case 'lineClick2CallUserPost':
			return executelineClick2CallUserPost.call(this, itemIndex);
		case 'lineConvertToNumberPost':
			return executelineConvertToNumberPost.call(this, itemIndex);
		case 'lineDissociateDevicePost':
			return executelineDissociateDevicePost.call(this, itemIndex);
		case 'lineGet':
			return executelineGet.call(this, itemIndex);
		case 'lineIpsListGet':
			return executelineIpsListGet.call(this, itemIndex);
		case 'lineLastRegistrationsListGet':
			return executelineLastRegistrationsListGet.call(this, itemIndex);
		case 'lineListAssociablePhonesListGet':
			return executelineListAssociablePhonesListGet.call(this, itemIndex);
		case 'lineListGet':
			return executelineListGet.call(this, itemIndex);
		case 'lineMaximumAvailableSimultaneousLinesListGet':
			return executelineMaximumAvailableSimultaneousLinesListGet.call(this, itemIndex);
		case 'lineOfferListGet':
			return executelineOfferListGet.call(this, itemIndex);
		case 'lineOptionsAvailableCodecsListGet':
			return executelineOptionsAvailableCodecsListGet.call(this, itemIndex);
		case 'lineOptionsDefaultCodecsListGet':
			return executelineOptionsDefaultCodecsListGet.call(this, itemIndex);
		case 'lineOptionsListGet':
			return executelineOptionsListGet.call(this, itemIndex);
		case 'lineOptionsPut':
			return executelineOptionsPut.call(this, itemIndex);
		case 'linePhoneAdminCredentialsListGet':
			return executelinePhoneAdminCredentialsListGet.call(this, itemIndex);
		case 'linePhoneCanBeAssociableListGet':
			return executelinePhoneCanBeAssociableListGet.call(this, itemIndex);
		case 'linePhoneChangePhoneConfigurationPost':
			return executelinePhoneChangePhoneConfigurationPost.call(this, itemIndex);
		case 'linePhoneFunctionKeyAvailableFunctionListGet':
			return executelinePhoneFunctionKeyAvailableFunctionListGet.call(this, itemIndex);
		case 'linePhoneFunctionKeyGet':
			return executelinePhoneFunctionKeyGet.call(this, itemIndex);
		case 'linePhoneFunctionKeyListGet':
			return executelinePhoneFunctionKeyListGet.call(this, itemIndex);
		case 'linePhoneFunctionKeyPut':
			return executelinePhoneFunctionKeyPut.call(this, itemIndex);
		case 'linePhoneListGet':
			return executelinePhoneListGet.call(this, itemIndex);
		case 'linePhoneMerchandiseAvailableListGet':
			return executelinePhoneMerchandiseAvailableListGet.call(this, itemIndex);
		case 'linePhonePhonebookDelete':
			return executelinePhonePhonebookDelete.call(this, itemIndex);
		case 'linePhonePhonebookExportListGet':
			return executelinePhonePhonebookExportListGet.call(this, itemIndex);
		case 'linePhonePhonebookGet':
			return executelinePhonePhonebookGet.call(this, itemIndex);
		case 'linePhonePhonebookImportPost':
			return executelinePhonePhonebookImportPost.call(this, itemIndex);
		case 'linePhonePhonebookListGet':
			return executelinePhonePhonebookListGet.call(this, itemIndex);
		case 'linePhonePhonebookPhonebookContactDelete':
			return executelinePhonePhonebookPhonebookContactDelete.call(this, itemIndex);
		case 'linePhonePhonebookPhonebookContactGet':
			return executelinePhonePhonebookPhonebookContactGet.call(this, itemIndex);
		case 'linePhonePhonebookPhonebookContactListGet':
			return executelinePhonePhonebookPhonebookContactListGet.call(this, itemIndex);
		case 'linePhonePhonebookPhonebookContactPost':
			return executelinePhonePhonebookPhonebookContactPost.call(this, itemIndex);
		case 'linePhonePhonebookPhonebookContactPut':
			return executelinePhonePhonebookPhonebookContactPut.call(this, itemIndex);
		case 'linePhonePhonebookPost':
			return executelinePhonePhonebookPost.call(this, itemIndex);
		case 'linePhonePhonebookPut':
			return executelinePhonePhonebookPut.call(this, itemIndex);
		case 'linePhonePut':
			return executelinePhonePut.call(this, itemIndex);
		case 'linePhoneRebootPost':
			return executelinePhoneRebootPost.call(this, itemIndex);
		case 'linePhoneRefreshScreenPost':
			return executelinePhoneRefreshScreenPost.call(this, itemIndex);
		case 'linePhoneResetConfigPost':
			return executelinePhoneResetConfigPost.call(this, itemIndex);
		case 'linePhoneRmaChangeTypePost':
			return executelinePhoneRmaChangeTypePost.call(this, itemIndex);
		case 'linePhoneRmaDelete':
			return executelinePhoneRmaDelete.call(this, itemIndex);
		case 'linePhoneRmaGet':
			return executelinePhoneRmaGet.call(this, itemIndex);
		case 'linePhoneRmaListGet':
			return executelinePhoneRmaListGet.call(this, itemIndex);
		case 'linePhoneRmaPost':
			return executelinePhoneRmaPost.call(this, itemIndex);
		case 'linePhoneRmaPut':
			return executelinePhoneRmaPut.call(this, itemIndex);
		case 'linePhoneSupportsPhonebookListGet':
			return executelinePhoneSupportsPhonebookListGet.call(this, itemIndex);
		case 'linePut':
			return executelinePut.call(this, itemIndex);
		case 'lineRecordsDelete':
			return executelineRecordsDelete.call(this, itemIndex);
		case 'lineRecordsGet':
			return executelineRecordsGet.call(this, itemIndex);
		case 'lineRecordsListGet':
			return executelineRecordsListGet.call(this, itemIndex);
		case 'lineRemoveSimultaneousLinesPost':
			return executelineRemoveSimultaneousLinesPost.call(this, itemIndex);
		case 'lineSimultaneousChannelsDetailsListGet':
			return executelineSimultaneousChannelsDetailsListGet.call(this, itemIndex);
		case 'lineSoftphoneBetaListGet':
			return executelineSoftphoneBetaListGet.call(this, itemIndex);
		case 'lineSoftphoneBetaPut':
			return executelineSoftphoneBetaPut.call(this, itemIndex);
		case 'lineSoftphoneDevicesDelete':
			return executelineSoftphoneDevicesDelete.call(this, itemIndex);
		case 'lineSoftphoneDevicesDisconnectPost':
			return executelineSoftphoneDevicesDisconnectPost.call(this, itemIndex);
		case 'lineSoftphoneDevicesListGet':
			return executelineSoftphoneDevicesListGet.call(this, itemIndex);
		case 'lineSoftphoneLogoDelete':
			return executelineSoftphoneLogoDelete.call(this, itemIndex);
		case 'lineSoftphoneLogoListGet':
			return executelineSoftphoneLogoListGet.call(this, itemIndex);
		case 'lineSoftphoneLogoPut':
			return executelineSoftphoneLogoPut.call(this, itemIndex);
		case 'lineSoftphoneStatusListGet':
			return executelineSoftphoneStatusListGet.call(this, itemIndex);
		case 'lineSoftphoneThemeDelete':
			return executelineSoftphoneThemeDelete.call(this, itemIndex);
		case 'lineSoftphoneThemeListGet':
			return executelineSoftphoneThemeListGet.call(this, itemIndex);
		case 'lineSoftphoneThemePut':
			return executelineSoftphoneThemePut.call(this, itemIndex);
		case 'lineSoftphoneTokenPost':
			return executelineSoftphoneTokenPost.call(this, itemIndex);
		case 'lineStatisticsListGet':
			return executelineStatisticsListGet.call(this, itemIndex);
		case 'lineTonesListGet':
			return executelineTonesListGet.call(this, itemIndex);
		case 'lineTonesPut':
			return executelineTonesPut.call(this, itemIndex);
		case 'lineTonesToneUploadPost':
			return executelineTonesToneUploadPost.call(this, itemIndex);
		case 'lineTrafficExtractsDelete':
			return executelineTrafficExtractsDelete.call(this, itemIndex);
		case 'lineTrafficExtractsGet':
			return executelineTrafficExtractsGet.call(this, itemIndex);
		case 'lineTrafficExtractsListGet':
			return executelineTrafficExtractsListGet.call(this, itemIndex);
		case 'lineTrafficExtractsPost':
			return executelineTrafficExtractsPost.call(this, itemIndex);
		case 'lineUnblockPost':
			return executelineUnblockPost.call(this, itemIndex);
		case 'numberCancelConvertToLinePost':
			return executenumberCancelConvertToLinePost.call(this, itemIndex);
		case 'numberChangeFeatureTypePost':
			return executenumberChangeFeatureTypePost.call(this, itemIndex);
		case 'numberConvertToLineAvailableOffersListGet':
			return executenumberConvertToLineAvailableOffersListGet.call(this, itemIndex);
		case 'numberConvertToLinePost':
			return executenumberConvertToLinePost.call(this, itemIndex);
		case 'numberGet':
			return executenumberGet.call(this, itemIndex);
		case 'numberListGet':
			return executenumberListGet.call(this, itemIndex);
		case 'numberPut':
			return executenumberPut.call(this, itemIndex);
		case 'portabilityGet':
			return executeportabilityGet.call(this, itemIndex);
		case 'serviceInfosListGet':
			return executeserviceInfosListGet.call(this, itemIndex);
		case 'serviceInfosPut':
			return executeserviceInfosPut.call(this, itemIndex);
		case 'taskGet':
			return executetaskGet.call(this, itemIndex);
		case 'taskListGet':
			return executetaskListGet.call(this, itemIndex);
		case 'transferSecurityDepositPost':
			return executetransferSecurityDepositPost.call(this, itemIndex);
		case 'vxmlGet':
			return executevxmlGet.call(this, itemIndex);
		case 'vxmlListGet':
			return executevxmlListGet.call(this, itemIndex);
		case 'vxmlSettingsListGet':
			return executevxmlSettingsListGet.call(this, itemIndex);
		case 'vxmlSettingsLogsPost':
			return executevxmlSettingsLogsPost.call(this, itemIndex);
		case 'vxmlSettingsPut':
			return executevxmlSettingsPut.call(this, itemIndex);

		case 'conferenceListGet':
			return executeconferenceListGet.call(this, itemIndex);

		case 'conferenceGet':
			return executeconferenceGet.call(this, itemIndex);

		case 'conferenceAnnounceUploadPost':
			return executeconferenceAnnounceUploadPost.call(this, itemIndex);

		case 'conferenceHistoriesListGet':
			return executeconferenceHistoriesListGet.call(this, itemIndex);

		case 'conferenceHistoriesGet':
			return executeconferenceHistoriesGet.call(this, itemIndex);

		case 'conferenceInformationsListGet':
			return executeconferenceInformationsListGet.call(this, itemIndex);

		case 'conferenceLockPost':
			return executeconferenceLockPost.call(this, itemIndex);

		case 'conferenceParticipantsListGet':
			return executeconferenceParticipantsListGet.call(this, itemIndex);

		case 'conferenceParticipantsGet':
			return executeconferenceParticipantsGet.call(this, itemIndex);

		case 'conferenceParticipantsDeafPost':
			return executeconferenceParticipantsDeafPost.call(this, itemIndex);

		case 'conferenceParticipantsEnergyPost':
			return executeconferenceParticipantsEnergyPost.call(this, itemIndex);

		case 'conferenceParticipantsKickPost':
			return executeconferenceParticipantsKickPost.call(this, itemIndex);

		case 'conferenceParticipantsMutePost':
			return executeconferenceParticipantsMutePost.call(this, itemIndex);

		case 'conferenceParticipantsUndeafPost':
			return executeconferenceParticipantsUndeafPost.call(this, itemIndex);

		case 'conferenceParticipantsUnmutePost':
			return executeconferenceParticipantsUnmutePost.call(this, itemIndex);

		case 'conferenceRoomsListGet':
			return executeconferenceRoomsListGet.call(this, itemIndex);

		case 'conferenceRoomsPost':
			return executeconferenceRoomsPost.call(this, itemIndex);

		case 'conferenceRoomsGet':
			return executeconferenceRoomsGet.call(this, itemIndex);

		case 'conferenceRoomsPut':
			return executeconferenceRoomsPut.call(this, itemIndex);

		case 'conferenceRoomsHistoriesListGet':
			return executeconferenceRoomsHistoriesListGet.call(this, itemIndex);

		case 'conferenceRoomsHistoriesGet':
			return executeconferenceRoomsHistoriesGet.call(this, itemIndex);

		case 'conferenceRoomsLockPost':
			return executeconferenceRoomsLockPost.call(this, itemIndex);

		case 'conferenceRoomsParticipantsListGet':
			return executeconferenceRoomsParticipantsListGet.call(this, itemIndex);

		case 'conferenceRoomsParticipantsGet':
			return executeconferenceRoomsParticipantsGet.call(this, itemIndex);

		case 'conferenceRoomsParticipantsDeafPost':
			return executeconferenceRoomsParticipantsDeafPost.call(this, itemIndex);

		case 'conferenceRoomsParticipantsEnergyPost':
			return executeconferenceRoomsParticipantsEnergyPost.call(this, itemIndex);

		case 'conferenceRoomsParticipantsKickPost':
			return executeconferenceRoomsParticipantsKickPost.call(this, itemIndex);

		case 'conferenceRoomsParticipantsMutePost':
			return executeconferenceRoomsParticipantsMutePost.call(this, itemIndex);

		case 'conferenceRoomsParticipantsUndeafPost':
			return executeconferenceRoomsParticipantsUndeafPost.call(this, itemIndex);

		case 'conferenceRoomsParticipantsUnmutePost':
			return executeconferenceRoomsParticipantsUnmutePost.call(this, itemIndex);

		case 'conferenceRoomsUnlockPost':
			return executeconferenceRoomsUnlockPost.call(this, itemIndex);

		case 'conferenceRoomsWebAccessListGet':
			return executeconferenceRoomsWebAccessListGet.call(this, itemIndex);

		case 'conferenceRoomsWebAccessPost':
			return executeconferenceRoomsWebAccessPost.call(this, itemIndex);

		case 'conferenceRoomsWebAccessDelete':
			return executeconferenceRoomsWebAccessDelete.call(this, itemIndex);

		case 'conferenceRoomsWebAccessGet':
			return executeconferenceRoomsWebAccessGet.call(this, itemIndex);

		case 'conferenceRoomsStatsListGet':
			return executeconferenceRoomsStatsListGet.call(this, itemIndex);

		case 'conferenceSettingsListGet':
			return executeconferenceSettingsListGet.call(this, itemIndex);

		case 'conferenceSettingsPut':
			return executeconferenceSettingsPut.call(this, itemIndex);

		case 'conferenceUnlockPost':
			return executeconferenceUnlockPost.call(this, itemIndex);

		case 'conferenceWebAccessListGet':
			return executeconferenceWebAccessListGet.call(this, itemIndex);

		case 'conferenceWebAccessPost':
			return executeconferenceWebAccessPost.call(this, itemIndex);

		case 'conferenceWebAccessDelete':
			return executeconferenceWebAccessDelete.call(this, itemIndex);

		case 'conferenceWebAccessGet':
			return executeconferenceWebAccessGet.call(this, itemIndex);

		case 'ddiListGet':
			return executeddiListGet.call(this, itemIndex);

		case 'ddiGet':
			return executeddiGet.call(this, itemIndex);

		case 'ddiPut':
			return executeddiPut.call(this, itemIndex);

		case 'ddiChangeDestinationPost':
			return executeddiChangeDestinationPost.call(this, itemIndex);

		case 'easyHuntingListGet':
			return executeeasyHuntingListGet.call(this, itemIndex);

		case 'easyHuntingGet':
			return executeeasyHuntingGet.call(this, itemIndex);

		case 'easyHuntingPut':
			return executeeasyHuntingPut.call(this, itemIndex);

		case 'easyHuntingHuntingListGet':
			return executeeasyHuntingHuntingListGet.call(this, itemIndex);

		case 'easyHuntingHuntingPut':
			return executeeasyHuntingHuntingPut.call(this, itemIndex);

		case 'easyHuntingHuntingAgentListGet':
			return executeeasyHuntingHuntingAgentListGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentPost':
			return executeeasyHuntingHuntingAgentPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentDelete':
			return executeeasyHuntingHuntingAgentDelete.call(this, itemIndex);

		case 'easyHuntingHuntingAgentGet':
			return executeeasyHuntingHuntingAgentGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentPut':
			return executeeasyHuntingHuntingAgentPut.call(this, itemIndex);

		case 'easyHuntingHuntingAgentBannerAccessDelete':
			return executeeasyHuntingHuntingAgentBannerAccessDelete.call(this, itemIndex);

		case 'easyHuntingHuntingAgentBannerAccessListGet':
			return executeeasyHuntingHuntingAgentBannerAccessListGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentBannerAccessPost':
			return executeeasyHuntingHuntingAgentBannerAccessPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentCallsListGet':
			return executeeasyHuntingHuntingAgentCallsListGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentCallsGet':
			return executeeasyHuntingHuntingAgentCallsGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentCallsEavesdropPost':
			return executeeasyHuntingHuntingAgentCallsEavesdropPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentCallsHangupPost':
			return executeeasyHuntingHuntingAgentCallsHangupPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentCallsHoldPost':
			return executeeasyHuntingHuntingAgentCallsHoldPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentCallsInterceptPost':
			return executeeasyHuntingHuntingAgentCallsInterceptPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentCallsTransferPost':
			return executeeasyHuntingHuntingAgentCallsTransferPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentCallsWhisperPost':
			return executeeasyHuntingHuntingAgentCallsWhisperPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentEventTokenDelete':
			return executeeasyHuntingHuntingAgentEventTokenDelete.call(this, itemIndex);

		case 'easyHuntingHuntingAgentEventTokenListGet':
			return executeeasyHuntingHuntingAgentEventTokenListGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentEventTokenPost':
			return executeeasyHuntingHuntingAgentEventTokenPost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentLiveStatusListGet':
			return executeeasyHuntingHuntingAgentLiveStatusListGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentQueueListGet':
			return executeeasyHuntingHuntingAgentQueueListGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentQueuePost':
			return executeeasyHuntingHuntingAgentQueuePost.call(this, itemIndex);

		case 'easyHuntingHuntingAgentQueueDelete':
			return executeeasyHuntingHuntingAgentQueueDelete.call(this, itemIndex);

		case 'easyHuntingHuntingAgentQueueGet':
			return executeeasyHuntingHuntingAgentQueueGet.call(this, itemIndex);

		case 'easyHuntingHuntingAgentQueuePut':
			return executeeasyHuntingHuntingAgentQueuePut.call(this, itemIndex);

		case 'easyHuntingHuntingAgentQueueLiveStatusListGet':
			return executeeasyHuntingHuntingAgentQueueLiveStatusListGet.call(this, itemIndex);

		case 'easyHuntingHuntingCustomStatusListGet':
			return executeeasyHuntingHuntingCustomStatusListGet.call(this, itemIndex);

		case 'easyHuntingHuntingCustomStatusPost':
			return executeeasyHuntingHuntingCustomStatusPost.call(this, itemIndex);

		case 'easyHuntingHuntingCustomStatusDelete':
			return executeeasyHuntingHuntingCustomStatusDelete.call(this, itemIndex);

		case 'easyHuntingHuntingCustomStatusGet':
			return executeeasyHuntingHuntingCustomStatusGet.call(this, itemIndex);

		case 'easyHuntingHuntingEventTokenDelete':
			return executeeasyHuntingHuntingEventTokenDelete.call(this, itemIndex);

		case 'easyHuntingHuntingEventTokenListGet':
			return executeeasyHuntingHuntingEventTokenListGet.call(this, itemIndex);

		case 'easyHuntingHuntingEventTokenPost':
			return executeeasyHuntingHuntingEventTokenPost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueListGet':
			return executeeasyHuntingHuntingQueueListGet.call(this, itemIndex);

		case 'easyHuntingHuntingQueuePost':
			return executeeasyHuntingHuntingQueuePost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueDelete':
			return executeeasyHuntingHuntingQueueDelete.call(this, itemIndex);

		case 'easyHuntingHuntingQueueGet':
			return executeeasyHuntingHuntingQueueGet.call(this, itemIndex);

		case 'easyHuntingHuntingQueuePut':
			return executeeasyHuntingHuntingQueuePut.call(this, itemIndex);

		case 'easyHuntingHuntingQueueAgentListGet':
			return executeeasyHuntingHuntingQueueAgentListGet.call(this, itemIndex);

		case 'easyHuntingHuntingQueueAgentPost':
			return executeeasyHuntingHuntingQueueAgentPost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueAgentDelete':
			return executeeasyHuntingHuntingQueueAgentDelete.call(this, itemIndex);

		case 'easyHuntingHuntingQueueAgentGet':
			return executeeasyHuntingHuntingQueueAgentGet.call(this, itemIndex);

		case 'easyHuntingHuntingQueueAgentPut':
			return executeeasyHuntingHuntingQueueAgentPut.call(this, itemIndex);

		case 'easyHuntingHuntingQueueAgentLiveStatusListGet':
			return executeeasyHuntingHuntingQueueAgentLiveStatusListGet.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveCallsListGet':
			return executeeasyHuntingHuntingQueueLiveCallsListGet.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveCallsGet':
			return executeeasyHuntingHuntingQueueLiveCallsGet.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveCallsEavesdropPost':
			return executeeasyHuntingHuntingQueueLiveCallsEavesdropPost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveCallsHangupPost':
			return executeeasyHuntingHuntingQueueLiveCallsHangupPost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveCallsHoldPost':
			return executeeasyHuntingHuntingQueueLiveCallsHoldPost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveCallsInterceptPost':
			return executeeasyHuntingHuntingQueueLiveCallsInterceptPost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveCallsTransferPost':
			return executeeasyHuntingHuntingQueueLiveCallsTransferPost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveCallsWhisperPost':
			return executeeasyHuntingHuntingQueueLiveCallsWhisperPost.call(this, itemIndex);

		case 'easyHuntingHuntingQueueLiveStatisticsListGet':
			return executeeasyHuntingHuntingQueueLiveStatisticsListGet.call(this, itemIndex);

		case 'easyHuntingRecordsListGet':
			return executeeasyHuntingRecordsListGet.call(this, itemIndex);

		case 'easyHuntingRecordsDelete':
			return executeeasyHuntingRecordsDelete.call(this, itemIndex);

		case 'easyHuntingRecordsGet':
			return executeeasyHuntingRecordsGet.call(this, itemIndex);

		case 'easyHuntingScreenListConditionsListGet':
			return executeeasyHuntingScreenListConditionsListGet.call(this, itemIndex);

		case 'easyHuntingScreenListConditionsPut':
			return executeeasyHuntingScreenListConditionsPut.call(this, itemIndex);

		case 'easyHuntingScreenListConditionsConditionsListGet':
			return executeeasyHuntingScreenListConditionsConditionsListGet.call(this, itemIndex);

		case 'easyHuntingScreenListConditionsConditionsPost':
			return executeeasyHuntingScreenListConditionsConditionsPost.call(this, itemIndex);

		case 'easyHuntingScreenListConditionsConditionsDelete':
			return executeeasyHuntingScreenListConditionsConditionsDelete.call(this, itemIndex);

		case 'easyHuntingScreenListConditionsConditionsGet':
			return executeeasyHuntingScreenListConditionsConditionsGet.call(this, itemIndex);

		case 'easyHuntingScreenListConditionsConditionsPut':
			return executeeasyHuntingScreenListConditionsConditionsPut.call(this, itemIndex);

		case 'easyHuntingSoundListGet':
			return executeeasyHuntingSoundListGet.call(this, itemIndex);

		case 'easyHuntingSoundDelete':
			return executeeasyHuntingSoundDelete.call(this, itemIndex);

		case 'easyHuntingSoundGet':
			return executeeasyHuntingSoundGet.call(this, itemIndex);

		case 'easyHuntingSoundUploadPost':
			return executeeasyHuntingSoundUploadPost.call(this, itemIndex);

		case 'easyHuntingTimeConditionsListGet':
			return executeeasyHuntingTimeConditionsListGet.call(this, itemIndex);

		case 'easyHuntingTimeConditionsPut':
			return executeeasyHuntingTimeConditionsPut.call(this, itemIndex);

		case 'easyHuntingTimeConditionsConditionsListGet':
			return executeeasyHuntingTimeConditionsConditionsListGet.call(this, itemIndex);

		case 'easyHuntingTimeConditionsConditionsPost':
			return executeeasyHuntingTimeConditionsConditionsPost.call(this, itemIndex);

		case 'easyHuntingTimeConditionsConditionsDelete':
			return executeeasyHuntingTimeConditionsConditionsDelete.call(this, itemIndex);

		case 'easyHuntingTimeConditionsConditionsGet':
			return executeeasyHuntingTimeConditionsConditionsGet.call(this, itemIndex);

		case 'easyHuntingTimeConditionsConditionsPut':
			return executeeasyHuntingTimeConditionsConditionsPut.call(this, itemIndex);

		case 'eventTokenDelete':
			return executeeventTokenDelete.call(this, itemIndex);

		case 'eventTokenListGet':
			return executeeventTokenListGet.call(this, itemIndex);

		case 'eventTokenPost':
			return executeeventTokenPost.call(this, itemIndex);

		case 'hasSpecialNumbersListGet':
			return executehasSpecialNumbersListGet.call(this, itemIndex);

		case 'historyConsumptionListGet':
			return executehistoryConsumptionListGet.call(this, itemIndex);

		case 'historyConsumptionGet':
			return executehistoryConsumptionGet.call(this, itemIndex);

		case 'historyConsumptionFileListGet':
			return executehistoryConsumptionFileListGet.call(this, itemIndex);

		case 'historyRepaymentConsumptionListGet':
			return executehistoryRepaymentConsumptionListGet.call(this, itemIndex);

		case 'historyRepaymentConsumptionPost':
			return executehistoryRepaymentConsumptionPost.call(this, itemIndex);

		case 'historyRepaymentConsumptionGet':
			return executehistoryRepaymentConsumptionGet.call(this, itemIndex);

		case 'historyRepaymentConsumptionDocumentListGet':
			return executehistoryRepaymentConsumptionDocumentListGet.call(this, itemIndex);

		case 'historyTollfreeConsumptionListGet':
			return executehistoryTollfreeConsumptionListGet.call(this, itemIndex);

		case 'historyTollfreeConsumptionGet':
			return executehistoryTollfreeConsumptionGet.call(this, itemIndex);

		case 'historyTollfreeConsumptionDocumentListGet':
			return executehistoryTollfreeConsumptionDocumentListGet.call(this, itemIndex);

		case 'offerTaskListGet':
			return executeofferTaskListGet.call(this, itemIndex);

		case 'offerTaskGet':
			return executeofferTaskGet.call(this, itemIndex);

		case 'offerTaskPut':
			return executeofferTaskPut.call(this, itemIndex);

		case 'oldPhoneListGet':
			return executeoldPhoneListGet.call(this, itemIndex);

		case 'outplanNotificationListGet':
			return executeoutplanNotificationListGet.call(this, itemIndex);

		case 'outplanNotificationPost':
			return executeoutplanNotificationPost.call(this, itemIndex);

		case 'outplanNotificationDelete':
			return executeoutplanNotificationDelete.call(this, itemIndex);

		case 'outplanNotificationGet':
			return executeoutplanNotificationGet.call(this, itemIndex);

		case 'ovhPabxListGet':
			return executeovhPabxListGet.call(this, itemIndex);

		case 'ovhPabxGet':
			return executeovhPabxGet.call(this, itemIndex);

		case 'ovhPabxPut':
			return executeovhPabxPut.call(this, itemIndex);

		case 'ovhPabxDialplanListGet':
			return executeovhPabxDialplanListGet.call(this, itemIndex);

		case 'ovhPabxDialplanPost':
			return executeovhPabxDialplanPost.call(this, itemIndex);

		case 'ovhPabxDialplanDelete':
			return executeovhPabxDialplanDelete.call(this, itemIndex);

		case 'ovhPabxDialplanGet':
			return executeovhPabxDialplanGet.call(this, itemIndex);

		case 'ovhPabxDialplanPut':
			return executeovhPabxDialplanPut.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionListGet':
			return executeovhPabxDialplanExtensionListGet.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionPost':
			return executeovhPabxDialplanExtensionPost.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionDelete':
			return executeovhPabxDialplanExtensionDelete.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionGet':
			return executeovhPabxDialplanExtensionGet.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionPut':
			return executeovhPabxDialplanExtensionPut.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionScreenListListGet':
			return executeovhPabxDialplanExtensionConditionScreenListListGet.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionScreenListPost':
			return executeovhPabxDialplanExtensionConditionScreenListPost.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionScreenListDelete':
			return executeovhPabxDialplanExtensionConditionScreenListDelete.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionScreenListGet':
			return executeovhPabxDialplanExtensionConditionScreenListGet.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionTimeListGet':
			return executeovhPabxDialplanExtensionConditionTimeListGet.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionTimePost':
			return executeovhPabxDialplanExtensionConditionTimePost.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionTimeDelete':
			return executeovhPabxDialplanExtensionConditionTimeDelete.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionTimeGet':
			return executeovhPabxDialplanExtensionConditionTimeGet.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionConditionTimePut':
			return executeovhPabxDialplanExtensionConditionTimePut.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionRuleListGet':
			return executeovhPabxDialplanExtensionRuleListGet.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionRulePost':
			return executeovhPabxDialplanExtensionRulePost.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionRuleDelete':
			return executeovhPabxDialplanExtensionRuleDelete.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionRuleGet':
			return executeovhPabxDialplanExtensionRuleGet.call(this, itemIndex);

		case 'ovhPabxDialplanExtensionRulePut':
			return executeovhPabxDialplanExtensionRulePut.call(this, itemIndex);

		case 'ovhPabxHuntingListGet':
			return executeovhPabxHuntingListGet.call(this, itemIndex);

		case 'ovhPabxHuntingPut':
			return executeovhPabxHuntingPut.call(this, itemIndex);

		case 'ovhPabxHuntingAgentListGet':
			return executeovhPabxHuntingAgentListGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentPost':
			return executeovhPabxHuntingAgentPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentDelete':
			return executeovhPabxHuntingAgentDelete.call(this, itemIndex);

		case 'ovhPabxHuntingAgentGet':
			return executeovhPabxHuntingAgentGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentPut':
			return executeovhPabxHuntingAgentPut.call(this, itemIndex);

		case 'ovhPabxHuntingAgentBannerAccessDelete':
			return executeovhPabxHuntingAgentBannerAccessDelete.call(this, itemIndex);

		case 'ovhPabxHuntingAgentBannerAccessListGet':
			return executeovhPabxHuntingAgentBannerAccessListGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentBannerAccessPost':
			return executeovhPabxHuntingAgentBannerAccessPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentCallsListGet':
			return executeovhPabxHuntingAgentCallsListGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentCallsGet':
			return executeovhPabxHuntingAgentCallsGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentCallsEavesdropPost':
			return executeovhPabxHuntingAgentCallsEavesdropPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentCallsHangupPost':
			return executeovhPabxHuntingAgentCallsHangupPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentCallsHoldPost':
			return executeovhPabxHuntingAgentCallsHoldPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentCallsInterceptPost':
			return executeovhPabxHuntingAgentCallsInterceptPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentCallsTransferPost':
			return executeovhPabxHuntingAgentCallsTransferPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentCallsWhisperPost':
			return executeovhPabxHuntingAgentCallsWhisperPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentEventTokenDelete':
			return executeovhPabxHuntingAgentEventTokenDelete.call(this, itemIndex);

		case 'ovhPabxHuntingAgentEventTokenListGet':
			return executeovhPabxHuntingAgentEventTokenListGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentEventTokenPost':
			return executeovhPabxHuntingAgentEventTokenPost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentLiveStatusListGet':
			return executeovhPabxHuntingAgentLiveStatusListGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentQueueListGet':
			return executeovhPabxHuntingAgentQueueListGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentQueuePost':
			return executeovhPabxHuntingAgentQueuePost.call(this, itemIndex);

		case 'ovhPabxHuntingAgentQueueDelete':
			return executeovhPabxHuntingAgentQueueDelete.call(this, itemIndex);

		case 'ovhPabxHuntingAgentQueueGet':
			return executeovhPabxHuntingAgentQueueGet.call(this, itemIndex);

		case 'ovhPabxHuntingAgentQueuePut':
			return executeovhPabxHuntingAgentQueuePut.call(this, itemIndex);

		case 'ovhPabxHuntingAgentQueueLiveStatusListGet':
			return executeovhPabxHuntingAgentQueueLiveStatusListGet.call(this, itemIndex);

		case 'ovhPabxHuntingCustomStatusListGet':
			return executeovhPabxHuntingCustomStatusListGet.call(this, itemIndex);

		case 'ovhPabxHuntingCustomStatusPost':
			return executeovhPabxHuntingCustomStatusPost.call(this, itemIndex);

		case 'ovhPabxHuntingCustomStatusDelete':
			return executeovhPabxHuntingCustomStatusDelete.call(this, itemIndex);

		case 'ovhPabxHuntingCustomStatusGet':
			return executeovhPabxHuntingCustomStatusGet.call(this, itemIndex);

		case 'ovhPabxHuntingEventTokenDelete':
			return executeovhPabxHuntingEventTokenDelete.call(this, itemIndex);

		case 'ovhPabxHuntingEventTokenListGet':
			return executeovhPabxHuntingEventTokenListGet.call(this, itemIndex);

		case 'ovhPabxHuntingEventTokenPost':
			return executeovhPabxHuntingEventTokenPost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueListGet':
			return executeovhPabxHuntingQueueListGet.call(this, itemIndex);

		case 'ovhPabxHuntingQueuePost':
			return executeovhPabxHuntingQueuePost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueDelete':
			return executeovhPabxHuntingQueueDelete.call(this, itemIndex);

		case 'ovhPabxHuntingQueueGet':
			return executeovhPabxHuntingQueueGet.call(this, itemIndex);

		case 'ovhPabxHuntingQueuePut':
			return executeovhPabxHuntingQueuePut.call(this, itemIndex);

		case 'ovhPabxHuntingQueueAgentListGet':
			return executeovhPabxHuntingQueueAgentListGet.call(this, itemIndex);

		case 'ovhPabxHuntingQueueAgentPost':
			return executeovhPabxHuntingQueueAgentPost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueAgentDelete':
			return executeovhPabxHuntingQueueAgentDelete.call(this, itemIndex);

		case 'ovhPabxHuntingQueueAgentGet':
			return executeovhPabxHuntingQueueAgentGet.call(this, itemIndex);

		case 'ovhPabxHuntingQueueAgentPut':
			return executeovhPabxHuntingQueueAgentPut.call(this, itemIndex);

		case 'ovhPabxHuntingQueueAgentLiveStatusListGet':
			return executeovhPabxHuntingQueueAgentLiveStatusListGet.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveCallsListGet':
			return executeovhPabxHuntingQueueLiveCallsListGet.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveCallsGet':
			return executeovhPabxHuntingQueueLiveCallsGet.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveCallsEavesdropPost':
			return executeovhPabxHuntingQueueLiveCallsEavesdropPost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveCallsHangupPost':
			return executeovhPabxHuntingQueueLiveCallsHangupPost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveCallsHoldPost':
			return executeovhPabxHuntingQueueLiveCallsHoldPost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveCallsInterceptPost':
			return executeovhPabxHuntingQueueLiveCallsInterceptPost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveCallsTransferPost':
			return executeovhPabxHuntingQueueLiveCallsTransferPost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveCallsWhisperPost':
			return executeovhPabxHuntingQueueLiveCallsWhisperPost.call(this, itemIndex);

		case 'ovhPabxHuntingQueueLiveStatisticsListGet':
			return executeovhPabxHuntingQueueLiveStatisticsListGet.call(this, itemIndex);

		case 'ovhPabxMenuListGet':
			return executeovhPabxMenuListGet.call(this, itemIndex);

		case 'ovhPabxMenuPost':
			return executeovhPabxMenuPost.call(this, itemIndex);

		case 'ovhPabxMenuDelete':
			return executeovhPabxMenuDelete.call(this, itemIndex);

		case 'ovhPabxMenuGet':
			return executeovhPabxMenuGet.call(this, itemIndex);

		case 'ovhPabxMenuPut':
			return executeovhPabxMenuPut.call(this, itemIndex);

		case 'ovhPabxMenuEntryListGet':
			return executeovhPabxMenuEntryListGet.call(this, itemIndex);

		case 'ovhPabxMenuEntryPost':
			return executeovhPabxMenuEntryPost.call(this, itemIndex);

		case 'ovhPabxMenuEntryDelete':
			return executeovhPabxMenuEntryDelete.call(this, itemIndex);

		case 'ovhPabxMenuEntryGet':
			return executeovhPabxMenuEntryGet.call(this, itemIndex);

		case 'ovhPabxMenuEntryPut':
			return executeovhPabxMenuEntryPut.call(this, itemIndex);

		case 'ovhPabxRecordsListGet':
			return executeovhPabxRecordsListGet.call(this, itemIndex);

		case 'ovhPabxRecordsDelete':
			return executeovhPabxRecordsDelete.call(this, itemIndex);

		case 'ovhPabxRecordsGet':
			return executeovhPabxRecordsGet.call(this, itemIndex);

		case 'ovhPabxSoundListGet':
			return executeovhPabxSoundListGet.call(this, itemIndex);

		case 'ovhPabxSoundDelete':
			return executeovhPabxSoundDelete.call(this, itemIndex);

		case 'ovhPabxSoundGet':
			return executeovhPabxSoundGet.call(this, itemIndex);

		case 'ovhPabxSoundUploadPost':
			return executeovhPabxSoundUploadPost.call(this, itemIndex);

		case 'ovhPabxTtsListGet':
			return executeovhPabxTtsListGet.call(this, itemIndex);

		case 'ovhPabxTtsPost':
			return executeovhPabxTtsPost.call(this, itemIndex);

		case 'ovhPabxTtsDelete':
			return executeovhPabxTtsDelete.call(this, itemIndex);

		case 'ovhPabxTtsGet':
			return executeovhPabxTtsGet.call(this, itemIndex);

		case 'ovhPabxTtsPut':
			return executeovhPabxTtsPut.call(this, itemIndex);

		case 'phonebookListGet':
			return executephonebookListGet.call(this, itemIndex);

		case 'phonebookPost':
			return executephonebookPost.call(this, itemIndex);

		case 'phonebookDelete':
			return executephonebookDelete.call(this, itemIndex);

		case 'phonebookGet':
			return executephonebookGet.call(this, itemIndex);

		case 'phonebookPut':
			return executephonebookPut.call(this, itemIndex);

		case 'phonebookExportListGet':
			return executephonebookExportListGet.call(this, itemIndex);

		case 'phonebookImportPost':
			return executephonebookImportPost.call(this, itemIndex);

		case 'phonebookPhonebookContactListGet':
			return executephonebookPhonebookContactListGet.call(this, itemIndex);

		case 'phonebookPhonebookContactPost':
			return executephonebookPhonebookContactPost.call(this, itemIndex);

		case 'phonebookPhonebookContactDelete':
			return executephonebookPhonebookContactDelete.call(this, itemIndex);

		case 'phonebookPhonebookContactGet':
			return executephonebookPhonebookContactGet.call(this, itemIndex);

		case 'phonebookPhonebookContactPut':
			return executephonebookPhonebookContactPut.call(this, itemIndex);

		case 'portabilityDetailGet':
			return executeportabilityDetailGet.call(this, itemIndex);

		case 'portabilityCanBeCancelledListGet':
			return executeportabilityCanBeCancelledListGet.call(this, itemIndex);

		case 'portabilityCanBeExecutedListGet':
			return executeportabilityCanBeExecutedListGet.call(this, itemIndex);

		case 'portabilityCancelPost':
			return executeportabilityCancelPost.call(this, itemIndex);

		case 'portabilityChangeDatePost':
			return executeportabilityChangeDatePost.call(this, itemIndex);

		case 'portabilityDateCanBeChangedListGet':
			return executeportabilityDateCanBeChangedListGet.call(this, itemIndex);

		case 'portabilityDocumentListGet':
			return executeportabilityDocumentListGet.call(this, itemIndex);

		case 'portabilityDocumentPost':
			return executeportabilityDocumentPost.call(this, itemIndex);

		case 'portabilityDocumentDelete':
			return executeportabilityDocumentDelete.call(this, itemIndex);

		case 'portabilityDocumentGet':
			return executeportabilityDocumentGet.call(this, itemIndex);

		case 'portabilityDocumentPut':
			return executeportabilityDocumentPut.call(this, itemIndex);

		case 'portabilityExecutePost':
			return executeportabilityExecutePost.call(this, itemIndex);

		case 'portabilityRelaunchListGet':
			return executeportabilityRelaunchListGet.call(this, itemIndex);

		case 'portabilityRelaunchPost':
			return executeportabilityRelaunchPost.call(this, itemIndex);

		case 'portabilityStatusListGet':
			return executeportabilityStatusListGet.call(this, itemIndex);

		case 'redirectListGet':
			return executeredirectListGet.call(this, itemIndex);

		case 'redirectGet':
			return executeredirectGet.call(this, itemIndex);

		case 'redirectPut':
			return executeredirectPut.call(this, itemIndex);

		case 'redirectChangeDestinationPost':
			return executeredirectChangeDestinationPost.call(this, itemIndex);

		case 'rsvaListGet':
			return executersvaListGet.call(this, itemIndex);

		case 'rsvaGet':
			return executersvaGet.call(this, itemIndex);

		case 'rsvaPut':
			return executersvaPut.call(this, itemIndex);

		case 'rsvaAllowedRateCodesListGet':
			return executersvaAllowedRateCodesListGet.call(this, itemIndex);

		case 'rsvaCancelScheduledRateCodePost':
			return executersvaCancelScheduledRateCodePost.call(this, itemIndex);

		case 'rsvaCurrentRateCodeListGet':
			return executersvaCurrentRateCodeListGet.call(this, itemIndex);

		case 'rsvaScheduledRateCodeListGet':
			return executersvaScheduledRateCodeListGet.call(this, itemIndex);

		case 'rsvaScheduleRateCodePost':
			return executersvaScheduleRateCodePost.call(this, itemIndex);

		case 'schedulerListGet':
			return executeschedulerListGet.call(this, itemIndex);

		case 'schedulerGet':
			return executeschedulerGet.call(this, itemIndex);

		case 'schedulerPut':
			return executeschedulerPut.call(this, itemIndex);

		case 'schedulerEventsListGet':
			return executeschedulerEventsListGet.call(this, itemIndex);

		case 'schedulerEventsPost':
			return executeschedulerEventsPost.call(this, itemIndex);

		case 'schedulerEventsDelete':
			return executeschedulerEventsDelete.call(this, itemIndex);

		case 'schedulerEventsGet':
			return executeschedulerEventsGet.call(this, itemIndex);

		case 'schedulerEventsPut':
			return executeschedulerEventsPut.call(this, itemIndex);

		case 'schedulerImportIcsCalendarPost':
			return executeschedulerImportIcsCalendarPost.call(this, itemIndex);

		case 'screenListGet':
			return executescreenListGet.call(this, itemIndex);

		case 'screenGet':
			return executescreenGet.call(this, itemIndex);

		case 'screenPut':
			return executescreenPut.call(this, itemIndex);

		case 'screenScreenListsListGet':
			return executescreenScreenListsListGet.call(this, itemIndex);

		case 'screenScreenListsPost':
			return executescreenScreenListsPost.call(this, itemIndex);

		case 'screenScreenListsDelete':
			return executescreenScreenListsDelete.call(this, itemIndex);

		case 'screenScreenListsGet':
			return executescreenScreenListsGet.call(this, itemIndex);

		case 'serviceListGet':
			return executeserviceListGet.call(this, itemIndex);

		case 'serviceDelete':
			return executeserviceDelete.call(this, itemIndex);

		case 'serviceGet':
			return executeserviceGet.call(this, itemIndex);

		case 'servicePut':
			return executeservicePut.call(this, itemIndex);

		case 'serviceCancelTerminationPost':
			return executeserviceCancelTerminationPost.call(this, itemIndex);

		case 'serviceChangeOfBillingAccountPost':
			return executeserviceChangeOfBillingAccountPost.call(this, itemIndex);

		case 'serviceDiagnosticReportsListGet':
			return executeserviceDiagnosticReportsListGet.call(this, itemIndex);

		case 'serviceDirectoryListGet':
			return executeserviceDirectoryListGet.call(this, itemIndex);

		case 'serviceDirectoryPut':
			return executeserviceDirectoryPut.call(this, itemIndex);

		case 'serviceDirectoryFetchEntrepriseInformationsPost':
			return executeserviceDirectoryFetchEntrepriseInformationsPost.call(this, itemIndex);

		case 'serviceDirectoryGetDirectoryServiceCodeListGet':
			return executeserviceDirectoryGetDirectoryServiceCodeListGet.call(this, itemIndex);

		case 'serviceDirectoryGetWayTypesListGet':
			return executeserviceDirectoryGetWayTypesListGet.call(this, itemIndex);

		case 'serviceEventTokenDelete':
			return executeserviceEventTokenDelete.call(this, itemIndex);

		case 'serviceEventTokenListGet':
			return executeserviceEventTokenListGet.call(this, itemIndex);

		case 'serviceEventTokenPost':
			return executeserviceEventTokenPost.call(this, itemIndex);

		case 'serviceFaxConsumptionListGet':
			return executeserviceFaxConsumptionListGet.call(this, itemIndex);

		case 'serviceFaxConsumptionGet':
			return executeserviceFaxConsumptionGet.call(this, itemIndex);

		case 'serviceOfferChangeDelete':
			return executeserviceOfferChangeDelete.call(this, itemIndex);

		case 'serviceOfferChangeListGet':
			return executeserviceOfferChangeListGet.call(this, itemIndex);

		case 'serviceOfferChangePost':
			return executeserviceOfferChangePost.call(this, itemIndex);

		case 'serviceOfferChangesListGet':
			return executeserviceOfferChangesListGet.call(this, itemIndex);

		case 'serviceOfferTaskListGet':
			return executeserviceOfferTaskListGet.call(this, itemIndex);

		case 'serviceOfferTaskGet':
			return executeserviceOfferTaskGet.call(this, itemIndex);

		case 'serviceOfferTaskPut':
			return executeserviceOfferTaskPut.call(this, itemIndex);

		case 'servicePreviousVoiceConsumptionListGet':
			return executeservicePreviousVoiceConsumptionListGet.call(this, itemIndex);

		case 'servicePreviousVoiceConsumptionGet':
			return executeservicePreviousVoiceConsumptionGet.call(this, itemIndex);

		case 'serviceRepaymentConsumptionListGet':
			return executeserviceRepaymentConsumptionListGet.call(this, itemIndex);

		case 'serviceRepaymentConsumptionGet':
			return executeserviceRepaymentConsumptionGet.call(this, itemIndex);

		case 'serviceTaskListGet':
			return executeserviceTaskListGet.call(this, itemIndex);

		case 'serviceTaskGet':
			return executeserviceTaskGet.call(this, itemIndex);

		case 'serviceVoiceConsumptionListGet':
			return executeserviceVoiceConsumptionListGet.call(this, itemIndex);

		case 'serviceVoiceConsumptionGet':
			return executeserviceVoiceConsumptionGet.call(this, itemIndex);

		case 'softphoneLogoDelete':
			return executesoftphoneLogoDelete.call(this, itemIndex);

		case 'softphoneLogoListGet':
			return executesoftphoneLogoListGet.call(this, itemIndex);

		case 'softphoneLogoPut':
			return executesoftphoneLogoPut.call(this, itemIndex);

		case 'softphoneThemeListGet':
			return executesoftphoneThemeListGet.call(this, itemIndex);

		case 'softphoneThemePut':
			return executesoftphoneThemePut.call(this, itemIndex);

		case 'timeConditionListGet':
			return executetimeConditionListGet.call(this, itemIndex);

		case 'timeConditionGet':
			return executetimeConditionGet.call(this, itemIndex);

		case 'timeConditionConditionListGet':
			return executetimeConditionConditionListGet.call(this, itemIndex);

		case 'timeConditionConditionPost':
			return executetimeConditionConditionPost.call(this, itemIndex);

		case 'timeConditionConditionDelete':
			return executetimeConditionConditionDelete.call(this, itemIndex);

		case 'timeConditionConditionGet':
			return executetimeConditionConditionGet.call(this, itemIndex);

		case 'timeConditionConditionPut':
			return executetimeConditionConditionPut.call(this, itemIndex);

		case 'timeConditionOptionsListGet':
			return executetimeConditionOptionsListGet.call(this, itemIndex);

		case 'timeConditionOptionsPut':
			return executetimeConditionOptionsPut.call(this, itemIndex);

		case 'trunkListGet':
			return executetrunkListGet.call(this, itemIndex);

		case 'trunkGet':
			return executetrunkGet.call(this, itemIndex);

		case 'trunkChannelsPacksRepartitionListGet':
			return executetrunkChannelsPacksRepartitionListGet.call(this, itemIndex);

		case 'trunkExternalDisplayedNumberListGet':
			return executetrunkExternalDisplayedNumberListGet.call(this, itemIndex);

		case 'trunkExternalDisplayedNumberPost':
			return executetrunkExternalDisplayedNumberPost.call(this, itemIndex);

		case 'trunkExternalDisplayedNumberDelete':
			return executetrunkExternalDisplayedNumberDelete.call(this, itemIndex);

		case 'trunkExternalDisplayedNumberGet':
			return executetrunkExternalDisplayedNumberGet.call(this, itemIndex);

		case 'trunkExternalDisplayedNumberValidatePost':
			return executetrunkExternalDisplayedNumberValidatePost.call(this, itemIndex);

		case 'voicemailListGet':
			return executevoicemailListGet.call(this, itemIndex);

		case 'voicemailGet':
			return executevoicemailGet.call(this, itemIndex);

		case 'voicemailPut':
			return executevoicemailPut.call(this, itemIndex);

		case 'voicemailDirectoriesListGet':
			return executevoicemailDirectoriesListGet.call(this, itemIndex);

		case 'voicemailDirectoriesDelete':
			return executevoicemailDirectoriesDelete.call(this, itemIndex);

		case 'voicemailDirectoriesGet':
			return executevoicemailDirectoriesGet.call(this, itemIndex);

		case 'voicemailDirectoriesDownloadListGet':
			return executevoicemailDirectoriesDownloadListGet.call(this, itemIndex);

		case 'voicemailDirectoriesMovePost':
			return executevoicemailDirectoriesMovePost.call(this, itemIndex);

		case 'voicemailDirectoriesTranscriptListGet':
			return executevoicemailDirectoriesTranscriptListGet.call(this, itemIndex);

		case 'voicemailGreetingsListGet':
			return executevoicemailGreetingsListGet.call(this, itemIndex);

		case 'voicemailGreetingsPost':
			return executevoicemailGreetingsPost.call(this, itemIndex);

		case 'voicemailGreetingsDelete':
			return executevoicemailGreetingsDelete.call(this, itemIndex);

		case 'voicemailGreetingsGet':
			return executevoicemailGreetingsGet.call(this, itemIndex);

		case 'voicemailGreetingsDownloadListGet':
			return executevoicemailGreetingsDownloadListGet.call(this, itemIndex);

		case 'voicemailGreetingsMovePost':
			return executevoicemailGreetingsMovePost.call(this, itemIndex);

		case 'voicemailMigrateOnNewVersionPost':
			return executevoicemailMigrateOnNewVersionPost.call(this, itemIndex);

		case 'voicemailSettingsListGet':
			return executevoicemailSettingsListGet.call(this, itemIndex);

		case 'voicemailSettingsPut':
			return executevoicemailSettingsPut.call(this, itemIndex);

		case 'voicemailSettingsChangePasswordPost':
			return executevoicemailSettingsChangePasswordPost.call(this, itemIndex);

		case 'voicemailSettingsChangeRoutingPost':
			return executevoicemailSettingsChangeRoutingPost.call(this, itemIndex);

		case 'voicemailSettingsRoutingListGet':
			return executevoicemailSettingsRoutingListGet.call(this, itemIndex);

		case 'voicemailSettingsVoicemailNumbersListGet':
			return executevoicemailSettingsVoicemailNumbersListGet.call(this, itemIndex);
		case 'numberDetailedZonesListGet':
			return executenumberDetailedZonesListGet.call(this, itemIndex);
		case 'numberRangesListGet':
			return executenumberRangesListGet.call(this, itemIndex);
		case 'numberSpecificNumbersListGet':
			return executenumberSpecificNumbersListGet.call(this, itemIndex);
		case 'numberZonesListGet':
			return executenumberZonesListGet.call(this, itemIndex);
		case 'procedureListGet':
			return executeprocedureListGet.call(this, itemIndex);
		case 'procedurePost':
			return executeprocedurePost.call(this, itemIndex);
		case 'procedureGet':
			return executeprocedureGet.call(this, itemIndex);
		case 'procedureCancelPost':
			return executeprocedureCancelPost.call(this, itemIndex);
		case 'procedureRequiredListGet':
			return executeprocedureRequiredListGet.call(this, itemIndex);
		case 'resellerPanelGeneratePasswordPost':
			return executeresellerPanelGeneratePasswordPost.call(this, itemIndex);
		case 'resellerPanelStatusListGet':
			return executeresellerPanelStatusListGet.call(this, itemIndex);
		case 'softphoneStoreLinksListGet':
			return executesoftphoneStoreLinksListGet.call(this, itemIndex);
		case 'softphoneThemesListGet':
			return executesoftphoneThemesListGet.call(this, itemIndex);
		case 'softphoneThemesGet':
			return executesoftphoneThemesGet.call(this, itemIndex);
		case 'soundsListGet':
			return executesoundsListGet.call(this, itemIndex);
		case 'soundsPost':
			return executesoundsPost.call(this, itemIndex);
		case 'soundsDelete':
			return executesoundsDelete.call(this, itemIndex);
		case 'soundsGet':
			return executesoundsGet.call(this, itemIndex);
		case 'soundsPut':
			return executesoundsPut.call(this, itemIndex);
		case 'spareListGet':
			return executespareListGet.call(this, itemIndex);
		case 'spareDelete':
			return executespareDelete.call(this, itemIndex);
		case 'spareGet':
			return executespareGet.call(this, itemIndex);
		case 'spareCompatibleReplacementListGet':
			return executespareCompatibleReplacementListGet.call(this, itemIndex);
		case 'spareReplacePost':
			return executespareReplacePost.call(this, itemIndex);
		case 'spareServiceInfosListGet':
			return executespareServiceInfosListGet.call(this, itemIndex);
		case 'spareServiceInfosPut':
			return executespareServiceInfosPut.call(this, itemIndex);
		case 'spareBrandsListGet':
			return executespareBrandsListGet.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "telephony"`);
}

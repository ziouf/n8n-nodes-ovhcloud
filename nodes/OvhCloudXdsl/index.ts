import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as antiSpamDetailGetExecute } from './resources/main/antiSpamDetailGet.operation';
import { execute as antiSpamEvidencesGetExecute } from './resources/main/antiSpamEvidencesGet.operation';
import { execute as antiSpamsGetExecute } from './resources/main/antiSpamsGet.operation';
import { execute as canCancelResiliationGetExecute } from './resources/main/canCancelResiliationGet.operation';
import { execute as cancelResiliationPostExecute } from './resources/main/cancelResiliationPost.operation';
import { execute as changeContactPostExecute } from './resources/main/changeContactPost.operation';
import { execute as deleteXdslEmailProDeleteExecute } from './resources/main/deleteXdslEmailProDelete.operation';
import { execute as deleteXdslModemLanDhcpStaticDeleteExecute } from './resources/main/deleteXdslModemLanDhcpStaticDelete.operation';
import { execute as deleteXdslModemPortMappingDeleteExecute } from './resources/main/deleteXdslModemPortMappingDelete.operation';
import { execute as deleteXdslMonitoringNotificationDeleteExecute } from './resources/main/deleteXdslMonitoringNotificationDelete.operation';
import { execute as deleteXdslRmaDeleteExecute } from './resources/main/deleteXdslRmaDelete.operation';
import { execute as deleteXdslSpareDeleteExecute } from './resources/main/deleteXdslSpareDelete.operation';
import { execute as deleteXdslTemplateModemDeleteExecute } from './resources/main/deleteXdslTemplateModemDelete.operation';
import { execute as diagnosticGetExecute } from './resources/main/diagnosticGet.operation';
import { execute as diagnosticPostExecute } from './resources/main/diagnosticPost.operation';
import { execute as dslamPortAvailableProfilesGetExecute } from './resources/lines/dslamPortAvailableProfilesGet.operation';
import { execute as dslamPortChangeProfilePostExecute } from './resources/lines/dslamPortChangeProfilePost.operation';
import { execute as dslamPortGetExecute } from './resources/lines/dslamPortGet.operation';
import { execute as dslamPortLogsGetExecute } from './resources/lines/dslamPortLogsGet.operation';
import { execute as dslamPortResetPostExecute } from './resources/lines/dslamPortResetPost.operation';
import { execute as extraIpRangeGetExecute } from './resources/main/extraIpRangeGet.operation';
import { execute as extraIpRangeMovePostExecute } from './resources/main/extraIpRangeMovePost.operation';
import { execute as fiberEligibilitiesGetExecute } from './resources/main/fiberEligibilitiesGet.operation';
import { execute as fiberEligibilityDetailGetExecute } from './resources/main/fiberEligibilityDetailGet.operation';
import { execute as getExecute } from './resources/main/get.operation';
import { execute as getXdslEmailProGetExecute } from './resources/main/getXdslEmailProGet.operation';
import { execute as getXdslIpGetExecute } from './resources/main/getXdslIpGet.operation';
import { execute as getXdslLineGetExecute } from './resources/main/getXdslLineGet.operation';
import { execute as getXdslModemBlocIpGetExecute } from './resources/main/getXdslModemBlocIpGet.operation';
import { execute as getXdslModemCallWaitingGetExecute } from './resources/main/getXdslModemCallWaitingGet.operation';
import { execute as getXdslModemComfortExchangeGetExecute } from './resources/main/getXdslModemComfortExchangeGet.operation';
import { execute as getXdslModemConnectedDeviceGetExecute } from './resources/main/getXdslModemConnectedDeviceGet.operation';
import { execute as getXdslModemContentSharingGetExecute } from './resources/main/getXdslModemContentSharingGet.operation';
import { execute as getXdslModemFirmwareGetExecute } from './resources/main/getXdslModemFirmwareGet.operation';
import { execute as getXdslModemFtpGetExecute } from './resources/main/getXdslModemFtpGet.operation';
import { execute as getXdslModemIpsecAlgGetExecute } from './resources/main/getXdslModemIpsecAlgGet.operation';
import { execute as getXdslModemLanDhcpDetailGetExecute } from './resources/main/getXdslModemLanDhcpDetailGet.operation';
import { execute as getXdslModemLanDhcpGetExecute } from './resources/main/getXdslModemLanDhcpGet.operation';
import { execute as getXdslModemLanDhcpStaticDetailGetExecute } from './resources/main/getXdslModemLanDhcpStaticDetailGet.operation';
import { execute as getXdslModemLanGetExecute } from './resources/main/getXdslModemLanGet.operation';
import { execute as getXdslModemPortMappingGetExecute } from './resources/main/getXdslModemPortMappingGet.operation';
import { execute as getXdslModemSipAlgGetExecute } from './resources/main/getXdslModemSipAlgGet.operation';
import { execute as getXdslModemUpnpGetExecute } from './resources/main/getXdslModemUpnpGet.operation';
import { execute as getXdslModemWifiGetExecute } from './resources/main/getXdslModemWifiGet.operation';
import { execute as getXdslModemWifiQrCodeGetExecute } from './resources/main/getXdslModemWifiQrCodeGet.operation';
import { execute as getXdslMonitoringNotificationGetExecute } from './resources/main/getXdslMonitoringNotificationGet.operation';
import { execute as getXdslOntGetExecute } from './resources/main/getXdslOntGet.operation';
import { execute as getXdslOrderFollowupGetExecute } from './resources/main/getXdslOrderFollowupGet.operation';
import { execute as getXdslResiliationFollowupGetExecute } from './resources/main/getXdslResiliationFollowupGet.operation';
import { execute as getXdslResiliationTermsGetExecute } from './resources/main/getXdslResiliationTermsGet.operation';
import { execute as getXdslRmaGetExecute } from './resources/main/getXdslRmaGet.operation';
import { execute as getXdslServiceInfosGetExecute } from './resources/main/getXdslServiceInfosGet.operation';
import { execute as getXdslSpareCompatibleReplacementGetExecute } from './resources/main/getXdslSpareCompatibleReplacementGet.operation';
import { execute as getXdslSpareGetExecute } from './resources/main/getXdslSpareGet.operation';
import { execute as getXdslSpareServiceInfosGetExecute } from './resources/main/getXdslSpareServiceInfosGet.operation';
import { execute as getXdslStatisticsGetExecute } from './resources/main/getXdslStatisticsGet.operation';
import { execute as getXdslTaskGetExecute } from './resources/main/getXdslTaskGet.operation';
import { execute as getXdslTemplateModemGetExecute } from './resources/main/getXdslTemplateModemGet.operation';
import { execute as getXdslTotalDeconsolidationTermsGetExecute } from './resources/main/getXdslTotalDeconsolidationTermsGet.operation';
import { execute as incidentDetailGetExecute } from './resources/main/incidentDetailGet.operation';
import { execute as incidentGetExecute } from './resources/main/incidentGet.operation';
import { execute as incidentsGetExecute } from './resources/main/incidentsGet.operation';
import { execute as ipDeleteExecute } from './resources/main/ipDelete.operation';
import { execute as ipsGetExecute } from './resources/main/ipsGet.operation';
import { execute as ipsPostExecute } from './resources/main/ipsPost.operation';
import { execute as lineDiagnosticCancelPostExecute } from './resources/lines/lineDiagnosticCancelPost.operation';
import { execute as lineDiagnosticRunPostExecute } from './resources/lines/lineDiagnosticRunPost.operation';
import { execute as linesStatisticsGetExecute } from './resources/lines/linesStatisticsGet.operation';
import { execute as listExecute } from './resources/main/list.operation';
import { execute as listXdslEmailProGetExecute } from './resources/main/listXdslEmailProGet.operation';
import { execute as listXdslLinesGetExecute } from './resources/main/listXdslLinesGet.operation';
import { execute as listXdslModemAvailableAcsBackendGetExecute } from './resources/main/listXdslModemAvailableAcsBackendGet.operation';
import { execute as listXdslModemAvailableWlanChannelGetExecute } from './resources/main/listXdslModemAvailableWlanChannelGet.operation';
import { execute as listXdslModemConnectedDevicesGetExecute } from './resources/main/listXdslModemConnectedDevicesGet.operation';
import { execute as listXdslModemFirmwareAvailableGetExecute } from './resources/main/listXdslModemFirmwareAvailableGet.operation';
import { execute as listXdslModemLanDhcpStaticGetExecute } from './resources/main/listXdslModemLanDhcpStaticGet.operation';
import { execute as listXdslModemLanGetExecute } from './resources/main/listXdslModemLanGet.operation';
import { execute as listXdslModemPortMappingsGetExecute } from './resources/main/listXdslModemPortMappingsGet.operation';
import { execute as listXdslModemWifiGetExecute } from './resources/main/listXdslModemWifiGet.operation';
import { execute as listXdslMonitoringNotificationsGetExecute } from './resources/main/listXdslMonitoringNotificationsGet.operation';
import { execute as listXdslPendingActionsGetExecute } from './resources/main/listXdslPendingActionsGet.operation';
import { execute as listXdslRadiusConnectionLogsGetExecute } from './resources/main/listXdslRadiusConnectionLogsGet.operation';
import { execute as listXdslRmaGetExecute } from './resources/main/listXdslRmaGet.operation';
import { execute as listXdslSpareBrandsGetExecute } from './resources/main/listXdslSpareBrandsGet.operation';
import { execute as listXdslSpareGetExecute } from './resources/main/listXdslSpareGet.operation';
import { execute as listXdslTasksGetExecute } from './resources/main/listXdslTasksGet.operation';
import { execute as listXdslTemplateModemGetExecute } from './resources/main/listXdslTemplateModemGet.operation';
import { execute as logKindGetExecute } from './resources/log/logKindGet.operation';
import { execute as logKindNameGetExecute } from './resources/log/logKindNameGet.operation';
import { execute as logSubscriptionDeleteExecute } from './resources/log/logSubscriptionDelete.operation';
import { execute as logSubscriptionDetailGetExecute } from './resources/log/logSubscriptionDetailGet.operation';
import { execute as logSubscriptionGetExecute } from './resources/log/logSubscriptionGet.operation';
import { execute as logSubscriptionPostExecute } from './resources/log/logSubscriptionPost.operation';
import { execute as logUrlPostExecute } from './resources/log/logUrlPost.operation';
import { execute as mailSendingPostExecute } from './resources/main/mailSendingPost.operation';
import { execute as modemGetExecute } from './resources/main/modemGet.operation';
import { execute as modemUpdatePutExecute } from './resources/main/modemUpdatePut.operation';
import { execute as postXdslApplyTemplateToModemPostExecute } from './resources/main/postXdslApplyTemplateToModemPost.operation';
import { execute as postXdslEmailProChangePasswordPostExecute } from './resources/main/postXdslEmailProChangePasswordPost.operation';
import { execute as postXdslIpv6PostExecute } from './resources/main/postXdslIpv6Post.operation';
import { execute as postXdslModemBlocIpPostExecute } from './resources/main/postXdslModemBlocIpPost.operation';
import { execute as postXdslModemCallWaitingPostExecute } from './resources/main/postXdslModemCallWaitingPost.operation';
import { execute as postXdslModemComfortExchangePostExecute } from './resources/main/postXdslModemComfortExchangePost.operation';
import { execute as postXdslModemContentSharingPostExecute } from './resources/main/postXdslModemContentSharingPost.operation';
import { execute as postXdslModemFirmwarePostExecute } from './resources/main/postXdslModemFirmwarePost.operation';
import { execute as postXdslModemFtpPostExecute } from './resources/main/postXdslModemFtpPost.operation';
import { execute as postXdslModemIpsecAlgPostExecute } from './resources/main/postXdslModemIpsecAlgPost.operation';
import { execute as postXdslModemLanDhcpStaticPostExecute } from './resources/main/postXdslModemLanDhcpStaticPost.operation';
import { execute as postXdslModemPortMappingsPostExecute } from './resources/main/postXdslModemPortMappingsPost.operation';
import { execute as postXdslModemRebootPostExecute } from './resources/main/postXdslModemRebootPost.operation';
import { execute as postXdslModemReconfigureVoipPostExecute } from './resources/main/postXdslModemReconfigureVoipPost.operation';
import { execute as postXdslModemRefreshConnectedDevicesPostExecute } from './resources/main/postXdslModemRefreshConnectedDevicesPost.operation';
import { execute as postXdslModemResetPortMappingConfigPostExecute } from './resources/main/postXdslModemResetPortMappingConfigPost.operation';
import { execute as postXdslModemResetPostExecute } from './resources/main/postXdslModemResetPost.operation';
import { execute as postXdslModemRetrieveInfoPostExecute } from './resources/main/postXdslModemRetrieveInfoPost.operation';
import { execute as postXdslModemSipAlgPostExecute } from './resources/main/postXdslModemSipAlgPost.operation';
import { execute as postXdslModemUpnpPostExecute } from './resources/main/postXdslModemUpnpPost.operation';
import { execute as postXdslMonitoringNotificationPostExecute } from './resources/main/postXdslMonitoringNotificationPost.operation';
import { execute as postXdslOrderMeetingPostExecute } from './resources/main/postXdslOrderMeetingPost.operation';
import { execute as postXdslRequestPppLoginMailPostExecute } from './resources/main/postXdslRequestPppLoginMailPost.operation';
import { execute as postXdslRequestTotalDeconsolidationPostExecute } from './resources/main/postXdslRequestTotalDeconsolidationPost.operation';
import { execute as postXdslResiliatePostExecute } from './resources/main/postXdslResiliatePost.operation';
import { execute as postXdslRmaChangeTypePostExecute } from './resources/main/postXdslRmaChangeTypePost.operation';
import { execute as postXdslSearchOrderMeetingsPostExecute } from './resources/main/postXdslSearchOrderMeetingsPost.operation';
import { execute as postXdslSendOrderToProviderPostExecute } from './resources/main/postXdslSendOrderToProviderPost.operation';
import { execute as postXdslSpareReplacePostExecute } from './resources/main/postXdslSpareReplacePost.operation';
import { execute as postXdslSpareReturnMerchandisePostExecute } from './resources/main/postXdslSpareReturnMerchandisePost.operation';
import { execute as postXdslTaskArchivePostExecute } from './resources/main/postXdslTaskArchivePost.operation';
import { execute as postXdslTemplateModemPostExecute } from './resources/main/postXdslTemplateModemPost.operation';
import { execute as postXdslUpdateInvalidOrMissingRioPostExecute } from './resources/main/postXdslUpdateInvalidOrMissingRioPost.operation';
import { execute as putXdslEmailProPutExecute } from './resources/main/putXdslEmailProPut.operation';
import { execute as putXdslModemLanDhcpPutExecute } from './resources/main/putXdslModemLanDhcpPut.operation';
import { execute as putXdslModemLanDhcpStaticPutExecute } from './resources/main/putXdslModemLanDhcpStaticPut.operation';
import { execute as putXdslModemLanPutExecute } from './resources/main/putXdslModemLanPut.operation';
import { execute as putXdslModemPortMappingPutExecute } from './resources/main/putXdslModemPortMappingPut.operation';
import { execute as putXdslModemWifiPutExecute } from './resources/main/putXdslModemWifiPut.operation';
import { execute as putXdslMonitoringNotificationPutExecute } from './resources/main/putXdslMonitoringNotificationPut.operation';
import { execute as putXdslRmaPutExecute } from './resources/main/putXdslRmaPut.operation';
import { execute as putXdslServiceInfosPutExecute } from './resources/main/putXdslServiceInfosPut.operation';
import { execute as putXdslSpareServiceInfosPutExecute } from './resources/main/putXdslSpareServiceInfosPut.operation';
import { execute as putXdslTemplateModemPutExecute } from './resources/main/putXdslTemplateModemPut.operation';
import { execute as updatePutExecute } from './resources/main/updatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'xdslOperation',
	'xdsl',
	[
	{
		name: 'antiSpamDetailGet',
		value: 'antiSpamDetailGet',
		action: 'Auto-generated operation for antiSpamDetailGet',
		execute: antiSpamDetailGetExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'antiSpamEvidencesGet',
		value: 'antiSpamEvidencesGet',
		action: 'Auto-generated operation for antiSpamEvidencesGet',
		execute: antiSpamEvidencesGetExecute,
		description: noProps,
	},
	{
		name: 'antiSpamsGet',
		value: 'antiSpamsGet',
		action: 'Auto-generated operation for antiSpamsGet',
		execute: antiSpamsGetExecute,
		description: noProps,
	},
	{
		name: 'canCancelResiliationGet',
		value: 'canCancelResiliationGet',
		action: 'Auto-generated operation for canCancelResiliationGet',
		execute: canCancelResiliationGetExecute,
		description: noProps,
	},
	{
		name: 'cancelResiliationPost',
		value: 'cancelResiliationPost',
		action: 'Auto-generated operation for cancelResiliationPost',
		execute: cancelResiliationPostExecute,
		description: noProps,
	},
	{
		name: 'changeContactPost',
		value: 'changeContactPost',
		action: 'Auto-generated operation for changeContactPost',
		execute: changeContactPostExecute,
		description: noProps,
	},
	{
		name: 'deleteXdslEmailProDelete',
		value: 'deleteXdslEmailProDelete',
		action: 'Auto-generated operation for deleteXdslEmailProDelete',
		execute: deleteXdslEmailProDeleteExecute,
		description: noProps,
	},
	{
		name: 'deleteXdslModemLanDhcpStaticDelete',
		value: 'deleteXdslModemLanDhcpStaticDelete',
		action: 'Auto-generated operation for deleteXdslModemLanDhcpStaticDelete',
		execute: deleteXdslModemLanDhcpStaticDeleteExecute,
		description: noProps,
	},
	{
		name: 'deleteXdslModemPortMappingDelete',
		value: 'deleteXdslModemPortMappingDelete',
		action: 'Auto-generated operation for deleteXdslModemPortMappingDelete',
		execute: deleteXdslModemPortMappingDeleteExecute,
		description: noProps,
	},
	{
		name: 'deleteXdslMonitoringNotificationDelete',
		value: 'deleteXdslMonitoringNotificationDelete',
		action: 'Auto-generated operation for deleteXdslMonitoringNotificationDelete',
		execute: deleteXdslMonitoringNotificationDeleteExecute,
		description: noProps,
	},
	{
		name: 'deleteXdslRmaDelete',
		value: 'deleteXdslRmaDelete',
		action: 'Auto-generated operation for deleteXdslRmaDelete',
		execute: deleteXdslRmaDeleteExecute,
		description: noProps,
	},
	{
		name: 'deleteXdslSpareDelete',
		value: 'deleteXdslSpareDelete',
		action: 'Auto-generated operation for deleteXdslSpareDelete',
		execute: deleteXdslSpareDeleteExecute,
		description: noProps,
	},
	{
		name: 'deleteXdslTemplateModemDelete',
		value: 'deleteXdslTemplateModemDelete',
		action: 'Auto-generated operation for deleteXdslTemplateModemDelete',
		execute: deleteXdslTemplateModemDeleteExecute,
		description: noProps,
	},
	{
		name: 'diagnosticGet',
		value: 'diagnosticGet',
		action: 'Auto-generated operation for diagnosticGet',
		execute: diagnosticGetExecute,
		description: noProps,
	},
	{
		name: 'diagnosticPost',
		value: 'diagnosticPost',
		action: 'Auto-generated operation for diagnosticPost',
		execute: diagnosticPostExecute,
		description: noProps,
	},
	{
		name: 'dslamPortAvailableProfilesGet',
		value: 'dslamPortAvailableProfilesGet',
		action: 'Auto-generated operation for dslamPortAvailableProfilesGet',
		execute: dslamPortAvailableProfilesGetExecute,
		description: noProps,
	},
	{
		name: 'dslamPortChangeProfilePost',
		value: 'dslamPortChangeProfilePost',
		action: 'Auto-generated operation for dslamPortChangeProfilePost',
		execute: dslamPortChangeProfilePostExecute,
		description: noProps,
	},
	{
		name: 'dslamPortGet',
		value: 'dslamPortGet',
		action: 'Auto-generated operation for dslamPortGet',
		execute: dslamPortGetExecute,
		description: noProps,
	},
	{
		name: 'dslamPortLogsGet',
		value: 'dslamPortLogsGet',
		action: 'Auto-generated operation for dslamPortLogsGet',
		execute: dslamPortLogsGetExecute,
		description: noProps,
	},
	{
		name: 'dslamPortResetPost',
		value: 'dslamPortResetPost',
		action: 'Auto-generated operation for dslamPortResetPost',
		execute: dslamPortResetPostExecute,
		description: noProps,
	},
	{
		name: 'extraIpRangeGet',
		value: 'extraIpRangeGet',
		action: 'Auto-generated operation for extraIpRangeGet',
		execute: extraIpRangeGetExecute,
		description: noProps,
	},
	{
		name: 'extraIpRangeMovePost',
		value: 'extraIpRangeMovePost',
		action: 'Auto-generated operation for extraIpRangeMovePost',
		execute: extraIpRangeMovePostExecute,
		description: noProps,
	},
	{
		name: 'fiberEligibilitiesGet',
		value: 'fiberEligibilitiesGet',
		action: 'Auto-generated operation for fiberEligibilitiesGet',
		execute: fiberEligibilitiesGetExecute,
		description: noProps,
	},
	{
		name: 'fiberEligibilityDetailGet',
		value: 'fiberEligibilityDetailGet',
		action: 'Auto-generated operation for fiberEligibilityDetailGet',
		execute: fiberEligibilityDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get',
		value: 'get',
		action: 'Auto-generated operation for get',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'getXdslEmailProGet',
		value: 'getXdslEmailProGet',
		action: 'Auto-generated operation for getXdslEmailProGet',
		execute: getXdslEmailProGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslIpGet',
		value: 'getXdslIpGet',
		action: 'Auto-generated operation for getXdslIpGet',
		execute: getXdslIpGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslLineGet',
		value: 'getXdslLineGet',
		action: 'Auto-generated operation for getXdslLineGet',
		execute: getXdslLineGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemBlocIpGet',
		value: 'getXdslModemBlocIpGet',
		action: 'Auto-generated operation for getXdslModemBlocIpGet',
		execute: getXdslModemBlocIpGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemCallWaitingGet',
		value: 'getXdslModemCallWaitingGet',
		action: 'Auto-generated operation for getXdslModemCallWaitingGet',
		execute: getXdslModemCallWaitingGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemComfortExchangeGet',
		value: 'getXdslModemComfortExchangeGet',
		action: 'Auto-generated operation for getXdslModemComfortExchangeGet',
		execute: getXdslModemComfortExchangeGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemConnectedDeviceGet',
		value: 'getXdslModemConnectedDeviceGet',
		action: 'Auto-generated operation for getXdslModemConnectedDeviceGet',
		execute: getXdslModemConnectedDeviceGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemContentSharingGet',
		value: 'getXdslModemContentSharingGet',
		action: 'Auto-generated operation for getXdslModemContentSharingGet',
		execute: getXdslModemContentSharingGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemFirmwareGet',
		value: 'getXdslModemFirmwareGet',
		action: 'Auto-generated operation for getXdslModemFirmwareGet',
		execute: getXdslModemFirmwareGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemFtpGet',
		value: 'getXdslModemFtpGet',
		action: 'Auto-generated operation for getXdslModemFtpGet',
		execute: getXdslModemFtpGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemIpsecAlgGet',
		value: 'getXdslModemIpsecAlgGet',
		action: 'Auto-generated operation for getXdslModemIpsecAlgGet',
		execute: getXdslModemIpsecAlgGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemLanDhcpDetailGet',
		value: 'getXdslModemLanDhcpDetailGet',
		action: 'Auto-generated operation for getXdslModemLanDhcpDetailGet',
		execute: getXdslModemLanDhcpDetailGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemLanDhcpGet',
		value: 'getXdslModemLanDhcpGet',
		action: 'Auto-generated operation for getXdslModemLanDhcpGet',
		execute: getXdslModemLanDhcpGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemLanDhcpStaticDetailGet',
		value: 'getXdslModemLanDhcpStaticDetailGet',
		action: 'Auto-generated operation for getXdslModemLanDhcpStaticDetailGet',
		execute: getXdslModemLanDhcpStaticDetailGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemLanGet',
		value: 'getXdslModemLanGet',
		action: 'Auto-generated operation for getXdslModemLanGet',
		execute: getXdslModemLanGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemPortMappingGet',
		value: 'getXdslModemPortMappingGet',
		action: 'Auto-generated operation for getXdslModemPortMappingGet',
		execute: getXdslModemPortMappingGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemSipAlgGet',
		value: 'getXdslModemSipAlgGet',
		action: 'Auto-generated operation for getXdslModemSipAlgGet',
		execute: getXdslModemSipAlgGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemUpnpGet',
		value: 'getXdslModemUpnpGet',
		action: 'Auto-generated operation for getXdslModemUpnpGet',
		execute: getXdslModemUpnpGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemWifiGet',
		value: 'getXdslModemWifiGet',
		action: 'Auto-generated operation for getXdslModemWifiGet',
		execute: getXdslModemWifiGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslModemWifiQrCodeGet',
		value: 'getXdslModemWifiQrCodeGet',
		action: 'Auto-generated operation for getXdslModemWifiQrCodeGet',
		execute: getXdslModemWifiQrCodeGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslMonitoringNotificationGet',
		value: 'getXdslMonitoringNotificationGet',
		action: 'Auto-generated operation for getXdslMonitoringNotificationGet',
		execute: getXdslMonitoringNotificationGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslOntGet',
		value: 'getXdslOntGet',
		action: 'Auto-generated operation for getXdslOntGet',
		execute: getXdslOntGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslOrderFollowupGet',
		value: 'getXdslOrderFollowupGet',
		action: 'Auto-generated operation for getXdslOrderFollowupGet',
		execute: getXdslOrderFollowupGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslResiliationFollowupGet',
		value: 'getXdslResiliationFollowupGet',
		action: 'Auto-generated operation for getXdslResiliationFollowupGet',
		execute: getXdslResiliationFollowupGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslResiliationTermsGet',
		value: 'getXdslResiliationTermsGet',
		action: 'Auto-generated operation for getXdslResiliationTermsGet',
		execute: getXdslResiliationTermsGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslRmaGet',
		value: 'getXdslRmaGet',
		action: 'Auto-generated operation for getXdslRmaGet',
		execute: getXdslRmaGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslServiceInfosGet',
		value: 'getXdslServiceInfosGet',
		action: 'Auto-generated operation for getXdslServiceInfosGet',
		execute: getXdslServiceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslSpareCompatibleReplacementGet',
		value: 'getXdslSpareCompatibleReplacementGet',
		action: 'Auto-generated operation for getXdslSpareCompatibleReplacementGet',
		execute: getXdslSpareCompatibleReplacementGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslSpareGet',
		value: 'getXdslSpareGet',
		action: 'Auto-generated operation for getXdslSpareGet',
		execute: getXdslSpareGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslSpareServiceInfosGet',
		value: 'getXdslSpareServiceInfosGet',
		action: 'Auto-generated operation for getXdslSpareServiceInfosGet',
		execute: getXdslSpareServiceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslStatisticsGet',
		value: 'getXdslStatisticsGet',
		action: 'Auto-generated operation for getXdslStatisticsGet',
		execute: getXdslStatisticsGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslTaskGet',
		value: 'getXdslTaskGet',
		action: 'Auto-generated operation for getXdslTaskGet',
		execute: getXdslTaskGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslTemplateModemGet',
		value: 'getXdslTemplateModemGet',
		action: 'Auto-generated operation for getXdslTemplateModemGet',
		execute: getXdslTemplateModemGetExecute,
		description: noProps,
	},
	{
		name: 'getXdslTotalDeconsolidationTermsGet',
		value: 'getXdslTotalDeconsolidationTermsGet',
		action: 'Auto-generated operation for getXdslTotalDeconsolidationTermsGet',
		execute: getXdslTotalDeconsolidationTermsGetExecute,
		description: noProps,
	},
	{
		name: 'incidentDetailGet',
		value: 'incidentDetailGet',
		action: 'Auto-generated operation for incidentDetailGet',
		execute: incidentDetailGetExecute,
		description: noProps,
	},
	{
		name: 'incidentGet',
		value: 'incidentGet',
		action: 'Auto-generated operation for incidentGet',
		execute: incidentGetExecute,
		description: noProps,
	},
	{
		name: 'incidentsGet',
		value: 'incidentsGet',
		action: 'Auto-generated operation for incidentsGet',
		execute: incidentsGetExecute,
		description: noProps,
	},
	{
		name: 'ipDelete',
		value: 'ipDelete',
		action: 'Auto-generated operation for ipDelete',
		execute: ipDeleteExecute,
		description: noProps,
	},
	{
		name: 'ipsGet',
		value: 'ipsGet',
		action: 'Auto-generated operation for ipsGet',
		execute: ipsGetExecute,
		description: noProps,
	},
	{
		name: 'ipsPost',
		value: 'ipsPost',
		action: 'Auto-generated operation for ipsPost',
		execute: ipsPostExecute,
		description: noProps,
	},
	{
		name: 'lineDiagnosticCancelPost',
		value: 'lineDiagnosticCancelPost',
		action: 'Auto-generated operation for lineDiagnosticCancelPost',
		execute: lineDiagnosticCancelPostExecute,
		description: noProps,
	},
	{
		name: 'lineDiagnosticRunPost',
		value: 'lineDiagnosticRunPost',
		action: 'Auto-generated operation for lineDiagnosticRunPost',
		execute: lineDiagnosticRunPostExecute,
		description: noProps,
	},
	{
		name: 'linesStatisticsGet',
		value: 'linesStatisticsGet',
		action: 'Auto-generated operation for linesStatisticsGet',
		execute: linesStatisticsGetExecute,
		description: noProps,
	},
	{
		name: 'List',
		value: 'list',
		action: 'Auto-generated operation for list',
		execute: listExecute,
		description: noProps,
	},
	{
		name: 'listXdslEmailProGet',
		value: 'listXdslEmailProGet',
		action: 'Auto-generated operation for listXdslEmailProGet',
		execute: listXdslEmailProGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslLinesGet',
		value: 'listXdslLinesGet',
		action: 'Auto-generated operation for listXdslLinesGet',
		execute: listXdslLinesGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslModemAvailableAcsBackendGet',
		value: 'listXdslModemAvailableAcsBackendGet',
		action: 'Auto-generated operation for listXdslModemAvailableAcsBackendGet',
		execute: listXdslModemAvailableAcsBackendGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslModemAvailableWlanChannelGet',
		value: 'listXdslModemAvailableWlanChannelGet',
		action: 'Auto-generated operation for listXdslModemAvailableWlanChannelGet',
		execute: listXdslModemAvailableWlanChannelGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslModemConnectedDevicesGet',
		value: 'listXdslModemConnectedDevicesGet',
		action: 'Auto-generated operation for listXdslModemConnectedDevicesGet',
		execute: listXdslModemConnectedDevicesGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslModemFirmwareAvailableGet',
		value: 'listXdslModemFirmwareAvailableGet',
		action: 'Auto-generated operation for listXdslModemFirmwareAvailableGet',
		execute: listXdslModemFirmwareAvailableGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslModemLanDhcpStaticGet',
		value: 'listXdslModemLanDhcpStaticGet',
		action: 'Auto-generated operation for listXdslModemLanDhcpStaticGet',
		execute: listXdslModemLanDhcpStaticGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslModemLanGet',
		value: 'listXdslModemLanGet',
		action: 'Auto-generated operation for listXdslModemLanGet',
		execute: listXdslModemLanGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslModemPortMappingsGet',
		value: 'listXdslModemPortMappingsGet',
		action: 'Auto-generated operation for listXdslModemPortMappingsGet',
		execute: listXdslModemPortMappingsGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslModemWifiGet',
		value: 'listXdslModemWifiGet',
		action: 'Auto-generated operation for listXdslModemWifiGet',
		execute: listXdslModemWifiGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslMonitoringNotificationsGet',
		value: 'listXdslMonitoringNotificationsGet',
		action: 'Auto-generated operation for listXdslMonitoringNotificationsGet',
		execute: listXdslMonitoringNotificationsGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslPendingActionsGet',
		value: 'listXdslPendingActionsGet',
		action: 'Auto-generated operation for listXdslPendingActionsGet',
		execute: listXdslPendingActionsGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslRadiusConnectionLogsGet',
		value: 'listXdslRadiusConnectionLogsGet',
		action: 'Auto-generated operation for listXdslRadiusConnectionLogsGet',
		execute: listXdslRadiusConnectionLogsGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslRmaGet',
		value: 'listXdslRmaGet',
		action: 'Auto-generated operation for listXdslRmaGet',
		execute: listXdslRmaGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslSpareBrandsGet',
		value: 'listXdslSpareBrandsGet',
		action: 'Auto-generated operation for listXdslSpareBrandsGet',
		execute: listXdslSpareBrandsGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslSpareGet',
		value: 'listXdslSpareGet',
		action: 'Auto-generated operation for listXdslSpareGet',
		execute: listXdslSpareGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslTasksGet',
		value: 'listXdslTasksGet',
		action: 'Auto-generated operation for listXdslTasksGet',
		execute: listXdslTasksGetExecute,
		description: noProps,
	},
	{
		name: 'listXdslTemplateModemGet',
		value: 'listXdslTemplateModemGet',
		action: 'Auto-generated operation for listXdslTemplateModemGet',
		execute: listXdslTemplateModemGetExecute,
		description: noProps,
	},
	{
		name: 'logKindGet',
		value: 'logKindGet',
		action: 'Auto-generated operation for logKindGet',
		execute: logKindGetExecute,
		description: noProps,
	},
	{
		name: 'logKindNameGet',
		value: 'logKindNameGet',
		action: 'Auto-generated operation for logKindNameGet',
		execute: logKindNameGetExecute,
		description: noProps,
	},
	{
		name: 'logSubscriptionDelete',
		value: 'logSubscriptionDelete',
		action: 'Auto-generated operation for logSubscriptionDelete',
		execute: logSubscriptionDeleteExecute,
		description: noProps,
	},
	{
		name: 'logSubscriptionDetailGet',
		value: 'logSubscriptionDetailGet',
		action: 'Auto-generated operation for logSubscriptionDetailGet',
		execute: logSubscriptionDetailGetExecute,
		description: noProps,
	},
	{
		name: 'logSubscriptionGet',
		value: 'logSubscriptionGet',
		action: 'Auto-generated operation for logSubscriptionGet',
		execute: logSubscriptionGetExecute,
		description: noProps,
	},
	{
		name: 'logSubscriptionPost',
		value: 'logSubscriptionPost',
		action: 'Auto-generated operation for logSubscriptionPost',
		execute: logSubscriptionPostExecute,
		description: noProps,
	},
	{
		name: 'logUrlPost',
		value: 'logUrlPost',
		action: 'Auto-generated operation for logUrlPost',
		execute: logUrlPostExecute,
		description: noProps,
	},
	{
		name: 'mailSendingPost',
		value: 'mailSendingPost',
		action: 'Auto-generated operation for mailSendingPost',
		execute: mailSendingPostExecute,
		description: noProps,
	},
	{
		name: 'modemGet',
		value: 'modemGet',
		action: 'Auto-generated operation for modemGet',
		execute: modemGetExecute,
		description: noProps,
	},
	{
		name: 'modemUpdatePut',
		value: 'modemUpdatePut',
		action: 'Auto-generated operation for modemUpdatePut',
		execute: modemUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'postXdslApplyTemplateToModemPost',
		value: 'postXdslApplyTemplateToModemPost',
		action: 'Auto-generated operation for postXdslApplyTemplateToModemPost',
		execute: postXdslApplyTemplateToModemPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslEmailProChangePasswordPost',
		value: 'postXdslEmailProChangePasswordPost',
		action: 'Auto-generated operation for postXdslEmailProChangePasswordPost',
		execute: postXdslEmailProChangePasswordPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslIpv6Post',
		value: 'postXdslIpv6Post',
		action: 'Auto-generated operation for postXdslIpv6Post',
		execute: postXdslIpv6PostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemBlocIpPost',
		value: 'postXdslModemBlocIpPost',
		action: 'Auto-generated operation for postXdslModemBlocIpPost',
		execute: postXdslModemBlocIpPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemCallWaitingPost',
		value: 'postXdslModemCallWaitingPost',
		action: 'Auto-generated operation for postXdslModemCallWaitingPost',
		execute: postXdslModemCallWaitingPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemComfortExchangePost',
		value: 'postXdslModemComfortExchangePost',
		action: 'Auto-generated operation for postXdslModemComfortExchangePost',
		execute: postXdslModemComfortExchangePostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemContentSharingPost',
		value: 'postXdslModemContentSharingPost',
		action: 'Auto-generated operation for postXdslModemContentSharingPost',
		execute: postXdslModemContentSharingPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemFirmwarePost',
		value: 'postXdslModemFirmwarePost',
		action: 'Auto-generated operation for postXdslModemFirmwarePost',
		execute: postXdslModemFirmwarePostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemFtpPost',
		value: 'postXdslModemFtpPost',
		action: 'Auto-generated operation for postXdslModemFtpPost',
		execute: postXdslModemFtpPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemIpsecAlgPost',
		value: 'postXdslModemIpsecAlgPost',
		action: 'Auto-generated operation for postXdslModemIpsecAlgPost',
		execute: postXdslModemIpsecAlgPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemLanDhcpStaticPost',
		value: 'postXdslModemLanDhcpStaticPost',
		action: 'Auto-generated operation for postXdslModemLanDhcpStaticPost',
		execute: postXdslModemLanDhcpStaticPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemPortMappingsPost',
		value: 'postXdslModemPortMappingsPost',
		action: 'Auto-generated operation for postXdslModemPortMappingsPost',
		execute: postXdslModemPortMappingsPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemRebootPost',
		value: 'postXdslModemRebootPost',
		action: 'Auto-generated operation for postXdslModemRebootPost',
		execute: postXdslModemRebootPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemReconfigureVoipPost',
		value: 'postXdslModemReconfigureVoipPost',
		action: 'Auto-generated operation for postXdslModemReconfigureVoipPost',
		execute: postXdslModemReconfigureVoipPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemRefreshConnectedDevicesPost',
		value: 'postXdslModemRefreshConnectedDevicesPost',
		action: 'Auto-generated operation for postXdslModemRefreshConnectedDevicesPost',
		execute: postXdslModemRefreshConnectedDevicesPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemResetPortMappingConfigPost',
		value: 'postXdslModemResetPortMappingConfigPost',
		action: 'Auto-generated operation for postXdslModemResetPortMappingConfigPost',
		execute: postXdslModemResetPortMappingConfigPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemResetPost',
		value: 'postXdslModemResetPost',
		action: 'Auto-generated operation for postXdslModemResetPost',
		execute: postXdslModemResetPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemRetrieveInfoPost',
		value: 'postXdslModemRetrieveInfoPost',
		action: 'Auto-generated operation for postXdslModemRetrieveInfoPost',
		execute: postXdslModemRetrieveInfoPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemSipAlgPost',
		value: 'postXdslModemSipAlgPost',
		action: 'Auto-generated operation for postXdslModemSipAlgPost',
		execute: postXdslModemSipAlgPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslModemUpnpPost',
		value: 'postXdslModemUpnpPost',
		action: 'Auto-generated operation for postXdslModemUpnpPost',
		execute: postXdslModemUpnpPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslMonitoringNotificationPost',
		value: 'postXdslMonitoringNotificationPost',
		action: 'Auto-generated operation for postXdslMonitoringNotificationPost',
		execute: postXdslMonitoringNotificationPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslOrderMeetingPost',
		value: 'postXdslOrderMeetingPost',
		action: 'Auto-generated operation for postXdslOrderMeetingPost',
		execute: postXdslOrderMeetingPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslRequestPppLoginMailPost',
		value: 'postXdslRequestPppLoginMailPost',
		action: 'Auto-generated operation for postXdslRequestPppLoginMailPost',
		execute: postXdslRequestPppLoginMailPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslRequestTotalDeconsolidationPost',
		value: 'postXdslRequestTotalDeconsolidationPost',
		action: 'Auto-generated operation for postXdslRequestTotalDeconsolidationPost',
		execute: postXdslRequestTotalDeconsolidationPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslResiliatePost',
		value: 'postXdslResiliatePost',
		action: 'Auto-generated operation for postXdslResiliatePost',
		execute: postXdslResiliatePostExecute,
		description: noProps,
	},
	{
		name: 'postXdslRmaChangeTypePost',
		value: 'postXdslRmaChangeTypePost',
		action: 'Auto-generated operation for postXdslRmaChangeTypePost',
		execute: postXdslRmaChangeTypePostExecute,
		description: noProps,
	},
	{
		name: 'postXdslSearchOrderMeetingsPost',
		value: 'postXdslSearchOrderMeetingsPost',
		action: 'Auto-generated operation for postXdslSearchOrderMeetingsPost',
		execute: postXdslSearchOrderMeetingsPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslSendOrderToProviderPost',
		value: 'postXdslSendOrderToProviderPost',
		action: 'Auto-generated operation for postXdslSendOrderToProviderPost',
		execute: postXdslSendOrderToProviderPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslSpareReplacePost',
		value: 'postXdslSpareReplacePost',
		action: 'Auto-generated operation for postXdslSpareReplacePost',
		execute: postXdslSpareReplacePostExecute,
		description: noProps,
	},
	{
		name: 'postXdslSpareReturnMerchandisePost',
		value: 'postXdslSpareReturnMerchandisePost',
		action: 'Auto-generated operation for postXdslSpareReturnMerchandisePost',
		execute: postXdslSpareReturnMerchandisePostExecute,
		description: noProps,
	},
	{
		name: 'postXdslTaskArchivePost',
		value: 'postXdslTaskArchivePost',
		action: 'Auto-generated operation for postXdslTaskArchivePost',
		execute: postXdslTaskArchivePostExecute,
		description: noProps,
	},
	{
		name: 'postXdslTemplateModemPost',
		value: 'postXdslTemplateModemPost',
		action: 'Auto-generated operation for postXdslTemplateModemPost',
		execute: postXdslTemplateModemPostExecute,
		description: noProps,
	},
	{
		name: 'postXdslUpdateInvalidOrMissingRioPost',
		value: 'postXdslUpdateInvalidOrMissingRioPost',
		action: 'Auto-generated operation for postXdslUpdateInvalidOrMissingRioPost',
		execute: postXdslUpdateInvalidOrMissingRioPostExecute,
		description: noProps,
	},
	{
		name: 'putXdslEmailProPut',
		value: 'putXdslEmailProPut',
		action: 'Auto-generated operation for putXdslEmailProPut',
		execute: putXdslEmailProPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslModemLanDhcpPut',
		value: 'putXdslModemLanDhcpPut',
		action: 'Auto-generated operation for putXdslModemLanDhcpPut',
		execute: putXdslModemLanDhcpPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslModemLanDhcpStaticPut',
		value: 'putXdslModemLanDhcpStaticPut',
		action: 'Auto-generated operation for putXdslModemLanDhcpStaticPut',
		execute: putXdslModemLanDhcpStaticPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslModemLanPut',
		value: 'putXdslModemLanPut',
		action: 'Auto-generated operation for putXdslModemLanPut',
		execute: putXdslModemLanPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslModemPortMappingPut',
		value: 'putXdslModemPortMappingPut',
		action: 'Auto-generated operation for putXdslModemPortMappingPut',
		execute: putXdslModemPortMappingPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslModemWifiPut',
		value: 'putXdslModemWifiPut',
		action: 'Auto-generated operation for putXdslModemWifiPut',
		execute: putXdslModemWifiPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslMonitoringNotificationPut',
		value: 'putXdslMonitoringNotificationPut',
		action: 'Auto-generated operation for putXdslMonitoringNotificationPut',
		execute: putXdslMonitoringNotificationPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslRmaPut',
		value: 'putXdslRmaPut',
		action: 'Auto-generated operation for putXdslRmaPut',
		execute: putXdslRmaPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslServiceInfosPut',
		value: 'putXdslServiceInfosPut',
		action: 'Auto-generated operation for putXdslServiceInfosPut',
		execute: putXdslServiceInfosPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslSpareServiceInfosPut',
		value: 'putXdslSpareServiceInfosPut',
		action: 'Auto-generated operation for putXdslSpareServiceInfosPut',
		execute: putXdslSpareServiceInfosPutExecute,
		description: noProps,
	},
	{
		name: 'putXdslTemplateModemPut',
		value: 'putXdslTemplateModemPut',
		action: 'Auto-generated operation for putXdslTemplateModemPut',
		execute: putXdslTemplateModemPutExecute,
		description: noProps,
	},
	{
		name: 'updatePut',
		value: 'updatePut',
		action: 'Auto-generated operation for updatePut',
		execute: updatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };

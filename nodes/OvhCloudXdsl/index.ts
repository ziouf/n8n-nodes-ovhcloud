import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import * as antiSpamDetailGet from './resources/main/antiSpamDetailGet.operation';
import * as antiSpamEvidencesGet from './resources/main/antiSpamEvidencesGet.operation';
import * as antiSpamsGet from './resources/main/antiSpamsGet.operation';
import * as canCancelResiliationGet from './resources/main/canCancelResiliationGet.operation';
import * as cancelResiliationPost from './resources/main/cancelResiliationPost.operation';
import * as changeContactPost from './resources/main/changeContactPost.operation';
import * as deleteXdslEmailProDelete from './resources/main/deleteXdslEmailProDelete.operation';
import * as deleteXdslModemLanDhcpStaticDelete from './resources/main/deleteXdslModemLanDhcpStaticDelete.operation';
import * as deleteXdslModemPortMappingDelete from './resources/main/deleteXdslModemPortMappingDelete.operation';
import * as deleteXdslMonitoringNotificationDelete from './resources/main/deleteXdslMonitoringNotificationDelete.operation';
import * as deleteXdslRmaDelete from './resources/main/deleteXdslRmaDelete.operation';
import * as deleteXdslSpareDelete from './resources/main/deleteXdslSpareDelete.operation';
import * as deleteXdslTemplateModemDelete from './resources/main/deleteXdslTemplateModemDelete.operation';
import * as diagnosticGet from './resources/main/diagnosticGet.operation';
import * as diagnosticPost from './resources/main/diagnosticPost.operation';
import * as dslamPortAvailableProfilesGet from './resources/lines/dslamPortAvailableProfilesGet.operation';
import * as dslamPortChangeProfilePost from './resources/lines/dslamPortChangeProfilePost.operation';
import * as dslamPortGet from './resources/lines/dslamPortGet.operation';
import * as dslamPortLogsGet from './resources/lines/dslamPortLogsGet.operation';
import * as dslamPortResetPost from './resources/lines/dslamPortResetPost.operation';
import * as extraIpRangeGet from './resources/main/extraIpRangeGet.operation';
import * as extraIpRangeMovePost from './resources/main/extraIpRangeMovePost.operation';
import * as fiberEligibilitiesGet from './resources/main/fiberEligibilitiesGet.operation';
import * as fiberEligibilityDetailGet from './resources/main/fiberEligibilityDetailGet.operation';
import * as get from './resources/main/get.operation';
import * as getXdslEmailProGet from './resources/main/getXdslEmailProGet.operation';
import * as getXdslIpGet from './resources/main/getXdslIpGet.operation';
import * as getXdslLineGet from './resources/main/getXdslLineGet.operation';
import * as getXdslModemBlocIpGet from './resources/main/getXdslModemBlocIpGet.operation';
import * as getXdslModemCallWaitingGet from './resources/main/getXdslModemCallWaitingGet.operation';
import * as getXdslModemComfortExchangeGet from './resources/main/getXdslModemComfortExchangeGet.operation';
import * as getXdslModemConnectedDeviceGet from './resources/main/getXdslModemConnectedDeviceGet.operation';
import * as getXdslModemContentSharingGet from './resources/main/getXdslModemContentSharingGet.operation';
import * as getXdslModemFirmwareGet from './resources/main/getXdslModemFirmwareGet.operation';
import * as getXdslModemFtpGet from './resources/main/getXdslModemFtpGet.operation';
import * as getXdslModemIpsecAlgGet from './resources/main/getXdslModemIpsecAlgGet.operation';
import * as getXdslModemLanDhcpDetailGet from './resources/main/getXdslModemLanDhcpDetailGet.operation';
import * as getXdslModemLanDhcpGet from './resources/main/getXdslModemLanDhcpGet.operation';
import * as getXdslModemLanDhcpStaticDetailGet from './resources/main/getXdslModemLanDhcpStaticDetailGet.operation';
import * as getXdslModemLanGet from './resources/main/getXdslModemLanGet.operation';
import * as getXdslModemPortMappingGet from './resources/main/getXdslModemPortMappingGet.operation';
import * as getXdslModemSipAlgGet from './resources/main/getXdslModemSipAlgGet.operation';
import * as getXdslModemUpnpGet from './resources/main/getXdslModemUpnpGet.operation';
import * as getXdslModemWifiGet from './resources/main/getXdslModemWifiGet.operation';
import * as getXdslModemWifiQrCodeGet from './resources/main/getXdslModemWifiQrCodeGet.operation';
import * as getXdslMonitoringNotificationGet from './resources/main/getXdslMonitoringNotificationGet.operation';
import * as getXdslOntGet from './resources/main/getXdslOntGet.operation';
import * as getXdslOrderFollowupGet from './resources/main/getXdslOrderFollowupGet.operation';
import * as getXdslResiliationFollowupGet from './resources/main/getXdslResiliationFollowupGet.operation';
import * as getXdslResiliationTermsGet from './resources/main/getXdslResiliationTermsGet.operation';
import * as getXdslRmaGet from './resources/main/getXdslRmaGet.operation';
import * as getXdslServiceInfosGet from './resources/main/getXdslServiceInfosGet.operation';
import * as getXdslSpareCompatibleReplacementGet from './resources/main/getXdslSpareCompatibleReplacementGet.operation';
import * as getXdslSpareGet from './resources/main/getXdslSpareGet.operation';
import * as getXdslSpareServiceInfosGet from './resources/main/getXdslSpareServiceInfosGet.operation';
import * as getXdslStatisticsGet from './resources/main/getXdslStatisticsGet.operation';
import * as getXdslTaskGet from './resources/main/getXdslTaskGet.operation';
import * as getXdslTemplateModemGet from './resources/main/getXdslTemplateModemGet.operation';
import * as getXdslTotalDeconsolidationTermsGet from './resources/main/getXdslTotalDeconsolidationTermsGet.operation';
import * as incidentDetailGet from './resources/main/incidentDetailGet.operation';
import * as incidentGet from './resources/main/incidentGet.operation';
import * as incidentsGet from './resources/main/incidentsGet.operation';
import * as ipDelete from './resources/main/ipDelete.operation';
import * as ipsGet from './resources/main/ipsGet.operation';
import * as ipsPost from './resources/main/ipsPost.operation';
import * as lineDiagnosticCancelPost from './resources/lines/lineDiagnosticCancelPost.operation';
import * as lineDiagnosticRunPost from './resources/lines/lineDiagnosticRunPost.operation';
import * as linesStatisticsGet from './resources/lines/linesStatisticsGet.operation';
import * as list from './resources/main/list.operation';
import * as listXdslEmailProGet from './resources/main/listXdslEmailProGet.operation';
import * as listXdslLinesGet from './resources/main/listXdslLinesGet.operation';
import * as listXdslModemAvailableAcsBackendGet from './resources/main/listXdslModemAvailableAcsBackendGet.operation';
import * as listXdslModemAvailableWlanChannelGet from './resources/main/listXdslModemAvailableWlanChannelGet.operation';
import * as listXdslModemConnectedDevicesGet from './resources/main/listXdslModemConnectedDevicesGet.operation';
import * as listXdslModemFirmwareAvailableGet from './resources/main/listXdslModemFirmwareAvailableGet.operation';
import * as listXdslModemLanDhcpStaticGet from './resources/main/listXdslModemLanDhcpStaticGet.operation';
import * as listXdslModemLanGet from './resources/main/listXdslModemLanGet.operation';
import * as listXdslModemPortMappingsGet from './resources/main/listXdslModemPortMappingsGet.operation';
import * as listXdslModemWifiGet from './resources/main/listXdslModemWifiGet.operation';
import * as listXdslMonitoringNotificationsGet from './resources/main/listXdslMonitoringNotificationsGet.operation';
import * as listXdslPendingActionsGet from './resources/main/listXdslPendingActionsGet.operation';
import * as listXdslRadiusConnectionLogsGet from './resources/main/listXdslRadiusConnectionLogsGet.operation';
import * as listXdslRmaGet from './resources/main/listXdslRmaGet.operation';
import * as listXdslSpareBrandsGet from './resources/main/listXdslSpareBrandsGet.operation';
import * as listXdslSpareGet from './resources/main/listXdslSpareGet.operation';
import * as listXdslTasksGet from './resources/main/listXdslTasksGet.operation';
import * as listXdslTemplateModemGet from './resources/main/listXdslTemplateModemGet.operation';
import * as logKindGet from './resources/log/logKindGet.operation';
import * as logKindNameGet from './resources/log/logKindNameGet.operation';
import * as logSubscriptionDelete from './resources/log/logSubscriptionDelete.operation';
import * as logSubscriptionDetailGet from './resources/log/logSubscriptionDetailGet.operation';
import * as logSubscriptionGet from './resources/log/logSubscriptionGet.operation';
import * as logSubscriptionPost from './resources/log/logSubscriptionPost.operation';
import * as logUrlPost from './resources/log/logUrlPost.operation';
import * as mailSendingPost from './resources/main/mailSendingPost.operation';
import * as modemGet from './resources/main/modemGet.operation';
import * as modemUpdatePut from './resources/main/modemUpdatePut.operation';
import * as postXdslApplyTemplateToModemPost from './resources/main/postXdslApplyTemplateToModemPost.operation';
import * as postXdslEmailProChangePasswordPost from './resources/main/postXdslEmailProChangePasswordPost.operation';
import * as postXdslIpv6Post from './resources/main/postXdslIpv6Post.operation';
import * as postXdslModemBlocIpPost from './resources/main/postXdslModemBlocIpPost.operation';
import * as postXdslModemCallWaitingPost from './resources/main/postXdslModemCallWaitingPost.operation';
import * as postXdslModemComfortExchangePost from './resources/main/postXdslModemComfortExchangePost.operation';
import * as postXdslModemContentSharingPost from './resources/main/postXdslModemContentSharingPost.operation';
import * as postXdslModemFirmwarePost from './resources/main/postXdslModemFirmwarePost.operation';
import * as postXdslModemFtpPost from './resources/main/postXdslModemFtpPost.operation';
import * as postXdslModemIpsecAlgPost from './resources/main/postXdslModemIpsecAlgPost.operation';
import * as postXdslModemLanDhcpStaticPost from './resources/main/postXdslModemLanDhcpStaticPost.operation';
import * as postXdslModemPortMappingsPost from './resources/main/postXdslModemPortMappingsPost.operation';
import * as postXdslModemRebootPost from './resources/main/postXdslModemRebootPost.operation';
import * as postXdslModemReconfigureVoipPost from './resources/main/postXdslModemReconfigureVoipPost.operation';
import * as postXdslModemRefreshConnectedDevicesPost from './resources/main/postXdslModemRefreshConnectedDevicesPost.operation';
import * as postXdslModemResetPortMappingConfigPost from './resources/main/postXdslModemResetPortMappingConfigPost.operation';
import * as postXdslModemResetPost from './resources/main/postXdslModemResetPost.operation';
import * as postXdslModemRetrieveInfoPost from './resources/main/postXdslModemRetrieveInfoPost.operation';
import * as postXdslModemSipAlgPost from './resources/main/postXdslModemSipAlgPost.operation';
import * as postXdslModemUpnpPost from './resources/main/postXdslModemUpnpPost.operation';
import * as postXdslMonitoringNotificationPost from './resources/main/postXdslMonitoringNotificationPost.operation';
import * as postXdslOrderMeetingPost from './resources/main/postXdslOrderMeetingPost.operation';
import * as postXdslRequestPppLoginMailPost from './resources/main/postXdslRequestPppLoginMailPost.operation';
import * as postXdslRequestTotalDeconsolidationPost from './resources/main/postXdslRequestTotalDeconsolidationPost.operation';
import * as postXdslResiliatePost from './resources/main/postXdslResiliatePost.operation';
import * as postXdslRmaChangeTypePost from './resources/main/postXdslRmaChangeTypePost.operation';
import * as postXdslSearchOrderMeetingsPost from './resources/main/postXdslSearchOrderMeetingsPost.operation';
import * as postXdslSendOrderToProviderPost from './resources/main/postXdslSendOrderToProviderPost.operation';
import * as postXdslSpareReplacePost from './resources/main/postXdslSpareReplacePost.operation';
import * as postXdslSpareReturnMerchandisePost from './resources/main/postXdslSpareReturnMerchandisePost.operation';
import * as postXdslTaskArchivePost from './resources/main/postXdslTaskArchivePost.operation';
import * as postXdslTemplateModemPost from './resources/main/postXdslTemplateModemPost.operation';
import * as postXdslUpdateInvalidOrMissingRioPost from './resources/main/postXdslUpdateInvalidOrMissingRioPost.operation';
import * as putXdslEmailProPut from './resources/main/putXdslEmailProPut.operation';
import * as putXdslModemLanDhcpPut from './resources/main/putXdslModemLanDhcpPut.operation';
import * as putXdslModemLanDhcpStaticPut from './resources/main/putXdslModemLanDhcpStaticPut.operation';
import * as putXdslModemLanPut from './resources/main/putXdslModemLanPut.operation';
import * as putXdslModemPortMappingPut from './resources/main/putXdslModemPortMappingPut.operation';
import * as putXdslModemWifiPut from './resources/main/putXdslModemWifiPut.operation';
import * as putXdslMonitoringNotificationPut from './resources/main/putXdslMonitoringNotificationPut.operation';
import * as putXdslRmaPut from './resources/main/putXdslRmaPut.operation';
import * as putXdslServiceInfosPut from './resources/main/putXdslServiceInfosPut.operation';
import * as putXdslSpareServiceInfosPut from './resources/main/putXdslSpareServiceInfosPut.operation';
import * as putXdslTemplateModemPut from './resources/main/putXdslTemplateModemPut.operation';
import * as updatePut from './resources/main/updatePut.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'xdslOperation',
		type: 'options',
		noDataExpression: true,
		default: 'antiSpamDetailGet',
		options: [
			{
				name: 'antiSpamDetailGet',
				value: 'antiSpamDetailGet',
				action: 'Auto-generated operation for antiSpamDetailGet',
			},
			{
				name: 'antiSpamEvidencesGet',
				value: 'antiSpamEvidencesGet',
				action: 'Auto-generated operation for antiSpamEvidencesGet',
			},
			{
				name: 'antiSpamsGet',
				value: 'antiSpamsGet',
				action: 'Auto-generated operation for antiSpamsGet',
			},
			{
				name: 'canCancelResiliationGet',
				value: 'canCancelResiliationGet',
				action: 'Auto-generated operation for canCancelResiliationGet',
			},
			{
				name: 'cancelResiliationPost',
				value: 'cancelResiliationPost',
				action: 'Auto-generated operation for cancelResiliationPost',
			},
			{
				name: 'changeContactPost',
				value: 'changeContactPost',
				action: 'Auto-generated operation for changeContactPost',
			},
			{
				name: 'deleteXdslEmailProDelete',
				value: 'deleteXdslEmailProDelete',
				action: 'Auto-generated operation for deleteXdslEmailProDelete',
			},
			{
				name: 'deleteXdslModemLanDhcpStaticDelete',
				value: 'deleteXdslModemLanDhcpStaticDelete',
				action: 'Auto-generated operation for deleteXdslModemLanDhcpStaticDelete',
			},
			{
				name: 'deleteXdslModemPortMappingDelete',
				value: 'deleteXdslModemPortMappingDelete',
				action: 'Auto-generated operation for deleteXdslModemPortMappingDelete',
			},
			{
				name: 'deleteXdslMonitoringNotificationDelete',
				value: 'deleteXdslMonitoringNotificationDelete',
				action: 'Auto-generated operation for deleteXdslMonitoringNotificationDelete',
			},
			{
				name: 'deleteXdslRmaDelete',
				value: 'deleteXdslRmaDelete',
				action: 'Auto-generated operation for deleteXdslRmaDelete',
			},
			{
				name: 'deleteXdslSpareDelete',
				value: 'deleteXdslSpareDelete',
				action: 'Auto-generated operation for deleteXdslSpareDelete',
			},
			{
				name: 'deleteXdslTemplateModemDelete',
				value: 'deleteXdslTemplateModemDelete',
				action: 'Auto-generated operation for deleteXdslTemplateModemDelete',
			},
			{
				name: 'diagnosticGet',
				value: 'diagnosticGet',
				action: 'Auto-generated operation for diagnosticGet',
			},
			{
				name: 'diagnosticPost',
				value: 'diagnosticPost',
				action: 'Auto-generated operation for diagnosticPost',
			},
			{
				name: 'dslamPortAvailableProfilesGet',
				value: 'dslamPortAvailableProfilesGet',
				action: 'Auto-generated operation for dslamPortAvailableProfilesGet',
			},
			{
				name: 'dslamPortChangeProfilePost',
				value: 'dslamPortChangeProfilePost',
				action: 'Auto-generated operation for dslamPortChangeProfilePost',
			},
			{
				name: 'dslamPortGet',
				value: 'dslamPortGet',
				action: 'Auto-generated operation for dslamPortGet',
			},
			{
				name: 'dslamPortLogsGet',
				value: 'dslamPortLogsGet',
				action: 'Auto-generated operation for dslamPortLogsGet',
			},
			{
				name: 'dslamPortResetPost',
				value: 'dslamPortResetPost',
				action: 'Auto-generated operation for dslamPortResetPost',
			},
			{
				name: 'extraIpRangeGet',
				value: 'extraIpRangeGet',
				action: 'Auto-generated operation for extraIpRangeGet',
			},
			{
				name: 'extraIpRangeMovePost',
				value: 'extraIpRangeMovePost',
				action: 'Auto-generated operation for extraIpRangeMovePost',
			},
			{
				name: 'fiberEligibilitiesGet',
				value: 'fiberEligibilitiesGet',
				action: 'Auto-generated operation for fiberEligibilitiesGet',
			},
			{
				name: 'fiberEligibilityDetailGet',
				value: 'fiberEligibilityDetailGet',
				action: 'Auto-generated operation for fiberEligibilityDetailGet',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Auto-generated operation for get',
			},
			{
				name: 'getXdslEmailProGet',
				value: 'getXdslEmailProGet',
				action: 'Auto-generated operation for getXdslEmailProGet',
			},
			{
				name: 'getXdslIpGet',
				value: 'getXdslIpGet',
				action: 'Auto-generated operation for getXdslIpGet',
			},
			{
				name: 'getXdslLineGet',
				value: 'getXdslLineGet',
				action: 'Auto-generated operation for getXdslLineGet',
			},
			{
				name: 'getXdslModemBlocIpGet',
				value: 'getXdslModemBlocIpGet',
				action: 'Auto-generated operation for getXdslModemBlocIpGet',
			},
			{
				name: 'getXdslModemCallWaitingGet',
				value: 'getXdslModemCallWaitingGet',
				action: 'Auto-generated operation for getXdslModemCallWaitingGet',
			},
			{
				name: 'getXdslModemComfortExchangeGet',
				value: 'getXdslModemComfortExchangeGet',
				action: 'Auto-generated operation for getXdslModemComfortExchangeGet',
			},
			{
				name: 'getXdslModemConnectedDeviceGet',
				value: 'getXdslModemConnectedDeviceGet',
				action: 'Auto-generated operation for getXdslModemConnectedDeviceGet',
			},
			{
				name: 'getXdslModemContentSharingGet',
				value: 'getXdslModemContentSharingGet',
				action: 'Auto-generated operation for getXdslModemContentSharingGet',
			},
			{
				name: 'getXdslModemFirmwareGet',
				value: 'getXdslModemFirmwareGet',
				action: 'Auto-generated operation for getXdslModemFirmwareGet',
			},
			{
				name: 'getXdslModemFtpGet',
				value: 'getXdslModemFtpGet',
				action: 'Auto-generated operation for getXdslModemFtpGet',
			},
			{
				name: 'getXdslModemIpsecAlgGet',
				value: 'getXdslModemIpsecAlgGet',
				action: 'Auto-generated operation for getXdslModemIpsecAlgGet',
			},
			{
				name: 'getXdslModemLanDhcpDetailGet',
				value: 'getXdslModemLanDhcpDetailGet',
				action: 'Auto-generated operation for getXdslModemLanDhcpDetailGet',
			},
			{
				name: 'getXdslModemLanDhcpGet',
				value: 'getXdslModemLanDhcpGet',
				action: 'Auto-generated operation for getXdslModemLanDhcpGet',
			},
			{
				name: 'getXdslModemLanDhcpStaticDetailGet',
				value: 'getXdslModemLanDhcpStaticDetailGet',
				action: 'Auto-generated operation for getXdslModemLanDhcpStaticDetailGet',
			},
			{
				name: 'getXdslModemLanGet',
				value: 'getXdslModemLanGet',
				action: 'Auto-generated operation for getXdslModemLanGet',
			},
			{
				name: 'getXdslModemPortMappingGet',
				value: 'getXdslModemPortMappingGet',
				action: 'Auto-generated operation for getXdslModemPortMappingGet',
			},
			{
				name: 'getXdslModemSipAlgGet',
				value: 'getXdslModemSipAlgGet',
				action: 'Auto-generated operation for getXdslModemSipAlgGet',
			},
			{
				name: 'getXdslModemUpnpGet',
				value: 'getXdslModemUpnpGet',
				action: 'Auto-generated operation for getXdslModemUpnpGet',
			},
			{
				name: 'getXdslModemWifiGet',
				value: 'getXdslModemWifiGet',
				action: 'Auto-generated operation for getXdslModemWifiGet',
			},
			{
				name: 'getXdslModemWifiQrCodeGet',
				value: 'getXdslModemWifiQrCodeGet',
				action: 'Auto-generated operation for getXdslModemWifiQrCodeGet',
			},
			{
				name: 'getXdslMonitoringNotificationGet',
				value: 'getXdslMonitoringNotificationGet',
				action: 'Auto-generated operation for getXdslMonitoringNotificationGet',
			},
			{
				name: 'getXdslOntGet',
				value: 'getXdslOntGet',
				action: 'Auto-generated operation for getXdslOntGet',
			},
			{
				name: 'getXdslOrderFollowupGet',
				value: 'getXdslOrderFollowupGet',
				action: 'Auto-generated operation for getXdslOrderFollowupGet',
			},
			{
				name: 'getXdslResiliationFollowupGet',
				value: 'getXdslResiliationFollowupGet',
				action: 'Auto-generated operation for getXdslResiliationFollowupGet',
			},
			{
				name: 'getXdslResiliationTermsGet',
				value: 'getXdslResiliationTermsGet',
				action: 'Auto-generated operation for getXdslResiliationTermsGet',
			},
			{
				name: 'getXdslRmaGet',
				value: 'getXdslRmaGet',
				action: 'Auto-generated operation for getXdslRmaGet',
			},
			{
				name: 'getXdslServiceInfosGet',
				value: 'getXdslServiceInfosGet',
				action: 'Auto-generated operation for getXdslServiceInfosGet',
			},
			{
				name: 'getXdslSpareCompatibleReplacementGet',
				value: 'getXdslSpareCompatibleReplacementGet',
				action: 'Auto-generated operation for getXdslSpareCompatibleReplacementGet',
			},
			{
				name: 'getXdslSpareGet',
				value: 'getXdslSpareGet',
				action: 'Auto-generated operation for getXdslSpareGet',
			},
			{
				name: 'getXdslSpareServiceInfosGet',
				value: 'getXdslSpareServiceInfosGet',
				action: 'Auto-generated operation for getXdslSpareServiceInfosGet',
			},
			{
				name: 'getXdslStatisticsGet',
				value: 'getXdslStatisticsGet',
				action: 'Auto-generated operation for getXdslStatisticsGet',
			},
			{
				name: 'getXdslTaskGet',
				value: 'getXdslTaskGet',
				action: 'Auto-generated operation for getXdslTaskGet',
			},
			{
				name: 'getXdslTemplateModemGet',
				value: 'getXdslTemplateModemGet',
				action: 'Auto-generated operation for getXdslTemplateModemGet',
			},
			{
				name: 'getXdslTotalDeconsolidationTermsGet',
				value: 'getXdslTotalDeconsolidationTermsGet',
				action: 'Auto-generated operation for getXdslTotalDeconsolidationTermsGet',
			},
			{
				name: 'incidentDetailGet',
				value: 'incidentDetailGet',
				action: 'Auto-generated operation for incidentDetailGet',
			},
			{
				name: 'incidentGet',
				value: 'incidentGet',
				action: 'Auto-generated operation for incidentGet',
			},
			{
				name: 'incidentsGet',
				value: 'incidentsGet',
				action: 'Auto-generated operation for incidentsGet',
			},
			{
				name: 'ipDelete',
				value: 'ipDelete',
				action: 'Auto-generated operation for ipDelete',
			},
			{
				name: 'ipsGet',
				value: 'ipsGet',
				action: 'Auto-generated operation for ipsGet',
			},
			{
				name: 'ipsPost',
				value: 'ipsPost',
				action: 'Auto-generated operation for ipsPost',
			},
			{
				name: 'lineDiagnosticCancelPost',
				value: 'lineDiagnosticCancelPost',
				action: 'Auto-generated operation for lineDiagnosticCancelPost',
			},
			{
				name: 'lineDiagnosticRunPost',
				value: 'lineDiagnosticRunPost',
				action: 'Auto-generated operation for lineDiagnosticRunPost',
			},
			{
				name: 'linesStatisticsGet',
				value: 'linesStatisticsGet',
				action: 'Auto-generated operation for linesStatisticsGet',
			},
			{
				name: 'List',
				value: 'list',
				action: 'Auto-generated operation for list',
			},
			{
				name: 'listXdslEmailProGet',
				value: 'listXdslEmailProGet',
				action: 'Auto-generated operation for listXdslEmailProGet',
			},
			{
				name: 'listXdslLinesGet',
				value: 'listXdslLinesGet',
				action: 'Auto-generated operation for listXdslLinesGet',
			},
			{
				name: 'listXdslModemAvailableAcsBackendGet',
				value: 'listXdslModemAvailableAcsBackendGet',
				action: 'Auto-generated operation for listXdslModemAvailableAcsBackendGet',
			},
			{
				name: 'listXdslModemAvailableWlanChannelGet',
				value: 'listXdslModemAvailableWlanChannelGet',
				action: 'Auto-generated operation for listXdslModemAvailableWlanChannelGet',
			},
			{
				name: 'listXdslModemConnectedDevicesGet',
				value: 'listXdslModemConnectedDevicesGet',
				action: 'Auto-generated operation for listXdslModemConnectedDevicesGet',
			},
			{
				name: 'listXdslModemFirmwareAvailableGet',
				value: 'listXdslModemFirmwareAvailableGet',
				action: 'Auto-generated operation for listXdslModemFirmwareAvailableGet',
			},
			{
				name: 'listXdslModemLanDhcpStaticGet',
				value: 'listXdslModemLanDhcpStaticGet',
				action: 'Auto-generated operation for listXdslModemLanDhcpStaticGet',
			},
			{
				name: 'listXdslModemLanGet',
				value: 'listXdslModemLanGet',
				action: 'Auto-generated operation for listXdslModemLanGet',
			},
			{
				name: 'listXdslModemPortMappingsGet',
				value: 'listXdslModemPortMappingsGet',
				action: 'Auto-generated operation for listXdslModemPortMappingsGet',
			},
			{
				name: 'listXdslModemWifiGet',
				value: 'listXdslModemWifiGet',
				action: 'Auto-generated operation for listXdslModemWifiGet',
			},
			{
				name: 'listXdslMonitoringNotificationsGet',
				value: 'listXdslMonitoringNotificationsGet',
				action: 'Auto-generated operation for listXdslMonitoringNotificationsGet',
			},
			{
				name: 'listXdslPendingActionsGet',
				value: 'listXdslPendingActionsGet',
				action: 'Auto-generated operation for listXdslPendingActionsGet',
			},
			{
				name: 'listXdslRadiusConnectionLogsGet',
				value: 'listXdslRadiusConnectionLogsGet',
				action: 'Auto-generated operation for listXdslRadiusConnectionLogsGet',
			},
			{
				name: 'listXdslRmaGet',
				value: 'listXdslRmaGet',
				action: 'Auto-generated operation for listXdslRmaGet',
			},
			{
				name: 'listXdslSpareBrandsGet',
				value: 'listXdslSpareBrandsGet',
				action: 'Auto-generated operation for listXdslSpareBrandsGet',
			},
			{
				name: 'listXdslSpareGet',
				value: 'listXdslSpareGet',
				action: 'Auto-generated operation for listXdslSpareGet',
			},
			{
				name: 'listXdslTasksGet',
				value: 'listXdslTasksGet',
				action: 'Auto-generated operation for listXdslTasksGet',
			},
			{
				name: 'listXdslTemplateModemGet',
				value: 'listXdslTemplateModemGet',
				action: 'Auto-generated operation for listXdslTemplateModemGet',
			},
			{
				name: 'logKindGet',
				value: 'logKindGet',
				action: 'Auto-generated operation for logKindGet',
			},
			{
				name: 'logKindNameGet',
				value: 'logKindNameGet',
				action: 'Auto-generated operation for logKindNameGet',
			},
			{
				name: 'logSubscriptionDelete',
				value: 'logSubscriptionDelete',
				action: 'Auto-generated operation for logSubscriptionDelete',
			},
			{
				name: 'logSubscriptionDetailGet',
				value: 'logSubscriptionDetailGet',
				action: 'Auto-generated operation for logSubscriptionDetailGet',
			},
			{
				name: 'logSubscriptionGet',
				value: 'logSubscriptionGet',
				action: 'Auto-generated operation for logSubscriptionGet',
			},
			{
				name: 'logSubscriptionPost',
				value: 'logSubscriptionPost',
				action: 'Auto-generated operation for logSubscriptionPost',
			},
			{
				name: 'logUrlPost',
				value: 'logUrlPost',
				action: 'Auto-generated operation for logUrlPost',
			},
			{
				name: 'mailSendingPost',
				value: 'mailSendingPost',
				action: 'Auto-generated operation for mailSendingPost',
			},
			{
				name: 'modemGet',
				value: 'modemGet',
				action: 'Auto-generated operation for modemGet',
			},
			{
				name: 'modemUpdatePut',
				value: 'modemUpdatePut',
				action: 'Auto-generated operation for modemUpdatePut',
			},
			{
				name: 'postXdslApplyTemplateToModemPost',
				value: 'postXdslApplyTemplateToModemPost',
				action: 'Auto-generated operation for postXdslApplyTemplateToModemPost',
			},
			{
				name: 'postXdslEmailProChangePasswordPost',
				value: 'postXdslEmailProChangePasswordPost',
				action: 'Auto-generated operation for postXdslEmailProChangePasswordPost',
			},
			{
				name: 'postXdslIpv6Post',
				value: 'postXdslIpv6Post',
				action: 'Auto-generated operation for postXdslIpv6Post',
			},
			{
				name: 'postXdslModemBlocIpPost',
				value: 'postXdslModemBlocIpPost',
				action: 'Auto-generated operation for postXdslModemBlocIpPost',
			},
			{
				name: 'postXdslModemCallWaitingPost',
				value: 'postXdslModemCallWaitingPost',
				action: 'Auto-generated operation for postXdslModemCallWaitingPost',
			},
			{
				name: 'postXdslModemComfortExchangePost',
				value: 'postXdslModemComfortExchangePost',
				action: 'Auto-generated operation for postXdslModemComfortExchangePost',
			},
			{
				name: 'postXdslModemContentSharingPost',
				value: 'postXdslModemContentSharingPost',
				action: 'Auto-generated operation for postXdslModemContentSharingPost',
			},
			{
				name: 'postXdslModemFirmwarePost',
				value: 'postXdslModemFirmwarePost',
				action: 'Auto-generated operation for postXdslModemFirmwarePost',
			},
			{
				name: 'postXdslModemFtpPost',
				value: 'postXdslModemFtpPost',
				action: 'Auto-generated operation for postXdslModemFtpPost',
			},
			{
				name: 'postXdslModemIpsecAlgPost',
				value: 'postXdslModemIpsecAlgPost',
				action: 'Auto-generated operation for postXdslModemIpsecAlgPost',
			},
			{
				name: 'postXdslModemLanDhcpStaticPost',
				value: 'postXdslModemLanDhcpStaticPost',
				action: 'Auto-generated operation for postXdslModemLanDhcpStaticPost',
			},
			{
				name: 'postXdslModemPortMappingsPost',
				value: 'postXdslModemPortMappingsPost',
				action: 'Auto-generated operation for postXdslModemPortMappingsPost',
			},
			{
				name: 'postXdslModemRebootPost',
				value: 'postXdslModemRebootPost',
				action: 'Auto-generated operation for postXdslModemRebootPost',
			},
			{
				name: 'postXdslModemReconfigureVoipPost',
				value: 'postXdslModemReconfigureVoipPost',
				action: 'Auto-generated operation for postXdslModemReconfigureVoipPost',
			},
			{
				name: 'postXdslModemRefreshConnectedDevicesPost',
				value: 'postXdslModemRefreshConnectedDevicesPost',
				action: 'Auto-generated operation for postXdslModemRefreshConnectedDevicesPost',
			},
			{
				name: 'postXdslModemResetPortMappingConfigPost',
				value: 'postXdslModemResetPortMappingConfigPost',
				action: 'Auto-generated operation for postXdslModemResetPortMappingConfigPost',
			},
			{
				name: 'postXdslModemResetPost',
				value: 'postXdslModemResetPost',
				action: 'Auto-generated operation for postXdslModemResetPost',
			},
			{
				name: 'postXdslModemRetrieveInfoPost',
				value: 'postXdslModemRetrieveInfoPost',
				action: 'Auto-generated operation for postXdslModemRetrieveInfoPost',
			},
			{
				name: 'postXdslModemSipAlgPost',
				value: 'postXdslModemSipAlgPost',
				action: 'Auto-generated operation for postXdslModemSipAlgPost',
			},
			{
				name: 'postXdslModemUpnpPost',
				value: 'postXdslModemUpnpPost',
				action: 'Auto-generated operation for postXdslModemUpnpPost',
			},
			{
				name: 'postXdslMonitoringNotificationPost',
				value: 'postXdslMonitoringNotificationPost',
				action: 'Auto-generated operation for postXdslMonitoringNotificationPost',
			},
			{
				name: 'postXdslOrderMeetingPost',
				value: 'postXdslOrderMeetingPost',
				action: 'Auto-generated operation for postXdslOrderMeetingPost',
			},
			{
				name: 'postXdslRequestPppLoginMailPost',
				value: 'postXdslRequestPppLoginMailPost',
				action: 'Auto-generated operation for postXdslRequestPppLoginMailPost',
			},
			{
				name: 'postXdslRequestTotalDeconsolidationPost',
				value: 'postXdslRequestTotalDeconsolidationPost',
				action: 'Auto-generated operation for postXdslRequestTotalDeconsolidationPost',
			},
			{
				name: 'postXdslResiliatePost',
				value: 'postXdslResiliatePost',
				action: 'Auto-generated operation for postXdslResiliatePost',
			},
			{
				name: 'postXdslRmaChangeTypePost',
				value: 'postXdslRmaChangeTypePost',
				action: 'Auto-generated operation for postXdslRmaChangeTypePost',
			},
			{
				name: 'postXdslSearchOrderMeetingsPost',
				value: 'postXdslSearchOrderMeetingsPost',
				action: 'Auto-generated operation for postXdslSearchOrderMeetingsPost',
			},
			{
				name: 'postXdslSendOrderToProviderPost',
				value: 'postXdslSendOrderToProviderPost',
				action: 'Auto-generated operation for postXdslSendOrderToProviderPost',
			},
			{
				name: 'postXdslSpareReplacePost',
				value: 'postXdslSpareReplacePost',
				action: 'Auto-generated operation for postXdslSpareReplacePost',
			},
			{
				name: 'postXdslSpareReturnMerchandisePost',
				value: 'postXdslSpareReturnMerchandisePost',
				action: 'Auto-generated operation for postXdslSpareReturnMerchandisePost',
			},
			{
				name: 'postXdslTaskArchivePost',
				value: 'postXdslTaskArchivePost',
				action: 'Auto-generated operation for postXdslTaskArchivePost',
			},
			{
				name: 'postXdslTemplateModemPost',
				value: 'postXdslTemplateModemPost',
				action: 'Auto-generated operation for postXdslTemplateModemPost',
			},
			{
				name: 'postXdslUpdateInvalidOrMissingRioPost',
				value: 'postXdslUpdateInvalidOrMissingRioPost',
				action: 'Auto-generated operation for postXdslUpdateInvalidOrMissingRioPost',
			},
			{
				name: 'putXdslEmailProPut',
				value: 'putXdslEmailProPut',
				action: 'Auto-generated operation for putXdslEmailProPut',
			},
			{
				name: 'putXdslModemLanDhcpPut',
				value: 'putXdslModemLanDhcpPut',
				action: 'Auto-generated operation for putXdslModemLanDhcpPut',
			},
			{
				name: 'putXdslModemLanDhcpStaticPut',
				value: 'putXdslModemLanDhcpStaticPut',
				action: 'Auto-generated operation for putXdslModemLanDhcpStaticPut',
			},
			{
				name: 'putXdslModemLanPut',
				value: 'putXdslModemLanPut',
				action: 'Auto-generated operation for putXdslModemLanPut',
			},
			{
				name: 'putXdslModemPortMappingPut',
				value: 'putXdslModemPortMappingPut',
				action: 'Auto-generated operation for putXdslModemPortMappingPut',
			},
			{
				name: 'putXdslModemWifiPut',
				value: 'putXdslModemWifiPut',
				action: 'Auto-generated operation for putXdslModemWifiPut',
			},
			{
				name: 'putXdslMonitoringNotificationPut',
				value: 'putXdslMonitoringNotificationPut',
				action: 'Auto-generated operation for putXdslMonitoringNotificationPut',
			},
			{
				name: 'putXdslRmaPut',
				value: 'putXdslRmaPut',
				action: 'Auto-generated operation for putXdslRmaPut',
			},
			{
				name: 'putXdslServiceInfosPut',
				value: 'putXdslServiceInfosPut',
				action: 'Auto-generated operation for putXdslServiceInfosPut',
			},
			{
				name: 'putXdslSpareServiceInfosPut',
				value: 'putXdslSpareServiceInfosPut',
				action: 'Auto-generated operation for putXdslSpareServiceInfosPut',
			},
			{
				name: 'putXdslTemplateModemPut',
				value: 'putXdslTemplateModemPut',
				action: 'Auto-generated operation for putXdslTemplateModemPut',
			},
			{
				name: 'updatePut',
				value: 'updatePut',
				action: 'Auto-generated operation for updatePut',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('xdslOperation', 0) as string;

	switch (operation) {
		case 'antiSpamDetailGet':
			return antiSpamDetailGet.execute.call(this);
		case 'antiSpamEvidencesGet':
			return antiSpamEvidencesGet.execute.call(this);
		case 'antiSpamsGet':
			return antiSpamsGet.execute.call(this);
		case 'canCancelResiliationGet':
			return canCancelResiliationGet.execute.call(this);
		case 'cancelResiliationPost':
			return cancelResiliationPost.execute.call(this);
		case 'changeContactPost':
			return changeContactPost.execute.call(this);
		case 'deleteXdslEmailProDelete':
			return deleteXdslEmailProDelete.execute.call(this);
		case 'deleteXdslModemLanDhcpStaticDelete':
			return deleteXdslModemLanDhcpStaticDelete.execute.call(this);
		case 'deleteXdslModemPortMappingDelete':
			return deleteXdslModemPortMappingDelete.execute.call(this);
		case 'deleteXdslMonitoringNotificationDelete':
			return deleteXdslMonitoringNotificationDelete.execute.call(this);
		case 'deleteXdslRmaDelete':
			return deleteXdslRmaDelete.execute.call(this);
		case 'deleteXdslSpareDelete':
			return deleteXdslSpareDelete.execute.call(this);
		case 'deleteXdslTemplateModemDelete':
			return deleteXdslTemplateModemDelete.execute.call(this);
		case 'diagnosticGet':
			return diagnosticGet.execute.call(this);
		case 'diagnosticPost':
			return diagnosticPost.execute.call(this);
		case 'dslamPortAvailableProfilesGet':
			return dslamPortAvailableProfilesGet.execute.call(this);
		case 'dslamPortChangeProfilePost':
			return dslamPortChangeProfilePost.execute.call(this);
		case 'dslamPortGet':
			return dslamPortGet.execute.call(this);
		case 'dslamPortLogsGet':
			return dslamPortLogsGet.execute.call(this);
		case 'dslamPortResetPost':
			return dslamPortResetPost.execute.call(this);
		case 'extraIpRangeGet':
			return extraIpRangeGet.execute.call(this);
		case 'extraIpRangeMovePost':
			return extraIpRangeMovePost.execute.call(this);
		case 'fiberEligibilitiesGet':
			return fiberEligibilitiesGet.execute.call(this);
		case 'fiberEligibilityDetailGet':
			return fiberEligibilityDetailGet.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'getXdslEmailProGet':
			return getXdslEmailProGet.execute.call(this);
		case 'getXdslIpGet':
			return getXdslIpGet.execute.call(this);
		case 'getXdslLineGet':
			return getXdslLineGet.execute.call(this);
		case 'getXdslModemBlocIpGet':
			return getXdslModemBlocIpGet.execute.call(this);
		case 'getXdslModemCallWaitingGet':
			return getXdslModemCallWaitingGet.execute.call(this);
		case 'getXdslModemComfortExchangeGet':
			return getXdslModemComfortExchangeGet.execute.call(this);
		case 'getXdslModemConnectedDeviceGet':
			return getXdslModemConnectedDeviceGet.execute.call(this);
		case 'getXdslModemContentSharingGet':
			return getXdslModemContentSharingGet.execute.call(this);
		case 'getXdslModemFirmwareGet':
			return getXdslModemFirmwareGet.execute.call(this);
		case 'getXdslModemFtpGet':
			return getXdslModemFtpGet.execute.call(this);
		case 'getXdslModemIpsecAlgGet':
			return getXdslModemIpsecAlgGet.execute.call(this);
		case 'getXdslModemLanDhcpDetailGet':
			return getXdslModemLanDhcpDetailGet.execute.call(this);
		case 'getXdslModemLanDhcpGet':
			return getXdslModemLanDhcpGet.execute.call(this);
		case 'getXdslModemLanDhcpStaticDetailGet':
			return getXdslModemLanDhcpStaticDetailGet.execute.call(this);
		case 'getXdslModemLanGet':
			return getXdslModemLanGet.execute.call(this);
		case 'getXdslModemPortMappingGet':
			return getXdslModemPortMappingGet.execute.call(this);
		case 'getXdslModemSipAlgGet':
			return getXdslModemSipAlgGet.execute.call(this);
		case 'getXdslModemUpnpGet':
			return getXdslModemUpnpGet.execute.call(this);
		case 'getXdslModemWifiGet':
			return getXdslModemWifiGet.execute.call(this);
		case 'getXdslModemWifiQrCodeGet':
			return getXdslModemWifiQrCodeGet.execute.call(this);
		case 'getXdslMonitoringNotificationGet':
			return getXdslMonitoringNotificationGet.execute.call(this);
		case 'getXdslOntGet':
			return getXdslOntGet.execute.call(this);
		case 'getXdslOrderFollowupGet':
			return getXdslOrderFollowupGet.execute.call(this);
		case 'getXdslResiliationFollowupGet':
			return getXdslResiliationFollowupGet.execute.call(this);
		case 'getXdslResiliationTermsGet':
			return getXdslResiliationTermsGet.execute.call(this);
		case 'getXdslRmaGet':
			return getXdslRmaGet.execute.call(this);
		case 'getXdslServiceInfosGet':
			return getXdslServiceInfosGet.execute.call(this);
		case 'getXdslSpareCompatibleReplacementGet':
			return getXdslSpareCompatibleReplacementGet.execute.call(this);
		case 'getXdslSpareGet':
			return getXdslSpareGet.execute.call(this);
		case 'getXdslSpareServiceInfosGet':
			return getXdslSpareServiceInfosGet.execute.call(this);
		case 'getXdslStatisticsGet':
			return getXdslStatisticsGet.execute.call(this);
		case 'getXdslTaskGet':
			return getXdslTaskGet.execute.call(this);
		case 'getXdslTemplateModemGet':
			return getXdslTemplateModemGet.execute.call(this);
		case 'getXdslTotalDeconsolidationTermsGet':
			return getXdslTotalDeconsolidationTermsGet.execute.call(this);
		case 'incidentDetailGet':
			return incidentDetailGet.execute.call(this);
		case 'incidentGet':
			return incidentGet.execute.call(this);
		case 'incidentsGet':
			return incidentsGet.execute.call(this);
		case 'ipDelete':
			return ipDelete.execute.call(this);
		case 'ipsGet':
			return ipsGet.execute.call(this);
		case 'ipsPost':
			return ipsPost.execute.call(this);
		case 'lineDiagnosticCancelPost':
			return lineDiagnosticCancelPost.execute.call(this);
		case 'lineDiagnosticRunPost':
			return lineDiagnosticRunPost.execute.call(this);
		case 'linesStatisticsGet':
			return linesStatisticsGet.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'listXdslEmailProGet':
			return listXdslEmailProGet.execute.call(this);
		case 'listXdslLinesGet':
			return listXdslLinesGet.execute.call(this);
		case 'listXdslModemAvailableAcsBackendGet':
			return listXdslModemAvailableAcsBackendGet.execute.call(this);
		case 'listXdslModemAvailableWlanChannelGet':
			return listXdslModemAvailableWlanChannelGet.execute.call(this);
		case 'listXdslModemConnectedDevicesGet':
			return listXdslModemConnectedDevicesGet.execute.call(this);
		case 'listXdslModemFirmwareAvailableGet':
			return listXdslModemFirmwareAvailableGet.execute.call(this);
		case 'listXdslModemLanDhcpStaticGet':
			return listXdslModemLanDhcpStaticGet.execute.call(this);
		case 'listXdslModemLanGet':
			return listXdslModemLanGet.execute.call(this);
		case 'listXdslModemPortMappingsGet':
			return listXdslModemPortMappingsGet.execute.call(this);
		case 'listXdslModemWifiGet':
			return listXdslModemWifiGet.execute.call(this);
		case 'listXdslMonitoringNotificationsGet':
			return listXdslMonitoringNotificationsGet.execute.call(this);
		case 'listXdslPendingActionsGet':
			return listXdslPendingActionsGet.execute.call(this);
		case 'listXdslRadiusConnectionLogsGet':
			return listXdslRadiusConnectionLogsGet.execute.call(this);
		case 'listXdslRmaGet':
			return listXdslRmaGet.execute.call(this);
		case 'listXdslSpareBrandsGet':
			return listXdslSpareBrandsGet.execute.call(this);
		case 'listXdslSpareGet':
			return listXdslSpareGet.execute.call(this);
		case 'listXdslTasksGet':
			return listXdslTasksGet.execute.call(this);
		case 'listXdslTemplateModemGet':
			return listXdslTemplateModemGet.execute.call(this);
		case 'logKindGet':
			return logKindGet.execute.call(this);
		case 'logKindNameGet':
			return logKindNameGet.execute.call(this);
		case 'logSubscriptionDelete':
			return logSubscriptionDelete.execute.call(this);
		case 'logSubscriptionDetailGet':
			return logSubscriptionDetailGet.execute.call(this);
		case 'logSubscriptionGet':
			return logSubscriptionGet.execute.call(this);
		case 'logSubscriptionPost':
			return logSubscriptionPost.execute.call(this);
		case 'logUrlPost':
			return logUrlPost.execute.call(this);
		case 'mailSendingPost':
			return mailSendingPost.execute.call(this);
		case 'modemGet':
			return modemGet.execute.call(this);
		case 'modemUpdatePut':
			return modemUpdatePut.execute.call(this);
		case 'postXdslApplyTemplateToModemPost':
			return postXdslApplyTemplateToModemPost.execute.call(this);
		case 'postXdslEmailProChangePasswordPost':
			return postXdslEmailProChangePasswordPost.execute.call(this);
		case 'postXdslIpv6Post':
			return postXdslIpv6Post.execute.call(this);
		case 'postXdslModemBlocIpPost':
			return postXdslModemBlocIpPost.execute.call(this);
		case 'postXdslModemCallWaitingPost':
			return postXdslModemCallWaitingPost.execute.call(this);
		case 'postXdslModemComfortExchangePost':
			return postXdslModemComfortExchangePost.execute.call(this);
		case 'postXdslModemContentSharingPost':
			return postXdslModemContentSharingPost.execute.call(this);
		case 'postXdslModemFirmwarePost':
			return postXdslModemFirmwarePost.execute.call(this);
		case 'postXdslModemFtpPost':
			return postXdslModemFtpPost.execute.call(this);
		case 'postXdslModemIpsecAlgPost':
			return postXdslModemIpsecAlgPost.execute.call(this);
		case 'postXdslModemLanDhcpStaticPost':
			return postXdslModemLanDhcpStaticPost.execute.call(this);
		case 'postXdslModemPortMappingsPost':
			return postXdslModemPortMappingsPost.execute.call(this);
		case 'postXdslModemRebootPost':
			return postXdslModemRebootPost.execute.call(this);
		case 'postXdslModemReconfigureVoipPost':
			return postXdslModemReconfigureVoipPost.execute.call(this);
		case 'postXdslModemRefreshConnectedDevicesPost':
			return postXdslModemRefreshConnectedDevicesPost.execute.call(this);
		case 'postXdslModemResetPortMappingConfigPost':
			return postXdslModemResetPortMappingConfigPost.execute.call(this);
		case 'postXdslModemResetPost':
			return postXdslModemResetPost.execute.call(this);
		case 'postXdslModemRetrieveInfoPost':
			return postXdslModemRetrieveInfoPost.execute.call(this);
		case 'postXdslModemSipAlgPost':
			return postXdslModemSipAlgPost.execute.call(this);
		case 'postXdslModemUpnpPost':
			return postXdslModemUpnpPost.execute.call(this);
		case 'postXdslMonitoringNotificationPost':
			return postXdslMonitoringNotificationPost.execute.call(this);
		case 'postXdslOrderMeetingPost':
			return postXdslOrderMeetingPost.execute.call(this);
		case 'postXdslRequestPppLoginMailPost':
			return postXdslRequestPppLoginMailPost.execute.call(this);
		case 'postXdslRequestTotalDeconsolidationPost':
			return postXdslRequestTotalDeconsolidationPost.execute.call(this);
		case 'postXdslResiliatePost':
			return postXdslResiliatePost.execute.call(this);
		case 'postXdslRmaChangeTypePost':
			return postXdslRmaChangeTypePost.execute.call(this);
		case 'postXdslSearchOrderMeetingsPost':
			return postXdslSearchOrderMeetingsPost.execute.call(this);
		case 'postXdslSendOrderToProviderPost':
			return postXdslSendOrderToProviderPost.execute.call(this);
		case 'postXdslSpareReplacePost':
			return postXdslSpareReplacePost.execute.call(this);
		case 'postXdslSpareReturnMerchandisePost':
			return postXdslSpareReturnMerchandisePost.execute.call(this);
		case 'postXdslTaskArchivePost':
			return postXdslTaskArchivePost.execute.call(this);
		case 'postXdslTemplateModemPost':
			return postXdslTemplateModemPost.execute.call(this);
		case 'postXdslUpdateInvalidOrMissingRioPost':
			return postXdslUpdateInvalidOrMissingRioPost.execute.call(this);
		case 'putXdslEmailProPut':
			return putXdslEmailProPut.execute.call(this);
		case 'putXdslModemLanDhcpPut':
			return putXdslModemLanDhcpPut.execute.call(this);
		case 'putXdslModemLanDhcpStaticPut':
			return putXdslModemLanDhcpStaticPut.execute.call(this);
		case 'putXdslModemLanPut':
			return putXdslModemLanPut.execute.call(this);
		case 'putXdslModemPortMappingPut':
			return putXdslModemPortMappingPut.execute.call(this);
		case 'putXdslModemWifiPut':
			return putXdslModemWifiPut.execute.call(this);
		case 'putXdslMonitoringNotificationPut':
			return putXdslMonitoringNotificationPut.execute.call(this);
		case 'putXdslRmaPut':
			return putXdslRmaPut.execute.call(this);
		case 'putXdslServiceInfosPut':
			return putXdslServiceInfosPut.execute.call(this);
		case 'putXdslSpareServiceInfosPut':
			return putXdslSpareServiceInfosPut.execute.call(this);
		case 'putXdslTemplateModemPut':
			return putXdslTemplateModemPut.execute.call(this);
		case 'updatePut':
			return updatePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}

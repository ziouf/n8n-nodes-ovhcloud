import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionabbreviatedNumberDelete,
	execute as executeabbreviatedNumberDelete,
} from './abbreviatedNumber/abbreviatedNumberDelete.operation';
import {
	description as descriptionabbreviatedNumberGet,
	execute as executeabbreviatedNumberGet,
} from './abbreviatedNumber/abbreviatedNumberGet.operation';
import {
	description as descriptionabbreviatedNumberListGet,
	execute as executeabbreviatedNumberListGet,
} from './abbreviatedNumber/abbreviatedNumberListGet.operation';
import {
	description as descriptionabbreviatedNumberPost,
	execute as executeabbreviatedNumberPost,
} from './abbreviatedNumber/abbreviatedNumberPost.operation';
import {
	description as descriptionabbreviatedNumberPut,
	execute as executeabbreviatedNumberPut,
} from './abbreviatedNumber/abbreviatedNumberPut.operation';
import {
	description as descriptionAccessoriesGet,
	execute as executeAccessoriesGet,
} from './accessories/accessoriesGet.operation';
import {
	description as descriptionAliasChangeContactPost,
	execute as executeAliasChangeContactPost,
} from './aliases/aliasChangeContactPost.operation';
import {
	description as descriptionAliasGet,
	execute as executeAliasGet,
} from './aliases/aliasGet.operation';
import {
	description as descriptionAliasListGet,
	execute as executeAliasListGet,
} from './aliases/aliasListGet.operation';
import {
	description as descriptionAliasServiceInfosGet,
	execute as executeAliasServiceInfosGet,
} from './aliases/aliasServiceInfosGet.operation';
import {
	description as descriptionAliasServiceInfosPut,
	execute as executeAliasServiceInfosPut,
} from './aliases/aliasServiceInfosPut.operation';
import {
	description as descriptioncarrierSipCdrsListGet,
	execute as executecarrierSipCdrsListGet,
} from './carrierSip/carrierSipCdrsListGet.operation';
import {
	description as descriptioncarrierSipClusterDetailsListGet,
	execute as executecarrierSipClusterDetailsListGet,
} from './carrierSip/carrierSipClusterDetailsListGet.operation';
import {
	description as descriptioncarrierSipEndpointsGet,
	execute as executecarrierSipEndpointsGet,
} from './carrierSip/carrierSipEndpointsGet.operation';
import {
	description as descriptioncarrierSipEndpointsListGet,
	execute as executecarrierSipEndpointsListGet,
} from './carrierSip/carrierSipEndpointsListGet.operation';
import {
	description as descriptioncarrierSipGet,
	execute as executecarrierSipGet,
} from './carrierSip/carrierSipGet.operation';
import {
	description as descriptioncarrierSipListGet,
	execute as executecarrierSipListGet,
} from './carrierSip/carrierSipListGet.operation';
import {
	description as descriptioncarrierSipSettingsListGet,
	execute as executecarrierSipSettingsListGet,
} from './carrierSip/carrierSipSettingsListGet.operation';
import {
	description as descriptioncarrierSipSettingsPut,
	execute as executecarrierSipSettingsPut,
} from './carrierSip/carrierSipSettingsPut.operation';
import {
	description as descriptioncarrierSipVnoGet,
	execute as executecarrierSipVnoGet,
} from './carrierSip/carrierSipVnoGet.operation';
import {
	description as descriptioncarrierSipVnoListGet,
	execute as executecarrierSipVnoListGet,
} from './carrierSip/carrierSipVnoListGet.operation';
import {
	description as descriptioncarrierSipVnoRangesGet,
	execute as executecarrierSipVnoRangesGet,
} from './carrierSip/carrierSipVnoRangesGet.operation';
import {
	description as descriptioncarrierSipVnoRangesListGet,
	execute as executecarrierSipVnoRangesListGet,
} from './carrierSip/carrierSipVnoRangesListGet.operation';
import {
	description as descriptioncarrierSipVnoRangesPut,
	execute as executecarrierSipVnoRangesPut,
} from './carrierSip/carrierSipVnoRangesPut.operation';
import {
	description as descriptionconferenceAnnounceUploadPost,
	execute as executeconferenceAnnounceUploadPost,
} from './conference/conferenceAnnounceUploadPost.operation';
import {
	description as descriptionconferenceGet,
	execute as executeconferenceGet,
} from './conference/conferenceGet.operation';
import {
	description as descriptionconferenceHistoriesGet,
	execute as executeconferenceHistoriesGet,
} from './conference/conferenceHistoriesGet.operation';
import {
	description as descriptionconferenceHistoriesListGet,
	execute as executeconferenceHistoriesListGet,
} from './conference/conferenceHistoriesListGet.operation';
import {
	description as descriptionconferenceInformationsListGet,
	execute as executeconferenceInformationsListGet,
} from './conference/conferenceInformationsListGet.operation';
import {
	description as descriptionconferenceListGet,
	execute as executeconferenceListGet,
} from './conference/conferenceListGet.operation';
import {
	description as descriptionconferenceLockPost,
	execute as executeconferenceLockPost,
} from './conference/conferenceLockPost.operation';
import {
	description as descriptionconferenceParticipantsDeafPost,
	execute as executeconferenceParticipantsDeafPost,
} from './conference/conferenceParticipantsDeafPost.operation';
import {
	description as descriptionconferenceParticipantsEnergyPost,
	execute as executeconferenceParticipantsEnergyPost,
} from './conference/conferenceParticipantsEnergyPost.operation';
import {
	description as descriptionconferenceParticipantsGet,
	execute as executeconferenceParticipantsGet,
} from './conference/conferenceParticipantsGet.operation';
import {
	description as descriptionconferenceParticipantsKickPost,
	execute as executeconferenceParticipantsKickPost,
} from './conference/conferenceParticipantsKickPost.operation';
import {
	description as descriptionconferenceParticipantsListGet,
	execute as executeconferenceParticipantsListGet,
} from './conference/conferenceParticipantsListGet.operation';
import {
	description as descriptionconferenceParticipantsMutePost,
	execute as executeconferenceParticipantsMutePost,
} from './conference/conferenceParticipantsMutePost.operation';
import {
	description as descriptionconferenceParticipantsUndeafPost,
	execute as executeconferenceParticipantsUndeafPost,
} from './conference/conferenceParticipantsUndeafPost.operation';
import {
	description as descriptionconferenceParticipantsUnmutePost,
	execute as executeconferenceParticipantsUnmutePost,
} from './conference/conferenceParticipantsUnmutePost.operation';
import {
	description as descriptionconferenceRoomsGet,
	execute as executeconferenceRoomsGet,
} from './conference/conferenceRoomsGet.operation';
import {
	description as descriptionconferenceRoomsHistoriesGet,
	execute as executeconferenceRoomsHistoriesGet,
} from './conference/conferenceRoomsHistoriesGet.operation';
import {
	description as descriptionconferenceRoomsHistoriesListGet,
	execute as executeconferenceRoomsHistoriesListGet,
} from './conference/conferenceRoomsHistoriesListGet.operation';
import {
	description as descriptionconferenceRoomsListGet,
	execute as executeconferenceRoomsListGet,
} from './conference/conferenceRoomsListGet.operation';
import {
	description as descriptionconferenceRoomsLockPost,
	execute as executeconferenceRoomsLockPost,
} from './conference/conferenceRoomsLockPost.operation';
import {
	description as descriptionconferenceRoomsParticipantsDeafPost,
	execute as executeconferenceRoomsParticipantsDeafPost,
} from './conference/conferenceRoomsParticipantsDeafPost.operation';
import {
	description as descriptionconferenceRoomsParticipantsEnergyPost,
	execute as executeconferenceRoomsParticipantsEnergyPost,
} from './conference/conferenceRoomsParticipantsEnergyPost.operation';
import {
	description as descriptionconferenceRoomsParticipantsGet,
	execute as executeconferenceRoomsParticipantsGet,
} from './conference/conferenceRoomsParticipantsGet.operation';
import {
	description as descriptionconferenceRoomsParticipantsKickPost,
	execute as executeconferenceRoomsParticipantsKickPost,
} from './conference/conferenceRoomsParticipantsKickPost.operation';
import {
	description as descriptionconferenceRoomsParticipantsListGet,
	execute as executeconferenceRoomsParticipantsListGet,
} from './conference/conferenceRoomsParticipantsListGet.operation';
import {
	description as descriptionconferenceRoomsParticipantsMutePost,
	execute as executeconferenceRoomsParticipantsMutePost,
} from './conference/conferenceRoomsParticipantsMutePost.operation';
import {
	description as descriptionconferenceRoomsParticipantsUndeafPost,
	execute as executeconferenceRoomsParticipantsUndeafPost,
} from './conference/conferenceRoomsParticipantsUndeafPost.operation';
import {
	description as descriptionconferenceRoomsParticipantsUnmutePost,
	execute as executeconferenceRoomsParticipantsUnmutePost,
} from './conference/conferenceRoomsParticipantsUnmutePost.operation';
import {
	description as descriptionconferenceRoomsPost,
	execute as executeconferenceRoomsPost,
} from './conference/conferenceRoomsPost.operation';
import {
	description as descriptionconferenceRoomsPut,
	execute as executeconferenceRoomsPut,
} from './conference/conferenceRoomsPut.operation';
import {
	description as descriptionconferenceRoomsStatsListGet,
	execute as executeconferenceRoomsStatsListGet,
} from './conference/conferenceRoomsStatsListGet.operation';
import {
	description as descriptionconferenceRoomsUnlockPost,
	execute as executeconferenceRoomsUnlockPost,
} from './conference/conferenceRoomsUnlockPost.operation';
import {
	description as descriptionconferenceRoomsWebAccessDelete,
	execute as executeconferenceRoomsWebAccessDelete,
} from './conference/conferenceRoomsWebAccessDelete.operation';
import {
	description as descriptionconferenceRoomsWebAccessGet,
	execute as executeconferenceRoomsWebAccessGet,
} from './conference/conferenceRoomsWebAccessGet.operation';
import {
	description as descriptionconferenceRoomsWebAccessListGet,
	execute as executeconferenceRoomsWebAccessListGet,
} from './conference/conferenceRoomsWebAccessListGet.operation';
import {
	description as descriptionconferenceRoomsWebAccessPost,
	execute as executeconferenceRoomsWebAccessPost,
} from './conference/conferenceRoomsWebAccessPost.operation';
import {
	description as descriptionconferenceSettingsListGet,
	execute as executeconferenceSettingsListGet,
} from './conference/conferenceSettingsListGet.operation';
import {
	description as descriptionconferenceSettingsPut,
	execute as executeconferenceSettingsPut,
} from './conference/conferenceSettingsPut.operation';
import {
	description as descriptionconferenceUnlockPost,
	execute as executeconferenceUnlockPost,
} from './conference/conferenceUnlockPost.operation';
import {
	description as descriptionconferenceWebAccessDelete,
	execute as executeconferenceWebAccessDelete,
} from './conference/conferenceWebAccessDelete.operation';
import {
	description as descriptionconferenceWebAccessGet,
	execute as executeconferenceWebAccessGet,
} from './conference/conferenceWebAccessGet.operation';
import {
	description as descriptionconferenceWebAccessListGet,
	execute as executeconferenceWebAccessListGet,
} from './conference/conferenceWebAccessListGet.operation';
import {
	description as descriptionconferenceWebAccessPost,
	execute as executeconferenceWebAccessPost,
} from './conference/conferenceWebAccessPost.operation';
import {
	description as descriptionddiChangeDestinationPost,
	execute as executeddiChangeDestinationPost,
} from './ddi/ddiChangeDestinationPost.operation';
import {
	description as descriptionddiGet,
	execute as executeddiGet,
} from './ddi/ddiGet.operation';
import {
	description as descriptionddiListGet,
	execute as executeddiListGet,
} from './ddi/ddiListGet.operation';
import {
	description as descriptionddiPut,
	execute as executeddiPut,
} from './ddi/ddiPut.operation';
import {
	description as descriptionDirectoriesAvailableZipCodesGet,
	execute as executeDirectoriesAvailableZipCodesGet,
} from './directories/directoriesAvailableZipCodesGet.operation';
import {
	description as descriptionDirectoriesCitiesGet,
	execute as executeDirectoriesCitiesGet,
} from './directories/directoriesCitiesGet.operation';
import {
	description as descriptionDirectoriesCountriesGet,
	execute as executeDirectoriesCountriesGet,
} from './directories/directoriesCountriesGet.operation';
import {
	description as descriptionDirectoriesServicesGet,
	execute as executeDirectoriesServicesGet,
} from './directories/directoriesServicesGet.operation';
import {
	description as descriptioneasyHuntingGet,
	execute as executeeasyHuntingGet,
} from './easyHunting/easyHuntingGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentBannerAccessDelete,
	execute as executeeasyHuntingHuntingAgentBannerAccessDelete,
} from './easyHunting/easyHuntingHuntingAgentBannerAccessDelete.operation';
import {
	description as descriptioneasyHuntingHuntingAgentBannerAccessListGet,
	execute as executeeasyHuntingHuntingAgentBannerAccessListGet,
} from './easyHunting/easyHuntingHuntingAgentBannerAccessListGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentBannerAccessPost,
	execute as executeeasyHuntingHuntingAgentBannerAccessPost,
} from './easyHunting/easyHuntingHuntingAgentBannerAccessPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentCallsEavesdropPost,
	execute as executeeasyHuntingHuntingAgentCallsEavesdropPost,
} from './easyHunting/easyHuntingHuntingAgentCallsEavesdropPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentCallsGet,
	execute as executeeasyHuntingHuntingAgentCallsGet,
} from './easyHunting/easyHuntingHuntingAgentCallsGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentCallsHangupPost,
	execute as executeeasyHuntingHuntingAgentCallsHangupPost,
} from './easyHunting/easyHuntingHuntingAgentCallsHangupPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentCallsHoldPost,
	execute as executeeasyHuntingHuntingAgentCallsHoldPost,
} from './easyHunting/easyHuntingHuntingAgentCallsHoldPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentCallsInterceptPost,
	execute as executeeasyHuntingHuntingAgentCallsInterceptPost,
} from './easyHunting/easyHuntingHuntingAgentCallsInterceptPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentCallsListGet,
	execute as executeeasyHuntingHuntingAgentCallsListGet,
} from './easyHunting/easyHuntingHuntingAgentCallsListGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentCallsTransferPost,
	execute as executeeasyHuntingHuntingAgentCallsTransferPost,
} from './easyHunting/easyHuntingHuntingAgentCallsTransferPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentCallsWhisperPost,
	execute as executeeasyHuntingHuntingAgentCallsWhisperPost,
} from './easyHunting/easyHuntingHuntingAgentCallsWhisperPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentDelete,
	execute as executeeasyHuntingHuntingAgentDelete,
} from './easyHunting/easyHuntingHuntingAgentDelete.operation';
import {
	description as descriptioneasyHuntingHuntingAgentEventTokenDelete,
	execute as executeeasyHuntingHuntingAgentEventTokenDelete,
} from './easyHunting/easyHuntingHuntingAgentEventTokenDelete.operation';
import {
	description as descriptioneasyHuntingHuntingAgentEventTokenListGet,
	execute as executeeasyHuntingHuntingAgentEventTokenListGet,
} from './easyHunting/easyHuntingHuntingAgentEventTokenListGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentEventTokenPost,
	execute as executeeasyHuntingHuntingAgentEventTokenPost,
} from './easyHunting/easyHuntingHuntingAgentEventTokenPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentGet,
	execute as executeeasyHuntingHuntingAgentGet,
} from './easyHunting/easyHuntingHuntingAgentGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentListGet,
	execute as executeeasyHuntingHuntingAgentListGet,
} from './easyHunting/easyHuntingHuntingAgentListGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentLiveStatusListGet,
	execute as executeeasyHuntingHuntingAgentLiveStatusListGet,
} from './easyHunting/easyHuntingHuntingAgentLiveStatusListGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentPost,
	execute as executeeasyHuntingHuntingAgentPost,
} from './easyHunting/easyHuntingHuntingAgentPost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentPut,
	execute as executeeasyHuntingHuntingAgentPut,
} from './easyHunting/easyHuntingHuntingAgentPut.operation';
import {
	description as descriptioneasyHuntingHuntingAgentQueueDelete,
	execute as executeeasyHuntingHuntingAgentQueueDelete,
} from './easyHunting/easyHuntingHuntingAgentQueueDelete.operation';
import {
	description as descriptioneasyHuntingHuntingAgentQueueGet,
	execute as executeeasyHuntingHuntingAgentQueueGet,
} from './easyHunting/easyHuntingHuntingAgentQueueGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentQueueListGet,
	execute as executeeasyHuntingHuntingAgentQueueListGet,
} from './easyHunting/easyHuntingHuntingAgentQueueListGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentQueueLiveStatusListGet,
	execute as executeeasyHuntingHuntingAgentQueueLiveStatusListGet,
} from './easyHunting/easyHuntingHuntingAgentQueueLiveStatusListGet.operation';
import {
	description as descriptioneasyHuntingHuntingAgentQueuePost,
	execute as executeeasyHuntingHuntingAgentQueuePost,
} from './easyHunting/easyHuntingHuntingAgentQueuePost.operation';
import {
	description as descriptioneasyHuntingHuntingAgentQueuePut,
	execute as executeeasyHuntingHuntingAgentQueuePut,
} from './easyHunting/easyHuntingHuntingAgentQueuePut.operation';
import {
	description as descriptioneasyHuntingHuntingCustomStatusDelete,
	execute as executeeasyHuntingHuntingCustomStatusDelete,
} from './easyHunting/easyHuntingHuntingCustomStatusDelete.operation';
import {
	description as descriptioneasyHuntingHuntingCustomStatusGet,
	execute as executeeasyHuntingHuntingCustomStatusGet,
} from './easyHunting/easyHuntingHuntingCustomStatusGet.operation';
import {
	description as descriptioneasyHuntingHuntingCustomStatusListGet,
	execute as executeeasyHuntingHuntingCustomStatusListGet,
} from './easyHunting/easyHuntingHuntingCustomStatusListGet.operation';
import {
	description as descriptioneasyHuntingHuntingCustomStatusPost,
	execute as executeeasyHuntingHuntingCustomStatusPost,
} from './easyHunting/easyHuntingHuntingCustomStatusPost.operation';
import {
	description as descriptioneasyHuntingHuntingEventTokenDelete,
	execute as executeeasyHuntingHuntingEventTokenDelete,
} from './easyHunting/easyHuntingHuntingEventTokenDelete.operation';
import {
	description as descriptioneasyHuntingHuntingEventTokenListGet,
	execute as executeeasyHuntingHuntingEventTokenListGet,
} from './easyHunting/easyHuntingHuntingEventTokenListGet.operation';
import {
	description as descriptioneasyHuntingHuntingEventTokenPost,
	execute as executeeasyHuntingHuntingEventTokenPost,
} from './easyHunting/easyHuntingHuntingEventTokenPost.operation';
import {
	description as descriptioneasyHuntingHuntingListGet,
	execute as executeeasyHuntingHuntingListGet,
} from './easyHunting/easyHuntingHuntingListGet.operation';
import {
	description as descriptioneasyHuntingHuntingPut,
	execute as executeeasyHuntingHuntingPut,
} from './easyHunting/easyHuntingHuntingPut.operation';
import {
	description as descriptioneasyHuntingHuntingQueueAgentDelete,
	execute as executeeasyHuntingHuntingQueueAgentDelete,
} from './easyHunting/easyHuntingHuntingQueueAgentDelete.operation';
import {
	description as descriptioneasyHuntingHuntingQueueAgentGet,
	execute as executeeasyHuntingHuntingQueueAgentGet,
} from './easyHunting/easyHuntingHuntingQueueAgentGet.operation';
import {
	description as descriptioneasyHuntingHuntingQueueAgentListGet,
	execute as executeeasyHuntingHuntingQueueAgentListGet,
} from './easyHunting/easyHuntingHuntingQueueAgentListGet.operation';
import {
	description as descriptioneasyHuntingHuntingQueueAgentLiveStatusListGet,
	execute as executeeasyHuntingHuntingQueueAgentLiveStatusListGet,
} from './easyHunting/easyHuntingHuntingQueueAgentLiveStatusListGet.operation';
import {
	description as descriptioneasyHuntingHuntingQueueAgentPost,
	execute as executeeasyHuntingHuntingQueueAgentPost,
} from './easyHunting/easyHuntingHuntingQueueAgentPost.operation';
import {
	description as descriptioneasyHuntingHuntingQueueAgentPut,
	execute as executeeasyHuntingHuntingQueueAgentPut,
} from './easyHunting/easyHuntingHuntingQueueAgentPut.operation';
import {
	description as descriptioneasyHuntingHuntingQueueDelete,
	execute as executeeasyHuntingHuntingQueueDelete,
} from './easyHunting/easyHuntingHuntingQueueDelete.operation';
import {
	description as descriptioneasyHuntingHuntingQueueGet,
	execute as executeeasyHuntingHuntingQueueGet,
} from './easyHunting/easyHuntingHuntingQueueGet.operation';
import {
	description as descriptioneasyHuntingHuntingQueueListGet,
	execute as executeeasyHuntingHuntingQueueListGet,
} from './easyHunting/easyHuntingHuntingQueueListGet.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveCallsEavesdropPost,
	execute as executeeasyHuntingHuntingQueueLiveCallsEavesdropPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsEavesdropPost.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveCallsGet,
	execute as executeeasyHuntingHuntingQueueLiveCallsGet,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsGet.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveCallsHangupPost,
	execute as executeeasyHuntingHuntingQueueLiveCallsHangupPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsHangupPost.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveCallsHoldPost,
	execute as executeeasyHuntingHuntingQueueLiveCallsHoldPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsHoldPost.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveCallsInterceptPost,
	execute as executeeasyHuntingHuntingQueueLiveCallsInterceptPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsInterceptPost.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveCallsListGet,
	execute as executeeasyHuntingHuntingQueueLiveCallsListGet,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsListGet.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveCallsTransferPost,
	execute as executeeasyHuntingHuntingQueueLiveCallsTransferPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsTransferPost.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveCallsWhisperPost,
	execute as executeeasyHuntingHuntingQueueLiveCallsWhisperPost,
} from './easyHunting/easyHuntingHuntingQueueLiveCallsWhisperPost.operation';
import {
	description as descriptioneasyHuntingHuntingQueueLiveStatisticsListGet,
	execute as executeeasyHuntingHuntingQueueLiveStatisticsListGet,
} from './easyHunting/easyHuntingHuntingQueueLiveStatisticsListGet.operation';
import {
	description as descriptioneasyHuntingHuntingQueuePost,
	execute as executeeasyHuntingHuntingQueuePost,
} from './easyHunting/easyHuntingHuntingQueuePost.operation';
import {
	description as descriptioneasyHuntingHuntingQueuePut,
	execute as executeeasyHuntingHuntingQueuePut,
} from './easyHunting/easyHuntingHuntingQueuePut.operation';
import {
	description as descriptioneasyHuntingListGet,
	execute as executeeasyHuntingListGet,
} from './easyHunting/easyHuntingListGet.operation';
import {
	description as descriptioneasyHuntingPut,
	execute as executeeasyHuntingPut,
} from './easyHunting/easyHuntingPut.operation';
import {
	description as descriptioneasyHuntingRecordsDelete,
	execute as executeeasyHuntingRecordsDelete,
} from './easyHunting/easyHuntingRecordsDelete.operation';
import {
	description as descriptioneasyHuntingRecordsGet,
	execute as executeeasyHuntingRecordsGet,
} from './easyHunting/easyHuntingRecordsGet.operation';
import {
	description as descriptioneasyHuntingRecordsListGet,
	execute as executeeasyHuntingRecordsListGet,
} from './easyHunting/easyHuntingRecordsListGet.operation';
import {
	description as descriptioneasyHuntingScreenListConditionsConditionsDelete,
	execute as executeeasyHuntingScreenListConditionsConditionsDelete,
} from './easyHunting/easyHuntingScreenListConditionsConditionsDelete.operation';
import {
	description as descriptioneasyHuntingScreenListConditionsConditionsGet,
	execute as executeeasyHuntingScreenListConditionsConditionsGet,
} from './easyHunting/easyHuntingScreenListConditionsConditionsGet.operation';
import {
	description as descriptioneasyHuntingScreenListConditionsConditionsListGet,
	execute as executeeasyHuntingScreenListConditionsConditionsListGet,
} from './easyHunting/easyHuntingScreenListConditionsConditionsListGet.operation';
import {
	description as descriptioneasyHuntingScreenListConditionsConditionsPost,
	execute as executeeasyHuntingScreenListConditionsConditionsPost,
} from './easyHunting/easyHuntingScreenListConditionsConditionsPost.operation';
import {
	description as descriptioneasyHuntingScreenListConditionsConditionsPut,
	execute as executeeasyHuntingScreenListConditionsConditionsPut,
} from './easyHunting/easyHuntingScreenListConditionsConditionsPut.operation';
import {
	description as descriptioneasyHuntingScreenListConditionsListGet,
	execute as executeeasyHuntingScreenListConditionsListGet,
} from './easyHunting/easyHuntingScreenListConditionsListGet.operation';
import {
	description as descriptioneasyHuntingScreenListConditionsPut,
	execute as executeeasyHuntingScreenListConditionsPut,
} from './easyHunting/easyHuntingScreenListConditionsPut.operation';
import {
	description as descriptioneasyHuntingSoundDelete,
	execute as executeeasyHuntingSoundDelete,
} from './easyHunting/easyHuntingSoundDelete.operation';
import {
	description as descriptioneasyHuntingSoundGet,
	execute as executeeasyHuntingSoundGet,
} from './easyHunting/easyHuntingSoundGet.operation';
import {
	description as descriptioneasyHuntingSoundListGet,
	execute as executeeasyHuntingSoundListGet,
} from './easyHunting/easyHuntingSoundListGet.operation';
import {
	description as descriptioneasyHuntingSoundUploadPost,
	execute as executeeasyHuntingSoundUploadPost,
} from './easyHunting/easyHuntingSoundUploadPost.operation';
import {
	description as descriptioneasyHuntingTimeConditionsConditionsDelete,
	execute as executeeasyHuntingTimeConditionsConditionsDelete,
} from './easyHunting/easyHuntingTimeConditionsConditionsDelete.operation';
import {
	description as descriptioneasyHuntingTimeConditionsConditionsGet,
	execute as executeeasyHuntingTimeConditionsConditionsGet,
} from './easyHunting/easyHuntingTimeConditionsConditionsGet.operation';
import {
	description as descriptioneasyHuntingTimeConditionsConditionsListGet,
	execute as executeeasyHuntingTimeConditionsConditionsListGet,
} from './easyHunting/easyHuntingTimeConditionsConditionsListGet.operation';
import {
	description as descriptioneasyHuntingTimeConditionsConditionsPost,
	execute as executeeasyHuntingTimeConditionsConditionsPost,
} from './easyHunting/easyHuntingTimeConditionsConditionsPost.operation';
import {
	description as descriptioneasyHuntingTimeConditionsConditionsPut,
	execute as executeeasyHuntingTimeConditionsConditionsPut,
} from './easyHunting/easyHuntingTimeConditionsConditionsPut.operation';
import {
	description as descriptioneasyHuntingTimeConditionsListGet,
	execute as executeeasyHuntingTimeConditionsListGet,
} from './easyHunting/easyHuntingTimeConditionsListGet.operation';
import {
	description as descriptioneasyHuntingTimeConditionsPut,
	execute as executeeasyHuntingTimeConditionsPut,
} from './easyHunting/easyHuntingTimeConditionsPut.operation';
import {
	description as descriptioneventTokenDelete,
	execute as executeeventTokenDelete,
} from './eventToken/eventTokenDelete.operation';
import {
	description as descriptioneventTokenListGet,
	execute as executeeventTokenListGet,
} from './eventToken/eventTokenListGet.operation';
import {
	description as descriptioneventTokenPost,
	execute as executeeventTokenPost,
} from './eventToken/eventTokenPost.operation';
import {
	description as descriptionfaxCampaignsDelete,
	execute as executefaxCampaignsDelete,
} from './fax/faxCampaignsDelete.operation';
import {
	description as descriptionfaxCampaignsDetailListGet,
	execute as executefaxCampaignsDetailListGet,
} from './fax/faxCampaignsDetailListGet.operation';
import {
	description as descriptionfaxCampaignsGet,
	execute as executefaxCampaignsGet,
} from './fax/faxCampaignsGet.operation';
import {
	description as descriptionfaxCampaignsListGet,
	execute as executefaxCampaignsListGet,
} from './fax/faxCampaignsListGet.operation';
import {
	description as descriptionfaxCampaignsPost,
	execute as executefaxCampaignsPost,
} from './fax/faxCampaignsPost.operation';
import {
	description as descriptionfaxCampaignsStartPost,
	execute as executefaxCampaignsStartPost,
} from './fax/faxCampaignsStartPost.operation';
import {
	description as descriptionfaxCampaignsStopPost,
	execute as executefaxCampaignsStopPost,
} from './fax/faxCampaignsStopPost.operation';
import {
	description as descriptionfaxGet,
	execute as executefaxGet,
} from './fax/faxGet.operation';
import {
	description as descriptionfaxListGet,
	execute as executefaxListGet,
} from './fax/faxListGet.operation';
import {
	description as descriptionfaxPut,
	execute as executefaxPut,
} from './fax/faxPut.operation';
import {
	description as descriptionfaxScreenListsDelete,
	execute as executefaxScreenListsDelete,
} from './fax/faxScreenListsDelete.operation';
import {
	description as descriptionfaxScreenListsListGet,
	execute as executefaxScreenListsListGet,
} from './fax/faxScreenListsListGet.operation';
import {
	description as descriptionfaxScreenListsPost,
	execute as executefaxScreenListsPost,
} from './fax/faxScreenListsPost.operation';
import {
	description as descriptionfaxScreenListsPut,
	execute as executefaxScreenListsPut,
} from './fax/faxScreenListsPut.operation';
import {
	description as descriptionfaxScreenListsResetPost,
	execute as executefaxScreenListsResetPost,
} from './fax/faxScreenListsResetPost.operation';
import {
	description as descriptionfaxSettingsChangePasswordPost,
	execute as executefaxSettingsChangePasswordPost,
} from './fax/faxSettingsChangePasswordPost.operation';
import {
	description as descriptionfaxSettingsListGet,
	execute as executefaxSettingsListGet,
} from './fax/faxSettingsListGet.operation';
import {
	description as descriptionfaxSettingsPut,
	execute as executefaxSettingsPut,
} from './fax/faxSettingsPut.operation';
import {
	description as descriptionfaxSettingsSendFaxPost,
	execute as executefaxSettingsSendFaxPost,
} from './fax/faxSettingsSendFaxPost.operation';
import {
	description as descriptionhasSpecialNumbersListGet,
	execute as executehasSpecialNumbersListGet,
} from './hasSpecialNumbers/hasSpecialNumbersListGet.operation';
import {
	description as descriptionhistoryConsumptionFileListGet,
	execute as executehistoryConsumptionFileListGet,
} from './historyConsumption/historyConsumptionFileListGet.operation';
import {
	description as descriptionhistoryConsumptionGet,
	execute as executehistoryConsumptionGet,
} from './historyConsumption/historyConsumptionGet.operation';
import {
	description as descriptionhistoryConsumptionListGet,
	execute as executehistoryConsumptionListGet,
} from './historyConsumption/historyConsumptionListGet.operation';
import {
	description as descriptionhistoryRepaymentConsumptionDocumentListGet,
	execute as executehistoryRepaymentConsumptionDocumentListGet,
} from './historyRepaymentConsumption/historyRepaymentConsumptionDocumentListGet.operation';
import {
	description as descriptionhistoryRepaymentConsumptionGet,
	execute as executehistoryRepaymentConsumptionGet,
} from './historyRepaymentConsumption/historyRepaymentConsumptionGet.operation';
import {
	description as descriptionhistoryRepaymentConsumptionListGet,
	execute as executehistoryRepaymentConsumptionListGet,
} from './historyRepaymentConsumption/historyRepaymentConsumptionListGet.operation';
import {
	description as descriptionhistoryRepaymentConsumptionPost,
	execute as executehistoryRepaymentConsumptionPost,
} from './historyRepaymentConsumption/historyRepaymentConsumptionPost.operation';
import {
	description as descriptionhistoryTollfreeConsumptionDocumentListGet,
	execute as executehistoryTollfreeConsumptionDocumentListGet,
} from './historyTollfreeConsumption/historyTollfreeConsumptionDocumentListGet.operation';
import {
	description as descriptionhistoryTollfreeConsumptionGet,
	execute as executehistoryTollfreeConsumptionGet,
} from './historyTollfreeConsumption/historyTollfreeConsumptionGet.operation';
import {
	description as descriptionhistoryTollfreeConsumptionListGet,
	execute as executehistoryTollfreeConsumptionListGet,
} from './historyTollfreeConsumption/historyTollfreeConsumptionListGet.operation';
import {
	description as descriptionlineAbbreviatedNumberDelete,
	execute as executelineAbbreviatedNumberDelete,
} from './line/lineAbbreviatedNumberDelete.operation';
import {
	description as descriptionlineAbbreviatedNumberGet,
	execute as executelineAbbreviatedNumberGet,
} from './line/lineAbbreviatedNumberGet.operation';
import {
	description as descriptionlineAbbreviatedNumberListGet,
	execute as executelineAbbreviatedNumberListGet,
} from './line/lineAbbreviatedNumberListGet.operation';
import {
	description as descriptionlineAbbreviatedNumberPost,
	execute as executelineAbbreviatedNumberPost,
} from './line/lineAbbreviatedNumberPost.operation';
import {
	description as descriptionlineAbbreviatedNumberPut,
	execute as executelineAbbreviatedNumberPut,
} from './line/lineAbbreviatedNumberPut.operation';
import {
	description as descriptionlineActivateNewPhoneListGet,
	execute as executelineActivateNewPhoneListGet,
} from './line/lineActivateNewPhoneListGet.operation';
import {
	description as descriptionlineActivateNewPhonePost,
	execute as executelineActivateNewPhonePost,
} from './line/lineActivateNewPhonePost.operation';
import {
	description as descriptionlineAntihackListGet,
	execute as executelineAntihackListGet,
} from './line/lineAntihackListGet.operation';
import {
	description as descriptionlineAntihackPost,
	execute as executelineAntihackPost,
} from './line/lineAntihackPost.operation';
import {
	description as descriptionlineAssociateDevicePost,
	execute as executelineAssociateDevicePost,
} from './line/lineAssociateDevicePost.operation';
import {
	description as descriptionlineAutomaticCallGet,
	execute as executelineAutomaticCallGet,
} from './line/lineAutomaticCallGet.operation';
import {
	description as descriptionlineAutomaticCallListGet,
	execute as executelineAutomaticCallListGet,
} from './line/lineAutomaticCallListGet.operation';
import {
	description as descriptionlineAutomaticCallPost,
	execute as executelineAutomaticCallPost,
} from './line/lineAutomaticCallPost.operation';
import {
	description as descriptionlineAvailableSipDomainsListGet,
	execute as executelineAvailableSipDomainsListGet,
} from './line/lineAvailableSipDomainsListGet.operation';
import {
	description as descriptionlineBlockPost,
	execute as executelineBlockPost,
} from './line/lineBlockPost.operation';
import {
	description as descriptionlineCallsEavesdropPost,
	execute as executelineCallsEavesdropPost,
} from './line/lineCallsEavesdropPost.operation';
import {
	description as descriptionlineCallsGet,
	execute as executelineCallsGet,
} from './line/lineCallsGet.operation';
import {
	description as descriptionlineCallsHangupPost,
	execute as executelineCallsHangupPost,
} from './line/lineCallsHangupPost.operation';
import {
	description as descriptionlineCallsHoldPost,
	execute as executelineCallsHoldPost,
} from './line/lineCallsHoldPost.operation';
import {
	description as descriptionlineCallsInterceptPost,
	execute as executelineCallsInterceptPost,
} from './line/lineCallsInterceptPost.operation';
import {
	description as descriptionlineCallsListGet,
	execute as executelineCallsListGet,
} from './line/lineCallsListGet.operation';
import {
	description as descriptionlineCallsTransferPost,
	execute as executelineCallsTransferPost,
} from './line/lineCallsTransferPost.operation';
import {
	description as descriptionlineCallsWhisperPost,
	execute as executelineCallsWhisperPost,
} from './line/lineCallsWhisperPost.operation';
import {
	description as descriptionlineCanChangePasswordListGet,
	execute as executelineCanChangePasswordListGet,
} from './line/lineCanChangePasswordListGet.operation';
import {
	description as descriptionlineCancelConvertToNumberPost,
	execute as executelineCancelConvertToNumberPost,
} from './line/lineCancelConvertToNumberPost.operation';
import {
	description as descriptionlineChangePasswordPost,
	execute as executelineChangePasswordPost,
} from './line/lineChangePasswordPost.operation';
import {
	description as descriptionlineClick2CallPost,
	execute as executelineClick2CallPost,
} from './line/lineClick2CallPost.operation';
import {
	description as descriptionlineClick2CallUserChangePasswordPost,
	execute as executelineClick2CallUserChangePasswordPost,
} from './line/lineClick2CallUserChangePasswordPost.operation';
import {
	description as descriptionlineClick2CallUserClick2CallPost,
	execute as executelineClick2CallUserClick2CallPost,
} from './line/lineClick2CallUserClick2CallPost.operation';
import {
	description as descriptionlineClick2CallUserDelete,
	execute as executelineClick2CallUserDelete,
} from './line/lineClick2CallUserDelete.operation';
import {
	description as descriptionlineClick2CallUserGet,
	execute as executelineClick2CallUserGet,
} from './line/lineClick2CallUserGet.operation';
import {
	description as descriptionlineClick2CallUserListGet,
	execute as executelineClick2CallUserListGet,
} from './line/lineClick2CallUserListGet.operation';
import {
	description as descriptionlineClick2CallUserPost,
	execute as executelineClick2CallUserPost,
} from './line/lineClick2CallUserPost.operation';
import {
	description as descriptionlineConvertToNumberPost,
	execute as executelineConvertToNumberPost,
} from './line/lineConvertToNumberPost.operation';
import {
	description as descriptionlineDissociateDevicePost,
	execute as executelineDissociateDevicePost,
} from './line/lineDissociateDevicePost.operation';
import {
	description as descriptionlineGet,
	execute as executelineGet,
} from './line/lineGet.operation';
import {
	description as descriptionlineIpsListGet,
	execute as executelineIpsListGet,
} from './line/lineIpsListGet.operation';
import {
	description as descriptionlineLastRegistrationsListGet,
	execute as executelineLastRegistrationsListGet,
} from './line/lineLastRegistrationsListGet.operation';
import {
	description as descriptionlineListAssociablePhonesListGet,
	execute as executelineListAssociablePhonesListGet,
} from './line/lineListAssociablePhonesListGet.operation';
import {
	description as descriptionlineListGet,
	execute as executelineListGet,
} from './line/lineListGet.operation';
import {
	description as descriptionlineMaximumAvailableSimultaneousLinesListGet,
	execute as executelineMaximumAvailableSimultaneousLinesListGet,
} from './line/lineMaximumAvailableSimultaneousLinesListGet.operation';
import {
	description as descriptionlineOfferListGet,
	execute as executelineOfferListGet,
} from './line/lineOfferListGet.operation';
import {
	description as descriptionlineOptionsAvailableCodecsListGet,
	execute as executelineOptionsAvailableCodecsListGet,
} from './line/lineOptionsAvailableCodecsListGet.operation';
import {
	description as descriptionlineOptionsDefaultCodecsListGet,
	execute as executelineOptionsDefaultCodecsListGet,
} from './line/lineOptionsDefaultCodecsListGet.operation';
import {
	description as descriptionlineOptionsListGet,
	execute as executelineOptionsListGet,
} from './line/lineOptionsListGet.operation';
import {
	description as descriptionlineOptionsPut,
	execute as executelineOptionsPut,
} from './line/lineOptionsPut.operation';
import {
	description as descriptionlinePhoneAdminCredentialsListGet,
	execute as executelinePhoneAdminCredentialsListGet,
} from './line/linePhoneAdminCredentialsListGet.operation';
import {
	description as descriptionlinePhoneCanBeAssociableListGet,
	execute as executelinePhoneCanBeAssociableListGet,
} from './line/linePhoneCanBeAssociableListGet.operation';
import {
	description as descriptionlinePhoneChangePhoneConfigurationPost,
	execute as executelinePhoneChangePhoneConfigurationPost,
} from './line/linePhoneChangePhoneConfigurationPost.operation';
import {
	description as descriptionlinePhoneFunctionKeyAvailableFunctionListGet,
	execute as executelinePhoneFunctionKeyAvailableFunctionListGet,
} from './line/linePhoneFunctionKeyAvailableFunctionListGet.operation';
import {
	description as descriptionlinePhoneFunctionKeyGet,
	execute as executelinePhoneFunctionKeyGet,
} from './line/linePhoneFunctionKeyGet.operation';
import {
	description as descriptionlinePhoneFunctionKeyListGet,
	execute as executelinePhoneFunctionKeyListGet,
} from './line/linePhoneFunctionKeyListGet.operation';
import {
	description as descriptionlinePhoneFunctionKeyPut,
	execute as executelinePhoneFunctionKeyPut,
} from './line/linePhoneFunctionKeyPut.operation';
import {
	description as descriptionlinePhoneListGet,
	execute as executelinePhoneListGet,
} from './line/linePhoneListGet.operation';
import {
	description as descriptionlinePhoneMerchandiseAvailableListGet,
	execute as executelinePhoneMerchandiseAvailableListGet,
} from './line/linePhoneMerchandiseAvailableListGet.operation';
import {
	description as descriptionlinePhonePhonebookDelete,
	execute as executelinePhonePhonebookDelete,
} from './line/linePhonePhonebookDelete.operation';
import {
	description as descriptionlinePhonePhonebookExportListGet,
	execute as executelinePhonePhonebookExportListGet,
} from './line/linePhonePhonebookExportListGet.operation';
import {
	description as descriptionlinePhonePhonebookGet,
	execute as executelinePhonePhonebookGet,
} from './line/linePhonePhonebookGet.operation';
import {
	description as descriptionlinePhonePhonebookImportPost,
	execute as executelinePhonePhonebookImportPost,
} from './line/linePhonePhonebookImportPost.operation';
import {
	description as descriptionlinePhonePhonebookListGet,
	execute as executelinePhonePhonebookListGet,
} from './line/linePhonePhonebookListGet.operation';
import {
	description as descriptionlinePhonePhonebookPhonebookContactDelete,
	execute as executelinePhonePhonebookPhonebookContactDelete,
} from './line/linePhonePhonebookPhonebookContactDelete.operation';
import {
	description as descriptionlinePhonePhonebookPhonebookContactGet,
	execute as executelinePhonePhonebookPhonebookContactGet,
} from './line/linePhonePhonebookPhonebookContactGet.operation';
import {
	description as descriptionlinePhonePhonebookPhonebookContactListGet,
	execute as executelinePhonePhonebookPhonebookContactListGet,
} from './line/linePhonePhonebookPhonebookContactListGet.operation';
import {
	description as descriptionlinePhonePhonebookPhonebookContactPost,
	execute as executelinePhonePhonebookPhonebookContactPost,
} from './line/linePhonePhonebookPhonebookContactPost.operation';
import {
	description as descriptionlinePhonePhonebookPhonebookContactPut,
	execute as executelinePhonePhonebookPhonebookContactPut,
} from './line/linePhonePhonebookPhonebookContactPut.operation';
import {
	description as descriptionlinePhonePhonebookPost,
	execute as executelinePhonePhonebookPost,
} from './line/linePhonePhonebookPost.operation';
import {
	description as descriptionlinePhonePhonebookPut,
	execute as executelinePhonePhonebookPut,
} from './line/linePhonePhonebookPut.operation';
import {
	description as descriptionlinePhonePut,
	execute as executelinePhonePut,
} from './line/linePhonePut.operation';
import {
	description as descriptionlinePhoneRebootPost,
	execute as executelinePhoneRebootPost,
} from './line/linePhoneRebootPost.operation';
import {
	description as descriptionlinePhoneRefreshScreenPost,
	execute as executelinePhoneRefreshScreenPost,
} from './line/linePhoneRefreshScreenPost.operation';
import {
	description as descriptionlinePhoneResetConfigPost,
	execute as executelinePhoneResetConfigPost,
} from './line/linePhoneResetConfigPost.operation';
import {
	description as descriptionlinePhoneRmaChangeTypePost,
	execute as executelinePhoneRmaChangeTypePost,
} from './line/linePhoneRmaChangeTypePost.operation';
import {
	description as descriptionlinePhoneRmaDelete,
	execute as executelinePhoneRmaDelete,
} from './line/linePhoneRmaDelete.operation';
import {
	description as descriptionlinePhoneRmaGet,
	execute as executelinePhoneRmaGet,
} from './line/linePhoneRmaGet.operation';
import {
	description as descriptionlinePhoneRmaListGet,
	execute as executelinePhoneRmaListGet,
} from './line/linePhoneRmaListGet.operation';
import {
	description as descriptionlinePhoneRmaPost,
	execute as executelinePhoneRmaPost,
} from './line/linePhoneRmaPost.operation';
import {
	description as descriptionlinePhoneRmaPut,
	execute as executelinePhoneRmaPut,
} from './line/linePhoneRmaPut.operation';
import {
	description as descriptionlinePhoneSupportsPhonebookListGet,
	execute as executelinePhoneSupportsPhonebookListGet,
} from './line/linePhoneSupportsPhonebookListGet.operation';
import {
	description as descriptionlinePut,
	execute as executelinePut,
} from './line/linePut.operation';
import {
	description as descriptionlineRecordsDelete,
	execute as executelineRecordsDelete,
} from './line/lineRecordsDelete.operation';
import {
	description as descriptionlineRecordsGet,
	execute as executelineRecordsGet,
} from './line/lineRecordsGet.operation';
import {
	description as descriptionlineRecordsListGet,
	execute as executelineRecordsListGet,
} from './line/lineRecordsListGet.operation';
import {
	description as descriptionlineRemoveSimultaneousLinesPost,
	execute as executelineRemoveSimultaneousLinesPost,
} from './line/lineRemoveSimultaneousLinesPost.operation';
import {
	description as descriptionlineSimultaneousChannelsDetailsListGet,
	execute as executelineSimultaneousChannelsDetailsListGet,
} from './line/lineSimultaneousChannelsDetailsListGet.operation';
import {
	description as descriptionlineSoftphoneBetaListGet,
	execute as executelineSoftphoneBetaListGet,
} from './line/lineSoftphoneBetaListGet.operation';
import {
	description as descriptionlineSoftphoneBetaPut,
	execute as executelineSoftphoneBetaPut,
} from './line/lineSoftphoneBetaPut.operation';
import {
	description as descriptionlineSoftphoneDevicesDelete,
	execute as executelineSoftphoneDevicesDelete,
} from './line/lineSoftphoneDevicesDelete.operation';
import {
	description as descriptionlineSoftphoneDevicesDisconnectPost,
	execute as executelineSoftphoneDevicesDisconnectPost,
} from './line/lineSoftphoneDevicesDisconnectPost.operation';
import {
	description as descriptionlineSoftphoneDevicesListGet,
	execute as executelineSoftphoneDevicesListGet,
} from './line/lineSoftphoneDevicesListGet.operation';
import {
	description as descriptionlineSoftphoneLogoDelete,
	execute as executelineSoftphoneLogoDelete,
} from './line/lineSoftphoneLogoDelete.operation';
import {
	description as descriptionlineSoftphoneLogoListGet,
	execute as executelineSoftphoneLogoListGet,
} from './line/lineSoftphoneLogoListGet.operation';
import {
	description as descriptionlineSoftphoneLogoPut,
	execute as executelineSoftphoneLogoPut,
} from './line/lineSoftphoneLogoPut.operation';
import {
	description as descriptionlineSoftphoneStatusListGet,
	execute as executelineSoftphoneStatusListGet,
} from './line/lineSoftphoneStatusListGet.operation';
import {
	description as descriptionlineSoftphoneThemeDelete,
	execute as executelineSoftphoneThemeDelete,
} from './line/lineSoftphoneThemeDelete.operation';
import {
	description as descriptionlineSoftphoneThemeListGet,
	execute as executelineSoftphoneThemeListGet,
} from './line/lineSoftphoneThemeListGet.operation';
import {
	description as descriptionlineSoftphoneThemePut,
	execute as executelineSoftphoneThemePut,
} from './line/lineSoftphoneThemePut.operation';
import {
	description as descriptionlineSoftphoneTokenPost,
	execute as executelineSoftphoneTokenPost,
} from './line/lineSoftphoneTokenPost.operation';
import {
	description as descriptionlineStatisticsListGet,
	execute as executelineStatisticsListGet,
} from './line/lineStatisticsListGet.operation';
import {
	description as descriptionlineTonesListGet,
	execute as executelineTonesListGet,
} from './line/lineTonesListGet.operation';
import {
	description as descriptionlineTonesPut,
	execute as executelineTonesPut,
} from './line/lineTonesPut.operation';
import {
	description as descriptionlineTonesToneUploadPost,
	execute as executelineTonesToneUploadPost,
} from './line/lineTonesToneUploadPost.operation';
import {
	description as descriptionlineTrafficExtractsDelete,
	execute as executelineTrafficExtractsDelete,
} from './line/lineTrafficExtractsDelete.operation';
import {
	description as descriptionlineTrafficExtractsGet,
	execute as executelineTrafficExtractsGet,
} from './line/lineTrafficExtractsGet.operation';
import {
	description as descriptionlineTrafficExtractsListGet,
	execute as executelineTrafficExtractsListGet,
} from './line/lineTrafficExtractsListGet.operation';
import {
	description as descriptionlineTrafficExtractsPost,
	execute as executelineTrafficExtractsPost,
} from './line/lineTrafficExtractsPost.operation';
import {
	description as descriptionlineUnblockPost,
	execute as executelineUnblockPost,
} from './line/lineUnblockPost.operation';
import {
	description as descriptionLinesGet,
	execute as executeLinesGet,
} from './lines/linesGet.operation';
import {
	description as descriptionLinesHardwareListGet,
	execute as executeLinesHardwareListGet,
} from './lines/linesHardwareListGet.operation';
import {
	description as descriptionLinesHardwarePost,
	execute as executeLinesHardwarePost,
} from './lines/linesHardwarePost.operation';
import {
	description as descriptionLinesListGet,
	execute as executeLinesListGet,
} from './lines/linesListGet.operation';
import {
	description as descriptionLinesNumberDelete,
	execute as executeLinesNumberDelete,
} from './lines/linesNumberDelete.operation';
import {
	description as descriptionLinesNumberGet,
	execute as executeLinesNumberGet,
} from './lines/linesNumberGet.operation';
import {
	description as descriptionLinesNumberListGet,
	execute as executeLinesNumberListGet,
} from './lines/linesNumberListGet.operation';
import {
	description as descriptionLinesNumberPost,
	execute as executeLinesNumberPost,
} from './lines/linesNumberPost.operation';
import {
	description as descriptionLinesNumberPut,
	execute as executeLinesNumberPut,
} from './lines/linesNumberPut.operation';
import {
	description as descriptionLinesPortabilityDelete,
	execute as executeLinesPortabilityDelete,
} from './lines/linesPortabilityDelete.operation';
import {
	description as descriptionLinesPortabilityGet,
	execute as executeLinesPortabilityGet,
} from './lines/linesPortabilityGet.operation';
import {
	description as descriptionLinesPortabilityListGet,
	execute as executeLinesPortabilityListGet,
} from './lines/linesPortabilityListGet.operation';
import {
	description as descriptionLinesPortabilityPost,
	execute as executeLinesPortabilityPost,
} from './lines/linesPortabilityPost.operation';
import {
	description as descriptionLinesPortabilityPut,
	execute as executeLinesPortabilityPut,
} from './lines/linesPortabilityPut.operation';
import {
	description as descriptionLinesServiceInfosGet,
	execute as executeLinesServiceInfosGet,
} from './lines/linesServiceInfosGet.operation';
import {
	description as descriptionLinesServiceInfosPut,
	execute as executeLinesServiceInfosPut,
} from './lines/linesServiceInfosPut.operation';
import {
	description as descriptionLinesSimDelete,
	execute as executeLinesSimDelete,
} from './lines/linesSimDelete.operation';
import {
	description as descriptionLinesSimGet,
	execute as executeLinesSimGet,
} from './lines/linesSimGet.operation';
import {
	description as descriptionLinesSimListGet,
	execute as executeLinesSimListGet,
} from './lines/linesSimListGet.operation';
import {
	description as descriptionLinesSimPost,
	execute as executeLinesSimPost,
} from './lines/linesSimPost.operation';
import {
	description as descriptionLinesSimPut,
	execute as executeLinesSimPut,
} from './lines/linesSimPut.operation';
import {
	description as descriptionCurrentOrderIdsGet,
	execute as executeCurrentOrderIdsGet,
} from './misc/currentOrderIdsGet.operation';
import {
	description as descriptionSearchServicesGet,
	execute as executeSearchServicesGet,
} from './misc/searchServicesGet.operation';
import {
	description as descriptionSetDefaultSipDomainPost,
	execute as executeSetDefaultSipDomainPost,
} from './misc/setDefaultSipDomainPost.operation';
import {
	description as descriptionSipDomainsGet,
	execute as executeSipDomainsGet,
} from './misc/sipDomainsGet.operation';
import {
	description as descriptionTelephonyListGet,
	execute as executeTelephonyListGet,
} from './misc/telephonyListGet.operation';
import {
	description as descriptionnumberCancelConvertToLinePost,
	execute as executenumberCancelConvertToLinePost,
} from './number/numberCancelConvertToLinePost.operation';
import {
	description as descriptionnumberChangeFeatureTypePost,
	execute as executenumberChangeFeatureTypePost,
} from './number/numberChangeFeatureTypePost.operation';
import {
	description as descriptionnumberConvertToLineAvailableOffersListGet,
	execute as executenumberConvertToLineAvailableOffersListGet,
} from './number/numberConvertToLineAvailableOffersListGet.operation';
import {
	description as descriptionnumberConvertToLinePost,
	execute as executenumberConvertToLinePost,
} from './number/numberConvertToLinePost.operation';
import {
	description as descriptionnumberDetailedZonesListGet,
	execute as executenumberDetailedZonesListGet,
} from './number/numberDetailedZonesListGet.operation';
import {
	description as descriptionnumberGet,
	execute as executenumberGet,
} from './number/numberGet.operation';
import {
	description as descriptionnumberListGet,
	execute as executenumberListGet,
} from './number/numberListGet.operation';
import {
	description as descriptionnumberPut,
	execute as executenumberPut,
} from './number/numberPut.operation';
import {
	description as descriptionnumberRangesListGet,
	execute as executenumberRangesListGet,
} from './number/numberRangesListGet.operation';
import {
	description as descriptionnumberSpecificNumbersListGet,
	execute as executenumberSpecificNumbersListGet,
} from './number/numberSpecificNumbersListGet.operation';
import {
	description as descriptionnumberZonesListGet,
	execute as executenumberZonesListGet,
} from './number/numberZonesListGet.operation';
import {
	description as descriptionofferTaskGet,
	execute as executeofferTaskGet,
} from './offerTask/offerTaskGet.operation';
import {
	description as descriptionofferTaskListGet,
	execute as executeofferTaskListGet,
} from './offerTask/offerTaskListGet.operation';
import {
	description as descriptionofferTaskPut,
	execute as executeofferTaskPut,
} from './offerTask/offerTaskPut.operation';
import {
	description as descriptionFaxOffersGet,
	execute as executeFaxOffersGet,
} from './offers/faxOffersGet.operation';
import {
	description as descriptionLineOfferDetailsGet,
	execute as executeLineOfferDetailsGet,
} from './offers/lineOfferDetailsGet.operation';
import {
	description as descriptionLineOfferPhonesGet,
	execute as executeLineOfferPhonesGet,
} from './offers/lineOfferPhonesGet.operation';
import {
	description as descriptionLineOffersGet,
	execute as executeLineOffersGet,
} from './offers/lineOffersGet.operation';
import {
	description as descriptionoldPhoneListGet,
	execute as executeoldPhoneListGet,
} from './oldPhone/oldPhoneListGet.operation';
import {
	description as descriptionoutplanNotificationDelete,
	execute as executeoutplanNotificationDelete,
} from './outplanNotification/outplanNotificationDelete.operation';
import {
	description as descriptionoutplanNotificationGet,
	execute as executeoutplanNotificationGet,
} from './outplanNotification/outplanNotificationGet.operation';
import {
	description as descriptionoutplanNotificationListGet,
	execute as executeoutplanNotificationListGet,
} from './outplanNotification/outplanNotificationListGet.operation';
import {
	description as descriptionoutplanNotificationPost,
	execute as executeoutplanNotificationPost,
} from './outplanNotification/outplanNotificationPost.operation';
import {
	description as descriptionovhPabxDialplanDelete,
	execute as executeovhPabxDialplanDelete,
} from './ovhPabx/ovhPabxDialplanDelete.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionScreenListDelete,
	execute as executeovhPabxDialplanExtensionConditionScreenListDelete,
} from './ovhPabx/ovhPabxDialplanExtensionConditionScreenListDelete.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionScreenListGet,
	execute as executeovhPabxDialplanExtensionConditionScreenListGet,
} from './ovhPabx/ovhPabxDialplanExtensionConditionScreenListGet.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionScreenListListGet,
	execute as executeovhPabxDialplanExtensionConditionScreenListListGet,
} from './ovhPabx/ovhPabxDialplanExtensionConditionScreenListListGet.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionScreenListPost,
	execute as executeovhPabxDialplanExtensionConditionScreenListPost,
} from './ovhPabx/ovhPabxDialplanExtensionConditionScreenListPost.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionTimeDelete,
	execute as executeovhPabxDialplanExtensionConditionTimeDelete,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimeDelete.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionTimeGet,
	execute as executeovhPabxDialplanExtensionConditionTimeGet,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimeGet.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionTimeListGet,
	execute as executeovhPabxDialplanExtensionConditionTimeListGet,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimeListGet.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionTimePost,
	execute as executeovhPabxDialplanExtensionConditionTimePost,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimePost.operation';
import {
	description as descriptionovhPabxDialplanExtensionConditionTimePut,
	execute as executeovhPabxDialplanExtensionConditionTimePut,
} from './ovhPabx/ovhPabxDialplanExtensionConditionTimePut.operation';
import {
	description as descriptionovhPabxDialplanExtensionDelete,
	execute as executeovhPabxDialplanExtensionDelete,
} from './ovhPabx/ovhPabxDialplanExtensionDelete.operation';
import {
	description as descriptionovhPabxDialplanExtensionGet,
	execute as executeovhPabxDialplanExtensionGet,
} from './ovhPabx/ovhPabxDialplanExtensionGet.operation';
import {
	description as descriptionovhPabxDialplanExtensionListGet,
	execute as executeovhPabxDialplanExtensionListGet,
} from './ovhPabx/ovhPabxDialplanExtensionListGet.operation';
import {
	description as descriptionovhPabxDialplanExtensionPost,
	execute as executeovhPabxDialplanExtensionPost,
} from './ovhPabx/ovhPabxDialplanExtensionPost.operation';
import {
	description as descriptionovhPabxDialplanExtensionPut,
	execute as executeovhPabxDialplanExtensionPut,
} from './ovhPabx/ovhPabxDialplanExtensionPut.operation';
import {
	description as descriptionovhPabxDialplanExtensionRuleDelete,
	execute as executeovhPabxDialplanExtensionRuleDelete,
} from './ovhPabx/ovhPabxDialplanExtensionRuleDelete.operation';
import {
	description as descriptionovhPabxDialplanExtensionRuleGet,
	execute as executeovhPabxDialplanExtensionRuleGet,
} from './ovhPabx/ovhPabxDialplanExtensionRuleGet.operation';
import {
	description as descriptionovhPabxDialplanExtensionRuleListGet,
	execute as executeovhPabxDialplanExtensionRuleListGet,
} from './ovhPabx/ovhPabxDialplanExtensionRuleListGet.operation';
import {
	description as descriptionovhPabxDialplanExtensionRulePost,
	execute as executeovhPabxDialplanExtensionRulePost,
} from './ovhPabx/ovhPabxDialplanExtensionRulePost.operation';
import {
	description as descriptionovhPabxDialplanExtensionRulePut,
	execute as executeovhPabxDialplanExtensionRulePut,
} from './ovhPabx/ovhPabxDialplanExtensionRulePut.operation';
import {
	description as descriptionovhPabxDialplanGet,
	execute as executeovhPabxDialplanGet,
} from './ovhPabx/ovhPabxDialplanGet.operation';
import {
	description as descriptionovhPabxDialplanListGet,
	execute as executeovhPabxDialplanListGet,
} from './ovhPabx/ovhPabxDialplanListGet.operation';
import {
	description as descriptionovhPabxDialplanPost,
	execute as executeovhPabxDialplanPost,
} from './ovhPabx/ovhPabxDialplanPost.operation';
import {
	description as descriptionovhPabxDialplanPut,
	execute as executeovhPabxDialplanPut,
} from './ovhPabx/ovhPabxDialplanPut.operation';
import {
	description as descriptionovhPabxGet,
	execute as executeovhPabxGet,
} from './ovhPabx/ovhPabxGet.operation';
import {
	description as descriptionovhPabxHuntingAgentBannerAccessDelete,
	execute as executeovhPabxHuntingAgentBannerAccessDelete,
} from './ovhPabx/ovhPabxHuntingAgentBannerAccessDelete.operation';
import {
	description as descriptionovhPabxHuntingAgentBannerAccessListGet,
	execute as executeovhPabxHuntingAgentBannerAccessListGet,
} from './ovhPabx/ovhPabxHuntingAgentBannerAccessListGet.operation';
import {
	description as descriptionovhPabxHuntingAgentBannerAccessPost,
	execute as executeovhPabxHuntingAgentBannerAccessPost,
} from './ovhPabx/ovhPabxHuntingAgentBannerAccessPost.operation';
import {
	description as descriptionovhPabxHuntingAgentCallsEavesdropPost,
	execute as executeovhPabxHuntingAgentCallsEavesdropPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsEavesdropPost.operation';
import {
	description as descriptionovhPabxHuntingAgentCallsGet,
	execute as executeovhPabxHuntingAgentCallsGet,
} from './ovhPabx/ovhPabxHuntingAgentCallsGet.operation';
import {
	description as descriptionovhPabxHuntingAgentCallsHangupPost,
	execute as executeovhPabxHuntingAgentCallsHangupPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsHangupPost.operation';
import {
	description as descriptionovhPabxHuntingAgentCallsHoldPost,
	execute as executeovhPabxHuntingAgentCallsHoldPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsHoldPost.operation';
import {
	description as descriptionovhPabxHuntingAgentCallsInterceptPost,
	execute as executeovhPabxHuntingAgentCallsInterceptPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsInterceptPost.operation';
import {
	description as descriptionovhPabxHuntingAgentCallsListGet,
	execute as executeovhPabxHuntingAgentCallsListGet,
} from './ovhPabx/ovhPabxHuntingAgentCallsListGet.operation';
import {
	description as descriptionovhPabxHuntingAgentCallsTransferPost,
	execute as executeovhPabxHuntingAgentCallsTransferPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsTransferPost.operation';
import {
	description as descriptionovhPabxHuntingAgentCallsWhisperPost,
	execute as executeovhPabxHuntingAgentCallsWhisperPost,
} from './ovhPabx/ovhPabxHuntingAgentCallsWhisperPost.operation';
import {
	description as descriptionovhPabxHuntingAgentDelete,
	execute as executeovhPabxHuntingAgentDelete,
} from './ovhPabx/ovhPabxHuntingAgentDelete.operation';
import {
	description as descriptionovhPabxHuntingAgentEventTokenDelete,
	execute as executeovhPabxHuntingAgentEventTokenDelete,
} from './ovhPabx/ovhPabxHuntingAgentEventTokenDelete.operation';
import {
	description as descriptionovhPabxHuntingAgentEventTokenListGet,
	execute as executeovhPabxHuntingAgentEventTokenListGet,
} from './ovhPabx/ovhPabxHuntingAgentEventTokenListGet.operation';
import {
	description as descriptionovhPabxHuntingAgentEventTokenPost,
	execute as executeovhPabxHuntingAgentEventTokenPost,
} from './ovhPabx/ovhPabxHuntingAgentEventTokenPost.operation';
import {
	description as descriptionovhPabxHuntingAgentGet,
	execute as executeovhPabxHuntingAgentGet,
} from './ovhPabx/ovhPabxHuntingAgentGet.operation';
import {
	description as descriptionovhPabxHuntingAgentListGet,
	execute as executeovhPabxHuntingAgentListGet,
} from './ovhPabx/ovhPabxHuntingAgentListGet.operation';
import {
	description as descriptionovhPabxHuntingAgentLiveStatusListGet,
	execute as executeovhPabxHuntingAgentLiveStatusListGet,
} from './ovhPabx/ovhPabxHuntingAgentLiveStatusListGet.operation';
import {
	description as descriptionovhPabxHuntingAgentPost,
	execute as executeovhPabxHuntingAgentPost,
} from './ovhPabx/ovhPabxHuntingAgentPost.operation';
import {
	description as descriptionovhPabxHuntingAgentPut,
	execute as executeovhPabxHuntingAgentPut,
} from './ovhPabx/ovhPabxHuntingAgentPut.operation';
import {
	description as descriptionovhPabxHuntingAgentQueueDelete,
	execute as executeovhPabxHuntingAgentQueueDelete,
} from './ovhPabx/ovhPabxHuntingAgentQueueDelete.operation';
import {
	description as descriptionovhPabxHuntingAgentQueueGet,
	execute as executeovhPabxHuntingAgentQueueGet,
} from './ovhPabx/ovhPabxHuntingAgentQueueGet.operation';
import {
	description as descriptionovhPabxHuntingAgentQueueListGet,
	execute as executeovhPabxHuntingAgentQueueListGet,
} from './ovhPabx/ovhPabxHuntingAgentQueueListGet.operation';
import {
	description as descriptionovhPabxHuntingAgentQueueLiveStatusListGet,
	execute as executeovhPabxHuntingAgentQueueLiveStatusListGet,
} from './ovhPabx/ovhPabxHuntingAgentQueueLiveStatusListGet.operation';
import {
	description as descriptionovhPabxHuntingAgentQueuePost,
	execute as executeovhPabxHuntingAgentQueuePost,
} from './ovhPabx/ovhPabxHuntingAgentQueuePost.operation';
import {
	description as descriptionovhPabxHuntingAgentQueuePut,
	execute as executeovhPabxHuntingAgentQueuePut,
} from './ovhPabx/ovhPabxHuntingAgentQueuePut.operation';
import {
	description as descriptionovhPabxHuntingCustomStatusDelete,
	execute as executeovhPabxHuntingCustomStatusDelete,
} from './ovhPabx/ovhPabxHuntingCustomStatusDelete.operation';
import {
	description as descriptionovhPabxHuntingCustomStatusGet,
	execute as executeovhPabxHuntingCustomStatusGet,
} from './ovhPabx/ovhPabxHuntingCustomStatusGet.operation';
import {
	description as descriptionovhPabxHuntingCustomStatusListGet,
	execute as executeovhPabxHuntingCustomStatusListGet,
} from './ovhPabx/ovhPabxHuntingCustomStatusListGet.operation';
import {
	description as descriptionovhPabxHuntingCustomStatusPost,
	execute as executeovhPabxHuntingCustomStatusPost,
} from './ovhPabx/ovhPabxHuntingCustomStatusPost.operation';
import {
	description as descriptionovhPabxHuntingEventTokenDelete,
	execute as executeovhPabxHuntingEventTokenDelete,
} from './ovhPabx/ovhPabxHuntingEventTokenDelete.operation';
import {
	description as descriptionovhPabxHuntingEventTokenListGet,
	execute as executeovhPabxHuntingEventTokenListGet,
} from './ovhPabx/ovhPabxHuntingEventTokenListGet.operation';
import {
	description as descriptionovhPabxHuntingEventTokenPost,
	execute as executeovhPabxHuntingEventTokenPost,
} from './ovhPabx/ovhPabxHuntingEventTokenPost.operation';
import {
	description as descriptionovhPabxHuntingListGet,
	execute as executeovhPabxHuntingListGet,
} from './ovhPabx/ovhPabxHuntingListGet.operation';
import {
	description as descriptionovhPabxHuntingPut,
	execute as executeovhPabxHuntingPut,
} from './ovhPabx/ovhPabxHuntingPut.operation';
import {
	description as descriptionovhPabxHuntingQueueAgentDelete,
	execute as executeovhPabxHuntingQueueAgentDelete,
} from './ovhPabx/ovhPabxHuntingQueueAgentDelete.operation';
import {
	description as descriptionovhPabxHuntingQueueAgentGet,
	execute as executeovhPabxHuntingQueueAgentGet,
} from './ovhPabx/ovhPabxHuntingQueueAgentGet.operation';
import {
	description as descriptionovhPabxHuntingQueueAgentListGet,
	execute as executeovhPabxHuntingQueueAgentListGet,
} from './ovhPabx/ovhPabxHuntingQueueAgentListGet.operation';
import {
	description as descriptionovhPabxHuntingQueueAgentLiveStatusListGet,
	execute as executeovhPabxHuntingQueueAgentLiveStatusListGet,
} from './ovhPabx/ovhPabxHuntingQueueAgentLiveStatusListGet.operation';
import {
	description as descriptionovhPabxHuntingQueueAgentPost,
	execute as executeovhPabxHuntingQueueAgentPost,
} from './ovhPabx/ovhPabxHuntingQueueAgentPost.operation';
import {
	description as descriptionovhPabxHuntingQueueAgentPut,
	execute as executeovhPabxHuntingQueueAgentPut,
} from './ovhPabx/ovhPabxHuntingQueueAgentPut.operation';
import {
	description as descriptionovhPabxHuntingQueueDelete,
	execute as executeovhPabxHuntingQueueDelete,
} from './ovhPabx/ovhPabxHuntingQueueDelete.operation';
import {
	description as descriptionovhPabxHuntingQueueGet,
	execute as executeovhPabxHuntingQueueGet,
} from './ovhPabx/ovhPabxHuntingQueueGet.operation';
import {
	description as descriptionovhPabxHuntingQueueListGet,
	execute as executeovhPabxHuntingQueueListGet,
} from './ovhPabx/ovhPabxHuntingQueueListGet.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveCallsEavesdropPost,
	execute as executeovhPabxHuntingQueueLiveCallsEavesdropPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsEavesdropPost.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveCallsGet,
	execute as executeovhPabxHuntingQueueLiveCallsGet,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsGet.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveCallsHangupPost,
	execute as executeovhPabxHuntingQueueLiveCallsHangupPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsHangupPost.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveCallsHoldPost,
	execute as executeovhPabxHuntingQueueLiveCallsHoldPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsHoldPost.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveCallsInterceptPost,
	execute as executeovhPabxHuntingQueueLiveCallsInterceptPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsInterceptPost.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveCallsListGet,
	execute as executeovhPabxHuntingQueueLiveCallsListGet,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsListGet.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveCallsTransferPost,
	execute as executeovhPabxHuntingQueueLiveCallsTransferPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsTransferPost.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveCallsWhisperPost,
	execute as executeovhPabxHuntingQueueLiveCallsWhisperPost,
} from './ovhPabx/ovhPabxHuntingQueueLiveCallsWhisperPost.operation';
import {
	description as descriptionovhPabxHuntingQueueLiveStatisticsListGet,
	execute as executeovhPabxHuntingQueueLiveStatisticsListGet,
} from './ovhPabx/ovhPabxHuntingQueueLiveStatisticsListGet.operation';
import {
	description as descriptionovhPabxHuntingQueuePost,
	execute as executeovhPabxHuntingQueuePost,
} from './ovhPabx/ovhPabxHuntingQueuePost.operation';
import {
	description as descriptionovhPabxHuntingQueuePut,
	execute as executeovhPabxHuntingQueuePut,
} from './ovhPabx/ovhPabxHuntingQueuePut.operation';
import {
	description as descriptionovhPabxListGet,
	execute as executeovhPabxListGet,
} from './ovhPabx/ovhPabxListGet.operation';
import {
	description as descriptionovhPabxMenuDelete,
	execute as executeovhPabxMenuDelete,
} from './ovhPabx/ovhPabxMenuDelete.operation';
import {
	description as descriptionovhPabxMenuEntryDelete,
	execute as executeovhPabxMenuEntryDelete,
} from './ovhPabx/ovhPabxMenuEntryDelete.operation';
import {
	description as descriptionovhPabxMenuEntryGet,
	execute as executeovhPabxMenuEntryGet,
} from './ovhPabx/ovhPabxMenuEntryGet.operation';
import {
	description as descriptionovhPabxMenuEntryListGet,
	execute as executeovhPabxMenuEntryListGet,
} from './ovhPabx/ovhPabxMenuEntryListGet.operation';
import {
	description as descriptionovhPabxMenuEntryPost,
	execute as executeovhPabxMenuEntryPost,
} from './ovhPabx/ovhPabxMenuEntryPost.operation';
import {
	description as descriptionovhPabxMenuEntryPut,
	execute as executeovhPabxMenuEntryPut,
} from './ovhPabx/ovhPabxMenuEntryPut.operation';
import {
	description as descriptionovhPabxMenuGet,
	execute as executeovhPabxMenuGet,
} from './ovhPabx/ovhPabxMenuGet.operation';
import {
	description as descriptionovhPabxMenuListGet,
	execute as executeovhPabxMenuListGet,
} from './ovhPabx/ovhPabxMenuListGet.operation';
import {
	description as descriptionovhPabxMenuPost,
	execute as executeovhPabxMenuPost,
} from './ovhPabx/ovhPabxMenuPost.operation';
import {
	description as descriptionovhPabxMenuPut,
	execute as executeovhPabxMenuPut,
} from './ovhPabx/ovhPabxMenuPut.operation';
import {
	description as descriptionovhPabxPut,
	execute as executeovhPabxPut,
} from './ovhPabx/ovhPabxPut.operation';
import {
	description as descriptionovhPabxRecordsDelete,
	execute as executeovhPabxRecordsDelete,
} from './ovhPabx/ovhPabxRecordsDelete.operation';
import {
	description as descriptionovhPabxRecordsGet,
	execute as executeovhPabxRecordsGet,
} from './ovhPabx/ovhPabxRecordsGet.operation';
import {
	description as descriptionovhPabxRecordsListGet,
	execute as executeovhPabxRecordsListGet,
} from './ovhPabx/ovhPabxRecordsListGet.operation';
import {
	description as descriptionovhPabxSoundDelete,
	execute as executeovhPabxSoundDelete,
} from './ovhPabx/ovhPabxSoundDelete.operation';
import {
	description as descriptionovhPabxSoundGet,
	execute as executeovhPabxSoundGet,
} from './ovhPabx/ovhPabxSoundGet.operation';
import {
	description as descriptionovhPabxSoundListGet,
	execute as executeovhPabxSoundListGet,
} from './ovhPabx/ovhPabxSoundListGet.operation';
import {
	description as descriptionovhPabxSoundUploadPost,
	execute as executeovhPabxSoundUploadPost,
} from './ovhPabx/ovhPabxSoundUploadPost.operation';
import {
	description as descriptionovhPabxTtsDelete,
	execute as executeovhPabxTtsDelete,
} from './ovhPabx/ovhPabxTtsDelete.operation';
import {
	description as descriptionovhPabxTtsGet,
	execute as executeovhPabxTtsGet,
} from './ovhPabx/ovhPabxTtsGet.operation';
import {
	description as descriptionovhPabxTtsListGet,
	execute as executeovhPabxTtsListGet,
} from './ovhPabx/ovhPabxTtsListGet.operation';
import {
	description as descriptionovhPabxTtsPost,
	execute as executeovhPabxTtsPost,
} from './ovhPabx/ovhPabxTtsPost.operation';
import {
	description as descriptionovhPabxTtsPut,
	execute as executeovhPabxTtsPut,
} from './ovhPabx/ovhPabxTtsPut.operation';
import {
	description as descriptionphonebookDelete,
	execute as executephonebookDelete,
} from './phonebook/phonebookDelete.operation';
import {
	description as descriptionphonebookExportListGet,
	execute as executephonebookExportListGet,
} from './phonebook/phonebookExportListGet.operation';
import {
	description as descriptionphonebookGet,
	execute as executephonebookGet,
} from './phonebook/phonebookGet.operation';
import {
	description as descriptionphonebookImportPost,
	execute as executephonebookImportPost,
} from './phonebook/phonebookImportPost.operation';
import {
	description as descriptionphonebookListGet,
	execute as executephonebookListGet,
} from './phonebook/phonebookListGet.operation';
import {
	description as descriptionphonebookPhonebookContactDelete,
	execute as executephonebookPhonebookContactDelete,
} from './phonebook/phonebookPhonebookContactDelete.operation';
import {
	description as descriptionphonebookPhonebookContactGet,
	execute as executephonebookPhonebookContactGet,
} from './phonebook/phonebookPhonebookContactGet.operation';
import {
	description as descriptionphonebookPhonebookContactListGet,
	execute as executephonebookPhonebookContactListGet,
} from './phonebook/phonebookPhonebookContactListGet.operation';
import {
	description as descriptionphonebookPhonebookContactPost,
	execute as executephonebookPhonebookContactPost,
} from './phonebook/phonebookPhonebookContactPost.operation';
import {
	description as descriptionphonebookPhonebookContactPut,
	execute as executephonebookPhonebookContactPut,
} from './phonebook/phonebookPhonebookContactPut.operation';
import {
	description as descriptionphonebookPost,
	execute as executephonebookPost,
} from './phonebook/phonebookPost.operation';
import {
	description as descriptionphonebookPut,
	execute as executephonebookPut,
} from './phonebook/phonebookPut.operation';
import {
	description as descriptionportabilityCanBeCancelledListGet,
	execute as executeportabilityCanBeCancelledListGet,
} from './portability/portabilityCanBeCancelledListGet.operation';
import {
	description as descriptionportabilityCanBeExecutedListGet,
	execute as executeportabilityCanBeExecutedListGet,
} from './portability/portabilityCanBeExecutedListGet.operation';
import {
	description as descriptionportabilityCancelPost,
	execute as executeportabilityCancelPost,
} from './portability/portabilityCancelPost.operation';
import {
	description as descriptionportabilityChangeDatePost,
	execute as executeportabilityChangeDatePost,
} from './portability/portabilityChangeDatePost.operation';
import {
	description as descriptionportabilityDateCanBeChangedListGet,
	execute as executeportabilityDateCanBeChangedListGet,
} from './portability/portabilityDateCanBeChangedListGet.operation';
import {
	description as descriptionportabilityDetailGet,
	execute as executeportabilityDetailGet,
} from './portability/portabilityDetailGet.operation';
import {
	description as descriptionportabilityDocumentDelete,
	execute as executeportabilityDocumentDelete,
} from './portability/portabilityDocumentDelete.operation';
import {
	description as descriptionportabilityDocumentGet,
	execute as executeportabilityDocumentGet,
} from './portability/portabilityDocumentGet.operation';
import {
	description as descriptionportabilityDocumentListGet,
	execute as executeportabilityDocumentListGet,
} from './portability/portabilityDocumentListGet.operation';
import {
	description as descriptionportabilityDocumentPost,
	execute as executeportabilityDocumentPost,
} from './portability/portabilityDocumentPost.operation';
import {
	description as descriptionportabilityDocumentPut,
	execute as executeportabilityDocumentPut,
} from './portability/portabilityDocumentPut.operation';
import {
	description as descriptionportabilityExecutePost,
	execute as executeportabilityExecutePost,
} from './portability/portabilityExecutePost.operation';
import {
	description as descriptionportabilityRelaunchListGet,
	execute as executeportabilityRelaunchListGet,
} from './portability/portabilityRelaunchListGet.operation';
import {
	description as descriptionportabilityRelaunchPost,
	execute as executeportabilityRelaunchPost,
} from './portability/portabilityRelaunchPost.operation';
import {
	description as descriptionportabilityStatusListGet,
	execute as executeportabilityStatusListGet,
} from './portability/portabilityStatusListGet.operation';
import {
	description as descriptionprocedureCancelPost,
	execute as executeprocedureCancelPost,
} from './procedure/procedureCancelPost.operation';
import {
	description as descriptionprocedureGet,
	execute as executeprocedureGet,
} from './procedure/procedureGet.operation';
import {
	description as descriptionprocedureListGet,
	execute as executeprocedureListGet,
} from './procedure/procedureListGet.operation';
import {
	description as descriptionprocedurePost,
	execute as executeprocedurePost,
} from './procedure/procedurePost.operation';
import {
	description as descriptionprocedureRequiredListGet,
	execute as executeprocedureRequiredListGet,
} from './procedure/procedureRequiredListGet.operation';
import {
	description as descriptionredirectChangeDestinationPost,
	execute as executeredirectChangeDestinationPost,
} from './redirect/redirectChangeDestinationPost.operation';
import {
	description as descriptionredirectGet,
	execute as executeredirectGet,
} from './redirect/redirectGet.operation';
import {
	description as descriptionredirectListGet,
	execute as executeredirectListGet,
} from './redirect/redirectListGet.operation';
import {
	description as descriptionredirectPut,
	execute as executeredirectPut,
} from './redirect/redirectPut.operation';
import {
	description as descriptionresellerPanelGeneratePasswordPost,
	execute as executeresellerPanelGeneratePasswordPost,
} from './resellerPanel/resellerPanelGeneratePasswordPost.operation';
import {
	description as descriptionresellerPanelStatusListGet,
	execute as executeresellerPanelStatusListGet,
} from './resellerPanel/resellerPanelStatusListGet.operation';
import {
	description as descriptionallowedCreditThresholdGet,
	execute as executeallowedCreditThresholdGet,
} from './root/allowedCreditThresholdGet.operation';
import {
	description as descriptionamountSecurityDepositGet,
	execute as executeamountSecurityDepositGet,
} from './root/amountSecurityDepositGet.operation';
import {
	description as descriptionbillingAccountDelete,
	execute as executebillingAccountDelete,
} from './root/billingAccountDelete.operation';
import {
	description as descriptionbillingAccountGet,
	execute as executebillingAccountGet,
} from './root/billingAccountGet.operation';
import {
	description as descriptionbillingAccountPut,
	execute as executebillingAccountPut,
} from './root/billingAccountPut.operation';
import {
	description as descriptionbillingAccountSiteGet,
	execute as executebillingAccountSiteGet,
} from './root/billingAccountSiteGet.operation';
import {
	description as descriptionbillingAccountSitePost,
	execute as executebillingAccountSitePost,
} from './root/billingAccountSitePost.operation';
import {
	description as descriptioncanTransferSecurityDepositPost,
	execute as executecanTransferSecurityDepositPost,
} from './root/canTransferSecurityDepositPost.operation';
import {
	description as descriptioncancelTerminationPost,
	execute as executecancelTerminationPost,
} from './root/cancelTerminationPost.operation';
import {
	description as descriptionchangeContactPost,
	execute as executechangeContactPost,
} from './root/changeContactPost.operation';
import {
	description as descriptionportabilityGet,
	execute as executeportabilityGet,
} from './root/portabilityGet.operation';
import {
	description as descriptiontransferSecurityDepositPost,
	execute as executetransferSecurityDepositPost,
} from './root/transferSecurityDepositPost.operation';
import {
	description as descriptionrsvaAllowedRateCodesListGet,
	execute as executersvaAllowedRateCodesListGet,
} from './rsva/rsvaAllowedRateCodesListGet.operation';
import {
	description as descriptionrsvaCancelScheduledRateCodePost,
	execute as executersvaCancelScheduledRateCodePost,
} from './rsva/rsvaCancelScheduledRateCodePost.operation';
import {
	description as descriptionrsvaCurrentRateCodeListGet,
	execute as executersvaCurrentRateCodeListGet,
} from './rsva/rsvaCurrentRateCodeListGet.operation';
import {
	description as descriptionrsvaGet,
	execute as executersvaGet,
} from './rsva/rsvaGet.operation';
import {
	description as descriptionrsvaListGet,
	execute as executersvaListGet,
} from './rsva/rsvaListGet.operation';
import {
	description as descriptionrsvaPut,
	execute as executersvaPut,
} from './rsva/rsvaPut.operation';
import {
	description as descriptionrsvaScheduleRateCodePost,
	execute as executersvaScheduleRateCodePost,
} from './rsva/rsvaScheduleRateCodePost.operation';
import {
	description as descriptionrsvaScheduledRateCodeListGet,
	execute as executersvaScheduledRateCodeListGet,
} from './rsva/rsvaScheduledRateCodeListGet.operation';
import {
	description as descriptionschedulerEventsDelete,
	execute as executeschedulerEventsDelete,
} from './scheduler/schedulerEventsDelete.operation';
import {
	description as descriptionschedulerEventsGet,
	execute as executeschedulerEventsGet,
} from './scheduler/schedulerEventsGet.operation';
import {
	description as descriptionschedulerEventsListGet,
	execute as executeschedulerEventsListGet,
} from './scheduler/schedulerEventsListGet.operation';
import {
	description as descriptionschedulerEventsPost,
	execute as executeschedulerEventsPost,
} from './scheduler/schedulerEventsPost.operation';
import {
	description as descriptionschedulerEventsPut,
	execute as executeschedulerEventsPut,
} from './scheduler/schedulerEventsPut.operation';
import {
	description as descriptionschedulerGet,
	execute as executeschedulerGet,
} from './scheduler/schedulerGet.operation';
import {
	description as descriptionschedulerImportIcsCalendarPost,
	execute as executeschedulerImportIcsCalendarPost,
} from './scheduler/schedulerImportIcsCalendarPost.operation';
import {
	description as descriptionschedulerListGet,
	execute as executeschedulerListGet,
} from './scheduler/schedulerListGet.operation';
import {
	description as descriptionschedulerPut,
	execute as executeschedulerPut,
} from './scheduler/schedulerPut.operation';
import {
	description as descriptionscreenGet,
	execute as executescreenGet,
} from './screen/screenGet.operation';
import {
	description as descriptionscreenListGet,
	execute as executescreenListGet,
} from './screen/screenListGet.operation';
import {
	description as descriptionscreenPut,
	execute as executescreenPut,
} from './screen/screenPut.operation';
import {
	description as descriptionscreenScreenListsDelete,
	execute as executescreenScreenListsDelete,
} from './screen/screenScreenListsDelete.operation';
import {
	description as descriptionscreenScreenListsGet,
	execute as executescreenScreenListsGet,
} from './screen/screenScreenListsGet.operation';
import {
	description as descriptionscreenScreenListsListGet,
	execute as executescreenScreenListsListGet,
} from './screen/screenScreenListsListGet.operation';
import {
	description as descriptionscreenScreenListsPost,
	execute as executescreenScreenListsPost,
} from './screen/screenScreenListsPost.operation';
import {
	description as descriptionserviceCancelTerminationPost,
	execute as executeserviceCancelTerminationPost,
} from './service/serviceCancelTerminationPost.operation';
import {
	description as descriptionserviceChangeOfBillingAccountPost,
	execute as executeserviceChangeOfBillingAccountPost,
} from './service/serviceChangeOfBillingAccountPost.operation';
import {
	description as descriptionserviceDelete,
	execute as executeserviceDelete,
} from './service/serviceDelete.operation';
import {
	description as descriptionserviceDiagnosticReportsListGet,
	execute as executeserviceDiagnosticReportsListGet,
} from './service/serviceDiagnosticReportsListGet.operation';
import {
	description as descriptionserviceDirectoryFetchEntrepriseInformationsPost,
	execute as executeserviceDirectoryFetchEntrepriseInformationsPost,
} from './service/serviceDirectoryFetchEntrepriseInformationsPost.operation';
import {
	description as descriptionserviceDirectoryGetDirectoryServiceCodeListGet,
	execute as executeserviceDirectoryGetDirectoryServiceCodeListGet,
} from './service/serviceDirectoryGetDirectoryServiceCodeListGet.operation';
import {
	description as descriptionserviceDirectoryGetWayTypesListGet,
	execute as executeserviceDirectoryGetWayTypesListGet,
} from './service/serviceDirectoryGetWayTypesListGet.operation';
import {
	description as descriptionserviceDirectoryListGet,
	execute as executeserviceDirectoryListGet,
} from './service/serviceDirectoryListGet.operation';
import {
	description as descriptionserviceDirectoryPut,
	execute as executeserviceDirectoryPut,
} from './service/serviceDirectoryPut.operation';
import {
	description as descriptionserviceEventTokenDelete,
	execute as executeserviceEventTokenDelete,
} from './service/serviceEventTokenDelete.operation';
import {
	description as descriptionserviceEventTokenListGet,
	execute as executeserviceEventTokenListGet,
} from './service/serviceEventTokenListGet.operation';
import {
	description as descriptionserviceEventTokenPost,
	execute as executeserviceEventTokenPost,
} from './service/serviceEventTokenPost.operation';
import {
	description as descriptionserviceFaxConsumptionGet,
	execute as executeserviceFaxConsumptionGet,
} from './service/serviceFaxConsumptionGet.operation';
import {
	description as descriptionserviceFaxConsumptionListGet,
	execute as executeserviceFaxConsumptionListGet,
} from './service/serviceFaxConsumptionListGet.operation';
import {
	description as descriptionserviceGet,
	execute as executeserviceGet,
} from './service/serviceGet.operation';
import {
	description as descriptionserviceListGet,
	execute as executeserviceListGet,
} from './service/serviceListGet.operation';
import {
	description as descriptionserviceOfferChangeDelete,
	execute as executeserviceOfferChangeDelete,
} from './service/serviceOfferChangeDelete.operation';
import {
	description as descriptionserviceOfferChangeListGet,
	execute as executeserviceOfferChangeListGet,
} from './service/serviceOfferChangeListGet.operation';
import {
	description as descriptionserviceOfferChangePost,
	execute as executeserviceOfferChangePost,
} from './service/serviceOfferChangePost.operation';
import {
	description as descriptionserviceOfferChangesListGet,
	execute as executeserviceOfferChangesListGet,
} from './service/serviceOfferChangesListGet.operation';
import {
	description as descriptionserviceOfferTaskGet,
	execute as executeserviceOfferTaskGet,
} from './service/serviceOfferTaskGet.operation';
import {
	description as descriptionserviceOfferTaskListGet,
	execute as executeserviceOfferTaskListGet,
} from './service/serviceOfferTaskListGet.operation';
import {
	description as descriptionserviceOfferTaskPut,
	execute as executeserviceOfferTaskPut,
} from './service/serviceOfferTaskPut.operation';
import {
	description as descriptionservicePreviousVoiceConsumptionGet,
	execute as executeservicePreviousVoiceConsumptionGet,
} from './service/servicePreviousVoiceConsumptionGet.operation';
import {
	description as descriptionservicePreviousVoiceConsumptionListGet,
	execute as executeservicePreviousVoiceConsumptionListGet,
} from './service/servicePreviousVoiceConsumptionListGet.operation';
import {
	description as descriptionservicePut,
	execute as executeservicePut,
} from './service/servicePut.operation';
import {
	description as descriptionserviceRepaymentConsumptionGet,
	execute as executeserviceRepaymentConsumptionGet,
} from './service/serviceRepaymentConsumptionGet.operation';
import {
	description as descriptionserviceRepaymentConsumptionListGet,
	execute as executeserviceRepaymentConsumptionListGet,
} from './service/serviceRepaymentConsumptionListGet.operation';
import {
	description as descriptionserviceTaskGet,
	execute as executeserviceTaskGet,
} from './service/serviceTaskGet.operation';
import {
	description as descriptionserviceTaskListGet,
	execute as executeserviceTaskListGet,
} from './service/serviceTaskListGet.operation';
import {
	description as descriptionserviceVoiceConsumptionGet,
	execute as executeserviceVoiceConsumptionGet,
} from './service/serviceVoiceConsumptionGet.operation';
import {
	description as descriptionserviceVoiceConsumptionListGet,
	execute as executeserviceVoiceConsumptionListGet,
} from './service/serviceVoiceConsumptionListGet.operation';
import {
	description as descriptionserviceInfosListGet,
	execute as executeserviceInfosListGet,
} from './serviceInfos/serviceInfosListGet.operation';
import {
	description as descriptionserviceInfosPut,
	execute as executeserviceInfosPut,
} from './serviceInfos/serviceInfosPut.operation';
import {
	description as descriptionsoftphoneLogoDelete,
	execute as executesoftphoneLogoDelete,
} from './softphone/softphoneLogoDelete.operation';
import {
	description as descriptionsoftphoneLogoListGet,
	execute as executesoftphoneLogoListGet,
} from './softphone/softphoneLogoListGet.operation';
import {
	description as descriptionsoftphoneLogoPut,
	execute as executesoftphoneLogoPut,
} from './softphone/softphoneLogoPut.operation';
import {
	description as descriptionsoftphoneStoreLinksListGet,
	execute as executesoftphoneStoreLinksListGet,
} from './softphone/softphoneStoreLinksListGet.operation';
import {
	description as descriptionsoftphoneThemeListGet,
	execute as executesoftphoneThemeListGet,
} from './softphone/softphoneThemeListGet.operation';
import {
	description as descriptionsoftphoneThemePut,
	execute as executesoftphoneThemePut,
} from './softphone/softphoneThemePut.operation';
import {
	description as descriptionsoftphoneThemesGet,
	execute as executesoftphoneThemesGet,
} from './softphone/softphoneThemesGet.operation';
import {
	description as descriptionsoftphoneThemesListGet,
	execute as executesoftphoneThemesListGet,
} from './softphone/softphoneThemesListGet.operation';
import {
	description as descriptionsoundsDelete,
	execute as executesoundsDelete,
} from './sounds/soundsDelete.operation';
import {
	description as descriptionsoundsGet,
	execute as executesoundsGet,
} from './sounds/soundsGet.operation';
import {
	description as descriptionsoundsListGet,
	execute as executesoundsListGet,
} from './sounds/soundsListGet.operation';
import {
	description as descriptionsoundsPost,
	execute as executesoundsPost,
} from './sounds/soundsPost.operation';
import {
	description as descriptionsoundsPut,
	execute as executesoundsPut,
} from './sounds/soundsPut.operation';
import {
	description as descriptionspareBrandsListGet,
	execute as executespareBrandsListGet,
} from './spare/spareBrandsListGet.operation';
import {
	description as descriptionspareCompatibleReplacementListGet,
	execute as executespareCompatibleReplacementListGet,
} from './spare/spareCompatibleReplacementListGet.operation';
import {
	description as descriptionspareDelete,
	execute as executespareDelete,
} from './spare/spareDelete.operation';
import {
	description as descriptionspareGet,
	execute as executespareGet,
} from './spare/spareGet.operation';
import {
	description as descriptionspareListGet,
	execute as executespareListGet,
} from './spare/spareListGet.operation';
import {
	description as descriptionspareReplacePost,
	execute as executespareReplacePost,
} from './spare/spareReplacePost.operation';
import {
	description as descriptionspareServiceInfosListGet,
	execute as executespareServiceInfosListGet,
} from './spare/spareServiceInfosListGet.operation';
import {
	description as descriptionspareServiceInfosPut,
	execute as executespareServiceInfosPut,
} from './spare/spareServiceInfosPut.operation';
import {
	description as descriptiontaskGet,
	execute as executetaskGet,
} from './task/taskGet.operation';
import {
	description as descriptiontaskListGet,
	execute as executetaskListGet,
} from './task/taskListGet.operation';
import {
	description as descriptiontimeConditionConditionDelete,
	execute as executetimeConditionConditionDelete,
} from './timeCondition/timeConditionConditionDelete.operation';
import {
	description as descriptiontimeConditionConditionGet,
	execute as executetimeConditionConditionGet,
} from './timeCondition/timeConditionConditionGet.operation';
import {
	description as descriptiontimeConditionConditionListGet,
	execute as executetimeConditionConditionListGet,
} from './timeCondition/timeConditionConditionListGet.operation';
import {
	description as descriptiontimeConditionConditionPost,
	execute as executetimeConditionConditionPost,
} from './timeCondition/timeConditionConditionPost.operation';
import {
	description as descriptiontimeConditionConditionPut,
	execute as executetimeConditionConditionPut,
} from './timeCondition/timeConditionConditionPut.operation';
import {
	description as descriptiontimeConditionGet,
	execute as executetimeConditionGet,
} from './timeCondition/timeConditionGet.operation';
import {
	description as descriptiontimeConditionListGet,
	execute as executetimeConditionListGet,
} from './timeCondition/timeConditionListGet.operation';
import {
	description as descriptiontimeConditionOptionsListGet,
	execute as executetimeConditionOptionsListGet,
} from './timeCondition/timeConditionOptionsListGet.operation';
import {
	description as descriptiontimeConditionOptionsPut,
	execute as executetimeConditionOptionsPut,
} from './timeCondition/timeConditionOptionsPut.operation';
import {
	description as descriptiontrunkChannelsPacksRepartitionListGet,
	execute as executetrunkChannelsPacksRepartitionListGet,
} from './trunk/trunkChannelsPacksRepartitionListGet.operation';
import {
	description as descriptiontrunkExternalDisplayedNumberDelete,
	execute as executetrunkExternalDisplayedNumberDelete,
} from './trunk/trunkExternalDisplayedNumberDelete.operation';
import {
	description as descriptiontrunkExternalDisplayedNumberGet,
	execute as executetrunkExternalDisplayedNumberGet,
} from './trunk/trunkExternalDisplayedNumberGet.operation';
import {
	description as descriptiontrunkExternalDisplayedNumberListGet,
	execute as executetrunkExternalDisplayedNumberListGet,
} from './trunk/trunkExternalDisplayedNumberListGet.operation';
import {
	description as descriptiontrunkExternalDisplayedNumberPost,
	execute as executetrunkExternalDisplayedNumberPost,
} from './trunk/trunkExternalDisplayedNumberPost.operation';
import {
	description as descriptiontrunkExternalDisplayedNumberValidatePost,
	execute as executetrunkExternalDisplayedNumberValidatePost,
} from './trunk/trunkExternalDisplayedNumberValidatePost.operation';
import {
	description as descriptiontrunkGet,
	execute as executetrunkGet,
} from './trunk/trunkGet.operation';
import {
	description as descriptiontrunkListGet,
	execute as executetrunkListGet,
} from './trunk/trunkListGet.operation';
import {
	description as descriptionTrunksGet,
	execute as executeTrunksGet,
} from './trunks/trunksGet.operation';
import {
	description as descriptionTrunksListGet,
	execute as executeTrunksListGet,
} from './trunks/trunksListGet.operation';
import {
	description as descriptionTrunksServiceInfosGet,
	execute as executeTrunksServiceInfosGet,
} from './trunks/trunksServiceInfosGet.operation';
import {
	description as descriptionTrunksServiceInfosPut,
	execute as executeTrunksServiceInfosPut,
} from './trunks/trunksServiceInfosPut.operation';
import {
	description as descriptionvoicemailDirectoriesDelete,
	execute as executevoicemailDirectoriesDelete,
} from './voicemail/voicemailDirectoriesDelete.operation';
import {
	description as descriptionvoicemailDirectoriesDownloadListGet,
	execute as executevoicemailDirectoriesDownloadListGet,
} from './voicemail/voicemailDirectoriesDownloadListGet.operation';
import {
	description as descriptionvoicemailDirectoriesGet,
	execute as executevoicemailDirectoriesGet,
} from './voicemail/voicemailDirectoriesGet.operation';
import {
	description as descriptionvoicemailDirectoriesListGet,
	execute as executevoicemailDirectoriesListGet,
} from './voicemail/voicemailDirectoriesListGet.operation';
import {
	description as descriptionvoicemailDirectoriesMovePost,
	execute as executevoicemailDirectoriesMovePost,
} from './voicemail/voicemailDirectoriesMovePost.operation';
import {
	description as descriptionvoicemailDirectoriesTranscriptListGet,
	execute as executevoicemailDirectoriesTranscriptListGet,
} from './voicemail/voicemailDirectoriesTranscriptListGet.operation';
import {
	description as descriptionvoicemailGet,
	execute as executevoicemailGet,
} from './voicemail/voicemailGet.operation';
import {
	description as descriptionvoicemailGreetingsDelete,
	execute as executevoicemailGreetingsDelete,
} from './voicemail/voicemailGreetingsDelete.operation';
import {
	description as descriptionvoicemailGreetingsDownloadListGet,
	execute as executevoicemailGreetingsDownloadListGet,
} from './voicemail/voicemailGreetingsDownloadListGet.operation';
import {
	description as descriptionvoicemailGreetingsGet,
	execute as executevoicemailGreetingsGet,
} from './voicemail/voicemailGreetingsGet.operation';
import {
	description as descriptionvoicemailGreetingsListGet,
	execute as executevoicemailGreetingsListGet,
} from './voicemail/voicemailGreetingsListGet.operation';
import {
	description as descriptionvoicemailGreetingsMovePost,
	execute as executevoicemailGreetingsMovePost,
} from './voicemail/voicemailGreetingsMovePost.operation';
import {
	description as descriptionvoicemailGreetingsPost,
	execute as executevoicemailGreetingsPost,
} from './voicemail/voicemailGreetingsPost.operation';
import {
	description as descriptionvoicemailListGet,
	execute as executevoicemailListGet,
} from './voicemail/voicemailListGet.operation';
import {
	description as descriptionvoicemailMigrateOnNewVersionPost,
	execute as executevoicemailMigrateOnNewVersionPost,
} from './voicemail/voicemailMigrateOnNewVersionPost.operation';
import {
	description as descriptionvoicemailPut,
	execute as executevoicemailPut,
} from './voicemail/voicemailPut.operation';
import {
	description as descriptionvoicemailSettingsChangePasswordPost,
	execute as executevoicemailSettingsChangePasswordPost,
} from './voicemail/voicemailSettingsChangePasswordPost.operation';
import {
	description as descriptionvoicemailSettingsChangeRoutingPost,
	execute as executevoicemailSettingsChangeRoutingPost,
} from './voicemail/voicemailSettingsChangeRoutingPost.operation';
import {
	description as descriptionvoicemailSettingsListGet,
	execute as executevoicemailSettingsListGet,
} from './voicemail/voicemailSettingsListGet.operation';
import {
	description as descriptionvoicemailSettingsPut,
	execute as executevoicemailSettingsPut,
} from './voicemail/voicemailSettingsPut.operation';
import {
	description as descriptionvoicemailSettingsRoutingListGet,
	execute as executevoicemailSettingsRoutingListGet,
} from './voicemail/voicemailSettingsRoutingListGet.operation';
import {
	description as descriptionvoicemailSettingsVoicemailNumbersListGet,
	execute as executevoicemailSettingsVoicemailNumbersListGet,
} from './voicemail/voicemailSettingsVoicemailNumbersListGet.operation';
import {
	description as descriptionvxmlGet,
	execute as executevxmlGet,
} from './vxml/vxmlGet.operation';
import {
	description as descriptionvxmlListGet,
	execute as executevxmlListGet,
} from './vxml/vxmlListGet.operation';
import {
	description as descriptionvxmlSettingsListGet,
	execute as executevxmlSettingsListGet,
} from './vxml/vxmlSettingsListGet.operation';
import {
	description as descriptionvxmlSettingsLogsPost,
	execute as executevxmlSettingsLogsPost,
} from './vxml/vxmlSettingsLogsPost.operation';
import {
	description as descriptionvxmlSettingsPut,
	execute as executevxmlSettingsPut,
} from './vxml/vxmlSettingsPut.operation';

const { description, execute } = createOperationDispatcher(
	'telephonyOperation',
	'telephony',
	[
	{
		name: 'Abbreviated Number Create',
		value: 'abbreviatedNumberPost',
		action: 'Create a new abbreviated number for the billing account',
		execute: executeabbreviatedNumberPost,
		description: descriptionabbreviatedNumberPost,
	},
	{
		name: 'Abbreviated Number Delete',
		value: 'abbreviatedNumberDelete',
		action: 'Delete the given abbreviated number',
		execute: executeabbreviatedNumberDelete,
		description: descriptionabbreviatedNumberDelete,
	},
	{
		name: 'Abbreviated Number Get',
		value: 'abbreviatedNumberGet',
		action: 'Get this object properties',
		execute: executeabbreviatedNumberGet,
		description: descriptionabbreviatedNumberGet,
	},
	{
		name: 'Abbreviated Number List',
		value: 'abbreviatedNumberListGet',
		action: 'Abbreviated numbers for the billing account',
		execute: executeabbreviatedNumberListGet,
		description: descriptionabbreviatedNumberListGet,
	},
	{
		name: 'Abbreviated Number Update',
		value: 'abbreviatedNumberPut',
		action: 'Alter this object properties',
		execute: executeabbreviatedNumberPut,
		description: descriptionabbreviatedNumberPut,
	},
	{
		name: 'Billing Account Site',
		value: 'billingAccountSitePost',
		action: 'Used to overwrite current billing account feature by the billing account site',
		execute: executebillingAccountSitePost,
		description: descriptionbillingAccountSitePost,
	},
	{
		name: 'Can Transfer Security Deposit',
		value: 'canTransferSecurityDepositPost',
		action: 'Check if security deposit transfer is possible between two billing accounts',
		execute: executecanTransferSecurityDepositPost,
		description: descriptioncanTransferSecurityDepositPost,
	},
	{
		name: 'Cancel Termination',
		value: 'cancelTerminationPost',
		action: 'Cancel the billing account termination',
		execute: executecancelTerminationPost,
		description: descriptioncancelTerminationPost,
	},
	{
		name: 'Carrier Sip Cdrs List',
		value: 'carrierSipCdrsListGet',
		action: 'Get the Call Detail Records of your Carrier SIP service',
		execute: executecarrierSipCdrsListGet,
		description: descriptioncarrierSipCdrsListGet,
	},
	{
		name: 'Carrier Sip Cluster Details List',
		value: 'carrierSipClusterDetailsListGet',
		action: 'Get details about the carrier sip cluster of your stack',
		execute: executecarrierSipClusterDetailsListGet,
		description: descriptioncarrierSipClusterDetailsListGet,
	},
	{
		name: 'Carrier Sip Endpoints Get',
		value: 'carrierSipEndpointsGet',
		action: 'Get this object properties',
		execute: executecarrierSipEndpointsGet,
		description: descriptioncarrierSipEndpointsGet,
	},
	{
		name: 'Carrier Sip Endpoints List',
		value: 'carrierSipEndpointsListGet',
		action: 'List of your remote sip endpoints (ips, ports, protocol) of your carrier sip trunk service',
		execute: executecarrierSipEndpointsListGet,
		description: descriptioncarrierSipEndpointsListGet,
	},
	{
		name: 'Carrier Sip Get',
		value: 'carrierSipGet',
		action: 'Get this object properties',
		execute: executecarrierSipGet,
		description: descriptioncarrierSipGet,
	},
	{
		name: 'Carrier Sip List',
		value: 'carrierSipListGet',
		action: 'Carrier SIP trunks associated with this billing account',
		execute: executecarrierSipListGet,
		description: descriptioncarrierSipListGet,
	},
	{
		name: 'Carrier Sip Settings List',
		value: 'carrierSipSettingsListGet',
		action: 'Get this object properties',
		execute: executecarrierSipSettingsListGet,
		description: descriptioncarrierSipSettingsListGet,
	},
	{
		name: 'Carrier Sip Settings Update',
		value: 'carrierSipSettingsPut',
		action: 'Alter this object properties',
		execute: executecarrierSipSettingsPut,
		description: descriptioncarrierSipSettingsPut,
	},
	{
		name: 'Carrier Sip Vno Get',
		value: 'carrierSipVnoGet',
		action: 'Get this object properties',
		execute: executecarrierSipVnoGet,
		description: descriptioncarrierSipVnoGet,
	},
	{
		name: 'Carrier Sip Vno List',
		value: 'carrierSipVnoListGet',
		action: 'List of your VNO mandates',
		execute: executecarrierSipVnoListGet,
		description: descriptioncarrierSipVnoListGet,
	},
	{
		name: 'Carrier Sip Vno Ranges Get',
		value: 'carrierSipVnoRangesGet',
		action: 'Get this object properties',
		execute: executecarrierSipVnoRangesGet,
		description: descriptioncarrierSipVnoRangesGet,
	},
	{
		name: 'Carrier Sip Vno Ranges List',
		value: 'carrierSipVnoRangesListGet',
		action: 'Number ranges associated with you mandate.',
		execute: executecarrierSipVnoRangesListGet,
		description: descriptioncarrierSipVnoRangesListGet,
	},
	{
		name: 'Carrier Sip Vno Ranges Update',
		value: 'carrierSipVnoRangesPut',
		action: 'Alter this object properties',
		execute: executecarrierSipVnoRangesPut,
		description: descriptioncarrierSipVnoRangesPut,
	},
	{
		name: 'Change Billing Contact',
		value: 'changeContactPost',
		action: 'Launch a contact change procedure',
		execute: executechangeContactPost,
		description: descriptionchangeContactPost,
	},
	{
		name: 'Change Contact',
		value: 'aliasChangeContactPost',
		action: 'Launch a contact change procedure for an alias',
		execute: executeAliasChangeContactPost,
		description: descriptionAliasChangeContactPost,
	},
	{
		name: 'Conference',
		value: 'conferenceListGet',
		action: 'Execute the GET on conference',
		execute: executeconferenceListGet,
		description: descriptionconferenceListGet,
	},
	{
		name: 'Conference (2)',
		value: 'conferenceGet',
		action: 'Execute the GET on conference/{x}',
		execute: executeconferenceGet,
		description: descriptionconferenceGet,
	},
	{
		name: 'Conference Announce Upload',
		value: 'conferenceAnnounceUploadPost',
		action: 'Execute the POST on conference/{x}/announceUpload',
		execute: executeconferenceAnnounceUploadPost,
		description: descriptionconferenceAnnounceUploadPost,
	},
	{
		name: 'Conference Histories',
		value: 'conferenceHistoriesListGet',
		action: 'Execute the GET on conference/{x}/histories',
		execute: executeconferenceHistoriesListGet,
		description: descriptionconferenceHistoriesListGet,
	},
	{
		name: 'Conference Histories (2)',
		value: 'conferenceHistoriesGet',
		action: 'Execute the GET on conference/{x}/histories/{x}',
		execute: executeconferenceHistoriesGet,
		description: descriptionconferenceHistoriesGet,
	},
	{
		name: 'Conference Informations',
		value: 'conferenceInformationsListGet',
		action: 'Execute the GET on conference/{x}/informations',
		execute: executeconferenceInformationsListGet,
		description: descriptionconferenceInformationsListGet,
	},
	{
		name: 'Conference Lock',
		value: 'conferenceLockPost',
		action: 'Execute the POST on conference/{x}/lock',
		execute: executeconferenceLockPost,
		description: descriptionconferenceLockPost,
	},
	{
		name: 'Conference Participants',
		value: 'conferenceParticipantsListGet',
		action: 'Execute the GET on conference/{x}/participants',
		execute: executeconferenceParticipantsListGet,
		description: descriptionconferenceParticipantsListGet,
	},
	{
		name: 'Conference Participants (2)',
		value: 'conferenceParticipantsGet',
		action: 'Execute the GET on conference/{x}/participants/{x}',
		execute: executeconferenceParticipantsGet,
		description: descriptionconferenceParticipantsGet,
	},
	{
		name: 'Conference Participants Deaf',
		value: 'conferenceParticipantsDeafPost',
		action: 'Execute the POST on conference/{x}/participants/{x}/deaf',
		execute: executeconferenceParticipantsDeafPost,
		description: descriptionconferenceParticipantsDeafPost,
	},
	{
		name: 'Conference Participants Energy',
		value: 'conferenceParticipantsEnergyPost',
		action: 'Execute the POST on conference/{x}/participants/{x}/energy',
		execute: executeconferenceParticipantsEnergyPost,
		description: descriptionconferenceParticipantsEnergyPost,
	},
	{
		name: 'Conference Participants Kick',
		value: 'conferenceParticipantsKickPost',
		action: 'Execute the POST on conference/{x}/participants/{x}/kick',
		execute: executeconferenceParticipantsKickPost,
		description: descriptionconferenceParticipantsKickPost,
	},
	{
		name: 'Conference Participants Mute',
		value: 'conferenceParticipantsMutePost',
		action: 'Execute the POST on conference/{x}/participants/{x}/mute',
		execute: executeconferenceParticipantsMutePost,
		description: descriptionconferenceParticipantsMutePost,
	},
	{
		name: 'Conference Participants Undeaf',
		value: 'conferenceParticipantsUndeafPost',
		action: 'Execute the POST on conference/{x}/participants/{x}/undeaf',
		execute: executeconferenceParticipantsUndeafPost,
		description: descriptionconferenceParticipantsUndeafPost,
	},
	{
		name: 'Conference Participants Unmute',
		value: 'conferenceParticipantsUnmutePost',
		action: 'Execute the POST on conference/{x}/participants/{x}/unmute',
		execute: executeconferenceParticipantsUnmutePost,
		description: descriptionconferenceParticipantsUnmutePost,
	},
	{
		name: 'Conference Rooms',
		value: 'conferenceRoomsListGet',
		action: 'Execute the GET on conference/{x}/rooms',
		execute: executeconferenceRoomsListGet,
		description: descriptionconferenceRoomsListGet,
	},
	{
		name: 'Conference Rooms (2)',
		value: 'conferenceRoomsPost',
		action: 'Execute the POST on conference/{x}/rooms',
		execute: executeconferenceRoomsPost,
		description: descriptionconferenceRoomsPost,
	},
	{
		name: 'Conference Rooms (3)',
		value: 'conferenceRoomsGet',
		action: 'Execute the GET on conference/{x}/rooms/{x}',
		execute: executeconferenceRoomsGet,
		description: descriptionconferenceRoomsGet,
	},
	{
		name: 'Conference Rooms (4)',
		value: 'conferenceRoomsPut',
		action: 'Execute the PUT on conference/{x}/rooms/{x}',
		execute: executeconferenceRoomsPut,
		description: descriptionconferenceRoomsPut,
	},
	{
		name: 'Conference Rooms Histories',
		value: 'conferenceRoomsHistoriesListGet',
		action: 'Execute the GET on conference/{x}/rooms/{x}/histories',
		execute: executeconferenceRoomsHistoriesListGet,
		description: descriptionconferenceRoomsHistoriesListGet,
	},
	{
		name: 'Conference Rooms Histories (2)',
		value: 'conferenceRoomsHistoriesGet',
		action: 'Execute the GET on conference/{x}/rooms/{x}/histories/{x}',
		execute: executeconferenceRoomsHistoriesGet,
		description: descriptionconferenceRoomsHistoriesGet,
	},
	{
		name: 'Conference Rooms Lock',
		value: 'conferenceRoomsLockPost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/lock',
		execute: executeconferenceRoomsLockPost,
		description: descriptionconferenceRoomsLockPost,
	},
	{
		name: 'Conference Rooms Participants',
		value: 'conferenceRoomsParticipantsListGet',
		action: 'Execute the GET on conference/{x}/rooms/{x}/participants',
		execute: executeconferenceRoomsParticipantsListGet,
		description: descriptionconferenceRoomsParticipantsListGet,
	},
	{
		name: 'Conference Rooms Participants (2)',
		value: 'conferenceRoomsParticipantsGet',
		action: 'Execute the GET on conference/{x}/rooms/{x}/participants/{x}',
		execute: executeconferenceRoomsParticipantsGet,
		description: descriptionconferenceRoomsParticipantsGet,
	},
	{
		name: 'Conference Rooms Participants Deaf',
		value: 'conferenceRoomsParticipantsDeafPost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/deaf',
		execute: executeconferenceRoomsParticipantsDeafPost,
		description: descriptionconferenceRoomsParticipantsDeafPost,
	},
	{
		name: 'Conference Rooms Participants Energy',
		value: 'conferenceRoomsParticipantsEnergyPost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/energy',
		execute: executeconferenceRoomsParticipantsEnergyPost,
		description: descriptionconferenceRoomsParticipantsEnergyPost,
	},
	{
		name: 'Conference Rooms Participants Kick',
		value: 'conferenceRoomsParticipantsKickPost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/kick',
		execute: executeconferenceRoomsParticipantsKickPost,
		description: descriptionconferenceRoomsParticipantsKickPost,
	},
	{
		name: 'Conference Rooms Participants Mute',
		value: 'conferenceRoomsParticipantsMutePost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/mute',
		execute: executeconferenceRoomsParticipantsMutePost,
		description: descriptionconferenceRoomsParticipantsMutePost,
	},
	{
		name: 'Conference Rooms Participants Undeaf',
		value: 'conferenceRoomsParticipantsUndeafPost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/undeaf',
		execute: executeconferenceRoomsParticipantsUndeafPost,
		description: descriptionconferenceRoomsParticipantsUndeafPost,
	},
	{
		name: 'Conference Rooms Participants Unmute',
		value: 'conferenceRoomsParticipantsUnmutePost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/participants/{x}/unmute',
		execute: executeconferenceRoomsParticipantsUnmutePost,
		description: descriptionconferenceRoomsParticipantsUnmutePost,
	},
	{
		name: 'Conference Rooms Stats',
		value: 'conferenceRoomsStatsListGet',
		action: 'Execute the GET on conference/{x}/roomsStats',
		execute: executeconferenceRoomsStatsListGet,
		description: descriptionconferenceRoomsStatsListGet,
	},
	{
		name: 'Conference Rooms Unlock',
		value: 'conferenceRoomsUnlockPost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/unlock',
		execute: executeconferenceRoomsUnlockPost,
		description: descriptionconferenceRoomsUnlockPost,
	},
	{
		name: 'Conference Rooms Web Access',
		value: 'conferenceRoomsWebAccessListGet',
		action: 'Execute the GET on conference/{x}/rooms/{x}/webAccess',
		execute: executeconferenceRoomsWebAccessListGet,
		description: descriptionconferenceRoomsWebAccessListGet,
	},
	{
		name: 'Conference Rooms Web Access (2)',
		value: 'conferenceRoomsWebAccessPost',
		action: 'Execute the POST on conference/{x}/rooms/{x}/webAccess',
		execute: executeconferenceRoomsWebAccessPost,
		description: descriptionconferenceRoomsWebAccessPost,
	},
	{
		name: 'Conference Rooms Web Access (3)',
		value: 'conferenceRoomsWebAccessDelete',
		action: 'Execute the DELETE on conference/{x}/rooms/{x}/webAccess/{x}',
		execute: executeconferenceRoomsWebAccessDelete,
		description: descriptionconferenceRoomsWebAccessDelete,
	},
	{
		name: 'Conference Rooms Web Access (4)',
		value: 'conferenceRoomsWebAccessGet',
		action: 'Execute the GET on conference/{x}/rooms/{x}/webAccess/{x}',
		execute: executeconferenceRoomsWebAccessGet,
		description: descriptionconferenceRoomsWebAccessGet,
	},
	{
		name: 'Conference Settings',
		value: 'conferenceSettingsListGet',
		action: 'Execute the GET on conference/{x}/settings',
		execute: executeconferenceSettingsListGet,
		description: descriptionconferenceSettingsListGet,
	},
	{
		name: 'Conference Settings (2)',
		value: 'conferenceSettingsPut',
		action: 'Execute the PUT on conference/{x}/settings',
		execute: executeconferenceSettingsPut,
		description: descriptionconferenceSettingsPut,
	},
	{
		name: 'Conference Unlock',
		value: 'conferenceUnlockPost',
		action: 'Execute the POST on conference/{x}/unlock',
		execute: executeconferenceUnlockPost,
		description: descriptionconferenceUnlockPost,
	},
	{
		name: 'Conference Web Access',
		value: 'conferenceWebAccessListGet',
		action: 'Execute the GET on conference/{x}/webAccess',
		execute: executeconferenceWebAccessListGet,
		description: descriptionconferenceWebAccessListGet,
	},
	{
		name: 'Conference Web Access (2)',
		value: 'conferenceWebAccessPost',
		action: 'Execute the POST on conference/{x}/webAccess',
		execute: executeconferenceWebAccessPost,
		description: descriptionconferenceWebAccessPost,
	},
	{
		name: 'Conference Web Access (3)',
		value: 'conferenceWebAccessDelete',
		action: 'Execute the DELETE on conference/{x}/webAccess/{x}',
		execute: executeconferenceWebAccessDelete,
		description: descriptionconferenceWebAccessDelete,
	},
	{
		name: 'Conference Web Access (4)',
		value: 'conferenceWebAccessGet',
		action: 'Execute the GET on conference/{x}/webAccess/{x}',
		execute: executeconferenceWebAccessGet,
		description: descriptionconferenceWebAccessGet,
	},
	{
		name: 'Create Hardware',
		value: 'linesHardwarePost',
		action: 'Add hardware to a line',
		execute: executeLinesHardwarePost,
		description: descriptionLinesHardwarePost,
	},
	{
		name: 'Create Number',
		value: 'linesNumberPost',
		action: 'Add a number to a line',
		execute: executeLinesNumberPost,
		description: descriptionLinesNumberPost,
	},
	{
		name: 'Create Portability',
		value: 'linesPortabilityPost',
		action: 'Create a portability request for a line',
		execute: executeLinesPortabilityPost,
		description: descriptionLinesPortabilityPost,
	},
	{
		name: 'Create SIM',
		value: 'linesSimPost',
		action: 'Add a SIM to a line',
		execute: executeLinesSimPost,
		description: descriptionLinesSimPost,
	},
	{
		name: 'Ddi',
		value: 'ddiListGet',
		action: 'Execute the GET on ddi',
		execute: executeddiListGet,
		description: descriptionddiListGet,
	},
	{
		name: 'Ddi (2)',
		value: 'ddiGet',
		action: 'Execute the GET on ddi/{x}',
		execute: executeddiGet,
		description: descriptionddiGet,
	},
	{
		name: 'Ddi (3)',
		value: 'ddiPut',
		action: 'Execute the PUT on ddi/{x}',
		execute: executeddiPut,
		description: descriptionddiPut,
	},
	{
		name: 'Ddi Change Destination',
		value: 'ddiChangeDestinationPost',
		action: 'Execute the POST on ddi/{x}/changeDestination',
		execute: executeddiChangeDestinationPost,
		description: descriptionddiChangeDestinationPost,
	},
	{
		name: 'Delete Number',
		value: 'linesNumberDelete',
		action: 'Delete a number from a line',
		execute: executeLinesNumberDelete,
		description: descriptionLinesNumberDelete,
	},
	{
		name: 'Delete Portability',
		value: 'linesPortabilityDelete',
		action: 'Delete a portability request',
		execute: executeLinesPortabilityDelete,
		description: descriptionLinesPortabilityDelete,
	},
	{
		name: 'Delete SIM',
		value: 'linesSimDelete',
		action: 'Delete a SIM from a line',
		execute: executeLinesSimDelete,
		description: descriptionLinesSimDelete,
	},
	{
		name: 'Easy Hunting',
		value: 'easyHuntingListGet',
		action: 'Execute the GET on easyHunting',
		execute: executeeasyHuntingListGet,
		description: descriptioneasyHuntingListGet,
	},
	{
		name: 'Easy Hunting (2)',
		value: 'easyHuntingGet',
		action: 'Execute the GET on easyHunting/{x}',
		execute: executeeasyHuntingGet,
		description: descriptioneasyHuntingGet,
	},
	{
		name: 'Easy Hunting (3)',
		value: 'easyHuntingPut',
		action: 'Execute the PUT on easyHunting/{x}',
		execute: executeeasyHuntingPut,
		description: descriptioneasyHuntingPut,
	},
	{
		name: 'Easy Hunting Hunting',
		value: 'easyHuntingHuntingListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting',
		execute: executeeasyHuntingHuntingListGet,
		description: descriptioneasyHuntingHuntingListGet,
	},
	{
		name: 'Easy Hunting Hunting (2)',
		value: 'easyHuntingHuntingPut',
		action: 'Execute the PUT on easyHunting/{x}/hunting',
		execute: executeeasyHuntingHuntingPut,
		description: descriptioneasyHuntingHuntingPut,
	},
	{
		name: 'Easy Hunting Hunting Agent',
		value: 'easyHuntingHuntingAgentListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent',
		execute: executeeasyHuntingHuntingAgentListGet,
		description: descriptioneasyHuntingHuntingAgentListGet,
	},
	{
		name: 'Easy Hunting Hunting Agent (2)',
		value: 'easyHuntingHuntingAgentPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent',
		execute: executeeasyHuntingHuntingAgentPost,
		description: descriptioneasyHuntingHuntingAgentPost,
	},
	{
		name: 'Easy Hunting Hunting Agent (3)',
		value: 'easyHuntingHuntingAgentDelete',
		action: 'Execute the DELETE on easyHunting/{x}/hunting/agent/{x}',
		execute: executeeasyHuntingHuntingAgentDelete,
		description: descriptioneasyHuntingHuntingAgentDelete,
	},
	{
		name: 'Easy Hunting Hunting Agent (4)',
		value: 'easyHuntingHuntingAgentGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}',
		execute: executeeasyHuntingHuntingAgentGet,
		description: descriptioneasyHuntingHuntingAgentGet,
	},
	{
		name: 'Easy Hunting Hunting Agent (5)',
		value: 'easyHuntingHuntingAgentPut',
		action: 'Execute the PUT on easyHunting/{x}/hunting/agent/{x}',
		execute: executeeasyHuntingHuntingAgentPut,
		description: descriptioneasyHuntingHuntingAgentPut,
	},
	{
		name: 'Easy Hunting Hunting Agent Banner Access',
		value: 'easyHuntingHuntingAgentBannerAccessDelete',
		action: 'Execute the DELETE on easyHunting/{x}/hunting/agent/{x}/bannerAccess',
		execute: executeeasyHuntingHuntingAgentBannerAccessDelete,
		description: descriptioneasyHuntingHuntingAgentBannerAccessDelete,
	},
	{
		name: 'Easy Hunting Hunting Agent Banner Access (2)',
		value: 'easyHuntingHuntingAgentBannerAccessListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/bannerAccess',
		execute: executeeasyHuntingHuntingAgentBannerAccessListGet,
		description: descriptioneasyHuntingHuntingAgentBannerAccessListGet,
	},
	{
		name: 'Easy Hunting Hunting Agent Banner Access (3)',
		value: 'easyHuntingHuntingAgentBannerAccessPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/bannerAccess',
		execute: executeeasyHuntingHuntingAgentBannerAccessPost,
		description: descriptioneasyHuntingHuntingAgentBannerAccessPost,
	},
	{
		name: 'Easy Hunting Hunting Agent Calls',
		value: 'easyHuntingHuntingAgentCallsListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/calls',
		execute: executeeasyHuntingHuntingAgentCallsListGet,
		description: descriptioneasyHuntingHuntingAgentCallsListGet,
	},
	{
		name: 'Easy Hunting Hunting Agent Calls (2)',
		value: 'easyHuntingHuntingAgentCallsGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/calls/{x}',
		execute: executeeasyHuntingHuntingAgentCallsGet,
		description: descriptioneasyHuntingHuntingAgentCallsGet,
	},
	{
		name: 'Easy Hunting Hunting Agent Calls Eavesdrop',
		value: 'easyHuntingHuntingAgentCallsEavesdropPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/eavesdrop',
		execute: executeeasyHuntingHuntingAgentCallsEavesdropPost,
		description: descriptioneasyHuntingHuntingAgentCallsEavesdropPost,
	},
	{
		name: 'Easy Hunting Hunting Agent Calls Hangup',
		value: 'easyHuntingHuntingAgentCallsHangupPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/hangup',
		execute: executeeasyHuntingHuntingAgentCallsHangupPost,
		description: descriptioneasyHuntingHuntingAgentCallsHangupPost,
	},
	{
		name: 'Easy Hunting Hunting Agent Calls Hold',
		value: 'easyHuntingHuntingAgentCallsHoldPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/hold',
		execute: executeeasyHuntingHuntingAgentCallsHoldPost,
		description: descriptioneasyHuntingHuntingAgentCallsHoldPost,
	},
	{
		name: 'Easy Hunting Hunting Agent Calls Intercept',
		value: 'easyHuntingHuntingAgentCallsInterceptPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/intercept',
		execute: executeeasyHuntingHuntingAgentCallsInterceptPost,
		description: descriptioneasyHuntingHuntingAgentCallsInterceptPost,
	},
	{
		name: 'Easy Hunting Hunting Agent Calls Transfer',
		value: 'easyHuntingHuntingAgentCallsTransferPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/transfer',
		execute: executeeasyHuntingHuntingAgentCallsTransferPost,
		description: descriptioneasyHuntingHuntingAgentCallsTransferPost,
	},
	{
		name: 'Easy Hunting Hunting Agent Calls Whisper',
		value: 'easyHuntingHuntingAgentCallsWhisperPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/calls/{x}/whisper',
		execute: executeeasyHuntingHuntingAgentCallsWhisperPost,
		description: descriptioneasyHuntingHuntingAgentCallsWhisperPost,
	},
	{
		name: 'Easy Hunting Hunting Agent Event Token',
		value: 'easyHuntingHuntingAgentEventTokenDelete',
		action: 'Execute the DELETE on easyHunting/{x}/hunting/agent/{x}/eventToken',
		execute: executeeasyHuntingHuntingAgentEventTokenDelete,
		description: descriptioneasyHuntingHuntingAgentEventTokenDelete,
	},
	{
		name: 'Easy Hunting Hunting Agent Event Token (2)',
		value: 'easyHuntingHuntingAgentEventTokenListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/eventToken',
		execute: executeeasyHuntingHuntingAgentEventTokenListGet,
		description: descriptioneasyHuntingHuntingAgentEventTokenListGet,
	},
	{
		name: 'Easy Hunting Hunting Agent Event Token (3)',
		value: 'easyHuntingHuntingAgentEventTokenPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/eventToken',
		execute: executeeasyHuntingHuntingAgentEventTokenPost,
		description: descriptioneasyHuntingHuntingAgentEventTokenPost,
	},
	{
		name: 'Easy Hunting Hunting Agent Live Status',
		value: 'easyHuntingHuntingAgentLiveStatusListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/liveStatus',
		execute: executeeasyHuntingHuntingAgentLiveStatusListGet,
		description: descriptioneasyHuntingHuntingAgentLiveStatusListGet,
	},
	{
		name: 'Easy Hunting Hunting Agent Queue',
		value: 'easyHuntingHuntingAgentQueueListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/queue',
		execute: executeeasyHuntingHuntingAgentQueueListGet,
		description: descriptioneasyHuntingHuntingAgentQueueListGet,
	},
	{
		name: 'Easy Hunting Hunting Agent Queue (2)',
		value: 'easyHuntingHuntingAgentQueuePost',
		action: 'Execute the POST on easyHunting/{x}/hunting/agent/{x}/queue',
		execute: executeeasyHuntingHuntingAgentQueuePost,
		description: descriptioneasyHuntingHuntingAgentQueuePost,
	},
	{
		name: 'Easy Hunting Hunting Agent Queue (3)',
		value: 'easyHuntingHuntingAgentQueueDelete',
		action: 'Execute the DELETE on easyHunting/{x}/hunting/agent/{x}/queue/{x}',
		execute: executeeasyHuntingHuntingAgentQueueDelete,
		description: descriptioneasyHuntingHuntingAgentQueueDelete,
	},
	{
		name: 'Easy Hunting Hunting Agent Queue (4)',
		value: 'easyHuntingHuntingAgentQueueGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/queue/{x}',
		execute: executeeasyHuntingHuntingAgentQueueGet,
		description: descriptioneasyHuntingHuntingAgentQueueGet,
	},
	{
		name: 'Easy Hunting Hunting Agent Queue (5)',
		value: 'easyHuntingHuntingAgentQueuePut',
		action: 'Execute the PUT on easyHunting/{x}/hunting/agent/{x}/queue/{x}',
		execute: executeeasyHuntingHuntingAgentQueuePut,
		description: descriptioneasyHuntingHuntingAgentQueuePut,
	},
	{
		name: 'Easy Hunting Hunting Agent Queue Live Status',
		value: 'easyHuntingHuntingAgentQueueLiveStatusListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/agent/{x}/queue/{x}/liveStatus',
		execute: executeeasyHuntingHuntingAgentQueueLiveStatusListGet,
		description: descriptioneasyHuntingHuntingAgentQueueLiveStatusListGet,
	},
	{
		name: 'Easy Hunting Hunting Custom Status',
		value: 'easyHuntingHuntingCustomStatusListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/customStatus',
		execute: executeeasyHuntingHuntingCustomStatusListGet,
		description: descriptioneasyHuntingHuntingCustomStatusListGet,
	},
	{
		name: 'Easy Hunting Hunting Custom Status (2)',
		value: 'easyHuntingHuntingCustomStatusPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/customStatus',
		execute: executeeasyHuntingHuntingCustomStatusPost,
		description: descriptioneasyHuntingHuntingCustomStatusPost,
	},
	{
		name: 'Easy Hunting Hunting Custom Status (3)',
		value: 'easyHuntingHuntingCustomStatusDelete',
		action: 'Execute the DELETE on easyHunting/{x}/hunting/customStatus/{x}',
		execute: executeeasyHuntingHuntingCustomStatusDelete,
		description: descriptioneasyHuntingHuntingCustomStatusDelete,
	},
	{
		name: 'Easy Hunting Hunting Custom Status (4)',
		value: 'easyHuntingHuntingCustomStatusGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/customStatus/{x}',
		execute: executeeasyHuntingHuntingCustomStatusGet,
		description: descriptioneasyHuntingHuntingCustomStatusGet,
	},
	{
		name: 'Easy Hunting Hunting Event Token',
		value: 'easyHuntingHuntingEventTokenDelete',
		action: 'Execute the DELETE on easyHunting/{x}/hunting/eventToken',
		execute: executeeasyHuntingHuntingEventTokenDelete,
		description: descriptioneasyHuntingHuntingEventTokenDelete,
	},
	{
		name: 'Easy Hunting Hunting Event Token (2)',
		value: 'easyHuntingHuntingEventTokenListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/eventToken',
		execute: executeeasyHuntingHuntingEventTokenListGet,
		description: descriptioneasyHuntingHuntingEventTokenListGet,
	},
	{
		name: 'Easy Hunting Hunting Event Token (3)',
		value: 'easyHuntingHuntingEventTokenPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/eventToken',
		execute: executeeasyHuntingHuntingEventTokenPost,
		description: descriptioneasyHuntingHuntingEventTokenPost,
	},
	{
		name: 'Easy Hunting Hunting Queue',
		value: 'easyHuntingHuntingQueueListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/queue',
		execute: executeeasyHuntingHuntingQueueListGet,
		description: descriptioneasyHuntingHuntingQueueListGet,
	},
	{
		name: 'Easy Hunting Hunting Queue (2)',
		value: 'easyHuntingHuntingQueuePost',
		action: 'Execute the POST on easyHunting/{x}/hunting/queue',
		execute: executeeasyHuntingHuntingQueuePost,
		description: descriptioneasyHuntingHuntingQueuePost,
	},
	{
		name: 'Easy Hunting Hunting Queue (3)',
		value: 'easyHuntingHuntingQueueDelete',
		action: 'Execute the DELETE on easyHunting/{x}/hunting/queue/{x}',
		execute: executeeasyHuntingHuntingQueueDelete,
		description: descriptioneasyHuntingHuntingQueueDelete,
	},
	{
		name: 'Easy Hunting Hunting Queue (4)',
		value: 'easyHuntingHuntingQueueGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}',
		execute: executeeasyHuntingHuntingQueueGet,
		description: descriptioneasyHuntingHuntingQueueGet,
	},
	{
		name: 'Easy Hunting Hunting Queue (5)',
		value: 'easyHuntingHuntingQueuePut',
		action: 'Execute the PUT on easyHunting/{x}/hunting/queue/{x}',
		execute: executeeasyHuntingHuntingQueuePut,
		description: descriptioneasyHuntingHuntingQueuePut,
	},
	{
		name: 'Easy Hunting Hunting Queue Agent',
		value: 'easyHuntingHuntingQueueAgentListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/agent',
		execute: executeeasyHuntingHuntingQueueAgentListGet,
		description: descriptioneasyHuntingHuntingQueueAgentListGet,
	},
	{
		name: 'Easy Hunting Hunting Queue Agent (2)',
		value: 'easyHuntingHuntingQueueAgentPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/agent',
		execute: executeeasyHuntingHuntingQueueAgentPost,
		description: descriptioneasyHuntingHuntingQueueAgentPost,
	},
	{
		name: 'Easy Hunting Hunting Queue Agent (3)',
		value: 'easyHuntingHuntingQueueAgentDelete',
		action: 'Execute the DELETE on easyHunting/{x}/hunting/queue/{x}/agent/{x}',
		execute: executeeasyHuntingHuntingQueueAgentDelete,
		description: descriptioneasyHuntingHuntingQueueAgentDelete,
	},
	{
		name: 'Easy Hunting Hunting Queue Agent (4)',
		value: 'easyHuntingHuntingQueueAgentGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/agent/{x}',
		execute: executeeasyHuntingHuntingQueueAgentGet,
		description: descriptioneasyHuntingHuntingQueueAgentGet,
	},
	{
		name: 'Easy Hunting Hunting Queue Agent (5)',
		value: 'easyHuntingHuntingQueueAgentPut',
		action: 'Execute the PUT on easyHunting/{x}/hunting/queue/{x}/agent/{x}',
		execute: executeeasyHuntingHuntingQueueAgentPut,
		description: descriptioneasyHuntingHuntingQueueAgentPut,
	},
	{
		name: 'Easy Hunting Hunting Queue Agent Live Status',
		value: 'easyHuntingHuntingQueueAgentLiveStatusListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/agent/{x}/liveStatus',
		execute: executeeasyHuntingHuntingQueueAgentLiveStatusListGet,
		description: descriptioneasyHuntingHuntingQueueAgentLiveStatusListGet,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Calls',
		value: 'easyHuntingHuntingQueueLiveCallsListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/liveCalls',
		execute: executeeasyHuntingHuntingQueueLiveCallsListGet,
		description: descriptioneasyHuntingHuntingQueueLiveCallsListGet,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Calls (2)',
		value: 'easyHuntingHuntingQueueLiveCallsGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}',
		execute: executeeasyHuntingHuntingQueueLiveCallsGet,
		description: descriptioneasyHuntingHuntingQueueLiveCallsGet,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Calls Eavesdrop',
		value: 'easyHuntingHuntingQueueLiveCallsEavesdropPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/eavesdrop',
		execute: executeeasyHuntingHuntingQueueLiveCallsEavesdropPost,
		description: descriptioneasyHuntingHuntingQueueLiveCallsEavesdropPost,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Calls Hangup',
		value: 'easyHuntingHuntingQueueLiveCallsHangupPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/hangup',
		execute: executeeasyHuntingHuntingQueueLiveCallsHangupPost,
		description: descriptioneasyHuntingHuntingQueueLiveCallsHangupPost,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Calls Hold',
		value: 'easyHuntingHuntingQueueLiveCallsHoldPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/hold',
		execute: executeeasyHuntingHuntingQueueLiveCallsHoldPost,
		description: descriptioneasyHuntingHuntingQueueLiveCallsHoldPost,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Calls Intercept',
		value: 'easyHuntingHuntingQueueLiveCallsInterceptPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/intercept',
		execute: executeeasyHuntingHuntingQueueLiveCallsInterceptPost,
		description: descriptioneasyHuntingHuntingQueueLiveCallsInterceptPost,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Calls Transfer',
		value: 'easyHuntingHuntingQueueLiveCallsTransferPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/transfer',
		execute: executeeasyHuntingHuntingQueueLiveCallsTransferPost,
		description: descriptioneasyHuntingHuntingQueueLiveCallsTransferPost,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Calls Whisper',
		value: 'easyHuntingHuntingQueueLiveCallsWhisperPost',
		action: 'Execute the POST on easyHunting/{x}/hunting/queue/{x}/liveCalls/{x}/whisper',
		execute: executeeasyHuntingHuntingQueueLiveCallsWhisperPost,
		description: descriptioneasyHuntingHuntingQueueLiveCallsWhisperPost,
	},
	{
		name: 'Easy Hunting Hunting Queue Live Statistics',
		value: 'easyHuntingHuntingQueueLiveStatisticsListGet',
		action: 'Execute the GET on easyHunting/{x}/hunting/queue/{x}/liveStatistics',
		execute: executeeasyHuntingHuntingQueueLiveStatisticsListGet,
		description: descriptioneasyHuntingHuntingQueueLiveStatisticsListGet,
	},
	{
		name: 'Easy Hunting Records',
		value: 'easyHuntingRecordsListGet',
		action: 'Execute the GET on easyHunting/{x}/records',
		execute: executeeasyHuntingRecordsListGet,
		description: descriptioneasyHuntingRecordsListGet,
	},
	{
		name: 'Easy Hunting Records (2)',
		value: 'easyHuntingRecordsDelete',
		action: 'Execute the DELETE on easyHunting/{x}/records/{x}',
		execute: executeeasyHuntingRecordsDelete,
		description: descriptioneasyHuntingRecordsDelete,
	},
	{
		name: 'Easy Hunting Records (3)',
		value: 'easyHuntingRecordsGet',
		action: 'Execute the GET on easyHunting/{x}/records/{x}',
		execute: executeeasyHuntingRecordsGet,
		description: descriptioneasyHuntingRecordsGet,
	},
	{
		name: 'Easy Hunting Screen List Conditions',
		value: 'easyHuntingScreenListConditionsListGet',
		action: 'Execute the GET on easyHunting/{x}/screenListConditions',
		execute: executeeasyHuntingScreenListConditionsListGet,
		description: descriptioneasyHuntingScreenListConditionsListGet,
	},
	{
		name: 'Easy Hunting Screen List Conditions (2)',
		value: 'easyHuntingScreenListConditionsPut',
		action: 'Execute the PUT on easyHunting/{x}/screenListConditions',
		execute: executeeasyHuntingScreenListConditionsPut,
		description: descriptioneasyHuntingScreenListConditionsPut,
	},
	{
		name: 'Easy Hunting Screen List Conditions Conditions',
		value: 'easyHuntingScreenListConditionsConditionsListGet',
		action: 'Execute the GET on easyHunting/{x}/screenListConditions/conditions',
		execute: executeeasyHuntingScreenListConditionsConditionsListGet,
		description: descriptioneasyHuntingScreenListConditionsConditionsListGet,
	},
	{
		name: 'Easy Hunting Screen List Conditions Conditions (2)',
		value: 'easyHuntingScreenListConditionsConditionsPost',
		action: 'Execute the POST on easyHunting/{x}/screenListConditions/conditions',
		execute: executeeasyHuntingScreenListConditionsConditionsPost,
		description: descriptioneasyHuntingScreenListConditionsConditionsPost,
	},
	{
		name: 'Easy Hunting Screen List Conditions Conditions (3)',
		value: 'easyHuntingScreenListConditionsConditionsDelete',
		action: 'Execute the DELETE on easyHunting/{x}/screenListConditions/conditions/{x}',
		execute: executeeasyHuntingScreenListConditionsConditionsDelete,
		description: descriptioneasyHuntingScreenListConditionsConditionsDelete,
	},
	{
		name: 'Easy Hunting Screen List Conditions Conditions (4)',
		value: 'easyHuntingScreenListConditionsConditionsGet',
		action: 'Execute the GET on easyHunting/{x}/screenListConditions/conditions/{x}',
		execute: executeeasyHuntingScreenListConditionsConditionsGet,
		description: descriptioneasyHuntingScreenListConditionsConditionsGet,
	},
	{
		name: 'Easy Hunting Screen List Conditions Conditions (5)',
		value: 'easyHuntingScreenListConditionsConditionsPut',
		action: 'Execute the PUT on easyHunting/{x}/screenListConditions/conditions/{x}',
		execute: executeeasyHuntingScreenListConditionsConditionsPut,
		description: descriptioneasyHuntingScreenListConditionsConditionsPut,
	},
	{
		name: 'Easy Hunting Sound',
		value: 'easyHuntingSoundListGet',
		action: 'Execute the GET on easyHunting/{x}/sound',
		execute: executeeasyHuntingSoundListGet,
		description: descriptioneasyHuntingSoundListGet,
	},
	{
		name: 'Easy Hunting Sound (2)',
		value: 'easyHuntingSoundDelete',
		action: 'Execute the DELETE on easyHunting/{x}/sound/{x}',
		execute: executeeasyHuntingSoundDelete,
		description: descriptioneasyHuntingSoundDelete,
	},
	{
		name: 'Easy Hunting Sound (3)',
		value: 'easyHuntingSoundGet',
		action: 'Execute the GET on easyHunting/{x}/sound/{x}',
		execute: executeeasyHuntingSoundGet,
		description: descriptioneasyHuntingSoundGet,
	},
	{
		name: 'Easy Hunting Sound Upload',
		value: 'easyHuntingSoundUploadPost',
		action: 'Execute the POST on easyHunting/{x}/soundUpload',
		execute: executeeasyHuntingSoundUploadPost,
		description: descriptioneasyHuntingSoundUploadPost,
	},
	{
		name: 'Easy Hunting Time Conditions',
		value: 'easyHuntingTimeConditionsListGet',
		action: 'Execute the GET on easyHunting/{x}/timeConditions',
		execute: executeeasyHuntingTimeConditionsListGet,
		description: descriptioneasyHuntingTimeConditionsListGet,
	},
	{
		name: 'Easy Hunting Time Conditions (2)',
		value: 'easyHuntingTimeConditionsPut',
		action: 'Execute the PUT on easyHunting/{x}/timeConditions',
		execute: executeeasyHuntingTimeConditionsPut,
		description: descriptioneasyHuntingTimeConditionsPut,
	},
	{
		name: 'Easy Hunting Time Conditions Conditions',
		value: 'easyHuntingTimeConditionsConditionsListGet',
		action: 'Execute the GET on easyHunting/{x}/timeConditions/conditions',
		execute: executeeasyHuntingTimeConditionsConditionsListGet,
		description: descriptioneasyHuntingTimeConditionsConditionsListGet,
	},
	{
		name: 'Easy Hunting Time Conditions Conditions (2)',
		value: 'easyHuntingTimeConditionsConditionsPost',
		action: 'Execute the POST on easyHunting/{x}/timeConditions/conditions',
		execute: executeeasyHuntingTimeConditionsConditionsPost,
		description: descriptioneasyHuntingTimeConditionsConditionsPost,
	},
	{
		name: 'Easy Hunting Time Conditions Conditions (3)',
		value: 'easyHuntingTimeConditionsConditionsDelete',
		action: 'Execute the DELETE on easyHunting/{x}/timeConditions/conditions/{x}',
		execute: executeeasyHuntingTimeConditionsConditionsDelete,
		description: descriptioneasyHuntingTimeConditionsConditionsDelete,
	},
	{
		name: 'Easy Hunting Time Conditions Conditions (4)',
		value: 'easyHuntingTimeConditionsConditionsGet',
		action: 'Execute the GET on easyHunting/{x}/timeConditions/conditions/{x}',
		execute: executeeasyHuntingTimeConditionsConditionsGet,
		description: descriptioneasyHuntingTimeConditionsConditionsGet,
	},
	{
		name: 'Easy Hunting Time Conditions Conditions (5)',
		value: 'easyHuntingTimeConditionsConditionsPut',
		action: 'Execute the PUT on easyHunting/{x}/timeConditions/conditions/{x}',
		execute: executeeasyHuntingTimeConditionsConditionsPut,
		description: descriptioneasyHuntingTimeConditionsConditionsPut,
	},
	{
		name: 'Event Token',
		value: 'eventTokenDelete',
		action: 'Execute the DELETE on eventToken',
		execute: executeeventTokenDelete,
		description: descriptioneventTokenDelete,
	},
	{
		name: 'Event Token (2)',
		value: 'eventTokenListGet',
		action: 'Execute the GET on eventToken',
		execute: executeeventTokenListGet,
		description: descriptioneventTokenListGet,
	},
	{
		name: 'Event Token (3)',
		value: 'eventTokenPost',
		action: 'Execute the POST on eventToken',
		execute: executeeventTokenPost,
		description: descriptioneventTokenPost,
	},
	{
		name: 'Fax Campaigns Create',
		value: 'faxCampaignsPost',
		action: 'Create a new fax campaign',
		execute: executefaxCampaignsPost,
		description: descriptionfaxCampaignsPost,
	},
	{
		name: 'Fax Campaigns Delete',
		value: 'faxCampaignsDelete',
		action: 'Delete a fax campaign',
		execute: executefaxCampaignsDelete,
		description: descriptionfaxCampaignsDelete,
	},
	{
		name: 'Fax Campaigns Detail List',
		value: 'faxCampaignsDetailListGet',
		action: 'Detail of the fax recipients by status',
		execute: executefaxCampaignsDetailListGet,
		description: descriptionfaxCampaignsDetailListGet,
	},
	{
		name: 'Fax Campaigns Get',
		value: 'faxCampaignsGet',
		action: 'Get this object properties',
		execute: executefaxCampaignsGet,
		description: descriptionfaxCampaignsGet,
	},
	{
		name: 'Fax Campaigns List',
		value: 'faxCampaignsListGet',
		action: 'Fax campaigns of the associate fax',
		execute: executefaxCampaignsListGet,
		description: descriptionfaxCampaignsListGet,
	},
	{
		name: 'Fax Campaigns Start Create',
		value: 'faxCampaignsStartPost',
		action: 'Start a fax campaign',
		execute: executefaxCampaignsStartPost,
		description: descriptionfaxCampaignsStartPost,
	},
	{
		name: 'Fax Campaigns Stop Create',
		value: 'faxCampaignsStopPost',
		action: 'Stop a fax campaign',
		execute: executefaxCampaignsStopPost,
		description: descriptionfaxCampaignsStopPost,
	},
	{
		name: 'Fax Get',
		value: 'faxGet',
		action: 'Get this object properties',
		execute: executefaxGet,
		description: descriptionfaxGet,
	},
	{
		name: 'Fax List',
		value: 'faxListGet',
		action: 'Faxes associated with this billing account',
		execute: executefaxListGet,
		description: descriptionfaxListGet,
	},
	{
		name: 'Fax Screen Lists Create',
		value: 'faxScreenListsPost',
		action: 'Create a new fax ScreenLists',
		execute: executefaxScreenListsPost,
		description: descriptionfaxScreenListsPost,
	},
	{
		name: 'Fax Screen Lists Delete',
		value: 'faxScreenListsDelete',
		action: 'Delete all fax screenLists',
		execute: executefaxScreenListsDelete,
		description: descriptionfaxScreenListsDelete,
	},
	{
		name: 'Fax Screen Lists List',
		value: 'faxScreenListsListGet',
		action: 'Get this object properties',
		execute: executefaxScreenListsListGet,
		description: descriptionfaxScreenListsListGet,
	},
	{
		name: 'Fax Screen Lists Reset Create',
		value: 'faxScreenListsResetPost',
		action: 'Reset a specifical fax screenList',
		execute: executefaxScreenListsResetPost,
		description: descriptionfaxScreenListsResetPost,
	},
	{
		name: 'Fax Screen Lists Update',
		value: 'faxScreenListsPut',
		action: 'Alter this object properties',
		execute: executefaxScreenListsPut,
		description: descriptionfaxScreenListsPut,
	},
	{
		name: 'Fax Settings Change Password Create',
		value: 'faxSettingsChangePasswordPost',
		action: 'Generates a new password for your fax account',
		execute: executefaxSettingsChangePasswordPost,
		description: descriptionfaxSettingsChangePasswordPost,
	},
	{
		name: 'Fax Settings List',
		value: 'faxSettingsListGet',
		action: 'Get this object properties',
		execute: executefaxSettingsListGet,
		description: descriptionfaxSettingsListGet,
	},
	{
		name: 'Fax Settings Send Fax Create',
		value: 'faxSettingsSendFaxPost',
		action: 'Send a fax',
		execute: executefaxSettingsSendFaxPost,
		description: descriptionfaxSettingsSendFaxPost,
	},
	{
		name: 'Fax Settings Update',
		value: 'faxSettingsPut',
		action: 'Alter this object properties',
		execute: executefaxSettingsPut,
		description: descriptionfaxSettingsPut,
	},
	{
		name: 'Fax Update',
		value: 'faxPut',
		action: 'Alter this object properties',
		execute: executefaxPut,
		description: descriptionfaxPut,
	},
	{
		name: 'Get Alias',
		value: 'aliasGet',
		action: 'Get alias properties',
		execute: executeAliasGet,
		description: descriptionAliasGet,
	},
	{
		name: 'Get Alias Service Info',
		value: 'aliasServiceInfosGet',
		action: 'Get service information for an alias',
		execute: executeAliasServiceInfosGet,
		description: descriptionAliasServiceInfosGet,
	},
	{
		name: 'Get Allowed Credit Threshold',
		value: 'allowedCreditThresholdGet',
		action: 'Get the allowed creditThreshold for this billing account',
		execute: executeallowedCreditThresholdGet,
		description: descriptionallowedCreditThresholdGet,
	},
	{
		name: 'Get Amount Security Deposit',
		value: 'amountSecurityDepositGet',
		action: 'Give all amounts availables for your billing account',
		execute: executeamountSecurityDepositGet,
		description: descriptionamountSecurityDepositGet,
	},
	{
		name: 'Get Billing Account',
		value: 'billingAccountGet',
		action: 'Get this object properties',
		execute: executebillingAccountGet,
		description: descriptionbillingAccountGet,
	},
	{
		name: 'Get Billing Account Site',
		value: 'billingAccountSiteGet',
		action: 'Current billing account site (billing account features are overwritten by the site)',
		execute: executebillingAccountSiteGet,
		description: descriptionbillingAccountSiteGet,
	},
	{
		name: 'Get Line',
		value: 'linesGet',
		action: 'Get line properties',
		execute: executeLinesGet,
		description: descriptionLinesGet,
	},
	{
		name: 'Get Line Offer Details',
		value: 'lineOfferDetailsGet',
		action: 'Get detailed information about a line offer',
		execute: executeLineOfferDetailsGet,
		description: descriptionLineOfferDetailsGet,
	},
	{
		name: 'Get Line Service Info',
		value: 'linesServiceInfosGet',
		action: 'Get service information for a line',
		execute: executeLinesServiceInfosGet,
		description: descriptionLinesServiceInfosGet,
	},
	{
		name: 'Get Number',
		value: 'linesNumberGet',
		action: 'Get number properties',
		execute: executeLinesNumberGet,
		description: descriptionLinesNumberGet,
	},
	{
		name: 'Get Offer Phones',
		value: 'lineOfferPhonesGet',
		action: 'Get phones for a line offer',
		execute: executeLineOfferPhonesGet,
		description: descriptionLineOfferPhonesGet,
	},
	{
		name: 'Get Portability',
		value: 'linesPortabilityGet',
		action: 'Get portability details',
		execute: executeLinesPortabilityGet,
		description: descriptionLinesPortabilityGet,
	},
	{
		name: 'Get SIM',
		value: 'linesSimGet',
		action: 'Get SIM properties',
		execute: executeLinesSimGet,
		description: descriptionLinesSimGet,
	},
	{
		name: 'Get Trunk',
		value: 'trunksGet',
		action: 'Get trunk properties',
		execute: executeTrunksGet,
		description: descriptionTrunksGet,
	},
	{
		name: 'Get Trunk Service Info',
		value: 'trunksServiceInfosGet',
		action: 'Get service information for a trunk',
		execute: executeTrunksServiceInfosGet,
		description: descriptionTrunksServiceInfosGet,
	},
	{
		name: 'Has Special Numbers',
		value: 'hasSpecialNumbersListGet',
		action: 'Execute the GET on hasSpecialNumbers',
		execute: executehasSpecialNumbersListGet,
		description: descriptionhasSpecialNumbersListGet,
	},
	{
		name: 'History Consumption',
		value: 'historyConsumptionListGet',
		action: 'Execute the GET on historyConsumption',
		execute: executehistoryConsumptionListGet,
		description: descriptionhistoryConsumptionListGet,
	},
	{
		name: 'History Consumption (2)',
		value: 'historyConsumptionGet',
		action: 'Execute the GET on historyConsumption/{x}',
		execute: executehistoryConsumptionGet,
		description: descriptionhistoryConsumptionGet,
	},
	{
		name: 'History Consumption File',
		value: 'historyConsumptionFileListGet',
		action: 'Execute the GET on historyConsumption/{x}/file',
		execute: executehistoryConsumptionFileListGet,
		description: descriptionhistoryConsumptionFileListGet,
	},
	{
		name: 'History Repayment Consumption',
		value: 'historyRepaymentConsumptionListGet',
		action: 'Execute the GET on historyRepaymentConsumption',
		execute: executehistoryRepaymentConsumptionListGet,
		description: descriptionhistoryRepaymentConsumptionListGet,
	},
	{
		name: 'History Repayment Consumption (2)',
		value: 'historyRepaymentConsumptionPost',
		action: 'Execute the POST on historyRepaymentConsumption',
		execute: executehistoryRepaymentConsumptionPost,
		description: descriptionhistoryRepaymentConsumptionPost,
	},
	{
		name: 'History Repayment Consumption (3)',
		value: 'historyRepaymentConsumptionGet',
		action: 'Execute the GET on historyRepaymentConsumption/{x}',
		execute: executehistoryRepaymentConsumptionGet,
		description: descriptionhistoryRepaymentConsumptionGet,
	},
	{
		name: 'History Repayment Consumption Document',
		value: 'historyRepaymentConsumptionDocumentListGet',
		action: 'Execute the GET on historyRepaymentConsumption/{x}/document',
		execute: executehistoryRepaymentConsumptionDocumentListGet,
		description: descriptionhistoryRepaymentConsumptionDocumentListGet,
	},
	{
		name: 'History Tollfree Consumption',
		value: 'historyTollfreeConsumptionListGet',
		action: 'Execute the GET on historyTollfreeConsumption',
		execute: executehistoryTollfreeConsumptionListGet,
		description: descriptionhistoryTollfreeConsumptionListGet,
	},
	{
		name: 'History Tollfree Consumption (2)',
		value: 'historyTollfreeConsumptionGet',
		action: 'Execute the GET on historyTollfreeConsumption/{x}',
		execute: executehistoryTollfreeConsumptionGet,
		description: descriptionhistoryTollfreeConsumptionGet,
	},
	{
		name: 'History Tollfree Consumption Document',
		value: 'historyTollfreeConsumptionDocumentListGet',
		action: 'Execute the GET on historyTollfreeConsumption/{x}/document',
		execute: executehistoryTollfreeConsumptionDocumentListGet,
		description: descriptionhistoryTollfreeConsumptionDocumentListGet,
	},
	{
		name: 'Line Abbreviated Number Create',
		value: 'lineAbbreviatedNumberPost',
		action: 'Create a new abbreviated number for the line',
		execute: executelineAbbreviatedNumberPost,
		description: descriptionlineAbbreviatedNumberPost,
	},
	{
		name: 'Line Abbreviated Number Delete',
		value: 'lineAbbreviatedNumberDelete',
		action: 'Delete the given abbreviated number',
		execute: executelineAbbreviatedNumberDelete,
		description: descriptionlineAbbreviatedNumberDelete,
	},
	{
		name: 'Line Abbreviated Number Get',
		value: 'lineAbbreviatedNumberGet',
		action: 'Get this object properties',
		execute: executelineAbbreviatedNumberGet,
		description: descriptionlineAbbreviatedNumberGet,
	},
	{
		name: 'Line Abbreviated Number List',
		value: 'lineAbbreviatedNumberListGet',
		action: 'Abbreviated numbers for the line',
		execute: executelineAbbreviatedNumberListGet,
		description: descriptionlineAbbreviatedNumberListGet,
	},
	{
		name: 'Line Abbreviated Number Update',
		value: 'lineAbbreviatedNumberPut',
		action: 'Alter this object properties',
		execute: executelineAbbreviatedNumberPut,
		description: descriptionlineAbbreviatedNumberPut,
	},
	{
		name: 'Line Activate New Phone Create',
		value: 'lineActivateNewPhonePost',
		action: 'Allow to activate new phone, in case of phone switch',
		execute: executelineActivateNewPhonePost,
		description: descriptionlineActivateNewPhonePost,
	},
	{
		name: 'Line Activate New Phone List',
		value: 'lineActivateNewPhoneListGet',
		action: 'Allow to activate new phone, in case of phone switch',
		execute: executelineActivateNewPhoneListGet,
		description: descriptionlineActivateNewPhoneListGet,
	},
	{
		name: 'Line Antihack Create',
		value: 'lineAntihackPost',
		action: 'Clean the antihack or add it on active filter screen list',
		execute: executelineAntihackPost,
		description: descriptionlineAntihackPost,
	},
	{
		name: 'Line Antihack List',
		value: 'lineAntihackListGet',
		action: 'Current list of numbers or short code numbers restricted by an auto antihack',
		execute: executelineAntihackListGet,
		description: descriptionlineAntihackListGet,
	},
	{
		name: 'Line Associate Device Create',
		value: 'lineAssociateDevicePost',
		action: 'Associate a device to the current line with the device mac address',
		execute: executelineAssociateDevicePost,
		description: descriptionlineAssociateDevicePost,
	},
	{
		name: 'Line Automatic Call Create',
		value: 'lineAutomaticCallPost',
		action: 'Make an automatic phone call. Return generated call identifier',
		execute: executelineAutomaticCallPost,
		description: descriptionlineAutomaticCallPost,
	},
	{
		name: 'Line Automatic Call Get',
		value: 'lineAutomaticCallGet',
		action: 'Get this object properties',
		execute: executelineAutomaticCallGet,
		description: descriptionlineAutomaticCallGet,
	},
	{
		name: 'Line Automatic Call List',
		value: 'lineAutomaticCallListGet',
		action: 'Automatic Calls made by Calls Generator on this line',
		execute: executelineAutomaticCallListGet,
		description: descriptionlineAutomaticCallListGet,
	},
	{
		name: 'Line Available Sip Domains List',
		value: 'lineAvailableSipDomainsListGet',
		action: 'Listing of domains Sip availables',
		execute: executelineAvailableSipDomainsListGet,
		description: descriptionlineAvailableSipDomainsListGet,
	},
	{
		name: 'Line Block Create',
		value: 'lineBlockPost',
		action: 'Block the line. By default it will block incoming and outgoing calls (except for emergency numbers)',
		execute: executelineBlockPost,
		description: descriptionlineBlockPost,
	},
	{
		name: 'Line Calls Eavesdrop Create',
		value: 'lineCallsEavesdropPost',
		action: 'Eavesdrop on a call',
		execute: executelineCallsEavesdropPost,
		description: descriptionlineCallsEavesdropPost,
	},
	{
		name: 'Line Calls Get',
		value: 'lineCallsGet',
		action: 'Get this object properties',
		execute: executelineCallsGet,
		description: descriptionlineCallsGet,
	},
	{
		name: 'Line Calls Hangup Create',
		value: 'lineCallsHangupPost',
		action: 'Hangup a call',
		execute: executelineCallsHangupPost,
		description: descriptionlineCallsHangupPost,
	},
	{
		name: 'Line Calls Hold Create',
		value: 'lineCallsHoldPost',
		action: 'Toogle hold on call',
		execute: executelineCallsHoldPost,
		description: descriptionlineCallsHoldPost,
	},
	{
		name: 'Line Calls Intercept Create',
		value: 'lineCallsInterceptPost',
		action: 'Intercept a non answered call',
		execute: executelineCallsInterceptPost,
		description: descriptionlineCallsInterceptPost,
	},
	{
		name: 'Line Calls List',
		value: 'lineCallsListGet',
		action: 'The active calls of your line as a call center agent',
		execute: executelineCallsListGet,
		description: descriptionlineCallsListGet,
	},
	{
		name: 'Line Calls Transfer Create',
		value: 'lineCallsTransferPost',
		action: 'Transfer an answered call',
		execute: executelineCallsTransferPost,
		description: descriptionlineCallsTransferPost,
	},
	{
		name: 'Line Calls Whisper Create',
		value: 'lineCallsWhisperPost',
		action: 'Whisper on a call',
		execute: executelineCallsWhisperPost,
		description: descriptionlineCallsWhisperPost,
	},
	{
		name: 'Line Can Change Password List',
		value: 'lineCanChangePasswordListGet',
		action: 'Ability to manage SIP password on this service',
		execute: executelineCanChangePasswordListGet,
		description: descriptionlineCanChangePasswordListGet,
	},
	{
		name: 'Line Cancel Convert To Number Create',
		value: 'lineCancelConvertToNumberPost',
		action: 'Cancel a scheduled conversion to number',
		execute: executelineCancelConvertToNumberPost,
		description: descriptionlineCancelConvertToNumberPost,
	},
	{
		name: 'Line Change Password Create',
		value: 'lineChangePasswordPost',
		action: 'Change the SIP account password',
		execute: executelineChangePasswordPost,
		description: descriptionlineChangePasswordPost,
	},
	{
		name: 'Line Click2 Call Create',
		value: 'lineClick2CallPost',
		action: 'Make a phone call from the current line',
		execute: executelineClick2CallPost,
		description: descriptionlineClick2CallPost,
	},
	{
		name: 'Line Click2 Call User Change Password Create',
		value: 'lineClick2CallUserChangePasswordPost',
		action: 'Change the password of the click2call user',
		execute: executelineClick2CallUserChangePasswordPost,
		description: descriptionlineClick2CallUserChangePasswordPost,
	},
	{
		name: 'Line Click2 Call User Click2 Call Create',
		value: 'lineClick2CallUserClick2CallPost',
		action: 'Make a phone call from the current line',
		execute: executelineClick2CallUserClick2CallPost,
		description: descriptionlineClick2CallUserClick2CallPost,
	},
	{
		name: 'Line Click2 Call User Create',
		value: 'lineClick2CallUserPost',
		action: 'Create a new user for click 2 call',
		execute: executelineClick2CallUserPost,
		description: descriptionlineClick2CallUserPost,
	},
	{
		name: 'Line Click2 Call User Delete',
		value: 'lineClick2CallUserDelete',
		action: 'Delete a click 2 call user',
		execute: executelineClick2CallUserDelete,
		description: descriptionlineClick2CallUserDelete,
	},
	{
		name: 'Line Click2 Call User Get',
		value: 'lineClick2CallUserGet',
		action: 'Get this object properties',
		execute: executelineClick2CallUserGet,
		description: descriptionlineClick2CallUserGet,
	},
	{
		name: 'Line Click2 Call User List',
		value: 'lineClick2CallUserListGet',
		action: 'User which can use click 2 call on the line',
		execute: executelineClick2CallUserListGet,
		description: descriptionlineClick2CallUserListGet,
	},
	{
		name: 'Line Convert To Number Create',
		value: 'lineConvertToNumberPost',
		action: 'Schedule a conversion to number',
		execute: executelineConvertToNumberPost,
		description: descriptionlineConvertToNumberPost,
	},
	{
		name: 'Line Dissociate Device Create',
		value: 'lineDissociateDevicePost',
		action: 'Dissociate a device from the current line with the device mac address',
		execute: executelineDissociateDevicePost,
		description: descriptionlineDissociateDevicePost,
	},
	{
		name: 'Line Get',
		value: 'lineGet',
		action: 'Get this object properties',
		execute: executelineGet,
		description: descriptionlineGet,
	},
	{
		name: 'Line Ips List',
		value: 'lineIpsListGet',
		action: 'Listing of last ips registry',
		execute: executelineIpsListGet,
		description: descriptionlineIpsListGet,
	},
	{
		name: 'Line Last Registrations List',
		value: 'lineLastRegistrationsListGet',
		action: 'List the informations about the last registrations (i.e. IP, port, User-Agent...)',
		execute: executelineLastRegistrationsListGet,
		description: descriptionlineLastRegistrationsListGet,
	},
	{
		name: 'Line List',
		value: 'lineListGet',
		action: 'Lines associated with this billing account',
		execute: executelineListGet,
		description: descriptionlineListGet,
	},
	{
		name: 'Line List Associable Phones List',
		value: 'lineListAssociablePhonesListGet',
		action: 'List phones with available slots where this line can be attached',
		execute: executelineListAssociablePhonesListGet,
		description: descriptionlineListAssociablePhonesListGet,
	},
	{
		name: 'Line Maximum Available Simultaneous Lines List',
		value: 'lineMaximumAvailableSimultaneousLinesListGet',
		action: 'Get the maximum available simultaneous lines for this line',
		execute: executelineMaximumAvailableSimultaneousLinesListGet,
		description: descriptionlineMaximumAvailableSimultaneousLinesListGet,
	},
	{
		name: 'Line Offer List',
		value: 'lineOfferListGet',
		action: 'Return public offer property',
		execute: executelineOfferListGet,
		description: descriptionlineOfferListGet,
	},
	{
		name: 'Line Options Available Codecs List',
		value: 'lineOptionsAvailableCodecsListGet',
		action: 'List of codecs combinaisons available for this line',
		execute: executelineOptionsAvailableCodecsListGet,
		description: descriptionlineOptionsAvailableCodecsListGet,
	},
	{
		name: 'Line Options Default Codecs List',
		value: 'lineOptionsDefaultCodecsListGet',
		action: 'Get the default codecs for this line if none are set',
		execute: executelineOptionsDefaultCodecsListGet,
		description: descriptionlineOptionsDefaultCodecsListGet,
	},
	{
		name: 'Line Options List',
		value: 'lineOptionsListGet',
		action: 'Get this object properties',
		execute: executelineOptionsListGet,
		description: descriptionlineOptionsListGet,
	},
	{
		name: 'Line Options Update',
		value: 'lineOptionsPut',
		action: 'Alter this object properties',
		execute: executelineOptionsPut,
		description: descriptionlineOptionsPut,
	},
	{
		name: 'Line Phone Admin Credentials List',
		value: 'linePhoneAdminCredentialsListGet',
		action: 'Returns the administration user and password of the phone if you are a VIP',
		execute: executelinePhoneAdminCredentialsListGet,
		description: descriptionlinePhoneAdminCredentialsListGet,
	},
	{
		name: 'Line Phone Can Be Associable List',
		value: 'linePhoneCanBeAssociableListGet',
		action: 'List the phones with Sip slot available',
		execute: executelinePhoneCanBeAssociableListGet,
		description: descriptionlinePhoneCanBeAssociableListGet,
	},
	{
		name: 'Line Phone Change Phone Configuration Create',
		value: 'linePhoneChangePhoneConfigurationPost',
		action: 'Edit configuration of the phone remotely by provisioning',
		execute: executelinePhoneChangePhoneConfigurationPost,
		description: descriptionlinePhoneChangePhoneConfigurationPost,
	},
	{
		name: 'Line Phone Function Key Available Function List',
		value: 'linePhoneFunctionKeyAvailableFunctionListGet',
		action: 'List the available functions for the key',
		execute: executelinePhoneFunctionKeyAvailableFunctionListGet,
		description: descriptionlinePhoneFunctionKeyAvailableFunctionListGet,
	},
	{
		name: 'Line Phone Function Key Get',
		value: 'linePhoneFunctionKeyGet',
		action: 'Get this object properties',
		execute: executelinePhoneFunctionKeyGet,
		description: descriptionlinePhoneFunctionKeyGet,
	},
	{
		name: 'Line Phone Function Key List',
		value: 'linePhoneFunctionKeyListGet',
		action: 'Plug & Phone function keys',
		execute: executelinePhoneFunctionKeyListGet,
		description: descriptionlinePhoneFunctionKeyListGet,
	},
	{
		name: 'Line Phone Function Key Update',
		value: 'linePhoneFunctionKeyPut',
		action: 'Alter this object properties',
		execute: executelinePhoneFunctionKeyPut,
		description: descriptionlinePhoneFunctionKeyPut,
	},
	{
		name: 'Line Phone List',
		value: 'linePhoneListGet',
		action: 'Get this object properties',
		execute: executelinePhoneListGet,
		description: descriptionlinePhoneListGet,
	},
	{
		name: 'Line Phone Merchandise Available List',
		value: 'linePhoneMerchandiseAvailableListGet',
		action: 'List of available exchange merchandise brand',
		execute: executelinePhoneMerchandiseAvailableListGet,
		description: descriptionlinePhoneMerchandiseAvailableListGet,
	},
	{
		name: 'Line Phone Phonebook Create',
		value: 'linePhonePhonebookPost',
		action: 'Add a phonebook. Return the bookKey.',
		execute: executelinePhonePhonebookPost,
		description: descriptionlinePhonePhonebookPost,
	},
	{
		name: 'Line Phone Phonebook Delete',
		value: 'linePhonePhonebookDelete',
		action: 'Delete a phonebook',
		execute: executelinePhonePhonebookDelete,
		description: descriptionlinePhonePhonebookDelete,
	},
	{
		name: 'Line Phone Phonebook Export List',
		value: 'linePhonePhonebookExportListGet',
		action: 'Export the phonebook',
		execute: executelinePhonePhonebookExportListGet,
		description: descriptionlinePhonePhonebookExportListGet,
	},
	{
		name: 'Line Phone Phonebook Get',
		value: 'linePhonePhonebookGet',
		action: 'Get this object properties',
		execute: executelinePhonePhonebookGet,
		description: descriptionlinePhonePhonebookGet,
	},
	{
		name: 'Line Phone Phonebook Import Create',
		value: 'linePhonePhonebookImportPost',
		action: 'Import a contacts file. Supported formats are Excel (.xls and .xlsx) and CSV',
		execute: executelinePhonePhonebookImportPost,
		description: descriptionlinePhonePhonebookImportPost,
	},
	{
		name: 'Line Phone Phonebook List',
		value: 'linePhonePhonebookListGet',
		action: 'Return phonebooks associated',
		execute: executelinePhonePhonebookListGet,
		description: descriptionlinePhonePhonebookListGet,
	},
	{
		name: 'Line Phone Phonebook Phonebook Contact Create',
		value: 'linePhonePhonebookPhonebookContactPost',
		action: 'Create a phonebook contact. Return identifier of the phonebook contact.',
		execute: executelinePhonePhonebookPhonebookContactPost,
		description: descriptionlinePhonePhonebookPhonebookContactPost,
	},
	{
		name: 'Line Phone Phonebook Phonebook Contact Delete',
		value: 'linePhonePhonebookPhonebookContactDelete',
		action: 'Delete a phonebook contact',
		execute: executelinePhonePhonebookPhonebookContactDelete,
		description: descriptionlinePhonePhonebookPhonebookContactDelete,
	},
	{
		name: 'Line Phone Phonebook Phonebook Contact Get',
		value: 'linePhonePhonebookPhonebookContactGet',
		action: 'Get this object properties',
		execute: executelinePhonePhonebookPhonebookContactGet,
		description: descriptionlinePhonePhonebookPhonebookContactGet,
	},
	{
		name: 'Line Phone Phonebook Phonebook Contact List',
		value: 'linePhonePhonebookPhonebookContactListGet',
		action: 'Phonebook contacts',
		execute: executelinePhonePhonebookPhonebookContactListGet,
		description: descriptionlinePhonePhonebookPhonebookContactListGet,
	},
	{
		name: 'Line Phone Phonebook Phonebook Contact Update',
		value: 'linePhonePhonebookPhonebookContactPut',
		action: 'Alter this object properties',
		execute: executelinePhonePhonebookPhonebookContactPut,
		description: descriptionlinePhonePhonebookPhonebookContactPut,
	},
	{
		name: 'Line Phone Phonebook Update',
		value: 'linePhonePhonebookPut',
		action: 'Alter this object properties',
		execute: executelinePhonePhonebookPut,
		description: descriptionlinePhonePhonebookPut,
	},
	{
		name: 'Line Phone Reboot Create',
		value: 'linePhoneRebootPost',
		action: 'Create a task to reboot the phone',
		execute: executelinePhoneRebootPost,
		description: descriptionlinePhoneRebootPost,
	},
	{
		name: 'Line Phone Refresh Screen Create',
		value: 'linePhoneRefreshScreenPost',
		action: 'Create a task to refresh the screen of the MGCP phone',
		execute: executelinePhoneRefreshScreenPost,
		description: descriptionlinePhoneRefreshScreenPost,
	},
	{
		name: 'Line Phone Reset Config Create',
		value: 'linePhoneResetConfigPost',
		action: 'Reinitialize the phone configuration',
		execute: executelinePhoneResetConfigPost,
		description: descriptionlinePhoneResetConfigPost,
	},
	{
		name: 'Line Phone Rma Change Type Create',
		value: 'linePhoneRmaChangeTypePost',
		action: 'Change RMA type',
		execute: executelinePhoneRmaChangeTypePost,
		description: descriptionlinePhoneRmaChangeTypePost,
	},
	{
		name: 'Line Phone Rma Create',
		value: 'linePhoneRmaPost',
		action: 'Create a specific rma',
		execute: executelinePhoneRmaPost,
		description: descriptionlinePhoneRmaPost,
	},
	{
		name: 'Line Phone Rma Delete',
		value: 'linePhoneRmaDelete',
		action: 'Cancel the rma',
		execute: executelinePhoneRmaDelete,
		description: descriptionlinePhoneRmaDelete,
	},
	{
		name: 'Line Phone Rma Get',
		value: 'linePhoneRmaGet',
		action: 'Get this object properties',
		execute: executelinePhoneRmaGet,
		description: descriptionlinePhoneRmaGet,
	},
	{
		name: 'Line Phone Rma List',
		value: 'linePhoneRmaListGet',
		action: 'Return Merchandise Authorisation associated',
		execute: executelinePhoneRmaListGet,
		description: descriptionlinePhoneRmaListGet,
	},
	{
		name: 'Line Phone Rma Update',
		value: 'linePhoneRmaPut',
		action: 'Alter this object properties',
		execute: executelinePhoneRmaPut,
		description: descriptionlinePhoneRmaPut,
	},
	{
		name: 'Line Phone Supports Phonebook List',
		value: 'linePhoneSupportsPhonebookListGet',
		action: 'Does the phone manages phonebooks?',
		execute: executelinePhoneSupportsPhonebookListGet,
		description: descriptionlinePhoneSupportsPhonebookListGet,
	},
	{
		name: 'Line Phone Update',
		value: 'linePhonePut',
		action: 'Alter this object properties',
		execute: executelinePhonePut,
		description: descriptionlinePhonePut,
	},
	{
		name: 'Line Records Delete',
		value: 'lineRecordsDelete',
		action: 'Delete the given record',
		execute: executelineRecordsDelete,
		description: descriptionlineRecordsDelete,
	},
	{
		name: 'Line Records Get',
		value: 'lineRecordsGet',
		action: 'Get this object properties',
		execute: executelineRecordsGet,
		description: descriptionlineRecordsGet,
	},
	{
		name: 'Line Records List',
		value: 'lineRecordsListGet',
		action: 'The recordings of your line outgoing calls',
		execute: executelineRecordsListGet,
		description: descriptionlineRecordsListGet,
	},
	{
		name: 'Line Remove Simultaneous Lines Create',
		value: 'lineRemoveSimultaneousLinesPost',
		action: 'Remove extra simultaneous lines',
		execute: executelineRemoveSimultaneousLinesPost,
		description: descriptionlineRemoveSimultaneousLinesPost,
	},
	{
		name: 'Line Simultaneous Channels Details List',
		value: 'lineSimultaneousChannelsDetailsListGet',
		action: 'Details about simultaneous channels of this line.',
		execute: executelineSimultaneousChannelsDetailsListGet,
		description: descriptionlineSimultaneousChannelsDetailsListGet,
	},
	{
		name: 'Line Softphone Beta List',
		value: 'lineSoftphoneBetaListGet',
		action: 'Get beta status for line softphone',
		execute: executelineSoftphoneBetaListGet,
		description: descriptionlineSoftphoneBetaListGet,
	},
	{
		name: 'Line Softphone Beta Update',
		value: 'lineSoftphoneBetaPut',
		action: 'Enable or disable beta statuses for line softphone',
		execute: executelineSoftphoneBetaPut,
		description: descriptionlineSoftphoneBetaPut,
	},
	{
		name: 'Line Softphone Devices Delete',
		value: 'lineSoftphoneDevicesDelete',
		action: 'Delete softphone device',
		execute: executelineSoftphoneDevicesDelete,
		description: descriptionlineSoftphoneDevicesDelete,
	},
	{
		name: 'Line Softphone Devices Disconnect Create',
		value: 'lineSoftphoneDevicesDisconnectPost',
		action: 'Disconnect all devices',
		execute: executelineSoftphoneDevicesDisconnectPost,
		description: descriptionlineSoftphoneDevicesDisconnectPost,
	},
	{
		name: 'Line Softphone Devices List',
		value: 'lineSoftphoneDevicesListGet',
		action: 'Get softphone devices list',
		execute: executelineSoftphoneDevicesListGet,
		description: descriptionlineSoftphoneDevicesListGet,
	},
	{
		name: 'Line Softphone Logo Delete',
		value: 'lineSoftphoneLogoDelete',
		action: 'Delete line softphone logo',
		execute: executelineSoftphoneLogoDelete,
		description: descriptionlineSoftphoneLogoDelete,
	},
	{
		name: 'Line Softphone Logo List',
		value: 'lineSoftphoneLogoListGet',
		action: 'Get line softphone logo',
		execute: executelineSoftphoneLogoListGet,
		description: descriptionlineSoftphoneLogoListGet,
	},
	{
		name: 'Line Softphone Logo Update',
		value: 'lineSoftphoneLogoPut',
		action: 'Set line softphone logo',
		execute: executelineSoftphoneLogoPut,
		description: descriptionlineSoftphoneLogoPut,
	},
	{
		name: 'Line Softphone Status List',
		value: 'lineSoftphoneStatusListGet',
		action: 'Get softphone line status',
		execute: executelineSoftphoneStatusListGet,
		description: descriptionlineSoftphoneStatusListGet,
	},
	{
		name: 'Line Softphone Theme Delete',
		value: 'lineSoftphoneThemeDelete',
		action: 'Delete line softphone theme',
		execute: executelineSoftphoneThemeDelete,
		description: descriptionlineSoftphoneThemeDelete,
	},
	{
		name: 'Line Softphone Theme List',
		value: 'lineSoftphoneThemeListGet',
		action: 'Get line softphone theme',
		execute: executelineSoftphoneThemeListGet,
		description: descriptionlineSoftphoneThemeListGet,
	},
	{
		name: 'Line Softphone Theme Update',
		value: 'lineSoftphoneThemePut',
		action: 'Set line softphone theme',
		execute: executelineSoftphoneThemePut,
		description: descriptionlineSoftphoneThemePut,
	},
	{
		name: 'Line Softphone Token Create',
		value: 'lineSoftphoneTokenPost',
		action: 'Generate provisioning token',
		execute: executelineSoftphoneTokenPost,
		description: descriptionlineSoftphoneTokenPost,
	},
	{
		name: 'Line Statistics List',
		value: 'lineStatisticsListGet',
		action: 'Get statistics of the current line',
		execute: executelineStatisticsListGet,
		description: descriptionlineStatisticsListGet,
	},
	{
		name: 'Line Tones List',
		value: 'lineTonesListGet',
		action: 'Get this object properties',
		execute: executelineTonesListGet,
		description: descriptionlineTonesListGet,
	},
	{
		name: 'Line Tones Tone Upload Create',
		value: 'lineTonesToneUploadPost',
		action: 'Upload new tone file',
		execute: executelineTonesToneUploadPost,
		description: descriptionlineTonesToneUploadPost,
	},
	{
		name: 'Line Tones Update',
		value: 'lineTonesPut',
		action: 'Alter this object properties',
		execute: executelineTonesPut,
		description: descriptionlineTonesPut,
	},
	{
		name: 'Line Traffic Extracts Create',
		value: 'lineTrafficExtractsPost',
		action: 'Launch a traffic extract on your line',
		execute: executelineTrafficExtractsPost,
		description: descriptionlineTrafficExtractsPost,
	},
	{
		name: 'Line Traffic Extracts Delete',
		value: 'lineTrafficExtractsDelete',
		action: 'Delete a traffic extract',
		execute: executelineTrafficExtractsDelete,
		description: descriptionlineTrafficExtractsDelete,
	},
	{
		name: 'Line Traffic Extracts Get',
		value: 'lineTrafficExtractsGet',
		action: 'Get this object properties',
		execute: executelineTrafficExtractsGet,
		description: descriptionlineTrafficExtractsGet,
	},
	{
		name: 'Line Traffic Extracts List',
		value: 'lineTrafficExtractsListGet',
		action: 'The traffic extracts (SIP only) of your line',
		execute: executelineTrafficExtractsListGet,
		description: descriptionlineTrafficExtractsListGet,
	},
	{
		name: 'Line Unblock Create',
		value: 'lineUnblockPost',
		action: 'Unblock the line. It will remove any incoming and outboing block made earlier',
		execute: executelineUnblockPost,
		description: descriptionlineUnblockPost,
	},
	{
		name: 'Line Update',
		value: 'linePut',
		action: 'Alter this object properties',
		execute: executelinePut,
		description: descriptionlinePut,
	},
	{
		name: 'List Accessories',
		value: 'accessoriesGet',
		action: 'Get available telephony accessories',
		execute: executeAccessoriesGet,
		description: descriptionAccessoriesGet,
	},
	{
		name: 'List Account Portabilities',
		value: 'portabilityGet',
		action: 'Current number portabilities for this billing account',
		execute: executeportabilityGet,
		description: descriptionportabilityGet,
	},
	{
		name: 'List Aliases',
		value: 'aliasListGet',
		action: 'List your telephony aliases',
		execute: executeAliasListGet,
		description: descriptionAliasListGet,
	},
	{
		name: 'List Billing Accounts',
		value: 'telephonyListGet',
		action: 'List your telephony billing accounts',
		execute: executeTelephonyListGet,
		description: descriptionTelephonyListGet,
		default: true,
	},
	{
		name: 'List Cities',
		value: 'directoriesCitiesGet',
		action: 'Get cities by country and zip code',
		execute: executeDirectoriesCitiesGet,
		description: descriptionDirectoriesCitiesGet,
	},
	{
		name: 'List Countries',
		value: 'directoriesCountriesGet',
		action: 'Get available countries for telephony',
		execute: executeDirectoriesCountriesGet,
		description: descriptionDirectoriesCountriesGet,
	},
	{
		name: 'List Current Orders',
		value: 'currentOrderIdsGet',
		action: 'Get current telephony order IDs',
		execute: executeCurrentOrderIdsGet,
		description: descriptionCurrentOrderIdsGet,
	},
	{
		name: 'List Fax Offers',
		value: 'faxOffersGet',
		action: 'Get available fax offers by country',
		execute: executeFaxOffersGet,
		description: descriptionFaxOffersGet,
	},
	{
		name: 'List Hardware',
		value: 'linesHardwareListGet',
		action: 'List hardware associated with a line',
		execute: executeLinesHardwareListGet,
		description: descriptionLinesHardwareListGet,
	},
	{
		name: 'List Line Offers',
		value: 'lineOffersGet',
		action: 'Get available line offers by country',
		execute: executeLineOffersGet,
		description: descriptionLineOffersGet,
	},
	{
		name: 'List Lines',
		value: 'linesListGet',
		action: 'List your telephony lines',
		execute: executeLinesListGet,
		description: descriptionLinesListGet,
	},
	{
		name: 'List Numbers',
		value: 'linesNumberListGet',
		action: 'List numbers associated with a line',
		execute: executeLinesNumberListGet,
		description: descriptionLinesNumberListGet,
	},
	{
		name: 'List Portabilities',
		value: 'linesPortabilityListGet',
		action: 'List portabilities for a line',
		execute: executeLinesPortabilityListGet,
		description: descriptionLinesPortabilityListGet,
	},
	{
		name: 'List Services',
		value: 'directoriesServicesGet',
		action: 'Get available telephony services by country',
		execute: executeDirectoriesServicesGet,
		description: descriptionDirectoriesServicesGet,
	},
	{
		name: 'List SIMs',
		value: 'linesSimListGet',
		action: 'List SIMs associated with a line',
		execute: executeLinesSimListGet,
		description: descriptionLinesSimListGet,
	},
	{
		name: 'List SIP Domains',
		value: 'sipDomainsGet',
		action: 'Get available default SIP domains',
		execute: executeSipDomainsGet,
		description: descriptionSipDomainsGet,
	},
	{
		name: 'List Trunks',
		value: 'trunksListGet',
		action: 'List your telephony trunks',
		execute: executeTrunksListGet,
		description: descriptionTrunksListGet,
	},
	{
		name: 'List Zip Codes',
		value: 'directoriesAvailableZipCodesGet',
		action: 'Get available zip codes by country and number',
		execute: executeDirectoriesAvailableZipCodesGet,
		description: descriptionDirectoriesAvailableZipCodesGet,
	},
	{
		name: 'Number Cancel Convert To Line Create',
		value: 'numberCancelConvertToLinePost',
		action: 'Cancel a scheduled conversion to line',
		execute: executenumberCancelConvertToLinePost,
		description: descriptionnumberCancelConvertToLinePost,
	},
	{
		name: 'Number Change Feature Type Create',
		value: 'numberChangeFeatureTypePost',
		action: 'Change the feature type of the phone number',
		execute: executenumberChangeFeatureTypePost,
		description: descriptionnumberChangeFeatureTypePost,
	},
	{
		name: 'Number Convert To Line Available Offers List',
		value: 'numberConvertToLineAvailableOffersListGet',
		action: 'Get the available line offers to schedule a conversion to line',
		execute: executenumberConvertToLineAvailableOffersListGet,
		description: descriptionnumberConvertToLineAvailableOffersListGet,
	},
	{
		name: 'Number Convert To Line Create',
		value: 'numberConvertToLinePost',
		action: 'Schedule a conversion to line',
		execute: executenumberConvertToLinePost,
		description: descriptionnumberConvertToLinePost,
	},
	{
		name: 'Number Detailed Zones List',
		value: 'numberDetailedZonesListGet',
		action: 'Get all available geographic zone with some details, from a country',
		execute: executenumberDetailedZonesListGet,
		description: descriptionnumberDetailedZonesListGet,
	},
	{
		name: 'Number Get',
		value: 'numberGet',
		action: 'Get this object properties',
		execute: executenumberGet,
		description: descriptionnumberGet,
	},
	{
		name: 'Number List',
		value: 'numberListGet',
		action: 'Additional numbers associated with this billing account',
		execute: executenumberListGet,
		description: descriptionnumberListGet,
	},
	{
		name: 'Number Ranges List',
		value: 'numberRangesListGet',
		action: 'Get all available special range from a country',
		execute: executenumberRangesListGet,
		description: descriptionnumberRangesListGet,
	},
	{
		name: 'Number Specific Numbers List',
		value: 'numberSpecificNumbersListGet',
		action: 'Get all available specific number from a country',
		execute: executenumberSpecificNumbersListGet,
		description: descriptionnumberSpecificNumbersListGet,
	},
	{
		name: 'Number Update',
		value: 'numberPut',
		action: 'Alter this object properties',
		execute: executenumberPut,
		description: descriptionnumberPut,
	},
	{
		name: 'Number Zones List',
		value: 'numberZonesListGet',
		action: 'Get all available geographic zone from a country',
		execute: executenumberZonesListGet,
		description: descriptionnumberZonesListGet,
	},
	{
		name: 'Offer Task',
		value: 'offerTaskListGet',
		action: 'Execute the GET on offerTask',
		execute: executeofferTaskListGet,
		description: descriptionofferTaskListGet,
	},
	{
		name: 'Offer Task (2)',
		value: 'offerTaskGet',
		action: 'Execute the GET on offerTask/{x}',
		execute: executeofferTaskGet,
		description: descriptionofferTaskGet,
	},
	{
		name: 'Offer Task (3)',
		value: 'offerTaskPut',
		action: 'Execute the PUT on offerTask/{x}',
		execute: executeofferTaskPut,
		description: descriptionofferTaskPut,
	},
	{
		name: 'Old Phone',
		value: 'oldPhoneListGet',
		action: 'Execute the GET on oldPhone',
		execute: executeoldPhoneListGet,
		description: descriptionoldPhoneListGet,
	},
	{
		name: 'Outplan Notification',
		value: 'outplanNotificationListGet',
		action: 'Execute the GET on outplanNotification',
		execute: executeoutplanNotificationListGet,
		description: descriptionoutplanNotificationListGet,
	},
	{
		name: 'Outplan Notification (2)',
		value: 'outplanNotificationPost',
		action: 'Execute the POST on outplanNotification',
		execute: executeoutplanNotificationPost,
		description: descriptionoutplanNotificationPost,
	},
	{
		name: 'Outplan Notification (3)',
		value: 'outplanNotificationDelete',
		action: 'Execute the DELETE on outplanNotification/{x}',
		execute: executeoutplanNotificationDelete,
		description: descriptionoutplanNotificationDelete,
	},
	{
		name: 'Outplan Notification (4)',
		value: 'outplanNotificationGet',
		action: 'Execute the GET on outplanNotification/{x}',
		execute: executeoutplanNotificationGet,
		description: descriptionoutplanNotificationGet,
	},
	{
		name: 'Ovh Pabx',
		value: 'ovhPabxListGet',
		action: 'Execute the GET on ovhPabx',
		execute: executeovhPabxListGet,
		description: descriptionovhPabxListGet,
	},
	{
		name: 'Ovh Pabx (2)',
		value: 'ovhPabxGet',
		action: 'Execute the GET on ovhPabx/{x}',
		execute: executeovhPabxGet,
		description: descriptionovhPabxGet,
	},
	{
		name: 'Ovh Pabx (3)',
		value: 'ovhPabxPut',
		action: 'Execute the PUT on ovhPabx/{x}',
		execute: executeovhPabxPut,
		description: descriptionovhPabxPut,
	},
	{
		name: 'Ovh Pabx Dialplan',
		value: 'ovhPabxDialplanListGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan',
		execute: executeovhPabxDialplanListGet,
		description: descriptionovhPabxDialplanListGet,
	},
	{
		name: 'Ovh Pabx Dialplan (2)',
		value: 'ovhPabxDialplanPost',
		action: 'Execute the POST on ovhPabx/{x}/dialplan',
		execute: executeovhPabxDialplanPost,
		description: descriptionovhPabxDialplanPost,
	},
	{
		name: 'Ovh Pabx Dialplan (3)',
		value: 'ovhPabxDialplanDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}',
		execute: executeovhPabxDialplanDelete,
		description: descriptionovhPabxDialplanDelete,
	},
	{
		name: 'Ovh Pabx Dialplan (4)',
		value: 'ovhPabxDialplanGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}',
		execute: executeovhPabxDialplanGet,
		description: descriptionovhPabxDialplanGet,
	},
	{
		name: 'Ovh Pabx Dialplan (5)',
		value: 'ovhPabxDialplanPut',
		action: 'Execute the PUT on ovhPabx/{x}/dialplan/{x}',
		execute: executeovhPabxDialplanPut,
		description: descriptionovhPabxDialplanPut,
	},
	{
		name: 'Ovh Pabx Dialplan Extension',
		value: 'ovhPabxDialplanExtensionListGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension',
		execute: executeovhPabxDialplanExtensionListGet,
		description: descriptionovhPabxDialplanExtensionListGet,
	},
	{
		name: 'Ovh Pabx Dialplan Extension (2)',
		value: 'ovhPabxDialplanExtensionPost',
		action: 'Execute the POST on ovhPabx/{x}/dialplan/{x}/extension',
		execute: executeovhPabxDialplanExtensionPost,
		description: descriptionovhPabxDialplanExtensionPost,
	},
	{
		name: 'Ovh Pabx Dialplan Extension (3)',
		value: 'ovhPabxDialplanExtensionDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}/extension/{x}',
		execute: executeovhPabxDialplanExtensionDelete,
		description: descriptionovhPabxDialplanExtensionDelete,
	},
	{
		name: 'Ovh Pabx Dialplan Extension (4)',
		value: 'ovhPabxDialplanExtensionGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}',
		execute: executeovhPabxDialplanExtensionGet,
		description: descriptionovhPabxDialplanExtensionGet,
	},
	{
		name: 'Ovh Pabx Dialplan Extension (5)',
		value: 'ovhPabxDialplanExtensionPut',
		action: 'Execute the PUT on ovhPabx/{x}/dialplan/{x}/extension/{x}',
		execute: executeovhPabxDialplanExtensionPut,
		description: descriptionovhPabxDialplanExtensionPut,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Screen List',
		value: 'ovhPabxDialplanExtensionConditionScreenListListGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionScreenList',
		execute: executeovhPabxDialplanExtensionConditionScreenListListGet,
		description: descriptionovhPabxDialplanExtensionConditionScreenListListGet,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Screen List (2)',
		value: 'ovhPabxDialplanExtensionConditionScreenListPost',
		action: 'Execute the POST on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionScreenList',
		execute: executeovhPabxDialplanExtensionConditionScreenListPost,
		description: descriptionovhPabxDialplanExtensionConditionScreenListPost,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Screen List (3)',
		value: 'ovhPabxDialplanExtensionConditionScreenListDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionScreenList/{x}',
		execute: executeovhPabxDialplanExtensionConditionScreenListDelete,
		description: descriptionovhPabxDialplanExtensionConditionScreenListDelete,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Screen List (4)',
		value: 'ovhPabxDialplanExtensionConditionScreenListGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionScreenList/{x}',
		execute: executeovhPabxDialplanExtensionConditionScreenListGet,
		description: descriptionovhPabxDialplanExtensionConditionScreenListGet,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Time',
		value: 'ovhPabxDialplanExtensionConditionTimeListGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime',
		execute: executeovhPabxDialplanExtensionConditionTimeListGet,
		description: descriptionovhPabxDialplanExtensionConditionTimeListGet,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Time (2)',
		value: 'ovhPabxDialplanExtensionConditionTimePost',
		action: 'Execute the POST on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime',
		execute: executeovhPabxDialplanExtensionConditionTimePost,
		description: descriptionovhPabxDialplanExtensionConditionTimePost,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Time (3)',
		value: 'ovhPabxDialplanExtensionConditionTimeDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime/{x}',
		execute: executeovhPabxDialplanExtensionConditionTimeDelete,
		description: descriptionovhPabxDialplanExtensionConditionTimeDelete,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Time (4)',
		value: 'ovhPabxDialplanExtensionConditionTimeGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime/{x}',
		execute: executeovhPabxDialplanExtensionConditionTimeGet,
		description: descriptionovhPabxDialplanExtensionConditionTimeGet,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Condition Time (5)',
		value: 'ovhPabxDialplanExtensionConditionTimePut',
		action: 'Execute the PUT on ovhPabx/{x}/dialplan/{x}/extension/{x}/conditionTime/{x}',
		execute: executeovhPabxDialplanExtensionConditionTimePut,
		description: descriptionovhPabxDialplanExtensionConditionTimePut,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Rule',
		value: 'ovhPabxDialplanExtensionRuleListGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule',
		execute: executeovhPabxDialplanExtensionRuleListGet,
		description: descriptionovhPabxDialplanExtensionRuleListGet,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Rule (2)',
		value: 'ovhPabxDialplanExtensionRulePost',
		action: 'Execute the POST on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule',
		execute: executeovhPabxDialplanExtensionRulePost,
		description: descriptionovhPabxDialplanExtensionRulePost,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Rule (3)',
		value: 'ovhPabxDialplanExtensionRuleDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule/{x}',
		execute: executeovhPabxDialplanExtensionRuleDelete,
		description: descriptionovhPabxDialplanExtensionRuleDelete,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Rule (4)',
		value: 'ovhPabxDialplanExtensionRuleGet',
		action: 'Execute the GET on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule/{x}',
		execute: executeovhPabxDialplanExtensionRuleGet,
		description: descriptionovhPabxDialplanExtensionRuleGet,
	},
	{
		name: 'Ovh Pabx Dialplan Extension Rule (5)',
		value: 'ovhPabxDialplanExtensionRulePut',
		action: 'Execute the PUT on ovhPabx/{x}/dialplan/{x}/extension/{x}/rule/{x}',
		execute: executeovhPabxDialplanExtensionRulePut,
		description: descriptionovhPabxDialplanExtensionRulePut,
	},
	{
		name: 'Ovh Pabx Hunting',
		value: 'ovhPabxHuntingListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting',
		execute: executeovhPabxHuntingListGet,
		description: descriptionovhPabxHuntingListGet,
	},
	{
		name: 'Ovh Pabx Hunting (2)',
		value: 'ovhPabxHuntingPut',
		action: 'Execute the PUT on ovhPabx/{x}/hunting',
		execute: executeovhPabxHuntingPut,
		description: descriptionovhPabxHuntingPut,
	},
	{
		name: 'Ovh Pabx Hunting Agent',
		value: 'ovhPabxHuntingAgentListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent',
		execute: executeovhPabxHuntingAgentListGet,
		description: descriptionovhPabxHuntingAgentListGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent (2)',
		value: 'ovhPabxHuntingAgentPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent',
		execute: executeovhPabxHuntingAgentPost,
		description: descriptionovhPabxHuntingAgentPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent (3)',
		value: 'ovhPabxHuntingAgentDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/hunting/agent/{x}',
		execute: executeovhPabxHuntingAgentDelete,
		description: descriptionovhPabxHuntingAgentDelete,
	},
	{
		name: 'Ovh Pabx Hunting Agent (4)',
		value: 'ovhPabxHuntingAgentGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}',
		execute: executeovhPabxHuntingAgentGet,
		description: descriptionovhPabxHuntingAgentGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent (5)',
		value: 'ovhPabxHuntingAgentPut',
		action: 'Execute the PUT on ovhPabx/{x}/hunting/agent/{x}',
		execute: executeovhPabxHuntingAgentPut,
		description: descriptionovhPabxHuntingAgentPut,
	},
	{
		name: 'Ovh Pabx Hunting Agent Banner Access',
		value: 'ovhPabxHuntingAgentBannerAccessDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/hunting/agent/{x}/bannerAccess',
		execute: executeovhPabxHuntingAgentBannerAccessDelete,
		description: descriptionovhPabxHuntingAgentBannerAccessDelete,
	},
	{
		name: 'Ovh Pabx Hunting Agent Banner Access (2)',
		value: 'ovhPabxHuntingAgentBannerAccessListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/bannerAccess',
		execute: executeovhPabxHuntingAgentBannerAccessListGet,
		description: descriptionovhPabxHuntingAgentBannerAccessListGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent Banner Access (3)',
		value: 'ovhPabxHuntingAgentBannerAccessPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/bannerAccess',
		execute: executeovhPabxHuntingAgentBannerAccessPost,
		description: descriptionovhPabxHuntingAgentBannerAccessPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Calls',
		value: 'ovhPabxHuntingAgentCallsListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/calls',
		execute: executeovhPabxHuntingAgentCallsListGet,
		description: descriptionovhPabxHuntingAgentCallsListGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent Calls (2)',
		value: 'ovhPabxHuntingAgentCallsGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/calls/{x}',
		execute: executeovhPabxHuntingAgentCallsGet,
		description: descriptionovhPabxHuntingAgentCallsGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent Calls Eavesdrop',
		value: 'ovhPabxHuntingAgentCallsEavesdropPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/eavesdrop',
		execute: executeovhPabxHuntingAgentCallsEavesdropPost,
		description: descriptionovhPabxHuntingAgentCallsEavesdropPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Calls Hangup',
		value: 'ovhPabxHuntingAgentCallsHangupPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/hangup',
		execute: executeovhPabxHuntingAgentCallsHangupPost,
		description: descriptionovhPabxHuntingAgentCallsHangupPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Calls Hold',
		value: 'ovhPabxHuntingAgentCallsHoldPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/hold',
		execute: executeovhPabxHuntingAgentCallsHoldPost,
		description: descriptionovhPabxHuntingAgentCallsHoldPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Calls Intercept',
		value: 'ovhPabxHuntingAgentCallsInterceptPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/intercept',
		execute: executeovhPabxHuntingAgentCallsInterceptPost,
		description: descriptionovhPabxHuntingAgentCallsInterceptPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Calls Transfer',
		value: 'ovhPabxHuntingAgentCallsTransferPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/transfer',
		execute: executeovhPabxHuntingAgentCallsTransferPost,
		description: descriptionovhPabxHuntingAgentCallsTransferPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Calls Whisper',
		value: 'ovhPabxHuntingAgentCallsWhisperPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/calls/{x}/whisper',
		execute: executeovhPabxHuntingAgentCallsWhisperPost,
		description: descriptionovhPabxHuntingAgentCallsWhisperPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Event Token',
		value: 'ovhPabxHuntingAgentEventTokenDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/hunting/agent/{x}/eventToken',
		execute: executeovhPabxHuntingAgentEventTokenDelete,
		description: descriptionovhPabxHuntingAgentEventTokenDelete,
	},
	{
		name: 'Ovh Pabx Hunting Agent Event Token (2)',
		value: 'ovhPabxHuntingAgentEventTokenListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/eventToken',
		execute: executeovhPabxHuntingAgentEventTokenListGet,
		description: descriptionovhPabxHuntingAgentEventTokenListGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent Event Token (3)',
		value: 'ovhPabxHuntingAgentEventTokenPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/eventToken',
		execute: executeovhPabxHuntingAgentEventTokenPost,
		description: descriptionovhPabxHuntingAgentEventTokenPost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Live Status',
		value: 'ovhPabxHuntingAgentLiveStatusListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/liveStatus',
		execute: executeovhPabxHuntingAgentLiveStatusListGet,
		description: descriptionovhPabxHuntingAgentLiveStatusListGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent Queue',
		value: 'ovhPabxHuntingAgentQueueListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/queue',
		execute: executeovhPabxHuntingAgentQueueListGet,
		description: descriptionovhPabxHuntingAgentQueueListGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent Queue (2)',
		value: 'ovhPabxHuntingAgentQueuePost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/agent/{x}/queue',
		execute: executeovhPabxHuntingAgentQueuePost,
		description: descriptionovhPabxHuntingAgentQueuePost,
	},
	{
		name: 'Ovh Pabx Hunting Agent Queue (3)',
		value: 'ovhPabxHuntingAgentQueueDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/hunting/agent/{x}/queue/{x}',
		execute: executeovhPabxHuntingAgentQueueDelete,
		description: descriptionovhPabxHuntingAgentQueueDelete,
	},
	{
		name: 'Ovh Pabx Hunting Agent Queue (4)',
		value: 'ovhPabxHuntingAgentQueueGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/queue/{x}',
		execute: executeovhPabxHuntingAgentQueueGet,
		description: descriptionovhPabxHuntingAgentQueueGet,
	},
	{
		name: 'Ovh Pabx Hunting Agent Queue (5)',
		value: 'ovhPabxHuntingAgentQueuePut',
		action: 'Execute the PUT on ovhPabx/{x}/hunting/agent/{x}/queue/{x}',
		execute: executeovhPabxHuntingAgentQueuePut,
		description: descriptionovhPabxHuntingAgentQueuePut,
	},
	{
		name: 'Ovh Pabx Hunting Agent Queue Live Status',
		value: 'ovhPabxHuntingAgentQueueLiveStatusListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/agent/{x}/queue/{x}/liveStatus',
		execute: executeovhPabxHuntingAgentQueueLiveStatusListGet,
		description: descriptionovhPabxHuntingAgentQueueLiveStatusListGet,
	},
	{
		name: 'Ovh Pabx Hunting Custom Status',
		value: 'ovhPabxHuntingCustomStatusListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/customStatus',
		execute: executeovhPabxHuntingCustomStatusListGet,
		description: descriptionovhPabxHuntingCustomStatusListGet,
	},
	{
		name: 'Ovh Pabx Hunting Custom Status (2)',
		value: 'ovhPabxHuntingCustomStatusPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/customStatus',
		execute: executeovhPabxHuntingCustomStatusPost,
		description: descriptionovhPabxHuntingCustomStatusPost,
	},
	{
		name: 'Ovh Pabx Hunting Custom Status (3)',
		value: 'ovhPabxHuntingCustomStatusDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/hunting/customStatus/{x}',
		execute: executeovhPabxHuntingCustomStatusDelete,
		description: descriptionovhPabxHuntingCustomStatusDelete,
	},
	{
		name: 'Ovh Pabx Hunting Custom Status (4)',
		value: 'ovhPabxHuntingCustomStatusGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/customStatus/{x}',
		execute: executeovhPabxHuntingCustomStatusGet,
		description: descriptionovhPabxHuntingCustomStatusGet,
	},
	{
		name: 'Ovh Pabx Hunting Event Token',
		value: 'ovhPabxHuntingEventTokenDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/hunting/eventToken',
		execute: executeovhPabxHuntingEventTokenDelete,
		description: descriptionovhPabxHuntingEventTokenDelete,
	},
	{
		name: 'Ovh Pabx Hunting Event Token (2)',
		value: 'ovhPabxHuntingEventTokenListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/eventToken',
		execute: executeovhPabxHuntingEventTokenListGet,
		description: descriptionovhPabxHuntingEventTokenListGet,
	},
	{
		name: 'Ovh Pabx Hunting Event Token (3)',
		value: 'ovhPabxHuntingEventTokenPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/eventToken',
		execute: executeovhPabxHuntingEventTokenPost,
		description: descriptionovhPabxHuntingEventTokenPost,
	},
	{
		name: 'Ovh Pabx Hunting Queue',
		value: 'ovhPabxHuntingQueueListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/queue',
		execute: executeovhPabxHuntingQueueListGet,
		description: descriptionovhPabxHuntingQueueListGet,
	},
	{
		name: 'Ovh Pabx Hunting Queue (2)',
		value: 'ovhPabxHuntingQueuePost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/queue',
		execute: executeovhPabxHuntingQueuePost,
		description: descriptionovhPabxHuntingQueuePost,
	},
	{
		name: 'Ovh Pabx Hunting Queue (3)',
		value: 'ovhPabxHuntingQueueDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/hunting/queue/{x}',
		execute: executeovhPabxHuntingQueueDelete,
		description: descriptionovhPabxHuntingQueueDelete,
	},
	{
		name: 'Ovh Pabx Hunting Queue (4)',
		value: 'ovhPabxHuntingQueueGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}',
		execute: executeovhPabxHuntingQueueGet,
		description: descriptionovhPabxHuntingQueueGet,
	},
	{
		name: 'Ovh Pabx Hunting Queue (5)',
		value: 'ovhPabxHuntingQueuePut',
		action: 'Execute the PUT on ovhPabx/{x}/hunting/queue/{x}',
		execute: executeovhPabxHuntingQueuePut,
		description: descriptionovhPabxHuntingQueuePut,
	},
	{
		name: 'Ovh Pabx Hunting Queue Agent',
		value: 'ovhPabxHuntingQueueAgentListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/agent',
		execute: executeovhPabxHuntingQueueAgentListGet,
		description: descriptionovhPabxHuntingQueueAgentListGet,
	},
	{
		name: 'Ovh Pabx Hunting Queue Agent (2)',
		value: 'ovhPabxHuntingQueueAgentPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/agent',
		execute: executeovhPabxHuntingQueueAgentPost,
		description: descriptionovhPabxHuntingQueueAgentPost,
	},
	{
		name: 'Ovh Pabx Hunting Queue Agent (3)',
		value: 'ovhPabxHuntingQueueAgentDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/hunting/queue/{x}/agent/{x}',
		execute: executeovhPabxHuntingQueueAgentDelete,
		description: descriptionovhPabxHuntingQueueAgentDelete,
	},
	{
		name: 'Ovh Pabx Hunting Queue Agent (4)',
		value: 'ovhPabxHuntingQueueAgentGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/agent/{x}',
		execute: executeovhPabxHuntingQueueAgentGet,
		description: descriptionovhPabxHuntingQueueAgentGet,
	},
	{
		name: 'Ovh Pabx Hunting Queue Agent (5)',
		value: 'ovhPabxHuntingQueueAgentPut',
		action: 'Execute the PUT on ovhPabx/{x}/hunting/queue/{x}/agent/{x}',
		execute: executeovhPabxHuntingQueueAgentPut,
		description: descriptionovhPabxHuntingQueueAgentPut,
	},
	{
		name: 'Ovh Pabx Hunting Queue Agent Live Status',
		value: 'ovhPabxHuntingQueueAgentLiveStatusListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/agent/{x}/liveStatus',
		execute: executeovhPabxHuntingQueueAgentLiveStatusListGet,
		description: descriptionovhPabxHuntingQueueAgentLiveStatusListGet,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Calls',
		value: 'ovhPabxHuntingQueueLiveCallsListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/liveCalls',
		execute: executeovhPabxHuntingQueueLiveCallsListGet,
		description: descriptionovhPabxHuntingQueueLiveCallsListGet,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Calls (2)',
		value: 'ovhPabxHuntingQueueLiveCallsGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}',
		execute: executeovhPabxHuntingQueueLiveCallsGet,
		description: descriptionovhPabxHuntingQueueLiveCallsGet,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Calls Eavesdrop',
		value: 'ovhPabxHuntingQueueLiveCallsEavesdropPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/eavesdrop',
		execute: executeovhPabxHuntingQueueLiveCallsEavesdropPost,
		description: descriptionovhPabxHuntingQueueLiveCallsEavesdropPost,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Calls Hangup',
		value: 'ovhPabxHuntingQueueLiveCallsHangupPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/hangup',
		execute: executeovhPabxHuntingQueueLiveCallsHangupPost,
		description: descriptionovhPabxHuntingQueueLiveCallsHangupPost,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Calls Hold',
		value: 'ovhPabxHuntingQueueLiveCallsHoldPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/hold',
		execute: executeovhPabxHuntingQueueLiveCallsHoldPost,
		description: descriptionovhPabxHuntingQueueLiveCallsHoldPost,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Calls Intercept',
		value: 'ovhPabxHuntingQueueLiveCallsInterceptPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/intercept',
		execute: executeovhPabxHuntingQueueLiveCallsInterceptPost,
		description: descriptionovhPabxHuntingQueueLiveCallsInterceptPost,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Calls Transfer',
		value: 'ovhPabxHuntingQueueLiveCallsTransferPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/transfer',
		execute: executeovhPabxHuntingQueueLiveCallsTransferPost,
		description: descriptionovhPabxHuntingQueueLiveCallsTransferPost,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Calls Whisper',
		value: 'ovhPabxHuntingQueueLiveCallsWhisperPost',
		action: 'Execute the POST on ovhPabx/{x}/hunting/queue/{x}/liveCalls/{x}/whisper',
		execute: executeovhPabxHuntingQueueLiveCallsWhisperPost,
		description: descriptionovhPabxHuntingQueueLiveCallsWhisperPost,
	},
	{
		name: 'Ovh Pabx Hunting Queue Live Statistics',
		value: 'ovhPabxHuntingQueueLiveStatisticsListGet',
		action: 'Execute the GET on ovhPabx/{x}/hunting/queue/{x}/liveStatistics',
		execute: executeovhPabxHuntingQueueLiveStatisticsListGet,
		description: descriptionovhPabxHuntingQueueLiveStatisticsListGet,
	},
	{
		name: 'Ovh Pabx Menu',
		value: 'ovhPabxMenuListGet',
		action: 'Execute the GET on ovhPabx/{x}/menu',
		execute: executeovhPabxMenuListGet,
		description: descriptionovhPabxMenuListGet,
	},
	{
		name: 'Ovh Pabx Menu (2)',
		value: 'ovhPabxMenuPost',
		action: 'Execute the POST on ovhPabx/{x}/menu',
		execute: executeovhPabxMenuPost,
		description: descriptionovhPabxMenuPost,
	},
	{
		name: 'Ovh Pabx Menu (3)',
		value: 'ovhPabxMenuDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/menu/{x}',
		execute: executeovhPabxMenuDelete,
		description: descriptionovhPabxMenuDelete,
	},
	{
		name: 'Ovh Pabx Menu (4)',
		value: 'ovhPabxMenuGet',
		action: 'Execute the GET on ovhPabx/{x}/menu/{x}',
		execute: executeovhPabxMenuGet,
		description: descriptionovhPabxMenuGet,
	},
	{
		name: 'Ovh Pabx Menu (5)',
		value: 'ovhPabxMenuPut',
		action: 'Execute the PUT on ovhPabx/{x}/menu/{x}',
		execute: executeovhPabxMenuPut,
		description: descriptionovhPabxMenuPut,
	},
	{
		name: 'Ovh Pabx Menu Entry',
		value: 'ovhPabxMenuEntryListGet',
		action: 'Execute the GET on ovhPabx/{x}/menu/{x}/entry',
		execute: executeovhPabxMenuEntryListGet,
		description: descriptionovhPabxMenuEntryListGet,
	},
	{
		name: 'Ovh Pabx Menu Entry (2)',
		value: 'ovhPabxMenuEntryPost',
		action: 'Execute the POST on ovhPabx/{x}/menu/{x}/entry',
		execute: executeovhPabxMenuEntryPost,
		description: descriptionovhPabxMenuEntryPost,
	},
	{
		name: 'Ovh Pabx Menu Entry (3)',
		value: 'ovhPabxMenuEntryDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/menu/{x}/entry/{x}',
		execute: executeovhPabxMenuEntryDelete,
		description: descriptionovhPabxMenuEntryDelete,
	},
	{
		name: 'Ovh Pabx Menu Entry (4)',
		value: 'ovhPabxMenuEntryGet',
		action: 'Execute the GET on ovhPabx/{x}/menu/{x}/entry/{x}',
		execute: executeovhPabxMenuEntryGet,
		description: descriptionovhPabxMenuEntryGet,
	},
	{
		name: 'Ovh Pabx Menu Entry (5)',
		value: 'ovhPabxMenuEntryPut',
		action: 'Execute the PUT on ovhPabx/{x}/menu/{x}/entry/{x}',
		execute: executeovhPabxMenuEntryPut,
		description: descriptionovhPabxMenuEntryPut,
	},
	{
		name: 'Ovh Pabx Records',
		value: 'ovhPabxRecordsListGet',
		action: 'Execute the GET on ovhPabx/{x}/records',
		execute: executeovhPabxRecordsListGet,
		description: descriptionovhPabxRecordsListGet,
	},
	{
		name: 'Ovh Pabx Records (2)',
		value: 'ovhPabxRecordsDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/records/{x}',
		execute: executeovhPabxRecordsDelete,
		description: descriptionovhPabxRecordsDelete,
	},
	{
		name: 'Ovh Pabx Records (3)',
		value: 'ovhPabxRecordsGet',
		action: 'Execute the GET on ovhPabx/{x}/records/{x}',
		execute: executeovhPabxRecordsGet,
		description: descriptionovhPabxRecordsGet,
	},
	{
		name: 'Ovh Pabx Sound',
		value: 'ovhPabxSoundListGet',
		action: 'Execute the GET on ovhPabx/{x}/sound',
		execute: executeovhPabxSoundListGet,
		description: descriptionovhPabxSoundListGet,
	},
	{
		name: 'Ovh Pabx Sound (2)',
		value: 'ovhPabxSoundDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/sound/{x}',
		execute: executeovhPabxSoundDelete,
		description: descriptionovhPabxSoundDelete,
	},
	{
		name: 'Ovh Pabx Sound (3)',
		value: 'ovhPabxSoundGet',
		action: 'Execute the GET on ovhPabx/{x}/sound/{x}',
		execute: executeovhPabxSoundGet,
		description: descriptionovhPabxSoundGet,
	},
	{
		name: 'Ovh Pabx Sound Upload',
		value: 'ovhPabxSoundUploadPost',
		action: 'Execute the POST on ovhPabx/{x}/soundUpload',
		execute: executeovhPabxSoundUploadPost,
		description: descriptionovhPabxSoundUploadPost,
	},
	{
		name: 'Ovh Pabx Tts',
		value: 'ovhPabxTtsListGet',
		action: 'Execute the GET on ovhPabx/{x}/tts',
		execute: executeovhPabxTtsListGet,
		description: descriptionovhPabxTtsListGet,
	},
	{
		name: 'Ovh Pabx Tts (2)',
		value: 'ovhPabxTtsPost',
		action: 'Execute the POST on ovhPabx/{x}/tts',
		execute: executeovhPabxTtsPost,
		description: descriptionovhPabxTtsPost,
	},
	{
		name: 'Ovh Pabx Tts (3)',
		value: 'ovhPabxTtsDelete',
		action: 'Execute the DELETE on ovhPabx/{x}/tts/{x}',
		execute: executeovhPabxTtsDelete,
		description: descriptionovhPabxTtsDelete,
	},
	{
		name: 'Ovh Pabx Tts (4)',
		value: 'ovhPabxTtsGet',
		action: 'Execute the GET on ovhPabx/{x}/tts/{x}',
		execute: executeovhPabxTtsGet,
		description: descriptionovhPabxTtsGet,
	},
	{
		name: 'Ovh Pabx Tts (5)',
		value: 'ovhPabxTtsPut',
		action: 'Execute the PUT on ovhPabx/{x}/tts/{x}',
		execute: executeovhPabxTtsPut,
		description: descriptionovhPabxTtsPut,
	},
	{
		name: 'Phonebook',
		value: 'phonebookListGet',
		action: 'Execute the GET on phonebook',
		execute: executephonebookListGet,
		description: descriptionphonebookListGet,
	},
	{
		name: 'Phonebook (2)',
		value: 'phonebookPost',
		action: 'Execute the POST on phonebook',
		execute: executephonebookPost,
		description: descriptionphonebookPost,
	},
	{
		name: 'Phonebook (3)',
		value: 'phonebookDelete',
		action: 'Execute the DELETE on phonebook/{x}',
		execute: executephonebookDelete,
		description: descriptionphonebookDelete,
	},
	{
		name: 'Phonebook (4)',
		value: 'phonebookGet',
		action: 'Execute the GET on phonebook/{x}',
		execute: executephonebookGet,
		description: descriptionphonebookGet,
	},
	{
		name: 'Phonebook (5)',
		value: 'phonebookPut',
		action: 'Execute the PUT on phonebook/{x}',
		execute: executephonebookPut,
		description: descriptionphonebookPut,
	},
	{
		name: 'Phonebook Export',
		value: 'phonebookExportListGet',
		action: 'Execute the GET on phonebook/{x}/export',
		execute: executephonebookExportListGet,
		description: descriptionphonebookExportListGet,
	},
	{
		name: 'Phonebook Import',
		value: 'phonebookImportPost',
		action: 'Execute the POST on phonebook/{x}/import',
		execute: executephonebookImportPost,
		description: descriptionphonebookImportPost,
	},
	{
		name: 'Phonebook Phonebook Contact',
		value: 'phonebookPhonebookContactListGet',
		action: 'Execute the GET on phonebook/{x}/phonebookContact',
		execute: executephonebookPhonebookContactListGet,
		description: descriptionphonebookPhonebookContactListGet,
	},
	{
		name: 'Phonebook Phonebook Contact (2)',
		value: 'phonebookPhonebookContactPost',
		action: 'Execute the POST on phonebook/{x}/phonebookContact',
		execute: executephonebookPhonebookContactPost,
		description: descriptionphonebookPhonebookContactPost,
	},
	{
		name: 'Phonebook Phonebook Contact (3)',
		value: 'phonebookPhonebookContactDelete',
		action: 'Execute the DELETE on phonebook/{x}/phonebookContact/{x}',
		execute: executephonebookPhonebookContactDelete,
		description: descriptionphonebookPhonebookContactDelete,
	},
	{
		name: 'Phonebook Phonebook Contact (4)',
		value: 'phonebookPhonebookContactGet',
		action: 'Execute the GET on phonebook/{x}/phonebookContact/{x}',
		execute: executephonebookPhonebookContactGet,
		description: descriptionphonebookPhonebookContactGet,
	},
	{
		name: 'Phonebook Phonebook Contact (5)',
		value: 'phonebookPhonebookContactPut',
		action: 'Execute the PUT on phonebook/{x}/phonebookContact/{x}',
		execute: executephonebookPhonebookContactPut,
		description: descriptionphonebookPhonebookContactPut,
	},
	{
		name: 'Portability',
		value: 'portabilityDetailGet',
		action: 'Execute the GET on portability/{x}',
		execute: executeportabilityDetailGet,
		description: descriptionportabilityDetailGet,
	},
	{
		name: 'Portability Can Be Cancelled',
		value: 'portabilityCanBeCancelledListGet',
		action: 'Execute the GET on portability/{x}/canBeCancelled',
		execute: executeportabilityCanBeCancelledListGet,
		description: descriptionportabilityCanBeCancelledListGet,
	},
	{
		name: 'Portability Can Be Executed',
		value: 'portabilityCanBeExecutedListGet',
		action: 'Execute the GET on portability/{x}/canBeExecuted',
		execute: executeportabilityCanBeExecutedListGet,
		description: descriptionportabilityCanBeExecutedListGet,
	},
	{
		name: 'Portability Cancel',
		value: 'portabilityCancelPost',
		action: 'Execute the POST on portability/{x}/cancel',
		execute: executeportabilityCancelPost,
		description: descriptionportabilityCancelPost,
	},
	{
		name: 'Portability Change Date',
		value: 'portabilityChangeDatePost',
		action: 'Execute the POST on portability/{x}/changeDate',
		execute: executeportabilityChangeDatePost,
		description: descriptionportabilityChangeDatePost,
	},
	{
		name: 'Portability Date Can Be Changed',
		value: 'portabilityDateCanBeChangedListGet',
		action: 'Execute the GET on portability/{x}/dateCanBeChanged',
		execute: executeportabilityDateCanBeChangedListGet,
		description: descriptionportabilityDateCanBeChangedListGet,
	},
	{
		name: 'Portability Document',
		value: 'portabilityDocumentListGet',
		action: 'Execute the GET on portability/{x}/document',
		execute: executeportabilityDocumentListGet,
		description: descriptionportabilityDocumentListGet,
	},
	{
		name: 'Portability Document (2)',
		value: 'portabilityDocumentPost',
		action: 'Execute the POST on portability/{x}/document',
		execute: executeportabilityDocumentPost,
		description: descriptionportabilityDocumentPost,
	},
	{
		name: 'Portability Document (3)',
		value: 'portabilityDocumentDelete',
		action: 'Execute the DELETE on portability/{x}/document/{x}',
		execute: executeportabilityDocumentDelete,
		description: descriptionportabilityDocumentDelete,
	},
	{
		name: 'Portability Document (4)',
		value: 'portabilityDocumentGet',
		action: 'Execute the GET on portability/{x}/document/{x}',
		execute: executeportabilityDocumentGet,
		description: descriptionportabilityDocumentGet,
	},
	{
		name: 'Portability Document (5)',
		value: 'portabilityDocumentPut',
		action: 'Execute the PUT on portability/{x}/document/{x}',
		execute: executeportabilityDocumentPut,
		description: descriptionportabilityDocumentPut,
	},
	{
		name: 'Portability Execute',
		value: 'portabilityExecutePost',
		action: 'Execute the POST on portability/{x}/execute',
		execute: executeportabilityExecutePost,
		description: descriptionportabilityExecutePost,
	},
	{
		name: 'Portability Relaunch',
		value: 'portabilityRelaunchListGet',
		action: 'Execute the GET on portability/{x}/relaunch',
		execute: executeportabilityRelaunchListGet,
		description: descriptionportabilityRelaunchListGet,
	},
	{
		name: 'Portability Relaunch (2)',
		value: 'portabilityRelaunchPost',
		action: 'Execute the POST on portability/{x}/relaunch',
		execute: executeportabilityRelaunchPost,
		description: descriptionportabilityRelaunchPost,
	},
	{
		name: 'Portability Status',
		value: 'portabilityStatusListGet',
		action: 'Execute the GET on portability/{x}/status',
		execute: executeportabilityStatusListGet,
		description: descriptionportabilityStatusListGet,
	},
	{
		name: 'Procedure Cancel',
		value: 'procedureCancelPost',
		action: 'Execute the POST on procedure/{id}/cancel',
		execute: executeprocedureCancelPost,
		description: descriptionprocedureCancelPost,
	},
	{
		name: 'Procedure Create',
		value: 'procedurePost',
		action: 'Create a telephony procedure',
		execute: executeprocedurePost,
		description: descriptionprocedurePost,
	},
	{
		name: 'Procedure Get',
		value: 'procedureGet',
		action: 'Get this object properties',
		execute: executeprocedureGet,
		description: descriptionprocedureGet,
	},
	{
		name: 'Procedure List',
		value: 'procedureListGet',
		action: 'Procedures linked to your nichandle',
		execute: executeprocedureListGet,
		description: descriptionprocedureListGet,
	},
	{
		name: 'Procedure Required List',
		value: 'procedureRequiredListGet',
		action: 'Tells whether the procedure is necessary to order telephony products or not',
		execute: executeprocedureRequiredListGet,
		description: descriptionprocedureRequiredListGet,
	},
	{
		name: 'Redirect',
		value: 'redirectListGet',
		action: 'Execute the GET on redirect',
		execute: executeredirectListGet,
		description: descriptionredirectListGet,
	},
	{
		name: 'Redirect (2)',
		value: 'redirectGet',
		action: 'Execute the GET on redirect/{x}',
		execute: executeredirectGet,
		description: descriptionredirectGet,
	},
	{
		name: 'Redirect (3)',
		value: 'redirectPut',
		action: 'Execute the PUT on redirect/{x}',
		execute: executeredirectPut,
		description: descriptionredirectPut,
	},
	{
		name: 'Redirect Change Destination',
		value: 'redirectChangeDestinationPost',
		action: 'Execute the POST on redirect/{x}/changeDestination',
		execute: executeredirectChangeDestinationPost,
		description: descriptionredirectChangeDestinationPost,
	},
	{
		name: 'Reseller Panel Generate Password',
		value: 'resellerPanelGeneratePasswordPost',
		action: 'Generate a new password for the reseller panel',
		execute: executeresellerPanelGeneratePasswordPost,
		description: descriptionresellerPanelGeneratePasswordPost,
	},
	{
		name: 'Reseller Panel Status List',
		value: 'resellerPanelStatusListGet',
		action: 'Status of customer reseller panel',
		execute: executeresellerPanelStatusListGet,
		description: descriptionresellerPanelStatusListGet,
	},
	{
		name: 'Rsva',
		value: 'rsvaListGet',
		action: 'Execute the GET on rsva',
		execute: executersvaListGet,
		description: descriptionrsvaListGet,
	},
	{
		name: 'Rsva (2)',
		value: 'rsvaGet',
		action: 'Execute the GET on rsva/{x}',
		execute: executersvaGet,
		description: descriptionrsvaGet,
	},
	{
		name: 'Rsva (3)',
		value: 'rsvaPut',
		action: 'Execute the PUT on rsva/{x}',
		execute: executersvaPut,
		description: descriptionrsvaPut,
	},
	{
		name: 'Rsva Allowed Rate Codes',
		value: 'rsvaAllowedRateCodesListGet',
		action: 'Execute the GET on rsva/{x}/allowedRateCodes',
		execute: executersvaAllowedRateCodesListGet,
		description: descriptionrsvaAllowedRateCodesListGet,
	},
	{
		name: 'Rsva Cancel Scheduled Rate Code',
		value: 'rsvaCancelScheduledRateCodePost',
		action: 'Execute the POST on rsva/{x}/cancelScheduledRateCode',
		execute: executersvaCancelScheduledRateCodePost,
		description: descriptionrsvaCancelScheduledRateCodePost,
	},
	{
		name: 'Rsva Current Rate Code',
		value: 'rsvaCurrentRateCodeListGet',
		action: 'Execute the GET on rsva/{x}/currentRateCode',
		execute: executersvaCurrentRateCodeListGet,
		description: descriptionrsvaCurrentRateCodeListGet,
	},
	{
		name: 'Rsva Schedule Rate Code',
		value: 'rsvaScheduleRateCodePost',
		action: 'Execute the POST on rsva/{x}/scheduleRateCode',
		execute: executersvaScheduleRateCodePost,
		description: descriptionrsvaScheduleRateCodePost,
	},
	{
		name: 'Rsva Scheduled Rate Code',
		value: 'rsvaScheduledRateCodeListGet',
		action: 'Execute the GET on rsva/{x}/scheduledRateCode',
		execute: executersvaScheduledRateCodeListGet,
		description: descriptionrsvaScheduledRateCodeListGet,
	},
	{
		name: 'Scheduler',
		value: 'schedulerListGet',
		action: 'Execute the GET on scheduler',
		execute: executeschedulerListGet,
		description: descriptionschedulerListGet,
	},
	{
		name: 'Scheduler (2)',
		value: 'schedulerGet',
		action: 'Execute the GET on scheduler/{x}',
		execute: executeschedulerGet,
		description: descriptionschedulerGet,
	},
	{
		name: 'Scheduler (3)',
		value: 'schedulerPut',
		action: 'Execute the PUT on scheduler/{x}',
		execute: executeschedulerPut,
		description: descriptionschedulerPut,
	},
	{
		name: 'Scheduler Events',
		value: 'schedulerEventsListGet',
		action: 'Execute the GET on scheduler/{x}/events',
		execute: executeschedulerEventsListGet,
		description: descriptionschedulerEventsListGet,
	},
	{
		name: 'Scheduler Events (2)',
		value: 'schedulerEventsPost',
		action: 'Execute the POST on scheduler/{x}/events',
		execute: executeschedulerEventsPost,
		description: descriptionschedulerEventsPost,
	},
	{
		name: 'Scheduler Events (3)',
		value: 'schedulerEventsDelete',
		action: 'Execute the DELETE on scheduler/{x}/events/{x}',
		execute: executeschedulerEventsDelete,
		description: descriptionschedulerEventsDelete,
	},
	{
		name: 'Scheduler Events (4)',
		value: 'schedulerEventsGet',
		action: 'Execute the GET on scheduler/{x}/events/{x}',
		execute: executeschedulerEventsGet,
		description: descriptionschedulerEventsGet,
	},
	{
		name: 'Scheduler Events (5)',
		value: 'schedulerEventsPut',
		action: 'Execute the PUT on scheduler/{x}/events/{x}',
		execute: executeschedulerEventsPut,
		description: descriptionschedulerEventsPut,
	},
	{
		name: 'Scheduler Import Ics Calendar',
		value: 'schedulerImportIcsCalendarPost',
		action: 'Execute the POST on scheduler/{x}/importIcsCalendar',
		execute: executeschedulerImportIcsCalendarPost,
		description: descriptionschedulerImportIcsCalendarPost,
	},
	{
		name: 'Screen',
		value: 'screenListGet',
		action: 'Execute the GET on screen',
		execute: executescreenListGet,
		description: descriptionscreenListGet,
	},
	{
		name: 'Screen (2)',
		value: 'screenGet',
		action: 'Execute the GET on screen/{x}',
		execute: executescreenGet,
		description: descriptionscreenGet,
	},
	{
		name: 'Screen (3)',
		value: 'screenPut',
		action: 'Execute the PUT on screen/{x}',
		execute: executescreenPut,
		description: descriptionscreenPut,
	},
	{
		name: 'Screen Screen Lists',
		value: 'screenScreenListsListGet',
		action: 'Execute the GET on screen/{x}/screenLists',
		execute: executescreenScreenListsListGet,
		description: descriptionscreenScreenListsListGet,
	},
	{
		name: 'Screen Screen Lists (2)',
		value: 'screenScreenListsPost',
		action: 'Execute the POST on screen/{x}/screenLists',
		execute: executescreenScreenListsPost,
		description: descriptionscreenScreenListsPost,
	},
	{
		name: 'Screen Screen Lists (3)',
		value: 'screenScreenListsDelete',
		action: 'Execute the DELETE on screen/{x}/screenLists/{x}',
		execute: executescreenScreenListsDelete,
		description: descriptionscreenScreenListsDelete,
	},
	{
		name: 'Screen Screen Lists (4)',
		value: 'screenScreenListsGet',
		action: 'Execute the GET on screen/{x}/screenLists/{x}',
		execute: executescreenScreenListsGet,
		description: descriptionscreenScreenListsGet,
	},
	{
		name: 'Search Services',
		value: 'searchServicesGet',
		action: 'Search a service with its domain to get its billing account and type',
		execute: executeSearchServicesGet,
		description: descriptionSearchServicesGet,
	},
	{
		name: 'Service',
		value: 'serviceListGet',
		action: 'Execute the GET on service',
		execute: executeserviceListGet,
		description: descriptionserviceListGet,
	},
	{
		name: 'Service (2)',
		value: 'serviceDelete',
		action: 'Execute the DELETE on service/{x}',
		execute: executeserviceDelete,
		description: descriptionserviceDelete,
	},
	{
		name: 'Service (3)',
		value: 'serviceGet',
		action: 'Execute the GET on service/{x}',
		execute: executeserviceGet,
		description: descriptionserviceGet,
	},
	{
		name: 'Service (4)',
		value: 'servicePut',
		action: 'Execute the PUT on service/{x}',
		execute: executeservicePut,
		description: descriptionservicePut,
	},
	{
		name: 'Service Cancel Termination',
		value: 'serviceCancelTerminationPost',
		action: 'Execute the POST on service/{x}/cancelTermination',
		execute: executeserviceCancelTerminationPost,
		description: descriptionserviceCancelTerminationPost,
	},
	{
		name: 'Service Change Of Billing Account',
		value: 'serviceChangeOfBillingAccountPost',
		action: 'Execute the POST on service/{x}/changeOfBillingAccount',
		execute: executeserviceChangeOfBillingAccountPost,
		description: descriptionserviceChangeOfBillingAccountPost,
	},
	{
		name: 'Service Diagnostic Reports',
		value: 'serviceDiagnosticReportsListGet',
		action: 'Execute the GET on service/{x}/diagnosticReports',
		execute: executeserviceDiagnosticReportsListGet,
		description: descriptionserviceDiagnosticReportsListGet,
	},
	{
		name: 'Service Directory',
		value: 'serviceDirectoryListGet',
		action: 'Execute the GET on service/{x}/directory',
		execute: executeserviceDirectoryListGet,
		description: descriptionserviceDirectoryListGet,
	},
	{
		name: 'Service Directory (2)',
		value: 'serviceDirectoryPut',
		action: 'Execute the PUT on service/{x}/directory',
		execute: executeserviceDirectoryPut,
		description: descriptionserviceDirectoryPut,
	},
	{
		name: 'Service Directory Fetch Entreprise Informations',
		value: 'serviceDirectoryFetchEntrepriseInformationsPost',
		action: 'Execute the POST on service/{x}/directory/fetchEntrepriseInformations',
		execute: executeserviceDirectoryFetchEntrepriseInformationsPost,
		description: descriptionserviceDirectoryFetchEntrepriseInformationsPost,
	},
	{
		name: 'Service Directory Get Directory Service Code',
		value: 'serviceDirectoryGetDirectoryServiceCodeListGet',
		action: 'Execute the GET on service/{x}/directory/getDirectoryServiceCode',
		execute: executeserviceDirectoryGetDirectoryServiceCodeListGet,
		description: descriptionserviceDirectoryGetDirectoryServiceCodeListGet,
	},
	{
		name: 'Service Directory Get Way Types',
		value: 'serviceDirectoryGetWayTypesListGet',
		action: 'Execute the GET on service/{x}/directory/getWayTypes',
		execute: executeserviceDirectoryGetWayTypesListGet,
		description: descriptionserviceDirectoryGetWayTypesListGet,
	},
	{
		name: 'Service Event Token',
		value: 'serviceEventTokenDelete',
		action: 'Execute the DELETE on service/{x}/eventToken',
		execute: executeserviceEventTokenDelete,
		description: descriptionserviceEventTokenDelete,
	},
	{
		name: 'Service Event Token (2)',
		value: 'serviceEventTokenListGet',
		action: 'Execute the GET on service/{x}/eventToken',
		execute: executeserviceEventTokenListGet,
		description: descriptionserviceEventTokenListGet,
	},
	{
		name: 'Service Event Token (3)',
		value: 'serviceEventTokenPost',
		action: 'Execute the POST on service/{x}/eventToken',
		execute: executeserviceEventTokenPost,
		description: descriptionserviceEventTokenPost,
	},
	{
		name: 'Service Fax Consumption',
		value: 'serviceFaxConsumptionListGet',
		action: 'Execute the GET on service/{x}/faxConsumption',
		execute: executeserviceFaxConsumptionListGet,
		description: descriptionserviceFaxConsumptionListGet,
	},
	{
		name: 'Service Fax Consumption (2)',
		value: 'serviceFaxConsumptionGet',
		action: 'Execute the GET on service/{x}/faxConsumption/{x}',
		execute: executeserviceFaxConsumptionGet,
		description: descriptionserviceFaxConsumptionGet,
	},
	{
		name: 'Service Infos List',
		value: 'serviceInfosListGet',
		action: 'Get service information',
		execute: executeserviceInfosListGet,
		description: descriptionserviceInfosListGet,
	},
	{
		name: 'Service Infos Update',
		value: 'serviceInfosPut',
		action: 'Update service information',
		execute: executeserviceInfosPut,
		description: descriptionserviceInfosPut,
	},
	{
		name: 'Service Offer Change',
		value: 'serviceOfferChangeDelete',
		action: 'Execute the DELETE on service/{x}/offerChange',
		execute: executeserviceOfferChangeDelete,
		description: descriptionserviceOfferChangeDelete,
	},
	{
		name: 'Service Offer Change (2)',
		value: 'serviceOfferChangeListGet',
		action: 'Execute the GET on service/{x}/offerChange',
		execute: executeserviceOfferChangeListGet,
		description: descriptionserviceOfferChangeListGet,
	},
	{
		name: 'Service Offer Change (3)',
		value: 'serviceOfferChangePost',
		action: 'Execute the POST on service/{x}/offerChange',
		execute: executeserviceOfferChangePost,
		description: descriptionserviceOfferChangePost,
	},
	{
		name: 'Service Offer Changes',
		value: 'serviceOfferChangesListGet',
		action: 'Execute the GET on service/{x}/offerChanges',
		execute: executeserviceOfferChangesListGet,
		description: descriptionserviceOfferChangesListGet,
	},
	{
		name: 'Service Offer Task',
		value: 'serviceOfferTaskListGet',
		action: 'Execute the GET on service/{x}/offerTask',
		execute: executeserviceOfferTaskListGet,
		description: descriptionserviceOfferTaskListGet,
	},
	{
		name: 'Service Offer Task (2)',
		value: 'serviceOfferTaskGet',
		action: 'Execute the GET on service/{x}/offerTask/{x}',
		execute: executeserviceOfferTaskGet,
		description: descriptionserviceOfferTaskGet,
	},
	{
		name: 'Service Offer Task (3)',
		value: 'serviceOfferTaskPut',
		action: 'Execute the PUT on service/{x}/offerTask/{x}',
		execute: executeserviceOfferTaskPut,
		description: descriptionserviceOfferTaskPut,
	},
	{
		name: 'Service Previous Voice Consumption',
		value: 'servicePreviousVoiceConsumptionListGet',
		action: 'Execute the GET on service/{x}/previousVoiceConsumption',
		execute: executeservicePreviousVoiceConsumptionListGet,
		description: descriptionservicePreviousVoiceConsumptionListGet,
	},
	{
		name: 'Service Previous Voice Consumption (2)',
		value: 'servicePreviousVoiceConsumptionGet',
		action: 'Execute the GET on service/{x}/previousVoiceConsumption/{x}',
		execute: executeservicePreviousVoiceConsumptionGet,
		description: descriptionservicePreviousVoiceConsumptionGet,
	},
	{
		name: 'Service Repayment Consumption',
		value: 'serviceRepaymentConsumptionListGet',
		action: 'Execute the GET on service/{x}/repaymentConsumption',
		execute: executeserviceRepaymentConsumptionListGet,
		description: descriptionserviceRepaymentConsumptionListGet,
	},
	{
		name: 'Service Repayment Consumption (2)',
		value: 'serviceRepaymentConsumptionGet',
		action: 'Execute the GET on service/{x}/repaymentConsumption/{x}',
		execute: executeserviceRepaymentConsumptionGet,
		description: descriptionserviceRepaymentConsumptionGet,
	},
	{
		name: 'Service Task',
		value: 'serviceTaskListGet',
		action: 'Execute the GET on service/{x}/task',
		execute: executeserviceTaskListGet,
		description: descriptionserviceTaskListGet,
	},
	{
		name: 'Service Task (2)',
		value: 'serviceTaskGet',
		action: 'Execute the GET on service/{x}/task/{x}',
		execute: executeserviceTaskGet,
		description: descriptionserviceTaskGet,
	},
	{
		name: 'Service Voice Consumption',
		value: 'serviceVoiceConsumptionListGet',
		action: 'Execute the GET on service/{x}/voiceConsumption',
		execute: executeserviceVoiceConsumptionListGet,
		description: descriptionserviceVoiceConsumptionListGet,
	},
	{
		name: 'Service Voice Consumption (2)',
		value: 'serviceVoiceConsumptionGet',
		action: 'Execute the GET on service/{x}/voiceConsumption/{x}',
		execute: executeserviceVoiceConsumptionGet,
		description: descriptionserviceVoiceConsumptionGet,
	},
	{
		name: 'Set Default SIP Domain',
		value: 'setDefaultSipDomainPost',
		action: 'Set the default SIP domain for a country and type',
		execute: executeSetDefaultSipDomainPost,
		description: descriptionSetDefaultSipDomainPost,
	},
	{
		name: 'Softphone Logo',
		value: 'softphoneLogoDelete',
		action: 'Execute the DELETE on softphone/logo',
		execute: executesoftphoneLogoDelete,
		description: descriptionsoftphoneLogoDelete,
	},
	{
		name: 'Softphone Logo (2)',
		value: 'softphoneLogoListGet',
		action: 'Execute the GET on softphone/logo',
		execute: executesoftphoneLogoListGet,
		description: descriptionsoftphoneLogoListGet,
	},
	{
		name: 'Softphone Logo (3)',
		value: 'softphoneLogoPut',
		action: 'Execute the PUT on softphone/logo',
		execute: executesoftphoneLogoPut,
		description: descriptionsoftphoneLogoPut,
	},
	{
		name: 'Softphone Store Links List',
		value: 'softphoneStoreLinksListGet',
		action: 'Get softphone application stores links',
		execute: executesoftphoneStoreLinksListGet,
		description: descriptionsoftphoneStoreLinksListGet,
	},
	{
		name: 'Softphone Theme',
		value: 'softphoneThemeListGet',
		action: 'Execute the GET on softphone/theme',
		execute: executesoftphoneThemeListGet,
		description: descriptionsoftphoneThemeListGet,
	},
	{
		name: 'Softphone Theme (2)',
		value: 'softphoneThemePut',
		action: 'Execute the PUT on softphone/theme',
		execute: executesoftphoneThemePut,
		description: descriptionsoftphoneThemePut,
	},
	{
		name: 'Softphone Theme (3)',
		value: 'softphoneThemesGet',
		action: 'Get softphone theme information',
		execute: executesoftphoneThemesGet,
		description: descriptionsoftphoneThemesGet,
	},
	{
		name: 'Softphone Themes List',
		value: 'softphoneThemesListGet',
		action: 'Get IDs of available softphone themes',
		execute: executesoftphoneThemesListGet,
		description: descriptionsoftphoneThemesListGet,
	},
	{
		name: 'Sound Create',
		value: 'soundsPost',
		action: 'Create a new sound',
		execute: executesoundsPost,
		description: descriptionsoundsPost,
	},
	{
		name: 'Sound Delete',
		value: 'soundsDelete',
		action: 'Delete the sound',
		execute: executesoundsDelete,
		description: descriptionsoundsDelete,
	},
	{
		name: 'Sound Get',
		value: 'soundsGet',
		action: 'Get this object properties',
		execute: executesoundsGet,
		description: descriptionsoundsGet,
	},
	{
		name: 'Sound Update',
		value: 'soundsPut',
		action: 'Alter this object properties',
		execute: executesoundsPut,
		description: descriptionsoundsPut,
	},
	{
		name: 'Sounds List',
		value: 'soundsListGet',
		action: 'Sounds attached to this telephony account',
		execute: executesoundsListGet,
		description: descriptionsoundsListGet,
	},
	{
		name: 'Spare Brands List',
		value: 'spareBrandsListGet',
		action: 'Get all available spare brands',
		execute: executespareBrandsListGet,
		description: descriptionspareBrandsListGet,
	},
	{
		name: 'Spare Compatible Replacement List',
		value: 'spareCompatibleReplacementListGet',
		action: 'Return the list of phone domains compatible to be replaced',
		execute: executespareCompatibleReplacementListGet,
		description: descriptionspareCompatibleReplacementListGet,
	},
	{
		name: 'Spare Delete',
		value: 'spareDelete',
		action: 'Delete the spare as if it was not belonging to OVH anymore',
		execute: executespareDelete,
		description: descriptionspareDelete,
	},
	{
		name: 'Spare Get',
		value: 'spareGet',
		action: 'Get this object properties',
		execute: executespareGet,
		description: descriptionspareGet,
	},
	{
		name: 'Spare List',
		value: 'spareListGet',
		action: 'List available services',
		execute: executespareListGet,
		description: descriptionspareListGet,
	},
	{
		name: 'Spare Replace',
		value: 'spareReplacePost',
		action: 'Replace the phone by its spare',
		execute: executespareReplacePost,
		description: descriptionspareReplacePost,
	},
	{
		name: 'Spare Service Infos List',
		value: 'spareServiceInfosListGet',
		action: 'Get service information',
		execute: executespareServiceInfosListGet,
		description: descriptionspareServiceInfosListGet,
	},
	{
		name: 'Spare Service Infos Update',
		value: 'spareServiceInfosPut',
		action: 'Update service information',
		execute: executespareServiceInfosPut,
		description: descriptionspareServiceInfosPut,
	},
	{
		name: 'Task Get',
		value: 'taskGet',
		action: 'Get this object properties',
		execute: executetaskGet,
		description: descriptiontaskGet,
	},
	{
		name: 'Task List',
		value: 'taskListGet',
		action: 'Operations on a telephony billing account',
		execute: executetaskListGet,
		description: descriptiontaskListGet,
	},
	{
		name: 'Terminate Billing Account',
		value: 'billingAccountDelete',
		action: 'Ask for a billing account termination.',
		execute: executebillingAccountDelete,
		description: descriptionbillingAccountDelete,
	},
	{
		name: 'Time Condition',
		value: 'timeConditionListGet',
		action: 'Execute the GET on timeCondition',
		execute: executetimeConditionListGet,
		description: descriptiontimeConditionListGet,
	},
	{
		name: 'Time Condition (2)',
		value: 'timeConditionGet',
		action: 'Execute the GET on timeCondition/{x}',
		execute: executetimeConditionGet,
		description: descriptiontimeConditionGet,
	},
	{
		name: 'Time Condition Condition',
		value: 'timeConditionConditionListGet',
		action: 'Execute the GET on timeCondition/{x}/condition',
		execute: executetimeConditionConditionListGet,
		description: descriptiontimeConditionConditionListGet,
	},
	{
		name: 'Time Condition Condition (2)',
		value: 'timeConditionConditionPost',
		action: 'Execute the POST on timeCondition/{x}/condition',
		execute: executetimeConditionConditionPost,
		description: descriptiontimeConditionConditionPost,
	},
	{
		name: 'Time Condition Condition (3)',
		value: 'timeConditionConditionDelete',
		action: 'Execute the DELETE on timeCondition/{x}/condition/{x}',
		execute: executetimeConditionConditionDelete,
		description: descriptiontimeConditionConditionDelete,
	},
	{
		name: 'Time Condition Condition (4)',
		value: 'timeConditionConditionGet',
		action: 'Execute the GET on timeCondition/{x}/condition/{x}',
		execute: executetimeConditionConditionGet,
		description: descriptiontimeConditionConditionGet,
	},
	{
		name: 'Time Condition Condition (5)',
		value: 'timeConditionConditionPut',
		action: 'Execute the PUT on timeCondition/{x}/condition/{x}',
		execute: executetimeConditionConditionPut,
		description: descriptiontimeConditionConditionPut,
	},
	{
		name: 'Time Condition Options',
		value: 'timeConditionOptionsListGet',
		action: 'Execute the GET on timeCondition/{x}/options',
		execute: executetimeConditionOptionsListGet,
		description: descriptiontimeConditionOptionsListGet,
	},
	{
		name: 'Time Condition Options (2)',
		value: 'timeConditionOptionsPut',
		action: 'Execute the PUT on timeCondition/{x}/options',
		execute: executetimeConditionOptionsPut,
		description: descriptiontimeConditionOptionsPut,
	},
	{
		name: 'Transfer Security Deposit',
		value: 'transferSecurityDepositPost',
		action: 'Transfer security deposit between two billing accounts',
		execute: executetransferSecurityDepositPost,
		description: descriptiontransferSecurityDepositPost,
	},
	{
		name: 'Trunk',
		value: 'trunkListGet',
		action: 'Execute the GET on trunk',
		execute: executetrunkListGet,
		description: descriptiontrunkListGet,
	},
	{
		name: 'Trunk (2)',
		value: 'trunkGet',
		action: 'Execute the GET on trunk/{x}',
		execute: executetrunkGet,
		description: descriptiontrunkGet,
	},
	{
		name: 'Trunk Channels Packs Repartition',
		value: 'trunkChannelsPacksRepartitionListGet',
		action: 'Execute the GET on trunk/{x}/channelsPacksRepartition',
		execute: executetrunkChannelsPacksRepartitionListGet,
		description: descriptiontrunkChannelsPacksRepartitionListGet,
	},
	{
		name: 'Trunk External Displayed Number',
		value: 'trunkExternalDisplayedNumberListGet',
		action: 'Execute the GET on trunk/{x}/externalDisplayedNumber',
		execute: executetrunkExternalDisplayedNumberListGet,
		description: descriptiontrunkExternalDisplayedNumberListGet,
	},
	{
		name: 'Trunk External Displayed Number (2)',
		value: 'trunkExternalDisplayedNumberPost',
		action: 'Execute the POST on trunk/{x}/externalDisplayedNumber',
		execute: executetrunkExternalDisplayedNumberPost,
		description: descriptiontrunkExternalDisplayedNumberPost,
	},
	{
		name: 'Trunk External Displayed Number (3)',
		value: 'trunkExternalDisplayedNumberDelete',
		action: 'Execute the DELETE on trunk/{x}/externalDisplayedNumber/{x}',
		execute: executetrunkExternalDisplayedNumberDelete,
		description: descriptiontrunkExternalDisplayedNumberDelete,
	},
	{
		name: 'Trunk External Displayed Number (4)',
		value: 'trunkExternalDisplayedNumberGet',
		action: 'Execute the GET on trunk/{x}/externalDisplayedNumber/{x}',
		execute: executetrunkExternalDisplayedNumberGet,
		description: descriptiontrunkExternalDisplayedNumberGet,
	},
	{
		name: 'Trunk External Displayed Number Validate',
		value: 'trunkExternalDisplayedNumberValidatePost',
		action: 'Execute the POST on trunk/{x}/externalDisplayedNumber/{x}/validate',
		execute: executetrunkExternalDisplayedNumberValidatePost,
		description: descriptiontrunkExternalDisplayedNumberValidatePost,
	},
	{
		name: 'Update Alias Service Info',
		value: 'aliasServiceInfosPut',
		action: 'Update service information for an alias',
		execute: executeAliasServiceInfosPut,
		description: descriptionAliasServiceInfosPut,
	},
	{
		name: 'Update Billing Account',
		value: 'billingAccountPut',
		action: 'Alter this object properties',
		execute: executebillingAccountPut,
		description: descriptionbillingAccountPut,
	},
	{
		name: 'Update Line Service Info',
		value: 'linesServiceInfosPut',
		action: 'Update service information for a line',
		execute: executeLinesServiceInfosPut,
		description: descriptionLinesServiceInfosPut,
	},
	{
		name: 'Update Number',
		value: 'linesNumberPut',
		action: 'Update number properties',
		execute: executeLinesNumberPut,
		description: descriptionLinesNumberPut,
	},
	{
		name: 'Update Portability',
		value: 'linesPortabilityPut',
		action: 'Update portability properties',
		execute: executeLinesPortabilityPut,
		description: descriptionLinesPortabilityPut,
	},
	{
		name: 'Update SIM',
		value: 'linesSimPut',
		action: 'Update SIM properties',
		execute: executeLinesSimPut,
		description: descriptionLinesSimPut,
	},
	{
		name: 'Update Trunk Service Info',
		value: 'trunksServiceInfosPut',
		action: 'Update service information for a trunk',
		execute: executeTrunksServiceInfosPut,
		description: descriptionTrunksServiceInfosPut,
	},
	{
		name: 'Voicemail',
		value: 'voicemailListGet',
		action: 'Execute the GET on voicemail',
		execute: executevoicemailListGet,
		description: descriptionvoicemailListGet,
	},
	{
		name: 'Voicemail (2)',
		value: 'voicemailGet',
		action: 'Execute the GET on voicemail/{x}',
		execute: executevoicemailGet,
		description: descriptionvoicemailGet,
	},
	{
		name: 'Voicemail (3)',
		value: 'voicemailPut',
		action: 'Execute the PUT on voicemail/{x}',
		execute: executevoicemailPut,
		description: descriptionvoicemailPut,
	},
	{
		name: 'Voicemail Directories',
		value: 'voicemailDirectoriesListGet',
		action: 'Execute the GET on voicemail/{x}/directories',
		execute: executevoicemailDirectoriesListGet,
		description: descriptionvoicemailDirectoriesListGet,
	},
	{
		name: 'Voicemail Directories (2)',
		value: 'voicemailDirectoriesDelete',
		action: 'Execute the DELETE on voicemail/{x}/directories/{x}',
		execute: executevoicemailDirectoriesDelete,
		description: descriptionvoicemailDirectoriesDelete,
	},
	{
		name: 'Voicemail Directories (3)',
		value: 'voicemailDirectoriesGet',
		action: 'Execute the GET on voicemail/{x}/directories/{x}',
		execute: executevoicemailDirectoriesGet,
		description: descriptionvoicemailDirectoriesGet,
	},
	{
		name: 'Voicemail Directories Download',
		value: 'voicemailDirectoriesDownloadListGet',
		action: 'Execute the GET on voicemail/{x}/directories/{x}/download',
		execute: executevoicemailDirectoriesDownloadListGet,
		description: descriptionvoicemailDirectoriesDownloadListGet,
	},
	{
		name: 'Voicemail Directories Move',
		value: 'voicemailDirectoriesMovePost',
		action: 'Execute the POST on voicemail/{x}/directories/{x}/move',
		execute: executevoicemailDirectoriesMovePost,
		description: descriptionvoicemailDirectoriesMovePost,
	},
	{
		name: 'Voicemail Directories Transcript',
		value: 'voicemailDirectoriesTranscriptListGet',
		action: 'Execute the GET on voicemail/{x}/directories/{x}/transcript',
		execute: executevoicemailDirectoriesTranscriptListGet,
		description: descriptionvoicemailDirectoriesTranscriptListGet,
	},
	{
		name: 'Voicemail Greetings',
		value: 'voicemailGreetingsListGet',
		action: 'Execute the GET on voicemail/{x}/greetings',
		execute: executevoicemailGreetingsListGet,
		description: descriptionvoicemailGreetingsListGet,
	},
	{
		name: 'Voicemail Greetings (2)',
		value: 'voicemailGreetingsPost',
		action: 'Execute the POST on voicemail/{x}/greetings',
		execute: executevoicemailGreetingsPost,
		description: descriptionvoicemailGreetingsPost,
	},
	{
		name: 'Voicemail Greetings (3)',
		value: 'voicemailGreetingsDelete',
		action: 'Execute the DELETE on voicemail/{x}/greetings/{x}',
		execute: executevoicemailGreetingsDelete,
		description: descriptionvoicemailGreetingsDelete,
	},
	{
		name: 'Voicemail Greetings (4)',
		value: 'voicemailGreetingsGet',
		action: 'Execute the GET on voicemail/{x}/greetings/{x}',
		execute: executevoicemailGreetingsGet,
		description: descriptionvoicemailGreetingsGet,
	},
	{
		name: 'Voicemail Greetings Download',
		value: 'voicemailGreetingsDownloadListGet',
		action: 'Execute the GET on voicemail/{x}/greetings/{x}/download',
		execute: executevoicemailGreetingsDownloadListGet,
		description: descriptionvoicemailGreetingsDownloadListGet,
	},
	{
		name: 'Voicemail Greetings Move',
		value: 'voicemailGreetingsMovePost',
		action: 'Execute the POST on voicemail/{x}/greetings/{x}/move',
		execute: executevoicemailGreetingsMovePost,
		description: descriptionvoicemailGreetingsMovePost,
	},
	{
		name: 'Voicemail Migrate On New Version',
		value: 'voicemailMigrateOnNewVersionPost',
		action: 'Execute the POST on voicemail/{x}/migrateOnNewVersion',
		execute: executevoicemailMigrateOnNewVersionPost,
		description: descriptionvoicemailMigrateOnNewVersionPost,
	},
	{
		name: 'Voicemail Settings',
		value: 'voicemailSettingsListGet',
		action: 'Execute the GET on voicemail/{x}/settings',
		execute: executevoicemailSettingsListGet,
		description: descriptionvoicemailSettingsListGet,
	},
	{
		name: 'Voicemail Settings (2)',
		value: 'voicemailSettingsPut',
		action: 'Execute the PUT on voicemail/{x}/settings',
		execute: executevoicemailSettingsPut,
		description: descriptionvoicemailSettingsPut,
	},
	{
		name: 'Voicemail Settings Change Password',
		value: 'voicemailSettingsChangePasswordPost',
		action: 'Execute the POST on voicemail/{x}/settings/changePassword',
		execute: executevoicemailSettingsChangePasswordPost,
		description: descriptionvoicemailSettingsChangePasswordPost,
	},
	{
		name: 'Voicemail Settings Change Routing',
		value: 'voicemailSettingsChangeRoutingPost',
		action: 'Execute the POST on voicemail/{x}/settings/changeRouting',
		execute: executevoicemailSettingsChangeRoutingPost,
		description: descriptionvoicemailSettingsChangeRoutingPost,
	},
	{
		name: 'Voicemail Settings Routing',
		value: 'voicemailSettingsRoutingListGet',
		action: 'Execute the GET on voicemail/{x}/settings/routing',
		execute: executevoicemailSettingsRoutingListGet,
		description: descriptionvoicemailSettingsRoutingListGet,
	},
	{
		name: 'Voicemail Settings Voicemail Numbers',
		value: 'voicemailSettingsVoicemailNumbersListGet',
		action: 'Execute the GET on voicemail/{x}/settings/voicemailNumbers',
		execute: executevoicemailSettingsVoicemailNumbersListGet,
		description: descriptionvoicemailSettingsVoicemailNumbersListGet,
	},
	{
		name: 'Vxml Get',
		value: 'vxmlGet',
		action: 'Get this object properties',
		execute: executevxmlGet,
		description: descriptionvxmlGet,
	},
	{
		name: 'Vxml List',
		value: 'vxmlListGet',
		action: 'Vxml numbers associated with this billing account',
		execute: executevxmlListGet,
		description: descriptionvxmlListGet,
	},
	{
		name: 'Vxml Settings List',
		value: 'vxmlSettingsListGet',
		action: 'Get this object properties',
		execute: executevxmlSettingsListGet,
		description: descriptionvxmlSettingsListGet,
	},
	{
		name: 'Vxml Settings Logs Create',
		value: 'vxmlSettingsLogsPost',
		action: 'Generate a temporary url to retrieve device logs',
		execute: executevxmlSettingsLogsPost,
		description: descriptionvxmlSettingsLogsPost,
	},
	{
		name: 'Vxml Settings Update',
		value: 'vxmlSettingsPut',
		action: 'Alter this object properties',
		execute: executevxmlSettingsPut,
		description: descriptionvxmlSettingsPut,
	},
	],
);

export { description, execute };

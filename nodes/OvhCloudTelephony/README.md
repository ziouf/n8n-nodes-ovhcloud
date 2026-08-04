# OVH Cloud Telephony

> Manage telephony services — aliases, lines, trunks, numbers, accessories, offers, directories and more

## Overview

This node provides **644 operations** with **644 tests** for managing OVHcloud resources.

## Available Operations

### abbreviatedNumber

| Operation                                                                                 | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`abbreviatedNumberDelete`](./`abbreviatedNumber/abbreviatedNumberDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`abbreviatedNumberGet`](./`abbreviatedNumber/abbreviatedNumberGet.operation.ts`)         | GET    | `...`    | 1     |
| [`abbreviatedNumberListGet`](./`abbreviatedNumber/abbreviatedNumberListGet.operation.ts`) | GET    | `...`    | 1     |
| [`abbreviatedNumberPost`](./`abbreviatedNumber/abbreviatedNumberPost.operation.ts`)       | POST   | `...`    | 1     |
| [`abbreviatedNumberPut`](./`abbreviatedNumber/abbreviatedNumberPut.operation.ts`)         | PUT    | `...`    | 1     |

### accessories

| Operation                                                       | Method | Endpoint | Tests |
| --------------------------------------------------------------- | ------ | -------- | ----- |
| [`accessoriesGet`](./`accessories/accessoriesGet.operation.ts`) | GET    | `...`    | 1     |

### aliases

| Operation                                                                   | Method | Endpoint | Tests |
| --------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`aliasChangeContactPost`](./`aliases/aliasChangeContactPost.operation.ts`) | POST   | `...`    | 1     |
| [`aliasGet`](./`aliases/aliasGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`aliasListGet`](./`aliases/aliasListGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`aliasServiceInfosGet`](./`aliases/aliasServiceInfosGet.operation.ts`)     | GET    | `...`    | 1     |
| [`aliasServiceInfosPut`](./`aliases/aliasServiceInfosPut.operation.ts`)     | PUT    | `...`    | 1     |

### carrierSip

| Operation                                                                                        | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------------ | ------ | -------- | ----- |
| [`carrierSipCdrsListGet`](./`carrierSip/carrierSipCdrsListGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`carrierSipClusterDetailsListGet`](./`carrierSip/carrierSipClusterDetailsListGet.operation.ts`) | GET    | `...`    | 1     |
| [`carrierSipEndpointsGet`](./`carrierSip/carrierSipEndpointsGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`carrierSipEndpointsListGet`](./`carrierSip/carrierSipEndpointsListGet.operation.ts`)           | GET    | `...`    | 1     |
| [`carrierSipGet`](./`carrierSip/carrierSipGet.operation.ts`)                                     | GET    | `...`    | 1     |
| [`carrierSipListGet`](./`carrierSip/carrierSipListGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`carrierSipSettingsListGet`](./`carrierSip/carrierSipSettingsListGet.operation.ts`)             | GET    | `...`    | 1     |
| [`carrierSipSettingsPut`](./`carrierSip/carrierSipSettingsPut.operation.ts`)                     | PUT    | `...`    | 1     |
| [`carrierSipVnoGet`](./`carrierSip/carrierSipVnoGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`carrierSipVnoListGet`](./`carrierSip/carrierSipVnoListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`carrierSipVnoRangesGet`](./`carrierSip/carrierSipVnoRangesGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`carrierSipVnoRangesListGet`](./`carrierSip/carrierSipVnoRangesListGet.operation.ts`)           | GET    | `...`    | 1     |
| [`carrierSipVnoRangesPut`](./`carrierSip/carrierSipVnoRangesPut.operation.ts`)                   | PUT    | `...`    | 1     |

### conference

| Operation                                                                                                    | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------------------------ | ------ | -------- | ----- |
| [`conferenceAnnounceUploadPost`](./`conference/conferenceAnnounceUploadPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`conferenceGet`](./`conference/conferenceGet.operation.ts`)                                                 | GET    | `...`    | 1     |
| [`conferenceHistoriesGet`](./`conference/conferenceHistoriesGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`conferenceHistoriesListGet`](./`conference/conferenceHistoriesListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`conferenceInformationsListGet`](./`conference/conferenceInformationsListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`conferenceListGet`](./`conference/conferenceListGet.operation.ts`)                                         | GET    | `...`    | 1     |
| [`conferenceLockPost`](./`conference/conferenceLockPost.operation.ts`)                                       | POST   | `...`    | 1     |
| [`conferenceParticipantsDeafPost`](./`conference/conferenceParticipantsDeafPost.operation.ts`)               | POST   | `...`    | 1     |
| [`conferenceParticipantsEnergyPost`](./`conference/conferenceParticipantsEnergyPost.operation.ts`)           | POST   | `...`    | 1     |
| [`conferenceParticipantsGet`](./`conference/conferenceParticipantsGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`conferenceParticipantsKickPost`](./`conference/conferenceParticipantsKickPost.operation.ts`)               | POST   | `...`    | 1     |
| [`conferenceParticipantsListGet`](./`conference/conferenceParticipantsListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`conferenceParticipantsMutePost`](./`conference/conferenceParticipantsMutePost.operation.ts`)               | POST   | `...`    | 1     |
| [`conferenceParticipantsUndeafPost`](./`conference/conferenceParticipantsUndeafPost.operation.ts`)           | POST   | `...`    | 1     |
| [`conferenceParticipantsUnmutePost`](./`conference/conferenceParticipantsUnmutePost.operation.ts`)           | POST   | `...`    | 1     |
| [`conferenceRoomsGet`](./`conference/conferenceRoomsGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`conferenceRoomsHistoriesGet`](./`conference/conferenceRoomsHistoriesGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`conferenceRoomsHistoriesListGet`](./`conference/conferenceRoomsHistoriesListGet.operation.ts`)             | GET    | `...`    | 1     |
| [`conferenceRoomsListGet`](./`conference/conferenceRoomsListGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`conferenceRoomsLockPost`](./`conference/conferenceRoomsLockPost.operation.ts`)                             | POST   | `...`    | 1     |
| [`conferenceRoomsParticipantsDeafPost`](./`conference/conferenceRoomsParticipantsDeafPost.operation.ts`)     | POST   | `...`    | 1     |
| [`conferenceRoomsParticipantsEnergyPost`](./`conference/conferenceRoomsParticipantsEnergyPost.operation.ts`) | POST   | `...`    | 1     |
| [`conferenceRoomsParticipantsGet`](./`conference/conferenceRoomsParticipantsGet.operation.ts`)               | GET    | `...`    | 1     |
| [`conferenceRoomsParticipantsKickPost`](./`conference/conferenceRoomsParticipantsKickPost.operation.ts`)     | POST   | `...`    | 1     |
| [`conferenceRoomsParticipantsListGet`](./`conference/conferenceRoomsParticipantsListGet.operation.ts`)       | GET    | `...`    | 1     |
| [`conferenceRoomsParticipantsMutePost`](./`conference/conferenceRoomsParticipantsMutePost.operation.ts`)     | POST   | `...`    | 1     |
| [`conferenceRoomsParticipantsUndeafPost`](./`conference/conferenceRoomsParticipantsUndeafPost.operation.ts`) | POST   | `...`    | 1     |
| [`conferenceRoomsParticipantsUnmutePost`](./`conference/conferenceRoomsParticipantsUnmutePost.operation.ts`) | POST   | `...`    | 1     |
| [`conferenceRoomsPost`](./`conference/conferenceRoomsPost.operation.ts`)                                     | POST   | `...`    | 1     |
| [`conferenceRoomsPut`](./`conference/conferenceRoomsPut.operation.ts`)                                       | PUT    | `...`    | 1     |
| [`conferenceRoomsStatsListGet`](./`conference/conferenceRoomsStatsListGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`conferenceRoomsUnlockPost`](./`conference/conferenceRoomsUnlockPost.operation.ts`)                         | POST   | `...`    | 1     |
| [`conferenceRoomsWebAccessDelete`](./`conference/conferenceRoomsWebAccessDelete.operation.ts`)               | DELETE | `...`    | 1     |
| [`conferenceRoomsWebAccessGet`](./`conference/conferenceRoomsWebAccessGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`conferenceRoomsWebAccessListGet`](./`conference/conferenceRoomsWebAccessListGet.operation.ts`)             | GET    | `...`    | 1     |
| [`conferenceRoomsWebAccessPost`](./`conference/conferenceRoomsWebAccessPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`conferenceSettingsListGet`](./`conference/conferenceSettingsListGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`conferenceSettingsPut`](./`conference/conferenceSettingsPut.operation.ts`)                                 | PUT    | `...`    | 1     |
| [`conferenceUnlockPost`](./`conference/conferenceUnlockPost.operation.ts`)                                   | POST   | `...`    | 1     |
| [`conferenceWebAccessDelete`](./`conference/conferenceWebAccessDelete.operation.ts`)                         | DELETE | `...`    | 1     |
| [`conferenceWebAccessGet`](./`conference/conferenceWebAccessGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`conferenceWebAccessListGet`](./`conference/conferenceWebAccessListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`conferenceWebAccessPost`](./`conference/conferenceWebAccessPost.operation.ts`)                             | POST   | `...`    | 1     |

### ddi

| Operation                                                                   | Method | Endpoint | Tests |
| --------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`ddiChangeDestinationPost`](./`ddi/ddiChangeDestinationPost.operation.ts`) | POST   | `...`    | 1     |
| [`ddiGet`](./`ddi/ddiGet.operation.ts`)                                     | GET    | `...`    | 1     |
| [`ddiListGet`](./`ddi/ddiListGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`ddiPut`](./`ddi/ddiPut.operation.ts`)                                     | PUT    | `...`    | 1     |

### directories

| Operation                                                                                         | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`directoriesAvailableZipCodesGet`](./`directories/directoriesAvailableZipCodesGet.operation.ts`) | GET    | `...`    | 1     |
| [`directoriesCitiesGet`](./`directories/directoriesCitiesGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`directoriesCountriesGet`](./`directories/directoriesCountriesGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`directoriesServicesGet`](./`directories/directoriesServicesGet.operation.ts`)                   | GET    | `...`    | 1     |

### easyHunting

| Operation                                                                                                                           | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`easyHuntingGet`](./`easyHunting/easyHuntingGet.operation.ts`)                                                                     | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentBannerAccessDelete`](./`easyHunting/easyHuntingHuntingAgentBannerAccessDelete.operation.ts`)               | DELETE | `...`    | 1     |
| [`easyHuntingHuntingAgentBannerAccessListGet`](./`easyHunting/easyHuntingHuntingAgentBannerAccessListGet.operation.ts`)             | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentBannerAccessPost`](./`easyHunting/easyHuntingHuntingAgentBannerAccessPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentCallsEavesdropPost`](./`easyHunting/easyHuntingHuntingAgentCallsEavesdropPost.operation.ts`)               | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentCallsGet`](./`easyHunting/easyHuntingHuntingAgentCallsGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentCallsHangupPost`](./`easyHunting/easyHuntingHuntingAgentCallsHangupPost.operation.ts`)                     | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentCallsHoldPost`](./`easyHunting/easyHuntingHuntingAgentCallsHoldPost.operation.ts`)                         | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentCallsInterceptPost`](./`easyHunting/easyHuntingHuntingAgentCallsInterceptPost.operation.ts`)               | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentCallsListGet`](./`easyHunting/easyHuntingHuntingAgentCallsListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentCallsTransferPost`](./`easyHunting/easyHuntingHuntingAgentCallsTransferPost.operation.ts`)                 | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentCallsWhisperPost`](./`easyHunting/easyHuntingHuntingAgentCallsWhisperPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentDelete`](./`easyHunting/easyHuntingHuntingAgentDelete.operation.ts`)                                       | DELETE | `...`    | 1     |
| [`easyHuntingHuntingAgentEventTokenDelete`](./`easyHunting/easyHuntingHuntingAgentEventTokenDelete.operation.ts`)                   | DELETE | `...`    | 1     |
| [`easyHuntingHuntingAgentEventTokenListGet`](./`easyHunting/easyHuntingHuntingAgentEventTokenListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentEventTokenPost`](./`easyHunting/easyHuntingHuntingAgentEventTokenPost.operation.ts`)                       | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentGet`](./`easyHunting/easyHuntingHuntingAgentGet.operation.ts`)                                             | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentListGet`](./`easyHunting/easyHuntingHuntingAgentListGet.operation.ts`)                                     | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentLiveStatusListGet`](./`easyHunting/easyHuntingHuntingAgentLiveStatusListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentPost`](./`easyHunting/easyHuntingHuntingAgentPost.operation.ts`)                                           | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentPut`](./`easyHunting/easyHuntingHuntingAgentPut.operation.ts`)                                             | PUT    | `...`    | 1     |
| [`easyHuntingHuntingAgentQueueDelete`](./`easyHunting/easyHuntingHuntingAgentQueueDelete.operation.ts`)                             | DELETE | `...`    | 1     |
| [`easyHuntingHuntingAgentQueueGet`](./`easyHunting/easyHuntingHuntingAgentQueueGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentQueueListGet`](./`easyHunting/easyHuntingHuntingAgentQueueListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentQueueLiveStatusListGet`](./`easyHunting/easyHuntingHuntingAgentQueueLiveStatusListGet.operation.ts`)       | GET    | `...`    | 1     |
| [`easyHuntingHuntingAgentQueuePost`](./`easyHunting/easyHuntingHuntingAgentQueuePost.operation.ts`)                                 | POST   | `...`    | 1     |
| [`easyHuntingHuntingAgentQueuePut`](./`easyHunting/easyHuntingHuntingAgentQueuePut.operation.ts`)                                   | PUT    | `...`    | 1     |
| [`easyHuntingHuntingCustomStatusDelete`](./`easyHunting/easyHuntingHuntingCustomStatusDelete.operation.ts`)                         | DELETE | `...`    | 1     |
| [`easyHuntingHuntingCustomStatusGet`](./`easyHunting/easyHuntingHuntingCustomStatusGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`easyHuntingHuntingCustomStatusListGet`](./`easyHunting/easyHuntingHuntingCustomStatusListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`easyHuntingHuntingCustomStatusPost`](./`easyHunting/easyHuntingHuntingCustomStatusPost.operation.ts`)                             | POST   | `...`    | 1     |
| [`easyHuntingHuntingEventTokenDelete`](./`easyHunting/easyHuntingHuntingEventTokenDelete.operation.ts`)                             | DELETE | `...`    | 1     |
| [`easyHuntingHuntingEventTokenListGet`](./`easyHunting/easyHuntingHuntingEventTokenListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`easyHuntingHuntingEventTokenPost`](./`easyHunting/easyHuntingHuntingEventTokenPost.operation.ts`)                                 | POST   | `...`    | 1     |
| [`easyHuntingHuntingListGet`](./`easyHunting/easyHuntingHuntingListGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`easyHuntingHuntingPut`](./`easyHunting/easyHuntingHuntingPut.operation.ts`)                                                       | PUT    | `...`    | 1     |
| [`easyHuntingHuntingQueueAgentDelete`](./`easyHunting/easyHuntingHuntingQueueAgentDelete.operation.ts`)                             | DELETE | `...`    | 1     |
| [`easyHuntingHuntingQueueAgentGet`](./`easyHunting/easyHuntingHuntingQueueAgentGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`easyHuntingHuntingQueueAgentListGet`](./`easyHunting/easyHuntingHuntingQueueAgentListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`easyHuntingHuntingQueueAgentLiveStatusListGet`](./`easyHunting/easyHuntingHuntingQueueAgentLiveStatusListGet.operation.ts`)       | GET    | `...`    | 1     |
| [`easyHuntingHuntingQueueAgentPost`](./`easyHunting/easyHuntingHuntingQueueAgentPost.operation.ts`)                                 | POST   | `...`    | 1     |
| [`easyHuntingHuntingQueueAgentPut`](./`easyHunting/easyHuntingHuntingQueueAgentPut.operation.ts`)                                   | PUT    | `...`    | 1     |
| [`easyHuntingHuntingQueueDelete`](./`easyHunting/easyHuntingHuntingQueueDelete.operation.ts`)                                       | DELETE | `...`    | 1     |
| [`easyHuntingHuntingQueueGet`](./`easyHunting/easyHuntingHuntingQueueGet.operation.ts`)                                             | GET    | `...`    | 1     |
| [`easyHuntingHuntingQueueListGet`](./`easyHunting/easyHuntingHuntingQueueListGet.operation.ts`)                                     | GET    | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveCallsEavesdropPost`](./`easyHunting/easyHuntingHuntingQueueLiveCallsEavesdropPost.operation.ts`)       | POST   | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveCallsGet`](./`easyHunting/easyHuntingHuntingQueueLiveCallsGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveCallsHangupPost`](./`easyHunting/easyHuntingHuntingQueueLiveCallsHangupPost.operation.ts`)             | POST   | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveCallsHoldPost`](./`easyHunting/easyHuntingHuntingQueueLiveCallsHoldPost.operation.ts`)                 | POST   | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveCallsInterceptPost`](./`easyHunting/easyHuntingHuntingQueueLiveCallsInterceptPost.operation.ts`)       | POST   | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveCallsListGet`](./`easyHunting/easyHuntingHuntingQueueLiveCallsListGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveCallsTransferPost`](./`easyHunting/easyHuntingHuntingQueueLiveCallsTransferPost.operation.ts`)         | POST   | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveCallsWhisperPost`](./`easyHunting/easyHuntingHuntingQueueLiveCallsWhisperPost.operation.ts`)           | POST   | `...`    | 1     |
| [`easyHuntingHuntingQueueLiveStatisticsListGet`](./`easyHunting/easyHuntingHuntingQueueLiveStatisticsListGet.operation.ts`)         | GET    | `...`    | 1     |
| [`easyHuntingHuntingQueuePost`](./`easyHunting/easyHuntingHuntingQueuePost.operation.ts`)                                           | POST   | `...`    | 1     |
| [`easyHuntingHuntingQueuePut`](./`easyHunting/easyHuntingHuntingQueuePut.operation.ts`)                                             | PUT    | `...`    | 1     |
| [`easyHuntingListGet`](./`easyHunting/easyHuntingListGet.operation.ts`)                                                             | GET    | `...`    | 1     |
| [`easyHuntingPut`](./`easyHunting/easyHuntingPut.operation.ts`)                                                                     | PUT    | `...`    | 1     |
| [`easyHuntingRecordsDelete`](./`easyHunting/easyHuntingRecordsDelete.operation.ts`)                                                 | DELETE | `...`    | 1     |
| [`easyHuntingRecordsGet`](./`easyHunting/easyHuntingRecordsGet.operation.ts`)                                                       | GET    | `...`    | 1     |
| [`easyHuntingRecordsListGet`](./`easyHunting/easyHuntingRecordsListGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`easyHuntingScreenListConditionsConditionsDelete`](./`easyHunting/easyHuntingScreenListConditionsConditionsDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`easyHuntingScreenListConditionsConditionsGet`](./`easyHunting/easyHuntingScreenListConditionsConditionsGet.operation.ts`)         | GET    | `...`    | 1     |
| [`easyHuntingScreenListConditionsConditionsListGet`](./`easyHunting/easyHuntingScreenListConditionsConditionsListGet.operation.ts`) | GET    | `...`    | 1     |
| [`easyHuntingScreenListConditionsConditionsPost`](./`easyHunting/easyHuntingScreenListConditionsConditionsPost.operation.ts`)       | POST   | `...`    | 1     |
| [`easyHuntingScreenListConditionsConditionsPut`](./`easyHunting/easyHuntingScreenListConditionsConditionsPut.operation.ts`)         | PUT    | `...`    | 1     |
| [`easyHuntingScreenListConditionsListGet`](./`easyHunting/easyHuntingScreenListConditionsListGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`easyHuntingScreenListConditionsPut`](./`easyHunting/easyHuntingScreenListConditionsPut.operation.ts`)                             | PUT    | `...`    | 1     |
| [`easyHuntingSoundDelete`](./`easyHunting/easyHuntingSoundDelete.operation.ts`)                                                     | DELETE | `...`    | 1     |
| [`easyHuntingSoundGet`](./`easyHunting/easyHuntingSoundGet.operation.ts`)                                                           | GET    | `...`    | 1     |
| [`easyHuntingSoundListGet`](./`easyHunting/easyHuntingSoundListGet.operation.ts`)                                                   | GET    | `...`    | 1     |
| [`easyHuntingSoundUploadPost`](./`easyHunting/easyHuntingSoundUploadPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`easyHuntingTimeConditionsConditionsDelete`](./`easyHunting/easyHuntingTimeConditionsConditionsDelete.operation.ts`)               | DELETE | `...`    | 1     |
| [`easyHuntingTimeConditionsConditionsGet`](./`easyHunting/easyHuntingTimeConditionsConditionsGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`easyHuntingTimeConditionsConditionsListGet`](./`easyHunting/easyHuntingTimeConditionsConditionsListGet.operation.ts`)             | GET    | `...`    | 1     |
| [`easyHuntingTimeConditionsConditionsPost`](./`easyHunting/easyHuntingTimeConditionsConditionsPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`easyHuntingTimeConditionsConditionsPut`](./`easyHunting/easyHuntingTimeConditionsConditionsPut.operation.ts`)                     | PUT    | `...`    | 1     |
| [`easyHuntingTimeConditionsListGet`](./`easyHunting/easyHuntingTimeConditionsListGet.operation.ts`)                                 | GET    | `...`    | 1     |
| [`easyHuntingTimeConditionsPut`](./`easyHunting/easyHuntingTimeConditionsPut.operation.ts`)                                         | PUT    | `...`    | 1     |

### eventToken

| Operation                                                            | Method | Endpoint | Tests |
| -------------------------------------------------------------------- | ------ | -------- | ----- |
| [`eventTokenDelete`](./`eventToken/eventTokenDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`eventTokenListGet`](./`eventToken/eventTokenListGet.operation.ts`) | GET    | `...`    | 1     |
| [`eventTokenPost`](./`eventToken/eventTokenPost.operation.ts`)       | POST   | `...`    | 1     |

### fax

| Operation                                                                             | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`faxCampaignsDelete`](./`fax/faxCampaignsDelete.operation.ts`)                       | DELETE | `...`    | 1     |
| [`faxCampaignsDetailListGet`](./`fax/faxCampaignsDetailListGet.operation.ts`)         | GET    | `...`    | 1     |
| [`faxCampaignsGet`](./`fax/faxCampaignsGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`faxCampaignsListGet`](./`fax/faxCampaignsListGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`faxCampaignsPost`](./`fax/faxCampaignsPost.operation.ts`)                           | POST   | `...`    | 1     |
| [`faxCampaignsStartPost`](./`fax/faxCampaignsStartPost.operation.ts`)                 | POST   | `...`    | 1     |
| [`faxCampaignsStopPost`](./`fax/faxCampaignsStopPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`faxGet`](./`fax/faxGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`faxListGet`](./`fax/faxListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`faxPut`](./`fax/faxPut.operation.ts`)                                               | PUT    | `...`    | 1     |
| [`faxScreenListsDelete`](./`fax/faxScreenListsDelete.operation.ts`)                   | DELETE | `...`    | 1     |
| [`faxScreenListsListGet`](./`fax/faxScreenListsListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`faxScreenListsPost`](./`fax/faxScreenListsPost.operation.ts`)                       | POST   | `...`    | 1     |
| [`faxScreenListsPut`](./`fax/faxScreenListsPut.operation.ts`)                         | PUT    | `...`    | 1     |
| [`faxScreenListsResetPost`](./`fax/faxScreenListsResetPost.operation.ts`)             | POST   | `...`    | 1     |
| [`faxSettingsChangePasswordPost`](./`fax/faxSettingsChangePasswordPost.operation.ts`) | POST   | `...`    | 1     |
| [`faxSettingsListGet`](./`fax/faxSettingsListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`faxSettingsPut`](./`fax/faxSettingsPut.operation.ts`)                               | PUT    | `...`    | 1     |
| [`faxSettingsSendFaxPost`](./`fax/faxSettingsSendFaxPost.operation.ts`)               | POST   | `...`    | 1     |

### hasSpecialNumbers

| Operation                                                                                 | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`hasSpecialNumbersListGet`](./`hasSpecialNumbers/hasSpecialNumbersListGet.operation.ts`) | GET    | `...`    | 1     |

### historyConsumption

| Operation                                                                                            | Method | Endpoint | Tests |
| ---------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`historyConsumptionFileListGet`](./`historyConsumption/historyConsumptionFileListGet.operation.ts`) | GET    | `...`    | 1     |
| [`historyConsumptionGet`](./`historyConsumption/historyConsumptionGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`historyConsumptionListGet`](./`historyConsumption/historyConsumptionListGet.operation.ts`)         | GET    | `...`    | 1     |

### historyRepaymentConsumption

| Operation                                                                                                                               | Method | Endpoint | Tests |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`historyRepaymentConsumptionDocumentListGet`](./`historyRepaymentConsumption/historyRepaymentConsumptionDocumentListGet.operation.ts`) | GET    | `...`    | 1     |
| [`historyRepaymentConsumptionGet`](./`historyRepaymentConsumption/historyRepaymentConsumptionGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`historyRepaymentConsumptionListGet`](./`historyRepaymentConsumption/historyRepaymentConsumptionListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`historyRepaymentConsumptionPost`](./`historyRepaymentConsumption/historyRepaymentConsumptionPost.operation.ts`)                       | POST   | `...`    | 1     |

### historyTollfreeConsumption

| Operation                                                                                                                            | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------ | -------- | ----- |
| [`historyTollfreeConsumptionDocumentListGet`](./`historyTollfreeConsumption/historyTollfreeConsumptionDocumentListGet.operation.ts`) | GET    | `...`    | 1     |
| [`historyTollfreeConsumptionGet`](./`historyTollfreeConsumption/historyTollfreeConsumptionGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`historyTollfreeConsumptionListGet`](./`historyTollfreeConsumption/historyTollfreeConsumptionListGet.operation.ts`)                 | GET    | `...`    | 1     |

### line

| Operation                                                                                                            | Method | Endpoint | Tests |
| -------------------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`lineAbbreviatedNumberDelete`](./`line/lineAbbreviatedNumberDelete.operation.ts`)                                   | DELETE | `...`    | 1     |
| [`lineAbbreviatedNumberGet`](./`line/lineAbbreviatedNumberGet.operation.ts`)                                         | GET    | `...`    | 1     |
| [`lineAbbreviatedNumberListGet`](./`line/lineAbbreviatedNumberListGet.operation.ts`)                                 | GET    | `...`    | 1     |
| [`lineAbbreviatedNumberPost`](./`line/lineAbbreviatedNumberPost.operation.ts`)                                       | POST   | `...`    | 1     |
| [`lineAbbreviatedNumberPut`](./`line/lineAbbreviatedNumberPut.operation.ts`)                                         | PUT    | `...`    | 1     |
| [`lineActivateNewPhoneListGet`](./`line/lineActivateNewPhoneListGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`lineActivateNewPhonePost`](./`line/lineActivateNewPhonePost.operation.ts`)                                         | POST   | `...`    | 1     |
| [`lineAntihackListGet`](./`line/lineAntihackListGet.operation.ts`)                                                   | GET    | `...`    | 1     |
| [`lineAntihackPost`](./`line/lineAntihackPost.operation.ts`)                                                         | POST   | `...`    | 1     |
| [`lineAssociateDevicePost`](./`line/lineAssociateDevicePost.operation.ts`)                                           | POST   | `...`    | 1     |
| [`lineAutomaticCallGet`](./`line/lineAutomaticCallGet.operation.ts`)                                                 | GET    | `...`    | 1     |
| [`lineAutomaticCallListGet`](./`line/lineAutomaticCallListGet.operation.ts`)                                         | GET    | `...`    | 1     |
| [`lineAutomaticCallPost`](./`line/lineAutomaticCallPost.operation.ts`)                                               | POST   | `...`    | 1     |
| [`lineAvailableSipDomainsListGet`](./`line/lineAvailableSipDomainsListGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`lineBlockPost`](./`line/lineBlockPost.operation.ts`)                                                               | POST   | `...`    | 1     |
| [`lineCallsEavesdropPost`](./`line/lineCallsEavesdropPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`lineCallsGet`](./`line/lineCallsGet.operation.ts`)                                                                 | GET    | `...`    | 1     |
| [`lineCallsHangupPost`](./`line/lineCallsHangupPost.operation.ts`)                                                   | POST   | `...`    | 1     |
| [`lineCallsHoldPost`](./`line/lineCallsHoldPost.operation.ts`)                                                       | POST   | `...`    | 1     |
| [`lineCallsInterceptPost`](./`line/lineCallsInterceptPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`lineCallsListGet`](./`line/lineCallsListGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`lineCallsTransferPost`](./`line/lineCallsTransferPost.operation.ts`)                                               | POST   | `...`    | 1     |
| [`lineCallsWhisperPost`](./`line/lineCallsWhisperPost.operation.ts`)                                                 | POST   | `...`    | 1     |
| [`lineCanChangePasswordListGet`](./`line/lineCanChangePasswordListGet.operation.ts`)                                 | GET    | `...`    | 1     |
| [`lineCancelConvertToNumberPost`](./`line/lineCancelConvertToNumberPost.operation.ts`)                               | POST   | `...`    | 1     |
| [`lineChangePasswordPost`](./`line/lineChangePasswordPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`lineClick2CallPost`](./`line/lineClick2CallPost.operation.ts`)                                                     | POST   | `...`    | 1     |
| [`lineClick2CallUserChangePasswordPost`](./`line/lineClick2CallUserChangePasswordPost.operation.ts`)                 | POST   | `...`    | 1     |
| [`lineClick2CallUserClick2CallPost`](./`line/lineClick2CallUserClick2CallPost.operation.ts`)                         | POST   | `...`    | 1     |
| [`lineClick2CallUserDelete`](./`line/lineClick2CallUserDelete.operation.ts`)                                         | DELETE | `...`    | 1     |
| [`lineClick2CallUserGet`](./`line/lineClick2CallUserGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`lineClick2CallUserListGet`](./`line/lineClick2CallUserListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`lineClick2CallUserPost`](./`line/lineClick2CallUserPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`lineConvertToNumberPost`](./`line/lineConvertToNumberPost.operation.ts`)                                           | POST   | `...`    | 1     |
| [`lineDissociateDevicePost`](./`line/lineDissociateDevicePost.operation.ts`)                                         | POST   | `...`    | 1     |
| [`lineGet`](./`line/lineGet.operation.ts`)                                                                           | GET    | `...`    | 1     |
| [`lineIpsListGet`](./`line/lineIpsListGet.operation.ts`)                                                             | GET    | `...`    | 1     |
| [`lineLastRegistrationsListGet`](./`line/lineLastRegistrationsListGet.operation.ts`)                                 | GET    | `...`    | 1     |
| [`lineListAssociablePhonesListGet`](./`line/lineListAssociablePhonesListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`lineListGet`](./`line/lineListGet.operation.ts`)                                                                   | GET    | `...`    | 1     |
| [`lineMaximumAvailableSimultaneousLinesListGet`](./`line/lineMaximumAvailableSimultaneousLinesListGet.operation.ts`) | GET    | `...`    | 1     |
| [`lineOfferListGet`](./`line/lineOfferListGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`lineOptionsAvailableCodecsListGet`](./`line/lineOptionsAvailableCodecsListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`lineOptionsDefaultCodecsListGet`](./`line/lineOptionsDefaultCodecsListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`lineOptionsListGet`](./`line/lineOptionsListGet.operation.ts`)                                                     | GET    | `...`    | 1     |
| [`lineOptionsPut`](./`line/lineOptionsPut.operation.ts`)                                                             | PUT    | `...`    | 1     |
| [`linePhoneAdminCredentialsListGet`](./`line/linePhoneAdminCredentialsListGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`linePhoneCanBeAssociableListGet`](./`line/linePhoneCanBeAssociableListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`linePhoneChangePhoneConfigurationPost`](./`line/linePhoneChangePhoneConfigurationPost.operation.ts`)               | POST   | `...`    | 1     |
| [`linePhoneFunctionKeyAvailableFunctionListGet`](./`line/linePhoneFunctionKeyAvailableFunctionListGet.operation.ts`) | GET    | `...`    | 1     |
| [`linePhoneFunctionKeyGet`](./`line/linePhoneFunctionKeyGet.operation.ts`)                                           | GET    | `...`    | 1     |
| [`linePhoneFunctionKeyListGet`](./`line/linePhoneFunctionKeyListGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`linePhoneFunctionKeyPut`](./`line/linePhoneFunctionKeyPut.operation.ts`)                                           | PUT    | `...`    | 1     |
| [`linePhoneListGet`](./`line/linePhoneListGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`linePhoneMerchandiseAvailableListGet`](./`line/linePhoneMerchandiseAvailableListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`linePhonePhonebookDelete`](./`line/linePhonePhonebookDelete.operation.ts`)                                         | DELETE | `...`    | 1     |
| [`linePhonePhonebookExportListGet`](./`line/linePhonePhonebookExportListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`linePhonePhonebookGet`](./`line/linePhonePhonebookGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`linePhonePhonebookImportPost`](./`line/linePhonePhonebookImportPost.operation.ts`)                                 | POST   | `...`    | 1     |
| [`linePhonePhonebookListGet`](./`line/linePhonePhonebookListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`linePhonePhonebookPhonebookContactDelete`](./`line/linePhonePhonebookPhonebookContactDelete.operation.ts`)         | DELETE | `...`    | 1     |
| [`linePhonePhonebookPhonebookContactGet`](./`line/linePhonePhonebookPhonebookContactGet.operation.ts`)               | GET    | `...`    | 1     |
| [`linePhonePhonebookPhonebookContactListGet`](./`line/linePhonePhonebookPhonebookContactListGet.operation.ts`)       | GET    | `...`    | 1     |
| [`linePhonePhonebookPhonebookContactPost`](./`line/linePhonePhonebookPhonebookContactPost.operation.ts`)             | POST   | `...`    | 1     |
| [`linePhonePhonebookPhonebookContactPut`](./`line/linePhonePhonebookPhonebookContactPut.operation.ts`)               | PUT    | `...`    | 1     |
| [`linePhonePhonebookPost`](./`line/linePhonePhonebookPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`linePhonePhonebookPut`](./`line/linePhonePhonebookPut.operation.ts`)                                               | PUT    | `...`    | 1     |
| [`linePhonePut`](./`line/linePhonePut.operation.ts`)                                                                 | PUT    | `...`    | 1     |
| [`linePhoneRebootPost`](./`line/linePhoneRebootPost.operation.ts`)                                                   | POST   | `...`    | 1     |
| [`linePhoneRefreshScreenPost`](./`line/linePhoneRefreshScreenPost.operation.ts`)                                     | POST   | `...`    | 1     |
| [`linePhoneResetConfigPost`](./`line/linePhoneResetConfigPost.operation.ts`)                                         | POST   | `...`    | 1     |
| [`linePhoneRmaChangeTypePost`](./`line/linePhoneRmaChangeTypePost.operation.ts`)                                     | POST   | `...`    | 1     |
| [`linePhoneRmaDelete`](./`line/linePhoneRmaDelete.operation.ts`)                                                     | DELETE | `...`    | 1     |
| [`linePhoneRmaGet`](./`line/linePhoneRmaGet.operation.ts`)                                                           | GET    | `...`    | 1     |
| [`linePhoneRmaListGet`](./`line/linePhoneRmaListGet.operation.ts`)                                                   | GET    | `...`    | 1     |
| [`linePhoneRmaPost`](./`line/linePhoneRmaPost.operation.ts`)                                                         | POST   | `...`    | 1     |
| [`linePhoneRmaPut`](./`line/linePhoneRmaPut.operation.ts`)                                                           | PUT    | `...`    | 1     |
| [`linePhoneSupportsPhonebookListGet`](./`line/linePhoneSupportsPhonebookListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`linePut`](./`line/linePut.operation.ts`)                                                                           | PUT    | `...`    | 1     |
| [`lineRecordsDelete`](./`line/lineRecordsDelete.operation.ts`)                                                       | DELETE | `...`    | 1     |
| [`lineRecordsGet`](./`line/lineRecordsGet.operation.ts`)                                                             | GET    | `...`    | 1     |
| [`lineRecordsListGet`](./`line/lineRecordsListGet.operation.ts`)                                                     | GET    | `...`    | 1     |
| [`lineRemoveSimultaneousLinesPost`](./`line/lineRemoveSimultaneousLinesPost.operation.ts`)                           | POST   | `...`    | 1     |
| [`lineSimultaneousChannelsDetailsListGet`](./`line/lineSimultaneousChannelsDetailsListGet.operation.ts`)             | GET    | `...`    | 1     |
| [`lineSoftphoneBetaListGet`](./`line/lineSoftphoneBetaListGet.operation.ts`)                                         | GET    | `...`    | 1     |
| [`lineSoftphoneBetaPut`](./`line/lineSoftphoneBetaPut.operation.ts`)                                                 | PUT    | `...`    | 1     |
| [`lineSoftphoneDevicesDelete`](./`line/lineSoftphoneDevicesDelete.operation.ts`)                                     | DELETE | `...`    | 1     |
| [`lineSoftphoneDevicesDisconnectPost`](./`line/lineSoftphoneDevicesDisconnectPost.operation.ts`)                     | POST   | `...`    | 1     |
| [`lineSoftphoneDevicesListGet`](./`line/lineSoftphoneDevicesListGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`lineSoftphoneLogoDelete`](./`line/lineSoftphoneLogoDelete.operation.ts`)                                           | DELETE | `...`    | 1     |
| [`lineSoftphoneLogoListGet`](./`line/lineSoftphoneLogoListGet.operation.ts`)                                         | GET    | `...`    | 1     |
| [`lineSoftphoneLogoPut`](./`line/lineSoftphoneLogoPut.operation.ts`)                                                 | PUT    | `...`    | 1     |
| [`lineSoftphoneStatusListGet`](./`line/lineSoftphoneStatusListGet.operation.ts`)                                     | GET    | `...`    | 1     |
| [`lineSoftphoneThemeDelete`](./`line/lineSoftphoneThemeDelete.operation.ts`)                                         | DELETE | `...`    | 1     |
| [`lineSoftphoneThemeListGet`](./`line/lineSoftphoneThemeListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`lineSoftphoneThemePut`](./`line/lineSoftphoneThemePut.operation.ts`)                                               | PUT    | `...`    | 1     |
| [`lineSoftphoneTokenPost`](./`line/lineSoftphoneTokenPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`lineStatisticsListGet`](./`line/lineStatisticsListGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`lineTonesListGet`](./`line/lineTonesListGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`lineTonesPut`](./`line/lineTonesPut.operation.ts`)                                                                 | PUT    | `...`    | 1     |
| [`lineTonesToneUploadPost`](./`line/lineTonesToneUploadPost.operation.ts`)                                           | POST   | `...`    | 1     |
| [`lineTrafficExtractsDelete`](./`line/lineTrafficExtractsDelete.operation.ts`)                                       | DELETE | `...`    | 1     |
| [`lineTrafficExtractsGet`](./`line/lineTrafficExtractsGet.operation.ts`)                                             | GET    | `...`    | 1     |
| [`lineTrafficExtractsListGet`](./`line/lineTrafficExtractsListGet.operation.ts`)                                     | GET    | `...`    | 1     |
| [`lineTrafficExtractsPost`](./`line/lineTrafficExtractsPost.operation.ts`)                                           | POST   | `...`    | 1     |
| [`lineUnblockPost`](./`line/lineUnblockPost.operation.ts`)                                                           | POST   | `...`    | 1     |

### lines

| Operation                                                                   | Method | Endpoint | Tests |
| --------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`linesChangeContactPost`](./`lines/linesChangeContactPost.operation.ts`)   | POST   | `...`    | 1     |
| [`linesGet`](./`lines/linesGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`linesHardwareListGet`](./`lines/linesHardwareListGet.operation.ts`)       | GET    | `...`    | 1     |
| [`linesHardwarePost`](./`lines/linesHardwarePost.operation.ts`)             | POST   | `...`    | 1     |
| [`linesListGet`](./`lines/linesListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`linesNumberDelete`](./`lines/linesNumberDelete.operation.ts`)             | DELETE | `...`    | 1     |
| [`linesNumberGet`](./`lines/linesNumberGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`linesNumberListGet`](./`lines/linesNumberListGet.operation.ts`)           | GET    | `...`    | 1     |
| [`linesNumberPost`](./`lines/linesNumberPost.operation.ts`)                 | POST   | `...`    | 1     |
| [`linesNumberPut`](./`lines/linesNumberPut.operation.ts`)                   | PUT    | `...`    | 1     |
| [`linesPortabilityDelete`](./`lines/linesPortabilityDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`linesPortabilityGet`](./`lines/linesPortabilityGet.operation.ts`)         | GET    | `...`    | 1     |
| [`linesPortabilityListGet`](./`lines/linesPortabilityListGet.operation.ts`) | GET    | `...`    | 1     |
| [`linesPortabilityPost`](./`lines/linesPortabilityPost.operation.ts`)       | POST   | `...`    | 1     |
| [`linesPortabilityPut`](./`lines/linesPortabilityPut.operation.ts`)         | PUT    | `...`    | 1     |
| [`linesServiceInfosGet`](./`lines/linesServiceInfosGet.operation.ts`)       | GET    | `...`    | 1     |
| [`linesServiceInfosPut`](./`lines/linesServiceInfosPut.operation.ts`)       | PUT    | `...`    | 1     |
| [`linesSimDelete`](./`lines/linesSimDelete.operation.ts`)                   | DELETE | `...`    | 1     |
| [`linesSimGet`](./`lines/linesSimGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`linesSimListGet`](./`lines/linesSimListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`linesSimPost`](./`lines/linesSimPost.operation.ts`)                       | POST   | `...`    | 1     |
| [`linesSimPut`](./`lines/linesSimPut.operation.ts`)                         | PUT    | `...`    | 1     |

### misc

| Operation                                                                  | Method | Endpoint | Tests |
| -------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`currentOrderIdsGet`](./`misc/currentOrderIdsGet.operation.ts`)           | GET    | `...`    | 1     |
| [`searchServicesGet`](./`misc/searchServicesGet.operation.ts`)             | GET    | `...`    | 1     |
| [`setDefaultSipDomainPost`](./`misc/setDefaultSipDomainPost.operation.ts`) | POST   | `...`    | 1     |
| [`sipDomainsGet`](./`misc/sipDomainsGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`telephonyListGet`](./`misc/telephonyListGet.operation.ts`)               | GET    | `...`    | 1     |

### number

| Operation                                                                                                        | Method | Endpoint | Tests |
| ---------------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`numberCancelConvertToLinePost`](./`number/numberCancelConvertToLinePost.operation.ts`)                         | POST   | `...`    | 1     |
| [`numberChangeFeatureTypePost`](./`number/numberChangeFeatureTypePost.operation.ts`)                             | POST   | `...`    | 1     |
| [`numberConvertToLineAvailableOffersListGet`](./`number/numberConvertToLineAvailableOffersListGet.operation.ts`) | GET    | `...`    | 1     |
| [`numberConvertToLinePost`](./`number/numberConvertToLinePost.operation.ts`)                                     | POST   | `...`    | 1     |
| [`numberDetailedZonesListGet`](./`number/numberDetailedZonesListGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`numberGet`](./`number/numberGet.operation.ts`)                                                                 | GET    | `...`    | 1     |
| [`numberListGet`](./`number/numberListGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`numberRangesListGet`](./`number/numberRangesListGet.operation.ts`)                                             | GET    | `...`    | 1     |
| [`numberPut`](./`number/numberPut.operation.ts`)                                                                 | PUT    | `...`    | 1     |
| [`numberSpecificNumbersListGet`](./`number/numberSpecificNumbersListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`numberZonesListGet`](./`number/numberZonesListGet.operation.ts`)                                               | GET    | `...`    | 1     |

### numbers

| Operation                                                                         | Method | Endpoint | Tests |
| --------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`numbersDelete`](./`numbers/numbersDelete.operation.ts`)                         | DELETE | `...`    | 1     |
| [`numbersGet`](./`numbers/numbersGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`numbersListGet`](./`numbers/numbersListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`numbersPortabilityDelete`](./`numbers/numbersPortabilityDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`numbersPortabilityGet`](./`numbers/numbersPortabilityGet.operation.ts`)         | GET    | `...`    | 1     |
| [`numbersPortabilityListGet`](./`numbers/numbersPortabilityListGet.operation.ts`) | GET    | `...`    | 1     |
| [`numbersPortabilityPost`](./`numbers/numbersPortabilityPost.operation.ts`)       | POST   | `...`    | 1     |
| [`numbersPortabilityPut`](./`numbers/numbersPortabilityPut.operation.ts`)         | PUT    | `...`    | 1     |
| [`numbersPost`](./`numbers/numbersPost.operation.ts`)                             | POST   | `...`    | 1     |
| [`numbersPut`](./`numbers/numbersPut.operation.ts`)                               | PUT    | `...`    | 1     |

### offerTask

| Operation                                                         | Method | Endpoint | Tests |
| ----------------------------------------------------------------- | ------ | -------- | ----- |
| [`offerTaskGet`](./`offerTask/offerTaskGet.operation.ts`)         | GET    | `...`    | 1     |
| [`offerTaskListGet`](./`offerTask/offerTaskListGet.operation.ts`) | GET    | `...`    | 1     |
| [`offerTaskPut`](./`offerTask/offerTaskPut.operation.ts`)         | PUT    | `...`    | 1     |

### offers

| Operation                                                            | Method | Endpoint | Tests |
| -------------------------------------------------------------------- | ------ | -------- | ----- |
| [`faxOffersGet`](./`offers/faxOffersGet.operation.ts`)               | GET    | `...`    | 1     |
| [`lineOfferDetailsGet`](./`offers/lineOfferDetailsGet.operation.ts`) | GET    | `...`    | 1     |
| [`lineOfferPhonesGet`](./`offers/lineOfferPhonesGet.operation.ts`)   | GET    | `...`    | 1     |
| [`lineOffersGet`](./`offers/lineOffersGet.operation.ts`)             | GET    | `...`    | 1     |

### oldPhone

| Operation                                                      | Method | Endpoint | Tests |
| -------------------------------------------------------------- | ------ | -------- | ----- |
| [`oldPhoneListGet`](./`oldPhone/oldPhoneListGet.operation.ts`) | GET    | `...`    | 1     |

### outplanNotification

| Operation                                                                                       | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`outplanNotificationDelete`](./`outplanNotification/outplanNotificationDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`outplanNotificationGet`](./`outplanNotification/outplanNotificationGet.operation.ts`)         | GET    | `...`    | 1     |
| [`outplanNotificationListGet`](./`outplanNotification/outplanNotificationListGet.operation.ts`) | GET    | `...`    | 1     |
| [`outplanNotificationPost`](./`outplanNotification/outplanNotificationPost.operation.ts`)       | POST   | `...`    | 1     |

### ovhPabx

| Operation                                                                                                                           | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`ovhPabxDialplanDelete`](./`ovhPabx/ovhPabxDialplanDelete.operation.ts`)                                                           | DELETE | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionScreenListDelete`](./`ovhPabx/ovhPabxDialplanExtensionConditionScreenListDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionScreenListGet`](./`ovhPabx/ovhPabxDialplanExtensionConditionScreenListGet.operation.ts`)         | GET    | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionScreenListListGet`](./`ovhPabx/ovhPabxDialplanExtensionConditionScreenListListGet.operation.ts`) | GET    | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionScreenListPost`](./`ovhPabx/ovhPabxDialplanExtensionConditionScreenListPost.operation.ts`)       | POST   | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionTimeDelete`](./`ovhPabx/ovhPabxDialplanExtensionConditionTimeDelete.operation.ts`)               | DELETE | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionTimeGet`](./`ovhPabx/ovhPabxDialplanExtensionConditionTimeGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionTimeListGet`](./`ovhPabx/ovhPabxDialplanExtensionConditionTimeListGet.operation.ts`)             | GET    | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionTimePost`](./`ovhPabx/ovhPabxDialplanExtensionConditionTimePost.operation.ts`)                   | POST   | `...`    | 1     |
| [`ovhPabxDialplanExtensionConditionTimePut`](./`ovhPabx/ovhPabxDialplanExtensionConditionTimePut.operation.ts`)                     | PUT    | `...`    | 1     |
| [`ovhPabxDialplanExtensionDelete`](./`ovhPabx/ovhPabxDialplanExtensionDelete.operation.ts`)                                         | DELETE | `...`    | 1     |
| [`ovhPabxDialplanExtensionGet`](./`ovhPabx/ovhPabxDialplanExtensionGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`ovhPabxDialplanExtensionListGet`](./`ovhPabx/ovhPabxDialplanExtensionListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`ovhPabxDialplanExtensionPost`](./`ovhPabx/ovhPabxDialplanExtensionPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`ovhPabxDialplanExtensionPut`](./`ovhPabx/ovhPabxDialplanExtensionPut.operation.ts`)                                               | PUT    | `...`    | 1     |
| [`ovhPabxDialplanExtensionRuleDelete`](./`ovhPabx/ovhPabxDialplanExtensionRuleDelete.operation.ts`)                                 | DELETE | `...`    | 1     |
| [`ovhPabxDialplanExtensionRuleGet`](./`ovhPabx/ovhPabxDialplanExtensionRuleGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`ovhPabxDialplanExtensionRuleListGet`](./`ovhPabx/ovhPabxDialplanExtensionRuleListGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`ovhPabxDialplanExtensionRulePost`](./`ovhPabx/ovhPabxDialplanExtensionRulePost.operation.ts`)                                     | POST   | `...`    | 1     |
| [`ovhPabxDialplanExtensionRulePut`](./`ovhPabx/ovhPabxDialplanExtensionRulePut.operation.ts`)                                       | PUT    | `...`    | 1     |
| [`ovhPabxDialplanGet`](./`ovhPabx/ovhPabxDialplanGet.operation.ts`)                                                                 | GET    | `...`    | 1     |
| [`ovhPabxDialplanListGet`](./`ovhPabx/ovhPabxDialplanListGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`ovhPabxDialplanPost`](./`ovhPabx/ovhPabxDialplanPost.operation.ts`)                                                               | POST   | `...`    | 1     |
| [`ovhPabxDialplanPut`](./`ovhPabx/ovhPabxDialplanPut.operation.ts`)                                                                 | PUT    | `...`    | 1     |
| [`ovhPabxGet`](./`ovhPabx/ovhPabxGet.operation.ts`)                                                                                 | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentBannerAccessDelete`](./`ovhPabx/ovhPabxHuntingAgentBannerAccessDelete.operation.ts`)                           | DELETE | `...`    | 1     |
| [`ovhPabxHuntingAgentBannerAccessListGet`](./`ovhPabx/ovhPabxHuntingAgentBannerAccessListGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentBannerAccessPost`](./`ovhPabx/ovhPabxHuntingAgentBannerAccessPost.operation.ts`)                               | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentCallsEavesdropPost`](./`ovhPabx/ovhPabxHuntingAgentCallsEavesdropPost.operation.ts`)                           | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentCallsGet`](./`ovhPabx/ovhPabxHuntingAgentCallsGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentCallsHangupPost`](./`ovhPabx/ovhPabxHuntingAgentCallsHangupPost.operation.ts`)                                 | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentCallsHoldPost`](./`ovhPabx/ovhPabxHuntingAgentCallsHoldPost.operation.ts`)                                     | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentCallsInterceptPost`](./`ovhPabx/ovhPabxHuntingAgentCallsInterceptPost.operation.ts`)                           | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentCallsListGet`](./`ovhPabx/ovhPabxHuntingAgentCallsListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentCallsTransferPost`](./`ovhPabx/ovhPabxHuntingAgentCallsTransferPost.operation.ts`)                             | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentCallsWhisperPost`](./`ovhPabx/ovhPabxHuntingAgentCallsWhisperPost.operation.ts`)                               | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentDelete`](./`ovhPabx/ovhPabxHuntingAgentDelete.operation.ts`)                                                   | DELETE | `...`    | 1     |
| [`ovhPabxHuntingAgentEventTokenDelete`](./`ovhPabx/ovhPabxHuntingAgentEventTokenDelete.operation.ts`)                               | DELETE | `...`    | 1     |
| [`ovhPabxHuntingAgentEventTokenListGet`](./`ovhPabx/ovhPabxHuntingAgentEventTokenListGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentEventTokenPost`](./`ovhPabx/ovhPabxHuntingAgentEventTokenPost.operation.ts`)                                   | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentGet`](./`ovhPabx/ovhPabxHuntingAgentGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentListGet`](./`ovhPabx/ovhPabxHuntingAgentListGet.operation.ts`)                                                 | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentLiveStatusListGet`](./`ovhPabx/ovhPabxHuntingAgentLiveStatusListGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentPost`](./`ovhPabx/ovhPabxHuntingAgentPost.operation.ts`)                                                       | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentPut`](./`ovhPabx/ovhPabxHuntingAgentPut.operation.ts`)                                                         | PUT    | `...`    | 1     |
| [`ovhPabxHuntingAgentQueueDelete`](./`ovhPabx/ovhPabxHuntingAgentQueueDelete.operation.ts`)                                         | DELETE | `...`    | 1     |
| [`ovhPabxHuntingAgentQueueGet`](./`ovhPabx/ovhPabxHuntingAgentQueueGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentQueueListGet`](./`ovhPabx/ovhPabxHuntingAgentQueueListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentQueueLiveStatusListGet`](./`ovhPabx/ovhPabxHuntingAgentQueueLiveStatusListGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`ovhPabxHuntingAgentQueuePost`](./`ovhPabx/ovhPabxHuntingAgentQueuePost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`ovhPabxHuntingAgentQueuePut`](./`ovhPabx/ovhPabxHuntingAgentQueuePut.operation.ts`)                                               | PUT    | `...`    | 1     |
| [`ovhPabxHuntingCustomStatusDelete`](./`ovhPabx/ovhPabxHuntingCustomStatusDelete.operation.ts`)                                     | DELETE | `...`    | 1     |
| [`ovhPabxHuntingCustomStatusGet`](./`ovhPabx/ovhPabxHuntingCustomStatusGet.operation.ts`)                                           | GET    | `...`    | 1     |
| [`ovhPabxHuntingCustomStatusListGet`](./`ovhPabx/ovhPabxHuntingCustomStatusListGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`ovhPabxHuntingCustomStatusPost`](./`ovhPabx/ovhPabxHuntingCustomStatusPost.operation.ts`)                                         | POST   | `...`    | 1     |
| [`ovhPabxHuntingEventTokenDelete`](./`ovhPabx/ovhPabxHuntingEventTokenDelete.operation.ts`)                                         | DELETE | `...`    | 1     |
| [`ovhPabxHuntingEventTokenListGet`](./`ovhPabx/ovhPabxHuntingEventTokenListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`ovhPabxHuntingEventTokenPost`](./`ovhPabx/ovhPabxHuntingEventTokenPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`ovhPabxHuntingListGet`](./`ovhPabx/ovhPabxHuntingListGet.operation.ts`)                                                           | GET    | `...`    | 1     |
| [`ovhPabxHuntingPut`](./`ovhPabx/ovhPabxHuntingPut.operation.ts`)                                                                   | PUT    | `...`    | 1     |
| [`ovhPabxHuntingQueueAgentDelete`](./`ovhPabx/ovhPabxHuntingQueueAgentDelete.operation.ts`)                                         | DELETE | `...`    | 1     |
| [`ovhPabxHuntingQueueAgentGet`](./`ovhPabx/ovhPabxHuntingQueueAgentGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`ovhPabxHuntingQueueAgentListGet`](./`ovhPabx/ovhPabxHuntingQueueAgentListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`ovhPabxHuntingQueueAgentLiveStatusListGet`](./`ovhPabx/ovhPabxHuntingQueueAgentLiveStatusListGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`ovhPabxHuntingQueueAgentPost`](./`ovhPabx/ovhPabxHuntingQueueAgentPost.operation.ts`)                                             | POST   | `...`    | 1     |
| [`ovhPabxHuntingQueueAgentPut`](./`ovhPabx/ovhPabxHuntingQueueAgentPut.operation.ts`)                                               | PUT    | `...`    | 1     |
| [`ovhPabxHuntingQueueDelete`](./`ovhPabx/ovhPabxHuntingQueueDelete.operation.ts`)                                                   | DELETE | `...`    | 1     |
| [`ovhPabxHuntingQueueGet`](./`ovhPabx/ovhPabxHuntingQueueGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`ovhPabxHuntingQueueListGet`](./`ovhPabx/ovhPabxHuntingQueueListGet.operation.ts`)                                                 | GET    | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveCallsEavesdropPost`](./`ovhPabx/ovhPabxHuntingQueueLiveCallsEavesdropPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveCallsGet`](./`ovhPabx/ovhPabxHuntingQueueLiveCallsGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveCallsHangupPost`](./`ovhPabx/ovhPabxHuntingQueueLiveCallsHangupPost.operation.ts`)                         | POST   | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveCallsHoldPost`](./`ovhPabx/ovhPabxHuntingQueueLiveCallsHoldPost.operation.ts`)                             | POST   | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveCallsInterceptPost`](./`ovhPabx/ovhPabxHuntingQueueLiveCallsInterceptPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveCallsListGet`](./`ovhPabx/ovhPabxHuntingQueueLiveCallsListGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveCallsTransferPost`](./`ovhPabx/ovhPabxHuntingQueueLiveCallsTransferPost.operation.ts`)                     | POST   | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveCallsWhisperPost`](./`ovhPabx/ovhPabxHuntingQueueLiveCallsWhisperPost.operation.ts`)                       | POST   | `...`    | 1     |
| [`ovhPabxHuntingQueueLiveStatisticsListGet`](./`ovhPabx/ovhPabxHuntingQueueLiveStatisticsListGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`ovhPabxHuntingQueuePost`](./`ovhPabx/ovhPabxHuntingQueuePost.operation.ts`)                                                       | POST   | `...`    | 1     |
| [`ovhPabxHuntingQueuePut`](./`ovhPabx/ovhPabxHuntingQueuePut.operation.ts`)                                                         | PUT    | `...`    | 1     |
| [`ovhPabxListGet`](./`ovhPabx/ovhPabxListGet.operation.ts`)                                                                         | GET    | `...`    | 1     |
| [`ovhPabxMenuDelete`](./`ovhPabx/ovhPabxMenuDelete.operation.ts`)                                                                   | DELETE | `...`    | 1     |
| [`ovhPabxMenuEntryDelete`](./`ovhPabx/ovhPabxMenuEntryDelete.operation.ts`)                                                         | DELETE | `...`    | 1     |
| [`ovhPabxMenuEntryGet`](./`ovhPabx/ovhPabxMenuEntryGet.operation.ts`)                                                               | GET    | `...`    | 1     |
| [`ovhPabxMenuEntryListGet`](./`ovhPabx/ovhPabxMenuEntryListGet.operation.ts`)                                                       | GET    | `...`    | 1     |
| [`ovhPabxMenuEntryPost`](./`ovhPabx/ovhPabxMenuEntryPost.operation.ts`)                                                             | POST   | `...`    | 1     |
| [`ovhPabxMenuEntryPut`](./`ovhPabx/ovhPabxMenuEntryPut.operation.ts`)                                                               | PUT    | `...`    | 1     |
| [`ovhPabxMenuGet`](./`ovhPabx/ovhPabxMenuGet.operation.ts`)                                                                         | GET    | `...`    | 1     |
| [`ovhPabxMenuListGet`](./`ovhPabx/ovhPabxMenuListGet.operation.ts`)                                                                 | GET    | `...`    | 1     |
| [`ovhPabxMenuPost`](./`ovhPabx/ovhPabxMenuPost.operation.ts`)                                                                       | POST   | `...`    | 1     |
| [`ovhPabxMenuPut`](./`ovhPabx/ovhPabxMenuPut.operation.ts`)                                                                         | PUT    | `...`    | 1     |
| [`ovhPabxPut`](./`ovhPabx/ovhPabxPut.operation.ts`)                                                                                 | PUT    | `...`    | 1     |
| [`ovhPabxRecordsDelete`](./`ovhPabx/ovhPabxRecordsDelete.operation.ts`)                                                             | DELETE | `...`    | 1     |
| [`ovhPabxRecordsGet`](./`ovhPabx/ovhPabxRecordsGet.operation.ts`)                                                                   | GET    | `...`    | 1     |
| [`ovhPabxRecordsListGet`](./`ovhPabx/ovhPabxRecordsListGet.operation.ts`)                                                           | GET    | `...`    | 1     |
| [`ovhPabxSoundDelete`](./`ovhPabx/ovhPabxSoundDelete.operation.ts`)                                                                 | DELETE | `...`    | 1     |
| [`ovhPabxSoundGet`](./`ovhPabx/ovhPabxSoundGet.operation.ts`)                                                                       | GET    | `...`    | 1     |
| [`ovhPabxSoundListGet`](./`ovhPabx/ovhPabxSoundListGet.operation.ts`)                                                               | GET    | `...`    | 1     |
| [`ovhPabxSoundUploadPost`](./`ovhPabx/ovhPabxSoundUploadPost.operation.ts`)                                                         | POST   | `...`    | 1     |
| [`ovhPabxTtsDelete`](./`ovhPabx/ovhPabxTtsDelete.operation.ts`)                                                                     | DELETE | `...`    | 1     |
| [`ovhPabxTtsGet`](./`ovhPabx/ovhPabxTtsGet.operation.ts`)                                                                           | GET    | `...`    | 1     |
| [`ovhPabxTtsListGet`](./`ovhPabx/ovhPabxTtsListGet.operation.ts`)                                                                   | GET    | `...`    | 1     |
| [`ovhPabxTtsPost`](./`ovhPabx/ovhPabxTtsPost.operation.ts`)                                                                         | POST   | `...`    | 1     |
| [`ovhPabxTtsPut`](./`ovhPabx/ovhPabxTtsPut.operation.ts`)                                                                           | PUT    | `...`    | 1     |

### phonebook

| Operation                                                                                         | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`phonebookDelete`](./`phonebook/phonebookDelete.operation.ts`)                                   | DELETE | `...`    | 1     |
| [`phonebookExportListGet`](./`phonebook/phonebookExportListGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`phonebookGet`](./`phonebook/phonebookGet.operation.ts`)                                         | GET    | `...`    | 1     |
| [`phonebookImportPost`](./`phonebook/phonebookImportPost.operation.ts`)                           | POST   | `...`    | 1     |
| [`phonebookListGet`](./`phonebook/phonebookListGet.operation.ts`)                                 | GET    | `...`    | 1     |
| [`phonebookPhonebookContactDelete`](./`phonebook/phonebookPhonebookContactDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`phonebookPhonebookContactGet`](./`phonebook/phonebookPhonebookContactGet.operation.ts`)         | GET    | `...`    | 1     |
| [`phonebookPhonebookContactListGet`](./`phonebook/phonebookPhonebookContactListGet.operation.ts`) | GET    | `...`    | 1     |
| [`phonebookPhonebookContactPost`](./`phonebook/phonebookPhonebookContactPost.operation.ts`)       | POST   | `...`    | 1     |
| [`phonebookPhonebookContactPut`](./`phonebook/phonebookPhonebookContactPut.operation.ts`)         | PUT    | `...`    | 1     |
| [`phonebookPost`](./`phonebook/phonebookPost.operation.ts`)                                       | POST   | `...`    | 1     |
| [`phonebookPut`](./`phonebook/phonebookPut.operation.ts`)                                         | PUT    | `...`    | 1     |

### portability

| Operation                                                                                               | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`portabilityCanBeCancelledListGet`](./`portability/portabilityCanBeCancelledListGet.operation.ts`)     | GET    | `...`    | 1     |
| [`portabilityCanBeExecutedListGet`](./`portability/portabilityCanBeExecutedListGet.operation.ts`)       | GET    | `...`    | 1     |
| [`portabilityCancelPost`](./`portability/portabilityCancelPost.operation.ts`)                           | POST   | `...`    | 1     |
| [`portabilityChangeDatePost`](./`portability/portabilityChangeDatePost.operation.ts`)                   | POST   | `...`    | 1     |
| [`portabilityDateCanBeChangedListGet`](./`portability/portabilityDateCanBeChangedListGet.operation.ts`) | GET    | `...`    | 1     |
| [`portabilityDetailGet`](./`portability/portabilityDetailGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`portabilityDocumentDelete`](./`portability/portabilityDocumentDelete.operation.ts`)                   | DELETE | `...`    | 1     |
| [`portabilityDocumentGet`](./`portability/portabilityDocumentGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`portabilityDocumentListGet`](./`portability/portabilityDocumentListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`portabilityDocumentPost`](./`portability/portabilityDocumentPost.operation.ts`)                       | POST   | `...`    | 1     |
| [`portabilityDocumentPut`](./`portability/portabilityDocumentPut.operation.ts`)                         | PUT    | `...`    | 1     |
| [`portabilityExecutePost`](./`portability/portabilityExecutePost.operation.ts`)                         | POST   | `...`    | 1     |
| [`portabilityRelaunchListGet`](./`portability/portabilityRelaunchListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`portabilityRelaunchPost`](./`portability/portabilityRelaunchPost.operation.ts`)                       | POST   | `...`    | 1     |
| [`portabilityStatusListGet`](./`portability/portabilityStatusListGet.operation.ts`)                     | GET    | `...`    | 1     |

### procedure

| Operation                                                                         | Method | Endpoint | Tests |
| --------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`procedureCancelPost`](./`procedure/procedureCancelPost.operation.ts`)           | POST   | `...`    | 1     |
| [`procedureGet`](./`procedure/procedureGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`procedureListGet`](./`procedure/procedureListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`procedurePost`](./`procedure/procedurePost.operation.ts`)                       | POST   | `...`    | 1     |
| [`procedureRequiredListGet`](./`procedure/procedureRequiredListGet.operation.ts`) | GET    | `...`    | 1     |

### redirect

| Operation                                                                                  | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------ | ------ | -------- | ----- |
| [`redirectChangeDestinationPost`](./`redirect/redirectChangeDestinationPost.operation.ts`) | POST   | `...`    | 1     |
| [`redirectGet`](./`redirect/redirectGet.operation.ts`)                                     | GET    | `...`    | 1     |
| [`redirectListGet`](./`redirect/redirectListGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`redirectPut`](./`redirect/redirectPut.operation.ts`)                                     | PUT    | `...`    | 1     |

### resellerPanel

| Operation                                                                                               | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`resellerPanelGeneratePasswordPost`](./`resellerPanel/resellerPanelGeneratePasswordPost.operation.ts`) | POST   | `...`    | 1     |
| [`resellerPanelStatusListGet`](./`resellerPanel/resellerPanelStatusListGet.operation.ts`)               | GET    | `...`    | 1     |

### root

| Operation                                                                                | Method | Endpoint | Tests |
| ---------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`allowedCreditThresholdGet`](./`root/allowedCreditThresholdGet.operation.ts`)           | GET    | `...`    | 1     |
| [`amountSecurityDepositGet`](./`root/amountSecurityDepositGet.operation.ts`)             | GET    | `...`    | 1     |
| [`billingAccountDelete`](./`root/billingAccountDelete.operation.ts`)                     | DELETE | `...`    | 1     |
| [`billingAccountGet`](./`root/billingAccountGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`billingAccountPut`](./`root/billingAccountPut.operation.ts`)                           | PUT    | `...`    | 1     |
| [`billingAccountSiteGet`](./`root/billingAccountSiteGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`billingAccountSitePost`](./`root/billingAccountSitePost.operation.ts`)                 | POST   | `...`    | 1     |
| [`canTransferSecurityDepositPost`](./`root/canTransferSecurityDepositPost.operation.ts`) | POST   | `...`    | 1     |
| [`cancelTerminationPost`](./`root/cancelTerminationPost.operation.ts`)                   | POST   | `...`    | 1     |
| [`changeContactPost`](./`root/changeContactPost.operation.ts`)                           | POST   | `...`    | 1     |
| [`portabilityGet`](./`root/portabilityGet.operation.ts`)                                 | GET    | `...`    | 1     |
| [`transferSecurityDepositPost`](./`root/transferSecurityDepositPost.operation.ts`)       | POST   | `...`    | 1     |

### rsva

| Operation                                                                                  | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------ | ------ | -------- | ----- |
| [`rsvaAllowedRateCodesListGet`](./`rsva/rsvaAllowedRateCodesListGet.operation.ts`)         | GET    | `...`    | 1     |
| [`rsvaCancelScheduledRateCodePost`](./`rsva/rsvaCancelScheduledRateCodePost.operation.ts`) | POST   | `...`    | 1     |
| [`rsvaCurrentRateCodeListGet`](./`rsva/rsvaCurrentRateCodeListGet.operation.ts`)           | GET    | `...`    | 1     |
| [`rsvaGet`](./`rsva/rsvaGet.operation.ts`)                                                 | GET    | `...`    | 1     |
| [`rsvaListGet`](./`rsva/rsvaListGet.operation.ts`)                                         | GET    | `...`    | 1     |
| [`rsvaPut`](./`rsva/rsvaPut.operation.ts`)                                                 | PUT    | `...`    | 1     |
| [`rsvaScheduleRateCodePost`](./`rsva/rsvaScheduleRateCodePost.operation.ts`)               | POST   | `...`    | 1     |
| [`rsvaScheduledRateCodeListGet`](./`rsva/rsvaScheduledRateCodeListGet.operation.ts`)       | GET    | `...`    | 1     |

### scheduler

| Operation                                                                                     | Method | Endpoint | Tests |
| --------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`schedulerEventsDelete`](./`scheduler/schedulerEventsDelete.operation.ts`)                   | DELETE | `...`    | 1     |
| [`schedulerEventsGet`](./`scheduler/schedulerEventsGet.operation.ts`)                         | GET    | `...`    | 1     |
| [`schedulerEventsListGet`](./`scheduler/schedulerEventsListGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`schedulerEventsPost`](./`scheduler/schedulerEventsPost.operation.ts`)                       | POST   | `...`    | 1     |
| [`schedulerEventsPut`](./`scheduler/schedulerEventsPut.operation.ts`)                         | PUT    | `...`    | 1     |
| [`schedulerGet`](./`scheduler/schedulerGet.operation.ts`)                                     | GET    | `...`    | 1     |
| [`schedulerImportIcsCalendarPost`](./`scheduler/schedulerImportIcsCalendarPost.operation.ts`) | POST   | `...`    | 1     |
| [`schedulerListGet`](./`scheduler/schedulerListGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`schedulerPut`](./`scheduler/schedulerPut.operation.ts`)                                     | PUT    | `...`    | 1     |

### screen

| Operation                                                                      | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------ | ------ | -------- | ----- |
| [`screenGet`](./`screen/screenGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`screenListGet`](./`screen/screenListGet.operation.ts`)                       | GET    | `...`    | 1     |
| [`screenPut`](./`screen/screenPut.operation.ts`)                               | PUT    | `...`    | 1     |
| [`screenScreenListsDelete`](./`screen/screenScreenListsDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`screenScreenListsGet`](./`screen/screenScreenListsGet.operation.ts`)         | GET    | `...`    | 1     |
| [`screenScreenListsListGet`](./`screen/screenScreenListsListGet.operation.ts`) | GET    | `...`    | 1     |
| [`screenScreenListsPost`](./`screen/screenScreenListsPost.operation.ts`)       | POST   | `...`    | 1     |

### service

| Operation                                                                                                                     | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`serviceCancelTerminationPost`](./`service/serviceCancelTerminationPost.operation.ts`)                                       | POST   | `...`    | 1     |
| [`serviceChangeOfBillingAccountPost`](./`service/serviceChangeOfBillingAccountPost.operation.ts`)                             | POST   | `...`    | 1     |
| [`serviceDelete`](./`service/serviceDelete.operation.ts`)                                                                     | DELETE | `...`    | 1     |
| [`serviceDiagnosticReportsListGet`](./`service/serviceDiagnosticReportsListGet.operation.ts`)                                 | GET    | `...`    | 1     |
| [`serviceDirectoryFetchEntrepriseInformationsPost`](./`service/serviceDirectoryFetchEntrepriseInformationsPost.operation.ts`) | POST   | `...`    | 1     |
| [`serviceDirectoryGetDirectoryServiceCodeListGet`](./`service/serviceDirectoryGetDirectoryServiceCodeListGet.operation.ts`)   | GET    | `...`    | 1     |
| [`serviceDirectoryGetWayTypesListGet`](./`service/serviceDirectoryGetWayTypesListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`serviceDirectoryListGet`](./`service/serviceDirectoryListGet.operation.ts`)                                                 | GET    | `...`    | 1     |
| [`serviceDirectoryPut`](./`service/serviceDirectoryPut.operation.ts`)                                                         | PUT    | `...`    | 1     |
| [`serviceEventTokenDelete`](./`service/serviceEventTokenDelete.operation.ts`)                                                 | DELETE | `...`    | 1     |
| [`serviceEventTokenListGet`](./`service/serviceEventTokenListGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`serviceEventTokenPost`](./`service/serviceEventTokenPost.operation.ts`)                                                     | POST   | `...`    | 1     |
| [`serviceFaxConsumptionGet`](./`service/serviceFaxConsumptionGet.operation.ts`)                                               | GET    | `...`    | 1     |
| [`serviceFaxConsumptionListGet`](./`service/serviceFaxConsumptionListGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`serviceGet`](./`service/serviceGet.operation.ts`)                                                                           | GET    | `...`    | 1     |
| [`serviceListGet`](./`service/serviceListGet.operation.ts`)                                                                   | GET    | `...`    | 1     |
| [`serviceOfferChangeDelete`](./`service/serviceOfferChangeDelete.operation.ts`)                                               | DELETE | `...`    | 1     |
| [`serviceOfferChangeListGet`](./`service/serviceOfferChangeListGet.operation.ts`)                                             | GET    | `...`    | 1     |
| [`serviceOfferChangePost`](./`service/serviceOfferChangePost.operation.ts`)                                                   | POST   | `...`    | 1     |
| [`serviceOfferChangesListGet`](./`service/serviceOfferChangesListGet.operation.ts`)                                           | GET    | `...`    | 1     |
| [`serviceOfferTaskGet`](./`service/serviceOfferTaskGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`serviceOfferTaskListGet`](./`service/serviceOfferTaskListGet.operation.ts`)                                                 | GET    | `...`    | 1     |
| [`serviceOfferTaskPut`](./`service/serviceOfferTaskPut.operation.ts`)                                                         | PUT    | `...`    | 1     |
| [`servicePreviousVoiceConsumptionGet`](./`service/servicePreviousVoiceConsumptionGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`servicePreviousVoiceConsumptionListGet`](./`service/servicePreviousVoiceConsumptionListGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`servicePut`](./`service/servicePut.operation.ts`)                                                                           | PUT    | `...`    | 1     |
| [`serviceRepaymentConsumptionGet`](./`service/serviceRepaymentConsumptionGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`serviceRepaymentConsumptionListGet`](./`service/serviceRepaymentConsumptionListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`serviceTaskGet`](./`service/serviceTaskGet.operation.ts`)                                                                   | GET    | `...`    | 1     |
| [`serviceTaskListGet`](./`service/serviceTaskListGet.operation.ts`)                                                           | GET    | `...`    | 1     |
| [`serviceVoiceConsumptionGet`](./`service/serviceVoiceConsumptionGet.operation.ts`)                                           | GET    | `...`    | 1     |
| [`serviceVoiceConsumptionListGet`](./`service/serviceVoiceConsumptionListGet.operation.ts`)                                   | GET    | `...`    | 1     |

### serviceInfos

| Operation                                                                  | Method | Endpoint | Tests |
| -------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`serviceInfosListGet`](./`serviceInfos/serviceInfosListGet.operation.ts`) | GET    | `...`    | 1     |
| [`serviceInfosPut`](./`serviceInfos/serviceInfosPut.operation.ts`)         | PUT    | `...`    | 1     |

### softphone

| Operation                                                                             | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`softphoneLogoDelete`](./`softphone/softphoneLogoDelete.operation.ts`)               | DELETE | `...`    | 1     |
| [`softphoneLogoListGet`](./`softphone/softphoneLogoListGet.operation.ts`)             | GET    | `...`    | 1     |
| [`softphoneLogoPut`](./`softphone/softphoneLogoPut.operation.ts`)                     | PUT    | `...`    | 1     |
| [`softphoneThemeListGet`](./`softphone/softphoneThemeListGet.operation.ts`)           | GET    | `...`    | 1     |
| [`softphoneThemePut`](./`softphone/softphoneThemePut.operation.ts`)                   | PUT    | `...`    | 1     |
| [`softphoneThemesGet`](./`softphone/softphoneThemesGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`softphoneThemesListGet`](./`softphone/softphoneThemesListGet.operation.ts`)         | GET    | `...`    | 1     |
| [`softphoneStoreLinksListGet`](./`softphone/softphoneStoreLinksListGet.operation.ts`) | GET    | `...`    | 1     |

### sounds

| Operation                                                | Method | Endpoint | Tests |
| -------------------------------------------------------- | ------ | -------- | ----- |
| [`soundsDelete`](./`sounds/soundsDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`soundsGet`](./`sounds/soundsGet.operation.ts`)         | GET    | `...`    | 1     |
| [`soundsListGet`](./`sounds/soundsListGet.operation.ts`) | GET    | `...`    | 1     |
| [`soundsPost`](./`sounds/soundsPost.operation.ts`)       | POST   | `...`    | 1     |
| [`soundsPut`](./`sounds/soundsPut.operation.ts`)         | PUT    | `...`    | 1     |

### spare

| Operation                                                                                       | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`spareBrandsListGet`](./`spare/spareBrandsListGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`spareCompatibleReplacementListGet`](./`spare/spareCompatibleReplacementListGet.operation.ts`) | GET    | `...`    | 1     |
| [`spareDelete`](./`spare/spareDelete.operation.ts`)                                             | DELETE | `...`    | 1     |
| [`spareGet`](./`spare/spareGet.operation.ts`)                                                   | GET    | `...`    | 1     |
| [`spareListGet`](./`spare/spareListGet.operation.ts`)                                           | GET    | `...`    | 1     |
| [`spareReplacePost`](./`spare/spareReplacePost.operation.ts`)                                   | POST   | `...`    | 1     |
| [`spareServiceInfosListGet`](./`spare/spareServiceInfosListGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`spareServiceInfosPut`](./`spare/spareServiceInfosPut.operation.ts`)                           | PUT    | `...`    | 1     |

### task

| Operation                                          | Method | Endpoint | Tests |
| -------------------------------------------------- | ------ | -------- | ----- |
| [`taskGet`](./`task/taskGet.operation.ts`)         | GET    | `...`    | 1     |
| [`taskListGet`](./`task/taskListGet.operation.ts`) | GET    | `...`    | 1     |

### timeCondition

| Operation                                                                                       | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`timeConditionConditionDelete`](./`timeCondition/timeConditionConditionDelete.operation.ts`)   | DELETE | `...`    | 1     |
| [`timeConditionConditionGet`](./`timeCondition/timeConditionConditionGet.operation.ts`)         | GET    | `...`    | 1     |
| [`timeConditionConditionListGet`](./`timeCondition/timeConditionConditionListGet.operation.ts`) | GET    | `...`    | 1     |
| [`timeConditionConditionPost`](./`timeCondition/timeConditionConditionPost.operation.ts`)       | POST   | `...`    | 1     |
| [`timeConditionConditionPut`](./`timeCondition/timeConditionConditionPut.operation.ts`)         | PUT    | `...`    | 1     |
| [`timeConditionGet`](./`timeCondition/timeConditionGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`timeConditionListGet`](./`timeCondition/timeConditionListGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`timeConditionOptionsListGet`](./`timeCondition/timeConditionOptionsListGet.operation.ts`)     | GET    | `...`    | 1     |
| [`timeConditionOptionsPut`](./`timeCondition/timeConditionOptionsPut.operation.ts`)             | PUT    | `...`    | 1     |

### trunk

| Operation                                                                                                     | Method | Endpoint | Tests |
| ------------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`trunkChannelsPacksRepartitionListGet`](./`trunk/trunkChannelsPacksRepartitionListGet.operation.ts`)         | GET    | `...`    | 1     |
| [`trunkExternalDisplayedNumberDelete`](./`trunk/trunkExternalDisplayedNumberDelete.operation.ts`)             | DELETE | `...`    | 1     |
| [`trunkExternalDisplayedNumberGet`](./`trunk/trunkExternalDisplayedNumberGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`trunkExternalDisplayedNumberListGet`](./`trunk/trunkExternalDisplayedNumberListGet.operation.ts`)           | GET    | `...`    | 1     |
| [`trunkExternalDisplayedNumberPost`](./`trunk/trunkExternalDisplayedNumberPost.operation.ts`)                 | POST   | `...`    | 1     |
| [`trunkExternalDisplayedNumberValidatePost`](./`trunk/trunkExternalDisplayedNumberValidatePost.operation.ts`) | POST   | `...`    | 1     |
| [`trunkGet`](./`trunk/trunkGet.operation.ts`)                                                                 | GET    | `...`    | 1     |
| [`trunkListGet`](./`trunk/trunkListGet.operation.ts`)                                                         | GET    | `...`    | 1     |

### trunks

| Operation                                                                    | Method | Endpoint | Tests |
| ---------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`trunksChangeContactPost`](./`trunks/trunksChangeContactPost.operation.ts`) | POST   | `...`    | 1     |
| [`trunksGet`](./`trunks/trunksGet.operation.ts`)                             | GET    | `...`    | 1     |
| [`trunksHardwareListGet`](./`trunks/trunksHardwareListGet.operation.ts`)     | GET    | `...`    | 1     |
| [`trunksHardwarePost`](./`trunks/trunksHardwarePost.operation.ts`)           | POST   | `...`    | 1     |
| [`trunksListGet`](./`trunks/trunksListGet.operation.ts`)                     | GET    | `...`    | 1     |
| [`trunksNumberDelete`](./`trunks/trunksNumberDelete.operation.ts`)           | DELETE | `...`    | 1     |
| [`trunksNumberGet`](./`trunks/trunksNumberGet.operation.ts`)                 | GET    | `...`    | 1     |
| [`trunksNumberListGet`](./`trunks/trunksNumberListGet.operation.ts`)         | GET    | `...`    | 1     |
| [`trunksNumberPost`](./`trunks/trunksNumberPost.operation.ts`)               | POST   | `...`    | 1     |
| [`trunksNumberPut`](./`trunks/trunksNumberPut.operation.ts`)                 | PUT    | `...`    | 1     |
| [`trunksServiceInfosGet`](./`trunks/trunksServiceInfosGet.operation.ts`)     | GET    | `...`    | 1     |
| [`trunksServiceInfosPut`](./`trunks/trunksServiceInfosPut.operation.ts`)     | PUT    | `...`    | 1     |

### voicemail

| Operation                                                                                                         | Method | Endpoint | Tests |
| ----------------------------------------------------------------------------------------------------------------- | ------ | -------- | ----- |
| [`voicemailDirectoriesDelete`](./`voicemail/voicemailDirectoriesDelete.operation.ts`)                             | DELETE | `...`    | 1     |
| [`voicemailDirectoriesDownloadListGet`](./`voicemail/voicemailDirectoriesDownloadListGet.operation.ts`)           | GET    | `...`    | 1     |
| [`voicemailDirectoriesGet`](./`voicemail/voicemailDirectoriesGet.operation.ts`)                                   | GET    | `...`    | 1     |
| [`voicemailDirectoriesListGet`](./`voicemail/voicemailDirectoriesListGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`voicemailDirectoriesMovePost`](./`voicemail/voicemailDirectoriesMovePost.operation.ts`)                         | POST   | `...`    | 1     |
| [`voicemailDirectoriesTranscriptListGet`](./`voicemail/voicemailDirectoriesTranscriptListGet.operation.ts`)       | GET    | `...`    | 1     |
| [`voicemailGet`](./`voicemail/voicemailGet.operation.ts`)                                                         | GET    | `...`    | 1     |
| [`voicemailGreetingsDelete`](./`voicemail/voicemailGreetingsDelete.operation.ts`)                                 | DELETE | `...`    | 1     |
| [`voicemailGreetingsDownloadListGet`](./`voicemail/voicemailGreetingsDownloadListGet.operation.ts`)               | GET    | `...`    | 1     |
| [`voicemailGreetingsGet`](./`voicemail/voicemailGreetingsGet.operation.ts`)                                       | GET    | `...`    | 1     |
| [`voicemailGreetingsListGet`](./`voicemail/voicemailGreetingsListGet.operation.ts`)                               | GET    | `...`    | 1     |
| [`voicemailGreetingsMovePost`](./`voicemail/voicemailGreetingsMovePost.operation.ts`)                             | POST   | `...`    | 1     |
| [`voicemailGreetingsPost`](./`voicemail/voicemailGreetingsPost.operation.ts`)                                     | POST   | `...`    | 1     |
| [`voicemailListGet`](./`voicemail/voicemailListGet.operation.ts`)                                                 | GET    | `...`    | 1     |
| [`voicemailMigrateOnNewVersionPost`](./`voicemail/voicemailMigrateOnNewVersionPost.operation.ts`)                 | POST   | `...`    | 1     |
| [`voicemailPut`](./`voicemail/voicemailPut.operation.ts`)                                                         | PUT    | `...`    | 1     |
| [`voicemailSettingsChangePasswordPost`](./`voicemail/voicemailSettingsChangePasswordPost.operation.ts`)           | POST   | `...`    | 1     |
| [`voicemailSettingsChangeRoutingPost`](./`voicemail/voicemailSettingsChangeRoutingPost.operation.ts`)             | POST   | `...`    | 1     |
| [`voicemailSettingsListGet`](./`voicemail/voicemailSettingsListGet.operation.ts`)                                 | GET    | `...`    | 1     |
| [`voicemailSettingsPut`](./`voicemail/voicemailSettingsPut.operation.ts`)                                         | PUT    | `...`    | 1     |
| [`voicemailSettingsRoutingListGet`](./`voicemail/voicemailSettingsRoutingListGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`voicemailSettingsVoicemailNumbersListGet`](./`voicemail/voicemailSettingsVoicemailNumbersListGet.operation.ts`) | GET    | `...`    | 1     |

### vxml

| Operation                                                            | Method | Endpoint | Tests |
| -------------------------------------------------------------------- | ------ | -------- | ----- |
| [`vxmlGet`](./`vxml/vxmlGet.operation.ts`)                           | GET    | `...`    | 1     |
| [`vxmlListGet`](./`vxml/vxmlListGet.operation.ts`)                   | GET    | `...`    | 1     |
| [`vxmlSettingsListGet`](./`vxml/vxmlSettingsListGet.operation.ts`)   | GET    | `...`    | 1     |
| [`vxmlSettingsLogsPost`](./`vxml/vxmlSettingsLogsPost.operation.ts`) | POST   | `...`    | 1     |
| [`vxmlSettingsPut`](./`vxml/vxmlSettingsPut.operation.ts`)           | PUT    | `...`    | 1     |

**Total:** 617 operations, 617 tests

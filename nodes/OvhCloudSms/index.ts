import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

// Operations are wired from their dedicated operation files.
import {
	description as descriptionSmsListGet,
	execute as executeSmsListGet,
} from './resources/sms/smsListGet.operation';

import {
	description as descriptionSmsCreatePost,
	execute as executeSmsCreatePost,
} from './resources/sms/smsCreatePost.operation';
import {
	description as descriptionSmsGetGet,
	execute as executeSmsGetGet,
} from './resources/sms/smsGetGet.operation';
import {
	description as descriptionSmsDeleteDelete,
	execute as executeSmsDeleteDelete,
} from './resources/sms/smsDeleteDelete.operation';
import {
	description as descriptionSmsRecipientListGet,
	execute as executeSmsRecipientListGet,
} from './resources/sms/smsRecipientListGet.operation';
import {
	description as descriptionSmsTaskListGet,
	execute as executeSmsTaskListGet,
} from './resources/sms/smsTaskListGet.operation';
import {
	description as descriptionSmsTaskGetGet,
	execute as executeSmsTaskGetGet,
} from './resources/sms/smsTaskGetGet.operation';
import {
	description as descriptionBlacklistListGet,
	execute as executeBlacklistListGet,
} from './resources/blacklist/blacklistListGet.operation';
import {
	description as descriptionBlacklistCreatePost,
	execute as executeBlacklistCreatePost,
} from './resources/blacklist/blacklistCreatePost.operation';
import {
	description as descriptionBlacklistDeleteDelete,
	execute as executeBlacklistDeleteDelete,
} from './resources/blacklist/blacklistDeleteDelete.operation';
import {
	description as descriptionBlacklistGetGet,
	execute as executeBlacklistGetGet,
} from './resources/blacklist/blacklistGetGet.operation';

import {
	description as descriptionEstimatePost,
	execute as executeEstimatePost,
} from './resources/estimate/estimatePost.operation';
import {
	description as descriptionPttsGet,
	execute as executePttsGet,
} from './resources/ptts/pttsGet.operation';
import {
	description as descriptionRatesDestinationsGet,
	execute as executeRatesDestinationsGet,
} from './resources/rates/ratesDestinationsGet.operation';
import {
	description as descriptionRatesPacksGet,
	execute as executeRatesPacksGet,
} from './resources/rates/ratesPacksGet.operation';
import {
	description as descriptionTopVirtualNumbersListGet,
	execute as executeTopVirtualNumbersListGet,
} from './resources/virtualNumbers/topVirtualNumbersListGet.operation';
import {
	description as descriptionTopVirtualNumbersGetGet,
	execute as executeTopVirtualNumbersGetGet,
} from './resources/virtualNumbers/topVirtualNumbersGetGet.operation';
import {
	description as descriptionTopVirtualNumbersGet,
	execute as executeTopVirtualNumbersGet,
} from './resources/virtualNumbers/topVirtualNumbersGet.operation';
import {
	description as descriptionTopVirtualNumbersUpdatePut,
	execute as executeTopVirtualNumbersUpdatePut,
} from './resources/virtualNumbers/topVirtualNumbersUpdatePut.operation';
import {
	description as descriptionSmsUpdatePut,
	execute as executeSmsUpdatePut,
} from './resources/sms/smsUpdatePut.operation';
import {
	description as descriptionBatchesListGet,
	execute as executeBatchesListGet,
} from './resources/batches/batchesListGet.operation';
import {
	description as descriptionBatchesCreatePost,
	execute as executeBatchesCreatePost,
} from './resources/batches/batchesCreatePost.operation';
import {
	description as descriptionBatchesDeleteDelete,
	execute as executeBatchesDeleteDelete,
} from './resources/batches/batchesDeleteDelete.operation';
import {
	description as descriptionBatchesGetGet,
	execute as executeBatchesGetGet,
} from './resources/batches/batchesGetGet.operation';
import {
	description as descriptionBatchesUpdatePut,
	execute as executeBatchesUpdatePut,
} from './resources/batches/batchesUpdatePut.operation';
import {
	description as descriptionBatchesCancelPost,
	execute as executeBatchesCancelPost,
} from './resources/batches/batchesCancelPost.operation';
import {
	description as descriptionBatchesStatisticsGet,
	execute as executeBatchesStatisticsGet,
} from './resources/batches/batchesStatisticsGet.operation';
import {
	description as descriptionDocumentGet,
	execute as executeDocumentGet,
} from './resources/document/documentGet.operation';
import {
	description as descriptionExceptionsListGet,
	execute as executeExceptionsListGet,
} from './resources/exceptions/exceptionsListGet.operation';
import {
	description as descriptionHlrListGet,
	execute as executeHlrListGet,
} from './resources/hlr/hlrListGet.operation';
import {
	description as descriptionHlrCreatePost,
	execute as executeHlrCreatePost,
} from './resources/hlr/hlrCreatePost.operation';
import {
	description as descriptionHlrGetGet,
	execute as executeHlrGetGet,
} from './resources/hlr/hlrGetGet.operation';
import {
	description as descriptionHlrOperatorGet,
	execute as executeHlrOperatorGet,
} from './resources/hlr/hlrOperatorGet.operation';
import {
	description as descriptionIncomingListGet,
	execute as executeIncomingListGet,
} from './resources/incoming/incomingListGet.operation';
import {
	description as descriptionIncomingDeleteDelete,
	execute as executeIncomingDeleteDelete,
} from './resources/incoming/incomingDeleteDelete.operation';
import {
	description as descriptionIncomingGetGet,
	execute as executeIncomingGetGet,
} from './resources/incoming/incomingGetGet.operation';
import {
	description as descriptionJobsListGet,
	execute as executeJobsListGet,
} from './resources/jobs/jobsListGet.operation';
import {
	description as descriptionJobsDeleteDelete,
	execute as executeJobsDeleteDelete,
} from './resources/jobs/jobsDeleteDelete.operation';
import {
	description as descriptionJobsGetGet,
	execute as executeJobsGetGet,
} from './resources/jobs/jobsGetGet.operation';
import {
	description as descriptionOutgoingListGet,
	execute as executeOutgoingListGet,
} from './resources/outgoing/outgoingListGet.operation';
import {
	description as descriptionOutgoingDeleteDelete,
	execute as executeOutgoingDeleteDelete,
} from './resources/outgoing/outgoingDeleteDelete.operation';
import {
	description as descriptionOutgoingGetGet,
	execute as executeOutgoingGetGet,
} from './resources/outgoing/outgoingGetGet.operation';
import {
	description as descriptionOutgoingHlrGet,
	execute as executeOutgoingHlrGet,
} from './resources/outgoing/outgoingHlrGet.operation';
import {
	description as descriptionPhonebooksListGet,
	execute as executePhonebooksListGet,
} from './resources/phonebooks/phonebooksListGet.operation';
import {
	description as descriptionPhonebooksCreatePost,
	execute as executePhonebooksCreatePost,
} from './resources/phonebooks/phonebooksCreatePost.operation';
import {
	description as descriptionPhonebooksDeleteDelete,
	execute as executePhonebooksDeleteDelete,
} from './resources/phonebooks/phonebooksDeleteDelete.operation';
import {
	description as descriptionPhonebooksGetGet,
	execute as executePhonebooksGetGet,
} from './resources/phonebooks/phonebooksGetGet.operation';
import {
	description as descriptionPhonebooksUpdatePut,
	execute as executePhonebooksUpdatePut,
} from './resources/phonebooks/phonebooksUpdatePut.operation';
import {
	description as descriptionPhonebooksExportGet,
	execute as executePhonebooksExportGet,
} from './resources/phonebooks/phonebooksExportGet.operation';
import {
	description as descriptionPhonebooksImportPost,
	execute as executePhonebooksImportPost,
} from './resources/phonebooks/phonebooksImportPost.operation';
import {
	description as descriptionPhonebooksPhonebookContactListGet,
	execute as executePhonebooksPhonebookContactListGet,
} from './resources/phonebooks/phonebooksPhonebookContactListGet.operation';
import {
	description as descriptionPhonebooksPhonebookContactCreatePost,
	execute as executePhonebooksPhonebookContactCreatePost,
} from './resources/phonebooks/phonebooksPhonebookContactCreatePost.operation';
import {
	description as descriptionPhonebooksPhonebookContactDeleteDelete,
	execute as executePhonebooksPhonebookContactDeleteDelete,
} from './resources/phonebooks/phonebooksPhonebookContactDeleteDelete.operation';
import {
	description as descriptionPhonebooksPhonebookContactGetGet,
	execute as executePhonebooksPhonebookContactGetGet,
} from './resources/phonebooks/phonebooksPhonebookContactGetGet.operation';
import {
	description as descriptionPhonebooksPhonebookContactUpdatePut,
	execute as executePhonebooksPhonebookContactUpdatePut,
} from './resources/phonebooks/phonebooksPhonebookContactUpdatePut.operation';
import {
	description as descriptionReceiversCreatePost,
	execute as executeReceiversCreatePost,
} from './resources/receivers/receiversCreatePost.operation';
import {
	description as descriptionReceiversDeleteDelete,
	execute as executeReceiversDeleteDelete,
} from './resources/receivers/receiversDeleteDelete.operation';
import {
	description as descriptionReceiversGetGet,
	execute as executeReceiversGetGet,
} from './resources/receivers/receiversGetGet.operation';
import {
	description as descriptionReceiversUpdatePut,
	execute as executeReceiversUpdatePut,
} from './resources/receivers/receiversUpdatePut.operation';
import {
	description as descriptionReceiversCleanPost,
	execute as executeReceiversCleanPost,
} from './resources/receivers/receiversCleanPost.operation';
import {
	description as descriptionReceiversCsvGet,
	execute as executeReceiversCsvGet,
} from './resources/receivers/receiversCsvGet.operation';
import {
	description as descriptionSeeOffersGet,
	execute as executeSeeOffersGet,
} from './resources/seeOffers/seeOffersGet.operation';
import {
	description as descriptionSendersListGet,
	execute as executeSendersListGet,
} from './resources/senders/sendersListGet.operation';
import {
	description as descriptionSendersCreatePost,
	execute as executeSendersCreatePost,
} from './resources/senders/sendersCreatePost.operation';
import {
	description as descriptionSendersDeleteDelete,
	execute as executeSendersDeleteDelete,
} from './resources/senders/sendersDeleteDelete.operation';
import {
	description as descriptionSendersGetGet,
	execute as executeSendersGetGet,
} from './resources/senders/sendersGetGet.operation';
import {
	description as descriptionSendersUpdatePut,
	execute as executeSendersUpdatePut,
} from './resources/senders/sendersUpdatePut.operation';
import {
	description as descriptionSendersDocumentsListGet,
	execute as executeSendersDocumentsListGet,
} from './resources/senders/sendersDocumentsListGet.operation';
import {
	description as descriptionSendersDocumentsPost,
	execute as executeSendersDocumentsPost,
} from './resources/senders/sendersDocumentsPost.operation';
import {
	description as descriptionSendersDocumentsGetGet,
	execute as executeSendersDocumentsGetGet,
} from './resources/senders/sendersDocumentsGetGet.operation';
import {
	description as descriptionSendersDocumentsUpdatePut,
	execute as executeSendersDocumentsUpdatePut,
} from './resources/senders/sendersDocumentsUpdatePut.operation';
import {
	description as descriptionSendersValidatePost,
	execute as executeSendersValidatePost,
} from './resources/senders/sendersValidatePost.operation';
import {
	description as descriptionSendersAvailableForValidationGet,
	execute as executeSendersAvailableForValidationGet,
} from './resources/senders/sendersAvailableForValidationGet.operation';
import {
	description as descriptionServiceInfosGet,
	execute as executeServiceInfosGet,
} from './resources/serviceInfos/serviceInfosGet.operation';
import {
	description as descriptionServiceInfosUpdatePut,
	execute as executeServiceInfosUpdatePut,
} from './resources/serviceInfos/serviceInfosUpdatePut.operation';
import {
	description as descriptionSmppAllowedIPsListGet,
	execute as executeSmppAllowedIPsListGet,
} from './resources/smpp/smppAllowedIPsListGet.operation';
import {
	description as descriptionSmppAllowedIPsUpdatePut,
	execute as executeSmppAllowedIPsUpdatePut,
} from './resources/smpp/smppAllowedIPsUpdatePut.operation';
import {
	description as descriptionSmppPasswordPost,
	execute as executeSmppPasswordPost,
} from './resources/smpp/smppPasswordPost.operation';
import {
	description as descriptionSmppSettingsGet,
	execute as executeSmppSettingsGet,
} from './resources/smpp/smppSettingsGet.operation';
import {
	description as descriptionTemplatesControlListGet,
	execute as executeTemplatesControlListGet,
} from './resources/templatesControl/templatesControlListGet.operation';
import {
	description as descriptionTemplatesControlCreatePost,
	execute as executeTemplatesControlCreatePost,
} from './resources/templatesControl/templatesControlCreatePost.operation';
import {
	description as descriptionTemplatesControlDeleteDelete,
	execute as executeTemplatesControlDeleteDelete,
} from './resources/templatesControl/templatesControlDeleteDelete.operation';
import {
	description as descriptionTemplatesControlGetGet,
	execute as executeTemplatesControlGetGet,
} from './resources/templatesControl/templatesControlGetGet.operation';
import {
	description as descriptionTemplatesControlUpdatePut,
	execute as executeTemplatesControlUpdatePut,
} from './resources/templatesControl/templatesControlUpdatePut.operation';
import {
	description as descriptionTemplatesControlRelaunchValidationPost,
	execute as executeTemplatesControlRelaunchValidationPost,
} from './resources/templatesControl/templatesControlRelaunchValidationPost.operation';
import {
	description as descriptionTransferCreditsPost,
	execute as executeTransferCreditsPost,
} from './resources/transferCredits/transferCreditsPost.operation';
import {
	description as descriptionUsersListGet,
	execute as executeUsersListGet,
} from './resources/users/usersListGet.operation';
import {
	description as descriptionUsersCreatePost,
	execute as executeUsersCreatePost,
} from './resources/users/usersCreatePost.operation';
import {
	description as descriptionUsersDeleteDelete,
	execute as executeUsersDeleteDelete,
} from './resources/users/usersDeleteDelete.operation';
import {
	description as descriptionUsersGetGet,
	execute as executeUsersGetGet,
} from './resources/users/usersGetGet.operation';
import {
	description as descriptionUsersUpdatePut,
	execute as executeUsersUpdatePut,
} from './resources/users/usersUpdatePut.operation';
import {
	description as descriptionUsersDocumentGet,
	execute as executeUsersDocumentGet,
} from './resources/users/usersDocumentGet.operation';
import {
	description as descriptionUsersIncomingListGet,
	execute as executeUsersIncomingListGet,
} from './resources/users/usersIncomingListGet.operation';
import {
	description as descriptionUsersIncomingDeleteDelete,
	execute as executeUsersIncomingDeleteDelete,
} from './resources/users/usersIncomingDeleteDelete.operation';
import {
	description as descriptionUsersIncomingGetGet,
	execute as executeUsersIncomingGetGet,
} from './resources/users/usersIncomingGetGet.operation';
import {
	description as descriptionUsersJobsListGet,
	execute as executeUsersJobsListGet,
} from './resources/users/usersJobsListGet.operation';
import {
	description as descriptionUsersJobsSendPost,
	execute as executeUsersJobsSendPost,
} from './resources/users/usersJobsSendPost.operation';
import {
	description as descriptionUsersJobsDeleteDelete,
	execute as executeUsersJobsDeleteDelete,
} from './resources/users/usersJobsDeleteDelete.operation';
import {
	description as descriptionUsersJobsGetGet,
	execute as executeUsersJobsGetGet,
} from './resources/users/usersJobsGetGet.operation';
import {
	description as descriptionUsersOutgoingListGet,
	execute as executeUsersOutgoingListGet,
} from './resources/users/usersOutgoingListGet.operation';
import {
	description as descriptionUsersOutgoingDeleteDelete,
	execute as executeUsersOutgoingDeleteDelete,
} from './resources/users/usersOutgoingDeleteDelete.operation';
import {
	description as descriptionUsersOutgoingGetGet,
	execute as executeUsersOutgoingGetGet,
} from './resources/users/usersOutgoingGetGet.operation';
import {
	description as descriptionUsersOutgoingHlrGet,
	execute as executeUsersOutgoingHlrGet,
} from './resources/users/usersOutgoingHlrGet.operation';
import {
	description as descriptionUsersReceiversListGet,
	execute as executeUsersReceiversListGet,
} from './resources/users/usersReceiversListGet.operation';
import {
	description as descriptionUsersReceiversCreatePost,
	execute as executeUsersReceiversCreatePost,
} from './resources/users/usersReceiversCreatePost.operation';
import {
	description as descriptionUsersReceiversDeleteDelete,
	execute as executeUsersReceiversDeleteDelete,
} from './resources/users/usersReceiversDeleteDelete.operation';
import {
	description as descriptionUsersReceiversGetGet,
	execute as executeUsersReceiversGetGet,
} from './resources/users/usersReceiversGetGet.operation';
import {
	description as descriptionUsersReceiversUpdatePut,
	execute as executeUsersReceiversUpdatePut,
} from './resources/users/usersReceiversUpdatePut.operation';
import {
	description as descriptionUsersReceiversCleanPost,
	execute as executeUsersReceiversCleanPost,
} from './resources/users/usersReceiversCleanPost.operation';
import {
	description as descriptionUsersReceiversCsvGet,
	execute as executeUsersReceiversCsvGet,
} from './resources/users/usersReceiversCsvGet.operation';
import {
	description as descriptionVirtualNumbersListGet,
	execute as executeVirtualNumbersListGet,
} from './resources/virtualNumbers/virtualNumbersListGet.operation';
import {
	description as descriptionVirtualNumbersGetGet,
	execute as executeVirtualNumbersGetGet,
} from './resources/virtualNumbers/virtualNumbersGetGet.operation';
import {
	description as descriptionVirtualNumbersChatAccessDelete,
	execute as executeVirtualNumbersChatAccessDelete,
} from './resources/virtualNumbers/virtualNumbersChatAccessDelete.operation';
import {
	description as descriptionVirtualNumbersChatAccessGet,
	execute as executeVirtualNumbersChatAccessGet,
} from './resources/virtualNumbers/virtualNumbersChatAccessGet.operation';
import {
	description as descriptionVirtualNumbersChatAccessPost,
	execute as executeVirtualNumbersChatAccessPost,
} from './resources/virtualNumbers/virtualNumbersChatAccessPost.operation';
import {
	description as descriptionVirtualNumbersIncomingListGet,
	execute as executeVirtualNumbersIncomingListGet,
} from './resources/virtualNumbers/virtualNumbersIncomingListGet.operation';
import {
	description as descriptionVirtualNumbersIncomingDeleteDelete,
	execute as executeVirtualNumbersIncomingDeleteDelete,
} from './resources/virtualNumbers/virtualNumbersIncomingDeleteDelete.operation';
import {
	description as descriptionVirtualNumbersIncomingGetGet,
	execute as executeVirtualNumbersIncomingGetGet,
} from './resources/virtualNumbers/virtualNumbersIncomingGetGet.operation';
import {
	description as descriptionVirtualNumbersJobsListGet,
	execute as executeVirtualNumbersJobsListGet,
} from './resources/virtualNumbers/virtualNumbersJobsListGet.operation';
import {
	description as descriptionVirtualNumbersJobsSendPost,
	execute as executeVirtualNumbersJobsSendPost,
} from './resources/virtualNumbers/virtualNumbersJobsSendPost.operation';
import {
	description as descriptionVirtualNumbersJobsDeleteDelete,
	execute as executeVirtualNumbersJobsDeleteDelete,
} from './resources/virtualNumbers/virtualNumbersJobsDeleteDelete.operation';
import {
	description as descriptionVirtualNumbersJobsGetGet,
	execute as executeVirtualNumbersJobsGetGet,
} from './resources/virtualNumbers/virtualNumbersJobsGetGet.operation';
import {
	description as descriptionVirtualNumbersOutgoingListGet,
	execute as executeVirtualNumbersOutgoingListGet,
} from './resources/virtualNumbers/virtualNumbersOutgoingListGet.operation';
import {
	description as descriptionVirtualNumbersOutgoingDeleteDelete,
	execute as executeVirtualNumbersOutgoingDeleteDelete,
} from './resources/virtualNumbers/virtualNumbersOutgoingDeleteDelete.operation';
import {
	description as descriptionVirtualNumbersOutgoingGetGet,
	execute as executeVirtualNumbersOutgoingGetGet,
} from './resources/virtualNumbers/virtualNumbersOutgoingGetGet.operation';
import {
	description as descriptionVirtualNumbersOutgoingHlrGet,
	execute as executeVirtualNumbersOutgoingHlrGet,
} from './resources/virtualNumbers/virtualNumbersOutgoingHlrGet.operation';

export function description(displayOptions: IDisplayOptions = {}) {
	const properties: INodeProperties[] = [];

	properties.push({
		displayName: 'Operation',
		name: 'smsOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
			{ displayName: 'Batches Cancel Post', name: 'batchesCancelPost', value: 'batchesCancelPost', action: 'POST /sms/{serviceName}/batches/{id}/cancel' },
			{ displayName: 'Batches Create Post', name: 'batchesCreatePost', value: 'batchesCreatePost', action: 'POST /sms/{serviceName}/batches' },
			{ displayName: 'Batches Delete Delete', name: 'batchesDeleteDelete', value: 'batchesDeleteDelete', action: 'DELETE /sms/{serviceName}/batches/{id}' },
			{ displayName: 'Batches Get', name: 'batchesGetGet', value: 'batchesGetGet', action: 'GET /sms/{serviceName}/batches/{id}' },
			{ displayName: 'Batches List', name: 'batchesListGet', value: 'batchesListGet', action: 'GET /sms/{serviceName}/batches' },
			{ displayName: 'Batches Statistics', name: 'batchesStatisticsGet', value: 'batchesStatisticsGet', action: 'GET /sms/{serviceName}/batches/{id}/statistics' },
			{ displayName: 'Batches Update Put', name: 'batchesUpdatePut', value: 'batchesUpdatePut', action: 'PUT /sms/{serviceName}/batches/{id}' },
			{ displayName: 'Blacklist Create', name: 'blacklistCreatePost', value: 'blacklistCreatePost' },
			{ displayName: 'Blacklist Delete', name: 'blacklistDeleteDelete', value: 'blacklistDeleteDelete' },
			{ displayName: 'Blacklist Get', name: 'blacklistGetGet', value: 'blacklistGetGet' },
			{ displayName: 'Blacklist List', name: 'blacklistListGet', value: 'blacklistListGet' },
			{ displayName: 'Document', name: 'documentGet', value: 'documentGet', action: 'GET /sms/{serviceName}/document' },
			{ displayName: 'Estimate Post', name: 'estimatePost', value: 'estimatePost', action: 'POST /sms/estimate' },
			{ displayName: 'Exceptions List', name: 'exceptionsListGet', value: 'exceptionsListGet', action: 'GET /sms/{serviceName}/exceptions' },
			{ displayName: 'Hlr Create Post', name: 'hlrCreatePost', value: 'hlrCreatePost', action: 'POST /sms/{serviceName}/hlr' },
			{ displayName: 'Hlr Get', name: 'hlrGetGet', value: 'hlrGetGet', action: 'GET /sms/{serviceName}/hlr/{id}' },
			{ displayName: 'Hlr List', name: 'hlrListGet', value: 'hlrListGet', action: 'GET /sms/{serviceName}/hlr' },
			{ displayName: 'Hlr Operator', name: 'hlrOperatorGet', value: 'hlrOperatorGet', action: 'GET /sms/{serviceName}/hlr/{id}/operator' },
			{ displayName: 'Incoming Delete Delete', name: 'incomingDeleteDelete', value: 'incomingDeleteDelete', action: 'DELETE /sms/{serviceName}/incoming/{id}' },
			{ displayName: 'Incoming Get', name: 'incomingGetGet', value: 'incomingGetGet', action: 'GET /sms/{serviceName}/incoming/{id}' },
			{ displayName: 'Incoming List', name: 'incomingListGet', value: 'incomingListGet', action: 'GET /sms/{serviceName}/incoming' },
			{ displayName: 'Jobs Delete Delete', name: 'jobsDeleteDelete', value: 'jobsDeleteDelete', action: 'DELETE /sms/{serviceName}/jobs/{id}' },
			{ displayName: 'Jobs Get', name: 'jobsGetGet', value: 'jobsGetGet', action: 'GET /sms/{serviceName}/jobs/{id}' },
			{ displayName: 'Jobs List', name: 'jobsListGet', value: 'jobsListGet', action: 'GET /sms/{serviceName}/jobs' },
			{ displayName: 'Outgoing Delete Delete', name: 'outgoingDeleteDelete', value: 'outgoingDeleteDelete', action: 'DELETE /sms/{serviceName}/outgoing/{id}' },
			{ displayName: 'Outgoing Get', name: 'outgoingGetGet', value: 'outgoingGetGet', action: 'GET /sms/{serviceName}/outgoing/{id}' },
			{ displayName: 'Outgoing Hlr', name: 'outgoingHlrGet', value: 'outgoingHlrGet', action: 'GET /sms/{serviceName}/outgoing/{id}/hlr' },
			{ displayName: 'Outgoing List', name: 'outgoingListGet', value: 'outgoingListGet', action: 'GET /sms/{serviceName}/outgoing' },
			{ displayName: 'Phonebooks Create Post', name: 'phonebooksCreatePost', value: 'phonebooksCreatePost', action: 'POST /sms/{serviceName}/phonebooks' },
			{ displayName: 'Phonebooks Delete Delete', name: 'phonebooksDeleteDelete', value: 'phonebooksDeleteDelete', action: 'DELETE /sms/{serviceName}/phonebooks/{bookKey}' },
			{ displayName: 'Phonebooks Export', name: 'phonebooksExportGet', value: 'phonebooksExportGet', action: 'GET /sms/{serviceName}/phonebooks/{bookKey}/export' },
			{ displayName: 'Phonebooks Get', name: 'phonebooksGetGet', value: 'phonebooksGetGet', action: 'GET /sms/{serviceName}/phonebooks/{bookKey}' },
			{ displayName: 'Phonebooks Import Post', name: 'phonebooksImportPost', value: 'phonebooksImportPost', action: 'POST /sms/{serviceName}/phonebooks/{bookKey}/import' },
			{ displayName: 'Phonebooks List', name: 'phonebooksListGet', value: 'phonebooksListGet', action: 'GET /sms/{serviceName}/phonebooks' },
			{ displayName: 'Phonebooks Phonebook Contact Create Post', name: 'phonebooksPhonebookContactCreatePost', value: 'phonebooksPhonebookContactCreatePost', action: 'POST /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' },
			{ displayName: 'Phonebooks Phonebook Contact Delete Delete', name: 'phonebooksPhonebookContactDeleteDelete', value: 'phonebooksPhonebookContactDeleteDelete', action: 'DELETE /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' },
			{ displayName: 'Phonebooks Phonebook Contact Get', name: 'phonebooksPhonebookContactGetGet', value: 'phonebooksPhonebookContactGetGet', action: 'GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' },
			{ displayName: 'Phonebooks Phonebook Contact List', name: 'phonebooksPhonebookContactListGet', value: 'phonebooksPhonebookContactListGet', action: 'GET /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact' },
			{ displayName: 'Phonebooks Phonebook Contact Update Put', name: 'phonebooksPhonebookContactUpdatePut', value: 'phonebooksPhonebookContactUpdatePut', action: 'PUT /sms/{serviceName}/phonebooks/{bookKey}/phonebookContact/{id}' },
			{ displayName: 'Phonebooks Update Put', name: 'phonebooksUpdatePut', value: 'phonebooksUpdatePut', action: 'PUT /sms/{serviceName}/phonebooks/{bookKey}' },
			{ displayName: 'Ptts', name: 'pttsGet', value: 'pttsGet', action: 'GET /sms/ptts' },
			{ displayName: 'Rates Destinations', name: 'ratesDestinationsGet', value: 'ratesDestinationsGet', action: 'GET /sms/rates/destinations' },
			{ displayName: 'Rates Packs', name: 'ratesPacksGet', value: 'ratesPacksGet', action: 'GET /sms/rates/packs' },
			{ displayName: 'Receivers Clean Post', name: 'receiversCleanPost', value: 'receiversCleanPost', action: 'POST /sms/{serviceName}/receivers/{slotId}/clean' },
			{ displayName: 'Receivers Create Post', name: 'receiversCreatePost', value: 'receiversCreatePost', action: 'POST /sms/{serviceName}/receivers' },
			{ displayName: 'Receivers Csv', name: 'receiversCsvGet', value: 'receiversCsvGet', action: 'GET /sms/{serviceName}/receivers/{slotId}/csv' },
			{ displayName: 'Receivers Delete Delete', name: 'receiversDeleteDelete', value: 'receiversDeleteDelete', action: 'DELETE /sms/{serviceName}/receivers/{slotId}' },
			{ displayName: 'Receivers Get', name: 'receiversGetGet', value: 'receiversGetGet', action: 'GET /sms/{serviceName}/receivers/{slotId}' },
			{ displayName: 'Receivers Update Put', name: 'receiversUpdatePut', value: 'receiversUpdatePut', action: 'PUT /sms/{serviceName}/receivers/{slotId}' },
			{ displayName: 'See Offers', name: 'seeOffersGet', value: 'seeOffersGet', action: 'GET /sms/{serviceName}/seeOffers' },
			{ displayName: 'Senders Available For Validation', name: 'sendersAvailableForValidationGet', value: 'sendersAvailableForValidationGet', action: 'GET /sms/{serviceName}/sendersAvailableForValidation' },
			{ displayName: 'Senders Create Post', name: 'sendersCreatePost', value: 'sendersCreatePost', action: 'POST /sms/{serviceName}/senders' },
			{ displayName: 'Senders Delete Delete', name: 'sendersDeleteDelete', value: 'sendersDeleteDelete', action: 'DELETE /sms/{serviceName}/senders/{sender}' },
			{ displayName: 'Senders Documents Get', name: 'sendersDocumentsGetGet', value: 'sendersDocumentsGetGet', action: 'GET /sms/{serviceName}/senders/{sender}/documents/{documentID}' },
			{ displayName: 'Senders Documents List', name: 'sendersDocumentsListGet', value: 'sendersDocumentsListGet', action: 'GET /sms/{serviceName}/senders/{sender}/documents' },
			{ displayName: 'Senders Documents Post', name: 'sendersDocumentsPost', value: 'sendersDocumentsPost', action: 'POST /sms/{serviceName}/senders/{sender}/documents' },
			{ displayName: 'Senders Documents Update Put', name: 'sendersDocumentsUpdatePut', value: 'sendersDocumentsUpdatePut', action: 'PUT /sms/{serviceName}/senders/{sender}/documents/{documentID}' },
			{ displayName: 'Senders Get', name: 'sendersGetGet', value: 'sendersGetGet', action: 'GET /sms/{serviceName}/senders/{sender}' },
			{ displayName: 'Senders List', name: 'sendersListGet', value: 'sendersListGet', action: 'GET /sms/{serviceName}/senders' },
			{ displayName: 'Senders Update Put', name: 'sendersUpdatePut', value: 'sendersUpdatePut', action: 'PUT /sms/{serviceName}/senders/{sender}' },
			{ displayName: 'Senders Validate Post', name: 'sendersValidatePost', value: 'sendersValidatePost', action: 'POST /sms/{serviceName}/senders/{sender}/validate' },
			{ displayName: 'Service Infos', name: 'serviceInfosGet', value: 'serviceInfosGet', action: 'GET /sms/{serviceName}/serviceInfos' },
			{ displayName: 'Service Infos Update Put', name: 'serviceInfosUpdatePut', value: 'serviceInfosUpdatePut', action: 'PUT /sms/{serviceName}/serviceInfos' },
			{ displayName: 'Smpp Allowed Ips List', name: 'smppAllowedIPsListGet', value: 'smppAllowedIPsListGet', action: 'GET /sms/{serviceName}/smpp/allowedIPs' },
			{ displayName: 'Smpp Allowed Ips Update Put', name: 'smppAllowedIPsUpdatePut', value: 'smppAllowedIPsUpdatePut', action: 'PUT /sms/{serviceName}/smpp/allowedIPs' },
			{ displayName: 'Smpp Password Post', name: 'smppPasswordPost', value: 'smppPasswordPost', action: 'POST /sms/{serviceName}/smpp/password' },
			{ displayName: 'Smpp Settings', name: 'smppSettingsGet', value: 'smppSettingsGet', action: 'GET /sms/{serviceName}/smpp/settings' },
			{ displayName: 'Send SMS', name: 'smsCreatePost', value: 'smsCreatePost' },
			{ displayName: 'Delete SMS Service', name: 'smsDeleteDelete', value: 'smsDeleteDelete' },
			{ displayName: 'Get SMS Service', name: 'smsGetGet', value: 'smsGetGet' },
			{ displayName: 'List SMS Services', name: 'smsListGet', value: 'smsListGet' },
			{ displayName: 'List SMS Recipients', name: 'smsRecipientListGet', value: 'smsRecipientListGet' },
			{ displayName: 'Get SMS Task', name: 'smsTaskGetGet', value: 'smsTaskGetGet' },
			{ displayName: 'List SMS Tasks', name: 'smsTaskListGet', value: 'smsTaskListGet' },
			{ displayName: 'Sms Update Put', name: 'smsUpdatePut', value: 'smsUpdatePut', action: 'PUT /sms/{serviceName}' },
			{ displayName: 'Templates Control Create Post', name: 'templatesControlCreatePost', value: 'templatesControlCreatePost', action: 'POST /sms/{serviceName}/templatesControl' },
			{ displayName: 'Templates Control Delete Delete', name: 'templatesControlDeleteDelete', value: 'templatesControlDeleteDelete', action: 'DELETE /sms/{serviceName}/templatesControl/{name}' },
			{ displayName: 'Templates Control Get', name: 'templatesControlGetGet', value: 'templatesControlGetGet', action: 'GET /sms/{serviceName}/templatesControl/{name}' },
			{ displayName: 'Templates Control List', name: 'templatesControlListGet', value: 'templatesControlListGet', action: 'GET /sms/{serviceName}/templatesControl' },
			{ displayName: 'Templates Control Relaunch Validation Post', name: 'templatesControlRelaunchValidationPost', value: 'templatesControlRelaunchValidationPost', action: 'POST /sms/{serviceName}/templatesControl/{name}/relaunchValidation' },
			{ displayName: 'Templates Control Update Put', name: 'templatesControlUpdatePut', value: 'templatesControlUpdatePut', action: 'PUT /sms/{serviceName}/templatesControl/{name}' },
			{ displayName: 'Top Virtual Numbers', name: 'topVirtualNumbersGet', value: 'topVirtualNumbersGet', action: 'GET /sms/virtualNumbers/{number}/serviceInfos' },
			{ displayName: 'Top Virtual Numbers Get', name: 'topVirtualNumbersGetGet', value: 'topVirtualNumbersGetGet', action: 'GET /sms/virtualNumbers/{number}' },
			{ displayName: 'Top Virtual Numbers List', name: 'topVirtualNumbersListGet', value: 'topVirtualNumbersListGet', action: 'GET /sms/virtualNumbers' },
			{ displayName: 'Top Virtual Numbers Update Put', name: 'topVirtualNumbersUpdatePut', value: 'topVirtualNumbersUpdatePut', action: 'PUT /sms/virtualNumbers/{number}/serviceInfos' },
			{ displayName: 'Transfer Credits Post', name: 'transferCreditsPost', value: 'transferCreditsPost', action: 'POST /sms/{serviceName}/transferCredits' },
			{ displayName: 'Users Create Post', name: 'usersCreatePost', value: 'usersCreatePost', action: 'POST /sms/{serviceName}/users' },
			{ displayName: 'Users Delete Delete', name: 'usersDeleteDelete', value: 'usersDeleteDelete', action: 'DELETE /sms/{serviceName}/users/{login}' },
			{ displayName: 'Users Document', name: 'usersDocumentGet', value: 'usersDocumentGet', action: 'GET /sms/{serviceName}/users/{login}/document' },
			{ displayName: 'Users Get', name: 'usersGetGet', value: 'usersGetGet', action: 'GET /sms/{serviceName}/users/{login}' },
			{ displayName: 'Users Incoming Delete Delete', name: 'usersIncomingDeleteDelete', value: 'usersIncomingDeleteDelete', action: 'DELETE /sms/{serviceName}/users/{login}/incoming/{id}' },
			{ displayName: 'Users Incoming Get', name: 'usersIncomingGetGet', value: 'usersIncomingGetGet', action: 'GET /sms/{serviceName}/users/{login}/incoming/{id}' },
			{ displayName: 'Users Incoming List', name: 'usersIncomingListGet', value: 'usersIncomingListGet', action: 'GET /sms/{serviceName}/users/{login}/incoming' },
			{ displayName: 'Users Jobs Delete Delete', name: 'usersJobsDeleteDelete', value: 'usersJobsDeleteDelete', action: 'DELETE /sms/{serviceName}/users/{login}/jobs/{id}' },
			{ displayName: 'Users Jobs Get', name: 'usersJobsGetGet', value: 'usersJobsGetGet', action: 'GET /sms/{serviceName}/users/{login}/jobs/{id}' },
			{ displayName: 'Users Jobs List', name: 'usersJobsListGet', value: 'usersJobsListGet', action: 'GET /sms/{serviceName}/users/{login}/jobs' },
			{ displayName: 'Users Jobs Send Post', name: 'usersJobsSendPost', value: 'usersJobsSendPost', action: 'POST /sms/{serviceName}/users/{login}/jobs' },
			{ displayName: 'Users List', name: 'usersListGet', value: 'usersListGet', action: 'GET /sms/{serviceName}/users' },
			{ displayName: 'Users Outgoing Delete Delete', name: 'usersOutgoingDeleteDelete', value: 'usersOutgoingDeleteDelete', action: 'DELETE /sms/{serviceName}/users/{login}/outgoing/{id}' },
			{ displayName: 'Users Outgoing Get', name: 'usersOutgoingGetGet', value: 'usersOutgoingGetGet', action: 'GET /sms/{serviceName}/users/{login}/outgoing/{id}' },
			{ displayName: 'Users Outgoing Hlr', name: 'usersOutgoingHlrGet', value: 'usersOutgoingHlrGet', action: 'GET /sms/{serviceName}/users/{login}/outgoing/{id}/hlr' },
			{ displayName: 'Users Outgoing List', name: 'usersOutgoingListGet', value: 'usersOutgoingListGet', action: 'GET /sms/{serviceName}/users/{login}/outgoing' },
			{ displayName: 'Users Receivers Clean Post', name: 'usersReceiversCleanPost', value: 'usersReceiversCleanPost', action: 'POST /sms/{serviceName}/users/{login}/receivers/{slotId}/clean' },
			{ displayName: 'Users Receivers Create Post', name: 'usersReceiversCreatePost', value: 'usersReceiversCreatePost', action: 'POST /sms/{serviceName}/users/{login}/receivers' },
			{ displayName: 'Users Receivers Csv', name: 'usersReceiversCsvGet', value: 'usersReceiversCsvGet', action: 'GET /sms/{serviceName}/users/{login}/receivers/{slotId}/csv' },
			{ displayName: 'Users Receivers Delete Delete', name: 'usersReceiversDeleteDelete', value: 'usersReceiversDeleteDelete', action: 'DELETE /sms/{serviceName}/users/{login}/receivers/{slotId}' },
			{ displayName: 'Users Receivers Get', name: 'usersReceiversGetGet', value: 'usersReceiversGetGet', action: 'GET /sms/{serviceName}/users/{login}/receivers/{slotId}' },
			{ displayName: 'Users Receivers List', name: 'usersReceiversListGet', value: 'usersReceiversListGet', action: 'GET /sms/{serviceName}/users/{login}/receivers' },
			{ displayName: 'Users Receivers Update Put', name: 'usersReceiversUpdatePut', value: 'usersReceiversUpdatePut', action: 'PUT /sms/{serviceName}/users/{login}/receivers/{slotId}' },
			{ displayName: 'Users Update Put', name: 'usersUpdatePut', value: 'usersUpdatePut', action: 'PUT /sms/{serviceName}/users/{login}' },
			{ displayName: 'Virtual Numbers Chat Access Delete', name: 'virtualNumbersChatAccessDelete', value: 'virtualNumbersChatAccessDelete', action: 'DELETE /sms/{serviceName}/virtualNumbers/{number}/chatAccess' },
			{ displayName: 'Virtual Numbers Chat Access', name: 'virtualNumbersChatAccessGet', value: 'virtualNumbersChatAccessGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}/chatAccess' },
			{ displayName: 'Virtual Numbers Chat Access Post', name: 'virtualNumbersChatAccessPost', value: 'virtualNumbersChatAccessPost', action: 'POST /sms/{serviceName}/virtualNumbers/{number}/chatAccess' },
			{ displayName: 'Virtual Numbers Get', name: 'virtualNumbersGetGet', value: 'virtualNumbersGetGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}' },
			{ displayName: 'Virtual Numbers Incoming Delete Delete', name: 'virtualNumbersIncomingDeleteDelete', value: 'virtualNumbersIncomingDeleteDelete', action: 'DELETE /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' },
			{ displayName: 'Virtual Numbers Incoming Get', name: 'virtualNumbersIncomingGetGet', value: 'virtualNumbersIncomingGetGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}/incoming/{id}' },
			{ displayName: 'Virtual Numbers Incoming List', name: 'virtualNumbersIncomingListGet', value: 'virtualNumbersIncomingListGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}/incoming' },
			{ displayName: 'Virtual Numbers Jobs Delete Delete', name: 'virtualNumbersJobsDeleteDelete', value: 'virtualNumbersJobsDeleteDelete', action: 'DELETE /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' },
			{ displayName: 'Virtual Numbers Jobs Get', name: 'virtualNumbersJobsGetGet', value: 'virtualNumbersJobsGetGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}/jobs/{id}' },
			{ displayName: 'Virtual Numbers Jobs List', name: 'virtualNumbersJobsListGet', value: 'virtualNumbersJobsListGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}/jobs' },
			{ displayName: 'Virtual Numbers Jobs Send Post', name: 'virtualNumbersJobsSendPost', value: 'virtualNumbersJobsSendPost', action: 'POST /sms/{serviceName}/virtualNumbers/{number}/jobs' },
			{ displayName: 'Virtual Numbers List', name: 'virtualNumbersListGet', value: 'virtualNumbersListGet', action: 'GET /sms/{serviceName}/virtualNumbers' },
			{ displayName: 'Virtual Numbers Outgoing Delete Delete', name: 'virtualNumbersOutgoingDeleteDelete', value: 'virtualNumbersOutgoingDeleteDelete', action: 'DELETE /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' },
			{ displayName: 'Virtual Numbers Outgoing Get', name: 'virtualNumbersOutgoingGetGet', value: 'virtualNumbersOutgoingGetGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}' },
			{ displayName: 'Virtual Numbers Outgoing Hlr', name: 'virtualNumbersOutgoingHlrGet', value: 'virtualNumbersOutgoingHlrGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}/outgoing/{id}/hlr' },
			{ displayName: 'Virtual Numbers Outgoing List', name: 'virtualNumbersOutgoingListGet', value: 'virtualNumbersOutgoingListGet', action: 'GET /sms/{serviceName}/virtualNumbers/{number}/outgoing' },
		],
	});

	properties.push(...descriptionSmsListGet({
		...displayOptions,
		show: { smsOperation: ['smsListGet'] },
	}));
	properties.push(...descriptionSmsCreatePost({
		...displayOptions,
		show: { smsOperation: ['smsCreatePost'] },
	}));
	properties.push(...descriptionSmsGetGet({
		...displayOptions,
		show: { smsOperation: ['smsGetGet'] },
	}));
	properties.push(...descriptionSmsDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['smsDeleteDelete'] },
	}));
	properties.push(...descriptionSmsRecipientListGet({
		...displayOptions,
		show: { smsOperation: ['smsRecipientListGet'] },
	}));
	properties.push(...descriptionSmsTaskListGet({
		...displayOptions,
		show: { smsOperation: ['smsTaskListGet'] },
	}));
	properties.push(...descriptionSmsTaskGetGet({
		...displayOptions,
		show: { smsOperation: ['smsTaskGetGet'] },
	}));
	properties.push(...descriptionBlacklistListGet({
		...displayOptions,
		show: { smsOperation: ['blacklistListGet'] },
	}));
	properties.push(...descriptionBlacklistCreatePost({
		...displayOptions,
		show: { smsOperation: ['blacklistCreatePost'] },
	}));
	properties.push(...descriptionBlacklistDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['blacklistDeleteDelete'] },
	}));
	properties.push(...descriptionBlacklistGetGet({
		...displayOptions,
		show: { smsOperation: ['blacklistGetGet'] },
	}));
	properties.push(...descriptionEstimatePost({
		...displayOptions,
		show: { smsOperation: ['estimatePost'] },
	}));
	properties.push(...descriptionPttsGet({
		...displayOptions,
		show: { smsOperation: ['pttsGet'] },
	}));
	properties.push(...descriptionRatesDestinationsGet({
		...displayOptions,
		show: { smsOperation: ['ratesDestinationsGet'] },
	}));
	properties.push(...descriptionRatesPacksGet({
		...displayOptions,
		show: { smsOperation: ['ratesPacksGet'] },
	}));
	properties.push(...descriptionTopVirtualNumbersListGet({
		...displayOptions,
		show: { smsOperation: ['topVirtualNumbersListGet'] },
	}));
	properties.push(...descriptionTopVirtualNumbersGetGet({
		...displayOptions,
		show: { smsOperation: ['topVirtualNumbersGetGet'] },
	}));
	properties.push(...descriptionTopVirtualNumbersGet({
		...displayOptions,
		show: { smsOperation: ['topVirtualNumbersGet'] },
	}));
	properties.push(...descriptionTopVirtualNumbersUpdatePut({
		...displayOptions,
		show: { smsOperation: ['topVirtualNumbersUpdatePut'] },
	}));
	properties.push(...descriptionSmsUpdatePut({
		...displayOptions,
		show: { smsOperation: ['smsUpdatePut'] },
	}));
	properties.push(...descriptionBatchesListGet({
		...displayOptions,
		show: { smsOperation: ['batchesListGet'] },
	}));
	properties.push(...descriptionBatchesCreatePost({
		...displayOptions,
		show: { smsOperation: ['batchesCreatePost'] },
	}));
	properties.push(...descriptionBatchesDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['batchesDeleteDelete'] },
	}));
	properties.push(...descriptionBatchesGetGet({
		...displayOptions,
		show: { smsOperation: ['batchesGetGet'] },
	}));
	properties.push(...descriptionBatchesUpdatePut({
		...displayOptions,
		show: { smsOperation: ['batchesUpdatePut'] },
	}));
	properties.push(...descriptionBatchesCancelPost({
		...displayOptions,
		show: { smsOperation: ['batchesCancelPost'] },
	}));
	properties.push(...descriptionBatchesStatisticsGet({
		...displayOptions,
		show: { smsOperation: ['batchesStatisticsGet'] },
	}));
	properties.push(...descriptionDocumentGet({
		...displayOptions,
		show: { smsOperation: ['documentGet'] },
	}));
	properties.push(...descriptionExceptionsListGet({
		...displayOptions,
		show: { smsOperation: ['exceptionsListGet'] },
	}));
	properties.push(...descriptionHlrListGet({
		...displayOptions,
		show: { smsOperation: ['hlrListGet'] },
	}));
	properties.push(...descriptionHlrCreatePost({
		...displayOptions,
		show: { smsOperation: ['hlrCreatePost'] },
	}));
	properties.push(...descriptionHlrGetGet({
		...displayOptions,
		show: { smsOperation: ['hlrGetGet'] },
	}));
	properties.push(...descriptionHlrOperatorGet({
		...displayOptions,
		show: { smsOperation: ['hlrOperatorGet'] },
	}));
	properties.push(...descriptionIncomingListGet({
		...displayOptions,
		show: { smsOperation: ['incomingListGet'] },
	}));
	properties.push(...descriptionIncomingDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['incomingDeleteDelete'] },
	}));
	properties.push(...descriptionIncomingGetGet({
		...displayOptions,
		show: { smsOperation: ['incomingGetGet'] },
	}));
	properties.push(...descriptionJobsListGet({
		...displayOptions,
		show: { smsOperation: ['jobsListGet'] },
	}));
	properties.push(...descriptionJobsDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['jobsDeleteDelete'] },
	}));
	properties.push(...descriptionJobsGetGet({
		...displayOptions,
		show: { smsOperation: ['jobsGetGet'] },
	}));
	properties.push(...descriptionOutgoingListGet({
		...displayOptions,
		show: { smsOperation: ['outgoingListGet'] },
	}));
	properties.push(...descriptionOutgoingDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['outgoingDeleteDelete'] },
	}));
	properties.push(...descriptionOutgoingGetGet({
		...displayOptions,
		show: { smsOperation: ['outgoingGetGet'] },
	}));
	properties.push(...descriptionOutgoingHlrGet({
		...displayOptions,
		show: { smsOperation: ['outgoingHlrGet'] },
	}));
	properties.push(...descriptionPhonebooksListGet({
		...displayOptions,
		show: { smsOperation: ['phonebooksListGet'] },
	}));
	properties.push(...descriptionPhonebooksCreatePost({
		...displayOptions,
		show: { smsOperation: ['phonebooksCreatePost'] },
	}));
	properties.push(...descriptionPhonebooksDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['phonebooksDeleteDelete'] },
	}));
	properties.push(...descriptionPhonebooksGetGet({
		...displayOptions,
		show: { smsOperation: ['phonebooksGetGet'] },
	}));
	properties.push(...descriptionPhonebooksUpdatePut({
		...displayOptions,
		show: { smsOperation: ['phonebooksUpdatePut'] },
	}));
	properties.push(...descriptionPhonebooksExportGet({
		...displayOptions,
		show: { smsOperation: ['phonebooksExportGet'] },
	}));
	properties.push(...descriptionPhonebooksImportPost({
		...displayOptions,
		show: { smsOperation: ['phonebooksImportPost'] },
	}));
	properties.push(...descriptionPhonebooksPhonebookContactListGet({
		...displayOptions,
		show: { smsOperation: ['phonebooksPhonebookContactListGet'] },
	}));
	properties.push(...descriptionPhonebooksPhonebookContactCreatePost({
		...displayOptions,
		show: { smsOperation: ['phonebooksPhonebookContactCreatePost'] },
	}));
	properties.push(...descriptionPhonebooksPhonebookContactDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['phonebooksPhonebookContactDeleteDelete'] },
	}));
	properties.push(...descriptionPhonebooksPhonebookContactGetGet({
		...displayOptions,
		show: { smsOperation: ['phonebooksPhonebookContactGetGet'] },
	}));
	properties.push(...descriptionPhonebooksPhonebookContactUpdatePut({
		...displayOptions,
		show: { smsOperation: ['phonebooksPhonebookContactUpdatePut'] },
	}));
	properties.push(...descriptionReceiversCreatePost({
		...displayOptions,
		show: { smsOperation: ['receiversCreatePost'] },
	}));
	properties.push(...descriptionReceiversDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['receiversDeleteDelete'] },
	}));
	properties.push(...descriptionReceiversGetGet({
		...displayOptions,
		show: { smsOperation: ['receiversGetGet'] },
	}));
	properties.push(...descriptionReceiversUpdatePut({
		...displayOptions,
		show: { smsOperation: ['receiversUpdatePut'] },
	}));
	properties.push(...descriptionReceiversCleanPost({
		...displayOptions,
		show: { smsOperation: ['receiversCleanPost'] },
	}));
	properties.push(...descriptionReceiversCsvGet({
		...displayOptions,
		show: { smsOperation: ['receiversCsvGet'] },
	}));
	properties.push(...descriptionSeeOffersGet({
		...displayOptions,
		show: { smsOperation: ['seeOffersGet'] },
	}));
	properties.push(...descriptionSendersListGet({
		...displayOptions,
		show: { smsOperation: ['sendersListGet'] },
	}));
	properties.push(...descriptionSendersCreatePost({
		...displayOptions,
		show: { smsOperation: ['sendersCreatePost'] },
	}));
	properties.push(...descriptionSendersDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['sendersDeleteDelete'] },
	}));
	properties.push(...descriptionSendersGetGet({
		...displayOptions,
		show: { smsOperation: ['sendersGetGet'] },
	}));
	properties.push(...descriptionSendersUpdatePut({
		...displayOptions,
		show: { smsOperation: ['sendersUpdatePut'] },
	}));
	properties.push(...descriptionSendersDocumentsListGet({
		...displayOptions,
		show: { smsOperation: ['sendersDocumentsListGet'] },
	}));
	properties.push(...descriptionSendersDocumentsPost({
		...displayOptions,
		show: { smsOperation: ['sendersDocumentsPost'] },
	}));
	properties.push(...descriptionSendersDocumentsGetGet({
		...displayOptions,
		show: { smsOperation: ['sendersDocumentsGetGet'] },
	}));
	properties.push(...descriptionSendersDocumentsUpdatePut({
		...displayOptions,
		show: { smsOperation: ['sendersDocumentsUpdatePut'] },
	}));
	properties.push(...descriptionSendersValidatePost({
		...displayOptions,
		show: { smsOperation: ['sendersValidatePost'] },
	}));
	properties.push(...descriptionSendersAvailableForValidationGet({
		...displayOptions,
		show: { smsOperation: ['sendersAvailableForValidationGet'] },
	}));
	properties.push(...descriptionServiceInfosGet({
		...displayOptions,
		show: { smsOperation: ['serviceInfosGet'] },
	}));
	properties.push(...descriptionServiceInfosUpdatePut({
		...displayOptions,
		show: { smsOperation: ['serviceInfosUpdatePut'] },
	}));
	properties.push(...descriptionSmppAllowedIPsListGet({
		...displayOptions,
		show: { smsOperation: ['smppAllowedIPsListGet'] },
	}));
	properties.push(...descriptionSmppAllowedIPsUpdatePut({
		...displayOptions,
		show: { smsOperation: ['smppAllowedIPsUpdatePut'] },
	}));
	properties.push(...descriptionSmppPasswordPost({
		...displayOptions,
		show: { smsOperation: ['smppPasswordPost'] },
	}));
	properties.push(...descriptionSmppSettingsGet({
		...displayOptions,
		show: { smsOperation: ['smppSettingsGet'] },
	}));
	properties.push(...descriptionTemplatesControlListGet({
		...displayOptions,
		show: { smsOperation: ['templatesControlListGet'] },
	}));
	properties.push(...descriptionTemplatesControlCreatePost({
		...displayOptions,
		show: { smsOperation: ['templatesControlCreatePost'] },
	}));
	properties.push(...descriptionTemplatesControlDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['templatesControlDeleteDelete'] },
	}));
	properties.push(...descriptionTemplatesControlGetGet({
		...displayOptions,
		show: { smsOperation: ['templatesControlGetGet'] },
	}));
	properties.push(...descriptionTemplatesControlUpdatePut({
		...displayOptions,
		show: { smsOperation: ['templatesControlUpdatePut'] },
	}));
	properties.push(...descriptionTemplatesControlRelaunchValidationPost({
		...displayOptions,
		show: { smsOperation: ['templatesControlRelaunchValidationPost'] },
	}));
	properties.push(...descriptionTransferCreditsPost({
		...displayOptions,
		show: { smsOperation: ['transferCreditsPost'] },
	}));
	properties.push(...descriptionUsersListGet({
		...displayOptions,
		show: { smsOperation: ['usersListGet'] },
	}));
	properties.push(...descriptionUsersCreatePost({
		...displayOptions,
		show: { smsOperation: ['usersCreatePost'] },
	}));
	properties.push(...descriptionUsersDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['usersDeleteDelete'] },
	}));
	properties.push(...descriptionUsersGetGet({
		...displayOptions,
		show: { smsOperation: ['usersGetGet'] },
	}));
	properties.push(...descriptionUsersUpdatePut({
		...displayOptions,
		show: { smsOperation: ['usersUpdatePut'] },
	}));
	properties.push(...descriptionUsersDocumentGet({
		...displayOptions,
		show: { smsOperation: ['usersDocumentGet'] },
	}));
	properties.push(...descriptionUsersIncomingListGet({
		...displayOptions,
		show: { smsOperation: ['usersIncomingListGet'] },
	}));
	properties.push(...descriptionUsersIncomingDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['usersIncomingDeleteDelete'] },
	}));
	properties.push(...descriptionUsersIncomingGetGet({
		...displayOptions,
		show: { smsOperation: ['usersIncomingGetGet'] },
	}));
	properties.push(...descriptionUsersJobsListGet({
		...displayOptions,
		show: { smsOperation: ['usersJobsListGet'] },
	}));
	properties.push(...descriptionUsersJobsSendPost({
		...displayOptions,
		show: { smsOperation: ['usersJobsSendPost'] },
	}));
	properties.push(...descriptionUsersJobsDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['usersJobsDeleteDelete'] },
	}));
	properties.push(...descriptionUsersJobsGetGet({
		...displayOptions,
		show: { smsOperation: ['usersJobsGetGet'] },
	}));
	properties.push(...descriptionUsersOutgoingListGet({
		...displayOptions,
		show: { smsOperation: ['usersOutgoingListGet'] },
	}));
	properties.push(...descriptionUsersOutgoingDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['usersOutgoingDeleteDelete'] },
	}));
	properties.push(...descriptionUsersOutgoingGetGet({
		...displayOptions,
		show: { smsOperation: ['usersOutgoingGetGet'] },
	}));
	properties.push(...descriptionUsersOutgoingHlrGet({
		...displayOptions,
		show: { smsOperation: ['usersOutgoingHlrGet'] },
	}));
	properties.push(...descriptionUsersReceiversListGet({
		...displayOptions,
		show: { smsOperation: ['usersReceiversListGet'] },
	}));
	properties.push(...descriptionUsersReceiversCreatePost({
		...displayOptions,
		show: { smsOperation: ['usersReceiversCreatePost'] },
	}));
	properties.push(...descriptionUsersReceiversDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['usersReceiversDeleteDelete'] },
	}));
	properties.push(...descriptionUsersReceiversGetGet({
		...displayOptions,
		show: { smsOperation: ['usersReceiversGetGet'] },
	}));
	properties.push(...descriptionUsersReceiversUpdatePut({
		...displayOptions,
		show: { smsOperation: ['usersReceiversUpdatePut'] },
	}));
	properties.push(...descriptionUsersReceiversCleanPost({
		...displayOptions,
		show: { smsOperation: ['usersReceiversCleanPost'] },
	}));
	properties.push(...descriptionUsersReceiversCsvGet({
		...displayOptions,
		show: { smsOperation: ['usersReceiversCsvGet'] },
	}));
	properties.push(...descriptionVirtualNumbersListGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersListGet'] },
	}));
	properties.push(...descriptionVirtualNumbersGetGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersGetGet'] },
	}));
	properties.push(...descriptionVirtualNumbersChatAccessDelete({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersChatAccessDelete'] },
	}));
	properties.push(...descriptionVirtualNumbersChatAccessGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersChatAccessGet'] },
	}));
	properties.push(...descriptionVirtualNumbersChatAccessPost({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersChatAccessPost'] },
	}));
	properties.push(...descriptionVirtualNumbersIncomingListGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersIncomingListGet'] },
	}));
	properties.push(...descriptionVirtualNumbersIncomingDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersIncomingDeleteDelete'] },
	}));
	properties.push(...descriptionVirtualNumbersIncomingGetGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersIncomingGetGet'] },
	}));
	properties.push(...descriptionVirtualNumbersJobsListGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersJobsListGet'] },
	}));
	properties.push(...descriptionVirtualNumbersJobsSendPost({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersJobsSendPost'] },
	}));
	properties.push(...descriptionVirtualNumbersJobsDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersJobsDeleteDelete'] },
	}));
	properties.push(...descriptionVirtualNumbersJobsGetGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersJobsGetGet'] },
	}));
	properties.push(...descriptionVirtualNumbersOutgoingListGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersOutgoingListGet'] },
	}));
	properties.push(...descriptionVirtualNumbersOutgoingDeleteDelete({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersOutgoingDeleteDelete'] },
	}));
	properties.push(...descriptionVirtualNumbersOutgoingGetGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersOutgoingGetGet'] },
	}));
	properties.push(...descriptionVirtualNumbersOutgoingHlrGet({
		...displayOptions,
		show: { smsOperation: ['virtualNumbersOutgoingHlrGet'] },
	}));

	return properties;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('smsOperation', 0) as string;

	switch (operation) {
		case 'smsListGet':
			return executeSmsListGet.call(this);
		case 'smsCreatePost':
			return executeSmsCreatePost.call(this);
		case 'smsGetGet':
			return executeSmsGetGet.call(this);
		case 'smsDeleteDelete':
			return executeSmsDeleteDelete.call(this);
		case 'smsRecipientListGet':
			return executeSmsRecipientListGet.call(this);
		case 'smsTaskListGet':
			return executeSmsTaskListGet.call(this);
		case 'smsTaskGetGet':
			return executeSmsTaskGetGet.call(this);
		case 'blacklistListGet':
			return executeBlacklistListGet.call(this);
		case 'blacklistCreatePost':
			return executeBlacklistCreatePost.call(this);
		case 'blacklistDeleteDelete':
			return executeBlacklistDeleteDelete.call(this);
		case 'blacklistGetGet':
			return executeBlacklistGetGet.call(this);
		case 'estimatePost':
			return executeEstimatePost.call(this);
		case 'pttsGet':
			return executePttsGet.call(this);
		case 'ratesDestinationsGet':
			return executeRatesDestinationsGet.call(this);
		case 'ratesPacksGet':
			return executeRatesPacksGet.call(this);
		case 'topVirtualNumbersListGet':
			return executeTopVirtualNumbersListGet.call(this);
		case 'topVirtualNumbersGetGet':
			return executeTopVirtualNumbersGetGet.call(this);
		case 'topVirtualNumbersGet':
			return executeTopVirtualNumbersGet.call(this);
		case 'topVirtualNumbersUpdatePut':
			return executeTopVirtualNumbersUpdatePut.call(this);
		case 'smsUpdatePut':
			return executeSmsUpdatePut.call(this);
		case 'batchesListGet':
			return executeBatchesListGet.call(this);
		case 'batchesCreatePost':
			return executeBatchesCreatePost.call(this);
		case 'batchesDeleteDelete':
			return executeBatchesDeleteDelete.call(this);
		case 'batchesGetGet':
			return executeBatchesGetGet.call(this);
		case 'batchesUpdatePut':
			return executeBatchesUpdatePut.call(this);
		case 'batchesCancelPost':
			return executeBatchesCancelPost.call(this);
		case 'batchesStatisticsGet':
			return executeBatchesStatisticsGet.call(this);
		case 'documentGet':
			return executeDocumentGet.call(this);
		case 'exceptionsListGet':
			return executeExceptionsListGet.call(this);
		case 'hlrListGet':
			return executeHlrListGet.call(this);
		case 'hlrCreatePost':
			return executeHlrCreatePost.call(this);
		case 'hlrGetGet':
			return executeHlrGetGet.call(this);
		case 'hlrOperatorGet':
			return executeHlrOperatorGet.call(this);
		case 'incomingListGet':
			return executeIncomingListGet.call(this);
		case 'incomingDeleteDelete':
			return executeIncomingDeleteDelete.call(this);
		case 'incomingGetGet':
			return executeIncomingGetGet.call(this);
		case 'jobsListGet':
			return executeJobsListGet.call(this);
		case 'jobsDeleteDelete':
			return executeJobsDeleteDelete.call(this);
		case 'jobsGetGet':
			return executeJobsGetGet.call(this);
		case 'outgoingListGet':
			return executeOutgoingListGet.call(this);
		case 'outgoingDeleteDelete':
			return executeOutgoingDeleteDelete.call(this);
		case 'outgoingGetGet':
			return executeOutgoingGetGet.call(this);
		case 'outgoingHlrGet':
			return executeOutgoingHlrGet.call(this);
		case 'phonebooksListGet':
			return executePhonebooksListGet.call(this);
		case 'phonebooksCreatePost':
			return executePhonebooksCreatePost.call(this);
		case 'phonebooksDeleteDelete':
			return executePhonebooksDeleteDelete.call(this);
		case 'phonebooksGetGet':
			return executePhonebooksGetGet.call(this);
		case 'phonebooksUpdatePut':
			return executePhonebooksUpdatePut.call(this);
		case 'phonebooksExportGet':
			return executePhonebooksExportGet.call(this);
		case 'phonebooksImportPost':
			return executePhonebooksImportPost.call(this);
		case 'phonebooksPhonebookContactListGet':
			return executePhonebooksPhonebookContactListGet.call(this);
		case 'phonebooksPhonebookContactCreatePost':
			return executePhonebooksPhonebookContactCreatePost.call(this);
		case 'phonebooksPhonebookContactDeleteDelete':
			return executePhonebooksPhonebookContactDeleteDelete.call(this);
		case 'phonebooksPhonebookContactGetGet':
			return executePhonebooksPhonebookContactGetGet.call(this);
		case 'phonebooksPhonebookContactUpdatePut':
			return executePhonebooksPhonebookContactUpdatePut.call(this);
		case 'receiversCreatePost':
			return executeReceiversCreatePost.call(this);
		case 'receiversDeleteDelete':
			return executeReceiversDeleteDelete.call(this);
		case 'receiversGetGet':
			return executeReceiversGetGet.call(this);
		case 'receiversUpdatePut':
			return executeReceiversUpdatePut.call(this);
		case 'receiversCleanPost':
			return executeReceiversCleanPost.call(this);
		case 'receiversCsvGet':
			return executeReceiversCsvGet.call(this);
		case 'seeOffersGet':
			return executeSeeOffersGet.call(this);
		case 'sendersListGet':
			return executeSendersListGet.call(this);
		case 'sendersCreatePost':
			return executeSendersCreatePost.call(this);
		case 'sendersDeleteDelete':
			return executeSendersDeleteDelete.call(this);
		case 'sendersGetGet':
			return executeSendersGetGet.call(this);
		case 'sendersUpdatePut':
			return executeSendersUpdatePut.call(this);
		case 'sendersDocumentsListGet':
			return executeSendersDocumentsListGet.call(this);
		case 'sendersDocumentsPost':
			return executeSendersDocumentsPost.call(this);
		case 'sendersDocumentsGetGet':
			return executeSendersDocumentsGetGet.call(this);
		case 'sendersDocumentsUpdatePut':
			return executeSendersDocumentsUpdatePut.call(this);
		case 'sendersValidatePost':
			return executeSendersValidatePost.call(this);
		case 'sendersAvailableForValidationGet':
			return executeSendersAvailableForValidationGet.call(this);
		case 'serviceInfosGet':
			return executeServiceInfosGet.call(this);
		case 'serviceInfosUpdatePut':
			return executeServiceInfosUpdatePut.call(this);
		case 'smppAllowedIPsListGet':
			return executeSmppAllowedIPsListGet.call(this);
		case 'smppAllowedIPsUpdatePut':
			return executeSmppAllowedIPsUpdatePut.call(this);
		case 'smppPasswordPost':
			return executeSmppPasswordPost.call(this);
		case 'smppSettingsGet':
			return executeSmppSettingsGet.call(this);
		case 'templatesControlListGet':
			return executeTemplatesControlListGet.call(this);
		case 'templatesControlCreatePost':
			return executeTemplatesControlCreatePost.call(this);
		case 'templatesControlDeleteDelete':
			return executeTemplatesControlDeleteDelete.call(this);
		case 'templatesControlGetGet':
			return executeTemplatesControlGetGet.call(this);
		case 'templatesControlUpdatePut':
			return executeTemplatesControlUpdatePut.call(this);
		case 'templatesControlRelaunchValidationPost':
			return executeTemplatesControlRelaunchValidationPost.call(this);
		case 'transferCreditsPost':
			return executeTransferCreditsPost.call(this);
		case 'usersListGet':
			return executeUsersListGet.call(this);
		case 'usersCreatePost':
			return executeUsersCreatePost.call(this);
		case 'usersDeleteDelete':
			return executeUsersDeleteDelete.call(this);
		case 'usersGetGet':
			return executeUsersGetGet.call(this);
		case 'usersUpdatePut':
			return executeUsersUpdatePut.call(this);
		case 'usersDocumentGet':
			return executeUsersDocumentGet.call(this);
		case 'usersIncomingListGet':
			return executeUsersIncomingListGet.call(this);
		case 'usersIncomingDeleteDelete':
			return executeUsersIncomingDeleteDelete.call(this);
		case 'usersIncomingGetGet':
			return executeUsersIncomingGetGet.call(this);
		case 'usersJobsListGet':
			return executeUsersJobsListGet.call(this);
		case 'usersJobsSendPost':
			return executeUsersJobsSendPost.call(this);
		case 'usersJobsDeleteDelete':
			return executeUsersJobsDeleteDelete.call(this);
		case 'usersJobsGetGet':
			return executeUsersJobsGetGet.call(this);
		case 'usersOutgoingListGet':
			return executeUsersOutgoingListGet.call(this);
		case 'usersOutgoingDeleteDelete':
			return executeUsersOutgoingDeleteDelete.call(this);
		case 'usersOutgoingGetGet':
			return executeUsersOutgoingGetGet.call(this);
		case 'usersOutgoingHlrGet':
			return executeUsersOutgoingHlrGet.call(this);
		case 'usersReceiversListGet':
			return executeUsersReceiversListGet.call(this);
		case 'usersReceiversCreatePost':
			return executeUsersReceiversCreatePost.call(this);
		case 'usersReceiversDeleteDelete':
			return executeUsersReceiversDeleteDelete.call(this);
		case 'usersReceiversGetGet':
			return executeUsersReceiversGetGet.call(this);
		case 'usersReceiversUpdatePut':
			return executeUsersReceiversUpdatePut.call(this);
		case 'usersReceiversCleanPost':
			return executeUsersReceiversCleanPost.call(this);
		case 'usersReceiversCsvGet':
			return executeUsersReceiversCsvGet.call(this);
		case 'virtualNumbersListGet':
			return executeVirtualNumbersListGet.call(this);
		case 'virtualNumbersGetGet':
			return executeVirtualNumbersGetGet.call(this);
		case 'virtualNumbersChatAccessDelete':
			return executeVirtualNumbersChatAccessDelete.call(this);
		case 'virtualNumbersChatAccessGet':
			return executeVirtualNumbersChatAccessGet.call(this);
		case 'virtualNumbersChatAccessPost':
			return executeVirtualNumbersChatAccessPost.call(this);
		case 'virtualNumbersIncomingListGet':
			return executeVirtualNumbersIncomingListGet.call(this);
		case 'virtualNumbersIncomingDeleteDelete':
			return executeVirtualNumbersIncomingDeleteDelete.call(this);
		case 'virtualNumbersIncomingGetGet':
			return executeVirtualNumbersIncomingGetGet.call(this);
		case 'virtualNumbersJobsListGet':
			return executeVirtualNumbersJobsListGet.call(this);
		case 'virtualNumbersJobsSendPost':
			return executeVirtualNumbersJobsSendPost.call(this);
		case 'virtualNumbersJobsDeleteDelete':
			return executeVirtualNumbersJobsDeleteDelete.call(this);
		case 'virtualNumbersJobsGetGet':
			return executeVirtualNumbersJobsGetGet.call(this);
		case 'virtualNumbersOutgoingListGet':
			return executeVirtualNumbersOutgoingListGet.call(this);
		case 'virtualNumbersOutgoingDeleteDelete':
			return executeVirtualNumbersOutgoingDeleteDelete.call(this);
		case 'virtualNumbersOutgoingGetGet':
			return executeVirtualNumbersOutgoingGetGet.call(this);
		case 'virtualNumbersOutgoingHlrGet':
			return executeVirtualNumbersOutgoingHlrGet.call(this);
		default: {
			throw new Error(`No handler for operation '${operation}'`);
		}
	}
}

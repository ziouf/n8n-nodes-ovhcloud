import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as changePasswordPostExecute } from './resources/changePasswordPost.operation';
import { execute as voicemailChangePasswordPostExecute } from './resources/voicemailChangePasswordPost.operation';
import { execute as voicemailChangeRoutingPostExecute } from './resources/voicemailChangeRoutingPost.operation';
import { execute as directoryFetchEntrepriseInformationsPostExecute } from './resources/directoryFetchEntrepriseInformationsPost.operation';
import { execute as creditsGetExecute } from './resources/creditsGet.operation';
import { execute as directoryGetExecute } from './resources/directoryGet.operation';
import { execute as directoryGetDirectoryServiceCodeGetExecute } from './resources/directoryGetDirectoryServiceCodeGet.operation';
import { execute as getExecute } from './resources/get.operation';
import { execute as mainServiceGetExecute } from './resources/mainServiceGet.operation';
import { execute as serviceInfosGetExecute } from './resources/serviceInfosGet.operation';
import { execute as voicemailVoicemailNumbersGetExecute } from './resources/voicemailVoicemailNumbersGet.operation';
import { execute as voicemailGetExecute } from './resources/voicemailGet.operation';
import { execute as voicemailRoutingGetExecute } from './resources/voicemailRoutingGet.operation';
import { execute as directoryGetWayTypesGetExecute } from './resources/directoryGetWayTypesGet.operation';
import { execute as listExecute } from './resources/list.operation';
import { execute as directoryUpdatePutExecute } from './resources/directoryUpdatePut.operation';
import { execute as updatePutExecute } from './resources/updatePut.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/serviceInfosUpdatePut.operation';
import { execute as voicemailUpdatePutExecute } from './resources/voicemailUpdatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'freefaxOperation',
	'freefax',
	[
	{
		name: 'Change Password',
		value: 'changePasswordPost',
		action: 'Generate a new password for a Freefax line account',
		execute: changePasswordPostExecute,
		description: noProps,
	},
	{
		name: 'Change Voicemail Password',
		value: 'voicemailChangePasswordPost',
		action: 'Change the voicemail password of a Freefax line account',
		execute: voicemailChangePasswordPostExecute,
		description: noProps,
	},
	{
		name: 'Change Voicemail Routing',
		value: 'voicemailChangeRoutingPost',
		action: 'Enable or disable voicemail routing for a Freefax line account',
		execute: voicemailChangeRoutingPostExecute,
		description: noProps,
	},
	{
		name: 'Fetch Entreprise Information',
		value: 'directoryFetchEntrepriseInformationsPost',
		action: 'Fetch enterprise information by providing an enterprise number',
		execute: directoryFetchEntrepriseInformationsPostExecute,
		description: noProps,
	},
	{
		name: 'Get Credits',
		value: 'creditsGet',
		action: 'Get credit balance and remaining pages for all Freefax line accounts',
		execute: creditsGetExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Get Directory Information',
		value: 'directoryGet',
		action: 'Get directory information of a Freefax line account',
		execute: directoryGetExecute,
		description: noProps,
	},
	{
		name: 'Get Directory Service Code',
		value: 'directoryGetDirectoryServiceCodeGet',
		action: 'Get directory service code from an APE code',
		execute: directoryGetDirectoryServiceCodeGetExecute,
		description: noProps,
	},
	{
		name: 'Get Freefax',
		value: 'get',
		action: 'Get information about a Freefax line account',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get Main Service',
		value: 'mainServiceGet',
		action: 'Get the main service attached to a Freefax line account',
		execute: mainServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Get service information of a Freefax line account',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get Voicemail Numbers',
		value: 'voicemailVoicemailNumbersGet',
		action: 'Get internal and external voicemail numbers of a Freefax line account',
		execute: voicemailVoicemailNumbersGetExecute,
		description: noProps,
	},
	{
		name: 'Get Voicemail Properties',
		value: 'voicemailGet',
		action: 'Get voicemail properties of a Freefax line account',
		execute: voicemailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Voicemail Routing',
		value: 'voicemailRoutingGet',
		action: 'Get the voicemail routing status of a Freefax line account',
		execute: voicemailRoutingGetExecute,
		description: noProps,
	},
	{
		name: 'Get Way Types',
		value: 'directoryGetWayTypesGet',
		action: 'Get all available way types for a Freefax line account',
		execute: directoryGetWayTypesGetExecute,
		description: noProps,
	},
	{
		name: 'List Freefax Line Accounts',
		value: 'list',
		action: 'List all Freefax line accounts',
		execute: listExecute,
		description: noProps,
	},
	{
		name: 'Update Directory Information',
		value: 'directoryUpdatePut',
		action: 'Update the directory information of a Freefax line account',
		execute: directoryUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'Update Freefax',
		value: 'updatePut',
		action: 'Edit the properties of a Freefax line account',
		execute: updatePutExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update service information of a Freefax line account',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'Update Voicemail Properties',
		value: 'voicemailUpdatePut',
		action: 'Edit voicemail properties of a Freefax line account',
		execute: voicemailUpdatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };

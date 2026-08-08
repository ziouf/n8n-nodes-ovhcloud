import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Freefax operations
import * as list from './resources/list.operation';
import * as creditsGet from './resources/creditsGet.operation';
import * as get from './resources/get.operation';
import * as updatePut from './resources/updatePut.operation';
import * as changePasswordPost from './resources/changePasswordPost.operation';
import * as directoryGet from './resources/directoryGet.operation';
import * as directoryUpdatePut from './resources/directoryUpdatePut.operation';
import * as directoryFetchEntrepriseInformationsPost from './resources/directoryFetchEntrepriseInformationsPost.operation';
import * as directoryGetDirectoryServiceCodeGet from './resources/directoryGetDirectoryServiceCodeGet.operation';
import * as directoryGetWayTypesGet from './resources/directoryGetWayTypesGet.operation';
import * as mainServiceGet from './resources/mainServiceGet.operation';
import * as serviceInfosGet from './resources/serviceInfosGet.operation';
import * as serviceInfosUpdatePut from './resources/serviceInfosUpdatePut.operation';
import * as voicemailGet from './resources/voicemailGet.operation';
import * as voicemailUpdatePut from './resources/voicemailUpdatePut.operation';
import * as voicemailChangePasswordPost from './resources/voicemailChangePasswordPost.operation';
import * as voicemailChangeRoutingPost from './resources/voicemailChangeRoutingPost.operation';
import * as voicemailRoutingGet from './resources/voicemailRoutingGet.operation';
import * as voicemailVoicemailNumbersGet from './resources/voicemailVoicemailNumbersGet.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'freefaxOperation',
		type: 'options',
		noDataExpression: true,
		default: 'creditsGet',
		options: [
			{
				name: 'Change Password',
				value: 'changePasswordPost',
				action: 'Generate a new password for a Freefax line account',
			},
			{
				name: 'Change Voicemail Password',
				value: 'voicemailChangePasswordPost',
				action: 'Change the voicemail password of a Freefax line account',
			},
			{
				name: 'Change Voicemail Routing',
				value: 'voicemailChangeRoutingPost',
				action: 'Enable or disable voicemail routing for a Freefax line account',
			},
			{
				name: 'Fetch Entreprise Information',
				value: 'directoryFetchEntrepriseInformationsPost',
				action: 'Fetch enterprise information by providing an enterprise number',
			},
			{
				name: 'Get Credits',
				value: 'creditsGet',
				action: 'Get credit balance and remaining pages for all Freefax line accounts',
			},
			{
				name: 'Get Directory Information',
				value: 'directoryGet',
				action: 'Get directory information of a Freefax line account',
			},
			{
				name: 'Get Directory Service Code',
				value: 'directoryGetDirectoryServiceCodeGet',
				action: 'Get directory service code from an APE code',
			},
			{
				name: 'Get Freefax',
				value: 'get',
				action: 'Get information about a Freefax line account',
			},
			{
				name: 'Get Main Service',
				value: 'mainServiceGet',
				action: 'Get the main service attached to a Freefax line account',
			},
			{
				name: 'Get Service Information',
				value: 'serviceInfosGet',
				action: 'Get service information of a Freefax line account',
			},
			{
				name: 'Get Voicemail Numbers',
				value: 'voicemailVoicemailNumbersGet',
				action: 'Get internal and external voicemail numbers of a Freefax line account',
			},
			{
				name: 'Get Voicemail Properties',
				value: 'voicemailGet',
				action: 'Get voicemail properties of a Freefax line account',
			},
			{
				name: 'Get Voicemail Routing',
				value: 'voicemailRoutingGet',
				action: 'Get the voicemail routing status of a Freefax line account',
			},
			{
				name: 'Get Way Types',
				value: 'directoryGetWayTypesGet',
				action: 'Get all available way types for a Freefax line account',
			},
			{
				name: 'List Freefax Line Accounts',
				value: 'list',
				action: 'List all Freefax line accounts',
			},
			{
				name: 'Update Directory Information',
				value: 'directoryUpdatePut',
				action: 'Update the directory information of a Freefax line account',
			},
			{
				name: 'Update Freefax',
				value: 'updatePut',
				action: 'Edit the properties of a Freefax line account',
			},
			{
				name: 'Update Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update service information of a Freefax line account',
			},
			{
				name: 'Update Voicemail Properties',
				value: 'voicemailUpdatePut',
				action: 'Edit voicemail properties of a Freefax line account',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('freefaxOperation', 0) as string;

	switch (operation) {
		case 'list':
			return list.execute.call(this);
		case 'creditsGet':
			return creditsGet.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'updatePut':
			return updatePut.execute.call(this);
		case 'changePasswordPost':
			return changePasswordPost.execute.call(this);
		case 'directoryGet':
			return directoryGet.execute.call(this);
		case 'directoryUpdatePut':
			return directoryUpdatePut.execute.call(this);
		case 'directoryFetchEntrepriseInformationsPost':
			return directoryFetchEntrepriseInformationsPost.execute.call(this);
		case 'directoryGetDirectoryServiceCodeGet':
			return directoryGetDirectoryServiceCodeGet.execute.call(this);
		case 'directoryGetWayTypesGet':
			return directoryGetWayTypesGet.execute.call(this);
		case 'mainServiceGet':
			return mainServiceGet.execute.call(this);
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePut.execute.call(this);
		case 'voicemailGet':
			return voicemailGet.execute.call(this);
		case 'voicemailUpdatePut':
			return voicemailUpdatePut.execute.call(this);
		case 'voicemailChangePasswordPost':
			return voicemailChangePasswordPost.execute.call(this);
		case 'voicemailChangeRoutingPost':
			return voicemailChangeRoutingPost.execute.call(this);
		case 'voicemailRoutingGet':
			return voicemailRoutingGet.execute.call(this);
		case 'voicemailVoicemailNumbersGet':
			return voicemailVoicemailNumbersGet.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}

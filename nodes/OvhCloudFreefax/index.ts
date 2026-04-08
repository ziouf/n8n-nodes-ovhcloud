/**
 * @brief Freefax resource operations for n8n node
 *
 * Provides operations for managing OVH Freefax services including:
 * - List all Freefax services for the authenticated account
 * - Get detailed information about a specific Freefax service
 * - Update Freefax service settings
 * - Manage credits, passwords, directory, service infos, and voicemail
 *
 * Available operations:
 * - `list`: List all Freefax services
 * - `get`: Get details of a specific Freefax service
 * - `update`: Update Freefax service settings
 * - `getCredits`: Get Freefax credits
 * - `changePassword`: Change Freefax password
 * - `getDirectory`: Get directory information
 * - `updateDirectory`: Update directory information
 * - `fetchEntrepriseInformations`: Fetch entreprise informations
 * - `getDirectoryServiceCode`: Get directory service code
 * - `getWayTypes`: Get way types
 * - `getMainService`: Get main service
 * - `getServiceInfos`: Get service information
 * - `updateServiceInfos`: Update service information
 * - `getVoicemail`: Get voicemail settings
 * - `updateVoicemail`: Update voicemail settings
 * - `changeVoicemailPassword`: Change voicemail password
 * - `changeVoicemailRouting`: Change voicemail routing
 * - `getVoicemailRouting`: Get voicemail routing
 * - `getVoicemailNumbers`: Get voicemail numbers
 *
 * @remarks
 * Freefax services are managed under `/freefax` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	description as descriptionUpdate,
	execute as executeUpdate,
} from './resources/update/operation';
import {
	description as descriptionGetCredits,
	execute as executeGetCredits,
} from './resources/credits/get.operation';
import {
	description as descriptionChangePassword,
	execute as executeChangePassword,
} from './resources/changePassword/operation';
import {
	description as descriptionGetDirectory,
	execute as executeGetDirectory,
} from './resources/directory/get.operation';
import {
	description as descriptionUpdateDirectory,
	execute as executeUpdateDirectory,
} from './resources/directory/update.operation';
import {
	description as descriptionFetchEntrepriseInformations,
	execute as executeFetchEntrepriseInformations,
} from './resources/directory/fetchEntrepriseInformations.operation';
import {
	description as descriptionGetDirectoryServiceCode,
	execute as executeGetDirectoryServiceCode,
} from './resources/directory/getDirectoryServiceCode.operation';
import {
	description as descriptionGetWayTypes,
	execute as executeGetWayTypes,
} from './resources/directory/getWayTypes.operation';
import {
	description as descriptionGetMainService,
	execute as executeGetMainService,
} from './resources/mainService/get.operation';
import {
	description as descriptionGetServiceInfos,
	execute as executeGetServiceInfos,
} from './resources/serviceInfos/get.operation';
import {
	description as descriptionUpdateServiceInfos,
	execute as executeUpdateServiceInfos,
} from './resources/serviceInfos/update.operation';
import {
	description as descriptionGetVoicemail,
	execute as executeGetVoicemail,
} from './resources/voicemail/get.operation';
import {
	description as descriptionUpdateVoicemail,
	execute as executeUpdateVoicemail,
} from './resources/voicemail/update.operation';
import {
	description as descriptionChangeVoicemailPassword,
	execute as executeChangeVoicemailPassword,
} from './resources/voicemail/changePassword.operation';
import {
	description as descriptionChangeVoicemailRouting,
	execute as executeChangeVoicemailRouting,
} from './resources/voicemail/changeRouting.operation';
import {
	description as descriptionGetVoicemailRouting,
	execute as executeGetVoicemailRouting,
} from './resources/voicemail/getRouting.operation';
import {
	description as descriptionGetVoicemailNumbers,
	execute as executeGetVoicemailNumbers,
} from './resources/voicemail/getVoicemailNumbers.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Freefax Operation',
			name: 'freefaxOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Change Password',
					value: 'changePassword',
					action: 'Change Freefax password',
				},
				{
					name: 'Change Voicemail Password',
					value: 'changeVoicemailPassword',
					action: 'Change voicemail password',
				},
				{
					name: 'Change Voicemail Routing',
					value: 'changeVoicemailRouting',
					action: 'Change voicemail routing',
				},
				{
					name: 'Fetch Entreprise Informations',
					value: 'fetchEntrepriseInformations',
					action: 'Fetch entreprise informations for directory',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Freefax service',
				},
				{
					name: 'Get Credits',
					value: 'getCredits',
					action: 'Get Freefax credits',
				},
				{
					name: 'Get Directory',
					value: 'getDirectory',
					action: 'Get Freefax directory information',
				},
				{
					name: 'Get Directory Service Code',
					value: 'getDirectoryServiceCode',
					action: 'Get directory service code by APE code',
				},
				{
					name: 'Get Main Service',
					value: 'getMainService',
					action: 'Get main service for a Freefax',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information',
				},
				{
					name: 'Get Voicemail',
					value: 'getVoicemail',
					action: 'Get voicemail settings',
				},
				{
					name: 'Get Voicemail Numbers',
					value: 'getVoicemailNumbers',
					action: 'Get voicemail numbers',
				},
				{
					name: 'Get Voicemail Routing',
					value: 'getVoicemailRouting',
					action: 'Get voicemail routing',
				},
				{
					name: 'Get Way Types',
					value: 'getWayTypes',
					action: 'Get available way types for directory',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all Freefax services',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update a Freefax service',
				},
				{
					name: 'Update Directory',
					value: 'updateDirectory',
					action: 'Update Freefax directory information',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information',
				},
				{
					name: 'Update Voicemail',
					value: 'updateVoicemail',
					action: 'Update voicemail settings',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['update'] },
		}),
		...descriptionGetCredits({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getCredits'] },
		}),
		...descriptionChangePassword({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['changePassword'] },
		}),
		...descriptionGetDirectory({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getDirectory'] },
		}),
		...descriptionUpdateDirectory({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['updateDirectory'] },
		}),
		...descriptionFetchEntrepriseInformations({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['fetchEntrepriseInformations'] },
		}),
		...descriptionGetDirectoryServiceCode({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getDirectoryServiceCode'] },
		}),
		...descriptionGetWayTypes({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getWayTypes'] },
		}),
		...descriptionGetMainService({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getMainService'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['updateServiceInfos'] },
		}),
		...descriptionGetVoicemail({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getVoicemail'] },
		}),
		...descriptionUpdateVoicemail({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['updateVoicemail'] },
		}),
		...descriptionChangeVoicemailPassword({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['changeVoicemailPassword'] },
		}),
		...descriptionChangeVoicemailRouting({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['changeVoicemailRouting'] },
		}),
		...descriptionGetVoicemailRouting({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getVoicemailRouting'] },
		}),
		...descriptionGetVoicemailNumbers({
			...displayOptions,
			show: { ...displayOptions?.show, freefaxOperation: ['getVoicemailNumbers'] },
		}),
	];
}

/**
 * Executes the selected Freefax operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('freefaxOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'getCredits':
			return await executeGetCredits.call(this);
		case 'changePassword':
			return await executeChangePassword.call(this);
		case 'getDirectory':
			return await executeGetDirectory.call(this);
		case 'updateDirectory':
			return await executeUpdateDirectory.call(this);
		case 'fetchEntrepriseInformations':
			return await executeFetchEntrepriseInformations.call(this);
		case 'getDirectoryServiceCode':
			return await executeGetDirectoryServiceCode.call(this);
		case 'getWayTypes':
			return await executeGetWayTypes.call(this);
		case 'getMainService':
			return await executeGetMainService.call(this);
		case 'getServiceInfos':
			return await executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await executeUpdateServiceInfos.call(this);
		case 'getVoicemail':
			return await executeGetVoicemail.call(this);
		case 'updateVoicemail':
			return await executeUpdateVoicemail.call(this);
		case 'changeVoicemailPassword':
			return await executeChangeVoicemailPassword.call(this);
		case 'changeVoicemailRouting':
			return await executeChangeVoicemailRouting.call(this);
		case 'getVoicemailRouting':
			return await executeGetVoicemailRouting.call(this);
		case 'getVoicemailNumbers':
			return await executeGetVoicemailNumbers.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "freefax"`);
}

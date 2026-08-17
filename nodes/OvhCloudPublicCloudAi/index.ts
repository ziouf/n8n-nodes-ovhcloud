import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	
	execute as AppCommandPostExecute,
} from './app/AppCommandPost.operation';
import {
	
	execute as AppDatasyncPostExecute,
} from './app/AppDatasyncPost.operation';
import {
	
	execute as AppDeleteExecute,
} from './app/AppDelete.operation';
import {
	
	execute as AppGetExecute,
} from './app/AppGet.operation';
import {
	
	execute as AppGetAppExecute,
} from './app/AppGetApp.operation';
import {
	
	execute as AppImagePutExecute,
} from './app/AppImagePut.operation';
import {
	
	execute as AppLabelPutExecute,
} from './app/AppLabelPut.operation';
import {
	
	execute as AppLogGetExecute,
} from './app/AppLogGet.operation';
import {
	
	execute as AppPostExecute,
} from './app/AppPost.operation';
import {
	
	execute as AppPutExecute,
} from './app/AppPut.operation';
import {
	
	execute as AppScalingstrategyPutExecute,
} from './app/AppScalingstrategyPut.operation';
import {
	
	execute as AppStartPutExecute,
} from './app/AppStartPut.operation';
import {
	
	execute as AppStopPutExecute,
} from './app/AppStopPut.operation';
import {
	
	execute as AuthorizationGetExecute,
} from './authorization/AuthorizationGet.operation';
import {
	
	execute as AuthorizationPostExecute,
} from './authorization/AuthorizationPost.operation';
import {
	
	execute as CapabilitiesFeatureGetExecute,
} from './capabilities/CapabilitiesFeatureGet.operation';
import {
	
	execute as CapabilitiesQuotaGetExecute,
} from './capabilities/CapabilitiesQuotaGet.operation';
import {
	
	execute as CapabilitiesRegionAppImageGetExecute,
} from './capabilities/CapabilitiesRegionAppImageGet.operation';
import {
	
	execute as CapabilitiesRegionDataRegionGetExecute,
} from './capabilities/CapabilitiesRegionDataRegionGet.operation';
import {
	
	execute as CapabilitiesRegionFlavorGetExecute,
} from './capabilities/CapabilitiesRegionFlavorGet.operation';
import {
	
	execute as CapabilitiesRegionFlavorGetCapabilitiesExecute,
} from './capabilities/CapabilitiesRegionFlavorGetCapabilities.operation';
import {
	
	execute as CapabilitiesRegionGetExecute,
} from './capabilities/CapabilitiesRegionGet.operation';
import {
	
	execute as CapabilitiesRegionGetCapabilitiesExecute,
} from './capabilities/CapabilitiesRegionGetCapabilities.operation';
import {
	
	execute as CapabilitiesRegionJobImageGetExecute,
} from './capabilities/CapabilitiesRegionJobImageGet.operation';
import {
	
	execute as CapabilitiesRegionNotebookEditorGetExecute,
} from './capabilities/CapabilitiesRegionNotebookEditorGet.operation';
import {
	
	execute as CapabilitiesRegionNotebookEditorGetCapabilitiesExecute,
} from './capabilities/CapabilitiesRegionNotebookEditorGetCapabilities.operation';
import {
	
	execute as CapabilitiesRegionNotebookFrameworkGetExecute,
} from './capabilities/CapabilitiesRegionNotebookFrameworkGet.operation';
import {
	
	execute as CapabilitiesRegionNotebookFrameworkGetCapabilitiesExecute,
} from './capabilities/CapabilitiesRegionNotebookFrameworkGetCapabilities.operation';
import {
	
	execute as CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGetExecute,
} from './capabilities/CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGet.operation';
import {
	
	execute as CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPutExecute,
} from './capabilities/CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPut.operation';
import {
	
	execute as CapabilitiesRegionPresetGetExecute,
} from './capabilities/CapabilitiesRegionPresetGet.operation';
import {
	
	execute as CapabilitiesRegionPresetGetCapabilitiesExecute,
} from './capabilities/CapabilitiesRegionPresetGetCapabilities.operation';
import {
	
	execute as DataRegionAliasAuthGetExecute,
} from './data/DataRegionAliasAuthGet.operation';
import {
	
	execute as DataRegionAliasDeleteExecute,
} from './data/DataRegionAliasDelete.operation';
import {
	
	execute as DataRegionAliasGetExecute,
} from './data/DataRegionAliasGet.operation';
import {
	
	execute as DataRegionAliasGetDataExecute,
} from './data/DataRegionAliasGetData.operation';
import {
	
	execute as DataRegionAliasPostExecute,
} from './data/DataRegionAliasPost.operation';
import {
	
	execute as DataRegionAliasPutExecute,
} from './data/DataRegionAliasPut.operation';
import {
	
	execute as DataRegionGetExecute,
} from './data/DataRegionGet.operation';
import {
	
	execute as DataRegionGetDataExecute,
} from './data/DataRegionGetData.operation';
import {
	
	execute as JobCapabilitiesPresetimageGetExecute,
} from './job/JobCapabilitiesPresetimageGet.operation';
import {
	
	execute as JobCommandPostExecute,
} from './job/JobCommandPost.operation';
import {
	
	execute as JobDatasyncPostExecute,
} from './job/JobDatasyncPost.operation';
import {
	
	execute as JobDeleteExecute,
} from './job/JobDelete.operation';
import {
	
	execute as JobGetExecute,
} from './job/JobGet.operation';
import {
	
	execute as JobGetJobExecute,
} from './job/JobGetJob.operation';
import {
	
	execute as JobKillPutExecute,
} from './job/JobKillPut.operation';
import {
	
	execute as JobLabelPutExecute,
} from './job/JobLabelPut.operation';
import {
	
	execute as JobLogGetExecute,
} from './job/JobLogGet.operation';
import {
	
	execute as JobPostExecute,
} from './job/JobPost.operation';
import {
	
	execute as NotebookBackupForkPostExecute,
} from './notebook/NotebookBackupForkPost.operation';
import {
	
	execute as NotebookBackupGetExecute,
} from './notebook/NotebookBackupGet.operation';
import {
	
	execute as NotebookBackupGetNotebookExecute,
} from './notebook/NotebookBackupGetNotebook.operation';
import {
	
	execute as NotebookCapabilitiesEditorGetExecute,
} from './notebook/NotebookCapabilitiesEditorGet.operation';
import {
	
	execute as NotebookCapabilitiesFrameworkGetExecute,
} from './notebook/NotebookCapabilitiesFrameworkGet.operation';
import {
	
	execute as NotebookCommandPostExecute,
} from './notebook/NotebookCommandPost.operation';
import {
	
	execute as NotebookDatasyncPostExecute,
} from './notebook/NotebookDatasyncPost.operation';
import {
	
	execute as NotebookDeleteExecute,
} from './notebook/NotebookDelete.operation';
import {
	
	execute as NotebookGetExecute,
} from './notebook/NotebookGet.operation';
import {
	
	execute as NotebookGetNotebookExecute,
} from './notebook/NotebookGetNotebook.operation';
import {
	
	execute as NotebookLabelPutExecute,
} from './notebook/NotebookLabelPut.operation';
import {
	
	execute as NotebookLogGetExecute,
} from './notebook/NotebookLogGet.operation';
import {
	
	execute as NotebookPostExecute,
} from './notebook/NotebookPost.operation';
import {
	
	execute as NotebookPutExecute,
} from './notebook/NotebookPut.operation';
import {
	
	execute as NotebookRestartPutExecute,
} from './notebook/NotebookRestartPut.operation';
import {
	
	execute as NotebookStartPutExecute,
} from './notebook/NotebookStartPut.operation';
import {
	
	execute as NotebookStopPutExecute,
} from './notebook/NotebookStopPut.operation';
import {
	
	execute as NotebookWorkspacebackupretentionpolicyGetExecute,
} from './notebook/NotebookWorkspacebackupretentionpolicyGet.operation';
import {
	
	execute as NotebookWorkspacebackupretentionpolicyPutExecute,
} from './notebook/NotebookWorkspacebackupretentionpolicyPut.operation';
import {
	
	execute as PartnersRegionGetExecute,
} from './partners/PartnersRegionGet.operation';
import {
	
	execute as PartnersRegionGetPartnersExecute,
} from './partners/PartnersRegionGetPartners.operation';
import {
	
	execute as PartnersRegionPartnerGetExecute,
} from './partners/PartnersRegionPartnerGet.operation';
import {
	
	execute as PartnersRegionPartnerGetPartnersExecute,
} from './partners/PartnersRegionPartnerGetPartners.operation';
import {
	
	execute as RegistryDeleteExecute,
} from './registry/RegistryDelete.operation';
import {
	
	execute as RegistryGetExecute,
} from './registry/RegistryGet.operation';
import {
	
	execute as RegistryGetRegistryExecute,
} from './registry/RegistryGetRegistry.operation';
import {
	
	execute as RegistryPostExecute,
} from './registry/RegistryPost.operation';
import {
	
	execute as RegistryPutExecute,
} from './registry/RegistryPut.operation';
import {
	
	execute as TokenDeleteExecute,
} from './token/TokenDelete.operation';
import {
	
	execute as TokenGetExecute,
} from './token/TokenGet.operation';
import {
	
	execute as TokenGetTokenExecute,
} from './token/TokenGetToken.operation';
import {
	
	execute as TokenPostExecute,
} from './token/TokenPost.operation';
import {
	
	execute as TokenRenewPostExecute,
} from './token/TokenRenewPost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'publicCloudAiOperation',
	'publicCloudAi',
	[
	{
		name: 'AppCommandPost',
		value: 'AppCommandPost',
		action: 'POST /cloud/project/{serviceName}/ai/app/command',
		execute: AppCommandPostExecute,
		description: noProps,
		show: false,
		default: true,
	},
	{
		name: 'AppDatasyncPost',
		value: 'AppDatasyncPost',
		action: 'POST /cloud/project/{serviceName}/ai/app/{appId}/datasync',
		execute: AppDatasyncPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppDelete',
		value: 'AppDelete',
		action: 'DELETE /cloud/project/{serviceName}/ai/app/{appId}',
		execute: AppDeleteExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppGet',
		value: 'AppGet',
		action: 'GET /cloud/project/{serviceName}/ai/app',
		execute: AppGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppGetApp',
		value: 'AppGetApp',
		action: 'GET /cloud/project/{serviceName}/ai/app/{appId}',
		execute: AppGetAppExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppImagePut',
		value: 'AppImagePut',
		action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/image',
		execute: AppImagePutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppLabelPut',
		value: 'AppLabelPut',
		action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/label',
		execute: AppLabelPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppLogGet',
		value: 'AppLogGet',
		action: 'GET /cloud/project/{serviceName}/ai/app/{appId}/log',
		execute: AppLogGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppPost',
		value: 'AppPost',
		action: 'POST /cloud/project/{serviceName}/ai/app',
		execute: AppPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppPut',
		value: 'AppPut',
		action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}',
		execute: AppPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppScalingstrategyPut',
		value: 'AppScalingstrategyPut',
		action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/scalingstrategy',
		execute: AppScalingstrategyPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppStartPut',
		value: 'AppStartPut',
		action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/start',
		execute: AppStartPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AppStopPut',
		value: 'AppStopPut',
		action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/stop',
		execute: AppStopPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AuthorizationGet',
		value: 'AuthorizationGet',
		action: 'GET /cloud/project/{serviceName}/ai/authorization',
		execute: AuthorizationGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'AuthorizationPost',
		value: 'AuthorizationPost',
		action: 'POST /cloud/project/{serviceName}/ai/authorization',
		execute: AuthorizationPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesFeatureGet',
		value: 'CapabilitiesFeatureGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/feature',
		execute: CapabilitiesFeatureGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesQuotaGet',
		value: 'CapabilitiesQuotaGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/quota',
		execute: CapabilitiesQuotaGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionAppImageGet',
		value: 'CapabilitiesRegionAppImageGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/app/image',
		execute: CapabilitiesRegionAppImageGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionDataRegionGet',
		value: 'CapabilitiesRegionDataRegionGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/data/region',
		execute: CapabilitiesRegionDataRegionGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionFlavorGet',
		value: 'CapabilitiesRegionFlavorGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/flavor',
		execute: CapabilitiesRegionFlavorGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionFlavorGetCapabilities',
		value: 'CapabilitiesRegionFlavorGetCapabilities',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/flavor/{flavorId}',
		execute: CapabilitiesRegionFlavorGetCapabilitiesExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionGet',
		value: 'CapabilitiesRegionGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region',
		execute: CapabilitiesRegionGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionGetCapabilities',
		value: 'CapabilitiesRegionGetCapabilities',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}',
		execute: CapabilitiesRegionGetCapabilitiesExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionJobImageGet',
		value: 'CapabilitiesRegionJobImageGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/job/image',
		execute: CapabilitiesRegionJobImageGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionNotebookEditorGet',
		value: 'CapabilitiesRegionNotebookEditorGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/editor',
		execute: CapabilitiesRegionNotebookEditorGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionNotebookEditorGetCapabilities',
		value: 'CapabilitiesRegionNotebookEditorGetCapabilities',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/editor/{editorId}',
		execute: CapabilitiesRegionNotebookEditorGetCapabilitiesExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionNotebookFrameworkGet',
		value: 'CapabilitiesRegionNotebookFrameworkGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/framework',
		execute: CapabilitiesRegionNotebookFrameworkGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionNotebookFrameworkGetCapabilities',
		value: 'CapabilitiesRegionNotebookFrameworkGetCapabilities',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/framework/{frameworkId}',
		execute: CapabilitiesRegionNotebookFrameworkGetCapabilitiesExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGet',
		value: 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/workspacebackupretentionpolicy',
		execute: CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPut',
		value: 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPut',
		action: 'PUT /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/workspacebackupretentionpolicy',
		execute: CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionPresetGet',
		value: 'CapabilitiesRegionPresetGet',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/preset',
		execute: CapabilitiesRegionPresetGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'CapabilitiesRegionPresetGetCapabilities',
		value: 'CapabilitiesRegionPresetGetCapabilities',
		action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/preset/{presetId}',
		execute: CapabilitiesRegionPresetGetCapabilitiesExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'DataRegionAliasAuthGet',
		value: 'DataRegionAliasAuthGet',
		action: 'GET /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}/auth',
		execute: DataRegionAliasAuthGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'DataRegionAliasDelete',
		value: 'DataRegionAliasDelete',
		action: 'DELETE /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}',
		execute: DataRegionAliasDeleteExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'DataRegionAliasGet',
		value: 'DataRegionAliasGet',
		action: 'GET /cloud/project/{serviceName}/ai/data/region/{region}/alias',
		execute: DataRegionAliasGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'DataRegionAliasGetData',
		value: 'DataRegionAliasGetData',
		action: 'GET /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}',
		execute: DataRegionAliasGetDataExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'DataRegionAliasPost',
		value: 'DataRegionAliasPost',
		action: 'POST /cloud/project/{serviceName}/ai/data/region/{region}/alias',
		execute: DataRegionAliasPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'DataRegionAliasPut',
		value: 'DataRegionAliasPut',
		action: 'PUT /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}',
		execute: DataRegionAliasPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'DataRegionGet',
		value: 'DataRegionGet',
		action: 'GET /cloud/project/{serviceName}/ai/data/region',
		execute: DataRegionGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'DataRegionGetData',
		value: 'DataRegionGetData',
		action: 'GET /cloud/project/{serviceName}/ai/data/region/{region}',
		execute: DataRegionGetDataExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobCapabilitiesPresetimageGet',
		value: 'JobCapabilitiesPresetimageGet',
		action: 'GET /cloud/project/{serviceName}/ai/job/capabilities/presetImage',
		execute: JobCapabilitiesPresetimageGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobCommandPost',
		value: 'JobCommandPost',
		action: 'POST /cloud/project/{serviceName}/ai/job/command',
		execute: JobCommandPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobDatasyncPost',
		value: 'JobDatasyncPost',
		action: 'POST /cloud/project/{serviceName}/ai/job/{jobId}/datasync',
		execute: JobDatasyncPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobDelete',
		value: 'JobDelete',
		action: 'DELETE /cloud/project/{serviceName}/ai/job/{jobId}',
		execute: JobDeleteExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobGet',
		value: 'JobGet',
		action: 'GET /cloud/project/{serviceName}/ai/job',
		execute: JobGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobGetJob',
		value: 'JobGetJob',
		action: 'GET /cloud/project/{serviceName}/ai/job/{jobId}',
		execute: JobGetJobExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobKillPut',
		value: 'JobKillPut',
		action: 'PUT /cloud/project/{serviceName}/ai/job/{jobId}/kill',
		execute: JobKillPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobLabelPut',
		value: 'JobLabelPut',
		action: 'PUT /cloud/project/{serviceName}/ai/job/{jobId}/label',
		execute: JobLabelPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobLogGet',
		value: 'JobLogGet',
		action: 'GET /cloud/project/{serviceName}/ai/job/{jobId}/log',
		execute: JobLogGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'JobPost',
		value: 'JobPost',
		action: 'POST /cloud/project/{serviceName}/ai/job',
		execute: JobPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookBackupForkPost',
		value: 'NotebookBackupForkPost',
		action: 'POST /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup/{backupId}/fork',
		execute: NotebookBackupForkPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookBackupGet',
		value: 'NotebookBackupGet',
		action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup',
		execute: NotebookBackupGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookBackupGetNotebook',
		value: 'NotebookBackupGetNotebook',
		action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup/{backupId}',
		execute: NotebookBackupGetNotebookExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookCapabilitiesEditorGet',
		value: 'NotebookCapabilitiesEditorGet',
		action: 'GET /cloud/project/{serviceName}/ai/notebook/capabilities/editor',
		execute: NotebookCapabilitiesEditorGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookCapabilitiesFrameworkGet',
		value: 'NotebookCapabilitiesFrameworkGet',
		action: 'GET /cloud/project/{serviceName}/ai/notebook/capabilities/framework',
		execute: NotebookCapabilitiesFrameworkGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookCommandPost',
		value: 'NotebookCommandPost',
		action: 'POST /cloud/project/{serviceName}/ai/notebook/command',
		execute: NotebookCommandPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookDatasyncPost',
		value: 'NotebookDatasyncPost',
		action: 'POST /cloud/project/{serviceName}/ai/notebook/{notebookId}/datasync',
		execute: NotebookDatasyncPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookDelete',
		value: 'NotebookDelete',
		action: 'DELETE /cloud/project/{serviceName}/ai/notebook/{notebookId}',
		execute: NotebookDeleteExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookGet',
		value: 'NotebookGet',
		action: 'GET /cloud/project/{serviceName}/ai/notebook',
		execute: NotebookGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookGetNotebook',
		value: 'NotebookGetNotebook',
		action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}',
		execute: NotebookGetNotebookExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookLabelPut',
		value: 'NotebookLabelPut',
		action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/label',
		execute: NotebookLabelPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookLogGet',
		value: 'NotebookLogGet',
		action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/log',
		execute: NotebookLogGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookPost',
		value: 'NotebookPost',
		action: 'POST /cloud/project/{serviceName}/ai/notebook',
		execute: NotebookPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookPut',
		value: 'NotebookPut',
		action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}',
		execute: NotebookPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookRestartPut',
		value: 'NotebookRestartPut',
		action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/restart',
		execute: NotebookRestartPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookStartPut',
		value: 'NotebookStartPut',
		action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/start',
		execute: NotebookStartPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookStopPut',
		value: 'NotebookStopPut',
		action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/stop',
		execute: NotebookStopPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookWorkspacebackupretentionpolicyGet',
		value: 'NotebookWorkspacebackupretentionpolicyGet',
		action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/workspacebackupretentionpolicy',
		execute: NotebookWorkspacebackupretentionpolicyGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'NotebookWorkspacebackupretentionpolicyPut',
		value: 'NotebookWorkspacebackupretentionpolicyPut',
		action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/workspacebackupretentionpolicy',
		execute: NotebookWorkspacebackupretentionpolicyPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'PartnersRegionGet',
		value: 'PartnersRegionGet',
		action: 'GET /cloud/project/{serviceName}/ai/partners/region',
		execute: PartnersRegionGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'PartnersRegionGetPartners',
		value: 'PartnersRegionGetPartners',
		action: 'GET /cloud/project/{serviceName}/ai/partners/region/{region}',
		execute: PartnersRegionGetPartnersExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'PartnersRegionPartnerGet',
		value: 'PartnersRegionPartnerGet',
		action: 'GET /cloud/project/{serviceName}/ai/partners/region/{region}/partner',
		execute: PartnersRegionPartnerGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'PartnersRegionPartnerGetPartners',
		value: 'PartnersRegionPartnerGetPartners',
		action: 'GET /cloud/project/{serviceName}/ai/partners/region/{region}/partner/{partnerId}',
		execute: PartnersRegionPartnerGetPartnersExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'RegistryDelete',
		value: 'RegistryDelete',
		action: 'DELETE /cloud/project/{serviceName}/ai/registry/{registryId}',
		execute: RegistryDeleteExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'RegistryGet',
		value: 'RegistryGet',
		action: 'GET /cloud/project/{serviceName}/ai/registry',
		execute: RegistryGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'RegistryGetRegistry',
		value: 'RegistryGetRegistry',
		action: 'GET /cloud/project/{serviceName}/ai/registry/{registryId}',
		execute: RegistryGetRegistryExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'RegistryPost',
		value: 'RegistryPost',
		action: 'POST /cloud/project/{serviceName}/ai/registry',
		execute: RegistryPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'RegistryPut',
		value: 'RegistryPut',
		action: 'PUT /cloud/project/{serviceName}/ai/registry/{registryId}',
		execute: RegistryPutExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'TokenDelete',
		value: 'TokenDelete',
		action: 'DELETE /cloud/project/{serviceName}/ai/token/{id}',
		execute: TokenDeleteExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'TokenGet',
		value: 'TokenGet',
		action: 'GET /cloud/project/{serviceName}/ai/token',
		execute: TokenGetExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'TokenGetToken',
		value: 'TokenGetToken',
		action: 'GET /cloud/project/{serviceName}/ai/token/{id}',
		execute: TokenGetTokenExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'TokenPost',
		value: 'TokenPost',
		action: 'POST /cloud/project/{serviceName}/ai/token',
		execute: TokenPostExecute,
		description: noProps,
		show: false,
	},
	{
		name: 'TokenRenewPost',
		value: 'TokenRenewPost',
		action: 'POST /cloud/project/{serviceName}/ai/token/{id}/renew',
		execute: TokenRenewPostExecute,
		description: noProps,
		show: false,
	},
	],
);

export { description, execute };

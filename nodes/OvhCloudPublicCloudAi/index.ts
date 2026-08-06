import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import { description as AppCommandPostDescription, execute as AppCommandPostExecute } from './app/AppCommandPost.operation';
import { description as AppDatasyncPostDescription, execute as AppDatasyncPostExecute } from './app/AppDatasyncPost.operation';
import { description as AppDeleteDescription, execute as AppDeleteExecute } from './app/AppDelete.operation';
import { description as AppGetDescription, execute as AppGetExecute } from './app/AppGet.operation';
import { description as AppGetAppDescription, execute as AppGetAppExecute } from './app/AppGetApp.operation';
import { description as AppImagePutDescription, execute as AppImagePutExecute } from './app/AppImagePut.operation';
import { description as AppLabelPutDescription, execute as AppLabelPutExecute } from './app/AppLabelPut.operation';
import { description as AppLogGetDescription, execute as AppLogGetExecute } from './app/AppLogGet.operation';
import { description as AppPostDescription, execute as AppPostExecute } from './app/AppPost.operation';
import { description as AppPutDescription, execute as AppPutExecute } from './app/AppPut.operation';
import { description as AppScalingstrategyPutDescription, execute as AppScalingstrategyPutExecute } from './app/AppScalingstrategyPut.operation';
import { description as AppStartPutDescription, execute as AppStartPutExecute } from './app/AppStartPut.operation';
import { description as AppStopPutDescription, execute as AppStopPutExecute } from './app/AppStopPut.operation';
import { description as AuthorizationGetDescription, execute as AuthorizationGetExecute } from './authorization/AuthorizationGet.operation';
import { description as AuthorizationPostDescription, execute as AuthorizationPostExecute } from './authorization/AuthorizationPost.operation';
import { description as CapabilitiesFeatureGetDescription, execute as CapabilitiesFeatureGetExecute } from './capabilities/CapabilitiesFeatureGet.operation';
import { description as CapabilitiesQuotaGetDescription, execute as CapabilitiesQuotaGetExecute } from './capabilities/CapabilitiesQuotaGet.operation';
import { description as CapabilitiesRegionAppImageGetDescription, execute as CapabilitiesRegionAppImageGetExecute } from './capabilities/CapabilitiesRegionAppImageGet.operation';
import { description as CapabilitiesRegionDataRegionGetDescription, execute as CapabilitiesRegionDataRegionGetExecute } from './capabilities/CapabilitiesRegionDataRegionGet.operation';
import { description as CapabilitiesRegionFlavorGetDescription, execute as CapabilitiesRegionFlavorGetExecute } from './capabilities/CapabilitiesRegionFlavorGet.operation';
import { description as CapabilitiesRegionFlavorGetCapabilitiesDescription, execute as CapabilitiesRegionFlavorGetCapabilitiesExecute } from './capabilities/CapabilitiesRegionFlavorGetCapabilities.operation';
import { description as CapabilitiesRegionGetDescription, execute as CapabilitiesRegionGetExecute } from './capabilities/CapabilitiesRegionGet.operation';
import { description as CapabilitiesRegionGetCapabilitiesDescription, execute as CapabilitiesRegionGetCapabilitiesExecute } from './capabilities/CapabilitiesRegionGetCapabilities.operation';
import { description as CapabilitiesRegionJobImageGetDescription, execute as CapabilitiesRegionJobImageGetExecute } from './capabilities/CapabilitiesRegionJobImageGet.operation';
import { description as CapabilitiesRegionNotebookEditorGetDescription, execute as CapabilitiesRegionNotebookEditorGetExecute } from './capabilities/CapabilitiesRegionNotebookEditorGet.operation';
import { description as CapabilitiesRegionNotebookEditorGetCapabilitiesDescription, execute as CapabilitiesRegionNotebookEditorGetCapabilitiesExecute } from './capabilities/CapabilitiesRegionNotebookEditorGetCapabilities.operation';
import { description as CapabilitiesRegionNotebookFrameworkGetDescription, execute as CapabilitiesRegionNotebookFrameworkGetExecute } from './capabilities/CapabilitiesRegionNotebookFrameworkGet.operation';
import { description as CapabilitiesRegionNotebookFrameworkGetCapabilitiesDescription, execute as CapabilitiesRegionNotebookFrameworkGetCapabilitiesExecute } from './capabilities/CapabilitiesRegionNotebookFrameworkGetCapabilities.operation';
import { description as CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGetDescription, execute as CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGetExecute } from './capabilities/CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGet.operation';
import { description as CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPutDescription, execute as CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPutExecute } from './capabilities/CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPut.operation';
import { description as CapabilitiesRegionPresetGetDescription, execute as CapabilitiesRegionPresetGetExecute } from './capabilities/CapabilitiesRegionPresetGet.operation';
import { description as CapabilitiesRegionPresetGetCapabilitiesDescription, execute as CapabilitiesRegionPresetGetCapabilitiesExecute } from './capabilities/CapabilitiesRegionPresetGetCapabilities.operation';
import { description as DataRegionAliasAuthGetDescription, execute as DataRegionAliasAuthGetExecute } from './data/DataRegionAliasAuthGet.operation';
import { description as DataRegionAliasDeleteDescription, execute as DataRegionAliasDeleteExecute } from './data/DataRegionAliasDelete.operation';
import { description as DataRegionAliasGetDescription, execute as DataRegionAliasGetExecute } from './data/DataRegionAliasGet.operation';
import { description as DataRegionAliasGetDataDescription, execute as DataRegionAliasGetDataExecute } from './data/DataRegionAliasGetData.operation';
import { description as DataRegionAliasPostDescription, execute as DataRegionAliasPostExecute } from './data/DataRegionAliasPost.operation';
import { description as DataRegionAliasPutDescription, execute as DataRegionAliasPutExecute } from './data/DataRegionAliasPut.operation';
import { description as DataRegionGetDescription, execute as DataRegionGetExecute } from './data/DataRegionGet.operation';
import { description as DataRegionGetDataDescription, execute as DataRegionGetDataExecute } from './data/DataRegionGetData.operation';
import { description as JobCapabilitiesPresetimageGetDescription, execute as JobCapabilitiesPresetimageGetExecute } from './job/JobCapabilitiesPresetimageGet.operation';
import { description as JobCommandPostDescription, execute as JobCommandPostExecute } from './job/JobCommandPost.operation';
import { description as JobDatasyncPostDescription, execute as JobDatasyncPostExecute } from './job/JobDatasyncPost.operation';
import { description as JobDeleteDescription, execute as JobDeleteExecute } from './job/JobDelete.operation';
import { description as JobGetDescription, execute as JobGetExecute } from './job/JobGet.operation';
import { description as JobGetJobDescription, execute as JobGetJobExecute } from './job/JobGetJob.operation';
import { description as JobKillPutDescription, execute as JobKillPutExecute } from './job/JobKillPut.operation';
import { description as JobLabelPutDescription, execute as JobLabelPutExecute } from './job/JobLabelPut.operation';
import { description as JobLogGetDescription, execute as JobLogGetExecute } from './job/JobLogGet.operation';
import { description as JobPostDescription, execute as JobPostExecute } from './job/JobPost.operation';
import { description as NotebookBackupForkPostDescription, execute as NotebookBackupForkPostExecute } from './notebook/NotebookBackupForkPost.operation';
import { description as NotebookBackupGetDescription, execute as NotebookBackupGetExecute } from './notebook/NotebookBackupGet.operation';
import { description as NotebookBackupGetNotebookDescription, execute as NotebookBackupGetNotebookExecute } from './notebook/NotebookBackupGetNotebook.operation';
import { description as NotebookCapabilitiesEditorGetDescription, execute as NotebookCapabilitiesEditorGetExecute } from './notebook/NotebookCapabilitiesEditorGet.operation';
import { description as NotebookCapabilitiesFrameworkGetDescription, execute as NotebookCapabilitiesFrameworkGetExecute } from './notebook/NotebookCapabilitiesFrameworkGet.operation';
import { description as NotebookCommandPostDescription, execute as NotebookCommandPostExecute } from './notebook/NotebookCommandPost.operation';
import { description as NotebookDatasyncPostDescription, execute as NotebookDatasyncPostExecute } from './notebook/NotebookDatasyncPost.operation';
import { description as NotebookDeleteDescription, execute as NotebookDeleteExecute } from './notebook/NotebookDelete.operation';
import { description as NotebookGetDescription, execute as NotebookGetExecute } from './notebook/NotebookGet.operation';
import { description as NotebookGetNotebookDescription, execute as NotebookGetNotebookExecute } from './notebook/NotebookGetNotebook.operation';
import { description as NotebookLabelPutDescription, execute as NotebookLabelPutExecute } from './notebook/NotebookLabelPut.operation';
import { description as NotebookLogGetDescription, execute as NotebookLogGetExecute } from './notebook/NotebookLogGet.operation';
import { description as NotebookPostDescription, execute as NotebookPostExecute } from './notebook/NotebookPost.operation';
import { description as NotebookPutDescription, execute as NotebookPutExecute } from './notebook/NotebookPut.operation';
import { description as NotebookRestartPutDescription, execute as NotebookRestartPutExecute } from './notebook/NotebookRestartPut.operation';
import { description as NotebookStartPutDescription, execute as NotebookStartPutExecute } from './notebook/NotebookStartPut.operation';
import { description as NotebookStopPutDescription, execute as NotebookStopPutExecute } from './notebook/NotebookStopPut.operation';
import { description as NotebookWorkspacebackupretentionpolicyGetDescription, execute as NotebookWorkspacebackupretentionpolicyGetExecute } from './notebook/NotebookWorkspacebackupretentionpolicyGet.operation';
import { description as NotebookWorkspacebackupretentionpolicyPutDescription, execute as NotebookWorkspacebackupretentionpolicyPutExecute } from './notebook/NotebookWorkspacebackupretentionpolicyPut.operation';
import { description as PartnersRegionGetDescription, execute as PartnersRegionGetExecute } from './partners/PartnersRegionGet.operation';
import { description as PartnersRegionGetPartnersDescription, execute as PartnersRegionGetPartnersExecute } from './partners/PartnersRegionGetPartners.operation';
import { description as PartnersRegionPartnerGetDescription, execute as PartnersRegionPartnerGetExecute } from './partners/PartnersRegionPartnerGet.operation';
import { description as PartnersRegionPartnerGetPartnersDescription, execute as PartnersRegionPartnerGetPartnersExecute } from './partners/PartnersRegionPartnerGetPartners.operation';
import { description as RegistryDeleteDescription, execute as RegistryDeleteExecute } from './registry/RegistryDelete.operation';
import { description as RegistryGetDescription, execute as RegistryGetExecute } from './registry/RegistryGet.operation';
import { description as RegistryGetRegistryDescription, execute as RegistryGetRegistryExecute } from './registry/RegistryGetRegistry.operation';
import { description as RegistryPostDescription, execute as RegistryPostExecute } from './registry/RegistryPost.operation';
import { description as RegistryPutDescription, execute as RegistryPutExecute } from './registry/RegistryPut.operation';
import { description as TokenDeleteDescription, execute as TokenDeleteExecute } from './token/TokenDelete.operation';
import { description as TokenGetDescription, execute as TokenGetExecute } from './token/TokenGet.operation';
import { description as TokenGetTokenDescription, execute as TokenGetTokenExecute } from './token/TokenGetToken.operation';
import { description as TokenPostDescription, execute as TokenPostExecute } from './token/TokenPost.operation';
import { description as TokenRenewPostDescription, execute as TokenRenewPostExecute } from './token/TokenRenewPost.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const properties: INodeProperties[] = [];

	properties.push({
		displayName: 'Operation',
		name: 'publicCloudAiOperation',
		type: 'options',
		noDataExpression: true,
		options: [
				{ name: 'AppCommandPost', value: 'AppCommandPost', action: 'POST /cloud/project/{serviceName}/ai/app/command' },
				{ name: 'AppDatasyncPost', value: 'AppDatasyncPost', action: 'POST /cloud/project/{serviceName}/ai/app/{appId}/datasync' },
				{ name: 'AppDelete', value: 'AppDelete', action: 'DELETE /cloud/project/{serviceName}/ai/app/{appId}' },
				{ name: 'AppGet', value: 'AppGet', action: 'GET /cloud/project/{serviceName}/ai/app' },
				{ name: 'AppGetApp', value: 'AppGetApp', action: 'GET /cloud/project/{serviceName}/ai/app/{appId}' },
				{ name: 'AppImagePut', value: 'AppImagePut', action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/image' },
				{ name: 'AppLabelPut', value: 'AppLabelPut', action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/label' },
				{ name: 'AppLogGet', value: 'AppLogGet', action: 'GET /cloud/project/{serviceName}/ai/app/{appId}/log' },
				{ name: 'AppPost', value: 'AppPost', action: 'POST /cloud/project/{serviceName}/ai/app' },
				{ name: 'AppPut', value: 'AppPut', action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}' },
				{ name: 'AppScalingstrategyPut', value: 'AppScalingstrategyPut', action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/scalingstrategy' },
				{ name: 'AppStartPut', value: 'AppStartPut', action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/start' },
				{ name: 'AppStopPut', value: 'AppStopPut', action: 'PUT /cloud/project/{serviceName}/ai/app/{appId}/stop' },
				{ name: 'AuthorizationGet', value: 'AuthorizationGet', action: 'GET /cloud/project/{serviceName}/ai/authorization' },
				{ name: 'AuthorizationPost', value: 'AuthorizationPost', action: 'POST /cloud/project/{serviceName}/ai/authorization' },
				{ name: 'CapabilitiesFeatureGet', value: 'CapabilitiesFeatureGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/feature' },
				{ name: 'CapabilitiesQuotaGet', value: 'CapabilitiesQuotaGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/quota' },
				{ name: 'CapabilitiesRegionAppImageGet', value: 'CapabilitiesRegionAppImageGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/app/image' },
				{ name: 'CapabilitiesRegionDataRegionGet', value: 'CapabilitiesRegionDataRegionGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/data/region' },
				{ name: 'CapabilitiesRegionFlavorGet', value: 'CapabilitiesRegionFlavorGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/flavor' },
				{ name: 'CapabilitiesRegionFlavorGetCapabilities', value: 'CapabilitiesRegionFlavorGetCapabilities', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/flavor/{flavorId}' },
				{ name: 'CapabilitiesRegionGet', value: 'CapabilitiesRegionGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region' },
				{ name: 'CapabilitiesRegionGetCapabilities', value: 'CapabilitiesRegionGetCapabilities', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}' },
				{ name: 'CapabilitiesRegionJobImageGet', value: 'CapabilitiesRegionJobImageGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/job/image' },
				{ name: 'CapabilitiesRegionNotebookEditorGet', value: 'CapabilitiesRegionNotebookEditorGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/editor' },
				{ name: 'CapabilitiesRegionNotebookEditorGetCapabilities', value: 'CapabilitiesRegionNotebookEditorGetCapabilities', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/editor/{editorId}' },
				{ name: 'CapabilitiesRegionNotebookFrameworkGet', value: 'CapabilitiesRegionNotebookFrameworkGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/framework' },
				{ name: 'CapabilitiesRegionNotebookFrameworkGetCapabilities', value: 'CapabilitiesRegionNotebookFrameworkGetCapabilities', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/framework/{frameworkId}' },
				{ name: 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGet', value: 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/workspacebackupretentionpolicy' },
				{ name: 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPut', value: 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPut', action: 'PUT /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/workspacebackupretentionpolicy' },
				{ name: 'CapabilitiesRegionPresetGet', value: 'CapabilitiesRegionPresetGet', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/preset' },
				{ name: 'CapabilitiesRegionPresetGetCapabilities', value: 'CapabilitiesRegionPresetGetCapabilities', action: 'GET /cloud/project/{serviceName}/ai/capabilities/region/{region}/preset/{presetId}' },
				{ name: 'DataRegionAliasAuthGet', value: 'DataRegionAliasAuthGet', action: 'GET /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}/auth' },
				{ name: 'DataRegionAliasDelete', value: 'DataRegionAliasDelete', action: 'DELETE /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}' },
				{ name: 'DataRegionAliasGet', value: 'DataRegionAliasGet', action: 'GET /cloud/project/{serviceName}/ai/data/region/{region}/alias' },
				{ name: 'DataRegionAliasGetData', value: 'DataRegionAliasGetData', action: 'GET /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}' },
				{ name: 'DataRegionAliasPost', value: 'DataRegionAliasPost', action: 'POST /cloud/project/{serviceName}/ai/data/region/{region}/alias' },
				{ name: 'DataRegionAliasPut', value: 'DataRegionAliasPut', action: 'PUT /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}' },
				{ name: 'DataRegionGet', value: 'DataRegionGet', action: 'GET /cloud/project/{serviceName}/ai/data/region' },
				{ name: 'DataRegionGetData', value: 'DataRegionGetData', action: 'GET /cloud/project/{serviceName}/ai/data/region/{region}' },
				{ name: 'JobCapabilitiesPresetimageGet', value: 'JobCapabilitiesPresetimageGet', action: 'GET /cloud/project/{serviceName}/ai/job/capabilities/presetImage' },
				{ name: 'JobCommandPost', value: 'JobCommandPost', action: 'POST /cloud/project/{serviceName}/ai/job/command' },
				{ name: 'JobDatasyncPost', value: 'JobDatasyncPost', action: 'POST /cloud/project/{serviceName}/ai/job/{jobId}/datasync' },
				{ name: 'JobDelete', value: 'JobDelete', action: 'DELETE /cloud/project/{serviceName}/ai/job/{jobId}' },
				{ name: 'JobGet', value: 'JobGet', action: 'GET /cloud/project/{serviceName}/ai/job' },
				{ name: 'JobGetJob', value: 'JobGetJob', action: 'GET /cloud/project/{serviceName}/ai/job/{jobId}' },
				{ name: 'JobKillPut', value: 'JobKillPut', action: 'PUT /cloud/project/{serviceName}/ai/job/{jobId}/kill' },
				{ name: 'JobLabelPut', value: 'JobLabelPut', action: 'PUT /cloud/project/{serviceName}/ai/job/{jobId}/label' },
				{ name: 'JobLogGet', value: 'JobLogGet', action: 'GET /cloud/project/{serviceName}/ai/job/{jobId}/log' },
				{ name: 'JobPost', value: 'JobPost', action: 'POST /cloud/project/{serviceName}/ai/job' },
				{ name: 'NotebookBackupForkPost', value: 'NotebookBackupForkPost', action: 'POST /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup/{backupId}/fork' },
				{ name: 'NotebookBackupGet', value: 'NotebookBackupGet', action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup' },
				{ name: 'NotebookBackupGetNotebook', value: 'NotebookBackupGetNotebook', action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup/{backupId}' },
				{ name: 'NotebookCapabilitiesEditorGet', value: 'NotebookCapabilitiesEditorGet', action: 'GET /cloud/project/{serviceName}/ai/notebook/capabilities/editor' },
				{ name: 'NotebookCapabilitiesFrameworkGet', value: 'NotebookCapabilitiesFrameworkGet', action: 'GET /cloud/project/{serviceName}/ai/notebook/capabilities/framework' },
				{ name: 'NotebookCommandPost', value: 'NotebookCommandPost', action: 'POST /cloud/project/{serviceName}/ai/notebook/command' },
				{ name: 'NotebookDatasyncPost', value: 'NotebookDatasyncPost', action: 'POST /cloud/project/{serviceName}/ai/notebook/{notebookId}/datasync' },
				{ name: 'NotebookDelete', value: 'NotebookDelete', action: 'DELETE /cloud/project/{serviceName}/ai/notebook/{notebookId}' },
				{ name: 'NotebookGet', value: 'NotebookGet', action: 'GET /cloud/project/{serviceName}/ai/notebook' },
				{ name: 'NotebookGetNotebook', value: 'NotebookGetNotebook', action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}' },
				{ name: 'NotebookLabelPut', value: 'NotebookLabelPut', action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/label' },
				{ name: 'NotebookLogGet', value: 'NotebookLogGet', action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/log' },
				{ name: 'NotebookPost', value: 'NotebookPost', action: 'POST /cloud/project/{serviceName}/ai/notebook' },
				{ name: 'NotebookPut', value: 'NotebookPut', action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}' },
				{ name: 'NotebookRestartPut', value: 'NotebookRestartPut', action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/restart' },
				{ name: 'NotebookStartPut', value: 'NotebookStartPut', action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/start' },
				{ name: 'NotebookStopPut', value: 'NotebookStopPut', action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/stop' },
				{ name: 'NotebookWorkspacebackupretentionpolicyGet', value: 'NotebookWorkspacebackupretentionpolicyGet', action: 'GET /cloud/project/{serviceName}/ai/notebook/{notebookId}/workspacebackupretentionpolicy' },
				{ name: 'NotebookWorkspacebackupretentionpolicyPut', value: 'NotebookWorkspacebackupretentionpolicyPut', action: 'PUT /cloud/project/{serviceName}/ai/notebook/{notebookId}/workspacebackupretentionpolicy' },
				{ name: 'PartnersRegionGet', value: 'PartnersRegionGet', action: 'GET /cloud/project/{serviceName}/ai/partners/region' },
				{ name: 'PartnersRegionGetPartners', value: 'PartnersRegionGetPartners', action: 'GET /cloud/project/{serviceName}/ai/partners/region/{region}' },
				{ name: 'PartnersRegionPartnerGet', value: 'PartnersRegionPartnerGet', action: 'GET /cloud/project/{serviceName}/ai/partners/region/{region}/partner' },
				{ name: 'PartnersRegionPartnerGetPartners', value: 'PartnersRegionPartnerGetPartners', action: 'GET /cloud/project/{serviceName}/ai/partners/region/{region}/partner/{partnerId}' },
				{ name: 'RegistryDelete', value: 'RegistryDelete', action: 'DELETE /cloud/project/{serviceName}/ai/registry/{registryId}' },
				{ name: 'RegistryGet', value: 'RegistryGet', action: 'GET /cloud/project/{serviceName}/ai/registry' },
				{ name: 'RegistryGetRegistry', value: 'RegistryGetRegistry', action: 'GET /cloud/project/{serviceName}/ai/registry/{registryId}' },
				{ name: 'RegistryPost', value: 'RegistryPost', action: 'POST /cloud/project/{serviceName}/ai/registry' },
				{ name: 'RegistryPut', value: 'RegistryPut', action: 'PUT /cloud/project/{serviceName}/ai/registry/{registryId}' },
				{ name: 'TokenDelete', value: 'TokenDelete', action: 'DELETE /cloud/project/{serviceName}/ai/token/{id}' },
				{ name: 'TokenGet', value: 'TokenGet', action: 'GET /cloud/project/{serviceName}/ai/token' },
				{ name: 'TokenGetToken', value: 'TokenGetToken', action: 'GET /cloud/project/{serviceName}/ai/token/{id}' },
				{ name: 'TokenPost', value: 'TokenPost', action: 'POST /cloud/project/{serviceName}/ai/token' },
				{ name: 'TokenRenewPost', value: 'TokenRenewPost', action: 'POST /cloud/project/{serviceName}/ai/token/{id}/renew' },
		],
		default: 'AppCommandPost',
		displayOptions,
	});

		properties.push(...AppCommandPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppCommandPost'] } }) as INodeProperties[]);
		properties.push(...AppDatasyncPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppDatasyncPost'] } }) as INodeProperties[]);
		properties.push(...AppDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppDelete'] } }) as INodeProperties[]);
		properties.push(...AppGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppGet'] } }) as INodeProperties[]);
		properties.push(...AppGetAppDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppGetApp'] } }) as INodeProperties[]);
		properties.push(...AppImagePutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppImagePut'] } }) as INodeProperties[]);
		properties.push(...AppLabelPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppLabelPut'] } }) as INodeProperties[]);
		properties.push(...AppLogGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppLogGet'] } }) as INodeProperties[]);
		properties.push(...AppPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppPost'] } }) as INodeProperties[]);
		properties.push(...AppPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppPut'] } }) as INodeProperties[]);
		properties.push(...AppScalingstrategyPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppScalingstrategyPut'] } }) as INodeProperties[]);
		properties.push(...AppStartPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppStartPut'] } }) as INodeProperties[]);
		properties.push(...AppStopPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AppStopPut'] } }) as INodeProperties[]);
		properties.push(...AuthorizationGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AuthorizationGet'] } }) as INodeProperties[]);
		properties.push(...AuthorizationPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['AuthorizationPost'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesFeatureGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesFeatureGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesQuotaGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesQuotaGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionAppImageGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionAppImageGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionDataRegionGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionDataRegionGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionFlavorGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionFlavorGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionFlavorGetCapabilitiesDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionFlavorGetCapabilities'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionGetCapabilitiesDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionGetCapabilities'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionJobImageGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionJobImageGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionNotebookEditorGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionNotebookEditorGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionNotebookEditorGetCapabilitiesDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionNotebookEditorGetCapabilities'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionNotebookFrameworkGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionNotebookFrameworkGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionNotebookFrameworkGetCapabilitiesDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionNotebookFrameworkGetCapabilities'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPut'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionPresetGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionPresetGet'] } }) as INodeProperties[]);
		properties.push(...CapabilitiesRegionPresetGetCapabilitiesDescription({ ...displayOptions, show: { publicCloudAiOperation: ['CapabilitiesRegionPresetGetCapabilities'] } }) as INodeProperties[]);
		properties.push(...DataRegionAliasAuthGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['DataRegionAliasAuthGet'] } }) as INodeProperties[]);
		properties.push(...DataRegionAliasDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['DataRegionAliasDelete'] } }) as INodeProperties[]);
		properties.push(...DataRegionAliasGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['DataRegionAliasGet'] } }) as INodeProperties[]);
		properties.push(...DataRegionAliasGetDataDescription({ ...displayOptions, show: { publicCloudAiOperation: ['DataRegionAliasGetData'] } }) as INodeProperties[]);
		properties.push(...DataRegionAliasPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['DataRegionAliasPost'] } }) as INodeProperties[]);
		properties.push(...DataRegionAliasPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['DataRegionAliasPut'] } }) as INodeProperties[]);
		properties.push(...DataRegionGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['DataRegionGet'] } }) as INodeProperties[]);
		properties.push(...DataRegionGetDataDescription({ ...displayOptions, show: { publicCloudAiOperation: ['DataRegionGetData'] } }) as INodeProperties[]);
		properties.push(...JobCapabilitiesPresetimageGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobCapabilitiesPresetimageGet'] } }) as INodeProperties[]);
		properties.push(...JobCommandPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobCommandPost'] } }) as INodeProperties[]);
		properties.push(...JobDatasyncPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobDatasyncPost'] } }) as INodeProperties[]);
		properties.push(...JobDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobDelete'] } }) as INodeProperties[]);
		properties.push(...JobGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobGet'] } }) as INodeProperties[]);
		properties.push(...JobGetJobDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobGetJob'] } }) as INodeProperties[]);
		properties.push(...JobKillPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobKillPut'] } }) as INodeProperties[]);
		properties.push(...JobLabelPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobLabelPut'] } }) as INodeProperties[]);
		properties.push(...JobLogGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobLogGet'] } }) as INodeProperties[]);
		properties.push(...JobPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['JobPost'] } }) as INodeProperties[]);
		properties.push(...NotebookBackupForkPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookBackupForkPost'] } }) as INodeProperties[]);
		properties.push(...NotebookBackupGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookBackupGet'] } }) as INodeProperties[]);
		properties.push(...NotebookBackupGetNotebookDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookBackupGetNotebook'] } }) as INodeProperties[]);
		properties.push(...NotebookCapabilitiesEditorGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookCapabilitiesEditorGet'] } }) as INodeProperties[]);
		properties.push(...NotebookCapabilitiesFrameworkGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookCapabilitiesFrameworkGet'] } }) as INodeProperties[]);
		properties.push(...NotebookCommandPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookCommandPost'] } }) as INodeProperties[]);
		properties.push(...NotebookDatasyncPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookDatasyncPost'] } }) as INodeProperties[]);
		properties.push(...NotebookDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookDelete'] } }) as INodeProperties[]);
		properties.push(...NotebookGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookGet'] } }) as INodeProperties[]);
		properties.push(...NotebookGetNotebookDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookGetNotebook'] } }) as INodeProperties[]);
		properties.push(...NotebookLabelPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookLabelPut'] } }) as INodeProperties[]);
		properties.push(...NotebookLogGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookLogGet'] } }) as INodeProperties[]);
		properties.push(...NotebookPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookPost'] } }) as INodeProperties[]);
		properties.push(...NotebookPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookPut'] } }) as INodeProperties[]);
		properties.push(...NotebookRestartPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookRestartPut'] } }) as INodeProperties[]);
		properties.push(...NotebookStartPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookStartPut'] } }) as INodeProperties[]);
		properties.push(...NotebookStopPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookStopPut'] } }) as INodeProperties[]);
		properties.push(...NotebookWorkspacebackupretentionpolicyGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookWorkspacebackupretentionpolicyGet'] } }) as INodeProperties[]);
		properties.push(...NotebookWorkspacebackupretentionpolicyPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['NotebookWorkspacebackupretentionpolicyPut'] } }) as INodeProperties[]);
		properties.push(...PartnersRegionGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['PartnersRegionGet'] } }) as INodeProperties[]);
		properties.push(...PartnersRegionGetPartnersDescription({ ...displayOptions, show: { publicCloudAiOperation: ['PartnersRegionGetPartners'] } }) as INodeProperties[]);
		properties.push(...PartnersRegionPartnerGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['PartnersRegionPartnerGet'] } }) as INodeProperties[]);
		properties.push(...PartnersRegionPartnerGetPartnersDescription({ ...displayOptions, show: { publicCloudAiOperation: ['PartnersRegionPartnerGetPartners'] } }) as INodeProperties[]);
		properties.push(...RegistryDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['RegistryDelete'] } }) as INodeProperties[]);
		properties.push(...RegistryGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['RegistryGet'] } }) as INodeProperties[]);
		properties.push(...RegistryGetRegistryDescription({ ...displayOptions, show: { publicCloudAiOperation: ['RegistryGetRegistry'] } }) as INodeProperties[]);
		properties.push(...RegistryPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['RegistryPost'] } }) as INodeProperties[]);
		properties.push(...RegistryPutDescription({ ...displayOptions, show: { publicCloudAiOperation: ['RegistryPut'] } }) as INodeProperties[]);
		properties.push(...TokenDeleteDescription({ ...displayOptions, show: { publicCloudAiOperation: ['TokenDelete'] } }) as INodeProperties[]);
		properties.push(...TokenGetDescription({ ...displayOptions, show: { publicCloudAiOperation: ['TokenGet'] } }) as INodeProperties[]);
		properties.push(...TokenGetTokenDescription({ ...displayOptions, show: { publicCloudAiOperation: ['TokenGetToken'] } }) as INodeProperties[]);
		properties.push(...TokenPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['TokenPost'] } }) as INodeProperties[]);
		properties.push(...TokenRenewPostDescription({ ...displayOptions, show: { publicCloudAiOperation: ['TokenRenewPost'] } }) as INodeProperties[]);

	return properties;
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('publicCloudAiOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'AppCommandPost': return AppCommandPostExecute.call(this);
		case 'AppDatasyncPost': return AppDatasyncPostExecute.call(this);
		case 'AppDelete': return AppDeleteExecute.call(this);
		case 'AppGet': return AppGetExecute.call(this);
		case 'AppGetApp': return AppGetAppExecute.call(this);
		case 'AppImagePut': return AppImagePutExecute.call(this);
		case 'AppLabelPut': return AppLabelPutExecute.call(this);
		case 'AppLogGet': return AppLogGetExecute.call(this);
		case 'AppPost': return AppPostExecute.call(this);
		case 'AppPut': return AppPutExecute.call(this);
		case 'AppScalingstrategyPut': return AppScalingstrategyPutExecute.call(this);
		case 'AppStartPut': return AppStartPutExecute.call(this);
		case 'AppStopPut': return AppStopPutExecute.call(this);
		case 'AuthorizationGet': return AuthorizationGetExecute.call(this);
		case 'AuthorizationPost': return AuthorizationPostExecute.call(this);
		case 'CapabilitiesFeatureGet': return CapabilitiesFeatureGetExecute.call(this);
		case 'CapabilitiesQuotaGet': return CapabilitiesQuotaGetExecute.call(this);
		case 'CapabilitiesRegionAppImageGet': return CapabilitiesRegionAppImageGetExecute.call(this);
		case 'CapabilitiesRegionDataRegionGet': return CapabilitiesRegionDataRegionGetExecute.call(this);
		case 'CapabilitiesRegionFlavorGet': return CapabilitiesRegionFlavorGetExecute.call(this);
		case 'CapabilitiesRegionFlavorGetCapabilities': return CapabilitiesRegionFlavorGetCapabilitiesExecute.call(this);
		case 'CapabilitiesRegionGet': return CapabilitiesRegionGetExecute.call(this);
		case 'CapabilitiesRegionGetCapabilities': return CapabilitiesRegionGetCapabilitiesExecute.call(this);
		case 'CapabilitiesRegionJobImageGet': return CapabilitiesRegionJobImageGetExecute.call(this);
		case 'CapabilitiesRegionNotebookEditorGet': return CapabilitiesRegionNotebookEditorGetExecute.call(this);
		case 'CapabilitiesRegionNotebookEditorGetCapabilities': return CapabilitiesRegionNotebookEditorGetCapabilitiesExecute.call(this);
		case 'CapabilitiesRegionNotebookFrameworkGet': return CapabilitiesRegionNotebookFrameworkGetExecute.call(this);
		case 'CapabilitiesRegionNotebookFrameworkGetCapabilities': return CapabilitiesRegionNotebookFrameworkGetCapabilitiesExecute.call(this);
		case 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGet': return CapabilitiesRegionNotebookWorkspacebackupretentionpolicyGetExecute.call(this);
		case 'CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPut': return CapabilitiesRegionNotebookWorkspacebackupretentionpolicyPutExecute.call(this);
		case 'CapabilitiesRegionPresetGet': return CapabilitiesRegionPresetGetExecute.call(this);
		case 'CapabilitiesRegionPresetGetCapabilities': return CapabilitiesRegionPresetGetCapabilitiesExecute.call(this);
		case 'DataRegionAliasAuthGet': return DataRegionAliasAuthGetExecute.call(this);
		case 'DataRegionAliasDelete': return DataRegionAliasDeleteExecute.call(this);
		case 'DataRegionAliasGet': return DataRegionAliasGetExecute.call(this);
		case 'DataRegionAliasGetData': return DataRegionAliasGetDataExecute.call(this);
		case 'DataRegionAliasPost': return DataRegionAliasPostExecute.call(this);
		case 'DataRegionAliasPut': return DataRegionAliasPutExecute.call(this);
		case 'DataRegionGet': return DataRegionGetExecute.call(this);
		case 'DataRegionGetData': return DataRegionGetDataExecute.call(this);
		case 'JobCapabilitiesPresetimageGet': return JobCapabilitiesPresetimageGetExecute.call(this);
		case 'JobCommandPost': return JobCommandPostExecute.call(this);
		case 'JobDatasyncPost': return JobDatasyncPostExecute.call(this);
		case 'JobDelete': return JobDeleteExecute.call(this);
		case 'JobGet': return JobGetExecute.call(this);
		case 'JobGetJob': return JobGetJobExecute.call(this);
		case 'JobKillPut': return JobKillPutExecute.call(this);
		case 'JobLabelPut': return JobLabelPutExecute.call(this);
		case 'JobLogGet': return JobLogGetExecute.call(this);
		case 'JobPost': return JobPostExecute.call(this);
		case 'NotebookBackupForkPost': return NotebookBackupForkPostExecute.call(this);
		case 'NotebookBackupGet': return NotebookBackupGetExecute.call(this);
		case 'NotebookBackupGetNotebook': return NotebookBackupGetNotebookExecute.call(this);
		case 'NotebookCapabilitiesEditorGet': return NotebookCapabilitiesEditorGetExecute.call(this);
		case 'NotebookCapabilitiesFrameworkGet': return NotebookCapabilitiesFrameworkGetExecute.call(this);
		case 'NotebookCommandPost': return NotebookCommandPostExecute.call(this);
		case 'NotebookDatasyncPost': return NotebookDatasyncPostExecute.call(this);
		case 'NotebookDelete': return NotebookDeleteExecute.call(this);
		case 'NotebookGet': return NotebookGetExecute.call(this);
		case 'NotebookGetNotebook': return NotebookGetNotebookExecute.call(this);
		case 'NotebookLabelPut': return NotebookLabelPutExecute.call(this);
		case 'NotebookLogGet': return NotebookLogGetExecute.call(this);
		case 'NotebookPost': return NotebookPostExecute.call(this);
		case 'NotebookPut': return NotebookPutExecute.call(this);
		case 'NotebookRestartPut': return NotebookRestartPutExecute.call(this);
		case 'NotebookStartPut': return NotebookStartPutExecute.call(this);
		case 'NotebookStopPut': return NotebookStopPutExecute.call(this);
		case 'NotebookWorkspacebackupretentionpolicyGet': return NotebookWorkspacebackupretentionpolicyGetExecute.call(this);
		case 'NotebookWorkspacebackupretentionpolicyPut': return NotebookWorkspacebackupretentionpolicyPutExecute.call(this);
		case 'PartnersRegionGet': return PartnersRegionGetExecute.call(this);
		case 'PartnersRegionGetPartners': return PartnersRegionGetPartnersExecute.call(this);
		case 'PartnersRegionPartnerGet': return PartnersRegionPartnerGetExecute.call(this);
		case 'PartnersRegionPartnerGetPartners': return PartnersRegionPartnerGetPartnersExecute.call(this);
		case 'RegistryDelete': return RegistryDeleteExecute.call(this);
		case 'RegistryGet': return RegistryGetExecute.call(this);
		case 'RegistryGetRegistry': return RegistryGetRegistryExecute.call(this);
		case 'RegistryPost': return RegistryPostExecute.call(this);
		case 'RegistryPut': return RegistryPutExecute.call(this);
		case 'TokenDelete': return TokenDeleteExecute.call(this);
		case 'TokenGet': return TokenGetExecute.call(this);
		case 'TokenGetToken': return TokenGetTokenExecute.call(this);
		case 'TokenPost': return TokenPostExecute.call(this);
		case 'TokenRenewPost': return TokenRenewPostExecute.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "publicCloudAi"`);
}

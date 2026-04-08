/**
 * @brief OKMS resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH OKMS (OVH Key Management Service) including:
 * - List all OKMS resources
 * - Get detailed information about a specific OKMS resource
 * - Manage credentials, logs, secrets, service keys, and references
 *
 * Available operations:
 * - `list`: List all OKMS resources
 * - `get`: Get details of a specific OKMS resource
 * - `listResources`: List OKMS resources
 * - `getResource`: Get a specific OKMS resource
 * - `listCredentials`: List OKMS credentials
 * - `getCredential`: Get a specific credential
 * - `listLogKinds`: List OKMS log kinds
 * - `getLogKind`: Get a specific log kind
 * - `listLogSubscriptions`: List OKMS log subscriptions
 * - `getLogSubscription`: Get a specific log subscription
 * - `getLogUrl`: Get OKMS log URL
 * - `listSecrets`: List OKMS secrets
 * - `getSecret`: Get a specific secret
 * - `listSecretVersions`: List OKMS secret versions
 * - `getSecretVersion`: Get a specific secret version
 * - `getSecretConfig`: Get OKMS secret config
 * - `listServiceKeys`: List OKMS service keys
 * - `getServiceKey`: Get a specific service key
 * - `listReferenceRegions`: List OKMS reference regions
 * - `listReferenceSecretConfigs`: List OKMS reference secret configs
 * - `listReferenceServiceKeys`: List OKMS reference service keys
 *
 * @remarks
 * OKMS resources are managed under `/v2/okms` route.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import * as resources from './resources';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'OKMS Operation',
			name: 'okmsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an OKMS resource',
				},
				{
					name: 'Get Credential',
					value: 'getCredential',
					action: 'Get a specific credential',
				},
				{
					name: 'Get Log Kind',
					value: 'getLogKind',
					action: 'Get a specific log kind',
				},
				{
					name: 'Get Log Subscription',
					value: 'getLogSubscription',
					action: 'Get a specific log subscription',
				},
				{
					name: 'Get Log URL',
					value: 'getLogUrl',
					action: 'Get OKMS log URL',
				},
				{
					name: 'Get Resource',
					value: 'getResource',
					action: 'Get a specific OKMS resource',
				},
				{
					name: 'Get Secret',
					value: 'getSecret',
					action: 'Get a specific secret',
				},
				{
					name: 'Get Secret Config',
					value: 'getSecretConfig',
					action: 'Get OKMS secret config',
				},
				{
					name: 'Get Secret Version',
					value: 'getSecretVersion',
					action: 'Get a specific secret version',
				},
				{
					name: 'Get Service Key',
					value: 'getServiceKey',
					action: 'Get a specific service key',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all OKMS resources',
				},
				{
					name: 'List Credentials',
					value: 'listCredentials',
					action: 'List OKMS credentials',
				},
				{
					name: 'List Log Kinds',
					value: 'listLogKinds',
					action: 'List OKMS log kinds',
				},
				{
					name: 'List Log Subscriptions',
					value: 'listLogSubscriptions',
					action: 'List OKMS log subscriptions',
				},
				{
					name: 'List Reference Regions',
					value: 'listReferenceRegions',
					action: 'List OKMS reference regions',
				},
				{
					name: 'List Reference Secret Configs',
					value: 'listReferenceSecretConfigs',
					action: 'List OKMS reference secret configs',
				},
				{
					name: 'List Reference Service Keys',
					value: 'listReferenceServiceKeys',
					action: 'List OKMS reference service keys',
				},
				{
					name: 'List Resources',
					value: 'listResources',
					action: 'List OKMS resources',
				},
				{
					name: 'List Secret Versions',
					value: 'listSecretVersions',
					action: 'List OKMS secret versions',
				},
				{
					name: 'List Secrets',
					value: 'listSecrets',
					action: 'List OKMS secrets',
				},
				{
					name: 'List Service Keys',
					value: 'listServiceKeys',
					action: 'List OKMS service keys',
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
			show: { ...displayOptions?.show, okmsOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['get'] },
		}),
		...resources.resource.descriptionListOkmsResources({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listResources'] },
		}),
		...resources.resource.descriptionGetOkmsResource({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getResource'] },
		}),
		...resources.credential.descriptionListOkmsCredentials({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listCredentials'] },
		}),
		...resources.credential.descriptionGetOkmsCredential({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getCredential'] },
		}),
		...resources.log.descriptionListOkmsLogKinds({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listLogKinds'] },
		}),
		...resources.log.descriptionGetOkmsLogKind({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getLogKind'] },
		}),
		...resources.log.descriptionListOkmsLogSubscriptions({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listLogSubscriptions'] },
		}),
		...resources.log.descriptionGetOkmsLogSubscription({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getLogSubscription'] },
		}),
		...resources.log.descriptionGetOkmsLogUrl({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getLogUrl'] },
		}),
		...resources.secret.descriptionListOkmsSecrets({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listSecrets'] },
		}),
		...resources.secret.descriptionGetOkmsSecret({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getSecret'] },
		}),
		...resources.secret.descriptionListOkmsSecretVersions({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listSecretVersions'] },
		}),
		...resources.secret.descriptionGetOkmsSecretVersion({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getSecretVersion'] },
		}),
		...resources.secret.descriptionGetOkmsSecretConfig({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getSecretConfig'] },
		}),
		...resources.serviceKey.descriptionListOkmsServiceKeys({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listServiceKeys'] },
		}),
		...resources.serviceKey.descriptionGetOkmsServiceKey({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['getServiceKey'] },
		}),
		...resources.reference.descriptionListOkmsReferenceRegions({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listReferenceRegions'] },
		}),
		...resources.reference.descriptionListOkmsReferenceSecretConfigs({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listReferenceSecretConfigs'] },
		}),
		...resources.reference.descriptionListOkmsReferenceServiceKeys({
			...displayOptions,
			show: { ...displayOptions?.show, okmsOperation: ['listReferenceServiceKeys'] },
		}),
	];
}

/**
 * Executes the selected OKMS operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('okmsOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listResources':
			return await resources.resource.executeListOkmsResources.call(this);
		case 'getResource':
			return await resources.resource.executeGetOkmsResource.call(this);
		case 'listCredentials':
			return await resources.credential.executeListOkmsCredentials.call(this);
		case 'getCredential':
			return await resources.credential.executeGetOkmsCredential.call(this);
		case 'listLogKinds':
			return await resources.log.executeListOkmsLogKinds.call(this);
		case 'getLogKind':
			return await resources.log.executeGetOkmsLogKind.call(this);
		case 'listLogSubscriptions':
			return await resources.log.executeListOkmsLogSubscriptions.call(this);
		case 'getLogSubscription':
			return await resources.log.executeGetOkmsLogSubscription.call(this);
		case 'getLogUrl':
			return await resources.log.executeGetOkmsLogUrl.call(this);
		case 'listSecrets':
			return await resources.secret.executeListOkmsSecrets.call(this);
		case 'getSecret':
			return await resources.secret.executeGetOkmsSecret.call(this);
		case 'listSecretVersions':
			return await resources.secret.executeListOkmsSecretVersions.call(this);
		case 'getSecretVersion':
			return await resources.secret.executeGetOkmsSecretVersion.call(this);
		case 'getSecretConfig':
			return await resources.secret.executeGetOkmsSecretConfig.call(this);
		case 'listServiceKeys':
			return await resources.serviceKey.executeListOkmsServiceKeys.call(this);
		case 'getServiceKey':
			return await resources.serviceKey.executeGetOkmsServiceKey.call(this);
		case 'listReferenceRegions':
			return await resources.reference.executeListOkmsReferenceRegions.call(this);
		case 'listReferenceSecretConfigs':
			return await resources.reference.executeListOkmsReferenceSecretConfigs.call(this);
		case 'listReferenceServiceKeys':
			return await resources.reference.executeListOkmsReferenceServiceKeys.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "okms"`);
}

import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeFindByDomain,
	description as descriptionFindByDomain,
} from './findByDomain.operation';
import {
	execute as executeListAttachedDomains,
	description as descriptionListAttachedDomains,
} from './listAttachedDomains.operation';
import {
	execute as executeGetAttachedDomain,
	description as descriptionGetAttachedDomain,
} from './getAttachedDomain.operation';
import {
	execute as executeListDatabases,
	description as descriptionListDatabases,
} from './listDatabases.operation';
import {
	execute as executeGetDatabase,
	description as descriptionGetDatabase,
} from './getDatabase.operation';
import {
	execute as executeListCrons,
	description as descriptionListCrons,
} from './listCrons.operation';
import {
	execute as executeGetCron,
	description as descriptionGetCron,
} from './getCron.operation';
import {
	execute as executeListUsers,
	description as descriptionListUsers,
} from './listUsers.operation';
import {
	execute as executeGetUser,
	description as descriptionGetUser,
} from './getUser.operation';
import {
	execute as executeListTasks,
	description as descriptionListTasks,
} from './listTasks.operation';
import {
	execute as executeGetTask,
	description as descriptionGetTask,
} from './getTask.operation';
import {
	execute as executeListEnvVars,
	description as descriptionListEnvVars,
} from './listEnvVars.operation';
import {
	execute as executeGetEnvVar,
	description as descriptionGetEnvVar,
} from './getEnvVar.operation';
import {
	execute as executeListModules,
	description as descriptionListModules,
} from './listModules.operation';
import {
	execute as executeGetModule,
	description as descriptionGetModule,
} from './getModule.operation';
import {
	execute as executeListRuntimes,
	description as descriptionListRuntimes,
} from './listRuntimes.operation';
import {
	execute as executeGetRuntime,
	description as descriptionGetRuntime,
} from './getRuntime.operation';
import {
	execute as executeGetSsl,
	description as descriptionGetSsl,
} from './getSsl.operation';
import {
	execute as executeGetEmail,
	description as descriptionGetEmail,
} from './getEmail.operation';
import {
	execute as executeGetServiceInfos,
	description as descriptionGetServiceInfos,
} from './getServiceInfos.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'hostingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Find Hosting by Domain', value: 'findByDomain', action: 'Find hosting services linked to a domain' },
				{ name: 'Get', value: 'get', action: 'Get hosting web service details' },
				{ name: 'Get Attached Domain', value: 'getAttachedDomain', action: 'Get an attached domain' },
				{ name: 'Get Cron', value: 'getCron', action: 'Get a cron job' },
				{ name: 'Get Database', value: 'getDatabase', action: 'Get a database' },
				{ name: 'Get Email', value: 'getEmail', action: 'Get email configuration' },
				{ name: 'Get Env Var', value: 'getEnvVar', action: 'Get an environment variable' },
				{ name: 'Get Module', value: 'getModule', action: 'Get a module' },
				{ name: 'Get Runtime', value: 'getRuntime', action: 'Get a runtime' },
				{ name: 'Get Service Infos', value: 'getServiceInfos', action: 'Get service billing infos' },
				{ name: 'Get SSL', value: 'getSsl', action: 'Get SSL certificate info' },
				{ name: 'Get Task', value: 'getTask', action: 'Get a task' },
				{ name: 'Get User', value: 'getUser', action: 'Get a user' },
				{ name: 'List', value: 'list', action: 'List all hosting web services' },
				{ name: 'List Attached Domains', value: 'listAttachedDomains', action: 'List attached domains' },
				{ name: 'List Crons', value: 'listCrons', action: 'List cron jobs' },
				{ name: 'List Databases', value: 'listDatabases', action: 'List databases' },
				{ name: 'List Env Vars', value: 'listEnvVars', action: 'List environment variables' },
				{ name: 'List Modules', value: 'listModules', action: 'List installed modules' },
				{ name: 'List Runtimes', value: 'listRuntimes', action: 'List runtimes' },
				{ name: 'List Tasks', value: 'listTasks', action: 'List tasks' },
				{ name: 'List Users', value: 'listUsers', action: 'List users' },
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['list'] } }),
		...descriptionFindByDomain({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['findByDomain'] } }),
		...descriptionGet({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['get'] } }),
		...descriptionListAttachedDomains({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['listAttachedDomains'] } }),
		...descriptionGetAttachedDomain({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getAttachedDomain'] } }),
		...descriptionListDatabases({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['listDatabases'] } }),
		...descriptionGetDatabase({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getDatabase'] } }),
		...descriptionListCrons({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['listCrons'] } }),
		...descriptionGetCron({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getCron'] } }),
		...descriptionListUsers({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['listUsers'] } }),
		...descriptionGetUser({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getUser'] } }),
		...descriptionListTasks({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['listTasks'] } }),
		...descriptionGetTask({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getTask'] } }),
		...descriptionListEnvVars({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['listEnvVars'] } }),
		...descriptionGetEnvVar({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getEnvVar'] } }),
		...descriptionListModules({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['listModules'] } }),
		...descriptionGetModule({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getModule'] } }),
		...descriptionListRuntimes({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['listRuntimes'] } }),
		...descriptionGetRuntime({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getRuntime'] } }),
		...descriptionGetSsl({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getSsl'] } }),
		...descriptionGetEmail({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getEmail'] } }),
		...descriptionGetServiceInfos({ ...displayOptions, show: { ...displayOptions?.show, hostingOperation: ['getServiceInfos'] } }),
	];
}

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('hostingOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'list': return executeList.call(this, itemIndex);
		case 'findByDomain': return executeFindByDomain.call(this, itemIndex);
		case 'get': return executeGet.call(this, itemIndex);
		case 'listAttachedDomains': return executeListAttachedDomains.call(this, itemIndex);
		case 'getAttachedDomain': return executeGetAttachedDomain.call(this, itemIndex);
		case 'listDatabases': return executeListDatabases.call(this, itemIndex);
		case 'getDatabase': return executeGetDatabase.call(this, itemIndex);
		case 'listCrons': return executeListCrons.call(this, itemIndex);
		case 'getCron': return executeGetCron.call(this, itemIndex);
		case 'listUsers': return executeListUsers.call(this, itemIndex);
		case 'getUser': return executeGetUser.call(this, itemIndex);
		case 'listTasks': return executeListTasks.call(this, itemIndex);
		case 'getTask': return executeGetTask.call(this, itemIndex);
		case 'listEnvVars': return executeListEnvVars.call(this, itemIndex);
		case 'getEnvVar': return executeGetEnvVar.call(this, itemIndex);
		case 'listModules': return executeListModules.call(this, itemIndex);
		case 'getModule': return executeGetModule.call(this, itemIndex);
		case 'listRuntimes': return executeListRuntimes.call(this, itemIndex);
		case 'getRuntime': return executeGetRuntime.call(this, itemIndex);
		case 'getSsl': return executeGetSsl.call(this, itemIndex);
		case 'getEmail': return executeGetEmail.call(this, itemIndex);
		case 'getServiceInfos': return executeGetServiceInfos.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "hosting/web"`);
}

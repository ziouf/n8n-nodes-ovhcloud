import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Domain operations - import all available resources
import * as listAlldoms from './resources/listAlldoms.operation';
import * as getAlldomByServiceName from './resources/getAlldomByServiceName.operation';
import * as listDomains from './resources/listDomains.operation';
import { execute as getDomainByServiceNameExecute } from './resources/getDomainByServiceName.operation';
import { execute as updateDomainByServiceNameExecute } from './resources/updateDomainByServiceName.operation';

// DNS Zone Record operations
import { execute as executeRecordListGet } from './resources/dnsZoneRecord/recordListGet.operation';
import { execute as executeRecordCreatePost } from './resources/dnsZoneRecord/recordCreatePost.operation';
import { execute as executeRecordGetGet } from './resources/dnsZoneRecord/recordGetGet.operation';
import { execute as executeRecordUpdatePut } from './resources/dnsZoneRecord/recordUpdatePut.operation';
import { execute as executeRecordDeleteDelete } from './resources/dnsZoneRecord/recordDeleteDelete.operation';
import { execute as executeRecordFlushPost } from './resources/dnsZoneRecord/recordFlushPost.operation';

// Wildcard operations
import { execute as executeWildcardListGet } from './resources/wildcard/wildcardListGet.operation';
import { execute as executeWildcardCreatePost } from './resources/wildcard/wildcardCreatePost.operation';
import { execute as executeWildcardGetGet } from './resources/wildcard/wildcardGetGet.operation';
import { execute as executeWildcardUpdatePut } from './resources/wildcard/wildcardUpdatePut.operation';
import { execute as executeWildcardDeleteDelete } from './resources/wildcard/wildcardDeleteDelete.operation';
import { execute as executeWildcardFlushPost } from './resources/wildcard/wildcardFlushPost.operation';

// Pool operations
import { execute as executePoolListGet } from './resources/pool/poolListGet.operation';
import { execute as executePoolCreatePost } from './resources/pool/poolCreatePost.operation';
import { execute as executePoolGetGet } from './resources/pool/poolGetGet.operation';
import { execute as executePoolUpdatePut } from './resources/pool/poolUpdatePut.operation';
import { execute as executePoolDeleteDelete } from './resources/pool/poolDeleteDelete.operation';

// Redirect operations
import { execute as executeRedirectListGet } from './resources/redirect/redirectListGet.operation';
import { execute as executeRedirectGetGet } from './resources/redirect/redirectGetGet.operation';
import { execute as executeRedirectCreatePost } from './resources/redirect/redirectCreatePost.operation';
import { execute as executeRedirectUpdatePut } from './resources/redirect/redirectUpdatePut.operation';
import { execute as executeRedirectDeleteDelete } from './resources/redirect/redirectDeleteDelete.operation';

// Whois Privacy operations
import { execute as executeWhoisPrivacyGetGet } from './resources/whoisPrivacy/whoisPrivacyGetGet.operation';
import { execute as executeWhoisPrivacyCreatePost } from './resources/whoisPrivacy/whoisPrivacyCreatePost.operation';
import { execute as executeWhoisPrivacyUpdatePut } from './resources/whoisPrivacy/whoisPrivacyUpdatePut.operation';
import { execute as executeWhoisPrivacyDeleteDelete } from './resources/whoisPrivacy/whoisPrivacyDeleteDelete.operation';

// V2 Domain operations (fusion depuis OvhCloudDomainV2)
import {
	description as descriptionV2ListAllDomains,
	execute as executeV2ListAllDomains,
} from './resources/v2/domainalldomListGet.operation';
import {
	description as descriptionV2GetAllDomain,
	execute as executeV2GetAllDomain,
} from './resources/v2/domainalldomGetGet.operation';
import {
	description as descriptionV2ListAllDomainTasks,
	execute as executeV2ListAllDomainTasks,
} from './resources/v2/domainalldomTaskListGet.operation';
import {
	description as descriptionV2GetAllDomainTask,
	execute as executeV2GetAllDomainTask,
} from './resources/v2/domainalldomTaskGetGet.operation';
import {
	description as descriptionV2ListDomains,
	execute as executeV2ListDomains,
} from './resources/v2/domainNameListGet.operation';
import {
	description as descriptionV2GetDomain,
	execute as executeV2GetDomain,
} from './resources/v2/domainNameGetGet.operation';
import {
	description as descriptionV2UpdateDomain,
	execute as executeV2UpdateDomain,
} from './resources/v2/domainNameUpdatePut.operation';
import {
	description as descriptionV2ListDomainTasks,
	execute as executeV2ListDomainTasks,
} from './resources/v2/domainNameTaskListGet.operation';
import {
	description as descriptionV2GetDomainTask,
	execute as executeV2GetDomainTask,
} from './resources/v2/domainNameTaskGetGet.operation';

export function description() {
	const props: INodeProperties[] = [];

	// API Version selector (parent)
	props.push({
		displayName: 'API Version',
		name: 'apiVersion',
		type: 'options',
		options: [
			{ name: 'V1 API', value: 'v1' },
			{ name: 'V2 API', value: 'v2' },
		],
		default: 'v1',
		description: 'Select the API version to use',
	});

	// Operation picker (alphabetical) - v1 only
	props.push({
		displayName: 'Operation',
		name: 'domainOperation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				apiVersion: ['v1'],
			},
		},
		default: undefined,
		options: [
			{
				displayName: 'Get Alldom By Service Name',
				name: 'getAlldomByServiceName',
				value: 'getAlldomByServiceName',
			},
			{
				displayName: 'Get Domain By Service Name',
				name: 'getDomainByServiceName',
				value: 'getDomainByServiceName',
			},
			{ displayName: 'List Domains', name: 'listDomains', value: 'listDomains' },
			{ displayName: 'List Tasks', name: 'listTasks', value: 'listTasks' },
			{ displayName: 'Pool Create', name: 'poolCreatePost', value: 'poolCreatePost' },
			{ displayName: 'Pool Delete', name: 'poolDeleteDelete', value: 'poolDeleteDelete' },
			{ displayName: 'Pool Get', name: 'poolGetGet', value: 'poolGetGet' },
			{ displayName: 'Pool List', name: 'poolListGet', value: 'poolListGet' },
			{ displayName: 'Pool Update', name: 'poolUpdatePut', value: 'poolUpdatePut' },
			{ displayName: 'Record Create', name: 'recordCreatePost', value: 'recordCreatePost' },
			{ displayName: 'Record Delete', name: 'recordDeleteDelete', value: 'recordDeleteDelete' },
			{ displayName: 'Record Flush', name: 'recordFlushPost', value: 'recordFlushPost' },
			{ displayName: 'Record Get', name: 'recordGetGet', value: 'recordGetGet' },
			{ displayName: 'Record List', name: 'recordListGet', value: 'recordListGet' },
			{ displayName: 'Record Update', name: 'recordUpdatePut', value: 'recordUpdatePut' },
			{ displayName: 'Redirect Create', name: 'redirectCreatePost', value: 'redirectCreatePost' },
			{
				displayName: 'Redirect Delete',
				name: 'redirectDeleteDelete',
				value: 'redirectDeleteDelete',
			},
			{ displayName: 'Redirect Get', name: 'redirectGetGet', value: 'redirectGetGet' },
			{ displayName: 'Redirect List', name: 'redirectListGet', value: 'redirectListGet' },
			{ displayName: 'Redirect Update', name: 'redirectUpdatePut', value: 'redirectUpdatePut' },
			{ displayName: 'List All Domains (alldoms)', name: 'searchAlldom', value: 'searchAlldom' },
			{
				displayName: 'Update Domain By Service Name',
				name: 'updateDomainByServiceName',
				value: 'updateDomainByServiceName',
			},
			{
				displayName: 'Whois Privacy Create',
				name: 'whoisPrivacyCreatePost',
				value: 'whoisPrivacyCreatePost',
			},
			{
				displayName: 'Whois Privacy Delete',
				name: 'whoisPrivacyDeleteDelete',
				value: 'whoisPrivacyDeleteDelete',
			},
			{ displayName: 'Whois Privacy Get', name: 'whoisPrivacyGetGet', value: 'whoisPrivacyGetGet' },
			{
				displayName: 'Whois Privacy Update',
				name: 'whoisPrivacyUpdatePut',
				value: 'whoisPrivacyUpdatePut',
			},
			{ displayName: 'Wildcard Create', name: 'wildcardCreatePost', value: 'wildcardCreatePost' },
			{
				displayName: 'Wildcard Delete',
				name: 'wildcardDeleteDelete',
				value: 'wildcardDeleteDelete',
			},
			{ displayName: 'Wildcard Flush', name: 'wildcardFlushPost', value: 'wildcardFlushPost' },
			{ displayName: 'Wildcard Get', name: 'wildcardGetGet', value: 'wildcardGetGet' },
			{ displayName: 'Wildcard List', name: 'wildcardListGet', value: 'wildcardListGet' },
			{ displayName: 'Wildcard Update', name: 'wildcardUpdatePut', value: 'wildcardUpdatePut' },
		],
	});

	// Separate operation picker for v2
	props.push({
		displayName: 'Operation (v2)',
		name: 'domainOperationV2',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		displayOptions: {
			show: {
				apiVersion: ['v2'],
			},
		},
		options: [
			{ displayName: 'v2 - Get All Domain', name: 'v2GetAllDomain', value: 'v2GetAllDomain' },
			{
				displayName: 'v2 - Get All Domain Task',
				name: 'v2GetAllDomainTask',
				value: 'v2GetAllDomainTask',
			},
			{ displayName: 'v2 - Get Domain', name: 'v2GetDomain', value: 'v2GetDomain' },
			{ displayName: 'v2 - Get Domain Task', name: 'v2GetDomainTask', value: 'v2GetDomainTask' },
			{ displayName: 'v2 - List All Domains', name: 'v2ListAllDomains', value: 'v2ListAllDomains' },
			{
				displayName: 'v2 - List All Domain Tasks',
				name: 'v2ListAllDomainTasks',
				value: 'v2ListAllDomainTasks',
			},
			{ displayName: 'v2 - List Domains', name: 'v2ListDomains', value: 'v2ListDomains' },
			{
				displayName: 'v2 - List Domain Tasks',
				name: 'v2ListDomainTasks',
				value: 'v2ListDomainTasks',
			},
			{ displayName: 'v2 - Update Domain', name: 'v2UpdateDomain', value: 'v2UpdateDomain' },
		],
	});

	// V2 Domain parameters (fusion depuis OvhCloudDomainV2)
	props.push(
		...(descriptionV2GetAllDomain({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2GetAllDomain'],
			},
		}) as INodeProperties[]),
		...(descriptionV2GetAllDomainTask({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2GetAllDomainTask'],
			},
		}) as INodeProperties[]),
		...(descriptionV2GetDomain({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2GetDomain'],
			},
		}) as INodeProperties[]),
		...(descriptionV2GetDomainTask({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2GetDomainTask'],
			},
		}) as INodeProperties[]),
		...(descriptionV2ListAllDomains({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2ListAllDomains'],
			},
		}) as INodeProperties[]),
		...(descriptionV2ListAllDomainTasks({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2ListAllDomainTasks'],
			},
		}) as INodeProperties[]),
		...(descriptionV2ListDomains({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2ListDomains'],
			},
		}) as INodeProperties[]),
		...(descriptionV2ListDomainTasks({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2ListDomainTasks'],
			},
		}) as INodeProperties[]),
		...(descriptionV2UpdateDomain({
			show: {
				apiVersion: ['v2'],
				domainOperationV2: ['v2UpdateDomain'],
			},
		}) as INodeProperties[]),
	);

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const apiVersion = this.getNodeParameter('apiVersion', 0) as string;
	const operation = this.getNodeParameter(
		apiVersion === 'v2' ? 'domainOperationV2' : 'domainOperation',
		0,
	) as string;

	switch (operation) {
		// V1 Domain operations
		case 'searchAlldom':
			return listAlldoms.execute.call(this);
		case 'getAlldomByServiceName':
			return getAlldomByServiceName.execute.call(this);
		case 'listDomains':
			return listDomains.execute.call(this);
		case 'getDomainByServiceName':
			return getDomainByServiceNameExecute.call(this);
		case 'updateDomainByServiceName':
			return updateDomainByServiceNameExecute.call(this);
		// DNS Zone Record operations
		case 'recordListGet':
			return executeRecordListGet.call(this);
		case 'recordCreatePost':
			return executeRecordCreatePost.call(this);
		case 'recordGetGet':
			return executeRecordGetGet.call(this);
		case 'recordUpdatePut':
			return executeRecordUpdatePut.call(this);
		case 'recordDeleteDelete':
			return executeRecordDeleteDelete.call(this);
		case 'recordFlushPost':
			return executeRecordFlushPost.call(this);
		// Wildcard operations
		case 'wildcardListGet':
			return executeWildcardListGet.call(this);
		case 'wildcardCreatePost':
			return executeWildcardCreatePost.call(this);
		case 'wildcardGetGet':
			return executeWildcardGetGet.call(this);
		case 'wildcardUpdatePut':
			return executeWildcardUpdatePut.call(this);
		case 'wildcardDeleteDelete':
			return executeWildcardDeleteDelete.call(this);
		case 'wildcardFlushPost':
			return executeWildcardFlushPost.call(this);
		// Pool operations
		case 'poolListGet':
			return executePoolListGet.call(this);
		case 'poolCreatePost':
			return executePoolCreatePost.call(this);
		case 'poolGetGet':
			return executePoolGetGet.call(this);
		case 'poolUpdatePut':
			return executePoolUpdatePut.call(this);
		case 'poolDeleteDelete':
			return executePoolDeleteDelete.call(this);
		// Redirect operations
		case 'redirectListGet':
			return executeRedirectListGet.call(this);
		case 'redirectGetGet':
			return executeRedirectGetGet.call(this);
		case 'redirectCreatePost':
			return executeRedirectCreatePost.call(this);
		case 'redirectUpdatePut':
			return executeRedirectUpdatePut.call(this);
		case 'redirectDeleteDelete':
			return executeRedirectDeleteDelete.call(this);
		// Whois Privacy operations
		case 'whoisPrivacyGetGet':
			return executeWhoisPrivacyGetGet.call(this);
		case 'whoisPrivacyCreatePost':
			return executeWhoisPrivacyCreatePost.call(this);
		case 'whoisPrivacyUpdatePut':
			return executeWhoisPrivacyUpdatePut.call(this);
		case 'whoisPrivacyDeleteDelete':
			return executeWhoisPrivacyDeleteDelete.call(this);
		// V2 Domain operations (fusion depuis OvhCloudDomainV2)
		case 'v2GetAllDomain':
			return executeV2GetAllDomain.call(this, 0);
		case 'v2GetAllDomainTask':
			return executeV2GetAllDomainTask.call(this, 0);
		case 'v2GetDomain':
			return executeV2GetDomain.call(this, 0);
		case 'v2GetDomainTask':
			return executeV2GetDomainTask.call(this, 0);
		case 'v2ListAllDomains':
			return executeV2ListAllDomains.call(this, 0);
		case 'v2ListAllDomainTasks':
			return executeV2ListAllDomainTasks.call(this, 0);
		case 'v2ListDomains':
			return executeV2ListDomains.call(this, 0);
		case 'v2ListDomainTasks':
			return executeV2ListDomainTasks.call(this, 0);
		case 'v2UpdateDomain':
			return executeV2UpdateDomain.call(this, 0);
		default: {
			throw new Error(`No handler for operation '${operation}'`);
		}
	}
}

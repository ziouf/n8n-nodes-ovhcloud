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

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical)
	props.push({
		displayName: 'Operation',
		name: 'domainOperation',
		type: 'options',
		noDataExpression: true,
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
			{ displayName: 'List All Domains (alldoms)', name: 'searchAlldom', value: 'searchAlldom' },
			{
				displayName: 'Update Domain By Service Name',
				name: 'updateDomainByServiceName',
				value: 'updateDomainByServiceName',
			},
			// DNS Zone Record operations
			{ displayName: 'Record Create', name: 'recordCreatePost', value: 'recordCreatePost' },
			{ displayName: 'Record Delete', name: 'recordDeleteDelete', value: 'recordDeleteDelete' },
			{ displayName: 'Record Flush', name: 'recordFlushPost', value: 'recordFlushPost' },
			{ displayName: 'Record Get', name: 'recordGetGet', value: 'recordGetGet' },
			{ displayName: 'Record List', name: 'recordListGet', value: 'recordListGet' },
			{ displayName: 'Record Update', name: 'recordUpdatePut', value: 'recordUpdatePut' },
			// Pool operations
			{ displayName: 'Pool Create', name: 'poolCreatePost', value: 'poolCreatePost' },
			{ displayName: 'Pool Delete', name: 'poolDeleteDelete', value: 'poolDeleteDelete' },
			{ displayName: 'Pool Get', name: 'poolGetGet', value: 'poolGetGet' },
			{ displayName: 'Pool List', name: 'poolListGet', value: 'poolListGet' },
			{ displayName: 'Pool Update', name: 'poolUpdatePut', value: 'poolUpdatePut' },
			// Redirect operations
			{ displayName: 'Redirect Create', name: 'redirectCreatePost', value: 'redirectCreatePost' },
			{
				displayName: 'Redirect Delete',
				name: 'redirectDeleteDelete',
				value: 'redirectDeleteDelete',
			},
			{ displayName: 'Redirect Get', name: 'redirectGetGet', value: 'redirectGetGet' },
			{ displayName: 'Redirect List', name: 'redirectListGet', value: 'redirectListGet' },
			{ displayName: 'Redirect Update', name: 'redirectUpdatePut', value: 'redirectUpdatePut' },
			// Whois Privacy operations
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
			// Wildcard operations
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

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('domainOperation', 0) as string;

	switch (operation) {
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
		default: {
			throw new Error(`No handler for operation '${operation}'`);
		}
	}
}

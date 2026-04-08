/**
 * @brief IP resource operations for n8n node
 *
 * Provides operations for managing OVH IP blocks including:
 * - List all IP blocks for the authenticated account
 * - Get detailed information about a specific IP block
 * - Update, terminate, park, move, and change organisation of IP blocks
 * - Manage IP services, firewall, game protection, mitigation, and more
 *
 * @remarks
 * IP blocks are managed under `/ip` route.
 * IP block can be entered manually.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import {
	execute as executeTerminate,
	description as descriptionTerminate,
} from './terminate.operation';
import { execute as executePark, description as descriptionPark } from './park.operation';
import { execute as executeMove, description as descriptionMove } from './move.operation';
import {
	execute as executeMoveList,
	description as descriptionMoveList,
} from './moveList.operation';
import {
	execute as executeChangeOrg,
	description as descriptionChangeOrg,
} from './changeOrg.operation';
import {
	execute as executeCampusList,
	description as descriptionCampusList,
} from './campusList.operation';
import {
	execute as executeServiceList,
	description as descriptionServiceList,
} from './serviceList.operation';
import {
	execute as executeServiceGet,
	description as descriptionServiceGet,
} from './serviceGet.operation';
import {
	execute as executeServiceUpdate,
	description as descriptionServiceUpdate,
} from './serviceUpdate.operation';
import {
	execute as executeServiceChangeContact,
	description as descriptionServiceChangeContact,
} from './serviceChangeContact.operation';
import {
	execute as executeServiceConfirmTermination,
	description as descriptionServiceConfirmTermination,
} from './serviceConfirmTermination.operation';
import {
	execute as executeServiceTerminate,
	description as descriptionServiceTerminate,
} from './serviceTerminate.operation';
import {
	execute as executeServiceInfosGet,
	description as descriptionServiceInfosGet,
} from './serviceInfosGet.operation';
import {
	execute as executeServiceInfosUpdate,
	description as descriptionServiceInfosUpdate,
} from './serviceInfosUpdate.operation';
import {
	execute as executeIpAntihackList,
	description as descriptionIpAntihackList,
} from './resources/ipAntihack/list.operation';
import {
	execute as executeIpAntihackGet,
	description as descriptionIpAntihackGet,
} from './resources/ipAntihack/get.operation';
import {
	execute as executeIpAntihackUnblock,
	description as descriptionIpAntihackUnblock,
} from './resources/ipAntihack/unblock.operation';
import {
	execute as executeIpArpList,
	description as descriptionIpArpList,
} from './resources/ipArp/list.operation';
import {
	execute as executeIpArpGet,
	description as descriptionIpArpGet,
} from './resources/ipArp/get.operation';
import {
	execute as executeIpArpUnblock,
	description as descriptionIpArpUnblock,
} from './resources/ipArp/unblock.operation';
import {
	execute as executeIpDelegationList,
	description as descriptionIpDelegationList,
} from './resources/ipDelegation/list.operation';
import {
	execute as executeIpDelegationGet,
	description as descriptionIpDelegationGet,
} from './resources/ipDelegation/get.operation';
import {
	execute as executeIpDelegationCreate,
	description as descriptionIpDelegationCreate,
} from './resources/ipDelegation/create.operation';
import {
	execute as executeIpDelegationDelete,
	description as descriptionIpDelegationDelete,
} from './resources/ipDelegation/delete.operation';
import {
	execute as executeIpFirewallList,
	description as descriptionIpFirewallList,
} from './resources/ipFirewall/list.operation';
import {
	execute as executeIpFirewallGet,
	description as descriptionIpFirewallGet,
} from './resources/ipFirewall/get.operation';
import {
	execute as executeIpFirewallCreate,
	description as descriptionIpFirewallCreate,
} from './resources/ipFirewall/create.operation';
import {
	execute as executeIpFirewallDelete,
	description as descriptionIpFirewallDelete,
} from './resources/ipFirewall/delete.operation';
import {
	execute as executeIpFirewallUpdate,
	description as descriptionIpFirewallUpdate,
} from './resources/ipFirewall/update.operation';
import {
	execute as executeIpFirewallRuleList,
	description as descriptionIpFirewallRuleList,
} from './resources/ipFirewallRule/list.operation';
import {
	execute as executeIpFirewallRuleGet,
	description as descriptionIpFirewallRuleGet,
} from './resources/ipFirewallRule/get.operation';
import {
	execute as executeIpFirewallRuleCreate,
	description as descriptionIpFirewallRuleCreate,
} from './resources/ipFirewallRule/create.operation';
import {
	execute as executeIpFirewallRuleDelete,
	description as descriptionIpFirewallRuleDelete,
} from './resources/ipFirewallRule/delete.operation';
import {
	execute as executeIpGameList,
	description as descriptionIpGameList,
} from './resources/ipGame/list.operation';
import {
	execute as executeIpGameGet,
	description as descriptionIpGameGet,
} from './resources/ipGame/get.operation';
import {
	execute as executeIpGameRuleList,
	description as descriptionIpGameRuleList,
} from './resources/ipGameRule/list.operation';
import {
	execute as executeIpGameRuleGet,
	description as descriptionIpGameRuleGet,
} from './resources/ipGameRule/get.operation';
import {
	execute as executeIpGameRuleCreate,
	description as descriptionIpGameRuleCreate,
} from './resources/ipGameRule/create.operation';
import {
	execute as executeIpGameRuleDelete,
	description as descriptionIpGameRuleDelete,
} from './resources/ipGameRule/delete.operation';
import {
	execute as executeIpMigrationTokenGet,
	description as descriptionIpMigrationTokenGet,
} from './resources/ipMigrationToken/get.operation';
import {
	execute as executeIpMigrationTokenCreate,
	description as descriptionIpMigrationTokenCreate,
} from './resources/ipMigrationToken/create.operation';
import {
	execute as executeIpMitigationGet,
	description as descriptionIpMitigationGet,
} from './resources/ipMitigation/get.operation';
import {
	execute as executeIpPhishingList,
	description as descriptionIpPhishingList,
} from './resources/ipPhishing/list.operation';
import {
	execute as executeIpPhishingGet,
	description as descriptionIpPhishingGet,
} from './resources/ipPhishing/get.operation';
import {
	execute as executeIpReverseList,
	description as descriptionIpReverseList,
} from './resources/ipReverse/list.operation';
import {
	execute as executeIpRipeGet,
	description as descriptionIpRipeGet,
} from './resources/ipRipe/get.operation';
import {
	execute as executeIpSpamList,
	description as descriptionIpSpamList,
} from './resources/ipSpam/list.operation';
import {
	execute as executeIpSpamGet,
	description as descriptionIpSpamGet,
} from './resources/ipSpam/get.operation';
import {
	execute as executeIpSpamGetStats,
	description as descriptionIpSpamGetStats,
} from './resources/ipSpam/getStats.operation';
import {
	execute as executeIpSpamUnblock,
	description as descriptionIpSpamUnblock,
} from './resources/ipSpam/unblock.operation';
import {
	execute as executeIpTaskList,
	description as descriptionIpTaskList,
} from './resources/ipTask/list.operation';
import {
	execute as executeIpTaskGet,
	description as descriptionIpTaskGet,
} from './resources/ipTask/get.operation';
import {
	execute as executeIpBringYourOwnIpListAggregation,
	description as descriptionIpBringYourOwnIpListAggregation,
} from './resources/ipBringYourOwnIp/listAggregation.operation';
import {
	execute as executeIpBringYourOwnIpSlice,
	description as descriptionIpBringYourOwnIpSlice,
} from './resources/ipBringYourOwnIp/slice.operation';
import {
	execute as executeIpBringYourOwnIpAggregate,
	description as descriptionIpBringYourOwnIpAggregate,
} from './resources/ipBringYourOwnIp/aggregate.operation';
import {
	execute as executeIpLicenseList,
	description as descriptionIpLicenseList,
} from './resources/ipLicense/list.operation';
import {
	execute as executeIpMitigationProfilesList,
	description as descriptionIpMitigationProfilesList,
} from './resources/ipMitigationProfiles/list.operation';
import {
	execute as executeIpMitigationProfilesGet,
	description as descriptionIpMitigationProfilesGet,
} from './resources/ipMitigationProfiles/get.operation';
import {
	execute as executeIpMitigationProfilesCreate,
	description as descriptionIpMitigationProfilesCreate,
} from './resources/ipMitigationProfiles/create.operation';
import {
	execute as executeIpMitigationProfilesDelete,
	description as descriptionIpMitigationProfilesDelete,
} from './resources/ipMitigationProfiles/delete.operation';
import {
	execute as executeIpMitigationProfilesUpdate,
	description as descriptionIpMitigationProfilesUpdate,
} from './resources/ipMitigationProfiles/update.operation';
import {
	execute as executeIpRipeUpdate,
	description as descriptionIpRipeUpdate,
} from './resources/ipRipe/update.operation';
import {
	execute as executeIpBringYourOwnIpListSlicing,
	description as descriptionIpBringYourOwnIpListSlicing,
} from './resources/ipBringYourOwnIp/listSlicing.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP Operation',
			name: 'ipOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Campus List',
					value: 'campusList',
					action: 'List IP campuses',
				},
				{
					name: 'Change Organisation',
					value: 'changeOrg',
					action: 'Change organisation of an IP block',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of an IP block',
				},
				{
					name: 'IP Antihack Get',
					value: 'ipAntihackGet',
					action: 'Get antihack entry details',
				},
				{
					name: 'IP Antihack List',
					value: 'ipAntihackList',
					action: 'List antihack entries',
				},
				{
					name: 'IP Antihack Unblock',
					value: 'ipAntihackUnblock',
					action: 'Unblock an IP from antihack',
				},
				{
					name: 'IP ARP Get',
					value: 'ipArpGet',
					action: 'Get ARP entry details',
				},
				{
					name: 'IP ARP List',
					value: 'ipArpList',
					action: 'List ARP entries',
				},
				{
					name: 'IP ARP Unblock',
					value: 'ipArpUnblock',
					action: 'Unblock an IP from ARP',
				},
				{
					name: 'IP BYOIP List Slicing',
					value: 'ipBringYourOwnIpListSlicing',
					action: 'List BYOIP slicing configurations',
				},
				{
					name: 'IP Delegation Create',
					value: 'ipDelegationCreate',
					action: 'Create a delegation target',
				},
				{
					name: 'IP Delegation Delete',
					value: 'ipDelegationDelete',
					action: 'Delete a delegation target',
				},
				{
					name: 'IP Delegation Get',
					value: 'ipDelegationGet',
					action: 'Get delegation target details',
				},
				{
					name: 'IP Delegation List',
					value: 'ipDelegationList',
					action: 'List delegation targets',
				},
				{
					name: 'IP Firewall Create',
					value: 'ipFirewallCreate',
					action: 'Create a firewall entry',
				},
				{
					name: 'IP Firewall Delete',
					value: 'ipFirewallDelete',
					action: 'Delete a firewall entry',
				},
				{
					name: 'IP Firewall Get',
					value: 'ipFirewallGet',
					action: 'Get firewall entry details',
				},
				{
					name: 'IP Firewall List',
					value: 'ipFirewallList',
					action: 'List firewall entries',
				},
				{
					name: 'IP Firewall Rule Create',
					value: 'ipFirewallRuleCreate',
					action: 'Create a firewall rule',
				},
				{
					name: 'IP Firewall Rule Delete',
					value: 'ipFirewallRuleDelete',
					action: 'Delete a firewall rule',
				},
				{
					name: 'IP Firewall Rule Get',
					value: 'ipFirewallRuleGet',
					action: 'Get firewall rule details',
				},
				{
					name: 'IP Firewall Rule List',
					value: 'ipFirewallRuleList',
					action: 'List firewall rules',
				},
				{
					name: 'IP Firewall Update',
					value: 'ipFirewallUpdate',
					action: 'Update a firewall entry',
				},
				{
					name: 'IP Game Get',
					value: 'ipGameGet',
					action: 'Get game protection entry details',
				},
				{
					name: 'IP Game List',
					value: 'ipGameList',
					action: 'List game protection entries',
				},
				{
					name: 'IP Game Rule Create',
					value: 'ipGameRuleCreate',
					action: 'Create a game protection rule',
				},
				{
					name: 'IP Game Rule Delete',
					value: 'ipGameRuleDelete',
					action: 'Delete a game protection rule',
				},
				{
					name: 'IP Game Rule Get',
					value: 'ipGameRuleGet',
					action: 'Get game protection rule details',
				},
				{
					name: 'IP Game Rule List',
					value: 'ipGameRuleList',
					action: 'List game protection rules',
				},
				{
					name: 'IP Migration Token Create',
					value: 'ipMigrationTokenCreate',
					action: 'Generate a migration token',
				},
				{
					name: 'IP Migration Token Get',
					value: 'ipMigrationTokenGet',
					action: 'Get migration token',
				},
				{
					name: 'IP Mitigation Get',
					value: 'ipMitigationGet',
					action: 'Get mitigation details',
				},
				{
					name: 'IP Mitigation Profiles Delete',
					value: 'ipMitigationProfilesDelete',
					action: 'Delete a mitigation profile',
				},
				{
					name: 'IP Mitigation Profiles Update',
					value: 'ipMitigationProfilesUpdate',
					action: 'Update a mitigation profile',
				},
				{
					name: 'IP Phishing Get',
					value: 'ipPhishingGet',
					action: 'Get anti-phishing entry details',
				},
				{
					name: 'IP Phishing List',
					value: 'ipPhishingList',
					action: 'List anti-phishing entries',
				},
				{
					name: 'IP Reverse List',
					value: 'ipReverseList',
					action: 'List reverse DNS entries',
				},
				{
					name: 'IP RIPE Get',
					value: 'ipRipeGet',
					action: 'Get RIPE information',
				},
				{
					name: 'IP RIPE Update',
					value: 'ipRipeUpdate',
					action: 'Update RIPE information',
				},
				{
					name: 'IP Spam Get',
					value: 'ipSpamGet',
					action: 'Get spam entry details',
				},
				{
					name: 'IP Spam Get Stats',
					value: 'ipSpamGetStats',
					action: 'Get spam statistics',
				},
				{
					name: 'IP Spam List',
					value: 'ipSpamList',
					action: 'List spam entries',
				},
				{
					name: 'IP Spam Unblock',
					value: 'ipSpamUnblock',
					action: 'Unblock IP from anti-spam system',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all IP blocks',
				},
				{
					name: 'Move',
					value: 'move',
					action: 'Move an IP block to another service',
				},
				{
					name: 'Move List',
					value: 'moveList',
					action: 'List available move destinations',
				},
				{
					name: 'Park',
					value: 'park',
					action: 'Park an IP block',
				},
				{
					name: 'Service Change Contact',
					value: 'serviceChangeContact',
					action: 'Change contact for an IP service',
				},
				{
					name: 'Service Confirm Termination',
					value: 'serviceConfirmTermination',
					action: 'Confirm IP service termination',
				},
				{
					name: 'Service Get',
					value: 'serviceGet',
					action: 'Get IP service details',
				},
				{
					name: 'Service Infos Get',
					value: 'serviceInfosGet',
					action: 'Get IP service information',
				},
				{
					name: 'Service Infos Update',
					value: 'serviceInfosUpdate',
					action: 'Update IP service information',
				},
				{
					name: 'Service List',
					value: 'serviceList',
					action: 'List IP services',
				},
				{
					name: 'Service Terminate',
					value: 'serviceTerminate',
					action: 'Terminate an IP service',
				},
				{
					name: 'Service Update',
					value: 'serviceUpdate',
					action: 'Update an IP service',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Terminate an IP block',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update an IP block',
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
			show: { ...displayOptions?.show, ipOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['update'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['terminate'] },
		}),
		...descriptionPark({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['park'] },
		}),
		...descriptionMove({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['move'] },
		}),
		...descriptionMoveList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['moveList'] },
		}),
		...descriptionChangeOrg({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['changeOrg'] },
		}),
		...descriptionCampusList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['campusList'] },
		}),
		...descriptionServiceList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['serviceList'] },
		}),
		...descriptionServiceGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['serviceGet'] },
		}),
		...descriptionServiceUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['serviceUpdate'] },
		}),
		...descriptionServiceChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['serviceChangeContact'] },
		}),
		...descriptionServiceConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['serviceConfirmTermination'] },
		}),
		...descriptionServiceTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['serviceTerminate'] },
		}),
		...descriptionServiceInfosGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['serviceInfosGet'] },
		}),
		...descriptionServiceInfosUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['serviceInfosUpdate'] },
		}),
		...descriptionIpAntihackList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipAntihackList'] },
		}),
		...descriptionIpAntihackGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipAntihackGet'] },
		}),
		...descriptionIpAntihackUnblock({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipAntihackUnblock'] },
		}),
		...descriptionIpArpList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipArpList'] },
		}),
		...descriptionIpArpGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipArpGet'] },
		}),
		...descriptionIpArpUnblock({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipArpUnblock'] },
		}),
		...descriptionIpDelegationList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipDelegationList'] },
		}),
		...descriptionIpDelegationGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipDelegationGet'] },
		}),
		...descriptionIpDelegationCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipDelegationCreate'] },
		}),
		...descriptionIpDelegationDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipDelegationDelete'] },
		}),
		...descriptionIpFirewallList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallList'] },
		}),
		...descriptionIpFirewallGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallGet'] },
		}),
		...descriptionIpFirewallCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallCreate'] },
		}),
		...descriptionIpFirewallDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallDelete'] },
		}),
		...descriptionIpFirewallUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallUpdate'] },
		}),
		...descriptionIpFirewallRuleList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallRuleList'] },
		}),
		...descriptionIpFirewallRuleGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallRuleGet'] },
		}),
		...descriptionIpFirewallRuleCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallRuleCreate'] },
		}),
		...descriptionIpFirewallRuleDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipFirewallRuleDelete'] },
		}),
		...descriptionIpGameList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipGameList'] },
		}),
		...descriptionIpGameGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipGameGet'] },
		}),
		...descriptionIpGameRuleList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipGameRuleList'] },
		}),
		...descriptionIpGameRuleGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipGameRuleGet'] },
		}),
		...descriptionIpGameRuleCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipGameRuleCreate'] },
		}),
		...descriptionIpGameRuleDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipGameRuleDelete'] },
		}),
		...descriptionIpMigrationTokenGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipMigrationTokenGet'] },
		}),
		...descriptionIpMigrationTokenCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipMigrationTokenCreate'] },
		}),
		...descriptionIpMitigationGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipMitigationGet'] },
		}),
		...descriptionIpPhishingList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipPhishingList'] },
		}),
		...descriptionIpPhishingGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipPhishingGet'] },
		}),
		...descriptionIpReverseList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipReverseList'] },
		}),
		...descriptionIpRipeGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipRipeGet'] },
		}),
		...descriptionIpSpamList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipSpamList'] },
		}),
		...descriptionIpSpamGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipSpamGet'] },
		}),
		...descriptionIpSpamGetStats({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipSpamGetStats'] },
		}),
		...descriptionIpSpamUnblock({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipSpamUnblock'] },
		}),
		...descriptionIpTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipTaskList'] },
		}),
		...descriptionIpTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipTaskGet'] },
		}),
		...descriptionIpBringYourOwnIpListAggregation({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipBringYourOwnIpListAggregation'] },
		}),
		...descriptionIpBringYourOwnIpSlice({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipBringYourOwnIpSlice'] },
		}),
		...descriptionIpBringYourOwnIpAggregate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipBringYourOwnIpAggregate'] },
		}),
		...descriptionIpLicenseList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipLicenseList'] },
		}),
		...descriptionIpMitigationProfilesList({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipMitigationProfilesList'] },
		}),
		...descriptionIpMitigationProfilesGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipMitigationProfilesGet'] },
		}),
		...descriptionIpMitigationProfilesCreate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipMitigationProfilesCreate'] },
		}),
		...descriptionIpMitigationProfilesDelete({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipMitigationProfilesDelete'] },
		}),
		...descriptionIpMitigationProfilesUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipMitigationProfilesUpdate'] },
		}),
		...descriptionIpRipeUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipRipeUpdate'] },
		}),
		...descriptionIpBringYourOwnIpListSlicing({
			...displayOptions,
			show: { ...displayOptions?.show, ipOperation: ['ipBringYourOwnIpListSlicing'] },
		}),
	];
}

/**
 * Executes the selected IP operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
		case 'park':
			return await executePark.call(this);
		case 'move':
			return await executeMove.call(this);
		case 'moveList':
			return await executeMoveList.call(this);
		case 'changeOrg':
			return await executeChangeOrg.call(this);
		case 'campusList':
			return await executeCampusList.call(this);
		case 'serviceList':
			return await executeServiceList.call(this);
		case 'serviceGet':
			return await executeServiceGet.call(this);
		case 'serviceUpdate':
			return await executeServiceUpdate.call(this);
		case 'serviceChangeContact':
			return await executeServiceChangeContact.call(this);
		case 'serviceConfirmTermination':
			return await executeServiceConfirmTermination.call(this);
		case 'serviceTerminate':
			return await executeServiceTerminate.call(this);
		case 'serviceInfosGet':
			return await executeServiceInfosGet.call(this);
		case 'serviceInfosUpdate':
			return await executeServiceInfosUpdate.call(this);
		case 'ipAntihackList':
			return await executeIpAntihackList.call(this);
		case 'ipAntihackGet':
			return await executeIpAntihackGet.call(this);
		case 'ipAntihackUnblock':
			return await executeIpAntihackUnblock.call(this);
		case 'ipArpList':
			return await executeIpArpList.call(this);
		case 'ipArpGet':
			return await executeIpArpGet.call(this);
		case 'ipArpUnblock':
			return await executeIpArpUnblock.call(this);
		case 'ipDelegationList':
			return await executeIpDelegationList.call(this);
		case 'ipDelegationGet':
			return await executeIpDelegationGet.call(this);
		case 'ipDelegationCreate':
			return await executeIpDelegationCreate.call(this);
		case 'ipDelegationDelete':
			return await executeIpDelegationDelete.call(this);
		case 'ipFirewallList':
			return await executeIpFirewallList.call(this);
		case 'ipFirewallGet':
			return await executeIpFirewallGet.call(this);
		case 'ipFirewallCreate':
			return await executeIpFirewallCreate.call(this);
		case 'ipFirewallDelete':
			return await executeIpFirewallDelete.call(this);
		case 'ipFirewallUpdate':
			return await executeIpFirewallUpdate.call(this);
		case 'ipFirewallRuleList':
			return await executeIpFirewallRuleList.call(this);
		case 'ipFirewallRuleGet':
			return await executeIpFirewallRuleGet.call(this);
		case 'ipFirewallRuleCreate':
			return await executeIpFirewallRuleCreate.call(this);
		case 'ipFirewallRuleDelete':
			return await executeIpFirewallRuleDelete.call(this);
		case 'ipGameList':
			return await executeIpGameList.call(this);
		case 'ipGameGet':
			return await executeIpGameGet.call(this);
		case 'ipGameRuleList':
			return await executeIpGameRuleList.call(this);
		case 'ipGameRuleGet':
			return await executeIpGameRuleGet.call(this);
		case 'ipGameRuleCreate':
			return await executeIpGameRuleCreate.call(this);
		case 'ipGameRuleDelete':
			return await executeIpGameRuleDelete.call(this);
		case 'ipMigrationTokenGet':
			return await executeIpMigrationTokenGet.call(this);
		case 'ipMigrationTokenCreate':
			return await executeIpMigrationTokenCreate.call(this);
		case 'ipMitigationGet':
			return await executeIpMitigationGet.call(this);
		case 'ipPhishingList':
			return await executeIpPhishingList.call(this);
		case 'ipPhishingGet':
			return await executeIpPhishingGet.call(this);
		case 'ipReverseList':
			return await executeIpReverseList.call(this);
		case 'ipRipeGet':
			return await executeIpRipeGet.call(this);
		case 'ipSpamList':
			return await executeIpSpamList.call(this);
		case 'ipSpamGet':
			return await executeIpSpamGet.call(this);
		case 'ipSpamGetStats':
			return await executeIpSpamGetStats.call(this);
		case 'ipSpamUnblock':
			return await executeIpSpamUnblock.call(this);
		case 'ipTaskList':
			return await executeIpTaskList.call(this);
		case 'ipTaskGet':
			return await executeIpTaskGet.call(this);
		case 'ipBringYourOwnIpListAggregation':
			return await executeIpBringYourOwnIpListAggregation.call(this);
		case 'ipBringYourOwnIpSlice':
			return await executeIpBringYourOwnIpSlice.call(this);
		case 'ipBringYourOwnIpAggregate':
			return await executeIpBringYourOwnIpAggregate.call(this);
		case 'ipLicenseList':
			return await executeIpLicenseList.call(this);
		case 'ipMitigationProfilesList':
			return await executeIpMitigationProfilesList.call(this);
		case 'ipMitigationProfilesGet':
			return await executeIpMitigationProfilesGet.call(this);
		case 'ipMitigationProfilesCreate':
			return await executeIpMitigationProfilesCreate.call(this);
		case 'ipMitigationProfilesDelete':
			return await executeIpMitigationProfilesDelete.call(this);
		case 'ipMitigationProfilesUpdate':
			return await executeIpMitigationProfilesUpdate.call(this);
		case 'ipRipeUpdate':
			return await executeIpRipeUpdate.call(this);
		case 'ipBringYourOwnIpListSlicing':
			return await executeIpBringYourOwnIpListSlicing.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ip"`);
}

import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionIpEquilibriumCreatePost,
	execute as executeIpEquilibriumCreatePost,
} from './ipEquilibriumCreatePost.operation';
import {
	description as descriptionIpEquilibriumDeleteDelete,
	execute as executeIpEquilibriumDeleteDelete,
} from './ipEquilibriumDeleteDelete.operation';
import {
	description as descriptionIpEquilibriumDetailDeleteDelete,
	execute as executeIpEquilibriumDetailDeleteDelete,
} from './ipEquilibriumDetailDeleteDelete.operation';
import {
	description as descriptionIpEquilibriumDetailGet,
	execute as executeIpEquilibriumDetailGet,
} from './ipEquilibriumDetailGet.operation';
import {
	description as descriptionIpEquilibriumListGet,
	execute as executeIpEquilibriumListGet,
} from './ipEquilibriumListGet.operation';
import {
	description as descriptionIpEquilibriumUpdatePut,
	execute as executeIpEquilibriumUpdatePut,
} from './ipEquilibriumUpdatePut.operation';
import {
	description as descriptionIpFailoverDeleteDelete,
	execute as executeIpFailoverDeleteDelete,
} from './ipFailoverDeleteDelete.operation';
import {
	description as descriptionIpFailoverGetGet,
	execute as executeIpFailoverGetGet,
} from './ipFailoverGetGet.operation';
import {
	description as descriptionIpFailoverPost,
	execute as executeIpFailoverPost,
} from './ipFailoverPost.operation';
import {
	description as descriptionIpFailoverUpdatePut,
	execute as executeIpFailoverUpdatePut,
} from './ipFailoverUpdatePut.operation';
import {
	description as descriptionIpGetGet,
	execute as executeIpGetGet,
} from './ipGetGet.operation';
import {
	description as descriptionIpListGet,
	execute as executeIpListGet,
} from './ipListGet.operation';
import {
	description as descriptionIpReverseGetGet,
	execute as executeIpReverseGetGet,
} from './ipReverseGetGet.operation';
import {
	description as descriptionIpReverseUpdatePut,
	execute as executeIpReverseUpdatePut,
} from './ipReverseUpdatePut.operation';
import {
	description as descriptionIpAntihackGetGet,
	execute as executeIpAntihackGetGet,
} from './resources/antihack/ipAntihackGetGet.operation';
import {
	description as descriptionIpAntihackListGet,
	execute as executeIpAntihackListGet,
} from './resources/antihack/ipAntihackListGet.operation';
import {
	description as descriptionIpAntihackUnblockPost,
	execute as executeIpAntihackUnblockPost,
} from './resources/antihack/ipAntihackUnblockPost.operation';
import {
	description as descriptionIpArpGetGet,
	execute as executeIpArpGetGet,
} from './resources/arp/ipArpGetGet.operation';
import {
	description as descriptionIpArpListGet,
	execute as executeIpArpListGet,
} from './resources/arp/ipArpListGet.operation';
import {
	description as descriptionIpArpUnblockPost,
	execute as executeIpArpUnblockPost,
} from './resources/arp/ipArpUnblockPost.operation';
import {
	description as descriptionIpBringYourOwnIpAggregateCreatePost,
	execute as executeIpBringYourOwnIpAggregateCreatePost,
} from './resources/bringYourOwnIp/ipBringYourOwnIpAggregateCreatePost.operation';
import {
	description as descriptionIpBringYourOwnIpAggregateListGet,
	execute as executeIpBringYourOwnIpAggregateListGet,
} from './resources/bringYourOwnIp/ipBringYourOwnIpAggregateListGet.operation';
import {
	description as descriptionIpBringYourOwnIpSliceCreatePost,
	execute as executeIpBringYourOwnIpSliceCreatePost,
} from './resources/bringYourOwnIp/ipBringYourOwnIpSliceCreatePost.operation';
import {
	description as descriptionIpBringYourOwnIpSliceListGet,
	execute as executeIpBringYourOwnIpSliceListGet,
} from './resources/bringYourOwnIp/ipBringYourOwnIpSliceListGet.operation';
import {
	description as descriptionIpDelegationCreatePost,
	execute as executeIpDelegationCreatePost,
} from './resources/delegation/ipDelegationCreatePost.operation';
import {
	description as descriptionIpDelegationDeleteDelete,
	execute as executeIpDelegationDeleteDelete,
} from './resources/delegation/ipDelegationDeleteDelete.operation';
import {
	description as descriptionIpDelegationGetGet,
	execute as executeIpDelegationGetGet,
} from './resources/delegation/ipDelegationGetGet.operation';
import {
	description as descriptionIpDelegationListGet,
	execute as executeIpDelegationListGet,
} from './resources/delegation/ipDelegationListGet.operation';
import {
	description as descriptionIpFirewallCreatePost,
	execute as executeIpFirewallCreatePost,
} from './resources/firewall/ipFirewallCreatePost.operation';
import {
	description as descriptionIpFirewallDeleteDelete,
	execute as executeIpFirewallDeleteDelete,
} from './resources/firewall/ipFirewallDeleteDelete.operation';
import {
	description as descriptionIpFirewallGetGet,
	execute as executeIpFirewallGetGet,
} from './resources/firewall/ipFirewallGetGet.operation';
import {
	description as descriptionIpFirewallListGet,
	execute as executeIpFirewallListGet,
} from './resources/firewall/ipFirewallListGet.operation';
import {
	description as descriptionIpFirewallRuleCreatePost,
	execute as executeIpFirewallRuleCreatePost,
} from './resources/firewall/ipFirewallRuleCreatePost.operation';
import {
	description as descriptionIpFirewallRuleDeleteDelete,
	execute as executeIpFirewallRuleDeleteDelete,
} from './resources/firewall/ipFirewallRuleDeleteDelete.operation';
import {
	description as descriptionIpFirewallRuleGetGet,
	execute as executeIpFirewallRuleGetGet,
} from './resources/firewall/ipFirewallRuleGetGet.operation';
import {
	description as descriptionIpFirewallRuleListGet,
	execute as executeIpFirewallRuleListGet,
} from './resources/firewall/ipFirewallRuleListGet.operation';
import {
	description as descriptionIpFirewallUpdatePut,
	execute as executeIpFirewallUpdatePut,
} from './resources/firewall/ipFirewallUpdatePut.operation';
import {
	description as descriptionIpGameGetGet,
	execute as executeIpGameGetGet,
} from './resources/game/ipGameGetGet.operation';
import {
	description as descriptionIpGameListGet,
	execute as executeIpGameListGet,
} from './resources/game/ipGameListGet.operation';
import {
	description as descriptionIpGameRuleCreatePost,
	execute as executeIpGameRuleCreatePost,
} from './resources/game/ipGameRuleCreatePost.operation';
import {
	description as descriptionIpGameRuleDeleteDelete,
	execute as executeIpGameRuleDeleteDelete,
} from './resources/game/ipGameRuleDeleteDelete.operation';
import {
	description as descriptionIpGameRuleGetGet,
	execute as executeIpGameRuleGetGet,
} from './resources/game/ipGameRuleGetGet.operation';
import {
	description as descriptionIpGameRuleListGet,
	execute as executeIpGameRuleListGet,
} from './resources/game/ipGameRuleListGet.operation';
import {
	description as descriptionIpGameUpdatePut,
	execute as executeIpGameUpdatePut,
} from './resources/game/ipGameUpdatePut.operation';
import {
	description as descriptionIpLicenseCloudLinuxGet,
	execute as executeIpLicenseCloudLinuxGet,
} from './resources/license/ipLicenseCloudLinuxGet.operation';
import {
	description as descriptionIpLicenseCpanelGet,
	execute as executeIpLicenseCpanelGet,
} from './resources/license/ipLicenseCpanelGet.operation';
import {
	description as descriptionIpLicenseDirectadminGet,
	execute as executeIpLicenseDirectadminGet,
} from './resources/license/ipLicenseDirectadminGet.operation';
import {
	description as descriptionIpLicensePleskGet,
	execute as executeIpLicensePleskGet,
} from './resources/license/ipLicensePleskGet.operation';
import {
	description as descriptionIpLicenseSqlserverGet,
	execute as executeIpLicenseSqlserverGet,
} from './resources/license/ipLicenseSqlserverGet.operation';
import {
	description as descriptionIpLicenseVirtuozzoGet,
	execute as executeIpLicenseVirtuozzoGet,
} from './resources/license/ipLicenseVirtuozzoGet.operation';
import {
	description as descriptionIpLicenseWindowsGet,
	execute as executeIpLicenseWindowsGet,
} from './resources/license/ipLicenseWindowsGet.operation';
import {
	description as descriptionIpLicenseWorklightGet,
	execute as executeIpLicenseWorklightGet,
} from './resources/license/ipLicenseWorklightGet.operation';
import {
	description as descriptionIpCampusGet,
	execute as executeIpCampusGet,
} from './resources/main/ipCampusGet.operation';
import {
	description as descriptionIpChangeOrgPost,
	execute as executeIpChangeOrgPost,
} from './resources/main/ipChangeOrgPost.operation';
import {
	description as descriptionIpMoveGetGet,
	execute as executeIpMoveGetGet,
} from './resources/main/ipMoveGetGet.operation';
import {
	description as descriptionIpMovePost,
	execute as executeIpMovePost,
} from './resources/main/ipMovePost.operation';
import {
	description as descriptionIpParkPost,
	execute as executeIpParkPost,
} from './resources/main/ipParkPost.operation';
import {
	description as descriptionIpTerminatePost,
	execute as executeIpTerminatePost,
} from './resources/main/ipTerminatePost.operation';
import {
	description as descriptionIpUpdatePut,
	execute as executeIpUpdatePut,
} from './resources/main/ipUpdatePut.operation';
import {
	description as descriptionIpMigrationTokenCreatePost,
	execute as executeIpMigrationTokenCreatePost,
} from './resources/migrationToken/ipMigrationTokenCreatePost.operation';
import {
	description as descriptionIpMigrationTokenGet,
	execute as executeIpMigrationTokenGet,
} from './resources/migrationToken/ipMigrationTokenGet.operation';
import {
	description as descriptionIpMitigationCreatePost,
	execute as executeIpMitigationCreatePost,
} from './resources/mitigation/ipMitigationCreatePost.operation';
import {
	description as descriptionIpMitigationDeleteDelete,
	execute as executeIpMitigationDeleteDelete,
} from './resources/mitigation/ipMitigationDeleteDelete.operation';
import {
	description as descriptionIpMitigationGetGet,
	execute as executeIpMitigationGetGet,
} from './resources/mitigation/ipMitigationGetGet.operation';
import {
	description as descriptionIpMitigationListGet,
	execute as executeIpMitigationListGet,
} from './resources/mitigation/ipMitigationListGet.operation';
import {
	description as descriptionIpMitigationUpdatePut,
	execute as executeIpMitigationUpdatePut,
} from './resources/mitigation/ipMitigationUpdatePut.operation';
import {
	description as descriptionIpMitigationProfilesCreatePost,
	execute as executeIpMitigationProfilesCreatePost,
} from './resources/mitigationProfiles/ipMitigationProfilesCreatePost.operation';
import {
	description as descriptionIpMitigationProfilesDeleteDelete,
	execute as executeIpMitigationProfilesDeleteDelete,
} from './resources/mitigationProfiles/ipMitigationProfilesDeleteDelete.operation';
import {
	description as descriptionIpMitigationProfilesGetGet,
	execute as executeIpMitigationProfilesGetGet,
} from './resources/mitigationProfiles/ipMitigationProfilesGetGet.operation';
import {
	description as descriptionIpMitigationProfilesListGet,
	execute as executeIpMitigationProfilesListGet,
} from './resources/mitigationProfiles/ipMitigationProfilesListGet.operation';
import {
	description as descriptionIpMitigationProfilesUpdatePut,
	execute as executeIpMitigationProfilesUpdatePut,
} from './resources/mitigationProfiles/ipMitigationProfilesUpdatePut.operation';
import {
	description as descriptionIpPhishingGetGet,
	execute as executeIpPhishingGetGet,
} from './resources/phishing/ipPhishingGetGet.operation';
import {
	description as descriptionIpPhishingListGet,
	execute as executeIpPhishingListGet,
} from './resources/phishing/ipPhishingListGet.operation';
import {
	description as descriptionIpReverseCreatePost,
	execute as executeIpReverseCreatePost,
} from './resources/reverse/ipReverseCreatePost.operation';
import {
	description as descriptionIpReverseDeleteDelete,
	execute as executeIpReverseDeleteDelete,
} from './resources/reverse/ipReverseDeleteDelete.operation';
import {
	description as descriptionIpReverseListGet,
	execute as executeIpReverseListGet,
} from './resources/reverse/ipReverseListGet.operation';
import {
	description as descriptionIpRipeGet,
	execute as executeIpRipeGet,
} from './resources/ripe/ipRipeGet.operation';
import {
	description as descriptionIpRipeUpdatePut,
	execute as executeIpRipeUpdatePut,
} from './resources/ripe/ipRipeUpdatePut.operation';
import {
	description as descriptionIpServiceChangeContactPost,
	execute as executeIpServiceChangeContactPost,
} from './resources/service/ipServiceChangeContactPost.operation';
import {
	description as descriptionIpServiceConfirmTerminationPost,
	execute as executeIpServiceConfirmTerminationPost,
} from './resources/service/ipServiceConfirmTerminationPost.operation';
import {
	description as descriptionIpServiceGetGet,
	execute as executeIpServiceGetGet,
} from './resources/service/ipServiceGetGet.operation';
import {
	description as descriptionIpServiceListGet,
	execute as executeIpServiceListGet,
} from './resources/service/ipServiceListGet.operation';
import {
	description as descriptionIpServiceServiceInfosGetGet,
	execute as executeIpServiceServiceInfosGetGet,
} from './resources/service/ipServiceServiceInfosGetGet.operation';
import {
	description as descriptionIpServiceServiceInfosUpdatePut,
	execute as executeIpServiceServiceInfosUpdatePut,
} from './resources/service/ipServiceServiceInfosUpdatePut.operation';
import {
	description as descriptionIpServiceTerminatePost,
	execute as executeIpServiceTerminatePost,
} from './resources/service/ipServiceTerminatePost.operation';
import {
	description as descriptionIpServiceUpdatePut,
	execute as executeIpServiceUpdatePut,
} from './resources/service/ipServiceUpdatePut.operation';
import {
	description as descriptionIpSpamGetGet,
	execute as executeIpSpamGetGet,
} from './resources/spam/ipSpamGetGet.operation';
import {
	description as descriptionIpSpamListGet,
	execute as executeIpSpamListGet,
} from './resources/spam/ipSpamListGet.operation';
import {
	description as descriptionIpSpamStatsGet,
	execute as executeIpSpamStatsGet,
} from './resources/spam/ipSpamStatsGet.operation';
import {
	description as descriptionIpSpamUnblockPost,
	execute as executeIpSpamUnblockPost,
} from './resources/spam/ipSpamUnblockPost.operation';
import {
	description as descriptionIpTaskGetGet,
	execute as executeIpTaskGetGet,
} from './resources/task/ipTaskGetGet.operation';
import {
	description as descriptionIpTaskListGet,
	execute as executeIpTaskListGet,
} from './resources/task/ipTaskListGet.operation';

const { description, execute } = createOperationDispatcher(
	'ipOperation',
	'ovhCloudIp',
	[
	{
		name: 'Add Firewall IP',
		value: 'ipFirewallCreatePost',
		action: 'Add new IP on firewall',
		execute: executeIpFirewallCreatePost,
		description: descriptionIpFirewallCreatePost,
	},
	{
		name: 'Add Firewall Rule',
		value: 'ipFirewallRuleCreatePost',
		action: 'Add new rule on your IP',
		execute: executeIpFirewallRuleCreatePost,
		description: descriptionIpFirewallRuleCreatePost,
	},
	{
		name: 'Add Game Rule',
		value: 'ipGameRuleCreatePost',
		action: 'Add new rule on your IP',
		execute: executeIpGameRuleCreatePost,
		description: descriptionIpGameRuleCreatePost,
	},
	{
		name: 'Add Mitigation IP',
		value: 'ipMitigationCreatePost',
		action: 'Add an IP on mitigation',
		execute: executeIpMitigationCreatePost,
		description: descriptionIpMitigationCreatePost,
	},
	{
		name: 'Add Reverse Delegation',
		value: 'ipDelegationCreatePost',
		action: 'Add target for reverse delegation on IPv6 subnet',
		execute: executeIpDelegationCreatePost,
		description: descriptionIpDelegationCreatePost,
	},
	{
		name: 'Add Reverse DNS',
		value: 'ipReverseCreatePost',
		action: 'Add a reverse DNS entry on an IP',
		execute: executeIpReverseCreatePost,
		description: descriptionIpReverseCreatePost,
	},
	{
		name: 'Aggregate BYOIP',
		value: 'ipBringYourOwnIpAggregateCreatePost',
		action: 'Aggregate sliced BYOIP Additional IPs into a single bigger Additional IP parent',
		execute: executeIpBringYourOwnIpAggregateCreatePost,
		description: descriptionIpBringYourOwnIpAggregateCreatePost,
	},
	{
		name: 'Change IP Organisation',
		value: 'ipChangeOrgPost',
		action: 'Change organisation of this IP',
		execute: executeIpChangeOrgPost,
		description: descriptionIpChangeOrgPost,
	},
	{
		name: 'Change IP Service Contact',
		value: 'ipServiceChangeContactPost',
		action: 'Launch a contact change procedure',
		execute: executeIpServiceChangeContactPost,
		description: descriptionIpServiceChangeContactPost,
	},
	{
		name: 'Confirm IP Service Termination',
		value: 'ipServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: executeIpServiceConfirmTerminationPost,
		description: descriptionIpServiceConfirmTerminationPost,
	},
	{
		name: 'Create Equilibrium',
		value: 'ipEquilibriumCreatePost',
		action: 'Create an equilibrium config for an IP',
		execute: executeIpEquilibriumCreatePost,
		description: descriptionIpEquilibriumCreatePost,
	},
	{
		name: 'Create Failover',
		value: 'ipFailoverPost',
		action: 'Create a failover config for an IP',
		execute: executeIpFailoverPost,
		description: descriptionIpFailoverPost,
	},
	{
		name: 'Create Mitigation Profile',
		value: 'ipMitigationProfilesCreatePost',
		action: 'Create a new profile for one of your IPs',
		execute: executeIpMitigationProfilesCreatePost,
		description: descriptionIpMitigationProfilesCreatePost,
	},
	{
		name: 'Delete Equilibrium',
		value: 'ipEquilibriumDeleteDelete',
		action: 'Delete an equilibrium config for an IP',
		execute: executeIpEquilibriumDeleteDelete,
		description: descriptionIpEquilibriumDeleteDelete,
	},
	{
		name: 'Delete Equilibrium Detail',
		value: 'ipEquilibriumDetailDeleteDelete',
		action: 'Delete an equilibrium config detail',
		execute: executeIpEquilibriumDetailDeleteDelete,
		description: descriptionIpEquilibriumDetailDeleteDelete,
	},
	{
		name: 'Delete Failover',
		value: 'ipFailoverDeleteDelete',
		action: 'Delete a failover config',
		execute: executeIpFailoverDeleteDelete,
		description: descriptionIpFailoverDeleteDelete,
	},
	{
		name: 'Delete Firewall IP',
		value: 'ipFirewallDeleteDelete',
		action: 'Delete IP and rules from firewall',
		execute: executeIpFirewallDeleteDelete,
		description: descriptionIpFirewallDeleteDelete,
	},
	{
		name: 'Delete Firewall Rule',
		value: 'ipFirewallRuleDeleteDelete',
		action: 'Delete a firewall rule',
		execute: executeIpFirewallRuleDeleteDelete,
		description: descriptionIpFirewallRuleDeleteDelete,
	},
	{
		name: 'Delete Game Rule',
		value: 'ipGameRuleDeleteDelete',
		action: 'Delete a game rule',
		execute: executeIpGameRuleDeleteDelete,
		description: descriptionIpGameRuleDeleteDelete,
	},
	{
		name: 'Delete Mitigation IP',
		value: 'ipMitigationDeleteDelete',
		action: 'Delete IP from mitigation',
		execute: executeIpMitigationDeleteDelete,
		description: descriptionIpMitigationDeleteDelete,
	},
	{
		name: 'Delete Mitigation Profile',
		value: 'ipMitigationProfilesDeleteDelete',
		action: 'Delete a mitigation profile',
		execute: executeIpMitigationProfilesDeleteDelete,
		description: descriptionIpMitigationProfilesDeleteDelete,
	},
	{
		name: 'Delete Reverse Delegation',
		value: 'ipDelegationDeleteDelete',
		action: 'Delete a target for reverse delegation on IPv6 subnet',
		execute: executeIpDelegationDeleteDelete,
		description: descriptionIpDelegationDeleteDelete,
	},
	{
		name: 'Delete Reverse DNS',
		value: 'ipReverseDeleteDelete',
		action: 'Delete a reverse DNS entry on one IP',
		execute: executeIpReverseDeleteDelete,
		description: descriptionIpReverseDeleteDelete,
	},
	{
		name: 'Generate Migration Token',
		value: 'ipMigrationTokenCreatePost',
		action: 'Generate a migration token',
		execute: executeIpMigrationTokenCreatePost,
		description: descriptionIpMigrationTokenCreatePost,
	},
	{
		name: 'Get Anti-Hack Blocked IP',
		value: 'ipAntihackGetGet',
		action: 'Get properties of an anti-hack blocked IP',
		execute: executeIpAntihackGetGet,
		description: descriptionIpAntihackGetGet,
	},
	{
		name: 'Get Anti-Phishing Entry',
		value: 'ipPhishingGetGet',
		action: 'Get properties of a phishing entry',
		execute: executeIpPhishingGetGet,
		description: descriptionIpPhishingGetGet,
	},
	{
		name: 'Get ARP Blocked IP',
		value: 'ipArpGetGet',
		action: 'Get properties of an ARP blocked IP',
		execute: executeIpArpGetGet,
		description: descriptionIpArpGetGet,
	},
	{
		name: 'Get BYOIP Aggregate Configs',
		value: 'ipBringYourOwnIpAggregateListGet',
		action: 'Get available aggregation configurations for this BYOIP Additional IP',
		execute: executeIpBringYourOwnIpAggregateListGet,
		description: descriptionIpBringYourOwnIpAggregateListGet,
	},
	{
		name: 'Get BYOIP Slice Configs',
		value: 'ipBringYourOwnIpSliceListGet',
		action: 'Get available slicing configurations for this BYOIP Additional IP',
		execute: executeIpBringYourOwnIpSliceListGet,
		description: descriptionIpBringYourOwnIpSliceListGet,
	},
	{
		name: 'Get Cloud Linux Licenses',
		value: 'ipLicenseCloudLinuxGet',
		action: 'List Cloud Linux licenses associated to this IP',
		execute: executeIpLicenseCloudLinuxGet,
		description: descriptionIpLicenseCloudLinuxGet,
	},
	{
		name: 'Get Cpanel Licenses',
		value: 'ipLicenseCpanelGet',
		action: 'List Cpanel licenses associated to this IP',
		execute: executeIpLicenseCpanelGet,
		description: descriptionIpLicenseCpanelGet,
	},
	{
		name: 'Get DirectAdmin Licenses',
		value: 'ipLicenseDirectadminGet',
		action: 'List DirectAdmin licenses associated to this IP',
		execute: executeIpLicenseDirectadminGet,
		description: descriptionIpLicenseDirectadminGet,
	},
	{
		name: 'Get Equilibrium Detail',
		value: 'ipEquilibriumDetailGet',
		action: 'Get equilibrium detail',
		execute: executeIpEquilibriumDetailGet,
		description: descriptionIpEquilibriumDetailGet,
	},
	{
		name: 'Get Failover',
		value: 'ipFailoverGetGet',
		action: 'Get failover details',
		execute: executeIpFailoverGetGet,
		description: descriptionIpFailoverGetGet,
	},
	{
		name: 'Get Firewall IP',
		value: 'ipFirewallGetGet',
		action: 'Get properties of an IP on firewall',
		execute: executeIpFirewallGetGet,
		description: descriptionIpFirewallGetGet,
	},
	{
		name: 'Get Firewall Rule',
		value: 'ipFirewallRuleGetGet',
		action: 'Get properties of a firewall rule',
		execute: executeIpFirewallRuleGetGet,
		description: descriptionIpFirewallRuleGetGet,
	},
	{
		name: 'Get Game Anti-DDoS IP',
		value: 'ipGameGetGet',
		action: 'Get properties of an IP under game anti-ddos',
		execute: executeIpGameGetGet,
		description: descriptionIpGameGetGet,
	},
	{
		name: 'Get Game Rule',
		value: 'ipGameRuleGetGet',
		action: 'Get properties of a game rule',
		execute: executeIpGameRuleGetGet,
		description: descriptionIpGameRuleGetGet,
	},
	{
		name: 'Get IP',
		value: 'ipGetGet',
		action: 'Get details of an IP address',
		execute: executeIpGetGet,
		description: descriptionIpGetGet,
	},
	{
		name: 'Get IP Campuses',
		value: 'ipCampusGet',
		action: 'Get IP campuses',
		execute: executeIpCampusGet,
		description: descriptionIpCampusGet,
	},
	{
		name: 'Get IP Move Destinations',
		value: 'ipMoveGetGet',
		action: 'List services available as a destination for this IP',
		execute: executeIpMoveGetGet,
		description: descriptionIpMoveGetGet,
	},
	{
		name: 'Get IP Service',
		value: 'ipServiceGetGet',
		action: 'Get properties of an IP service',
		execute: executeIpServiceGetGet,
		description: descriptionIpServiceGetGet,
	},
	{
		name: 'Get IP Service Infos',
		value: 'ipServiceServiceInfosGetGet',
		action: 'Get service information',
		execute: executeIpServiceServiceInfosGetGet,
		description: descriptionIpServiceServiceInfosGetGet,
	},
	{
		name: 'Get IP Task',
		value: 'ipTaskGetGet',
		action: 'Get properties of an IP task',
		execute: executeIpTaskGetGet,
		description: descriptionIpTaskGetGet,
	},
	{
		name: 'Get Migration Token',
		value: 'ipMigrationTokenGet',
		action: 'Get migration token properties',
		execute: executeIpMigrationTokenGet,
		description: descriptionIpMigrationTokenGet,
	},
	{
		name: 'Get Mitigation IP',
		value: 'ipMitigationGetGet',
		action: 'Get properties of an IP on mitigation',
		execute: executeIpMitigationGetGet,
		description: descriptionIpMitigationGetGet,
	},
	{
		name: 'Get Mitigation Profile',
		value: 'ipMitigationProfilesGetGet',
		action: 'Get properties of a mitigation profile',
		execute: executeIpMitigationProfilesGetGet,
		description: descriptionIpMitigationProfilesGetGet,
	},
	{
		name: 'Get Plesk Licenses',
		value: 'ipLicensePleskGet',
		action: 'List Plesk licenses associated to this IP',
		execute: executeIpLicensePleskGet,
		description: descriptionIpLicensePleskGet,
	},
	{
		name: 'Get Reverse',
		value: 'ipReverseGetGet',
		action: 'Get reverse DNS for an IP',
		execute: executeIpReverseGetGet,
		description: descriptionIpReverseGetGet,
	},
	{
		name: 'Get Reverse Delegation',
		value: 'ipDelegationGetGet',
		action: 'Get properties of a reverse delegation target',
		execute: executeIpDelegationGetGet,
		description: descriptionIpDelegationGetGet,
	},
	{
		name: 'Get RIPE Infos',
		value: 'ipRipeGet',
		action: 'Get RIPE information of an IP block',
		execute: executeIpRipeGet,
		description: descriptionIpRipeGet,
	},
	{
		name: 'Get Spam Stats',
		value: 'ipSpamStatsGet',
		action: 'Get statistics about the email traffic',
		execute: executeIpSpamStatsGet,
		description: descriptionIpSpamStatsGet,
	},
	{
		name: 'Get Spamming IP',
		value: 'ipSpamGetGet',
		action: 'Get properties of an IP which is sending spam',
		execute: executeIpSpamGetGet,
		description: descriptionIpSpamGetGet,
	},
	{
		name: 'Get SQL Server Licenses',
		value: 'ipLicenseSqlserverGet',
		action: 'List SQL Server licenses associated to this IP',
		execute: executeIpLicenseSqlserverGet,
		description: descriptionIpLicenseSqlserverGet,
	},
	{
		name: 'Get Virtuozzo Licenses',
		value: 'ipLicenseVirtuozzoGet',
		action: 'List Virtuozzo licenses associated to this IP',
		execute: executeIpLicenseVirtuozzoGet,
		description: descriptionIpLicenseVirtuozzoGet,
	},
	{
		name: 'Get Windows Licenses',
		value: 'ipLicenseWindowsGet',
		action: 'List Windows licenses associated to this IP',
		execute: executeIpLicenseWindowsGet,
		description: descriptionIpLicenseWindowsGet,
	},
	{
		name: 'Get WorkLight Licenses',
		value: 'ipLicenseWorklightGet',
		action: 'List WorkLight licenses associated to this IP',
		execute: executeIpLicenseWorklightGet,
		description: descriptionIpLicenseWorklightGet,
	},
	{
		name: 'List Anti-Hack Blocked IPs',
		value: 'ipAntihackListGet',
		action: 'List anti-hack blocked IPs',
		execute: executeIpAntihackListGet,
		description: descriptionIpAntihackListGet,
	},
	{
		name: 'List Anti-Phishing IPs',
		value: 'ipPhishingListGet',
		action: 'List IPs under anti-phishing',
		execute: executeIpPhishingListGet,
		description: descriptionIpPhishingListGet,
	},
	{
		name: 'List ARP Blocked IPs',
		value: 'ipArpListGet',
		action: 'List ARP blocked IPs',
		execute: executeIpArpListGet,
		description: descriptionIpArpListGet,
	},
	{
		name: 'List Equilibrium',
		value: 'ipEquilibriumListGet',
		action: 'List equilibrium configs for an IP',
		execute: executeIpEquilibriumListGet,
		description: descriptionIpEquilibriumListGet,
	},
	{
		name: 'List Firewall IPs',
		value: 'ipFirewallListGet',
		action: 'List IPs under firewall',
		execute: executeIpFirewallListGet,
		description: descriptionIpFirewallListGet,
	},
	{
		name: 'List Firewall Rules',
		value: 'ipFirewallRuleListGet',
		action: 'List rules for this IP',
		execute: executeIpFirewallRuleListGet,
		description: descriptionIpFirewallRuleListGet,
	},
	{
		name: 'List Game Anti-DDoS IPs',
		value: 'ipGameListGet',
		action: 'List IPs under game anti-ddos',
		execute: executeIpGameListGet,
		description: descriptionIpGameListGet,
	},
	{
		name: 'List Game Rules',
		value: 'ipGameRuleListGet',
		action: 'List IDs of rules configured for this IP',
		execute: executeIpGameRuleListGet,
		description: descriptionIpGameRuleListGet,
	},
	{
		name: 'List IP Services',
		value: 'ipServiceListGet',
		action: 'List your IP services',
		execute: executeIpServiceListGet,
		description: descriptionIpServiceListGet,
	},
	{
		name: 'List IP Tasks',
		value: 'ipTaskListGet',
		action: 'List IP tasks',
		execute: executeIpTaskListGet,
		description: descriptionIpTaskListGet,
	},
	{
		name: 'List IPs',
		value: 'ipListGet',
		action: 'List all IP addresses',
		execute: executeIpListGet,
		description: descriptionIpListGet,
		default: true,
	},
	{
		name: 'List Mitigation IPs',
		value: 'ipMitigationListGet',
		action: 'List IPs under mitigation',
		execute: executeIpMitigationListGet,
		description: descriptionIpMitigationListGet,
	},
	{
		name: 'List Mitigation Profiles',
		value: 'ipMitigationProfilesListGet',
		action: 'Manage mitigation profiles on your IPs',
		execute: executeIpMitigationProfilesListGet,
		description: descriptionIpMitigationProfilesListGet,
	},
	{
		name: 'List Reverse Delegations',
		value: 'ipDelegationListGet',
		action: 'List reverse delegations on IPv6 subnet',
		execute: executeIpDelegationListGet,
		description: descriptionIpDelegationListGet,
	},
	{
		name: 'List Reverse DNS',
		value: 'ipReverseListGet',
		action: 'List reverse DNS entries on your IP',
		execute: executeIpReverseListGet,
		description: descriptionIpReverseListGet,
	},
	{
		name: 'List Spamming IPs',
		value: 'ipSpamListGet',
		action: 'List IPs sending spam',
		execute: executeIpSpamListGet,
		description: descriptionIpSpamListGet,
	},
	{
		name: 'Move IP',
		value: 'ipMovePost',
		action: 'Move this IP to another service',
		execute: executeIpMovePost,
		description: descriptionIpMovePost,
	},
	{
		name: 'Park IP',
		value: 'ipParkPost',
		action: 'Park this IP',
		execute: executeIpParkPost,
		description: descriptionIpParkPost,
	},
	{
		name: 'Slice BYOIP',
		value: 'ipBringYourOwnIpSliceCreatePost',
		action: 'Slice a BYOIP Additional IP into smaller Additional IPs',
		execute: executeIpBringYourOwnIpSliceCreatePost,
		description: descriptionIpBringYourOwnIpSliceCreatePost,
	},
	{
		name: 'Terminate IP',
		value: 'ipTerminatePost',
		action: 'Delete a failover IP',
		execute: executeIpTerminatePost,
		description: descriptionIpTerminatePost,
	},
	{
		name: 'Terminate IP Service',
		value: 'ipServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: executeIpServiceTerminatePost,
		description: descriptionIpServiceTerminatePost,
	},
	{
		name: 'Unblock Anti-Hack IP',
		value: 'ipAntihackUnblockPost',
		action: 'Unblock this IP',
		execute: executeIpAntihackUnblockPost,
		description: descriptionIpAntihackUnblockPost,
	},
	{
		name: 'Unblock ARP IP',
		value: 'ipArpUnblockPost',
		action: 'Unblock this IP',
		execute: executeIpArpUnblockPost,
		description: descriptionIpArpUnblockPost,
	},
	{
		name: 'Unblock Spamming IP',
		value: 'ipSpamUnblockPost',
		action: 'Release the IP from anti-spam system',
		execute: executeIpSpamUnblockPost,
		description: descriptionIpSpamUnblockPost,
	},
	{
		name: 'Update Equilibrium',
		value: 'ipEquilibriumUpdatePut',
		action: 'Update an equilibrium config',
		execute: executeIpEquilibriumUpdatePut,
		description: descriptionIpEquilibriumUpdatePut,
	},
	{
		name: 'Update Failover',
		value: 'ipFailoverUpdatePut',
		action: 'Update a failover config',
		execute: executeIpFailoverUpdatePut,
		description: descriptionIpFailoverUpdatePut,
	},
	{
		name: 'Update Firewall IP',
		value: 'ipFirewallUpdatePut',
		action: 'Alter properties of an IP on firewall',
		execute: executeIpFirewallUpdatePut,
		description: descriptionIpFirewallUpdatePut,
	},
	{
		name: 'Update Game Anti-DDoS IP',
		value: 'ipGameUpdatePut',
		action: 'Alter properties of an IP under game anti-ddos',
		execute: executeIpGameUpdatePut,
		description: descriptionIpGameUpdatePut,
	},
	{
		name: 'Update IP',
		value: 'ipUpdatePut',
		action: 'Alter properties of an IP block',
		execute: executeIpUpdatePut,
		description: descriptionIpUpdatePut,
	},
	{
		name: 'Update IP Service',
		value: 'ipServiceUpdatePut',
		action: 'Alter properties of an IP service',
		execute: executeIpServiceUpdatePut,
		description: descriptionIpServiceUpdatePut,
	},
	{
		name: 'Update IP Service Infos',
		value: 'ipServiceServiceInfosUpdatePut',
		action: 'Update service information',
		execute: executeIpServiceServiceInfosUpdatePut,
		description: descriptionIpServiceServiceInfosUpdatePut,
	},
	{
		name: 'Update Mitigation IP',
		value: 'ipMitigationUpdatePut',
		action: 'Alter properties of an IP on mitigation',
		execute: executeIpMitigationUpdatePut,
		description: descriptionIpMitigationUpdatePut,
	},
	{
		name: 'Update Mitigation Profile',
		value: 'ipMitigationProfilesUpdatePut',
		action: 'Alter properties of a mitigation profile',
		execute: executeIpMitigationProfilesUpdatePut,
		description: descriptionIpMitigationProfilesUpdatePut,
	},
	{
		name: 'Update Reverse',
		value: 'ipReverseUpdatePut',
		action: 'Update reverse DNS for an IP',
		execute: executeIpReverseUpdatePut,
		description: descriptionIpReverseUpdatePut,
	},
	{
		name: 'Update RIPE Infos',
		value: 'ipRipeUpdatePut',
		action: 'Alter RIPE information of an IP block',
		execute: executeIpRipeUpdatePut,
		description: descriptionIpRipeUpdatePut,
	},
	],
);

export { description, execute };

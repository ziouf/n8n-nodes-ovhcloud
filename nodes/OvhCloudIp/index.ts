import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeIpFirewallCreatePost,
	description as descriptionIpFirewallCreatePost,
} from './resources/firewall/ipFirewallCreatePost.operation';
import {
	execute as executeIpFirewallRuleCreatePost,
	description as descriptionIpFirewallRuleCreatePost,
} from './resources/firewall/ipFirewallRuleCreatePost.operation';
import {
	execute as executeIpGameRuleCreatePost,
	description as descriptionIpGameRuleCreatePost,
} from './resources/game/ipGameRuleCreatePost.operation';
import {
	execute as executeIpMitigationCreatePost,
	description as descriptionIpMitigationCreatePost,
} from './resources/mitigation/ipMitigationCreatePost.operation';
import {
	execute as executeIpDelegationCreatePost,
	description as descriptionIpDelegationCreatePost,
} from './resources/delegation/ipDelegationCreatePost.operation';
import {
	execute as executeIpReverseCreatePost,
	description as descriptionIpReverseCreatePost,
} from './resources/reverse/ipReverseCreatePost.operation';
import {
	execute as executeIpBringYourOwnIpAggregateCreatePost,
	description as descriptionIpBringYourOwnIpAggregateCreatePost,
} from './resources/bringYourOwnIp/ipBringYourOwnIpAggregateCreatePost.operation';
import {
	execute as executeIpChangeOrgPost,
	description as descriptionIpChangeOrgPost,
} from './resources/main/ipChangeOrgPost.operation';
import {
	execute as executeIpServiceChangeContactPost,
	description as descriptionIpServiceChangeContactPost,
} from './resources/service/ipServiceChangeContactPost.operation';
import {
	execute as executeIpServiceConfirmTerminationPost,
	description as descriptionIpServiceConfirmTerminationPost,
} from './resources/service/ipServiceConfirmTerminationPost.operation';
import {
	execute as executeIpEquilibriumCreatePost,
	description as descriptionIpEquilibriumCreatePost,
} from './ipEquilibriumCreatePost.operation';
import {
	execute as executeIpFailoverPost,
	description as descriptionIpFailoverPost,
} from './ipFailoverPost.operation';
import {
	execute as executeIpMitigationProfilesCreatePost,
	description as descriptionIpMitigationProfilesCreatePost,
} from './resources/mitigationProfiles/ipMitigationProfilesCreatePost.operation';
import {
	execute as executeIpEquilibriumDeleteDelete,
	description as descriptionIpEquilibriumDeleteDelete,
} from './ipEquilibriumDeleteDelete.operation';
import {
	execute as executeIpEquilibriumDetailDeleteDelete,
	description as descriptionIpEquilibriumDetailDeleteDelete,
} from './ipEquilibriumDetailDeleteDelete.operation';
import {
	execute as executeIpFailoverDeleteDelete,
	description as descriptionIpFailoverDeleteDelete,
} from './ipFailoverDeleteDelete.operation';
import {
	execute as executeIpFirewallDeleteDelete,
	description as descriptionIpFirewallDeleteDelete,
} from './resources/firewall/ipFirewallDeleteDelete.operation';
import {
	execute as executeIpFirewallRuleDeleteDelete,
	description as descriptionIpFirewallRuleDeleteDelete,
} from './resources/firewall/ipFirewallRuleDeleteDelete.operation';
import {
	execute as executeIpGameRuleDeleteDelete,
	description as descriptionIpGameRuleDeleteDelete,
} from './resources/game/ipGameRuleDeleteDelete.operation';
import {
	execute as executeIpMitigationDeleteDelete,
	description as descriptionIpMitigationDeleteDelete,
} from './resources/mitigation/ipMitigationDeleteDelete.operation';
import {
	execute as executeIpMitigationProfilesDeleteDelete,
	description as descriptionIpMitigationProfilesDeleteDelete,
} from './resources/mitigationProfiles/ipMitigationProfilesDeleteDelete.operation';
import {
	execute as executeIpDelegationDeleteDelete,
	description as descriptionIpDelegationDeleteDelete,
} from './resources/delegation/ipDelegationDeleteDelete.operation';
import {
	execute as executeIpReverseDeleteDelete,
	description as descriptionIpReverseDeleteDelete,
} from './resources/reverse/ipReverseDeleteDelete.operation';
import {
	execute as executeIpMigrationTokenCreatePost,
	description as descriptionIpMigrationTokenCreatePost,
} from './resources/migrationToken/ipMigrationTokenCreatePost.operation';
import {
	execute as executeIpAntihackGetGet,
	description as descriptionIpAntihackGetGet,
} from './resources/antihack/ipAntihackGetGet.operation';
import {
	execute as executeIpPhishingGetGet,
	description as descriptionIpPhishingGetGet,
} from './resources/phishing/ipPhishingGetGet.operation';
import {
	execute as executeIpArpGetGet,
	description as descriptionIpArpGetGet,
} from './resources/arp/ipArpGetGet.operation';
import {
	execute as executeIpBringYourOwnIpAggregateListGet,
	description as descriptionIpBringYourOwnIpAggregateListGet,
} from './resources/bringYourOwnIp/ipBringYourOwnIpAggregateListGet.operation';
import {
	execute as executeIpBringYourOwnIpSliceListGet,
	description as descriptionIpBringYourOwnIpSliceListGet,
} from './resources/bringYourOwnIp/ipBringYourOwnIpSliceListGet.operation';
import {
	execute as executeIpLicenseCloudLinuxGet,
	description as descriptionIpLicenseCloudLinuxGet,
} from './resources/license/ipLicenseCloudLinuxGet.operation';
import {
	execute as executeIpLicenseCpanelGet,
	description as descriptionIpLicenseCpanelGet,
} from './resources/license/ipLicenseCpanelGet.operation';
import {
	execute as executeIpLicenseDirectadminGet,
	description as descriptionIpLicenseDirectadminGet,
} from './resources/license/ipLicenseDirectadminGet.operation';
import {
	execute as executeIpEquilibriumDetailGet,
	description as descriptionIpEquilibriumDetailGet,
} from './ipEquilibriumDetailGet.operation';
import {
	execute as executeIpFailoverGetGet,
	description as descriptionIpFailoverGetGet,
} from './ipFailoverGetGet.operation';
import {
	execute as executeIpFirewallGetGet,
	description as descriptionIpFirewallGetGet,
} from './resources/firewall/ipFirewallGetGet.operation';
import {
	execute as executeIpFirewallRuleGetGet,
	description as descriptionIpFirewallRuleGetGet,
} from './resources/firewall/ipFirewallRuleGetGet.operation';
import {
	execute as executeIpGameGetGet,
	description as descriptionIpGameGetGet,
} from './resources/game/ipGameGetGet.operation';
import {
	execute as executeIpGameRuleGetGet,
	description as descriptionIpGameRuleGetGet,
} from './resources/game/ipGameRuleGetGet.operation';
import {
	execute as executeIpGetGet,
	description as descriptionIpGetGet,
} from './ipGetGet.operation';
import {
	execute as executeIpCampusGet,
	description as descriptionIpCampusGet,
} from './resources/main/ipCampusGet.operation';
import {
	execute as executeIpMoveGetGet,
	description as descriptionIpMoveGetGet,
} from './resources/main/ipMoveGetGet.operation';
import {
	execute as executeIpServiceGetGet,
	description as descriptionIpServiceGetGet,
} from './resources/service/ipServiceGetGet.operation';
import {
	execute as executeIpServiceServiceInfosGetGet,
	description as descriptionIpServiceServiceInfosGetGet,
} from './resources/service/ipServiceServiceInfosGetGet.operation';
import {
	execute as executeIpTaskGetGet,
	description as descriptionIpTaskGetGet,
} from './resources/task/ipTaskGetGet.operation';
import {
	execute as executeIpMigrationTokenGet,
	description as descriptionIpMigrationTokenGet,
} from './resources/migrationToken/ipMigrationTokenGet.operation';
import {
	execute as executeIpMitigationGetGet,
	description as descriptionIpMitigationGetGet,
} from './resources/mitigation/ipMitigationGetGet.operation';
import {
	execute as executeIpMitigationProfilesGetGet,
	description as descriptionIpMitigationProfilesGetGet,
} from './resources/mitigationProfiles/ipMitigationProfilesGetGet.operation';
import {
	execute as executeIpLicensePleskGet,
	description as descriptionIpLicensePleskGet,
} from './resources/license/ipLicensePleskGet.operation';
import {
	execute as executeIpReverseGetGet,
	description as descriptionIpReverseGetGet,
} from './ipReverseGetGet.operation';
import {
	execute as executeIpDelegationGetGet,
	description as descriptionIpDelegationGetGet,
} from './resources/delegation/ipDelegationGetGet.operation';
import {
	execute as executeIpRipeGet,
	description as descriptionIpRipeGet,
} from './resources/ripe/ipRipeGet.operation';
import {
	execute as executeIpSpamStatsGet,
	description as descriptionIpSpamStatsGet,
} from './resources/spam/ipSpamStatsGet.operation';
import {
	execute as executeIpSpamGetGet,
	description as descriptionIpSpamGetGet,
} from './resources/spam/ipSpamGetGet.operation';
import {
	execute as executeIpLicenseSqlserverGet,
	description as descriptionIpLicenseSqlserverGet,
} from './resources/license/ipLicenseSqlserverGet.operation';
import {
	execute as executeIpLicenseVirtuozzoGet,
	description as descriptionIpLicenseVirtuozzoGet,
} from './resources/license/ipLicenseVirtuozzoGet.operation';
import {
	execute as executeIpLicenseWindowsGet,
	description as descriptionIpLicenseWindowsGet,
} from './resources/license/ipLicenseWindowsGet.operation';
import {
	execute as executeIpLicenseWorklightGet,
	description as descriptionIpLicenseWorklightGet,
} from './resources/license/ipLicenseWorklightGet.operation';
import {
	execute as executeIpAntihackListGet,
	description as descriptionIpAntihackListGet,
} from './resources/antihack/ipAntihackListGet.operation';
import {
	execute as executeIpPhishingListGet,
	description as descriptionIpPhishingListGet,
} from './resources/phishing/ipPhishingListGet.operation';
import {
	execute as executeIpArpListGet,
	description as descriptionIpArpListGet,
} from './resources/arp/ipArpListGet.operation';
import {
	execute as executeIpEquilibriumListGet,
	description as descriptionIpEquilibriumListGet,
} from './ipEquilibriumListGet.operation';
import {
	execute as executeIpFirewallListGet,
	description as descriptionIpFirewallListGet,
} from './resources/firewall/ipFirewallListGet.operation';
import {
	execute as executeIpFirewallRuleListGet,
	description as descriptionIpFirewallRuleListGet,
} from './resources/firewall/ipFirewallRuleListGet.operation';
import {
	execute as executeIpGameListGet,
	description as descriptionIpGameListGet,
} from './resources/game/ipGameListGet.operation';
import {
	execute as executeIpGameRuleListGet,
	description as descriptionIpGameRuleListGet,
} from './resources/game/ipGameRuleListGet.operation';
import {
	execute as executeIpServiceListGet,
	description as descriptionIpServiceListGet,
} from './resources/service/ipServiceListGet.operation';
import {
	execute as executeIpTaskListGet,
	description as descriptionIpTaskListGet,
} from './resources/task/ipTaskListGet.operation';
import {
	execute as executeIpListGet,
	description as descriptionIpListGet,
} from './ipListGet.operation';
import {
	execute as executeIpMitigationListGet,
	description as descriptionIpMitigationListGet,
} from './resources/mitigation/ipMitigationListGet.operation';
import {
	execute as executeIpMitigationProfilesListGet,
	description as descriptionIpMitigationProfilesListGet,
} from './resources/mitigationProfiles/ipMitigationProfilesListGet.operation';
import {
	execute as executeIpDelegationListGet,
	description as descriptionIpDelegationListGet,
} from './resources/delegation/ipDelegationListGet.operation';
import {
	execute as executeIpReverseListGet,
	description as descriptionIpReverseListGet,
} from './resources/reverse/ipReverseListGet.operation';
import {
	execute as executeIpSpamListGet,
	description as descriptionIpSpamListGet,
} from './resources/spam/ipSpamListGet.operation';
import {
	execute as executeIpMovePost,
	description as descriptionIpMovePost,
} from './resources/main/ipMovePost.operation';
import {
	execute as executeIpParkPost,
	description as descriptionIpParkPost,
} from './resources/main/ipParkPost.operation';
import {
	execute as executeIpBringYourOwnIpSliceCreatePost,
	description as descriptionIpBringYourOwnIpSliceCreatePost,
} from './resources/bringYourOwnIp/ipBringYourOwnIpSliceCreatePost.operation';
import {
	execute as executeIpTerminatePost,
	description as descriptionIpTerminatePost,
} from './resources/main/ipTerminatePost.operation';
import {
	execute as executeIpServiceTerminatePost,
	description as descriptionIpServiceTerminatePost,
} from './resources/service/ipServiceTerminatePost.operation';
import {
	execute as executeIpAntihackUnblockPost,
	description as descriptionIpAntihackUnblockPost,
} from './resources/antihack/ipAntihackUnblockPost.operation';
import {
	execute as executeIpArpUnblockPost,
	description as descriptionIpArpUnblockPost,
} from './resources/arp/ipArpUnblockPost.operation';
import {
	execute as executeIpSpamUnblockPost,
	description as descriptionIpSpamUnblockPost,
} from './resources/spam/ipSpamUnblockPost.operation';
import {
	execute as executeIpEquilibriumUpdatePut,
	description as descriptionIpEquilibriumUpdatePut,
} from './ipEquilibriumUpdatePut.operation';
import {
	execute as executeIpFailoverUpdatePut,
	description as descriptionIpFailoverUpdatePut,
} from './ipFailoverUpdatePut.operation';
import {
	execute as executeIpFirewallUpdatePut,
	description as descriptionIpFirewallUpdatePut,
} from './resources/firewall/ipFirewallUpdatePut.operation';
import {
	execute as executeIpGameUpdatePut,
	description as descriptionIpGameUpdatePut,
} from './resources/game/ipGameUpdatePut.operation';
import {
	execute as executeIpUpdatePut,
	description as descriptionIpUpdatePut,
} from './resources/main/ipUpdatePut.operation';
import {
	execute as executeIpServiceUpdatePut,
	description as descriptionIpServiceUpdatePut,
} from './resources/service/ipServiceUpdatePut.operation';
import {
	execute as executeIpServiceServiceInfosUpdatePut,
	description as descriptionIpServiceServiceInfosUpdatePut,
} from './resources/service/ipServiceServiceInfosUpdatePut.operation';
import {
	execute as executeIpMitigationUpdatePut,
	description as descriptionIpMitigationUpdatePut,
} from './resources/mitigation/ipMitigationUpdatePut.operation';
import {
	execute as executeIpMitigationProfilesUpdatePut,
	description as descriptionIpMitigationProfilesUpdatePut,
} from './resources/mitigationProfiles/ipMitigationProfilesUpdatePut.operation';
import {
	execute as executeIpReverseUpdatePut,
	description as descriptionIpReverseUpdatePut,
} from './ipReverseUpdatePut.operation';
import {
	execute as executeIpRipeUpdatePut,
	description as descriptionIpRipeUpdatePut,
} from './resources/ripe/ipRipeUpdatePut.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'ipOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Add Firewall IP',
				value: 'ipFirewallCreatePost',
				action: 'Add new IP on firewall',
			},
			{
				name: 'Add Firewall Rule',
				value: 'ipFirewallRuleCreatePost',
				action: 'Add new rule on your IP',
			},
			{
				name: 'Add Game Rule',
				value: 'ipGameRuleCreatePost',
				action: 'Add new rule on your IP',
			},
			{
				name: 'Add Mitigation IP',
				value: 'ipMitigationCreatePost',
				action: 'Add an IP on mitigation',
			},
			{
				name: 'Add Reverse Delegation',
				value: 'ipDelegationCreatePost',
				action: 'Add target for reverse delegation on IPv6 subnet',
			},
			{
				name: 'Add Reverse DNS',
				value: 'ipReverseCreatePost',
				action: 'Add a reverse DNS entry on an IP',
			},
			{
				name: 'Aggregate BYOIP',
				value: 'ipBringYourOwnIpAggregateCreatePost',
				action: 'Aggregate sliced BYOIP Additional IPs into a single bigger Additional IP parent',
			},
			{
				name: 'Change IP Organisation',
				value: 'ipChangeOrgPost',
				action: 'Change organisation of this IP',
			},
			{
				name: 'Change IP Service Contact',
				value: 'ipServiceChangeContactPost',
				action: 'Launch a contact change procedure',
			},
			{
				name: 'Confirm IP Service Termination',
				value: 'ipServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Create Equilibrium',
				value: 'ipEquilibriumCreatePost',
				action: 'Create an equilibrium config for an IP',
			},
			{
				name: 'Create Failover',
				value: 'ipFailoverPost',
				action: 'Create a failover config for an IP',
			},
			{
				name: 'Create Mitigation Profile',
				value: 'ipMitigationProfilesCreatePost',
				action: 'Create a new profile for one of your IPs',
			},
			{
				name: 'Delete Equilibrium',
				value: 'ipEquilibriumDeleteDelete',
				action: 'Delete an equilibrium config for an IP',
			},
			{
				name: 'Delete Equilibrium Detail',
				value: 'ipEquilibriumDetailDeleteDelete',
				action: 'Delete an equilibrium config detail',
			},
			{
				name: 'Delete Failover',
				value: 'ipFailoverDeleteDelete',
				action: 'Delete a failover config',
			},
			{
				name: 'Delete Firewall IP',
				value: 'ipFirewallDeleteDelete',
				action: 'Delete IP and rules from firewall',
			},
			{
				name: 'Delete Firewall Rule',
				value: 'ipFirewallRuleDeleteDelete',
				action: 'Delete a firewall rule',
			},
			{
				name: 'Delete Game Rule',
				value: 'ipGameRuleDeleteDelete',
				action: 'Delete a game rule',
			},
			{
				name: 'Delete Mitigation IP',
				value: 'ipMitigationDeleteDelete',
				action: 'Delete IP from mitigation',
			},
			{
				name: 'Delete Mitigation Profile',
				value: 'ipMitigationProfilesDeleteDelete',
				action: 'Delete a mitigation profile',
			},
			{
				name: 'Delete Reverse Delegation',
				value: 'ipDelegationDeleteDelete',
				action: 'Delete a target for reverse delegation on IPv6 subnet',
			},
			{
				name: 'Delete Reverse DNS',
				value: 'ipReverseDeleteDelete',
				action: 'Delete a reverse DNS entry on one IP',
			},
			{
				name: 'Generate Migration Token',
				value: 'ipMigrationTokenCreatePost',
				action: 'Generate a migration token',
			},
			{
				name: 'Get Anti-Hack Blocked IP',
				value: 'ipAntihackGetGet',
				action: 'Get properties of an anti-hack blocked IP',
			},
			{
				name: 'Get Anti-Phishing Entry',
				value: 'ipPhishingGetGet',
				action: 'Get properties of a phishing entry',
			},
			{
				name: 'Get ARP Blocked IP',
				value: 'ipArpGetGet',
				action: 'Get properties of an ARP blocked IP',
			},
			{
				name: 'Get BYOIP Aggregate Configs',
				value: 'ipBringYourOwnIpAggregateListGet',
				action: 'Get available aggregation configurations for this BYOIP Additional IP',
			},
			{
				name: 'Get BYOIP Slice Configs',
				value: 'ipBringYourOwnIpSliceListGet',
				action: 'Get available slicing configurations for this BYOIP Additional IP',
			},
			{
				name: 'Get Cloud Linux Licenses',
				value: 'ipLicenseCloudLinuxGet',
				action: 'List Cloud Linux licenses associated to this IP',
			},
			{
				name: 'Get Cpanel Licenses',
				value: 'ipLicenseCpanelGet',
				action: 'List Cpanel licenses associated to this IP',
			},
			{
				name: 'Get DirectAdmin Licenses',
				value: 'ipLicenseDirectadminGet',
				action: 'List DirectAdmin licenses associated to this IP',
			},
			{
				name: 'Get Equilibrium Detail',
				value: 'ipEquilibriumDetailGet',
				action: 'Get equilibrium detail',
			},
			{
				name: 'Get Failover',
				value: 'ipFailoverGetGet',
				action: 'Get failover details',
			},
			{
				name: 'Get Firewall IP',
				value: 'ipFirewallGetGet',
				action: 'Get properties of an IP on firewall',
			},
			{
				name: 'Get Firewall Rule',
				value: 'ipFirewallRuleGetGet',
				action: 'Get properties of a firewall rule',
			},
			{
				name: 'Get Game Anti-DDoS IP',
				value: 'ipGameGetGet',
				action: 'Get properties of an IP under game anti-ddos',
			},
			{
				name: 'Get Game Rule',
				value: 'ipGameRuleGetGet',
				action: 'Get properties of a game rule',
			},
			{
				name: 'Get IP',
				value: 'ipGetGet',
				action: 'Get details of an IP address',
			},
			{
				name: 'Get IP Campuses',
				value: 'ipCampusGet',
				action: 'Get IP campuses',
			},
			{
				name: 'Get IP Move Destinations',
				value: 'ipMoveGetGet',
				action: 'List services available as a destination for this IP',
			},
			{
				name: 'Get IP Service',
				value: 'ipServiceGetGet',
				action: 'Get properties of an IP service',
			},
			{
				name: 'Get IP Service Infos',
				value: 'ipServiceServiceInfosGetGet',
				action: 'Get service information',
			},
			{
				name: 'Get IP Task',
				value: 'ipTaskGetGet',
				action: 'Get properties of an IP task',
			},
			{
				name: 'Get Migration Token',
				value: 'ipMigrationTokenGet',
				action: 'Get migration token properties',
			},
			{
				name: 'Get Mitigation IP',
				value: 'ipMitigationGetGet',
				action: 'Get properties of an IP on mitigation',
			},
			{
				name: 'Get Mitigation Profile',
				value: 'ipMitigationProfilesGetGet',
				action: 'Get properties of a mitigation profile',
			},
			{
				name: 'Get Plesk Licenses',
				value: 'ipLicensePleskGet',
				action: 'List Plesk licenses associated to this IP',
			},
			{
				name: 'Get Reverse',
				value: 'ipReverseGetGet',
				action: 'Get reverse DNS for an IP',
			},
			{
				name: 'Get Reverse Delegation',
				value: 'ipDelegationGetGet',
				action: 'Get properties of a reverse delegation target',
			},
			{
				name: 'Get RIPE Infos',
				value: 'ipRipeGet',
				action: 'Get RIPE information of an IP block',
			},
			{
				name: 'Get Spam Stats',
				value: 'ipSpamStatsGet',
				action: 'Get statistics about the email traffic',
			},
			{
				name: 'Get Spamming IP',
				value: 'ipSpamGetGet',
				action: 'Get properties of an IP which is sending spam',
			},
			{
				name: 'Get SQL Server Licenses',
				value: 'ipLicenseSqlserverGet',
				action: 'List SQL Server licenses associated to this IP',
			},
			{
				name: 'Get Virtuozzo Licenses',
				value: 'ipLicenseVirtuozzoGet',
				action: 'List Virtuozzo licenses associated to this IP',
			},
			{
				name: 'Get Windows Licenses',
				value: 'ipLicenseWindowsGet',
				action: 'List Windows licenses associated to this IP',
			},
			{
				name: 'Get WorkLight Licenses',
				value: 'ipLicenseWorklightGet',
				action: 'List WorkLight licenses associated to this IP',
			},
			{
				name: 'List Anti-Hack Blocked IPs',
				value: 'ipAntihackListGet',
				action: 'List anti-hack blocked IPs',
			},
			{
				name: 'List Anti-Phishing IPs',
				value: 'ipPhishingListGet',
				action: 'List IPs under anti-phishing',
			},
			{
				name: 'List ARP Blocked IPs',
				value: 'ipArpListGet',
				action: 'List ARP blocked IPs',
			},
			{
				name: 'List Equilibrium',
				value: 'ipEquilibriumListGet',
				action: 'List equilibrium configs for an IP',
			},
			{
				name: 'List Firewall IPs',
				value: 'ipFirewallListGet',
				action: 'List IPs under firewall',
			},
			{
				name: 'List Firewall Rules',
				value: 'ipFirewallRuleListGet',
				action: 'List rules for this IP',
			},
			{
				name: 'List Game Anti-DDoS IPs',
				value: 'ipGameListGet',
				action: 'List IPs under game anti-ddos',
			},
			{
				name: 'List Game Rules',
				value: 'ipGameRuleListGet',
				action: 'List IDs of rules configured for this IP',
			},
			{
				name: 'List IP Services',
				value: 'ipServiceListGet',
				action: 'List your IP services',
			},
			{
				name: 'List IP Tasks',
				value: 'ipTaskListGet',
				action: 'List IP tasks',
			},
			{
				name: 'List IPs',
				value: 'ipListGet',
				action: 'List all IP addresses',
			},
			{
				name: 'List Mitigation IPs',
				value: 'ipMitigationListGet',
				action: 'List IPs under mitigation',
			},
			{
				name: 'List Mitigation Profiles',
				value: 'ipMitigationProfilesListGet',
				action: 'Manage mitigation profiles on your IPs',
			},
			{
				name: 'List Reverse Delegations',
				value: 'ipDelegationListGet',
				action: 'List reverse delegations on IPv6 subnet',
			},
			{
				name: 'List Reverse DNS',
				value: 'ipReverseListGet',
				action: 'List reverse DNS entries on your IP',
			},
			{
				name: 'List Spamming IPs',
				value: 'ipSpamListGet',
				action: 'List IPs sending spam',
			},
			{
				name: 'Move IP',
				value: 'ipMovePost',
				action: 'Move this IP to another service',
			},
			{
				name: 'Park IP',
				value: 'ipParkPost',
				action: 'Park this IP',
			},
			{
				name: 'Slice BYOIP',
				value: 'ipBringYourOwnIpSliceCreatePost',
				action: 'Slice a BYOIP Additional IP into smaller Additional IPs',
			},
			{
				name: 'Terminate IP',
				value: 'ipTerminatePost',
				action: 'Delete a failover IP',
			},
			{
				name: 'Terminate IP Service',
				value: 'ipServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Unblock Anti-Hack IP',
				value: 'ipAntihackUnblockPost',
				action: 'Unblock this IP',
			},
			{
				name: 'Unblock ARP IP',
				value: 'ipArpUnblockPost',
				action: 'Unblock this IP',
			},
			{
				name: 'Unblock Spamming IP',
				value: 'ipSpamUnblockPost',
				action: 'Release the IP from anti-spam system',
			},
			{
				name: 'Update Equilibrium',
				value: 'ipEquilibriumUpdatePut',
				action: 'Update an equilibrium config',
			},
			{
				name: 'Update Failover',
				value: 'ipFailoverUpdatePut',
				action: 'Update a failover config',
			},
			{
				name: 'Update Firewall IP',
				value: 'ipFirewallUpdatePut',
				action: 'Alter properties of an IP on firewall',
			},
			{
				name: 'Update Game Anti-DDoS IP',
				value: 'ipGameUpdatePut',
				action: 'Alter properties of an IP under game anti-ddos',
			},
			{
				name: 'Update IP',
				value: 'ipUpdatePut',
				action: 'Alter properties of an IP block',
			},
			{
				name: 'Update IP Service',
				value: 'ipServiceUpdatePut',
				action: 'Alter properties of an IP service',
			},
			{
				name: 'Update IP Service Infos',
				value: 'ipServiceServiceInfosUpdatePut',
				action: 'Update service information',
			},
			{
				name: 'Update Mitigation IP',
				value: 'ipMitigationUpdatePut',
				action: 'Alter properties of an IP on mitigation',
			},
			{
				name: 'Update Mitigation Profile',
				value: 'ipMitigationProfilesUpdatePut',
				action: 'Alter properties of a mitigation profile',
			},
			{
				name: 'Update Reverse',
				value: 'ipReverseUpdatePut',
				action: 'Update reverse DNS for an IP',
			},
			{
				name: 'Update RIPE Infos',
				value: 'ipRipeUpdatePut',
				action: 'Alter RIPE information of an IP block',
			},

			],
			default: 'ipListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionIpFirewallCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipFirewallCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpFirewallRuleCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipFirewallRuleCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpGameRuleCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipGameRuleCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipMitigationCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpDelegationCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipDelegationCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpReverseCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipReverseCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpBringYourOwnIpAggregateCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipBringYourOwnIpAggregateCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpChangeOrgPost({
			...displayOptions,
			show: { ipOperation: ['ipChangeOrgPost'] },
		}) as INodeProperties[]),
		...(descriptionIpServiceChangeContactPost({
			...displayOptions,
			show: { ipOperation: ['ipServiceChangeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionIpServiceConfirmTerminationPost({
			...displayOptions,
			show: { ipOperation: ['ipServiceConfirmTerminationPost'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpFailoverPost({
			...displayOptions,
			show: { ipOperation: ['ipFailoverPost'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationProfilesCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipMitigationProfilesCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumDetailDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumDetailDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpFailoverDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipFailoverDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpFirewallDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipFirewallDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpFirewallRuleDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipFirewallRuleDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpGameRuleDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipGameRuleDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipMitigationDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationProfilesDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipMitigationProfilesDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpDelegationDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipDelegationDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpReverseDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipReverseDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpMigrationTokenCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipMigrationTokenCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpAntihackGetGet({
			...displayOptions,
			show: { ipOperation: ['ipAntihackGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpPhishingGetGet({
			...displayOptions,
			show: { ipOperation: ['ipPhishingGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpArpGetGet({
			...displayOptions,
			show: { ipOperation: ['ipArpGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpBringYourOwnIpAggregateListGet({
			...displayOptions,
			show: { ipOperation: ['ipBringYourOwnIpAggregateListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpBringYourOwnIpSliceListGet({
			...displayOptions,
			show: { ipOperation: ['ipBringYourOwnIpSliceListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLicenseCloudLinuxGet({
			...displayOptions,
			show: { ipOperation: ['ipLicenseCloudLinuxGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLicenseCpanelGet({
			...displayOptions,
			show: { ipOperation: ['ipLicenseCpanelGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLicenseDirectadminGet({
			...displayOptions,
			show: { ipOperation: ['ipLicenseDirectadminGet'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumDetailGet({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumDetailGet'] },
		}) as INodeProperties[]),
		...(descriptionIpFailoverGetGet({
			...displayOptions,
			show: { ipOperation: ['ipFailoverGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpFirewallGetGet({
			...displayOptions,
			show: { ipOperation: ['ipFirewallGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpFirewallRuleGetGet({
			...displayOptions,
			show: { ipOperation: ['ipFirewallRuleGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpGameGetGet({
			...displayOptions,
			show: { ipOperation: ['ipGameGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpGameRuleGetGet({
			...displayOptions,
			show: { ipOperation: ['ipGameRuleGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpGetGet({
			...displayOptions,
			show: { ipOperation: ['ipGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpCampusGet({
			...displayOptions,
			show: { ipOperation: ['ipCampusGet'] },
		}) as INodeProperties[]),
		...(descriptionIpMoveGetGet({
			...displayOptions,
			show: { ipOperation: ['ipMoveGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpServiceGetGet({
			...displayOptions,
			show: { ipOperation: ['ipServiceGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpServiceServiceInfosGetGet({
			...displayOptions,
			show: { ipOperation: ['ipServiceServiceInfosGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpTaskGetGet({
			...displayOptions,
			show: { ipOperation: ['ipTaskGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpMigrationTokenGet({
			...displayOptions,
			show: { ipOperation: ['ipMigrationTokenGet'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationGetGet({
			...displayOptions,
			show: { ipOperation: ['ipMitigationGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationProfilesGetGet({
			...displayOptions,
			show: { ipOperation: ['ipMitigationProfilesGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLicensePleskGet({
			...displayOptions,
			show: { ipOperation: ['ipLicensePleskGet'] },
		}) as INodeProperties[]),
		...(descriptionIpReverseGetGet({
			...displayOptions,
			show: { ipOperation: ['ipReverseGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpDelegationGetGet({
			...displayOptions,
			show: { ipOperation: ['ipDelegationGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpRipeGet({
			...displayOptions,
			show: { ipOperation: ['ipRipeGet'] },
		}) as INodeProperties[]),
		...(descriptionIpSpamStatsGet({
			...displayOptions,
			show: { ipOperation: ['ipSpamStatsGet'] },
		}) as INodeProperties[]),
		...(descriptionIpSpamGetGet({
			...displayOptions,
			show: { ipOperation: ['ipSpamGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLicenseSqlserverGet({
			...displayOptions,
			show: { ipOperation: ['ipLicenseSqlserverGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLicenseVirtuozzoGet({
			...displayOptions,
			show: { ipOperation: ['ipLicenseVirtuozzoGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLicenseWindowsGet({
			...displayOptions,
			show: { ipOperation: ['ipLicenseWindowsGet'] },
		}) as INodeProperties[]),
		...(descriptionIpLicenseWorklightGet({
			...displayOptions,
			show: { ipOperation: ['ipLicenseWorklightGet'] },
		}) as INodeProperties[]),
		...(descriptionIpAntihackListGet({
			...displayOptions,
			show: { ipOperation: ['ipAntihackListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpPhishingListGet({
			...displayOptions,
			show: { ipOperation: ['ipPhishingListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpArpListGet({
			...displayOptions,
			show: { ipOperation: ['ipArpListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumListGet({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpFirewallListGet({
			...displayOptions,
			show: { ipOperation: ['ipFirewallListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpFirewallRuleListGet({
			...displayOptions,
			show: { ipOperation: ['ipFirewallRuleListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpGameListGet({
			...displayOptions,
			show: { ipOperation: ['ipGameListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpGameRuleListGet({
			...displayOptions,
			show: { ipOperation: ['ipGameRuleListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpServiceListGet({
			...displayOptions,
			show: { ipOperation: ['ipServiceListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpTaskListGet({
			...displayOptions,
			show: { ipOperation: ['ipTaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpListGet({
			...displayOptions,
			show: { ipOperation: ['ipListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationListGet({
			...displayOptions,
			show: { ipOperation: ['ipMitigationListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationProfilesListGet({
			...displayOptions,
			show: { ipOperation: ['ipMitigationProfilesListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpDelegationListGet({
			...displayOptions,
			show: { ipOperation: ['ipDelegationListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpReverseListGet({
			...displayOptions,
			show: { ipOperation: ['ipReverseListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpSpamListGet({
			...displayOptions,
			show: { ipOperation: ['ipSpamListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpMovePost({
			...displayOptions,
			show: { ipOperation: ['ipMovePost'] },
		}) as INodeProperties[]),
		...(descriptionIpParkPost({
			...displayOptions,
			show: { ipOperation: ['ipParkPost'] },
		}) as INodeProperties[]),
		...(descriptionIpBringYourOwnIpSliceCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipBringYourOwnIpSliceCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpTerminatePost({
			...displayOptions,
			show: { ipOperation: ['ipTerminatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpServiceTerminatePost({
			...displayOptions,
			show: { ipOperation: ['ipServiceTerminatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpAntihackUnblockPost({
			...displayOptions,
			show: { ipOperation: ['ipAntihackUnblockPost'] },
		}) as INodeProperties[]),
		...(descriptionIpArpUnblockPost({
			...displayOptions,
			show: { ipOperation: ['ipArpUnblockPost'] },
		}) as INodeProperties[]),
		...(descriptionIpSpamUnblockPost({
			...displayOptions,
			show: { ipOperation: ['ipSpamUnblockPost'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpFailoverUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipFailoverUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpFirewallUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipFirewallUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpGameUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipGameUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpServiceUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipServiceUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpServiceServiceInfosUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipServiceServiceInfosUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipMitigationUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpMitigationProfilesUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipMitigationProfilesUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpReverseUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipReverseUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpRipeUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipRipeUpdatePut'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
	case 'ipFirewallCreatePost':
		return executeIpFirewallCreatePost.call(this, itemIndex);
	case 'ipFirewallRuleCreatePost':
		return executeIpFirewallRuleCreatePost.call(this, itemIndex);
	case 'ipGameRuleCreatePost':
		return executeIpGameRuleCreatePost.call(this, itemIndex);
	case 'ipMitigationCreatePost':
		return executeIpMitigationCreatePost.call(this, itemIndex);
	case 'ipDelegationCreatePost':
		return executeIpDelegationCreatePost.call(this, itemIndex);
	case 'ipReverseCreatePost':
		return executeIpReverseCreatePost.call(this, itemIndex);
	case 'ipBringYourOwnIpAggregateCreatePost':
		return executeIpBringYourOwnIpAggregateCreatePost.call(this, itemIndex);
	case 'ipChangeOrgPost':
		return executeIpChangeOrgPost.call(this, itemIndex);
	case 'ipServiceChangeContactPost':
		return executeIpServiceChangeContactPost.call(this, itemIndex);
	case 'ipServiceConfirmTerminationPost':
		return executeIpServiceConfirmTerminationPost.call(this, itemIndex);
	case 'ipEquilibriumCreatePost':
		return executeIpEquilibriumCreatePost.call(this, itemIndex);
	case 'ipFailoverPost':
		return executeIpFailoverPost.call(this, itemIndex);
	case 'ipMitigationProfilesCreatePost':
		return executeIpMitigationProfilesCreatePost.call(this, itemIndex);
	case 'ipEquilibriumDeleteDelete':
		return executeIpEquilibriumDeleteDelete.call(this, itemIndex);
	case 'ipEquilibriumDetailDeleteDelete':
		return executeIpEquilibriumDetailDeleteDelete.call(this, itemIndex);
	case 'ipFailoverDeleteDelete':
		return executeIpFailoverDeleteDelete.call(this, itemIndex);
	case 'ipFirewallDeleteDelete':
		return executeIpFirewallDeleteDelete.call(this, itemIndex);
	case 'ipFirewallRuleDeleteDelete':
		return executeIpFirewallRuleDeleteDelete.call(this, itemIndex);
	case 'ipGameRuleDeleteDelete':
		return executeIpGameRuleDeleteDelete.call(this, itemIndex);
	case 'ipMitigationDeleteDelete':
		return executeIpMitigationDeleteDelete.call(this, itemIndex);
	case 'ipMitigationProfilesDeleteDelete':
		return executeIpMitigationProfilesDeleteDelete.call(this, itemIndex);
	case 'ipDelegationDeleteDelete':
		return executeIpDelegationDeleteDelete.call(this, itemIndex);
	case 'ipReverseDeleteDelete':
		return executeIpReverseDeleteDelete.call(this, itemIndex);
	case 'ipMigrationTokenCreatePost':
		return executeIpMigrationTokenCreatePost.call(this, itemIndex);
	case 'ipAntihackGetGet':
		return executeIpAntihackGetGet.call(this, itemIndex);
	case 'ipPhishingGetGet':
		return executeIpPhishingGetGet.call(this, itemIndex);
	case 'ipArpGetGet':
		return executeIpArpGetGet.call(this, itemIndex);
	case 'ipBringYourOwnIpAggregateListGet':
		return executeIpBringYourOwnIpAggregateListGet.call(this, itemIndex);
	case 'ipBringYourOwnIpSliceListGet':
		return executeIpBringYourOwnIpSliceListGet.call(this, itemIndex);
	case 'ipLicenseCloudLinuxGet':
		return executeIpLicenseCloudLinuxGet.call(this, itemIndex);
	case 'ipLicenseCpanelGet':
		return executeIpLicenseCpanelGet.call(this, itemIndex);
	case 'ipLicenseDirectadminGet':
		return executeIpLicenseDirectadminGet.call(this, itemIndex);
	case 'ipEquilibriumDetailGet':
		return executeIpEquilibriumDetailGet.call(this, itemIndex);
	case 'ipFailoverGetGet':
		return executeIpFailoverGetGet.call(this, itemIndex);
	case 'ipFirewallGetGet':
		return executeIpFirewallGetGet.call(this, itemIndex);
	case 'ipFirewallRuleGetGet':
		return executeIpFirewallRuleGetGet.call(this, itemIndex);
	case 'ipGameGetGet':
		return executeIpGameGetGet.call(this, itemIndex);
	case 'ipGameRuleGetGet':
		return executeIpGameRuleGetGet.call(this, itemIndex);
	case 'ipGetGet':
		return executeIpGetGet.call(this, itemIndex);
	case 'ipCampusGet':
		return executeIpCampusGet.call(this, itemIndex);
	case 'ipMoveGetGet':
		return executeIpMoveGetGet.call(this, itemIndex);
	case 'ipServiceGetGet':
		return executeIpServiceGetGet.call(this, itemIndex);
	case 'ipServiceServiceInfosGetGet':
		return executeIpServiceServiceInfosGetGet.call(this, itemIndex);
	case 'ipTaskGetGet':
		return executeIpTaskGetGet.call(this, itemIndex);
	case 'ipMigrationTokenGet':
		return executeIpMigrationTokenGet.call(this, itemIndex);
	case 'ipMitigationGetGet':
		return executeIpMitigationGetGet.call(this, itemIndex);
	case 'ipMitigationProfilesGetGet':
		return executeIpMitigationProfilesGetGet.call(this, itemIndex);
	case 'ipLicensePleskGet':
		return executeIpLicensePleskGet.call(this, itemIndex);
	case 'ipReverseGetGet':
		return executeIpReverseGetGet.call(this, itemIndex);
	case 'ipDelegationGetGet':
		return executeIpDelegationGetGet.call(this, itemIndex);
	case 'ipRipeGet':
		return executeIpRipeGet.call(this, itemIndex);
	case 'ipSpamStatsGet':
		return executeIpSpamStatsGet.call(this, itemIndex);
	case 'ipSpamGetGet':
		return executeIpSpamGetGet.call(this, itemIndex);
	case 'ipLicenseSqlserverGet':
		return executeIpLicenseSqlserverGet.call(this, itemIndex);
	case 'ipLicenseVirtuozzoGet':
		return executeIpLicenseVirtuozzoGet.call(this, itemIndex);
	case 'ipLicenseWindowsGet':
		return executeIpLicenseWindowsGet.call(this, itemIndex);
	case 'ipLicenseWorklightGet':
		return executeIpLicenseWorklightGet.call(this, itemIndex);
	case 'ipAntihackListGet':
		return executeIpAntihackListGet.call(this, itemIndex);
	case 'ipPhishingListGet':
		return executeIpPhishingListGet.call(this, itemIndex);
	case 'ipArpListGet':
		return executeIpArpListGet.call(this, itemIndex);
	case 'ipEquilibriumListGet':
		return executeIpEquilibriumListGet.call(this, itemIndex);
	case 'ipFirewallListGet':
		return executeIpFirewallListGet.call(this, itemIndex);
	case 'ipFirewallRuleListGet':
		return executeIpFirewallRuleListGet.call(this, itemIndex);
	case 'ipGameListGet':
		return executeIpGameListGet.call(this, itemIndex);
	case 'ipGameRuleListGet':
		return executeIpGameRuleListGet.call(this, itemIndex);
	case 'ipServiceListGet':
		return executeIpServiceListGet.call(this, itemIndex);
	case 'ipTaskListGet':
		return executeIpTaskListGet.call(this, itemIndex);
	case 'ipListGet':
		return executeIpListGet.call(this, itemIndex);
	case 'ipMitigationListGet':
		return executeIpMitigationListGet.call(this, itemIndex);
	case 'ipMitigationProfilesListGet':
		return executeIpMitigationProfilesListGet.call(this, itemIndex);
	case 'ipDelegationListGet':
		return executeIpDelegationListGet.call(this, itemIndex);
	case 'ipReverseListGet':
		return executeIpReverseListGet.call(this, itemIndex);
	case 'ipSpamListGet':
		return executeIpSpamListGet.call(this, itemIndex);
	case 'ipMovePost':
		return executeIpMovePost.call(this, itemIndex);
	case 'ipParkPost':
		return executeIpParkPost.call(this, itemIndex);
	case 'ipBringYourOwnIpSliceCreatePost':
		return executeIpBringYourOwnIpSliceCreatePost.call(this, itemIndex);
	case 'ipTerminatePost':
		return executeIpTerminatePost.call(this, itemIndex);
	case 'ipServiceTerminatePost':
		return executeIpServiceTerminatePost.call(this, itemIndex);
	case 'ipAntihackUnblockPost':
		return executeIpAntihackUnblockPost.call(this, itemIndex);
	case 'ipArpUnblockPost':
		return executeIpArpUnblockPost.call(this, itemIndex);
	case 'ipSpamUnblockPost':
		return executeIpSpamUnblockPost.call(this, itemIndex);
	case 'ipEquilibriumUpdatePut':
		return executeIpEquilibriumUpdatePut.call(this, itemIndex);
	case 'ipFailoverUpdatePut':
		return executeIpFailoverUpdatePut.call(this, itemIndex);
	case 'ipFirewallUpdatePut':
		return executeIpFirewallUpdatePut.call(this, itemIndex);
	case 'ipGameUpdatePut':
		return executeIpGameUpdatePut.call(this, itemIndex);
	case 'ipUpdatePut':
		return executeIpUpdatePut.call(this, itemIndex);
	case 'ipServiceUpdatePut':
		return executeIpServiceUpdatePut.call(this, itemIndex);
	case 'ipServiceServiceInfosUpdatePut':
		return executeIpServiceServiceInfosUpdatePut.call(this, itemIndex);
	case 'ipMitigationUpdatePut':
		return executeIpMitigationUpdatePut.call(this, itemIndex);
	case 'ipMitigationProfilesUpdatePut':
		return executeIpMitigationProfilesUpdatePut.call(this, itemIndex);
	case 'ipReverseUpdatePut':
		return executeIpReverseUpdatePut.call(this, itemIndex);
	case 'ipRipeUpdatePut':
		return executeIpRipeUpdatePut.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudIp"`);
}

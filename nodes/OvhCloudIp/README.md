# OVH Cloud IP

> Manage IP blocks, services, firewalls, mitigation, reverse DNS and more via /ip API v1

## Overview

This node provides **92 operations** with **92 tests** for managing OVHcloud resources.

## Available Operations

### Existing Operations

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipListGet | GET | `/ip` |
| ipGetGet | GET | `/ip/{ip}` |
| ipReverseGetGet | GET | `/ip/{ip}/reverse/{ipReverse}` |
| ipReverseUpdatePut | PUT | `/ip/{ip}/reverse` |
| ipEquilibriumListGet | GET | `/ip/{ip}/equilibrium` |
| ipEquilibriumCreatePost | POST | `/ip/{ip}/equilibrium` |
| ipEquilibriumDeleteDelete | DELETE | `/ip/{ip}/equilibrium/{x}` |
| ipEquilibriumDetailGet | GET | `/ip/{ip}/equilibrium/{x}` |
| ipEquilibriumUpdatePut | PUT | `/ip/{ip}/equilibrium/{x}` |
| ipEquilibriumDetailDeleteDelete | DELETE | `/ip/{ip}/equilibrium/{x}` |
| ipFailoverPost | POST | `/ip/{ip}/failover` |
| ipFailoverGetGet | GET | `/ip/{ip}/failover` |
| ipFailoverUpdatePut | PUT | `/ip/{ip}/failover` |
| ipFailoverDeleteDelete | DELETE | `/ip/{ip}/failover` |

### Resources by Family

#### Anti-Hack

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipAntihackGetGet | GET | `/ip/{ip}/antihack/{ipBlocked}` |
| ipAntihackListGet | GET | `/ip/{ip}/antihack` |
| ipAntihackUnblockPost | POST | `/ip/{ip}/antihack/{ipBlocked}/unblock` |

#### ARP

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipArpGetGet | GET | `/ip/{ip}/arp/{ipBlocked}` |
| ipArpListGet | GET | `/ip/{ip}/arp` |
| ipArpUnblockPost | POST | `/ip/{ip}/arp/{ipBlocked}/unblock` |

#### Bring Your Own IP

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipBringYourOwnIpAggregateCreatePost | POST | `/ip/{ip}/bringYourOwnIp/aggregate` |
| ipBringYourOwnIpAggregateListGet | GET | `/ip/{ip}/bringYourOwnIp/aggregate` |
| ipBringYourOwnIpSliceCreatePost | POST | `/ip/{ip}/bringYourOwnIp/slice` |
| ipBringYourOwnIpSliceListGet | GET | `/ip/{ip}/bringYourOwnIp/slice` |

#### Reverse Delegation

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipDelegationCreatePost | POST | `/ip/{ip}/delegation` |
| ipDelegationDeleteDelete | DELETE | `/ip/{ip}/delegation/{target}` |
| ipDelegationGetGet | GET | `/ip/{ip}/delegation/{target}` |
| ipDelegationListGet | GET | `/ip/{ip}/delegation` |

#### Firewall

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipFirewallCreatePost | POST | `/ip/{ip}/firewall` |
| ipFirewallDeleteDelete | DELETE | `/ip/{ip}/firewall/{ipOnFirewall}` |
| ipFirewallGetGet | GET | `/ip/{ip}/firewall/{ipOnFirewall}` |
| ipFirewallListGet | GET | `/ip/{ip}/firewall` |
| ipFirewallRuleCreatePost | POST | `/ip/{ip}/firewall/{ipOnFirewall}/rule` |
| ipFirewallRuleDeleteDelete | DELETE | `/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}` |
| ipFirewallRuleGetGet | GET | `/ip/{ip}/firewall/{ipOnFirewall}/rule/{sequence}` |
| ipFirewallRuleListGet | GET | `/ip/{ip}/firewall/{ipOnFirewall}/rule` |
| ipFirewallUpdatePut | PUT | `/ip/{ip}/firewall/{ipOnFirewall}` |

#### Game Anti-DDoS

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipGameGetGet | GET | `/ip/{ip}/game/{ipOnGame}` |
| ipGameListGet | GET | `/ip/{ip}/game` |
| ipGameRuleCreatePost | POST | `/ip/{ip}/game/{ipOnGame}/rule` |
| ipGameRuleDeleteDelete | DELETE | `/ip/{ip}/game/{ipOnGame}/rule/{id}` |
| ipGameRuleGetGet | GET | `/ip/{ip}/game/{ipOnGame}/rule/{id}` |
| ipGameRuleListGet | GET | `/ip/{ip}/game/{ipOnGame}/rule` |
| ipGameUpdatePut | PUT | `/ip/{ip}/game/{ipOnGame}` |

#### Licenses

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipLicenseCloudLinuxGet | GET | `/ip/{ip}/license/cloudLinux` |
| ipLicenseCpanelGet | GET | `/ip/{ip}/license/cpanel` |
| ipLicenseDirectadminGet | GET | `/ip/{ip}/license/directadmin` |
| ipLicensePleskGet | GET | `/ip/{ip}/license/plesk` |
| ipLicenseSqlserverGet | GET | `/ip/{ip}/license/sqlserver` |
| ipLicenseVirtuozzoGet | GET | `/ip/{ip}/license/virtuozzo` |
| ipLicenseWindowsGet | GET | `/ip/{ip}/license/windows` |
| ipLicenseWorklightGet | GET | `/ip/{ip}/license/worklight` |

#### Root & IP Management

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipCampusGet | GET | `/ip/campus` |
| ipChangeOrgPost | POST | `/ip/{ip}/changeOrg` |
| ipMoveGetGet | GET | `/ip/{ip}/move` |
| ipMovePost | POST | `/ip/{ip}/move` |
| ipParkPost | POST | `/ip/{ip}/park` |
| ipTerminatePost | POST | `/ip/{ip}/terminate` |
| ipUpdatePut | PUT | `/ip/{ip}` |

#### Migration Token

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipMigrationTokenCreatePost | POST | `/ip/{ip}/migrationToken` |
| ipMigrationTokenGet | GET | `/ip/{ip}/migrationToken` |

#### Mitigation

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipMitigationCreatePost | POST | `/ip/{ip}/mitigation` |
| ipMitigationDeleteDelete | DELETE | `/ip/{ip}/mitigation/{ipOnMitigation}` |
| ipMitigationGetGet | GET | `/ip/{ip}/mitigation/{ipOnMitigation}` |
| ipMitigationListGet | GET | `/ip/{ip}/mitigation` |
| ipMitigationUpdatePut | PUT | `/ip/{ip}/mitigation/{ipOnMitigation}` |

#### Mitigation Profiles

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipMitigationProfilesCreatePost | POST | `/ip/{ip}/mitigationProfiles` |
| ipMitigationProfilesDeleteDelete | DELETE | `/ip/{ip}/mitigationProfiles/{ipMitigationProfile}` |
| ipMitigationProfilesGetGet | GET | `/ip/{ip}/mitigationProfiles/{ipMitigationProfile}` |
| ipMitigationProfilesListGet | GET | `/ip/{ip}/mitigationProfiles` |
| ipMitigationProfilesUpdatePut | PUT | `/ip/{ip}/mitigationProfiles/{ipMitigationProfile}` |

#### Anti-Phishing

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipPhishingGetGet | GET | `/ip/{ip}/phishing/{id}` |
| ipPhishingListGet | GET | `/ip/{ip}/phishing` |

#### Reverse DNS

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipReverseCreatePost | POST | `/ip/{ip}/reverse` |
| ipReverseDeleteDelete | DELETE | `/ip/{ip}/reverse/{ipReverse}` |
| ipReverseListGet | GET | `/ip/{ip}/reverse` |

#### RIPE

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipRipeGet | GET | `/ip/{ip}/ripe` |
| ipRipeUpdatePut | PUT | `/ip/{ip}/ripe` |

#### Service

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipServiceChangeContactPost | POST | `/ip/service/{serviceName}/changeContact` |
| ipServiceConfirmTerminationPost | POST | `/ip/service/{serviceName}/confirmTermination` |
| ipServiceGetGet | GET | `/ip/service/{serviceName}` |
| ipServiceListGet | GET | `/ip/service` |
| ipServiceServiceInfosGetGet | GET | `/ip/service/{serviceName}/serviceInfos` |
| ipServiceServiceInfosUpdatePut | PUT | `/ip/service/{serviceName}/serviceInfos` |
| ipServiceTerminatePost | POST | `/ip/service/{serviceName}/terminate` |
| ipServiceUpdatePut | PUT | `/ip/service/{serviceName}` |

#### Spam

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipSpamGetGet | GET | `/ip/{ip}/spam/{ipSpamming}` |
| ipSpamListGet | GET | `/ip/{ip}/spam` |
| ipSpamStatsGet | GET | `/ip/{ip}/spam/{ipSpamming}/stats` |
| ipSpamUnblockPost | POST | `/ip/{ip}/spam/{ipSpamming}/unblock` |

#### Tasks

| Operation | Method | Endpoint |
|-----------|--------|----------|
| ipTaskGetGet | GET | `/ip/{ip}/task/{taskId}` |
| ipTaskListGet | GET | `/ip/{ip}/task` |

**Total:** 92 operations, 92 tests

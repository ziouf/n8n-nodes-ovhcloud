# OVHcloud API Coverage Report

> Généré par `scripts/compare-coverage.js` le 2026-08-05T22:31:29.994Z. Document généré automatiquement — ne pas éditer à la main.

Ce rapport compare les endpoints déclarés dans les specs Swagger 2.0 (`docs/api-specs/v1|v2/*.json`) avec les appels HTTP réellement présents dans les nodes (`nodes/**/*.operation.ts`).

## Résumé

- **Specs analysées** : 84 (v1: 70, v2: 14)
- **Endpoints déclarés (specs avec endpoints)** : 6624
- **Endpoints couverts par les nodes** : 3607
- **Couverture globale** : **54.5%**
- **Specs sans node associé** : 21
- **Specs placeholder (aucun endpoint)** : 1

## Couverture par spec

Triée par pourcentage croissant (moins bonne couverture en premier).

| Spec (version) | Total | Couverts | Manquants | % |
|----------------|------:|---------:|----------:|---:|
| emailExchange (v1) | 203 | 0 | 203 | 0% |
| emailDomain (v1) | 107 | 0 | 107 | 0% |
| hostingPrivateDatabase (v1) | 72 | 0 | 72 | 0% |
| emailMxplan (v1) | 46 | 0 | 46 | 0% |
| dedicatedNasha (v1) | 39 | 0 | 39 | 0% |
| dedicatedCeph (v1) | 35 | 0 | 35 | 0% |
| dedicatedHousing (v1) | 18 | 0 | 18 | 0% |
| licenseOffice (v1) | 16 | 0 | 16 | 0% |
| licenseOfficePrepaid (v1) | 16 | 0 | 16 | 0% |
| licensePlesk (v1) | 16 | 0 | 16 | 0% |
| licenseVirtuozzo (v1) | 16 | 0 | 16 | 0% |
| licenseDirectadmin (v1) | 14 | 0 | 14 | 0% |
| licenseWindows (v1) | 14 | 0 | 14 | 0% |
| licenseCpanel (v1) | 13 | 0 | 13 | 0% |
| licenseHycu (v1) | 10 | 0 | 10 | 0% |
| dedicatedCluster (v1) | 9 | 0 | 9 | 0% |
| dedicatedInstallationTemplate (v1) | 9 | 0 | 9 | 0% |
| licenseCloudLinux (v1) | 9 | 0 | 9 | 0% |
| licenseRedhat (v1) | 9 | 0 | 9 | 0% |
| licenseSqlserver (v1) | 9 | 0 | 9 | 0% |
| packSiptrunk (v1) | 5 | 0 | 5 | 0% |
| email (v1) | 60 | 2 | 58 | 3.3% |
| order (v1) | 816 | 36 | 780 | 4.4% |
| ipLoadbalancing (v1) | 121 | 9 | 112 | 7.4% |
| vrack (v1) | 68 | 5 | 63 | 7.4% |
| msServices (v1) | 55 | 5 | 50 | 9.1% |
| dedicated (v1) | 131 | 30 | 101 | 22.9% |
| vps (v1) | 94 | 22 | 72 | 23.4% |
| sslGateway (v1) | 23 | 6 | 17 | 26.1% |
| xdsl (v1) | 142 | 39 | 103 | 27.5% |
| cloud (v1) | 1121 | 395 | 726 | 35.2% |
| veeam (v1) | 10 | 5 | 5 | 50% |
| license (v1) | 13 | 7 | 6 | 53.8% |
| pack (v1) | 58 | 33 | 25 | 56.9% |
| me (v1) | 379 | 233 | 146 | 61.5% |
| metrics (v1) | 16 | 12 | 4 | 75% |
| hosting (v1) | 198 | 150 | 48 | 75.8% |
| ovhCloudConnect (v1) | 54 | 42 | 12 | 77.8% |
| freefax (v1) | 19 | 18 | 1 | 94.7% |
| cluster (v1) | 43 | 42 | 1 | 97.7% |
| horizonView (v1) | 43 | 42 | 1 | 97.7% |
| ip (v1) | 81 | 80 | 1 | 98.8% |
| telephony (v1) | 607 | 607 | 0 | 100% |
| price (v1) | 581 | 581 | 0 | 100% |
| dedicatedCloud (v1) | 305 | 305 | 0 | 100% |
| sms (v1) | 124 | 124 | 0 | 100% |
| dbaas (v1) | 116 | 116 | 0 | 100% |
| domain (v1) | 110 | 110 | 0 | 100% |
| overTheBox (v1) | 50 | 50 | 0 | 100% |
| services (v1) | 47 | 47 | 0 | 100% |
| storage (v1) | 47 | 47 | 0 | 100% |
| cdn (v1) | 44 | 44 | 0 | 100% |
| okms (v2) | 32 | 32 | 0 | 100% |
| vmwareCloudDirector (v2) | 32 | 32 | 0 | 100% |
| iam (v2) | 31 | 31 | 0 | 100% |
| zimbra (v2) | 30 | 30 | 0 | 100% |
| connectivity (v1) | 28 | 28 | 0 | 100% |
| saas (v1) | 19 | 19 | 0 | 100% |
| notification (v2) | 19 | 19 | 0 | 100% |
| nutanix (v1) | 17 | 17 | 0 | 100% |
| managedCMS (v2) | 17 | 17 | 0 | 100% |
| publicCloud (v2) | 17 | 17 | 0 | 100% |
| backupServices (v2) | 15 | 15 | 0 | 100% |
| veeamCloudConnect (v1) | 14 | 14 | 0 | 100% |
| webhosting (v2) | 10 | 10 | 0 | 100% |
| support (v1) | 9 | 9 | 0 | 100% |
| domain (v2) | 9 | 9 | 0 | 100% |
| newAccount (v1) | 8 | 8 | 0 | 100% |
| service (v1) | 8 | 8 | 0 | 100% |
| vrackServices (v2) | 8 | 8 | 0 | 100% |
| allDom (v1) | 6 | 6 | 0 | 100% |
| auth (v1) | 6 | 6 | 0 | 100% |
| ssl (v1) | 6 | 6 | 0 | 100% |
| stack (v1) | 4 | 4 | 0 | 100% |
| vip (v1) | 4 | 4 | 0 | 100% |
| contact (v1) | 2 | 2 | 0 | 100% |
| partner (v1) | 2 | 2 | 0 | 100% |
| startup (v1) | 2 | 2 | 0 | 100% |
| commercialCatalog (v2) | 2 | 2 | 0 | 100% |
| location (v2) | 2 | 2 | 0 | 100% |
| networkDefense (v2) | 2 | 2 | 0 | 100% |
| secret (v1) | 1 | 1 | 0 | 100% |
| supply (v1) | 1 | 1 | 0 | 100% |

## Specs sans node

Ces specs ont des endpoints déclarés mais aucun node ne les implémente dans ce repo :

- **emailExchange** (`/email/exchange`, v1) — 203 endpoints, 203 manquants
- **emailDomain** (`/email/domain`, v1) — 107 endpoints, 107 manquants
- **hostingPrivateDatabase** (`/hosting/privateDatabase`, v1) — 72 endpoints, 72 manquants
- **emailMxplan** (`/email/mxplan`, v1) — 46 endpoints, 46 manquants
- **dedicatedNasha** (`/dedicated/nasha`, v1) — 39 endpoints, 39 manquants
- **dedicatedCeph** (`/dedicated/ceph`, v1) — 35 endpoints, 35 manquants
- **dedicatedHousing** (`/dedicated/housing`, v1) — 18 endpoints, 18 manquants
- **licenseOffice** (`/license/office`, v1) — 16 endpoints, 16 manquants
- **licenseOfficePrepaid** (`/license/officePrepaid`, v1) — 16 endpoints, 16 manquants
- **licensePlesk** (`/license/plesk`, v1) — 16 endpoints, 16 manquants
- **licenseVirtuozzo** (`/license/virtuozzo`, v1) — 16 endpoints, 16 manquants
- **licenseDirectadmin** (`/license/directadmin`, v1) — 14 endpoints, 14 manquants
- **licenseWindows** (`/license/windows`, v1) — 14 endpoints, 14 manquants
- **licenseCpanel** (`/license/cpanel`, v1) — 13 endpoints, 13 manquants
- **licenseHycu** (`/license/hycu`, v1) — 10 endpoints, 10 manquants
- **dedicatedCluster** (`/dedicated/cluster`, v1) — 9 endpoints, 9 manquants
- **dedicatedInstallationTemplate** (`/dedicated/installationTemplate`, v1) — 9 endpoints, 9 manquants
- **licenseCloudLinux** (`/license/cloudLinux`, v1) — 9 endpoints, 9 manquants
- **licenseRedhat** (`/license/redhat`, v1) — 9 endpoints, 9 manquants
- **licenseSqlserver** (`/license/sqlserver`, v1) — 9 endpoints, 9 manquants
- **packSiptrunk** (`/pack/siptrunk`, v1) — 5 endpoints, 5 manquants

Sans node également, mais sans endpoints déclarés (voir section placeholder) :

- **products** (`/products`, v1)

## Specs placeholder (fichier sans endpoints)

Fichiers de spec présents dans le dossier mais avec `apis: []` (spec absente / non téléchargée). Ils ne sont pas comptés dans la couverture :

- **products** (`/products`, v1)

## Endpoints manquants

Endpoints déclarés dans les specs mais non appelés par les nodes, groupés par spec :

### emailExchange (v1) — 203 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/email/exchange` |
| GET | `/email/exchange/{x}/service` |
| GET | `/email/exchange/{x}/service/{x}` |
| PUT | `/email/exchange/{x}/service/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account` |
| POST | `/email/exchange/{x}/service/{x}/account` |
| DELETE | `/email/exchange/{x}/service/{x}/account/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/account/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/alias` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/alias` |
| DELETE | `/email/exchange/{x}/service/{x}/account/{x}/alias/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/alias/{x}` |
| DELETE | `/email/exchange/{x}/service/{x}/account/{x}/archive` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/archive` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/archive` |
| PUT | `/email/exchange/{x}/service/{x}/account/{x}/archive` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/changePassword` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/diagnostics` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/diagnostics` |
| DELETE | `/email/exchange/{x}/service/{x}/account/{x}/export` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/export` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/export` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/exportURL` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/exportURL` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/fullAccess` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/fullAccess` |
| DELETE | `/email/exchange/{x}/service/{x}/account/{x}/fullAccess/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/fullAccess/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/outlookURL` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/outlookURL` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/protocol` |
| PUT | `/email/exchange/{x}/service/{x}/account/{x}/protocol` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/sendAs` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/sendAs` |
| DELETE | `/email/exchange/{x}/service/{x}/account/{x}/sendAs/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/sendAs/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/sendOnBehalfTo` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/sendOnBehalfTo` |
| DELETE | `/email/exchange/{x}/service/{x}/account/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/tasks` |
| GET | `/email/exchange/{x}/service/{x}/account/{x}/tasks/{x}` |
| POST | `/email/exchange/{x}/service/{x}/account/{x}/terminate` |
| POST | `/email/exchange/{x}/service/{x}/activateSharepoint` |
| GET | `/email/exchange/{x}/service/{x}/authenticationPolicy` |
| GET | `/email/exchange/{x}/service/{x}/authenticationPolicy/{x}` |
| GET | `/email/exchange/{x}/service/{x}/authorizedIp` |
| POST | `/email/exchange/{x}/service/{x}/authorizedIp` |
| DELETE | `/email/exchange/{x}/service/{x}/authorizedIp/{x}` |
| GET | `/email/exchange/{x}/service/{x}/authorizedIp/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/authorizedIp/{x}` |
| POST | `/email/exchange/{x}/service/{x}/changeHostname` |
| GET | `/email/exchange/{x}/service/{x}/customIsolation` |
| POST | `/email/exchange/{x}/service/{x}/customIsolation` |
| DELETE | `/email/exchange/{x}/service/{x}/customIsolation/{x}` |
| GET | `/email/exchange/{x}/service/{x}/customIsolation/{x}` |
| GET | `/email/exchange/{x}/service/{x}/dcvEmails` |
| GET | `/email/exchange/{x}/service/{x}/device` |
| GET | `/email/exchange/{x}/service/{x}/device/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/device/{x}` |
| POST | `/email/exchange/{x}/service/{x}/device/{x}/clearDevice` |
| GET | `/email/exchange/{x}/service/{x}/domain` |
| POST | `/email/exchange/{x}/service/{x}/domain` |
| DELETE | `/email/exchange/{x}/service/{x}/domain/{x}` |
| GET | `/email/exchange/{x}/service/{x}/domain/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/domain/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/domain/{x}/changeDefaultSBR` |
| DELETE | `/email/exchange/{x}/service/{x}/domain/{x}/disclaimer` |
| GET | `/email/exchange/{x}/service/{x}/domain/{x}/disclaimer` |
| POST | `/email/exchange/{x}/service/{x}/domain/{x}/disclaimer` |
| PUT | `/email/exchange/{x}/service/{x}/domain/{x}/disclaimer` |
| GET | `/email/exchange/{x}/service/{x}/domain/{x}/disclaimerAttribute` |
| GET | `/email/exchange/{x}/service/{x}/domain/{x}/dkim` |
| POST | `/email/exchange/{x}/service/{x}/domain/{x}/dkim` |
| DELETE | `/email/exchange/{x}/service/{x}/domain/{x}/dkim/{x}` |
| GET | `/email/exchange/{x}/service/{x}/domain/{x}/dkim/{x}` |
| POST | `/email/exchange/{x}/service/{x}/domain/{x}/dkim/{x}/disable` |
| POST | `/email/exchange/{x}/service/{x}/domain/{x}/dkim/{x}/enable` |
| GET | `/email/exchange/{x}/service/{x}/domain/{x}/dkimSelector` |
| GET | `/email/exchange/{x}/service/{x}/externalContact` |
| POST | `/email/exchange/{x}/service/{x}/externalContact` |
| DELETE | `/email/exchange/{x}/service/{x}/externalContact/{x}` |
| GET | `/email/exchange/{x}/service/{x}/externalContact/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/externalContact/{x}` |
| DELETE | `/email/exchange/{x}/service/{x}/impersonatedUser` |
| GET | `/email/exchange/{x}/service/{x}/impersonatedUser` |
| POST | `/email/exchange/{x}/service/{x}/impersonatedUser` |
| POST | `/email/exchange/{x}/service/{x}/impersonatedUser/changePassword` |
| GET | `/email/exchange/{x}/service/{x}/impersonationPasswordPolicy` |
| GET | `/email/exchange/{x}/service/{x}/license` |
| GET | `/email/exchange/{x}/service/{x}/log/kind` |
| GET | `/email/exchange/{x}/service/{x}/log/kind/{x}` |
| GET | `/email/exchange/{x}/service/{x}/log/subscription` |
| POST | `/email/exchange/{x}/service/{x}/log/subscription` |
| DELETE | `/email/exchange/{x}/service/{x}/log/subscription/{x}` |
| GET | `/email/exchange/{x}/service/{x}/log/subscription/{x}` |
| POST | `/email/exchange/{x}/service/{x}/log/url` |
| GET | `/email/exchange/{x}/service/{x}/mailingList` |
| POST | `/email/exchange/{x}/service/{x}/mailingList` |
| DELETE | `/email/exchange/{x}/service/{x}/mailingList/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/mailingList/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/alias` |
| POST | `/email/exchange/{x}/service/{x}/mailingList/{x}/alias` |
| DELETE | `/email/exchange/{x}/service/{x}/mailingList/{x}/alias/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/alias/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/manager/account` |
| POST | `/email/exchange/{x}/service/{x}/mailingList/{x}/manager/account` |
| DELETE | `/email/exchange/{x}/service/{x}/mailingList/{x}/manager/account/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/manager/account/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/member/account` |
| POST | `/email/exchange/{x}/service/{x}/mailingList/{x}/member/account` |
| DELETE | `/email/exchange/{x}/service/{x}/mailingList/{x}/member/account/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/member/account/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/member/contact` |
| POST | `/email/exchange/{x}/service/{x}/mailingList/{x}/member/contact` |
| DELETE | `/email/exchange/{x}/service/{x}/mailingList/{x}/member/contact/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/member/contact/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/sendAs` |
| POST | `/email/exchange/{x}/service/{x}/mailingList/{x}/sendAs` |
| DELETE | `/email/exchange/{x}/service/{x}/mailingList/{x}/sendAs/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/sendAs/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/sendOnBehalfTo` |
| POST | `/email/exchange/{x}/service/{x}/mailingList/{x}/sendOnBehalfTo` |
| DELETE | `/email/exchange/{x}/service/{x}/mailingList/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/exchange/{x}/service/{x}/mailingList/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/exchange/{x}/service/{x}/outlookAvailability` |
| GET | `/email/exchange/{x}/service/{x}/protocol` |
| PUT | `/email/exchange/{x}/service/{x}/protocol` |
| GET | `/email/exchange/{x}/service/{x}/protocol/activeSyncMailNotification` |
| POST | `/email/exchange/{x}/service/{x}/protocol/activeSyncMailNotification` |
| DELETE | `/email/exchange/{x}/service/{x}/protocol/activeSyncMailNotification/{x}` |
| GET | `/email/exchange/{x}/service/{x}/protocol/activeSyncMailNotification/{x}` |
| GET | `/email/exchange/{x}/service/{x}/publicFolder` |
| POST | `/email/exchange/{x}/service/{x}/publicFolder` |
| DELETE | `/email/exchange/{x}/service/{x}/publicFolder/{x}` |
| GET | `/email/exchange/{x}/service/{x}/publicFolder/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/publicFolder/{x}` |
| GET | `/email/exchange/{x}/service/{x}/publicFolder/{x}/permission` |
| POST | `/email/exchange/{x}/service/{x}/publicFolder/{x}/permission` |
| DELETE | `/email/exchange/{x}/service/{x}/publicFolder/{x}/permission/{x}` |
| GET | `/email/exchange/{x}/service/{x}/publicFolder/{x}/permission/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/publicFolder/{x}/permission/{x}` |
| GET | `/email/exchange/{x}/service/{x}/publicFolderQuota` |
| GET | `/email/exchange/{x}/service/{x}/remoteMailbox` |
| POST | `/email/exchange/{x}/service/{x}/remoteMailbox` |
| DELETE | `/email/exchange/{x}/service/{x}/remoteMailbox/{x}` |
| GET | `/email/exchange/{x}/service/{x}/remoteMailbox/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/remoteMailbox/{x}` |
| GET | `/email/exchange/{x}/service/{x}/remoteMailbox/{x}/alias` |
| POST | `/email/exchange/{x}/service/{x}/remoteMailbox/{x}/alias` |
| DELETE | `/email/exchange/{x}/service/{x}/remoteMailbox/{x}/alias/{x}` |
| GET | `/email/exchange/{x}/service/{x}/remoteMailbox/{x}/alias/{x}` |
| POST | `/email/exchange/{x}/service/{x}/remoteMailbox/{x}/changePassword` |
| POST | `/email/exchange/{x}/service/{x}/renewSSL` |
| GET | `/email/exchange/{x}/service/{x}/resourceAccount` |
| POST | `/email/exchange/{x}/service/{x}/resourceAccount` |
| DELETE | `/email/exchange/{x}/service/{x}/resourceAccount/{x}` |
| GET | `/email/exchange/{x}/service/{x}/resourceAccount/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/resourceAccount/{x}` |
| GET | `/email/exchange/{x}/service/{x}/resourceAccount/{x}/delegate` |
| POST | `/email/exchange/{x}/service/{x}/resourceAccount/{x}/delegate` |
| DELETE | `/email/exchange/{x}/service/{x}/resourceAccount/{x}/delegate/{x}` |
| GET | `/email/exchange/{x}/service/{x}/resourceAccount/{x}/delegate/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sendConnector` |
| POST | `/email/exchange/{x}/service/{x}/sendConnector` |
| DELETE | `/email/exchange/{x}/service/{x}/sendConnector/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sendConnector/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/sendConnector/{x}` |
| POST | `/email/exchange/{x}/service/{x}/sendConnector/{x}/changeAuthentication` |
| GET | `/email/exchange/{x}/service/{x}/server` |
| PUT | `/email/exchange/{x}/service/{x}/server` |
| GET | `/email/exchange/{x}/service/{x}/serviceInfos` |
| PUT | `/email/exchange/{x}/service/{x}/serviceInfos` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount` |
| POST | `/email/exchange/{x}/service/{x}/sharedAccount` |
| DELETE | `/email/exchange/{x}/service/{x}/sharedAccount/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}` |
| PUT | `/email/exchange/{x}/service/{x}/sharedAccount/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/alias` |
| POST | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/alias` |
| DELETE | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/alias/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/alias/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/fullAccess` |
| POST | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/fullAccess` |
| DELETE | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/fullAccess/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/fullAccess/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/sendAs` |
| POST | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/sendAs` |
| DELETE | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/sendAs/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/sendAs/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/sendOnBehalfTo` |
| POST | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/sendOnBehalfTo` |
| DELETE | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/tasks` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccount/{x}/tasks/{x}` |
| GET | `/email/exchange/{x}/service/{x}/sharedAccountQuota` |
| GET | `/email/exchange/{x}/service/{x}/task` |
| GET | `/email/exchange/{x}/service/{x}/task/{x}` |
| POST | `/email/exchange/{x}/service/{x}/updateDeviceList` |
| POST | `/email/exchange/{x}/service/{x}/updateFlagsOnAllAccounts` |

### emailDomain (v1) — 107 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/email/domain` |
| GET | `/email/domain/{x}` |
| GET | `/email/domain/{x}/account` |
| POST | `/email/domain/{x}/account` |
| DELETE | `/email/domain/{x}/account/{x}` |
| GET | `/email/domain/{x}/account/{x}` |
| PUT | `/email/domain/{x}/account/{x}` |
| POST | `/email/domain/{x}/account/{x}/changePassword` |
| GET | `/email/domain/{x}/account/{x}/delegation` |
| POST | `/email/domain/{x}/account/{x}/delegation` |
| DELETE | `/email/domain/{x}/account/{x}/delegation/{x}` |
| GET | `/email/domain/{x}/account/{x}/delegation/{x}` |
| GET | `/email/domain/{x}/account/{x}/filter` |
| POST | `/email/domain/{x}/account/{x}/filter` |
| DELETE | `/email/domain/{x}/account/{x}/filter/{x}` |
| GET | `/email/domain/{x}/account/{x}/filter/{x}` |
| POST | `/email/domain/{x}/account/{x}/filter/{x}/changeActivity` |
| POST | `/email/domain/{x}/account/{x}/filter/{x}/changePriority` |
| GET | `/email/domain/{x}/account/{x}/filter/{x}/rule` |
| POST | `/email/domain/{x}/account/{x}/filter/{x}/rule` |
| DELETE | `/email/domain/{x}/account/{x}/filter/{x}/rule/{x}` |
| GET | `/email/domain/{x}/account/{x}/filter/{x}/rule/{x}` |
| GET | `/email/domain/{x}/account/{x}/migrate` |
| GET | `/email/domain/{x}/account/{x}/migrate/{x}` |
| GET | `/email/domain/{x}/account/{x}/migrate/{x}/destinationEmailAddress` |
| GET | `/email/domain/{x}/account/{x}/migrate/{x}/destinationEmailAddress/{x}` |
| GET | `/email/domain/{x}/account/{x}/migrate/{x}/destinationEmailAddress/{x}/checkMigrate` |
| POST | `/email/domain/{x}/account/{x}/migrate/{x}/destinationEmailAddress/{x}/migrate` |
| POST | `/email/domain/{x}/account/{x}/updateUsage` |
| GET | `/email/domain/{x}/account/{x}/usage` |
| GET | `/email/domain/{x}/acl` |
| POST | `/email/domain/{x}/acl` |
| DELETE | `/email/domain/{x}/acl/{x}` |
| GET | `/email/domain/{x}/acl/{x}` |
| POST | `/email/domain/{x}/changeContact` |
| POST | `/email/domain/{x}/changeDnsMXFilter` |
| POST | `/email/domain/{x}/confirmTermination` |
| GET | `/email/domain/{x}/dkim` |
| PUT | `/email/domain/{x}/dkim/disable` |
| PUT | `/email/domain/{x}/dkim/enable` |
| GET | `/email/domain/{x}/dnsMXFilter` |
| GET | `/email/domain/{x}/dnsMXRecords` |
| GET | `/email/domain/{x}/mailingList` |
| POST | `/email/domain/{x}/mailingList` |
| DELETE | `/email/domain/{x}/mailingList/{x}` |
| GET | `/email/domain/{x}/mailingList/{x}` |
| PUT | `/email/domain/{x}/mailingList/{x}` |
| POST | `/email/domain/{x}/mailingList/{x}/changeOptions` |
| GET | `/email/domain/{x}/mailingList/{x}/moderator` |
| POST | `/email/domain/{x}/mailingList/{x}/moderator` |
| DELETE | `/email/domain/{x}/mailingList/{x}/moderator/{x}` |
| GET | `/email/domain/{x}/mailingList/{x}/moderator/{x}` |
| POST | `/email/domain/{x}/mailingList/{x}/sendListByEmail` |
| GET | `/email/domain/{x}/mailingList/{x}/subscriber` |
| POST | `/email/domain/{x}/mailingList/{x}/subscriber` |
| DELETE | `/email/domain/{x}/mailingList/{x}/subscriber/{x}` |
| GET | `/email/domain/{x}/mailingList/{x}/subscriber/{x}` |
| POST | `/email/domain/{x}/migrateDelegationV3toV6` |
| GET | `/email/domain/{x}/quota` |
| GET | `/email/domain/{x}/recommendedDNSRecords` |
| GET | `/email/domain/{x}/redirection` |
| POST | `/email/domain/{x}/redirection` |
| DELETE | `/email/domain/{x}/redirection/{x}` |
| GET | `/email/domain/{x}/redirection/{x}` |
| POST | `/email/domain/{x}/redirection/{x}/changeRedirection` |
| GET | `/email/domain/{x}/responder` |
| POST | `/email/domain/{x}/responder` |
| DELETE | `/email/domain/{x}/responder/{x}` |
| GET | `/email/domain/{x}/responder/{x}` |
| PUT | `/email/domain/{x}/responder/{x}` |
| GET | `/email/domain/{x}/serviceInfos` |
| PUT | `/email/domain/{x}/serviceInfos` |
| GET | `/email/domain/{x}/summary` |
| GET | `/email/domain/{x}/task/account` |
| GET | `/email/domain/{x}/task/account/{x}` |
| GET | `/email/domain/{x}/task/all` |
| GET | `/email/domain/{x}/task/all/{x}` |
| GET | `/email/domain/{x}/task/filter` |
| GET | `/email/domain/{x}/task/filter/{x}` |
| GET | `/email/domain/{x}/task/mailinglist` |
| GET | `/email/domain/{x}/task/mailinglist/{x}` |
| GET | `/email/domain/{x}/task/redirection` |
| GET | `/email/domain/{x}/task/redirection/{x}` |
| GET | `/email/domain/{x}/task/responder` |
| GET | `/email/domain/{x}/task/responder/{x}` |
| POST | `/email/domain/{x}/terminate` |
| GET | `/email/domain/delegatedAccount` |
| GET | `/email/domain/delegatedAccount/{x}` |
| PUT | `/email/domain/delegatedAccount/{x}` |
| POST | `/email/domain/delegatedAccount/{x}/changePassword` |
| GET | `/email/domain/delegatedAccount/{x}/filter` |
| POST | `/email/domain/delegatedAccount/{x}/filter` |
| DELETE | `/email/domain/delegatedAccount/{x}/filter/{x}` |
| GET | `/email/domain/delegatedAccount/{x}/filter/{x}` |
| POST | `/email/domain/delegatedAccount/{x}/filter/{x}/changeActivity` |
| POST | `/email/domain/delegatedAccount/{x}/filter/{x}/changePriority` |
| GET | `/email/domain/delegatedAccount/{x}/filter/{x}/rule` |
| POST | `/email/domain/delegatedAccount/{x}/filter/{x}/rule` |
| DELETE | `/email/domain/delegatedAccount/{x}/filter/{x}/rule/{x}` |
| GET | `/email/domain/delegatedAccount/{x}/filter/{x}/rule/{x}` |
| DELETE | `/email/domain/delegatedAccount/{x}/responder` |
| GET | `/email/domain/delegatedAccount/{x}/responder` |
| POST | `/email/domain/delegatedAccount/{x}/responder` |
| PUT | `/email/domain/delegatedAccount/{x}/responder` |
| POST | `/email/domain/delegatedAccount/{x}/updateUsage` |
| POST | `/email/domain/delegatedAccount/{x}/usage` |
| GET | `/email/domain/mailingListLimits` |

### hostingPrivateDatabase (v1) — 72 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/hosting/privateDatabase` |
| GET | `/hosting/privateDatabase/{x}` |
| PUT | `/hosting/privateDatabase/{x}` |
| GET | `/hosting/privateDatabase/{x}/availableVersions` |
| POST | `/hosting/privateDatabase/{x}/changeContact` |
| POST | `/hosting/privateDatabase/{x}/changeFtpPassword` |
| POST | `/hosting/privateDatabase/{x}/changeVersion` |
| GET | `/hosting/privateDatabase/{x}/config` |
| POST | `/hosting/privateDatabase/{x}/config/update` |
| POST | `/hosting/privateDatabase/{x}/confirmTermination` |
| GET | `/hosting/privateDatabase/{x}/cpuThrottle` |
| GET | `/hosting/privateDatabase/{x}/database` |
| POST | `/hosting/privateDatabase/{x}/database` |
| DELETE | `/hosting/privateDatabase/{x}/database/{x}` |
| GET | `/hosting/privateDatabase/{x}/database/{x}` |
| GET | `/hosting/privateDatabase/{x}/database/{x}/copy` |
| POST | `/hosting/privateDatabase/{x}/database/{x}/copy` |
| DELETE | `/hosting/privateDatabase/{x}/database/{x}/copy/{x}` |
| GET | `/hosting/privateDatabase/{x}/database/{x}/copy/{x}` |
| POST | `/hosting/privateDatabase/{x}/database/{x}/copyRestore` |
| GET | `/hosting/privateDatabase/{x}/database/{x}/dump` |
| POST | `/hosting/privateDatabase/{x}/database/{x}/dump` |
| DELETE | `/hosting/privateDatabase/{x}/database/{x}/dump/{x}` |
| GET | `/hosting/privateDatabase/{x}/database/{x}/dump/{x}` |
| POST | `/hosting/privateDatabase/{x}/database/{x}/dump/{x}/restore` |
| GET | `/hosting/privateDatabase/{x}/database/{x}/extension` |
| GET | `/hosting/privateDatabase/{x}/database/{x}/extension/{x}` |
| POST | `/hosting/privateDatabase/{x}/database/{x}/extension/{x}/disable` |
| POST | `/hosting/privateDatabase/{x}/database/{x}/extension/{x}/enable` |
| POST | `/hosting/privateDatabase/{x}/database/{x}/import` |
| POST | `/hosting/privateDatabase/{x}/databaseWizard` |
| GET | `/hosting/privateDatabase/{x}/dump` |
| DELETE | `/hosting/privateDatabase/{x}/dump/{x}` |
| GET | `/hosting/privateDatabase/{x}/dump/{x}` |
| POST | `/hosting/privateDatabase/{x}/dump/{x}/restore` |
| POST | `/hosting/privateDatabase/{x}/generateTemporaryLogsLink` |
| GET | `/hosting/privateDatabase/{x}/log/kind` |
| GET | `/hosting/privateDatabase/{x}/log/kind/{x}` |
| GET | `/hosting/privateDatabase/{x}/log/subscription` |
| POST | `/hosting/privateDatabase/{x}/log/subscription` |
| DELETE | `/hosting/privateDatabase/{x}/log/subscription/{x}` |
| GET | `/hosting/privateDatabase/{x}/log/subscription/{x}` |
| POST | `/hosting/privateDatabase/{x}/log/url` |
| GET | `/hosting/privateDatabase/{x}/metricsToken` |
| GET | `/hosting/privateDatabase/{x}/oom` |
| POST | `/hosting/privateDatabase/{x}/quotaRefresh` |
| POST | `/hosting/privateDatabase/{x}/restart` |
| GET | `/hosting/privateDatabase/{x}/serviceInfos` |
| PUT | `/hosting/privateDatabase/{x}/serviceInfos` |
| GET | `/hosting/privateDatabase/{x}/tasks` |
| GET | `/hosting/privateDatabase/{x}/tasks/{x}` |
| POST | `/hosting/privateDatabase/{x}/terminate` |
| GET | `/hosting/privateDatabase/{x}/user` |
| POST | `/hosting/privateDatabase/{x}/user` |
| DELETE | `/hosting/privateDatabase/{x}/user/{x}` |
| GET | `/hosting/privateDatabase/{x}/user/{x}` |
| POST | `/hosting/privateDatabase/{x}/user/{x}/changePassword` |
| GET | `/hosting/privateDatabase/{x}/user/{x}/grant` |
| POST | `/hosting/privateDatabase/{x}/user/{x}/grant` |
| DELETE | `/hosting/privateDatabase/{x}/user/{x}/grant/{x}` |
| GET | `/hosting/privateDatabase/{x}/user/{x}/grant/{x}` |
| POST | `/hosting/privateDatabase/{x}/user/{x}/grant/{x}/update` |
| DELETE | `/hosting/privateDatabase/{x}/webhostingNetwork` |
| GET | `/hosting/privateDatabase/{x}/webhostingNetwork` |
| POST | `/hosting/privateDatabase/{x}/webhostingNetwork` |
| GET | `/hosting/privateDatabase/{x}/webs` |
| GET | `/hosting/privateDatabase/{x}/whitelist` |
| POST | `/hosting/privateDatabase/{x}/whitelist` |
| DELETE | `/hosting/privateDatabase/{x}/whitelist/{x}` |
| GET | `/hosting/privateDatabase/{x}/whitelist/{x}` |
| PUT | `/hosting/privateDatabase/{x}/whitelist/{x}` |
| GET | `/hosting/privateDatabase/availableOrderCapacities` |

### emailMxplan (v1) — 46 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/email/mxplan` |
| GET | `/email/mxplan/{x}` |
| PUT | `/email/mxplan/{x}` |
| GET | `/email/mxplan/{x}/account` |
| DELETE | `/email/mxplan/{x}/account/{x}` |
| GET | `/email/mxplan/{x}/account/{x}` |
| PUT | `/email/mxplan/{x}/account/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/alias` |
| POST | `/email/mxplan/{x}/account/{x}/alias` |
| DELETE | `/email/mxplan/{x}/account/{x}/alias/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/alias/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/capabilities` |
| POST | `/email/mxplan/{x}/account/{x}/changePassword` |
| GET | `/email/mxplan/{x}/account/{x}/diagnostic` |
| POST | `/email/mxplan/{x}/account/{x}/diagnostic` |
| GET | `/email/mxplan/{x}/account/{x}/fullAccess` |
| POST | `/email/mxplan/{x}/account/{x}/fullAccess` |
| DELETE | `/email/mxplan/{x}/account/{x}/fullAccess/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/fullAccess/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/sendAs` |
| POST | `/email/mxplan/{x}/account/{x}/sendAs` |
| DELETE | `/email/mxplan/{x}/account/{x}/sendAs/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/sendAs/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/sendOnBehalfTo` |
| POST | `/email/mxplan/{x}/account/{x}/sendOnBehalfTo` |
| DELETE | `/email/mxplan/{x}/account/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/mxplan/{x}/account/{x}/task` |
| GET | `/email/mxplan/{x}/account/{x}/task/{x}` |
| GET | `/email/mxplan/{x}/domain` |
| GET | `/email/mxplan/{x}/domain/{x}` |
| PUT | `/email/mxplan/{x}/domain/{x}` |
| DELETE | `/email/mxplan/{x}/domain/{x}/disclaimer` |
| GET | `/email/mxplan/{x}/domain/{x}/disclaimer` |
| POST | `/email/mxplan/{x}/domain/{x}/disclaimer` |
| PUT | `/email/mxplan/{x}/domain/{x}/disclaimer` |
| GET | `/email/mxplan/{x}/domain/{x}/disclaimerAttribute` |
| GET | `/email/mxplan/{x}/externalContact` |
| POST | `/email/mxplan/{x}/externalContact` |
| DELETE | `/email/mxplan/{x}/externalContact/{x}` |
| GET | `/email/mxplan/{x}/externalContact/{x}` |
| PUT | `/email/mxplan/{x}/externalContact/{x}` |
| GET | `/email/mxplan/{x}/server` |
| GET | `/email/mxplan/{x}/task` |
| GET | `/email/mxplan/{x}/task/{x}` |
| POST | `/email/mxplan/{x}/updateFlagsOnAllAccounts` |

### dedicatedNasha (v1) — 39 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/dedicated/nasha` |
| GET | `/dedicated/nasha/{x}` |
| PUT | `/dedicated/nasha/{x}` |
| POST | `/dedicated/nasha/{x}/changeContact` |
| POST | `/dedicated/nasha/{x}/confirmTermination` |
| GET | `/dedicated/nasha/{x}/metricsToken` |
| GET | `/dedicated/nasha/{x}/partition` |
| POST | `/dedicated/nasha/{x}/partition` |
| DELETE | `/dedicated/nasha/{x}/partition/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}` |
| PUT | `/dedicated/nasha/{x}/partition/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/access` |
| POST | `/dedicated/nasha/{x}/partition/{x}/access` |
| DELETE | `/dedicated/nasha/{x}/partition/{x}/access/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/access/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/authorizableBlocks` |
| GET | `/dedicated/nasha/{x}/partition/{x}/authorizableIps` |
| GET | `/dedicated/nasha/{x}/partition/{x}/customSnapshot` |
| POST | `/dedicated/nasha/{x}/partition/{x}/customSnapshot` |
| DELETE | `/dedicated/nasha/{x}/partition/{x}/customSnapshot/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/customSnapshot/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/options` |
| POST | `/dedicated/nasha/{x}/partition/{x}/options` |
| GET | `/dedicated/nasha/{x}/partition/{x}/quota` |
| POST | `/dedicated/nasha/{x}/partition/{x}/quota` |
| DELETE | `/dedicated/nasha/{x}/partition/{x}/quota/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/quota/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/snapshot` |
| POST | `/dedicated/nasha/{x}/partition/{x}/snapshot` |
| DELETE | `/dedicated/nasha/{x}/partition/{x}/snapshot/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/snapshot/{x}` |
| GET | `/dedicated/nasha/{x}/partition/{x}/templateUsage` |
| GET | `/dedicated/nasha/{x}/partition/{x}/use` |
| GET | `/dedicated/nasha/{x}/serviceInfos` |
| PUT | `/dedicated/nasha/{x}/serviceInfos` |
| GET | `/dedicated/nasha/{x}/task` |
| GET | `/dedicated/nasha/{x}/task/{x}` |
| POST | `/dedicated/nasha/{x}/terminate` |
| GET | `/dedicated/nasha/{x}/use` |

### dedicatedCeph (v1) — 35 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/dedicated/ceph` |
| GET | `/dedicated/ceph/{x}` |
| PUT | `/dedicated/ceph/{x}` |
| GET | `/dedicated/ceph/{x}/acl` |
| POST | `/dedicated/ceph/{x}/acl` |
| DELETE | `/dedicated/ceph/{x}/acl/{x}` |
| GET | `/dedicated/ceph/{x}/acl/{x}` |
| GET | `/dedicated/ceph/{x}/cephfs` |
| DELETE | `/dedicated/ceph/{x}/cephfs/{x}` |
| GET | `/dedicated/ceph/{x}/cephfs/{x}` |
| POST | `/dedicated/ceph/{x}/cephfs/{x}/disable` |
| POST | `/dedicated/ceph/{x}/cephfs/{x}/enable` |
| POST | `/dedicated/ceph/{x}/changeContact` |
| POST | `/dedicated/ceph/{x}/confirmTermination` |
| GET | `/dedicated/ceph/{x}/health` |
| GET | `/dedicated/ceph/{x}/osd/blocklist` |
| DELETE | `/dedicated/ceph/{x}/osd/blocklist/{x}` |
| GET | `/dedicated/ceph/{x}/pool` |
| POST | `/dedicated/ceph/{x}/pool` |
| DELETE | `/dedicated/ceph/{x}/pool/{x}` |
| GET | `/dedicated/ceph/{x}/pool/{x}` |
| PUT | `/dedicated/ceph/{x}/pool/{x}/allowDeletion` |
| GET | `/dedicated/ceph/{x}/serviceInfos` |
| PUT | `/dedicated/ceph/{x}/serviceInfos` |
| GET | `/dedicated/ceph/{x}/task` |
| GET | `/dedicated/ceph/{x}/task/{x}` |
| POST | `/dedicated/ceph/{x}/terminate` |
| GET | `/dedicated/ceph/{x}/user` |
| POST | `/dedicated/ceph/{x}/user` |
| DELETE | `/dedicated/ceph/{x}/user/{x}` |
| GET | `/dedicated/ceph/{x}/user/{x}` |
| GET | `/dedicated/ceph/{x}/user/{x}/pool` |
| POST | `/dedicated/ceph/{x}/user/{x}/pool` |
| PUT | `/dedicated/ceph/{x}/user/{x}/pool` |
| DELETE | `/dedicated/ceph/{x}/user/{x}/pool/{x}` |

### dedicatedHousing (v1) — 18 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/dedicated/housing` |
| GET | `/dedicated/housing/{x}` |
| DELETE | `/dedicated/housing/{x}/features/backupFTP` |
| GET | `/dedicated/housing/{x}/features/backupFTP` |
| POST | `/dedicated/housing/{x}/features/backupFTP` |
| GET | `/dedicated/housing/{x}/features/backupFTP/access` |
| POST | `/dedicated/housing/{x}/features/backupFTP/access` |
| DELETE | `/dedicated/housing/{x}/features/backupFTP/access/{x}` |
| GET | `/dedicated/housing/{x}/features/backupFTP/access/{x}` |
| PUT | `/dedicated/housing/{x}/features/backupFTP/access/{x}` |
| GET | `/dedicated/housing/{x}/features/backupFTP/authorizableBlocks` |
| POST | `/dedicated/housing/{x}/features/backupFTP/password` |
| GET | `/dedicated/housing/{x}/orderable/APC` |
| GET | `/dedicated/housing/{x}/serviceInfos` |
| PUT | `/dedicated/housing/{x}/serviceInfos` |
| GET | `/dedicated/housing/{x}/task` |
| GET | `/dedicated/housing/{x}/task/{x}` |
| POST | `/dedicated/housing/{x}/task/{x}/cancel` |

### licenseOffice (v1) — 16 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/office` |
| GET | `/license/office/{x}` |
| PUT | `/license/office/{x}` |
| GET | `/license/office/{x}/domain` |
| GET | `/license/office/{x}/domain/{x}` |
| GET | `/license/office/{x}/pendingTask` |
| GET | `/license/office/{x}/pendingTask/{x}` |
| GET | `/license/office/{x}/serviceInfos` |
| PUT | `/license/office/{x}/serviceInfos` |
| GET | `/license/office/{x}/usageStatistics` |
| GET | `/license/office/{x}/user` |
| POST | `/license/office/{x}/user` |
| DELETE | `/license/office/{x}/user/{x}` |
| GET | `/license/office/{x}/user/{x}` |
| PUT | `/license/office/{x}/user/{x}` |
| POST | `/license/office/{x}/user/{x}/changePassword` |

### licenseOfficePrepaid (v1) — 16 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/officePrepaid` |
| GET | `/license/officePrepaid/{x}` |
| PUT | `/license/officePrepaid/{x}` |
| POST | `/license/officePrepaid/{x}/changePassword` |
| POST | `/license/officePrepaid/{x}/confirmTermination` |
| GET | `/license/officePrepaid/{x}/parentTenant` |
| PUT | `/license/officePrepaid/{x}/parentTenant` |
| POST | `/license/officePrepaid/{x}/parentTenant/acceptAgreement` |
| POST | `/license/officePrepaid/{x}/parentTenant/createAttestation` |
| GET | `/license/officePrepaid/{x}/serviceInfos` |
| PUT | `/license/officePrepaid/{x}/serviceInfos` |
| GET | `/license/officePrepaid/{x}/tenantPendingTask` |
| GET | `/license/officePrepaid/{x}/tenantPendingTask/{x}` |
| GET | `/license/officePrepaid/{x}/tenantUsageStatistics` |
| POST | `/license/officePrepaid/{x}/terminate` |
| POST | `/license/officePrepaid/{x}/unconfigure` |

### licensePlesk (v1) — 16 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/plesk` |
| GET | `/license/plesk/{x}` |
| PUT | `/license/plesk/{x}` |
| GET | `/license/plesk/{x}/allowedDestinationIp` |
| GET | `/license/plesk/{x}/canLicenseBeMovedTo` |
| POST | `/license/plesk/{x}/changeIp` |
| POST | `/license/plesk/{x}/confirmTermination` |
| GET | `/license/plesk/{x}/option` |
| DELETE | `/license/plesk/{x}/option/{x}` |
| GET | `/license/plesk/{x}/option/{x}` |
| GET | `/license/plesk/{x}/serviceInfos` |
| PUT | `/license/plesk/{x}/serviceInfos` |
| GET | `/license/plesk/{x}/tasks` |
| GET | `/license/plesk/{x}/tasks/{x}` |
| POST | `/license/plesk/{x}/terminate` |
| GET | `/license/plesk/orderableVersions` |

### licenseVirtuozzo (v1) — 16 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/virtuozzo` |
| GET | `/license/virtuozzo/{x}` |
| PUT | `/license/virtuozzo/{x}` |
| GET | `/license/virtuozzo/{x}/allowedDestinationIp` |
| GET | `/license/virtuozzo/{x}/canLicenseBeMovedTo` |
| POST | `/license/virtuozzo/{x}/changeIp` |
| POST | `/license/virtuozzo/{x}/confirmTermination` |
| GET | `/license/virtuozzo/{x}/option` |
| DELETE | `/license/virtuozzo/{x}/option/{x}` |
| GET | `/license/virtuozzo/{x}/option/{x}` |
| GET | `/license/virtuozzo/{x}/serviceInfos` |
| PUT | `/license/virtuozzo/{x}/serviceInfos` |
| GET | `/license/virtuozzo/{x}/tasks` |
| GET | `/license/virtuozzo/{x}/tasks/{x}` |
| POST | `/license/virtuozzo/{x}/terminate` |
| GET | `/license/virtuozzo/orderableVersions` |

### licenseDirectadmin (v1) — 14 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/directadmin` |
| GET | `/license/directadmin/{x}` |
| PUT | `/license/directadmin/{x}` |
| GET | `/license/directadmin/{x}/allowedDestinationIp` |
| GET | `/license/directadmin/{x}/canLicenseBeMovedTo` |
| POST | `/license/directadmin/{x}/changeIp` |
| POST | `/license/directadmin/{x}/changeOs` |
| POST | `/license/directadmin/{x}/confirmTermination` |
| GET | `/license/directadmin/{x}/serviceInfos` |
| PUT | `/license/directadmin/{x}/serviceInfos` |
| GET | `/license/directadmin/{x}/tasks` |
| GET | `/license/directadmin/{x}/tasks/{x}` |
| POST | `/license/directadmin/{x}/terminate` |
| GET | `/license/directadmin/orderableVersions` |

### licenseWindows (v1) — 14 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/windows` |
| GET | `/license/windows/{x}` |
| PUT | `/license/windows/{x}` |
| POST | `/license/windows/{x}/confirmTermination` |
| GET | `/license/windows/{x}/option` |
| DELETE | `/license/windows/{x}/option/{x}` |
| GET | `/license/windows/{x}/option/{x}` |
| GET | `/license/windows/{x}/serviceInfos` |
| PUT | `/license/windows/{x}/serviceInfos` |
| POST | `/license/windows/{x}/sqlServer` |
| GET | `/license/windows/{x}/tasks` |
| GET | `/license/windows/{x}/tasks/{x}` |
| POST | `/license/windows/{x}/terminate` |
| GET | `/license/windows/orderableVersions` |

### licenseCpanel (v1) — 13 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/cpanel` |
| GET | `/license/cpanel/{x}` |
| PUT | `/license/cpanel/{x}` |
| GET | `/license/cpanel/{x}/allowedDestinationIp` |
| GET | `/license/cpanel/{x}/canLicenseBeMovedTo` |
| POST | `/license/cpanel/{x}/changeIp` |
| POST | `/license/cpanel/{x}/confirmTermination` |
| GET | `/license/cpanel/{x}/serviceInfos` |
| PUT | `/license/cpanel/{x}/serviceInfos` |
| GET | `/license/cpanel/{x}/tasks` |
| GET | `/license/cpanel/{x}/tasks/{x}` |
| POST | `/license/cpanel/{x}/terminate` |
| GET | `/license/cpanel/orderableVersions` |

### licenseHycu (v1) — 10 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/hycu` |
| GET | `/license/hycu/{x}` |
| PUT | `/license/hycu/{x}` |
| POST | `/license/hycu/{x}/activate` |
| POST | `/license/hycu/{x}/confirmTermination` |
| GET | `/license/hycu/{x}/license` |
| POST | `/license/hycu/{x}/refresh` |
| GET | `/license/hycu/{x}/serviceInfos` |
| PUT | `/license/hycu/{x}/serviceInfos` |
| POST | `/license/hycu/{x}/terminate` |

### dedicatedCluster (v1) — 9 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/dedicated/cluster` |
| GET | `/dedicated/cluster/{x}` |
| POST | `/dedicated/cluster/{x}/changeContact` |
| POST | `/dedicated/cluster/{x}/confirmTermination` |
| GET | `/dedicated/cluster/{x}/serviceInfos` |
| PUT | `/dedicated/cluster/{x}/serviceInfos` |
| POST | `/dedicated/cluster/{x}/terminate` |
| GET | `/dedicated/cluster/availabilities` |
| GET | `/dedicated/cluster/availabilities/raw` |

### dedicatedInstallationTemplate (v1) — 9 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/dedicated/installationTemplate` |
| GET | `/dedicated/installationTemplate/{x}` |
| GET | `/dedicated/installationTemplate/{x}/partitionScheme` |
| GET | `/dedicated/installationTemplate/{x}/partitionScheme/{x}` |
| GET | `/dedicated/installationTemplate/{x}/partitionScheme/{x}/hardwareRaid` |
| GET | `/dedicated/installationTemplate/{x}/partitionScheme/{x}/hardwareRaid/{x}` |
| GET | `/dedicated/installationTemplate/{x}/partitionScheme/{x}/partition` |
| GET | `/dedicated/installationTemplate/{x}/partitionScheme/{x}/partition/{x}` |
| GET | `/dedicated/installationTemplate/templateInfos` |

### licenseCloudLinux (v1) — 9 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/cloudLinux` |
| GET | `/license/cloudLinux/{x}` |
| POST | `/license/cloudLinux/{x}/confirmTermination` |
| GET | `/license/cloudLinux/{x}/serviceInfos` |
| PUT | `/license/cloudLinux/{x}/serviceInfos` |
| GET | `/license/cloudLinux/{x}/tasks` |
| GET | `/license/cloudLinux/{x}/tasks/{x}` |
| POST | `/license/cloudLinux/{x}/terminate` |
| GET | `/license/cloudLinux/orderableVersions` |

### licenseRedhat (v1) — 9 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/redhat` |
| GET | `/license/redhat/{x}` |
| PUT | `/license/redhat/{x}` |
| POST | `/license/redhat/{x}/confirmTermination` |
| GET | `/license/redhat/{x}/serviceInfos` |
| PUT | `/license/redhat/{x}/serviceInfos` |
| GET | `/license/redhat/{x}/tasks` |
| GET | `/license/redhat/{x}/tasks/{x}` |
| POST | `/license/redhat/{x}/terminate` |

### licenseSqlserver (v1) — 9 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/sqlserver` |
| GET | `/license/sqlserver/{x}` |
| POST | `/license/sqlserver/{x}/confirmTermination` |
| GET | `/license/sqlserver/{x}/serviceInfos` |
| PUT | `/license/sqlserver/{x}/serviceInfos` |
| GET | `/license/sqlserver/{x}/tasks` |
| GET | `/license/sqlserver/{x}/tasks/{x}` |
| POST | `/license/sqlserver/{x}/terminate` |
| GET | `/license/sqlserver/orderableVersions` |

### packSiptrunk (v1) — 5 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/pack/siptrunk` |
| GET | `/pack/siptrunk/{x}` |
| POST | `/pack/siptrunk/{x}/changeContact` |
| GET | `/pack/siptrunk/{x}/serviceInfos` |
| PUT | `/pack/siptrunk/{x}/serviceInfos` |

### email (v1) — 58 manquants

_Nodes associés : OvhCloudEmailPro, OvhCloudMxPlan_

| Méthode | Chemin |
|--------|--------|
| PUT | `/email/pro/{x}` |
| GET | `/email/pro/{x}/account` |
| DELETE | `/email/pro/{x}/account/{x}` |
| GET | `/email/pro/{x}/account/{x}` |
| PUT | `/email/pro/{x}/account/{x}` |
| GET | `/email/pro/{x}/account/{x}/alias` |
| POST | `/email/pro/{x}/account/{x}/alias` |
| DELETE | `/email/pro/{x}/account/{x}/alias/{x}` |
| GET | `/email/pro/{x}/account/{x}/alias/{x}` |
| POST | `/email/pro/{x}/account/{x}/changePassword` |
| GET | `/email/pro/{x}/account/{x}/diagnostics` |
| POST | `/email/pro/{x}/account/{x}/diagnostics` |
| GET | `/email/pro/{x}/account/{x}/fullAccess` |
| POST | `/email/pro/{x}/account/{x}/fullAccess` |
| DELETE | `/email/pro/{x}/account/{x}/fullAccess/{x}` |
| GET | `/email/pro/{x}/account/{x}/fullAccess/{x}` |
| GET | `/email/pro/{x}/account/{x}/sendAs` |
| POST | `/email/pro/{x}/account/{x}/sendAs` |
| DELETE | `/email/pro/{x}/account/{x}/sendAs/{x}` |
| GET | `/email/pro/{x}/account/{x}/sendAs/{x}` |
| GET | `/email/pro/{x}/account/{x}/sendOnBehalfTo` |
| POST | `/email/pro/{x}/account/{x}/sendOnBehalfTo` |
| DELETE | `/email/pro/{x}/account/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/pro/{x}/account/{x}/sendOnBehalfTo/{x}` |
| GET | `/email/pro/{x}/account/{x}/tasks` |
| GET | `/email/pro/{x}/account/{x}/tasks/{x}` |
| POST | `/email/pro/{x}/account/{x}/terminate` |
| GET | `/email/pro/{x}/billingMigrated` |
| GET | `/email/pro/{x}/billingPlan` |
| POST | `/email/pro/{x}/changeContact` |
| GET | `/email/pro/{x}/domain` |
| POST | `/email/pro/{x}/domain` |
| DELETE | `/email/pro/{x}/domain/{x}` |
| GET | `/email/pro/{x}/domain/{x}` |
| PUT | `/email/pro/{x}/domain/{x}` |
| DELETE | `/email/pro/{x}/domain/{x}/disclaimer` |
| GET | `/email/pro/{x}/domain/{x}/disclaimer` |
| POST | `/email/pro/{x}/domain/{x}/disclaimer` |
| PUT | `/email/pro/{x}/domain/{x}/disclaimer` |
| GET | `/email/pro/{x}/domain/{x}/disclaimerAttribute` |
| GET | `/email/pro/{x}/domain/{x}/dkim` |
| POST | `/email/pro/{x}/domain/{x}/dkim` |
| DELETE | `/email/pro/{x}/domain/{x}/dkim/{x}` |
| GET | `/email/pro/{x}/domain/{x}/dkim/{x}` |
| POST | `/email/pro/{x}/domain/{x}/dkim/{x}/disable` |
| POST | `/email/pro/{x}/domain/{x}/dkim/{x}/enable` |
| GET | `/email/pro/{x}/domain/{x}/dkimSelector` |
| GET | `/email/pro/{x}/externalContact` |
| POST | `/email/pro/{x}/externalContact` |
| DELETE | `/email/pro/{x}/externalContact/{x}` |
| GET | `/email/pro/{x}/externalContact/{x}` |
| PUT | `/email/pro/{x}/externalContact/{x}` |
| GET | `/email/pro/{x}/server` |
| GET | `/email/pro/{x}/serviceInfos` |
| PUT | `/email/pro/{x}/serviceInfos` |
| GET | `/email/pro/{x}/task` |
| GET | `/email/pro/{x}/task/{x}` |
| POST | `/email/pro/{x}/updateFlagsOnAllAccounts` |

### order (v1) — 780 manquants

_Nodes associés : OvhCloudOrder_

| Méthode | Chemin |
|--------|--------|
| GET | `/order/cart` |
| POST | `/order/cart` |
| GET | `/order/cart/{x}/advisoryServicesHostingWeb` |
| POST | `/order/cart/{x}/advisoryServicesHostingWeb` |
| GET | `/order/cart/{x}/advisoryServicesHostingWeb/options` |
| POST | `/order/cart/{x}/advisoryServicesHostingWeb/options` |
| GET | `/order/cart/{x}/advisoryServicesPublicCloud` |
| POST | `/order/cart/{x}/advisoryServicesPublicCloud` |
| GET | `/order/cart/{x}/advisoryServicesPublicCloud/options` |
| POST | `/order/cart/{x}/advisoryServicesPublicCloud/options` |
| GET | `/order/cart/{x}/advisoryServicesTelecom` |
| POST | `/order/cart/{x}/advisoryServicesTelecom` |
| GET | `/order/cart/{x}/advisoryServicesTelecom/options` |
| POST | `/order/cart/{x}/advisoryServicesTelecom/options` |
| GET | `/order/cart/{x}/analytics` |
| POST | `/order/cart/{x}/analytics` |
| GET | `/order/cart/{x}/analytics/options` |
| POST | `/order/cart/{x}/analytics/options` |
| POST | `/order/cart/{x}/assign` |
| GET | `/order/cart/{x}/backupServices` |
| POST | `/order/cart/{x}/backupServices` |
| GET | `/order/cart/{x}/backupServices/options` |
| POST | `/order/cart/{x}/backupServices/options` |
| GET | `/order/cart/{x}/baremetalServers` |
| POST | `/order/cart/{x}/baremetalServers` |
| GET | `/order/cart/{x}/baremetalServers/options` |
| POST | `/order/cart/{x}/baremetalServers/options` |
| GET | `/order/cart/{x}/bringYourOwnIp` |
| POST | `/order/cart/{x}/bringYourOwnIp` |
| GET | `/order/cart/{x}/cdn` |
| POST | `/order/cart/{x}/cdn` |
| GET | `/order/cart/{x}/cdn/options` |
| POST | `/order/cart/{x}/cdn/options` |
| GET | `/order/cart/{x}/cephaas` |
| POST | `/order/cart/{x}/cephaas` |
| GET | `/order/cart/{x}/cephaas/options` |
| POST | `/order/cart/{x}/cephaas/options` |
| GET | `/order/cart/{x}/checkout` |
| POST | `/order/cart/{x}/checkout` |
| GET | `/order/cart/{x}/cloud` |
| POST | `/order/cart/{x}/cloud` |
| GET | `/order/cart/{x}/cloud/options` |
| POST | `/order/cart/{x}/cloud/options` |
| GET | `/order/cart/{x}/cloudDB` |
| POST | `/order/cart/{x}/cloudDB` |
| GET | `/order/cart/{x}/cloudweb` |
| POST | `/order/cart/{x}/cloudweb` |
| GET | `/order/cart/{x}/cloudweb/options` |
| POST | `/order/cart/{x}/cloudweb/options` |
| DELETE | `/order/cart/{x}/coupon` |
| GET | `/order/cart/{x}/csp2` |
| POST | `/order/cart/{x}/csp2` |
| GET | `/order/cart/{x}/csp2/options` |
| POST | `/order/cart/{x}/csp2/options` |
| GET | `/order/cart/{x}/dbaasTimeseries` |
| POST | `/order/cart/{x}/dbaasTimeseries` |
| GET | `/order/cart/{x}/dedicated` |
| POST | `/order/cart/{x}/dedicated` |
| GET | `/order/cart/{x}/dedicated/options` |
| POST | `/order/cart/{x}/dedicated/options` |
| GET | `/order/cart/{x}/dedicatedCloud` |
| POST | `/order/cart/{x}/dedicatedCloud` |
| GET | `/order/cart/{x}/dedicatedCloud/options` |
| POST | `/order/cart/{x}/dedicatedCloud/options` |
| GET | `/order/cart/{x}/dedicatedDirectSales` |
| POST | `/order/cart/{x}/dedicatedDirectSales` |
| GET | `/order/cart/{x}/dedicatedDirectSales/options` |
| POST | `/order/cart/{x}/dedicatedDirectSales/options` |
| GET | `/order/cart/{x}/dedicatedLabs` |
| POST | `/order/cart/{x}/dedicatedLabs` |
| GET | `/order/cart/{x}/dedicatedLabs/options` |
| POST | `/order/cart/{x}/dedicatedLabs/options` |
| GET | `/order/cart/{x}/dedicatedLegacy` |
| POST | `/order/cart/{x}/dedicatedLegacy` |
| GET | `/order/cart/{x}/dedicatedLegacy/options` |
| POST | `/order/cart/{x}/dedicatedLegacy/options` |
| GET | `/order/cart/{x}/dedicatedPciVps` |
| POST | `/order/cart/{x}/dedicatedPciVps` |
| GET | `/order/cart/{x}/dedicatedPciVps/options` |
| POST | `/order/cart/{x}/dedicatedPciVps/options` |
| GET | `/order/cart/{x}/dedicatedReseller` |
| POST | `/order/cart/{x}/dedicatedReseller` |
| GET | `/order/cart/{x}/dedicatedReseller/options` |
| POST | `/order/cart/{x}/dedicatedReseller/options` |
| GET | `/order/cart/{x}/deskaas` |
| POST | `/order/cart/{x}/deskaas` |
| GET | `/order/cart/{x}/discover` |
| POST | `/order/cart/{x}/discover` |
| GET | `/order/cart/{x}/discover/options` |
| POST | `/order/cart/{x}/discover/options` |
| GET | `/order/cart/{x}/dns` |
| POST | `/order/cart/{x}/dns` |
| GET | `/order/cart/{x}/dns/options` |
| POST | `/order/cart/{x}/dns/options` |
| GET | `/order/cart/{x}/domain` |
| POST | `/order/cart/{x}/domain` |
| GET | `/order/cart/{x}/domain/options` |
| POST | `/order/cart/{x}/domain/options` |
| GET | `/order/cart/{x}/domainPacks` |
| POST | `/order/cart/{x}/domainPacks` |
| GET | `/order/cart/{x}/domainRestore` |
| GET | `/order/cart/{x}/eco` |
| POST | `/order/cart/{x}/eco` |
| GET | `/order/cart/{x}/eco/options` |
| POST | `/order/cart/{x}/eco/options` |
| GET | `/order/cart/{x}/emailDomain` |
| POST | `/order/cart/{x}/emailDomain` |
| GET | `/order/cart/{x}/emailpro` |
| POST | `/order/cart/{x}/emailpro` |
| GET | `/order/cart/{x}/emailpro/options` |
| POST | `/order/cart/{x}/emailpro/options` |
| GET | `/order/cart/{x}/exchange` |
| POST | `/order/cart/{x}/exchange` |
| GET | `/order/cart/{x}/exchange/options` |
| POST | `/order/cart/{x}/exchange/options` |
| GET | `/order/cart/{x}/exchangeEnterprise` |
| POST | `/order/cart/{x}/exchangeEnterprise` |
| GET | `/order/cart/{x}/exchangeEnterprise/options` |
| POST | `/order/cart/{x}/exchangeEnterprise/options` |
| GET | `/order/cart/{x}/ip` |
| POST | `/order/cart/{x}/ip` |
| GET | `/order/cart/{x}/ip/options` |
| POST | `/order/cart/{x}/ip/options` |
| GET | `/order/cart/{x}/ipLoadbalancing` |
| POST | `/order/cart/{x}/ipLoadbalancing` |
| GET | `/order/cart/{x}/ipLoadbalancing/options` |
| POST | `/order/cart/{x}/ipLoadbalancing/options` |
| GET | `/order/cart/{x}/ipReseller` |
| POST | `/order/cart/{x}/ipReseller` |
| GET | `/order/cart/{x}/ispPublic` |
| POST | `/order/cart/{x}/ispPublic` |
| GET | `/order/cart/{x}/ispPublic/options` |
| POST | `/order/cart/{x}/ispPublic/options` |
| GET | `/order/cart/{x}/ispReseller` |
| POST | `/order/cart/{x}/ispReseller` |
| GET | `/order/cart/{x}/ispReseller/options` |
| POST | `/order/cart/{x}/ispReseller/options` |
| GET | `/order/cart/{x}/kubernetes` |
| POST | `/order/cart/{x}/kubernetes` |
| GET | `/order/cart/{x}/kubernetes/options` |
| POST | `/order/cart/{x}/kubernetes/options` |
| GET | `/order/cart/{x}/licensecPanel` |
| POST | `/order/cart/{x}/licensecPanel` |
| GET | `/order/cart/{x}/licenseHycu` |
| POST | `/order/cart/{x}/licenseHycu` |
| GET | `/order/cart/{x}/licensePlesk` |
| POST | `/order/cart/{x}/licensePlesk` |
| GET | `/order/cart/{x}/licensePlesk/options` |
| POST | `/order/cart/{x}/licensePlesk/options` |
| GET | `/order/cart/{x}/licenseSqlServer` |
| POST | `/order/cart/{x}/licenseSqlServer` |
| GET | `/order/cart/{x}/licenseWindows` |
| POST | `/order/cart/{x}/licenseWindows` |
| GET | `/order/cart/{x}/logs` |
| POST | `/order/cart/{x}/logs` |
| GET | `/order/cart/{x}/logs/options` |
| POST | `/order/cart/{x}/logs/options` |
| GET | `/order/cart/{x}/managedCMS` |
| POST | `/order/cart/{x}/managedCMS` |
| GET | `/order/cart/{x}/managedCMS/options` |
| POST | `/order/cart/{x}/managedCMS/options` |
| GET | `/order/cart/{x}/managedServices` |
| POST | `/order/cart/{x}/managedServices` |
| GET | `/order/cart/{x}/managedServices/options` |
| POST | `/order/cart/{x}/managedServices/options` |
| GET | `/order/cart/{x}/metrics` |
| POST | `/order/cart/{x}/metrics` |
| GET | `/order/cart/{x}/metrics/options` |
| POST | `/order/cart/{x}/metrics/options` |
| GET | `/order/cart/{x}/microsoft` |
| POST | `/order/cart/{x}/microsoft` |
| GET | `/order/cart/{x}/microsoft/options` |
| POST | `/order/cart/{x}/microsoft/options` |
| GET | `/order/cart/{x}/nasha` |
| POST | `/order/cart/{x}/nasha` |
| GET | `/order/cart/{x}/nasha/options` |
| POST | `/order/cart/{x}/nasha/options` |
| GET | `/order/cart/{x}/netapp` |
| POST | `/order/cart/{x}/netapp` |
| GET | `/order/cart/{x}/netapp/options` |
| POST | `/order/cart/{x}/netapp/options` |
| GET | `/order/cart/{x}/nutanix` |
| POST | `/order/cart/{x}/nutanix` |
| GET | `/order/cart/{x}/nutanix/options` |
| POST | `/order/cart/{x}/nutanix/options` |
| GET | `/order/cart/{x}/office365` |
| POST | `/order/cart/{x}/office365` |
| GET | `/order/cart/{x}/office365/options` |
| POST | `/order/cart/{x}/office365/options` |
| GET | `/order/cart/{x}/office365Prepaid` |
| POST | `/order/cart/{x}/office365Prepaid` |
| GET | `/order/cart/{x}/office365Prepaid/options` |
| POST | `/order/cart/{x}/office365Prepaid/options` |
| GET | `/order/cart/{x}/officePrepaid` |
| POST | `/order/cart/{x}/officePrepaid` |
| GET | `/order/cart/{x}/officePrepaid/options` |
| POST | `/order/cart/{x}/officePrepaid/options` |
| GET | `/order/cart/{x}/okms` |
| POST | `/order/cart/{x}/okms` |
| GET | `/order/cart/{x}/otb` |
| POST | `/order/cart/{x}/otb` |
| GET | `/order/cart/{x}/otb/options` |
| POST | `/order/cart/{x}/otb/options` |
| GET | `/order/cart/{x}/otbReseller` |
| POST | `/order/cart/{x}/otbReseller` |
| GET | `/order/cart/{x}/otbReseller/options` |
| POST | `/order/cart/{x}/otbReseller/options` |
| GET | `/order/cart/{x}/ovhCloudConnect` |
| POST | `/order/cart/{x}/ovhCloudConnect` |
| GET | `/order/cart/{x}/paasmon` |
| POST | `/order/cart/{x}/paasmon` |
| GET | `/order/cart/{x}/packsProfessionalServices` |
| POST | `/order/cart/{x}/packsProfessionalServices` |
| GET | `/order/cart/{x}/packsProfessionalServices/options` |
| POST | `/order/cart/{x}/packsProfessionalServices/options` |
| GET | `/order/cart/{x}/powerHosting` |
| POST | `/order/cart/{x}/powerHosting` |
| GET | `/order/cart/{x}/privateCloud` |
| POST | `/order/cart/{x}/privateCloud` |
| GET | `/order/cart/{x}/privateCloud/options` |
| POST | `/order/cart/{x}/privateCloud/options` |
| GET | `/order/cart/{x}/privateCloudCDI` |
| POST | `/order/cart/{x}/privateCloudCDI` |
| GET | `/order/cart/{x}/privateCloudCDI/options` |
| POST | `/order/cart/{x}/privateCloudCDI/options` |
| GET | `/order/cart/{x}/privateCloudDC` |
| POST | `/order/cart/{x}/privateCloudDC` |
| GET | `/order/cart/{x}/privateCloudDC/options` |
| POST | `/order/cart/{x}/privateCloudDC/options` |
| GET | `/order/cart/{x}/privateCloudEnterprise` |
| POST | `/order/cart/{x}/privateCloudEnterprise` |
| GET | `/order/cart/{x}/privateCloudEnterprise/options` |
| POST | `/order/cart/{x}/privateCloudEnterprise/options` |
| GET | `/order/cart/{x}/privateCloudReseller` |
| POST | `/order/cart/{x}/privateCloudReseller` |
| GET | `/order/cart/{x}/privateCloudReseller/options` |
| POST | `/order/cart/{x}/privateCloudReseller/options` |
| GET | `/order/cart/{x}/privateCloudResellerEnterprise` |
| POST | `/order/cart/{x}/privateCloudResellerEnterprise` |
| GET | `/order/cart/{x}/privateCloudResellerEnterprise/options` |
| POST | `/order/cart/{x}/privateCloudResellerEnterprise/options` |
| GET | `/order/cart/{x}/privateCloudSDDC` |
| POST | `/order/cart/{x}/privateCloudSDDC` |
| GET | `/order/cart/{x}/privateCloudSDDC/options` |
| POST | `/order/cart/{x}/privateCloudSDDC/options` |
| GET | `/order/cart/{x}/privateSQL` |
| POST | `/order/cart/{x}/privateSQL` |
| GET | `/order/cart/{x}/reseller` |
| POST | `/order/cart/{x}/reseller` |
| GET | `/order/cart/{x}/sharepoint` |
| POST | `/order/cart/{x}/sharepoint` |
| GET | `/order/cart/{x}/sharepoint/options` |
| POST | `/order/cart/{x}/sharepoint/options` |
| GET | `/order/cart/{x}/sms` |
| POST | `/order/cart/{x}/sms` |
| GET | `/order/cart/{x}/sncNetworkServices` |
| POST | `/order/cart/{x}/sncNetworkServices` |
| GET | `/order/cart/{x}/sncNetworkServices/options` |
| POST | `/order/cart/{x}/sncNetworkServices/options` |
| GET | `/order/cart/{x}/sslComodo` |
| POST | `/order/cart/{x}/sslComodo` |
| GET | `/order/cart/{x}/sslComodo/options` |
| POST | `/order/cart/{x}/sslComodo/options` |
| GET | `/order/cart/{x}/sslGateway` |
| POST | `/order/cart/{x}/sslGateway` |
| GET | `/order/cart/{x}/sslGateway/options` |
| POST | `/order/cart/{x}/sslGateway/options` |
| GET | `/order/cart/{x}/telephony` |
| POST | `/order/cart/{x}/telephony` |
| GET | `/order/cart/{x}/telephony/options` |
| POST | `/order/cart/{x}/telephony/options` |
| GET | `/order/cart/{x}/vdi` |
| POST | `/order/cart/{x}/vdi` |
| GET | `/order/cart/{x}/vdi/options` |
| POST | `/order/cart/{x}/vdi/options` |
| GET | `/order/cart/{x}/veeamcc` |
| POST | `/order/cart/{x}/veeamcc` |
| GET | `/order/cart/{x}/veeamcc/options` |
| POST | `/order/cart/{x}/veeamcc/options` |
| GET | `/order/cart/{x}/veeamEnterprise` |
| POST | `/order/cart/{x}/veeamEnterprise` |
| GET | `/order/cart/{x}/veeamEnterprise/options` |
| POST | `/order/cart/{x}/veeamEnterprise/options` |
| GET | `/order/cart/{x}/videocenter` |
| POST | `/order/cart/{x}/videocenter` |
| GET | `/order/cart/{x}/videocenter/options` |
| POST | `/order/cart/{x}/videocenter/options` |
| GET | `/order/cart/{x}/vmwareCloudDirector` |
| POST | `/order/cart/{x}/vmwareCloudDirector` |
| GET | `/order/cart/{x}/vmwareCloudDirector/options` |
| POST | `/order/cart/{x}/vmwareCloudDirector/options` |
| GET | `/order/cart/{x}/vmwareCloudDirectorBackup` |
| POST | `/order/cart/{x}/vmwareCloudDirectorBackup` |
| GET | `/order/cart/{x}/vmwareCloudDirectorBackup/options` |
| POST | `/order/cart/{x}/vmwareCloudDirectorBackup/options` |
| GET | `/order/cart/{x}/vps` |
| POST | `/order/cart/{x}/vps` |
| GET | `/order/cart/{x}/vps/options` |
| POST | `/order/cart/{x}/vps/options` |
| GET | `/order/cart/{x}/vrack` |
| POST | `/order/cart/{x}/vrack` |
| GET | `/order/cart/{x}/vrack/options` |
| POST | `/order/cart/{x}/vrack/options` |
| GET | `/order/cart/{x}/vrackReseller` |
| POST | `/order/cart/{x}/vrackReseller` |
| GET | `/order/cart/{x}/vrackServices` |
| POST | `/order/cart/{x}/vrackServices` |
| GET | `/order/cart/{x}/webHosting` |
| POST | `/order/cart/{x}/webHosting` |
| GET | `/order/cart/{x}/webHosting/options` |
| POST | `/order/cart/{x}/webHosting/options` |
| GET | `/order/cart/{x}/xdsl` |
| POST | `/order/cart/{x}/xdsl` |
| GET | `/order/cart/{x}/xdsl/options` |
| POST | `/order/cart/{x}/xdsl/options` |
| GET | `/order/cart/{x}/zimbra` |
| POST | `/order/cart/{x}/zimbra` |
| GET | `/order/cart/{x}/zimbra/options` |
| POST | `/order/cart/{x}/zimbra/options` |
| GET | `/order/cartServiceOption/backupServices` |
| GET | `/order/cartServiceOption/backupServices/{x}` |
| GET | `/order/cartServiceOption/baremetalServers` |
| GET | `/order/cartServiceOption/baremetalServers/{x}` |
| POST | `/order/cartServiceOption/baremetalServers/{x}` |
| GET | `/order/cartServiceOption/cloud` |
| GET | `/order/cartServiceOption/cloud/{x}` |
| POST | `/order/cartServiceOption/cloud/{x}` |
| GET | `/order/cartServiceOption/dedicated` |
| GET | `/order/cartServiceOption/dedicated/{x}` |
| POST | `/order/cartServiceOption/dedicated/{x}` |
| GET | `/order/cartServiceOption/dns` |
| GET | `/order/cartServiceOption/dns/{x}` |
| POST | `/order/cartServiceOption/dns/{x}` |
| GET | `/order/cartServiceOption/domain` |
| GET | `/order/cartServiceOption/domain/{x}` |
| POST | `/order/cartServiceOption/domain/{x}` |
| GET | `/order/cartServiceOption/emailpro` |
| GET | `/order/cartServiceOption/emailpro/{x}` |
| POST | `/order/cartServiceOption/emailpro/{x}` |
| GET | `/order/cartServiceOption/ipLoadbalancing` |
| GET | `/order/cartServiceOption/ipLoadbalancing/{x}` |
| POST | `/order/cartServiceOption/ipLoadbalancing/{x}` |
| GET | `/order/cartServiceOption/licenseHycu` |
| GET | `/order/cartServiceOption/licenseHycu/{x}` |
| POST | `/order/cartServiceOption/licenseHycu/{x}` |
| GET | `/order/cartServiceOption/logs` |
| GET | `/order/cartServiceOption/logs/{x}` |
| POST | `/order/cartServiceOption/logs/{x}` |
| GET | `/order/cartServiceOption/microsoft` |
| GET | `/order/cartServiceOption/microsoft/{x}` |
| POST | `/order/cartServiceOption/microsoft/{x}` |
| GET | `/order/cartServiceOption/microsoftExchange` |
| GET | `/order/cartServiceOption/microsoftExchange/{x}` |
| POST | `/order/cartServiceOption/microsoftExchange/{x}` |
| GET | `/order/cartServiceOption/nutanix` |
| GET | `/order/cartServiceOption/nutanix/{x}` |
| POST | `/order/cartServiceOption/nutanix/{x}` |
| GET | `/order/cartServiceOption/office365Prepaid` |
| GET | `/order/cartServiceOption/office365Prepaid/{x}` |
| POST | `/order/cartServiceOption/office365Prepaid/{x}` |
| GET | `/order/cartServiceOption/officePrepaid` |
| GET | `/order/cartServiceOption/officePrepaid/{x}` |
| POST | `/order/cartServiceOption/officePrepaid/{x}` |
| GET | `/order/cartServiceOption/privateCloud` |
| GET | `/order/cartServiceOption/privateCloud/{x}` |
| POST | `/order/cartServiceOption/privateCloud/{x}` |
| GET | `/order/cartServiceOption/privateCloudEnterprise` |
| GET | `/order/cartServiceOption/privateCloudEnterprise/{x}` |
| POST | `/order/cartServiceOption/privateCloudEnterprise/{x}` |
| GET | `/order/cartServiceOption/privateCloudReseller` |
| GET | `/order/cartServiceOption/privateCloudReseller/{x}` |
| POST | `/order/cartServiceOption/privateCloudReseller/{x}` |
| GET | `/order/cartServiceOption/privateCloudResellerEnterprise` |
| GET | `/order/cartServiceOption/privateCloudResellerEnterprise/{x}` |
| POST | `/order/cartServiceOption/privateCloudResellerEnterprise/{x}` |
| GET | `/order/cartServiceOption/sharepoint` |
| GET | `/order/cartServiceOption/sharepoint/{x}` |
| POST | `/order/cartServiceOption/sharepoint/{x}` |
| GET | `/order/cartServiceOption/sms` |
| GET | `/order/cartServiceOption/sms/{x}` |
| POST | `/order/cartServiceOption/sms/{x}` |
| GET | `/order/cartServiceOption/sncNetworkServices` |
| GET | `/order/cartServiceOption/sncNetworkServices/{x}` |
| POST | `/order/cartServiceOption/sncNetworkServices/{x}` |
| GET | `/order/cartServiceOption/sslGateway` |
| GET | `/order/cartServiceOption/sslGateway/{x}` |
| POST | `/order/cartServiceOption/sslGateway/{x}` |
| GET | `/order/cartServiceOption/vdi` |
| GET | `/order/cartServiceOption/vdi/{x}` |
| POST | `/order/cartServiceOption/vdi/{x}` |
| GET | `/order/cartServiceOption/vmwareCloudDirector` |
| GET | `/order/cartServiceOption/vmwareCloudDirector/{x}` |
| POST | `/order/cartServiceOption/vmwareCloudDirector/{x}` |
| GET | `/order/cartServiceOption/vmwareCloudDirectorBackup` |
| GET | `/order/cartServiceOption/vmwareCloudDirectorBackup/{x}` |
| GET | `/order/cartServiceOption/vps` |
| GET | `/order/cartServiceOption/vps/{x}` |
| POST | `/order/cartServiceOption/vps/{x}` |
| GET | `/order/cartServiceOption/vrack` |
| GET | `/order/cartServiceOption/vrack/{x}` |
| POST | `/order/cartServiceOption/vrack/{x}` |
| GET | `/order/cartServiceOption/webHosting` |
| GET | `/order/cartServiceOption/webHosting/{x}` |
| POST | `/order/cartServiceOption/webHosting/{x}` |
| GET | `/order/catalog/formatted` |
| GET | `/order/catalog/formatted/bringYourOwnIp` |
| GET | `/order/catalog/formatted/cloud` |
| GET | `/order/catalog/formatted/dedicated` |
| GET | `/order/catalog/formatted/discover` |
| GET | `/order/catalog/formatted/ip` |
| GET | `/order/catalog/formatted/licensecPanel` |
| GET | `/order/catalog/formatted/licenseHycu` |
| GET | `/order/catalog/formatted/licensePlesk` |
| GET | `/order/catalog/formatted/licenseSqlServer` |
| GET | `/order/catalog/formatted/licenseWindows` |
| GET | `/order/catalog/formatted/logs` |
| GET | `/order/catalog/formatted/privateCloud` |
| GET | `/order/catalog/formatted/privateCloudCDI` |
| GET | `/order/catalog/formatted/privateCloudDC` |
| GET | `/order/catalog/formatted/privateCloudEnterprise` |
| GET | `/order/catalog/formatted/privateCloudReseller` |
| GET | `/order/catalog/formatted/privateCloudResellerEnterprise` |
| GET | `/order/catalog/formatted/privateCloudSDDC` |
| GET | `/order/catalog/formatted/reseller` |
| GET | `/order/catalog/formatted/vps` |
| GET | `/order/catalog/private/privateCloud` |
| GET | `/order/catalog/public/advisoryServicesHostingWeb` |
| GET | `/order/catalog/public/advisoryServicesPublicCloud` |
| GET | `/order/catalog/public/advisoryServicesTelecom` |
| GET | `/order/catalog/public/backupServices` |
| GET | `/order/catalog/public/baremetalServers` |
| GET | `/order/catalog/public/cephaas` |
| GET | `/order/catalog/public/cloud` |
| GET | `/order/catalog/public/cloudDB` |
| GET | `/order/catalog/public/dns` |
| GET | `/order/catalog/public/domain` |
| GET | `/order/catalog/public/eco` |
| GET | `/order/catalog/public/emailDomain` |
| GET | `/order/catalog/public/emailpro` |
| GET | `/order/catalog/public/exchange` |
| GET | `/order/catalog/public/ipLoadbalancing` |
| GET | `/order/catalog/public/licensecPanel` |
| GET | `/order/catalog/public/licenseHycu` |
| GET | `/order/catalog/public/licensePlesk` |
| GET | `/order/catalog/public/licenseSqlServer` |
| GET | `/order/catalog/public/licenseWindows` |
| GET | `/order/catalog/public/logs` |
| GET | `/order/catalog/public/nasha` |
| GET | `/order/catalog/public/netapp` |
| GET | `/order/catalog/public/nutanix` |
| GET | `/order/catalog/public/office365Prepaid` |
| GET | `/order/catalog/public/officePrepaid` |
| GET | `/order/catalog/public/okms` |
| GET | `/order/catalog/public/ovhCloudConnect` |
| GET | `/order/catalog/public/packsProfessionalServices` |
| GET | `/order/catalog/public/privateCloud` |
| GET | `/order/catalog/public/privateCloudEnterprise` |
| GET | `/order/catalog/public/privateSQL` |
| GET | `/order/catalog/public/sslGateway` |
| GET | `/order/catalog/public/telephony` |
| GET | `/order/catalog/public/vmwareCloudDirector` |
| GET | `/order/catalog/public/vmwareCloudDirectorBackup` |
| GET | `/order/catalog/public/vps` |
| GET | `/order/catalog/public/webHosting` |
| GET | `/order/catalog/public/webPaaS` |
| GET | `/order/catalog/public/zimbra` |
| GET | `/order/cdn/dedicated` |
| GET | `/order/cdn/dedicated/{x}` |
| GET | `/order/cdn/dedicated/{x}/backend` |
| GET | `/order/cdn/dedicated/{x}/backend/{x}` |
| POST | `/order/cdn/dedicated/{x}/backend/{x}` |
| GET | `/order/cdn/dedicated/{x}/cacheRule` |
| GET | `/order/cdn/dedicated/{x}/cacheRule/{x}` |
| POST | `/order/cdn/dedicated/{x}/cacheRule/{x}` |
| GET | `/order/cdn/dedicated/{x}/quota` |
| GET | `/order/cdn/dedicated/{x}/quota/{x}` |
| POST | `/order/cdn/dedicated/{x}/quota/{x}` |
| GET | `/order/cdn/dedicated/new` |
| GET | `/order/cdn/dedicated/new/{x}` |
| POST | `/order/cdn/dedicated/new/{x}` |
| GET | `/order/cloud/project/{x}/credit` |
| POST | `/order/cloud/project/{x}/credit` |
| GET | `/order/dedicated/housing` |
| GET | `/order/dedicated/housing/{x}` |
| GET | `/order/dedicated/housing/{x}/APC` |
| GET | `/order/dedicated/housing/{x}/APC/{x}` |
| POST | `/order/dedicated/housing/{x}/APC/{x}` |
| GET | `/order/dedicated/server` |
| GET | `/order/dedicated/server/{x}` |
| GET | `/order/dedicated/server/{x}/backupStorage` |
| GET | `/order/dedicated/server/{x}/backupStorage/{x}` |
| POST | `/order/dedicated/server/{x}/backupStorage/{x}` |
| GET | `/order/dedicated/server/{x}/bandwidth` |
| GET | `/order/dedicated/server/{x}/bandwidth/{x}` |
| POST | `/order/dedicated/server/{x}/bandwidth/{x}` |
| GET | `/order/dedicated/server/{x}/bandwidthvRack` |
| GET | `/order/dedicated/server/{x}/bandwidthvRack/{x}` |
| POST | `/order/dedicated/server/{x}/bandwidthvRack/{x}` |
| GET | `/order/dedicated/server/{x}/feature` |
| GET | `/order/dedicated/server/{x}/feature/{x}` |
| POST | `/order/dedicated/server/{x}/feature/{x}` |
| GET | `/order/dedicated/server/{x}/firewall` |
| GET | `/order/dedicated/server/{x}/firewall/{x}` |
| POST | `/order/dedicated/server/{x}/firewall/{x}` |
| GET | `/order/dedicated/server/{x}/ipMigration` |
| GET | `/order/dedicated/server/{x}/ipMigration/{x}` |
| POST | `/order/dedicated/server/{x}/ipMigration/{x}` |
| GET | `/order/dedicated/server/{x}/kvm` |
| GET | `/order/dedicated/server/{x}/kvm/{x}` |
| POST | `/order/dedicated/server/{x}/kvm/{x}` |
| GET | `/order/dedicated/server/{x}/kvmExpress` |
| GET | `/order/dedicated/server/{x}/kvmExpress/{x}` |
| POST | `/order/dedicated/server/{x}/kvmExpress/{x}` |
| GET | `/order/dedicated/server/{x}/professionalUse` |
| GET | `/order/dedicated/server/{x}/professionalUse/{x}` |
| POST | `/order/dedicated/server/{x}/professionalUse/{x}` |
| GET | `/order/dedicated/server/{x}/traffic` |
| GET | `/order/dedicated/server/{x}/traffic/{x}` |
| POST | `/order/dedicated/server/{x}/traffic/{x}` |
| GET | `/order/dedicated/server/{x}/usbKey` |
| GET | `/order/dedicated/server/{x}/usbKey/{x}` |
| POST | `/order/dedicated/server/{x}/usbKey/{x}` |
| GET | `/order/dedicatedCloud` |
| GET | `/order/dedicatedCloud/{x}` |
| GET | `/order/dedicatedCloud/{x}/additionalBandwidth` |
| GET | `/order/dedicatedCloud/{x}/additionalBandwidth/{x}` |
| POST | `/order/dedicatedCloud/{x}/additionalBandwidth/{x}` |
| GET | `/order/dedicatedCloud/{x}/filer` |
| GET | `/order/dedicatedCloud/{x}/filer/{x}` |
| POST | `/order/dedicatedCloud/{x}/filer/{x}` |
| GET | `/order/dedicatedCloud/{x}/host` |
| GET | `/order/dedicatedCloud/{x}/host/{x}` |
| POST | `/order/dedicatedCloud/{x}/host/{x}` |
| GET | `/order/dedicatedCloud/{x}/ip` |
| GET | `/order/dedicatedCloud/{x}/ip/{x}` |
| POST | `/order/dedicatedCloud/{x}/ip/{x}` |
| GET | `/order/dedicatedCloud/{x}/spla` |
| POST | `/order/dedicatedCloud/{x}/spla` |
| GET | `/order/dedicatedCloud/{x}/upgradeRessource` |
| GET | `/order/dedicatedCloud/{x}/upgradeRessource/{x}` |
| POST | `/order/dedicatedCloud/{x}/upgradeRessource/{x}` |
| GET | `/order/dedicatedCloud/{x}/vdi` |
| POST | `/order/dedicatedCloud/{x}/vdi` |
| GET | `/order/domain/zone` |
| GET | `/order/domain/zone/{x}` |
| GET | `/order/domain/zone/{x}/dnsAnycast` |
| GET | `/order/domain/zone/{x}/dnsAnycast/{x}` |
| POST | `/order/domain/zone/{x}/dnsAnycast/{x}` |
| GET | `/order/domain/zone/new` |
| POST | `/order/domain/zone/new` |
| GET | `/order/email/domain` |
| GET | `/order/email/domain/{x}` |
| GET | `/order/email/domain/{x}/upgrade` |
| GET | `/order/email/domain/{x}/upgrade/{x}` |
| POST | `/order/email/domain/{x}/upgrade/{x}` |
| GET | `/order/email/domain/new` |
| GET | `/order/email/domain/new/{x}` |
| POST | `/order/email/domain/new/{x}` |
| GET | `/order/email/exchange` |
| GET | `/order/email/exchange/{x}/service` |
| GET | `/order/email/exchange/{x}/service/{x}` |
| GET | `/order/email/exchange/{x}/service/{x}/account` |
| GET | `/order/email/exchange/{x}/service/{x}/account/{x}` |
| POST | `/order/email/exchange/{x}/service/{x}/account/{x}` |
| GET | `/order/email/exchange/{x}/service/{x}/accountUpgrade` |
| GET | `/order/email/exchange/{x}/service/{x}/accountUpgrade/{x}` |
| POST | `/order/email/exchange/{x}/service/{x}/accountUpgrade/{x}` |
| GET | `/order/email/exchange/{x}/service/{x}/diskSpace` |
| POST | `/order/email/exchange/{x}/service/{x}/diskSpace` |
| GET | `/order/email/exchange/{x}/service/{x}/outlook` |
| GET | `/order/email/exchange/{x}/service/{x}/outlook/{x}` |
| POST | `/order/email/exchange/{x}/service/{x}/outlook/{x}` |
| GET | `/order/email/exchange/{x}/service/{x}/upgrade` |
| POST | `/order/email/exchange/{x}/service/{x}/upgrade` |
| GET | `/order/email/pro` |
| GET | `/order/email/pro/{x}/account` |
| GET | `/order/email/pro/{x}/account/{x}` |
| POST | `/order/email/pro/{x}/account/{x}` |
| GET | `/order/freefax` |
| GET | `/order/freefax/{x}/convertToVoicefax` |
| POST | `/order/freefax/{x}/convertToVoicefax` |
| GET | `/order/freefax/new` |
| POST | `/order/freefax/new` |
| GET | `/order/hosting/web` |
| GET | `/order/hosting/web/{x}` |
| GET | `/order/hosting/web/{x}/upgrade` |
| GET | `/order/hosting/web/{x}/upgrade/{x}` |
| POST | `/order/hosting/web/{x}/upgrade/{x}` |
| GET | `/order/license/cpanel` |
| GET | `/order/license/cpanel/{x}` |
| GET | `/order/license/cpanel/{x}/upgrade` |
| GET | `/order/license/cpanel/{x}/upgrade/{x}` |
| POST | `/order/license/cpanel/{x}/upgrade/{x}` |
| GET | `/order/license/cpanel/new` |
| GET | `/order/license/cpanel/new/{x}` |
| POST | `/order/license/cpanel/new/{x}` |
| GET | `/order/license/office/new` |
| GET | `/order/license/office/new/{x}` |
| POST | `/order/license/office/new/{x}` |
| GET | `/order/license/plesk` |
| GET | `/order/license/plesk/{x}` |
| GET | `/order/license/plesk/{x}/upgrade` |
| GET | `/order/license/plesk/{x}/upgrade/{x}` |
| POST | `/order/license/plesk/{x}/upgrade/{x}` |
| GET | `/order/license/plesk/new` |
| GET | `/order/license/plesk/new/{x}` |
| POST | `/order/license/plesk/new/{x}` |
| GET | `/order/license/sqlserver` |
| GET | `/order/license/sqlserver/{x}` |
| GET | `/order/license/sqlserver/{x}/upgrade` |
| GET | `/order/license/sqlserver/{x}/upgrade/{x}` |
| POST | `/order/license/sqlserver/{x}/upgrade/{x}` |
| GET | `/order/license/sqlserver/new` |
| GET | `/order/license/sqlserver/new/{x}` |
| POST | `/order/license/sqlserver/new/{x}` |
| GET | `/order/license/windows` |
| GET | `/order/license/windows/{x}` |
| GET | `/order/license/windows/{x}/upgrade` |
| GET | `/order/license/windows/{x}/upgrade/{x}` |
| POST | `/order/license/windows/{x}/upgrade/{x}` |
| GET | `/order/license/windows/new` |
| GET | `/order/license/windows/new/{x}` |
| POST | `/order/license/windows/new/{x}` |
| GET | `/order/overTheBox/{x}/migrate` |
| POST | `/order/overTheBox/{x}/migrate` |
| GET | `/order/overTheBox/new` |
| GET | `/order/overTheBox/new/{x}` |
| POST | `/order/overTheBox/new/{x}` |
| GET | `/order/saas/csp2/new` |
| GET | `/order/saas/csp2/new/{x}` |
| POST | `/order/saas/csp2/new/{x}` |
| GET | `/order/sms/{x}/credits` |
| POST | `/order/sms/{x}/credits` |
| GET | `/order/sms/new` |
| POST | `/order/sms/new` |
| GET | `/order/telephony` |
| GET | `/order/telephony/{x}` |
| GET | `/order/telephony/{x}/accessories` |
| POST | `/order/telephony/{x}/accessories` |
| GET | `/order/telephony/{x}/line` |
| POST | `/order/telephony/{x}/line` |
| GET | `/order/telephony/{x}/numberGeographic` |
| POST | `/order/telephony/{x}/numberGeographic` |
| GET | `/order/telephony/{x}/numberNogeographic` |
| POST | `/order/telephony/{x}/numberNogeographic` |
| GET | `/order/telephony/{x}/numberSpecial` |
| POST | `/order/telephony/{x}/numberSpecial` |
| GET | `/order/telephony/{x}/portability` |
| POST | `/order/telephony/{x}/portability` |
| GET | `/order/telephony/{x}/securityDeposit` |
| POST | `/order/telephony/{x}/securityDeposit` |
| GET | `/order/telephony/lines` |
| GET | `/order/telephony/lines/{x}` |
| GET | `/order/telephony/lines/{x}/addSimultaneousLines` |
| POST | `/order/telephony/lines/{x}/addSimultaneousLines` |
| GET | `/order/telephony/lines/{x}/hardware` |
| POST | `/order/telephony/lines/{x}/hardware` |
| GET | `/order/telephony/lines/{x}/updateSimultaneousChannels` |
| POST | `/order/telephony/lines/{x}/updateSimultaneousChannels` |
| GET | `/order/telephony/new` |
| POST | `/order/telephony/new` |
| GET | `/order/telephony/spare/new` |
| POST | `/order/telephony/spare/new` |
| GET | `/order/telephony/trunks` |
| GET | `/order/telephony/trunks/{x}` |
| GET | `/order/telephony/trunks/{x}/addSimultaneousLines` |
| POST | `/order/telephony/trunks/{x}/addSimultaneousLines` |
| GET | `/order/telephony/trunks/{x}/hardware` |
| POST | `/order/telephony/trunks/{x}/hardware` |
| GET | `/order/telephony/trunks/{x}/updateSimultaneousChannels` |
| POST | `/order/telephony/trunks/{x}/updateSimultaneousChannels` |
| GET | `/order/upgrade/bandwidthVrack` |
| GET | `/order/upgrade/bandwidthVrack/{x}` |
| GET | `/order/upgrade/bandwidthVrack/{x}/{x}` |
| POST | `/order/upgrade/bandwidthVrack/{x}/{x}` |
| GET | `/order/upgrade/baremetalPrivateBandwidth` |
| GET | `/order/upgrade/baremetalPrivateBandwidth/{x}` |
| GET | `/order/upgrade/baremetalPrivateBandwidth/{x}/{x}` |
| POST | `/order/upgrade/baremetalPrivateBandwidth/{x}/{x}` |
| GET | `/order/upgrade/baremetalPublicBandwidth` |
| GET | `/order/upgrade/baremetalPublicBandwidth/{x}` |
| GET | `/order/upgrade/baremetalPublicBandwidth/{x}/{x}` |
| POST | `/order/upgrade/baremetalPublicBandwidth/{x}/{x}` |
| GET | `/order/upgrade/cephaas` |
| GET | `/order/upgrade/cephaas/{x}` |
| GET | `/order/upgrade/cephaas/{x}/{x}` |
| POST | `/order/upgrade/cephaas/{x}/{x}` |
| GET | `/order/upgrade/cloudDB` |
| GET | `/order/upgrade/cloudDB/{x}` |
| GET | `/order/upgrade/cloudDB/{x}/{x}` |
| POST | `/order/upgrade/cloudDB/{x}/{x}` |
| GET | `/order/upgrade/emailDomain` |
| GET | `/order/upgrade/emailDomain/{x}` |
| GET | `/order/upgrade/emailDomain/{x}/{x}` |
| POST | `/order/upgrade/emailDomain/{x}/{x}` |
| GET | `/order/upgrade/ipLoadbalancing` |
| GET | `/order/upgrade/ipLoadbalancing/{x}` |
| GET | `/order/upgrade/ipLoadbalancing/{x}/{x}` |
| POST | `/order/upgrade/ipLoadbalancing/{x}/{x}` |
| GET | `/order/upgrade/licensecPanel` |
| GET | `/order/upgrade/licensecPanel/{x}` |
| GET | `/order/upgrade/licensecPanel/{x}/{x}` |
| POST | `/order/upgrade/licensecPanel/{x}/{x}` |
| GET | `/order/upgrade/licenseHycu` |
| GET | `/order/upgrade/licenseHycu/{x}` |
| GET | `/order/upgrade/licenseHycu/{x}/{x}` |
| POST | `/order/upgrade/licenseHycu/{x}/{x}` |
| GET | `/order/upgrade/licensePlesk` |
| GET | `/order/upgrade/licensePlesk/{x}` |
| GET | `/order/upgrade/licensePlesk/{x}/{x}` |
| POST | `/order/upgrade/licensePlesk/{x}/{x}` |
| GET | `/order/upgrade/logs` |
| GET | `/order/upgrade/logs/{x}` |
| GET | `/order/upgrade/logs/{x}/{x}` |
| POST | `/order/upgrade/logs/{x}/{x}` |
| GET | `/order/upgrade/metrics` |
| GET | `/order/upgrade/metrics/{x}` |
| GET | `/order/upgrade/metrics/{x}/{x}` |
| POST | `/order/upgrade/metrics/{x}/{x}` |
| GET | `/order/upgrade/microsoftExchange` |
| GET | `/order/upgrade/microsoftExchange/{x}` |
| GET | `/order/upgrade/microsoftExchange/{x}/{x}` |
| POST | `/order/upgrade/microsoftExchange/{x}/{x}` |
| GET | `/order/upgrade/privateCloud` |
| GET | `/order/upgrade/privateCloud/{x}` |
| GET | `/order/upgrade/privateCloud/{x}/{x}` |
| POST | `/order/upgrade/privateCloud/{x}/{x}` |
| GET | `/order/upgrade/privateCloudManagementFee` |
| GET | `/order/upgrade/privateCloudManagementFee/{x}` |
| GET | `/order/upgrade/privateCloudManagementFee/{x}/{x}` |
| POST | `/order/upgrade/privateCloudManagementFee/{x}/{x}` |
| GET | `/order/upgrade/privateSQL` |
| GET | `/order/upgrade/privateSQL/{x}` |
| GET | `/order/upgrade/privateSQL/{x}/{x}` |
| POST | `/order/upgrade/privateSQL/{x}/{x}` |
| GET | `/order/upgrade/sslGateway` |
| GET | `/order/upgrade/sslGateway/{x}` |
| GET | `/order/upgrade/sslGateway/{x}/{x}` |
| POST | `/order/upgrade/sslGateway/{x}/{x}` |
| GET | `/order/upgrade/vps` |
| GET | `/order/upgrade/vps/{x}` |
| GET | `/order/upgrade/vps/{x}/{x}` |
| POST | `/order/upgrade/vps/{x}/{x}` |
| GET | `/order/upgrade/vpsAdditionalDisk` |
| GET | `/order/upgrade/vpsAdditionalDisk/{x}` |
| GET | `/order/upgrade/vpsAdditionalDisk/{x}/{x}` |
| POST | `/order/upgrade/vpsAdditionalDisk/{x}/{x}` |
| GET | `/order/upgrade/webHosting` |
| GET | `/order/upgrade/webHosting/{x}` |
| GET | `/order/upgrade/webHosting/{x}/{x}` |
| POST | `/order/upgrade/webHosting/{x}/{x}` |
| GET | `/order/upgrade/zimbra` |
| GET | `/order/upgrade/zimbra/{x}` |
| GET | `/order/upgrade/zimbra/{x}/{x}` |
| POST | `/order/upgrade/zimbra/{x}/{x}` |
| GET | `/order/veeamCloudConnect/{x}/upgrade` |
| GET | `/order/veeamCloudConnect/{x}/upgrade/{x}` |
| POST | `/order/veeamCloudConnect/{x}/upgrade/{x}` |
| GET | `/order/vps` |
| GET | `/order/vps/{x}` |
| GET | `/order/vps/{x}/cpanel` |
| GET | `/order/vps/{x}/cpanel/{x}` |
| POST | `/order/vps/{x}/cpanel/{x}` |
| GET | `/order/vps/{x}/ftpbackup` |
| GET | `/order/vps/{x}/ftpbackup/{x}` |
| POST | `/order/vps/{x}/ftpbackup/{x}` |
| GET | `/order/vps/{x}/plesk` |
| GET | `/order/vps/{x}/plesk/{x}` |
| POST | `/order/vps/{x}/plesk/{x}` |
| GET | `/order/vps/{x}/upgrade` |
| GET | `/order/vps/{x}/upgrade/{x}` |
| POST | `/order/vps/{x}/upgrade/{x}` |
| GET | `/order/vps/{x}/veeam` |
| GET | `/order/vps/{x}/veeam/{x}` |
| POST | `/order/vps/{x}/veeam/{x}` |
| GET | `/order/vps/{x}/windows` |
| GET | `/order/vps/{x}/windows/{x}` |
| POST | `/order/vps/{x}/windows/{x}` |
| GET | `/order/xdsl/spare/new` |
| POST | `/order/xdsl/spare/new` |

### ipLoadbalancing (v1) — 112 manquants

_Nodes associés : OvhCloudIPLoadbalancing_

| Méthode | Chemin |
|--------|--------|
| POST | `/ipLoadbalancing/{x}/confirmTermination` |
| GET | `/ipLoadbalancing/{x}/definedFarms` |
| GET | `/ipLoadbalancing/{x}/definedFrontends` |
| GET | `/ipLoadbalancing/{x}/definedRoutes` |
| GET | `/ipLoadbalancing/{x}/failover` |
| POST | `/ipLoadbalancing/{x}/freeCertificate` |
| GET | `/ipLoadbalancing/{x}/http/farm` |
| POST | `/ipLoadbalancing/{x}/http/farm` |
| DELETE | `/ipLoadbalancing/{x}/http/farm/{x}` |
| GET | `/ipLoadbalancing/{x}/http/farm/{x}` |
| PUT | `/ipLoadbalancing/{x}/http/farm/{x}` |
| GET | `/ipLoadbalancing/{x}/http/farm/{x}/server` |
| POST | `/ipLoadbalancing/{x}/http/farm/{x}/server` |
| DELETE | `/ipLoadbalancing/{x}/http/farm/{x}/server/{x}` |
| GET | `/ipLoadbalancing/{x}/http/farm/{x}/server/{x}` |
| PUT | `/ipLoadbalancing/{x}/http/farm/{x}/server/{x}` |
| GET | `/ipLoadbalancing/{x}/http/frontend` |
| POST | `/ipLoadbalancing/{x}/http/frontend` |
| DELETE | `/ipLoadbalancing/{x}/http/frontend/{x}` |
| GET | `/ipLoadbalancing/{x}/http/frontend/{x}` |
| PUT | `/ipLoadbalancing/{x}/http/frontend/{x}` |
| GET | `/ipLoadbalancing/{x}/http/route` |
| POST | `/ipLoadbalancing/{x}/http/route` |
| DELETE | `/ipLoadbalancing/{x}/http/route/{x}` |
| GET | `/ipLoadbalancing/{x}/http/route/{x}` |
| PUT | `/ipLoadbalancing/{x}/http/route/{x}` |
| GET | `/ipLoadbalancing/{x}/http/route/{x}/rule` |
| POST | `/ipLoadbalancing/{x}/http/route/{x}/rule` |
| DELETE | `/ipLoadbalancing/{x}/http/route/{x}/rule/{x}` |
| GET | `/ipLoadbalancing/{x}/http/route/{x}/rule/{x}` |
| PUT | `/ipLoadbalancing/{x}/http/route/{x}/rule/{x}` |
| GET | `/ipLoadbalancing/{x}/instancesState` |
| GET | `/ipLoadbalancing/{x}/log/kind` |
| GET | `/ipLoadbalancing/{x}/log/kind/{x}` |
| GET | `/ipLoadbalancing/{x}/log/subscription` |
| POST | `/ipLoadbalancing/{x}/log/subscription` |
| DELETE | `/ipLoadbalancing/{x}/log/subscription/{x}` |
| GET | `/ipLoadbalancing/{x}/log/subscription/{x}` |
| POST | `/ipLoadbalancing/{x}/log/url` |
| GET | `/ipLoadbalancing/{x}/metricsToken` |
| GET | `/ipLoadbalancing/{x}/natIp` |
| GET | `/ipLoadbalancing/{x}/pendingChanges` |
| GET | `/ipLoadbalancing/{x}/quota` |
| GET | `/ipLoadbalancing/{x}/quota/{x}` |
| PUT | `/ipLoadbalancing/{x}/quota/{x}` |
| GET | `/ipLoadbalancing/{x}/quotaHistory` |
| GET | `/ipLoadbalancing/{x}/quotaHistory/{x}` |
| POST | `/ipLoadbalancing/{x}/refresh` |
| GET | `/ipLoadbalancing/{x}/serviceInfos` |
| PUT | `/ipLoadbalancing/{x}/serviceInfos` |
| GET | `/ipLoadbalancing/{x}/ssl` |
| POST | `/ipLoadbalancing/{x}/ssl` |
| DELETE | `/ipLoadbalancing/{x}/ssl/{x}` |
| GET | `/ipLoadbalancing/{x}/ssl/{x}` |
| PUT | `/ipLoadbalancing/{x}/ssl/{x}` |
| GET | `/ipLoadbalancing/{x}/status` |
| GET | `/ipLoadbalancing/{x}/task` |
| GET | `/ipLoadbalancing/{x}/task/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/farm` |
| POST | `/ipLoadbalancing/{x}/tcp/farm` |
| DELETE | `/ipLoadbalancing/{x}/tcp/farm/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/farm/{x}` |
| PUT | `/ipLoadbalancing/{x}/tcp/farm/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/farm/{x}/server` |
| POST | `/ipLoadbalancing/{x}/tcp/farm/{x}/server` |
| DELETE | `/ipLoadbalancing/{x}/tcp/farm/{x}/server/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/farm/{x}/server/{x}` |
| PUT | `/ipLoadbalancing/{x}/tcp/farm/{x}/server/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/frontend` |
| POST | `/ipLoadbalancing/{x}/tcp/frontend` |
| DELETE | `/ipLoadbalancing/{x}/tcp/frontend/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/frontend/{x}` |
| PUT | `/ipLoadbalancing/{x}/tcp/frontend/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/route` |
| POST | `/ipLoadbalancing/{x}/tcp/route` |
| DELETE | `/ipLoadbalancing/{x}/tcp/route/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/route/{x}` |
| PUT | `/ipLoadbalancing/{x}/tcp/route/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/route/{x}/rule` |
| POST | `/ipLoadbalancing/{x}/tcp/route/{x}/rule` |
| DELETE | `/ipLoadbalancing/{x}/tcp/route/{x}/rule/{x}` |
| GET | `/ipLoadbalancing/{x}/tcp/route/{x}/rule/{x}` |
| PUT | `/ipLoadbalancing/{x}/tcp/route/{x}/rule/{x}` |
| POST | `/ipLoadbalancing/{x}/terminate` |
| GET | `/ipLoadbalancing/{x}/udp/farm` |
| POST | `/ipLoadbalancing/{x}/udp/farm` |
| DELETE | `/ipLoadbalancing/{x}/udp/farm/{x}` |
| GET | `/ipLoadbalancing/{x}/udp/farm/{x}` |
| PUT | `/ipLoadbalancing/{x}/udp/farm/{x}` |
| GET | `/ipLoadbalancing/{x}/udp/farm/{x}/server` |
| POST | `/ipLoadbalancing/{x}/udp/farm/{x}/server` |
| DELETE | `/ipLoadbalancing/{x}/udp/farm/{x}/server/{x}` |
| GET | `/ipLoadbalancing/{x}/udp/farm/{x}/server/{x}` |
| PUT | `/ipLoadbalancing/{x}/udp/farm/{x}/server/{x}` |
| GET | `/ipLoadbalancing/{x}/udp/frontend` |
| POST | `/ipLoadbalancing/{x}/udp/frontend` |
| DELETE | `/ipLoadbalancing/{x}/udp/frontend/{x}` |
| GET | `/ipLoadbalancing/{x}/udp/frontend/{x}` |
| PUT | `/ipLoadbalancing/{x}/udp/frontend/{x}` |
| GET | `/ipLoadbalancing/{x}/vrack/network` |
| POST | `/ipLoadbalancing/{x}/vrack/network` |
| DELETE | `/ipLoadbalancing/{x}/vrack/network/{x}` |
| GET | `/ipLoadbalancing/{x}/vrack/network/{x}` |
| PUT | `/ipLoadbalancing/{x}/vrack/network/{x}` |
| POST | `/ipLoadbalancing/{x}/vrack/network/{x}/updateFarmId` |
| GET | `/ipLoadbalancing/{x}/vrack/networkCreationRules` |
| GET | `/ipLoadbalancing/{x}/vrack/status` |
| GET | `/ipLoadbalancing/{x}/zone` |
| GET | `/ipLoadbalancing/{x}/zone/{x}` |
| POST | `/ipLoadbalancing/{x}/zone/{x}/cancelTermination` |
| POST | `/ipLoadbalancing/{x}/zone/{x}/terminate` |
| GET | `/ipLoadbalancing/availableZones` |

### vrack (v1) — 63 manquants

_Nodes associés : OvhCloudVrack_

| Méthode | Chemin |
|--------|--------|
| GET | `/vrack/{x}/allowedServices` |
| GET | `/vrack/{x}/cloudProject` |
| POST | `/vrack/{x}/cloudProject` |
| DELETE | `/vrack/{x}/cloudProject/{x}` |
| GET | `/vrack/{x}/cloudProject/{x}` |
| POST | `/vrack/{x}/confirmTermination` |
| GET | `/vrack/{x}/dedicatedCloud` |
| POST | `/vrack/{x}/dedicatedCloud` |
| DELETE | `/vrack/{x}/dedicatedCloud/{x}` |
| GET | `/vrack/{x}/dedicatedCloud/{x}` |
| GET | `/vrack/{x}/dedicatedCloudDatacenter` |
| GET | `/vrack/{x}/dedicatedCloudDatacenter/{x}` |
| GET | `/vrack/{x}/dedicatedCloudDatacenter/{x}/allowedVrack` |
| POST | `/vrack/{x}/dedicatedCloudDatacenter/{x}/move` |
| GET | `/vrack/{x}/dedicatedConnect` |
| GET | `/vrack/{x}/dedicatedConnect/{x}` |
| PUT | `/vrack/{x}/dedicatedConnect/{x}` |
| GET | `/vrack/{x}/dedicatedServer` |
| POST | `/vrack/{x}/dedicatedServer` |
| DELETE | `/vrack/{x}/dedicatedServer/{x}` |
| GET | `/vrack/{x}/dedicatedServer/{x}` |
| GET | `/vrack/{x}/dedicatedServer/{x}/mrtg` |
| GET | `/vrack/{x}/dedicatedServerInterface` |
| POST | `/vrack/{x}/dedicatedServerInterface` |
| DELETE | `/vrack/{x}/dedicatedServerInterface/{x}` |
| GET | `/vrack/{x}/dedicatedServerInterface/{x}` |
| GET | `/vrack/{x}/dedicatedServerInterfaceDetails` |
| GET | `/vrack/{x}/eligibleServices` |
| DELETE | `/vrack/{x}/ip/{x}` |
| GET | `/vrack/{x}/ip/{x}` |
| GET | `/vrack/{x}/ipLoadbalancing` |
| POST | `/vrack/{x}/ipLoadbalancing` |
| DELETE | `/vrack/{x}/ipLoadbalancing/{x}` |
| GET | `/vrack/{x}/ipLoadbalancing/{x}` |
| GET | `/vrack/{x}/ipv6` |
| POST | `/vrack/{x}/ipv6` |
| DELETE | `/vrack/{x}/ipv6/{x}` |
| GET | `/vrack/{x}/ipv6/{x}` |
| GET | `/vrack/{x}/ipv6/{x}/bridgedSubrange` |
| GET | `/vrack/{x}/ipv6/{x}/bridgedSubrange/{x}` |
| PUT | `/vrack/{x}/ipv6/{x}/bridgedSubrange/{x}` |
| GET | `/vrack/{x}/ipv6/{x}/routedSubrange` |
| POST | `/vrack/{x}/ipv6/{x}/routedSubrange` |
| DELETE | `/vrack/{x}/ipv6/{x}/routedSubrange/{x}` |
| GET | `/vrack/{x}/ipv6/{x}/routedSubrange/{x}` |
| GET | `/vrack/{x}/legacyVrack` |
| POST | `/vrack/{x}/legacyVrack` |
| DELETE | `/vrack/{x}/legacyVrack/{x}` |
| GET | `/vrack/{x}/legacyVrack/{x}` |
| GET | `/vrack/{x}/ovhCloudConnect` |
| POST | `/vrack/{x}/ovhCloudConnect` |
| DELETE | `/vrack/{x}/ovhCloudConnect/{x}` |
| GET | `/vrack/{x}/ovhCloudConnect/{x}` |
| GET | `/vrack/{x}/publicRoutingBandwidthLimit` |
| GET | `/vrack/{x}/serviceInfos` |
| GET | `/vrack/{x}/task` |
| GET | `/vrack/{x}/task/{x}` |
| POST | `/vrack/{x}/terminate` |
| GET | `/vrack/{x}/vrackServices` |
| POST | `/vrack/{x}/vrackServices` |
| DELETE | `/vrack/{x}/vrackServices/{x}` |
| GET | `/vrack/{x}/vrackServices/{x}` |
| GET | `/vrack/publicRoutingRegion` |

### msServices (v1) — 50 manquants

_Nodes associés : OvhCloudMsServices_

| Méthode | Chemin |
|--------|--------|
| GET | `/msServices/{x}/account` |
| GET | `/msServices/{x}/account/{x}` |
| PUT | `/msServices/{x}/account/{x}` |
| POST | `/msServices/{x}/account/{x}/changePassword` |
| GET | `/msServices/{x}/account/{x}/exchange` |
| PUT | `/msServices/{x}/account/{x}/exchange` |
| POST | `/msServices/{x}/account/{x}/exchange/configure` |
| DELETE | `/msServices/{x}/account/{x}/mfa` |
| GET | `/msServices/{x}/account/{x}/mfa` |
| POST | `/msServices/{x}/account/{x}/mfa` |
| POST | `/msServices/{x}/account/{x}/mfa/disable` |
| POST | `/msServices/{x}/account/{x}/mfa/enable` |
| POST | `/msServices/{x}/account/{x}/mfa/reset` |
| GET | `/msServices/{x}/account/{x}/sharepoint` |
| PUT | `/msServices/{x}/account/{x}/sharepoint` |
| POST | `/msServices/{x}/account/{x}/sharepoint/clearSpace` |
| POST | `/msServices/{x}/account/{x}/sharepoint/configure` |
| DELETE | `/msServices/{x}/account/{x}/sync` |
| GET | `/msServices/{x}/account/{x}/sync` |
| POST | `/msServices/{x}/account/{x}/sync` |
| POST | `/msServices/{x}/account/{x}/sync/configure` |
| POST | `/msServices/{x}/changeContact` |
| POST | `/msServices/{x}/createMfaOnAllUsers` |
| GET | `/msServices/{x}/exchange` |
| PUT | `/msServices/{x}/exchange` |
| GET | `/msServices/{x}/exchange/billingMigrated` |
| GET | `/msServices/{x}/exchange/task` |
| GET | `/msServices/{x}/exchange/task/{x}` |
| POST | `/msServices/{x}/removeMfaOnAllUsers` |
| GET | `/msServices/{x}/sharepoint` |
| PUT | `/msServices/{x}/sharepoint` |
| GET | `/msServices/{x}/sharepoint/billingMigrated` |
| GET | `/msServices/{x}/sharepoint/license` |
| POST | `/msServices/{x}/sharepoint/restoreAdminRights` |
| GET | `/msServices/{x}/sharepoint/task` |
| GET | `/msServices/{x}/sharepoint/task/{x}` |
| DELETE | `/msServices/{x}/sync` |
| GET | `/msServices/{x}/sync` |
| POST | `/msServices/{x}/sync/changePassword` |
| GET | `/msServices/{x}/sync/clientSoftwareURL` |
| POST | `/msServices/{x}/sync/clientSoftwareURL` |
| GET | `/msServices/{x}/sync/license` |
| GET | `/msServices/{x}/upnSuffix` |
| POST | `/msServices/{x}/upnSuffix` |
| DELETE | `/msServices/{x}/upnSuffix/{x}` |
| GET | `/msServices/{x}/upnSuffix/{x}` |
| GET | `/msServices/sharepoint` |
| GET | `/msServices/sharepoint/{x}` |
| GET | `/msServices/sharepoint/{x}/serviceInfos` |
| PUT | `/msServices/sharepoint/{x}/serviceInfos` |

### dedicated (v1) — 101 manquants

_Nodes associés : OvhCloudDedicated_

| Méthode | Chemin |
|--------|--------|
| GET | `/dedicated/server/{x}/backupCloudOfferDetails` |
| GET | `/dedicated/server/{x}/boot/{x}` |
| GET | `/dedicated/server/{x}/boot/{x}/option` |
| GET | `/dedicated/server/{x}/boot/{x}/option/{x}` |
| GET | `/dedicated/server/{x}/burst` |
| POST | `/dedicated/server/{x}/features/backupCloud/password` |
| DELETE | `/dedicated/server/{x}/features/backupFTP/access/{x}` |
| GET | `/dedicated/server/{x}/features/backupFTP/access/{x}` |
| PUT | `/dedicated/server/{x}/features/backupFTP/access/{x}` |
| GET | `/dedicated/server/{x}/features/backupFTP/authorizableBlocks` |
| GET | `/dedicated/server/{x}/features/ipmi/access` |
| POST | `/dedicated/server/{x}/features/ipmi/access` |
| POST | `/dedicated/server/{x}/features/ipmi/resetInterface` |
| POST | `/dedicated/server/{x}/features/ipmi/resetSessions` |
| GET | `/dedicated/server/{x}/features/ipmi/test` |
| POST | `/dedicated/server/{x}/features/ipmi/test` |
| GET | `/dedicated/server/{x}/features/kvm` |
| GET | `/dedicated/server/{x}/install/compatibleTemplatePartitionSchemes` |
| GET | `/dedicated/server/{x}/install/compatibleTemplates` |
| GET | `/dedicated/server/{x}/install/hardwareRaidProfile` |
| GET | `/dedicated/server/{x}/install/status` |
| GET | `/dedicated/server/{x}/intervention` |
| GET | `/dedicated/server/{x}/intervention/{x}` |
| POST | `/dedicated/server/{x}/ipBlockMerge` |
| GET | `/dedicated/server/{x}/ipCanBeMovedTo` |
| GET | `/dedicated/server/{x}/ipCountryAvailable` |
| POST | `/dedicated/server/{x}/ipMove` |
| GET | `/dedicated/server/{x}/ips` |
| GET | `/dedicated/server/{x}/license/compliantWindows` |
| GET | `/dedicated/server/{x}/license/compliantWindowsSqlServer` |
| POST | `/dedicated/server/{x}/license/windows` |
| GET | `/dedicated/server/{x}/mrtg` |
| GET | `/dedicated/server/{x}/networkInterfaceController` |
| GET | `/dedicated/server/{x}/networkInterfaceController/{x}` |
| GET | `/dedicated/server/{x}/networkInterfaceController/{x}/mrtg` |
| POST | `/dedicated/server/{x}/ola/aggregation` |
| POST | `/dedicated/server/{x}/ola/group` |
| POST | `/dedicated/server/{x}/ola/reset` |
| POST | `/dedicated/server/{x}/ola/ungroup` |
| GET | `/dedicated/server/{x}/ongoing` |
| GET | `/dedicated/server/{x}/orderable/backupStorage` |
| GET | `/dedicated/server/{x}/orderable/bandwidth` |
| GET | `/dedicated/server/{x}/orderable/bandwidthvRack` |
| GET | `/dedicated/server/{x}/orderable/feature` |
| GET | `/dedicated/server/{x}/orderable/ip` |
| GET | `/dedicated/server/{x}/orderable/kvm` |
| GET | `/dedicated/server/{x}/orderable/kvmExpress` |
| GET | `/dedicated/server/{x}/orderable/professionalUse` |
| GET | `/dedicated/server/{x}/orderable/traffic` |
| GET | `/dedicated/server/{x}/orderable/usbKey` |
| GET | `/dedicated/server/{x}/plannedIntervention` |
| GET | `/dedicated/server/{x}/plannedIntervention/{x}` |
| POST | `/dedicated/server/{x}/reboot` |
| POST | `/dedicated/server/{x}/reinstall` |
| GET | `/dedicated/server/{x}/secondaryDnsDomains` |
| POST | `/dedicated/server/{x}/secondaryDnsDomains` |
| DELETE | `/dedicated/server/{x}/secondaryDnsDomains/{x}` |
| GET | `/dedicated/server/{x}/secondaryDnsDomains/{x}` |
| PUT | `/dedicated/server/{x}/secondaryDnsDomains/{x}` |
| GET | `/dedicated/server/{x}/secondaryDnsDomains/{x}/dnsServer` |
| GET | `/dedicated/server/{x}/secondaryDnsNameDomainToken` |
| GET | `/dedicated/server/{x}/secondaryDnsNameServerAvailable` |
| GET | `/dedicated/server/{x}/serviceInfos` |
| PUT | `/dedicated/server/{x}/serviceInfos` |
| GET | `/dedicated/server/{x}/specifications/hardware` |
| GET | `/dedicated/server/{x}/specifications/ip` |
| GET | `/dedicated/server/{x}/specifications/network` |
| GET | `/dedicated/server/{x}/spla` |
| POST | `/dedicated/server/{x}/spla` |
| GET | `/dedicated/server/{x}/spla/{x}` |
| PUT | `/dedicated/server/{x}/spla/{x}` |
| POST | `/dedicated/server/{x}/spla/{x}/revoke` |
| POST | `/dedicated/server/{x}/support/replace/cooling` |
| POST | `/dedicated/server/{x}/support/replace/hardDiskDrive` |
| POST | `/dedicated/server/{x}/support/replace/memory` |
| GET | `/dedicated/server/{x}/task/{x}/availableTimeslots` |
| POST | `/dedicated/server/{x}/task/{x}/cancel` |
| POST | `/dedicated/server/{x}/task/{x}/schedule` |
| POST | `/dedicated/server/{x}/terminate` |
| GET | `/dedicated/server/{x}/virtualMac` |
| POST | `/dedicated/server/{x}/virtualMac` |
| GET | `/dedicated/server/{x}/virtualMac/{x}` |
| GET | `/dedicated/server/{x}/virtualMac/{x}/virtualAddress` |
| POST | `/dedicated/server/{x}/virtualMac/{x}/virtualAddress` |
| DELETE | `/dedicated/server/{x}/virtualMac/{x}/virtualAddress/{x}` |
| GET | `/dedicated/server/{x}/virtualMac/{x}/virtualAddress/{x}` |
| GET | `/dedicated/server/{x}/virtualNetworkInterface` |
| GET | `/dedicated/server/{x}/virtualNetworkInterface/{x}` |
| PUT | `/dedicated/server/{x}/virtualNetworkInterface/{x}` |
| POST | `/dedicated/server/{x}/virtualNetworkInterface/{x}/disable` |
| POST | `/dedicated/server/{x}/virtualNetworkInterface/{x}/enable` |
| GET | `/dedicated/server/{x}/vrack` |
| DELETE | `/dedicated/server/{x}/vrack/{x}` |
| GET | `/dedicated/server/{x}/vrack/{x}` |
| GET | `/dedicated/server/{x}/vrack/{x}/mrtg` |
| GET | `/dedicated/server/availabilities` |
| GET | `/dedicated/server/datacenter/availabilities/raw` |
| GET | `/dedicated/server/log` |
| GET | `/dedicated/server/osAvailabilities` |
| GET | `/dedicated/server/region/availabilities` |
| GET | `/dedicated/server/virtualNetworkInterface/{x}` |

### vps (v1) — 72 manquants

_Nodes associés : OvhCloudVps_

| Méthode | Chemin |
|--------|--------|
| GET | `/vps/{x}/activeOptions` |
| GET | `/vps/{x}/automatedBackup` |
| POST | `/vps/{x}/automatedBackup/detachBackup` |
| GET | `/vps/{x}/availableUpgrade` |
| GET | `/vps/{x}/backupftp/access` |
| POST | `/vps/{x}/backupftp/access` |
| DELETE | `/vps/{x}/backupftp/access/{x}` |
| GET | `/vps/{x}/backupftp/access/{x}` |
| PUT | `/vps/{x}/backupftp/access/{x}` |
| GET | `/vps/{x}/backupftp/authorizableBlocks` |
| POST | `/vps/{x}/backupftp/password` |
| GET | `/vps/{x}/datacenter` |
| PUT | `/vps/{x}/disks/{x}` |
| GET | `/vps/{x}/disks/{x}/monitoring` |
| GET | `/vps/{x}/disks/{x}/use` |
| GET | `/vps/{x}/distribution/software` |
| GET | `/vps/{x}/distribution/software/{x}` |
| POST | `/vps/{x}/getConsoleUrl` |
| GET | `/vps/{x}/images/available` |
| GET | `/vps/{x}/images/available/{x}` |
| GET | `/vps/{x}/images/current` |
| GET | `/vps/{x}/ipCountryAvailable` |
| GET | `/vps/{x}/ips` |
| GET | `/vps/{x}/ips/{x}` |
| PUT | `/vps/{x}/ips/{x}` |
| GET | `/vps/{x}/migration2016` |
| POST | `/vps/{x}/migration2016` |
| GET | `/vps/{x}/migration2018` |
| POST | `/vps/{x}/migration2018` |
| DELETE | `/vps/{x}/migration2020` |
| GET | `/vps/{x}/migration2020` |
| POST | `/vps/{x}/migration2020` |
| PUT | `/vps/{x}/migration2020` |
| GET | `/vps/{x}/monitoring` |
| POST | `/vps/{x}/openConsoleAccess` |
| GET | `/vps/{x}/option` |
| DELETE | `/vps/{x}/option/{x}` |
| GET | `/vps/{x}/option/{x}` |
| POST | `/vps/{x}/reboot` |
| POST | `/vps/{x}/rebuild` |
| POST | `/vps/{x}/reinstall` |
| GET | `/vps/{x}/secondaryDnsDomains` |
| POST | `/vps/{x}/secondaryDnsDomains` |
| DELETE | `/vps/{x}/secondaryDnsDomains/{x}` |
| GET | `/vps/{x}/secondaryDnsDomains/{x}` |
| PUT | `/vps/{x}/secondaryDnsDomains/{x}` |
| GET | `/vps/{x}/secondaryDnsDomains/{x}/dnsServer` |
| GET | `/vps/{x}/secondaryDnsNameServerAvailable` |
| GET | `/vps/{x}/serviceInfos` |
| PUT | `/vps/{x}/serviceInfos` |
| POST | `/vps/{x}/setPassword` |
| DELETE | `/vps/{x}/snapshot` |
| PUT | `/vps/{x}/snapshot` |
| GET | `/vps/{x}/snapshot/download` |
| GET | `/vps/{x}/statistics` |
| POST | `/vps/{x}/stop` |
| GET | `/vps/{x}/tasks` |
| GET | `/vps/{x}/templates` |
| GET | `/vps/{x}/templates/{x}` |
| GET | `/vps/{x}/templates/{x}/software` |
| GET | `/vps/{x}/templates/{x}/software/{x}` |
| POST | `/vps/{x}/terminate` |
| GET | `/vps/{x}/use` |
| GET | `/vps/{x}/veeam` |
| DELETE | `/vps/{x}/veeam/restoredBackup` |
| GET | `/vps/{x}/veeam/restoredBackup` |
| GET | `/vps/{x}/veeam/restorePoints` |
| GET | `/vps/{x}/veeam/restorePoints/{x}` |
| POST | `/vps/{x}/veeam/restorePoints/{x}/restore` |
| GET | `/vps/datacenter` |
| GET | `/vps/order/rule/datacenter` |
| GET | `/vps/order/rule/osChoices` |

### sslGateway (v1) — 17 manquants

_Nodes associés : OvhCloudSslGateway_

| Méthode | Chemin |
|--------|--------|
| POST | `/sslGateway/{x}/changeContact` |
| POST | `/sslGateway/{x}/confirmTermination` |
| GET | `/sslGateway/{x}/domain` |
| POST | `/sslGateway/{x}/domain` |
| DELETE | `/sslGateway/{x}/domain/{x}` |
| GET | `/sslGateway/{x}/domain/{x}` |
| GET | `/sslGateway/{x}/natIp` |
| POST | `/sslGateway/{x}/renewCertificate` |
| GET | `/sslGateway/{x}/server` |
| POST | `/sslGateway/{x}/server` |
| DELETE | `/sslGateway/{x}/server/{x}` |
| GET | `/sslGateway/{x}/server/{x}` |
| PUT | `/sslGateway/{x}/server/{x}` |
| GET | `/sslGateway/{x}/serviceInfos` |
| PUT | `/sslGateway/{x}/serviceInfos` |
| GET | `/sslGateway/availableZones` |
| GET | `/sslGateway/eligibility` |

### xdsl (v1) — 103 manquants

_Nodes associés : OvhCloudXdsl_

| Méthode | Chemin |
|--------|--------|
| POST | `/xdsl/{x}/applyTemplateToModem` |
| GET | `/xdsl/{x}/ips/{x}` |
| POST | `/xdsl/{x}/ipv6` |
| GET | `/xdsl/{x}/lines` |
| GET | `/xdsl/{x}/lines/{x}` |
| GET | `/xdsl/{x}/modem/availableACSBackend` |
| GET | `/xdsl/{x}/modem/availableWLANChannel` |
| GET | `/xdsl/{x}/modem/blocIp` |
| POST | `/xdsl/{x}/modem/blocIp` |
| GET | `/xdsl/{x}/modem/callWaiting` |
| POST | `/xdsl/{x}/modem/callWaiting` |
| GET | `/xdsl/{x}/modem/comfortExchange` |
| POST | `/xdsl/{x}/modem/comfortExchange` |
| GET | `/xdsl/{x}/modem/connectedDevices` |
| GET | `/xdsl/{x}/modem/connectedDevices/{x}` |
| GET | `/xdsl/{x}/modem/contentSharing` |
| POST | `/xdsl/{x}/modem/contentSharing` |
| GET | `/xdsl/{x}/modem/firmware` |
| POST | `/xdsl/{x}/modem/firmware` |
| GET | `/xdsl/{x}/modem/firmwareAvailable` |
| GET | `/xdsl/{x}/modem/ftp` |
| POST | `/xdsl/{x}/modem/ftp` |
| GET | `/xdsl/{x}/modem/ipsecAlg` |
| POST | `/xdsl/{x}/modem/ipsecAlg` |
| GET | `/xdsl/{x}/modem/lan` |
| GET | `/xdsl/{x}/modem/lan/{x}` |
| PUT | `/xdsl/{x}/modem/lan/{x}` |
| GET | `/xdsl/{x}/modem/lan/{x}/dhcp` |
| GET | `/xdsl/{x}/modem/lan/{x}/dhcp/{x}` |
| PUT | `/xdsl/{x}/modem/lan/{x}/dhcp/{x}` |
| GET | `/xdsl/{x}/modem/lan/{x}/dhcp/{x}/DHCPStaticAddresses` |
| POST | `/xdsl/{x}/modem/lan/{x}/dhcp/{x}/DHCPStaticAddresses` |
| DELETE | `/xdsl/{x}/modem/lan/{x}/dhcp/{x}/DHCPStaticAddresses/{x}` |
| GET | `/xdsl/{x}/modem/lan/{x}/dhcp/{x}/DHCPStaticAddresses/{x}` |
| PUT | `/xdsl/{x}/modem/lan/{x}/dhcp/{x}/DHCPStaticAddresses/{x}` |
| GET | `/xdsl/{x}/modem/portMappings` |
| POST | `/xdsl/{x}/modem/portMappings` |
| DELETE | `/xdsl/{x}/modem/portMappings/{x}` |
| GET | `/xdsl/{x}/modem/portMappings/{x}` |
| PUT | `/xdsl/{x}/modem/portMappings/{x}` |
| POST | `/xdsl/{x}/modem/reboot` |
| POST | `/xdsl/{x}/modem/reconfigureVoip` |
| POST | `/xdsl/{x}/modem/refreshConnectedDevices` |
| POST | `/xdsl/{x}/modem/reset` |
| POST | `/xdsl/{x}/modem/resetPortMappingConfig` |
| POST | `/xdsl/{x}/modem/retrieveInfo` |
| GET | `/xdsl/{x}/modem/sipAlg` |
| POST | `/xdsl/{x}/modem/sipAlg` |
| GET | `/xdsl/{x}/modem/upnp` |
| POST | `/xdsl/{x}/modem/upnp` |
| GET | `/xdsl/{x}/modem/wifi` |
| GET | `/xdsl/{x}/modem/wifi/{x}` |
| PUT | `/xdsl/{x}/modem/wifi/{x}` |
| GET | `/xdsl/{x}/modem/wifi/{x}/qrCode` |
| GET | `/xdsl/{x}/monitoringNotifications` |
| POST | `/xdsl/{x}/monitoringNotifications` |
| DELETE | `/xdsl/{x}/monitoringNotifications/{x}` |
| GET | `/xdsl/{x}/monitoringNotifications/{x}` |
| PUT | `/xdsl/{x}/monitoringNotifications/{x}` |
| GET | `/xdsl/{x}/ont` |
| GET | `/xdsl/{x}/orderFollowup` |
| POST | `/xdsl/{x}/orderMeeting` |
| GET | `/xdsl/{x}/pendingAction` |
| GET | `/xdsl/{x}/radiusConnectionLogs` |
| POST | `/xdsl/{x}/requestPPPLoginMail` |
| POST | `/xdsl/{x}/requestTotalDeconsolidation` |
| POST | `/xdsl/{x}/resiliate` |
| GET | `/xdsl/{x}/resiliationFollowup` |
| GET | `/xdsl/{x}/resiliationTerms` |
| GET | `/xdsl/{x}/rma` |
| DELETE | `/xdsl/{x}/rma/{x}` |
| GET | `/xdsl/{x}/rma/{x}` |
| PUT | `/xdsl/{x}/rma/{x}` |
| POST | `/xdsl/{x}/rma/{x}/changeType` |
| POST | `/xdsl/{x}/searchOrderMeetings` |
| POST | `/xdsl/{x}/sendOrderToProvider` |
| GET | `/xdsl/{x}/serviceInfos` |
| PUT | `/xdsl/{x}/serviceInfos` |
| GET | `/xdsl/{x}/statistics` |
| GET | `/xdsl/{x}/tasks` |
| GET | `/xdsl/{x}/tasks/{x}` |
| POST | `/xdsl/{x}/tasks/{x}/archive` |
| GET | `/xdsl/{x}/totalDeconsolidationTerms` |
| POST | `/xdsl/{x}/updateInvalidOrMissingRio` |
| GET | `/xdsl/email/pro` |
| DELETE | `/xdsl/email/pro/{x}` |
| GET | `/xdsl/email/pro/{x}` |
| PUT | `/xdsl/email/pro/{x}` |
| POST | `/xdsl/email/pro/{x}/changePassword` |
| GET | `/xdsl/spare` |
| DELETE | `/xdsl/spare/{x}` |
| GET | `/xdsl/spare/{x}` |
| GET | `/xdsl/spare/{x}/compatibleReplacement` |
| POST | `/xdsl/spare/{x}/replace` |
| POST | `/xdsl/spare/{x}/returnMerchandise` |
| GET | `/xdsl/spare/{x}/serviceInfos` |
| PUT | `/xdsl/spare/{x}/serviceInfos` |
| GET | `/xdsl/spare/brands` |
| GET | `/xdsl/templateModem` |
| POST | `/xdsl/templateModem` |
| DELETE | `/xdsl/templateModem/{x}` |
| GET | `/xdsl/templateModem/{x}` |
| PUT | `/xdsl/templateModem/{x}` |

### cloud (v1) — 726 manquants

_Nodes associés : OvhCloudPublicCloud, OvhCloudPublicCloudAi_

| Méthode | Chemin |
|--------|--------|
| GET | `/cloud/agreements` |
| GET | `/cloud/eligibility` |
| GET | `/cloud/order` |
| GET | `/cloud/order/rule/availability` |
| GET | `/cloud/project` |
| GET | `/cloud/project/{x}` |
| PUT | `/cloud/project/{x}` |
| GET | `/cloud/project/{x}/acl` |
| POST | `/cloud/project/{x}/acl` |
| DELETE | `/cloud/project/{x}/acl/{x}` |
| GET | `/cloud/project/{x}/acl/{x}` |
| POST | `/cloud/project/{x}/activateMonthlyBilling` |
| GET | `/cloud/project/{x}/ai/app` |
| POST | `/cloud/project/{x}/ai/app` |
| DELETE | `/cloud/project/{x}/ai/app/{x}` |
| GET | `/cloud/project/{x}/ai/app/{x}` |
| PUT | `/cloud/project/{x}/ai/app/{x}` |
| POST | `/cloud/project/{x}/ai/app/{x}/datasync` |
| PUT | `/cloud/project/{x}/ai/app/{x}/image` |
| PUT | `/cloud/project/{x}/ai/app/{x}/label` |
| GET | `/cloud/project/{x}/ai/app/{x}/log` |
| PUT | `/cloud/project/{x}/ai/app/{x}/scalingstrategy` |
| PUT | `/cloud/project/{x}/ai/app/{x}/start` |
| PUT | `/cloud/project/{x}/ai/app/{x}/stop` |
| POST | `/cloud/project/{x}/ai/app/command` |
| GET | `/cloud/project/{x}/ai/authorization` |
| POST | `/cloud/project/{x}/ai/authorization` |
| GET | `/cloud/project/{x}/ai/capabilities/feature` |
| GET | `/cloud/project/{x}/ai/capabilities/quota` |
| GET | `/cloud/project/{x}/ai/capabilities/region` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/app/image` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/data/region` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/flavor` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/flavor/{x}` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/job/image` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/notebook/editor` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/notebook/editor/{x}` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/notebook/framework` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/notebook/framework/{x}` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/notebook/workspacebackupretentionpolicy` |
| PUT | `/cloud/project/{x}/ai/capabilities/region/{x}/notebook/workspacebackupretentionpolicy` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/preset` |
| GET | `/cloud/project/{x}/ai/capabilities/region/{x}/preset/{x}` |
| GET | `/cloud/project/{x}/ai/data/region` |
| GET | `/cloud/project/{x}/ai/data/region/{x}` |
| GET | `/cloud/project/{x}/ai/data/region/{x}/alias` |
| DELETE | `/cloud/project/{x}/ai/data/region/{x}/alias/{x}` |
| GET | `/cloud/project/{x}/ai/data/region/{x}/alias/{x}` |
| PUT | `/cloud/project/{x}/ai/data/region/{x}/alias/{x}` |
| GET | `/cloud/project/{x}/ai/data/region/{x}/alias/{x}/auth` |
| GET | `/cloud/project/{x}/ai/job` |
| POST | `/cloud/project/{x}/ai/job` |
| DELETE | `/cloud/project/{x}/ai/job/{x}` |
| GET | `/cloud/project/{x}/ai/job/{x}` |
| POST | `/cloud/project/{x}/ai/job/{x}/datasync` |
| PUT | `/cloud/project/{x}/ai/job/{x}/kill` |
| PUT | `/cloud/project/{x}/ai/job/{x}/label` |
| GET | `/cloud/project/{x}/ai/job/{x}/log` |
| GET | `/cloud/project/{x}/ai/job/capabilities/presetImage` |
| POST | `/cloud/project/{x}/ai/job/command` |
| GET | `/cloud/project/{x}/ai/notebook` |
| POST | `/cloud/project/{x}/ai/notebook` |
| DELETE | `/cloud/project/{x}/ai/notebook/{x}` |
| GET | `/cloud/project/{x}/ai/notebook/{x}` |
| PUT | `/cloud/project/{x}/ai/notebook/{x}` |
| GET | `/cloud/project/{x}/ai/notebook/{x}/backup` |
| GET | `/cloud/project/{x}/ai/notebook/{x}/backup/{x}` |
| POST | `/cloud/project/{x}/ai/notebook/{x}/backup/{x}/fork` |
| POST | `/cloud/project/{x}/ai/notebook/{x}/datasync` |
| PUT | `/cloud/project/{x}/ai/notebook/{x}/label` |
| GET | `/cloud/project/{x}/ai/notebook/{x}/log` |
| PUT | `/cloud/project/{x}/ai/notebook/{x}/restart` |
| PUT | `/cloud/project/{x}/ai/notebook/{x}/start` |
| PUT | `/cloud/project/{x}/ai/notebook/{x}/stop` |
| GET | `/cloud/project/{x}/ai/notebook/{x}/workspacebackupretentionpolicy` |
| PUT | `/cloud/project/{x}/ai/notebook/{x}/workspacebackupretentionpolicy` |
| GET | `/cloud/project/{x}/ai/notebook/capabilities/editor` |
| GET | `/cloud/project/{x}/ai/notebook/capabilities/framework` |
| POST | `/cloud/project/{x}/ai/notebook/command` |
| GET | `/cloud/project/{x}/ai/partners/region` |
| GET | `/cloud/project/{x}/ai/partners/region/{x}` |
| GET | `/cloud/project/{x}/ai/partners/region/{x}/partner` |
| GET | `/cloud/project/{x}/ai/partners/region/{x}/partner/{x}` |
| GET | `/cloud/project/{x}/ai/registry` |
| POST | `/cloud/project/{x}/ai/registry` |
| DELETE | `/cloud/project/{x}/ai/registry/{x}` |
| GET | `/cloud/project/{x}/ai/registry/{x}` |
| PUT | `/cloud/project/{x}/ai/registry/{x}` |
| GET | `/cloud/project/{x}/ai/token` |
| POST | `/cloud/project/{x}/ai/token` |
| DELETE | `/cloud/project/{x}/ai/token/{x}` |
| GET | `/cloud/project/{x}/ai/token/{x}` |
| POST | `/cloud/project/{x}/ai/token/{x}/renew` |
| GET | `/cloud/project/{x}/alerting` |
| POST | `/cloud/project/{x}/alerting` |
| DELETE | `/cloud/project/{x}/alerting/{x}` |
| GET | `/cloud/project/{x}/alerting/{x}` |
| PUT | `/cloud/project/{x}/alerting/{x}` |
| GET | `/cloud/project/{x}/alerting/{x}/alert` |
| GET | `/cloud/project/{x}/alerting/{x}/alert/{x}` |
| GET | `/cloud/project/{x}/bill` |
| POST | `/cloud/project/{x}/cancel` |
| GET | `/cloud/project/{x}/capabilities/containerRegistry` |
| GET | `/cloud/project/{x}/capabilities/kube/admissionplugins` |
| GET | `/cloud/project/{x}/capabilities/kube/flavors` |
| GET | `/cloud/project/{x}/capabilities/kube/log/kind` |
| GET | `/cloud/project/{x}/capabilities/kube/log/kind/{x}` |
| GET | `/cloud/project/{x}/capabilities/kube/regions` |
| GET | `/cloud/project/{x}/capabilities/loadbalancer/region` |
| GET | `/cloud/project/{x}/capabilities/loadbalancer/region/{x}` |
| GET | `/cloud/project/{x}/capabilities/productAvailability` |
| POST | `/cloud/project/{x}/changeContact` |
| POST | `/cloud/project/{x}/confirmTermination` |
| GET | `/cloud/project/{x}/containerRegistry` |
| POST | `/cloud/project/{x}/containerRegistry` |
| DELETE | `/cloud/project/{x}/containerRegistry/{x}` |
| GET | `/cloud/project/{x}/containerRegistry/{x}` |
| PUT | `/cloud/project/{x}/containerRegistry/{x}` |
| GET | `/cloud/project/{x}/containerRegistry/{x}/capabilities/plan` |
| DELETE | `/cloud/project/{x}/containerRegistry/{x}/iam` |
| POST | `/cloud/project/{x}/containerRegistry/{x}/iam` |
| GET | `/cloud/project/{x}/containerRegistry/{x}/ipRestrictions/management` |
| PUT | `/cloud/project/{x}/containerRegistry/{x}/ipRestrictions/management` |
| GET | `/cloud/project/{x}/containerRegistry/{x}/ipRestrictions/registry` |
| PUT | `/cloud/project/{x}/containerRegistry/{x}/ipRestrictions/registry` |
| DELETE | `/cloud/project/{x}/containerRegistry/{x}/openIdConnect` |
| GET | `/cloud/project/{x}/containerRegistry/{x}/openIdConnect` |
| POST | `/cloud/project/{x}/containerRegistry/{x}/openIdConnect` |
| PUT | `/cloud/project/{x}/containerRegistry/{x}/openIdConnect` |
| GET | `/cloud/project/{x}/containerRegistry/{x}/plan` |
| PUT | `/cloud/project/{x}/containerRegistry/{x}/plan` |
| GET | `/cloud/project/{x}/containerRegistry/{x}/users` |
| POST | `/cloud/project/{x}/containerRegistry/{x}/users` |
| DELETE | `/cloud/project/{x}/containerRegistry/{x}/users/{x}` |
| GET | `/cloud/project/{x}/containerRegistry/{x}/users/{x}` |
| PUT | `/cloud/project/{x}/containerRegistry/{x}/users/{x}/setAsAdmin` |
| GET | `/cloud/project/{x}/credit` |
| POST | `/cloud/project/{x}/credit` |
| GET | `/cloud/project/{x}/credit/{x}` |
| GET | `/cloud/project/{x}/database/availability` |
| GET | `/cloud/project/{x}/database/capabilities` |
| GET | `/cloud/project/{x}/database/cassandra` |
| POST | `/cloud/project/{x}/database/cassandra` |
| DELETE | `/cloud/project/{x}/database/cassandra/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}` |
| PUT | `/cloud/project/{x}/database/cassandra/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/advancedConfiguration` |
| PUT | `/cloud/project/{x}/database/cassandra/{x}/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/backup` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/backup/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/capabilities/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/capabilities/integration` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/certificates` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/integration` |
| POST | `/cloud/project/{x}/database/cassandra/{x}/integration` |
| DELETE | `/cloud/project/{x}/database/cassandra/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction` |
| POST | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction` |
| DELETE | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction/{x}` |
| PUT | `/cloud/project/{x}/database/cassandra/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/log/kind/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/cassandra/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/database/cassandra/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/cassandra/{x}/log/url` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/logs` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/cassandra/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/metric` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/metric/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/node` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/prometheus` |
| POST | `/cloud/project/{x}/database/cassandra/{x}/prometheus/credentials/reset` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/user` |
| POST | `/cloud/project/{x}/database/cassandra/{x}/user` |
| DELETE | `/cloud/project/{x}/database/cassandra/{x}/user/{x}` |
| GET | `/cloud/project/{x}/database/cassandra/{x}/user/{x}` |
| POST | `/cloud/project/{x}/database/cassandra/{x}/user/{x}/credentials/reset` |
| GET | `/cloud/project/{x}/database/clickhouse` |
| POST | `/cloud/project/{x}/database/clickhouse` |
| DELETE | `/cloud/project/{x}/database/clickhouse/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}` |
| PUT | `/cloud/project/{x}/database/clickhouse/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/backup` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/backup/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/capabilities/backupRegions` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/capabilities/integration` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/certificates` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/currentQueries` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/currentQueries/cancel` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/database` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/database` |
| DELETE | `/cloud/project/{x}/database/clickhouse/{x}/database/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/database/{x}` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/enableWrites` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/integration` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/integration` |
| DELETE | `/cloud/project/{x}/database/clickhouse/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/log/kind/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/log/url` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/metric` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/metric/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/node` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/prometheus` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/prometheus/credentials/reset` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/queryStatistics` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/roles` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/user` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/user` |
| DELETE | `/cloud/project/{x}/database/clickhouse/{x}/user/{x}` |
| GET | `/cloud/project/{x}/database/clickhouse/{x}/user/{x}` |
| PUT | `/cloud/project/{x}/database/clickhouse/{x}/user/{x}` |
| POST | `/cloud/project/{x}/database/clickhouse/{x}/user/{x}/credentials/reset` |
| GET | `/cloud/project/{x}/database/kafka/{x}/acl` |
| POST | `/cloud/project/{x}/database/kafka/{x}/acl` |
| DELETE | `/cloud/project/{x}/database/kafka/{x}/acl/{x}` |
| GET | `/cloud/project/{x}/database/kafka/{x}/acl/{x}` |
| GET | `/cloud/project/{x}/database/kafka/{x}/advancedConfiguration` |
| PUT | `/cloud/project/{x}/database/kafka/{x}/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/kafka/{x}/integration` |
| POST | `/cloud/project/{x}/database/kafka/{x}/integration` |
| DELETE | `/cloud/project/{x}/database/kafka/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/kafka/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/kafka/{x}/ipRestriction` |
| POST | `/cloud/project/{x}/database/kafka/{x}/ipRestriction` |
| DELETE | `/cloud/project/{x}/database/kafka/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/kafka/{x}/ipRestriction/{x}` |
| PUT | `/cloud/project/{x}/database/kafka/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/kafka/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/kafka/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/kafka/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/kafka/{x}/node` |
| GET | `/cloud/project/{x}/database/kafka/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect` |
| POST | `/cloud/project/{x}/database/kafkaConnect` |
| DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}` |
| PUT | `/cloud/project/{x}/database/kafkaConnect/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/advancedConfiguration` |
| PUT | `/cloud/project/{x}/database/kafkaConnect/{x}/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/backupRegions` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/connector` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/connector/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/connector/{x}/configuration` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/connector/{x}/transforms` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/capabilities/integration` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/connector` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector` |
| DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}` |
| PUT | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/pause` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/restart` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/resume` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/task` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/task/{x}` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/connector/{x}/task/{x}/restart` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/integration` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/integration` |
| DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction` |
| DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction/{x}` |
| PUT | `/cloud/project/{x}/database/kafkaConnect/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/log/kind/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/log/url` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/logs` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/metric` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/metric/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/node` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/prometheus` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/prometheus/credentials/reset` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/user` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/user` |
| DELETE | `/cloud/project/{x}/database/kafkaConnect/{x}/user/{x}` |
| GET | `/cloud/project/{x}/database/kafkaConnect/{x}/user/{x}` |
| POST | `/cloud/project/{x}/database/kafkaConnect/{x}/user/{x}/credentials/reset` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker` |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker` |
| DELETE | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}` |
| PUT | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/capabilities/integration` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration` |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration` |
| DELETE | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/kind/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/url` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/logs` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/metric` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/metric/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/node` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/prometheus` |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/prometheus/credentials/reset` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication` |
| POST | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication` |
| DELETE | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication/{x}` |
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication/{x}` |
| PUT | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/replication/{x}` |
| GET | `/cloud/project/{x}/database/m3aggregator` |
| POST | `/cloud/project/{x}/database/m3aggregator` |
| DELETE | `/cloud/project/{x}/database/m3aggregator/{x}` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}` |
| PUT | `/cloud/project/{x}/database/m3aggregator/{x}` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/capabilities/integration` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/integration` |
| POST | `/cloud/project/{x}/database/m3aggregator/{x}/integration` |
| DELETE | `/cloud/project/{x}/database/m3aggregator/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/log/kind/{x}` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/m3aggregator/{x}/log/url` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/logs` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/m3aggregator/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/metric` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/metric/{x}` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/node` |
| GET | `/cloud/project/{x}/database/m3aggregator/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/m3db` |
| POST | `/cloud/project/{x}/database/m3db` |
| DELETE | `/cloud/project/{x}/database/m3db/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}` |
| PUT | `/cloud/project/{x}/database/m3db/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/advancedConfiguration` |
| PUT | `/cloud/project/{x}/database/m3db/{x}/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/m3db/{x}/backup` |
| GET | `/cloud/project/{x}/database/m3db/{x}/backup/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/capabilities/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/m3db/{x}/capabilities/integration` |
| GET | `/cloud/project/{x}/database/m3db/{x}/integration` |
| POST | `/cloud/project/{x}/database/m3db/{x}/integration` |
| DELETE | `/cloud/project/{x}/database/m3db/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/ipRestriction` |
| POST | `/cloud/project/{x}/database/m3db/{x}/ipRestriction` |
| DELETE | `/cloud/project/{x}/database/m3db/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/ipRestriction/{x}` |
| PUT | `/cloud/project/{x}/database/m3db/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/m3db/{x}/log/kind/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/m3db/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/database/m3db/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/m3db/{x}/log/url` |
| GET | `/cloud/project/{x}/database/m3db/{x}/logs` |
| GET | `/cloud/project/{x}/database/m3db/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/m3db/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/m3db/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/m3db/{x}/metric` |
| GET | `/cloud/project/{x}/database/m3db/{x}/metric/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/namespace` |
| POST | `/cloud/project/{x}/database/m3db/{x}/namespace` |
| DELETE | `/cloud/project/{x}/database/m3db/{x}/namespace/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/namespace/{x}` |
| PUT | `/cloud/project/{x}/database/m3db/{x}/namespace/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/node` |
| GET | `/cloud/project/{x}/database/m3db/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/user` |
| POST | `/cloud/project/{x}/database/m3db/{x}/user` |
| DELETE | `/cloud/project/{x}/database/m3db/{x}/user/{x}` |
| GET | `/cloud/project/{x}/database/m3db/{x}/user/{x}` |
| PUT | `/cloud/project/{x}/database/m3db/{x}/user/{x}` |
| POST | `/cloud/project/{x}/database/m3db/{x}/user/{x}/credentials/reset` |
| GET | `/cloud/project/{x}/database/mongodb` |
| POST | `/cloud/project/{x}/database/mongodb` |
| DELETE | `/cloud/project/{x}/database/mongodb/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}` |
| PUT | `/cloud/project/{x}/database/mongodb/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/backup` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/backup/{x}` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/backup/{x}/restore` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction` |
| DELETE | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction/{x}` |
| PUT | `/cloud/project/{x}/database/mongodb/{x}/ipRestriction/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/log/kind/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/database/mongodb/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/log/url` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/logs` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/metric` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/metric/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/node` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/node` |
| DELETE | `/cloud/project/{x}/database/mongodb/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/node/{x}` |
| PUT | `/cloud/project/{x}/database/mongodb/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/prometheus` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/prometheus/credentials/reset` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/restore` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/roles` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/user` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/user` |
| DELETE | `/cloud/project/{x}/database/mongodb/{x}/user/{x}` |
| GET | `/cloud/project/{x}/database/mongodb/{x}/user/{x}` |
| PUT | `/cloud/project/{x}/database/mongodb/{x}/user/{x}` |
| POST | `/cloud/project/{x}/database/mongodb/{x}/user/{x}/credentials/reset` |
| POST | `/cloud/project/{x}/database/postgresql/{x}/enableWrites` |
| POST | `/cloud/project/{x}/database/postgresql/{x}/prometheus/credentials/reset` |
| GET | `/cloud/project/{x}/database/service` |
| GET | `/cloud/project/{x}/database/service/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/advancedConfiguration` |
| PUT | `/cloud/project/{x}/database/valkey/{x}/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/backupRegions` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/categories` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/commands` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/integration` |
| DELETE | `/cloud/project/{x}/database/valkey/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/valkey/{x}/log/kind/{x}` |
| DELETE | `/cloud/project/{x}/database/valkey/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/valkey/{x}/log/url` |
| GET | `/cloud/project/{x}/database/valkey/{x}/logs` |
| GET | `/cloud/project/{x}/database/valkey/{x}/maintenance` |
| POST | `/cloud/project/{x}/database/valkey/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/valkey/{x}/metric` |
| POST | `/cloud/project/{x}/database/valkey/{x}/prometheus/credentials/reset` |
| POST | `/cloud/project/{x}/database/valkey/{x}/user/{x}/credentials/reset` |
| GET | `/cloud/project/{x}/flavor` |
| GET | `/cloud/project/{x}/flavor/{x}` |
| GET | `/cloud/project/{x}/image` |
| GET | `/cloud/project/{x}/image/{x}` |
| GET | `/cloud/project/{x}/instance` |
| POST | `/cloud/project/{x}/instance` |
| POST | `/cloud/project/{x}/instance/bulk` |
| GET | `/cloud/project/{x}/instance/group` |
| POST | `/cloud/project/{x}/instance/group` |
| DELETE | `/cloud/project/{x}/instance/group/{x}` |
| GET | `/cloud/project/{x}/instance/group/{x}` |
| GET | `/cloud/project/{x}/ip` |
| GET | `/cloud/project/{x}/ip/failover` |
| GET | `/cloud/project/{x}/ip/failover/{x}` |
| POST | `/cloud/project/{x}/ip/failover/{x}/attach` |
| POST | `/cloud/project/{x}/kube` |
| GET | `/cloud/project/{x}/lab` |
| GET | `/cloud/project/{x}/lab/{x}` |
| POST | `/cloud/project/{x}/lab/{x}` |
| GET | `/cloud/project/{x}/lab/{x}/agreement` |
| GET | `/cloud/project/{x}/loadbalancer` |
| POST | `/cloud/project/{x}/loadbalancer` |
| DELETE | `/cloud/project/{x}/loadbalancer/{x}` |
| GET | `/cloud/project/{x}/loadbalancer/{x}` |
| PUT | `/cloud/project/{x}/loadbalancer/{x}` |
| GET | `/cloud/project/{x}/loadbalancer/{x}/configuration` |
| POST | `/cloud/project/{x}/loadbalancer/{x}/configuration` |
| DELETE | `/cloud/project/{x}/loadbalancer/{x}/configuration/{x}` |
| GET | `/cloud/project/{x}/loadbalancer/{x}/configuration/{x}` |
| POST | `/cloud/project/{x}/loadbalancer/{x}/configuration/{x}/apply` |
| GET | `/cloud/project/{x}/network/private` |
| POST | `/cloud/project/{x}/network/private` |
| DELETE | `/cloud/project/{x}/network/private/{x}` |
| GET | `/cloud/project/{x}/network/private/{x}` |
| PUT | `/cloud/project/{x}/network/private/{x}` |
| POST | `/cloud/project/{x}/network/private/{x}/region` |
| GET | `/cloud/project/{x}/network/private/{x}/subnet` |
| POST | `/cloud/project/{x}/network/private/{x}/subnet` |
| DELETE | `/cloud/project/{x}/network/private/{x}/subnet/{x}` |
| GET | `/cloud/project/{x}/network/public` |
| GET | `/cloud/project/{x}/operation` |
| GET | `/cloud/project/{x}/operation/{x}` |
| GET | `/cloud/project/{x}/quantum/capabilities/region` |
| GET | `/cloud/project/{x}/quantum/capabilities/region/{x}` |
| GET | `/cloud/project/{x}/quantum/capabilities/region/{x}/qpu` |
| GET | `/cloud/project/{x}/quantum/capabilities/region/{x}/qpu/{x}` |
| GET | `/cloud/project/{x}/quota` |
| GET | `/cloud/project/{x}/region` |
| POST | `/cloud/project/{x}/region` |
| GET | `/cloud/project/{x}/region/{x}` |
| GET | `/cloud/project/{x}/region/{x}/coldArchive` |
| POST | `/cloud/project/{x}/region/{x}/coldArchive` |
| DELETE | `/cloud/project/{x}/region/{x}/coldArchive/{x}` |
| GET | `/cloud/project/{x}/region/{x}/coldArchive/{x}` |
| POST | `/cloud/project/{x}/region/{x}/coldArchive/{x}/archive` |
| POST | `/cloud/project/{x}/region/{x}/coldArchive/{x}/destroy` |
| DELETE | `/cloud/project/{x}/region/{x}/coldArchive/{x}/object/{x}` |
| POST | `/cloud/project/{x}/region/{x}/coldArchive/{x}/policy/{x}` |
| POST | `/cloud/project/{x}/region/{x}/coldArchive/{x}/presign` |
| POST | `/cloud/project/{x}/region/{x}/coldArchive/{x}/restore` |
| GET | `/cloud/project/{x}/region/{x}/floatingip` |
| DELETE | `/cloud/project/{x}/region/{x}/floatingip/{x}` |
| GET | `/cloud/project/{x}/region/{x}/floatingip/{x}` |
| POST | `/cloud/project/{x}/region/{x}/floatingip/{x}/detach` |
| GET | `/cloud/project/{x}/region/{x}/gateway` |
| POST | `/cloud/project/{x}/region/{x}/gateway` |
| DELETE | `/cloud/project/{x}/region/{x}/gateway/{x}` |
| GET | `/cloud/project/{x}/region/{x}/gateway/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/gateway/{x}` |
| POST | `/cloud/project/{x}/region/{x}/gateway/{x}/expose` |
| GET | `/cloud/project/{x}/region/{x}/gateway/{x}/interface` |
| POST | `/cloud/project/{x}/region/{x}/gateway/{x}/interface` |
| DELETE | `/cloud/project/{x}/region/{x}/gateway/{x}/interface/{x}` |
| GET | `/cloud/project/{x}/region/{x}/gateway/{x}/interface/{x}` |
| GET | `/cloud/project/{x}/region/{x}/instance` |
| POST | `/cloud/project/{x}/region/{x}/instance` |
| GET | `/cloud/project/{x}/region/{x}/instance/{x}` |
| POST | `/cloud/project/{x}/region/{x}/instance/{x}/abortSnapshot` |
| POST | `/cloud/project/{x}/region/{x}/instance/{x}/associateFloatingIp` |
| POST | `/cloud/project/{x}/region/{x}/instance/{x}/autobackup` |
| POST | `/cloud/project/{x}/region/{x}/instance/{x}/floatingIp` |
| POST | `/cloud/project/{x}/region/{x}/instance/{x}/reinstall` |
| POST | `/cloud/project/{x}/region/{x}/instance/{x}/snapshot` |
| GET | `/cloud/project/{x}/region/{x}/keymanager/certificate` |
| POST | `/cloud/project/{x}/region/{x}/keymanager/certificate` |
| DELETE | `/cloud/project/{x}/region/{x}/keymanager/certificate/{x}` |
| GET | `/cloud/project/{x}/region/{x}/keymanager/certificate/{x}` |
| GET | `/cloud/project/{x}/region/{x}/keymanager/secret` |
| DELETE | `/cloud/project/{x}/region/{x}/keymanager/secret/{x}` |
| GET | `/cloud/project/{x}/region/{x}/keymanager/secret/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/flavor` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/flavor/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/healthMonitor` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/healthMonitor` |
| DELETE | `/cloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/loadbalancing/healthMonitor/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy` |
| DELETE | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule` |
| DELETE | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/loadbalancing/l7Policy/{x}/l7Rule/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/listener` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/listener` |
| DELETE | `/cloud/project/{x}/region/{x}/loadbalancing/listener/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/listener/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/loadbalancing/listener/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer` |
| DELETE | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/associateFloatingIp` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/floatingIp` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/log/url` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/loadbalancer/{x}/stats` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/log/kind` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/log/kind/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/pool` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/pool` |
| DELETE | `/cloud/project/{x}/region/{x}/loadbalancing/pool/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/pool/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/loadbalancing/pool/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member` |
| POST | `/cloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member` |
| DELETE | `/cloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` |
| GET | `/cloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/loadbalancing/pool/{x}/member/{x}` |
| GET | `/cloud/project/{x}/region/{x}/network` |
| POST | `/cloud/project/{x}/region/{x}/network` |
| DELETE | `/cloud/project/{x}/region/{x}/network/{x}` |
| GET | `/cloud/project/{x}/region/{x}/network/{x}` |
| GET | `/cloud/project/{x}/region/{x}/network/{x}/subnet` |
| POST | `/cloud/project/{x}/region/{x}/network/{x}/subnet` |
| DELETE | `/cloud/project/{x}/region/{x}/network/{x}/subnet/{x}` |
| GET | `/cloud/project/{x}/region/{x}/network/{x}/subnet/{x}` |
| POST | `/cloud/project/{x}/region/{x}/network/{x}/subnet/{x}/gateway` |
| GET | `/cloud/project/{x}/region/{x}/quota` |
| POST | `/cloud/project/{x}/region/{x}/quota` |
| GET | `/cloud/project/{x}/region/{x}/quota/allowed` |
| DELETE | `/cloud/project/{x}/region/{x}/quota/storage` |
| GET | `/cloud/project/{x}/region/{x}/quota/storage` |
| PUT | `/cloud/project/{x}/region/{x}/quota/storage` |
| GET | `/cloud/project/{x}/region/{x}/share` |
| POST | `/cloud/project/{x}/region/{x}/share` |
| DELETE | `/cloud/project/{x}/region/{x}/share/{x}` |
| GET | `/cloud/project/{x}/region/{x}/share/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/share/{x}` |
| GET | `/cloud/project/{x}/region/{x}/share/{x}/acl` |
| POST | `/cloud/project/{x}/region/{x}/share/{x}/acl` |
| DELETE | `/cloud/project/{x}/region/{x}/share/{x}/acl/{x}` |
| GET | `/cloud/project/{x}/region/{x}/share/{x}/acl/{x}` |
| GET | `/cloud/project/{x}/region/{x}/share/{x}/snapshot` |
| POST | `/cloud/project/{x}/region/{x}/share/{x}/snapshot` |
| DELETE | `/cloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` |
| GET | `/cloud/project/{x}/region/{x}/share/{x}/snapshot/{x}` |
| GET | `/cloud/project/{x}/region/{x}/storage` |
| POST | `/cloud/project/{x}/region/{x}/storage` |
| DELETE | `/cloud/project/{x}/region/{x}/storage/{x}` |
| GET | `/cloud/project/{x}/region/{x}/storage/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/storage/{x}` |
| POST | `/cloud/project/{x}/region/{x}/storage/{x}/bulkDeleteObjects` |
| GET | `/cloud/project/{x}/region/{x}/storage/{x}/job/replication` |
| POST | `/cloud/project/{x}/region/{x}/storage/{x}/job/replication` |
| DELETE | `/cloud/project/{x}/region/{x}/storage/{x}/lifecycle` |
| GET | `/cloud/project/{x}/region/{x}/storage/{x}/lifecycle` |
| PUT | `/cloud/project/{x}/region/{x}/storage/{x}/lifecycle` |
| GET | `/cloud/project/{x}/region/{x}/storage/{x}/object` |
| DELETE | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}` |
| GET | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}` |
| POST | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}/copy` |
| POST | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}/restore` |
| GET | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}/version` |
| DELETE | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` |
| GET | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}` |
| POST | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}/copy` |
| POST | `/cloud/project/{x}/region/{x}/storage/{x}/object/{x}/version/{x}/restore` |
| POST | `/cloud/project/{x}/region/{x}/storage/{x}/policy/{x}` |
| POST | `/cloud/project/{x}/region/{x}/storage/{x}/presign` |
| GET | `/cloud/project/{x}/region/{x}/volume` |
| POST | `/cloud/project/{x}/region/{x}/volume` |
| GET | `/cloud/project/{x}/region/{x}/volume/{x}` |
| PUT | `/cloud/project/{x}/region/{x}/volume/{x}` |
| POST | `/cloud/project/{x}/region/{x}/volume/{x}/bulkDeleteSnapshots` |
| GET | `/cloud/project/{x}/region/{x}/volumeBackup` |
| POST | `/cloud/project/{x}/region/{x}/volumeBackup` |
| DELETE | `/cloud/project/{x}/region/{x}/volumeBackup/{x}` |
| GET | `/cloud/project/{x}/region/{x}/volumeBackup/{x}` |
| POST | `/cloud/project/{x}/region/{x}/volumeBackup/{x}/restore` |
| POST | `/cloud/project/{x}/region/{x}/volumeBackup/{x}/volume` |
| GET | `/cloud/project/{x}/region/{x}/volumeType` |
| GET | `/cloud/project/{x}/region/{x}/workflow/backup` |
| POST | `/cloud/project/{x}/region/{x}/workflow/backup` |
| DELETE | `/cloud/project/{x}/region/{x}/workflow/backup/{x}` |
| GET | `/cloud/project/{x}/region/{x}/workflow/backup/{x}` |
| GET | `/cloud/project/{x}/regionAvailable` |
| POST | `/cloud/project/{x}/retain` |
| GET | `/cloud/project/{x}/role` |
| GET | `/cloud/project/{x}/serviceInfos` |
| PUT | `/cloud/project/{x}/serviceInfos` |
| GET | `/cloud/project/{x}/snapshot` |
| DELETE | `/cloud/project/{x}/snapshot/{x}` |
| GET | `/cloud/project/{x}/snapshot/{x}` |
| GET | `/cloud/project/{x}/sshkey` |
| POST | `/cloud/project/{x}/sshkey` |
| DELETE | `/cloud/project/{x}/sshkey/{x}` |
| GET | `/cloud/project/{x}/sshkey/{x}` |
| GET | `/cloud/project/{x}/storage` |
| POST | `/cloud/project/{x}/storage` |
| DELETE | `/cloud/project/{x}/storage/{x}` |
| GET | `/cloud/project/{x}/storage/{x}` |
| PUT | `/cloud/project/{x}/storage/{x}` |
| DELETE | `/cloud/project/{x}/storage/{x}/cors` |
| POST | `/cloud/project/{x}/storage/{x}/cors` |
| POST | `/cloud/project/{x}/storage/{x}/publicUrl` |
| POST | `/cloud/project/{x}/storage/{x}/static` |
| POST | `/cloud/project/{x}/storage/{x}/user` |
| POST | `/cloud/project/{x}/storage/access` |
| GET | `/cloud/project/{x}/storage/quota` |
| POST | `/cloud/project/{x}/terminate` |
| POST | `/cloud/project/{x}/unleash` |
| GET | `/cloud/project/{x}/usage/current` |
| GET | `/cloud/project/{x}/usage/forecast` |
| GET | `/cloud/project/{x}/usage/history` |
| GET | `/cloud/project/{x}/usage/history/{x}` |
| GET | `/cloud/project/{x}/usage/plans` |
| GET | `/cloud/project/{x}/user` |
| POST | `/cloud/project/{x}/user` |
| GET | `/cloud/project/{x}/volume` |
| POST | `/cloud/project/{x}/volume` |
| DELETE | `/cloud/project/{x}/volume/{x}` |
| GET | `/cloud/project/{x}/volume/{x}` |
| PUT | `/cloud/project/{x}/volume/{x}` |
| POST | `/cloud/project/{x}/volume/{x}/attach` |
| POST | `/cloud/project/{x}/volume/{x}/detach` |
| POST | `/cloud/project/{x}/volume/{x}/snapshot` |
| POST | `/cloud/project/{x}/volume/{x}/upsize` |
| GET | `/cloud/project/{x}/volume/snapshot` |
| DELETE | `/cloud/project/{x}/volume/snapshot/{x}` |
| GET | `/cloud/project/{x}/volume/snapshot/{x}` |
| GET | `/cloud/project/{x}/vrack` |
| POST | `/cloud/project/{x}/vrack` |

### veeam (v1) — 5 manquants

_Nodes associés : OvhCloudVeeamEnterprisePlus_

| Méthode | Chemin |
|--------|--------|
| PUT | `/veeam/veeamEnterprise/{x}/serviceInfos` |
| GET | `/veeam/veeamEnterprise/{x}/task` |
| GET | `/veeam/veeamEnterprise/{x}/task/{x}` |
| POST | `/veeam/veeamEnterprise/{x}/terminate` |
| POST | `/veeam/veeamEnterprise/{x}/update` |

### license (v1) — 6 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| GET | `/license/worklight/{x}/canLicenseBeMovedTo` |
| GET | `/license/worklight/{x}/serviceInfos` |
| PUT | `/license/worklight/{x}/serviceInfos` |
| GET | `/license/worklight/{x}/tasks` |
| GET | `/license/worklight/{x}/tasks/{x}` |
| GET | `/license/worklight/orderableVersions` |

### pack (v1) — 25 manquants

_Nodes associés : OvhCloudPackXdsl, OvhCloudPack_

| Méthode | Chemin |
|--------|--------|
| GET | `/pack/xdsl/{x}/orderFollowUp` |
| GET | `/pack/xdsl/{x}/promotionCode/capabilities` |
| POST | `/pack/xdsl/{x}/promotionCode/generate` |
| POST | `/pack/xdsl/{x}/resiliate` |
| GET | `/pack/xdsl/{x}/resiliationFollowUp` |
| GET | `/pack/xdsl/{x}/resiliationTerms` |
| GET | `/pack/xdsl/{x}/serviceInfos` |
| PUT | `/pack/xdsl/{x}/serviceInfos` |
| GET | `/pack/xdsl/{x}/services` |
| GET | `/pack/xdsl/{x}/shippingAddresses` |
| GET | `/pack/xdsl/{x}/subServices` |
| GET | `/pack/xdsl/{x}/subServices/{x}` |
| GET | `/pack/xdsl/{x}/subServices/{x}/keepServiceTerms` |
| GET | `/pack/xdsl/{x}/tasks` |
| GET | `/pack/xdsl/{x}/tasks/{x}` |
| GET | `/pack/xdsl/{x}/voipBillingAccount/services` |
| GET | `/pack/xdsl/{x}/voipEcofax/services` |
| POST | `/pack/xdsl/{x}/voipEcofax/services` |
| POST | `/pack/xdsl/{x}/voipLine/options/customShippingAddress` |
| GET | `/pack/xdsl/{x}/voipLine/options/hardwares` |
| GET | `/pack/xdsl/{x}/voipLine/options/shippingAddresses` |
| GET | `/pack/xdsl/{x}/voipLine/services` |
| POST | `/pack/xdsl/{x}/voipLine/services` |
| GET | `/pack/xdsl/{x}/voipLine/services/{x}` |
| GET | `/pack/xdsl/{x}/xdslAccess/services` |

### me (v1) — 146 manquants

_Nodes associés : OvhCloudMe_

| Méthode | Chemin |
|--------|--------|
| PUT | `/me` |
| DELETE | `/me/accessRestriction/backupCode` |
| PUT | `/me/accessRestriction/ipDefaultRule` |
| PUT | `/me/accessRestriction/sms/{x}` |
| POST | `/me/accessRestriction/u2f/{x}/validate` |
| POST | `/me/account` |
| DELETE | `/me/api/application/{x}` |
| DELETE | `/me/api/credential/{x}` |
| PUT | `/me/api/credential/{x}` |
| POST | `/me/api/log/subscription` |
| DELETE | `/me/api/log/subscription/{x}` |
| POST | `/me/api/log/url` |
| POST | `/me/api/oauth2/client` |
| DELETE | `/me/api/oauth2/client/{x}` |
| PUT | `/me/api/oauth2/client/{x}` |
| POST | `/me/autorenew` |
| PUT | `/me/autorenew` |
| POST | `/me/bill/{x}/debt/pay` |
| POST | `/me/bill/export` |
| POST | `/me/billing/group` |
| DELETE | `/me/billing/group/{x}` |
| PUT | `/me/billing/group/{x}` |
| POST | `/me/billing/group/{x}/service` |
| DELETE | `/me/billing/group/{x}/service/{x}` |
| GET | `/me/billing/invoicesByPostalMail` |
| POST | `/me/billing/invoicesByPostalMail` |
| POST | `/me/billing/purchaseOrder` |
| DELETE | `/me/billing/purchaseOrder/{x}` |
| PUT | `/me/billing/purchaseOrder/{x}` |
| POST | `/me/billing/report/consumption` |
| POST | `/me/carbonCalculator/task` |
| POST | `/me/changeEmail` |
| POST | `/me/changePassword` |
| PUT | `/me/consent/{x}/decision` |
| POST | `/me/contact` |
| PUT | `/me/contact/{x}` |
| POST | `/me/correctiveInvoice/{x}/debt/pay` |
| POST | `/me/credit/code` |
| POST | `/me/debtAccount/debt/{x}/pay` |
| POST | `/me/debtAccount/pay` |
| GET | `/me/deposit/{x}/paidBills/{x}/debt` |
| GET | `/me/deposit/{x}/paidBills/{x}/debt/operation` |
| GET | `/me/deposit/{x}/paidBills/{x}/debt/operation/{x}` |
| GET | `/me/deposit/{x}/paidBills/{x}/debt/operation/{x}/associatedObject` |
| POST | `/me/deposit/{x}/paidBills/{x}/debt/pay` |
| GET | `/me/deposit/{x}/paidBills/{x}/details` |
| GET | `/me/deposit/{x}/paidBills/{x}/details/{x}` |
| GET | `/me/deposit/{x}/paidBills/{x}/payment` |
| POST | `/me/document` |
| DELETE | `/me/document/{x}` |
| PUT | `/me/document/{x}` |
| POST | `/me/document/cors` |
| POST | `/me/fax/customDomains` |
| DELETE | `/me/fax/customDomains/{x}` |
| PUT | `/me/fidelityAccount` |
| POST | `/me/fidelityAccount/creditOrder` |
| POST | `/me/geolocation` |
| POST | `/me/identity/group` |
| DELETE | `/me/identity/group/{x}` |
| PUT | `/me/identity/group/{x}` |
| POST | `/me/identity/group/{x}/user` |
| DELETE | `/me/identity/group/{x}/user/{x}` |
| DELETE | `/me/identity/provider` |
| POST | `/me/identity/provider` |
| PUT | `/me/identity/provider` |
| POST | `/me/identity/user` |
| DELETE | `/me/identity/user/{x}` |
| PUT | `/me/identity/user/{x}` |
| POST | `/me/identity/user/{x}/disable` |
| POST | `/me/identity/user/{x}/enable` |
| POST | `/me/identity/user/{x}/token` |
| DELETE | `/me/identity/user/{x}/token/{x}` |
| PUT | `/me/identity/user/{x}/token/{x}` |
| GET | `/me/incident/sbg/migrateServices` |
| POST | `/me/incident/sbg/migrateServices` |
| POST | `/me/ipOrganisation` |
| DELETE | `/me/ipOrganisation/{x}` |
| PUT | `/me/ipOrganisation/{x}` |
| POST | `/me/logs/audit/log/subscription` |
| DELETE | `/me/logs/audit/log/subscription/{x}` |
| POST | `/me/logs/audit/log/url` |
| POST | `/me/mailingList/subscribe` |
| PUT | `/me/marketing` |
| POST | `/me/migration/{x}/contract/{x}/accept` |
| POST | `/me/order/{x}/balance` |
| DELETE | `/me/order/{x}/balance/{x}` |
| POST | `/me/order/{x}/debt/pay` |
| POST | `/me/order/{x}/pay` |
| POST | `/me/order/{x}/payWithRegisteredPaymentMean` |
| POST | `/me/order/{x}/retraction` |
| POST | `/me/order/{x}/waiveRetraction` |
| PUT | `/me/ovhAccount/{x}` |
| POST | `/me/ovhAccount/{x}/creditOrder` |
| POST | `/me/ovhAccount/{x}/movements/{x}/requestRefund` |
| POST | `/me/ovhAccount/{x}/retrieveMoney` |
| POST | `/me/passwordRecover` |
| POST | `/me/payment/method` |
| DELETE | `/me/payment/method/{x}` |
| PUT | `/me/payment/method/{x}` |
| POST | `/me/payment/method/{x}/challenge` |
| POST | `/me/payment/method/{x}/details` |
| POST | `/me/payment/method/{x}/finalize` |
| POST | `/me/paymentMean/bankAccount` |
| DELETE | `/me/paymentMean/bankAccount/{x}` |
| PUT | `/me/paymentMean/bankAccount/{x}` |
| POST | `/me/paymentMean/bankAccount/{x}/challenge` |
| POST | `/me/paymentMean/bankAccount/{x}/chooseAsDefaultPaymentMean` |
| POST | `/me/paymentMean/creditCard` |
| DELETE | `/me/paymentMean/creditCard/{x}` |
| PUT | `/me/paymentMean/creditCard/{x}` |
| POST | `/me/paymentMean/creditCard/{x}/challenge` |
| POST | `/me/paymentMean/creditCard/{x}/chooseAsDefaultPaymentMean` |
| PUT | `/me/paymentMean/deferredPaymentAccount/{x}` |
| POST | `/me/paymentMean/deferredPaymentAccount/{x}/chooseAsDefaultPaymentMean` |
| POST | `/me/paymentMean/paypal` |
| DELETE | `/me/paymentMean/paypal/{x}` |
| PUT | `/me/paymentMean/paypal/{x}` |
| POST | `/me/paymentMean/paypal/{x}/challenge` |
| POST | `/me/paymentMean/paypal/{x}/chooseAsDefaultPaymentMean` |
| POST | `/me/refund/export` |
| POST | `/me/sla/{x}/apply` |
| POST | `/me/sshKey` |
| DELETE | `/me/sshKey/{x}` |
| POST | `/me/subAccount` |
| PUT | `/me/subAccount/{x}` |
| POST | `/me/subAccount/{x}/createConsumerKey` |
| PUT | `/me/subscription/{x}` |
| POST | `/me/tag` |
| DELETE | `/me/tag/{x}` |
| POST | `/me/task/contactChange/{x}/accept` |
| POST | `/me/task/contactChange/{x}/refuse` |
| POST | `/me/task/contactChange/{x}/resendEmail` |
| POST | `/me/task/dns/{x}/accelerate` |
| POST | `/me/task/dns/{x}/cancel` |
| POST | `/me/task/dns/{x}/relaunch` |
| POST | `/me/task/domain/{x}/accelerate` |
| PUT | `/me/task/domain/{x}/argument/{x}` |
| POST | `/me/task/domain/{x}/cancel` |
| POST | `/me/task/domain/{x}/relaunch` |
| POST | `/me/task/emailChange/{x}/accept` |
| POST | `/me/task/emailChange/{x}/refuse` |
| POST | `/me/telephony/defaultIpRestriction` |
| DELETE | `/me/telephony/defaultIpRestriction/{x}` |
| POST | `/me/telephony/settings` |
| POST | `/me/voucher/checkValidity` |
| POST | `/me/xdsl/setting` |

### metrics (v1) — 4 manquants

_Nodes associés : OvhCloudMetrics_

| Méthode | Chemin |
|--------|--------|
| POST | `/metrics/{x}/lookup/token` |
| GET | `/metrics/{x}/serviceInfos` |
| PUT | `/metrics/{x}/serviceInfos` |
| POST | `/metrics/{x}/terminate` |

### hosting (v1) — 48 manquants

_Nodes associés : OvhCloudHosting_

| Méthode | Chemin |
|--------|--------|
| GET | `/hosting/web/{x}/cdn` |
| GET | `/hosting/web/{x}/cdn/availableOptions` |
| GET | `/hosting/web/{x}/cdn/domain` |
| GET | `/hosting/web/{x}/cdn/domain/{x}` |
| GET | `/hosting/web/{x}/cdn/domain/{x}/logs` |
| GET | `/hosting/web/{x}/cdn/domain/{x}/option` |
| POST | `/hosting/web/{x}/cdn/domain/{x}/option` |
| DELETE | `/hosting/web/{x}/cdn/domain/{x}/option/{x}` |
| GET | `/hosting/web/{x}/cdn/domain/{x}/option/{x}` |
| PUT | `/hosting/web/{x}/cdn/domain/{x}/option/{x}` |
| POST | `/hosting/web/{x}/cdn/domain/{x}/purge` |
| POST | `/hosting/web/{x}/cdn/domain/{x}/refresh` |
| GET | `/hosting/web/{x}/cdn/domain/{x}/statistics` |
| GET | `/hosting/web/{x}/cdn/operation` |
| GET | `/hosting/web/{x}/cdn/operation/{x}` |
| GET | `/hosting/web/{x}/cdn/serviceInfos` |
| POST | `/hosting/web/{x}/cdn/serviceInfosUpdate` |
| POST | `/hosting/web/{x}/cdn/terminate` |
| POST | `/hosting/web/{x}/database` |
| DELETE | `/hosting/web/{x}/database/{x}` |
| GET | `/hosting/web/{x}/database/{x}/capabilities` |
| POST | `/hosting/web/{x}/database/{x}/changePassword` |
| GET | `/hosting/web/{x}/database/{x}/copy` |
| POST | `/hosting/web/{x}/database/{x}/copy` |
| DELETE | `/hosting/web/{x}/database/{x}/copy/{x}` |
| GET | `/hosting/web/{x}/database/{x}/copy/{x}` |
| POST | `/hosting/web/{x}/database/{x}/copyRestore` |
| GET | `/hosting/web/{x}/database/{x}/dump` |
| POST | `/hosting/web/{x}/database/{x}/dump` |
| DELETE | `/hosting/web/{x}/database/{x}/dump/{x}` |
| GET | `/hosting/web/{x}/database/{x}/dump/{x}` |
| POST | `/hosting/web/{x}/database/{x}/dump/{x}/restore` |
| POST | `/hosting/web/{x}/database/{x}/import` |
| GET | `/hosting/web/{x}/database/{x}/metricsToken` |
| POST | `/hosting/web/{x}/database/{x}/request` |
| POST | `/hosting/web/{x}/database/{x}/restore` |
| GET | `/hosting/web/{x}/database/{x}/statistics` |
| PUT | `/hosting/web/{x}/user/{x}` |
| GET | `/hosting/web/{x}/website` |
| POST | `/hosting/web/{x}/website` |
| DELETE | `/hosting/web/{x}/website/{x}` |
| GET | `/hosting/web/{x}/website/{x}` |
| PUT | `/hosting/web/{x}/website/{x}` |
| POST | `/hosting/web/{x}/website/{x}/deploy` |
| GET | `/hosting/web/{x}/website/{x}/deployment` |
| GET | `/hosting/web/{x}/website/{x}/deployment/{x}` |
| GET | `/hosting/web/{x}/website/{x}/deployment/{x}/logs` |
| GET | `/hosting/web/{x}/websiteCreationCapabilities` |

### ovhCloudConnect (v1) — 12 manquants

_Nodes associés : OvhCloudOvhCloudConnect_

| Méthode | Chemin |
|--------|--------|
| GET | `/ovhCloudConnect/{x}/datacenter` |
| GET | `/ovhCloudConnect/{x}/datacenter/{x}` |
| POST | `/ovhCloudConnect/{x}/loa` |
| GET | `/ovhCloudConnect/{x}/serviceInfos` |
| PUT | `/ovhCloudConnect/{x}/serviceInfos` |
| GET | `/ovhCloudConnect/{x}/serviceKey` |
| GET | `/ovhCloudConnect/{x}/serviceKey/{x}` |
| POST | `/ovhCloudConnect/{x}/serviceKey/{x}/regenerate` |
| POST | `/ovhCloudConnect/{x}/serviceKey/{x}/send` |
| GET | `/ovhCloudConnect/{x}/task` |
| GET | `/ovhCloudConnect/{x}/task/{x}` |
| POST | `/ovhCloudConnect/{x}/terminate` |

### freefax (v1) — 1 manquant

_Nodes associés : OvhCloudFreefax_

| Méthode | Chemin |
|--------|--------|
| GET | `/freefax/{x}/directory/getDirectoryServiceCode` |

### cluster (v1) — 1 manquant

_Nodes associés : OvhCloudClusterHadoop, OvhCloudCluster_

| Méthode | Chemin |
|--------|--------|
| GET | `/cluster/hadoop/{x}/node` |

### horizonView (v1) — 1 manquant

_Nodes associés : OvhCloudHorizonView_

| Méthode | Chemin |
|--------|--------|
| PUT | `/horizonView/{x}/serviceInfos` |

### ip (v1) — 1 manquant

_Nodes associés : OvhCloudIp_

| Méthode | Chemin |
|--------|--------|
| GET | `/ip/{x}/reverse/{x}` |

## Notes

- Le mapping spec→node est un tableau manuel (`SPEC_TO_NODES` dans `scripts/compare-coverage.js`).
- La couverture est calculée sur les couples (méthode, chemin normalisé). Un endpoint est couvert dès qu’un fichier d’opération du node associé l’appelle.
- Placeholders `{param}` normalisés en `{x}` (les noms de paramètres ne sont pas comparés).
- Voir les limites détaillées dans l’en-tête de `scripts/compare-coverage.js`.

# OVHcloud API Coverage Report

> Généré par `scripts/compare-coverage.js` le 2026-08-07T19:36:35.596Z. Document généré automatiquement — ne pas éditer à la main.

Ce rapport compare les endpoints déclarés dans les specs Swagger 2.0 (`docs/api-specs/v1|v2/*.json`) avec les appels HTTP réellement présents dans les nodes (`nodes/**/*.operation.ts`).

## Résumé

- **Specs analysées** : 84 (v1: 70, v2: 14)
- **Endpoints déclarés (specs avec endpoints)** : 6624
- **Endpoints couverts par les nodes** : 5647
- **Couverture globale** : **85.3%**
- **Specs sans node associé** : 1
- **Specs placeholder (aucun endpoint)** : 1

## Couverture par spec

Triée par pourcentage croissant (moins bonne couverture en premier).

| Spec (version) | Total | Couverts | Manquants | % |
|----------------|------:|---------:|----------:|---:|
| packSiptrunk (v1) | 5 | 0 | 5 | 0% |
| sslGateway (v1) | 23 | 6 | 17 | 26.1% |
| veeam (v1) | 10 | 5 | 5 | 50% |
| pack (v1) | 58 | 33 | 25 | 56.9% |
| me (v1) | 379 | 233 | 146 | 61.5% |
| cloud (v1) | 1121 | 710 | 411 | 63.3% |
| order (v1) | 816 | 538 | 278 | 65.9% |
| licenseOffice (v1) | 16 | 11 | 5 | 68.8% |
| licenseOfficePrepaid (v1) | 16 | 11 | 5 | 68.8% |
| metrics (v1) | 16 | 12 | 4 | 75% |
| ovhCloudConnect (v1) | 54 | 42 | 12 | 77.8% |
| licenseRedhat (v1) | 9 | 7 | 2 | 77.8% |
| hosting (v1) | 198 | 167 | 31 | 84.3% |
| licenseCpanel (v1) | 13 | 11 | 2 | 84.6% |
| licenseDirectadmin (v1) | 14 | 12 | 2 | 85.7% |
| licenseWindows (v1) | 14 | 12 | 2 | 85.7% |
| licensePlesk (v1) | 16 | 14 | 2 | 87.5% |
| licenseVirtuozzo (v1) | 16 | 14 | 2 | 87.5% |
| dedicated (v1) | 131 | 116 | 15 | 88.5% |
| licenseCloudLinux (v1) | 9 | 8 | 1 | 88.9% |
| licenseSqlserver (v1) | 9 | 8 | 1 | 88.9% |
| cluster (v1) | 43 | 42 | 1 | 97.7% |
| horizonView (v1) | 43 | 42 | 1 | 97.7% |
| email (v1) | 60 | 59 | 1 | 98.3% |
| ip (v1) | 81 | 80 | 1 | 98.8% |
| telephony (v1) | 607 | 607 | 0 | 100% |
| price (v1) | 581 | 581 | 0 | 100% |
| dedicatedCloud (v1) | 305 | 305 | 0 | 100% |
| emailExchange (v1) | 203 | 203 | 0 | 100% |
| xdsl (v1) | 142 | 142 | 0 | 100% |
| sms (v1) | 124 | 124 | 0 | 100% |
| ipLoadbalancing (v1) | 121 | 121 | 0 | 100% |
| dbaas (v1) | 116 | 116 | 0 | 100% |
| domain (v1) | 110 | 110 | 0 | 100% |
| emailDomain (v1) | 107 | 107 | 0 | 100% |
| vps (v1) | 94 | 94 | 0 | 100% |
| hostingPrivateDatabase (v1) | 72 | 72 | 0 | 100% |
| vrack (v1) | 68 | 68 | 0 | 100% |
| msServices (v1) | 55 | 55 | 0 | 100% |
| overTheBox (v1) | 50 | 50 | 0 | 100% |
| services (v1) | 47 | 47 | 0 | 100% |
| storage (v1) | 47 | 47 | 0 | 100% |
| emailMxplan (v1) | 46 | 46 | 0 | 100% |
| cdn (v1) | 44 | 44 | 0 | 100% |
| dedicatedNasha (v1) | 39 | 39 | 0 | 100% |
| dedicatedCeph (v1) | 35 | 35 | 0 | 100% |
| okms (v2) | 32 | 32 | 0 | 100% |
| vmwareCloudDirector (v2) | 32 | 32 | 0 | 100% |
| iam (v2) | 31 | 31 | 0 | 100% |
| zimbra (v2) | 30 | 30 | 0 | 100% |
| connectivity (v1) | 28 | 28 | 0 | 100% |
| freefax (v1) | 19 | 19 | 0 | 100% |
| saas (v1) | 19 | 19 | 0 | 100% |
| notification (v2) | 19 | 19 | 0 | 100% |
| dedicatedHousing (v1) | 18 | 18 | 0 | 100% |
| nutanix (v1) | 17 | 17 | 0 | 100% |
| managedCMS (v2) | 17 | 17 | 0 | 100% |
| publicCloud (v2) | 17 | 17 | 0 | 100% |
| backupServices (v2) | 15 | 15 | 0 | 100% |
| veeamCloudConnect (v1) | 14 | 14 | 0 | 100% |
| license (v1) | 13 | 13 | 0 | 100% |
| licenseHycu (v1) | 10 | 10 | 0 | 100% |
| webhosting (v2) | 10 | 10 | 0 | 100% |
| dedicatedCluster (v1) | 9 | 9 | 0 | 100% |
| dedicatedInstallationTemplate (v1) | 9 | 9 | 0 | 100% |
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

- **packSiptrunk** (`/pack/siptrunk`, v1) — 5 endpoints, 5 manquants

Sans node également, mais sans endpoints déclarés (voir section placeholder) :

- **products** (`/products`, v1)

## Specs placeholder (fichier sans endpoints)

Fichiers de spec présents dans le dossier mais avec `apis: []` (spec absente / non téléchargée). Ils ne sont pas comptés dans la couverture :

- **products** (`/products`, v1)

## Endpoints manquants

Endpoints déclarés dans les specs mais non appelés par les nodes, groupés par spec :

### packSiptrunk (v1) — 5 manquants

_Nodes associés : (aucun node)_

| Méthode | Chemin |
|--------|--------|
| GET | `/pack/siptrunk` |
| GET | `/pack/siptrunk/{x}` |
| POST | `/pack/siptrunk/{x}/changeContact` |
| GET | `/pack/siptrunk/{x}/serviceInfos` |
| PUT | `/pack/siptrunk/{x}/serviceInfos` |

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

### veeam (v1) — 5 manquants

_Nodes associés : OvhCloudVeeamEnterprisePlus_

| Méthode | Chemin |
|--------|--------|
| PUT | `/veeam/veeamEnterprise/{x}/serviceInfos` |
| GET | `/veeam/veeamEnterprise/{x}/task` |
| GET | `/veeam/veeamEnterprise/{x}/task/{x}` |
| POST | `/veeam/veeamEnterprise/{x}/terminate` |
| POST | `/veeam/veeamEnterprise/{x}/update` |

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

### cloud (v1) — 411 manquants

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
| POST | `/cloud/project/{x}/ai/data/region/{x}/alias` |
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
| GET | `/cloud/project/{x}/alerting/{x}/alert` |
| GET | `/cloud/project/{x}/alerting/{x}/alert/{x}` |
| GET | `/cloud/project/{x}/capabilities/containerRegistry` |
| GET | `/cloud/project/{x}/capabilities/kube/admissionplugins` |
| GET | `/cloud/project/{x}/capabilities/kube/flavors` |
| GET | `/cloud/project/{x}/capabilities/kube/log/kind` |
| GET | `/cloud/project/{x}/capabilities/kube/log/kind/{x}` |
| GET | `/cloud/project/{x}/capabilities/kube/regions` |
| GET | `/cloud/project/{x}/capabilities/loadbalancer/region` |
| GET | `/cloud/project/{x}/capabilities/loadbalancer/region/{x}` |
| GET | `/cloud/project/{x}/capabilities/productAvailability` |
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
| GET | `/cloud/project/{x}/database/availability` |
| GET | `/cloud/project/{x}/database/capabilities` |
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
| GET | `/cloud/project/{x}/database/kafkaMirrorMaker/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/postgresql/{x}/enableWrites` |
| POST | `/cloud/project/{x}/database/postgresql/{x}/prometheus/credentials/reset` |
| GET | `/cloud/project/{x}/database/service` |
| GET | `/cloud/project/{x}/database/service/{x}` |
| GET | `/cloud/project/{x}/database/valkey` |
| POST | `/cloud/project/{x}/database/valkey` |
| DELETE | `/cloud/project/{x}/database/valkey/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}` |
| PUT | `/cloud/project/{x}/database/valkey/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/advancedConfiguration` |
| PUT | `/cloud/project/{x}/database/valkey/{x}/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/valkey/{x}/backup` |
| GET | `/cloud/project/{x}/database/valkey/{x}/backup/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/advancedConfiguration` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/backupRegions` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/categories` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/commands` |
| GET | `/cloud/project/{x}/database/valkey/{x}/capabilities/integration` |
| GET | `/cloud/project/{x}/database/valkey/{x}/integration` |
| POST | `/cloud/project/{x}/database/valkey/{x}/integration` |
| DELETE | `/cloud/project/{x}/database/valkey/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/integration/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/log/kind` |
| GET | `/cloud/project/{x}/database/valkey/{x}/log/kind/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/log/subscription` |
| POST | `/cloud/project/{x}/database/valkey/{x}/log/subscription` |
| DELETE | `/cloud/project/{x}/database/valkey/{x}/log/subscription/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/log/subscription/{x}` |
| POST | `/cloud/project/{x}/database/valkey/{x}/log/url` |
| GET | `/cloud/project/{x}/database/valkey/{x}/logs` |
| GET | `/cloud/project/{x}/database/valkey/{x}/maintenance` |
| GET | `/cloud/project/{x}/database/valkey/{x}/maintenance/{x}` |
| POST | `/cloud/project/{x}/database/valkey/{x}/maintenance/{x}/apply` |
| GET | `/cloud/project/{x}/database/valkey/{x}/metric` |
| GET | `/cloud/project/{x}/database/valkey/{x}/metric/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/node` |
| GET | `/cloud/project/{x}/database/valkey/{x}/node/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/prometheus` |
| POST | `/cloud/project/{x}/database/valkey/{x}/prometheus/credentials/reset` |
| GET | `/cloud/project/{x}/database/valkey/{x}/user` |
| POST | `/cloud/project/{x}/database/valkey/{x}/user` |
| DELETE | `/cloud/project/{x}/database/valkey/{x}/user/{x}` |
| GET | `/cloud/project/{x}/database/valkey/{x}/user/{x}` |
| PUT | `/cloud/project/{x}/database/valkey/{x}/user/{x}` |
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
| POST | `/cloud/project/{x}/kube` |
| POST | `/cloud/project/{x}/lab/{x}` |
| GET | `/cloud/project/{x}/loadbalancer` |
| POST | `/cloud/project/{x}/loadbalancer` |
| DELETE | `/cloud/project/{x}/loadbalancer/{x}` |
| GET | `/cloud/project/{x}/loadbalancer/{x}` |
| PUT | `/cloud/project/{x}/loadbalancer/{x}` |
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
| GET | `/cloud/project/{x}/quantum/capabilities/region` |
| GET | `/cloud/project/{x}/quantum/capabilities/region/{x}` |
| GET | `/cloud/project/{x}/quantum/capabilities/region/{x}/qpu` |
| GET | `/cloud/project/{x}/quantum/capabilities/region/{x}/qpu/{x}` |
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
| GET | `/cloud/project/{x}/role` |
| GET | `/cloud/project/{x}/serviceInfos` |
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
| GET | `/cloud/project/{x}/vrack` |

### order (v1) — 278 manquants

_Nodes associés : OvhCloudOrder_

| Méthode | Chemin |
|--------|--------|
| GET | `/order/cart` |
| POST | `/order/cart` |
| GET | `/order/cartServiceOption/backupServices/{x}` |
| GET | `/order/cartServiceOption/baremetalServers/{x}` |
| GET | `/order/cartServiceOption/cloud/{x}` |
| GET | `/order/cartServiceOption/dedicated/{x}` |
| GET | `/order/cartServiceOption/dns/{x}` |
| GET | `/order/cartServiceOption/domain/{x}` |
| GET | `/order/cartServiceOption/emailpro/{x}` |
| GET | `/order/cartServiceOption/ipLoadbalancing/{x}` |
| GET | `/order/cartServiceOption/licenseHycu/{x}` |
| GET | `/order/cartServiceOption/logs/{x}` |
| GET | `/order/cartServiceOption/microsoft/{x}` |
| GET | `/order/cartServiceOption/microsoftExchange/{x}` |
| GET | `/order/cartServiceOption/nutanix/{x}` |
| GET | `/order/cartServiceOption/office365Prepaid/{x}` |
| GET | `/order/cartServiceOption/officePrepaid/{x}` |
| GET | `/order/cartServiceOption/privateCloud/{x}` |
| GET | `/order/cartServiceOption/privateCloudEnterprise/{x}` |
| GET | `/order/cartServiceOption/privateCloudReseller/{x}` |
| GET | `/order/cartServiceOption/privateCloudResellerEnterprise/{x}` |
| GET | `/order/cartServiceOption/sharepoint/{x}` |
| GET | `/order/cartServiceOption/sms/{x}` |
| GET | `/order/cartServiceOption/sncNetworkServices/{x}` |
| GET | `/order/cartServiceOption/sslGateway/{x}` |
| GET | `/order/cartServiceOption/vdi/{x}` |
| GET | `/order/cartServiceOption/vmwareCloudDirector/{x}` |
| GET | `/order/cartServiceOption/vmwareCloudDirectorBackup/{x}` |
| GET | `/order/cartServiceOption/vps/{x}` |
| GET | `/order/cartServiceOption/vrack/{x}` |
| GET | `/order/cartServiceOption/webHosting/{x}` |
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
| GET | `/order/cloud/project/{x}/credit` |
| POST | `/order/cloud/project/{x}/credit` |
| GET | `/order/dedicated/housing` |
| GET | `/order/dedicated/housing/{x}/APC` |
| GET | `/order/dedicated/server` |
| GET | `/order/dedicated/server/{x}/backupStorage` |
| GET | `/order/dedicated/server/{x}/bandwidth` |
| GET | `/order/dedicated/server/{x}/bandwidthvRack` |
| GET | `/order/dedicated/server/{x}/feature` |
| GET | `/order/dedicated/server/{x}/firewall` |
| GET | `/order/dedicated/server/{x}/ipMigration` |
| GET | `/order/dedicated/server/{x}/kvm` |
| GET | `/order/dedicated/server/{x}/kvmExpress` |
| GET | `/order/dedicated/server/{x}/professionalUse` |
| GET | `/order/dedicated/server/{x}/traffic` |
| GET | `/order/dedicated/server/{x}/usbKey` |
| GET | `/order/dedicatedCloud` |
| GET | `/order/dedicatedCloud/{x}/additionalBandwidth` |
| GET | `/order/dedicatedCloud/{x}/filer` |
| GET | `/order/dedicatedCloud/{x}/host` |
| GET | `/order/dedicatedCloud/{x}/ip` |
| GET | `/order/dedicatedCloud/{x}/upgradeRessource` |
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
| GET | `/order/telephony/lines` |
| GET | `/order/telephony/trunks` |
| GET | `/order/upgrade/bandwidthVrack/{x}` |
| GET | `/order/upgrade/bandwidthVrack/{x}/{x}` |
| POST | `/order/upgrade/bandwidthVrack/{x}/{x}` |
| GET | `/order/upgrade/baremetalPrivateBandwidth/{x}` |
| GET | `/order/upgrade/baremetalPrivateBandwidth/{x}/{x}` |
| POST | `/order/upgrade/baremetalPrivateBandwidth/{x}/{x}` |
| GET | `/order/upgrade/baremetalPublicBandwidth/{x}` |
| GET | `/order/upgrade/baremetalPublicBandwidth/{x}/{x}` |
| POST | `/order/upgrade/baremetalPublicBandwidth/{x}/{x}` |
| GET | `/order/upgrade/cephaas/{x}` |
| GET | `/order/upgrade/cephaas/{x}/{x}` |
| POST | `/order/upgrade/cephaas/{x}/{x}` |
| GET | `/order/upgrade/cloudDB/{x}` |
| GET | `/order/upgrade/cloudDB/{x}/{x}` |
| POST | `/order/upgrade/cloudDB/{x}/{x}` |
| GET | `/order/upgrade/emailDomain/{x}` |
| GET | `/order/upgrade/emailDomain/{x}/{x}` |
| POST | `/order/upgrade/emailDomain/{x}/{x}` |
| GET | `/order/upgrade/ipLoadbalancing/{x}` |
| GET | `/order/upgrade/ipLoadbalancing/{x}/{x}` |
| POST | `/order/upgrade/ipLoadbalancing/{x}/{x}` |
| GET | `/order/upgrade/licensecPanel/{x}` |
| GET | `/order/upgrade/licensecPanel/{x}/{x}` |
| POST | `/order/upgrade/licensecPanel/{x}/{x}` |
| GET | `/order/upgrade/licenseHycu/{x}` |
| GET | `/order/upgrade/licenseHycu/{x}/{x}` |
| POST | `/order/upgrade/licenseHycu/{x}/{x}` |
| GET | `/order/upgrade/licensePlesk/{x}` |
| GET | `/order/upgrade/licensePlesk/{x}/{x}` |
| POST | `/order/upgrade/licensePlesk/{x}/{x}` |
| GET | `/order/upgrade/logs/{x}` |
| GET | `/order/upgrade/logs/{x}/{x}` |
| POST | `/order/upgrade/logs/{x}/{x}` |
| GET | `/order/upgrade/metrics/{x}` |
| GET | `/order/upgrade/metrics/{x}/{x}` |
| POST | `/order/upgrade/metrics/{x}/{x}` |
| GET | `/order/upgrade/microsoftExchange/{x}` |
| GET | `/order/upgrade/microsoftExchange/{x}/{x}` |
| POST | `/order/upgrade/microsoftExchange/{x}/{x}` |
| GET | `/order/upgrade/privateCloud/{x}` |
| GET | `/order/upgrade/privateCloud/{x}/{x}` |
| POST | `/order/upgrade/privateCloud/{x}/{x}` |
| GET | `/order/upgrade/privateCloudManagementFee/{x}` |
| GET | `/order/upgrade/privateCloudManagementFee/{x}/{x}` |
| POST | `/order/upgrade/privateCloudManagementFee/{x}/{x}` |
| GET | `/order/upgrade/privateSQL/{x}` |
| GET | `/order/upgrade/privateSQL/{x}/{x}` |
| POST | `/order/upgrade/privateSQL/{x}/{x}` |
| GET | `/order/upgrade/sslGateway/{x}` |
| GET | `/order/upgrade/sslGateway/{x}/{x}` |
| POST | `/order/upgrade/sslGateway/{x}/{x}` |
| GET | `/order/upgrade/vps/{x}` |
| GET | `/order/upgrade/vps/{x}/{x}` |
| POST | `/order/upgrade/vps/{x}/{x}` |
| GET | `/order/upgrade/vpsAdditionalDisk/{x}` |
| GET | `/order/upgrade/vpsAdditionalDisk/{x}/{x}` |
| POST | `/order/upgrade/vpsAdditionalDisk/{x}/{x}` |
| GET | `/order/upgrade/webHosting/{x}` |
| GET | `/order/upgrade/webHosting/{x}/{x}` |
| POST | `/order/upgrade/webHosting/{x}/{x}` |
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

### licenseOffice (v1) — 5 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/office/{x}` |
| PUT | `/license/office/{x}/serviceInfos` |
| POST | `/license/office/{x}/user` |
| PUT | `/license/office/{x}/user/{x}` |
| POST | `/license/office/{x}/user/{x}/changePassword` |

### licenseOfficePrepaid (v1) — 5 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/officePrepaid/{x}` |
| POST | `/license/officePrepaid/{x}/changePassword` |
| PUT | `/license/officePrepaid/{x}/parentTenant` |
| POST | `/license/officePrepaid/{x}/parentTenant/createAttestation` |
| PUT | `/license/officePrepaid/{x}/serviceInfos` |

### metrics (v1) — 4 manquants

_Nodes associés : OvhCloudMetrics_

| Méthode | Chemin |
|--------|--------|
| POST | `/metrics/{x}/lookup/token` |
| GET | `/metrics/{x}/serviceInfos` |
| PUT | `/metrics/{x}/serviceInfos` |
| POST | `/metrics/{x}/terminate` |

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

### licenseRedhat (v1) — 2 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/redhat/{x}` |
| PUT | `/license/redhat/{x}/serviceInfos` |

### hosting (v1) — 31 manquants

_Nodes associés : OvhCloudHosting_

| Méthode | Chemin |
|--------|--------|
| POST | `/hosting/web/{x}/cdn/serviceInfosUpdate` |
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

### licenseCpanel (v1) — 2 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/cpanel/{x}` |
| PUT | `/license/cpanel/{x}/serviceInfos` |

### licenseDirectadmin (v1) — 2 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/directadmin/{x}` |
| PUT | `/license/directadmin/{x}/serviceInfos` |

### licenseWindows (v1) — 2 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/windows/{x}` |
| PUT | `/license/windows/{x}/serviceInfos` |

### licensePlesk (v1) — 2 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/plesk/{x}` |
| PUT | `/license/plesk/{x}/serviceInfos` |

### licenseVirtuozzo (v1) — 2 manquants

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/virtuozzo/{x}` |
| PUT | `/license/virtuozzo/{x}/serviceInfos` |

### dedicated (v1) — 15 manquants

_Nodes associés : OvhCloudDedicated_

| Méthode | Chemin |
|--------|--------|
| GET | `/dedicated/server/{x}/backupCloudOfferDetails` |
| GET | `/dedicated/server/{x}/burst` |
| POST | `/dedicated/server/{x}/features/ipmi/access` |
| POST | `/dedicated/server/{x}/features/ipmi/resetInterface` |
| POST | `/dedicated/server/{x}/features/ipmi/resetSessions` |
| POST | `/dedicated/server/{x}/features/ipmi/test` |
| POST | `/dedicated/server/{x}/ola/reset` |
| POST | `/dedicated/server/{x}/spla/{x}/revoke` |
| POST | `/dedicated/server/{x}/support/replace/cooling` |
| POST | `/dedicated/server/{x}/support/replace/hardDiskDrive` |
| POST | `/dedicated/server/{x}/support/replace/memory` |
| POST | `/dedicated/server/{x}/task/{x}/cancel` |
| POST | `/dedicated/server/{x}/terminate` |
| POST | `/dedicated/server/{x}/virtualNetworkInterface/{x}/disable` |
| POST | `/dedicated/server/{x}/virtualNetworkInterface/{x}/enable` |

### licenseCloudLinux (v1) — 1 manquant

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/cloudLinux/{x}/serviceInfos` |

### licenseSqlserver (v1) — 1 manquant

_Nodes associés : OvhCloudLicense_

| Méthode | Chemin |
|--------|--------|
| PUT | `/license/sqlserver/{x}/serviceInfos` |

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

### email (v1) — 1 manquant

_Nodes associés : OvhCloudEmailPro, OvhCloudMxPlan_

| Méthode | Chemin |
|--------|--------|
| GET | `/email/pro/{x}/domain/{x}/dkim/{x}` |

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

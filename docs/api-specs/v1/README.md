# API Specifications — V1

> Dossier `docs/api-specs/v1/` : 70 fichiers Swagger 2.0 (`*.json`) + `_index.json`.

Chaque fichier `*.json` correspond à une famille d'endpoints OVHcloud. La couverture mesure la part des endpoints déclarés dans la spec qui sont réellement appelés par les nodes du repo.

## Couverture par spec

### 100% couvertes (implémentation complète)

| Spec              | Endpoints |   Couverts |
| ----------------- | --------: | ---------: |
| auth              |         6 |          6 |
| cdn               |        44 |         44 |
| cluster           |        43 | 42 (97.7%) |
| connectivity      |        28 |         28 |
| contact           |         2 |          2 |
| dbaas             |       116 |        116 |
| dedicatedCloud    |       305 |        305 |
| domain            |       110 |        110 |
| freefax           |        19 | 18 (94.7%) |
| horizonView       |        43 | 42 (97.7%) |
| ip                |        81 | 80 (98.8%) |
| newAccount        |         8 |          8 |
| nutanix           |        17 |         17 |
| overTheBox        |        50 |         50 |
| partner           |         2 |          2 |
| price             |       581 |        581 |
| saas              |        19 |         19 |
| secret            |         1 |          1 |
| service           |         8 |          8 |
| services          |        47 |         47 |
| sms               |       124 |        124 |
| ssl               |         6 |          6 |
| stack             |         4 |          4 |
| startup           |         2 |          2 |
| storage           |        47 |         47 |
| supply            |         1 |          1 |
| support           |         9 |          9 |
| telephony         |       607 |        607 |
| veeamCloudConnect |        14 |         14 |
| vip               |         4 |          4 |

### Partiellement couvertes

| Spec            | Total | Couverts |     % |
| --------------- | ----: | -------: | ----: |
| dedicated       |   131 |       30 | 22.9% |
| vps             |    94 |       22 | 23.4% |
| sslGateway      |    23 |        6 | 26.1% |
| xdsl            |   142 |       39 | 27.5% |
| veeam           |    10 |        5 |   50% |
| license         |    13 |        7 | 53.8% |
| pack            |    58 |       33 | 56.9% |
| me              |   379 |      233 | 61.5% |
| metrics         |    16 |       12 |   75% |
| hosting         |   198 |      150 | 75.8% |
| ovhCloudConnect |    54 |       42 | 77.8% |
| freefax         |    19 |       18 | 94.7% |
| cluster         |    43 |       42 | 97.7% |
| horizonView     |    43 |       42 | 97.7% |
| ip              |    81 |       80 | 98.8% |
| ipLoadbalancing |   121 |        9 |  7.4% |
| vrack           |    68 |        5 |  7.4% |
| msServices      |    55 |        5 |  9.1% |
| order           |   816 |       36 |  4.4% |
| email           |    60 |        2 |  3.3% |
| cloud           |  1121 |        2 |  0.2% |
| allDom          |     6 |        0 |    0% |

### Specs nouvellement téléchargées (endpoints désormais déclarés, non couverts)

Ces specs étaient des placeholders (sans `apis`) et ont été téléchargées depuis `https://api.ovh.com/1.0/{path}.json`. Leurs endpoints sont désormais déclarés mais aucun node ne les implémente encore :

| Spec                          | Endpoints déclarés |
| ----------------------------- | -----------------: |
| emailExchange                 |                203 |
| emailDomain                   |                107 |
| hostingPrivateDatabase        |                 72 |
| emailMxplan                   |                 46 |
| dedicatedNasha                |                 39 |
| dedicatedCeph                 |                 35 |
| dedicatedHousing              |                 18 |
| licenseOffice                 |                 16 |
| licenseOfficePrepaid          |                 16 |
| licensePlesk                  |                 16 |
| licenseVirtuozzo              |                 16 |
| licenseDirectadmin            |                 14 |
| licenseWindows                |                 14 |
| licenseCpanel                 |                 13 |
| licenseHycu                   |                 10 |
| dedicatedCluster              |                  9 |
| dedicatedInstallationTemplate |                  9 |
| licenseCloudLinux             |                  9 |
| licenseRedhat                 |                  9 |
| licenseSqlserver              |                  9 |
| packSiptrunk                  |                  5 |

`products` reste un placeholder légitime (aucun endpoint déclaré).

## Specs sans node associé

- **allDom** (`/allDom`) — 6 endpoints déclarés, aucun node ne les implémente.
- Les 21 specs ci-dessus ont des endpoints déclarés mais aucun node associé (voir le rapport de couverture).

## Résumé

- Specs v1 : 70 fichiers ; endpoints déclarés : **~6624** (toutes versions confondues) ; couverture globale : **48.3%**.

# OVH Cloud Domain — Create a Contact

> Opération `domainContactCreatePost` · Fichier source : `nodes/OvhCloudDomain/resources/root/domainContactCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/domain/contact` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `accreditationCountry` | string | — |
| `accreditationId` | string | — |
| `accreditationOrganism` | string | — |
| `accreditationYear` | number | — |
| `address` | json | — |
| `birthCity` | string | — |
| `birthCountry` | string | — |
| `birthDay` | string | — |
| `birthZip` | string | — |
| `cellPhone` | string | — |
| `companyNationalIdentificationNumber` | string | — |
| `email` | string | — |
| `enterpriseId` | string | — |
| `fax` | string | — |
| `firstName` | string | — |
| `gender` | options | — |
| `Female` | — | — |
| `Male` | — | — |
| `insee` | string | — |
| `language` | options | — |
| `cs_CZ` | — | — |
| `de_DE` | — | — |
| `en_AU` | — | — |
| `en_CA` | — | — |
| `en_GB` | — | — |
| `en_IE` | — | — |
| `en_US` | — | — |
| `es_ES` | — | — |
| `fi_FI` | — | — |
| `fr_CA` | — | — |
| `fr_FR` | — | — |
| `fr_MA` | — | — |
| `fr_SN` | — | — |
| `fr_TN` | — | — |
| `it_IT` | — | — |
| `lt_LT` | — | — |
| `nl_NL` | — | — |
| `pl_PL` | — | — |
| `pt_PT` | — | — |
| `lastName` | string | — |
| `legalForm` | options | — |
| `Administration` | — | — |
| `Association` | — | — |
| `Corporation` | — | — |
| `Individual` | — | — |
| `Other` | — | — |
| `Personalcorporation` | — | — |
| `legalFormCategory` | string | — |
| `nationalIdentificationNumber` | string | — |
| `nationality` | string | — |
| `organisationAccountable` | string | — |
| `organisationFunding` | string | — |
| `organisationFundingOther` | string | — |
| `organisationName` | string | — |
| `organisationRole` | string | — |
| `organisationRoleOther` | string | — |
| `organisationStaffStatus` | string | — |
| `organisationStaffStatusOther` | string | — |
| `organisationType` | string | — |
| `organisationTypeOther` | string | — |
| `phone` | string | — |
| `registrantDocumentType` | string | — |
| `registrantDocumentTypeOther` | string | — |
| `roleInOrganisation` | string | — |
| `trademarkId` | string | — |
| `vat` | string | — |
| `website` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

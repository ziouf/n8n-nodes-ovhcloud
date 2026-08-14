# OVH Cloud Partner — Register as Partner

> Opération `registerPost` · Fichier source : `nodes/OvhCloudPartner/resources/registerPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/partner` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `accountName` | string | Oui |
| `accountCity` | string | — |
| `accountCountry` | string | — |
| `accountCompanyTurnover` | number | — |
| `accountNumberOfEmployees` | options | — |
| `accountPartnerType` | options | — |
| `accountYearEstablished` | string | — |
| `contactEmail` | string | Oui |
| `contactFirstName` | string | Oui |
| `contactLastName` | string | Oui |
| `contactPhone` | string | Oui |
| `contactPosition` | options | Oui |
| `contactJobTitle` | string | — |
| `partnershipAreaOfExpertise` | json | — |
| `partnershipEmailCommunication` | boolean | — |
| `partnershipPartnersProgramReason` | string | — |
| `partnershipSalesGrowthOpportunities` | string | — |
| `partnershipSalesProjection` | number | — |
| `partnershipSupportAgreementStatement` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

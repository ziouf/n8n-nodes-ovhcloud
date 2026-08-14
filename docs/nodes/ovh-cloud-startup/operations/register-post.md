# OVH Cloud Startup — Register Startup

> Opération `registerPost` · Fichier source : `nodes/OvhCloudStartup/resources/registerPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/startup` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `awarness` | options | Oui |
| `eventCode` | string | — |
| `companyName` | string | Oui |
| `societyWebsite` | string | — |
| `employeesNumber` | options | — |
| `relatedIndustry` | options | — |
| `productName` | string | Oui |
| `projectDescription` | string | — |
| `businessModel` | string | — |
| `developmentStage` | string | — |
| `relatedTechnology` | json | — |
| `lastFundraising` | options | — |
| `plannedFundRaising` | options | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

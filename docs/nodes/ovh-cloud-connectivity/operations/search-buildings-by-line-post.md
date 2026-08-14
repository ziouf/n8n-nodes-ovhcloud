# OVH Cloud Connectivity — Search Buildings by Line

> Opération `searchBuildingsByLinePost` · Fichier source : `nodes/OvhCloudConnectivity/resources/eligibilitySearch/searchBuildingsByLinePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/connectivity/eligibility/search/buildingsByLine` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `lineNumber` | string | Oui |
| `status` | options | Oui |
| `Active` | — | — |
| `Inactive` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

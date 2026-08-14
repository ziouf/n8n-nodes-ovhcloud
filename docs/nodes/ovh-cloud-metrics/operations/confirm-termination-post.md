# OVH Cloud Metrics — Confirm Metrics Service Termination

> Opération `confirmTerminationPost` · Fichier source : `nodes/OvhCloudMetrics/resources/confirmTerminationPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/metrics/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `token` | string | Oui |
| `commentary` | string | — |
| `futureUse` | options | — |
| `Not Replacing Service` | — | — |
| `Other` | — | — |
| `Subscribe an Other Service` | — | — |
| `Subscribe Other Kind of Service With Competitor` | — | — |
| `Subscribe Similar Service With Competitor` | — | — |
| `reason` | options | — |
| `Features Dont Suit Me` | — | — |
| `Lack of Performances` | — | — |
| `Migrated to Another OVH Product` | — | — |
| `Migrated to Competitor` | — | — |
| `No Answer` | — | — |
| `Not Enough Recognition` | — | — |
| `Not Needed Anymore` | — | — |
| `Not Reliable` | — | — |
| `Product Dimension Dont Suit Me` | — | — |
| `Product Tools Dont Suit Me` | — | — |
| `Too Expensive` | — | — |
| `Too Hard to Use` | — | — |
| `Unsatisfied by Customer Support` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

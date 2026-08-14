# OVH Cloud Storage — Confirm Termination

> Opération `confirmTerminationPost` · Fichier source : `nodes/OvhCloudStorage/service/confirmTerminationPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/storage/netapp/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `commentary` | string | — |
| `commentaryFutureUse` | string | — |
| `commentaryReason` | string | — |
| `futureUse` | options | — |
| `NOT_REPLACING_SERVICE` | — | — |
| `OTHER` | — | — |
| `SUBSCRIBE_AN_OTHER_SERVICE` | — | — |
| `SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR` | — | — |
| `SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR` | — | — |
| `reason` | options | — |
| `FEATURES_DONT_SUIT_ME` | — | — |
| `LACK_OF_PERFORMANCES` | — | — |
| `MIGRATED_TO_ANOTHER_OVH_PRODUCT` | — | — |
| `MIGRATED_TO_COMPETITOR` | — | — |
| `NO_ANSWER` | — | — |
| `NOT_ENOUGH_RECOGNITION` | — | — |
| `NOT_NEEDED_ANYMORE` | — | — |
| `NOT_RELIABLE` | — | — |
| `PRODUCT_DIMENSION_DONT_SUIT_ME` | — | — |
| `PRODUCT_TOOLS_DONT_SUIT_ME` | — | — |
| `TOO_EXPENSIVE` | — | — |
| `TOO_HARD_TO_USE` | — | — |
| `UNSATIFIED_BY_CUSTOMER_SUPPORT` | — | — |
| `token` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

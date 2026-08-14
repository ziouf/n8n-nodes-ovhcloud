# OVH Cloud Order — Create CDN Dedicated CacheRule

> Opération `cdnDedicatedCacheRuleOrderCreatePost` · Fichier source : `nodes/OvhCloudOrder/cdn/cdnDedicatedCacheRuleOrderCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/cdn/dedicated/{serviceName}{duration}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `duration` | string | Oui |
| `cacheRule` | options | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

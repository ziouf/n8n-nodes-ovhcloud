# OVH Cloud Cdn — Flush Cache Rule

> Opération `cacheRuleFlushPost` · Fichier source : `nodes/OvhCloudCdn/resources/domains/cacheRuleFlushPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cdn/dedicated/{param}{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `domain` | string | Oui |
| `cacheRuleId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

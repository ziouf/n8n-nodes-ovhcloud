# OVH Cloud Cdn — Update Cache Rule

> Opération `cacheRuleUpdatePut` · Fichier source : `nodes/OvhCloudCdn/resources/domains/cacheRuleUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cdn/dedicated/{param}{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `domain` | string | Oui |
| `cacheRuleId` | number | Oui |
| `cacheType` | options | — |
| `Force Cache` | — | — |
| `No Cache` | — | — |
| `fileMatch` | string | — |
| `fileType` | options | — |
| `Extension` | — | — |
| `File` | — | — |
| `Folder` | — | — |
| `ttl` | number | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

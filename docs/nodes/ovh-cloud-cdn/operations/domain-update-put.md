# OVH Cloud Cdn — Update Domain

> Opération `domainUpdatePut` · Fichier source : `nodes/OvhCloudCdn/resources/domains/domainUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cdn/dedicated/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `domain` | string | Oui |
| `cacheRuleUse` | number | — |
| `cname` | string | — |
| `status` | options | — |
| `Error` | — | — |
| `Off` | — | — |
| `On` | — | — |
| `Removing` | — | — |
| `type` | options | — |
| `Plain` | — | — |
| `SSL` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

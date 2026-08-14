# OVH Cloud Hosting — Purge CDN Cache

> Opération `attachedDomainPurgeCacheCreate` · Fichier source : `nodes/OvhCloudHosting/attachedDomainPurgeCacheCreate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/hosting/web/{serviceName}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `domainName` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

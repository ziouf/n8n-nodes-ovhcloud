# OVH Cloud Public Cloud — clickhouseNodeUpdatePut

> Opération `clickhouseNodeUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/clickhouse/nodeUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{clusterId}{nodeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `nodeId` | string | Oui |
| `clusterId` | string | Oui |
| `flavor` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

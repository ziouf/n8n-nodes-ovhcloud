# OVH Cloud Public Cloud — clickhouseNodeGetGet

> Opération `clickhouseNodeGetGet` · Fichier source : `nodes/OvhCloudPublicCloud/database/clickhouse/nodeGetGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{serviceName}{clusterId}{nodeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `nodeId` | string | Oui |
| `clusterId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

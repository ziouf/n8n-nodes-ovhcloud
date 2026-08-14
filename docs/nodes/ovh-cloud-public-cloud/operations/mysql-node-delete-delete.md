# OVH Cloud Public Cloud — mysqlNodeDeleteDelete

> Opération `mysqlNodeDeleteDelete` · Fichier source : `nodes/OvhCloudPublicCloud/database/mysql/nodeDeleteDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/cloud/project/{serviceName}{clusterId}{nodeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `nodeId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

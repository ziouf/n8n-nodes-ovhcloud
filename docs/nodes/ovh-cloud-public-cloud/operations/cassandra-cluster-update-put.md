# OVH Cloud Public Cloud — cassandraClusterUpdatePut

> Opération `cassandraClusterUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/cassandra/clusterUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `description` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

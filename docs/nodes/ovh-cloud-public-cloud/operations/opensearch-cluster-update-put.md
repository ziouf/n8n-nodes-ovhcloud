# OVH Cloud Public Cloud — opensearchClusterUpdatePut

> Opération `opensearchClusterUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/opensearch/ClusterUpdatePut.operation.ts`

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
| `body` | collection | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

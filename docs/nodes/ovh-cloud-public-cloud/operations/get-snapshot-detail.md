# OVH Cloud Public Cloud — Get Snapshot Details

> Opération `getSnapshotDetail` · Fichier source : `nodes/OvhCloudPublicCloud/blockstorage/snapshotGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/publicCloud/project/{projectId}{snapshotId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `snapshotId` | resourceLocator | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

# OVH Cloud Public Cloud — Update Snapshot

> Opération `updateSnapshotPut` · Fichier source : `nodes/OvhCloudPublicCloud/blockstorage/snapshotUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/publicCloud/project/{projectId}{snapshotId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `snapshotId` | resourceLocator | Oui |
| `checksum` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

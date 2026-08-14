# OVH Cloud Public Cloud — M3dbNamespaceCreatePost

> Opération `M3dbNamespaceCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/database/m3db/M3dbNamespaceCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `resolution` | string | Oui |
| `type` | string | Oui |
| `snapshotEnabled` | boolean | — |
| `writesToCommitLogEnabled` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

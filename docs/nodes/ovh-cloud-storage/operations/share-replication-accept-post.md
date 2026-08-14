# OVH Cloud Storage — Accept Share Replication

> Opération `shareReplicationAcceptPost` · Fichier source : `nodes/OvhCloudStorage/shareReplication/shareReplicationAcceptPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/storage/netapp/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `shareReplicationId` | string | Oui |
| `description` | string | — |
| `mountPointName` | string | — |
| `name` | string | — |
| `protocol` | options | Oui |
| `NFS` | — | — |
| `size` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

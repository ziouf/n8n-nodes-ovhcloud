# OVH Cloud Storage — Create Snapshot

> Opération `snapshotCreatePost` · Fichier source : `nodes/OvhCloudStorage/share/snapshot/snapshotCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/storage/netapp/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `shareId` | string | Oui |
| `description` | string | — |
| `name` | string | — |
| `type` | options | — |
| `Automatic` | — | — |
| `Manual` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

# OVH Cloud Storage — Create Share

> Opération `shareCreatePost` · Fichier source : `nodes/OvhCloudStorage/share/shareCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/storage/netapp/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `accessMode` | options | — |
| `Ro` | — | — |
| `Rw` | — | — |
| `description` | string | — |
| `mountPointName` | string | — |
| `name` | string | — |
| `protocol` | options | Oui |
| `NFS` | — | — |
| `size` | number | Oui |
| `snapshotID` | string | — |
| `status` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

# OVH Cloud Storage — Create ACL

> Opération `aclCreatePost` · Fichier source : `nodes/OvhCloudStorage/share/acl/aclCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/storage/netapp/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `shareId` | string | Oui |
| `accessLevel` | options | Oui |
| `Ro` | — | — |
| `Rw` | — | — |
| `accessTo` | string | Oui |
| `accessType` | options | — |
| `Ip` | — | — |
| `status` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

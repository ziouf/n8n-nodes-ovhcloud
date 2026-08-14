# OVH Cloud Public Cloud — aclCreatePost

> Opération `aclCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/acl/createPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `accountId` | string | Oui |
| `type` | options | Oui |
| `READ` | — | — |
| `WRITE` | — | — |
| `ADMIN` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

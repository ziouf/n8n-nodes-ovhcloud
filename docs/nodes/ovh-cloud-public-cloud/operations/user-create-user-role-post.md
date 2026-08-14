# OVH Cloud Public Cloud — userCreateUserRolePost

> Opération `userCreateUserRolePost` · Fichier source : `nodes/OvhCloudPublicCloud/user/createUserRolePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}{userId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `userId` | string | Oui |
| `roleId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

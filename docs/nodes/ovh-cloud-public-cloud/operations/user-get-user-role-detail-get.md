# OVH Cloud Public Cloud — userGetUserRoleDetailGet

> Opération `userGetUserRoleDetailGet` · Fichier source : `nodes/OvhCloudPublicCloud/user/getUserRoleDetailGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{serviceName}{userId}{roleId}` |

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

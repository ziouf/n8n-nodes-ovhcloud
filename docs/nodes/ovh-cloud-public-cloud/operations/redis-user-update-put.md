# OVH Cloud Public Cloud — redisUserUpdatePut

> Opération `redisUserUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/redis/userUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{clusterId}{userId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `userId` | string | Oui |
| `categories` | string | — |
| `channels` | string | — |
| `commands` | string | — |
| `keys` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

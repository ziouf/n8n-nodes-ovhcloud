# OVH Cloud Public Cloud — clickhouseUserUpdatePut

> Opération `clickhouseUserUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/clickhouse/userUpdatePut.operation.ts`

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
| `userId` | string | Oui |
| `clusterId` | string | Oui |
| `roles` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

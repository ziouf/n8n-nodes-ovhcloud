# OVH Cloud Public Cloud — mongodbUserUpdatePut

> Opération `mongodbUserUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/mongodb/userUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{clusterId}{userId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `clusterId` | string | Oui |
| `userId` | string | Oui |
| `password` | string | — |
| `roles` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

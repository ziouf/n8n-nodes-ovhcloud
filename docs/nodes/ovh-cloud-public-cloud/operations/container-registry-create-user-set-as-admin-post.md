# OVH Cloud Public Cloud — containerRegistryCreateUserSetAsAdminPost

> Opération `containerRegistryCreateUserSetAsAdminPost` · Fichier source : `nodes/OvhCloudPublicCloud/containerRegistry/createUserSetAsAdminPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/publicCloud/project/{projectId}{registryId}{userId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `registryId` | string | Oui |
| `userId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

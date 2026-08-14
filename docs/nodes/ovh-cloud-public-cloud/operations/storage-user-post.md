# OVH Cloud Public Cloud — Create OpenStack User

> Opération `storageUserPost` · Fichier source : `nodes/OvhCloudPublicCloud/storage/userPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{projectId}{containerId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `containerId` | string | Oui |
| `right` | options | Oui |
| `Read Only` | — | — |
| `Write Only` | — | — |
| `Read and Write` | — | — |
| `description` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

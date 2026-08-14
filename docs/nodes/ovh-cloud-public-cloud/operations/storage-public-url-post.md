# OVH Cloud Public Cloud — Get Public URL

> Opération `storagePublicUrlPost` · Fichier source : `nodes/OvhCloudPublicCloud/storage/publicUrlPost.operation.ts`

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
| `objectName` | string | Oui |
| `expirationDate` | dateTime | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

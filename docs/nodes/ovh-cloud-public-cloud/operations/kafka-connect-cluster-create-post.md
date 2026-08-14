# OVH Cloud Public Cloud — kafkaConnectClusterCreatePost

> Opération `kafkaConnectClusterCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaConnect/clusterCreatePost.operation.ts`

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
| `description` | string | Oui |
| `plan` | string | Oui |
| `version` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

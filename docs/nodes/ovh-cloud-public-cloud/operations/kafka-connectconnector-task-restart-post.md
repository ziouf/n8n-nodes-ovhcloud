# OVH Cloud Public Cloud — kafkaConnectconnectorTaskRestartPost

> Opération `kafkaConnectconnectorTaskRestartPost` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaConnect/connectorTaskRestartPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}{clusterId}{connectorId}{taskId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `connectorId` | string | Oui |
| `taskId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

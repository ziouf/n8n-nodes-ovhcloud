# OVH Cloud Public Cloud — kafkaConnectconnectorTaskGet

> Opération `kafkaConnectconnectorTaskGet` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaConnect/connectorTaskGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{serviceName}{clusterId}{connectorId}{taskId}` |

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

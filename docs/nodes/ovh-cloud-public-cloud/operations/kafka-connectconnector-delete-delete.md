# OVH Cloud Public Cloud — kafkaConnectconnectorDeleteDelete

> Opération `kafkaConnectconnectorDeleteDelete` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaConnect/connectorDeleteDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/cloud/project/{serviceName}{clusterId}{connectorId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `connectorId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

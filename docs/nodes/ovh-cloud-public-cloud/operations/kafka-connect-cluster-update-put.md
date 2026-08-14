# OVH Cloud Public Cloud — kafkaConnectClusterUpdatePut

> Opération `kafkaConnectClusterUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaConnect/clusterUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{clusterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `description` | string | Oui |
| `plan` | string | Oui |
| `version` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

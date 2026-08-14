# OVH Cloud Public Cloud — kafkaMirrorMakerMetricNameGet

> Opération `kafkaMirrorMakerMetricNameGet` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaMirrorMaker/metricNameGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{publicCloudProjectId}{clusterId}{metricName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `clusterId` | string | Oui |
| `metricName` | string | Oui |
| `period` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

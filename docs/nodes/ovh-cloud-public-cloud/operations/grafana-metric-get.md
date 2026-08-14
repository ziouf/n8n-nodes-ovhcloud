# OVH Cloud Public Cloud — grafanaMetricGet

> Opération `grafanaMetricGet` · Fichier source : `nodes/OvhCloudPublicCloud/database/grafana/metricGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{serviceName}{clusterId}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `metricName` | string | Oui |
| `period` | options | Oui |
| `Last Day` | — | — |
| `Last Hour` | — | — |
| `Last Month` | — | — |
| `Last Week` | — | — |
| `Last Year` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

# OVH Cloud Dedicated — Monitoring Metric Get

> Opération `monitoringMetricGetGet` · Fichier source : `nodes/OvhCloudDedicated/resources/monitoring/monitoringMetricGetGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dedicated/server/{serviceName}{metric}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `metric` | options | Oui |
| `CPU` | — | — |
| `Disk` | — | — |
| `Load` | — | — |
| `Memory` | — | — |
| `Network` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

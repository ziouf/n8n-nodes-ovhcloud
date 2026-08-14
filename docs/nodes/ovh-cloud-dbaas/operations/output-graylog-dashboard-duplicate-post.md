# OVH Cloud Dbaas — Duplicate Graylog Dashboard

> Opération `outputGraylogDashboardDuplicatePost` · Fichier source : `nodes/OvhCloudDbaas/outputGraylogDashboard/outputGraylogDashboardDuplicatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dbaas/logs/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `dashboardId` | string | Oui |
| `body` | json | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

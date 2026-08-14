# OVH Cloud Hosting — cdnDomainStatistics

> Opération `cdnDomainStatistics` · Fichier source : `nodes/OvhCloudHosting/cdn/cdnDomainStatisticsGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/hosting/web/{serviceName}{domain}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `domain` | string | Oui |
| `period` | options | — |
| `Day` | — | — |
| `Week` | — | — |
| `Month` | — | — |
| `Year` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

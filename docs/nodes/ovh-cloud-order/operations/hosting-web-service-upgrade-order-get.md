# OVH Cloud Order — Get Hosting Web

> Opération `hostingWebServiceUpgradeOrderGet` · Fichier source : `nodes/OvhCloudOrder/hosting/hostingWebServiceUpgradeOrderGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/order/hosting/web/{serviceName}{duration}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `duration` | string | Oui |
| `offer` | options | Oui |
| `startTime` | string | — |
| `waiveRetractationPeriod` | boolean | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

# OVH Cloud Order — Create Hosting Web

> Opération `hostingWebServiceUpgradeOrderCreatePost` · Fichier source : `nodes/OvhCloudOrder/hosting/hostingWebServiceUpgradeOrderCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/hosting/web/{serviceName}{duration}` |

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

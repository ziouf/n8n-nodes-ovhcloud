# OVH Cloud Services — Simulate Savings Plan Subscription

> Opération `savingsPlansSubscribeSimulatePost` · Fichier source : `nodes/OvhCloudServices/resources/savingsPlans/savingsPlansSubscribeSimulatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/services/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `displayName` | string | Oui |
| `offerId` | string | Oui |
| `size` | number | Oui |
| `startDate` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

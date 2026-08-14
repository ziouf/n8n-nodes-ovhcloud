# OVH Cloud Order — Upgrade IP Load Balancing (Plan)

> Opération `upgradeIPLoadBalancingPlanPOST` · Fichier source : `nodes/OvhCloudOrder/upgrade/upgradeiploadbalancingplanpost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/upgrade/ipLoadbalancing/{serviceName}/{planCode}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `planCode` | string | Oui |
| `serviceName` | string | Oui |
| `autoPayWithPreferredPaymentMethod` | boolean | — |
| `quantity` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

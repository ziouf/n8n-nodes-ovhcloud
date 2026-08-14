# OVH Cloud Order — Upgrade Logs (Plan)

> Opération `upgradeLogsPlanPOST` · Fichier source : `nodes/OvhCloudOrder/upgrade/upgradelogsplanpost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/upgrade/logs/{serviceName}/{planCode}` |

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

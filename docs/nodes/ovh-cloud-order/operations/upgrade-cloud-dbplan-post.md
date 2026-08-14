# OVH Cloud Order — Upgrade Cloud DB (Plan)

> Opération `upgradeCloudDBPlanPOST` · Fichier source : `nodes/OvhCloudOrder/upgrade/upgradeclouddbplanpost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/upgrade/cloudDB/{domain}/{planCode}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `planCode` | string | Oui |
| `domain` | string | Oui |
| `autoPayWithPreferredPaymentMethod` | boolean | — |
| `quantity` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

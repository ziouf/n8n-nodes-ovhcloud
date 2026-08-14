# OVH Cloud Order — Upgrade Private SQL (Plan)

> Opération `upgradePrivateSQLPlanPOST` · Fichier source : `nodes/OvhCloudOrder/upgrade/upgradeprivatesqlplanpost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/upgrade/privateSQL/{domain}/{planCode}` |

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

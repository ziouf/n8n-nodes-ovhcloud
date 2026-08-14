# OVH Cloud Order — Create Private S Q L

> Opération `cartPrivateSQLPOST` · Fichier source : `nodes/OvhCloudOrder/cart/privateSQL/cartPrivateSQLPOST.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/cart/{cartId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `cartId` | string | Oui |
| `duration` | string | Oui |
| `planCode` | string | Oui |
| `pricingMode` | string | Oui |
| `quantity` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

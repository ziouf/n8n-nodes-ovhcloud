# OVH Cloud Order — Add Office365 Prepaid Option to Cart

> Opération `cartOffice365PrepaidOptionsPOST` · Fichier source : `nodes/OvhCloudOrder/cart/office365Prepaid/cartOffice365PrepaidOptionsPOST.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/cart/{cartId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `cartId` | string | Oui |
| `duration` | string | Oui |
| `itemId` | number | Oui |
| `planCode` | string | Oui |
| `pricingMode` | string | Oui |
| `quantity` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

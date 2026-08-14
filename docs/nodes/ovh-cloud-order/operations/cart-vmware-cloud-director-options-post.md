# OVH Cloud Order — Add Vmware Cloud Director Option to Cart

> Opération `cartVmwareCloudDirectorOptionsPOST` · Fichier source : `nodes/OvhCloudOrder/cart/vmwareCloudDirector/cartVmwareCloudDirectorOptionsPOST.operation.ts`

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

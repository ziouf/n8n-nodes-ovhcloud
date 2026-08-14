# OVH Cloud Order — Add Private Cloud Reseller Cart Service Option (Service)

> Opération `cartServiceOptionPrivateCloudResellerServicePOST` · Fichier source : `nodes/OvhCloudOrder/cart/cartServiceOption/cartserviceoptionprivatecloudresellerservicepost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/cartServiceOption/privateCloudReseller/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `cartId` | string | Oui |
| `duration` | string | Oui |
| `planCode` | string | Oui |
| `pricingMode` | string | Oui |
| `quantity` | number | Oui |
| `serviceName` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

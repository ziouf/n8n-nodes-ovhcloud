# OVH Cloud Order — Add Web Hosting Cart Service Option (Service)

> Opération `cartServiceOptionWebHostingServicePOST` · Fichier source : `nodes/OvhCloudOrder/cart/cartServiceOption/cartserviceoptionwebhostingservicepost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/cartServiceOption/webHosting/{serviceName}` |

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

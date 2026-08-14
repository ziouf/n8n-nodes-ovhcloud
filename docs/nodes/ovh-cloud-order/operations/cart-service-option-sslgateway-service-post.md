# OVH Cloud Order — Add SSL Gateway Cart Service Option (Service)

> Opération `cartServiceOptionSSLGatewayServicePOST` · Fichier source : `nodes/OvhCloudOrder/cart/cartServiceOption/cartserviceoptionsslgatewayservicepost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/cartServiceOption/sslGateway/{serviceName}` |

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

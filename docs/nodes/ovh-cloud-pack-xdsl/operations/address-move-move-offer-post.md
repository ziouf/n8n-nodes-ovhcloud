# OVH Cloud Pack Xdsl — Move Access To Another Address

> Opération `addressMoveMoveOfferPost` · Fichier source : `nodes/OvhCloudPackXdsl/resources/addressMove/moveOfferPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/pack/xdsl/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `packName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `acceptContracts` | boolean | — |
| `eligibilityReference` | string | Oui |
| `keepCurrentNumber` | boolean | — |
| `modem` | options | Oui |
| `offerName` | string | Oui |
| `otp` | boolean | — |
| `productCode` | string | Oui |
| `building` | string | — |
| `buildingReference` | string | — |
| `contactPhone` | string | — |
| `door` | string | — |
| `engageMonths` | number | — |
| `floor` | string | — |
| `installationType` | options | — |
| `mondialRelayId` | number | — |
| `moveOutDate` | dateTime | — |
| `nicShipping` | string | — |
| `ontShippingContact` | string | — |
| `options` | string | — |
| `otpReference` | string | — |
| `residence` | string | — |
| `stair` | string | — |
| `subServicesToDelete` | string | — |
| `subServicesToKeep` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

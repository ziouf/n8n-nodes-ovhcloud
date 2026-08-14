# OVH Cloud Pack Xdsl — Migrate To Offer

> Opération `migrationMigratePost` · Fichier source : `nodes/OvhCloudPackXdsl/resources/migration/migratePost.operation.ts`

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
| `modem` | options | Oui |
| `offerName` | string | Oui |
| `buildingReference` | string | — |
| `contactPhone` | string | — |
| `engageMonths` | number | — |
| `floor` | string | — |
| `installationType` | options | — |
| `mondialRelayId` | number | — |
| `nicShipping` | string | — |
| `ontShippingContact` | string | — |
| `options` | string | — |
| `otp` | boolean | — |
| `otpReference` | string | — |
| `productCode` | string | — |
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

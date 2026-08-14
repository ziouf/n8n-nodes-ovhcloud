# OVH Cloud Order — License Windows Service Upgrade Duration Get (Service)

> Opération `licensewindowsServiceUpgradeDurationGet` · Fichier source : `nodes/OvhCloudOrder/license/windows/windowsServiceUpgradeDurationGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/order/license/{family}{serviceName}{duration}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `family` | options | Oui |
| `cPanel` | — | — |
| `Office` | — | — |
| `Plesk` | — | — |
| `Sqlserver` | — | — |
| `Windows` | — | — |
| `serviceName` | string | Oui |
| `duration` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

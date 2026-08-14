# OVH Cloud Order — License Plesk Service Upgrade Duration Get (Service)

> Opération `licensepleskServiceUpgradeDurationGet` · Fichier source : `nodes/OvhCloudOrder/license/plesk/pleskServiceUpgradeDurationGet.operation.ts`

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

# OVH Cloud Order — License cPanel Service Upgrade Create (Service)

> Opération `licensecPanelServiceUpgradeCreatePost` · Fichier source : `nodes/OvhCloudOrder/license/cPanel/cPanelServiceUpgradeCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/order/license/{family}{serviceName}{duration}` |

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
| `body` | json | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

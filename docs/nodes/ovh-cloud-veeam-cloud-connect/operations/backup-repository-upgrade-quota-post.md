# OVH Cloud Veeam Cloud Connect — Upgrade Backup Repository Quota

> Opération `backupRepositoryUpgradeQuotaPost` · Fichier source : `nodes/OvhCloudVeeamCloudConnect/resources/backupRepositoryUpgradeQuotaPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/veeamCloudConnect/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `inventoryName` | string | Oui |
| `newQuota` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

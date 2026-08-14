# OVH Cloud Dedicated Cloud — Update Backup Option

> Opération `datacenterBackupChangeProperties` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/backup/datacenterBackupChangeProperties.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `backupDurationInReport` | boolean | — |
| `backupOffer` | options | Oui |
| `Advanced` | — | — |
| `Backup` | — | — |
| `Classic` | — | — |
| `Legacy` | — | — |
| `Premium` | — | — |
| `backupSizeInReport` | boolean | — |
| `diskSizeInReport` | boolean | — |
| `fullDayInReport` | boolean | — |
| `mailAddress` | string | — |
| `restorePointInReport` | boolean | — |
| `scheduleHour` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

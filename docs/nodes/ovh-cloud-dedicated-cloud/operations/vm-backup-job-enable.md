# OVH Cloud Dedicated Cloud — Enable Backup Job

> Opération `vmBackupJobEnable` · Fichier source : `nodes/OvhCloudDedicatedCloud/vm/vmBackupJobEnable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{vmId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `vmId` | number | Oui |
| `backupDays` | multiOptions | Oui |
| `Friday` | — | — |
| `Monday` | — | — |
| `Saturday` | — | — |
| `Sunday` | — | — |
| `Thursday` | — | — |
| `Tuesday` | — | — |
| `Wednesday` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

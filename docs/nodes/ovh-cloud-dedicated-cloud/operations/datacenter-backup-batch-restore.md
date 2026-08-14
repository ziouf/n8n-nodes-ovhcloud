# OVH Cloud Dedicated Cloud — Restore Backup Jobs in Batch

> Opération `datacenterBackupBatchRestore` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/backup/datacenterBackupBatchRestore.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `backupJobName` | string | — |
| `backupRepositoryName` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

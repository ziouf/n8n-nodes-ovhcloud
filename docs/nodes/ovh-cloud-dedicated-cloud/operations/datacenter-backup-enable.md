# OVH Cloud Dedicated Cloud — Enable Backup Option

> Opération `datacenterBackupEnable` · Fichier source : `nodes/OvhCloudDedicatedCloud/datacenter/backup/datacenterBackupEnable.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `backupOffer` | options | — |
| `Advanced` | — | — |
| `Backup` | — | — |
| `Classic` | — | — |
| `Legacy` | — | — |
| `Premium` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)

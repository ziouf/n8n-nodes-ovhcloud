# OVH Cloud Dedicated Cloud — Restore Backup

> Opération `vmRestoreBackup` · Fichier source : `nodes/OvhCloudDedicatedCloud/vm/vmRestoreBackup.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/dedicatedCloud/{serviceName}{datacenterId}{vmId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `datacenterId` | number | Oui |
| `vmId` | number | Oui |
| `filerId` | number | Oui |
| `filerType` | options | — |
| `Nas` | — | — |
| `Vsan` | — | — |
| `restorePointId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
